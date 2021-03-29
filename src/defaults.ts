import * as monaco from "monaco-editor"

// language=TypeScript
export const DEFAULT_SOURCE = `\
import { Project, m } from "radiant-voices"

export function createProject(): Project {
  const p = new Project()

  const lfo = m.lfo()
  p.attach(lfo)
  lfo.c.generator = true
  lfo.c.frequencyUnit = m.Lfo.FrequencyUnit.Hz
  lfo.c.freq = 440
  lfo.c.waveform = m.Lfo.Waveform.Sin

  const correctDcOffset = m.amplifier()
  p.attach(correctDcOffset)
  correctDcOffset.c.dcOffset = -64

  const volume = m.amplifier()
  p.attach(volume)
  volume.c.fineVolume = 12345

  const vibrato = m.vibrato()
  p.attach(vibrato)

  lfo.linkTo(correctDcOffset).linkTo(vibrato).linkTo(volume)

  volume.linkTo(p.outputModule)

  return p
}
`

export const DEFAULT_EDITOR_OPTIONS: monaco.editor.IStandaloneEditorConstructionOptions = {
  cursorStyle: "block",
  theme: "vs",
}
