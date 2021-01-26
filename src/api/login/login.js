import request from '@/utils/request'

export default class loginPage {
  /**
   * 用户登陆接口
   */
  static login (data) {
    return request.post('/api/login', data)
  }
}
