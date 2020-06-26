export default function auth({next, store}){
    if(store.state.user.user_type=="doctor"){
        return next({
            name:'DoctorDashboard'
        })
    }
    return next()
}