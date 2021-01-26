<template>
  <div class="login-container">
    <el-row>
      <div class="login-logo">
        <h2>登陆页面</h2>
      </div>
      <el-form class="login-form" >
        <el-form-item>
          <el-input
            type="text"
            v-model="loginForm.username"
            placeholder="请输入用户名"
            prefix-icon="el-icon-user-solid"
            @keyup.native.enter="login"
          />
        </el-form-item>
        <el-form-item>
          <el-input type="password"
          v-model="loginForm.password"
          placeholder="请输入密码"
          prefix-icon="el-icon-s-goods"
          @keyup.native.enter="login"
        />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login" class="login-btn">登陆</el-button>
        </el-form-item>
      </el-form>
    </el-row>
  </div>
</template>

<script>
import loginPage from '../../api/login/login.js'
export default {
  name: 'Login',
  components: {
  },
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginInfo: {
        username: 'sunjunqiang',
        password: '123'
      }
    }
  },
  methods: {
    login () {
      if (!this.loginForm.username) {
        this.$message({ type: 'warning', message: '请输入用户名' })
        return
      } else if (!this.loginForm.password) {
        this.$message({ type: 'warning', message: '请输入密码' })
        return
      }
      // 登陆的请求
      loginPage.login(this.loginForm).then(res => {
        if (res.data.successful) {
          window.localStorage.setItem('token', res.data.token)
          this.$router.push({
            path: '/'
          })
        } else {
          this.$message({ type: 'error', message: '用户名或密码错误' })
        }
      })
      // if (this.loginForm.username === this.loginInfo.username && this.loginForm.password === this.loginInfo.password) {
      //   this.$message({ type: 'success', message: '登陆成功' })
      // }
    }
  }
}
</script>

<style lang="scss" scoped>
.login-container {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("./images/login-bj.jpeg");
  background-size: 100% 100%;
  .login-logo {
    min-width: 300px;
    height: 37px;
    background: #fff;
    padding-top: 10px;
    h2 {
      text-align: center;
    }
  }
  .login-form {
    min-width: 300px;
    padding: 50px;
    background: #fff;
    .login-btn {
      width: 100%;
    }
  }
}
</style>
