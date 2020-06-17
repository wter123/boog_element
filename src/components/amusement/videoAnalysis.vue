<template>
  <div class="videoAnalysis">
    <div class="serach">

      <el-input
        placeholder="请输入链接"
        v-model="dataSearch"
        prefix-icon="el-icon-search"
        @keyup.enter.native="getGameList()"
      >
        <el-button
          slot="append"
          icon="el-icon-search"
          v-on:click="getGameList"
        ></el-button>
      </el-input>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataSearch: "",
      xmlhttp: ""
    };
  },
  methods: {
    getGameList: function() {
      this.$router.push({ name: "1-1", params: { paicheNo: this.dataSearch } });
    }
  }
};
</script>




<style lang="less" scoped>
/deep/ html,
body {
  height: 100%;
  width: 100%;
}
.videoAnalysis {
  width: 50%;
  margin: 200px auto;
}
</style>