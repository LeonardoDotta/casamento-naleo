import {FaInstagram} from 'react-icons/fa'

import styles from './Footer.module.css'

function Footer() {
    return (
    <footer className={styles.footer}>
        <ul className={styles.social_list}>
            <a className={styles.social_list_instagram2} href='https://www.instagram.com/nayaramelom'
            target="_blank"
            body="hello world"
            rel="noopener noreferrer">
            <li><FaInstagram /></li>
            <p>@nayaramelom</p>
            </a>
            <a className={styles.social_list_instagram1} href='https://www.instagram.com/leo_dotta26'
            target="_blank"
            body="hello world"
            rel="noopener noreferrer">
            <li><FaInstagram /></li>
            <p>@leo_dotta26</p>
            </a>
        </ul>
        <p className={styles.copy_right}><span>NALEO</span> &copy; 2023</p>
    </footer>
  )
}

export default Footer