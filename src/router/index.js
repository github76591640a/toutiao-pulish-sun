import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login')
  },
  {
    path: '/',
    component: () => import('@/views/layout'),
    children: [
      {
        path: '', // path为空为默认子路由,
        name: 'Home',
        component: () => import('@/views/home'),
        children: [
          {
            path: 'content',
            name: 'Content1',
            component: () => import('@/views/contentManage')
          },
          {
            path: 'images',
            name: 'Images1',
            component: () => import('@/views/images')
          }
        ]
      },
      {
        path: 'content',
        name: 'Content',
        component: () => import('@/views/contentManage')
      },
      {
        path: 'images',
        name: 'Images',
        component: () => import('@/views/images')
      },
      {
        path: 'postArticle',
        name: 'postArticle',
        component: () => import('@/views/postArticle')
      },
      {
        path: 'commentManage',
        name: 'commentManage',
        component: () => import('@/views/commentManage')
      },
      {
        path: 'fansManage',
        name: 'fansManage',
        component: () => import('@/views/fansManage')
      },
      {
        path: 'personalSettings',
        name: 'personalSettings',
        component: () => import('@/views/personalSettings')
      }

    ]
  }
]
// const route1 = [
//   {
//     path: '/login',
//     name: 'Login',
//     component: () => import('@/views/login')
//   },
//   {
//     path: '/',
//     component: () => import('@/views/layout'),
//     children: [
//       {
//         path: '', // path为空为默认子路由,
//         name: 'Home',
//         component: () => import('@/views/home')
//       },
//       {
//         path: 'content',
//         name: 'Content',
//         component: () => import('@/views/contentManage')
//       }
//     ]
//   }
// ]
const router = new VueRouter({
  routes
})

// router.beforeEach((to, from, next) => {
//   const user = localStorage.getItem('token')
//   if (to.path !== '/login') {
//     if (user) {
//       console.log('addRoutes执行了')
//       // router.addRoutes(route1)
//       console.log(routes)
//       next()
//     } else {
//       next('/login')
//     }
//   } else {
//     router.addRoutes(route1)
//     next()
//   }
// })
console.log(store.state.a.name)
export default router
