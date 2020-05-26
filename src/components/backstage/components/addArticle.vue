<template>
  <div class="editor">
    <p class="appendHeader">添加随笔</p>
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
    <Editor></Editor>
    <button @click="submit">提交</button>
  </div>
</template><script>
import Editor from "@/components/backstage/components/Editor";
export default {
      components: {
    Editor
  },
  data() {
    return {
      content: "",
      searchHeader: "",
      editorOption: {
        placeholder: "编辑文章内容"
      }
    };
  },
    methods: {
    onEditorChange({ editor, html, text }) {
      this.content = html;
    },
    submit() {
      console.log(this.content);
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