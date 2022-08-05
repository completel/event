<template>
  <div class="reg-container">
    <div class="reg-box">
      <div class="title">Hello JG</div>
      <el-form
        :model="ruleForm"
        :rules="rulesObj"
        ref="ruleForm"
        class="demo-ruleForm"
      >
        <el-form-item prop="username">
          <el-input
            style="width: 280px"
            placeholder="请输入用户名"
            v-model="ruleForm.username"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            placeholder="请输入密码"
            v-model="ruleForm.password"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="registerFn"
            style="width: 100%"
            :loading="loading"
            >登录</el-button
          >
          <el-link type="info">去注册</el-link>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mockRegister } from "@/api";

export default {
  name: "Login",
  data() {
    return {
      // 点击按钮之后转圈圈
      loading: false,
      ruleForm: {
        username: "",
        password: "",
      },
      rulesObj: {
        // 表单规则校验对象
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            pattern: /^[a-zA-Z0-9]{6,10}$/,
            message: "用户名得是大小写字母和数字",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            pattern: /^\S{6,12}$/,
            message: "密码必须是6-12位非空字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    // 登录按键
    registerFn() {
      this.$refs.ruleForm.validate(async (vaild) => {
        if (vaild) {
          this.$message({ message: "登录成功~", type: "success" });
          this.loading = true;
          setTimeout(() => {
            this.loading = false;
          }, 1500);
        } else {
          this.$message.error("不可以删掉用户名密码噢~");
        }
      });
    },
  },
  async mounted() {
    // 页面已挂载自动给输入框添加账号密码
    const {
      data: { data },
    } = await mockRegister();
    this.ruleForm.username = data.username;
    this.ruleForm.password = data.password;
    this.$message.warning("不可以删掉用户名密码噢~");
  },
};
</script>

<style scoped lang="less">
.reg-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: url("../Register/images/bg.jpg") no-repeat center;
  background-size: cover;

  .reg-box {
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
    text-align: center;
    width: 400px;
    height: 450px;
    background-color: rgb(237, 237, 237);
    border-radius: 3%;

    .title {
      color: rgb(4, 184, 255);
      font-size: 30px;
      font-weight: 800;
      margin: 40px 0;
      text-shadow: 1px 1px 5px rgba(4, 184, 255, 0.4);
    }
  }
}
</style>