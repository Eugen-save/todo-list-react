import { useState } from 'react';
import {Blank, Input, Button} from "./styled";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();

        const trimmedNewTaskContent = newTaskContent.trim();

        if (trimmedNewTaskContent === "") {
            return;
        }

        addNewTask(trimmedNewTaskContent);
        setNewTaskContent("");
    };

    const onChange = ({ target }) => setNewTaskContent(target.value);

return (
    <Blank
        onSubmit={onFormSubmit}
    >
        <Input
            value={newTaskContent}
            placeholder="Co jest do zrobienia?"
            onChange={onChange}
        />
        <Button>Dodaj zadanie</Button>
    </Blank>
);
};

export default Form;