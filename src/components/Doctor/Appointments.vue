<template>
  <div class="col-md-7 col-lg-8 col-xl-9">
    <div class="page-header">
      <div class="row">
        <div class="col">
          <h3 class="page-title">Appointments</h3>
          <ul class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/dashboard">Dr{{ " "+doctor.fname }}</router-link>
            </li>
            <li class="breadcrumb-item active">Appointments</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="appointments">
      <!-- Appointment List -->
      <div v-if="appointments.length>0">
        <div v-for="appointment in appointments" :key="appointment.key" class="appointment-list">
          <div class="profile-info-widget">
            <router-link :to="'patient/'+appointment.patient_id" class="booking-doc-img">
              <img src="assets/img/user.png" alt="User Image" />
            </router-link>
            <div class="profile-det-info">
              <h3>
                <router-link :to="'patient/'+appointment.patient_id">{{ appointment.title }}</router-link>
              </h3>
              <div class="patient-details">
                <h5>
                  <i class="far fa-clock"></i>
                  {{ appointment.start_time }}
                </h5>
                <h5>
                  <i class="far fa-clock"></i>
                  {{ appointment.end_time }}
                </h5>
                <h5>
                  <i class="fas fa-map-marker-alt"></i>
                  {{ appointment.description }}
                </h5>
              </div>
            </div>
          </div>
          <div class="appointment-action">
            <a
              href="#"
              class="btn btn-sm bg-info-light"
              data-toggle="modal"
              data-target="#appt_details"
            >
              <i class="far fa-eye"></i> View
            </a>
          </div>
        </div>
      </div>
      <!-- /Appointment List -->
      <div v-else class="appointment-list">
        <h4>You dont have appointments yet</h4>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import jwtdecode from "jwt-decode";
export default {
  data() {
    return {
      doctor: {},
      appointments: [],
      isSwitch: false,
      appointmentsw: []
    };
  },
  mounted() {
    this.fetchdoctor();
  },
  methods: {
    fetchdoctor() {
      const token = localStorage.usertoken;
      const decoded = jwtdecode(token);
      axios
        .get("medico/doctor/" + decoded.uid)
        .then(response => {
          console.log(decoded.uid);
          this.doctor = response.data;
          this.appointments = response.data.appointments;
        })
        .catch(err => {
          console.log(err);
        });
    },
   
  }
};
</script>

