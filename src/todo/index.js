import React, { Component } from "react";

const TodoItem = (props) => <li onClick={props.onClick}>{props.item.text}</li>

class TodoList extends React.Component {
    render() {
        const { items, onClick } = this.props;
        return (
            <ul onClick={onClick}>
                {items.map((item, index) =>
                    <TodoItem item={item} key={index} onClick={this.handleItemClick.bind(this, item)} />)}
            </ul>
        );
    }

    handleItemClick(item, event) {
        if (!item.done) {
            this.props.onItemClick(item, event);
        } else {
            event.stopPropagation();
        }
    }
}


const items = [
    { text: 'Buy grocery', done: true },
    { text: 'Play guitar', done: false },
    { text: 'Romantic dinner', done: false }
];

const Appp = () => <TodoList items={items} onItemClick={(item, event) => { console.log(item, event) }}
/>;

export default Appp;

// document.body.innerHTML = "<div id='root'></div>";
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App items={items} />, rootElement);