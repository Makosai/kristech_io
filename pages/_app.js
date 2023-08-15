import '../styles/globals.css'
import '../styles/Background.css';
import '../styles/Sections.css';

export default function App({ Component, pageProps }) {
  console.log('test2');

  return <Component {...pageProps} />
}
