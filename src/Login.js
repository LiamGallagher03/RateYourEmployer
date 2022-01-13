//import { set } from 'express/lib/application'; WHY IS THIS EVEN HERE??? DID I IMPORT IT???
import React/*, {useState}*/ from 'react';

export default class Login extends React.Component {
    constructor(){
        super();
        this.state = {
            username:'',
            password:'',
        };
    }
    updateInfo = (event) =>{
            let fieldName = event.target.name;
            let fieldValue = event.target.value;
            if(fieldName === 'username') {
                this.setState({username:fieldValue});
            }
            else if(fieldName === 'password'){
                this.setState({password:fieldValue});
            }
    };
    login=(e)=>{
        let {username,password}=this.state;
        fetch('/login', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username:username,
                password:password,
            })
        })
        .then(response=>response.json())
        .then(data=>{
            if(data) {
                window.alert("you have successfully logged in")
                //setLoggedIn(true)
            }
            //Do anything else like Toast etc.
        })
    }
    render(){
        return(
            <div className="register">
                <label for="username">Username:</label>
                <input onChange={this.updateInfo} type="text" name="username" value={this.state.username} required/><br /><br />
                <label for="password">Password:</label>
                <input onChange={this.updateInfo} type="password" name="password" value={this.state.password} required/><br /><br />
                <button onClick={this.login}>Login</button>
            </div>
        )
    }
}
