import { createStore } from "vuex";

const store = createStore({
  state: {
    tasks: [],
    isLogged:false
  },
  mutations: {
    addTask(state, newTask) {
      state.tasks.push(newTask);
    },
  },  
  actions: {
    submitTask({ commit }, taskData) {
      commit("addTask", taskData);
      console.log("New Task Submitted:", taskData);
    },
  },
  // getters: {
  //   getTasks: (state) => state.tasks, 
  // },
});

export default store;
