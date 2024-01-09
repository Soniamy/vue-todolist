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
});

app.mount('#app');
