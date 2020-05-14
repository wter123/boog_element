<template>
  <div class="rightSidebar">
    <el-card class="box-card">
      <div
        slot="header"
        class="clearfix"
      >
        <span>猜你喜欢</span>
      </div>
      <div
        v-for="o in 4"
        :key="o"
        class="text item"
      >
        {{'列表内容 ' + o }}
      </div>
    </el-card>

    <el-card class="box-card">
      <div
        slot="header"
        class="clearfix"
      >
        <span>最新热门</span>

      </div>
      <div
        v-for="o in 4"
        :key="o"
        class="text item"
      >
        {{'列表内容 ' + o }}
      </div>
    </el-card>

    <el-card class="box-card">
      <div
        slot="header"
        class="clearfix"
      >
        <span>标签云</span></div>
      <div>
        <!-- {{'列表内容 ' + o }} -->

        <el-tag
          v-for="o in 14"
          :key="o"
          class="text item3"
          :type="tagStatus[Math.floor((Math.random()*tagStatus.length))]"
        size="small">标签一</el-tag>
      </div>
    </el-card>

  </div>
</template>
<script>
export default {
  data(){
    return{
      tagStatus:["success","warning","danger","info",""]
 
    }
  }
};
</script>
<style lang="less" scoped>
.rightSidebar {
  /deep/ .box-card {
    padding: 10px 15px;
    margin-bottom: 10px;
    .text {
      font-size: 14px;
    }

    .item {
      margin-bottom: 10px;
    }
    .item3 {
      display: inline-block;
      // margin:  0 10px 0 0;
      margin-bottom: 10px;
      width: 47%;
    }
    .item3/*:*/:nth-child(odd){
      margin:  0 6% 0 0;
    }
    .el-card__header {
      height: 45px;
      line-height: 45px;
      padding: 0;
    }
    .el-card__body {
      padding: 15px 0;
    }
  }
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
</style>
