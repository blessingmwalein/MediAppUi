<template>
  <div class="main-wrapper">
    <top-nav></top-nav>
    <div class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
            <doctor-side-navbar></doctor-side-navbar>
          </div>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TopNav from '../navs/Topnav'
import DoctorSideNavbar from '../navs/DoctorSideNavbar'

export default {
  
  name:'Medico',
  components:{
    'TopNav':TopNav,
    'DoctorSideNavbar':DoctorSideNavbar,
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