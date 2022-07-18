import React from 'react'
import Task from '../Task/Task';
import NewTask from "../NewTask/NewTask";
import './Column.css';
import { MoreHoriz } from "@material-ui/icons";

const Column = (props) => {
    const cards = props.tasks.map((card, index) => {
        return (
            <div className="TaskCardWrapper" key={index}>
                <Task {...card} onDragStart={props.onDragStart} />
            </div>
        )
    });

    return (
        <div className="ListCard_MainContainer">
            <div className="ListCard_TitleWrapper" >
                <h3 className="ListCard_Title">{props.title}</h3>
                <span className='More'><MoreHoriz /></span>
            </div>
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