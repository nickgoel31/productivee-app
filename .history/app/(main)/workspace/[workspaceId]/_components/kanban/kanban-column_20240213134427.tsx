"use client"

import React, { useState } from 'react';
import KanbanCard from './kanban-card';

interface KanbanColumnProps {
    title: string;
    columnKey: string;
    headingColor: string;
    cards: {
        title:string,
        id:string,
        column: string

    }[];
    setCards: React.Dispatch<React.SetStateAction<{
        id: number;
        title: string;
        column: string;
    }[]>>;
}

const KanbanColumn: React.FC<KanbanColumnProps> = ({ title, columnKey, headingColor, cards, setCards }) => {


    const [active,setActive] = useState(false)

    const filteredCards = cards.filter((c) => c.column === columnKey)

    return (
        <div className='flex flex-col items-center gap-5  h-full '>
            <div className='w-full items-center justify-between flex p-2'>
                <h2 className={`font-semibold ${headingColor}`}>{title}</h2>
                <p className='text-neutral-400'>{filteredCards.length}</p>
            </div>

            <div className={`flex flex-col gap-1 items-center p-2 w-full h-full transition ${active ? "bg-neutral-900/50" : ""}`}>
                {filteredCards.map(card => (
                    <KanbanCard key={card.id} {...card}/>
                ))}
            </div>
        </div>
    );
};

export default KanbanColumn;
