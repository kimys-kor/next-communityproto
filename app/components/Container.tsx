interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="max-w-[1300px] px-3 mx-auto flex gap-5">{children}</div>
  );
};

export default Container;
