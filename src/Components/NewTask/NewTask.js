import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';

const NewTask = (props) => {
  const [value, setValue] = useState('');
  const [isEdit, setIsEdit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const taskText = value;
    const columnNum = props.columnNum;
    if (taskText && props.onAdd) {
      props.onAdd(taskText, columnNum);
    }
    setValue('');
  }

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  if (isEdit) {
    return (
      <div className="open-add-button" onClick={() => setIsEdit(true)}>
        <a href="#">Add a Task!</a>
      </div >
    )
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control placeholder="Enter a title for this card" value={value} onChange={handleChange} />
      </Form.Group>
      <Button variant="primary" type="submit">Add card</Button>
      <Button variant="primary" onClick={() => setIsEdit(false)}>Cancel</Button>
    </Form>
  )
}

export default NewTask