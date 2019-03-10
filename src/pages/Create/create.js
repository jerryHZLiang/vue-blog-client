import blog from '@/api/blog'

export default {
  name: 'Create',
  data () {
    return {
      title: '',
      description: '',
      content: '',
      atIndex: false
    }
  },
  methods:{
    onCreate(){
        blog.createBlog({
          title:this.title,
          content:this.content,
          description:this.description,
          atIndex:this.atIndex
        }).then(res=>{
          this.$message.success(res.msg)
          this.$router.push(`/detail/${res.data.id}`)
        })
    }
  }
}
