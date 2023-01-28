import Home from "@/pages/Home";
import About from "@/pages/About";
import Posts from "@/pages/Posts";
import Post from "@/pages/Post";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/posts",
    component: Posts,
  },
  {
    path: "/posts/:id",
    component: Post,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
