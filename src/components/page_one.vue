<template>

  <div id="aa">
    aa{{sex}}
  </div>

</template>    
<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      routerActiveE: state => state.backstageLocal.routerActive
    })
  },
  methods: {
    handClick(tab) {
      this.$store.commit("routerActive", tab.name);
    }
  },
  watch: {
    routerActiveE: function() {
      console.log(this.routerActiveE);
    }
  }
};
</script>
 