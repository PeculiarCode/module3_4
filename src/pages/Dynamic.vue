<template>
  <Layout>
    <div class="title">2018.5.19 更新</div>
    <div class="detail">
      <span>发布 2018-05-19 01:10:06</span>
      <span>更新 2018-05-19 01:10:06</span>
    </div>
    <div class="spec">
      <span>1 增加使用帮助</span>
      <span>2 改进readme不存在时的情况</span>
    </div>
    <img class="blog-img" src="../img/blog.png" alt="" />
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Dynamic'
  }
}
</script>

<style>
.title {
  font-size: 20px;
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
}
.blog-img {
  width: 100%;
}
.detail {
  display: flex;
  flex-direction: column;
  line-height: 1.5;
  color: rgb(96, 108, 113);
  margin: 20px 0;
  font-size: 14px;
}
.spec{
  display: flex;
  flex-direction: column;
  font-size: 18px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
  margin-bottom: 10px;
}
</style>
