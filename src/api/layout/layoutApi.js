import request from '@/utils/request'

export default class layoutApi {
  /**
   * 获取用户信息
   */
  static getUserInfo (data) {
    return request.post('/api/getToken', data)
  }
}
