<template>
  <div id="index">
    <section class="blog-posts">
      <router-link class="item" v-for="blog in blogs" :key="blogs.id" :to="`/detail/${blog.id}`">
        <figure class="avatar">
          <img :src="blog.user.avatar" :alt="blog.user.username">
          <figcaption>{{blog.user.username}}</figcaption>
        </figure>
        <h3>{{blog.title}}<span> {{friendlyDate(blog.createdAt)}}</span></h3>
        <p>{{blog.description}}</p>
      </router-link>
    </section>
    <section class="pagination">
      <el-pagination
        layout="prev, pager, next"
        :total="total"
        :current-page="page"
        @current-change="onPageChange">
      </el-pagination>
    </section>
  </div>
</template>
<script src="./index.js"></script>
<style scoped lang="less" src="./index.less"></style>
