import UseHome from '@/components/UseHome.vue';
import UseAbout from '@/Pages/About/UseAbout.vue';
import UseProfile from '@/Pages/Profile/UseProfile.vue';

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
    component: UseProfile
  }
];
