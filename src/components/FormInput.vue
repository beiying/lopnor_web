<template>
    <div>
        <input :value="value" @input="onInput" v-bind="$attrs"/>
    </div>
</template>
<script>
    /**
     * 任务1：实现自定义组件的双向绑定，v-model是语法糖，实现自定义组件双向绑定需要制定:value和@input即可
     * 任务2：值发生变化时能够通知FormItem父组件
     * 任务3：input各种属性的设定
     * */
    export default {
        inheritAttrs: false,//集合$attrs,可以继承父组件的属性
        props: {
            value: {
                type: String,
                default: ""
            },
        },
        methods: {
            onInput: function(e) {
                this.$emit('input', e.target.value);
                this.$parent.$emit("validate");
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>