export default {
  name: 'Index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    onClick1(){
      this.$message.error('错误信息')
    }
  }
}
