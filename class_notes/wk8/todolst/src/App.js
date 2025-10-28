import {useState} from 'react';
import ToDoCreate from './comopnents/ToDoCreate'
import ToDoList from './components/ToDoList'

function App () {
  const [todos, setTodos] = useState([]);
  const createToDo = (title) => {
    console.log('Create todo: ', title)  }
  return (
    <div>
      <ToDoCreate/>
      <ToDoList/>
    </div>
  )

}
export default App;