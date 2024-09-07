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
  getRowProps?: (props: any) => Record<string, any>;
}) => {
  const CellComponent = displayMapVsCell[column.cell];
  const id = column.accessorKey;
  const cellProps = getRowProps ? getRowProps({column, item, id})?.[id] : {};
  const {
    className: tableCellClassName,
    cellClassName: cellComponentClassName,
    ...filteredCellProps
  } = cellProps || {};

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
  getRowProps?: (props: any) => Record<string, any>;
}) => {
  return (
    <TableBody className={className}>
      {data.map((item, index) => (
        <TableRow key={`${item.accessorKey}-${index}`}>
          {schema.columns.map((column: ColumnDefinition<unknown>) => (
            <BodyItem
            key={`${item.id || index}-${column.accessorKey}`}
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
