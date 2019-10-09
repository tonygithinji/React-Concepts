import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: ""
        };
    }

    handleInputChange = (e) => {
        this.setState({ todo: e.target.value });
    }

    addTodo = () => {
        this.props.addTodo(this.state.todo);
        this.setState({ todo: "" });
    }

    render() {
        return (
            <div className="add-todo">
                <input type="text" value={this.state.todo} onChange={this.handleInputChange} />
                <button onClick={this.addTodo}>Add Todo</button>
            </div>
        )
    }
}

export default connect(null, { addTodo })(AddTodo);