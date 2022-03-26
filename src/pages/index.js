//Este es el Home
import ProductList from '@containers/ProductList';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>React Shop | Home</title>
      </Head>
      <ProductList />
    </>
  );
}
