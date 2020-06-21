<template>
    <div class="">
        <div class="page-wrapper">
           <div
                class="container justify-content-center text-center"
                style="padding-top:15%"
                v-if="loading==true"
                >
                <vue-loaders-ball-pulse color="#55ce63" scale="1.5" />
            </div>	
           <div v-else class="content container-fluid">	
                <!-- Page Header -->
                <div class="page-header">
                    <div class="row">
                        <div class="col-sm-12">
                            <h3 class="page-title">Welcome Admin!</h3>
                            <ul class="breadcrumb">
                                <li class="breadcrumb-item active">{{ hospital.name }}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- /Page Header -->
                
                <div class="row">
                    <div class="col-xl-4 col-sm-6 col-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="dash-widget-header">
                                    <span class="dash-widget-icon text-primary border-primary">
                                        <i class="fe fe-users"></i>
                                    </span>
                                    <div class="dash-count">
                                        <h3>{{ hospital.doctors.length > 0 ? hospital.doctors.length :'No Doctors'  }}</h3>
                                    </div>
                                </div>
                                <div class="dash-widget-info">
                                    <h6 class="text-muted">Doctors</h6>
                                    <div class="progress progress-sm">
                                        <div class="progress-bar bg-primary w-50"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-sm-6 col-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="dash-widget-header">
                                    <span class="dash-widget-icon text-success">
                                        <i class="fe fe-credit-card"></i>
                                    </span>
                                    <div class="dash-count">
                                        <h3>{{hospital.patients.length > 0 ? hospital.patients.length : 'No Patients' }}</h3>
                                    </div>
                                </div>
                                <div class="dash-widget-info">
                                    
                                    <h6 class="text-muted">Patients</h6>
                                    <div class="progress progress-sm">
                                        <div class="progress-bar bg-success w-50"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-sm-6 col-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="dash-widget-header">
                                    <span class="dash-widget-icon text-danger border-danger">
                                        <i class="fe fe-money"></i>
                                    </span>
                                    <div class="dash-count">
                                        <h3>{{hospital.appointments.length ? hospital.appointments.length : 'No Events' }}</h3>
                                    </div>
                                </div>
                                <div class="dash-widget-info">
                                    
                                    <h6 class="text-muted">Appointments</h6>
                                    <div class="progress progress-sm">
                                        <div class="progress-bar bg-danger w-50"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 d-flex">
                        <!-- Recent Orders -->
                        <div class="card card-table flex-fill">
                            <div class="card-header">
                                <h4 class="card-title">Doctors List</h4>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table table-hover table-center mb-0">
                                        <thead>
                                            <tr>
                                                <th>Doctor Name</th>
                                                <th>Gender</th>
                                                <th>Phone</th>
                                                <th>Doctor Rating</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="doctor in hospital.doctors" :key="doctor.id">
                                                <td>
                                                    <h2 class="table-avatar">
                                                        <router-link :to="{name:'DoctorProfile', params:{id:doctor._id}}" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="/assets/img/user.png" alt="User Image"></router-link>
                                                        <router-link :to="{name:'DoctorProfile', params:{id:doctor._id}}">Dr. {{ doctor.first_name +" "+ doctor.last_name }}</router-link>
                                                    </h2>
                                                </td>
                                                <td>{{ doctor.gender }}</td>
                                                <td>{{ doctor.phone }}</td>
                                                <td>
                                                    <i class="fe fe-star text-warning"></i>
                                                    <i class="fe fe-star text-warning"></i>
                                                    <i class="fe fe-star text-warning"></i>
                                                    <i class="fe fe-star text-warning"></i>
                                                    <i class="fe fe-star-o text-secondary"></i>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <!-- /Recent Orders -->
                        
                    </div>
                    <div class="col-md-6 d-flex">
                    
                        <!-- Feed Activity -->
                        <div class="card  card-table flex-fill">
                            <div class="card-header">
                                <h4 class="card-title">Patients List</h4>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table table-hover table-center mb-0">
                                        <thead>
                                            <tr>													
                                                <th>Patient Name</th>
                                                <th>Phone</th>
                                                <th>Address/th>
                                                <th>Gender</th>													
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="patient in hospital.patients" :key="patient.id">
                                                <td>
                                                    <h2 class="table-avatar">
                                                        <a href="profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="/assets/img/user.png" alt="User Image"></a>
                                                        <a href="profile.html">{{ patient.first_name + patient.last_name }} </a>
                                                    </h2>
                                                </td>
                                                <td>{{ patient.phone }}</td>
                                                <td>{{ patient.address }}</td>
                                                <td class="text-right">{{patient.gender}}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <!-- /Feed Activity -->
                        
                    </div>
                </div>
			</div>			
		</div>
    </div>
</template>
<script>
import jwtdecode from 'jwt-decode'
import axios from 'axios'

export default {
    data(){
        const token = localStorage.usertoken
        const decoded=jwtdecode(token)


        return {
            uid:decoded.uid,
            auth:'',
            user:{
                name:'',
                email:'',
                hopital_id:''
            },
            hospital:{},
            loading:true
        }
    },

    mounted(){
        axios.get('/medico/show/'+this.uid)
        .then((res)=>{
            this.user.name =res.data.first_name,
            this.user.email =res.data.last_name,
            this.user.hospital_id=res.data.hospital_id
            axios.get('/hospital/show/'+this.user.hospital_id)
                .then((response)=>{
                     setInterval(() => {
                         this.hospital = response.data
                        this.loading = false;
                    }, 2000);
                })
        })
    }
}
</script>>