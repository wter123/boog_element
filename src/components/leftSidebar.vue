<template>
  <div class="leftSidebar">
    <div class="leftSidebar-wrap">
      <el-col
        :span="12"
        class="eel"
      >

        <el-menu
          default-active="2"
          class="el-menu-vertical-demo elCol"
          :unique-opened=true
          router
        >
          <div
            style=" width:250px"
            class="ala"
          >
            <el-scrollbar style="height:100%;width:100%;">
              <div class="alaa">

                <el-submenu index="1">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>导航一</span>
                  </template>
                  <el-menu-item-group>
                    <template slot="title">分组一</template>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                  </el-menu-item-group>
                  <el-menu-item-group title="分组2">
                    <el-menu-item index="1-3">选项3</el-menu-item>
                    <el-menu-item index="1-3">选项3</el-menu-item>
                    <el-menu-item index="1-3">选项3</el-menu-item>
                    <el-menu-item index="1-3">选项3</el-menu-item>
                    <el-menu-item index="1-3">选项3</el-menu-item>
                    <el-menu-item index="1-3">选项3</el-menu-item>
                    <el-menu-item index="1-3">选项3</el-menu-item>
                    <el-menu-item index="1-3">选项3</el-menu-item>
                    <el-menu-item index="1-3">选项3</el-menu-item>
                  </el-menu-item-group>
                  <el-submenu index="1-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                  </el-submenu>
                </el-submenu>

                <el-submenu index="2">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>导航一</span>
                  </template>
                  <el-menu-item-group>
                    <template slot="title">分组一</template>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                  </el-menu-item-group>
                  <el-menu-item-group title="分组2">
                    <el-menu-item index="2-3">选项3</el-menu-item>
                    <el-menu-item index="2-3">选项3</el-menu-item>

                  </el-menu-item-group>
                  <el-submenu index="2-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="2-4-1">选项1</el-menu-item>
                  </el-submenu>
                </el-submenu>

                <el-menu-item index="/login">
                  <i class="el-icon-menu"></i>
                  <span slot="title">登录</span>
                </el-menu-item>
                <el-menu-item index="/register">
                  <i class="el-icon-document"></i>
                  <span slot="title">注册</span>
                </el-menu-item>
                <el-menu-item index="/"
                    @click="exit">
                  <i
                    class="el-icon-setting"
                  ></i>
                  <span slot="title">退出</span>
                </el-menu-item>
              </div>
            </el-scrollbar>
          </div>
        </el-menu>

      </el-col>
      <div
        class="toggleBar positionOne"
        @click="togglestatusA()"
      >
        <i class="el-icon-s-unfold"></i>
        <i class="el-icon-s-fold close"></i>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      statusA: false
    };
  },
  mounted() {
    console.log(document.documentElement.clientHeight);
    document.querySelector(".ala").style.height =
      document.documentElement.clientHeight - 50 + "px";
    console.log("avs");
  },
  methods: {
    exit: function() {
      console.log(this.$store.state.islogin);
      let flag = false;
      this.$store.dispatch("login", flag);
      this.$router.go(0)
      console.log("退出登录");
    },
    timeout() {
      setTimeout(function() {
        document.querySelector(".leftSidebar").style.zIndex = 0;
      }, 500);
    },
    togglestatusA() {
      console.log(this.statusA);

      if (!this.statusA) {
        document
          .querySelector(".el-menu-vertical-demo")
          .classList.add("elColTwo");
        document
          .querySelector(".el-menu-vertical-demo")
          .classList.remove("elCol\
");

        document.querySelector(".toggleBar").classList.remove("positionOne");

        document
          .querySelector(".toggleBar>i:nth-child(2)")
          .classList.add("open");

        document
          .querySelector(".toggleBar>i:nth-child(2)")
          .classList.remove("close");

        document
          .querySelector(".toggleBar i:nth-child(1)")
          .classList.add("close");
        document
          .querySelector(".toggleBar i:nth-child(1)")
          .classList.remove("open");

        document.querySelector(".leftSidebar").style.zIndex = 9999;

        console.log("Vas");
        // document.querySelector(".alaa").style.display = "inline";
        this.statusA = !this.statusA;
      } else {
        console.log("avs");
        document.querySelector(".el-menu-vertical-demo").classList.add("elCol");
        document
          .querySelector(".el-menu-vertical-demo")
          .classList.remove("elColTwo\
");

        document.querySelector(".toggleBar").classList.add("positionOne");

        document
          .querySelector(".toggleBar>i:nth-child(1)")
          .classList.add("open");

        document
          .querySelector(".toggleBar>i:nth-child(1)")
          .classList.remove("close");

        document
          .querySelector(".toggleBar i:nth-child(2)")
          .classList.add("close");
        document
          .querySelector(".toggleBar i:nth-child(2)")
          .classList.remove("open");
        this.timeout();
        // document.querySelector(".alaa").style.display = "none";
        this.statusA = !this.statusA;
      }
    }
  }
};
</script>

<style lang="less" scoped>
.leftSidebar {
  position: fixed;
  top:0;
  // float: left;
  max-width: 500px;
  margin-top: 0px;
  .el-col-12 {
    width: 100%;
  }
  /deep/ .el-scrollbar__wrap {
    overflow-x: hidden;
  }
  // position: relative;
  .leftSidebar-wrap {
    position: relative;
    // right: 250px;
  }

  .elCol {
    position: relative;
    transition: all 0.5s;
    right: 250px;
  }
  .elColTwo {
    position: relative;
    transition: all 0.5s;
    right: 0px;
  }
}
.toggleBar {
  font-size: 32px;
  position: absolute;
  left: 250px;
  transition: all 0.5s;
  top: 0;
  .open {
    display: inline;
  }
  .close {
    display: none;
  }
}

.positionOne {
  left: 0;
  transition: all 0.5s;
  z-index: 9999;
}

@media screen and(max-width: 500px) {
  .leftSidebar {
    display: none;
  }
  .leftSidebar {
    max-width: 300px;
    margin-top: -20px;

    // position: relative;
    .eel {
      position: relative;
      // right: 250px;
    }

    .elCol {
      position: relative;
      transition: all 0.5s;
      right: 150px;
    }
    .elColTwo {
      position: relative;
      transition: all 0.5s;
      right: 0px;
    }
  }
  .toggleBar {
    font-size: 32px;
    position: absolute;
    left: 150px;
    transition: all 0.5s;
    top: 0;
    .open {
      display: inline;
    }
    .close {
      display: none;
    }
  }

  .positionOne {
    left: 0;
    transition: all 0.5s;
  }
}

/*菜单关闭*/
.el-submenu > .el-submenu__title .el-submenu__icon-arrow {
  -webkit-transform: rotateZ(-90deg);
  -ms-transform: rotate(-90deg);
  transform: rotateZ(-90deg);
}
/*菜单展开*/
.el-submenu.is-opened > .el-submenu__title .el-submenu__icon-arrow {
  -webkit-transform: rotateZ(0deg);
  -ms-transform: rotate(0deg);
  transform: rotateZ(0deg);
}
</style>