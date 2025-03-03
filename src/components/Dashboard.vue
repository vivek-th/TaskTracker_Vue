<template>
    <div class="dashboard-container">
      <nav class="navigation">
        <div>
            <router-link to="/dashboard/createForm" class="nav-link">Create Task</router-link> 
        </div>
       <div>
        <router-link to="/dashboard/taskList" class="nav-link">Task List</router-link>
       
       </div>
       <div>
        <router-link to="/dashboard/pieChart" class="nav-link">chart</router-link>
       </div>
       
    </nav>
      <router-view />
    </div>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style scoped>
  .dashboard-container {
    padding: 20px;
    margin: 20px auto;
    max-width: 800px;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  body {
    background-color: #f0f4f8;
  }
  
  .navigation {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 20px;
  }
  
  .nav-link {
    padding: 10px 20px;
    text-decoration: none;
    color: #ffffff;
    background-color: #0077ff;
    border-radius: 5px;
    font-size: 15px;
  }
  
  .nav-link:hover {
    background-color: #005bb5;
  }
  </style>
  