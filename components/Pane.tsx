export const Pane = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-white min-h-[80vh] rounded-lg px-10 py-5">
      {children}
    </div>
  );
};
