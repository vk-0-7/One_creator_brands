
import {Provider} from 'react-redux'
import store from './redux/store'

import React, { useEffect ,useState} from 'react';
import '../styles/globals.css'




function App({ Component, pageProps }) {

  

  
  return(<>
   <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    </>
    )
}
export default App