import { BoldButton } from "../ui/buttons";
import { FontsDropDown } from "../ui/dropdown";
import Editor from "../ui/editor";

export default function TextEditor() {
  return (
    <div>
      <div className="h-screen flex justify-center items-center">
        <div className="w-full max-w-2xl border border-gray-300">
          <Editor />
        </div>
      </div>
    </div>
  );
}
