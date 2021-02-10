// imports component
import Tasks from '../components/tasks';

// Stories export
const tasksStories = {
    title: 'Tasks',
    component: Tasks,
}
export default tasksStories;

// Default task
export function Default(){
    return(
        <Tasks contnet="Task for Testing" archieved={false} pinned={false} id={1}/>
    )
}

// pinned task
export function Pinned(){
    return(
        <Tasks contnet="Task for Testing" archieved={false} pinned={true} id={1}/>
    )
}

// Archieved Task
export function Archieved(){
    return(
        <Tasks contnet="Task for Testing" archieved={true} pinned={false} id={1}/>
    )
} 