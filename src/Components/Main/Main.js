import { Close, StarOutline } from '@material-ui/icons';
import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap';
import { v4 as uuid } from "uuid";

import NewColumn from '../NewColumn/NewColumn';
import Column from "../Column/Column";
import { initialData } from '../../utils';
import "./Main.css";

const Main = (props) => {
    let initial = { lists: [] };
    if (localStorage.getItem('columns') !== undefined) {
        initial.lists = JSON.parse(localStorage.getItem('columns'));
    }
    else {
        initial.lists = initialData;
        localStorage.setItem("columns", JSON.stringify(initial.lists));
    }
    const [state, setState] = useState(initial);

    const onDragStart = (e, fromColumn) => {
        const dragInfo = {
            taskId: e.currentTarget.id,
            fromColumn: fromColumn
        }
        localStorage.setItem("dragInfo", JSON.stringify(dragInfo));
    }

    const onDragOver = (e) => {
        e.preventDefault();
    }

    const onDrop = (e, columnNum) => {
        const parsedDragInfo = JSON.parse(localStorage.getItem("dragInfo"));
        const parsedCols = JSON.parse(localStorage.getItem("columns"));
        const fromColumnTaskArray = parsedCols[parsedDragInfo.fromColumn].tasks;
        const taskCard = fromColumnTaskArray.find(task => task.id === parsedDragInfo.taskId);
        const index = fromColumnTaskArray.findIndex(task => task.id === parsedDragInfo.taskId);

        if (index < 0) {
            return;
        }
        parsedCols[parsedDragInfo.fromColumn].tasks.splice(index, 1);
        parsedCols[columnNum].tasks.push({
            ...taskCard,
            columnNumber: columnNum
        })

        setState({ lists: parsedCols });

        localStorage.setItem('columns', JSON.stringify(parsedCols));
    }

    const addTask = (taskText, columnNum) => {
        const parsedCols = JSON.parse(localStorage.getItem('columns'));
        const obj = {
            taskText,
            columnNum,
            id: uuid(),
        }
        console.log(obj);
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
                        {state.lists.map((column, index) => {
                            return (
                                <div className="TaskCard_Container" key={index}>
                                    <Column {...column}
                                        onAdd={(tastText, columnNum) => addTask(tastText, columnNum)}
                                        onDragStart={(e) => onDragStart(e, column.column)}
                                        onDragOver={(e) => onDragOver(e)}
                                        onDrop={(e, columnNum) => {
                                            onDrop(e, column.column)
                                        }}
                                    />
                                </div>
                            )
                        })
                        }
                        <NewColumn onAddColumn={onAddColumn} />
                    </div>
                </div>
            </section>
        </main >
    )
}

export default Main