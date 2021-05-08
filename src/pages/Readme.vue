<template>
  <Layout>
    <div class="log">
      <div class="title">目录</div>
      <ul>
        <li
          v-for="(item, index) in list"
          :key="item.id"
          @click="handleJump(index)"
        >
          {{ item.text }}
        </li>
      </ul>
    </div>
  </Layout>
</template>

<script>
import { getRead } from '../api'
export default {
  metaInfo: {
    title: 'Readme'
  },
  data() {
    return {
      readData: {},
      list: [
        {
          id: 0,
          text: '演示地址'
        },
        {
          id: 1,
          text: '项目源码'
        }
      ]
    }
  },
  async mounted() {
    const res = await getRead()
    this.readData = res.data
  },
  methods: {
    handleJump(index) {
      if (index === 0) {
        window.open('https://github-laziji.github.io/#/user/readme/main')
      } else {
        window.open('https://github.com/GitHub-Laziji/VBlog')
      }
    }
  }
}
</script>

<style lang="css">
.log .title{
  font-size: 30px;
  font-weight: bold;
}
.log li{
  color: #0366d6;
  margin: 20px 10px;
  cursor: pointer;
}
</style>
