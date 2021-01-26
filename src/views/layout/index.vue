<template>
  <el-container class="layout-container">
    <transition name="fade">
      <el-aside class="layout-aside">
        <Aside :is-collapse="isCollapse"/>
      </el-aside>
    </transition>
    <el-container>
      <el-header class="layout-header">
        <div class="header-content">
          <i
            class="el-icon-s-fold"
            @click="isCollapse = !isCollapse"
          />
          <span>孙俊强的管理系统</span>
        </div>
        <div class="header-content">
          <img :src="userInfo.url">
          <el-dropdown>
            <span class="el-dropdown-link">
              {{ userInfo.name }}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <i class="iconfont icon-Settingscontroloptions"/>
                <span>设置</span>
              </el-dropdown-item>
              <el-dropdown-item @click.native="dropOut">
                <i class="iconfont icon-exit"/>
                <span>退出</span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
      <!-- 子路有出口 -->
      <el-main class="layout-main" style="background:#00f">
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// import { routes } from '@/router'
import Aside from './components/aside'
import layoutApi from '@/api/layout/layoutApi.js'
export default {
  name: 'Layout',
  components: {
    Aside
  },
  data () {
    return {
      userInfo: {
        name: '',
        url: ''
      },
      isCollapse: false
    }
  },
  methods: {
    getUserInfo () {
      const data = {
        token: 'sunjunqiang123'
      }
      layoutApi.getUserInfo(data).then(res => {
        if (res.data.successful) {
          console.log(res.data)
          this.userInfo.name = res.data.name
          // this.userInfo.url = String(res.data.url)
          this.userInfo.url = require('../../../public/touxiang.jpeg')
          console.log(this.userInfo.url)
        } else {
          this.$router.push('/login')
        }
      })
    },
    dropOut () {
      this.$confirm('是否确认退出?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // 1、删除localStorage中存储的token的值
        window.localStorage.removeItem('token')
        // 2、跳转到login页面中去
        this.$router.push('/login')
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消退出成功'
        })
      })
    }
  },
  created () {
    // console.log(routes)
    this.getUserInfo()
  }
}
</script>

<style lang="scss" scoped>
  .layout-header {
    display: flex;
    justify-content: space-between;
    .header-content {
      display: flex;
      align-items: center;
      img {
        display: inline-block;
        height: 40px;
        width: 40px;
        border-radius: 50%;
      }
    }
    .el-dropdown{
      margin-left: 10px;
    }
  }
  .layout-container {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  .layout-aside {
    background-color: #002033;
    width: auto !important;
  }
</style>
