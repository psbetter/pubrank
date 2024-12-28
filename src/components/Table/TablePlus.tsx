// "use client"
import React from 'react';
import { Column, TableProps } from './types';
// import { useTableResize } from './useTableResize';

const Table: React.FC<TableProps> = ({ columns, data, height = 400 }) => {

    // const initialWidths = columns.reduce(
    //     (acc, col) => ({ ...acc, [col.key]: col.width || 150 }), 
    //     {}
    //   );
    
    // const { columnWidths, handleResizeStart } = useTableResize(initialWidths);

  return (
    <div 
      className="h-full border border-gray-200 rounded-lg overflow-hidden"
      style={{ height }}
    >
        <div id='table_scrollbar' className='overflow-auto'>
        <div className="sticky top-0 z-20 bg-gray-50">
            <div className="flex">
                {columns.map((column: Column) => {
                    const fixedClass = column.fixed === 'left' 
                      ? 'sticky left-0 z-10' 
                      : column.fixed === 'right' 
                        ? 'sticky right-0 z-10' 
                        : '';
                
                    return (
                      <div
                        key={column.key}
                        className={`flex-none ${fixedClass} bg-gray-200 w-40 px-3 py-3.5 text-sm font-semibold text-gray-900`}
                        // style={{ width: columnWidths[column.key] }}
                      >
                        <div className="flex items-left h-full px-4 font-semibold border-b border-gray-200">
                          {column.name}
                        </div>
                      </div>
                    );
                  })}
            </div>
        </div>
      
        <div className="h-80 ">
            {data.map((item, rowIndex) => (
                <div key={rowIndex} className="flex relative group hover:bg-gray-50">
                    {columns.map((col, colIndex) => {
                        const fixedClass = col.fixed === 'left'
                        ? 'sticky left-0 z-10'
                        : col.fixed === 'right'
                            ? 'sticky right-0 z-10'
                            : '';
                    
                        const content = col.render
                        ? col.render(item[col.key], data)
                        : item[col.key];
                    
                        return (
                        <div
                            key={colIndex}
                            className={`flex-none ${fixedClass} bg-white w-40`}
                            // style={{ width: columnWidths[row.key] }}
                        >
                            <div className={`flex items-center h-full px-4 border-b border-gray-200 ${col.className || ''}`}>
                            {content}
                            </div>
                        </div>
                        );
                    })}
                </div>
            ))}
        </div>
        </div>
    </div>
  );
};

export default Table;