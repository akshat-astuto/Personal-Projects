export const TextCell = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
};

export const BaseInputCell = ({
  value,
  onChange,
  className,
}: {
  value: string;
  onChange: (props: any) => void;
  className?: string;
}) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      className={className}
    />
  );
};

export const withTableAction = (Component: React.ComponentType<any>) => {
  return ({
    ...props
  }: {
    tableState: any;
    updateCellValue: (...props: any) => void;
    rowData: any;
    index: number;
    id: string;
  }) => {
    const {
      updateCellValue,
      rowData,
      id,
      index,
      tableState,
      ...filteredProps
    } = props;

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      updateCellValue(index, id, e.target.value);
    };

    return <Component {...filteredProps} onChange={onChange} />;
  };
};
