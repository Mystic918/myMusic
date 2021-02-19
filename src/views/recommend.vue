<template>
  <div class="recommend">
      <Swiper :slideList= "slideList"/>
      <h1 class="list-title-index">推荐歌单</h1>
      <List type="LeftImgList"></List>
      <Player/>
  </div>
</template>

<script>
import Swiper from '@/components/swiper'
import List from '@/components/list'
import Player from '@/components/player'
export default {
    components:{
        Swiper,List,Player
    },
data(){
  return {
    
            slideList: [
                {
                    "clickUrl": "#",
                    "desc": "nhwc",
                    "image": "http://dummyimage.com/1745x492/f1d65b"
                },
                {
                    "clickUrl": "#",
                    "desc": "hxrj",
                    "image": "http://dummyimage.com/1745x492/40b7ea"
                },
                {
                    "clickUrl": "#",
                    "desc": "rsdh",
                    "image": "http://dummyimage.com/1745x492/e3c933"
                }
            ],
  }
},

}

</script>
<style scoped>
</style>