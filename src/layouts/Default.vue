<template>
  <div class="layout">
    <header class="header">
      <div class="name">Peculiar</div>
      <div class="desc">欢迎来到blog空间</div>
      <div class="btn">
        <a class="git">github主页</a>
        <a class="git">blog</a>
      </div>
    </header>
    <div class="card">
      <div class="user">
        <el-dropdown>
          <span class="el-dropdown-link">
            了解博主<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>github</el-dropdown-item>
            <el-dropdown-item>blog</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="other">
        <el-dropdown>
          <span class="el-dropdown-link">
            其它博客<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>掘金</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="icon" @click="handleProcess">
        <i class="el-icon-video-play play"> </i>
      </div>
      <div class="circle" v-if="showProcess">
        <el-progress
          type="dashboard"
          :percentage="percentage"
          :color="colors"
        ></el-progress>
        <div>
          <el-button-group>
            <el-button icon="el-icon-minus" @click="decrease"></el-button>
            <el-button icon="el-icon-plus" @click="increase"></el-button>
          </el-button-group>
        </div>
      </div>
      <div class="long">
        <el-progress :percentage="100"></el-progress>
      </div>
      <div class="avatar">
        <img src="https://avatars.githubusercontent.com/u/30425217?v=4" />
      </div>
    </div>
    <nav>
      <el-col :span="4">
        <el-menu default-active="1" :router="true" @select="handleSelect">
          <el-menu-item index="Dynamic">
            <i class="el-icon-apple"></i>
            <span slot="title">最新动态</span>
          </el-menu-item>
          <el-menu-item index="Social">
            <i class="el-icon-collection"></i>
            <span slot="title">社交圈</span>
          </el-menu-item>
          <el-menu-item index="Blog">
            <i class="el-icon-s-platform"></i>
            <span slot="title">博客列表</span>
          </el-menu-item>
          <el-menu-item index="Open">
            <i class="el-icon-reading"></i>
            <span slot="title">开源项目</span>
          </el-menu-item>
          <el-menu-item index="Help">
            <i class="el-icon-collection"></i>
            <span slot="title">使用帮助</span>
          </el-menu-item>
          <el-menu-item index="Readme">
            <i class="el-icon-copy-document"></i>
            <span slot="title">README.md</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </nav>
    <div class="slider">
      <slot></slot>
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import { getFollowerList } from '../api'
export default {
  data() {
    return {
      percentage: 10,
      colors: [
        { color: '#f56c6c', percentage: 20 },
        { color: '#e6a23c', percentage: 40 },
        { color: '#5cb87a', percentage: 60 },
        { color: '#1989fa', percentage: 80 },
        { color: '#6f7ad3', percentage: 100 }
      ],
      showProcess: false
    }
  },
  methods: {
    increase() {
      this.percentage += 10
      if (this.percentage > 100) {
        this.percentage = 100
      }
    },
    decrease() {
      this.percentage -= 10
      if (this.percentage < 0) {
        this.percentage = 0
      }
    },
    handleProcess() {
      this.showProcess = !this.showProcess
    },
    handleSelect(...args) {
      // const page = 1
      // const per_page = 10
      // getFollowerList(page, per_page).then(res => {
      //   console.log(res)
      // })
    }
  }
}
</script>
<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

.layout {
  max-width: 1080px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 360px;
  background-image: linear-gradient(
    120deg,
    rgb(38, 144, 249),
    rgb(252, 45, 45)
  );
  color: rgb(255, 255, 255);
}

.name {
  font-size: 3.25rem;
  margin-top: 0;
  margin-bottom: 0.1rem;
}
.desc {
  font-size: 1.25rem;
  margin: 20px auto;
  font-weight: 400;
  opacity: 0.7;
}
.btn {
  display: flex;
  align-items: center;
  margin-right: 1.5rem;
}
a {
  padding: 0.75rem 1rem;
  display: inline-block;
  margin-bottom: 1rem;
  color: hsla(0, 0%, 100%, 0.7);
  background-color: hsla(0, 0%, 100%, 0.08);
  border: 1px solid hsla(0, 0%, 100%, 0.2);
  border-radius: 0.3rem;
  margin-left: 1.5rem;
  transition: color 0.2s, background-color 0.2s, border-color 0.2s;
}
.card {
  border-radius: 4px;
  border: 1px solid #ebeef5;
  background-color: #fff;
  color: #303133;
  transition: 0.3s;
  position: relative;
  z-index: 2;
  margin: -30px auto auto;
  width: 64rem;
  height: 55px;
  display: flex;
  align-items: center;
}
.user {
  margin-left: 20px;
}
.other {
  margin-left: 20px;
}
.icon {
  margin-left: 220px;
  position: relative;
}
.icon .play {
  font-size: 20px;
  height: 20px;
  width: 20px;
  border: 1px solid #ccc;
  border-radius: 50%;
  padding: 6px;
}
.circle {
  position: absolute;
  left: 347px;
  top: -187px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 4px;
  padding: 10px 20px;
}
.long {
  display: block;
  width: 300px;
  margin-left: 20px;
}
.avatar img {
  height: 45px;
  width: 45px;
  position: absolute;
  right: 5px;
  bottom: 8px;
}
.link {
  margin: 0;
  padding: 0;
}
.slider {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  margin-left: 240px;
  margin-top: 20px;
  margin-bottom: 100px;
  border-bottom: 1px solid #ccc;
}
.el-menu {
  width: 200px;
  margin-top: 20px !important;
  margin-left: 27px !important;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
