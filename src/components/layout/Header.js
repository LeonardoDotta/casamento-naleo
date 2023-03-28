import {Link} from 'react-router-dom'

import Container from './Container'

import styles from './Header.module.css'

function Header() {
  return (
  <header styles={styles.header}>
    <h1 className={styles.h1}>CASAMENTO NALEO - 25/11/2024 </h1>
    <Container> 
      <Link to="/">
      </Link>
      <ul className={styles.list}>
        <li className={styles.item}> <Link to="/">Home ❣</Link></li>
        <li className={styles.item}> <Link to="/sobre nós">Sobre Nós ❣</Link></li>
        <li className={styles.item}> <Link to="/testemunhas">Testemunhas ❣</Link></li>
        <li className={styles.item}> <Link to="/local">Local ❣</Link></li>
        <li className={styles.item}> <Link to="/presentes">Presentes ❣</Link></li>
        <li className={styles.item}> <Link to="/recados">Recados ❣</Link></li>
      </ul>
    </Container>
  </header>
)
}

export default Header