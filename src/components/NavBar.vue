<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link class="nav-link" to="/" style="color:white">Home</router-link>
                </li>
                <li v-if="auth==''" class="nav-item">
                    <router-link class="nav-link" to="/login">Login</router-link>
                </li>
                <li v-if="auth==''" class="nav-item">
                    <router-link class="nav-link" to="/register">Register</router-link>
                </li>
                <li v-if="auth=='loggedin'" class="nav-item">
                    <router-link class="nav-link" to="/profile">Profile</router-link>
                </li>
                <li v-if="auth=='loggedin'" class="nav-item">
                    <a class="nav-link" href="" @click="logout">Logout</a>
                </li>
            </ul>
   
  </div>
</nav>
</template>

<script>
import EventBus from './EventBus'
export default {
    data(){
        return{
            auth:'',
            user:''
        }
    },

    methods:{
        logout(){
            localStorage.removeItem('usertoken')
        }
    },
    mounted() {
        EventBus.$on('logged-in', status=>{
            this.auth =status
        })
    },
}
</script>
