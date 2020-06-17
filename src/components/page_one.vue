<template>

  <button   @click="loadImage">
    a
  </button>

</template>    
<script>

export default {
  mounted() {
  
	//调用方法
      this.loadImage('D:/工作/石碣/影像/RW01_DOM.tif');

    },
      methods:{

       loadImage(filename) {
        var xhr = new XMLHttpRequest();
        xhr.responseType = 'arraybuffer';
        xhr.open('GET', filename);
        xhr.onload = function (e) {
          var tiff = new Tiff({buffer: xhr.response});
          var width ='200px';
          var height ='200px';
          var canvas = tiff.toCanvas();
          if (canvas) {
          //这里视个人情况修改
            canvas.setAttribute('style', 'width:' + (width*0.3) +
              'px; height: ' + (height*0.3) + 'px');
            var elem = document.createElement("div");
            elem.innerHTML ='<div><a href="' + filename + '">' + filename +
              ' (width: ' + width + ', height:' + height + ')' +
              '</a></div>';
            document.body.append(elem);
            document.body.append(canvas);//重点是将canvas添加到视图中
            //上面视个人情况修改
          }
        };
        xhr.send();
      }}
};
</script>
 