import { Add, Close } from '@material-ui/icons';
import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import "./NewTask.css";

const NewTask = (props) => {
  const [value, setValue] = useState('');
  const [isEdit, setIsEdit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const taskText = value;
    const columnNum = props.columnNum;
    if (taskText && props.onAdd) {
      props.onAdd(taskText, columnNum);
      setValue('');
      setIsEdit(false);
    }
  }

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  if (!isEdit) {
    return (
      <div
        className="AddMoreWrapper"
        onClick={() => setIsEdit(true)}
      >
        <Add />
        Add a card
      </div >
    )
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control className="InputBox" placeholder="Enter a title for this card" value={value} onChange={handleChange} />
      </Form.Group>
      <div className='NewTask_ButtonWrapper'>
        <Button className="Button_ButtonWrapper NewTask_Primary" type="submit">Add card</Button>
        <span className="NewTask_closeButton" onClick={() => setIsEdit(false)}><Close /></span>
      </div>
    </Form>
  )
}

export default NewTask