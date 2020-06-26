<template>
  <div class="breadcrumb-bar">
    <div class="container-fluid">
      <div class="row align-items-center">
        <div class="col-md-12 col-12">
          <h2 class="breadcrumb-title">
            <img height="70px" width="200px" src="assets/img/logot.png" alt />
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import EventBus from "../EventBus";
import jwtdecode from "jwt-decode";
import axios from "axios";
import router from "../../router";
export default {
  data() {
    const token = localStorage.usertoken;
    const decoded = jwtdecode(token);

    return {
      uid: decoded.uid,
      auth: "",
      user: {
        name: "",
        email: ""
      },
      userDrop: false
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("usertoken");
      this.$store.state.user.token = "";
      router.push({ name: "Login" });
      this.$toast.success("Wabuda shaa", {
        timeout: 6000
      });
    },
    dropDown() {
      if (this.userDrop == false) {
        this.userDrop = true;
      } else {
        this.userDrop = false;
      }
    },
    miniSideBar() {
      this.$store.state.pageSideBarClass == ""
        ? (this.$store.state.pageSideBarClass = "mini-sidebar")
        : (this.$store.state.pageSideBarClass = "");
    }
  },
  mounted() {
    EventBus.$on("logged-in", status => {
      this.auth = status;
    }),
      axios.get("/medico/show/" + this.uid).then(res => {
        (this.user.name = res.data.first_name),
          (this.user.email = res.data.last_name);
      });
  }
};
</script>
<style scoped>
.breadcrumb-bar{
 background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>