import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import styles from './Menu.module.css';

export default function Menu() {

    const local = useLocation();
    
    return (
        <header>
            <nav className={styles.navegacao}>
                <Link to="/" className={styles.link}>Inicio</Link> 
                <Link to="/sobremim" className={styles.link}>Sobre mim</Link>
            </nav>
        </header>
    )
}
