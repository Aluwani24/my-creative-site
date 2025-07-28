import React from 'react'
import styles from './Stats.module.css'
import { FaRegWindowRestore, FaChartLine, FaUser, FaUsers } from 'react-icons/fa'
import { ContentContainer } from '../ContentContainer'

export const Stats: React.FC = () => {
    return (
        <div className={styles.statsContainer}>
            <ContentContainer className={styles.statsContent}>
                <div className={styles.statsItem}>
                    <FaRegWindowRestore className={styles.icon} />
                    <h3>Project</h3>
                    <h1>300+</h1>
                </div>
                <div className={styles.statsItem}>
                    < FaChartLine className={styles.icon} />
                    <h3>Pleasure</h3>
                    <h1>8,9</h1>
                </div>
                <div className={styles.statsItem}>
                    <FaUser className={styles.icon} />
                    <h3>Customers</h3>
                    <h1>3000+</h1>
                </div>
                <div className={styles.statsItem}>
                    < FaUsers className={styles.icon} />
                    <h3>Team Members</h3>
                    <h1>23</h1>
                </div>

            </ContentContainer>

        </div>
    )
}
