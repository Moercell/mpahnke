import '@/styles/globals.scss';
import type {AppProps} from 'next/app';
import English from '../../content/locales/en.json';
import German from '../../content/locales/de.json';
import {useRouter} from 'next/router';
import {useMemo} from 'react';
import {IntlProvider} from 'react-intl';

export default function App({Component, pageProps}: AppProps) {
    const {locale} = useRouter();
    const [shortLocale] = locale ? locale.split('-') : ['de'];

    const messages = useMemo(() => {
        switch (shortLocale) {
            case 'de':
                return pageProps.dataDE || German;
            case 'en':
                return pageProps.dataEN || English;
            default:
                return German;
        }
    }, [shortLocale]);

    return (
        <IntlProvider locale={shortLocale} messages={messages} onError={() => null}>
            <Component {...pageProps} />
        </IntlProvider>
    );
}

App.getInitialProps = async () => {
    const formatArrayToObject = (arr: Array<Array<string>>): {[key: string]: string} =>
        arr.reduce((acc, [key, value]) => ({...acc, [key]: value}), {});

    const GOOGLE_SHEETS_URL = 'https://sheets.googleapis.com/v4/spreadsheets/';

    const resDE = await fetch(
        `${GOOGLE_SHEETS_URL}${process.env.GOOGLE_SHEET_ID}/values/de!A:B?key=${process.env.GOOGLE_API_KEY}`,
    );
    const dataDE = await resDE.json();

    const resEN = await fetch(
        `${GOOGLE_SHEETS_URL}${process.env.GOOGLE_SHEET_ID}/values/en!A:B?key=${process.env.GOOGLE_API_KEY}`,
    );
    const dataEN = await resEN.json();

    return {
        pageProps: {
            dataDE: formatArrayToObject(dataDE.values),
            dataEN: formatArrayToObject(dataEN.values),
        },
    };
};
