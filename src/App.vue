<template>
  <div id="app">
     <router-link to="/Home"></router-link>
     <router-link to="/login"></router-link>
     <router-view></router-view>
  </div>
</template>

<script>
 
export default  {
  data(){
    return{

    }
  },
 

}
</script>

<style lang="less">
html{
  padding: 0;
  margin: 0;
}
body{
  padding: 0;
  margin: 0;
}
</style>
