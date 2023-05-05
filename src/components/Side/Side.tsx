import React, {FC, useEffect, useState} from 'react';
import styles from './Side.module.scss';

interface SideProps {
    children: React.ReactNode;
}

const Side: FC<SideProps> = ({children}) => {
    return (
        <div className={styles.side} id="side">
            {children}
        </div>
    );
};

export default Side;
