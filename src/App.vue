<template>
  <div id="app">
    <router-link to="/Home"></router-link>
    <router-link to="/login"></router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped> 

 body{
  margin: 0;
}
</style>
