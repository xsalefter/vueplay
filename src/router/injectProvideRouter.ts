export default [
  {
    path: '/inject-provide/basic',
    name: 'basic',
    children: [
      {
        path: 'home',
        component: () => import('@/views/inject-provide/basic/HomePage.vue'),
      },
      {
        path: '2nd',
        component: () => import('@/views/inject-provide/basic/SecondPage.vue'),
      }
    ],
  },
  {
    path: '/inject-provide/plugin',
    name: 'plugin',
    children: [
      {
        path: 'home',
        component: () => import('@/views/inject-provide/plugin/HomePage.vue'),
      }
    ],
  }
];