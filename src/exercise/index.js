import React, { Component } from "react";
import "./styles.css";

// state data for 3 counters
const data = [
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 }
];

// Counter Component
class Counter extends Component {
    render() {
        const { value, onIncrement, onDecrement } = this.props;
        return (
            <div className="counter">
                <b>{value}</b>
                <div className="counter-controls">
                    <button className="button is-danger is-small" onClick={onDecrement.bind(this, 1)}>-</button>
                    <button className="button is-success is-small" onClick={onIncrement.bind(this, 1)}>+</button>
                </div>
            </div>
        );
    }
}

class CounterWrapper extends Component {
    constructor(props, context) {
        super(props, context);
    }

    onIncrement(value) {
        const id = this.props.id;
        data.map(d => {
            if (d.id === id) {
                d.value += value;
                return d;
            }
        });

        this.props.app.forceUpdate();
    }

    onDecrement(value) {
        const id = this.props.id;
        data.map(d => {
            if (d.id === id) {
                d.value -= value;
                if (d.value < 0) {
                    d.value = 0;
                }
                return d;
            }
        });

        this.props.app.forceUpdate();
    }

    render() {
        return (
            <div>
                {data.map(counter => (
                    <Counter
                        app={this}
                        id={counter.id}
                        key={counter.id}
                        value={counter.value}
                        onIncrement={this.onIncrement}
                        onDecrement={this.onDecrement}
                    />
                ))}
            </div>
        );
    }
}


export default CounterWrapper;