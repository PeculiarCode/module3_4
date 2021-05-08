<template>
  <Layout>
    <div class="search">
      <el-input placeholder="请输入关键字" v-model="keyword"></el-input>
      <el-button icon="el-icon-search" circle @click="handleSearch"></el-button>
      <el-button icon="el-icon-share" circle @click="handleWrite"></el-button>
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
            <div class="des">{{ Object.keys(item.files)[0] }}</div>
          </div>
          <div class="bottom">
            <div class="update">最近更新{{ item.created_at }}</div>
            <div class="det">{{ item.description }}</div>
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
import { getBlog } from '../api'
import { errMsg } from '../utils'
export default {
  metaInfo: {
    title: 'Blog'
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
      const res = await getBlog(pageIndex, pageSize)
      this.list = res.data
    },
    async handleCurrent(e) {
      this.getList(e, this.pageSize)
    },
    handleWrite() {
      errMsg()
    },
    handleSearch() {
      if (this.keyword != '') {
        const result = this.list.filter(ele => {
          const key = Object.keys(ele.files)[0]
          return key.includes(this.keyword)
        })
        this.list = result
      } else {
        this.getList(this.pageIndex, this.pageSize)
      }
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
}
.list .top .des {
  margin-left: 20px;
  font-size: 20px;
  color: #1e6bb8;
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
</style>
