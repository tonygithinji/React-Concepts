import React, { Component } from "react";

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState((state, props) => {
            return { date: new Date() }
        });
    }

    render() {
        return (
            <div>
                {this.props.render(this.state)}
            </div>
        )
    }
}

export const Timer = (props) => {
    return (
        <Clock render={(data) => (
            <h1>The time is {data.date.toLocaleTimeString()}</h1>
        )} />
    );
}

export const Dater = (props) => {
    return (
        <Clock render={(data) => (
            <h1>The date is {data.date.toLocaleDateString()}</h1>
        )} />
    );
}