"use client"

import React from 'react';

interface KanbanColumnProps {
    title: string;
    columnKey: string;
    headingColor: string;
    cards: {
        id: number;
        title: string;
    }[];
    setCards: React.Dispatch<React.SetStateAction<{
        id: number;
        title: string;
    }[]>>;
}

const KanbanColumn: React.FC<KanbanColumnProps> = ({ title, columnKey, headingColor, cards, setCards }) => {
    return (
        <div className='flex flex-col items-center gap-5 p-2 h-full hover:bg-neutral-900/50 transition'>
            <div className='w-full items-center justify-between flex'>
                <h2 className={`font-semibold ${headingColor}`}>{title}</h2>
                <p className='text-neutral-400'>{cards.length}</p>
            </div>

            <div className='flex flex-col gap-2 items-center w-full'>
                {cards.map(card => (
                    <div key={card.id} className='border p-3 w-full bg-neutral-900 rounded-lg'>
                        <h3>{card.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default KanbanColumn;
