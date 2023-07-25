import {FaInstagram} from 'react-icons/fa'
import './Footer.css'

function Footer() {
    return (
        <footer className='footer'>
            <ul className='social_list'>
                <a className='social_list_instagram2' href='https://www.instagram.com/nayaramelom'
                target="_blank"
                body="hello world"
                rel="noopener noreferrer">
                <li><FaInstagram /></li>
                <p>@nayaramelom</p>
                </a>
                <a className='social_list_instagram1' href='https://www.instagram.com/leo_dotta26'
                target="_blank"
                body="hello world"
                rel="noopener noreferrer">
                <li><FaInstagram /></li>
                <p>@leo_dotta26</p>
                </a>
            </ul>
            <p className='copy_right'><span>NALEO</span> &copy; 2023</p>
        </footer>
  )
}

export default Footer