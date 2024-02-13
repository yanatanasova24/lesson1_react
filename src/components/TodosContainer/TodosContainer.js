import React, {useEffect, useState} from 'react';
import {todoService} from "../../services/todoService";
import {Todos} from "./Todos";

const TodosContainer = () => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        todoService.getAll().then(({data})=>setTodos(data))
    }, []);
    return (
        <div>
            <Todos todos={todos} />
        </div>
    );
};

export {TodosContainer};