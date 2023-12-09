import { useState } from 'react';
import '../css/Header.css'
import { Link } from 'react-router-dom';


function Header() {
  const [menuClass, setMenuClass] = useState("menuHidden")
  const [isToggled, setToggled] = useState(false);

  const toggleMenu = (event) => {
    event.preventDefault()
    setToggled(!isToggled)
    if(!isToggled){
      setMenuClass("menuVisible")
    }
    else{
      setMenuClass("menuHidden")
    }
  }
      
    return (
      <>
      <header className='header'>
        <nav >
          <div className='twoButtonFormat'>
            <img onClick={toggleMenu} id='menuButton' src="src/assets/menuHide.png" alt="Menu Button Image. Click to view menu." />

          <Link to="/">
            <img id="homeButton" src="src/assets/Home Button.png" alt="Home Button Image. Click to got to home page." />
          </Link>
        </div>

        <div className='twoButtonFormat'>
          <Link to="/my-profile">
            <img  id='profileButton' src="src/assets/Profile Button.png" alt="Profile Button Image. Click to view your profile." />
          </Link>
          <Link to="/my-cart">
            <img id='cartButton' src="src/assets/Cart Button.png" alt="Cart Button Image. Click view your cart." />
          </Link>
        </div> 
      </nav>
      
      <div id='title'>
        <img id='logo' src="src/assets/NC Marketplace Logo.png" alt="NC Marketplace logo. A red shopping basket with the NC logo as the handle." />
        <h1 id='headerTitle'>NC Marketplace</h1>
      </div>
    </header>

      <div className={menuClass}>
          <div id='menu' onClick={toggleMenu}>
            <div className='menuItem'>
              <h3 id='menuH3'>My Profile</h3>
              <Link to='/my-profile'>Profile</Link>
              <Link to='/my-cart'>Cart</Link>
              <Link to='/order-history'>My Orders</Link>
            </div>
          <div className='menuItem'>
            <h4>Buy</h4>
              <Link to='/all-listings'>All Listings</Link>
              <Link to='/categories'>Categories</Link>
          </div>
          <div className='menuItem'>
              <h5>Sell</h5>
              <Link to='/post-ad'>Post An Ad</Link>
          </div>
        </div>
      </div>
      </>
    )
};

export default Header