<template>
  <div class="col-md-7 col-lg-8 col-xl-9">
    <div class="row">
      <div class="col-sm-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Schedule Timings</h4>
            <div class="profile-box">
              <div class="row">
                <div class="col-md-3">
                  <div class="form-group">
                    <label>Timing Slot Duration</label>
                    <select class="select form-control">
                      <option>-</option>
                      <option>15 mins</option>
                      <option selected="selected">30 mins</option>
                      <option>45 mins</option>
                      <option>1 Hour</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-3">
                  <button
                    type="button"
                    @click.prevent="confirmSwitch()"
                    v-if="appointmentsw.length >1"
                    class="btn btn-dark"
                    style="margin-top:30px"
                  >Confirm switch</button>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="card schedule-widget mb-0">
                    <!-- Schedule Header -->
                    <div class="schedule-header">
                      <!-- Schedule Nav -->
                      <div class="schedule-nav">
                        <ul class="nav nav-tabs nav-justified">
                          <li class="nav-item">
                            <a class="nav-link" data-toggle="tab" href="#slot_sunday">Sunday</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link active" data-toggle="tab" href="#slot_monday">Monday</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" data-toggle="tab" href="#slot_tuesday">Tuesday</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" data-toggle="tab" href="#slot_wednesday">Wednesday</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" data-toggle="tab" href="#slot_thursday">Thursday</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" data-toggle="tab" href="#slot_friday">Friday</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" data-toggle="tab" href="#slot_saturday">Saturday</a>
                          </li>
                        </ul>
                      </div>
                      <!-- /Schedule Nav -->
                    </div>
                    <!-- /Schedule Header -->

                    <!-- Schedule Content -->
                    <div class="tab-content schedule-cont">
                      <!-- Sunday Slot -->
                      <div id="slot_sunday" class="tab-pane fade">
                        <h4 class="card-title d-flex justify-content-between">
                          <span>Time Slots</span>
                          <a class="edit-link" data-toggle="modal" href="#add_time_slot">
                            <i class="fa fa-plus-circle"></i> Add Slot
                          </a>
                        </h4>
                        <p class="text-muted mb-0">Not Available</p>
                      </div>
                      <!-- /Sunday Slot -->

                      <!-- Monday Slot -->
                      <div id="slot_monday" class="tab-pane fade show active">
                        <h4 class="card-title d-flex justify-content-between">
                          <span>{{ isSwitch==false ? 'Time Slots':'Click 2 slots to switch'}}</span>

                          <a
                            @click.prevent="switchApp()"
                            class="edit-link"
                            data-toggle="modal"
                            href="#edit_time_slot"
                            style="color:#ff0070"
                          >
                            <i
                              :class="{'fa fa-check checked':isSwitch==true,'fa fa-check check':isSwitch==false}"
                            ></i>Switch Appointments
                          </a>
                        </h4>
                        <!-- Slot List -->
                        <div class="doc-times">
                          <div
                            v-for="(event, index) in appointments"
                            :key="event.id"
                            :class="'doc-slot-list border'+index"
                            @click="changeClass(event, index)"
                          >
                            {{  formatDate(event.start_time)+"-"+formatDate(event.end_time)}}
                            <a
                              href="javascript:void(0)"
                              class="delete_schedule"
                            >
                              <i class="fa fa-times"></i>
                            </a>
                          </div>
                        </div>
                        <!-- /Slot List -->
                      </div>
                      <!-- /Monday Slot -->

                      <!-- Tuesday Slot -->
                      <div id="slot_tuesday" class="tab-pane fade">
                        <h4 class="card-title d-flex justify-content-between">
                          <span>Time Slots</span>
                          <a class="edit-link" data-toggle="modal" href="#add_time_slot">
                            <i class="fa fa-plus-circle"></i> Add Slot
                          </a>
                        </h4>
                        <p class="text-muted mb-0">Not Available</p>
                      </div>
                      <!-- /Tuesday Slot -->

                      <!-- Wednesday Slot -->
                      <div id="slot_wednesday" class="tab-pane fade">
                        <h4 class="card-title d-flex justify-content-between">
                          <span>Time Slots</span>
                          <a class="edit-link" data-toggle="modal" href="#add_time_slot">
                            <i class="fa fa-plus-circle"></i> Add Slot
                          </a>
                        </h4>
                        <p class="text-muted mb-0">Not Available</p>
                      </div>
                      <!-- /Wednesday Slot -->

                      <!-- Thursday Slot -->
                      <div id="slot_thursday" class="tab-pane fade">
                        <h4 class="card-title d-flex justify-content-between">
                          <span>{{ isSwitch==false ? 'Time Slots':'Click 2 slots to switch'}}</span>
                        </h4>
                        <p class="text-muted mb-0">Not Available</p>
                      </div>
                      <!-- /Thursday Slot -->

                      <!-- Friday Slot -->
                      <div id="slot_friday" class="tab-pane fade">
                        <h4 class="card-title d-flex justify-content-between">
                          <span>Time Slots</span>
                          <a class="edit-link" data-toggle="modal" href="#add_time_slot">
                            <i class="fa fa-plus-circle"></i> Add Slot
                          </a>
                        </h4>
                        <p class="text-muted mb-0">Not Available</p>
                      </div>
                      <!-- /Friday Slot -->

                      <!-- Saturday Slot -->
                      <div id="slot_saturday" class="tab-pane fade">
                        <h4 class="card-title d-flex justify-content-between">
                          <span>Time Slots</span>
                          <a class="edit-link" data-toggle="modal" href="#add_time_slot">
                            <i class="fa fa-plus-circle"></i> Add Slot
                          </a>
                        </h4>
                        <p class="text-muted mb-0">Not Available</p>
                      </div>
                      <!-- /Saturday Slot -->
                    </div>
                    <!-- /Schedule Content -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade custom-modal" id="add_time_slot">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add Time Slots</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="hours-info">
                <div class="row form-row hours-cont">
                  <div class="col-12 col-md-10">
                    <div class="row form-row">
                      <div class="col-12 col-md-6">
                        <div class="form-group">
                          <label>Start Time</label>
                          <select class="form-control">
                            <option>-</option>
                            <option>12.00 am</option>
                            <option>12.30 am</option>
                            <option>1.00 am</option>
                            <option>1.30 am</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-12 col-md-6">
                        <div class="form-group">
                          <label>End Time</label>
                          <select class="form-control">
                            <option>-</option>
                            <option>12.00 am</option>
                            <option>12.30 am</option>
                            <option>1.00 am</option>
                            <option>1.30 am</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="add-more mb-3">
                <a href="javascript:void(0);" class="add-hours">
                  <i class="fa fa-plus-circle"></i> Add More
                </a>
              </div>
              <div class="submit-section text-center">
                <button type="submit" class="btn btn-primary submit-btn">Save Changes</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- /Add Time Slot Modal -->
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      appointments: [],
      loading: true,
      errors: "",
      hospital_id: "",
      isSwitch: false,
      appointmentsw: [],
      doctornames: []
    };
  },
  mounted() {
    this.fetchAppointmnets();
  },
  methods: {
    fetchAppointmnets() {
      this.hospital_id = this.$store.state.user.hospital_id;

      axios
        .get("/appointment/" + this.hospital_id)
        .then(response => {
          this.appointments = response.data;
          setTimeout(() => {
            this.loading = false;
          }, 3000);
        })
        .catch(err => {
          setTimeout(() => {
            this.loading = false;
            this.errors = err.response.data[0].message;
            this.$toast.error(`${this.errors}`, {
              timeout: 5000
            });
          }, 2000);
        });
    },
    toppx(event) {
      var newDate = new Date(event.start_time);

      var formatedDate = newDate.getHours() + ":" + newDate.getMinutes() + "0";

      if (formatedDate == "08:00") {
        return "0px";
      } else if (formatedDate == "9:00") {
        return "55px";
      } else if (formatedDate == "10:00") {
        return "110px";
      } else if (formatedDate == "11:00") {
        return "165px";
      } else if (formatedDate == "12:00") {
        return "220px";
      } else if (formatedDate == "13:00") {
        return "275px";
      } else if (formatedDate == "14:00") {
        return "330px";
      } else if (formatedDate == "15:00") {
        return "385px";
      } else if (formatedDate == "16:30") {
        return "440px";
      } else if (formatedDate == "17:00") {
        return "495px";
      } else if (formatedDate == "18:00") {
        return "550px";
      } else if (formatedDate == "19:00") {
        return "605px";
      } else if (formatedDate == "20:00") {
        return "660px";
      }
    },
    formatDate(oldDate) {
      var date = new Date(oldDate);
      var days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ];
      return date.getHours() + ":" + date.getMinutes() + "0";
    },
    changeClass(event, index) {
      if (this.isSwitch == false) {
        this.$toast.error("Tick the red chekbox first", {
          timeout: 5000
        });
        return;
      }
      document.querySelector(".border" + index).style.border =
        "border: 1px solid #ccc";
      document.querySelector(".border" + index).style.background = "#fff";
      document.querySelector(".border" + index).style.color = "#272b41";

      if (this.appointmentsw.length <= 1) {
        this.appointmentsw.push(event);
      } else {
        this.$toast.error("Can On switch two appointments", {
          timeout: 5000
        });
        document.querySelector(".border" + index).style.border = "";
        document.querySelector(".border" + index).style.background = "";
        document.querySelector(".border" + index).style.color = "";
      }
    },
    confirmSwitch() {
      console.log(this.appointmentsw[0]._id)
      console.log(this.appointmentsw[1]._id)

      axios
        .post("/appointment/switch", {
          appointment1_id: this.appointmentsw[0]._id,
          appointment2_id: this.appointmentsw[1]._id
        })
        .then(response => {
          this.fetchAppointmnets();
          
          this.$toast.success(`${response.data.message}`, {
            timeout: 5000
          });
        })
        .catch(err => {
          console.log(err);
        });
    },
    getDoctorName(doctor_id) {
      var doctor_name = "";
      axios.get("/doctors/show/" + doctor_id).then(response => {
        console.log(response.data.fname);
        doctor_name = response.data.fname + " " + response.data.lname;
        this.doctornames.push(doctor_name);
      });
    },
    switchApp() {
      if (this.isSwitch == false) {
        this.isSwitch = true;
      } else {
        this.isSwitch = false;
      }
    }
  }
};
</script>

<style scoped>
.check {
  border: 2px solid red;
  padding: 5px;
  border-radius: 3px;
  color: red;
}
.check i {
  color: red;
}

.checked {
  background-color: red;
  border: 2px solid red;
  padding: 5px;
  border-radius: 3px;
  color: white;
}
.checked i {
  color: white;
}

.tag {
  background-color: #fff;
  border-radius: 4px;
  color: #272b41;
  padding: 5px 10px;
  position: relative;
  margin: 0 0.5rem 0.5rem 0;
  font-size: 14px;
  border: 1px solid #ccc;
  display: inline-block;
}
.doc-slot-list {
  cursor: pointer;
}
</style>