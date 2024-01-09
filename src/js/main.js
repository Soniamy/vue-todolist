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
        addTodo() {
            if (this.newTodoText.trim() !== '') {
                this.todos.push({ text: this.newTodoText, done: false });
                this.newTodoText = '';
            }
        },
        removeTodo(index) {
            this.todos.splice(index, 1);
        },
    },
});

app.mount('#app');
