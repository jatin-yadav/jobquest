import React, { useEffect } from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';

interface MasonryGridProps {
    items: {
        type: 'youtube' | 'tweet',
        title: string,
        link: string,
        _id: string
    }[];
}

const MasonryGrid: React.FC<MasonryGridProps> = ({ items }) => {
    useEffect(() => {
        console.log(items);
    }, [items])

    if (items.length === 0) {
        return (
            <div className='flex flex-col justify-center items-center'>
                <h1 className="text-4xl font-bold py-6">Check your link/hash or re share your brain</h1>
                <Link to='/dashboard'><span className="text-3xl font-semibold bg-yellow-300 px-8 py-2 rounded-xl">Dashboard</span></Link>
            </div>
        )
    }
    return (
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {items.map(({ title, type, link, _id }, index) => (
                <div
                    key={index}
                    className="break-inside-avoid shadow rounded-md hover:shadow-lg transition-shadow duration-300"
                >
                    <Card link={link} title={title} type={type} contentId={_id} />
                </div>
            ))}
        </div>
    );
};

export default MasonryGrid;
