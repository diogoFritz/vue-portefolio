import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import About from '../components/About.vue';
import RandomPictures from '../components/RandomPictures.vue';
import Form from '../components/Form.vue';
import Frame from '../components/PictureFrame.vue';
import Galery from '../components/Galery.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/random-pictures',
    name: 'RandomPictures',
    component: RandomPictures
  },
  {
    path: '/sign-up-form',
    name: 'Form',
    component: Form
  },
  {
    path: '/photo-gallery',
    name: 'Galery',
    component: Galery
  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;