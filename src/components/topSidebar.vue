<template>
  <div class="topSidebar">
    <el-row :gutter="10">
      <el-col
        :xs="17"
        :sm="18"
        :md="18"
        :lg="18"
        :xl="18"
      >
        <div class="grid-content bg-purple">
          <el-container>
            <el-header>
              <el-tabs
                v-model="activeName"
                @tab-click="handleClick"
              >
                <el-tab-pane
                  label="用户管理"
                  name="first"
                >用户管理</el-tab-pane>
                <el-tab-pane
                  label="配置管理"
                  name="second"
                >配置管理</el-tab-pane>
                <el-tab-pane
                  label="角色管理"
                  name="third"
                >角色管理</el-tab-pane>
                <el-tab-pane
                  label="定时任务补偿"
                  name="fourth"
                >定时任务补偿</el-tab-pane>

              </el-tabs>

            </el-header>

          </el-container>
        </div>
      </el-col>
      <el-col
        :xs="7"
        :sm="6"
        :md="6"
        :lg="6"
        :xl="6"
      >
        <div class="grid-content grid-contentA ">
          
          <div class="z_index">          <span >
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
                v-model="input"
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

    <router-view></router-view>


  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "first",
      input: "",
      timeA: false
    };
  },

  computed: {},
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
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
        self.timeA = true;
        console.log("a");
      }, 350);
    },
    mouseEvent() {
      document.querySelector(".searchC").style.display = "inline";
      let self = this;
      this.timeout();
    },
    mouseEventTwo() {
      self = this;
      if (self.timeA) {
        document.querySelector(".searchC").style.display = "none";
        console.log("b");
        self.timeA = false;
      }
    },
    submit_search(){
        self=this
        console.log(self.input)
    }
  }
};
</script>


<style lang="less">
.topSidebar {
  position: relative;
  padding: 0 15px;
 
}
.grid-content {
  height: 40px;
  line-height: 40px;
}

.grid-contentA a {
  font-size: 14px;
  font-weight: 500;
  padding: 0 6px;
  color: #409eff;
  padding: 0 3px 0 0;
}
.serach {
  display: inline;
}
.searchC {
  margin-top: -20px;
}

.z_index{
    display: inline;
    z-index: 9999;
}
</style>