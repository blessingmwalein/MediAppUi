<template>
  <div :class="'main-wrapper '+miniSideBar">
  <top-nav></top-nav>
  <side-navbar></side-navbar>
      <router-view></router-view>
  </div>
</template>

<script>
import TopNav from '../components/navs/Topnav'
import SideNavbar from '../components/navs/SideNavbar'


export default {
  
  name:'Medico',
  components:{
    'TopNav':TopNav,
    'SideNavbar':SideNavbar
  },
  data(){
    return{
      miniSideBarf:''
    }
  },
  computed:{
    miniSideBar(){
      return this.$store.state.pageSideBarClass
    }
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
</style>>