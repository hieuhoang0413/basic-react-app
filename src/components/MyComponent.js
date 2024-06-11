import React from "react";
import UsersInfo from "./UsersInfo";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {
    render() {
        return (
            <div>
                <UsersInfo />
                <DisplayInfo name="Ngọc Hiểu" />
            </div>
        );
    }
}

export default MyComponent;