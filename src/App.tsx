import React, { useState } from "react"
import "./App.css"
import Editor, { Monaco } from "@monaco-editor/react"
import { DEFAULT_EDITOR_OPTIONS, DEFAULT_SOURCE } from "./defaults"
import { editor, languages } from "monaco-editor"
import { installEmbeddedDts } from "./embeddedDts"
import { Project, projectChunks, toIffBuffer } from "radiant-voices"
import * as rv from "radiant-voices"
import * as sunvox from "./sunvox-lib-loader"
import * as ts from "typescript"

/** Parts of TypeScriptWorker from monaco's internals which implements ts.LanguageServiceHost, and has some extra methods. */
type TypeScriptWorker = ts.LanguageServiceHost & {
  getEmitOutput: (file: string) => Promise<ts.EmitOutput>
}

declare var window: any
window.radiantVoicesLibrary = rv

function App({
  defaultValue = DEFAULT_SOURCE,
  defaultEditorOptions = DEFAULT_EDITOR_OPTIONS,
  initialProject,
  initialMountedEditor,
  initialTypescript,
  initialJsSource = 'Object.defineProperty(exports, "__esModule", { value: true });',
  initialJsFrame,
  initialFile,
  initialCounter = 0,
}: {
  defaultValue?: string
  defaultEditorOptions?: editor.IStandaloneEditorConstructionOptions
  initialProject?: Project
  initialMountedEditor?: editor.ICodeEditor
  initialTypescript?: TypeScriptWorker | any
  initialJsSource?: string
  initialJsFrame?: HTMLIFrameElement | null
  initialFile?: Uint8Array
  initialCounter?: number
}) {
  const [project, setProject] = useState(initialProject)
  const [mountedEditor, setMountedEditor] = useState(initialMountedEditor)
  const [typescript, setTypescript] = useState(initialTypescript)
  const [jsFrame, setJsFrame] = useState(initialJsFrame)
  const [counter, setCounter] = useState(initialCounter)
  const [jsSource, setJsSource] = useState(initialJsSource)
  const [file, setFile] = useState(initialFile)

  async function buildProject() {
    const uri = mountedEditor!.getModel()!.uri.toString()
    console.log({ uri })
    const output = await (typescript as TypeScriptWorker).getEmitOutput(uri)
    const firstOutputFile = output.outputFiles[0]
    if (firstOutputFile) {
      console.log(firstOutputFile.text)
      let used = false
      const singleUseSetProject = (
        value: React.SetStateAction<Project | undefined>
      ) => {
        setProject(value)
        used = true
      }
      window.setProject = singleUseSetProject
      setJsSource(firstOutputFile.text)
      setCounter(counter + 1)
    } else {
      console.error("No output file")
    }
  }

  function loadProjectIntoSlot() {
    if (!project) {
      throw new Error("no project")
    }
    sunvox.sv_close_slot(0)
    sunvox.sv_open_slot(0)
    for (const chunk of projectChunks(project)) {
      console.log(chunk)
    }
    const file = new Uint8Array(toIffBuffer(projectChunks(project)).buffer)
    setFile(file)
    console.log({ file })
    console.log(sunvox.sv_load_from_memory(0, file))
    sunvox.sv_send_event(0, 0, sunvox.NOTECMD_CLEAN_SYNTHS, 0, 0, 0, 0)
  }

  function rewindAndPlaySlot() {
    sunvox.sv_play_from_beginning(0)
  }

  function playSlot() {
    sunvox.sv_play(0)
  }

  function stopSlot() {
    sunvox.sv_stop(0)
  }

  function resetSlot() {
    sunvox.sv_stop(0)
    sunvox.sv_send_event(0, 0, sunvox.NOTECMD_CLEAN_SYNTHS, 0, 0, 0, 0)
  }

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
              let exports = {
                createProject: function () {
                  throw new Error("createProject() was not defined.")
                }
              }
              function require(name) {
                if (name === "radiant-voices") {
                  return window.parent.radiantVoicesLibrary
                }
              }
              ;${jsSource};
              let createdProject = exports.createProject()
              window.parent.setProject(createdProject)
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
        <button onClick={loadProjectIntoSlot} disabled={!project}>
          Load
        </button>
        <button onClick={rewindAndPlaySlot}>⏮ ▶️</button>
        <button onClick={playSlot}>▶️</button>
        <button onClick={stopSlot}>⏹</button>
        <button onClick={resetSlot}>Reset</button>
      </p>
      {project && (
        <div>
          <p>Project name: {project.name}</p>
          <p>Build number: {counter}</p>
        </div>
      )}
      {!project && <div>No project built.</div>}
      <h2>Interface</h2>
      <p>(The generated interface will show here based on the source code.)</p>
      <iframe
        style={{ display: "none" }}
        srcDoc={frameContents()}
        ref={setJsFrame}
        title={`${counter}`}
      />
      <hr />
      <h1>
        About <i>MungeVox</i>
      </h1>
    </div>
  )
}

export default App
