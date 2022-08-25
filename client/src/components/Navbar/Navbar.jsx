import React, { useEffect }  from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import search from '../../assets/search.svg'   // '../assets/search.svg'
import Avtar from '../Avtar/Avtar'   //../components/Avtar/Avtar
                   //../components/Button/Button
import './Navbar.css'
import decode from 'jwt-decode'

import logo from '../../assets/logo.png'
import { setCurrentUser } from '../../actions/currentUser'

const Navbar = () => {
  const dispatch = useDispatch();
  var user = useSelector((state) => (state.currentUserReducer))  
  const navigate = useNavigate()

  

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT'})
    navigate('/')
    dispatch(setCurrentUser(null))
  }

  // this is error i think
  useEffect(() => {
    const token = user?.token 
    if(token){
      const decodedToken = decode(token)
      if(decodedToken.exp * 1000 < new Date().getTime()){
        handleLogout()
      }
    }
    dispatch(setCurrentUser( JSON.parse(localStorage.getItem('Profile'))))
    }, [dispatch])

  return (
    <nav className='main-nav'>
      <div className='navbar'>
        <Link to='/' className='nav-item nav-logo'>
            <img src={logo} alt='logo' width={140}/>
        </Link>
        <Link to='/' className='nav-item nav-btn'>About</Link>
        <Link to='/' className='nav-item nav-btn'>Products</Link>
        <Link to='/' className='nav-item nav-btn'>For Teams</Link>
        <form>
            <input type="text" placeholder='Search...'/>
            <img src={search} alt="search" width='18' className='search-icon'/>
        </form>
         {user === null ? 
           <Link to='/Auth' className='nav-item nav-links'>Log in</Link>:
           <>
               <Avtar backgroundColor="#009dff" px="10px" py="7px" borderRadius="50%" color="white"><Link to={`/Users/${user?.result._id}`} style={{color: "white", textDecoration:"none"}}>{user.result.name.charAt(0).toUpperCase()}</Link></Avtar> 
              <button className='nav-item nav-links' onClick={handleLogout}>Log out</button>
           </>
          }
        
      </div>
    </nav>

  )
}

export default Navbar
