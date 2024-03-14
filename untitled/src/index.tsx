import React from 'react';
import ReactDOM from 'react-dom';
import TaskList from './components/TaskList';
import TaskInput from './components/TaskInput';
import './styles/index.css';

ReactDOM.render(
    <React.StrictMode>
        <TaskInput />
        <TaskList />
    </React.StrictMode>,
    document.getElementById('root')
);
