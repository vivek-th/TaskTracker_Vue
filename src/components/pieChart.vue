<template>
  <GoogleChart />
  <router-link to="/dashboard">Go to dashboard</router-link>
</template>

<script>
import GoogleChart from './GoogleChart';
export default {
  name: 'App',
  components: {
    GoogleChart,
  },
};
</script>
