<template>
  <div class="main-wrapper">
    <top-nav></top-nav>
    <div class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
            <side-navbar v-if="user_type=='admin'"></side-navbar>
            <doctor-side-navbar v-if="user_type=='doctor'"></doctor-side-navbar>
          </div>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TopNav from '../components/navs/Topnav'
import SideNavbar from '../components/navs/SideNavbar'
import DoctorSideNavbar from '../components/navs/DoctorSideNavbar'

export default {
  
  name:'Medico',
  components:{
    'TopNav':TopNav,
    'SideNavbar':SideNavbar,
    'DoctorSideNavbar':DoctorSideNavbar
  },
  data(){
    return{
      miniSideBarf:'',
      user_type:''
    }
  },
  computed:{
    miniSideBar(){
      return this.$store.state.pageSideBarClass
    }
  },
  mounted(){
    this.user_type = this.$store.state.user.user_type
  },
  methods:{
  sideBar(){
      if(this.$store.state.pageSideBarClass==''){
        this.isMini ==false
      }else{
        this.isMini == true
      }
    }
  }
}
</script>
<style>
</style>