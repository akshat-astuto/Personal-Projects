/* eslint-disable @typescript-eslint/no-explicit-any */
import { RenderHeader, Table, TableCaption } from "./TableComponents";
import { RenderBody } from "./TableComponents/BodyComponents";
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
  getColumnProps?: (id: string) => Record<string, any>;
  getRowProps?: (id: string) => Record<string, any>;
}) => {
  const { caption } = schema;

  return (
    <Table className={cn(className, "border border-gray-200")}>
      <TableCaption className={classes?.caption}>{caption}</TableCaption>
      <RenderHeader
        schema={schema}
        className={classes?.header}
        getColumnProps={getColumnProps}
      />
      <RenderBody
        schema={schema}
        data={data}
        className={classes?.body}
        getRowProps={getRowProps}
      />
    </Table>
  );
};

export default BaseTable;
