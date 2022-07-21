import { createRouter, createWebHistory } from 'vue-router';
import Places from '../views/Places.vue';
import PlaceDetails from '../views/PlaceDetails.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'Places',
    component: Places,
  },
  {
    path: '/details/:id',
    name: 'PlaceDetails',
    component: PlaceDetails,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
