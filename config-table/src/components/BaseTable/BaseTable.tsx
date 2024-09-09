/* eslint-disable @typescript-eslint/no-explicit-any */
import { memo, useMemo, useState, useCallback } from "react";
import {
  RenderBody,
  RenderHeader,
  Table,
  TableCaption,
} from "./TableComponents";
import { Schema } from "./utils/types";
import cn from "classnames";

const BaseTable = ({
  schema,
  data,
  className,
  classes,
  getColumnProps,
  getRowProps,
}: {
  schema: Schema<any>;
  data: any[];
  className?: string;
  classes?: Record<string, string>;
  getColumnProps?: (props: any) => Record<string, any>;
  getRowProps?: (props: any) => Record<string, any>;
}) => {
  const { caption } = schema;

  const initialTableState = useMemo(() => {
    return {
      selectedRows: [],
      rowData: data,
    };
  }, [data]);

  const [tableState, setTableState] = useState(initialTableState);

  const updateCellValue = useCallback(
    (index: number, id: string, value: any) => {
      setTableState((prev) => {
        const newRowData = [...prev.rowData];
        newRowData[index] = { ...newRowData[index], [id]: value };
        return { ...prev, rowData: newRowData };
      });
    },
    []
  );

  console.log(tableState);

  return (
    <Table className={cn(className, "border border-gray-200")} key={1}>
      <TableCaption className={classes?.caption}>{caption}</TableCaption>
      <RenderHeader
        schema={schema}
        className={classes?.header}
        getColumnProps={getColumnProps}
      />
      <RenderBody
        schema={schema}
        data={tableState.rowData}
        className={classes?.body}
        getRowProps={getRowProps}
        updateCellValue={updateCellValue}
      />
    </Table>
  );
};

export default memo(BaseTable);
