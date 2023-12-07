import React, { useState } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

const Table = () => {
  const [sorting, setSorting] = useState();
  const [data, setData] = useState(() => [
    { username: "test", password: "123", admin: 0 },
    { username: "marko", password: "014235", admin: 0 },
    { username: "gaser", password: "789", admin: 0 },
  ]);

  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor("username", {
      header: () => <span>Korisnicko ime</span>,
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("password", {
      header: () => <span>Lozinka</span>,
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("admin", {
      header: () => <span>Je li admin</span>,
      cell: (info) => info.getValue(),
    }),
  ];

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
    initialState: {
      pagination: {
        autoResetPageIndex: true,
        pageSize: 5,
      },
    },
  });
  return (
    <div>
      <table className="bg-red-500">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </div>
  );
};

export default Table;
