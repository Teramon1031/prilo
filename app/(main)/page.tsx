import { EditorDemo } from "@/components/EditorDemo";
import { PreviewDemo } from "@/components/PreviewDemo";
import { Workspace } from "@/features/main/Workspace";

export default function Home() {
  return (
    <>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 w-full">
        <EditorDemo />
        <PreviewDemo />
      </div>
      {/* <Workspace /> */}
    </>
  );
}
