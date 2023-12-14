export default [
  {
    path: '/pinia/as-function',
    name: 'pinia-as-function',
    children: [
      {
        path: 'home',
        component: () => import('@/views/pinia/as-function/HomePage.vue'),
      },
      {
        path: '2nd',
        component: () => import('@/views/pinia/as-function/SecondPage.vue'),
      },
      {
        path: '3rd',
        component: () => import('@/views/pinia/as-function/ThirdPage.vue')
      }
    ],
  },
  {
    path: '/pinia/as-class',
    name: 'pinia-as-class',
    children: [
      {
        path: 'home',
        component: () => import('@/views/pinia/as-class/HomePage.vue'),
      },
      {
        path: '2nd',
        component: () => import('@/views/pinia/as-class/SecondPage.vue'),
      },
      {
        path: '3rd',
        component: () => import('@/views/pinia/as-class/ThirdPage.vue')
      }
    ],
  },
];