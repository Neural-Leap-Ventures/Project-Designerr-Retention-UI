import '../public/css/normalize.css'
import '../public/css/webflow.css'
import '../public/css/designerr-retention.webflow.css'
import '../public/css/custom-styles.css';
import Script from 'next/script';
{/*
export default function App({ Component, pageProps }) {
  return (
    <Script src="https://apis.google.com/js/platform.js" async defer />
    <Component {...pageProps} />
  )
}
*/}



function MyApp({ Component, pageProps }) {
    return (
        <>
            <Script
                src="https://apis.google.com/js/platform.js"
                async
                defer
            />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
