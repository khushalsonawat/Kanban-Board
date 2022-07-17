import React from 'react'
import Task from '../Task/Task';
import NewTask from "../NewTask/NewTask";
import './Column.css';

const Column = (props) => {
    const cards = props.tasks.map((card, index) => {
        return (
            <div key={index}>
                <Task {...card} onDragStart={props.onDragStart} />
            </div>
        )
    });

    return (
        <div className="ListCard_MainContainer">
            <h2 className={`name-header name-${props.id}`} >{props.title}</h2>
            <div className='list' onDragOver={props.onDragOver} onDrop={props.onDrop} >
                {cards}
                <div className="add-list-wrapper">
                    <NewTask columnNum={props.column} onAdd={props.onAdd} />
                </div>
            </div>
        </div >
    )
}

export default Column