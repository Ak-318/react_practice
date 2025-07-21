import React, { useEffect, useState } from 'react';
import './ToDoList.css'

function ToDoList() {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    // rendering all the tasks
    useEffect(() => {
        const storedTasks = localStorage.getItem('myTasks');
        if (storedTasks) {
            setTasks(JSON.parse(storedTasks));
        }
    }, [])

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function handleAddTask() {
        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            // storing tasks in localStorage
            localStorage.setItem('myTasks', JSON.stringify([...tasks, newTask]))
            setNewTask("");
        }
    }

    function handleDeleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        localStorage.setItem('myTasks', JSON.stringify(updatedTasks))
        setTasks(updatedTasks);
    }

    function handleMoveUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function handleDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return (<div className="to-do-list">
        <h1>AK's To-Do List</h1>
        <input type="text"
            placeholder="Enter Your Task for the Day"
            value={newTask}
            onChange={handleInputChange}
            onKeyDown={e => e.key === "Enter" && handleAddTask()}
        />
        <button className="add-button" onClick={handleAddTask}>Add Task</button>
        <ol>
            {tasks.map((task, index) =>
                <li key={index}>
                    <span className="text">{task}</span>
                    <button className="delete-button" onClick={() => handleDeleteTask(index)}>Delete</button>
                    <button className="move-up-button" onClick={() => handleMoveUp(index)}>👆</button>
                    <button className="move-up-down" onClick={() => handleDown(index)}>👇</button>
                </li>)}
        </ol>
    </div>)
}

export default ToDoList;