import { BaseTable } from "./components/BaseTable";
import { invoices } from "./components/BaseTable/data.mock";
import { schema } from "./components/BaseTable/schema.mock";

function App() {
  const createRowProps = () => {
    const rowProps = [
      {
        invoice: {
          className: "bg-red-500",
        }
      }
    ];
    return rowProps.reduce((acc, row) => ({ ...acc, ...row }), {});
  };

  return (
    <div className="p-8 text-xl">
      <BaseTable schema={schema} data={invoices} />
    </div>
  );
}

export default App;
