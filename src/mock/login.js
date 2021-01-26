// 新建一个mock.js文件
import Mock from 'mockjs'
import { userInfo } from './userInfo'

Mock.setup({
  timeout: '500-1000'
})
Mock.mock('http://www.xxxx.com/api/login', 'post', (data) => {
  console.log(data)
  let isSuccess
  let token
  data = JSON.parse(data.body)
  userInfo.forEach(item => {
    if (item.username === data.username && item.password === data.password) {
      isSuccess = true
      token = item.token
    }
  })
  if (isSuccess) {
    return {
      successful: true,
      token
    }
  } else {
    return {
      successful: false
    }
  }
})

Mock.mock('http://www.xxxx.com/api/getToken', 'post', (data) => {
  let isSuccess
  data = JSON.parse(data.body)
  userInfo.forEach(item => {
    if (item.token === data.token) {
      isSuccess = item
    }
  })
  if (isSuccess) {
    return {
      name: isSuccess.name,
      url: isSuccess.url,
      successful: true
    }
  } else {
    return {
      successful: false
    }
  }
})
