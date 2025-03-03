import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/components/Login.vue'
import Dashboard from '@/components/Dashboard.vue'
import TaskList from '@/components/taskList.vue'
import PieChart from '@/components/pieChart.vue'
import CreateForm from '@/components/createForm.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path:'/dashboard',
      name:'dashboard',
      component:Dashboard,
      children:[
        {path:'createForm', component:CreateForm},
        {path:'taskList', component:TaskList},
      ]
    },
  
    {
      path:'/dashboard/pieChart',
      name:'pieChart',
      component:PieChart
    }
  ],
})

export default router
