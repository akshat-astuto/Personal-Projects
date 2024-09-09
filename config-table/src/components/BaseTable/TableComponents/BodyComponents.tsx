/* eslint-disable @typescript-eslint/no-explicit-any */
import { withTableAction } from "../CellComponents/cell";
import { displayMapVsCell } from "../CellComponents/display-map";
import { ColumnDefinition, Schema } from "../utils/types";
import { TableBody, TableCell, TableRow } from "./atoms";
import React from "react";

export const BodyItem = React.memo(
  ({
    column,
    item,
    getRowProps,
    updateCellValue,
    index,
  }: {
    column: ColumnDefinition<unknown>;
    item: any;
    getRowProps?: (props: any) => Record<string, any>;
    updateCellValue: (index: number, id: string, value: any) => void;
    index: number;
  }) => {
    const CellComponent = React.useMemo(
      () => withTableAction(displayMapVsCell[column.cell]),
      [column.cell]
    );
    const id = column.accessorKey;
    const cellProps = getRowProps
      ? getRowProps({ column, item, id })?.[id]
      : {};
    const {
      className: tableCellClassName,
      cellClassName: cellComponentClassName,
      ...filteredCellProps
    } = cellProps || {};

    return (
      <TableCell className={tableCellClassName}>
        <CellComponent
          className={cellComponentClassName}
          {...filteredCellProps}
          updateCellValue={updateCellValue}
          rowData={item}
          value={item[id]}
          id={id}
          index={index}
        >
          {item[id]}
        </CellComponent>
      </TableCell>
    );
  }
);

export const RenderBody = ({
  schema,
  data,
  className,
  getRowProps,
  updateCellValue,
}: {
  schema: Schema<any>;
  data: any[];
  className?: string;
  getRowProps?: (props: any) => Record<string, any>;
  updateCellValue: (index: number, id: string, value: any) => void;
}) => {
  return (
    <TableBody className={className}>
      {data?.map((item, index) => (
        <TableRow key={`${item.accessorKey}-${index}`}>
          {schema.columns.map((column: ColumnDefinition<unknown>) => (
            <BodyItem
              key={`${item.id || index}-${column.accessorKey}`}
              column={column}
              item={item}
              index={index}
              getRowProps={getRowProps}
              updateCellValue={updateCellValue}
            />
          ))}
        </TableRow>
      ))}
    </TableBody>
  );
};
