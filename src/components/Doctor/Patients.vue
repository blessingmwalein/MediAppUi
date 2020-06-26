<template>
  <div class="col-md-7 col-lg-8 col-xl-9">
    <div class="page-header">
      <div class="row">
        <div class="col">
          <h3 class="page-title">Patients</h3>
          <ul class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/dashboard">Dr{{ " "+doctor.fname }}</router-link>
            </li>
            <li class="breadcrumb-item active">Patients</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="appointments">
      <!-- Appointment List -->
      <div v-if="patients.length>0">
        <div v-for="patient in patients" :key="patient.id" class="appointment-list">
        <div class="profile-info-widget">
          <router-link :to="'/patient/'+patient._id" class="booking-doc-img">
            <img src="assets/img/user.png" alt="User Image" />
          </router-link>
          <div class="profile-det-info">
            <h3>
                 <router-link :to="'/patient/'+patient._id" >{{ patient.first_name +" "+ patient.last_name }}</router-link>
            </h3>
            <div class="patient-details">
              <h5>
                <i class="far fa-clock"></i> 14 Nov 2019, 10.00 AM
              </h5>
              <h5>
                <i class="fas fa-map-marker-alt"></i>{{patient.address}}
              </h5>
              <h5>
                <i class="fas fa-envelope"></i> {{ patient.email }}
              </h5>
              <h5 class="mb-0">
                <i class="fas fa-phone"></i> {{ patient.phone }}
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
        <h4>You dont have patients yet</h4>
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
      patients: []
    };
  },
  mounted() {
    this.fetchPatients();
  },
  methods: {
    fetchPatients() {
      const token = localStorage.usertoken;
      const decoded = jwtdecode(token);
      axios
        .get("medico/doctor/" + decoded.uid)
        .then(response => {
          this.doctor = response.data;
          this.patients = response.data.patients;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>>