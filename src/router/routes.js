import UseHome from '@/components/UseHome.vue';
import UseAbout from '@/Pages/About/UseAbout.vue';
import UseWebSite from '@/Pages/Profile/UseWebSite.vue';

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
    path: '/Profile',
    component: UseWebSite
  }
];
