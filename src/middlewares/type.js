import Vue from 'vue'

export default {
    usertype(){
        return this.$store.state.user.user_type
    },

    check(){
        return localStorage.getItem('user_token')
    }
}