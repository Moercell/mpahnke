import React, {FC} from 'react';
import styles from './Contact.module.scss';

type link = {
    name: string;
    icon: string;
    url: string;
};

interface ContactProps {
    phone: string;
    email: string;
    links?: link[];
    street?: string;
    city?: string;
}

const Contact: FC<ContactProps> = ({phone, email, links, street, city}) => {
    return (
        <div className={styles.contact}>
            {street && city ? (
                <div className="adress">
                    <p>{street}</p>
                    <p>{city}</p>
                </div>
            ) : null}
            <a href={`tel:${phone}`}>{phone}</a>
            <br />
            <a href={`mailto:${email}`}>{email}</a>
            <div className={styles.links}>
                {links
                    ? links.map((link, index) => (
                          <div key={index} className={styles.link}>
                              <a href={link.url} target="_blank" rel="">
                                  <img src={link.icon} alt={link.name} />
                              </a>
                          </div>
                      ))
                    : null}
            </div>
        </div>
    );
};

export default Contact;
