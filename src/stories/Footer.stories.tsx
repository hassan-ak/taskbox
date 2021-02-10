// Component Imports
import Footer from '../components/footer';

// Stories Export
const footerStories = {
    title: 'Footer',
    component: Footer,
}
export default footerStories;

// Left alligned
export function Left(){
    return(
        <Footer aligned="left"/>
    )
}

// centre Aligned
export function Center(){
    return(
        <Footer aligned="center"/>
    )
}

// Right Aligned
export function Right(){
    return(
        <Footer aligned="right"/>
    )
} 