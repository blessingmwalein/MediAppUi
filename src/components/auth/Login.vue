<template>
  <div class="container">
    <div class="main-wrapper login-body">
      <div class="login-wrapper">
        <div class="container">
          <div class="loginbox">
            <div class="login-left">
              <img class="img-fluid" src="/assets/img/logo.png" alt="Logo" />
            </div>
            <div class="login-right">
              <div class="login-right-wrap">
                <div v-if="errors" class="alert alert-danger text-center" role="alert">{{ errors }}</div>
                <h1>Login</h1>
                <p class="account-subtitle">mediApp</p>
                <!-- Form -->
                <form action>
                  <div class="form-group">
                    <input class="form-control" v-model="email" type="text" placeholder="Email" />
                  </div>
                  <div class="form-group">
                    <input
                      class="form-control"
                      v-model="password"
                      type="password"
                      placeholder="Password"
                    />
                  </div>
                  <div class="form-group">
                    <button
                      @click="login"
                      v-if="loading==false"
                      class="btn btn-primary btn-block"
                      type="submit"
                    >Login</button>
                    <div v-if="loading==true" class="d-flex justify-content-center">
                      <div class="spinner-border text-primary" role="status">
                        <span class="sr-only">Loading...</span>
                      </div>
                    </div>
                  </div>
                </form>
                <!-- /Social Login -->
                <div class="text-center dont-have">
                  Don’t have an account?
                  <router-link to="/register">Register</router-link>
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
import router from "../../router";
import EventBus from "../EventBus";
import jwtecode from "jwt-decode";

export default {
  data() {
    return {
      email: "",
      password: "",
      loading: false,
      errors: ""
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
                console.log(response.data.hospital_id)
                localStorage.setItem("hospital_id", response.data.hospital_id);
                this.$store.state.user.hospital_id=response.data.hospital_id
            })
            .catch(err2 => {
              console.log(err2);
            });
          this.$store.state.user.token = res.data.token;
          this.email = "";
          this.password = "";
          setTimeout(() => {
            this.loading = false;
            router.push({ name: "Hospital" });
            this.$toast.success("Wapinda", {
              timeout: 6000
            });
          }, 5000);
        })
        .catch(err => {
          setTimeout(() => {
            this.loading = false;
            this.errors = err.response;

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
</style>