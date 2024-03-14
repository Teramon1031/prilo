"use client";
import { FC, useEffect, useState } from "react";
import { Pane } from "./Pane";
import { BlockForm } from "./BlockForm";
import { BlockNoteView, useCreateBlockNote } from "@blocknote/react";
import { Block, BlockNoteEditor } from "@blocknote/core";
import "@blocknote/react/style.css";

export const EditorDemo = () => {
    const editor = useCreateBlockNote();
    const [blocks, setBlocks] = useState<Block[]>([]);
    useEffect(() => {
        console.log(editor);
    }, [editor]);
    return (
        <Pane>
            <div className="pt-5">
                {/* <BlockNote editor={editor} /> */}
                <BlockNoteView
                    editor={editor}
                    theme="light"
                />
            </div>
        </Pane>
    );
};
