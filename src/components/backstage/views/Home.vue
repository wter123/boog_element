<template>
  <div class="Home">
    <el-header></el-header>
    <el-aside class="left">
      <el-card class="box-card">
        <div
          slot="header"
          class="clearfix list_header"
        >
          <span>操作</span>

        </div>
        <div
          v-for="o in options"
          class="text item"
        >
          <router-link
            tag="a"
            :to="o.router"
          >{{o.title }}</router-link>
        </div>
      </el-card>
      <el-card class="box-card">
        <div
          slot="header"
          class="clearfix list_header"
        >
          <span>分类</span>

        </div>
        <div
          v-for="o in sortArticle"
          class="text item"
        >
          <a @click="updataTitleData"> {{ o  }}</a>
        </div>
      </el-card>
    </el-aside>
    <el-main>
      <router-view v-if="this.$route.path=='/backstage/Home/addArticle'"></router-view>
      <template v-else>
        <el-tabs
          type="border-card"
          v-model="activeName"
          @tab-click="handleClick"
        >
          <el-tab-pane
            label="文章"
            name="pageArticle"
          >
            <pageArticle v-if="pageArticle" />
            <div>
            </div>
          </el-tab-pane>
          <el-tab-pane
            label="草稿"
            name="draft"
          >
            <draft v-if="draft" />

          </el-tab-pane>

          <el-tab-pane
            label="日志"
            name="log"
          >
            <log v-if="log" />
          </el-tab-pane>
          <el-tab-pane
            label="评论"
            name="comment"
          >
            <comment v-if="comment" />
          </el-tab-pane>
        </el-tabs>
      </template>

    </el-main>
  </div>
</template>

<script>
import draft from "../components/draft.vue";
import pageArticle from "../components/pageArticle.vue";
import log from "../components/log.vue";
import comment from "../components/comment.vue";

import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      routerActiveE: state => state.backstageLocal.routerActive
    })
  },

  components: {
    draft,
    pageArticle,
    log,
    comment
  },
  mounted() {
    let temp = [];
    for (let item in this.$store.state.backstageArticle.titleList) {
      temp.push(item);
      this.sortArticle = temp;
    }
  },
  methods: {
    handleClick(tab) {
      this.$store.commit("routerActive", tab.name);
      if (tab.name === "draft") {
        this.draft = true;
        this.pageArticle = false;
        this.log = false;
        this.comment = false;
      } else if (tab.name === "pageArticle") {
        this.draft = false;
        this.pageArticle = true;
        this.log = false;
        this.comment = false;
      } else if (tab.name === "log") {
        this.draft = false;
        this.pageArticle = false;
        this.log = true;
        this.comment = false;
      } else if (tab.name === "comment") {
        this.draft = false;
        this.pageArticle = false;
        this.log = false;
        this.comment = true;
      }
    },
    updataTitleData(event) {
      this.activeContent = event.target.innerText;
      this.$router.push("/backstage/Home")
    }
  },
  watch: {
    "$route.path": function() {
      if (this.$route.path == "/backstage/Home/addArticle") {
      }
    },
    routerActiveE: function() {
      if (this.routerActiveE === "pageArticle") {
        let temp = [];
        for (let item in this.$store.state.backstageArticle.titleList) {
          temp.push(item);
          this.sortArticle = temp;
        }
      } else if (this.routerActiveE === "draft") {
        let temp = [];
        for (let item in this.$store.state.backstageDraft.titleList) {
          temp.push(item);
          this.sortArticle = temp;
        }
      } else if (this.routerActiveE === "log") {
        let temp = [];
        for (let item in this.$store.state.backstageLog.titleList) {
          temp.push(item);
          this.sortArticle = temp;
        }
      } else if (this.routerActiveE === "comment") {
        let temp = [];
        for (let item in this.$store.state.backstageComment.titleList) {
          temp.push(item);
          this.sortArticle = temp;
        }
      }
    },
    activeContent: function() {
      if (this.routerActiveE === "pageArticle") {
        this.content = `this.$store.state.${this.routerActiveE}.titleList['${this.activeContent}']`;
        this.$store.state.backstageArticle.activeRouter = `this.$store.state.backstageArticle.titleList['${this.activeContent}']`;
      } else if (this.routerActiveE === "draft") {
        this.content = `this.$store.state.${this.routerActiveE}.titleList['${this.activeContent}']`;
        this.$store.state.backstageDraft.activeRouter = `this.$store.state.backstageDraft.titleList['${this.activeContent}']`;
      } else if (this.routerActiveE === "log") {
        this.content = `this.$store.state.${this.routerActiveE}.titleList['${this.activeContent}']`;
        this.$store.state.backstageLog.activeRouter = `this.$store.state.backstageLog.titleList['${this.activeContent}']`;
      } else if (this.routerActiveE === "comment") {
        this.content = `this.$store.state.${this.routerActiveE}.titleList['${this.activeContent}']`;
        this.$store.state.backstageComment.activeRouter = `this.$store.state.backstageComment.titleList['${this.activeContent}']`;
      }
    }
  },
  data() {
    return {
      activeName: "pageArticle",
      activeContent: "",
      draft: false,
      pageArticle: true,
      log: false,
      comment: false,
      sortArticle: this.$store.state.backstageArticle.titleList,
      content: "this.$store.state." + this.routerActiveE + ".titleList",
      options: [
        { title: "编辑文章", router: "/backstage/Home/addArticle" },
        { title: "回收站", router: "recycleBin" }
      ]
    };
  }
};
</script>


<style lang="less" scoped>
/deep/ .left {
  width: 150px !important;
  float: left;
  padding-top: 20px;
}

.item {
  line-height: 1.2em;
}
.list_header {
  background-color: #6b86b3;
  color: #fff;
  font-weight: 700;
  margin: 0;
  text-align: center;
  background-color: #b6c9e7;
  border-top: 1px solid #666;
  border-bottom: 1px solid #666;
}

/deep/ .el-card__header {
  padding: 0;
  font-size: 14px;
  a {
    font-size: 12px;
    font-family: Smart Quotes, -apple-system, BlinkMacSystemFont, Helvetica Neue,
      PingFang SC, Microsoft YaHei, Source Han Sans SC, Noto Sans CJK SC,
      WenQuanYi Micro Hei, sans-serif;
    background-color: transparent;
    cursor: pointer;
    color: #002c99;
    text-decoration: none;
  }
}
/deep/ .el-card {
  margin: 0;
  border: none;
}
/deep/ .el-card__body {
  padding: 0 0 0 8px;
  a {
    font-size: 12px;
    font-family: Smart Quotes, -apple-system, BlinkMacSystemFont, Helvetica Neue,
      PingFang SC, Microsoft YaHei, Source Han Sans SC, Noto Sans CJK SC,
      WenQuanYi Micro Hei, sans-serif;
    background-color: transparent;
    cursor: pointer;
    color: #002c99;
    text-decoration: none;
  }
}
</style>