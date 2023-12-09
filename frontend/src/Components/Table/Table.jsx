import { useEffect, useState } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { deleteJobById, getJobs } from "../../api/jobs";
import { deleteUserById, getUsers } from "../../api/users";

const Table = ({ selectedOption }) => {
  const [sorting, setSorting] = useState();
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [users, setUsers] = useState([]);
  const [jobs, setJobs] = useState([]);

  const fetchData = async () => {
    const jobsResponse = await getJobs();
    setJobs(jobsResponse);
    console.log("Poslovi su", jobs);
    const usersResponse = await getUsers();
    setUsers(usersResponse);
    console.log("Useri su", users);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    selectedOption == "users" ? setData(users) : setData(jobs);
    setColumns(selectedOption == "users" ? columnsUsers : columnsJobs);
  }, [selectedOption, users, jobs]);

  const handleDelete = async (id) => {
    console.log(id);

    let filtered;
    if (selectedOption == "users") {
      console.log(id);
      const jobsResponse = await deleteUserById(id);
      console.log(jobsResponse);
    } else {
      console.log(id);
      const jobsResponse = await deleteJobById(id);
      console.log(jobsResponse);
    }
    fetchData();
    selectedOption == "users" ? setUsers(filtered) : setJobs(filtered);
  };

  const columnHelper = createColumnHelper();

  const columnsUsers = [
    columnHelper.accessor("id", {
      header: () => <span>ID</span>,
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("username", {
      header: () => <span>Korisnicko ime</span>,
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("first_name", {
      header: () => <span>Ime</span>,
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("last_name", {
      header: () => <span>Prezime</span>,
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
    columnHelper.accessor("job.id", {
      header: () => <span>ID</span>,
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("job.title", {
      header: () => <span>Naziv posla</span>,
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("job.start_date", {
      header: () => <span>Datum početka</span>,
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("job.duration", {
      header: () => <span>Trajanje (min)</span>,
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("job.description", {
      header: () => <span>Opis</span>,
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("job.creator_id", {
      header: () => <span>ID kreatora</span>,
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("job.employee_id", {
      header: () => <span>ID radnika</span>,
      cell: (info) => (info.getValue() ? info.getValue() : "-"),
    }),
    columnHelper.display({
      id: "actions",
      cell: (row) => (
        <button
          className="bg-red-600 text-white font-medium py-2 px-8 rounded-full"
          onClick={() => handleDelete(row.row.original.job.id)}
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
