import React, { useState } from 'react';
import { useTaskStore } from '../stores/TaskStore';

const TaskInput: React.FC = () => {
    const [taskText, setTaskText] = useState<string>('');
    const { addTask } = useTaskStore();

    const handleEnterTask = () => {
        if (taskText.trim() !== '') {
            addTask(taskText);
            setTaskText('');
        } else {
            alert('Add your task, please');
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTaskText(event.target.value);
    };

    return (
        <div >
            <input type="text" value={taskText} onChange={handleInputChange} placeholder="Enter the task" />
            <button onClick={handleEnterTask} className="submit">Enter</button>
        </div>
    );
};

export default TaskInput;
