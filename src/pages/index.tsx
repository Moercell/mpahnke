import Head from 'next/head';
import styles from '@/styles/Home.module.scss';
import {useIntl} from 'react-intl';
import Side from '@/components/Side/Side';
import Profile from '@/components/Profile/Profile';
import MainContent from '@/components/MainContent/MainContent';
import Section from '@/components/Section/Section';
import SectionItem from '@/components/SectionItem/SectionItem';
import SideSection from '@/components/SideSection/SideSection';
import Skills from '@/components/Skills/Skills';
import Contact from '@/components/Contact/Contact';
import {useEffect, useRef, useState} from 'react';
import Project from '@/components/Project/Project';
import List from '@/components/List/List';

export default function Home() {
    const intl = useIntl();
    const containerRef = useRef<HTMLDivElement>(null);
    const sideRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const side = sideRef.current;
        const handleScroll = () => {
            if (!side) {
                return;
            }
            const scrollY = window.pageYOffset;
            const containerHeight = window.document.body.clientHeight;
            const sideHeight = side.clientHeight;
            const maxTranslateY = containerHeight - sideHeight;
            const translateY = Math.round(Math.min(maxTranslateY, scrollY / 3));

            if (window.document.body.clientWidth < 769) {
                return;
            }

            side.style.transform = `translateY(-${translateY}px)`;
        };

        if (window.document.body.clientWidth < 769) {
            return;
        }

        document.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const skills = [
        {name: 'HTML / CSS', level: 90},
        {name: 'JavaScript / TypeScript', level: 70},
        {name: 'React / Next.js', level: 65},
        {name: 'PHP', level: 50},
        {name: 'ILLUSTRATOR', level: 80},
        {name: 'PHOTOSHOP', level: 70},
        {name: 'CINEMA 4D', level: 40},
    ];
    const stringToArray = (str: string): Array<string> => str.split(',');
    const printSkills = stringToArray(intl.formatMessage({id: 'skills.print'}));

    return (
        <>
            <Head>
                <title>Marcel Pahnke</title>
                <meta
                    name="description"
                    content="Berlin based web developer and freelancer - EDUCATION / WORK EXPERIENCE / PROJECTS - 🚀"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta
                    name="keywords"
                    content="Marcel, Pahnke, Web development, web dev, web, developer, portfolio, berlin, HTML, CSS, website, Germany, Student, DAB, design, designer, CMS, JAVASCRIPT, Webseite, erstellen, Marcel Pahnke, mpahnke, marketing, SEO"
                />
                <meta name="author" content="Marcel Pahnke" />
                <link rel="apple-touch-icon" sizes="57x57" href="/fav/apple-icon-57x57.png" />
                <link rel="apple-touch-icon" sizes="60x60" href="/fav/apple-icon-60x60.png" />
                <link rel="apple-touch-icon" sizes="72x72" href="/fav/apple-icon-72x72.png" />
                <link rel="apple-touch-icon" sizes="76x76" href="/fav/apple-icon-76x76.png" />
                <link rel="apple-touch-icon" sizes="114x114" href="/fav/apple-icon-114x114.png" />
                <link rel="apple-touch-icon" sizes="120x120" href="/fav/apple-icon-120x120.png" />
                <link rel="apple-touch-icon" sizes="144x144" href="/fav/apple-icon-144x144.png" />
                <link rel="apple-touch-icon" sizes="152x152" href="/fav/apple-icon-152x152.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/fav/apple-icon-180x180.png" />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="192x192"
                    href="/fav/android-icon-192x192.png"
                />
                <link rel="icon" type="image/png" sizes="32x32" href="/fav/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="96x96" href="/fav/favicon-96x96.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/fav/favicon-16x16.png" />
                <link rel="manifest" href="/fav/manifest.json" />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta name="msapplication-TileImage" content="/fav/ms-icon-144x144.png" />
                <meta name="theme-color" content="#ffffff" />
                <meta name="robots" content="index, follow" />
            </Head>
            <main>
                <div className={styles.grid} ref={containerRef}>
                    <div
                        className={styles.sideWrapper}
                        ref={sideRef}
                        style={{transform: 'translateY(0)'}}
                    >
                        <Side>
                            <Profile
                                name={intl.formatMessage({id: 'profile.name'})}
                                job={intl.formatMessage({id: 'profile.job'})}
                                description={intl.formatMessage(
                                    {id: 'profile.description'},
                                    {br: <br />},
                                )}
                                image={'/avatar.jpg'}
                            />
                            <SideSection title={intl.formatMessage({id: 'section.skills'})}>
                                <Skills skills={skills} />
                            </SideSection>
                            <SideSection title={intl.formatMessage({id: 'section.contact'})}>
                                <Contact
                                    phone={'0176 72773821'}
                                    email={'marcel.pahnke@gmail.com'}
                                    street={'Oranienburger Str. 201'}
                                    city={'13437 Berlin'}
                                    links={[
                                        {
                                            name: 'instagram',
                                            url: 'https://www.instagram.com/moercell/',
                                            icon: '/instagram-logo.svg',
                                        },
                                        {
                                            name: 'github',
                                            url: 'https://github.com/Moercell',
                                            icon: '/github.svg',
                                        },
                                        {
                                            name: 'linkedin',
                                            url: 'https://www.linkedin.com/in/marcel-pahnke-38261810a/',
                                            icon: '/linkedin.svg',
                                        },
                                    ]}
                                />
                            </SideSection>
                        </Side>
                    </div>
                    <MainContent>
                        <Section title={intl.formatMessage({id: 'section.exp'})}>
                            <SectionItem
                                title={intl.formatMessage(
                                    {id: 'section.exp.06'},
                                    {link: <a href="https://v1b.es/">v1b.es</a>},
                                )}
                                from={'2021-01'}
                                descriptionList={intl.formatMessage({id: 'section.exp.06.desc'})}
                            />
                            <SectionItem
                                title={intl.formatMessage(
                                    {id: 'section.exp.05'},
                                    {link: <a href="http://noocoon.de/">noocoon</a>},
                                )}
                                from={'2020-04'}
                                to={'2021-04'}
                                descriptionList={intl.formatMessage({id: 'section.exp.05.desc'})}
                            />
                            <SectionItem
                                title={intl.formatMessage({id: 'section.exp.04'})}
                                from={'2015-08'}
                                descriptionList={intl.formatMessage({id: 'section.exp.04.desc'})}
                            />
                            <SectionItem
                                title={intl.formatMessage({id: 'section.exp.03'})}
                                from={'2014-08'}
                                descriptionList={intl.formatMessage({id: 'section.exp.03.desc'})}
                            />
                            <SectionItem
                                title={intl.formatMessage({id: 'section.exp.01'})}
                                from={'2013-11'}
                                to={'2014-05'}
                                descriptionList={intl.formatMessage({id: 'section.exp.01.desc'})}
                            />
                        </Section>
                        <Section title={intl.formatMessage({id: 'section.edu'})}>
                            <SectionItem
                                title={intl.formatMessage({id: 'section.edu.02'})}
                                from={'2016-08'}
                                to={'2020-06'}
                                descriptionList={intl.formatMessage({id: 'section.edu.02.desc'})}
                            />
                            <SectionItem
                                title={intl.formatMessage({id: 'section.edu.01'})}
                                from={'2012-08'}
                                to={'2015-06'}
                                descriptionList={intl.formatMessage({id: 'section.edu.01.desc'})}
                            />
                        </Section>

                        <Section
                            className="printSkills"
                            title={intl.formatMessage({id: 'section.skills'})}
                        >
                            <List items={printSkills} />
                        </Section>

                        <Section
                            title={intl.formatMessage({id: 'section.projects'})}
                            className="projects"
                        >
                            <Project
                                title="grotesk.group"
                                link="https://grotesk.group/"
                                linkLabel={intl.formatMessage({id: 'link.label'})}
                                image="/projects/grotesk.png"
                                description={intl.formatMessage(
                                    {id: 'project.grotesk.desc'},
                                    {br: <br />},
                                )}
                            />
                            <Project
                                title="AERA"
                                link="https://aera.berlin/"
                                linkLabel={intl.formatMessage({id: 'link.label'})}
                                image="/projects/aera.png"
                                description={intl.formatMessage(
                                    {id: 'project.aera.desc'},
                                    {br: <br />},
                                )}
                            />
                            <Project
                                title="Alfred Töpfer Stiftung"
                                link="https://www.toepfer-stiftung.de/"
                                linkLabel={intl.formatMessage({id: 'link.label'})}
                                image="/projects/toepfer.png"
                                description={intl.formatMessage(
                                    {id: 'project.toepfer.desc'},
                                    {br: <br />},
                                )}
                            />
                            <Project
                                title="Worled"
                                link="https://worled.space/"
                                linkLabel={intl.formatMessage({id: 'link.label'})}
                                image="/projects/worled.png"
                                description={intl.formatMessage(
                                    {id: 'project.worled.desc'},
                                    {br: <br />},
                                )}
                            />
                            <Project
                                title="OTK"
                                link="https://www.oberflaechentechnik-kempen.de/"
                                linkLabel={intl.formatMessage({id: 'link.label'})}
                                image="/projects/otk.png"
                                description={intl.formatMessage(
                                    {id: 'project.otk.desc'},
                                    {br: <br />},
                                )}
                            />
                            <Project
                                title="Steine werfen"
                                link="https://steine-werfen.vercel.app/"
                                linkLabel={intl.formatMessage({id: 'link.label'})}
                                image="/projects/steine.png"
                                description={intl.formatMessage(
                                    {id: 'project.steine.desc'},
                                    {br: <br />},
                                )}
                            />
                            <Project
                                title="Tierarztpraxis Blessing"
                                link="https://www.ta-blessing.de/"
                                linkLabel={intl.formatMessage({id: 'link.label'})}
                                image="/projects/blessing.png"
                                description={intl.formatMessage(
                                    {id: 'project.blessing.desc'},
                                    {br: <br />},
                                )}
                            />
                        </Section>
                    </MainContent>
                </div>
            </main>
        </>
    );
}
