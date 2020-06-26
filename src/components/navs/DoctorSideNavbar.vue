<template>
  <div class="profile-sidebar">
    <div class="widget-profile pro-widget-content">
      <div class="profile-info-widget">
        <a href="#" class="booking-doc-img">
          <img src="assets/img/user.png" alt="User Image" />
        </a>
        <div class="profile-det-info">
          <h3>Dr. {{doctor.fname + " " + doctor.lname}}</h3>

          <div class="patient-details">
            <h5 class="mb-0">{{ doctor.phone }}</h5>
          </div>
        </div>
      </div>
    </div>
    <div class="dashboard-widget">
      <nav class="dashboard-menu">
        <ul>
          <li
            :class="{'active':isSelected=='docappointments'}"
            @click.prevent="changeSelection('docappointments')"
          >
            <router-link to="/docappointments">
              <i class="fas fa-columns"></i>
              <span>Appointments</span>
            </router-link>
          </li>
          <li
            :class="{'active':isSelected=='schedule'}"
            @click.prevent="changeSelection('schedule')"
          >
            <router-link to="/schedule">
              <i class="fas fa-columns"></i>
              <span>Schedule Slots</span>
            </router-link>
          </li>
          <li
            :class="{'active':isSelected=='patients'}"
            @click.prevent="changeSelection('patients')"
          >
            <router-link to="/doctorpatients">
              <i class="fas fa-user-injured"></i>
              <span>Patients</span>
            </router-link>
          </li>
          <li :class="{'active':isSelected=='doctorchats'}" @click.prevent="changeSelection('doctorchats')">
            <router-link to="/doctorchats">
              <i class="fas fa-comments"></i>
              <span>Patients Chat</span>
            </router-link>
          </li>
          <li>
            <a href="#">
              <i class="fas fa-user-cog"></i>
              <span>Settings</span>
            </a>
          </li>
          <li>
            <a @click="logout()" href="#">
              <i class="fas fa-sign-out-alt"></i>
              <span>Logout</span>
            </a>
          </li>
        </ul>
      </nav>
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
      isSelected: "docappointments",
      uid: decoded.uid,
      auth: "",
      doctor: {},
      user: {
        name: "",
        email: ""
      },
      userDrop: false
    };
  },
  methods: {
    changeSelection(page) {
      this.isSelected = page;
    },
    fetchdoctor() {
      const token = localStorage.usertoken;
      const decoded = jwtdecode(token);
      axios
        .get("medico/doctor/" + decoded.uid)
        .then(response => {
          this.doctor = response.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    logout() {
      localStorage.removeItem("usertoken");
      localStorage.removeItem("hospital_id");
      this.$store.state.user.token = "";
      this.$store.state.user.hospital_id = "";

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
    this.fetchdoctor();
  }
};
</script>

<style lang="css" scoped>
.sidebar {
  color: blue;
}

.sidebar-menu ul li a {
  color: #2c037b;
}

.sidebar-menu ul li a:hover {
  color: #2c037b;
}
.active {
  border-left: 3px solid #2c037b;
  color: #0084ac;
}
.active a {
  color: #0084ac;
}
</style>