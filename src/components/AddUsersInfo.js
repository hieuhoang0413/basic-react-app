import React, { useState } from "react";

// class AddUsersInfo extends React.Component {
//     state = {
//         name: '',
//         age: 0
//     }

//     handleOnChangeName = (event) => {
//         this.setState({
//             name: event.target.value
//         })
//     }

//     handleOnChangeAge = (event) => {
//         this.setState({
//             age: event.target.value
//         })
//     }

//     handleOnSubmit = (event) => {
//         event.preventDefault();
//         this.props.handleAddNewUser({
//             id: Math.random().toString(36).substring(6),
//             name: this.state.name,
//             age: this.state.age
//         });
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Add users information</h1>
//                 <form onSubmit={this.handleOnSubmit}>
//                     <label>Your name: </label>
//                     <input
//                         type="text"
//                         onChange={this.handleOnChangeName}
//                     />
//                     <br />
//                     <label>Your age: </label>
//                     <input
//                         type="text"
//                         onChange={this.handleOnChangeAge}
//                     />
//                     <br />
//                     <button>Add</button>
//                 </form>
//                 <hr />
//             </div>
//         )
//     }
// }

const AddUsersInfo = (props) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);

    const handleOnChangeName = (event) => {
        setName(event.target.value);
    }

    const handleOnChangeAge = (event) => {
        setAge(event.target.value);
    }


    const handleOnSubmit = (event) => {
        event.preventDefault();
        props.handleAddNewUser({
            id: Math.random().toString(36).substring(6),
            name: name,
            age: age
        });
    }

    return (
        <div>
            <h1>Add users information</h1>
            <form onSubmit={handleOnSubmit}>
                <label>Your name: </label>
                <input
                    type="text"
                    onChange={handleOnChangeName}
                />
                <br />
                <label>Your age: </label>
                <input
                    type="text"
                    onChange={handleOnChangeAge}
                />
                <br />
                <button>Add</button>
            </form>
            <hr />
        </div>
    )
}

export default AddUsersInfo;