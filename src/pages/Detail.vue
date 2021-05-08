<template>
  <Layout>
    <div class="article-title">{{ globalData.description }}</div>
    <div class="time">
      <p>发布 {{ globalData.created_at }}</p>
      <p>更新 {{ globalData.updated_at }}</p>
    </div>
    <div class="icon-wrappers">
      <div class="icon-item">
        <div class="star">
          <i class="el-icon-star-off"></i>
          <span>{{ globalData.forks_count }}</span>
        </div>
        <div class="watch">
          <i class="el-icon-collection-tag"></i>
          <span>{{ globalData.subscribers_count }}</span>
        </div>
        <div class="darling">
          <i class="el-icon-bell"></i>
          <span>{{ globalData.watchers_count }}</span>
        </div>
      </div>

      <div class="languages">
        <el-button type="success" size="mini">
          {{ globalData.license.spdx_id }}
        </el-button>
        <el-button type="primary" size="mini">{{
          globalData.language
        }}</el-button>
      </div>
    </div>
    <div class="show">
      <div class="title">演示</div>
      <a class="link" :href="globalData.html_url" type="open">{{
        globalData.html_url
      }}</a>
    </div>
  </Layout>
</template>

<script>
import { getDetail } from '../api'
export default {
  metaInfo: {
    title: 'Detail'
  },
  data() {
    return {
      globalData: {}
    }
  },
  async mounted() {
    const name = this.$route.query.name
    const { data } = await getDetail(name)
    this.globalData = data
  }
}
</script>

<style>
.icon-wrappers {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  position: relative;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
}
.icon-item {
  display: flex;
  align-items: center;
  padding: 0 10px;
}
.icon-wrappers i {
  font-size: 20px;
}
.icon-wrappers span {
  margin-left: 4px;
}
.watch {
  margin: 0 20px;
}
.article-title {
  font-size: 20px;
  border-bottom: 1px solid #ccc;
  padding: 10px;
}
.time p {
  margin: 20px 0;
  color: #999;
  font-size: 14px;
  padding: 0 10px;
}
.show {
  padding: 30px 10px;
}
.show .title {
  font-size: 20px;
  font-weight: bold;
}
.link {
  margin-top: 20px;
  color: #0366d6;
  cursor: pointer;
  text-decoration: none;
}
</style>
