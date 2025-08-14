import React from 'react';
import { type ColumnDef, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';

import { cn } from '@/shared/lib/utils/styles';

export const Table = <TData,>({
  data,
  columns,
  className,
}: {
  data: TData[];
  columns: ColumnDef<TData>[];
  className?: string;
}) => {
  const table = useReactTable({
    data,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div
      className={cn('w-full overflow-x-scroll border border-[rgba(128,128,128,0.15)]', className)}
    >
      <table className="w-full table-fixed border-collapse">
        <thead className="text-left">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="p-3 border-r last:border-0 border-[rgba(128,128,128,0.15)] bg-[rgba(128,128,128,0.05)]"
                >
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        {data.length ? (
          <tbody className="border-t border-[rgba(128,128,128,0.15)]">
            {table.getRowModel().rows.map((row, rowIndex) => (
              <React.Fragment key={row.id}>
                <tr>
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className="p-3 border-l first:border-0 border-[rgba(128,128,128,0.15)]"
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
                {rowIndex < table.getRowModel().rows.length - 1 && (
                  <tr>
                    <td
                      colSpan={columns.length}
                      className="border-b border-[rgba(128,128,128,0.15)]"
                    />
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        ) : null}
      </table>
    </div>
  );
};
