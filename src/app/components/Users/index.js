import React, { Component } from "react";
import UsersService from "services/users";
import './style.css';

class Users extends Component {
    constructor(props){
        super(props);

        this.state = {
            users: [],
            paginator: []
        }

        this.users = [];
        this.filterList = this.filterList.bind(this);
    }

    componentWillMount(){
        UsersService.getUsers().then(users => {
            users.map(user => {
                user.phone = user.phone.split('x')[0];
            })

            this.users = users;

            this.setState({
                users
            })
        });
    }

    filterList(event){
        let filteredUsers = this.users;

        filteredUsers = filteredUsers.filter((user) => {
            return user.email.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
        });

        this.setState({
            users: filteredUsers
        });
    }

    render(){
        if(!this.state.users) return '';
        
        return(
            <div className="user-wrapper">
                <h1>Todos los Usuarios</h1>
                <input type="text" placeholder="Filtar por email" onChange={this.filterList}/>
                {(this.state.users.length === 0) && <div className="empty-users">No hay usuarios</div>}
                {this.state.users.map(user =>
                    <div className="user-item" key={user.id}>
                        <div className="user-email">{user.email}</div>
                        <div className="user-name">{user.name}</div>
                        <div className="user-username">{user.username}</div>
                        <div className="user-phone">{user.phone}</div>
                    </div>
                )}                
            </div>
        )
    }
}

export default Users;
