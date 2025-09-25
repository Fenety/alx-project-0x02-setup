import Header from '@/components/layout/Header';
import Head from 'next/head';
import Button from '@/components/common/Button';

const About: React.FC = () => {
    const handleClick = () => {
        alert('Button clicked!');
    };

    return (
        <>
            <Head>
                <title>About | My Project</title>
            </Head>
            <Header />
            <main className="container mx-auto p-4">
                <h1 className="text-2xl font-bold">About Page</h1>
                <p>This is the About page of the project.</p>

                <div className="mt-4 space-x-4">
                    <Button
                        label="Small Rounded"
                        size="small"
                        shape="rounded-sm"
                        onClick={handleClick}
                    />
                    <Button
                        label="Medium Rounded"
                        size="medium"
                        shape="rounded-md"
                        onClick={handleClick}
                    />
                    <Button
                        label="Large Full Rounded"
                        size="large"
                        shape="rounded-full"
                        onClick={handleClick}
                    />
                </div>

            </main>
        </>
    );
};

export default About;  