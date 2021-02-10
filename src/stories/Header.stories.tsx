// component Imports
import Header from '../components/header';

// Stories Export
const headerStories = {
    title: 'Header',
    component: Header,
}
export default headerStories;

// Transparent background
export function Transparent(){
    return(
        <Header varient="transparent"/>
    )
}

// Elevated Transparent background
export function ElevatedTransparent(){
    return(
        <Header varient="elevatedTransparent"/>
    )
}

// Colored background
export function Colored(){
    return(
        <Header varient="colored"/>
    )
}