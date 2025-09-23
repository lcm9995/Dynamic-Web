
import NavBar from '../components/NavBar'

const NavBarPage = () => {
    const links = [
        {text:'ButtonPage', href:'ButtonPage.js'},
        {text: 'AccordionPage', href:'AccordionPage.js'}
    ]
    return (
        <div>
            <NavBar title = "nav" links = {links}/>
        </div>
    )
}
