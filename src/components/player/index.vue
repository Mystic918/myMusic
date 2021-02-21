<template>
  <div class="player">
    <transition name="normal">
        <div class="normal-player"  v-show="fullScreen">
                <!--背景 模糊-->
            <div class="background">
              <img  src="http://dummyimage.com/1745x492/f1d65b" alt="" width="100%" height="100%">
            </div>
            <!--顶部-->
            <div class="top">
              <div class="back" >
                <i class="iconfont icon-my-down"  @click="open"></i>
              </div>
              <h1 class="title">作者</h1>
              <h2 class="subtitle">标题</h2>
            </div>
            <!--中间cd部分-->
            <div class="middle">
              <div class="middle-l" >
                <div class="cd-wrapper" >
                  <div class="cd" >
                    <img  src="http://dummyimage.com/1745x492/f1d65b" class="image">
                  </div>
                </div>
                <div class="playing-lyric-wrapper">
                  <div class="playing-lyric">
                  歌词
                  </div>
                </div>
              </div>
            </div>
            <!--底部按钮控制部分-->
            <div class="bottom">
                <div class="progress-wrapper">
                  <span class="time time-l">
                    00:00
                  </span>
                  <!--播放进度条-->
                  <div class="progress-bar-wrapper"  @touchmove="move" @click="click">
                    <div class="start"  :style="'width:'+ speed +'%;'"></div>
                  </div>
                  <span class="time time-r">
                    00:00
                  </span>
                </div>
                <div class="operators">
                    <div class="icon-btn iconfont icon-loop">
                    </div>
                    <div class="icon-btn iconfont icon-my-prve">
                    </div>
                    <div :class="['icon-btn', 'iconfont', playing === true ? 'icon-my-start' : 'icon-my-stop']"  @click="player">
                    </div>
                    <div class="icon-btn iconfont icon-my-next">
                    </div>
                    <div class="icon-btn iconfont icon-my-love-stop">
                    </div>
                </div>
            </div>
        </div>    
    </transition>
    <!--播放页面小屏 底部-->
    <transition name="mini">
      <div class="mini-player"  v-show="!fullScreen">
        <div class="icon">
          <img src="http://dummyimage.com/1745x492/f1d65b"  width="40" height="40" @click="open">
        </div>
        <div class="text">
          <h2 class="name">标题名</h2>
          <p class="desc">注释内容</p>
        </div>
        <div class="control">
          <!--阻止冒泡--> 
            <i  :class="['btn', 'iconfont', playing === true ? 'icon-my-start' : 'icon-my-stop' ]"  @click="player"></i> 
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
import { mapGetters , mapMutations } from 'vuex'
export default {
data(){
  return {
     speed: "10"
  }
},
methods:{
    move(e){
      console.log(e)
    },
    click(e){
      console.log(e)
    },
    player(){
      if(this.playing){
        this.setPlayingState(false)
      }else{
        this.setPlayingState(true)
      }
    },
    open(){
      if(this.fullScreen){
        this.setFullScreen(false)
      }else{
        this.setFullScreen(true)
      }
    },
    ...mapMutations({
    setPlayingState: 'SET_PLAYING_STATE',
    setFullScreen: "SET_FULL_SCREEN"
    })
},
computed: {
   ...mapGetters(['fullScreen','playing'])
}

}

</script>
<style scoped>
.player{color: #fff !important;}

.background{position: absolute;left: 0;top: 0;width: 100%;height: 100%;z-index: -1;opacity: 0.6;filter: blur(20px);}

.mini-player{display: flex;align-items: center;position: fixed;left: 0;right:0;bottom: 0;z-index: 180;width: 750rem;margin: 0 auto;height: 60px;background:#333;z-index: 1001;}
.mini-player .icon{margin:0 10px 0 20px;width: 40px;height: 40px;border-radius: 20px;overflow: hidden;}
.mini-player .icon img{width: 40px;height: 40px;}
.mini-player .text{flex: 1;}
.mini-player .text .name{text-overflow: ellipsis;overflow: hidden;white-space: nowrap;font-size: 14px;color: #fff;}
.mini-player .text .desc{text-overflow: ellipsis;overflow: hidden;white-space: nowrap;font-size: 12px;color: #ccc;}
.control {width: 40px;height: 40px;margin: 0 5px;}
.control .btn{font-size: 40px;color:  #ffcd32;font-weight: bold;}
.normal-player{position: fixed;z-index: 999;background:#222;left: 0;right:0;bottom: 0;width: 750rem;margin: 0 auto;height: 100%;}
.back i{font-size: 32px;color: #ffcd32;margin-left: 20px;}
.title{font-size: 20px;color: #fff;text-align: center;font-weight: normal;margin-bottom: 10px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
.subtitle{font-size: 16px;color: #fff;text-align: center;font-weight: normal;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
.cd-wrapper{display: flex;justify-content: center;margin-top: 20px;}
.cd{width: 600rem;height: 600rem;border-radius: 50%;overflow: hidden;border: 10px solid rgba(255,255,255,0.1);}
.cd .image{width: 100%;height: 100%;}

.mini-enter-active, .mini-leave-active{transition: all 0.4s}
.mini-enter, .mini-leave-to{opacity: 0}
.normal-enter-active, .normal-leave-active{transition: all 0.4s}
.normal-enter-active , .normal-enter-active  {transition: all 0.4s cubic-bezier(0.86, 0.18, 0.82, 1);}
.normal-enter, .normal-leave-to{opacity: 0; transform: translate3d(-50%, 50%, 0)}
.playing-lyric-wrapper{padding: 20px 10px;overflow: hidden;}
.playing-lyric{font-size: 18px;color: #ffcd32;text-align: center;}

.progress-wrapper{display: flex;justify-content: space-between;padding: 0 20px;align-items: center;}
.progress-wrapper .time{font-size: 14px;color: #fff;}
.progress-bar-wrapper{flex: 1;height: 5px;border-radius: 5px;overflow: hidden;background-color: #333;margin: 0 10px;position: relative;}
.progress-bar-wrapper .start{background-color: #ffcd32;height: 5px;position: absolute;left: 0;}

.bottom{position: fixed;bottom: 0;width: 750rem;left: 0;right: 0;margin: auto;}
.operators{display: flex;padding: 20px 20px 30px 20px;justify-content: center;align-items: center;}
.operators .icon-btn{margin: 0 10px;font-size: 40px;color: #ffcd32;font-weight: bold;}
</style>