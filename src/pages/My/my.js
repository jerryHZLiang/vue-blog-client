import blog from '../../api/blog'
import {mapGetters} from "vuex";

export default {
  name: 'My',
  data () {
    return {
      blogs: [],
      page:1,
      total:0
    }
  },
  computed:{
    ...mapGetters(['user'])
  },
  created(){
    this.page = parseInt(this.$route.query.page) || 1
    blog.getBlogsByUserId(this.user.id,{page:this.page})
      .then(res=>{
        this.page = res.page
        this.total = res.total
        this.blogs = res.data
      })
  },
  methods:{
    onPageChange(newPage){
      blog.getBlogsByUserId(this.user.id,{ page: newPage }).then(res => {
        this.blogs = res.data
        this.total = res.total
        this.page = res.page
        this.$router.push({ path: '/my', query: { page: newPage}})
      })
    },
    onDelete(blogId) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(()=>{
        console.log(blogId)
       return  blog.deleteBlog({ blogId })
      }).then(()=>{
        this.$message.success('删除成功')
        this.blogs = this.blogs.filter(blog => blog.id !== blogId)
      }).catch(err=>{
        console.log(err)
      })
    },
    splitDate(dataStr) {
      let dateObj = typeof dataStr === 'object' ? dataStr : new Date(dataStr)
      return {
        date: dateObj.getDate(),
        month: dateObj.getMonth() + 1,
        year: dateObj.getFullYear()
      }
    }
  }
}
