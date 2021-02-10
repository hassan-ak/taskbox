// Imports
// Component Imports
import AddTask from '../components/addTask';
// Store Imports
import { Provider } from 'react-redux';
import { store } from '../store/store';

// Stories Export
const addTaskStories = {
    title: 'AddTask',
    component: AddTask,
}
export default addTaskStories;

// with yellow button
export function Yellow(){
    return(
        <Provider store={store}>
            <AddTask varient="yellow"/>
        </Provider>
    )
}

// with green button
export function Green(){
    return(
        <Provider store={store}>
            <AddTask varient="green"/>
        </Provider>
    )
} 