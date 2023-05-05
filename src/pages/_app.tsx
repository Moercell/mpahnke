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
                return German;
            case 'en':
                return English;
            default:
                return English;
        }
    }, [shortLocale]);

    return (
        <IntlProvider locale={shortLocale} messages={messages} onError={() => null}>
            <Component {...pageProps} />
        </IntlProvider>
    );
}
