<template>
  <el-menu
    default-active="/"
    class="el-menu-vertical-demo layout-asside"
    @open="handleOpen"
    @close="handleClose"
    background-color="#002033"
    text-color="#fff"
    active-text-color="#ffd04b"
    router
    :collapse="isCollapse"
    style="width: auto"
  >
    <el-menu-item index="/">
      <i class="iconfont icon-shouye"></i>
      <span slot="title">首页</span>
    </el-menu-item>
    <el-menu-item index="content">
      <i class="iconfont icon-neirongguanli"></i>
      <span slot="title">内容管理</span>
    </el-menu-item>
    <el-menu-item index="images">
      <i class="iconfont icon-image"></i>
      <span slot="title">素材管理</span>
    </el-menu-item>
    <el-menu-item index="postArticle">
      <i class="iconfont icon-publish"></i>
      <span slot="title">发布文章</span>
    </el-menu-item>
    <el-menu-item index="commentManage">
      <i class="iconfont icon-pinglun"></i>
      <span slot="title">评论管理</span>
    </el-menu-item>
    <el-menu-item index="fansManage">
      <i class="iconfont icon-fensix"></i>
      <span slot="title">粉丝管理</span>
    </el-menu-item>
    <el-menu-item index="personalSettings">
      <i class="iconfont icon-shezhi"></i>
      <span slot="title">个人设置</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'Aside',
  props: {
    'is-collapse': {
      type: Boolean
    }
  },
  data () {
    return {
    }
  },
  methods: {
    handleOpen () {

    },
    handleClose () {

    }
  }
}
</script>

<style lang="scss" scoped>
  .layout-asside .iconfont {
    margin-right: 10px;
    padding-left: 5px;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    min-width: 70px;
  }
</style>
