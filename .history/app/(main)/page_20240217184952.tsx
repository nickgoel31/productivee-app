"use client"
import { KanbanIcon, ListChecks } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import {Chart as ChartJS} from "chart.js/auto"
import {Bar, Line} from "react-chartjs-2"

export default function Home() {

  return (
    <main className="flex flex-col gap-8 h-full py-8 flex-1 pr-10">
      <div className="space-y-2">
        <h1 className="font-semibold text-4xl">Overview</h1>
        <p className="font-medium text-sm text-neutral-400">We are all about productivity</p>
      </div>

      <div className="w-full flex flex-col gap-6 ">
        <div className='flex items-center w-full gap-4'>
          <div className='border rounded-xl p-4 flex-[1.2] h-56'>
            {/* <Bar data={{
              labels: ["A","B","C"],
              datasets: [
                {
                  label:"Tasks",
                  data:[2,3,4]
                }
              ]
            }} /> */}
            <h3 className='font-medium text-2xl'>In Development</h3>
          </div>
        </div>

        <div className=' rounded-xl p-4 flex-[1.8] flex flex-col gap-4'>
            <h2 className='text-lg font-semibold text-neutral-200'>
              Continue working with {"Lutune AI"}
            </h2>

            <div className='flex items-center gap-4'>
              <Link href={`/workspace`} className='font-medium flex flex-col items-center justify-center gap-2 border rounded p-4 hover:border-green-400/30 hover:text-green-500 transition group'>
                <KanbanIcon />
                Kanban board
              </Link>

              <Link href={`/workspace`} className='font-medium flex flex-col items-center justify-center gap-2 border rounded p-4 hover:border-green-400/30 hover:text-green-500 transition group'>
                <ListChecks />
                <p className='flex items-center gap-1 justify-center'>
                Tasks <span className='text-xs font-medium text-muted-foreground group-hover:text-green-400 transition'>(legacy)</span>
                </p>
              </Link>
            </div>

          </div>
      </div>
    </main>
  );
}
