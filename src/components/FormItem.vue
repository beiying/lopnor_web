<tempalte>
    <div>
        <label v-if="label">label</label>
        <slot></slot>
        <p v-if="errMsg">errMsg</p>
    </div>
</tempalte>

<script>
    import Schema from 'async-validator'
    /**
     * 任务1：给input预留插槽
     * 任务2：能够展示label和校验信息
     * 任务3：能够进行校验
     * */
    export default {
        inject: ['form'],
        props: {
            label: {
                type: String,
                default: ""
            },
            prop: {
                type: String
            }
        },
        data: function() {
            return {errMsg: ""}
        },
        mounted: function() {
            this.$on("validate", this.validate)
        },
        methods: {
            validate: function() {
                const value = this.form.model[this.prop];
                const rules = this.form.rules[this.prop];

                let desc = {};
                desc[this.prop] = rules;
                const schema = new Schema(desc);
                let v = {};
                v[this.prop] = value;
                return schema.validate(v, function(err) {
                    if (err) {
                        this.errMsg = err;
                    } else {
                        this.errMsg = "";
                    }
                });
            }
        }
    }

</script>

<style>

</style>