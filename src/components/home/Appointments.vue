<template>
  <div>
    <div class="page-wrapper" style="min-height: 900px;">
      <div class="content container-fluid">
        <!-- Page Header -->
        <div class="page-header">
          <div class="row">
            <div class="col-sm-12">
              <h3 class="page-title">Appointments</h3>
              <ul class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="index.html">Dashboard</a>
                </li>
                <li class="breadcrumb-item active">Appointments</li>
              </ul>
            </div>
          </div>
        </div>
        <!-- /Page Header -->
        <div class="container">
          <div class="col-md-12">
            <div class="content">
              <div class="section">
                <div class="timetable-example">
                  <div class="tiva-timetable" data-view="week" data-mode="day" id="timetable-1">
                    <div class="timetable-week show-time">
                      <div class="timetable-axis">
                        <div class="axis-item">08:00</div>
                        <div class="axis-item">09:00</div>
                        <div class="axis-item">10:00</div>
                        <div class="axis-item">11:00</div>
                        <div class="axis-item">12:00</div>
                        <div class="axis-item">13:00</div>
                        <div class="axis-item">14:00</div>
                        <div class="axis-item">15:00</div>
                        <div class="axis-item">16:00</div>
                        <div class="axis-item">17:00</div>
                        <div class="axis-item">18:00</div>
                        <div class="axis-item">19:00</div>
                      </div>
                      <div
                        class="container justify-content-center text-center"
                        style="padding-top:15%"
                        v-if="loading==true"
                      >
                        <vue-loaders-ball-pulse color="#55ce63" scale="1.5" />
                      </div>
                      <div v-else class="timetable-columns">
                        <div class="timetable-column">
                          <div class="timetable-column-header">
                            Sunday
                            <br />
                            <span>Jun 14, 2020</span>
                          </div>
                          <div class="timetable-column-content">
                            <div
                              v-for="(event, index) in appointments"
                              :key="event.id"
                              class="cd-schedule__event cd-schedule__event--selected timetable-item"
                            >
                              <a
                                :class="'timetable-title color-'+index"
                                :style="{ top:toppx(event), height:'110px'}"
                                data-toggle="modal"
                                :href="'#exampleModal'+event.order_id"
                              >
                                <div class="timetable-title-wrap">
                                  <div class="timetable-name">{{ event.title }}</div>
                                  <div
                                    class="timetable-time"
                                  >{{ event.start_time }}-{{ event.end_time }}</div>
                                </div>
                              </a>
                            </div>
                          </div>
                          <div class="timetable-column-grid">
                            <div class="grid-item first-column"></div>
                            <div class="grid-item first-column"></div>
                            <div class="grid-item first-column"></div>
                            <div class="grid-item first-column"></div>
                            <div class="grid-item first-column"></div>
                            <div class="grid-item first-column"></div>
                            <div class="grid-item first-column"></div>
                            <div class="grid-item first-column"></div>
                            <div class="grid-item first-column"></div>
                            <div class="grid-item first-column"></div>
                          </div>
                        </div>
                        <div class="timetable-column">
                          <div class="timetable-column-header">
                            Monday
                            <br />
                            <span>Jun 15, 2020</span>
                          </div>
                          <div class="timetable-column-content"></div>
                          <div class="timetable-column-grid">
                            <div class="grid-item"></div>
                            <div class="grid-item"></div>
                            <div class="grid-item"></div>
                            <div class="grid-item"></div>
                            <div class="grid-item"></div>
                            <div class="grid-item"></div>
                            <div class="grid-item"></div>
                            <div class="grid-item"></div>
                            <div class="grid-item"></div>
                            <div class="grid-item"></div>
                          </div>
                        </div>
                        <div class="timetable-column">
                          <div class="timetable-column-header">
                            Tuesday
                            <br />
                            <span>Jun 16, 2020</span>
                          </div>
                          <div class="timetable-column-content"></div>
                          <div class="timetable-column-grid">
                            <div class="grid-item"></div>
                            <div class="grid-item"></div>
                            <div class="grid-item"></div>
                            <div class="grid-item"></div>
                            <div class="grid-item"></div>
                            <div class="grid-item"></div>
                            <div class="grid-item"></div>
                            <div class="grid-item"></div>
                            <div class="grid-item"></div>
                            <div class="grid-item"></div>
                          </div>
                        </div>
                        <div class="timetable-column">
                          <div class="timetable-column-header">
                            Wednesday
                            <br />
                            <span>Jun 17, 2020</span>
                          </div>
                          <div class="timetable-column-content"></div>
                          <div class="timetable-column-grid">
                            <div class="grid-item"></div>
                            <div class="grid-item"></div>
                            <div class="grid-item"></div>
                            <div class="grid-item"></div>
                            <div class="grid-item"></div>
                            <div class="grid-item"></div>
                            <div class="grid-item"></div>
                            <div class="grid-item"></div>
                            <div class="grid-item"></div>
                            <div class="grid-item"></div>
                          </div>
                        </div>
                        <div class="timetable-column">
                          <div class="timetable-column-header">
                            Thursday
                            <br />
                            <span>Jun 18, 2020</span>
                          </div>
                          <div class="timetable-column-content"></div>
                          <div class="timetable-column-grid">
                            <div class="grid-item"></div>
                            <div class="grid-item"></div>
                            <div class="grid-item"></div>
                            <div class="grid-item"></div>
                            <div class="grid-item"></div>
                            <div class="grid-item"></div>
                            <div class="grid-item"></div>
                            <div class="grid-item"></div>
                            <div class="grid-item"></div>
                            <div class="grid-item"></div>
                          </div>
                        </div>
                        <div class="timetable-column">
                          <div class="timetable-column-header">
                            Friday
                            <br />
                            <span>Jun 19, 2020</span>
                          </div>
                          <div class="timetable-column-content"></div>
                          <div class="timetable-column-grid">
                            <div class="grid-item"></div>
                            <div class="grid-item"></div>
                            <div class="grid-item"></div>
                            <div class="grid-item"></div>
                            <div class="grid-item"></div>
                            <div class="grid-item"></div>
                            <div class="grid-item"></div>
                            <div class="grid-item"></div>
                            <div class="grid-item"></div>
                            <div class="grid-item"></div>
                          </div>
                        </div>
                        <div class="timetable-column">
                          <div class="timetable-column-header last-column">
                            Saturday
                            <br />
                            <span>Jun 20, 2020</span>
                          </div>
                          <div class="timetable-column-content"></div>
                          <div class="timetable-column-grid">
                            <div class="grid-item"></div>
                            <div class="grid-item"></div>
                            <div class="grid-item"></div>
                            <div class="grid-item"></div>
                            <div class="grid-item"></div>
                            <div class="grid-item"></div>
                            <div class="grid-item"></div>
                            <div class="grid-item"></div>
                            <div class="grid-item"></div>
                            <div class="grid-item"></div>
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
    </div>
    <appointment-modal v-for="(appointment,index) in appointments" :key="appointment.id" :index="index" :appointment="appointment"></appointment-modal>
  </div>
