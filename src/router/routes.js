import UseHome from '@/components/UseHome.vue';
import UseAbout from '@/Pages/About/UseAbout.vue';
import UseDifferent from '@/Pages/Different/UseDifferent.vue';

export const routes = [
  {
    path: '/',
    component: UseHome
  },
  {
    path: '/About',
    component: UseAbout
  },
  {
    path: '/Different',
    component: UseDifferent
  }
];
