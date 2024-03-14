import React from 'react';
import { useTaskStore } from '../stores/TaskStore';
const TaskList: React.FC = () => {
    const { tasks, deleteTask, toggleTask } = useTaskStore();

    return (
        <ul>
            {tasks.map((task, index) => (
                <li key={index}>
                    <input type="checkbox" checked={task.completed} onChange={() => toggleTask(index)} />
                    <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.text}</span>
                    <button onClick={() => deleteTask(index)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;
