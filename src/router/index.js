import Vue from 'vue';
import VueRouter from 'vue-router';
import TableUsers from '../components/TableUsers.vue';
import UserPage from '../components/UserPage.vue';

Vue.use(VueRouter);


const routes = [
  {
    path: '/',
    name: 'Home',
    component: TableUsers,
  },
  {
    path: '/user-page/:id',
    name: 'User-Page',
    component: UserPage,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
