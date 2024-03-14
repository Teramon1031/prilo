"use client";
import { Block, BlockNoteEditor } from "@blocknote/core";
import "@blocknote/core/fonts/inter.css";
import { BlockNoteView, useCreateBlockNote } from "@blocknote/react";
import "@blocknote/react/style.css";
import { useEffect, useState } from "react";

export const BlockNote = ({ editor }: { editor: BlockNoteEditor }) => {
  // Creates a new editor instance.
  const [blocks, setBlocks] = useState<Block[]>([]);
  //   const editor = useCreateBlockNote();
  console.log(editor);
  useEffect(() => {
    console.log(editor);
  }, [editor]);

  // Renders the editor instance using a React component.
  return (
    <>
      <BlockNoteView
        editor={editor}
        theme="light"
        onChange={() => {
          // Saves the document JSON to state.
          setBlocks(editor.document);
        }}
      />
      <div>Document JSON:</div>
      <div className={"item bordered"}>
        <pre>
          <code>{JSON.stringify(blocks, null, 2)}</code>
        </pre>
      </div>
    </>
  );
};

export default BlockNote;
