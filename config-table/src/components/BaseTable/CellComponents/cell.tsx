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
