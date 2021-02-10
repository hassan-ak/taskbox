// Imports
// Component Imports
import TaskBox from '../components/taskBox';
// Store Imports
import { Provider } from 'react-redux';
import { store } from '../store/store';

// Stories Export
const taskBoxStories = {
    title: 'TaskBox',
    component: TaskBox,
}
export default taskBoxStories;

// Complete App
export function TaskBoxComplete(){
    return(
        <Provider store={store}>
            <TaskBox/>
        </Provider>
    )
} 