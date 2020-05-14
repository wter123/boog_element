<template>
  <div class="hotActicel">
    <el-card class="box-card">
      <div
        class="hotActicelHeader clearfix"
        slot="header"
      >
        <span class="spanZore">热门排行</span>
      </div>
      <div class="hotActicelContent">
        <p v-for="ite in hotActicelData"  class="text item"
        >
          <span
            class="spanOne"
            :class=" 'spanOne'+ite.index "
          >{{ite.index}}</span>
          <a
            href=""
            class="spanTwo"
          >{{ite.content}}</a>
          <span class="float-right spanThree">
            <i class="icon iconaixin"></i>{{ite.foveCount}}喜欢</span>
        </p>
      </div>

    </el-card>
  </div>

</template>

<script>
export default {
  data() {
    return {
      hotActicelData: {
        "1": {
          index: 1,
          content: "python",
          foveCount: "333"
        },
        "2": {
          index: 2,
          content: "java",
          foveCount: "331"
        },
        "3": {
          index: 3,
          content: "js",
          foveCount: "3333"
        },
        "14": {
          index: 4,
          content: "css",
          foveCount: "33344"
        },
        "5": {
          index: 5,
          content: "go",
          foveCount: "3335"
        }
      }
    };
  }
};
</script>

<style lang="less" scoped>
.hotActicel {
  // margin:10px 0 0 0;
  // max-width: 716px;
  .el-card {
    max-width: 100%;
    padding: 0 20px;
    .hotActicleHeader {
      padding: 7px 2px;
    }

    .hotActicelContent {
      .item {
        margin:0 0 10px 0;
      }
      .text {
        font-size: 14px;

        .spanOne {
          color: #fff;
        }
        .spanOne1 {
          background: #fd8c84;
        }
        .spanOne2 {
          background: #6fc299;
        }
        .spanOne3 {
          background: #00a67c;
        }
        .spanOne4 {
          background: #999;
        }
        .spanOne5 {
          background: #999;
        }
      }
    }

    /deep/ .el-card__header {
      border-bottom: 1px solid #90bba8;
      padding: 18px 0;
      color: #00a67c;
    }

    /deep/ .el-card__body {
      padding: 18px 0;
    }

    .float-right {
      float: right;
    }
    .spanThree{
      color: #f78585;
    }
    .spanOne {
      margin-right: 8px;
      padding: 2px 7px;
    }
    .spanTwo {
      font-size: 14px;
      a {
        color: #00a67c;
        text-decoration: none;
      }
    }
    a {
      color: #00a67c;
      text-decoration: none;
    }
  }
}
</style>