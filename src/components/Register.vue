<template>
    <div class="container">
        <div class="row">
          <div class="col-md-6 mt-5 mx-auto">
            <form action=""  @submit.prevent="register">
                <h1 class="h3 mb-3 font-weight-normal">Sign Up</h1>
                 <div class="form-group">
                 <label for="email">First Name</label>
                  <input type="text" v-model="first_name" class="form-control" placeholder="Enter Firstname">
                </div>
                 <div class="form-group">
                 <label for="email">Last Name</label>
                  <input type="text" v-model="last_name" class="form-control" placeholder="Enter Lastname">
                </div>
                <div class="form-group">
                 <label for="email">Email</label>
                  <input type="last_name" v-model="email" class="form-control" placeholder="Enter Email">
                </div>
                <div class="form-group">
                 <label for="password">Password</label>
                  <input type="password" v-model="password" class="form-control" placeholder="Enter Password">
                </div>
                <button class="btn btn-lg btn-primary btn-block">
                    Sign Up
                </button>
            </form>
          </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import router from "../router"

export default {
    data(){
        return {
            email:'',
            password:'',
            first_name:'',
            last_name:''
        }
    },
    methods:{
        register(){
            axios.post('/medico/register', {
                email:this.email,
                password:this.password,
                first_name:this.first_name,
                last_name:this.last_name
            })
            .then((res)=>{
                console.log(res)
                router.push({name:'Login'})
            })
            .catch((err)=>{
                console.log(err)
            })        
        },
    }
}
</script>
