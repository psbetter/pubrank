import React from 'react';
import Table from "@/components/Table";
import prisma from '@/lib/prisma';

export default async function JournalTable() {
    const rank = ["", "SCI一区", "SCI二区", "SCI三区", "SCI四区"]
    const columns = [
        { name: '简称', key: 'abbreviation' },
        {
            name: '评级',
            key: 'rank',
            render: (value: number) => (
                value && <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                    {rank[value]}
                </span>
            ),
        },
        { name: 'IF', key: 'imapctFactor' },
        {
            name: '主页链接',
            key: 'url',
            render: (value: string) => <a href={value} className="text-blue-500">{value}</a>,
        },
        { name: '全称', key: 'fullName' },
    ];
    const journal = await prisma.journal.findMany(); 
    return <Table columns={columns} data={journal} />;
};


