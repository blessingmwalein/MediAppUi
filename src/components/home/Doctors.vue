<template>
  <div class="col-md-7 col-lg-8 col-xl-9">
    <div class="page-header">
      <div class="row">
        <div class="col-sm-12">
          <h3 class="page-title">List of Doctors</h3>
          <ul class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/">Dashboard</router-link>
            </li>
            <li class="breadcrumb-item">
              <a href="javascript:(0);">Users</a>
            </li>
            <li class="breadcrumb-item active">Doctor</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- /Page Header -->
    <div
      class="container justify-content-center text-center"
      style="padding-top:15%"
      v-if="loading==true"
    >
      <vue-loaders-ball-pulse color="#55ce63" scale="1.5" />
    </div>
    <div v-else class="row">
      <div class="col-sm-12">
        <div class="card">
          <div class="card-body">
            <div class="table-responsive">
              <div
                id="DataTables_Table_0_wrapper"
                class="dataTables_wrapper dt-bootstrap4 no-footer"
              >
                <div class="row">
                  <div class="col-sm-12 col-md-12">
                    <div class="dataTables_length" id="DataTables_Table_0_length">
                      <a
                        class="btn btn-primary"
                        data-toggle="modal"
                        href="#"
                        @click.prevent="add=true"
                      >Add New</a>
                      <a
                        style="margin-left:10px;"
                        class="btn btn-dark"
                        data-toggle="modal"
                        href="#"
                        @click.prevent="add=false"
                      >Cancel</a>
                    </div>
                  </div>
                  <div class="col-sm-12 col-md-12">
                    <form v-if="add==true">
                      <div class="row form-row">
                        <div class="col-12 col-sm-6">
                          <div class="form-group">
                            <label>First Name</label>
                            <input
                              v-model="doctor.first_name"
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
                              v-model="doctor.last_name"
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
                              <select v-model="doctor.gender" class="form-control" required>
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
                              v-model="doctor.email"
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
                              v-model="doctor.phone"
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
                              v-model="doctor.address"
                              rows="5"
                              cols="5"
                              class="form-control"
                              placeholder="Enter address here"
                              required
                            ></textarea>
                          </div>
                        </div>
                        <div class="col-12 ">
                          <div class="row form-row">
                            <div class="col-12 col-sm-6">
                              <div class="form-group">
                                <label>Role</label>
                                <div class="cal-icon">
                                  <select v-model="doctor.role_id" class="form-control" required>
                                    <option>-- Select --</option>
                                    <option v-for="role in roles" :value="role._id" :key="role.id">{{role.name}}</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div class="col-12 col-sm-6">
                              <div class="form-group">
                                <label>Password</label>
                                <input
                                  v-model="doctor.password"
                                  type="password"
                                  class="form-control"
                                  value="Enter Password"
                                  required
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button
                        type="submit"
                        v-if="saveLoading==false"
                        @click.prevent="registerDoc()"
                        class="btn btn-primary btn-block"
                      >Save Changes</button>
                      <div v-if="saveLoading==true" class="d-flex justify-content-center">
                        <div class="spinner-border text-primary" role="status">
                          <span class="sr-only">Loading...</span>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-12">
                    <table
                      class="datatable table table-hover table-center mb-0 dataTable no-footer"
                      id="DataTables_Table_0"
                      role="grid"
                      aria-describedby="DataTables_Table_0_info"
                    >
                      <thead>
                        <tr role="row">
                          <th
                            class="sorting_asc"
                            tabindex="0"
                            aria-controls="DataTables_Table_0"
                            rowspan="1"
                            colspan="1"
                            aria-sort="ascending"
                            aria-label="Doctor Name: activate to sort column descending"
                            style="width: 292px;"
                          >Doctor Name</th>
                          <th
                            class="sorting"
                            tabindex="0"
                            aria-controls="DataTables_Table_0"
                            rowspan="1"
                            colspan="1"
                            aria-label="Speciality: activate to sort column ascending"
                            style="width: 132px;"
                          >Gender</th>
                          <th
                            class="sorting"
                            tabindex="0"
                            aria-controls="DataTables_Table_0"
                            rowspan="1"
                            colspan="1"
                            aria-label="Member Since: activate to sort column ascending"
                            style="width: 168px;"
                          >Member Since</th>
                          <th
                            class="sorting"
                            tabindex="0"
                            aria-controls="DataTables_Table_0"
                            rowspan="1"
                            colspan="1"
                            aria-label="Earned: activate to sort column ascending"
                            style="width: 96px;"
                          >Address</th>
                          <th
                            class="sorting"
                            tabindex="0"
                            aria-controls="DataTables_Table_0"
                            rowspan="1"
                            colspan="1"
                            aria-label="Earned: activate to sort column ascending"
                            style="width: 96px;"
                          >Phone</th>
                          <th
                            class="sorting"
                            tabindex="0"
                            aria-controls="DataTables_Table_0"
                            rowspan="1"
                            colspan="1"
                            aria-label="Account Status: activate to sort column ascending"
                            style="width: 177px;"
                          >Delete</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="doctor in doctors" :key="doctor.id" role="row" class="odd">
                          <td class="sorting_1">
                            <h2 class="table-avatar">
                              <router-link
                                :to="{name:'DoctorProfile', params:{id:doctor._id}}"
                                class="avatar avatar-sm mr-2"
                              >
                                <img
                                  class="avatar-img rounded-circle"
                                  src="assets/img/user.png"
                                  alt="User Image"
                                />
                              </router-link>
                              <router-link
                                :to="{name:'DoctorProfile', params:{id:doctor._id}}"
                              >Dr. {{ doctor.first_name +" "+doctor.last_name }}</router-link>
                            </h2>
                          </td>
                          <td>{{ doctor.gender }}</td>
                          <td>
                            {{ doctor.created_at }}
                            <br />
                          </td>
                          <td>{{ doctor.address }}</td>
                          <td>{{ doctor.phone }}</td>

                          <td>
                            <div class="status-toggle">
                              <a
                                class="btn btn-sm bg-danger-light"
                                data-toggle="modal"
                                href="#delete_modal"
                              >
                                <i class="fe fe-trash"></i> Delete
                              </a>
                              <div
                                class="modal fade"
                                id="delete_modal"
                                role="dialog"
                                style="display: none;"
                                aria-hidden="true"
                              >
                                <div class="modal-dialog modal-dialog-centered" role="document">
                                  <div class="modal-content">
                                    <!--	<div class="modal-header">
                                        <h5 class="modal-title">Delete</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                          <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>-->
                                    <div class="modal-body">
                                      <div class="form-content p-2">
                                        <h4 class="modal-title">Delete</h4>
                                        <p class="mb-4">Are you sure want to delete?</p>
                                        <button
                                          type="button"
                                          class="btn btn-primary"
                                          @click.prevent="deleteDoc(doctor)"
                                          data-dismiss="modal"
                                        >Yes</button>
                                        <button
                                          type="button"
                                          class="btn btn-danger"
                                          data-dismiss="modal"
                                        >Close</button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-12 col-md-5">
                    <div
                      class="dataTables_info"
                      id="DataTables_Table_0_info"
                      role="status"
                      aria-live="polite"
                    >Showing 1 to 10 of 10 entries</div>
                  </div>
                  <div class="col-sm-12 col-md-7">
                    <div
                      class="dataTables_paginate paging_simple_numbers"
                      id="DataTables_Table_0_paginate"
                    >
                      <ul class="pagination">
                        <li
                          class="paginate_button page-item previous disabled"
                          id="DataTables_Table_0_previous"
                        >
                          <a
                            href="#"
                            aria-controls="DataTables_Table_0"
                            data-dt-idx="0"
                            tabindex="0"
                            class="page-link"
                          >Previous</a>
                        </li>
                        <li class="paginate_button page-item active">
                          <a
                            href="#"
                            aria-controls="DataTables_Table_0"
                            data-dt-idx="1"
                            tabindex="0"
                            class="page-link"
                          >1</a>
                        </li>
                        <li
                          class="paginate_button page-item next disabled"
                          id="DataTables_Table_0_next"
                        >
                          <a
                            href="#"
                            aria-controls="DataTables_Table_0"
                            data-dt-idx="2"
                            tabindex="0"
                            class="page-link"
                          >Next</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
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
import router from "../../router";

