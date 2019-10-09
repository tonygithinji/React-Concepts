import React from "react";
import ReactDOM from "react-dom";
import { combineReducers, createStore } from "redux";

// todo reducer
const todo = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {
                id: action.id,
                text: action.text,
                completed: false
            };
        case "TOGGLE_TODO":
            if (state.id === action.id) {
                return Object.assign({}, state, {
                    completed: !state.completed
                });
            }

            return state;
        default:
            return state;
    }
};

// todos reducer
const todos = (state = [], action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [...state, todo(undefined, action)];
        case "TOGGLE_TODO":
            return state.map(t => todo(t, action));
        case "UP_TODO": {
            const newState = [...state];
            let todoToMove = {};
            let todoToMoveIndex = 0;
            let temp = {};
            newState.forEach((todo, index) => {
                if (todo.id === action.id) {
                    todoToMove = todo;
                    todoToMoveIndex = index;
                }
            });
            if (todoToMoveIndex === 0) {
                return state;
            } else {
                // temp = newState[todoToMoveIndex - 1];
                // newState[todoToMoveIndex - 1] = todoToMove;
                // newState[todoToMoveIndex] = temp;
                newState[todoToMoveIndex - 1] = newState.splice(
                    todoToMoveIndex,
                    1,
                    newState[todoToMoveIndex - 1]
                )[0];
                return newState;
            }
        }
        case "DOWN_TODO": {
            const newState = [...state];
            let todoToMove = {};
            let todoToMoveIndex = 0;
            let temp = {};
            newState.forEach((todo, index) => {
                if (todo.id === action.id) {
                    todoToMove = todo;
                    todoToMoveIndex = index;
                }
            });
            if (todoToMoveIndex === state.length - 1) {
                return state;
            } else {
                temp = newState[todoToMoveIndex + 1];
                newState[todoToMoveIndex + 1] = todoToMove;
                newState[todoToMoveIndex] = temp;
                return newState;
            }
        }
        default:
            return state;
    }
};

// visibilityFilter reducer
const visibilityFilter = (state = "SHOW_ALL", action) => {
    switch (action.type) {
        case "SET_VISIBILITY_FILTER":
            return action.filter;
        default:
            return state;
    }
};

// const { combineReducers } = Redux;

// todoApp reducer
const todoApp = combineReducers({
    todos,
    visibilityFilter
});

// const { createStore } = Redux;
const store = createStore(todoApp);

const { Component } = React;

const FilterButton = ({ filter, currentFilter, children }) => {
    if (filter === currentFilter) {
        return React.createElement("span", {}, children);
    }

    return React.createElement(
        "button",
        {
            type: "button",
            onClick: e => {
                store.dispatch({
                    type: "SET_VISIBILITY_FILTER",
                    filter
                });
            }
        },
        children
    );
};

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case "SHOW_ALL":
            return todos;
        case "SHOW_ACTIVE":
            return todos.filter(t => !t.completed);
        case "SHOW_COMPLETED":
            return todos.filter(t => t.completed);
        default:
            return todos;
    }
};

// TodoApp component
let nextTodoId = 0;

function addTodo(text) {
    store.dispatch({
        type: "ADD_TODO",
        id: nextTodoId++,
        text: text
    });
}

addTodo("Solve Interview Question");
addTodo("?????");
addTodo("Profit");

class TodoApp extends Component {
    componentDidMount() {
        this.input = document.getElementById("input");
    }
    render() {
        const { todos, visibilityFilter } = this.props;
        const visibleTodos = getVisibleTodos(todos, visibilityFilter);
        const todoElements = visibleTodos.map(todo => {
            const toggle = () => {
                store.dispatch({
                    type: "TOGGLE_TODO",
                    id: todo.id
                });
            };

            const up = () => {
                store.dispatch({
                    type: "UP_TODO",
                    id: todo.id
                });
            };

            const down = () => {
                store.dispatch({
                    type: "DOWN_TODO",
                    id: todo.id
                });
            };

            return (
                <li
                    id={todo.id}
                    style={{ textDecoration: todo.completed ? "line-through" : "none" }}
                >
                    {todo.id}: {todo.text}
                    <button onClick={toggle}>Toggle</button>
                    <button onClick={up}>▲</button>
                    <button onClick={down}>▼</button>
                </li>
            );
        });

        return React.createElement("div", {}, [
            React.createElement("h1", {}, "Todos"),
            React.createElement(
                "form",
                {
                    onSubmit: e => {
                        e.preventDefault();
                        addTodo(this.input.value);
                        this.input.value = "";
                    }
                },
                [
                    React.createElement("input", { id: "input" }),
                    React.createElement("button", { type: "submit" }, "Add Todo")
                ]
            ),
            React.createElement("ul", {}, todoElements),
            React.createElement("p", {}, [
                "Show: ",
                React.createElement(
                    FilterButton,
                    { filter: "SHOW_ALL", currentFilter: visibilityFilter },
                    "All"
                ),
                " ",
                React.createElement(
                    FilterButton,
                    { filter: "SHOW_ACTIVE", currentFilter: visibilityFilter },
                    "Active"
                ),
                " ",
                React.createElement(
                    FilterButton,
                    { filter: "SHOW_COMPLETED", currentFilter: visibilityFilter },
                    "Completed"
                )
            ])
        ]);
    }
}

const render = () => {
    const TodoAppElement = React.createElement(TodoApp, store.getState());
    ReactDOM.render(TodoAppElement, document.getElementById("root"));
};
render();

store.subscribe(render);
