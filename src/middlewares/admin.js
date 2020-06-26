export default function auth({next, store}){
    if(store.state.user.user_type=="admin"){
        return next({
            name:'Home'
        })
    }
    return next()
}