import React from 'react';
import Table from "@/components/Table";
import { classNames } from "@/utils/condition_class";
import prisma from '@/lib/prisma';
import dayjs from 'dayjs';

export default async function ConferenceTable() {
    const rank = ["", "CCF A", "CCF B", "CCF C", "CCF D"]
    const columns = [
        { name: '简称', key: 'abbreviation', fixed: 'left' },
        {
            name: '评级',
            key: 'rank',
            fixed: 'right',
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
        {
            name: '状态',
            key: 'status',
            render: (value: string) => {
                // 根据 status 渲染不同样式
                let statusClass = '';

                switch (value) {
                    case '已截止':
                        statusClass = 'text-rose-400 bg-rose-400/10'; // 已截止的样式
                        break;
                    case '即将截止':
                        statusClass = 'text-yellow-400 bg-yellow-400/10'; // 即将截止的样式
                        break;
                    case '未开始':
                        statusClass = 'text-green-400 bg-green-400/10'; // 未开始的样式
                        break;
                    default:
                        statusClass = 'text-gray-400 bg-gray-400/10'; // 默认状态样式
                }
                return (
                    <div className="flex items-center gap-x-2">
                        <div
                            className={classNames('flex-none rounded-full p-1', statusClass)}
                        >
                            <div className="h-1.5 w-1.5 rounded-full bg-current" />
                        </div>
                        <span>{value}</span>
                    </div>
                )},
        },
        { name: '截止日期', 
          key: 'deadline',
          render: (value: number) => dayjs(value).format('YYYY-MM-DD'), 
         },
        { name: '会议日期', key: 'meetingDate' },
        {
            name: '主页链接',
            key: 'url',
            render: (value: string) => <a href={value} className="text-blue-500">{value}</a>,
        },
        { name: '地点', key: 'address' },
        { name: '出版商', key: 'publisher' },
        { name: '全称', key: 'fullName' },
    ];
    const conference = await prisma.conference.findMany();
    const conferenceData = conference.map((item: any) => {
        const deadline = dayjs(item.deadline);
        const today = dayjs();
        let status = '未开始';  // 默认状态为 '未开始'
        
        if (deadline.isBefore(today, 'day')) {
            status = '已截止';  // 截止日期已过，状态为 '已截止'
        } else if (deadline.isBefore(today.add(1, 'day'), 'day')) {
            status = '即将截止';  // 截止日期在明天
        }

        return {
            ...item,
            status,  // 添加动态计算的 status 字段
        };
    });
    return (
      <div className='w-3/4 h-[500px] overflow-auto'>
        <Table columns={columns} data={conferenceData} />
      </div>
    );
};

