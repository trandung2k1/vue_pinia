<template>
    <div>
        <h1>App</h1>
        <Header></Header>
        <Todos msg="Hehe" v-on:handle="(i) => handleClick(i)"></Todos>
        <h2>{{ count }}</h2>
        <button @click="increment">Increment</button>
    </div>
</template>

<script>
import Header from './components/Header.vue';
import Todos from './components/Todos.vue';
import { useCounterStore } from './store/count';
import { mapState, mapActions } from 'pinia';
export default {
    name: 'App',
    created() {
        // this.getTodos();
    },
    components: {
        Header,
        Todos,
    },
    computed: {
        ...mapState(useCounterStore, ['count']),
    },
    methods: {
        ...mapActions(useCounterStore, ['increment', 'getTodos']),
        handleClick: function (msg) {
            alert('Message ' + msg);
        },
    },
};
</script>

<style></style>
