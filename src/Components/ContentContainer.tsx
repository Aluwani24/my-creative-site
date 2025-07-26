import React from 'react'

//Props to make this container reusable
type Props = {
    children: React.ReactNode,
    className?: string //? means is optional

}

export const ContentContainer: React.FC<Props> = ({children, className}) => {
  return (
    <div className={className} style={{maxWidth: 1250, padding: 10 }}>
        {children}
    </div>
  )
}
