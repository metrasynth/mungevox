import React from "react"
import "./App.css"
import Editor from "@monaco-editor/react"
import { DEFAULT_SOURCE } from "./defaults"

function App({ defaultValue = DEFAULT_SOURCE }: { defaultValue?: string }) {
  return (
    <div>
      <h2>Code Editor</h2>
      <Editor height="50vh" defaultLanguage="typescript" defaultValue={defaultValue} />
      <h2>Controls</h2>
      <p>(Compilation and playback controls for the SunVox project.)</p>
      <h2>Interface</h2>
      <p>(The generated interface will show here based on the source code.)</p>
      <hr />
      <h1>
        About the <i>SunVox Project Construction Kit (SVPCK)</i>
      </h1>
    </div>
  )
}

export default App
