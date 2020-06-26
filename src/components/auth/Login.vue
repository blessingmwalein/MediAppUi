<template>
  <div
    class="content"
    style="min-height: 448px;padding-top:80px; padding-bottom:180px; background-color:white"
  >
    <div class="container-fluid justify-content-center">
      <div class="row">
        <div class="col-md-8 offset-md-2">
          <!-- Login Tab Content -->
          <div class="account-content">
            <div class="row align-items-center justify-content-center">
              <div class="col-md-7 col-lg-6 login-left">
                <img src="assets/img/login-banner.png" class="img-fluid" alt="Doccure Login" />
              </div>
              <div class="col-md-12 col-lg-6 login-right">
                <div class="login-header justify-content-center" style="text-align:center">
                  <h3>
                    <span>
                      <img
                        class="img-fluid"
                        height="70px"
                        width="150px"
                        src="/assets/img/logot.png"
                        alt="Logo"
                      />
                    </span>
                  </h3>
                </div>
                <form>
                  <div class="form-group form-focus">
                    <input type="email" v-model="email" class="form-control floating" />
                    <label class="focus-label">Email</label>
                  </div>
                  <div class="form-group form-focus">
                    <input type="password" v-model="password" class="form-control floating" />
                    <label class="focus-label">Password</label>
                  </div>
                  <div class="text-right">
                    <a class="forgot-link" href="#">Forgot Password ?</a>
                  </div>

                  <button
                    @click="login"
                    v-if="loading==false"
                    class="btn btn-primary btn-block btn-lg login-btn"
                    type="submit"
                  >Login</button>
                  <div v-if="loading==true" class="d-flex justify-content-center">
                    <div class="spinner-border text-primary" role="status">
                      <span class="sr-only">Loading...</span>
                    </div>
                  </div>
                  <div class="login-or">
                    <span class="or-line"></span>
                    <span class="span-or">or</span>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <!-- /Login Tab Content -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import router from "../../router";
import EventBus from "../EventBus";
import jwtecode from "jwt-decode";

export default {
  data() {
    return {
      email: "",
      password: "",
      loading: false,
      errors: "",
      user_type: ""
    };
  },
  methods: {
    login() {
      this.loading = true;
      axios
        .post("/medico/login", {
          email: this.email,
          password: this.password
        })
        .then(res => {
          localStorage.setItem("usertoken", res.data.token);
          var decoded = jwtecode(res.data.token);

          var uid = decoded.uid;
          console.log(uid);

          axios
            .get("/medico/show/" + uid)
            .then(response => {
              console.log(response.data.hospital_id);
              localStorage.setItem("hospital_id", response.data.hospital_id);
              localStorage.setItem("user_type", response.data.role.name);
              this.$store.state.user.hospital_id = response.data.hospital_id;
              this.$store.state.user_type = response.data.role.name;
              this.user_type = response.data.role.name;
            })
            .catch(err2 => {
              console.log(err2);
            });
          this.$store.state.user.token = res.data.token;
          this.email = "";
          this.password = "";
          setTimeout(() => {
            this.loading = false;
            if (this.user_type == "admin") {
              router.push({ name: "Hospital" });
              this.$toast.success("Wapinda admin", {
                timeout: 6000
              });
            } else if (this.user_type == "doctor") {
              router.push({ name: "DoctorDashboard" });
              this.$toast.success("Mapinda Doctor", {
                timeout: 6000
              });
            }
          }, 5000);
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
      // this.loading=false
      this.emitMethod();
    },
    emitMethod() {
      EventBus.$emit("logged-in", "loggedin");
    }
  }
};
</script>
<style>
.account-content {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>