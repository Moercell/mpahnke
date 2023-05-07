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

    return (
        <>
            <Head>
                <title>Marcel Pahnke | Impressum</title>
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
                                name={'Marcel Pahnke'}
                                job={'WEB DEVELOPER'}
                                description={intl.formatMessage({id: 'profile.description'})}
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
                        <Section title={'Impressum'}>
                            <p>Angaben gemäß § 5 TMG</p>
                            <p>
                                Marcel Pahnke <br />
                                Oranienburger Str. 201 <br />
                                13437 Berlin <br />
                            </p>
                            <p>
                                Vertreten durch: <br />
                                Marcel Pahnke
                            </p>
                            <p>
                                Kontakt: <br />
                                Telefon: 017672773821 <br />
                                E-Mail:
                                <a href="mailto:marcel.pahnke@gmail.com">marcel.pahnke@gmail.com</a>
                            </p>
                            <p>
                                Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:
                                <br />
                                DE 000000000
                            </p>
                            <p>
                                Streitschlichtung <br />
                                Die Europäische Kommission stellt eine Plattform zur
                                Online-Streitbeilegung (OS) bereit:
                                <a href="https://ec.europa.eu/consumers/odr">
                                    https://ec.europa.eu/consumers/odr
                                </a>
                            </p>
                            <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
                            <p>
                                Wir sind nicht bereit oder verpflichtet, an
                                Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
                                teilzunehmen.
                            </p>
                            <p>Haftung für Inhalte</p>
                            <p>
                                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
                                auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
                                §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
                                verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
                                überwachen oder nach Umständen zu forschen, die auf eine
                                rechtswidrige Tätigkeit hinweisen.
                            </p>
                            <p>
                                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
                                Informationen nach den allgemeinen Gesetzen bleiben hiervon
                                unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
                                Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
                                Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
                                Inhalte umgehend entfernen.
                            </p>
                            <p>Haftung für Links</p>
                            <p>
                                Unser Angebot enthält Links zu externen Websites Dritter, auf deren
                                Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
                                fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
                                verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
                                der Seiten verantwortlich. Die verlinkten Seiten wurden zum
                                Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
                                Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
                                erkennbar.
                            </p>
                            <p>
                                Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
                                jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
                                zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
                                derartige Links umgehend entfernen.
                            </p>
                            <p>Urheberrecht</p>
                            <p>
                                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                                diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                                Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                                Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
                                schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                                Downloads und Kopien dieser Seite sind nur für den privaten, nicht
                                kommerziellen Gebrauch gestattet.
                            </p>
                            <p>
                                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
                                wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
                                werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
                                trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten
                                wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
                                Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                            </p>
                            <p>
                                Quelle:
                                <a href="https://www.e-recht24.de/impressum-generator.html">
                                    https://www.e-recht24.de/impressum-generator.html
                                </a>
                            </p>
                        </Section>
                    </MainContent>
                </div>
            </main>
        </>
    );
}
