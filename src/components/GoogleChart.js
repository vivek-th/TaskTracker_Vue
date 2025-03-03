import { defineComponent, h, computed } from 'vue';
import { useStore } from 'vuex';
import { GChart } from 'vue-google-charts';

export const type = 'PieChart';

export const options = {
  title: 'Task Progress',
  pieHole: 0.4,
  width: 800,
  height: 600,
};

export default defineComponent({
  name: 'GoogleChart',
  components: {
    GChart,
  },
  setup() {
    const store = useStore();

    // Dynamically compute the task data from the Vuex store
    const taskData = computed(() => {
      const tasks = store.state.tasks;

      // Convert tasks to a format suitable for the chart
      const chartData = [['Task', 'Count']];
      const taskCounts = tasks.reduce((acc, task) => {
        acc[task.status] = (acc[task.status] || 0) + 1;
        return acc;
      }, {});

      // Add task data to the chartData array
      for (const [status, count] of Object.entries(taskCounts)) {
        chartData.push([status, count]);
      }

      return chartData.length > 1 ? chartData : [['Task', 'Count'], ['No Tasks', 1]]; // Default data if no tasks
    });

    return () =>
      h(GChart, {
        data: taskData.value,
        options,
        type,
      });
  },
});
