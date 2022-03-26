//Esto equivale al archivo app.js de una aplicación en React sin next.
import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';
import Script from 'next/script';

//Styles
import '../styles/global.css';

//Components
import Header from '@components/Header';

function MyApp({ Component, pageProps }) {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      {/* Google Analitics */}
      {/* Nótese Script con mayúscula por ser la etiqueta de next */}
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-6T5WBFY5YJ"></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              
              gtag('config', 'G-6T5WBFY5YJ');`}
      </Script>
      {/* Google Analitics */}
      <Header />
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
