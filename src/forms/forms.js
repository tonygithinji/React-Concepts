import React, { Component } from "react";
import "./forms.css";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            isValid: true,
            isLoggedIn: false
        };

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    // YOU CAN ALSO DO THIS
    // handleSubmit = () => { }
    handleFormSubmit(event) {
        event.preventDefault();
        this.setState({ isValid: true });
        if (this.state.username !== "" && this.state.password !== "") {
            this.setState({ isValid: true, isLoggedIn: true });
        } else {
            this.setState({ isValid: false, isLoggedIn: false });
        }
    }

    handleInputChange(event) {
        const name = event.target.name;
        // YOU CAN ALSO DO THIS
        // const partialState = {};
        // partialState[name] = event.target.value;
        // this.setState(partialState);
        this.setState({
            [name]: event.target.value
        });
    }

    render() {
        return (
            <React.Fragment>
                {this.state.isLoggedIn ? (
                    <div>
                        <h1>Welcome {this.state.username}</h1>
                    </div>
                ) : (
                        <div>
                            <h1>Login</h1>
                            {this.state.isValid ? "" : <div className="error">Invalid username/password</div>}
                            <form onSubmit={this.handleFormSubmit}>
                                <input type="text" value={this.state.username} onChange={this.handleInputChange} name="username" />
                                <input type="password" value={this.state.password} onChange={this.handleInputChange} name="password" />
                                <button>Login</button>
                            </form>
                        </div>
                    )}
            </React.Fragment>
        );
    }
}

export default Form;