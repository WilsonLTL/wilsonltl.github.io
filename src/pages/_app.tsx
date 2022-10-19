// React
import { Provider } from "react-redux"; 
import { useStore } from '../store';
import { useEffect } from "react";
import AOS from "aos";

// Library
import "tailwindcss/tailwind.css";
// CSS
import "../styles/globals.css"
import "aos/dist/aos.css";
// Compontent
import Layout from '../components/globalComponent/layout/index'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import type { AppProps } from 'next/app'

config.autoAddCss = false

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init();
  }, []);

  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
      <script src="//embed.typeform.com/next/embed.js"></script>
    </Provider>
  )
}

export default MyApp
