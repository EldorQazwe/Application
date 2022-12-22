<template>
    <select class="select" @change="listenChangeOption">
        <option selected disabled hidden >{{title}}</option>
        <option class="option" v-for="option in options" :key='option.value' :value='option.value' >{{ option.name }}</option>
    </select>
</template>

<script>
    export default {
        name: "SelectOptions",
        props: {
            modelValue: {
                type: String,
            },
            options : {
                type: Array,
                default: () => []
            },
            title : {
                type: String,
            }
        },
        methods: {
            listenChangeOption (event) {
                this.$emit("update:modelValue", event.target.value )
            }
        }
    }
</script>

<style scoped>

.select {
    width: 20%;
    background-color: #61c497;
    color: #fff;
    font-size: 14px;
    padding: 15px 20px;
    border: none;
    border-radius: 5px;
    font-weight: 500;
    display: flex;
    margin-left: 10px;
}


option {
    font-weight: bold;
}
</style>
