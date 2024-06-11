import React from "react";

class UsersInfo extends React.Component {
    state = {
        name: 'Hiểu Hoàng',
        address: 'Hanoi',
        age: 20
    }

    handleClick = (event) => {
        
    }

    handleOnChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return(
            <div>
                <h1>Tên của tôi là {this.state.name}</h1>
                <h1>Tôi sống tại {this.state.address}</h1>
                <form onSubmit={this.handleOnSubmit}>
                    <input
                        value={this.state.name}
                        type="text"
                        onChange={this.handleOnChange}
                    />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default UsersInfo;