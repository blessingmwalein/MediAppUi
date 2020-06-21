<template>
  <div
    class="modal fade"
    :id="'exampleModal'+appointment.order_id"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div :class="'modal-header color-'+index">
          <h5
            class="modal-title"
            id="exampleModalLabel"
            style="color:white;text-align:center;"
          >{{ appointment.title }}</h5>
          <button
            type="button"
            class="close"
            style="color:white"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="timetable-image container-fluid text-align-center">
            <img width="440px" height="200px" src="assets/img/appoint.jpg" alt="Lucha Libre" />
          </div>
          <hr />
          <div class="timetable-time" style="text-align:center; padding:10px; font-size:20px;">
            <div class="alert alert-info fade show" role="alert">
              <strong>{{ appointment.start_time +'-'+appointment.end_time }}</strong>
            </div>
          </div>

          <div class="timetable-desc" style="text-align:center">
            <p>{{ appointment.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["appointment", "index"]
};
</script>>