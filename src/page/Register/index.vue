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
        <el-form-item prop="repassword">
          <el-input
            type="password"
            placeholder="请再次输入密码"
            v-model="ruleForm.repassword"
            @keyup.enter.native="registerFn"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="registerFn" style="width: 100%"
            >注册</el-button
          >
          <el-link type="info">去登陆</el-link>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mockRegister } from "@/api";

export default {
  name: "Register",
  data() {
    const samePwdFn = (rule, value, callback) => {
      if (value !== this.ruleForm.password) {
        // 如果验证失败，则调用 回调函数时，指定一个Error对象
        callback(new Error("两次输入的密码不一致!"));
      } else {
        callback();
      }
    };

    return {
      ruleForm: {
        username: "",
        password: "",
        repassword: "",
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
        repassword: [
          { required: true, message: "请再次输入密码", trigger: "blur" },
          {
            pattern: /^\S{6,12}$/,
            message: "密码必须是6-12位非空字符",
            trigger: "blur",
          },
          { validator: samePwdFn, trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    // 注册按键
    registerFn() {
      this.$refs.ruleForm.validate(async (vaild) => {
        if (vaild) {
          // 通过了校验
          const {
            data: { data },
          } = await mockRegister();
          this.$message({ message: "注册成功~", type: "success" });
          this.$router.push("/login");
        } else {
          this.$message.error("请输入对应的用户名和密码~");
        }
      });
    },
  },
  mounted() {},
};
</script>

<style scoped lang="less">
.reg-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: url("./images/bg.jpg") no-repeat center;
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