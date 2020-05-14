<template>

    <div id="aa">
        <transition name="fade">
            <div v-if="show">hello world</div>
        </transition>
        <button @click="handleClick">切换</button>
    </div>
 

</body>
</template>    <script>
  export default{
            data() {return{
                show: true
            }},
            methods: {
                handleClick: function () {
                    this.show = (this.show === true ? false : true)
                }
            }
         }
    </script>
 