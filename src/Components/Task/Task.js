import React from 'react'
import "./Task.css";

const Task = (props) => {
    return (
        <div className="TaskCardMainContainer" id={props.id}>
            {
                props.label && props.label ?
                    < div className="TaskLabelWrapper" style={{ backgroundColor: `${props.label.color}` }} title={props.label.title}></div>
                    : null
            }
            <h3 className="TaskCard_Message">{props.taskText}</h3>
        </div >
    )
}

export default Task