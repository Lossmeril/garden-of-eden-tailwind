const Section = ({ children }: { children: any }) => {
  return (
    <div className="bg-white min-h-screen">
      <div className="grid h-screen place-items-center">{children}</div>
    </div>
  );
};

export default Section;
