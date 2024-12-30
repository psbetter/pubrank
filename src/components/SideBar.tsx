"use client"
import React from 'react';
import { usePathname, useRouter } from 'next/navigation'
import { classNames } from "@/utils/condition_class";

interface tab {
    id: string; 
    href: string;
    name: string;
    icon: React.ReactNode
}

interface SiderBarProps {
    tabs: tab[];
}

const SiderBar: React.FC<SiderBarProps> = ({tabs}) => {
    const pathname = usePathname()
    const router = useRouter()
    
  return (
    <div className="h-full w-16 flex flex-col bg-gray-200 rounded-lg transition p-2">
        <nav className="flex flex-col gap-y-2" role="navigation" aria-orientation="vertical">
            {tabs.map((tab, tabIdx) => (
                <button key={tabIdx}
                    type="button"
                    onClick={() => router.push(tab.href)}
                    className={classNames(
                                    'py-3 px-3 inline-flex items-center focus:outline-none focus:text-gray-700 rounded-lg',
                                    pathname === tab.href ? 'bg-white text-gray-700' : 'bg-transparent hover:bg-white'
                        )}
                    >
                    {tab.icon}
                </button>
            ))}
        </nav>
    </div>
  );
};

export default SiderBar;