"use client";
import { FC, useEffect, useState } from "react";
import { Pane } from "./Pane";
import { BlockForm } from "./BlockForm";
import BlockNote from "./BlockNote";
import { BlockNoteView, useCreateBlockNote } from "@blocknote/react";
import { Block, BlockNoteEditor } from "@blocknote/core";
import "@blocknote/react/style.css";

export const Editor = ({
  editor,
  handleEdit,
}: {
  editor: BlockNoteEditor;
  handleEdit: () => void;
}) => {
  return (
    <Pane>
      <div className="pt-5">
        {/* <BlockNote editor={editor} /> */}
        <BlockNoteView
          editor={editor}
          theme="light"
          onChange={() => handleEdit()}
        />
      </div>
    </Pane>
  );
};
