<template>
  <div class="profile-sidebar">
    <div class="widget-profile pro-widget-content">
      <div class="profile-info-widget">
        <a href="#" class="booking-doc-img">
          <img src="assets/img/user.png" alt="User Image" />
        </a>
        <div class="profile-det-info">
          <h3>Dr. X.bling</h3>

          <div class="patient-details">
            <h5 class="mb-0">BDS, MDS - Oral & Maxillofacial Surgery</h5>
          </div>
        </div>
      </div>
    </div>
    <div class="dashboard-widget">
      <nav class="dashboard-menu">
        <ul>
          <li
            :class="{'active':isSelected=='hospital'}"
            @click.prevent="changeSelection('hospital')"
          >
            <router-link to="/hospital">
                <i class="fas fa-columns"></i>
              <span>Hospital</span>
            </router-link>
          </li>
          <li
            :class="{'active':isSelected=='appointments'}"
            @click.prevent="changeSelection('appointments')"
          >
            <router-link to="/hospital/appointments">
              <i class="fas fa-calendar-check"></i>
              <span>Appointments</span>
            </router-link>
          </li>
          <li :class="{'active':isSelected=='doctors'}" @click.prevent="changeSelection('doctors')">
            <router-link to="/hospital/doctors">
               <i class="fas fa-user-injured"></i>
              <span>Doctors</span>
            </router-link>
          </li>
          <li
            :class="{'active':isSelected=='patients'}"
            @click.prevent="changeSelection('patients')"
          >
            <router-link to="/hospital/patients">
                <i class="fas fa-user-injured"></i>
              <span>Patients</span>
            </router-link>
          </li>
          <li :class="{'active':isSelected=='reviews'}" @click.prevent="changeSelection('reviews')">
            <router-link to="/hospital/reviews">
              <i class="fas fa-star"></i>
              <span>Reviews</span>
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
      isSelected: "hospital",
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
    changeSelection(page) {
      this.isSelected = page;
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
  color:#0084ac;
}
.active a {
  color: #0084ac;
}
</style>