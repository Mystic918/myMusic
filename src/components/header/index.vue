<template>
  <div class="header">
      <div class="logo">
          <img src="@/assets/images/logo-title.png"/>
      </div>
      <div class="home">
        <i class="iconfont icon-person-man"></i>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.header{height: 46px;line-height: 46px;text-align: center;position: relative;background-color: #222;}
.header .logo{left: 0;top: 0;right: 0;bottom: 0;position: absolute;margin: auto;}
.header .logo img{width: auto;height: 36px;vertical-align: middle;}
.header .home{top: 0;right: 0;bottom: 0;position: absolute;margin: auto;}
.home .icon-person-man{padding: 11px;font-size: 22px;color: #ffcd32;}

</style>