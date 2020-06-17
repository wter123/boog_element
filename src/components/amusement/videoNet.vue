<template>
  <div class="videoNet">
    <iframe
      class="vedio"
      id="RMid"
      :src="'https://jx.618g.com/?url='+ this.$route.params.paicheNo "
    >
    </iframe>
  </div>
</template>


<script>
export default {
  mounted() {
    setTimeout(function() {
      let i = document.getElementById("RMid");
      i.onload = function() {
        console.log(i.contentDocument);
        console.log(
          i.contentWindow.document.getElementById("player").innerHTML
        );
      };
    },2000);

    document.querySelector(".vedio").style.width =
      document.documentElement.clientWidth + "px";
    document.querySelector(".vedio").style.height =
      document.documentElement.clientHeight + "px";

    window.onresize = () => {
      return (() => {
        document.querySelector(".vedio").style.width =
          document.documentElement.clientWidth + "px";
        document.querySelector(".vedio").style.height =
          document.documentElement.clientHeight + "px";
      })();
    };
  }
};
</script>


<style lang="less" scoped>
/deep/ html,
body {
  margin: 0;
  padding: 0;
  /* width:100%; */
  width: 100%;
  height: 100%;
}
/* iframe{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    width: 100%;
    height: 100%;
} */

iframe {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
</style>