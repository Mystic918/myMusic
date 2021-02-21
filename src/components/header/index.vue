<template>
  <div :class="[status === 'relative'? 'relative': 'fixed']" :style="['z-index:'+zindex]">
    <div v-show="type === 'normal'">
    <div :class="['header']" >
        <div class="logo">
            <img src="@/assets/images/logo-title.png"/>
        </div>
        <div class="home">
          <i class="iconfont icon-person-man"></i>
        </div>
    </div>
    <slot name="main"></slot>
    </div>
    <div :class="['header-back', (status === 'relative')? 'relative': (status === 'absolute') ? 'absolute' : 'fixed']" v-show="type === 'back'">
        <div class="onback">
          <i class='iconfont icon-my-down'></i>
        </div>
        <div class="title">
          {{title}}
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    title:{
      type: String
    },
    type:{
      type: String
    },
    status:{
      type: String,
      default: 'relative'
    },
    zindex:{
      type: String
    }
  }
}
</script>

<style>
.header{height: 46px;line-height: 46px;text-align: center;position: relative;background-color: #222;}
.header .logo{left: 0;top: 0;right: 0;bottom: 0;position: absolute;margin: auto;}
.header .logo img{width: auto;height: 36px;vertical-align: middle;}
.header .home{top: 0;right: 0;bottom: 0;position: absolute;margin: auto;}
.home .icon-person-man{padding: 11px;font-size: 22px;color: #ffcd32;}
.relative{position: relative;width: 750rem;}
.absolute{position: absolute;width: 750rem;}
.fixed{position: fixed;width: 750rem;background-color: #222;}
.header-back{height: 46px;line-height: 46px;text-align: center;position: relative;background-color: #222;}
.header-back .title{color: #fff;font-size: 22px;}
.onback{position: absolute;left: 20px;width: 44px;height: 44px;}
.icon-my-down{color: #ffcd32;font-size: 26px !important;font-weight: bold;}
</style>