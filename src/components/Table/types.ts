import { ReactNode } from 'react';

export interface Column {
    name: string; // 列表头显示文本
    key: string; // 数据字段
    render?: (value: any, record: any) => ReactNode; // 自定义渲染函数
    className?: string; // 自定义列样式
    width?: number;
    fixed?: 'left' | 'right';
}

export interface TableProps {
    columns: Column[]; // 列定义
    data: any[]; // 数据源
    height?: number;
}