//Aquí manejamos el SEO de la página de manera global

import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Aquí irian todas las etiquetas meta, etc... */}
          <meta charSet="utf-8"></meta>
        </Head>
        <body>
          {/* Es necesario poner el main y NextScript para que la app funcione bien */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
