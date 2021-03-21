import * as monaco from "monaco-editor"

// language=TypeScript
export const DEFAULT_SOURCE = `\
import { Project } from "radiant-voices"

export function createProject(): Project {
  return new Project()
}
`

export const DEFAULT_EDITOR_OPTIONS: monaco.editor.IStandaloneEditorConstructionOptions = {
  cursorStyle: "block",
  theme: "vs",
}
