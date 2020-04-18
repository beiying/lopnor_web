<template>
    <div class="header">
        <div class="header-back">
            <span class="iconfont back-icon">&#xe612;</span>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe65a;</span>
            输入城市/景点/游玩主题
        </div>
        <div class="header-region">
            城市
            <span class="iconfont arrow-icon">&#xe771;</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style lang="stylus" scoped>
    /*引入色值定义文件*/
    @import "~@/assets/styles/varibles.styl"
    .header
        display: flex
        line-height: 0.86rem
        background: $bgColor
        color: #fff
        .header-back
            width: 0.64rem
            float: left
            .back-icon
                font-size: 0.4rem
        .header-input
            flex:1
            color: #ccc
            text-align: left
            height: .64rem
            line-height : .64rem
            margin-top : .12rem
            margin-left : .2rem
            padding-left: .2rem
            background : #ffffff
            border-radius : .1rem
        .header-region
            width: 1.24rem
            float: right
            text-align: center
            .arrow-icon
                margin-left: -.04rem
                font-size: .24rem
</style>