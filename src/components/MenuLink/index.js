import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './MenuLink.module.css';

export default function MenuLink({children, to}) {
    const local = useLocation();

    return (
        <Link 
            to={to} 
            className=
            {`
                ${styles.link} 
                ${ local.pathname === to ? styles.link__destaque: styles.link}
            `}
        >
            {children}
        </Link> 
    )
}