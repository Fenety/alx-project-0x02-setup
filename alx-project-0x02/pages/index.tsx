import Head from 'next/head';
import Header from '../components/layout/Header';

const Page: React.FC = () => {
  return (
    <>
      <Head>
        <title> Welcome to my project</title>
      </Head>

      <Header />
      <main>
        <h1> Hello World!</h1>
        <p> This is the content of the Page where I try to solidify my front-end Skills.</p>
      </main>
    </>
  );
};

export default Page;