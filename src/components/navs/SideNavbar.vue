<template>
     <div class="sidebar" id="sidebar">
        <div class="sidebar-inner slimscroll">
            <div id="sidebar-menu" class="sidebar-menu">
                <ul>
                    <li class="menu-title"> 
                        <span>Main</span>
                    </li>
                    <li class="active"> 
                        <a href="index.html"><i class="fe fe-home"></i> <span>Hospital</span></a>
                    </li>
                    <li> 
                        <router-link to="/appointments"><i class="fe fe-layout"></i> <span>Appointments</span></router-link>
                    </li>
                    <li> 
                        <router-link  to="/doctors"><i class="fe fe-user-plus"></i> <span>Doctors</span></router-link >
                    </li>
                    <li> 
                        <router-link to="/patients"><i class="fe fe-user"></i> <span>Patients</span></router-link>
                    </li>
                    <li> 
                        <router-link to="/reviews"><i class="fe fe-star-o"></i> <span>Reviews</span></router-link>
                    </li>
                    <li> 
                        <a href="settings.html"><i class="fe fe-vector"></i> <span>Settings</span></a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>>