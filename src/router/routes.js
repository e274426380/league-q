
const routes = [
  {
    path: '/',
    component: () => import('pages/main/index.vue'),
  },
  {
    path: '/library',
    component: () => import('pages/library/index.vue'),
  },
  {
    path: '/dapps',
    component: () => import('pages/dapps/index.vue'),
  },
  {
    path: '/main',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
