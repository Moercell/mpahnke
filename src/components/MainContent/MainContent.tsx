import React, {FC} from 'react';
import styles from './MainContent.module.scss';

interface MainContentProps {
    children: React.ReactNode;
}

const MainContent: FC<MainContentProps> = ({children}) => {
    return <div className={styles.mainContent}>{children}</div>;
};

export default MainContent;
