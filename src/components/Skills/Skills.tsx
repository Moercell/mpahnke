import React, {FC} from 'react';
import styles from './Skills.module.scss';
import {type} from 'os';

type skill = {
    name: string;
    level: number;
};

interface SkillsProps {
    skills: skill[];
}

const Skills: FC<SkillsProps> = ({skills}) => {
    return (
        <div className={styles.skills}>
            {skills.map((skill, index) => (
                <div key={index} className={styles.skill}>
                    <p>{skill.name}</p>
                    <div className={styles.bar}>
                        <div className={styles.progress} style={{width: `${skill.level}%`}}></div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Skills;
