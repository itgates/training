import Vue from 'vue'
import Router from 'vue-router'
import store from "../store";

// Routes
import AuthRoutes from './auth.routes'
import AdminRoutes from './admin.routes'
import ThreadRoutes from './thread.routes'
import TasksRoutes from './tasks.routes'

Vue.use(Router)

export const routes = [{
  path: '/',
  name: 'home',
  component: () => import(/* webpackChunkName: "landing" */ '@/pages/landing/HomePage.vue'),
  meta: {
    layout: 'landing'
  }
},
{
  path: '/dashboard/analytics',
  name: 'dashboard-analytics',
  component: () => import(/* webpackChunkName: "dashboard" */ '@/pages/dashboard/DashboardPage.vue')
},
...AuthRoutes,
...AdminRoutes,
...ThreadRoutes,
...TasksRoutes,
{
  path: '/blank',
  name: 'blank',
  component: () => import(/* webpackChunkName: "blank" */ '@/pages/BlankPage.vue')
},
{
  path: '*',
  name: 'error',
  component: () => import(/* webpackChunkName: "error" */ '@/pages/error/NotFoundPage.vue'),
  meta: {
    layout: 'error'
  }
}]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL || '/',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition

    return { x: 0, y: 0 }
  },
  routes
});

/**
 * Before each route update
 */
router.beforeEach((to, from, next) => {

  const  authenticated  = localStorage.getItem('authenticated');

  if (to.matched.some((record) => record.meta.guest)) {

    if (authenticated) {
      return next({
        name: 'dashboard-analytics'
      });
    } else {
      return next();
    }
  }

  if (to.matched.some((record) => record.meta.auth)) {
    if (!authenticated) {
      return next({
        name: 'auth-signin'
      });
    } else {
      return next();
    }
  }

  return next();
});

/**
 * After each route update
 */
router.afterEach((to, from) => {
});

export default router
