import React from 'react'

const Task = (props) => {
    return (
        <div className="task-card" draggable="true" id={props.id} onDragStart={props.onDragStart}>
            {props.taskText}
        </div >
    )
}

export default Task