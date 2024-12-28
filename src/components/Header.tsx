"use client"
import React from 'react';
import { usePathname, useRouter } from 'next/navigation'
import { classNames } from "@/utils/condition_class";

interface tab {
    id: string; 
    href: string;
    name: string;
}

interface HeaderProps {
    tabs: tab[];
}

const Header: React.FC<HeaderProps> = ({tabs}) => {
    const pathname = usePathname()
    const router = useRouter()
    
  return (
    <div className="w-full flex">
        <div className="w-full h-12 flex bg-gray-100 rounded-lg transition p-1">
            <nav className="flex gap-x-1" aria-orientation="horizontal">
                {tabs.map((tab, tabIdx) => (
                    <button key={tabIdx}
                        type="button"
                        onClick={() => router.push(tab.href)}
                        className={classNames(
                                        'py-3 px-4 inline-flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700 font-medium rounded-lg',
                                        pathname === tab.href ? 'bg-white text-gray-700' : 'bg-transparent hover:bg-gray-200'
                            )}
                        >
                        {tab.name}
                    </button>
                ))}
            </nav>
        </div>
    </div>
  );
};

export default Header;