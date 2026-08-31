import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import "./App.css";

function App() {
  const [text, setText] = useState("");

  return (
    <div className="app">

      {/* LEFT PANEL */}
      <div className="panel">
        <div className="panel-header">
          Markdown Editor
        </div>

        <textarea
          className="editor"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write your Markdown here..."
        />
      </div>

      {/* RIGHT PANEL */}
      <div className="panel">
        <div className="panel-header">
          Preview
        </div>

        <div className="preview">
          <ReactMarkdown>{text}</ReactMarkdown>
        </div>
      </div>

    </div>
  );
}

export default App;
