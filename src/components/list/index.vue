<template>
  <div class="list" @click="click">
      <div class="left-img-list" v-if="type === 'LeftImgList'">
          <img :src="imgurl" alt="">
          <div class="list-left">
              <div class="list-title">{{title}}</div>
              <div class="list-summary">{{summary}}</div>
          </div>
      </div>
      <div class="music-list" v-if="type === 'musicList'">
          <div class="list-left">
              <div class="list-title">{{title}}</div>
              <div class="list-summary">{{summary}}</div>
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
        },
        title: {
            type: String
        },
        summary: {
            type: String
        },
        imgurl: {
            type: String
        }
    },
data(){
  return {

  }
},
methods:{
    click(){
        this.$emit('click')
    }
}
}

</script>
<style scoped>
.list{padding: 0 10px;}
.left-img-list{display: flex;justify-content: flex-start;align-items: center;overflow:hidden;}
.left-img-list img{width: 60px;height: 60px;margin-right: 10px;}
.list-title{font-size: 18px;color: #fff;margin-bottom: 10px; text-overflow: ellipsis;overflow: hidden;white-space: nowrap;}
.list-summary{font-size: 18px;color: rgba(255,255,255,0.3); text-overflow: ellipsis;overflow: hidden;white-space: nowrap;}
.list-left{flex: 1;}
</style>