"use client";

import type { ColumnDef, RowData } from "@tanstack/react-table";

import type { DataTableFeatures } from "@/lib/data-table-features";

import { Checkbox } from "@/registry/bases/aria/ui/checkbox";

interface GetDataTableSelectColumnOptions<TData extends RowData> extends Omit<
  Partial<ColumnDef<DataTableFeatures, TData>>,
  "id" | "header" | "cell"
> {}

// The RAC Table in DataTable owns selection, so the checkboxes only take its slot
export function getDataTableSelectColumn<TData extends RowData>({
  size = 40,
  enableHiding = false,
  enableSorting = false,
  ...props
}: GetDataTableSelectColumnOptions<TData> = {}): ColumnDef<
  DataTableFeatures,
  TData
> {
  return {
    id: "select",
    header: () => (
      <Checkbox
        slot="selection"
        aria-label="Select all"
        className="translate-y-0.5"
      />
    ),
    cell: () => (
      <Checkbox
        slot="selection"
        aria-label="Select row"
        className="translate-y-0.5"
      />
    ),
    size,
    enableHiding,
    enableSorting,
    ...props,
  };
}
