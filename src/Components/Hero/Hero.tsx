import React from 'react'
import styles from './Hero.module.css'
import faceImg from '/src/assets/images/Face_woman.jpg'
import { ContentContainer } from '../ContentContainer'


export const Hero: React.FC = () => {
    return (
        <div className={styles.hero}>
            <ContentContainer className={styles.heroContent}>
                <div className={styles.textContainer}>
                <h3>CREATIVE DESIGNER</h3>
                <h1>WE ARE <span>CREATIVE</span></h1>
                <h1>DESIGNERS</h1>
                <hr />
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a gallery of type and scrambled it to make a type specimen
                    book.
                </p>
            </div>

            <div className={styles.imageContainer}>
                <img src={faceImg} alt="hero-portrait" />
            </div>

            </ContentContainer>
            
        </div>

    )
}
