<template>
    <div class="login-container">
      <h2>Login</h2>
      <form @submit.prevent="handleLogin">
        <div>
          <label for="username">Username:</label>
          <input
            type="text"
            id="username"
            v-model="username"
            required
          />
        </div>
        <div>
          <label for="password">Password:</label>
          <input
            type="password"
            id="password"
            v-model="password"
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p v-if="loginError" class="error">Invalid credentials. Please try again.</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: 'vivek',
        password: '123',
        loginError: false
      };
    },
    methods: {
      handleLogin() {
        if (this.username === "vivek" && this.password === "123") {
          this.$router.push('/dashboard');
          this.$store.state.isLogged = true;
        } else {
          this.loginError = true;
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .login-container {
    width: 320px;
    margin: 80px auto;
    padding: 20px;
    border-radius: 8px;
    background-color: #ffffff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  body {
    background-color: #f0f4f8;
  }
  
  h2 {
    color: #333;
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 8px;
    color: #555;
    font-size: 14px;
    text-align: left;
  }
  
  input {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 14px;
  }
  
  input:focus {
    outline: none;
    border-color: #0077ff;
  }
  
  button {
    width: 100%;
    padding: 10px;
    background-color: #0077ff;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    font-size: 15px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #005bb5; 
  }
  
  .error {
    color: #d93025;
    margin-top: 10px;
    font-size: 14px;
  }
  </style>
  