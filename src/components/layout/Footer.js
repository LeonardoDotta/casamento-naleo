import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'

import styles from './Footer.module.css'

function Footer() {
    return (
    <footer className={styles.footer}>
        <ul className={styles.social_list}>
            <li><FaFacebook /></li>
            <a href='https://www.instagram.com/leo_dotta26'
            target="_blank"
            body="hello world"
            rel="noopener noreferrer">
            <li><FaInstagram /></li>
            </a>
            <li><FaLinkedin /></li>
        </ul>
        <p className={styles.copy_right}><span>NALEO</span> &copy; 2023</p>
    </footer>
  )
}

export default Footer