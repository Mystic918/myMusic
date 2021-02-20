<template>
  <div class="list">
      <div class="left-img-list" v-if="type === 'LeftImgList'">
          <img src="http://dummyimage.com/1745x492/f1d65b" alt="">
          <div>
              <div class="list-title">标题</div>
              <div class="list-summary">内容</div>
          </div>
      </div>
      <div class="music-list" v-if="type === 'musicList'">
          <div>
              <div class="list-title">标题</div>
              <div class="list-summary">内容</div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        type: {
            type: String,
            default: 'musicList'
        }
    },
data(){
  return {

  }
},

}

</script>
<style scoped>
.list{padding: 0 10px;}
.left-img-list{display: flex;justify-content: flex-start;align-items: center;}
.left-img-list img{width: 60px;height: 60px;margin-right: 10px;}
.list-title{font-size: 18px;color: #fff;margin-bottom: 10px; text-overflow: ellipsis;overflow: hidden;white-space: nowrap;}
.list-summary{font-size: 18px;color: rgba(255,255,255,0.3); text-overflow: ellipsis;overflow: hidden;white-space: nowrap;}
</style>