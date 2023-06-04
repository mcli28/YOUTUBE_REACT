const React = require('react')

class App extends React.Component {
    handleClick(){
        console.log('click');
    }
    render(){
        return (
            //React.createElement('h1', null, 'Hola mundo con react')
            <div>
                <h1>hola mundo con react</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, nostrum minima eligendi aperiam commodi, ratione doloribus laudantium error deserunt repellendus nobis ut expedita reiciendis earum dolore est repellat. Assumenda, veritatis.</p>
                <button onClick={this.handleClick}></button>
            </div>

        )
    }
}

module.exports = App