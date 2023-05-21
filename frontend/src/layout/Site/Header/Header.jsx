import React from 'react'
import { Link } from 'react-router-dom'
import "../Header/Header.scss"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Header = () => {
  return (
<div className='navbar'>
    <div className="navbar__logo">
        <h2>Start Bootstrap</h2>
    </div>
      <ul>
        <li><Link id='link' to="/">Home</Link></li>
        <li><Link id='link' to="add">Add</Link></li>
      </ul>
      <div className="navbar__left">
 <Link id='link' to="basket"><ShoppingCartIcon/></Link> 
      </div>
      <button>Add</button>

    </div>
  )
}

export default Header
