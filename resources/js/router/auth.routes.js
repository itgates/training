export default [
  {
    path: '/auth/signin',
    name: 'auth-signin',
    component: () => import(/* webpackChunkName: "auth-signin" */ '@/pages/auth/SigninPage.vue'),
    meta: {
      layout: 'auth',
      guest: true
    }
  }, {
    path: '/auth/verify-email',
    name: 'auth-verify-email',
    component: () => import(/* webpackChunkName: "auth-verify-email" */ '@/pages/auth/VerifyEmailPage.vue'),
    meta: {
      layout: 'auth'
    }
  }, {
    path: '/auth/forgot-password',
    name: 'auth-forgot',
    component: () => import(/* webpackChunkName: "auth-forgot" */ '@/pages/auth/ForgotPage.vue'),
    meta: {
      layout: 'auth',
      guest: true
    }
  }, {
    path: '/auth/reset-password',
    name: 'auth-reset',
    component: () => import(/* webpackChunkName: "auth-reset" */ '@/pages/auth/ResetPage.vue'),
    meta: {
      layout: 'auth',
      auth: true
    }
  }
];
