import React from 'react';
import Image from 'next/image';
interface ArticleProps {
    title: string;
    content: string;
    date: string;
    time: string;
    publisherName: string;
    publisherImage: string;
}

const Article: React.FC<ArticleProps> = ({ title, content, date, time, publisherName, publisherImage }) => {
    return (
        <div className="flex justify-center w-full py-8">
            <div className="w-full max-w-3xl mx-auto border border-gray-300 rounded-lg shadow-md overflow-hidden">
                <div className="p-6 md:p-8">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-center">{title}</h1>
                    
                    <div className="border-t border-b border-gray-200 py-4 mb-6 flex justify-between items-center text-white-700 text-sm">
                        <p>{date} at {time}</p>
                        <div className="flex items-center">
                            <Image
                                src={publisherImage} 
                                alt={publisherName}
                                width={40}
                                height={40}
                                className="w-10 h-10 rounded-full object-cover mr-3"
                            />
                            <p className="font-medium">{publisherName}</p>
                        </div>
                    </div>
                    
                    <div className="prose max-w-none">
                        <p className="text-white-700 leading-relaxed">{content}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Article;