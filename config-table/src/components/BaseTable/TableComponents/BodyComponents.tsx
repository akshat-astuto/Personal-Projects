/* eslint-disable @typescript-eslint/no-explicit-any */
import { displayMapVsCell } from "../CellComponents/display-map";
import { ColumnDefinition, Schema } from "../utils/types";
import { TableBody, TableCell, TableRow } from "./atoms";

export const BodyItem = ({
  column,
  item,
  getRowProps,
}: {
  column: ColumnDefinition<unknown>;
  item: any;
  getRowProps?: (id: string) => Record<string, any>;
}) => {
  const CellComponent = displayMapVsCell[column.cell];
  const id = column.accessorKey;
  const cellProps = getRowProps ? getRowProps(id) : {};
  const {
    className: tableCellClassName,
    cellClassName: cellComponentClassName,
    ...filteredCellProps
  } = cellProps;

  return (
    <TableCell className={tableCellClassName}>
      <CellComponent className={cellComponentClassName} {...filteredCellProps}>
        {item[id]}
      </CellComponent>
    </TableCell>
  );
};

export const RenderBody = ({
  schema,
  data,
  className,
  getRowProps,
}: {
  schema: Schema<any>;
  data: any[];
  className?: string;
  getRowProps?: (id: string) => Record<string, any>;
}) => {
  return (
    <TableBody className={className}>
      {data.map((item) => (
        <TableRow key={item.accessorKey}>
          {schema.columns.map((column: ColumnDefinition<unknown>) => (
            <BodyItem
              key={column.accessorKey}
              column={column}
              item={item}
              getRowProps={getRowProps}
            />
          ))}
        </TableRow>
      ))}
    </TableBody>
  );
};
