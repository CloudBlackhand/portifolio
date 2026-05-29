"use client";

import { useMemo, useState } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  type SortingState,
  useReactTable,
} from "@tanstack/react-table";
import type { Project } from "@/data/projects";

type WorkTableProps = {
  projects: Project[];
};

const columnHelper = createColumnHelper<Project>();

export function WorkTable({ projects }: WorkTableProps) {
  const [sorting, setSorting] = useState<SortingState>([
    { id: "year", desc: true },
  ]);

  const columns = useMemo(
    () => [
      columnHelper.accessor("title", {
        header: "Projeto",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("projectKind", {
        header: "Área",
        cell: (info) => {
          switch (info.getValue()) {
            case "marketing":
              return "Marketing";
            case "landing":
              return "Landing";
            default:
              return "Sistema";
          }
        },
      }),
      columnHelper.accessor("category", {
        header: "Categoria",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("year", {
        header: "Ano",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("impactLabel", {
        header: "Impacto principal",
        cell: (info) => info.getValue(),
      }),
    ],
    [],
  );

  // TanStack Table fornece handlers dinamicos; memoizacao do React Compiler e ignorada aqui de forma intencional.
  // eslint-disable-next-line react-hooks/incompatible-library
  const table = useReactTable({
    data: projects,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <section className="table-wrap section-spacing">
      <div className="table-header">
        <h2>Resumo dos projetos</h2>
        <p className="muted">
          Visão executiva dos projetos. Clique no cabeçalho para ordenar.
        </p>
      </div>
      <div className="table-scroll">
        <table className="work-table">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder ? null : (
                      <button
                        type="button"
                        className="table-sort-button"
                        onClick={header.column.getToggleSortingHandler()}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                        <span className="table-sort-indicator">
                          {header.column.getIsSorted() === "asc" && "↑"}
                          {header.column.getIsSorted() === "desc" && "↓"}
                        </span>
                      </button>
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
        </table>
      </div>
    </section>
  );
}
