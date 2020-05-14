<template>
  <div class="home">
    <!-- 头部 -->
    <topSidebar  />
    <!-- 左侧 -->
    <leftSidebar />
    <!-- 内容 -->
    <div class="homeContent">
      <!-- 内容左侧 -->
      <el-col
        :xs="24"
        :sm="16"
        :md="18"
        :lg="18"
        :xl="18"
      >
        <el-main class="">
          <el-row>

            <!-- 轮播 -->
            <el-col
              :xs="24"
              :sm="18"
              :md="18"
              :lg="18"
              :xl="18"
            >
              <carousel />
            </el-col>

            <!-- 两个图片 -->
            <el-col
              :xs="0"
              :sm="6"
              :md="6"
              :lg="6"
              :xl="6"
            >
              <div class="imgTag">
                <ul>
                  <a  href="">
                    <li>
                      <div class="demo-image__placeholder">
                        <div class="block">
                          <el-image :src="src"></el-image>
                        </div>

                      </div>

                    </li>
                  </a>
                  <a href="">
                    <li>
                      <div class="block">
                        <el-image :src="src">
                          <div
                            slot="placeholder"
                            class="image-slot"
                          >
                            加载中<span class="dot">...</span>
                          </div>
                        </el-image>
                      </div>
                    </li>
                  </a></ul>
              </div>
            </el-col>
          </el-row>

          <!-- 热门文章 -->
          <el-row>
            <hotActicle />
          </el-row>

          <!-- 下方内容 -->
          <el-row>
            <contentOne />
          </el-row>
        </el-main>

      </el-col>
      <!-- 内容右侧 -->
      <el-col
        class="rightHome"
        :xs="0"
        :sm="8"
        :md="6"
        :lg="6"
        :xl="6"
      >
        <!-- <rightSidebar/> -->
        <rightSidebar />
      </el-col>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import topSidebar from "@/components/topSidebar.vue";
import leftSidebar from "@/components/leftSidebar.vue";
import hotActicle from "@/components/hotActicle.vue";
import carousel from "@/components/carousel.vue";
import rightSidebar from "@/components/rightSidebar.vue";
import contentOne from "@/views/content.vue";
export default {
  name: "Home",
  data() {
    return {
      src:
        "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
    };
  },
  components: {
    leftSidebar,
    topSidebar,
    hotActicle,
    carousel,
    rightSidebar,
    contentOne
  }
};
</script>


<style lang="less" scoped>
body {
 
  margin: 0;
  .homeContent {
    margin: 10px 40px;
    .el-col {
    }
    .el-main {
      margin: 0;
      padding: 0;
    }
    .hotActicel {
      margin: 10px 0 0 0;
    }
    .imgTag {
      margin-left: 10px;
      // display: inline;
      /deep/ img {
        width: 100%;
        // height: 150px;
      }
      ul {
        /deep/ .el-image {
          height: 146px;
        }
        margin: 0;
        padding: 0;
        li {
          list-style: none;
        }
      }
    }
    .carousel {
      display: inline;
      // margin: 10px 0 0 0;
    }
    .hotActicle {
      display: block;
      // margin: 10px 0 0 0;
    }
    .rightHome {
      // display: flex;
      // justify-content: center;
      padding-left: 10px;
    }
  }

}
  @media screen and ( max-width:  500px) {
    /deep/ .homeContent {
      margin:10px 0 0 0 !important;
      // padding: 0 !important;

      
    }
  }
</style>
