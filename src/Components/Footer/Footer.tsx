import React from 'react'
import styles from './Footer.module.css'
import { ContentContainer } from '../ContentContainer'

export const Footer: React.FC = () => {
    return (
        <div className={styles.footer}>
            <ContentContainer>
                <h3>Designed by: <span>ALUWANI&copy; </span></h3>
            </ContentContainer>

        </div>
    )
}
