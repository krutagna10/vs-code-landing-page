interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

function Container({ children, className }: ContainerProps) {
  return (
    <div className={`mx-auto max-w-7xl px-4 ${className || ""}`}>
      {children}
    </div>
  );
}

export default Container;
