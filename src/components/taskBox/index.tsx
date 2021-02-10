// Imports
// React Imports
import React from 'react';
// Component Imports
import AddTask from '../addTask';
import Footer from '../footer';
import Header from '../header';
import TasksWindow from '../tasksWindow';

// TaskBox component
const TaskBox = () => {
    return (
        <div>
            <Header varient={"elevatedTransparent"}/>
            <AddTask varient="green"/>
            <TasksWindow varient="live"/>
            <Footer aligned={"right"}/>
        </div>
    )
}

export default TaskBox; 