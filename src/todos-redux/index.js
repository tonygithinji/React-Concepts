import React from "react";
import { Provider } from "react-redux";

import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import store from "./store";

class TodoApp extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div className="todo-app">
                    <h1>Todo App</h1>
                    <AddTodo />
                    <TodoList />
                </div>
            </Provider>

        );
    }
}

export default TodoApp;