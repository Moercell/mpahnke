import React, {FC} from 'react';
import styles from './List.module.scss';
import cn from 'classnames';

interface ListProps {
    items: string[];
    className?: string;
}

const List: FC<ListProps> = ({items, className}) => {
    return (
        <div className={cn(styles.list, className)}>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default List;
