// Components/Section/Section.tsx
import React from 'react';
import styles from './Section.module.css';
import { ContentContainer } from '../ContentContainer';

type SectionProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  description?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
};

export const Section: React.FC<SectionProps> = ({
  id,
  title,
  subtitle,
  description,
  children,
  className
}) => {
  return (
    <section id={id} className={`${styles.section} ${className || ''}`}>
      <ContentContainer className={styles.content}>
        <div className={styles.textContainer}>
          {subtitle && <h3>{subtitle}</h3>}
          {title && <h1 dangerouslySetInnerHTML={{ __html: title }} />}
          <hr />
          {description && <div className={styles.description}>{description}</div>}
        </div>
        {children && <div className={styles.extraContent}>{children}</div>}
      </ContentContainer>
    </section>
  );
};
