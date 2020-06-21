<template>
  <div class="page-wrapper" style="min-height: 900px;">
    <div class="content container-fluid">
      <!-- Page Header -->
      <div
        class="container justify-content-center text-center"
        style="padding-top:15%"
        v-if="loading==true"
      >
        <vue-loaders-ball-pulse color="#55ce63" scale="1.5" />
      </div>
      <div v-if="loading==false" class="page-header">
        <div class="row">
          <div class="col">
            <h3 class="page-title">Profile</h3>
            <ul class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link to="/hospital">{{ doctor.hospital.name }}</router-link>
              </li>
              <li class="breadcrumb-item active">{{ doctor.fname }}</li>
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
                  <img class="rounded-circle" alt="User Image" src="assets/img/user.png" />
                </a>
              </div>
              <div class="col ml-md-n2 profile-user-info">
                <h4 class="user-name mb-0">{{doctor.fname+" "+doctor.lname}}</h4>
                <h6 class="text-muted">{{ doctor.email }}</h6>
                <div class="user-Location">
                  <i class="fa fa-map-marker"></i>
                  {{ doctor.address }}
                </div>
              </div>
              <div class="col-auto profile-btn">
                <a href="#" class="btn btn-primary">Edit</a>
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
                        <a class="edit-link" data-toggle="modal" href="#edit_personal_details">
                          <i class="fa fa-edit mr-1"></i>Edit
                        </a>
                      </h5>
                      <div class="row">
                        <p class="col-sm-2 text-muted text-sm-right mb-0 mb-sm-3">Name</p>
                        <p class="col-sm-10">{{ doctor.fname + " " +doctor.lname }}</p>
                      </div>
                      <div class="row">
                        <p class="col-sm-2 text-muted text-sm-right mb-0 mb-sm-3">Gender</p>
                        <p class="col-sm-10">{{ doctor.gender }}</p>
                      </div>
                      <div class="row">
                        <p class="col-sm-2 text-muted text-sm-right mb-0 mb-sm-3">Email ID</p>
                        <p class="col-sm-10">{{ doctor.email }}</p>
                      </div>
                      <div class="row">
                        <p class="col-sm-2 text-muted text-sm-right mb-0 mb-sm-3">Mobile</p>
                        <p class="col-sm-10">{{ doctor.phone }}</p>
                      </div>
                      <div class="row">
                        <p class="col-sm-2 text-muted text-sm-right mb-0">Address</p>
                        <p class="col-sm-10 mb-0">{{doctor.address}}</p>
                      </div>
                    </div>
                  </div>

                  <!-- Edit Details Modal -->
                  <div
                    class="modal fade"
                    id="edit_personal_details"
                    aria-hidden="true"
                    role="dialog"
                  >
                    <div class="modal-dialog modal-dialog-centered" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title">Personal Details</h5>
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">×</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          <form>
                            <div class="row form-row">
                              <div class="col-12 col-sm-6">
                                <div class="form-group">
                                  <label>First Name</label>
                                  <input
                                    v-model="doctorEdit.first_name"
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
                                    v-model="doctorEdit.last_name"
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
                                    <select
                                      v-model="doctorEdit.gender"
                                      class="form-control"
                                      required
                                    >
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
                                    v-model="doctorEdit.email"
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
                                    v-model="doctorEdit.phone"
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
                                    v-model="doctorEdit.address"
                                    rows="5"
                                    cols="5"
                                    class="form-control"
                                    placeholder="Enter address here"
                                    required
                                  ></textarea>
                                </div>
                              </div>
                              <div class="col-12 col-sm-6">
                                <div class="form-group">
                                  <label>Password</label>
                                  <input
                                    v-model="doctorEdit.password"
                                    type="password"
                                    class="form-control"
                                    value="Enter Password"
                                    required
                                  />
                                </div>
                              </div>
                            </div>
                            <button
                              type="submit"
                              v-if="updateLoading==false"
                              @click.prevent="updateDoctor()"
                              class="btn btn-primary btn-block"
                            >Save Changes</button>
                            <div v-if="updateLoading==true" class="d-flex justify-content-center">
                              <div class="spinner-border text-primary" role="status">
                                <span class="sr-only">Loading...</span>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- /Edit Details Modal -->
                </div>
              </div>
              <!-- /Personal Details -->
            </div>
            <!-- /Personal Details Tab -->

            <!-- Change Password Tab -->
            <div id="password_tab" class="tab-pane fade">
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
            <!-- /Change Password Tab -->
          </div>
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
      doctor: {},
      loading: true,
      doctorEdit: {
        first_name: "",
        last_name: "",
        email: "",
        gender: "",
        address: "",
        phone: "",
        password: "",
        hospital_id: ""
      },
      updateLoading: false
    };
  },
  mounted() {
    console.log(this.$route.params.id);
    axios.get("/doctors/show/" + this.$route.params.id).then(response => {
      this.doctor = response.data;

      this.doctorEdit.first_name = this.doctor.fname;
      this.doctorEdit.last_name = this.doctor.lname;
      this.doctorEdit.email = this.doctor.email;
      this.doctorEdit.gender = this.doctor.gender;
      this.doctorEdit.address = this.doctor.address;
      this.doctorEdit.phone = this.doctor.phone;
      this.doctorEdit.password = this.doctor.password;
      this.doctorEdit.hospital_id = this.doctor.hospital._id;

      this.loading = false;
    });
  },
  methods: {
    updateDoctor() {
      this.updateLoading = true;
      axios
        .put("/doctors/edit/" + this.doctor.id, {
          first_name: this.doctorEdit.first_name,
          last_name: this.doctorEdit.last_name,
          email: this.doctorEdit.email,
          gender: this.doctorEdit.gender,
          address: this.doctorEdit.address,
          phone: this.doctorEdit.phone,
          password: this.doctorEdit.password,
          hospital_id: this.doctorEdit.hospital_id
        })
        .then(response => {
          this.$toast.success(`${response.data.message}`, {
            timeout: 5000
          });
        })
        .catch(err => {
          console.log(err);
          this.updateLoading=false
           this.$toast.error(`${err.response.data.message}`, {
            timeout: 5000
          });
          
        });
    }
  }
};
</script>