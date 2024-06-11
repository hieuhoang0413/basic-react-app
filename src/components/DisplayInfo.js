import React from "react";

class DisplayInfo extends React.Component {
    state = {
        isShowListUsers: true
    }

    render = () => {
        const { listUsers } = this.props;

        const handleShowHide = () => {
            this.setState({
                isShowListUsers: !this.state.isShowListUsers
            })
        }

        return (
            <div>
                {this.state.isShowListUsers &&
                    <div>
                        {listUsers.map((user) => {
                            return (
                                <div key={user.id} className={user.age > 15 ? "green" : "red"}>
                                    <ul>
                                        <li>Name: {user.name}</li>
                                        <li>Age: {user.age}</li>
                                    </ul>
                                    <hr />
                                </div>
                            )
                        })}
                    </div>
                }
                <button onClick={handleShowHide}>
                    {this.state.isShowListUsers === true ? "Hide list users" : "Show list users"}
                </button>
            </div>
        )
    }
}

export default DisplayInfo;