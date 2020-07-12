export default function auth({next, store}){
    if(!store.state.user.token ){
        return next({
            name:'Login'
        })
    }
    return next()
}