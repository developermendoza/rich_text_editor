"use client";

import { Label, Textarea } from "flowbite-react";
import React, { useState } from "react";
import RichTextEditor from "../components/RichTextEditor";

const Editor = () => {
  const [editorValue, setEditorValue] = useState("");

  const handleEditorChange = (value: string) => {
    setEditorValue(value);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Text Editor</h1>
      <RichTextEditor value={editorValue} onChange={handleEditorChange} />
      <div className="mt-4">
        <h2 className="text-lg font-semibold mb-2">Preview:</h2>
        <div dangerouslySetInnerHTML={{ __html: editorValue }} />
      </div>
    </div>
  );
};

export default Editor;
