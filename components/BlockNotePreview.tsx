"use client";
import { Block } from "@blocknote/core";
import "@blocknote/core/fonts/inter.css";
import { BlockNoteView, useCreateBlockNote } from "@blocknote/react";
import "@blocknote/react/style.css";
import { useEffect, useState } from "react";

export const BlockNotePreview = () => {
  const [blocks, setBlocks] = useState<Block[]>([]);
  const editor = useCreateBlockNote();
  console.log(editor);
  useEffect(() => {
    console.log(editor);
  }, [editor]);

  return (
    <>
      <BlockNoteView
        editor={editor}
        theme="light"
        editable={false}
        onChange={() => {
          setBlocks(editor.document);
        }}
      />
    </>
  );
};

export default BlockNotePreview;
