import Header from '../components/layout/Header';
import Head from 'next/head';
import Card from '../components/common/Card';

const Home : React.FC = () =>  {
    return (
        <>
            <Head>
                <title> HOME : MY PROJECT</title>
            </Head>

            <Header />
            <main className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-4"> Welcome to My Project</h1>
                <Card
                   title = "First Card"
                   content= "This is the content of the first Card"
                />
                <Card 
                   title = "Second Card"
                   content = "This is the content of the Second Card"
                />
            </main>
        </>
    );
};

export default Home;