import { useEffect, useState } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

const Table = ({ selectedOption }) => {
  const [sorting, setSorting] = useState();
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);

  const [users, setUsers] = useState(() => [
    { id: 1, username: "test", password: "123", admin: 1 },
    { id: 2, username: "marko", password: "014235", admin: 0 },
    { id: 3, username: "gaser", password: "789", admin: 0 },
  ]);

  const [jobs, setJobs] = useState(() => [
    { id: 1, nazivposla: "posap" },
    { id: 2, nazivposla: "kopanje" },
  ]);

  useEffect(() => {
    selectedOption == "users" ? setData(users) : setData(jobs);
    setColumns(selectedOption == "users" ? columnsUsers : columnsJobs);
  }, [selectedOption, users, jobs]);

  const handleDelete = (id) => {
    let filtered;
    if (selectedOption == "users") {
      filtered = users.filter((el) => el.id !== id);
    } else {
      filtered = jobs.filter((el) => el.id !== id);
    }
    selectedOption == "users" ? setUsers(filtered) : setJobs(filtered);
  };

  const columnHelper = createColumnHelper();

  const columnsUsers = [
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
      cell: (info) => (info.getValue() == 0 ? "ne" : "da"),
    }),
    columnHelper.display({
      id: "actions",
      cell: (row) => (
        <button
          className="bg-red-600 text-white font-medium py-2 px-8 rounded-full"
          onClick={() => handleDelete(row.row.original.id)}
        >
          Izbriši
        </button>
      ),
    }),
  ];

  const columnsJobs = [
    columnHelper.accessor("nazivposla", {
      header: () => <span>Naziv posla</span>,
      cell: (info) => info.getValue(),
    }),
    columnHelper.display({
      id: "actions",
      cell: (row) => (
        <button
          className="bg-red-600 text-white font-medium py-2 px-8 rounded-full"
          onClick={() => handleDelete(row.row.original.id)}
        >
          Izbriši
        </button>
      ),
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
      <table className="bg-white-light mt-8 mx-auto w-full border-orange-200 border-2">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="bg-yellow-light text-white p-4">
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
                <td key={cell.id} className="p-2 text-center">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
