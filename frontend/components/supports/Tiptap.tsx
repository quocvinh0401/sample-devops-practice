"use client";

import {
    IconBlockquote,
    IconBold,
    IconH1,
    IconH2,
    IconH3,
    IconItalic,
    IconLayersSubtract,
    IconLink,
    IconList,
    IconPhoto,
    IconUnderline,
} from "@tabler/icons-react";
import { useState } from "react";

import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Underline from "@tiptap/extension-underline";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const Editor = () => {
    const [result, setResult] = useState("");

    const editor = useEditor({
        extensions: [StarterKit, Image, Link, Underline],
        content: "",
        onUpdate: ({ editor }) => setResult(editor.getHTML()),
    });

    const addImage = (e: any) => {
        var file = e.target.files[0];
        editor
            ?.chain()
            .focus()
            .setImage({ src: URL.createObjectURL(file) })
            .run();
    };

    const setLink = () => {
        const previousUrl = editor?.getAttributes("link").href;
        const url = window.prompt("URL", previousUrl);

        // cancelled
        if (url === null) {
            return;
        }

        // empty
        if (url === "") {
            editor?.chain().focus().extendMarkRange("link").unsetLink().run();

            return;
        }

        // update link
        editor?.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
    };

    return (
        <div className="my-4 divide-y rounded-lg border">
            <div className="sticky top-0 z-50 flex w-full items-center space-x-3 bg-white p-2 shadow">
                <div onClick={() => editor?.chain().focus().toggleBold().run()} className={editor?.isActive("bold") ? "bg-primary-100" : ""}>
                    <IconBold />
                </div>
                <div onClick={() => editor?.chain().focus().toggleItalic().run()} className={editor?.isActive("italic") ? "bg-primary-100" : ""}>
                    <IconItalic />
                </div>
                <div onClick={() => editor?.chain().focus().toggleUnderline().run()} className={editor?.isActive("underline") ? "bg-primary-100" : ""}>
                    <IconUnderline />
                </div>
                <div
                    onClick={() => editor?.chain().focus().toggleHeading({ level: 1 }).run()}
                    className={editor?.isActive("heading", { level: 1 }) ? "bg-primary-100" : ""}
                >
                    <IconH1 />
                </div>
                <div
                    onClick={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()}
                    className={editor?.isActive("heading", { level: 2 }) ? "bg-primary-100" : ""}
                >
                    <IconH2 />
                </div>
                <div
                    onClick={() => editor?.chain().focus().toggleHeading({ level: 3 }).run()}
                    className={editor?.isActive("heading", { level: 3 }) ? "bg-primary-100" : ""}
                >
                    <IconH3 />
                </div>
                <label>
                    <IconPhoto />
                    <input type="file" className="hidden h-0 w-0" onChange={addImage} />
                </label>
                <div onClick={setLink} className={editor?.isActive("link") ? "bg-primary-100" : ""}>
                    <IconLink />
                </div>
                <div onClick={() => editor?.chain().focus().toggleBlockquote().run()} className={editor?.isActive("blockquote") ? "bg-primary-100" : ""}>
                    <IconBlockquote />
                </div>
                <div onClick={() => editor?.chain().focus().toggleBulletList().run()} className={editor?.isActive("bulletList") ? "bg-primary-100" : ""}>
                    <IconList />
                </div>
            </div>
            <EditorContent className="min-h-[10rem] p-2 [&>div]:outline-0" style={{ wordBreak: "break-word" }} editor={editor} />
            <div className="p-2">
                <div className="flex justify-between">
                    <div>Result</div>
                    <IconLayersSubtract onClick={() => navigator.clipboard.writeText(result)} />
                </div>
                <div style={{ wordBreak: "break-word" }}>{result}</div>
            </div>
        </div>
    );
};
export default Editor;
