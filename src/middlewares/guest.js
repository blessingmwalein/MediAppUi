export default function guest({next, store}){
    if(store.state.user.user_type=="admin"){
        return next({
            name:'Home'
        })
    }
    if(store.state.user.user_type=="doctor"){
        return next({
            name:'DoctorDashboard'
        })
    }
    return next()
}