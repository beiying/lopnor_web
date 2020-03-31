<template>
    <div>
        <slot></slot>
    </div>
</template>
<script>
    export default {
        provide: {
            form: this
        },
        props: {
            model: {
                type: Object,
                require: true
            },
            rules: {
                type: Object
            }
        },
        methods: {
            validate: function(callback) {
                const tasks = this.$children.filter(function(item) {
                            return item.prop;
                        }).map(function(item) {
                            return item.validate;
                        });
                Promise.all(task)
                        .then(function() {
                            callback(true);
                        }).catch(function() {
                            callback(false);
                        })
            }
        }
    }

</script>

<style lang="scss" scoped>

</style>