import React from 'react'
import Task from '../Task/Task';
import NewTask from "../NewTask/NewTask";
import './Column.css';
import { MoreHoriz } from "@material-ui/icons";
import { Draggable, Droppable } from 'react-beautiful-dnd';

const Column = (props) => {
    const cards = props.tasks.map((card, index) => {
        return (
            <Draggable
                key={card.id}
                index={index}
                draggableId={card.id}
            >
                {
                    (provided) => {
                        return (
                            < div className="TaskCardWrapper"
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                ref={provided.innerRef}
                                key={card.id}
                            >
                                <Task {...card} />
                            </div>
                        )
                    }
                }
            </Draggable >
        )
    });

    return (
        <div className="ListCard_MainContainer">
            <div className="ListCard_TitleWrapper" >
                <h3 className="ListCard_Title">{props.title}</h3>
                <span className='More'><MoreHoriz /></span>
            </div>
            <Droppable droppableId={props.id}>
                {
                    (provided, snapshot) => {
                        return (
                            <div

                                className='list'
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                            >
                                {cards}
                                {provided.placeholder}
                            </div>
                        )
                    }
                }
            </Droppable>
            <div className="add-list-wrapper">
                <NewTask columnNum={props.column} onAdd={props.onAdd} />
            </div>
        </div >
    )
}

export default Column