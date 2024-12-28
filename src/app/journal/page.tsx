import React from 'react';
import Table from "@/components/Table";
import prisma from '@/lib/prisma';
import { classNames } from '@/utils/condition_class';

export default async function JournalTable() {
    const rank = ["", "SCI一区", "SCI二区", "SCI三区", "SCI四区"]
    const columns = [
        { name: '简称', key: 'abbreviation' },
        {
            name: '评级',
            key: 'rank',
            render: (value: number) => {
                // 根据 rank 渲染不同样式
                let rankClass = '';
                switch (value) {
                    case 1:
                        rankClass = 'bg-green-50 text-green-700 ring-green-600/20'; // 已截止的样式
                        break;
                    case 2:
                        rankClass = 'bg-teal-50 text-teal-400 ring-teal-600/20'; // 即将截止的样式
                        break;
                    case 3:
                        rankClass = 'bg-yellow-50 text-yellow-400 ring-yellow-600/20'; // 未开始的样式
                        break;
                    case 4:
                        rankClass = 'bg-rose-50 text-rose-400 ring-rose-600/20'; // 未开始的样式
                        break;
                    default:
                        rankClass = 'bg-gray-50 text-gray-400 ring-gray-600/20'; // 默认状态样式
                }
                return (
                value && <span className={classNames("inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset", rankClass)}>
                    {rank[value]}
                </span>
            )},
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


