import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import './styles.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Tricket</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default App;
