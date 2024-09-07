import { DISPLAY_MAP } from "./CellComponents/display-map";

export const schema = {
  columns: [
    {
      title: "Invoice",
      accessorKey: "invoice",
      cell: DISPLAY_MAP.TEXT,
    },
    {
      title: "Payment Status",
      accessorKey: "paymentStatus",
      cell: DISPLAY_MAP.TEXT,
    },
    {
      title: "Total Amount",
      accessorKey: "totalAmount",
      cell: DISPLAY_MAP.TEXT,
    },
    {
      title: "Payment Method",
      accessorKey: "paymentMethod",
      cell: DISPLAY_MAP.TEXT,
    },
  ],
  caption: "A list of your recent invoices.",
};
