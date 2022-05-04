import React, {useState} from "react";
import ReactDom from 'react-dom'; 
import styles from "./todo-item.css";

const TodoItem = (props) => {
    const [itemState, setItemState] = useState(props.item.done);

    //console.log('props');
    return (
        <div className="todo-item">
            <span>{props.item.id}</span>
            <p>{props.item.value}</p>
            <div className="todo-item__checbox">
                <input hidden id="item-checbox" type="checkbox" onChange={(e) => e.target.checked ? e.target.parentNode.parentNode.classList.add('done') : e.target.parentNode.parentNode.classList.remove('done')}/>
                <label htmlFor="item-checbox"></label>
            </div>
        </div>
    );
};

export default TodoItem;