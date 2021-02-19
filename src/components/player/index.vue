<template>
  <div class="player">
    <transition name="normal">
        <div class="normal-player"  v-show="fullScreen">
            <div>1111111111</div>
            <div class="player">{{this.$store.state.playing}}</div>
            <div class="player">{{this.$store.getters.playing}}</div>
            <div @click="player"> 11111111 </div>
        </div>    
    </transition>
    <!--播放页面小屏 底部-->
    <transition name="mini">
      <div class="mini-player"  v-show="!fullScreen">
        <div class="icon">
          <img alt=""  width="40" height="40" >
        </div>
        <div class="text">
          <h2 class="name">标题名</h2>
          <p class="desc">注释内容</p>
        </div>
        <div class="control">
          <!--阻止冒泡--> 
            <i  class="icon-mini"></i> 
        </div>
        <div class="control" >
          <i class="icon-playlist"></i>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
// mapActions
import {mapGetters, mapMutations } from 'vuex'
export default {
data(){
  return {

  }
},
methods:{
    player(){
        this.setPlayingState(true)
    },
    ...mapMutations({
    setPlayingState: 'SET_PLAYING_STATE'
    }),
    ...mapGetters(['fullScreen'])
},


}

</script>
<style scoped>
.player{color: #fff  !important;}
.mini-player{display: flex;align-items: center;position: fixed;left: 0;bottom: 0;z-index: 180;width: 100%;height: 60px;background:rgba(0, 0, 0, 0.5)}
</style>