import { BaseTable } from "./components/BaseTable";
import { invoices } from "./components/BaseTable/data.mock";
import { schema } from "./components/BaseTable/schema.mock";

function App() {
  // To Pass a class to a specific column
  // const getRowProps = () => ({column, item, id}: {column: any, item: any, id: any}) => {
  //   // console.log(column, item, id);
  //   return {
  //     invoice: {
  //       className: "bg-red-500",
  //     }
  //   }
  // }

  // To pass a class to header
  // const getColumnProps = () => ({column, id}: {column: any, id: any}) => {
  //   return {
  //     invoice: {
  //       className: "bg-red-500",
  //     }
  //   }
  // }

  return (
    <div className="p-8 text-xl">
      <BaseTable
        schema={schema}
        data={invoices}
        // getRowProps={getRowProps()}
        // getColumnProps={getColumnProps()}
      />
    </div>
  );
}

export default App;
