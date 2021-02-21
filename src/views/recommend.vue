<template>
  <div class="recommend">
      <div class="common-list">
      <Swiper :slideList= "slideList"/>
        <h1 class="list-title-index">推荐歌单</h1>
        <List type="LeftImgList" v-for="(item,index) in list" 
        :key="index" 
        class="list"
        :imgurl="item.imgurl"
        :title="item.creator.name"
        :summary="item.dissname"
        @click="selectItem(item)"
        ></List>
      </div>
      <Player/>
      <router-view></router-view>
  </div>
</template>

<script>
import Swiper from '@/components/swiper'
import List from '@/components/list'
import Player from '@/components/player'
import { getDiscList } from "@/api/recommend.js";
export default {
    components:{
        Swiper,List,Player
    },
    data(){
        return {
            list:[],
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
            ]
        }
    },
    mounted(){
        getDiscList().then(rs=>{
            console.log(rs)
            if(rs.code === 0 ){this.list = rs.data.list}
        })
    },
    methods:{

      selectItem(item) {
          console.log(item)
        this.$router.push({
          path: `/recommend/${item.dissid}`
        })
      },
    }
}

</script>
<style scoped>
.list{margin: 20px 0;}
.common-list{top: 90px;background-color: #222;padding: 0 0 70px 0;}
</style>