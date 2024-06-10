import React from "react";

class MyComponent extends React.Component {
    state = {
        name: 'Hiểu Hoàng',
        address: 'Hanoi',
        age: 20,
        number: 0
    }

    handleClick = (event) => {
        this.setState({
            number: this.state.number += 1
        })
    }

    render() {
        return (
            <div>
                <h1>Tên của tôi là {this.state.name}</h1>
                <h1>Tôi sống tại {this.state.address}</h1>
                <h1>{this.state.number}</h1>
                <button onClick={this.handleClick}>Click me!</button>
            </div>
        );
    }
}

export default MyComponent;