import { useState } from "react";
import { Task } from "./Task";

function App() {
    const [todoList, setTodoList] = useState([])
    const [newTask, setNewTask] = useState("")
    const handleNewTask = (e) => {
        setNewTask({
            id: todoList.length + 1,
            taskName: e.target.value,
            isComplete: false
        })
    }
    const addTask = () => {
        setTodoList([...todoList, newTask])
    }
    const deleteTask = (id) => {
        setTodoList(todoList.filter(item => item.id !== id))
    }
    const completeTask = (id) => {
        setTodoList(todoList.map(item => {
            if (item.id === id) {
                item.isComplete = true
            }
            return item
        }))
    }
    return (
        <div className="App">
            <div className="addTask">
                <input type="text" placeholder="Enter Task" onChange={handleNewTask} />
                <button onClick={addTask}>Add Task</button>
            </div>

            <div className="list">
                <ol>
                    {todoList.map((item, index) => <Task key={index} item={item} deleteTask={deleteTask} completeTask={completeTask} />)}
                    {todoList.length === 0 && <h1>Nothing to see here</h1>}
                </ol>
            </div>
        </div>
    );
}

export default App;
