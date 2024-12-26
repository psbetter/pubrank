import React from 'react';
import Table from "@/components/Table";
import prisma from '@/lib/prisma';

export default async function JournalTable() {
    const columns = [
        { name: '简称', key: 'abbreviation' },
        { name: '全称', key: 'fullName' },
        {
            name: '主页链接',
            key: 'url',
            render: (value: string) => <a href={value} className="text-blue-500">{value}</a>,
        },
        { name: '影响因子', key: 'imapctFactor' },
        {
            name: '评级',
            key: 'rank',
            render: (value: string) => (
                <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                    {value}
                </span>
            ),
        },
    ];
  const journal = await prisma.journal.findMany();

    return <Table columns={columns} data={journal} />;
};


