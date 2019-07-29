<template>
  <el-container>
    <!-- 头部 -->
    <el-header>
      <el-row
        type="flex"
        class="row-bg"
        justify="space-between"
      >
        <img
          src="../../assets/logo.png"
          alt=""
        >
        <h1 :span='8'>电商后台管理系统</h1>
        <h4>
          恭喜上海前端43期月薪20万 <a
            @click.prevent='layout'
            href="#"
          >退出</a></h4>
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  methods: {
    layout () {
      this.$confirm('此操作将永久退出登录, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '退出成功!',
          duration: 800

        })

        this.$router.replace('/login')
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消退出',
          duration: 800
        })
      })
    }
  }
}
</script>

<style scoped lang='less'>
.el-container {
  height: 100%;

  .el-header {
    margin: 0;
    padding: 0;
    line-height: 60px;
    background-color: #b3c1cd;
    h1 {
      color: #ffffff;
    }
    h4 {
      font-weight: 400;
      padding-right: 20px;
      a {
        color: orange;
      }
    }
  }

  .el-aside {
    background-color: skyblue;
  }
  .el-main {
    background-color: #ccc;
  }
}
</style>
