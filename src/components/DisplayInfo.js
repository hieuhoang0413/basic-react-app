import React from "react";

class DisplayInfo extends React.Component {
    render = () => {
        return (
            <div>
                <h2>My name is {this.props.name}</h2>
            </div>
        )
    }
}

export default DisplayInfo;