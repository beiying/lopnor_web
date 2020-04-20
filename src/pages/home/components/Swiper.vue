<template>
    <div class="swiper-new-wrapper">
        <swiper ref="mySwiper" :options="swiperOptions">
            <swiper-slide>
                <img class="swiper-img" src="https://img1.qunarzz.com/qs/1909/c5/649aae0f58224002.jpg" />
            </swiper-slide>
            <swiper-slide>
                <img class="swiper-img" src="https://img1.qunarzz.com/qs/1912/50/067a6d82e1ca0b02.jpg"/>
            </swiper-slide>
            <swiper-slide>
                <img class="swiper-img" src="https://img1.qunarzz.com/qs/2001/d9/8844a335554e1c02.jpg" />
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
    export default {
        name: "HomeSwiper",
        data() {
            return {
                swiperOptions: {
                    loop: true,
                    pagination: {el: '.swiper-pagination'}
                }
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .swiper-new-wrapper >>> .swiper-pagination-bullet-active{
        background: #fff
    }
    .swiper-new-wrapper
        width: 100%
        background: #eee
        .swiper-img
            width: 100%
</style>