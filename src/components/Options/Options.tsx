import React, {FC} from 'react';
import styles from './Options.module.scss';

interface OptionsProps {}

const Options: FC<OptionsProps> = () => {
    return (
        <div className={styles.options}>
            <ul>
                <li>
                    <img src="/showall.svg" alt="show all" />
                </li>
            </ul>
        </div>
    );
};

export default Options;
