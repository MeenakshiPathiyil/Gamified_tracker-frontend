import React, { useState } from "react";
import './todo.css';

function Todo() {
    const [Task, setTask] = useState([]);
    const [TaskName, setTaskName] = useState('');
    // const [Desc, setDesc] = useState('');
    //const [Deadline, setDeadline] = useState('');
    const [CompCount, setCompCount] = useState(0)
    
    const resetForm = () => {
        setTaskName('');
        // setDesc('');
       // setDeadline('');
    };

    const handleAddTask = (e) => {
        e.preventDefault();
        setTask([...Task, {
            id: Date.now(), 
            TaskName, 
            // Desc, 
            //Deadline, 
            isComplete: false
        }]);
        resetForm();
    }
        
    const handleToggleComplete = (id) => {
        setTask(prevTasks => {
            let updatedCount = CompCount;
            const updatedTasks = prevTasks.map(task => {
                if (task.id === id) {
                    const updatedTask = { ...task, isComplete: !task.isComplete };
                    if (updatedTask.isComplete) {
                        updatedCount += 1;
                    } else {
                        updatedCount -= 1;
                    }
                    return updatedTask;
                }
                return task;
            });
            setCompCount(updatedCount);
            return updatedTasks;
        });
    };
    
    const handleDeleteTask = (id) => {
        setTask(Task.filter(task => task.id !== id));
    };

    return (
        <div className="todo-container">
            <div className="todo-list">
                {Task.map(task => (
                    <div 
                        key={task.id} 
                        className={`todo-item ${task.isComplete ? 'completed-task' : ''}`}
                    >
                        <div className="todo-item-content">
                            <div className="checkbox-container">
                                <input
                                    type="checkbox"
                                    className="large-checkbox"
                                    checked={task.isComplete}
                                    onChange={() => handleToggleComplete(task.id)}
                                />
                            </div>
                            <div className="todo-details">
                                <h3 className={`task-name ${task.isComplete ? 'completed-task' : ''}`}>
                                    {task.TaskName}
                                </h3>
                                <p className={`task-desc ${task.isComplete ? 'completed-task' : ''}`}>
                                    {task.Desc}
                                </p>
                                <button
                                    className="delete"
                                    onClick={() => handleDeleteTask(task.id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <form className="todo-form" onSubmit={handleAddTask}>
                <input 
                    className="todo-input"
                    type="text" 
                    placeholder="Task Name" 
                    value={TaskName} 
                    onChange={(e) => setTaskName(e.target.value)}
                    required 
                />
                
                <button type="submit" className="add-task">Add Task</button>
               
            </form>
            
        </div>
    )
}

export default Todo;