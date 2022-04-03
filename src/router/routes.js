
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
    
     { path: '/allocation', component: () => import('pages/Allocation.vue')},
     { path: '/assessment', component: () => import('pages/Assessment.vue')},
     { path: '/broadsheet', component: () => import('pages/Broadsheet.vue')},
     { path: '/classteacher', component: () => import('pages/Classteacher.vue')},
     { path: '/generatecard', component: () => import('pages/Generatecard.vue')},
     { path: '/merge', component: () => import('pages/Merges.vue')},
     { path: '/opening', component: () => import('pages/Opening.vue')},
     { path: '/result', component: () => import('pages/Result.vue')},
     { path: '/resumption', component: () => import('pages/Resumption.vue')},
     { path: '/schoolopen', component: () => import('pages/Schoolopen.vue')},
     { path: '/score', component: () => import('pages/Score.vue')},
     { path: '/session', component: () => import('pages/Session.vue')},
     { path: '/subject', component: () => import('pages/Subject.vue')},
     { path: '/users', component: () => import('pages/Users.vue')},
     { path: '/viewcard', component: () => import('pages/Viewcard.vue')},
     { path: '/notification', component: () => import('pages/Notification.vue')},
     { path: '/scoredetail', component: () => import('pages/Scoredetail.vue')},
     { path: '/register', component: () => import('pages/Register.vue')},
     { path: '/class', component: () => import('pages/Class.vue')},
     { path: '/alert', component: () => import('pages/Alert.vue')},
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
