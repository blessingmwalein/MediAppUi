export default function guest({next, store}){
    if(store.state.user.token){
        return next({
            name:'Home'
        })
    }
    return next()
}