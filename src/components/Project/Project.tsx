import React, {FC} from 'react';
import styles from './Project.module.scss';
import cn from 'classnames';
import MotionWrapper from '../MotionWrapper';

interface ProjectProps {
    className?: string;
    title?: string;
    link?: string;
    linkLabel?: string;
    image?: string;
    description?: string;
}

const Project: FC<ProjectProps> = ({className, title, link, linkLabel, image, description}) => {
    return (
        <MotionWrapper>
            <div className={cn(styles.project, className)}>
                <div className={styles.text}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <a href={link}>{linkLabel}</a> <span className="printURL"> @ {link} </span>
                </div>
                <div className={styles.image}>
                    <a href={link}>
                        <img src={image} alt={title} />
                    </a>
                </div>
            </div>
        </MotionWrapper>
    );
};

export default Project;
