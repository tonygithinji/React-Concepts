import React, { Component } from "react";

class Username extends React.Component {
    state = { value: "" };

    changeValue(value) {
        this.setState({ value });
    }

    render() {
        const { value } = this.state;
        return <h1>{value}</h1>;
    }
}

function RefAppAlt() {
    const inputRef = React.useRef(null);
    const usernameRef = React.useRef(null);
    function clickHandler() {
        usernameRef.current.changeValue(inputRef.current.value);
    }

    return (
        <div>
            <button onClick={clickHandler}>Change Username</button>
            <input type="text" ref={inputRef} />
            <Username ref={usernameRef} />
        </div>
    );
}

export default RefAppAlt;