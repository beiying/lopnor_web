/**
 * Created by beiying on 2020/3/23.
 */


/**
 * 组件通信：后代给祖先传值
 * 通过制定要派发的事件名称和数据传值
 * */

function dispatch(eventName, data) {
    let parent = this.$parent;
    while(parent) {
        if (parent) {
            parent.$emit(eventName, data);
            parent = parent.$parent;
        } else {
            break;
        }
    }
}

/**
 * 组件通信：任意两个组件之间通信
 * 通过事件总线或vuex
 * Vuex:创建唯一全局的数据管理者store， 通过它管理数据并通知组件状态变更
 * */
class Bus {
    constructor() {
        this.callbacks = {};
    }

    $on(name, fn) {
        this.callbacks[name] = this.callbacks[name] || [];
        this.callbacks[name].push(fun);
    }

    $emit(name, args) {
        if(this.callbacks[name]) {
            this.callbacks[name].forEach(cb => cb(args));
        }
    }
}
/**
 * //Comp
 * <div>
 *     <slot></slot>
 *     <slot name="content"></slot>
 * <div>
 *
 * <Comp>
 *     <template v-slot:default>具名插槽</template>
 *     <template v-slot:content>内容...</template>
 * </Comp>
 *
 * */