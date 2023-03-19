import { createRouter, createWebHashHistory } from 'vue-router';
import RaceCard from '@/components/RaceCard.vue';
import FormRace from '@/views/FormPage.vue';
import Error from '@/views/ErrorPage.vue';
import SeatPage from '@/views/SeatPage.vue';
import AuthorizationPage from '@/views/AuthorizationPage.vue';
import PersonalAccount from '@/views/PersonalAccount.vue';

const routes = [
  {
    path: '/',
    name: 'Form',
    component: FormRace,
  },
  {
    path: '/account',
    name: 'Account',
    component: PersonalAccount,
  },
  {
    path: '/404', name: 'NotFound', component: Error,
  },
  {
    path: '/:catchAll(.*)', redirect: '404',
  },
  {
    path: '/seat',
    name: 'seat',
    component: SeatPage,
  },
  {
    path: '/card',
    name: 'race',
    component: RaceCard,
  },
  {
    path: '/log',
    name: 'log',
    component: AuthorizationPage,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
