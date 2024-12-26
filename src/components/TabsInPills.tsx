"use client"
import React from 'react';
import { usePathname } from 'next/navigation'
import { classNames } from "@/utils/condition_class";

const TabsInPills: React.FC = () => {
    const pathname = usePathname()
    
    const tabs = [
        { id: "1", name: '会议', href: '/conference', current: true },
        { id: "2", name: '期刊', href: '/journal', current: false },
    ]
    
  return (
    <div>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
        >
          {tabs.map((tab) => (
            <option key={tab.id}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <nav className="flex space-x-4" aria-label="Tabs">
          {tabs.map((tab) => (
            <a
              key={tab.id}
              href={tab.href}
              className={classNames(
                pathname === tab.href ? 'bg-gray-100 text-gray-700' : 'text-gray-500 hover:text-gray-700',
                'rounded-md px-3 py-2 text-sm font-medium'
              )}
              aria-current={tab.current ? 'page' : undefined}
            >
              {tab.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default TabsInPills;