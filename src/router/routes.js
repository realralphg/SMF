
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Home.vue')
      },
      {
        path: '/about',
        component: () => import('pages/About.vue')
      },
      {
        path: '/donate',
        component: () => import('pages/Donate.vue')
      },
      {
        path: '/product',
        component: () => import('pages/Product.vue')
      },
      {
        path: '/contact',
        component: () => import('pages/Contact.vue')
      },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
