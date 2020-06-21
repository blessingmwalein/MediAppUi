import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../components/auth/Login'
import Register from '../components/auth/Register'
import Profile from '../components/Profile'
import Hospital from '../components/home/Hospital'
import Appointments from '../components/home/Appointments'
import Patient from '../components/home/Patients'
import Doctors from '../components/home/Doctors'
import Review from '../components/home/Reviews'
import auth from '../middlewares/auth'
import guest from '../middlewares/guest'
import store from '../store'
import middlewarePipeline from './middlewarePipeline'
import DoctorProfile from '../components/profile/Doctor'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      middleware:[
        auth
      ]
    },
    
    children:[
      {
        path:'/hospital',
        name:'Hospital',
        component:Hospital,
        meta:{
          middleware:[
            auth
          ]
        }
      },
      {
        path:'/doctor/:id',
        name:'DoctorProfile',
        component:DoctorProfile,
        meta:{
          middleware:[
            auth
          ]
        }
      },
      {
        path:'/doctors',
        name:'Doctors',
        component:Doctors,
        meta:{
          middleware:[
            auth
          ]
        },
      },
      {
        path:'/appointments',
        name:'Appointments',
        component:Appointments,
        meta:{
          middleware:[
            auth
          ]
        }
      },
      {
        path:'/patients',
        name:'Patient',
        component:Patient,
        meta:{
          middleware:[
            auth
          ]
        }
      },
      {
        path:'/reviews',
        name:'Review',
        component:Review,
        meta:{
          middleware:[
            auth
          ]
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta:{
      middleware:[
        guest
      ]
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta:{
      middleware:[
        guest
      ]
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next)=>{
  if(!to.meta.middleware){
    return next()
  }

  const middleware = to.meta.middleware

  const context ={
    to,
    from,
    next,
    store
  }
  return middleware[0]({
    ...context,
    next:middlewarePipeline(context, middleware, 1)
  })
})

export default router
