<template>
  <div class="editor">
    <div class="show" v-html="$store.state.backstageLocal.ArticleData"></div>
    <p class="appendHeader">添加随笔</p>{{submitStatus}}
    <div
      for=""
      class="padding-6"
    >标题</div>
    <el-input
      size="small"
      v-model="searchHeader"
      placeholder="请输入标题"
    ></el-input>
    <div
      for=""
      class="padding-6"
    >内容</div>
    <Editor :submitStatus="submitStatus"></Editor>
    <button @click="submit">提交</button>
    aaa{{this.ArticleData}}
  </div>
</template><script>
import Editor from "@/components/backstage/components/Editor";
export default {
  components: {
    Editor
  },
  wtach: {
    "$store.state.backstageLocal.ArticleData": function() {
      this.ArticleData = this.$store.state.backstageLocal.ArticleData;
    }
  },
  data() {
    return {
      content: "",
      searchHeader: "",
      editorOption: {
        placeholder: "编辑文章内容"
      },
      ArticleData: ``,
      submitStatus: false
    };
  },
  methods: {
    onEditorChange({ editor, html, text }) {
      this.content = html;
    },
    submit() {
      this.submitStatus=!this.submitStatus;
    }
  }
};
</script>

<style lang="less" scoped>
/deep/ .appendHeader {
  font-size: 16px;
  font-weight: 700;
  line-height: 2rem;
  color: #333;
  border-top: 1px solid #aaa;
  border-bottom: 1px dashed #aaa;
  margin: 1.2rem 0 0.5rem;
}
/deep/ .ql-container {
  min-height: 400px;
}
/deep/ .padding-6 {
  padding: 6px;
}
</style>