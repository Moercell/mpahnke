import React, {FC} from 'react';
import styles from './SectionItem.module.scss';
import {useIntl} from 'react-intl';
import cn from 'classnames';

interface SectionItemProps {
    title: string | JSX.Element | (string | JSX.Element)[];
    from?: string;
    to?: string;
    description?: string;
}

const SectionItem: FC<SectionItemProps> = ({title, from, to, description}) => {
    const intl = useIntl();

    return (
        <div className={cn(styles.sectionItem, {[styles.hasDesc]: description})}>
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
            <p className="itemDescription">{description}</p>
        </div>
    );
};

export default SectionItem;
