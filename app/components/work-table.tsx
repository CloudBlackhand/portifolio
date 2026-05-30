"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState, type KeyboardEvent } from "react";
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

function projectAreaLabel(kind: Project["projectKind"]): string {
  switch (kind) {
    case "marketing":
      return "Marketing";
    case "landing":
      return "Landing";
    case "consultoria":
      return "Consultoria";
    case "topsecret":
      return "Sob sigilo";
    default:
      return "Sistema";
  }
}

export function WorkTable({ projects }: WorkTableProps) {
  const router = useRouter();
  const [sorting, setSorting] = useState<SortingState>([
    { id: "year", desc: true },
  ]);

  const openProject = (slug: string) => {
    router.push(`/projetos/${slug}`);
  };

  const onRowKeyDown = (event: KeyboardEvent<HTMLTableRowElement>, slug: string) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openProject(slug);
    }
  };

  const columns = useMemo(
    () => [
      columnHelper.accessor("title", {
        header: "Projeto",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("projectKind", {
        header: "Área",
        cell: (info) => projectAreaLabel(info.getValue()),
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

  // eslint-disable-next-line react-hooks/incompatible-library
  const table = useReactTable({
    data: projects,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  const rows = table.getRowModel().rows;

  return (
    <section className="table-wrap section-spacing">
      <div className="table-header">
        <h2>Resumo dos projetos</h2>
        <p className="muted table-header-note">
          Visão executiva dos projetos. No desktop, clique no cabeçalho para ordenar.
        </p>
      </div>

      <ul className="work-table-cards" aria-label="Lista de projetos">
        {rows.map((row) => {
          const project = row.original;
          return (
            <li key={row.id} className="work-table-card">
              <Link className="work-table-card-link" href={`/projetos/${project.slug}`}>
                <div className="work-table-card-head">
                  <h3>{project.title}</h3>
                  <span className="work-table-card-year">{project.year}</span>
                </div>
                <p className="work-table-card-meta">
                  {projectAreaLabel(project.projectKind)} · {project.category}
                </p>
                <p className="work-table-card-impact">{project.impactLabel}</p>
              </Link>
            </li>
          );
        })}
      </ul>

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
            {rows.map((row) => (
              <tr
                key={row.id}
                className="work-table-row"
                onClick={() => openProject(row.original.slug)}
                onKeyDown={(event) => onRowKeyDown(event, row.original.slug)}
                tabIndex={0}
                role="link"
                aria-label={`Abrir ${row.original.title}`}
              >
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
