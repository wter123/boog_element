<template>
<div>{{submitStatus}}
    <quill-editor
    class="editor"
    v-model="content"
    ref="myQuillEditor"
    :options="editorOption"
    @blur="onEditorBlur($event)"
    @focus="onEditorFocus($event)"
    @change="onEditorChange($event)"
  >
  </quill-editor>
</div>

</template>
<script>
import { quillEditor } from "vue-quill-editor";
export default {
  data() {
    return {
      content: null,
      editorOption: {}
    };
  },
  watch: {
    submitStatus: function() {
      this.$store.commit("ArticleData", this.content);
    }
  },
  methods: {
    onEditorBlur() {},
    onEditorFocus() {
      //获得焦点事件
    },
    onEditorChange({ editor, html, text }) {
      this.content = html;
      this.editor = editor;
    }
  },
  props: {
    submitStatus: {
      type: Boolean, //可指定接收类型，如:Array.
      default: false //可设置默认值
    }
  }
};
</script>