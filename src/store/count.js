import axios from 'axios';
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
    state() {
        return {
            count: 0,
            todos: [],
        };
    },
    getters: {
        doubleCount: (state) => state.count * 2,
    },
    actions: {
        increment() {
            this.count++;
        },
        async getTodos() {
            try {
                const res = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=3');
                this.todos = res.data;
            } catch (error) {
                console.log(error);
            }
        },
    },
});
