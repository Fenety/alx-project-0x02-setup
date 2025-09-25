import Header from '@/components/layout/Header';
import Head from 'next/head';
import Card from '@/components/common/Card';
import React, { useState } from 'react';
import { PostModalProps } from '@/interfaces';
import PostModal from '@/components/common/PostModal';
import { CardProps } from '@/interfaces';

const Home : React.FC = () =>  {
    const [Cards, setCards] = useState<CardProps[]>([
        { title: 'First Card', content: 'This is the content of the first Card' },
        { title: 'Second Card', content: 'This is the content of the Second Card' },
    ]);

    const [isModalOpen , setIsModalOpen] = useState(false);

    const handleAddCard = (title: string, content: string) => {
        setCards([...Cards, { title, content }]);
    };
      return (
    <>
      <Head>
        <title>HOME : MY PROJECT</title>
      </Head>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Welcome to My Project</h1>

        <button 
            className = "mb-4 px-4 py-2 bg-blue-600 text-white rounded"
            onClick={() => setIsModalOpen(true)}
        >
            Add New Card
        </button>

        {Cards.map((card, idx) => (
            <Card key={idx} title={card.title} content={card.content} />
        ))}
        
        <PostModal 
            isOpen= {isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onSubmit={handleAddCard}
        />
      </main>
    </>
  );
};
export default Home;