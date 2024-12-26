"use client"
import React from 'react';
import TabsInPills from './TabsInPills';

const PageHeader: React.FC = () => {
    
  return (
    <div className="w-4/5 border-gray-200">
        <h3 className="text-base font-semibold leading-6 text-gray-900">科技前沿</h3>
        <p className="mt-2 max-w-4xl text-sm text-gray-500 pb-2">
            此表目前汇总计算机领域的期刊及会议，包含截止日期，信息实时更新，供科研人参考
        </p>
        <TabsInPills />
    </div>
  );
};

export default PageHeader;