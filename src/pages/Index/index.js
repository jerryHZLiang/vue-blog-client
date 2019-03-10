import blog from '@/api/blog.js'
export default {
  name: 'Index',
  data () {
    return {
      blogs: [],
      total: 0,
      page: 1
    }
  },
  created(){
    this.page = parseInt(this.$route.query.page) || 1
    blog.getIndexBlogs({ page: this.page }).then(res=>{
      this.blogs = res.data
      this.total = res.total
      this.page = res.page
    })
  },
  methods:{
    onPageChange(newPage){
      blog.getIndexBlogs({ page: newPage }).then(res => {
        console.log(res.data)
        this.blogs = res.data
        this.total = res.total
        this.page = res.page
        this.$router.push({ path: '/', query: { page: newPage}})
      })
    }
  }
}
