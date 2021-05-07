<template>
  <Layout>
    <div class="tab">
      <ul>
        <li
          v-for="(item, index) in list"
          :key="item.id"
          @click="handleTab(index, 1)"
          :class="{ active: currentIndex === index }"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
    <div class="list">
      <ul>
        <li v-for="item in array" :key="item.id">
          <div class="blog-user">
            <i class="el-icon-star-off"></i>
            <p @click="handleUser(item)">{{ item.login }}</p>
          </div>
          <div class="link">
            <i class="el-icon-message"></i>
            <p @click="handleGitHub(item)">TA的主页</p>
          </div>
          <img class="avatar" :src="item.avatar_url" alt="" />
        </li>
      </ul>
    </div>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="180"
      @current-change="handleCurrent"
    >
    </el-pagination>
  </Layout>
</template>

<script>
import { getFollowerList, getFollowingList } from '../api'
export default {
  metaInfo: {
    title: 'Social'
  },
  data() {
    return {
      currentIndex: 0,
      pageIndex: 1,
      pageSize: 9,
      list: [
        {
          name: '关注',
          id: 0
        },
        {
          name: '粉丝',
          id: 1
        }
      ],
      array: []
    }
  },
  async mounted() {
    const result = await getFollowerList(this.pageIndex, this.pageSize)
    this.array = result.data
  },

  methods: {
    async handleTab(index, pageIndex) {
      this.currentIndex = index
      if (index === 0) {
        const result = await getFollowerList(pageIndex, this.pageSize)
        this.array = result.data
      } else {
        const result = await getFollowingList(pageIndex, this.pageSize)
        this.array = result.data
      }
    },
    async handleCurrent(e) {
      this.handleTab(this.currentIndex, e)
    },
    handleGitHub(item) {
      window.open(item.html_url)
    },
    handleUser(item) {
      this.$router.push({
        path: '/User',
        query: {
          name: item.login
        }
      })
    }
  }
}
</script>
<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
p {
  margin: 0;
  padding: 0;
  font-size: 14px;
  color: #409eff;
  cursor: pointer;
}
.tab ul {
  display: flex;
  align-items: center;
  margin: 10px 25px;
}
.tab li {
  cursor: pointer;
  padding: 10px 30px;
  border: 1px solid #ccc;
  margin-right: -1px;
  font-size: 14px;
}
.tab .active {
  color: #409eff;
  border-bottom: none;
  padding: 10.5px 30px;
  font-size: 14px;
}
.list ul {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
}
.list li {
  border-radius: 10px;
  border: 1px solid rgb(235, 235, 235);
  width: 200px;
  padding: 20px;
  transition: all 0.2s;
  margin: 12px;
  text-align: center;
}
.list li:hover {
  box-shadow: 0 2px 10px 2px rgba(0, 0, 0, 0.1);
}
.list .blog-user {
  display: flex;
  align-items: center;
}
.list .blog-user p {
  margin-left: 10px;
}
.list .link {
  display: flex;
  align-items: center;
  margin-top: 10px;
}
.list .link p {
  margin-left: 10px;
}
.list .avatar {
  width: 200px;
  height: 20 0px;
  margin-top: 20px;
  border-radius: 10px;
}
.el-pagination {
  text-align: center;
}
</style>
