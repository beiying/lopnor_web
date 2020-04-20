<template>
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
        <navigation-menu></navigation-menu>
    </div>
</template>

<script>
    import HomeHeader from "./components/Header"
    import HomeSwiper from "./components/Swiper"
    import NavigationMenu from "./components/NavigationMenu"
    export default {
        name: "Home",
        components: {
            HomeHeader,
            HomeSwiper,
            NavigationMenu
        }
    }
</script>

<style scoped>
    .home {
        font-size: 50px;
    }
</style>