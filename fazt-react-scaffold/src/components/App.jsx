import React, {Component} from "react";
import request from "superagent";

class App extends Component{
    constructor(){
        super()
        this.state = {
            users: ''
        }
    }

    componentDidMount(){
        request
            .get('http://localhost:3000/api/users')
            .then((err, res) => {
                //console.log(res);
                //console.log(JSON.parse(res.text));
                const user = JSON.parse(res.text).users;
                this.setState({
                    users: users
                })
            })
    }
    render(){
        console.log(this.state.users)
        var users = this.state.user.map((user, i) => {
            return <li key={i}>{user.nombre}</li>
        })
        return(
            <div>
                <h1>Mi Aplicacion</h1>
                <ul>{users}</ul>
            </div>
        )
    }
}

export default App