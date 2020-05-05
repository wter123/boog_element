<template>
  <div class="home">
    <topSidebar/>
    <leftSidebar />
  </div>
</template>

<script>
// @ is an alias to /src
import topSidebar from '@/components/topSidebar.vue'
import leftSidebar from '@/components/leftSidebar.vue'
export default {
  name: 'Home',
  components: {
    leftSidebar,
    topSidebar
  }
}
</script>
