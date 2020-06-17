<template>
    <div class="container">
     <div class="jumbotron mt-5">
       <div class="col-sm-8 mx-auto">
        <h1 class="text-center">Profile</h1>
       </div>
       <table class="table col-md-6 mx-auto">
        <tbody>
            <tr>
                <td>First Name</td>
                <td>{{first_name}}</td>
            </tr>
             <tr>
                <td>Last Name</td>
                <td>{{last_name}}</td>
            </tr>
             <tr>
                <td>Email</td>
                <td>{{email}}</td>
            </tr>
        </tbody>
       </table>
     </div>
    </div>
</template>

<script>
import axios from 'axios'
import jwtecode from 'jwt-decode'

export default {
    data(){
        const token =localStorage.usertoken
        const decoded =jwtecode(token)

        return {
            uid:decoded.uid,
            first_name:'',
            last_name:'',
            email:''
        }
    },

    mounted() {
      axios.get('/medico/show/'+this.uid)
      .then((res)=>{
          console.log(res.data)
          this.first_name = res.data.first_name,
          this.last_name =res.data.last_name,
          this.email =res.data.email
      })
      .catch((err)=>{
          console.log(err)
      })
    },
}
</script>