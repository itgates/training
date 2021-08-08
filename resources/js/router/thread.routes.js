export default [
  {
    path: '/threads/1',
    name: 'thread-show',
    component: () => import(/* webpackChunkName: "thread-show" */ '@/pages/thread/Show.vue')
  }
]
