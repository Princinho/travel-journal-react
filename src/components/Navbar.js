import logo from '../img/world-icon.svg'
export default function Navbar(){
    return(
        <nav className='main-nav'>
            <img className='logo' src={logo}/><span>my travel journal </span>
        </nav>
    )
}