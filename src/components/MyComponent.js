import React from "react";

class MyComponent extends React.Component {
    state = {
        name: 'Hiểu Hoàng',
        address: 'Hanoi',
        age: 20
    }

    render() {
        return (
            <div>
                <h1>Tên của tôi là {this.state.name}</h1>
                <h1>Tôi sống tại {this.state.address}</h1>
            </div>
        );
    }
}

export default MyComponent;