import { DISPLAY_MAP } from "../CellComponents/display-map";

export interface ColumnDefinition<T> {
  title: string;
  accessorKey: keyof T;
  cell: (typeof DISPLAY_MAP)[keyof typeof DISPLAY_MAP];
}

export interface Schema<T> {
  columns: ColumnDefinition<T>[];
  caption?: string;
}
