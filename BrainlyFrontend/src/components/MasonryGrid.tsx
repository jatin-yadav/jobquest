import React from 'react';
import Card from './Card';

interface MasonryGridProps {
    items: {
        type: 'youtube' | 'tweet',
        title: string,
        link: string,
        _id: string
    }[];
}

const MasonryGrid: React.FC<MasonryGridProps> = ({ items }) => {
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
