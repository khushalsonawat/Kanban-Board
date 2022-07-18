import React from 'react'
import { Button, Form } from 'react-bootstrap';
import { Add, Close } from '@material-ui/icons';
import { useState } from 'react';
import "./NewColumn.css";

const NewColumn = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const [columnName, setColumnName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onAddColumn(columnName);
        setColumnName('');
        setIsEditing(false);
    }


    const handleChange = (e) => {
        setColumnName(e.target.value);
    }

    if (!isEditing) {
        return (
            <div className='NewColumnWrapper' onClick={() => setIsEditing(!isEditing)}>
                <div className='NewColumn_AddMoreWrapper'>
                    <span><Add /></span>
                    Add another list
                </div>
            </div >
        )
    }
    return (
        <Form className='NewColumnWrapperForm' onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    placeholder="Enter list title"
                    name="NewColumn"
                    value={columnName}
                    onChange={handleChange}
                    className="NewColumn_InputBox"
                />
                <div className="NewTask_ButtonWrapper">
                    <Button className="Button_ButtonWrapper NewTask_Primary" type="submit">Add list</Button>
                    <span className="NewTask_closeButton" onClick={() => setIsEditing(false)}><Close /></span>
                </div>
            </Form.Group>
        </Form>
    )
}

export default NewColumn