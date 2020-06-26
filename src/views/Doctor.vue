<template>
  <div class="main-wrapper">
    <top-nav></top-nav>
    <div class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
            <side-nav></side-nav>
          </div>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TopNav from "../components/auth/Doctor/navs/Topnav";
import SideNav from "../components/auth/Doctor/navs/Sidebar";

export default {
  name: "Medico",
  components: {
    TopNav: TopNav,
    SideNav: SideNav
  },
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>
<style>
</style>