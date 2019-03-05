import request from '../helpers/request'

const URL={
  BLOG:'/blog',
  BLOGID:'/blog/:blogId',
}

export default {
  // 获取所有的blog
  getBlogs({page=1,userId,atIndex}={page:1}){
    return request(URL.BLOG)
  },
  // 获取首页的blog
  getIndexBlogs({page=1}={page:1}){
    return this.getBlogs({page,atIndex:true})
  },
  // 获取某个用户所有的blog
  getBlogsByUserId(userId,{page=1,atIndex}={page:1}){
    return this.getBlogs({userId,page,atIndex})
  },
  // blogDetail
  getDetail({blogId}){
    return request(URL.BLOGID.replace(':blogId',blogId))
  },
  updateBlog({blogId},{title,content,description,atIndex}){
    return request(URL.BLOGID.replace(':blogId',blogId),'PATCH',{title,content,description,atIndex})
  },
  deleteBlog({blogId}){
    return request(URL.BLOGID.replace(':blogId',blogId),'DELETE')
  },
  createBlog({title='',content='',description='',atIndex=false}={title:'',content:'',description:''}){
    console.log('create!')
    return request(URL.BLOG,'POST',{title,content,description})
  }
}
