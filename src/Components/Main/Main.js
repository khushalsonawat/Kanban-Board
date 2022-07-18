import { Close, StarOutline } from '@material-ui/icons';
import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap';
import { v4 as uuid } from "uuid";
import NewColumn from '../NewColumn/NewColumn';
import Column from "../Column/Column";
import { initialData } from '../../utils';
import "./Main.css";
import { DragDropContext } from 'react-beautiful-dnd';


const Main = () => {
    let initial = { lists: [] };
    const [state, setState] = useState(initial);

    useEffect(() => {
        if (JSON.parse(localStorage.getItem('columns')) !== null) {
            setState({
                lists: JSON.parse(localStorage.getItem('columns'))
            });
            console.log(JSON.parse(localStorage.getItem('columns')) !== undefined);
        }
        else {
            setState({
                lists: initialData
            });
        }
    }, [])

    const addTask = (taskText, columnNum) => {
        const parsedCols = JSON.parse(localStorage.getItem('columns'));
        const obj = {
            taskText,
            columnNum,
            id: uuid(),
        }
        parsedCols[columnNum].tasks.push(obj);

        setState({
            lists: parsedCols,
        })
    }

    const onAddColumn = (columnName) => {
        const parsedCols = JSON.parse(localStorage.getItem('columns'));
        let obj = {
            title: columnName,
            id: uuid(),
            column: parsedCols.length,
            tasks: [],
        }
        parsedCols.push(obj);
        setState({
            lists: parsedCols,
        })
    }

    const handleDragEnd = ({ destination, source }) => {
        if (!destination) {
            return;
        }
        if (destination.index === source.index && destination.droppableId === source.droppableId) {
            return;
        }

        const initialList = state.lists;
        let draggedItem = null;
        let draggedFromListPos = -1;
        let draggedToListPos = -1;

        for (let i = 0; i < initialList.length; ++i) {
            if (initialList[i].id === source.droppableId) {
                draggedItem = initialList[i].tasks[source.index];
                draggedFromListPos = i;
            }
            if (initialList[i].id === destination.droppableId) {
                draggedToListPos = i;
            }
        }

        if (draggedFromListPos > -1 && draggedToListPos > -1) {
            initialList[draggedFromListPos].tasks.splice(source.index, 1);
            initialList[draggedToListPos].tasks.splice(destination.index, 0, draggedItem);
            setState({
                lists: initialList,
            })
        }
    }

    useEffect(() => {
        localStorage.setItem("columns", JSON.stringify(state.lists));
    }, [state])


    return (
        <main>
            <section>
                <div className="TopStrip">
                    <div>
                        <img className="EarthIcon" alt="" src="https://trello-replica.web.app/static/media/earth_green.f5dba22e.svg" />
                        <span className="Message">This board is set to public. Board admins can change its visibility setting at any time.</span>
                        <span className="KnowMore">Learn more here</span>
                    </div>
                    <span className='closeButton'><Close /> </span>
                </div>
                <div className="MainPage_MainContainer">
                    <div className="MainPage_TitleWrapper">
                        <h1 className="MainPage_Title">Kanban Board</h1>
                        <div className="MainPage_StarWrapper">
                            <span className="Star"><StarOutline fontSize='small' /></span>
                        </div>
                        <div className="MainPage_Separator"></div>
                        <Button className="PublicButton BtnSecondary">
                            <img className="Button_Icon" alt="" src="https://trello-replica.web.app/static/media/earth_white.b0d834ac.svg" />
                            <span className="Label">Public</span>
                        </Button>
                        <div className="MainPage_Separator"></div>
                        <span className="DefaultAvatar">AH</span>
                    </div>
                    <div className="MainPage_ListWrapper">
                        <DragDropContext onDragEnd={handleDragEnd}>
                            {state.lists && state.lists.map((column, index) => {
                                return (
                                    <div className="TaskCard_Container" key={index}>
                                        <Column {...column}
                                            onAdd={(tastText, columnNum) => addTask(tastText, columnNum)}
                                        />
                                    </div>
                                )
                            })
                            }
                        </DragDropContext>
                        <NewColumn onAddColumn={onAddColumn} />
                    </div>
                </div>
            </section>
        </main >
    )
}

export default Main