<template>
  <div class="container">
    <div class="main-wrapper login-body">
      <div class="login-wrapper">
        <div class="container">
          <div class="loginbox">
            <div class="login-left">
              <img class="img-fluid" src="assets/img/logot.png" alt="Logo" />
            </div>
            <div class="login-right">
              <div class="login-right-wrap">
                <h1>Register</h1>
                <p class="account-subtitle">
                  <img
                    class="img-fluid"
                    height="80px"
                    width="150px"
                    src="/assets/img/logot.png"
                    alt="Logo"
                  />
                </p>
                <!-- Form -->
                <form action>
                  <div class="form-group">
                    <input
                      class="form-control"
                      v-model="first_name"
                      type="text"
                      placeholder="Enter Firstname"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      class="form-control"
                      v-model="last_name"
                      type="text"
                      placeholder="Enter Lastname"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      class="form-control"
                      v-model="email"
                      type="email"
                      placeholder="Enter Email"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      class="form-control"
                      v-model="password"
                      type="paasword"
                      placeholder="Password"
                    />
                  </div>
                  <!-- <div class="form-group">
										<input class="form-control" type="text" placeholder="Confirm Password">
                  </div>-->
                  <div class="form-group mb-0">
                    <button
                      @click="register"
                      v-if="loading==false"
                      class="btn btn-primary btn-block"
                      type="submit"
                    >Register</button>
                    <div v-if="loading==true" class="d-flex justify-content-center">
                      <div class="spinner-border text-primary" role="status">
                        <span class="sr-only">Loading...</span>
                      </div>
                    </div>
                  </div>
                </form>
                <!-- /Form -->
                <div class="login-or">
                  <span class="or-line"></span>
                  <span class="span-or">or</span>
                </div>
                <!-- /Social Login -->
                <div class="text-center dont-have">
                  Already have an account?
                  <router-link to="/login">Login</router-link>
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

export default {
  data() {
    return {
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      loading: false
    };
  },
  methods: {
    register() {
      this.loading = true;
      axios
        .post("/medico/register", {
          email: this.email,
          password: this.password,
          first_name: this.first_name,
          last_name: this.last_name
        })
        .then(res => {
          console.log(res);
          setTimeout(function() {
            router.push({ name: "Login" });
          }, 3000);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