export default {
  data() {
    const token = localStorage.usertoken;
    const decoded = jwtdecode(token);
    return {
      uid: decoded.uid,
      auth: "",
      doctors: [],
      saveLoading: false,
      doctor: {
        first_name: "",
        last_name: "",
        email: "",
        gender: "",
        address: "",
        phone: "",
        password: "",
        hospital_id: ""
      },
      loading: true,
      add: false,
      roles: []
    };
  },

  mounted() {
    this.fetchDoctors();
    this.fetchroles();
  },
  methods: {
    fetchDoctors() {
      axios.get("/medico/show/" + this.uid).then(res => {
        axios
          .get("/doctors/" + res.data.hospital_id)
          .then(response => {
            this.doctor.hospital_id = res.data.hospital_id;
            setTimeout(() => {
              this.doctors = response.data;
              this.loading = false;
            }, 1000);
          })
          .catch(err => {
            var errors = err.response.data[0].message;
            this.$toast.error(`${errors}`, {
              timeout: 5000
            });
          });
      });
    },
    registerDoc() {
      this.saveLoading = true;
      axios
        .post("/doctors/save", {
          first_name: this.doctor.first_name,
          last_name: this.doctor.last_name,
          email: this.doctor.email,
          phone: this.doctor.phone,
          gender: this.doctor.gender,
          address: this.doctor.address,
          hospital_id: this.doctor.hospital_id,
          password: this.doctor.password,
          role_id:this.doctor.role_id
        })
        .then(res => {
          this.fetchDoctors();
          this.saveLoading = false;
          this.loading = false;
          this.add=false
          this.$toast.success(`${res.data.message}`, {
            timeout: 5000
          });
        })
        .catch(err => {
          setTimeout(() => {
            this.saveLoading = false;
          }, 2000);
          var errors = err.response.data[0].message;
          this.$toast.error(`${errors}`, {
            timeout: 5000
          });
        });
    },
    deleteDoc(doctor) {
      axios
        .post("/doctors/delete/" + doctor._id)
        .then(response => {
          console.log(response);
          if (response.status == 204) {
            this.fetchDoctors();
            this.$toast.success("Doctor Deleted", {
              timeout: 5000
            });
          }
        })
        .catch(err => {
          this.$toast.error(`Error`, {
            timeout: 5000
          });
          console.log(err);
        });
    },
    fetchroles() {
      axios
        .get("/roles")
        .then(response => {
          this.roles = response.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>>