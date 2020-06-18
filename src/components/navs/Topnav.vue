<template>
    <div class="header">
        <!-- Logo -->
        <div class="header-left">
            <a href="index.html" class="logo">
                <img src="assets/img/logo.png" alt="Logo">
            </a>
            <a href="index.html" class="logo logo-small">
                <img src="assets/img/logo-small.png" alt="Logo" width="30" height="30">
            </a>
        </div>
        <!-- /Logo -->
        
        <a href="" @click.prevent="miniSideBar()" id="toggle_btn">
            <i class="fe fe-text-align-left"></i>
        </a>
        
        <div class="top-nav-search">
            <form>
                <input type="text" class="form-control" placeholder="Search here">
                <button class="btn" type="submit"><i class="fa fa-search"></i></button>
            </form>
        </div>
        
        <!-- Mobile Menu Toggle -->
        <a class="mobile_btn" id="mobile_btn">
            <i class="fa fa-bars"></i>
        </a>
        <!-- /Mobile Menu Toggle -->
        
        <!-- Header Right Menu -->
        <ul class="nav user-menu">

            <!-- Notifications -->
            <li class="nav-item dropdown noti-dropdown">
                <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
                    <i class="fe fe-bell"></i> <span class="badge badge-pill">3</span>
                </a>
                <div class="dropdown-menu notifications">
                    <div class="topnav-dropdown-header">
                        <span class="notification-title">Notifications</span>
                        <a href="javascript:void(0)" class="clear-noti"> Clear All </a>
                    </div>
                    <div class="noti-content">
                        <ul class="notification-list">
                            <li class="notification-message">
                                <a href="#">
                                    <div class="media">
                                        <span class="avatar avatar-sm">
                                            <img class="avatar-img rounded-circle" alt="User Image" src="assets/img/doctors/doctor-thumb-01.jpg">
                                        </span>
                                        <div class="media-body">
                                            <p class="noti-details"><span class="noti-title">Dr. Ruby Perrin</span> Schedule <span class="noti-title">her appointment</span></p>
                                            <p class="noti-time"><span class="notification-time">4 mins ago</span></p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li class="notification-message">
                                <a href="#">
                                    <div class="media">
                                        <span class="avatar avatar-sm">
                                            <img class="avatar-img rounded-circle" alt="User Image" src="assets/img/patients/patient1.jpg">
                                        </span>
                                        <div class="media-body">
                                            <p class="noti-details"><span class="noti-title">Charlene Reed</span> has booked her appointment to <span class="noti-title">Dr. Ruby Perrin</span></p>
                                            <p class="noti-time"><span class="notification-time">6 mins ago</span></p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li class="notification-message">
                                <a href="#">
                                    <div class="media">
                                        <span class="avatar avatar-sm">
                                            <img class="avatar-img rounded-circle" alt="User Image" src="assets/img/patients/patient2.jpg">
                                        </span>
                                        <div class="media-body">
                                        <p class="noti-details"><span class="noti-title">Travis Trimble</span> sent a amount of $210 for his <span class="noti-title">appointment</span></p>
                                        <p class="noti-time"><span class="notification-time">8 mins ago</span></p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li class="notification-message">
                                <a href="#">
                                    <div class="media">
                                        <span class="avatar avatar-sm">
                                            <img class="avatar-img rounded-circle" alt="User Image" src="assets/img/patients/patient3.jpg">
                                        </span>
                                        <div class="media-body">
                                            <p class="noti-details"><span class="noti-title">Carl Kelly</span> send a message <span class="noti-title"> to his doctor</span></p>
                                            <p class="noti-time"><span class="notification-time">12 mins ago</span></p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="topnav-dropdown-footer">
                        <a href="#">View all Notifications</a>
                    </div>
                </div>
            </li>
            <!-- /Notifications -->
            
            <!-- User Menu -->
            <li :class="{'nav-item dropdown has-arrow show':userDrop==true, 'nav-item dropdown has-arrow':userDrop==false}">
                <a href="#" @click.prevent="dropDown()" class="dropdown-toggle nav-link" data-toggle="dropdown" :aria-expanded="{'true':userDrop==true, '':userDrop==false}">
                    <span class="user-img"><img class="rounded-circle" src="assets/img/profiles/avatar-01.jpg" width="31" alt="Ryan Taylor"></span>
                </a>
                <div :class="{'dropdown-menu show':userDrop==true,'dropdown-menu':userDrop==false}" x-placement="bottom-start" style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(-127px, 60px, 0px);">
                    <div class="user-header">
                        <div class="avatar avatar-sm">
                            <img src="assets/img/profiles/avatar-01.jpg" alt="User Image" class="avatar-img rounded-circle">
                        </div>
                        <div class="user-text">
                            <h6>{{ user.name }}</h6>
                            <p class="text-muted mb-0">Administrator</p>
                        </div>
                    </div>
                    <a class="dropdown-item" href="#">My Profile</a>
                    <a class="dropdown-item" href="#">Settings</a>
                    <a class="dropdown-item" href="#" @click="logout">Logout</a>
                </div>
            </li>
            <!-- /User Menu -->
            
        </ul>
        <!-- /Header Right Menu -->
        
    </div>
</template>
<script>
import EventBus from '../EventBus'
import jwtdecode from 'jwt-decode'
import axios from 'axios'
import router from '../../router'
export default {
    data(){
        const token = localStorage.usertoken
        const decoded = jwtdecode(token)

        return {
            uid:decoded.uid,
            auth:'',
            user:{
                name:'',
                email:''
            },
            userDrop:false,
        }
    },
    methods:{
        logout(){
            localStorage.removeItem('usertoken')
            this.$store.state.user.token=""
             router.push({name:'Login'})
                    this.$toast.success('Wabuda shaa', {
                            timeout: 6000
                        })
        },
        dropDown(){
            if(this.userDrop==false){
                this.userDrop=true
            }else{
                this.userDrop=false
            }
        },
        miniSideBar(){
            this.$store.state.pageSideBarClass==''?this.$store.state.pageSideBarClass='mini-sidebar': this.$store.state.pageSideBarClass=''
        }
    },
    mounted(){
        EventBus.$on('logged-in', status=>{
            this.auth =status
        }),
        axios.get('/medico/show/'+this.uid)
        .then((res)=>{
            this.user.name=res.data.first_name,
            this.user.email=res.data.last_name
        })
    }
}
</script>>