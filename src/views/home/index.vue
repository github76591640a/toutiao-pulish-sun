<template>
  <div>
    <el-button @click="tiao1">内容管理</el-button>
    <el-button @click="tiao2">素材管理</el-button>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    tiao1 () {
      this.$router.push({ name: 'Content1' })
    },
    tiao2 () {
      this.$router.push({ name: 'Images1' })
    }
  }
}
</script>

<style>

</style>
