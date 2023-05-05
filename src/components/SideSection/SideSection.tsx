import React, {FC} from 'react';
import styles from './SideSection.module.scss';

interface SideSectionProps {
    title: string;
    children: React.ReactNode;
}

const SideSection: FC<SideSectionProps> = ({title, children}) => {
    return (
        <div className={styles.sideSection}>
            <h2>{title}</h2>
            <hr />
            {children}
        </div>
    );
};

export default SideSection;
