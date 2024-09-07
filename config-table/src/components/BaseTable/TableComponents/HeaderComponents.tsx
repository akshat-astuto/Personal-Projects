/* eslint-disable @typescript-eslint/no-explicit-any */
import { ColumnDefinition, Schema } from "../utils/types";
import { TableHead, TableHeader, TableRow } from "./atoms";
import cn from "classnames";

export const HeaderItem = ({
  column,
  getColumnProps,
}: {
  column: ColumnDefinition<unknown>;
  getColumnProps?: (id: string) => Record<string, any>;
}) => {
  const id = column.accessorKey;
  const cellProps = getColumnProps ? getColumnProps(id) : {};
  const { className, ...filteredProps } = cellProps;

  return (
    <TableHead className={cn("bg-gray-100", className)} {...filteredProps}>
      {column.title}
    </TableHead>
  );
};

export const RenderHeader = ({
  schema,
  className,
  getColumnProps,
}: {
  schema: Schema<any>;
  className?: string;
  getColumnProps?: (id: string) => Record<string, any>;
}) => {
  return (
    <TableHeader className={className}>
      <TableRow>
        {schema.columns.map((column: ColumnDefinition<unknown>) => (
          <HeaderItem
            key={column.accessorKey}
            column={column}
            getColumnProps={getColumnProps}
          />
        ))}
      </TableRow>
    </TableHeader>
  );
};
