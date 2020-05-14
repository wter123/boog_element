<template>
  <div class="topSidebar">

    <div class="container-inner">
      <div
        class="setIcon"
        @click="flexible();flexibleStatus=!flexibleStatus"
      >
        <i class="icon iconliebiao"></i>
      </div>
      <div class="yusi-logo">
        <a href="/">
          <h2>
            <span class="yusi-mono">守中</span>
            <span class="yusi-bloger">王韦的个人站点</span>
          </h2>
        </a>
      </div>
    </div>
    <div class="show">
      <el-row :gutter="10">

        <!-- 导航 -->
        <el-col
          :xs="24"
          :sm="18"
          :md="18"
          :lg="18"
          :xl="18"
        >
          <el-menu
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
          >
            <el-menu-item index="1">
              <router-link to="page_content">处理中心</router-link>
            </el-menu-item>

            <el-menu-item index="2">消息中心</el-menu-item>
            <el-menu-item index="3"><a
                href="https://www.ele.me"
                target="_blank"
              >订单管理</a></el-menu-item>
            <el-menu-item>
              <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                  下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
                  <el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
                  <el-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>
                  <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
                  <el-dropdown-item icon="el-icon-circle-check">蚵仔煎</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-menu-item>
          </el-menu>
          <!-- <div class="line"></div> -->
        </el-col>

        <!-- 登录注册 -->
        <el-col
          :xs="0"
          :sm="6"
          :md="6"
          :lg="6"
          :xl="6"
        >
          <div class="grid-content grid-contentA ">

            <div class="z_index"> <span>
                <router-link to="/login">登录</router-link>
              </span>

              <span>
                <router-link to="/register">注册</router-link>
              </span></div>

            <div class="serach">
              <div
                style=" float:right"
                @mouseover="mouseEvent()"
              >
                <el-button
                  type="primary"
                  icon="el-icon-search"
                  style="float:right"
                >搜索</el-button>
              </div>
              <div
                class="searchC"
                style="display:none "
                @mouseleave="mouseEventTwo()"
              >
                <el-input
                  placeholder="请输入内容"
                  prefix-icon="el-icon-search"
                  v-model="input"
                  @keyup.enter.native="getGameList(input)"
                >
                  <el-button
                    slot="append"
                    icon="el-icon-search"
                    @click="submit_search"
                  ></el-button>
                </el-input>
              </div>
            </div>

          </div>

        </el-col>
      </el-row>
    </div>

    <router-view></router-view>

  </div>
</template>

<script>
import pageOne from "./page_one";

export default {
  data() {
    return {
      activeName: "first",
      input: "",
      timeA: false,
      flexibleStatus: false
    };
  },
  components: {
    pageOne
  },
  computed: {},
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    a({ row, rowIndex }) {
      return "floatRight";
    },
    doLogin() {
      this.$router.push({
        path: "/login"
      });
    },

    timeout() {
      setTimeout(function() {
        console.log("vaa");
        self.timeA = true;
      }, 350);
    },
    mouseEvent() {
      document.querySelector(".searchC").style.display = "inline";
      let self = this;
      self.timeout();
    },
    mouseEventTwo() {
      self = this;
      if (self.timeA) {
        document.querySelector(".searchC").style.display = "none";
        self.timeA = false;
      }
    },
    submit_search() {
      self = this;
      console.log(self.input);
    },
    getGameList(e) {
      console.log(e);
    },
    flexible() {
      console.log(document.documentElement.clientHeight);
      if (document.documentElement.clientWidth < 500) {
        if (this.flexibleStatus) {
          function wait() {
            return new Promise(function(resolve, reject) {
              document.querySelector(".show").style.height = 0;
              document.querySelector(".show").style.transition = "all 0.5s ease";
              console.log(
                (document.querySelector(".show").style.transition =
                  "all 0.5s ease")
              );

              resolve();
            });
          }

          wait().then(() => {
            document.querySelector(".show").style.visibility = "hidden";
            document.querySelector(".show").opacity = 0;
            console.log("CCC");
          });

          // document.querySelector(".show").classList.remove("show-none")
          // document.querySelector(".show").classList.add("show-block");
        } else {
          document.querySelector(".show").style.visibility = "visible";

          document.querySelector(".show").style.height =
            document.querySelector(".el-menu-demo").clientHeight + "px";
          document.querySelector(".show").style.transition = "all 0.5s ease";
          // document.querySelector(".el-menu").style.display="none"
          // document.querySelector(".show").style.height = 0;
        }
      }
    }
  }
};
</script>


