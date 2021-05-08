<template>
  <Layout>
    <div class="search">
      <el-input placeholder="请输入关键字" v-model="keyword"></el-input>
      <el-button icon="el-icon-search" circle @click="handleSearch"></el-button>
      <el-button icon="el-icon-share" @click="handleWrite" circle></el-button>
      <el-button
        class="edit"
        icon="el-icon-edit"
        type="primary"
        round
        @click="handleWrite"
        >写博客</el-button
      >
    </div>
    <div class="list">
      <ul>
        <li v-for="item in list" :key="item.id">
          <div class="top">
            <i class="el-icon-edit"></i>
            <div class="des" @click="handleInner(item)">
              {{ item.description }}
            </div>
          </div>
          <div class="bottom">
            <div class="update">最近更新{{ item.created_at }}</div>
            <div class="det">{{ item.description }}</div>
            <div class="icon-wrapper">
              <div class="star">
                <i class="el-icon-star-off"></i>
                <span>{{ item.stargazers_count }}</span>
              </div>
              <div class="watch">
                <i class="el-icon-collection-tag"></i>
                <span>{{ item.watchers_count }}</span>
              </div>
              <div class="darling">
                <i class="el-icon-bell"></i>
                <span>{{ item.forks_count }}</span>
              </div>
            </div>
            <div class="language">
              <el-button type="success" size="mini">
                {{ item.license.spdx_id }}
              </el-button>
              <el-button type="primary" size="mini">{{
                item.language
              }}</el-button>
            </div>
          </div>
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
import { getOpen } from '../api'
import { errMsg } from '../utils'
export default {
  metaInfo: {
    title: 'Open'
  },
  data() {
    return {
      pageIndex: 1,
      pageSize: 5,
      list: [],
      keyword: ''
    }
  },
  methods: {
    async getList(pageIndex, pageSize) {
      const res = await getOpen(pageIndex, pageSize)
      this.list = res.data
      console.log(this.list, 5599)
    },
    handleInner(data) {
      console.log(data)
      this.$router.push({
        path: '/Detail',
        query: {
          name: data.name
        }
      })
    },
    async handleCurrent(e) {
      this.getList(e, this.pageSize)
    },
    handleSearch() {
      if (this.keyword != '') {
        const result = this.list.filter(ele => {
          const key = ele.description
          return key.includes(this.keyword)
        })
        this.list = result
      } else {
        this.getList(this.pageIndex, this.pageSize)
      }
    },
    handleWrite() {
      errMsg()
    }
  },
  mounted() {
    this.getList(this.pageIndex, this.pageSize)
  }
}
</script>
<style>
.el-input {
  width: 300px;
}
.el-button {
  margin-left: 20px;
}
.edit {
  position: absolute;
  right: 0;
}
.search {
  display: flex;
  align-items: center;
  position: relative;
}
.list .top {
  display: flex;
  align-items: center;
  padding: 0 20px 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
}
.list li {
  border: 1px solid #ccc;
  border-radius: 10px;
  margin: 20px 0;
  padding: 20px 0;
  position: relative;
}
.list .top .des {
  margin-left: 20px;
  font-size: 20px;
  color: #1e6bb8;
  cursor: pointer;
}
.update {
  color: rgb(96, 108, 113);
  margin-bottom: 15px;
}
.bottom {
  margin-left: 20px;
}
.det {
  font-size: 18px;
  margin-top: 10px;
  line-height: 24px;
}
.el-pagination {
  margin-top: 20px;
  text-align: center;
}
.icon-wrapper {
  display: flex;
  align-items: center;
  margin-top: 10px;
}
.icon-wrapper i {
  font-size: 20px;
}
.icon-wrapper span {
  margin-left: 4px;
}
.watch {
  margin: 0 20px;
}
.language {
  position: absolute;
  right: 10px;
  bottom: 10px;
}
</style>
