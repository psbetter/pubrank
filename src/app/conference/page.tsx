import React from 'react';
import Table from "@/components/Table";
import { classNames } from "@/utils/condition_class";
import prisma from '@/lib/prisma';
import * as dayjs from 'dayjs'

export default async function ConferenceTable() {
    const columns = [
        { name: '简称', key: 'abbreviation' },
        {
            name: '状态',
            key: 'status',
            render: (value: string) => (
                <div className="flex items-center gap-x-2">
                    <div
                        className={classNames(
                            'flex-none rounded-full p-1',
                            value !== '已结束' ? 'text-green-400 bg-green-400/10' : 'text-rose-400 bg-rose-400/10'
                        )}
                    >
                        <div className="h-1.5 w-1.5 rounded-full bg-current" />
                    </div>
                    <span>{value}</span>
                </div>
            ),
        },
        { name: '截止日期', 
          key: 'deadline',
          render: (value: number) => dayjs(value).format('YYYY-MM-DD'), 
         },
        { name: '会议日期', key: 'meetingDate' },
        { name: '地点', key: 'address' },
        { name: '全称', key: 'fullName' },
        {
            name: '主页链接',
            key: 'url',
            render: (value: string) => <a href={value} className="text-blue-500">{value}</a>,
        },
        { name: '出版商', key: 'publisher' },
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
    const conference = await prisma.conference.findMany();

    return <Table columns={columns} data={conference} />;
};