<style lang="less"  scoped>
.show-block {
  // height: 300px !important;
  transition: all 0.5s ease;
  .el-row {
    // height: 300px !important;
  }
}
/deep/ .show-none {
  display: none;
}
.container-inner {
  background: none repeat scroll 0 0 rgba(213, 100, 100, 1);
  width: 100%;
  margin: 0 auto;
  text-align: center;
  position: relative;

  .setIcon {
    position: absolute;
    top: 0;
    left: 0;
    display: none;
    padding: 12px;
    cursor: pointer;
    i {
      font-size: 25px;
      color: #fff;
    }
  }

@media screen and(max-width:500px){
/deep/ .setIcon{
  display: block;
}}

  .yusi-logo {
    display: block;
    text-align: center;
    h2 {
      display: inline-block;
      font-family: "Microsoft Yahei", arial, sans-serif;
      font-weight: 100;
      .yusi-mono {
        letter-spacing: -2px;
        position: relative;
        color: #fff;
        font-size: 24px;
        text-shadow: 0 0 1px rgba(94, 255, 216, 0.8);
        margin: 0;
        padding: 0;
      }
      .yusi-bloger {
        position: relative;
        color: #fff;
        font-weight: 400;
        font-size: 15px;
        text-shadow: 0 0 1px rgba(94, 255, 216, 0.8);
        margin-left: 5px;
        letter-spacing: 1px;
        padding: 0;
        z-index: 2;
      }
    }
  }
  a {
    color: #00a67c;
    text-decoration: none;
  }
}

body {
  a {
    text-decoration: none;
  }
  margin: 0;
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }
}

.topSidebar {
  position: relative;
  // padding: 0 15px;
  background: #fff;
  .el-row {
    .el-col {
      height: 100%;
      .el-menu-item {
        height: 40px;
        line-height: 40px;
        // border-bottom:1px solid #DCDFE6;
      }

      .grid-content {
        height: 40px;
        line-height: 40px;
      }

      .grid-contentA {
        .z_index {
          display: inline;
          z-index: 9999;
          a {
            text-decoration: none;
          }
        }
        .serach {
          display: inline;
        }
        a {
          font-size: 14px;
          font-weight: 500;
          padding: 0 6px;
          color: #409eff;
          padding: 0 3px 0 0;
        }
      }
    }
  }
}
 
@media screen and(max-width:500px){
  /deep/ .el-menu-item {
    width: 100%;

    &:hover {
      background: rgb(217, 236, 255) !important;
    }
  }
  /deep/ .show{
  height: 0; 
} 
/deep/ .setIcon{
  display: block;
}
/deep/ .el-row{
  height: 100%;
}
    .el-row {
    height: 100%;
    .el-col {
      height: 100%;
      .el-menu-item {
        height: 40px;
        line-height: 40px;
        // border-bottom:1px solid #DCDFE6;
      }

      .grid-content {
        height: 40px;
        line-height: 40px;
      }

      .grid-contentA {
        .z_index {
          display: inline;
          z-index: 9999;
          a {
            text-decoration: none;
          }
        }
        .serach {
          display: inline;
        }
        a {
          font-size: 14px;
          font-weight: 500;
          padding: 0 6px;
          color: #409eff;
          padding: 0 3px 0 0;
        }
      }
    }
  }
}
// .bounce-item {display: inline-block;margin-right: 10px;}
</style>