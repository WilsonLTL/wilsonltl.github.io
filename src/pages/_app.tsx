// React
import { Provider } from "react-redux";
import { useStore } from '../store';
// Library
import "tailwindcss/tailwind.css";
import { ApolloProvider } from '@apollo/client'
// API
import apolloClient from "../apis/apollo"
// Compontent
import Layout from '../components/globalComponent/layout/index'

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <ApolloProvider client={apolloClient}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </ApolloProvider>
  );
}

export default MyApp;
