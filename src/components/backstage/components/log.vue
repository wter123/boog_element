<template>
  <div class="log">

    <div class="block">
      <el-table
        :data="showData"
        style="width: 100%"
      >
        <template v-for="item in contentList">
          <el-table-column
            v-bind:label=item.label
            v-bind:prop=item.prop
          >
          </el-table-column>
        </template>
        <el-table-column align="right">
          <template
            slot="header"
            slot-scope="scope"
          >
            <el-input
              v-model="search"
              size="mini"
              placeholder="输入关键字搜索"
            />
          </template>
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)"
            >Edit</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
            >Delete</el-button>
          </template>
        </el-table-column>
      </el-table>
      <span class="demonstration">

      </span>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage1"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="tableDataVuex.length"
      >
      </el-pagination>
    </div>
  </div>
</template>


<script>
import { mapState } from "vuex";

export default {
  watch: {
    dataLength: function() {
      this.showData;
    },
    dataChange: function() {
      this.showData;
    },
    tableDataVuex: function(LogData) {
      this.tableData = LogData;
      // console.log(tableDataVuex);
    },
    "$store.state.backstageLog.activeRouter": function() {
      this.tableData = eval(this.$store.state.backstageLog.activeRouter);
    }
  },
  computed: {
    ...mapState({ tableDataVuex: state => state.backstageLog.tableData }),
    showData: function() {
      if (this.dataLength + this.dataChange <= this.tableData.length) {
        // console.log(
        //   this.tableData[(this.dataLength, this.dataLength + this.dataChange)]
        // );
        return this.tableData
          .slice(this.dataLength, this.dataLength + this.dataChange)
          .filter(
            data =>
              !this.search ||
              data.title.toLowerCase().includes(this.search.toLowerCase())
          );
      } else if (this.dataLength + this.dataChange > this.tableData.length) {
        return this.tableData
          .slice(this.dataLength, this.tableData.length)
          .filter(
            data =>
              !this.search ||
              data.name.toLowerCase().includes(this.search.toLowerCase()) ||
              data.address.toLowerCase().includes(this.search.toLowerCase())
          );
      } else {
      }
    }
  },
  methods: {
    handleEdit(index, row) {
      // console.log(index, row);
    },
    handleDelete(index, row) {
      // console.log(index, row);
    },
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
      this.dataChange = val;
      // console.log(this.dataChange);
      this.search = "";
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}，${this.dataChange}`);
      this.dataLength = val * this.dataChange - this.dataChange;
      // console.log(this.dataLength);
      this.search = "";
    }
  },
  data() {
    return {
      contentList: [
        { label: "标题", prop: "title" },
        { label: "发布状态", prop: "publish" },
        { label: "评论数", prop: "comment" },
        { label: "阅读数", prop: "reading" }
      ],

      currentPage1: 1,
      currentPage2: 2,
      currentPage3: 3,
      currentPage4: 4,
      dataChange: 10,
      dataLength: 0,
      tableData: this.$store.state.backstageLog.tableData,
      search: ""
    };
  }
};
</script>


<style lang="less" scoped>
// /deep/ td[class^="el-table_1_column"]
/deep/ .el-table td,
/deep/ .el-table th {
  padding: 0 !important;
  font-size: 12px;
}
</style>