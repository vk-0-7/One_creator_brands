import { useEffect } from 'react';
import TagManager from 'react-gtm-module';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
      TagManager.initialize({ gtmId: 'GTM-N8T8ZQV' });
  }, []);
  return <Component {...pageProps}/>
}
export default MyApp
