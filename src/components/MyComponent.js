import React from "react";
import UsersInfo from "./UsersInfo";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {
    state = {
        listUsers: [
            {
                id: 1,
                name: "Ngọc Hiểu",
                age: 20
            },
            {
                id: 2,
                name: "Hiểu Hoàng",
                age: 10
            },
            {
                id: 3,
                name: "Khánh Ngọc",
                age: 16
            }
        ]
    }

    render() {
        return (
            <div>
                <UsersInfo />
                <DisplayInfo listUsers={this.state.listUsers} />
            </div>
        );
    }
}

export default MyComponent;