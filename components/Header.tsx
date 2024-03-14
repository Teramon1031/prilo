import { H1 } from "./Headings";

export const Header = () => {
  return (
    <div className="w-full h-16 flex justify-between items-center px-8 bg-white fixed shadow-md z-50">
      <H1>Prilo</H1>
      <div className="bg-pink-50 rounded-full w-10 h-10" />
    </div>
  );
};
