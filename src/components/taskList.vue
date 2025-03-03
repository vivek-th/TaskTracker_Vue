<template>
  <div>
    <div>
      <label for="statusFilter">Filter by Status:</label>
      <select id="statusFilter" v-model="selectedStatus">
        <option value="">All</option>
        <option value="new">New</option>
        <option value="accepted">Accepted</option>
        <option value="progress">Progress</option>
        <option value="hold">Hold</option>
        <option value="reject">Reject</option>
      </select>
    </div>

    <table>
      <thead>
        <tr>
          <th>Task Name</th>
          <th>Assigned To</th>
          <th>Due Date</th>
          <th>Status</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(task, index) in filteredTasks"
          :key="index"
          :style="{
            backgroundColor: isPastDue(task.dueDate) ? 'red' : 'green',
            color: 'white',
          }"
        >
          <td>{{ task.taskName }}</td>
          <td>{{ task.assignedTo }}</td>
          <td>{{ task.dueDate }}</td>
          <td>{{ task.status }}</td>
          <td>{{ task.description }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
  
  <script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      selectedStatus: "",
    };
  },
  computed: {
    ...mapState({
      tasks: (state) => state.tasks,
    }),
    filteredTasks() {
      if (this.selectedStatus === "") {
        return this.tasks;
      }
      return this.tasks.filter((task) => task.status === this.selectedStatus);
    },
  },
  methods: {
    isPastDue(dueDate) {
      const currentDate = new Date();
      const taskDueDate = new Date(dueDate);
      return taskDueDate < currentDate;
    },
  },
};
</script>
  
  <style scoped>
label {
  margin-right: 10px;
}

select {
  padding: 5px;
}

table {
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;
}

th,
td {
  padding: 5px;
  text-align: left;
}

th {
  background-color: #ddd;
}
</style>
  