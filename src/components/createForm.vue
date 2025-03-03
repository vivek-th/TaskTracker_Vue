<template>
    <div class="form-container">
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="taskName">Task Name:</label>
          <input
            type="text"
            id="taskName"
            v-model="taskName"
            required
          />
        </div>
         
        <div class="form-group">
          <label for="assignedTo">Assigned To:</label>
          <input
            type="text"
            id="assignedTo"
            v-model="assignedTo"
            required
          />
        </div>
  
        <div class="form-group">
          <label for="dueDate">Due Date:</label>
          <input
            type="date"
            id="dueDate"
            v-model="dueDate"
            required
          />
        </div>
  
        <div class="form-group">
          <label for="status">Status:</label>
          <select
            id="status"
            v-model="status"
            required
          >
            <option value="new">New</option>
            <option value="accepted">Accepted</option>
            <option value="progress">Progress</option>
            <option value="hold">Hold</option>
            <option value="reject">Reject</option>
          </select>
        </div>
  
        <div class="form-group">
          <label for="description">Description:</label>
          <textarea
            id="description"
            v-model="description"
            required
          ></textarea>
        </div>
  
        <button type="submit">Submit Task</button>
      </form>
    </div>
  </template>
  
  <script>
  import { mapState, mapActions } from 'vuex';
  
  export default {
    data() {
      return {
        taskName: '',
        assignedTo: '',
        dueDate: '',
        status: 'new',
        description: ''
      };
    },
    computed: {
      ...mapState({
        tasks: (state) => state.tasks
      })
    },
    methods: {
      ...mapActions(['submitTask']),
      handleSubmit() {
        const taskData = {
          taskName: this.taskName,
          assignedTo: this.assignedTo,
          dueDate: this.dueDate,
          status: this.status,
          description: this.description
        };
  
        this.submitTask(taskData);
  
        this.taskName = '';
        this.assignedTo = '';
        this.dueDate = '';
        this.status = 'new';
        this.description = '';
      }
    }
  };
  </script>
  
  <style scoped>
  .form-container {
    margin: 20px;
    padding: 10px;
    background-color: #ffffff;
  }
  
  .form-group {
    margin-bottom: 10px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input,
  textarea,
  select {
    width: 100%;
    padding: 5px;
    margin-bottom: 10px;
  }
  
  button {
    padding: 5px 10px;
    background-color: #0077ff;
    color: white;
    border: none;
  }
  </style>
   