<template>
  <div class="detailed">
    <Header type="back" zindex='1001' title="11111"/>
    <div>1111111</div>
  </div>
</template>

<script>
import Header from "@/components/header";
import { getSongList } from "@/api/recommend.js";
export default {
    components: {
    Header
  },
data(){
  return {

  }
},
mounted(){
// disstid
getSongList().then(rs=>{console.log(rs)})
}
}

</script>
<style scoped>
.detailed{position: fixed;left: 0;top: 0;right: 0;bottom: 0; width: 750rem;margin: 0;background: #222;z-index: 998;height: 100%;overflow-y: scroll;}
</style>