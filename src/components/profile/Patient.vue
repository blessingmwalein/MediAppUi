<template>
  <div class="col-md-7 col-lg-8 col-xl-9">
    <!-- Page Header -->
    <div  class="page-header">
      <div class="row">
        <div class="col">
          <h3 class="page-title">Profile</h3>
          <ul class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link :to="{'/hospital':user_type=='admin', '/dashboard':user_type=='doctor'}">{{ user_type=='admin'? patient.hospital.name :patient.doctor.first_name }}</router-link>
            </li>
            <li class="breadcrumb-item active">{{ patient.fname }}</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- /Page Header -->
    <div v-if="loading==false" class="row">
      <div class="col-md-12">
        <div class="profile-header">
          <div class="row align-items-center">
            <div class="col-auto profile-image">
              <a href="#">
                <img
                  class="rounded-circle"
                  height="100p"
                  width="100px"
                  alt="User Image"
                  src="assets/img/user.png"
                />
              </a>
            </div>
            <div class="col ml-md-n2 profile-user-info">
              <h4 class="user-name mb-0">{{patient.fname+" "+patient.lname}}</h4>
              <h6 class="text-muted">{{ patient.email }}</h6>
              <div class="user-Location">
                <i class="fa fa-map-marker"></i>
                {{ patient.address }}
              </div>
            </div>
            <div class="col-auto profile-btn">
              <a
                href="#"
                class="btn btn-primary"
                v-if="edit==false"
                style="margin-left:5px"
                @click="edit=true"
              >Edit</a>
              <a href="#" class="btn btn-dark" v-if="edit==true" @click="edit=false">Cancel</a>
            </div>
          </div>
        </div>
        <div class="profile-menu">
          <ul class="nav nav-tabs nav-tabs-solid">
            <li class="nav-item">
              <a class="nav-link active" data-toggle="tab" href="#per_details_tab">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="tab" href="#password_tab">Password</a>
            </li>
          </ul>
        </div>
        <div class="tab-content profile-tab-cont">
          <!-- Personal Details Tab -->
          <div class="tab-pane fade show active" id="per_details_tab">
            <!-- Personal Details -->
            <div class="row">
              <div class="col-lg-12">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title d-flex justify-content-between">
                      <span>Personal Details</span>
                    </h5>
                    <div class="row">
                      <p class="col-sm-2 text-muted text-sm-right mb-0 mb-sm-3">Name</p>
                      <p class="col-sm-10">{{ patient.fname + " " +patient.lname }}</p>
                    </div>
                    <div class="row">
                      <p class="col-sm-2 text-muted text-sm-right mb-0 mb-sm-3">Gender</p>
                      <p class="col-sm-10">{{ patient.gender }}</p>
                    </div>
                    <div class="row">
                      <p class="col-sm-2 text-muted text-sm-right mb-0 mb-sm-3">Email ID</p>
                      <p class="col-sm-10">{{ patient.email }}</p>
                    </div>
                    <div class="row">
                      <p class="col-sm-2 text-muted text-sm-right mb-0 mb-sm-3">Mobile</p>
                      <p class="col-sm-10">{{ patient.phone }}</p>
                    </div>
                    <div class="row">
                      <p class="col-sm-2 text-muted text-sm-right mb-0">Address</p>
                      <p class="col-sm-10 mb-0">{{patient.address}}</p>
                    </div>
                    <div class="row">
                      <p class="col-sm-2 text-muted text-sm-right mb-0">Doctor</p>
                      <p
                        class="col-sm-10 mb-0"
                      >Dr {{patient.doctor.first_name +" "+patient.doctor.last_name}}</p>
                    </div>
                  </div>
                </div>

                <!-- Edit Details Modal -->
                <div class="col-md-12" style="margin-bottom:10px" v-if="edit==true">
                  <form>
                    <div class="row form-row">
                      <div class="col-12 col-sm-6">
                        <div class="form-group">
                          <label>First Name</label>
                          <input
                            v-model="patientEdit.first_name"
                            type="text"
                            class="form-control"
                            placeholder="Enter Firstname"
                            required
                          />
                        </div>
                      </div>
                      <div class="col-12 col-sm-6">
                        <div class="form-group">
                          <label>Last Name</label>
                          <input
                            type="text"
                            v-model="patientEdit.last_name"
                            class="form-control"
                            placeholder="Enter Lastname"
                            required
                          />
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-group">
                          <label>Gender</label>
                          <div class="cal-icon">
                            <select v-model="patientEdit.gender" class="form-control" required>
                              <option>-- Select --</option>
                              <option value="male">Male</option>
                              <option value="female">Female</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div class="col-12 col-sm-6">
                        <div class="form-group">
                          <label>Email ID</label>
                          <input
                            type="email"
                            v-model="patientEdit.email"
                            class="form-control"
                            placeholder="x.bling@example.com"
                            required
                          />
                        </div>
                      </div>
                      <div class="col-12 col-sm-6">
                        <div class="form-group">
                          <label>Mobile</label>
                          <input
                            type="text"
                            v-model="patientEdit.phone"
                            placeholder="+263"
                            class="form-control"
                            required
                          />
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-group">
                          <label>Address</label>
                          <textarea
                            v-model="patientEdit.address"
                            rows="5"
                            cols="5"
                            class="form-control"
                            placeholder="Enter address here"
                            required
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <button
                      type="submit"
                      v-if="updateLoading==false"
                      @click.prevent="updatePatient()"
                      class="btn btn-primary btn-block"
                    >Save Changes</button>
                    <div v-if="updateLoading==true" class="d-flex justify-content-center">
                      <div class="spinner-border text-primary" role="status">
                        <span class="sr-only">Loading...</span>
                      </div>
                    </div>
                  </form>
                </div>

                <div class="col-md-12">
                  <div class="appointments">
                    <!-- Appointment List -->
                    <div
                      v-for="appointment in patient.appointments"
                      :key="appointment.id"
                      class="appointment-list"
                    >
                      <div class="profile-info-widget">
                        <a href="#" class="booking-doc-img">
                          <img src="assets/img/user.png" alt="User Image" />
                        </a>
                        <div class="profile-det-info">
                          <h3>
                            <a href="#">{{appointment.title}}</a>
                          </h3>
                          <div class="patient-details">
                            <h5>
                              <i class="far fa-clock"></i>
                              {{ appointment.start_time }}
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
                    <!-- /Appointment List -->
                  </div>
                </div>
                <!-- /Edit Details Modal -->
              </div>
            </div>
            <!-- /Personal Details -->
          </div>
          <!-- /Personal Details Tab -->
          <div class="col-md-12">
            <div class="container">
              <h5>Appointments</h5>
            </div>
          </div>
          <hr />
          <!-- Change Password Tab -->
          <div v-if="patient.appointments.length>0" id="password_tab" class="tab-pane fade">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Change Password</h5>
                <div class="row">
                  <div class="col-md-10 col-lg-6">
                    <form>
                      <div class="form-group">
                        <label>Old Password</label>
                        <input type="password" class="form-control" />
                      </div>
                      <div class="form-group">
                        <label>New Password</label>
                        <input type="password" class="form-control" />
                      </div>
                      <div class="form-group">
                        <label>Confirm Password</label>
                        <input type="password" class="form-control" />
                      </div>
                      <button class="btn btn-primary" type="submit">Save Changes</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div v-else class="col-md-12">
            <div class="container" style="text-align:center;">
              <h4>Patient dont have appointments yet</h4>
            </div>
          </div>

          <div class="col-md-12">
            <div class="container">
              <h5>Patient Doctor Infor</h5>
            </div>
          </div>

           <div class="col-md-12">
                <div class="appointments">
                  <!-- Appointment List -->
                  <div
                    class="appointment-list"
                  >
                    <div class="profile-info-widget">
                      <router-link :to="'/doctor/'+patient.doctor._id" class="booking-doc-img">
                        <img src="assets/img/user.png" alt="User Image" />
                      </router-link>
                      <div class="profile-det-info">
                        <h3>
                          <router-link
                            :to="'/doctor/'+patient.doctor._id"
                          >{{patient.doctor.first_name +" "+patient.doctor.last_name}}</router-link>
                        </h3>
                        <div class="patient-details">
                          <h5>
                            <i class="fas fa-map-marker-alt"></i>
                            {{ patient.doctor.address }}
                          </h5>
                          <h5>
                            <i class="fas fa-envelope"></i>
                            {{patient.doctor.email}}
                          </h5>
                          <h5 class="mb-0">
                            <i class="fas fa-phone"></i>
                            {{ patient.doctor.phone }}
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
                  <!-- /Appointment List -->
                </div>
              </div>
          <!-- /Change Password Tab -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      patient: {},
      loading: true,
      patientEdit: {
        first_name: "",
        last_name: "",
        email: "",
        gender: "",
        doctor_id: "",
        address: "",
        phone: "",
        user_id: "",
        hospital_id: ""
      },
      updateLoading: false,
      edit: false,
      user_type:'',
    };
  },
  mounted() {
    console.log(this.$route.params.id);
    this.fetchPatient();
    this.user_type=this.$store.state.user.user_type
  },
  methods: {
    fetchPatient() {
      axios.get("/patients/show/" + this.$route.params.id).then(response => {
        this.patient = response.data;

        this.patientEdit.first_name = this.patient.fname;
        this.patientEdit.last_name = this.patient.lname;
        this.patientEdit.email = this.patient.email;
        this.patientEdit.gender = this.patient.gender;
        this.patientEdit.address = this.patient.address;
        this.patientEdit.phone = this.patient.phone;
        this.patientEdit.hospital_id = this.$store.state.user.hospital_id;
        this.patientEdit.doctor_id = this.patient.doctor._id;
        this.patientEdit.user_id = this.patient.user._id;
        this.loading = false;
      });
    },
    updatePatient() {
      this.updateLoading = true;
      axios
        .put("/patients/edit/" + this.patient.id, {
          first_name: this.patientEdit.first_name,
          last_name: this.patientEdit.last_name,
          email: this.patientEdit.email,
          gender: this.patientEdit.gender,
          doctor_id: this.patientEdit.doctor_id,
          address: this.patientEdit.address,
          phone: this.patientEdit.phone,
          password: this.patientEdit.password,
          hospital_id: this.patientEdit.hospital_id
        })
        .then(response => {
          this.fetchPatient();
          this.$toast.success(`${response.data.message}`, {
            timeout: 5000
          });
          this.updateLoading = false;
        })
        .catch(err => {
          console.log(err);
          this.updateLoading = false;
          this.$toast.error(`${err.response.data}`, {
            timeout: 5000
          });
        });
    }
  }
};
</script>