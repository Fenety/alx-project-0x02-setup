import Header from '../components/layout/Header';
import Head from 'next/head';

const About: React.FC = () => {
    return (
        <>
            <Head>
                <title>About | My Project</title>
            </Head>
            <Header />
            <main className="container mx-auto p-4">
                <h1 className="text-2xl font-bold">About Page</h1>
                <p>This is the About page of the project.</p>
            </main>
        </>
    );
};

export default About;  