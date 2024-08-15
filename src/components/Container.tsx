interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={`mx-auto w-full max-w-6xl px-4 xl:px-0 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
