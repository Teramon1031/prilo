import { AspectRatio } from "./ui/aspect-ratio";

export const Slide = ({ children }: { children: React.ReactNode }) => {
  return (
    <AspectRatio ratio={16 / 9} >
      <div className="bg-white w-full h-full p-5 border border-gray-300 rounded-sm">
        {children}
      </div>
    </AspectRatio>
  );
};
