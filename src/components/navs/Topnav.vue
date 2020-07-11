<template>
  <div class="breadcrumb-bar">
    <div class="container-fluid">
      <div class="row align-items-center">
        <div class="col-md-8 col-12">
          <h2 class="breadcrumb-title">
            <img height="70px" width="200px" src="assets/img/logot.png" alt />
          </h2>
        </div>
        <div class="col-md-4 col-12 d-md-block d-none">
          <div>
            <ul class="nav user-menu">
              <!-- Notifications -->
              <li class="nav-item dropdown noti-dropdown">
                <a
                  href="#"
                  class="dropdown-toggle nav-link"
                  style="color:black"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="fa fa-bell"></i>
                  <span class="badge badge-pill">3</span>
                </a>
                <div
                  class="dropdown-menu notifications"
                  x-placement="bottom-start"
                  style="margin-right:200px;position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, 60px, 0px);"
                >
                  <div class="topnav-dropdown-header">
                    <span class="notification-title">Notifications</span>
                    <a href="javascript:void(0)" class="clear-noti">Clear All</a>
                  </div>
                  <div class="noti-content">
                    <ul class="notification-list">
                      <li class="notification-message">
                        <a href="#">
                          <div class="media">
                            <span class="avatar avatar-sm">
                              <img
                                class="avatar-img rounded-circle"
                                alt="User Image"
                                src="assets/img/doctors/doctor-thumb-01.jpg"
                              />
                            </span>
                            <div class="media-body">
                              <p class="noti-details">
                                <span class="noti-title">Dr. Ruby Perrin</span> Schedule
                                <span class="noti-title">her appointment</span>
                              </p>
                              <p class="noti-time">
                                <span class="notification-time">4 mins ago</span>
                              </p>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li class="notification-message">
                        <a href="#">
                          <div class="media">
                            <span class="avatar avatar-sm">
                              <img
                                class="avatar-img rounded-circle"
                                alt="User Image"
                                src="assets/img/patients/patient1.jpg"
                              />
                            </span>
                            <div class="media-body">
                              <p class="noti-details">
                                <span class="noti-title">Charlene Reed</span> has booked her appointment to
                                <span class="noti-title">Dr. Ruby Perrin</span>
                              </p>
                              <p class="noti-time">
                                <span class="notification-time">6 mins ago</span>
                              </p>
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
              <li class="nav-item dropdown has-arrow">
                <a
                  href="#"
                  style="color:black"
                  class="dropdown-toggle nav-link"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span class="user-img">
                    <img
                      class="rounded-circle"
                      src="assets/img/user.png"
                      width="31"
                      alt="Ryan Taylor"
                    />
                  </span>
                </a>
                <div
                  class="dropdown-menu"
                  x-placement="bottom-start"
                  style="margin-right:100px;position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, 60px, 0px);"
                >
                  <div class="user-header">
                    <div class="avatar avatar-sm">
                      <img
                        src="assets/img/user.png"
                        alt="User Image"
                        class="avatar-img rounded-circle"
                      />
                    </div>
                    <div class="user-text">
                      <h6>R{{ user.name }}</h6>
                      <p class="text-muted mb-0">Administrator</p>
                    </div>
                  </div>
                  <a class="dropdown-item" href="profile.html">My Profile</a>
                  <a class="dropdown-item" href="settings.html">Settings</a>
                  <a class="dropdown-item" href="login.html">Logout</a>
                </div>
              </li>
              <!-- /User Menu -->
            </ul>
          </div>
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
.breadcrumb-bar {
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>