import React from 'react';
import { classNames } from "@/utils/condition_class";

interface Column {
    name: string; // 列表头显示文本
    key: string; // 数据字段
    render?: (value: any, record: any) => React.ReactNode; // 自定义渲染函数
    className?: string; // 自定义列样式
}

interface TableProps {
    columns: Column[]; // 列定义
    data: any[]; // 数据源
}

const Table: React.FC<TableProps> = ({ columns, data }) => {
    return (
        <div className="shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg mt-6 flow-root">
            <div id='table_scrollbar' className="rounded-lg overflow-x-auto">
                <div className="inline-block min-w-full align-middle">
                    <div className="overflow-hidden">
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead className="bg-gray-50">
                                <tr>
                                    {columns.map((col, index) => (
                                        <th
                                            key={index}
                                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                        >
                                            {col.name}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                                {data.map((item, rowIndex) => (
                                    <tr key={rowIndex}>
                                        {columns.map((col, colIndex) => (
                                            <td
                                                key={colIndex}
                                                className={classNames(
                                                    'whitespace-nowrap px-3 py-4 text-sm',
                                                    col.className || ''
                                                )}
                                            >
                                                {col.render
                                                    ? col.render(item[col.key], item)
                                                    : item[col.key]}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Table;

