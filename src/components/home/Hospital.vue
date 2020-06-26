<template>
  <div
    class="container justify-content-center text-center"
    style="padding-top:15%"
    v-if="loading==true"
  >
    <vue-loaders-ball-pulse color="#55ce63" scale="1.5" />
  </div>
  <div v-else class="col-md-7 col-lg-8 col-xl-9">
    <div class="row">
      <div class="col-xl-4 col-sm-6 col-12">
        <div class="card">
          <div class="card-body">
            <div class="dash-widget-header">
              <span class="dash-widget-icon text-primary border-primary">
                <i class="fas fa-users"></i>
              </span>
              <div class="dash-count">
                <h3>{{ hospital.doctors.length >0 ?  hospital.doctors.length :"No Doctors" }}</h3>
              </div>
            </div>
            <div class="dash-widget-info"> 
              <h6 class="text-muted">Doctors</h6>
              <div class="progress progress-sm">
                <div class="progress-bar bg-primary w-50"></div>
              </div>
            </div>
          </div>
        </div>
      </div> 
      <div class="col-xl-4 col-sm-6 col-12">
        <div class="card">
          <div class="card-body">
            <div class="dash-widget-header">
              <span class="dash-widget-icon text-success">
                <i class="fas fa-credit-card"></i>
              </span>
              <div class="dash-count">
                <h3>{{ hospital.patients.length >0 ?  hospital.patients.length :"No Patients" }}</h3>
              </div>
            </div>
            <div class="dash-widget-info">
              <h6 class="text-muted">Patients</h6>
              <div class="progress progress-sm">
                <div class="progress-bar bg-success w-50"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-4 col-sm-6 col-12">
        <div class="card">
          <div class="card-body">
            <div class="dash-widget-header">
              <span class="dash-widget-icon text-danger border-danger">
                <i class="fas fa-calendar-check"></i>
              </span>
              <div class="dash-count">
                <h3>{{ hospital.appointments.length >0 ?  hospital.appointments.length :"No Appointments" }}</h3>
              </div>
            </div>
            <div class="dash-widget-info">
              <h6 class="text-muted">Appointment</h6>
              <div class="progress progress-sm">
                <div class="progress-bar bg-danger w-50"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  </div>
</template>
<script>
import jwtdecode from "jwt-decode";
import axios from "axios";

export default {
  data() {
    const token = localStorage.usertoken;
    const decoded = jwtdecode(token);

    return {
      uid: decoded.uid,
      auth: "",
      user: {
        name: "",
        email: "",
        hopital_id: ""
      },
      hospital: {},
      loading: true
    };
  },

  mounted() {
    axios.get("/medico/show/" + this.uid).then(res => {
      (this.user.name = res.data.first_name),
        (this.user.email = res.data.last_name),
        (this.user.hospital_id = res.data.hospital_id);
      axios.get("/hospital/show/" + this.user.hospital_id).then(response => {
        setInterval(() => {
          this.hospital = response.data;
          this.loading = false;
        }, 2000);
      });
    });
  }
};
</script>