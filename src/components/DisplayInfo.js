import React, { useState } from "react";
import './DisplayInfo.scss'

// class DisplayInfo extends React.Component {
//     constructor(props) {
//         console.log('abc');
//         super(props)
//         this.state = {
//             isShowListUsers: true
//         }
//     }

//     componentDidMount = () => {
//         console.log('xyz');
//     }
    
//     handleShowHide = () => {
//         this.setState({
//             isShowListUsers: !this.state.isShowListUsers
//         })
//     }

//     render = () => {
//         const { listUsers } = this.props;

//         return (
//             <div>
//                 {this.state.isShowListUsers &&
//                     <div>
//                         {listUsers.map((user) => {
//                             console.log(user);
//                             return (
//                                 <div key={user.id} className={user.age > 15 ? "green" : "red"}>
//                                         <p>Name: {user.name}</p>
//                                         <p>Age: {user.age}</p>
//                                     <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
//                                     <hr />
//                                 </div>
//                             )
//                         })}
//                     </div>
//                 }
//                 <button onClick={this.handleShowHide}>
//                     {this.state.isShowListUsers === true ? "Hide list users" : "Show list users"}
//                 </button>
//             </div>
//         )
//     }
// }

const DisplayInfo = (props) => {
    const [isShowHideListUsers, setShowHideListUsers] = useState(true);
    const { listUsers } = props;

    const handleShowHide = () => {
        setShowHideListUsers(!isShowHideListUsers);
    }

        return (
            <div>
                {isShowHideListUsers &&
                    <div>
                        {listUsers.map((user) => {
                            console.log(user);
                            return (
                                <div key={user.id} className={user.age > 15 ? "green" : "red"}>
                                        <p>Name: {user.name}</p>
                                        <p>Age: {user.age}</p>
                                    <button onClick={() => props.handleDeleteUser(user.id)}>Delete</button>
                                    <hr />
                                </div>
                            )
                        })}
                    </div>
                }
                <button onClick={handleShowHide}>
                    {isShowHideListUsers === true ? "Hide list users" : "Show list users"}
                </button>
            </div>
        )
}

export default DisplayInfo;