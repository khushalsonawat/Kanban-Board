import React from 'react'
import "./Task.css";

const Task = (props) => {
    return (
        <div className="TaskCardMainContainer" draggable id={props.id} onDragStart={props.onDragStart}>
            <h3 className="TaskCard_Message">{props.taskText}</h3>
        </div>
    )
}

export default Task