<template>
  <div class="tab">
    <router-link tag="div" to="/recommend">
      <span :class="index === 0? 'active':''">推荐</span>
    </router-link>
    <router-link tag="div" to="/singer">
      <span :class="index === 1? 'active':''">歌手</span>
    </router-link>
    <router-link tag="div" to="/rank">
      <span :class="index === 2? 'active':''">排行</span>
    </router-link>
    <router-link tag="div" to="/search">
      <span :class="index === 3? 'active':''">搜索</span>
    </router-link>
  </div>
</template>
<script>
export default {
    props:{
        index:{
            type: Number,
            default: 0
        }
    }
}
</script>
<style scoped>
.tab{height: 44px;display: flex;justify-content: center;align-items: center;}
.tab>div{flex: 1;height: 100%;line-height: 44px;text-align: center;}
.tab>div>span{color: rgba(255,255,255,0.5);font-size: 14px;padding-bottom: 2px;}
.tab>div>span.active{color:#ffcd32;border-bottom:2px solid #ffcd32;}
</style>