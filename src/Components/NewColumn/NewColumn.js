import React from 'react'
import { Form } from 'react-bootstrap';
import { AddIcon } from '@material-ui/icons';

const NewColumn = () => {
    return (
        <Form>
            <Form.Group>
                <Form.Control
                    placeholder={`${AddIcon} Add another list`}
                />
            </Form.Group>
        </Form>
    )
}

export default NewColumn