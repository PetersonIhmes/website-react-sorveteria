import logo from '../../assets/logo.png';
import { Link } from "react-router-dom";

import styles from './Topo.module.css';

export default function Topo() {
  return(
    <header>
      <div>
        <img src={logo} alt="logomarca"/>
        <nav>
          <Link className={styles.linktopo} to="/">Home</Link>
          <Link className={styles.linktopo} to="/sabores">Sabores</Link>
          <Link className={styles.linktopo} to="/sobre">Sobre</Link>
        </nav>
    
      </div>
    </header>
  )
}