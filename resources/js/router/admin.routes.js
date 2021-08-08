export default [
  {
    path: '/admin/boycotted-products',
    name: 'boycotted-products',
    component: () => import(/* webpackChunkName:  "boycotted-products" */ '@/pages/admin/BoycottedProducts.vue'),
    meta: {
      auth: true
    }
  },
  {
    path: '/admin/alternative-products',
    name: 'alternative-products',
    component: () => import(/* webpackChunkName:  "boycotted-products" */ '@/pages/admin/AlternativeProducts.vue'),
    meta: {
      auth: true
    }
  },
  {
    path: '/admin/categories',
    name: 'categories',
    component: () => import(/* webpackChunkName:  "boycotted-products" */ '@/pages/admin/Categories.vue'),
    meta: {
      auth: true
    }
  },
  {
    path: '/admin/groups',
    name: 'groups',
    component: () => import(/* webpackChunkName:  "boycotted-products" */ '@/pages/admin/Groups.vue'),
    meta: {
      auth: true
    }
  }
];
