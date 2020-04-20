<template>
    <div class="navigation-menu">
        <div class="navigation-menu-item">
            <div class="navigation-menu-img">
                <img class="menu-img" src="https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" />
            </div>
            <p class="navigation-menu-item-name">景点门票</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NavigationMenu"
    }
</script>

<style lang="stylus" scoped>
    .navigation-menu
        overflow: hidden
        width: 100%
        height: 0
        padding-bottom: 50%
        background: #25a4bb
        .navigation-menu-item
            position : relative
            overflow: hidden
            float: left
            width: 25%
            height: 0
            padding-bottom: 25%
            .navigation-menu-img
                display : inline-block
                width : 1.1rem
                height : 1.1rem
                .menu-img
                    height : 100%
            .navigation-menu-item-name
                position: absolute
                left : 0
                right : 0
                bottom : 0
                height : .4rem
                line-height : .4rem


</style>