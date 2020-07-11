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
// import admin from '../middlewares/admin'
// import doctor from '../middlewares/doctor'
import store from '../store'
import middlewarePipeline from './middlewarePipeline'
import DoctorProfile from '../components/profile/Doctor'
import PatientProfile from '../components/profile/Patient'
import DoctorDashBoard from '../components/Doctor/Dashboard'
import DoctorSchedule from '../components/Doctor/Schedule'
import DoctorAppointments from '../components/Doctor/Appointments'
import DoctorPatients from '../components/Doctor/Patients'
import DoctorChats  from '../components/Doctor/Chats'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      middleware: [
        auth,
        
      ]
    }, 
    children: [
      {
        path: '/hospital',
        name: 'Hospital',
        component: Hospital,
        meta: {
          middleware: [
            auth
          ]
        }
      },
      {
        path: '/hospital/doctor/:id',
        name: 'DoctorProfile',
        component: DoctorProfile,
        meta: {
          middleware: [
            auth,
            
          ]
        }
      },
      {
        path: '/hospital/patient/:id',
        name: 'PatientProfile',
        component: PatientProfile,
        meta: {
          middleware: [
            auth,
            
          ]
        }
      },
      {
        path: '/hospital/doctors',
        name: 'Doctors',
        component: Doctors,
        meta: {
          middleware: [
            auth
          ]
        },
      },
      {
        path: '/hospital/appointments',
        name: 'Appointments',
        component: Appointments,
        meta: {
          middleware: [
            auth
          ]
        }
      },
      {
        path: '/hospital/patients',
        name: 'Patient',
        component: Patient,
        meta: {
          middleware: [
            auth
          ]
        }
      },
      {
        path: '/hospital/reviews',
        name: 'Review',
        component: Review,
        meta: {
          middleware: [
            auth
          ]
        }
      }
    ]
  },
  {
    path:'/doctor/dashboard',
    name:'DoctorDashboard',
    component:DoctorDashBoard,
    meta: {
      middleware: [
        auth,
        doctor
      ]
    },
    children:[
      {
        path:'/doctor/appointments',
        name:'DoctorAppointMents',
        component:DoctorAppointments,
        meta: {
          middleware: [
            auth,
            
          ]
        }
      },
      {
        path:'/doctor/schedule',
        name:'DoctorSchedule',
        component:DoctorSchedule,
        meta: {
          middleware: [
            auth,
            
          ]
        }
      },
      {
        path:'/doctor/patients',
        name:'DoctorPatients',
        component:DoctorPatients,
        meta: {
          middleware: [
            auth,
            
          ]
        }
      },
      {
        path:'/doctor/chats',
        name:'DoctorChats',
        component:DoctorChats,
        meta: {
          middleware: [
            auth,
            
          ]
        }
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      middleware: [
        guest
      ]
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      middleware: [
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
  routes,
})
router.beforeEach((to, from, next) => {
  if (!to.meta.middleware) {
    return next()
  }

  const middleware = to.meta.middleware

  const context = {
    to,
    from,
    next,
    store
  }
  return middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1)
  })
})

export default router
