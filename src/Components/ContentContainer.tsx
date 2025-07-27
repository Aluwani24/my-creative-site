import React from 'react'

//Props to make this container reusable
type myProps = {
    children: React.ReactNode,
    className?: string //? means is optional

}

export const ContentContainer: React.FC<myProps> = ({children, className}) => {
  return (
    <div className={className} style={{maxWidth: 1200, padding: 10 }}>
        {children}
    </div>
  )
}
