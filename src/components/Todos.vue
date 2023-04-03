<template>
    <div><h1>Todos</h1></div>
    <h2>{{ msg }}</h2>
    <button @click="handleClick">Click me</button>
    <button @click="handleEmit">Alert message</button>
</template>
<script setup>
import { useCounterStore } from '../store/count';
import { defineProps, defineEmits } from 'vue';
defineProps({
    msg: String,
});
const emit = defineEmits(['handle']);
const store = useCounterStore();
created: {
    store.getTodos();
}
function handleClick() {
    alert('Click me');
}
function handleEmit() {
    emit('handle', 'Xin chao');
}
</script>
<style lang=""></style>
