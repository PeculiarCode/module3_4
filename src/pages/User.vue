<template>
  <Layout>
    <div class="user">
      <div class="first">
        <div class="name">{{ userInfo.login }}</div>
        <div class="back" @click="handleBack">返回</div>
      </div>
      <img class="avatar" :src="userInfo.avatar_url" />
      <div class="users">{{ userInfo.name }}</div>
      <div class="login">{{ userInfo.login }}</div>
      <div class="blog">
        <i class="el-icon-edit"></i>
        <div>{{ userInfo.blog }}</div>
      </div>
    </div>
  </Layout>
</template>

<script>
import { getUserDetail } from '../api'
export default {
  metaInfo: {
    title: 'User'
  },
  data() {
    return {
      userInfo: {}
    }
  },
  async mounted() {
    const user = this.$route.query.name
    const res = await getUserDetail(user)
    this.userInfo = res.data
  },
  methods: {
    handleBack() {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.user .first {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgb(149, 149, 149);
}
.first .name {
  font-size: 16px;
}
.back:hover {
  cursor: pointer;
  color: #409eff;
}
.avatar {
  width: 200px;
  height: 200px;
  margin-top: 20px;
}
.users {
  font-size: 30px;
  font-weight: bold;
  margin-top: 20px;
}
.login {
  margin: 20px 0;
}
.blog {
  display: flex;
  align-items: center;
}
.blog div {
  color: #409eff;
  margin-left: 10px;
  cursor: pointer;
}
</style>
