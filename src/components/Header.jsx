import logo from './../assets/4.png'
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <div className='container container__header'>
                <div className='brand__header'>
                    <img src={logo} alt="logo" className='logo__header'/>
                    <h1 className='name__header'>Social Network</h1>
                </div>
                <nav className='nav'>
                    <ul className='nav_list__header'>
                        <li><a href="#" className='item'>Profile</a></li>
                        <li><a href="#" className='item'>Videos</a></li>
                        <li><a href="#" className='item'>Music</a></li>
                        <li><a href="#" className='item'>Messages</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header