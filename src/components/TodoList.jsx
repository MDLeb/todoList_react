import React, {useState} from "react";
import ReactDom from 'react-dom'; 
import TodoItem from './TodoItem';
import styles from "./todo-list.css";

const TodoList = ({title}) => {
    let [todoArray, setTodoArray] = useState([]);
    let [ID, setID] = useState(1);;

    return (
        <div className="wrapper_todo-list">
            <div className="todo-list">
                <div className="todo-list__title">
                    <h2>{title}</h2>
                    <div className="todo-list__remove-btn" onClick={(event) => {
                        event.target.parentNode.parentNode.remove();//возможно надо удалять из массива в Арр
                    }}></div>
                </div>
                <div className="todo-list__add-item">
                    <input type="text"/>
                    <button onClick={(event) => {
                        let value = event.target.parentNode.querySelector('input').value;
                        if(!value) return;
                        setTodoArray([...todoArray, {
                            id: ID,
                            value: value,
                            done: false,
                            }]
                        );
                        setID(ID + 1);
                        event.target.parentNode.querySelector('input').value = null;
                    }
                }>add</button>
                </div>
                {
                    todoArray.map((todoItem) => 
                        <TodoItem item = {todoItem} key = {todoItem.id}/>
                    )
                }
                <button className="todo-list__remove-checked" onClick={(event) => {
                        event.target.parentNode.querySelectorAll('.todo-item').forEach(element => {
                            if(element.classList.contains('done')){
                                element.remove();

                                console.log(todoArray)
                            }
                        });
                    }
                }>remove checked</button>
            </div>
        </div>
    );
};

export default TodoList;