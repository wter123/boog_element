<template>
  <div class="carousel">
    <div class="block">
      <el-carousel>
        <el-carousel-item
          v-for="item in carousel"
          :key="item"
        >
        <div class="img-wrap" v-bind:style="{'background-image':'url('+item+')'}"   ></div>
          <!-- <img v-bind:src="item"></img> -->
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>

</template>
<script>
export default {
  data() {
    return {

      img:require("../static/img/1.jpg"),
      carousel: {
        "1": require("../static/img/1.jpg"),
        "2": require("../static/img/2.jpg"),
        "3": require("../static/img/3.jpg"),
        "4": require("../static/img/4.jpg"),
      }
    };
  }
};
</script>
<style lang="less" scoped>
.carousel {
  .el-carousel {
    // max-width: 716px;
    height: 297px;
    overflow: hidden;
    margin: 0 auto;
  }
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
/deep/ .img-wrap{ 
  height: 100%;
  width: 100%;
  background-size: cover;
}

@media screen and (max-width: 500px) {
  .carousel {
    height: 150px;
    width: 100%;
    .el-carousel {
      height: 150px;
      width: 100%;
      overflow: hidden;
      margin: 0 auto;
    }
  }

  /deep/ .el-carousel__container {
    height: 150px;
  }

  /deep/ .el-carousel__indicator--horizontal {
    display: inline-block;
    padding: 6px 2px;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
}
</style>