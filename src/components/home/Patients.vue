<template>
  <div class="col-md-7 col-lg-8 col-xl-9">
    <!-- Page Header -->
    <div class="page-header">
      <div class="row">
        <div class="col-sm-12">
          <h3 class="page-title">List of Patient</h3>
          <ul class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="index.html">Dashboard</a>
            </li>
            <li class="breadcrumb-item">
              <a href="javascript:(0);">Users</a>
            </li>
            <li class="breadcrumb-item active">Patient</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- /Page Header -->
    <div class="row">
      <div class="col-sm-12">
        <div class="card">
          <div class="card-body">
            <div class="table-responsive">
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
                    <div v-if="add==true" class="col-sm-12 col-md-12">
                      <form>
                        <div class="row form-row">
                          <div class="col-12 col-sm-6">
                            <div class="form-group">
                              <label>First Name</label>
                              <input
                                v-model="patient.first_name"
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
                                v-model="patient.last_name"
                                class="form-control"
                                placeholder="Enter Lastname"
                                required
                              />
                            </div>
                          </div>
                          <div class="col-12">
                            <div class="row">
                            <div class="form-group col-md-6">
                              <label>Gender</label>
                              <div class="cal-icon">
                                <select v-model="patient.gender" class="form-control" required>
                                  <option>-- Select --</option>
                                  <option value="male">Male</option>
                                  <option value="female">Female</option>
                                </select>
                              </div>
                            </div>
                            <div class="form-group col-md-6">
                              <label>Doctor</label>
                              <div class="cal-icon">
                                <select v-model="patient.doctor_id" class="form-control" required>
                                  <option>-- Select --</option>
                                  <option v-for="doctor in doctors" :key="doctor.id" :value="doctor._id">{{doctor.first_name + " " + doctor.last_name}}</option>
                                </select>
                              </div>
                            </div>
                            </div>
                          </div>
                          <div class="col-12 col-sm-6">
                            <div class="form-group">
                              <label>Email ID</label>
                              <input
                                type="email"
                                v-model="patient.email"
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
                                v-model="patient.phone"
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
                                v-model="patient.address"
                                rows="5"
                                cols="5"
                                class="form-control"
                                placeholder="Enter address here"
                                required
                              ></textarea>
                            </div>
                          </div>
                          <div class="col-12">
                            <div class="row form-row">
                              <div class="col-12 col-sm-6">
                                <div class="form-group">
                                  <label>Role</label>
                                  <div class="cal-icon">
                                    <select v-model="patient.role_id" class="form-control" required>
                                      <option>-- Select --</option>
                                      <option
                                        v-for="role in roles"
                                        :value="role._id"
                                        :key="role.id"
                                      >{{role.name}}</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div class="col-12 col-sm-6">
                                <div class="form-group">
                                  <label>Password</label>
                                  <input
                                    v-model="patient.password"
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
                          @click.prevent="registerPatient()"
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
                              class="sorting"
                              tabindex="0"
                              aria-controls="DataTables_Table_0"
                              rowspan="1"
                              colspan="1"
                              aria-label="Patient Name: activate to sort column ascending"
                              style="width: 145px;"
                            >Patient Name</th>
                            <th
                              class="sorting"
                              tabindex="0"
                              aria-controls="DataTables_Table_0"
                              rowspan="1"
                              colspan="1"
                              aria-label="Age: activate to sort column ascending"
                              style="width: 27px;"
                            >Gender</th>
                            <th
                              class="sorting"
                              tabindex="0"
                              aria-controls="DataTables_Table_0"
                              rowspan="1"
                              colspan="1"
                              aria-label="Address: activate to sort column ascending"
                              style="width: 374px;"
                            >Address</th>
                            <th
                              class="sorting"
                              tabindex="0"
                              aria-controls="DataTables_Table_0"
                              rowspan="1"
                              colspan="1"
                              aria-label="Phone: activate to sort column ascending"
                              style="width: 64px;"
                            >Phone</th>
                            <th
                              class="sorting"
                              tabindex="0"
                              aria-controls="DataTables_Table_0"
                              rowspan="1"
                              colspan="1"
                              aria-label="Last Visit: activate to sort column ascending"
                              style="width: 64px;"
                            >Email</th>
                            <th
                              class="text-right sorting"
                              tabindex="0"
                              aria-controls="DataTables_Table_0"
                              rowspan="1"
                              colspan="1"
                              aria-label="Paid: activate to sort column ascending"
                              style="width: 37px;"
                            >Created at</th>
                            <th
                              class="text-right sorting"
                              tabindex="0"
                              aria-controls="DataTables_Table_0"
                              rowspan="1"
                              colspan="1"
                              aria-label="Paid: activate to sort column ascending"
                              style="width: 37px;"
                            >Remove</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="patient in patients" :key="patient.id" role="row" class="odd">
                            <td>
                              <h2 class="table-avatar">
                                <router-link
                                  :to="{name:'PatientProfile', params:{id:patient._id}}"
                                  class="avatar avatar-sm mr-2"
                                >
                                  <img
                                    class="avatar-img rounded-circle"
                                    src="/assets/img/user.png"
                                    alt="User Image"
                                  />
                                </router-link>
                                <router-link
                                  :to="{name:'PatientProfile', params:{id:patient._id}}"
                                >{{ patient.first_name +" "+patient.last_name }}</router-link>
                              </h2>
                            </td>
                            <td>{{patient.gender}}</td>
                            <td>{{ patient.address }}</td>
                            <td>{{ patient.phone }}</td>
                            <td>{{ patient.email }}</td>
                            <td class="text-right">{{ patient.created_at }}</td>
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
                                      <div class="modal-body">
                                        <div class="form-content p-2">
                                          <h4 class="modal-title">Delete</h4>
                                          <p class="mb-4">Are you sure want to delete?</p>
                                          <button
                                            type="button"
                                            class="btn btn-primary"
                                            @click.prevent="deletePatient(patient)"
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
                      >Showing 1 to 10 of 15 entries</div>
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
                          <li class="paginate_button page-item">
                            <a
                              href="#"
                              aria-controls="DataTables_Table_0"
                              data-dt-idx="2"
                              tabindex="0"
                              class="page-link"
                            >2</a>
                          </li>
                          <li class="paginate_button page-item next" id="DataTables_Table_0_next">
                            <a
                              href="#"
                              aria-controls="DataTables_Table_0"
                              data-dt-idx="3"
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
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      patients: [],
      saveLoading: false,
      patient: {
        first_name: "",
        last_name: "",
        email: "",
        gender: "",
        doctor_id: "",
        address: "",
        phone: "",
        password: "",
        hospital_id: "",
        role_id: ""
      },
      doctors:[],
      roles: [],
      add:false
    };
  },
  mounted() {
    this.fetchpatients();
    this.fetchroles()
    this.fetchdoctors()
  },
  methods: {
    fetchdoctors(){
        axios.get('/doctors/' + this.$store.state.user.hospital_id)
        .then((response)=>{
          this.doctors = response.data
        })
        .catch((err)=>{
          console.log(err)
        })
    },
    fetchpatients() {
      var hospital_id = this.$store.state.user.hospital_id;
      this.patient.hospital_id = hospital_id;
      axios
        .get("/patients/" + hospital_id)
        .then(response => {
          this.patients = response.data;
        })
        .catch(err => {
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
    },
    registerPatient() {
      this.saveLoading = true;
      var hospital_id = this.$store.state.user.hospital_id;

      axios("/doctors/" + hospital_id).then(res => {
        var doctors = res.data;
       
        axios
          .post("/patients/save", {
            first_name: this.patient.first_name,
            last_name: this.patient.last_name,
            email: this.patient.email,
            phone: this.patient.phone,
            gender: this.patient.gender,
            address: this.patient.address,
            hospital_id: this.patient.hospital_id,
            password: this.patient.password,
            doctor_id: this.patient.doctor_id,
            role_id: this.patient.role_id
          })
          .then(res => {
            this.fetchpatients();
            setTimeout(() => {
              this.saveLoading = false;
            }, 2000);
            this.$toast.success(`${res.data.message}`, {
              timeout: 5000
            });
          })
          .catch(err => {
            setTimeout(() => {
              this.saveLoading = false;
            }, 2000);
            var errors = err.response;
            this.$toast.error(`${errors}`, {
              timeout: 5000
            });
          });
      });
    },
    deletePatient(patient) {
      axios
        .post("/patients/delete/" + patient._id)
        .then(response => {
          console.log(response);
          this.$toast.success(`${response.data.message}`, {
            timeout: 5000
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>>