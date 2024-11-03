import UseHome from '@/components/UseHome.vue';
import UseAbout from '@/Pages/About/UseAbout.vue';
import UseProfile from '@/Pages/Profile/UseProfile.vue';

export const routeUrl = [
  {
    path: '/'
  },
  {
    path: '/About'
  },
  {
    path: '/Profile'
  }
];

export const routes = [
  {
    path: `${routeUrl[0].path}`,
    component: UseHome
  },
  {
    path: `${routeUrl[1].path}`,
    component: UseAbout
  },
  {
    path: `${routeUrl[2].path}`,
    component: UseProfile
  }
];
