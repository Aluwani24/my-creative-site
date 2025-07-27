import React from 'react'
import styles from './ContentContainer.module.css'

//Props to make this container reusable
type myProps = {
    children: React.ReactNode,
    className?: string //? means is optional

}

export const ContentContainer: React.FC<myProps> = ({children, className}) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
        {children}
    </div>
  )
}
