import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {FiLogOut} from 'react-icons/fi'
import {AiFillHome} from 'react-icons/ai'
import {BsBriefcaseFill} from 'react-icons/bs'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <div className='nav-header'>
      <div className='nav-content'>
        <div className='nav-menu-mobile'>
          <Link to='/' className='nav-link'>
            <img
              className='mobile-website-logo'
              src='https://assets.ccbp.in/frontend/react-js/logo-img.png'
              alt='website logo'
            />
          </Link>
          <ul className='nav-bar-mobile-icons-container'>
            <li>
              <Link to='/' className='nav-link'>
                <AiFillHome className='nav-item-mobile-link' />
              </Link>
            </li>
            <li>
              <Link to='/jobs' className='nav-link'>
                <BsBriefcaseFill className='nav-item-mobile-link' />
              </Link>
            </li>
            <li>
              <button
                type='button'
                className='mobile-nav-buttons'
                label='button'
                onClick={onClickLogout}
              >
                <FiLogOut color='#f8fafc' />
              </button>
            </li>
          </ul>
        </div>
        <div className='nav-menu-desktop'>
          <Link to='/' className='nav-link'>
            <img
              className='desktop-website-logo'
              src='https://assets.ccbp.in/frontend/react-js/logo-img.png'
              alt='website logo'
            />
          </Link>
          <ul className='nav-menu'>
            <li className='nav-menu-item'>
              <Link to='/' className='nav-link'>
                Home
              </Link>
            </li>
            <li className='nav-menu-item'>
              <Link to='/jobs' className='nav-link'>
                Jobs
              </Link>
            </li>
          </ul>
          <button
            type='button'
            className='logout-desktop-btn'
            onClick={onClickLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}

export default withRouter(Header)
