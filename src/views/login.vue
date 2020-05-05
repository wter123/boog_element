<template>
  <div class="login">

    <div class="grid-content bg-purple">
      <h2>用户登录</h2>
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        label-position="right"
        ref="ruleForm"
        label-width="68px"
        class="demo-ruleForm"
      >
        <el-form-item
          label="用户名"
          prop="user"
        >
          <el-input v-model="ruleForm.user"></el-input>
        </el-form-item>
        <el-form-item
          label="密码"
          prop="pass"
        >
          <el-input
            type="password"
            v-model="ruleForm.pass"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <el-form-item class="clearBottom">
          <el-row class="loginB"  >
            <a
              href=""
              
            >忘记密码</a>

            <router-link
              to="/register"
              
              @click="doRegister()"
            >用户注册</router-link>

          </el-row>
        </el-form-item>

        <el-form-item>
          <el-button
            class="loginG"
            type="primary"
            @click="submitForm('ruleForm')"
          >提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>

      </el-form>
    </div>

  </div>

</template>
<script>
export default {
  data() {
    var checkUser = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };

    return {
      ruleForm: {
        pass: "",
        user: ""
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        user: [{ validator: checkUser, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },

    doRegister() {
      this.$router.push({
        path: "/register"
      });
    }
  }
};
</script>

<style lang="less">
html {
  height: 100%;
}
body {
  //   padding: 0;margin: 0;
  //   height:100%;
  //   display: flex;
  //   align-items: center;
  // justify-content: center;
}
.login {
  height: 100%;
  max-width: 380px;
  margin: 160px auto;
  //  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}
.grid-content {
  text-align: center;
  // width:380px;
}
h2 {
  color: #409eff;
  margin: 0 0 24px 68px;
}

@media screen and (max-width: 400px) {
  .login {
    height: 100%;
  }
  .grid-content {
    text-align: center;
    width: 300px;
  }
}

.clearBottom {
  margin-bottom: 0;
}
.loginG {
  margin: auto;


}


a  {
      color: #1ab2ff;
  text-decoration: none;
}
  .loginB {
    float: right;
    margin-top: -17px;
margin-bottom:17px ;
    font-size: 14px;
    line-height: 22px;
    color: #1ab2ff;
    cursor: pointer;  
  }


    .loginB a {
      margin: 3px;
  }
  .loginB a:hover {
    text-decoration: none;
  color: #2c2fd6;
}
  </style>