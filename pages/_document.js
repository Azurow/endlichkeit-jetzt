import React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'
import Favicon from '../components/Favicon';

export default function Document(props) {
  return (
    <Html lang="de">
      <Head>
        <meta charSet="utf-8" />
        <Favicon />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
