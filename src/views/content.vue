<template>
  <div class="content">

    <div
      class="infinite-list-wrapper"
      style="overflow:auto"
    >
      <ul
        class="list"
        v-infinite-scroll="load"
        infinite-scroll-disabled="disabled"
      >
        <li
          v-for="i in content"
          class="list-item"
        >
          <el-card class="box-card">

            <div
              slot="header"
              class="clearfix"
            >
              <span class="tagOne">{{i.tag}}<i class="el-icon-caret-right"></i></span><span>
                <a href="">
                  <h2>{{i.title}}</h2>
                </a>
              </span></div>

            <el-row
              type="flex"
              class="row-bg"
            >
              <el-col
                :span="3"
                class="colThree"
              >
                <div class="grid-content bg-purple">
                  <div class="demo-image__placeholder">
                    <div class="block">
                      <el-image :src="i.img"> </el-image>
                    </div>

                  </div>
                </div>
              </el-col>
              <el-col
                :span="21"
                class="spanOne"
              >
                <div class="grid-content bg-purple-light aHundredPercent">{{i.text}}</div>
                <el-row class="auth-span">
                  <el-col
                    class="colOne"
                    :xs="0"
                    :sm="0"
                    :md="12"
                    :lg="12"
                    :xl="12"
                  >
                    <div class="colOneWrap">
                      <span class="muted"><i class="el-icon-user-solid"></i> <a href="https://cuiqingcai.com/author/payne">{{i.author}}</a></span>
                      <span class="muted"><i class="el-icon-time"></i> {{i.time}}</span>
                    </div>

                  </el-col>
                  <el-col
                    class="colTwo"
                    :xs="24"
                    :sm="12"
                    :md="12"
                    :lg="12"
                    :xl="12"
                  >
                    <div class="colTwoWrap">
                      <span class="muted"><i class="el-icon-view"></i> {{i.brose}}浏览</span>
                      <span class="muted"><i class="el-icon-s-comment"></i> <a
                          target="_blank"
                          href="https://cuiqingcai.com/9296.html#comments"
                        >{{i.comment}}评论</a></span>
                      <span class="muted">
                        <a
                          href="javascript:;"
                          data-action="ding"
                          data-id="9296"
                          id="Addlike"
                          class="action"
                        ><i class="icon iconaixin "></i><span class="count">{{i.love}}</span>喜欢</a></span>
                    </div>

                  </el-col>
                </el-row>
              </el-col>
            </el-row>

          </el-card>

        </li>
      </ul>
      <p v-if="loading">加载中...</p>
      <p v-if="noMore">没有更多了</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input2: "",
      src:
        "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
      count: 10,
      loading: false,
      content: {
        "1": {
          tag: "python",
          title: "嫌多(线程/进程) 异步高调走起！——瓜子二手车",
          img:
            "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
          text:
            "此篇文章省略了很多基础的，例如js的，例如json格式数据的提取啊。试试手，练的，例如json格式数据的提取啊。试试手，练的，例如json格式数据的提取啊。试试手，练的，例如json格式数据的提取啊。试试手，练的，例如json格式数据的提取啊。试试手，练的，例如json格式数据的提取啊。试试手，练的，例如json格式数据的提取啊。试试手，练的，例如json格式数据的提取啊。试试手，练的，例如json格式数据的提取啊。试试手，练on格式数据的提取啊。试试手，练练感觉。似乎也没啥用。一 了解加密与解密 ：什么是加密，什么是解密？加密：数据加密的基本过程，将原为明文的文件或数据经过某种算法进行一次或多次处理。得到的结果常称之为密文的东东。解密：加密的逆过程，找到加密相同的方式，对其逆向处理，得到原本文件或数据的过程",
          author: "Payne",
          time: "2020-05-08 0:04",
          brose: 409,
          comment: 2,
          love: 3
        },
        "2": {
          tag: "python",
          title: "嫌多(线程/进程) 异步高调走起！——瓜子二手车",
          img:
            "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
          text:
            "文章省略了很多基础的，例如js的，例如json格式数据的提取啊。试试手，练的，例如json格式数据的提取啊。试试手，练的，例如json格式数据的提取啊。试试手，练的，例如json格式数据的提取啊。试试手，练的，例如json格式数据的提取啊。试试手，练的，例如json格式数据的提取啊。试试手，练的，例如json格式数据的提取啊。试试手，练的，例如json格式数据的提取啊。试试手，练的，例文章省略了很多基础的，例如js的，例如json格式数据的提取啊。试试手，练的，例如json格式数据的提取啊。试试手，练的，例如json格式数据的提取啊。试试手，练的，例如json格式数据的提取啊。试试手，练的，例如json格式数据的提取啊。试试手，练的，例如json格式数据的提取啊。试试手，练的，例如json格式数据的提取啊。试试手，练的，例如json格式数据的提取啊。试试手，练的，例",
          author: "Payne",
          time: "2020-05-08 0:04",
          brose: 409,
          comment: 2,
          love: 3
        },
        "3": {
          tag: "python",
          title: "嫌多(线程/进程) 异步高调走起！——瓜子二手车",
          img:
            "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
          text:
            "文章省略了很多基础的，例如js的，例如json格式数据的提取啊。试试手，练的，例如json格式数据的提取啊。试试手，练的，例如json格式数据的提取啊。试试手，练的，例如json格式数据的提取啊。试试手，练的，例如json格式数据的提取啊。试试手，练的，例如json格式数据的提取啊。试试手，练的，例如json格式数据的提取啊。试试手，练的，例如json格式数据的提取啊。试试手，练的，例",
          author: "Payne",
          time: "2020-05-08 0:04",
          brose: 409,
          comment: 2,
          love: 3
        },
        "4": {
          tag: "python",
          title: "嫌多(线程/进程) 异步高调走起！——瓜子二手车",
          img:
            "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
          text:
            "文章省略了很多基础的，例如js的，例如json格式数据的提取啊。试试手，练的，例如json格式数据的提取啊。试试手，练的，例如json格式数据的提取啊。试试手，练的，例如json格式数据的提取啊。试试手，练的，例如json格式数据的提取啊。试试手，练的，例如json格式数据的提取啊。试试手，练的，例如json格式数据的提取啊。试试手，练的，例如json格式数据的提取啊。试试手，练的，例",
          author: "Payne",
          time: "2020-05-08 0:04",
          brose: 409,
          comment: 2,
          love: 3
        },
        "5": {
          tag: "python",
          title: "嫌多(线程/进程) 异步高调走起！——瓜子二手车",
          img:
            "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
          text:
            "文章省略了很多基础的，例如js的，例如json格式数据的提取啊。试试手，练的，例如json格式数据的提取啊。试试手，练的，例如json格式数据的提取啊。试试手，练的，例如json格式数据的提取啊。试试手，练的，例如json格式数据的提取啊。试试手，练的，例如json格式数据的提取啊。试试手，练的，例如json格式数据的提取啊。试试手，练的，例如json格式数据的提取啊。试试手，练的，例",
          author: "Payne",
          time: "2020-05-08 0:04",
          brose: 409,
          comment: 2,
          love: 3
        }
      }
    };
  },
  computed: {
    noMore() {
      return this.count >= Object.keys(this.content).length;
    },
    disabled() {
      return this.loading || this.noMore;
    }
  },
  methods: {
    load() {
      this.loading = true;
      setTimeout(() => {
        this.count += 2;
        this.loading = false;
      }, 2000);
    }
  }
};
</script>

