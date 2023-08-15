import { Html, Head, Main, NextScript } from 'next/document';
import MainContainer from '../components/main_container';

export default function Document() {
  function test() {
    console.log('test');
  }

  test();

  return (
    <Html lang="en">
      <Head />
      <body>
        <MainContainer>
          <Main />
          <NextScript />
        </MainContainer>
      </body>
    </Html>
  );
}

