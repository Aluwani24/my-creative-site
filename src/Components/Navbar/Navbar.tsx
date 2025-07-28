import React from 'react'
import styles from './Navbar.module.css'
import { FaSearch } from 'react-icons/fa'
import { ContentContainer } from '../ContentContainer'

export const Navbar: React.FC = () => {
    return (
        <nav className={styles.nav}>
            <ContentContainer className={styles.content}>
                <div className={styles.logo}>HYKROX</div>
                <div className={styles.links}>
                    <a href="#" className={styles.link}>HOME</a>
                    <a href="#designs" className={styles.link}>DESIGNS</a>
                    <a href="#services" className={styles.link}>SERVICES</a>
                    <a href="#about" className={styles.link}>ABOUT US</a>
                    <a href="#" className={styles.link}>CONTACT US</a>
                    <div className={styles.search}><FaSearch />
                    </div>
                </div>
            </ContentContainer>
        </nav>
    )
}
