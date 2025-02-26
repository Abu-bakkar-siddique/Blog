import React from 'react';
import Article from '@/components/article'; // Adjust the import path as necessary

const articles = [
    {
        id: 1,
        title: 'Understanding React Hooks',
        content: 'React Hooks are functions that let you use state and other React features without writing a class...',
        date: '2023-10-01',
        time: '10:00 AM',
        publisherName: 'John Doe',
        publisherImage: 'https://fastly.picsum.photos/id/171/200/300.jpg?hmac=NHia9vzbBwrKnBFwp7cDZPSxFcVF_VGbnFO5LAjWnuE'

    },
    {
        id: 2,
        title: 'A Guide to TypeScript',
        content: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript...',
        date: '2023-10-02',
        time: '11:00 AM',
        publisherName: 'Jane Smith',
        publisherImage: 'https://fastly.picsum.photos/id/171/200/300.jpg?hmac=NHia9vzbBwrKnBFwp7cDZPSxFcVF_VGbnFO5LAjWnuE'
    },
    {
        id: 3,
        title: 'Getting Started with Next.js',
        content: 'Next.js is a React framework that enables several extra features, including server-side rendering and generating static websites...',
        date: '2023-10-03',
        time: '12:00 PM',
        publisherName: 'Alice Johnson',
        publisherImage:  'https://fastly.picsum.photos/id/171/200/300.jpg?hmac=NHia9vzbBwrKnBFwp7cDZPSxFcVF_VGbnFO5LAjWnuE'
    },
    {
        id: 4,
        title: 'Understanding JavaScript Closures',
        content: 'A closure is the combination of a function and the lexical environment within which that function was declared...',
        date: '2023-10-04',
        time: '01:00 PM',
        publisherName: 'Bob Brown',
        publisherImage:  'https://fastly.picsum.photos/id/171/200/300.jpg?hmac=NHia9vzbBwrKnBFwp7cDZPSxFcVF_VGbnFO5LAjWnuE'

    },
    {
        id: 5,
        title: 'CSS Grid Layout: A Complete Guide',
        content: 'CSS Grid Layout is a two-dimensional layout system for the web. It lets you layout items in rows and columns...',
        date: '2023-10-05',
        time: '02:00 PM',
        publisherName: 'Charlie Davis',
        publisherImage:  'https://fastly.picsum.photos/id/171/200/300.jpg?hmac=NHia9vzbBwrKnBFwp7cDZPSxFcVF_VGbnFO5LAjWnuE'
    }
];

const FeedPage = () => {
    return (
        <div className='mt-[60px]'>
            <div className="space-y-8">
            {articles.map(article => (
                <Article
                    key={article.id}
                    title={article.title}
                    content={article.content}
                    date={article.date}
                    time={article.time}
                    publisherName={article.publisherName}
                    publisherImage={article.publisherImage}
                />
            ))}
        </div>
        </div>
        
        
    );
};

export default FeedPage;