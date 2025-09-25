import Header from '@/components/layout/Header';
import React from 'react';
import Head from 'next/head';

const Posts: React.FC = () => {
    return (
        <>
            
        <Head>
            <title>
                 POSTS: My PROJECTS
            </title>

        <Header />

        </Head>
        <main>
            <h1>My Projects</h1>
            <p>Welcome to the posts page!</p>
        </main>
        </>
    );
};

export default Posts;