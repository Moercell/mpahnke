import React, {FC} from 'react';
import styles from './SectionItem.module.scss';
import {FormattedMessage, useIntl} from 'react-intl';
import cn from 'classnames';
import MotionWrapper from '../MotionWrapper';

interface SectionItemProps {
    title: string | JSX.Element | (string | JSX.Element)[];
    from?: string;
    to?: string;
    descriptionID?: string;
    descriptionList?: string;
    editable?: boolean;
}

const SectionItem: FC<SectionItemProps> = ({
    title,
    from,
    to,
    descriptionID,
    descriptionList,
    editable,
}) => {
    const intl = useIntl();

    const [isVisible, setIsVisible] = React.useState(true);

    return (
        <MotionWrapper>
            <div
                className={cn(styles.sectionItem, {
                    [styles.hasDesc]: descriptionID || descriptionList,
                    [styles.hide]: isVisible === false,
                })}
            >
                <h3>{title}</h3>
                {from ? (
                    <p>
                        {to
                            ? `${intl.formatDate(new Date(from), {
                                  month: 'long',
                                  year: 'numeric',
                              })} - ${intl.formatDate(new Date(to), {
                                  month: 'long',
                                  year: 'numeric',
                              })}`
                            : `${intl.formatMessage({id: 'date.since'})} ${intl.formatDate(
                                  new Date(from),
                                  {
                                      month: 'long',
                                      year: 'numeric',
                                  },
                              )}`}
                    </p>
                ) : null}
                {descriptionID ? (
                    <p className="itemDescription">
                        <FormattedMessage
                            id={descriptionID}
                            values={{
                                br: <br />,
                            }}
                        />
                    </p>
                ) : null}
                {descriptionList ? (
                    <ul className="itemDescription">
                        {descriptionList.split(',').map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                ) : null}
                {editable ? (
                    <div className={styles.remove} onClick={() => setIsVisible(false)}>
                        <img src="/remove.svg" alt="remove" />
                    </div>
                ) : null}
            </div>
        </MotionWrapper>
    );
};

export default SectionItem;