</template>
<script>
import axios from "axios";
import AppointmentModal from '../Modals/AppointmentsModal'
export default {
  components:{
    AppointmentModal
  },
  data() {
    return {
      appointments: [],
      loading: true,
      errors: "",
      hospital_id:""
    };
  },
  mounted() {
    axios
      .get(/appointment/)
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
  methods: {
    toppx(event) {
      if (event.start_time == "08:00") {
        return "0px";
      } else if (event.start_time == "10:30") {
        return "110px";
      } else if (event.start_time == "12:30") {
        return "220px";
      } else if (event.start_time == "13:00") {
        return "330px";
      }
    }
  }
};
</script>
<style scoped>
table.calendar {
  margin-bottom: 0;
}

table.calendar > thead > tr > th {
  text-align: center;
}

table.calendar > tbody > tr > td {
  height: 20px;
}

table.calendar > tbody > tr > td > div {
  //padding: 8px;
  height: 40px;
  overflow: hidden;
  display: inline-block;
  vertical-align: middle;
  float: left;
}

table.calendar > tbody > tr > td.has-events {
  color: white;
  cursor: pointer;
  padding: 0;
  border-radius: 4px;
}

table.calendar > tbody > tr > td.has-events > div {
  background-color: #08c;
  border-left: 1px solid white;
}

table.calendar > tbody > tr > td.has-events > div:first-child {
  border-left: 0;
  margin-left: 1px;
}

table.calendar > tbody > tr > td.has-events > div.practice {
  opacity: 0.7;
}
table.calendar > tbody > tr > td.conflicts > div > span.title {
  color: red;
}
table.calendar > tbody > tr > td.max-conflicts > div {
  background-color: red;
  color: white;
}

table.calendar > tbody > tr > td.has-events > div > span {
  display: block;
  text-align: center;
}
table.calendar > tbody > tr > td.has-events > div > span a {
  color: white;
}

table.calendar > tbody > tr > td.has-events > div > span.title {
  font-weight: bold;
}

table.table-borderless > thead > tr > th,
table.table-borderless > tbody > tr > td {
  border: 0;
}

.table tbody tr.hover td,
.table tbody tr.hover th {
  background-color: whiteSmoke;
}
</style>
