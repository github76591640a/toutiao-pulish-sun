<template>
  <div>
    <el-row v-html="msg"></el-row>
    <div @click="test">
      {{ name }}
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: `
        代码格式规范有两种：<br/>
          1、airbnb javascript style <br/>
          2、standard javascript style <br/>
        eslint要求：<br/>
          1、代码缩紧是两个空格 <br/>
          2、定义东西一定要使用 <br/>
          3、字符串使用单引号 <br/>
          4、关键字后面要加空格 <br/>
          5、不能写无意义的代码,比如 1===1 <br/>
          6、字符串拼接+号两边要家空格 <br/>
          7、不能有连续多行的空格  <br/>
          8、注释和注释的内容之间至少有一个空格 </br>
          9、对象最后一个属性不允许有逗号  <br/>
      `,
      name: '孙俊强'
    }
  },
  methods: {
    test () {
      console.log('孙俊强')
    }
  }
}
</script>

<style>

</style>
