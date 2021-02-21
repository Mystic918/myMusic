<template>
  <div id="app">
      <Header type="normal" :status="status" zindex='999'>
      <tab :index="index" slot="main"></tab>
      </Header>
      <keep-alive>
        <router-view/>
        </keep-alive> 
  </div>
</template>

<script>
import tab from "@/components/tab";
import Header from "@/components/header";
export default {
  mounted(){
    const that = this
    window.onscroll = function() {
        //为了保证兼容性，这里取两个值，哪个有值取哪一个
        //scrollTop就是触发滚轮事件时滚轮的高度
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        console.log("滚动距离" + scrollTop);
        if(scrollTop > 0){that.status = 'fixed'}else{that.status = 'relative'}
      } 
  },
  components: {
    Header,tab
  },
  data(){
    return {
      index : 0,
      status: 'relative'
    }
  }
}
</script>
<style>
@import url(./assets/css/reset.css);
@import url(./assets/css/iconfont.css);
#app{background-color: #222;}
</style>
