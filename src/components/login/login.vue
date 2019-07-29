<template>
  <el-row
    type='flex'
    justify='center'
    align='middle'
  >
    <el-col :span='8'>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        class="demo-ruleForm"
      >
        <!-- 用户名 -->
        <el-form-item
          label="用户名"
          prop="username"
        >
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <!--密码部分 -->
        <el-form-item
          label="密码"
          prop="password"
        >
          <el-input v-model="ruleForm.password"></el-input>
        </el-form-item>
        <!-- 两个按钮部分 -->
        <el-form-item>
          <el-button
            type="success"
            @click="submitForm"
          >立即创建</el-button>
          <el-button @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>
    </el-col>

  </el-row>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      ruleForm: {
        username: 'admin',
        password: '123456'

      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 8, message: '长度在5到 8 个字符', trigger: 'blur' }
        ]

      }
    }
  },
  methods: {
    submitForm () {
      // 需要先对输入的内容进行校验
      // console.log(this.$refs.ruleForm.$vnode)
      // console.log(this.$refs.ruleForm.$vnode.componentOptions.propsData.model.password)
      // ref注册在了这个组件上面  validate这个函数
      this.$refs.ruleForm.validate(res => {
        if (res === false) {
          console.log(res)
          return false
        }
        axios.post('http://localhost:8888/api/private/v1/login', this.ruleForm).then(res => {
          console.log(res)
          if (res.data.meta.status === 200) {
            // 需要先提示消息的显示
            // 在main.js中引入了element-ui就是给Vue的原型上添加了this.$message属性
            this.$message.success({
              message: '登录成功',
              duration: 800,
              showClose: true
              // onClose: (msg) => {
              //   console.log(msg)
              // }
            })
            // 修改入口  1.手动式修改  2.router-link  3.编程式导航  调回来  push   replace back
            this.$router.push('/home')
          } else {
            this.$message.error({
              message: '登录失败',
              duration: 800

            })
          }
        })
      })
    },
    resetForm () {
      console.log(111)

      // this.$router.replace('/login')
      this.$refs.ruleForm.resetFields()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.el-row {
  height: 100%;
  background-color: #2d434c;
}
// .el-col {
//   text-align: center;
//   background-color: #fff;
//   padding: 20px 30px;
//   border-radius: 20px;
// }
.el-form {
  background: #fff;
  padding: 20px 30px;
  border-radius: 20px;
}
</style>
