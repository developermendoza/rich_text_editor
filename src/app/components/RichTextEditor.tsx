import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill styles

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({ value, onChange }) => {
  return (
    <ReactQuill
      theme="snow" // or 'bubble'
      value={value}
      onChange={onChange}
      className="h-[300px]"
    />
  );
};

export default RichTextEditor;
