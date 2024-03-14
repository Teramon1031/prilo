"use client";

import { Editor } from "@/components/Editor";
import { Preview } from "@/components/Preview";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Block, BlockNoteEditor } from "@blocknote/core";
import { useCreateBlockNote } from "@blocknote/react";
import { useState } from "react";

export const Workspace = () => {
  const initialEditor = useCreateBlockNote();
  const [editor, setEditor] = useState<BlockNoteEditor>(initialEditor);
  const [lastEditTime, setLastEditTime] = useState(Date.now());
  return (
    <Tabs defaultValue="editor" className="flex-col justify-center">
      <TabsList className="">
        <TabsTrigger value="editor">Editor</TabsTrigger>
        <TabsTrigger value="preview">Preview</TabsTrigger>
        <TabsTrigger value="both" className="hidden lg:block">
          Both
        </TabsTrigger>
      </TabsList>
      <TabsContent value="editor" className="lg:w-full max-w-xl min-w-[600px]">
        <Editor
          editor={editor}
          handleEdit={() => {
            setLastEditTime(Date.now());
          }}
        />
      </TabsContent>
      <TabsContent value="preview" className="lg:w-full max-w-xl min-w-[600px]">
        <Preview />
      </TabsContent>
      {/* <TabsContent
        value="both"
        className="w-full grid lg:grid-cols-2 grid-cols-1 gap-10"
      >
        <Editor editor={editor} handleEdit={setEditor} />
        <Preview />
      </TabsContent> */}
    </Tabs>
  );
};
