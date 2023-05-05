import React, {FC} from 'react';
import styles from './Profile.module.scss';

interface ProfileProps {
    name: string;
    job: string;
    description: string;
    image: string;
}

const Profile: FC<ProfileProps> = ({name, job, description, image}) => {
    return (
        <div className={styles.profile}>
            <div className={styles.image}>
                <img src={image} alt={name} />
            </div>
            <h1>{name}</h1>
            <h3>{job}</h3>
            <p className={styles.description}>{description}</p>
        </div>
    );
};

export default Profile;