<style lang="less" scoped>
.content {
  margin: 10px 0 0 0;
  /deep/ a {
    text-decoration: none;
  }
  .infinite-list-wrapper {
    /deep/ .list {
      padding: 0;
      list-style: none;
      .list-item {
        margin-bottom: 10px;
        /deep/ .box-card {
          padding: 10px 20px;

          /deep/ .el-card__header {
            padding: 0;
            margin-bottom: 15px;
            border-bottom: none;
            .el-icon-caret-right {
              padding: 0;
              padding: 0;
              // background: #d33632;
              color: #d33632;
            }
            /deep/ h2 {
              display: inline;
              font-size: 20px;
              margin: 0;
              font-weight: 400;
              line-height: 25px;
              margin-left: 10px;
              color: #00a67c;
              text-decoration: none;
            }

            @media screen and (max-width: 768px) {
              /deep/ h2 {
                font-size: 16px;
              }
              
            }
            /deep/ .tagOne {
              font-size: 14px;
              background: #d33632;
              color: #fff;
              padding: 3px 6px;
              position: relative;
              .el-icon-caret-right {
                position: absolute;
                top: 6px;
              }
            }
          }

          /deep/ .demo-image__placeholder {
            .el-image {
              height: 130px;
              width: 100%;
            }
            @media screen and (max-width: 768px) {
              /deep/ .el-image {
                height: 62px;
                width: 100px;
              }
            }
          }

          .el-card__body {
            padding: 0;
            position: relative;
            box-sizing: border-box;

            /deep/ .colThree {
              margin-right: 20px;
            }

            /deep/ .spanOne {
              height: 100px;
              text-decoration: none;

              color: #777;
              font-size: 14px;
              line-height: 24px;
              margin-bottom: 0;
              font-style: normal;

              .aHundredPercent {
                line-height: 18px;
                display: -webkit-box;
                text-overflow: ellipsis;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 4;
                overflow: hidden;
              }

              @media screen and (max-width: 768px) {
                /deep/ .aHundredPercent {
                  font-size: 12px;
                  line-height: 20px;
                  display: -webkit-box;
                  text-overflow: ellipsis;
                  -webkit-box-orient: vertical;
                  -webkit-line-clamp: 3;
                  overflow: hidden;
                }
              }
              .auth-span {
                margin: 0 0;
                width: 100%;
                position: absolute;
                bottom: 0;
                right: 0;
                .muted {
                  font-size: 13px;
                  margin-right: 20px;
                }

            @media screen and (max-width: 768px) {
                  .muted {
                  font-size: 12px;
                  margin-right: 20px;
                }
  
            }

                @media screen and (max-width: 992px) {
                  /deep/ .muted {
                    margin-right: 5px;
                  }
                }
                .muted:last-child {
                  margin: 0 10px 0 0;
                }

                .colOne {
                  // float: right;
                  .colOneWrap {
                    float: right;
                  }
                }
                .colTwo {
                  float: right;
                  .colTwoWrap {
                    float: right;
                  }
                }
              }
            }
            /deep/ .el-col {
              min-width: 200px;
            }

            @media screen and (max-width: 768px) {
              /deep/ .el-col {
                min-width: 100px;
              }

  
            }
          }
        }
      }
    }
  }
}
</style>