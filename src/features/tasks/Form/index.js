import { useState, useRef } from 'react';
import { Wrapper, Input, Button } from "./styled";
import { useDispatch } from 'react-redux';
import { addTask } from '../tasksSlice';
import { nanoid } from '@reduxjs/toolkit';

const Form = () => {

    const inputRef = useRef(null);
    const focusInput = () => {
        inputRef.current.focus();
    };

    const [newTaskContent, setNewTaskContent] = useState("");

    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault();

        const trimmedNewTaskContent = newTaskContent.trim();

        if (trimmedNewTaskContent === "") {
            return;
        }

        dispatch(addTask({
            content: trimmedNewTaskContent,
            done: false,
            id: nanoid(),
        }));

        setNewTaskContent("");
    };

    const onChange = ({ target }) => setNewTaskContent(target.value);

    return (
        <Wrapper
            onSubmit={onFormSubmit}
        >
            <Input
                ref={inputRef}
                value={newTaskContent}
                placeholder="Co jest do zrobienia?"
                onChange={onChange}
            />
            <Button
                onClick={focusInput}
            >
                Dodaj zadanie
            </Button>
        </Wrapper>
    );
};

export default Form;