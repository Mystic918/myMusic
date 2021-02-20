<template>
  <div id="app">
      <Header type="normal"></Header>
      <tab :index="index"></tab>
      <keep-alive>
        <router-view/>
        </keep-alive> 
  </div>
</template>

<script>
import tab from "@/components/tab";
import Header from "@/components/header";
export default {
  components: {
    Header,tab
  },
  data(){
    return {
      index : 0
    }
  }
}
</script>
<style>
@import url(./assets/css/reset.css);
@import url(./assets/css/iconfont.css);
#app{background-color: #222;}
</style>
