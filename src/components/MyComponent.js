import React, { useState } from "react";
import AddUsersInfo from "./AddUsersInfo";
import DisplayInfo from "./DisplayInfo";

// class MyComponent extends React.Component {
//     state = {
//         listUsers: [
//             {
//                 id: Math.random().toString(36).substring(6),
//                 name: "Ngọc Hiểu",
//                 age: 20
//             },
//             {
//                 id: Math.random().toString(36).substring(6),
//                 name: "Hiểu Hoàng",
//                 age: 10
//             },
//             {
//                 id: Math.random().toString(36).substring(6),
//                 name: "Khánh Ngọc",
//                 age: 16
//             }
//         ]
//     }

//     handleAddNewUser = (userObj) => {
//         this.setState({
//             listUsers: [userObj, ...this.state.listUsers]
//         })
//     }

//     handleDeleteUser = (userId) => {
//         let listUsersClone = [...this.state.listUsers];
//         listUsersClone = listUsersClone.filter(item => item.id !== userId)
//         this.setState({
//             listUsers: listUsersClone
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <AddUsersInfo
//                     handleAddNewUser={this.handleAddNewUser}
//                     listUsers={this.state.listUsers}
//                 />
//                 <DisplayInfo
//                     listUsers={this.state.listUsers}
//                     handleDeleteUser={this.handleDeleteUser}
//                 />
//             </div>
//         );
//     }
// }

const MyComponent = () => {
    const sourceListUsers = [
        {
            id: Math.random().toString(36).substring(6),
            name: "Ngọc Hiểu",
            age: 20
        },
        {
            id: Math.random().toString(36).substring(6),
            name: "Hiểu Hoàng",
            age: 10
        },
        {
            id: Math.random().toString(36).substring(6),
            name: "Khánh Ngọc",
            age: 16
        }
    ]

    const [listUsers, setListUsers] = useState(sourceListUsers);

    const handleAddNewUser = (userObj) => {
        setListUsers([userObj, ...listUsers])
    }

    const handleDeleteUser = (userId) => {
        let listUsersClone = [...listUsers];
        listUsersClone = listUsersClone.filter(item => item.id !== userId)
        setListUsers(listUsersClone);
    }

    return (
        <div>
            <AddUsersInfo
                handleAddNewUser={handleAddNewUser}
                listUsers={listUsers}
            />
            <DisplayInfo
                listUsers={listUsers}
                handleDeleteUser={handleDeleteUser}
            />
        </div>
    );
}

export default MyComponent;