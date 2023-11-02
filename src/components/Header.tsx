import { useState } from 'react'
import { ArrowDown } from '../icons'
import logo from '../assets/logo.png'

import './css/Header.css'
interface Props {
  handle: () => void
}

export function Header({ handle }: Props) {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <>
      <header>
        <div className='logo-container'>
          <img src={logo} alt='SeeWork logo' />
        </div>

        <ul className={`actions ${showMenu ? 'show' : ''}`}>
          <li>
            <a href='#'>Empresas</a>
          </li>
          <li>
            <a href='#'>Talentos</a>
          </li>
          <li>
            <a href='#'>Blog</a>
          </li>
          <li>
            <a href='#'>Contacto</a>
          </li>
          <button className='primary' onClick={handle}>
            Registrarse
          </button>
        </ul>
        <button className='menu' onClick={() => setShowMenu(!showMenu)}>
          <ArrowDown rotate={showMenu}/>
        </button>
      </header>
    </>
  )
}
