// Imports
// Component Imports
import TasksWindow from '../components/tasksWindow';
// Store Imports
import { Provider } from 'react-redux';
import { store } from '../store/store';

// Stories Export
const tasksWindowStories = {
    title: 'Tasks Window',
    component: TasksWindow,
}
export default tasksWindowStories;

// No tasks to display
export function Empty(){
    return(
        <Provider store={store}>
            <TasksWindow varient="live"/>
        </Provider>
    )
}

// Tasks to display
export function WithTasks(){
    return(
        <Provider store={store}>
            <TasksWindow varient="test"/>
        </Provider>
    )
} 