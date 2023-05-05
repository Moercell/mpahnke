import React, {FC} from 'react';
import styles from './Section.module.scss';
import cn from 'classnames';

interface SectionProps {
    title: string;
    children: React.ReactNode;
    className?: string;
}

const Section: FC<SectionProps> = ({title, children, className}) => {
    return (
        <div className={cn(styles.section, className)}>
            <h2>{title}</h2>
            {children}
        </div>
    );
};

export default Section;
