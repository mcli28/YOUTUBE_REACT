import React, {Component} from "react";
import render from "react-dom"
import App from "./components/App";
/*class Prueba extends Component {
    render(){
        return(
            <h1>Hola mundo</h1>
        )
    }
}*/
import App from './components/App'

render(<App/>, document.getElementById("app"))