const app = Vue.createApp({
    data() {
        return {
            todos: [
                { text: 'Fare la spesa', done: false },
                { text: 'Studiare Vue', done: true },
                { text: 'Andare in palestra', done: true },
            ],
            newTodoText: '',
        };
    },
    methods: {
        removeTodo(index) {
            this.todos.splice(index, 1);
        },
    },
});

app.mount('#app');
