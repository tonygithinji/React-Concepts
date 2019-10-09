import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";

const TodoList = (todos) => (
    <ul>
        {todos && todos.length ? todos.map(todo => (<Todo todo={todo} />)) : "No todos"}
    </ul>
);

const mapStateToProps = (state) => {
    console.log("state", state);
    if (state) {
        return state;
    } else {
        return {};
    }

};

export default connect(mapStateToProps)(TodoList);