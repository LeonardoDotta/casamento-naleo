import {Link} from 'react-router-dom'
import './Header.css'

function Header() {
  return (
      <div className='div_header'>
          <div className='div_casamento'>
              CASAMENTO NALEO - 20/10/2024
          </div>
          <div className='list'>
              <li className='item'> <Link to="/">Home ❣</Link></li>
              <li className='item'> <Link to="/sobre nós">Sobre Nós ❣</Link></li>
              <li className='item'> <Link to="/testemunhas">Testemunhas ❣</Link></li>
              <li className='item'> <Link to="/local">Local ❣</Link></li>
              <li className='item'> <Link to="/presentes">Presentes ❣</Link></li>
              <li className='item'> <Link to="/recados">Recados ❣</Link></li>
          </div>
      </div>
  )
}

export default Header