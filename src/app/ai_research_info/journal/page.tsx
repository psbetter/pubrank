import React from 'react';
import prisma from '@/lib/prisma';
import { classNames } from '@/utils/condition_class';

export default async function JournalTable() {
    const rank = ["", "SCI一区", "SCI二区", "SCI三区", "SCI四区"]
    const rankStyle = [
        "", 
        "bg-green-50 text-green-700 ring-green-600/20", 
        "bg-teal-50 text-teal-400 ring-teal-600/20", 
        "bg-yellow-50 text-yellow-400 ring-yellow-600/20", 
        "bg-rose-50 text-rose-400 ring-rose-600/20"
    ]
    const journal = await prisma.journal.findMany(); 
    return (
        <ul role="list" className="divide-y divide-gray-100">
          {journal.map((item, idx) => (
            <li key={idx} className="flex items-center justify-between gap-x-6 py-5">
              <div className="min-w-0">
                <div className="flex items-start gap-x-3">
                    <p className="text-sm font-semibold leading-6 text-gray-900">{item.abbreviation}</p>
                    <p
                        className={classNames(
                            rankStyle[item.rank],
                        'rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset'
                        )}
                    >
                        {rank[item.rank]}
                    </p>
                </div>
                <div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
                  <p className="whitespace-nowrap">
                    全称: {item.fullName}
                  </p>
                  <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 fill-current">
                    <circle cx={1} cy={1} r={1} />
                  </svg>
                  <p className="truncate">影响因子： {item.imapctFactor}</p>
                </div>
              </div>
              <div className="flex flex-none items-center gap-x-4">
                <a
                  href={item.url}
                  className="rounded-md bg-transparent px-2.5 py-1.5 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-100 sm:block"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                        <path d="M12.232 4.232a2.5 2.5 0 0 1 3.536 3.536l-1.225 1.224a.75.75 0 0 0 1.061 1.06l1.224-1.224a4 4 0 0 0-5.656-5.656l-3 3a4 4 0 0 0 .225 5.865.75.75 0 0 0 .977-1.138 2.5 2.5 0 0 1-.142-3.667l3-3Z" />
                        <path d="M11.603 7.963a.75.75 0 0 0-.977 1.138 2.5 2.5 0 0 1 .142 3.667l-3 3a2.5 2.5 0 0 1-3.536-3.536l1.225-1.224a.75.75 0 0 0-1.061-1.06l-1.224 1.224a4 4 0 1 0 5.656 5.656l3-3a4 4 0 0 0-.225-5.865Z" />
                    </svg>
                </a>
              </div>
            </li>
          ))}
        </ul>
      );
};


