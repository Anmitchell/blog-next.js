// `pages/_app.js`
import '../styles/globals.scss'



// global styles are being passed to all components
// App component is the parent component to all page components
export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
  }