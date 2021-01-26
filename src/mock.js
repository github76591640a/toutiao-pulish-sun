// 新建一个mock.js文件
import Mock from 'mockjs'
// import { userInfo } from './'

Mock.setup({
  timeout: '500-1000'
})
Mock.mock('http://www.xxxx.com/api/login', 'post', (data) => {
  console.log(data)
  return Mock.mock({
    'id|+1': 1,
    name: '@name',
    age: '@age',
    text: '@cparagraph'
  })
})
