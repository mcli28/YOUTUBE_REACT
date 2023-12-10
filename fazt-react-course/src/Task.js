import './task.css'
export function TaskCard({ready}) {
    //const cardStyles = {background: '#202020', color: '#fff', padding: '20px'}
    //const titleStyles = {fontWeight: "lighter"}
    return <div className='card'>
        <h1>Mi primer tarea</h1>
        <span style={ready ? {background: 'green'} : {background:'red'}}>
            {ready ? "Tarea realizada" : "Tarea pendiente"}
        </span>
    </div>
}