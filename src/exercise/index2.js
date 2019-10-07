import React, { Component } from "react";
import "./styles.css";

// state data for 3 counters
// const data = [
//     { id: 1, value: 0 },
//     { id: 2, value: 0 },
//     { id: 3, value: 0 }
// ];

// Counter Component
class CounterOriginal extends Component {
    render() {
        const { value, id, onIncrement, onDecrement } = this.props;
        return (
            <div className="counter">
                <b>{value}</b>
                <div className="counter-controls">
                    <button className="button is-danger is-small" data-id={id} onClick={onDecrement.bind(null, 1)}>-</button>
                    <button className="button is-success is-small" data-id={id} onClick={onIncrement.bind(null, 1)}>+</button>
                </div>
            </div>
        );
    }
}

class Counter extends Component {
    onChange(action, event) {
        const { value, onChange } = this.props;
        let newValue;

        if (action === "increment") {
            newValue = value + 1;
        } else {
            newValue = value - 1;
            if (newValue < 0) {
                newValue = 0;
            }
        }

        onChange(newValue, event);
    }

    render() {
        const { value, id } = this.props;

        return (
            <div className="counter">
                <b>{value}</b>
                <div className="counter-controls">
                    <button className="button is-danger is-small" data-id={id} onClick={this.onChange.bind(this, "decrement")}>-</button>
                    <button className="button is-success is-small" data-id={id} onClick={this.onChange.bind(this, "increment")}>+</button>
                </div>
            </div>
        );
    }
}

class CounterTotal extends Component {
    render() {
        const { data } = this.props;
        let total = 0;
        data.forEach((item) => {
            total += item.value;
        });

        return (
            <div><b>Total: {total}</b></div>
        );
    }
}

class CounterWrapper extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            data: [
                { id: 1, value: 0 },
                { id: 2, value: 0 },
                { id: 3, value: 0 },
                { id: 4, value: 0 }
            ]
        };

        this.onIncrement = this.onIncrement.bind(this);
        this.onDecrement = this.onDecrement.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(value, event) {
        const id = parseInt(event.target.dataset.id);
        this.setState((state, props) => {
            const newData = state.data.map(d => {
                if (d.id === id) {
                    d.value = value;
                    return d;
                } else {
                    return d;
                }
            });

            return { data: newData }
        });
    }

    onIncrement(value, event) {
        const id = parseInt(event.target.dataset.id);
        this.setState((state, props) => {
            const newData = state.data.map(d => {
                if (d.id === id) {
                    d.value += value;
                    return d;
                } else {
                    return d;
                }
            });

            return { data: newData }
        });
    }

    onDecrement(value, event) {
        const id = parseInt(event.target.dataset.id);
        this.setState((state, props) => {
            const newData = state.data.map(d => {
                if (d.id === id) {
                    d.value -= value;
                    if (d.value < 0) {
                        d.value = 0;
                    }
                    return d;
                } else {
                    return d;
                }
            });

            return { data: newData }
        });
    }

    render() {
        return (
            <div>
                {this.state.data.map(counter => (
                    <Counter
                        id={counter.id}
                        key={counter.id}
                        value={counter.value}
                        onChange={this.onChange}
                    />
                ))}
                <CounterTotal data={this.state.data} />
            </div>
        );
    }
}


export default CounterWrapper;