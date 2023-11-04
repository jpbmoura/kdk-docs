import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function App() {
  const [value, setValue] = useState("");

  return (
    <>
      <ReactQuill
        style={{ height: "90vh" }}
        theme="snow"
        value={value}
        onChange={setValue}
      />
    </>
  );
}

export default App;
