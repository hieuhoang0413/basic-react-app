import React from "react";

class UsersInfo extends React.Component {
    state = {
        name: 'Hiểu Hoàng',
        tempName: 'Hiểu Hoàng',
        address: 'Hanoi',
        age: 20
    }

    handleClick = (event) => {
        
    }

    handleOnChange = (event) => {
        this.setState({
            tempName: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        this.setState({
            name: this.state.tempName
        })
    }

    render() {
        return(
            <div>
                <h1>Tên của tôi là {this.state.name}</h1>
                <h1>Tôi sống tại {this.state.address}</h1>
                <form onSubmit={this.handleOnSubmit}>
                    <input
                        value={this.state.tempName}
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