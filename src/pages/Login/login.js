import {mapActions} from "vuex";

export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
    }
  },

  methods:{
    ...mapActions(['login']),
    onLogin() {
      this.login({username: this.username, password: this.password})
        .then(()=>{
          this.$router.push({path: this.$route.query.redirect || '/'})
        })
    }
  }
}
