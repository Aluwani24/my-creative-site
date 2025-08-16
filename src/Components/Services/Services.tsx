import React from 'react'
import styles from './Services.module.css'
import { ContentContainer } from '../ContentContainer'
import { FaDesktop, FaThLarge, FaDraftingCompass, FaImage } from 'react-icons/fa'

export const Services: React.FC = () => {
    return (
        <div id="services" className={styles.Services}>
            <ContentContainer className={styles.servicesContent}>
                <div className={styles.textContainer}>
                    <h3>OUR SERVICES</h3>
                    <h1>WHAT WE <span>DO</span>?</h1>
                    <hr />
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a gallery of type and scrambled it to make a type
                        specimen book.

                    </p>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.

                    </p>
                    <button className={styles.viewbtn}>VIEW ALL</button>
                </div>

                <div className={styles.servicesGrid}>
                    <div className={styles.serviceCard}>
                        <FaDesktop className={styles.icon} />
                        <h4>Website Design</h4>
                        <p>We can design for you a website and we can upload them.</p>
                    </div>
                    <div className={styles.serviceCard}>
                        <FaThLarge className={styles.icon} />
                        <h4>Mobile & Desktop App</h4>
                        <p>We can create for you mobile and desktop app.</p>
                    </div>
                    <div className={styles.serviceCard}>
                        <FaDraftingCompass className={styles.icon} />
                        <h4>UI & UX Design</h4>
                        <p>We can create for you mobile and desktop apps.</p>
                    </div>
                    <div className={styles.serviceCard}>
                        <FaImage className={styles.icon} />
                        <h4>Editing Photo</h4>
                        <p>We can design for you a website and we can upload them.</p>
                    </div>
                </div>

            </ContentContainer>


        </div>
    )
}
