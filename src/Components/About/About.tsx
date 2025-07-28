import React from 'react'
import { ContentContainer } from '../ContentContainer'
import styles from './About.module.css'
import { FaEye, FaRegFileAlt } from 'react-icons/fa'

export const About: React.FC = () => {
    return (
        <div id="about" className={styles.about}>
            <ContentContainer className={styles.aboutContent}>
                <div className={styles.imageContainer}>
                    <img src="/src/assets/images/Headphone.jpg" alt="headphones" />
                </div>
                <div className={styles.textBlock}>
                    <h3>ABOUT US</h3>
                    <h1>WHO ARE <span>WE</span>?</h1>
                    <hr />
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                        Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                        unknown printer took a gallery of type and scrambled it to make a type.
                    </p>
                    <div className={styles.features}>
                        <div className={styles.featureItem}>
                            <FaEye className={styles.icon} />
                            <h4>Clean Code</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing.</p>
                        </div>
                        <div className={styles.featureItem}>
                            <FaRegFileAlt className={styles.icon} />
                            <h4>Modern Design</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing.</p>
                        </div>
                    </div>
                </div>
            </ContentContainer>
        </div>
    )
}
