import React from "react"
import "./App.css"
import Editor, { Monaco } from "@monaco-editor/react"
import { DEFAULT_EDITOR_OPTIONS, DEFAULT_SOURCE } from "./defaults"
import { editor, languages } from "monaco-editor"
import { installEmbeddedDts } from "./embeddedDts"

function setupEditor(editor: editor.IStandaloneCodeEditor, monaco: Monaco) {
  monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
    moduleResolution: languages.typescript.ModuleResolutionKind.NodeJs,
    target: languages.typescript.ScriptTarget.ES2016,
    module: languages.typescript.ModuleKind.CommonJS,
    noEmit: true,
    typeRoots: ["node_modules/@types"],
  })

  installEmbeddedDts(monaco)
}

function App({
  defaultValue = DEFAULT_SOURCE,
  defaultEditorOptions = DEFAULT_EDITOR_OPTIONS,
}: {
  defaultValue?: string
  defaultEditorOptions?: editor.IStandaloneEditorConstructionOptions
}) {
  return (
    <div>
      <h2>Code Editor</h2>
      <Editor
        height="50vh"
        defaultLanguage="typescript"
        defaultValue={defaultValue}
        defaultPath="file:///index.ts"
        options={defaultEditorOptions}
        onMount={setupEditor}
      />
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
