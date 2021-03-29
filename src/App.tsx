import React, { useState } from "react"
import "./App.css"
import Editor, { Monaco } from "@monaco-editor/react"
import { DEFAULT_EDITOR_OPTIONS, DEFAULT_SOURCE } from "./defaults"
import { editor, languages } from "monaco-editor"
import { installEmbeddedDts } from "./embeddedDts"
import { Project } from "radiant-voices"
import * as ts from "typescript"

/** Parts of TypeScriptWorker from monaco's internals which implements ts.LanguageServiceHost, and has some extra methods. */
type TypeScriptWorker = ts.LanguageServiceHost & {
  getEmitOutput: (file: string) => Promise<ts.EmitOutput>
}

function App({
  defaultValue = DEFAULT_SOURCE,
  defaultEditorOptions = DEFAULT_EDITOR_OPTIONS,
  initialProject,
  initialMountedEditor,
  initialTypescript,
  initialJsSource = 'Object.defineProperty(exports, "__esModule", { value: true });',
  initialJsFrame,
  initialCounter = 0,
}: {
  defaultValue?: string
  defaultEditorOptions?: editor.IStandaloneEditorConstructionOptions
  initialProject?: Project
  initialMountedEditor?: editor.ICodeEditor
  initialTypescript?: TypeScriptWorker | any
  initialJsSource?: string
  initialJsFrame?: HTMLIFrameElement | null
  initialCounter?: number
}) {
  const [project, setProject] = useState(initialProject)
  const [mountedEditor, setMountedEditor] = useState(initialMountedEditor)
  const [typescript, setTypescript] = useState(initialTypescript)
  const [jsFrame, setJsFrame] = useState(initialJsFrame)
  const [counter, setCounter] = useState(initialCounter)
  const [jsSource, setJsSource] = useState(initialJsSource)

  async function buildProject() {
    const uri = mountedEditor!.getModel()!.uri.toString()
    console.log({ uri })
    const output = await (typescript as TypeScriptWorker).getEmitOutput(uri)
    const firstOutputFile = output.outputFiles[0]
    if (firstOutputFile) {
      console.log(firstOutputFile.text)
      setJsSource(firstOutputFile.text)
      setCounter(counter + 1)
    } else {
      console.error("No output file")
    }
  }

  function loadProjectIntoSlot() {}

  function rewindAndPlaySlot() {}

  function playSlot() {}

  function stopSlot() {}

  function resetSlot() {}

  function frameContents() {
    if (counter === 0) {
      return ""
    }
    // language=HTML5
    return `
      <!DOCTYPE html>
      <html data-counter=${counter}>
      <head>
        <meta charset="UTF-8">
      </head>
      <body>
        <script>
        window.addEventListener('DOMContentLoaded', function() {
          window.setTimeout(function() {
            try {
              let exports = {}
              ;${jsSource};
              console.log({ exports })
              const project = exports.createProject()
              console.log({ project })
            } catch(e) {
              console.error(e.toString())
            }
          }, 1)
        })
        </script>
      </body>
      </html>
    `
  }

  async function editorDidMount(editor: editor.IStandaloneCodeEditor, monaco: Monaco) {
    setMountedEditor(editor)
    monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
      moduleResolution: languages.typescript.ModuleResolutionKind.NodeJs,
      target: languages.typescript.ScriptTarget.ES2016,
      module: languages.typescript.ModuleKind.CommonJS,
      typeRoots: ["node_modules/@types"],
      noEmit: false,
    })
    installEmbeddedDts(monaco)
    const worker = await monaco.languages.typescript.getTypeScriptWorker()
    const typescript = await worker(editor.getModel()!.uri)
    setTypescript(typescript)
  }

  return (
    <div>
      <h2>Code Editor</h2>
      <Editor
        height="50vh"
        defaultLanguage="typescript"
        defaultValue={defaultValue}
        defaultPath="file:///index.ts"
        options={defaultEditorOptions}
        onMount={editorDidMount}
      />
      <h2>Controls</h2>
      <p>
        <button onClick={buildProject}>Build</button>
        <button onClick={loadProjectIntoSlot}>Load</button>
        <button onClick={rewindAndPlaySlot}>⏮ ▶️</button>
        <button onClick={playSlot}>▶️</button>
        <button onClick={stopSlot}>⏹</button>
        <button onClick={resetSlot}>Reset</button>
      </p>
      <p>(Compilation and playback controls for the SunVox project.)</p>
      <h2>Interface</h2>
      <p>(The generated interface will show here based on the source code.)</p>
      <iframe srcDoc={frameContents()} ref={setJsFrame} title={`${counter}`} />
      <hr />
      <h1>
        About <i>MungeVox</i>
      </h1>
    </div>
  )
}

export default App
