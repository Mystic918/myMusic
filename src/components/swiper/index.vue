<template>
  <div class="swiper">
    <div class="carousel-wrap">
        <ul tag="ul" class='slide-ul'>
            <li v-for="(list,index) in slideList" :key="index" v-show="index===currentIndex" @mouseenter="stop" @mouseleave="go">
                <a :href="list.clickUrl" >
                    <img :src="list.image" :alt="list.desc">
                </a>
            </li>
        </ul>
        <ul class="carousel-items">
            <li v-for="(item,index) in slideList.length" :key="index" :class="{'active':index===currentIndex}" @mouseover="change(index)"></li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        slideList:{
            type: Array
        },
    },
    data(){
        return{
            currentIndex: 0,
            timer: ''
        }
    },
     methods: {
            go() {
                this.timer = setInterval(() => {
                    this.autoPlay()
                }, 4000)
            },
            stop() {
                clearInterval(this.timer)
                this.timer = null
            },
            change(index) {
                this.currentIndex = index
            },
            autoPlay() {
                this.currentIndex++
                if (this.currentIndex > this.slideList.length - 1) {
                    this.currentIndex = 0
                }
            }
        },
       created() {
        //    this.$nextTick()将回调延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它，然后等待 DOM 更新。
         this.$nextTick(() => {
           this.timer = setInterval(() => {
             this.autoPlay()
           }, 4000)
         })
       }
}
</script>

<style>
.carousel-wrap{
    width: 750rem;
    height: 400rem;
    overflow: hidden;
    position: relative;
}
.slide-ul{
    width: 750rem;
    height: 400rem;
    overflow: hidden;
}
.slide-ul img{
    width: 750rem;
    height: 400rem;
}
.carousel-items{
    width: 750rem;
    height: 100rem;
    position: absolute;
    bottom: 0px;
    z-index: 12;
    display: flex;
    justify-content: center;
    align-items: center;
}
.carousel-items li{width: 30px;height: 6px;border-radius: 10px;background-color: rgba(0,0,0, 0.5);margin: 0 5px;}
.carousel-items li.active{background-color: rgba(0,0,0, 0.8);}
</style>
