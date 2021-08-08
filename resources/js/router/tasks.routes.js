export default [
  {
    path: '/tasks',
    name: 'tasks',
    component: () => import(/* webpackChunkName: "tasks-list" */ '@/pages/tasks/Index.vue')
  },
  {
    path: '/tasks/:id',
    name: 'task-show',
    props: true,
    component: () => import(/* webpackChunkName: "task-show" */ '@/pages/tasks/Show.vue')
  }
];
