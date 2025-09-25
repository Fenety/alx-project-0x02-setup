import Header from '../components/layout/Header';
import Head from 'next/head';

const Home : React.FC = () =>  {
    return (
        <>
            <Head>
                <title> HOME : MY PROJECT</title>
            </Head>

            <Header />
            <main className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-4"> Welcome to My Project</h1>
                <p className="text-lg">
                    This is the home page of my project where I try to solidify my front-end skills.
                </p>
            </main>
        </>
    );
};

export default Home;