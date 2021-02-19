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
            <i  :class="['btn','iconfont',playing === true ?'icon-my-start':'icon-my-stop']"></i> 
        </div>
        <div class="control" >
          <i  class="btn iconfont icon-my-all-row"></i> 
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
    })
},
computed: {
   ...mapGetters(['fullScreen','playing'])
}

}

</script>
<style scoped>
.player{color: #fff  !important;}
.mini-player{display: flex;align-items: center;position: fixed;left: 0;bottom: 0;z-index: 180;width: 100%;height: 60px;background:rgba(0, 0, 0, 0.5)}
.mini-player .icon{margin:0 10px 0 20px;width: 40px;height: 40px;border-radius: 10px;}
.mini-player .icon img{width: 40px;height: 40px;}
.mini-player .text{flex: 1;}
.mini-player .text .name{text-overflow: ellipsis;overflow: hidden;white-space: nowrap;font-size: 14px;color: #fff;}
.mini-player .text .desc{text-overflow: ellipsis;overflow: hidden;white-space: nowrap;font-size: 12px;color: #333;}
.control {width: 40px;height: 40px;margin: 0 5px;}
.control .btn{font-size: 40px;color:  rgba(255,205,49,0.5);font-weight: bold;}
</style>