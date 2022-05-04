import React, { Children, useState } from 'react';
import ReactDom from 'react-dom'; 
import Clock from './components/Clock';
import TodoList from './components/TodoList';


function App() {

  let [todoListArr, setTodoListArr] = useState([]);

  return (
    <div className='app'>
      <header className='app__header'>
        <div className='app__add-list' onClick={ () => {
            setTodoListArr([...todoListArr, 1]);
            console.log(todoListArr.length);
          }
        }>
          addList
        </div>
        <div className='app__chnge-theme'></div>
        <Clock className='app__clock'/>
      </header>
      
      <div className='app__content'>
        {
          todoListArr.map((elem, index) => 
              <TodoList title={`New list ${index+1}`} key={index}/>
          )          
        }
      </div>
      
    </div>
  )
}

export default App;
