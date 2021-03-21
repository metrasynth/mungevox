import { Monaco } from "@monaco-editor/react"
export function installEmbeddedDts(monaco: Monaco) {
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `export declare enum MessageType {
    Unset = 0,
    Note = 1,
    KeyPressure = 2,
    ControlChange = 3,
    Nrpn = 4,
    Rpn = 5,
    ProgramChange = 6,
    ChannelPressure = 7,
    PitchBend = 8
}
export declare enum Slope {
    Linear = 0,
    Exp1 = 1,
    Exp2 = 2,
    SCurve = 3,
    Cut = 4,
    Toggle = 5
}
export interface MidiMap {
    channel: number;
    messageType: MessageType;
    messageParameter: number;
    slope: Slope;
}
export declare class ControllerMidiMap implements MidiMap {
    channel: number;
    messageType: MessageType;
    messageParameter: number;
    slope: Slope;
}
export interface ControllerMidiMaps {
    [key: string]: ControllerMidiMap;
}
`,
    "file:///node_modules/@types/radiant-voices/controllerMidiMap.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `export declare type Color = [number, number, number];
`,
    "file:///node_modules/@types/radiant-voices/color.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { PatternBase } from "./pattern";
import { m } from "./modtypes";
import { SunVoxContainer } from "./containers";
import { ModuleBase } from "./modtypes/moduleBase";
import { SunVoxVersion } from "./sunVoxVersion";
export interface ModuleConnection {
    src: number;
    dest: number;
}
export declare enum SyncCommand {
    StartStop = 1,
    Tempo = 2,
    Position = 4
}
export declare class Project implements SunVoxContainer {
    initialBpm: number;
    initialTpl: number;
    globalVolume: number;
    name: string;
    timeGrid: number;
    timeGrid2: number;
    modulesScale: number;
    modulesZoom: number;
    modulesXOffset: number;
    modulesYOffset: number;
    modulesLayerMask: number;
    modulesCurrentLayer: number;
    timelinePosition: number;
    selectedModule: number;
    lastSelectedGenerator: number;
    currentPattern: number;
    currentTrack: number;
    currentLine: number;
    receiveSyncMidi: SyncCommand;
    receiveSyncOther: SyncCommand;
    sunVoxVersion: SunVoxVersion;
    basedOnVersion: SunVoxVersion;
    readonly patterns: Array<PatternBase | undefined>;
    readonly modules: Array<ModuleBase | undefined>;
    get outputModule(): m.Output.Module;
    constructor();
    attach(obj: ModuleBase): Project;
    attach(obj: PatternBase): Project;
}
`,
    "file:///node_modules/@types/radiant-voices/project.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `export declare function base2to10(x: number): number;
`,
    "file:///node_modules/@types/radiant-voices/conversions.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `export interface ModuleDataChunk {
    chnm: number;
    chdt?: Uint8Array;
    chff?: number;
    chfr?: number;
}
export declare type ModuleDataChunks = ModuleDataChunk[];
`,
    "file:///node_modules/@types/radiant-voices/moduleDataChunk.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `export interface Linkable {
    linkFrom(other: Linkable | Linkable[]): Linkable;
    linkTo(other: Linkable | Linkable[]): Linkable;
}
export declare class Linkables implements Linkable {
    members: Linkable[];
    constructor(members: Linkable[]);
    linkFrom(other: Linkable | Linkable[]): Linkable;
    linkTo(other: Linkable | Linkable[]): Linkable;
}
`,
    "file:///node_modules/@types/radiant-voices/links.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `export declare enum Note {
    C0 = 1,
    c0 = 2,
    D0 = 3,
    d0 = 4,
    E0 = 5,
    F0 = 6,
    f0 = 7,
    G0 = 8,
    g0 = 9,
    A0 = 10,
    a0 = 11,
    B0 = 12,
    C1 = 13,
    c1 = 14,
    D1 = 15,
    d1 = 16,
    E1 = 17,
    F1 = 18,
    f1 = 19,
    G1 = 20,
    g1 = 21,
    A1 = 22,
    a1 = 23,
    B1 = 24,
    C2 = 25,
    c2 = 26,
    D2 = 27,
    d2 = 28,
    E2 = 29,
    F2 = 30,
    f2 = 31,
    G2 = 32,
    g2 = 33,
    A2 = 34,
    a2 = 35,
    B2 = 36,
    C3 = 37,
    c3 = 38,
    D3 = 39,
    d3 = 40,
    E3 = 41,
    F3 = 42,
    f3 = 43,
    G3 = 44,
    g3 = 45,
    A3 = 46,
    a3 = 47,
    B3 = 48,
    C4 = 49,
    c4 = 50,
    D4 = 51,
    d4 = 52,
    E4 = 53,
    F4 = 54,
    f4 = 55,
    G4 = 56,
    g4 = 57,
    A4 = 58,
    a4 = 59,
    B4 = 60,
    C5 = 61,
    c5 = 62,
    D5 = 63,
    d5 = 64,
    E5 = 65,
    F5 = 66,
    f5 = 67,
    G5 = 68,
    g5 = 69,
    A5 = 70,
    a5 = 71,
    B5 = 72,
    C6 = 73,
    c6 = 74,
    D6 = 75,
    d6 = 76,
    E6 = 77,
    F6 = 78,
    f6 = 79,
    G6 = 80,
    g6 = 81,
    A6 = 82,
    a6 = 83,
    B6 = 84,
    C7 = 85,
    c7 = 86,
    D7 = 87,
    d7 = 88,
    E7 = 89,
    F7 = 90,
    f7 = 91,
    G7 = 92,
    g7 = 93,
    A7 = 94,
    a7 = 95,
    B7 = 96,
    C8 = 97,
    c8 = 98,
    D8 = 99,
    d8 = 100,
    E8 = 101,
    F8 = 102,
    f8 = 103,
    G8 = 104,
    g8 = 105,
    A8 = 106,
    a8 = 107,
    B8 = 108,
    C9 = 109,
    c9 = 110,
    D9 = 111,
    d9 = 112,
    E9 = 113,
    F9 = 114,
    f9 = 115,
    G9 = 116,
    g9 = 117,
    A9 = 118,
    a9 = 119,
    B9 = 120
}
export declare enum NoteCmd {
    Empty = 0,
    NoteOff = 128,
    AllNotesOff = 129,
    CleanSynths = 130,
    Stop = 131,
    Play = 132,
    SetPitch = 133,
    PrevTrack = 134
}
export declare enum DrumNote {
    BD01 = 1,
    BD02 = 2,
    BD03 = 3,
    BD04 = 4,
    HH01 = 5,
    HH02 = 6,
    HH03 = 7,
    SD01 = 8,
    SD02 = 9,
    SD03 = 10,
    SD04 = 11,
    SD05 = 12,
    BD11 = 13,
    BD12 = 14,
    BD13 = 15,
    BD14 = 16,
    HH11 = 17,
    HH12 = 18,
    HH13 = 19,
    SD11 = 20,
    SD12 = 21,
    SD13 = 22,
    SD14 = 23,
    SD15 = 24,
    BD21 = 25,
    BD22 = 26,
    BD23 = 27,
    BD24 = 28,
    HH21 = 29,
    HH22 = 30,
    HH23 = 31,
    SD21 = 32,
    SD22 = 33,
    SD23 = 34,
    SD24 = 35,
    SD25 = 36,
    BD31 = 37,
    BD32 = 38,
    BD33 = 39,
    BD34 = 40,
    HH31 = 41,
    HH32 = 42,
    HH33 = 43,
    SD31 = 44,
    SD32 = 45,
    SD33 = 46,
    SD34 = 47,
    SD35 = 48,
    BD41 = 49,
    BD42 = 50,
    BD43 = 51,
    BD44 = 52,
    HH41 = 53,
    HH42 = 54,
    HH43 = 55,
    SD41 = 56,
    SD42 = 57,
    SD43 = 58,
    SD44 = 59,
    SD45 = 60,
    BD51 = 61,
    BD52 = 62,
    BD53 = 63,
    BD54 = 64,
    HH51 = 65,
    HH52 = 66,
    HH53 = 67,
    SD51 = 68,
    SD52 = 69,
    SD53 = 70,
    SD54 = 71,
    SD55 = 72,
    BD61 = 73,
    BD62 = 74,
    BD63 = 75,
    BD64 = 76,
    HH61 = 77,
    HH62 = 78,
    HH63 = 79,
    SD61 = 80,
    SD62 = 81,
    SD63 = 82,
    SD64 = 83,
    SD65 = 84,
    BD71 = 85,
    BD72 = 86,
    BD73 = 87,
    BD74 = 88,
    HH71 = 89,
    HH72 = 90,
    HH73 = 91,
    SD71 = 92,
    SD72 = 93,
    SD73 = 94,
    SD74 = 95,
    SD75 = 96,
    BD81 = 97,
    BD82 = 98,
    BD83 = 99,
    BD84 = 100,
    HH81 = 101,
    HH82 = 102,
    HH83 = 103,
    SD81 = 104,
    SD82 = 105,
    SD83 = 106,
    SD84 = 107,
    SD85 = 108,
    BD91 = 109,
    BD92 = 110,
    BD93 = 111,
    BD94 = 112,
    HH91 = 113,
    HH92 = 114,
    HH93 = 115,
    SD91 = 116,
    SD92 = 117,
    SD93 = 118,
    SD94 = 119,
    SD95 = 120
}
`,
    "file:///node_modules/@types/radiant-voices/note.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { SunVoxContainer } from "./containers";
import { ModuleBase } from "./modtypes/moduleBase";
import { SunVoxVersion } from "./sunVoxVersion";
export declare class Synth implements SunVoxContainer {
    readonly module: ModuleBase;
    sunVoxVersion: SunVoxVersion;
    constructor(module: ModuleBase);
}
`,
    "file:///node_modules/@types/radiant-voices/synth.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `export interface SunVoxContainer {
}
`,
    "file:///node_modules/@types/radiant-voices/containers.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { Note, NoteCmd } from "./note";
import { Effect } from "./effect";
import { Color } from "./color";
import { Project } from "./project";
export interface Event {
    note: Note | NoteCmd;
    velocity: number;
    module: number;
    controller: number;
    effect: Effect;
    parameter: number;
}
export declare type Line = Event[];
export declare type PatternData = Line[];
export declare enum PatternAppearanceFlags {
    NoIcon = 1
}
export declare enum PatternFlags {
    Clone = 1,
    Selected = 2,
    Mute = 8,
    Solo = 16
}
export declare class PatternBase {
    project?: Project;
    _index?: number;
    parent?: number;
    x: number;
    y: number;
    flags: PatternFlags;
    get index(): number | undefined;
    set index(newIndex: number | undefined);
    attachTo(project: Project): PatternBase;
}
export declare class Pattern extends PatternBase {
    readonly parent: undefined;
    name?: string;
    tracks: number;
    lines: number;
    ySize: number;
    appearance: number;
    icon: Uint8Array;
    fgColor: Color;
    bgColor: Color;
    data: PatternData;
    constructor(lines?: number, tracks?: number, events?: Event[]);
    attachTo(project: Project): Pattern;
    initData(events?: Event[]): PatternData;
}
export declare class PatternClone extends PatternBase {
    readonly parent: number;
    flags: PatternFlags;
    constructor(parent: number);
    attachTo(project: Project): PatternClone;
}
`,
    "file:///node_modules/@types/radiant-voices/pattern.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `export declare enum Effect {
    SlideUp = 1,
    SlideDown = 2,
    SlideToNote = 3,
    Vibrato = 4,
    Arpeggio = 8,
    SetSampleOffset = 9,
    SetSampleOffsetByPercentage = 7,
    SlideVelocityUpDown = 10,
    SetPlayingSpeed = 15,
    FineSlideUp = 17,
    FineSlideDown = 18,
    SetBypassSoloMuteFlags = 19,
    ResetBypassSoloMuteFlags = 20,
    ChangeRelativeNoteAndFinetune = 21,
    Retrigger = 25,
    Cut = 28,
    Delay = 29,
    SetBpmToXxyy = 31,
    NoteProbability = 32,
    NoteProbabilityWithRandomVelocity = 33,
    WriteRandomValueBetween0AndXxyyToController = 34,
    WriteRandomValueBetweenXxAndYyToController = 35,
    NoteFromLineXxyy = 36,
    RandomNoteFromLineXxToYy = 37,
    NoteFromTrackXxyy = 38,
    RandomNoteFromTrackXxToYy = 39,
    NoteFromLineXxyyOnTrack0 = 40,
    RandomNoteFromLineXxToYyOnTrack0 = 41,
    StopPlaying = 48,
    JumpToLineXxyy = 49,
    SetJumpAddressMode = 50,
    DeleteEventOnTrackXxWithProbabilityYy = 56,
    CyclicShiftTrackDownByYyLines = 57,
    GenerateNewIterationOfYyLinePolyrhythmOnTrackXx = 58,
    CopyTrackXxToPatternNamedYy = 59,
    DelayEventFor0x00PercentLOfLine = 64,
    DelayEventFor0x01PercentLOfLine = 65,
    DelayEventFor0x02PercentLOfLine = 66,
    DelayEventFor0x03PercentLOfLine = 67,
    DelayEventFor0x04PercentLOfLine = 68,
    DelayEventFor0x05PercentLOfLine = 69,
    DelayEventFor0x06PercentLOfLine = 70,
    DelayEventFor0x07PercentLOfLine = 71,
    DelayEventFor0x08PercentLOfLine = 72,
    DelayEventFor0x09PercentLOfLine = 73,
    DelayEventFor0x0aPercentLOfLine = 74,
    DelayEventFor0x0bPercentLOfLine = 75,
    DelayEventFor0x0cPercentLOfLine = 76,
    DelayEventFor0x0dPercentLOfLine = 77,
    DelayEventFor0x0ePercentLOfLine = 78,
    DelayEventFor0x0fPercentLOfLine = 79,
    DelayEventFor0x10PercentLOfLine = 80,
    DelayEventFor0x11PercentLOfLine = 81,
    DelayEventFor0x12PercentLOfLine = 82,
    DelayEventFor0x13PercentLOfLine = 83,
    DelayEventFor0x14PercentLOfLine = 84,
    DelayEventFor0x15PercentLOfLine = 85,
    DelayEventFor0x16PercentLOfLine = 86,
    DelayEventFor0x17PercentLOfLine = 87,
    DelayEventFor0x18PercentLOfLine = 88,
    DelayEventFor0x19PercentLOfLine = 89,
    DelayEventFor0x1aPercentLOfLine = 90,
    DelayEventFor0x1bPercentLOfLine = 91,
    DelayEventFor0x1cPercentLOfLine = 92,
    DelayEventFor0x1dPercentLOfLine = 93,
    DelayEventFor0x1ePercentLOfLine = 94,
    DelayEventFor0x1fPercentLOfLine = 95
}
`,
    "file:///node_modules/@types/radiant-voices/effect.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `export { Pattern } from "./pattern";
export { Project } from "./project";
export { Synth } from "./synth";
export { fromIffBuffer } from "./chunks/fromIffBuffer";
export { projectChunks } from "./writer/projectChunks";
export { readSunVoxFile } from "./reader/readSunVoxFile";
export { toIffBuffer } from "./chunks/toIffBuffer";
export { m } from "./modtypes";
export { ModuleBase } from "./modtypes/moduleBase";
export { DrumNote, Note, NoteCmd } from "./note";
export { Effect } from "./effect";
`,
    "file:///node_modules/@types/radiant-voices/index.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `export declare type SunVoxVersion = [number, number, number, number];
`,
    "file:///node_modules/@types/radiant-voices/sunVoxVersion.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { Chunk } from "../chunks/chunk";
import { SunVoxContainer } from "../containers";
export declare function readSunVoxFile(chunks: Generator<Chunk>): SunVoxContainer;
`,
    "file:///node_modules/@types/radiant-voices/reader/readSunVoxFile.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { Chunk } from "../chunks/chunk";
import { ModuleBase } from "../modtypes/moduleBase";
export declare function readModule(index: number | undefined, chunks: Generator<Chunk>, chunk: Chunk): ModuleBase;
`,
    "file:///node_modules/@types/radiant-voices/reader/readModule.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { Chunk } from "../chunks/chunk";
import { Project } from "../project";
export declare function readProject(chunks: Generator<Chunk>): Project;
`,
    "file:///node_modules/@types/radiant-voices/reader/readProject.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { Chunk } from "../chunks/chunk";
import { Synth } from "../synth";
export declare function readSynth(chunks: Generator<Chunk>): Synth;
`,
    "file:///node_modules/@types/radiant-voices/reader/readSynth.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { Chunk } from "../chunks/chunk";
import { PatternClone } from "../pattern";
export declare function readPatternClone(index: number | null, chunks: Generator<Chunk>, chunk: Chunk): PatternClone;
`,
    "file:///node_modules/@types/radiant-voices/reader/readPatternClone.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { Chunk } from "../chunks/chunk";
import { Pattern } from "../pattern";
export declare function readPattern(index: number | null, chunks: Generator<Chunk>, chunk: Chunk): Pattern;
`,
    "file:///node_modules/@types/radiant-voices/reader/readPattern.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `declare const _default: "utf8";
export default _default;
`,
    "file:///node_modules/@types/radiant-voices/chunks/encoding.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import DataStream from "datastream-js";
import { Chunk } from "./chunk";
export declare function toIffBuffer(chunks: Iterable<Chunk>): DataStream;
`,
    "file:///node_modules/@types/radiant-voices/chunks/toIffBuffer.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { Color } from "../color";
import { Event } from "../pattern";
import { SunVoxVersion } from "../sunVoxVersion";
import { MidiMap } from "../controllerMidiMap";
export interface BytesChunk {
    name: string;
    type: "bytes";
    value: Uint8Array;
}
export interface ColorChunk {
    name: string;
    type: "color";
    value: Color;
}
export interface CStringChunk {
    name: string;
    type: "cstring";
    value: string;
}
export interface EmptyChunk {
    name: string;
    type: "empty";
}
export interface EventsChunk {
    name: string;
    type: "events";
    values: Event[];
}
export interface FixedStringChunk {
    name: string;
    type: "fixedString";
    value: string;
}
export interface Int32Chunk {
    name: string;
    type: "int32";
    value: number;
}
export interface LinksChunk {
    name: string;
    type: "links";
    values: number[];
}
export interface MidiMapsChunk {
    name: string;
    type: "midiMaps";
    values: MidiMap[];
}
export interface RawChunk {
    name: string;
    type: "raw";
    raw: Uint8Array;
}
export interface VersionChunk {
    name: string;
    type: "version";
    value: SunVoxVersion;
}
export interface Uint32Chunk {
    name: string;
    type: "uint32";
    value: number;
}
export declare type Chunk = BytesChunk | ColorChunk | CStringChunk | EmptyChunk | EventsChunk | FixedStringChunk | Int32Chunk | LinksChunk | MidiMapsChunk | RawChunk | VersionChunk | Uint32Chunk;
`,
    "file:///node_modules/@types/radiant-voices/chunks/chunk.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import DataStream from "datastream-js";
import { Chunk } from "./chunk";
export declare function fromIffBuffer(buffer: ArrayBuffer | DataStream, { raw }?: {
    raw?: boolean | undefined;
}): Generator<Chunk>;
`,
    "file:///node_modules/@types/radiant-voices/chunks/fromIffBuffer.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `export declare const chunkTypes: Record<string, string>;
`,
    "file:///node_modules/@types/radiant-voices/chunks/chunkTypes.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { ModuleBase } from "../modtypes/moduleBase";
import { Chunk } from "../chunks/chunk";
export declare function moduleChunks(module: ModuleBase): Generator<Chunk>;
`,
    "file:///node_modules/@types/radiant-voices/writer/moduleChunks.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { Project } from "../project";
import { Chunk } from "../chunks/chunk";
import { ModuleBase } from "../modtypes/moduleBase";
import { Synth } from "../synth";
export declare function objectChunks(obj?: ModuleBase | Project | Synth): Generator<Chunk>;
`,
    "file:///node_modules/@types/radiant-voices/writer/objectChunks.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { PatternBase } from "../pattern";
import { Chunk } from "../chunks/chunk";
export declare function patternChunks(pattern: PatternBase): Generator<Chunk>;
`,
    "file:///node_modules/@types/radiant-voices/writer/patternChunks.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { Project } from "../project";
import { Chunk } from "../chunks/chunk";
export declare function projectChunks(project: Project): Generator<Chunk>;
`,
    "file:///node_modules/@types/radiant-voices/writer/projectChunks.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { Chunk } from "../chunks/chunk";
import { Synth } from "../synth";
export default function synthChunks(synth: Synth): Generator<Chunk>;
`,
    "file:///node_modules/@types/radiant-voices/writer/synthChunks.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    ``,
    "file:///node_modules/@types/radiant-voices/writer/index.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
export declare enum Type {
    Amplitude = 0,
    Panning = 1
}
export declare enum Waveform {
    Sin = 0,
    Square = 1,
    Sin2 = 2,
    Saw = 3,
    Saw2 = 4,
    Random = 5,
    Triangle = 6,
    RandomInterpolated = 7
}
export declare enum Channels {
    Stereo = 0,
    Mono = 1
}
export declare enum FrequencyUnit {
    Hz_64 = 0,
    Ms = 1,
    Hz = 2,
    Tick = 3,
    Line = 4,
    Line_2 = 5,
    Line_3 = 6
}
export declare enum SmoothTransitions {
    Off = 0,
    Waveform = 1
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/lfoEnums.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { Controllers, ModuleType } from "./moduleType";
import { VorbisPlayerControllerValues } from "./vorbisPlayerControllerValues";
export declare class VorbisPlayerBaseControllers implements Controllers {
    readonly module: ModuleType;
    readonly controllerValues: VorbisPlayerControllerValues;
    constructor(module: ModuleType, controllerValues: VorbisPlayerControllerValues);
    get volume(): number;
    set volume(newValue: number);
    get originalSpeed(): boolean;
    set originalSpeed(newValue: boolean);
    get finetune(): number;
    set finetune(newValue: number);
    get transpose(): number;
    set transpose(newValue: number);
    get interpolation(): boolean;
    set interpolation(newValue: boolean);
    get polyphonyCh(): number;
    set polyphonyCh(newValue: number);
    get repeat(): boolean;
    set repeat(newValue: boolean);
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/vorbisPlayerBaseControllers.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { ControllerValues } from "./moduleType";
import { Channels } from "./eqEnums";
export interface EqControllerValues extends ControllerValues {
    low: number;
    middle: number;
    high: number;
    channels: Channels;
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/eqControllerValues.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { MidiMap, ControllerMidiMap, ControllerMidiMaps } from "../controllerMidiMap";
import { Project } from "../project";
import { ModuleBase } from "./moduleBase";
import { ModuleType, OptionValues, Options } from "./moduleType";
import { LoopBehavior } from "./loopBehavior";
import { LoopControllers } from "./loopControllers";
import { LoopControllerValues } from "./loopControllerValues";
export declare namespace Loop {
    export enum Channels {
        Mono = 0,
        Stereo = 1
    }
    export enum Mode {
        Normal = 0,
        PingPong = 1
    }
    export enum CtlNum {
        Volume = 1,
        Delay = 2,
        Channels = 3,
        Repeats = 4,
        Mode = 5
    }
    interface LoopControllerMidiMaps extends ControllerMidiMaps {
        volume: ControllerMidiMap;
        delay: ControllerMidiMap;
        channels: ControllerMidiMap;
        repeats: ControllerMidiMap;
        mode: ControllerMidiMap;
    }
    interface LoopOptionValues extends OptionValues {
    }
    class LoopOptions implements Options {
        readonly optionValues: LoopOptionValues;
        constructor(optionValues: LoopOptionValues);
    }
    export class Module extends ModuleBase implements ModuleType {
        name: string;
        flags: number;
        readonly typeName = "Loop";
        readonly controllerSetters: ((val: number) => void)[];
        readonly controllerValues: LoopControllerValues;
        readonly controllers: LoopControllers;
        readonly c: LoopControllers;
        readonly midiMaps: LoopControllerMidiMaps;
        readonly optionValues: LoopOptionValues;
        readonly options: LoopOptions;
        readonly o: LoopOptions;
        behavior?: LoopBehavior;
        constructor();
        attachTo(project: Project): AttachedModule;
        setRawControllerValue(ctlNum: number, value: number): void;
        rawControllerValues(): Generator<number>;
        setMidiMaps(midiMaps: MidiMap[]): void;
        midiMapsArray(): MidiMap[];
    }
    export class AttachedModule extends Module {
        get index(): number;
        set index(_: number);
    }
    export {};
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/loop.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
export declare enum Channels {
    Stereo = 0,
    Mono = 1
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/eqEnums.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { ControllerValues } from "./moduleType";
import { Channels } from "./echoEnums";
import { DelayUnit } from "./echoEnums";
export interface EchoControllerValues extends ControllerValues {
    dry: number;
    wet: number;
    feedback: number;
    delay: number;
    channels: Channels;
    delayUnit: DelayUnit;
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/echoControllerValues.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { ControllerValues } from "./moduleType";
import { VoiceType } from "./vocalFilterEnums";
import { Channels } from "./vocalFilterEnums";
export interface VocalFilterControllerValues extends ControllerValues {
    volume: number;
    formantWidthHz: number;
    intensity: number;
    formants: number;
    vowel: number;
    voiceType: VoiceType;
    channels: Channels;
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/vocalFilterControllerValues.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { Sound2CtlBaseControllers } from "./sound2CtlBaseControllers";
export declare class Sound2CtlControllers extends Sound2CtlBaseControllers {
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/sound2CtlControllers.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { MidiMap, ControllerMidiMap, ControllerMidiMaps } from "../controllerMidiMap";
import { Project } from "../project";
import { ModuleBase } from "./moduleBase";
import { ModuleType, OptionValues, Options } from "./moduleType";
import { GeneratorBehavior } from "./generatorBehavior";
import { GeneratorControllers } from "./generatorControllers";
import { GeneratorControllerValues } from "./generatorControllerValues";
export declare namespace Generator {
    export enum Waveform {
        Triangle = 0,
        Saw = 1,
        Square = 2,
        Noise = 3,
        Drawn = 4,
        Sin = 5,
        Hsin = 6,
        Asin = 7,
        Psin = 8
    }
    export enum Mode {
        Stereo = 0,
        Mono = 1
    }
    export enum CtlNum {
        Volume = 1,
        Waveform = 2,
        Panning = 3,
        Attack = 4,
        Release = 5,
        PolyphonyCh = 6,
        Mode = 7,
        Sustain = 8,
        FreqModulationByInput = 9,
        DutyCycle = 10
    }
    interface GeneratorControllerMidiMaps extends ControllerMidiMaps {
        volume: ControllerMidiMap;
        waveform: ControllerMidiMap;
        panning: ControllerMidiMap;
        attack: ControllerMidiMap;
        release: ControllerMidiMap;
        polyphonyCh: ControllerMidiMap;
        mode: ControllerMidiMap;
        sustain: ControllerMidiMap;
        freqModulationByInput: ControllerMidiMap;
        dutyCycle: ControllerMidiMap;
    }
    interface GeneratorOptionValues extends OptionValues {
    }
    class GeneratorOptions implements Options {
        readonly optionValues: GeneratorOptionValues;
        constructor(optionValues: GeneratorOptionValues);
    }
    export class Module extends ModuleBase implements ModuleType {
        name: string;
        flags: number;
        readonly typeName = "Generator";
        readonly controllerSetters: ((val: number) => void)[];
        readonly controllerValues: GeneratorControllerValues;
        readonly controllers: GeneratorControllers;
        readonly c: GeneratorControllers;
        readonly midiMaps: GeneratorControllerMidiMaps;
        readonly optionValues: GeneratorOptionValues;
        readonly options: GeneratorOptions;
        readonly o: GeneratorOptions;
        behavior?: GeneratorBehavior;
        constructor();
        attachTo(project: Project): AttachedModule;
        setRawControllerValue(ctlNum: number, value: number): void;
        rawControllerValues(): Generator<number>;
        setMidiMaps(midiMaps: MidiMap[]): void;
        midiMapsArray(): MidiMap[];
    }
    export class AttachedModule extends Module {
        get index(): number;
        set index(_: number);
    }
    export {};
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/generator.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { EqBaseControllers } from "./eqBaseControllers";
export declare class EqControllers extends EqBaseControllers {
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/eqControllers.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { GpioBaseControllers } from "./gpioBaseControllers";
export declare class GpioControllers extends GpioBaseControllers {
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/gpioControllers.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { ControllerValues } from "./moduleType";
import { Channels } from "./loopEnums";
import { Mode } from "./loopEnums";
export interface LoopControllerValues extends ControllerValues {
    volume: number;
    delay: number;
    channels: Channels;
    repeats: number;
    mode: Mode;
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/loopControllerValues.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { ModuleSpecificBehavior } from "./moduleSpecificBehavior";
export declare class VibratoBehavior extends ModuleSpecificBehavior {
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/vibratoBehavior.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { ModuleDataChunks } from "../moduleDataChunk";
import { MidiMap, ControllerMidiMap, ControllerMidiMaps } from "../controllerMidiMap";
import { Project } from "../project";
import { ModuleBase } from "./moduleBase";
import { ModuleType, OptionValues, Options } from "./moduleType";
import { MetaModuleBehavior } from "./metaModuleBehavior";
import { MetaModuleControllers } from "./metaModuleControllers";
import { MetaModuleControllerValues } from "./metaModuleControllerValues";
export declare namespace MetaModule {
    export enum PlayPatterns {
        Off = 0,
        On = 1,
        OnNoRepeat = 2
    }
    export enum CtlNum {
        Volume = 1,
        InputModule = 2,
        PlayPatterns = 3,
        Bpm = 4,
        Tpl = 5
    }
    interface MetaModuleControllerMidiMaps extends ControllerMidiMaps {
        volume: ControllerMidiMap;
        inputModule: ControllerMidiMap;
        playPatterns: ControllerMidiMap;
        bpm: ControllerMidiMap;
        tpl: ControllerMidiMap;
    }
    interface MetaModuleOptionValues extends OptionValues {
        userDefinedControllers: number;
        arpeggiator: boolean;
        applyVelocityToProject: boolean;
        eventOutput: boolean;
        receiveNotesFromKeyboard: boolean;
        doNotReceiveNotesFromKeyboard: boolean;
    }
    class MetaModuleOptions implements Options {
        readonly optionValues: MetaModuleOptionValues;
        constructor(optionValues: MetaModuleOptionValues);
        get userDefinedControllers(): number;
        set userDefinedControllers(newValue: number);
        get arpeggiator(): boolean;
        set arpeggiator(newValue: boolean);
        get applyVelocityToProject(): boolean;
        set applyVelocityToProject(newValue: boolean);
        get eventOutput(): boolean;
        set eventOutput(newValue: boolean);
        get receiveNotesFromKeyboard(): boolean;
        set receiveNotesFromKeyboard(newValue: boolean);
        get doNotReceiveNotesFromKeyboard(): boolean;
        set doNotReceiveNotesFromKeyboard(newValue: boolean);
    }
    export class Module extends ModuleBase implements ModuleType {
        name: string;
        flags: number;
        readonly typeName = "MetaModule";
        readonly optionsChnm = 2;
        readonly controllerSetters: ((val: number) => void)[];
        readonly controllerValues: MetaModuleControllerValues;
        readonly controllers: MetaModuleControllers;
        readonly c: MetaModuleControllers;
        readonly midiMaps: MetaModuleControllerMidiMaps;
        readonly optionValues: MetaModuleOptionValues;
        readonly options: MetaModuleOptions;
        readonly o: MetaModuleOptions;
        behavior?: MetaModuleBehavior;
        constructor();
        attachTo(project: Project): AttachedModule;
        setRawControllerValue(ctlNum: number, value: number): void;
        rawControllerValues(): Generator<number>;
        setMidiMaps(midiMaps: MidiMap[]): void;
        midiMapsArray(): MidiMap[];
        rawOptionBytes(): Uint8Array;
        setOptions(dataChunks: ModuleDataChunks): void;
    }
    export class AttachedModule extends Module {
        get index(): number;
        set index(_: number);
    }
    export {};
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/metaModule.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
export declare enum Channels {
    Stereo = 0,
    Mono = 1
}
export declare enum DelayUnit {
    Sec_16384 = 0,
    Ms = 1,
    Hz = 2,
    Tick = 3,
    Line = 4,
    Line_2 = 5,
    Line_3 = 6
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/delayEnums.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { VocalFilterBaseControllers } from "./vocalFilterBaseControllers";
export declare class VocalFilterControllers extends VocalFilterBaseControllers {
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/vocalFilterControllers.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
export declare enum Channels {
    Mono = 0,
    Stereo = 1
}
export declare enum Mode {
    Normal = 0,
    PingPong = 1
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/loopEnums.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
export declare enum NoteOn {
    NoTrigger = 0,
    OnPitchChange = 1
}
export declare enum NoteOff {
    NoTrigger = 0,
    OnMinPitch = 1,
    OnMaxPitch = 2
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/ctl2NoteEnums.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { ControllerValues } from "./moduleType";
import { Mode } from "./spectraVoiceEnums";
import { HarmonicType } from "./spectraVoiceEnums";
export interface SpectraVoiceControllerValues extends ControllerValues {
    volume: number;
    panning: number;
    attack: number;
    release: number;
    polyphonyCh: number;
    mode: Mode;
    sustain: boolean;
    spectrumResolution: number;
    harmonic: number;
    hFreqHz: number;
    hVolume: number;
    hWidth: number;
    hType: HarmonicType;
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/spectraVoiceControllerValues.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { VibratoBaseControllers } from "./vibratoBaseControllers";
export declare class VibratoControllers extends VibratoBaseControllers {
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/vibratoControllers.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { Controllers, ModuleType } from "./moduleType";
import { GlideControllerValues } from "./glideControllerValues";
export declare class GlideBaseControllers implements Controllers {
    readonly module: ModuleType;
    readonly controllerValues: GlideControllerValues;
    constructor(module: ModuleType, controllerValues: GlideControllerValues);
    get response(): number;
    set response(newValue: number);
    get sampleRateHz(): number;
    set sampleRateHz(newValue: number);
    get resetOnFirstNote(): boolean;
    set resetOnFirstNote(newValue: boolean);
    get polyphony(): boolean;
    set polyphony(newValue: boolean);
    get pitch(): number;
    set pitch(newValue: number);
    get pitchScale(): number;
    set pitchScale(newValue: number);
    get reset(): boolean;
    set reset(newValue: boolean);
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/glideBaseControllers.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { MultiCtlBaseControllers } from "./multiCtlBaseControllers";
export declare class MultiCtlControllers extends MultiCtlBaseControllers {
    get value(): number;
    set value(newValue: number);
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/multiCtlControllers.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { Controllers, ModuleType } from "./moduleType";
import { FeedbackControllerValues } from "./feedbackControllerValues";
import { Channels } from "./feedbackEnums";
export declare class FeedbackBaseControllers implements Controllers {
    readonly module: ModuleType;
    readonly controllerValues: FeedbackControllerValues;
    constructor(module: ModuleType, controllerValues: FeedbackControllerValues);
    get volume(): number;
    set volume(newValue: number);
    get channels(): Channels;
    set channels(newValue: Channels);
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/feedbackBaseControllers.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { MidiMap, ControllerMidiMap, ControllerMidiMaps } from "../controllerMidiMap";
import { Project } from "../project";
import { ModuleBase } from "./moduleBase";
import { ModuleType, OptionValues, Options } from "./moduleType";
import { FilterBehavior } from "./filterBehavior";
import { FilterControllers } from "./filterControllers";
import { FilterControllerValues } from "./filterControllerValues";
export declare namespace Filter {
    export enum Type {
        Lp = 0,
        Hp = 1,
        Bp = 2,
        Notch = 3
    }
    export enum Mode {
        Hq = 0,
        HqMono = 1,
        Lq = 2,
        LqMono = 3
    }
    export enum RollOff {
        Db_12 = 0,
        Db_24 = 1,
        Db_36 = 2,
        Db_48 = 3
    }
    export enum LfoFreqUnit {
        Hz_0_02 = 0,
        Ms = 1,
        Hz = 2,
        Tick = 3,
        Line = 4,
        Line_2 = 5,
        Line_3 = 6
    }
    export enum LfoWaveform {
        Sin = 0,
        Saw = 1,
        Saw2 = 2,
        Square = 3,
        Random = 4
    }
    export enum CtlNum {
        Volume = 1,
        Freq = 2,
        Resonance = 3,
        Type = 4,
        Response = 5,
        Mode = 6,
        Impulse = 7,
        Mix = 8,
        LfoFreq = 9,
        LfoAmp = 10,
        SetLfoPhase = 11,
        ExponentialFreq = 12,
        RollOff = 13,
        LfoFreqUnit = 14,
        LfoWaveform = 15
    }
    interface FilterControllerMidiMaps extends ControllerMidiMaps {
        volume: ControllerMidiMap;
        freq: ControllerMidiMap;
        resonance: ControllerMidiMap;
        type: ControllerMidiMap;
        response: ControllerMidiMap;
        mode: ControllerMidiMap;
        impulse: ControllerMidiMap;
        mix: ControllerMidiMap;
        lfoFreq: ControllerMidiMap;
        lfoAmp: ControllerMidiMap;
        setLfoPhase: ControllerMidiMap;
        exponentialFreq: ControllerMidiMap;
        rollOff: ControllerMidiMap;
        lfoFreqUnit: ControllerMidiMap;
        lfoWaveform: ControllerMidiMap;
    }
    interface FilterOptionValues extends OptionValues {
    }
    class FilterOptions implements Options {
        readonly optionValues: FilterOptionValues;
        constructor(optionValues: FilterOptionValues);
    }
    export class Module extends ModuleBase implements ModuleType {
        name: string;
        flags: number;
        readonly typeName = "Filter";
        readonly controllerSetters: ((val: number) => void)[];
        readonly controllerValues: FilterControllerValues;
        readonly controllers: FilterControllers;
        readonly c: FilterControllers;
        readonly midiMaps: FilterControllerMidiMaps;
        readonly optionValues: FilterOptionValues;
        readonly options: FilterOptions;
        readonly o: FilterOptions;
        behavior?: FilterBehavior;
        constructor();
        attachTo(project: Project): AttachedModule;
        setRawControllerValue(ctlNum: number, value: number): void;
        rawControllerValues(): Generator<number>;
        setMidiMaps(midiMaps: MidiMap[]): void;
        midiMapsArray(): MidiMap[];
    }
    export class AttachedModule extends Module {
        get index(): number;
        set index(_: number);
    }
    export {};
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/filter.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { ModuleSpecificBehavior } from "./moduleSpecificBehavior";
export declare class GpioBehavior extends ModuleSpecificBehavior {
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/gpioBehavior.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { ControllerValues } from "./moduleType";
import { Mode } from "./reverbEnums";
export interface ReverbControllerValues extends ControllerValues {
    dry: number;
    wet: number;
    feedback: number;
    damp: number;
    stereoWidth: number;
    freeze: boolean;
    mode: Mode;
    allPassFilter: boolean;
    roomSize: number;
    randomSeed: number;
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/reverbControllerValues.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { WaveShaperBaseControllers } from "./waveShaperBaseControllers";
export declare class WaveShaperControllers extends WaveShaperBaseControllers {
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/waveShaperControllers.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { MidiMap, ControllerMidiMap, ControllerMidiMaps } from "../controllerMidiMap";
import { Project } from "../project";
import { ModuleBase } from "./moduleBase";
import { ModuleType, OptionValues, Options } from "./moduleType";
import { FilterProBehavior } from "./filterProBehavior";
import { FilterProControllers } from "./filterProControllers";
import { FilterProControllerValues } from "./filterProControllerValues";
export declare namespace FilterPro {
    export enum Type {
        Lp = 0,
        Hp = 1,
        BpConstSkirtGain = 2,
        BpConstPeakGain = 3,
        Notch = 4,
        AllPass = 5,
        Peaking = 6,
        LowShelf = 7,
        HighShelf = 8
    }
    export enum RollOff {
        Db_12 = 0,
        Db_24 = 1,
        Db_36 = 2,
        Db_48 = 3
    }
    export enum Mode {
        Stereo = 0,
        Mono = 1
    }
    export enum LfoWaveform {
        Sin = 0,
        Saw = 1,
        Saw2 = 2,
        Square = 3,
        Random = 4
    }
    export enum LfoFreqUnit {
        Hz_0_02 = 0,
        Ms = 1,
        Hz = 2,
        Tick = 3,
        Line = 4,
        Line_2 = 5,
        Line_3 = 6
    }
    export enum CtlNum {
        Volume = 1,
        Type = 2,
        FreqHz = 3,
        FreqFinetune = 4,
        FreqScale = 5,
        ExponentialFreq = 6,
        Q = 7,
        Gain = 8,
        RollOff = 9,
        Response = 10,
        Mode = 11,
        Mix = 12,
        LfoFreq = 13,
        LfoAmp = 14,
        LfoWaveform = 15,
        SetLfoPhase = 16,
        LfoFreqUnit = 17
    }
    interface FilterProControllerMidiMaps extends ControllerMidiMaps {
        volume: ControllerMidiMap;
        type: ControllerMidiMap;
        freqHz: ControllerMidiMap;
        freqFinetune: ControllerMidiMap;
        freqScale: ControllerMidiMap;
        exponentialFreq: ControllerMidiMap;
        q: ControllerMidiMap;
        gain: ControllerMidiMap;
        rollOff: ControllerMidiMap;
        response: ControllerMidiMap;
        mode: ControllerMidiMap;
        mix: ControllerMidiMap;
        lfoFreq: ControllerMidiMap;
        lfoAmp: ControllerMidiMap;
        lfoWaveform: ControllerMidiMap;
        setLfoPhase: ControllerMidiMap;
        lfoFreqUnit: ControllerMidiMap;
    }
    interface FilterProOptionValues extends OptionValues {
    }
    class FilterProOptions implements Options {
        readonly optionValues: FilterProOptionValues;
        constructor(optionValues: FilterProOptionValues);
    }
    export class Module extends ModuleBase implements ModuleType {
        name: string;
        flags: number;
        readonly typeName = "Filter Pro";
        readonly controllerSetters: ((val: number) => void)[];
        readonly controllerValues: FilterProControllerValues;
        readonly controllers: FilterProControllers;
        readonly c: FilterProControllers;
        readonly midiMaps: FilterProControllerMidiMaps;
        readonly optionValues: FilterProOptionValues;
        readonly options: FilterProOptions;
        readonly o: FilterProOptions;
        behavior?: FilterProBehavior;
        constructor();
        attachTo(project: Project): AttachedModule;
        setRawControllerValue(ctlNum: number, value: number): void;
        rawControllerValues(): Generator<number>;
        setMidiMaps(midiMaps: MidiMap[]): void;
        midiMapsArray(): MidiMap[];
    }
    export class AttachedModule extends Module {
        get index(): number;
        set index(_: number);
    }
    export {};
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/filterPro.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
export declare enum Channels {
    Mono = 0,
    Stereo = 1
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/inputEnums.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { LoopBaseControllers } from "./loopBaseControllers";
export declare class LoopControllers extends LoopBaseControllers {
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/loopControllers.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { Controllers, ModuleType } from "./moduleType";
import { GpioControllerValues } from "./gpioControllerValues";
export declare class GpioBaseControllers implements Controllers {
    readonly module: ModuleType;
    readonly controllerValues: GpioControllerValues;
    constructor(module: ModuleType, controllerValues: GpioControllerValues);
    get out(): boolean;
    set out(newValue: boolean);
    get outPin(): number;
    set outPin(newValue: number);
    get outThreshold(): number;
    set outThreshold(newValue: number);
    get in(): boolean;
    set in(newValue: boolean);
    get inPin(): number;
    set inPin(newValue: number);
    get inNote(): number;
    set inNote(newValue: number);
    get inAmplitude(): number;
    set inAmplitude(newValue: number);
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/gpioBaseControllers.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { ModuleSpecificBehavior } from "./moduleSpecificBehavior";
import { ModuleDataChunks } from "@radiant-voices/moduleDataChunk";
import { Chunk } from "@radiant-voices/chunks/chunk";
export declare class GeneratorBehavior extends ModuleSpecificBehavior {
    drawnWaveform: Int8Array;
    chnk(): number;
    processDataChunks(dataChunks: ModuleDataChunks): void;
    private processDrawnWaveformChunk;
    typeSpecificChunks(): Generator<Chunk>;
}
export declare const defaultDrawnWaveform: Int8Array;
`,
    "file:///node_modules/@types/radiant-voices/modtypes/generatorBehavior.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { MidiMap, ControllerMidiMap, ControllerMidiMaps } from "../controllerMidiMap";
import { Project } from "../project";
import { ModuleBase } from "./moduleBase";
import { ModuleType, OptionValues, Options } from "./moduleType";
import { WaveShaperBehavior } from "./waveShaperBehavior";
import { WaveShaperControllers } from "./waveShaperControllers";
import { WaveShaperControllerValues } from "./waveShaperControllerValues";
export declare namespace WaveShaper {
    export enum Mode {
        Hq = 0,
        HqMono = 1,
        Lq = 2,
        LqMono = 3
    }
    export enum CtlNum {
        InputVolume = 1,
        Mix = 2,
        OutputVolume = 3,
        Symmetric = 4,
        Mode = 5,
        DcBlocker = 6
    }
    interface WaveShaperControllerMidiMaps extends ControllerMidiMaps {
        inputVolume: ControllerMidiMap;
        mix: ControllerMidiMap;
        outputVolume: ControllerMidiMap;
        symmetric: ControllerMidiMap;
        mode: ControllerMidiMap;
        dcBlocker: ControllerMidiMap;
    }
    interface WaveShaperOptionValues extends OptionValues {
    }
    class WaveShaperOptions implements Options {
        readonly optionValues: WaveShaperOptionValues;
        constructor(optionValues: WaveShaperOptionValues);
    }
    export class Module extends ModuleBase implements ModuleType {
        name: string;
        flags: number;
        readonly typeName = "WaveShaper";
        readonly controllerSetters: ((val: number) => void)[];
        readonly controllerValues: WaveShaperControllerValues;
        readonly controllers: WaveShaperControllers;
        readonly c: WaveShaperControllers;
        readonly midiMaps: WaveShaperControllerMidiMaps;
        readonly optionValues: WaveShaperOptionValues;
        readonly options: WaveShaperOptions;
        readonly o: WaveShaperOptions;
        behavior?: WaveShaperBehavior;
        constructor();
        attachTo(project: Project): AttachedModule;
        setRawControllerValue(ctlNum: number, value: number): void;
        rawControllerValues(): Generator<number>;
        setMidiMaps(midiMaps: MidiMap[]): void;
        midiMapsArray(): MidiMap[];
    }
    export class AttachedModule extends Module {
        get index(): number;
        set index(_: number);
    }
    export {};
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/waveShaper.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { ModuleConstructor } from "./moduleBase";
import { Adsr } from "./adsr";
import { Amplifier } from "./amplifier";
import { AnalogGenerator } from "./analogGenerator";
import { Ctl2Note } from "./ctl2Note";
import { Compressor } from "./compressor";
import { DcBlocker } from "./dcBlocker";
import { Delay } from "./delay";
import { Distortion } from "./distortion";
import { DrumSynth } from "./drumSynth";
import { Echo } from "./echo";
import { Eq } from "./eq";
import { Feedback } from "./feedback";
import { Filter } from "./filter";
import { FilterPro } from "./filterPro";
import { Flanger } from "./flanger";
import { Fm } from "./fm";
import { Generator } from "./generator";
import { Glide } from "./glide";
import { Gpio } from "./gpio";
import { Input } from "./input";
import { Kicker } from "./kicker";
import { Lfo } from "./lfo";
import { Loop } from "./loop";
import { MetaModule } from "./metaModule";
import { Modulator } from "./modulator";
import { MultiCtl } from "./multiCtl";
import { MultiSynth } from "./multiSynth";
import { Output } from "./output";
import { Pitch2Ctl } from "./pitch2Ctl";
import { PitchDetector } from "./pitchDetector";
import { PitchShifter } from "./pitchShifter";
import { Reverb } from "./reverb";
import { Sampler } from "./sampler";
import { Sound2Ctl } from "./sound2Ctl";
import { SpectraVoice } from "./spectraVoice";
import { Velocity2Ctl } from "./velocity2Ctl";
import { Vibrato } from "./vibrato";
import { VocalFilter } from "./vocalFilter";
import { VorbisPlayer } from "./vorbisPlayer";
import { WaveShaper } from "./waveShaper";
export { Adsr };
export { Amplifier };
export { AnalogGenerator };
export { Ctl2Note };
export { Compressor };
export { DcBlocker };
export { Delay };
export { Distortion };
export { DrumSynth };
export { Echo };
export { Eq };
export { Feedback };
export { Filter };
export { FilterPro };
export { Flanger };
export { Fm };
export { Generator };
export { Glide };
export { Gpio };
export { Input };
export { Kicker };
export { Lfo };
export { Loop };
export { MetaModule };
export { Modulator };
export { MultiCtl };
export { MultiSynth };
export { Output };
export { Pitch2Ctl };
export { PitchDetector };
export { PitchShifter };
export { Reverb };
export { Sampler };
export { Sound2Ctl };
export { SpectraVoice };
export { Velocity2Ctl };
export { Vibrato };
export { VocalFilter };
export { VorbisPlayer };
export { WaveShaper };
export declare const adsr: () => Adsr.Module;
export declare const amplifier: () => Amplifier.Module;
export declare const analogGenerator: () => AnalogGenerator.Module;
export declare const ctl2Note: () => Ctl2Note.Module;
export declare const compressor: () => Compressor.Module;
export declare const dcBlocker: () => DcBlocker.Module;
export declare const delay: () => Delay.Module;
export declare const distortion: () => Distortion.Module;
export declare const drumSynth: () => DrumSynth.Module;
export declare const echo: () => Echo.Module;
export declare const eq: () => Eq.Module;
export declare const feedback: () => Feedback.Module;
export declare const filter: () => Filter.Module;
export declare const filterPro: () => FilterPro.Module;
export declare const flanger: () => Flanger.Module;
export declare const fm: () => Fm.Module;
export declare const generator: () => Generator.Module;
export declare const glide: () => Glide.Module;
export declare const gpio: () => Gpio.Module;
export declare const input: () => Input.Module;
export declare const kicker: () => Kicker.Module;
export declare const lfo: () => Lfo.Module;
export declare const loop: () => Loop.Module;
export declare const metaModule: () => MetaModule.Module;
export declare const modulator: () => Modulator.Module;
export declare const multiCtl: () => MultiCtl.Module;
export declare const multiSynth: () => MultiSynth.Module;
export declare const output: () => Output.Module;
export declare const pitch2Ctl: () => Pitch2Ctl.Module;
export declare const pitchDetector: () => PitchDetector.Module;
export declare const pitchShifter: () => PitchShifter.Module;
export declare const reverb: () => Reverb.Module;
export declare const sampler: () => Sampler.Module;
export declare const sound2Ctl: () => Sound2Ctl.Module;
export declare const spectraVoice: () => SpectraVoice.Module;
export declare const velocity2Ctl: () => Velocity2Ctl.Module;
export declare const vibrato: () => Vibrato.Module;
export declare const vocalFilter: () => VocalFilter.Module;
export declare const vorbisPlayer: () => VorbisPlayer.Module;
export declare const waveShaper: () => WaveShaper.Module;
export declare const moduleTypesByName: Record<string, ModuleConstructor>;
`,
    "file:///node_modules/@types/radiant-voices/modtypes/m.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { ModuleSpecificBehavior } from "./moduleSpecificBehavior";
import { ModuleDataChunks } from "@radiant-voices/moduleDataChunk";
import { Chunk } from "@radiant-voices/chunks/chunk";
export declare class MultiSynthBehavior extends ModuleSpecificBehavior {
    noteVelocityCurve: Uint8Array;
    velocityVelocityCurve: Uint8Array;
    notePitchCurve: Uint16Array;
    chnk(): number;
    processDataChunks(dataChunks: ModuleDataChunks): void;
    private processNoteVelocityCurveChunk;
    private processVelocityVelocityCurveChunk;
    private processNotePitchCurveChunk;
    typeSpecificChunks(): Generator<Chunk>;
}
export declare const defaultNoteVelocityCurve: Uint8Array;
export declare const defaultVelocityVelocityCurve: Uint8Array;
export declare const defaultNotePitchCurve: Uint16Array;
`,
    "file:///node_modules/@types/radiant-voices/modtypes/multiSynthBehavior.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
export declare enum Waveform {
    Triangle = 0,
    Square = 1,
    Sin = 2
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/kickerEnums.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { MidiMap, ControllerMidiMap, ControllerMidiMaps } from "../controllerMidiMap";
import { Project } from "../project";
import { ModuleBase } from "./moduleBase";
import { ModuleType, OptionValues, Options } from "./moduleType";
import { EqBehavior } from "./eqBehavior";
import { EqControllers } from "./eqControllers";
import { EqControllerValues } from "./eqControllerValues";
export declare namespace Eq {
    export enum Channels {
        Stereo = 0,
        Mono = 1
    }
    export enum CtlNum {
        Low = 1,
        Middle = 2,
        High = 3,
        Channels = 4
    }
    interface EqControllerMidiMaps extends ControllerMidiMaps {
        low: ControllerMidiMap;
        middle: ControllerMidiMap;
        high: ControllerMidiMap;
        channels: ControllerMidiMap;
    }
    interface EqOptionValues extends OptionValues {
    }
    class EqOptions implements Options {
        readonly optionValues: EqOptionValues;
        constructor(optionValues: EqOptionValues);
    }
    export class Module extends ModuleBase implements ModuleType {
        name: string;
        flags: number;
        readonly typeName = "EQ";
        readonly controllerSetters: ((val: number) => void)[];
        readonly controllerValues: EqControllerValues;
        readonly controllers: EqControllers;
        readonly c: EqControllers;
        readonly midiMaps: EqControllerMidiMaps;
        readonly optionValues: EqOptionValues;
        readonly options: EqOptions;
        readonly o: EqOptions;
        behavior?: EqBehavior;
        constructor();
        attachTo(project: Project): AttachedModule;
        setRawControllerValue(ctlNum: number, value: number): void;
        rawControllerValues(): Generator<number>;
        setMidiMaps(midiMaps: MidiMap[]): void;
        midiMapsArray(): MidiMap[];
    }
    export class AttachedModule extends Module {
        get index(): number;
        set index(_: number);
    }
    export {};
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/eq.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { MidiMap, ControllerMidiMap, ControllerMidiMaps } from "../controllerMidiMap";
import { Project } from "../project";
import { ModuleBase } from "./moduleBase";
import { ModuleType, OptionValues, Options } from "./moduleType";
import { ReverbBehavior } from "./reverbBehavior";
import { ReverbControllers } from "./reverbControllers";
import { ReverbControllerValues } from "./reverbControllerValues";
export declare namespace Reverb {
    export enum Mode {
        Hq = 0,
        HqMono = 1,
        Lq = 2,
        LqMono = 3
    }
    export enum CtlNum {
        Dry = 1,
        Wet = 2,
        Feedback = 3,
        Damp = 4,
        StereoWidth = 5,
        Freeze = 6,
        Mode = 7,
        AllPassFilter = 8,
        RoomSize = 9,
        RandomSeed = 10
    }
    interface ReverbControllerMidiMaps extends ControllerMidiMaps {
        dry: ControllerMidiMap;
        wet: ControllerMidiMap;
        feedback: ControllerMidiMap;
        damp: ControllerMidiMap;
        stereoWidth: ControllerMidiMap;
        freeze: ControllerMidiMap;
        mode: ControllerMidiMap;
        allPassFilter: ControllerMidiMap;
        roomSize: ControllerMidiMap;
        randomSeed: ControllerMidiMap;
    }
    interface ReverbOptionValues extends OptionValues {
    }
    class ReverbOptions implements Options {
        readonly optionValues: ReverbOptionValues;
        constructor(optionValues: ReverbOptionValues);
    }
    export class Module extends ModuleBase implements ModuleType {
        name: string;
        flags: number;
        readonly typeName = "Reverb";
        readonly controllerSetters: ((val: number) => void)[];
        readonly controllerValues: ReverbControllerValues;
        readonly controllers: ReverbControllers;
        readonly c: ReverbControllers;
        readonly midiMaps: ReverbControllerMidiMaps;
        readonly optionValues: ReverbOptionValues;
        readonly options: ReverbOptions;
        readonly o: ReverbOptions;
        behavior?: ReverbBehavior;
        constructor();
        attachTo(project: Project): AttachedModule;
        setRawControllerValue(ctlNum: number, value: number): void;
        rawControllerValues(): Generator<number>;
        setMidiMaps(midiMaps: MidiMap[]): void;
        midiMapsArray(): MidiMap[];
    }
    export class AttachedModule extends Module {
        get index(): number;
        set index(_: number);
    }
    export {};
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/reverb.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { ModuleSpecificBehavior } from "./moduleSpecificBehavior";
export declare class GlideBehavior extends ModuleSpecificBehavior {
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/glideBehavior.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { ControllerValues } from "./moduleType";
import { Mode } from "./analogGeneratorEnums";
import { Waveform } from "./analogGeneratorEnums";
import { Filter } from "./analogGeneratorEnums";
import { FilterEnvelope } from "./analogGeneratorEnums";
export interface AnalogGeneratorControllerValues extends ControllerValues {
    volume: number;
    waveform: Waveform;
    panning: number;
    attack: number;
    release: number;
    sustain: boolean;
    exponentialEnvelope: boolean;
    dutyCycle: number;
    freq2: number;
    filter: Filter;
    fFreqHz: number;
    fResonance: number;
    fExponentialFreq: boolean;
    fAttack: number;
    fRelease: number;
    fEnvelope: FilterEnvelope;
    polyphonyCh: number;
    mode: Mode;
    noise: number;
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/analogGeneratorControllerValues.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { Controllers, ModuleType } from "./moduleType";
import { VibratoControllerValues } from "./vibratoControllerValues";
import { Channels } from "./vibratoEnums";
import { FrequencyUnit } from "./vibratoEnums";
export declare class VibratoBaseControllers implements Controllers {
    readonly module: ModuleType;
    readonly controllerValues: VibratoControllerValues;
    constructor(module: ModuleType, controllerValues: VibratoControllerValues);
    get volume(): number;
    set volume(newValue: number);
    get amplitude(): number;
    set amplitude(newValue: number);
    get freq(): number;
    set freq(newValue: number);
    get channels(): Channels;
    set channels(newValue: Channels);
    get setPhase(): number;
    set setPhase(newValue: number);
    get frequencyUnit(): FrequencyUnit;
    set frequencyUnit(newValue: FrequencyUnit);
    get exponentialAmplitude(): boolean;
    set exponentialAmplitude(newValue: boolean);
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/vibratoBaseControllers.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { Controllers, ModuleType } from "./moduleType";
import { EchoControllerValues } from "./echoControllerValues";
import { Channels } from "./echoEnums";
import { DelayUnit } from "./echoEnums";
export declare class EchoBaseControllers implements Controllers {
    readonly module: ModuleType;
    readonly controllerValues: EchoControllerValues;
    constructor(module: ModuleType, controllerValues: EchoControllerValues);
    get dry(): number;
    set dry(newValue: number);
    get wet(): number;
    set wet(newValue: number);
    get feedback(): number;
    set feedback(newValue: number);
    get delay(): number;
    set delay(newValue: number);
    get channels(): Channels;
    set channels(newValue: Channels);
    get delayUnit(): DelayUnit;
    set delayUnit(newValue: DelayUnit);
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/echoBaseControllers.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { ModuleSpecificBehavior } from "./moduleSpecificBehavior";
export declare class Pitch2CtlBehavior extends ModuleSpecificBehavior {
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/pitch2CtlBehavior.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
export declare enum Algorithm {
    ZeroCrossing = 0,
    Autocorrelation = 1,
    Cepstrum = 2
}
export declare enum RollOff {
    Db_12 = 0,
    Db_24 = 1,
    Db_36 = 2,
    Db_48 = 3
}
export declare enum SampleRate {
    Hz_12 = 0,
    Hz_24 = 1,
    Hz_44 = 2
}
export declare enum Buffer {
    Ms_5m = 0,
    Ms_10 = 1,
    Ms_21 = 2,
    Ms_42 = 3,
    Ms_85 = 4
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/pitchDetectorEnums.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { DelayBaseControllers } from "./delayBaseControllers";
export declare class DelayControllers extends DelayBaseControllers {
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/delayControllers.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { ModuleSpecificBehavior } from "./moduleSpecificBehavior";
export declare class ModulatorBehavior extends ModuleSpecificBehavior {
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/modulatorBehavior.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { ControllerValues } from "./moduleType";
import { Mode } from "./fmEnums";
export interface FmControllerValues extends ControllerValues {
    cVolume: number;
    mVolume: number;
    panning: number;
    cFreqRatio: number;
    mFreqRatio: number;
    mFeedback: number;
    cAttack: number;
    cDecay: number;
    cSustain: number;
    cRelease: number;
    mAttack: number;
    mDecay: number;
    mSustain: number;
    mRelease: number;
    mScalingPerKey: number;
    polyphonyCh: number;
    mode: Mode;
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/fmControllerValues.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { MidiMap, ControllerMidiMap, ControllerMidiMaps } from "../controllerMidiMap";
import { Project } from "../project";
import { ModuleBase } from "./moduleBase";
import { ModuleType, OptionValues, Options } from "./moduleType";
import { EchoBehavior } from "./echoBehavior";
import { EchoControllers } from "./echoControllers";
import { EchoControllerValues } from "./echoControllerValues";
export declare namespace Echo {
    export enum Channels {
        Mono = 0,
        Stereo = 1
    }
    export enum DelayUnit {
        Sec_256 = 0,
        Ms = 1,
        Hz = 2,
        Tick = 3,
        Line = 4,
        Line_2 = 5,
        Line_3 = 6
    }
    export enum CtlNum {
        Dry = 1,
        Wet = 2,
        Feedback = 3,
        Delay = 4,
        Channels = 5,
        DelayUnit = 6
    }
    interface EchoControllerMidiMaps extends ControllerMidiMaps {
        dry: ControllerMidiMap;
        wet: ControllerMidiMap;
        feedback: ControllerMidiMap;
        delay: ControllerMidiMap;
        channels: ControllerMidiMap;
        delayUnit: ControllerMidiMap;
    }
    interface EchoOptionValues extends OptionValues {
    }
    class EchoOptions implements Options {
        readonly optionValues: EchoOptionValues;
        constructor(optionValues: EchoOptionValues);
    }
    export class Module extends ModuleBase implements ModuleType {
        name: string;
        flags: number;
        readonly typeName = "Echo";
        readonly controllerSetters: ((val: number) => void)[];
        readonly controllerValues: EchoControllerValues;
        readonly controllers: EchoControllers;
        readonly c: EchoControllers;
        readonly midiMaps: EchoControllerMidiMaps;
        readonly optionValues: EchoOptionValues;
        readonly options: EchoOptions;
        readonly o: EchoOptions;
        behavior?: EchoBehavior;
        constructor();
        attachTo(project: Project): AttachedModule;
        setRawControllerValue(ctlNum: number, value: number): void;
        rawControllerValues(): Generator<number>;
        setMidiMaps(midiMaps: MidiMap[]): void;
        midiMapsArray(): MidiMap[];
    }
    export class AttachedModule extends Module {
        get index(): number;
        set index(_: number);
    }
    export {};
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/echo.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { Controllers, ModuleType } from "./moduleType";
import { DistortionControllerValues } from "./distortionControllerValues";
import { Type } from "./distortionEnums";
export declare class DistortionBaseControllers implements Controllers {
    readonly module: ModuleType;
    readonly controllerValues: DistortionControllerValues;
    constructor(module: ModuleType, controllerValues: DistortionControllerValues);
    get volume(): number;
    set volume(newValue: number);
    get type(): Type;
    set type(newValue: Type);
    get power(): number;
    set power(newValue: number);
    get bitDepth(): number;
    set bitDepth(newValue: number);
    get freqHz(): number;
    set freqHz(newValue: number);
    get noise(): number;
    set noise(newValue: number);
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/distortionBaseControllers.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { ModuleSpecificBehavior } from "./moduleSpecificBehavior";
export declare class DrumSynthBehavior extends ModuleSpecificBehavior {
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/drumSynthBehavior.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { MidiMap, ControllerMidiMap, ControllerMidiMaps } from "../controllerMidiMap";
import { Project } from "../project";
import { ModuleBase } from "./moduleBase";
import { ModuleType, OptionValues, Options } from "./moduleType";
import { GlideBehavior } from "./glideBehavior";
import { GlideControllers } from "./glideControllers";
import { GlideControllerValues } from "./glideControllerValues";
export declare namespace Glide {
    export enum CtlNum {
        Response = 1,
        SampleRateHz = 2,
        ResetOnFirstNote = 3,
        Polyphony = 4,
        Pitch = 5,
        PitchScale = 6,
        Reset = 7
    }
    interface GlideControllerMidiMaps extends ControllerMidiMaps {
        response: ControllerMidiMap;
        sampleRateHz: ControllerMidiMap;
        resetOnFirstNote: ControllerMidiMap;
        polyphony: ControllerMidiMap;
        pitch: ControllerMidiMap;
        pitchScale: ControllerMidiMap;
        reset: ControllerMidiMap;
    }
    interface GlideOptionValues extends OptionValues {
    }
    class GlideOptions implements Options {
        readonly optionValues: GlideOptionValues;
        constructor(optionValues: GlideOptionValues);
    }
    export class Module extends ModuleBase implements ModuleType {
        name: string;
        flags: number;
        readonly typeName = "Glide";
        readonly controllerSetters: ((val: number) => void)[];
        readonly controllerValues: GlideControllerValues;
        readonly controllers: GlideControllers;
        readonly c: GlideControllers;
        readonly midiMaps: GlideControllerMidiMaps;
        readonly optionValues: GlideOptionValues;
        readonly options: GlideOptions;
        readonly o: GlideOptions;
        behavior?: GlideBehavior;
        constructor();
        attachTo(project: Project): AttachedModule;
        setRawControllerValue(ctlNum: number, value: number): void;
        rawControllerValues(): Generator<number>;
        setMidiMaps(midiMaps: MidiMap[]): void;
        midiMapsArray(): MidiMap[];
    }
    export class AttachedModule extends Module {
        get index(): number;
        set index(_: number);
    }
    export {};
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/glide.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { ModuleSpecificBehavior } from "./moduleSpecificBehavior";
export declare class EqBehavior extends ModuleSpecificBehavior {
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/eqBehavior.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
export declare enum Channels {
    Mono = 0,
    Stereo = 1
}
export declare enum Mode {
    Lq = 0,
    Hq = 1
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/sound2CtlEnums.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { ControllerValues } from "./moduleType";
import { NoteOffAction } from "./velocity2CtlEnums";
export interface Velocity2CtlControllerValues extends ControllerValues {
    noteOffAction: NoteOffAction;
    outMin: number;
    outMax: number;
    outOffset: number;
    outController: number;
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/velocity2CtlControllerValues.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { ModuleSpecificBehavior } from "./moduleSpecificBehavior";
export declare class KickerBehavior extends ModuleSpecificBehavior {
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/kickerBehavior.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { GeneratorBaseControllers } from "./generatorBaseControllers";
export declare class GeneratorControllers extends GeneratorBaseControllers {
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/generatorControllers.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { ModuleSpecificBehavior } from "./moduleSpecificBehavior";
export declare class Sound2CtlBehavior extends ModuleSpecificBehavior {
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/sound2CtlBehavior.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { ModuleSpecificBehavior } from "./moduleSpecificBehavior";
export declare class LfoBehavior extends ModuleSpecificBehavior {
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/lfoBehavior.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { ModuleSpecificBehavior } from "./moduleSpecificBehavior";
import { ModuleDataChunks } from "@radiant-voices/moduleDataChunk";
import { Chunk } from "@radiant-voices/chunks/chunk";
export declare class WaveShaperBehavior extends ModuleSpecificBehavior {
    curve: Uint16Array;
    chnk(): number;
    processDataChunks(dataChunks: ModuleDataChunks): void;
    private processCurveChunk;
    typeSpecificChunks(): Generator<Chunk>;
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/waveShaperBehavior.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
export declare enum Mode {
    Hq = 0,
    HqMono = 1,
    Lq = 2,
    LqMono = 3
}
export declare enum BypassIfPitchEq0 {
    Off = 0,
    SlowTransition = 1,
    FastTransition = 2
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/pitchShifterEnums.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { Controllers, ModuleType } from "./moduleType";
import { AmplifierControllerValues } from "./amplifierControllerValues";
export declare class AmplifierBaseControllers implements Controllers {
    readonly module: ModuleType;
    readonly controllerValues: AmplifierControllerValues;
    constructor(module: ModuleType, controllerValues: AmplifierControllerValues);
    get volume(): number;
    set volume(newValue: number);
    get balance(): number;
    set balance(newValue: number);
    get dcOffset(): number;
    set dcOffset(newValue: number);
    get inverse(): boolean;
    set inverse(newValue: boolean);
    get stereoWidth(): number;
    set stereoWidth(newValue: number);
    get absolute(): boolean;
    set absolute(newValue: boolean);
    get fineVolume(): number;
    set fineVolume(newValue: number);
    get gain(): number;
    set gain(newValue: number);
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/amplifierBaseControllers.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { ControllerValues } from "./moduleType";
import { Algorithm } from "./pitchDetectorEnums";
import { RollOff } from "./pitchDetectorEnums";
import { SampleRate } from "./pitchDetectorEnums";
import { Buffer } from "./pitchDetectorEnums";
export interface PitchDetectorControllerValues extends ControllerValues {
    algorithm: Algorithm;
    threshold: number;
    gain: number;
    microtones: boolean;
    detectorFinetune: number;
    lpFilterFreqHz: number;
    lpFilterRolloff: RollOff;
    alg_1_2SampleRate: SampleRate;
    alg_1_2Buffer: Buffer;
    alg_1_2BufferOverlapPct: number;
    alg_1Sensitivity: number;
    recordNotes: boolean;
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/pitchDetectorControllerValues.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
export declare enum ActiveCurve {
    NoteVelocity = 0,
    VelocityVelocity = 1,
    NotePitch = 2
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/multiSynthEnums.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { ControllerValues } from "./moduleType";
import { Type } from "./distortionEnums";
export interface DistortionControllerValues extends ControllerValues {
    volume: number;
    type: Type;
    power: number;
    bitDepth: number;
    freqHz: number;
    noise: number;
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/distortionControllerValues.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
export declare enum Mode {
    Hq = 0,
    HqMono = 1,
    Lq = 2,
    LqMono = 3,
    HqSpline = 4
}
export declare enum HarmonicType {
    Hsin = 0,
    Rect = 1,
    Org1 = 2,
    Org2 = 3,
    Org3 = 4,
    Org4 = 5,
    Sin = 6,
    Random = 7,
    Triangle1 = 8,
    Triangle2 = 9,
    Overtones1 = 10,
    Overtones2 = 11,
    Overtones3 = 12,
    Overtones4 = 13,
    Overtones1Plus = 14,
    Overtones2Plus = 15,
    Overtones3Plus = 16,
    Overtones4Plus = 17,
    Metal = 18
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/spectraVoiceEnums.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { ControllerValues } from "./moduleType";
import { Mode } from "./compressorEnums";
export interface CompressorControllerValues extends ControllerValues {
    volume: number;
    threshold: number;
    slopePct: number;
    attackMs: number;
    releaseMs: number;
    mode: Mode;
    sidechainInput: number;
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/compressorControllerValues.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
export declare enum Mode {
    Peak = 0,
    Rms = 1,
    PeakZeroLatency = 2
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/compressorEnums.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { ModuleSpecificBehavior } from "./moduleSpecificBehavior";
import { SpectraVoice } from "./spectraVoice";
import { Chunk } from "@radiant-voices/chunks/chunk";
import { ModuleDataChunks } from "@radiant-voices/moduleDataChunk";
export declare class SpectraVoiceBehavior extends ModuleSpecificBehavior {
    harmonicFrequencies: Uint16Array;
    harmonicVolumes: Uint8Array;
    harmonicWidths: Uint8Array;
    harmonicTypes: SpectraVoice.HarmonicType[];
    chnk(): number;
    processDataChunks(dataChunks: ModuleDataChunks): void;
    private processHarmonicFrequenciesChunk;
    private processHarmonicVolumesChunk;
    private processHarmonicWidthsChunk;
    private processHarmonicTypesChunk;
    typeSpecificChunks(): Generator<Chunk>;
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/spectraVoiceBehavior.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { ModuleSpecificBehavior } from "./moduleSpecificBehavior";
export declare class OutputBehavior extends ModuleSpecificBehavior {
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/outputBehavior.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { ModuleDataChunks } from "../moduleDataChunk";
import { MidiMap, ControllerMidiMap, ControllerMidiMaps } from "../controllerMidiMap";
import { Project } from "../project";
import { ModuleBase } from "./moduleBase";
import { ModuleType, OptionValues, Options } from "./moduleType";
import { Sound2CtlBehavior } from "./sound2CtlBehavior";
import { Sound2CtlControllers } from "./sound2CtlControllers";
import { Sound2CtlControllerValues } from "./sound2CtlControllerValues";
export declare namespace Sound2Ctl {
    export enum Channels {
        Mono = 0,
        Stereo = 1
    }
    export enum Mode {
        Lq = 0,
        Hq = 1
    }
    export enum CtlNum {
        SampleRateHz = 1,
        Channels = 2,
        Absolute = 3,
        Gain = 4,
        Smooth = 5,
        Mode = 6,
        OutMin = 7,
        OutMax = 8,
        OutController = 9
    }
    interface Sound2CtlControllerMidiMaps extends ControllerMidiMaps {
        sampleRateHz: ControllerMidiMap;
        channels: ControllerMidiMap;
        absolute: ControllerMidiMap;
        gain: ControllerMidiMap;
        smooth: ControllerMidiMap;
        mode: ControllerMidiMap;
        outMin: ControllerMidiMap;
        outMax: ControllerMidiMap;
        outController: ControllerMidiMap;
    }
    interface Sound2CtlOptionValues extends OptionValues {
        recordValues: boolean;
        sendOnlyChangedValues: boolean;
    }
    class Sound2CtlOptions implements Options {
        readonly optionValues: Sound2CtlOptionValues;
        constructor(optionValues: Sound2CtlOptionValues);
        get recordValues(): boolean;
        set recordValues(newValue: boolean);
        get sendOnlyChangedValues(): boolean;
        set sendOnlyChangedValues(newValue: boolean);
    }
    export class Module extends ModuleBase implements ModuleType {
        name: string;
        flags: number;
        readonly typeName = "Sound2Ctl";
        readonly optionsChnm = 0;
        readonly controllerSetters: ((val: number) => void)[];
        readonly controllerValues: Sound2CtlControllerValues;
        readonly controllers: Sound2CtlControllers;
        readonly c: Sound2CtlControllers;
        readonly midiMaps: Sound2CtlControllerMidiMaps;
        readonly optionValues: Sound2CtlOptionValues;
        readonly options: Sound2CtlOptions;
        readonly o: Sound2CtlOptions;
        behavior?: Sound2CtlBehavior;
        constructor();
        attachTo(project: Project): AttachedModule;
        setRawControllerValue(ctlNum: number, value: number): void;
        rawControllerValues(): Generator<number>;
        setMidiMaps(midiMaps: MidiMap[]): void;
        midiMapsArray(): MidiMap[];
        rawOptionBytes(): Uint8Array;
        setOptions(dataChunks: ModuleDataChunks): void;
    }
    export class AttachedModule extends Module {
        get index(): number;
        set index(_: number);
    }
    export {};
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/sound2Ctl.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { Controllers, ModuleType } from "./moduleType";
import { FlangerControllerValues } from "./flangerControllerValues";
import { LfoWaveform } from "./flangerEnums";
import { LfoFreqUnit } from "./flangerEnums";
export declare class FlangerBaseControllers implements Controllers {
    readonly module: ModuleType;
    readonly controllerValues: FlangerControllerValues;
    constructor(module: ModuleType, controllerValues: FlangerControllerValues);
    get dry(): number;
    set dry(newValue: number);
    get wet(): number;
    set wet(newValue: number);
    get feedback(): number;
    set feedback(newValue: number);
    get delay(): number;
    set delay(newValue: number);
    get response(): number;
    set response(newValue: number);
    get lfoFreq(): number;
    set lfoFreq(newValue: number);
    get lfoAmp(): number;
    set lfoAmp(newValue: number);
    get lfoWaveform(): LfoWaveform;
    set lfoWaveform(newValue: LfoWaveform);
    get setLfoPhase(): number;
    set setLfoPhase(newValue: number);
    get lfoFreqUnit(): LfoFreqUnit;
    set lfoFreqUnit(newValue: LfoFreqUnit);
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/flangerBaseControllers.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { MidiMap, ControllerMidiMap, ControllerMidiMaps } from "../controllerMidiMap";
import { Project } from "../project";
import { ModuleBase } from "./moduleBase";
import { ModuleType, OptionValues, Options } from "./moduleType";
import { Velocity2CtlBehavior } from "./velocity2CtlBehavior";
import { Velocity2CtlControllers } from "./velocity2CtlControllers";
import { Velocity2CtlControllerValues } from "./velocity2CtlControllerValues";
export declare namespace Velocity2Ctl {
    export enum NoteOffAction {
        DoNothing = 0,
        VelDown = 1,
        VelUp = 2
    }
    export enum CtlNum {
        NoteOffAction = 1,
        OutMin = 2,
        OutMax = 3,
        OutOffset = 4,
        OutController = 5
    }
    interface Velocity2CtlControllerMidiMaps extends ControllerMidiMaps {
        noteOffAction: ControllerMidiMap;
        outMin: ControllerMidiMap;
        outMax: ControllerMidiMap;
        outOffset: ControllerMidiMap;
        outController: ControllerMidiMap;
    }
    interface Velocity2CtlOptionValues extends OptionValues {
    }
    class Velocity2CtlOptions implements Options {
        readonly optionValues: Velocity2CtlOptionValues;
        constructor(optionValues: Velocity2CtlOptionValues);
    }
    export class Module extends ModuleBase implements ModuleType {
        name: string;
        flags: number;
        readonly typeName = "Velocity2Ctl";
        readonly controllerSetters: ((val: number) => void)[];
        readonly controllerValues: Velocity2CtlControllerValues;
        readonly controllers: Velocity2CtlControllers;
        readonly c: Velocity2CtlControllers;
        readonly midiMaps: Velocity2CtlControllerMidiMaps;
        readonly optionValues: Velocity2CtlOptionValues;
        readonly options: Velocity2CtlOptions;
        readonly o: Velocity2CtlOptions;
        behavior?: Velocity2CtlBehavior;
        constructor();
        attachTo(project: Project): AttachedModule;
        setRawControllerValue(ctlNum: number, value: number): void;
        rawControllerValues(): Generator<number>;
        setMidiMaps(midiMaps: MidiMap[]): void;
        midiMapsArray(): MidiMap[];
    }
    export class AttachedModule extends Module {
        get index(): number;
        set index(_: number);
    }
    export {};
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/velocity2Ctl.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { ControllerValues } from "./moduleType";
import { Waveform } from "./kickerEnums";
export interface KickerControllerValues extends ControllerValues {
    volume: number;
    waveform: Waveform;
    panning: number;
    attack: number;
    release: number;
    boost: number;
    acceleration: number;
    polyphonyCh: number;
    noClick: boolean;
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/kickerControllerValues.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { AnalogGeneratorBaseControllers } from "./analogGeneratorBaseControllers";
export declare class AnalogGeneratorControllers extends AnalogGeneratorBaseControllers {
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/analogGeneratorControllers.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { Controllers, ModuleType } from "./moduleType";
import { CompressorControllerValues } from "./compressorControllerValues";
import { Mode } from "./compressorEnums";
export declare class CompressorBaseControllers implements Controllers {
    readonly module: ModuleType;
    readonly controllerValues: CompressorControllerValues;
    constructor(module: ModuleType, controllerValues: CompressorControllerValues);
    get volume(): number;
    set volume(newValue: number);
    get threshold(): number;
    set threshold(newValue: number);
    get slopePct(): number;
    set slopePct(newValue: number);
    get attackMs(): number;
    set attackMs(newValue: number);
    get releaseMs(): number;
    set releaseMs(newValue: number);
    get mode(): Mode;
    set mode(newValue: Mode);
    get sidechainInput(): number;
    set sidechainInput(newValue: number);
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/compressorBaseControllers.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { Pitch2CtlBaseControllers } from "./pitch2CtlBaseControllers";
export declare class Pitch2CtlControllers extends Pitch2CtlBaseControllers {
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/pitch2CtlControllers.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { MidiMap, ControllerMidiMap, ControllerMidiMaps } from "../controllerMidiMap";
import { Project } from "../project";
import { ModuleBase } from "./moduleBase";
import { ModuleType, OptionValues, Options } from "./moduleType";
import { LfoBehavior } from "./lfoBehavior";
import { LfoControllers } from "./lfoControllers";
import { LfoControllerValues } from "./lfoControllerValues";
export declare namespace Lfo {
    export enum Type {
        Amplitude = 0,
        Panning = 1
    }
    export enum Waveform {
        Sin = 0,
        Square = 1,
        Sin2 = 2,
        Saw = 3,
        Saw2 = 4,
        Random = 5,
        Triangle = 6,
        RandomInterpolated = 7
    }
    export enum Channels {
        Stereo = 0,
        Mono = 1
    }
    export enum FrequencyUnit {
        Hz_64 = 0,
        Ms = 1,
        Hz = 2,
        Tick = 3,
        Line = 4,
        Line_2 = 5,
        Line_3 = 6
    }
    export enum SmoothTransitions {
        Off = 0,
        Waveform = 1
    }
    export enum CtlNum {
        Volume = 1,
        Type = 2,
        Amplitude = 3,
        Freq = 4,
        Waveform = 5,
        SetPhase = 6,
        Channels = 7,
        FrequencyUnit = 8,
        DutyCycle = 9,
        Generator = 10,
        FreqScalePct = 11,
        SmoothTransitions = 12
    }
    interface LfoControllerMidiMaps extends ControllerMidiMaps {
        volume: ControllerMidiMap;
        type: ControllerMidiMap;
        amplitude: ControllerMidiMap;
        freq: ControllerMidiMap;
        waveform: ControllerMidiMap;
        setPhase: ControllerMidiMap;
        channels: ControllerMidiMap;
        frequencyUnit: ControllerMidiMap;
        dutyCycle: ControllerMidiMap;
        generator: ControllerMidiMap;
        freqScalePct: ControllerMidiMap;
        smoothTransitions: ControllerMidiMap;
    }
    interface LfoOptionValues extends OptionValues {
    }
    class LfoOptions implements Options {
        readonly optionValues: LfoOptionValues;
        constructor(optionValues: LfoOptionValues);
    }
    export class Module extends ModuleBase implements ModuleType {
        name: string;
        flags: number;
        readonly typeName = "LFO";
        readonly controllerSetters: ((val: number) => void)[];
        readonly controllerValues: LfoControllerValues;
        readonly controllers: LfoControllers;
        readonly c: LfoControllers;
        readonly midiMaps: LfoControllerMidiMaps;
        readonly optionValues: LfoOptionValues;
        readonly options: LfoOptions;
        readonly o: LfoOptions;
        behavior?: LfoBehavior;
        constructor();
        attachTo(project: Project): AttachedModule;
        setRawControllerValue(ctlNum: number, value: number): void;
        rawControllerValues(): Generator<number>;
        setMidiMaps(midiMaps: MidiMap[]): void;
        midiMapsArray(): MidiMap[];
    }
    export class AttachedModule extends Module {
        get index(): number;
        set index(_: number);
    }
    export {};
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/lfo.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { ModuleSpecificBehavior } from "./moduleSpecificBehavior";
export declare class DcBlockerBehavior extends ModuleSpecificBehavior {
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/dcBlockerBehavior.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { MidiMap, ControllerMidiMap, ControllerMidiMaps } from "../controllerMidiMap";
import { Project } from "../project";
import { ModuleBase } from "./moduleBase";
import { ModuleType, OptionValues, Options } from "./moduleType";
import { Ctl2NoteBehavior } from "./ctl2NoteBehavior";
import { Ctl2NoteControllers } from "./ctl2NoteControllers";
import { Ctl2NoteControllerValues } from "./ctl2NoteControllerValues";
export declare namespace Ctl2Note {
    export enum NoteOn {
        NoTrigger = 0,
        OnPitchChange = 1
    }
    export enum NoteOff {
        NoTrigger = 0,
        OnMinPitch = 1,
        OnMaxPitch = 2
    }
    export enum CtlNum {
        Pitch = 1,
        FirstNote = 2,
        RangeSemitones = 3,
        Transpose = 4,
        Finetune = 5,
        Velocity = 6,
        State = 7,
        NoteOn = 8,
        NoteOff = 9,
        RecordNotes = 10
    }
    interface Ctl2NoteControllerMidiMaps extends ControllerMidiMaps {
        pitch: ControllerMidiMap;
        firstNote: ControllerMidiMap;
        rangeSemitones: ControllerMidiMap;
        transpose: ControllerMidiMap;
        finetune: ControllerMidiMap;
        velocity: ControllerMidiMap;
        state: ControllerMidiMap;
        noteOn: ControllerMidiMap;
        noteOff: ControllerMidiMap;
        recordNotes: ControllerMidiMap;
    }
    interface Ctl2NoteOptionValues extends OptionValues {
    }
    class Ctl2NoteOptions implements Options {
        readonly optionValues: Ctl2NoteOptionValues;
        constructor(optionValues: Ctl2NoteOptionValues);
    }
    export class Module extends ModuleBase implements ModuleType {
        name: string;
        flags: number;
        readonly typeName = "Ctl2Note";
        readonly controllerSetters: ((val: number) => void)[];
        readonly controllerValues: Ctl2NoteControllerValues;
        readonly controllers: Ctl2NoteControllers;
        readonly c: Ctl2NoteControllers;
        readonly midiMaps: Ctl2NoteControllerMidiMaps;
        readonly optionValues: Ctl2NoteOptionValues;
        readonly options: Ctl2NoteOptions;
        readonly o: Ctl2NoteOptions;
        behavior?: Ctl2NoteBehavior;
        constructor();
        attachTo(project: Project): AttachedModule;
        setRawControllerValue(ctlNum: number, value: number): void;
        rawControllerValues(): Generator<number>;
        setMidiMaps(midiMaps: MidiMap[]): void;
        midiMapsArray(): MidiMap[];
    }
    export class AttachedModule extends Module {
        get index(): number;
        set index(_: number);
    }
    export {};
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/ctl2Note.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { PitchShifterBaseControllers } from "./pitchShifterBaseControllers";
export declare class PitchShifterControllers extends PitchShifterBaseControllers {
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/pitchShifterControllers.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { Controllers, ModuleType } from "./moduleType";
import { PitchShifterControllerValues } from "./pitchShifterControllerValues";
import { Mode } from "./pitchShifterEnums";
import { BypassIfPitchEq0 } from "./pitchShifterEnums";
export declare class PitchShifterBaseControllers implements Controllers {
    readonly module: ModuleType;
    readonly controllerValues: PitchShifterControllerValues;
    constructor(module: ModuleType, controllerValues: PitchShifterControllerValues);
    get volume(): number;
    set volume(newValue: number);
    get pitch(): number;
    set pitch(newValue: number);
    get pitchScale(): number;
    set pitchScale(newValue: number);
    get feedback(): number;
    set feedback(newValue: number);
    get grainSize(): number;
    set grainSize(newValue: number);
    get mode(): Mode;
    set mode(newValue: Mode);
    get bypassIfPitchEq_0(): BypassIfPitchEq0;
    set bypassIfPitchEq_0(newValue: BypassIfPitchEq0);
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/pitchShifterBaseControllers.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { ModuleSpecificBehavior } from "./moduleSpecificBehavior";
export declare class PitchShifterBehavior extends ModuleSpecificBehavior {
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/pitchShifterBehavior.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { ModuleSpecificBehavior } from "./moduleSpecificBehavior";
export declare class AmplifierBehavior extends ModuleSpecificBehavior {
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/amplifierBehavior.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { MidiMap, ControllerMidiMap, ControllerMidiMaps } from "../controllerMidiMap";
import { Project } from "../project";
import { ModuleBase } from "./moduleBase";
import { ModuleType, OptionValues, Options } from "./moduleType";
import { InputBehavior } from "./inputBehavior";
import { InputControllers } from "./inputControllers";
import { InputControllerValues } from "./inputControllerValues";
export declare namespace Input {
    export enum Channels {
        Mono = 0,
        Stereo = 1
    }
    export enum CtlNum {
        Volume = 1,
        Channels = 2
    }
    interface InputControllerMidiMaps extends ControllerMidiMaps {
        volume: ControllerMidiMap;
        channels: ControllerMidiMap;
    }
    interface InputOptionValues extends OptionValues {
    }
    class InputOptions implements Options {
        readonly optionValues: InputOptionValues;
        constructor(optionValues: InputOptionValues);
    }
    export class Module extends ModuleBase implements ModuleType {
        name: string;
        flags: number;
        readonly typeName = "Input";
        readonly controllerSetters: ((val: number) => void)[];
        readonly controllerValues: InputControllerValues;
        readonly controllers: InputControllers;
        readonly c: InputControllers;
        readonly midiMaps: InputControllerMidiMaps;
        readonly optionValues: InputOptionValues;
        readonly options: InputOptions;
        readonly o: InputOptions;
        behavior?: InputBehavior;
        constructor();
        attachTo(project: Project): AttachedModule;
        setRawControllerValue(ctlNum: number, value: number): void;
        rawControllerValues(): Generator<number>;
        setMidiMaps(midiMaps: MidiMap[]): void;
        midiMapsArray(): MidiMap[];
    }
    export class AttachedModule extends Module {
        get index(): number;
        set index(_: number);
    }
    export {};
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/input.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { SamplerBaseControllers } from "./samplerBaseControllers";
export declare class SamplerControllers extends SamplerBaseControllers {
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/samplerControllers.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { EchoBaseControllers } from "./echoBaseControllers";
export declare class EchoControllers extends EchoBaseControllers {
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/echoControllers.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { ModuleSpecificBehavior } from "./moduleSpecificBehavior";
export declare class Velocity2CtlBehavior extends ModuleSpecificBehavior {
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/velocity2CtlBehavior.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { ReverbBaseControllers } from "./reverbBaseControllers";
export declare class ReverbControllers extends ReverbBaseControllers {
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/reverbControllers.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
export declare enum Mode {
    FrequencyHz = 0,
    Pitch = 1
}
export declare enum NoteOffAction {
    DoNothing = 0,
    PitchDown = 1,
    PitchUp = 2
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/pitch2CtlEnums.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { Controllers, ModuleType } from "./moduleType";
import { LfoControllerValues } from "./lfoControllerValues";
import { Type } from "./lfoEnums";
import { Waveform } from "./lfoEnums";
import { Channels } from "./lfoEnums";
import { FrequencyUnit } from "./lfoEnums";
import { SmoothTransitions } from "./lfoEnums";
export declare class LfoBaseControllers implements Controllers {
    readonly module: ModuleType;
    readonly controllerValues: LfoControllerValues;
    constructor(module: ModuleType, controllerValues: LfoControllerValues);
    get volume(): number;
    set volume(newValue: number);
    get type(): Type;
    set type(newValue: Type);
    get amplitude(): number;
    set amplitude(newValue: number);
    get freq(): number;
    set freq(newValue: number);
    get waveform(): Waveform;
    set waveform(newValue: Waveform);
    get setPhase(): number;
    set setPhase(newValue: number);
    get channels(): Channels;
    set channels(newValue: Channels);
    get frequencyUnit(): FrequencyUnit;
    set frequencyUnit(newValue: FrequencyUnit);
    get dutyCycle(): number;
    set dutyCycle(newValue: number);
    get generator(): boolean;
    set generator(newValue: boolean);
    get freqScalePct(): number;
    set freqScalePct(newValue: number);
    get smoothTransitions(): SmoothTransitions;
    set smoothTransitions(newValue: SmoothTransitions);
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/lfoBaseControllers.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
export declare enum Mode {
    Hq = 0,
    HqMono = 1,
    Lq = 2,
    LqMono = 3
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/fmEnums.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { Controllers, ModuleType } from "./moduleType";
import { WaveShaperControllerValues } from "./waveShaperControllerValues";
import { Mode } from "./waveShaperEnums";
export declare class WaveShaperBaseControllers implements Controllers {
    readonly module: ModuleType;
    readonly controllerValues: WaveShaperControllerValues;
    constructor(module: ModuleType, controllerValues: WaveShaperControllerValues);
    get inputVolume(): number;
    set inputVolume(newValue: number);
    get mix(): number;
    set mix(newValue: number);
    get outputVolume(): number;
    set outputVolume(newValue: number);
    get symmetric(): boolean;
    set symmetric(newValue: boolean);
    get mode(): Mode;
    set mode(newValue: Mode);
    get dcBlocker(): boolean;
    set dcBlocker(newValue: boolean);
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/waveShaperBaseControllers.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { ControllerValues } from "./moduleType";
import { PlayPatterns } from "./metaModuleEnums";
export interface MetaModuleControllerValues extends ControllerValues {
    volume: number;
    inputModule: number;
    playPatterns: PlayPatterns;
    bpm: number;
    tpl: number;
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/metaModuleControllerValues.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
export declare enum Channels {
    Stereo = 0,
    Mono = 1
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/feedbackEnums.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { Project } from "../project";
import { ModuleBase } from "./moduleBase";
import { ModuleType, OptionValues, Options } from "./moduleType";
import { OutputBehavior } from "./outputBehavior";
import { OutputControllers } from "./outputControllers";
import { OutputControllerValues } from "./outputControllerValues";
export declare namespace Output {
    interface OutputOptionValues extends OptionValues {
    }
    class OutputOptions implements Options {
        readonly optionValues: OutputOptionValues;
        constructor(optionValues: OutputOptionValues);
    }
    export class Module extends ModuleBase implements ModuleType {
        name: string;
        flags: number;
        readonly typeName = "Output";
        readonly controllerSetters: never[];
        readonly controllerValues: OutputControllerValues;
        readonly controllers: OutputControllers;
        readonly c: OutputControllers;
        readonly optionValues: OutputOptionValues;
        readonly options: OutputOptions;
        readonly o: OutputOptions;
        behavior?: OutputBehavior;
        constructor();
        attachTo(project: Project): AttachedModule;
    }
    export class AttachedModule extends Module {
        get index(): number;
        set index(_: number);
    }
    export {};
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/output.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { ModuleSpecificBehavior } from "./moduleSpecificBehavior";
export declare class FilterBehavior extends ModuleSpecificBehavior {
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/filterBehavior.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { Controllers, ModuleType } from "./moduleType";
import { FmControllerValues } from "./fmControllerValues";
import { Mode } from "./fmEnums";
export declare class FmBaseControllers implements Controllers {
    readonly module: ModuleType;
    readonly controllerValues: FmControllerValues;
    constructor(module: ModuleType, controllerValues: FmControllerValues);
    get cVolume(): number;
    set cVolume(newValue: number);
    get mVolume(): number;
    set mVolume(newValue: number);
    get panning(): number;
    set panning(newValue: number);
    get cFreqRatio(): number;
    set cFreqRatio(newValue: number);
    get mFreqRatio(): number;
    set mFreqRatio(newValue: number);
    get mFeedback(): number;
    set mFeedback(newValue: number);
    get cAttack(): number;
    set cAttack(newValue: number);
    get cDecay(): number;
    set cDecay(newValue: number);
    get cSustain(): number;
    set cSustain(newValue: number);
    get cRelease(): number;
    set cRelease(newValue: number);
    get mAttack(): number;
    set mAttack(newValue: number);
    get mDecay(): number;
    set mDecay(newValue: number);
    get mSustain(): number;
    set mSustain(newValue: number);
    get mRelease(): number;
    set mRelease(newValue: number);
    get mScalingPerKey(): number;
    set mScalingPerKey(newValue: number);
    get polyphonyCh(): number;
    set polyphonyCh(newValue: number);
    get mode(): Mode;
    set mode(newValue: Mode);
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/fmBaseControllers.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { MidiMap, ControllerMidiMap, ControllerMidiMaps } from "../controllerMidiMap";
import { Project } from "../project";
import { ModuleBase } from "./moduleBase";
import { ModuleType, OptionValues, Options } from "./moduleType";
import { PitchDetectorBehavior } from "./pitchDetectorBehavior";
import { PitchDetectorControllers } from "./pitchDetectorControllers";
import { PitchDetectorControllerValues } from "./pitchDetectorControllerValues";
export declare namespace PitchDetector {
    export enum Algorithm {
        ZeroCrossing = 0,
        Autocorrelation = 1,
        Cepstrum = 2
    }
    export enum RollOff {
        Db_12 = 0,
        Db_24 = 1,
        Db_36 = 2,
        Db_48 = 3
    }
    export enum SampleRate {
        Hz_12 = 0,
        Hz_24 = 1,
        Hz_44 = 2
    }
    export enum Buffer {
        Ms_5m = 0,
        Ms_10 = 1,
        Ms_21 = 2,
        Ms_42 = 3,
        Ms_85 = 4
    }
    export enum CtlNum {
        Algorithm = 1,
        Threshold = 2,
        Gain = 3,
        Microtones = 4,
        DetectorFinetune = 5,
        LpFilterFreqHz = 6,
        LpFilterRolloff = 7,
        Alg_1_2SampleRate = 8,
        Alg_1_2Buffer = 9,
        Alg_1_2BufferOverlapPct = 10,
        Alg_1Sensitivity = 11,
        RecordNotes = 12
    }
    interface PitchDetectorControllerMidiMaps extends ControllerMidiMaps {
        algorithm: ControllerMidiMap;
        threshold: ControllerMidiMap;
        gain: ControllerMidiMap;
        microtones: ControllerMidiMap;
        detectorFinetune: ControllerMidiMap;
        lpFilterFreqHz: ControllerMidiMap;
        lpFilterRolloff: ControllerMidiMap;
        alg_1_2SampleRate: ControllerMidiMap;
        alg_1_2Buffer: ControllerMidiMap;
        alg_1_2BufferOverlapPct: ControllerMidiMap;
        alg_1Sensitivity: ControllerMidiMap;
        recordNotes: ControllerMidiMap;
    }
    interface PitchDetectorOptionValues extends OptionValues {
    }
    class PitchDetectorOptions implements Options {
        readonly optionValues: PitchDetectorOptionValues;
        constructor(optionValues: PitchDetectorOptionValues);
    }
    export class Module extends ModuleBase implements ModuleType {
        name: string;
        flags: number;
        readonly typeName = "Pitch Detector";
        readonly controllerSetters: ((val: number) => void)[];
        readonly controllerValues: PitchDetectorControllerValues;
        readonly controllers: PitchDetectorControllers;
        readonly c: PitchDetectorControllers;
        readonly midiMaps: PitchDetectorControllerMidiMaps;
        readonly optionValues: PitchDetectorOptionValues;
        readonly options: PitchDetectorOptions;
        readonly o: PitchDetectorOptions;
        behavior?: PitchDetectorBehavior;
        constructor();
        attachTo(project: Project): AttachedModule;
        setRawControllerValue(ctlNum: number, value: number): void;
        rawControllerValues(): Generator<number>;
        setMidiMaps(midiMaps: MidiMap[]): void;
        midiMapsArray(): MidiMap[];
    }
    export class AttachedModule extends Module {
        get index(): number;
        set index(_: number);
    }
    export {};
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/pitchDetector.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { DcBlockerBaseControllers } from "./dcBlockerBaseControllers";
export declare class DcBlockerControllers extends DcBlockerBaseControllers {
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/dcBlockerControllers.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { ControllerValues } from "./moduleType";
export interface AmplifierControllerValues extends ControllerValues {
    volume: number;
    balance: number;
    dcOffset: number;
    inverse: boolean;
    stereoWidth: number;
    absolute: boolean;
    fineVolume: number;
    gain: number;
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/amplifierControllerValues.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { MidiMap, ControllerMidiMap, ControllerMidiMaps } from "../controllerMidiMap";
import { Project } from "../project";
import { ModuleBase } from "./moduleBase";
import { ModuleType, OptionValues, Options } from "./moduleType";
import { MultiCtlBehavior } from "./multiCtlBehavior";
import { MultiCtlControllers } from "./multiCtlControllers";
import { MultiCtlControllerValues } from "./multiCtlControllerValues";
export declare namespace MultiCtl {
    export enum CtlNum {
        Value = 1,
        Gain = 2,
        Quantization = 3,
        OutOffset = 4,
        Response = 5,
        SampleRateHz = 6
    }
    interface MultiCtlControllerMidiMaps extends ControllerMidiMaps {
        value: ControllerMidiMap;
        gain: ControllerMidiMap;
        quantization: ControllerMidiMap;
        outOffset: ControllerMidiMap;
        response: ControllerMidiMap;
        sampleRateHz: ControllerMidiMap;
    }
    interface MultiCtlOptionValues extends OptionValues {
    }
    class MultiCtlOptions implements Options {
        readonly optionValues: MultiCtlOptionValues;
        constructor(optionValues: MultiCtlOptionValues);
    }
    export class Module extends ModuleBase implements ModuleType {
        name: string;
        flags: number;
        readonly typeName = "MultiCtl";
        readonly controllerSetters: ((val: number) => void)[];
        readonly controllerValues: MultiCtlControllerValues;
        readonly controllers: MultiCtlControllers;
        readonly c: MultiCtlControllers;
        readonly midiMaps: MultiCtlControllerMidiMaps;
        readonly optionValues: MultiCtlOptionValues;
        readonly options: MultiCtlOptions;
        readonly o: MultiCtlOptions;
        behavior?: MultiCtlBehavior;
        constructor();
        attachTo(project: Project): AttachedModule;
        setRawControllerValue(ctlNum: number, value: number): void;
        rawControllerValues(): Generator<number>;
        setMidiMaps(midiMaps: MidiMap[]): void;
        midiMapsArray(): MidiMap[];
    }
    export class AttachedModule extends Module {
        get index(): number;
        set index(_: number);
    }
    export {};
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/multiCtl.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
export declare enum Type {
    Lp = 0,
    Hp = 1,
    BpConstSkirtGain = 2,
    BpConstPeakGain = 3,
    Notch = 4,
    AllPass = 5,
    Peaking = 6,
    LowShelf = 7,
    HighShelf = 8
}
export declare enum RollOff {
    Db_12 = 0,
    Db_24 = 1,
    Db_36 = 2,
    Db_48 = 3
}
export declare enum Mode {
    Stereo = 0,
    Mono = 1
}
export declare enum LfoWaveform {
    Sin = 0,
    Saw = 1,
    Saw2 = 2,
    Square = 3,
    Random = 4
}
export declare enum LfoFreqUnit {
    Hz_0_02 = 0,
    Ms = 1,
    Hz = 2,
    Tick = 3,
    Line = 4,
    Line_2 = 5,
    Line_3 = 6
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/filterProEnums.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
export declare enum Channels {
    Stereo = 0,
    Mono = 1
}
export declare enum FrequencyUnit {
    Hz_64 = 0,
    Ms = 1,
    Hz = 2,
    Tick = 3,
    Line = 4,
    Line_2 = 5,
    Line_3 = 6
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/vibratoEnums.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { MidiMap, ControllerMidiMap, ControllerMidiMaps } from "../controllerMidiMap";
import { Project } from "../project";
import { ModuleBase } from "./moduleBase";
import { ModuleType, OptionValues, Options } from "./moduleType";
import { KickerBehavior } from "./kickerBehavior";
import { KickerControllers } from "./kickerControllers";
import { KickerControllerValues } from "./kickerControllerValues";
export declare namespace Kicker {
    export enum Waveform {
        Triangle = 0,
        Square = 1,
        Sin = 2
    }
    export enum CtlNum {
        Volume = 1,
        Waveform = 2,
        Panning = 3,
        Attack = 4,
        Release = 5,
        Boost = 6,
        Acceleration = 7,
        PolyphonyCh = 8,
        NoClick = 9
    }
    interface KickerControllerMidiMaps extends ControllerMidiMaps {
        volume: ControllerMidiMap;
        waveform: ControllerMidiMap;
        panning: ControllerMidiMap;
        attack: ControllerMidiMap;
        release: ControllerMidiMap;
        boost: ControllerMidiMap;
        acceleration: ControllerMidiMap;
        polyphonyCh: ControllerMidiMap;
        noClick: ControllerMidiMap;
    }
    interface KickerOptionValues extends OptionValues {
    }
    class KickerOptions implements Options {
        readonly optionValues: KickerOptionValues;
        constructor(optionValues: KickerOptionValues);
    }
    export class Module extends ModuleBase implements ModuleType {
        name: string;
        flags: number;
        readonly typeName = "Kicker";
        readonly controllerSetters: ((val: number) => void)[];
        readonly controllerValues: KickerControllerValues;
        readonly controllers: KickerControllers;
        readonly c: KickerControllers;
        readonly midiMaps: KickerControllerMidiMaps;
        readonly optionValues: KickerOptionValues;
        readonly options: KickerOptions;
        readonly o: KickerOptions;
        behavior?: KickerBehavior;
        constructor();
        attachTo(project: Project): AttachedModule;
        setRawControllerValue(ctlNum: number, value: number): void;
        rawControllerValues(): Generator<number>;
        setMidiMaps(midiMaps: MidiMap[]): void;
        midiMapsArray(): MidiMap[];
    }
    export class AttachedModule extends Module {
        get index(): number;
        set index(_: number);
    }
    export {};
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/kicker.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { AmplifierBaseControllers } from "./amplifierBaseControllers";
export declare class AmplifierControllers extends AmplifierBaseControllers {
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/amplifierControllers.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { MidiMap, ControllerMidiMap, ControllerMidiMaps } from "../controllerMidiMap";
import { Project } from "../project";
import { ModuleBase } from "./moduleBase";
import { ModuleType, OptionValues, Options } from "./moduleType";
import { FlangerBehavior } from "./flangerBehavior";
import { FlangerControllers } from "./flangerControllers";
import { FlangerControllerValues } from "./flangerControllerValues";
export declare namespace Flanger {
    export enum LfoWaveform {
        Hsin = 0,
        Sin = 1
    }
    export enum LfoFreqUnit {
        Hz_0_05 = 0,
        Ms = 1,
        Hz = 2,
        Tick = 3,
        Line = 4,
        Line_2 = 5,
        Line_3 = 6
    }
    export enum CtlNum {
        Dry = 1,
        Wet = 2,
        Feedback = 3,
        Delay = 4,
        Response = 5,
        LfoFreq = 6,
        LfoAmp = 7,
        LfoWaveform = 8,
        SetLfoPhase = 9,
        LfoFreqUnit = 10
    }
    interface FlangerControllerMidiMaps extends ControllerMidiMaps {
        dry: ControllerMidiMap;
        wet: ControllerMidiMap;
        feedback: ControllerMidiMap;
        delay: ControllerMidiMap;
        response: ControllerMidiMap;
        lfoFreq: ControllerMidiMap;
        lfoAmp: ControllerMidiMap;
        lfoWaveform: ControllerMidiMap;
        setLfoPhase: ControllerMidiMap;
        lfoFreqUnit: ControllerMidiMap;
    }
    interface FlangerOptionValues extends OptionValues {
    }
    class FlangerOptions implements Options {
        readonly optionValues: FlangerOptionValues;
        constructor(optionValues: FlangerOptionValues);
    }
    export class Module extends ModuleBase implements ModuleType {
        name: string;
        flags: number;
        readonly typeName = "Flanger";
        readonly controllerSetters: ((val: number) => void)[];
        readonly controllerValues: FlangerControllerValues;
        readonly controllers: FlangerControllers;
        readonly c: FlangerControllers;
        readonly midiMaps: FlangerControllerMidiMaps;
        readonly optionValues: FlangerOptionValues;
        readonly options: FlangerOptions;
        readonly o: FlangerOptions;
        behavior?: FlangerBehavior;
        constructor();
        attachTo(project: Project): AttachedModule;
        setRawControllerValue(ctlNum: number, value: number): void;
        rawControllerValues(): Generator<number>;
        setMidiMaps(midiMaps: MidiMap[]): void;
        midiMapsArray(): MidiMap[];
    }
    export class AttachedModule extends Module {
        get index(): number;
        set index(_: number);
    }
    export {};
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/flanger.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { CompressorBaseControllers } from "./compressorBaseControllers";
export declare class CompressorControllers extends CompressorBaseControllers {
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/compressorControllers.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
export declare enum Curve {
    Linear = 0,
    Exp1 = 1,
    Exp2 = 2,
    NegExp1 = 3,
    NegExp2 = 4,
    Sin = 5
}
export declare enum State {
    Stop = 0,
    Start = 1
}
export declare enum OnNoteOn {
    DoNothing = 0,
    StartOnFirstNote = 1,
    Start = 2
}
export declare enum OnNoteOff {
    DoNothing = 0,
    StopOnLastNote = 1,
    Stop = 2
}
export declare enum Mode {
    Generator = 0,
    AmpModulatorMono = 1,
    AmpModulatorStereo = 2
}
export declare enum SmoothTransitions {
    Off = 0,
    RestartAndVolumeChange = 1,
    RestartSmootherAndVolumeChange = 2
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/adsrEnums.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { MidiMap, ControllerMidiMap, ControllerMidiMaps } from "../controllerMidiMap";
import { Project } from "../project";
import { ModuleBase } from "./moduleBase";
import { ModuleType, OptionValues, Options } from "./moduleType";
import { AmplifierBehavior } from "./amplifierBehavior";
import { AmplifierControllers } from "./amplifierControllers";
import { AmplifierControllerValues } from "./amplifierControllerValues";
export declare namespace Amplifier {
    export enum CtlNum {
        Volume = 1,
        Balance = 2,
        DcOffset = 3,
        Inverse = 4,
        StereoWidth = 5,
        Absolute = 6,
        FineVolume = 7,
        Gain = 8
    }
    interface AmplifierControllerMidiMaps extends ControllerMidiMaps {
        volume: ControllerMidiMap;
        balance: ControllerMidiMap;
        dcOffset: ControllerMidiMap;
        inverse: ControllerMidiMap;
        stereoWidth: ControllerMidiMap;
        absolute: ControllerMidiMap;
        fineVolume: ControllerMidiMap;
        gain: ControllerMidiMap;
    }
    interface AmplifierOptionValues extends OptionValues {
    }
    class AmplifierOptions implements Options {
        readonly optionValues: AmplifierOptionValues;
        constructor(optionValues: AmplifierOptionValues);
    }
    export class Module extends ModuleBase implements ModuleType {
        name: string;
        flags: number;
        readonly typeName = "Amplifier";
        readonly controllerSetters: ((val: number) => void)[];
        readonly controllerValues: AmplifierControllerValues;
        readonly controllers: AmplifierControllers;
        readonly c: AmplifierControllers;
        readonly midiMaps: AmplifierControllerMidiMaps;
        readonly optionValues: AmplifierOptionValues;
        readonly options: AmplifierOptions;
        readonly o: AmplifierOptions;
        behavior?: AmplifierBehavior;
        constructor();
        attachTo(project: Project): AttachedModule;
        setRawControllerValue(ctlNum: number, value: number): void;
        rawControllerValues(): Generator<number>;
        setMidiMaps(midiMaps: MidiMap[]): void;
        midiMapsArray(): MidiMap[];
    }
    export class AttachedModule extends Module {
        get index(): number;
        set index(_: number);
    }
    export {};
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/amplifier.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { ControllerValues } from "./moduleType";
import { Channels } from "./sound2CtlEnums";
import { Mode } from "./sound2CtlEnums";
export interface Sound2CtlControllerValues extends ControllerValues {
    sampleRateHz: number;
    channels: Channels;
    absolute: boolean;
    gain: number;
    smooth: number;
    mode: Mode;
    outMin: number;
    outMax: number;
    outController: number;
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/sound2CtlControllerValues.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { ControllerValues } from "./moduleType";
import { LfoWaveform } from "./flangerEnums";
import { LfoFreqUnit } from "./flangerEnums";
export interface FlangerControllerValues extends ControllerValues {
    dry: number;
    wet: number;
    feedback: number;
    delay: number;
    response: number;
    lfoFreq: number;
    lfoAmp: number;
    lfoWaveform: LfoWaveform;
    setLfoPhase: number;
    lfoFreqUnit: LfoFreqUnit;
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/flangerControllerValues.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { Controllers, ModuleType } from "./moduleType";
import { FilterProControllerValues } from "./filterProControllerValues";
import { Type } from "./filterProEnums";
import { RollOff } from "./filterProEnums";
import { Mode } from "./filterProEnums";
import { LfoWaveform } from "./filterProEnums";
import { LfoFreqUnit } from "./filterProEnums";
export declare class FilterProBaseControllers implements Controllers {
    readonly module: ModuleType;
    readonly controllerValues: FilterProControllerValues;
    constructor(module: ModuleType, controllerValues: FilterProControllerValues);
    get volume(): number;
    set volume(newValue: number);
    get type(): Type;
    set type(newValue: Type);
    get freqHz(): number;
    set freqHz(newValue: number);
    get freqFinetune(): number;
    set freqFinetune(newValue: number);
    get freqScale(): number;
    set freqScale(newValue: number);
    get exponentialFreq(): boolean;
    set exponentialFreq(newValue: boolean);
    get q(): number;
    set q(newValue: number);
    get gain(): number;
    set gain(newValue: number);
    get rollOff(): RollOff;
    set rollOff(newValue: RollOff);
    get response(): number;
    set response(newValue: number);
    get mode(): Mode;
    set mode(newValue: Mode);
    get mix(): number;
    set mix(newValue: number);
    get lfoFreq(): number;
    set lfoFreq(newValue: number);
    get lfoAmp(): number;
    set lfoAmp(newValue: number);
    get lfoWaveform(): LfoWaveform;
    set lfoWaveform(newValue: LfoWaveform);
    get setLfoPhase(): number;
    set setLfoPhase(newValue: number);
    get lfoFreqUnit(): LfoFreqUnit;
    set lfoFreqUnit(newValue: LfoFreqUnit);
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/filterProBaseControllers.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { Controllers, ModuleType } from "./moduleType";
import { AnalogGeneratorControllerValues } from "./analogGeneratorControllerValues";
import { Mode } from "./analogGeneratorEnums";
import { Waveform } from "./analogGeneratorEnums";
import { Filter } from "./analogGeneratorEnums";
import { FilterEnvelope } from "./analogGeneratorEnums";
export declare class AnalogGeneratorBaseControllers implements Controllers {
    readonly module: ModuleType;
    readonly controllerValues: AnalogGeneratorControllerValues;
    constructor(module: ModuleType, controllerValues: AnalogGeneratorControllerValues);
    get volume(): number;
    set volume(newValue: number);
    get waveform(): Waveform;
    set waveform(newValue: Waveform);
    get panning(): number;
    set panning(newValue: number);
    get attack(): number;
    set attack(newValue: number);
    get release(): number;
    set release(newValue: number);
    get sustain(): boolean;
    set sustain(newValue: boolean);
    get exponentialEnvelope(): boolean;
    set exponentialEnvelope(newValue: boolean);
    get dutyCycle(): number;
    set dutyCycle(newValue: number);
    get freq2(): number;
    set freq2(newValue: number);
    get filter(): Filter;
    set filter(newValue: Filter);
    get fFreqHz(): number;
    set fFreqHz(newValue: number);
    get fResonance(): number;
    set fResonance(newValue: number);
    get fExponentialFreq(): boolean;
    set fExponentialFreq(newValue: boolean);
    get fAttack(): number;
    set fAttack(newValue: number);
    get fRelease(): number;
    set fRelease(newValue: number);
    get fEnvelope(): FilterEnvelope;
    set fEnvelope(newValue: FilterEnvelope);
    get polyphonyCh(): number;
    set polyphonyCh(newValue: number);
    get mode(): Mode;
    set mode(newValue: Mode);
    get noise(): number;
    set noise(newValue: number);
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/analogGeneratorBaseControllers.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { ControllerValues } from "./moduleType";
import { Channels } from "./inputEnums";
export interface InputControllerValues extends ControllerValues {
    volume: number;
    channels: Channels;
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/inputControllerValues.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { ModuleDataChunks } from "../moduleDataChunk";
import { MidiMap, ControllerMidiMap, ControllerMidiMaps } from "../controllerMidiMap";
import { Project } from "../project";
import { ModuleBase } from "./moduleBase";
import { ModuleType, OptionValues, Options } from "./moduleType";
import { MultiSynthBehavior } from "./multiSynthBehavior";
import { MultiSynthControllers } from "./multiSynthControllers";
import { MultiSynthControllerValues } from "./multiSynthControllerValues";
export declare namespace MultiSynth {
    export enum ActiveCurve {
        NoteVelocity = 0,
        VelocityVelocity = 1,
        NotePitch = 2
    }
    export enum CtlNum {
        Transpose = 1,
        RandomPitch = 2,
        Velocity = 3,
        Finetune = 4,
        RandomPhase = 5,
        RandomVelocity = 6,
        Phase = 7,
        Curve2Influence = 8
    }
    interface MultiSynthControllerMidiMaps extends ControllerMidiMaps {
        transpose: ControllerMidiMap;
        randomPitch: ControllerMidiMap;
        velocity: ControllerMidiMap;
        finetune: ControllerMidiMap;
        randomPhase: ControllerMidiMap;
        randomVelocity: ControllerMidiMap;
        phase: ControllerMidiMap;
        curve2Influence: ControllerMidiMap;
    }
    interface MultiSynthOptionValues extends OptionValues {
        useStaticNote_C5: boolean;
        ignoreNotesWithZeroVelocity: boolean;
        activeCurve: ActiveCurve;
        trigger: boolean;
        generateMissedNoteOffCommands: boolean;
        roundNoteX: boolean;
        roundPitchY: boolean;
        recordNotesToScaleCurve: boolean;
        outNoteEqOutNoteMinusInNotePlus_C5: boolean;
        outPortEqNoteModNumOfOuts: boolean;
        outPortEqChannelModNumOfOuts: boolean;
    }
    class MultiSynthOptions implements Options {
        readonly optionValues: MultiSynthOptionValues;
        constructor(optionValues: MultiSynthOptionValues);
        get useStaticNote_C5(): boolean;
        set useStaticNote_C5(newValue: boolean);
        get ignoreNotesWithZeroVelocity(): boolean;
        set ignoreNotesWithZeroVelocity(newValue: boolean);
        get activeCurve(): ActiveCurve;
        set activeCurve(newValue: ActiveCurve);
        get trigger(): boolean;
        set trigger(newValue: boolean);
        get generateMissedNoteOffCommands(): boolean;
        set generateMissedNoteOffCommands(newValue: boolean);
        get roundNoteX(): boolean;
        set roundNoteX(newValue: boolean);
        get roundPitchY(): boolean;
        set roundPitchY(newValue: boolean);
        get recordNotesToScaleCurve(): boolean;
        set recordNotesToScaleCurve(newValue: boolean);
        get outNoteEqOutNoteMinusInNotePlus_C5(): boolean;
        set outNoteEqOutNoteMinusInNotePlus_C5(newValue: boolean);
        get outPortEqNoteModNumOfOuts(): boolean;
        set outPortEqNoteModNumOfOuts(newValue: boolean);
        get outPortEqChannelModNumOfOuts(): boolean;
        set outPortEqChannelModNumOfOuts(newValue: boolean);
    }
    export class Module extends ModuleBase implements ModuleType {
        name: string;
        flags: number;
        readonly typeName = "MultiSynth";
        readonly optionsChnm = 1;
        readonly controllerSetters: ((val: number) => void)[];
        readonly controllerValues: MultiSynthControllerValues;
        readonly controllers: MultiSynthControllers;
        readonly c: MultiSynthControllers;
        readonly midiMaps: MultiSynthControllerMidiMaps;
        readonly optionValues: MultiSynthOptionValues;
        readonly options: MultiSynthOptions;
        readonly o: MultiSynthOptions;
        behavior?: MultiSynthBehavior;
        constructor();
        attachTo(project: Project): AttachedModule;
        setRawControllerValue(ctlNum: number, value: number): void;
        rawControllerValues(): Generator<number>;
        setMidiMaps(midiMaps: MidiMap[]): void;
        midiMapsArray(): MidiMap[];
        rawOptionBytes(): Uint8Array;
        setOptions(dataChunks: ModuleDataChunks): void;
    }
    export class AttachedModule extends Module {
        get index(): number;
        set index(_: number);
    }
    export {};
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/multiSynth.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { VorbisPlayerBaseControllers } from "./vorbisPlayerBaseControllers";
export declare class VorbisPlayerControllers extends VorbisPlayerBaseControllers {
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/vorbisPlayerControllers.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { MultiSynthBaseControllers } from "./multiSynthBaseControllers";
export declare class MultiSynthControllers extends MultiSynthBaseControllers {
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/multiSynthControllers.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { ControllerValues } from "./moduleType";
import { ModulationType } from "./modulatorEnums";
import { Channels } from "./modulatorEnums";
export interface ModulatorControllerValues extends ControllerValues {
    volume: number;
    modulationType: ModulationType;
    channels: Channels;
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/modulatorControllerValues.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { ControllerValues } from "./moduleType";
import { Type } from "./lfoEnums";
import { Waveform } from "./lfoEnums";
import { Channels } from "./lfoEnums";
import { FrequencyUnit } from "./lfoEnums";
import { SmoothTransitions } from "./lfoEnums";
export interface LfoControllerValues extends ControllerValues {
    volume: number;
    type: Type;
    amplitude: number;
    freq: number;
    waveform: Waveform;
    setPhase: number;
    channels: Channels;
    frequencyUnit: FrequencyUnit;
    dutyCycle: number;
    generator: boolean;
    freqScalePct: number;
    smoothTransitions: SmoothTransitions;
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/lfoControllerValues.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { Ctl2NoteBaseControllers } from "./ctl2NoteBaseControllers";
export declare class Ctl2NoteControllers extends Ctl2NoteBaseControllers {
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/ctl2NoteControllers.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { MidiMap, ControllerMidiMap, ControllerMidiMaps } from "../controllerMidiMap";
import { Project } from "../project";
import { ModuleBase } from "./moduleBase";
import { ModuleType, OptionValues, Options } from "./moduleType";
import { VorbisPlayerBehavior } from "./vorbisPlayerBehavior";
import { VorbisPlayerControllers } from "./vorbisPlayerControllers";
import { VorbisPlayerControllerValues } from "./vorbisPlayerControllerValues";
export declare namespace VorbisPlayer {
    export enum CtlNum {
        Volume = 1,
        OriginalSpeed = 2,
        Finetune = 3,
        Transpose = 4,
        Interpolation = 5,
        PolyphonyCh = 6,
        Repeat = 7
    }
    interface VorbisPlayerControllerMidiMaps extends ControllerMidiMaps {
        volume: ControllerMidiMap;
        originalSpeed: ControllerMidiMap;
        finetune: ControllerMidiMap;
        transpose: ControllerMidiMap;
        interpolation: ControllerMidiMap;
        polyphonyCh: ControllerMidiMap;
        repeat: ControllerMidiMap;
    }
    interface VorbisPlayerOptionValues extends OptionValues {
    }
    class VorbisPlayerOptions implements Options {
        readonly optionValues: VorbisPlayerOptionValues;
        constructor(optionValues: VorbisPlayerOptionValues);
    }
    export class Module extends ModuleBase implements ModuleType {
        name: string;
        flags: number;
        readonly typeName = "Vorbis player";
        readonly controllerSetters: ((val: number) => void)[];
        readonly controllerValues: VorbisPlayerControllerValues;
        readonly controllers: VorbisPlayerControllers;
        readonly c: VorbisPlayerControllers;
        readonly midiMaps: VorbisPlayerControllerMidiMaps;
        readonly optionValues: VorbisPlayerOptionValues;
        readonly options: VorbisPlayerOptions;
        readonly o: VorbisPlayerOptions;
        behavior?: VorbisPlayerBehavior;
        constructor();
        attachTo(project: Project): AttachedModule;
        setRawControllerValue(ctlNum: number, value: number): void;
        rawControllerValues(): Generator<number>;
        setMidiMaps(midiMaps: MidiMap[]): void;
        midiMapsArray(): MidiMap[];
    }
    export class AttachedModule extends Module {
        get index(): number;
        set index(_: number);
    }
    export {};
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/vorbisPlayer.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { MidiMap, ControllerMidiMap, ControllerMidiMaps } from "../controllerMidiMap";
import { Project } from "../project";
import { ModuleBase } from "./moduleBase";
import { ModuleType, OptionValues, Options } from "./moduleType";
import { DcBlockerBehavior } from "./dcBlockerBehavior";
import { DcBlockerControllers } from "./dcBlockerControllers";
import { DcBlockerControllerValues } from "./dcBlockerControllerValues";
export declare namespace DcBlocker {
    export enum Channels {
        Stereo = 0,
        Mono = 1
    }
    export enum CtlNum {
        Channels = 1
    }
    interface DcBlockerControllerMidiMaps extends ControllerMidiMaps {
        channels: ControllerMidiMap;
    }
    interface DcBlockerOptionValues extends OptionValues {
    }
    class DcBlockerOptions implements Options {
        readonly optionValues: DcBlockerOptionValues;
        constructor(optionValues: DcBlockerOptionValues);
    }
    export class Module extends ModuleBase implements ModuleType {
        name: string;
        flags: number;
        readonly typeName = "DC Blocker";
        readonly controllerSetters: ((val: number) => void)[];
        readonly controllerValues: DcBlockerControllerValues;
        readonly controllers: DcBlockerControllers;
        readonly c: DcBlockerControllers;
        readonly midiMaps: DcBlockerControllerMidiMaps;
        readonly optionValues: DcBlockerOptionValues;
        readonly options: DcBlockerOptions;
        readonly o: DcBlockerOptions;
        behavior?: DcBlockerBehavior;
        constructor();
        attachTo(project: Project): AttachedModule;
        setRawControllerValue(ctlNum: number, value: number): void;
        rawControllerValues(): Generator<number>;
        setMidiMaps(midiMaps: MidiMap[]): void;
        midiMapsArray(): MidiMap[];
    }
    export class AttachedModule extends Module {
        get index(): number;
        set index(_: number);
    }
    export {};
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/dcBlocker.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { MidiMap, ControllerMidiMap, ControllerMidiMaps } from "../controllerMidiMap";
import { Project } from "../project";
import { ModuleBase } from "./moduleBase";
import { ModuleType, OptionValues, Options } from "./moduleType";
import { Pitch2CtlBehavior } from "./pitch2CtlBehavior";
import { Pitch2CtlControllers } from "./pitch2CtlControllers";
import { Pitch2CtlControllerValues } from "./pitch2CtlControllerValues";
export declare namespace Pitch2Ctl {
    export enum Mode {
        FrequencyHz = 0,
        Pitch = 1
    }
    export enum NoteOffAction {
        DoNothing = 0,
        PitchDown = 1,
        PitchUp = 2
    }
    export enum CtlNum {
        Mode = 1,
        NoteOffAction = 2,
        FirstNote = 3,
        NumberOfSemitones = 4,
        OutMin = 5,
        OutMax = 6,
        OutController = 7
    }
    interface Pitch2CtlControllerMidiMaps extends ControllerMidiMaps {
        mode: ControllerMidiMap;
        noteOffAction: ControllerMidiMap;
        firstNote: ControllerMidiMap;
        numberOfSemitones: ControllerMidiMap;
        outMin: ControllerMidiMap;
        outMax: ControllerMidiMap;
        outController: ControllerMidiMap;
    }
    interface Pitch2CtlOptionValues extends OptionValues {
    }
    class Pitch2CtlOptions implements Options {
        readonly optionValues: Pitch2CtlOptionValues;
        constructor(optionValues: Pitch2CtlOptionValues);
    }
    export class Module extends ModuleBase implements ModuleType {
        name: string;
        flags: number;
        readonly typeName = "Pitch2Ctl";
        readonly controllerSetters: ((val: number) => void)[];
        readonly controllerValues: Pitch2CtlControllerValues;
        readonly controllers: Pitch2CtlControllers;
        readonly c: Pitch2CtlControllers;
        readonly midiMaps: Pitch2CtlControllerMidiMaps;
        readonly optionValues: Pitch2CtlOptionValues;
        readonly options: Pitch2CtlOptions;
        readonly o: Pitch2CtlOptions;
        behavior?: Pitch2CtlBehavior;
        constructor();
        attachTo(project: Project): AttachedModule;
        setRawControllerValue(ctlNum: number, value: number): void;
        rawControllerValues(): Generator<number>;
        setMidiMaps(midiMaps: MidiMap[]): void;
        midiMapsArray(): MidiMap[];
    }
    export class AttachedModule extends Module {
        get index(): number;
        set index(_: number);
    }
    export {};
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/pitch2Ctl.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { ControllerValues } from "./moduleType";
export interface MultiSynthControllerValues extends ControllerValues {
    transpose: number;
    randomPitch: number;
    velocity: number;
    finetune: number;
    randomPhase: number;
    randomVelocity: number;
    phase: number;
    curve2Influence: number;
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/multiSynthControllerValues.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { ModuleDataChunks } from "../moduleDataChunk";
import { MidiMap, ControllerMidiMap, ControllerMidiMaps } from "../controllerMidiMap";
import { Project } from "../project";
import { ModuleBase } from "./moduleBase";
import { ModuleType, OptionValues, Options } from "./moduleType";
import { SamplerBehavior } from "./samplerBehavior";
import { SamplerControllers } from "./samplerControllers";
import { SamplerControllerValues } from "./samplerControllerValues";
export declare namespace Sampler {
    export enum SampleInterpolation {
        Off = 0,
        Linear = 1,
        Spline = 2
    }
    export enum EnvelopeInterpolation {
        Off = 0,
        Linear = 1
    }
    export enum VibratoType {
        Sin = 0,
        Saw = 1,
        Square = 2
    }
    export enum LoopType {
        Off = 0,
        Forward = 1,
        PingPong = 2
    }
    export enum Format {
        Int8 = 1,
        Int16 = 2,
        Float32 = 4
    }
    export enum Channels {
        Mono = 0,
        Stereo = 8
    }
    export enum EnvelopeFlags {
        Enabled = 1,
        Sustain = 2,
        Loop = 4
    }
    export enum CtlNum {
        Volume = 1,
        Panning = 2,
        SampleInterpolation = 3,
        EnvelopeInterpolation = 4,
        PolyphonyCh = 5,
        RecThreshold = 6
    }
    interface SamplerControllerMidiMaps extends ControllerMidiMaps {
        volume: ControllerMidiMap;
        panning: ControllerMidiMap;
        sampleInterpolation: ControllerMidiMap;
        envelopeInterpolation: ControllerMidiMap;
        polyphonyCh: ControllerMidiMap;
        recThreshold: ControllerMidiMap;
    }
    interface SamplerOptionValues extends OptionValues {
        startRecordingOnProjectPlay: boolean;
        stopRecordingOnProjectStop: boolean;
        recordInMono: boolean;
        recordWithReducedSampleRate: boolean;
        recordIn_16Bit: boolean;
        ignoreVelocityForVolume: boolean;
    }
    class SamplerOptions implements Options {
        readonly optionValues: SamplerOptionValues;
        constructor(optionValues: SamplerOptionValues);
        get startRecordingOnProjectPlay(): boolean;
        set startRecordingOnProjectPlay(newValue: boolean);
        get stopRecordingOnProjectStop(): boolean;
        set stopRecordingOnProjectStop(newValue: boolean);
        get recordInMono(): boolean;
        set recordInMono(newValue: boolean);
        get recordWithReducedSampleRate(): boolean;
        set recordWithReducedSampleRate(newValue: boolean);
        get recordIn_16Bit(): boolean;
        set recordIn_16Bit(newValue: boolean);
        get ignoreVelocityForVolume(): boolean;
        set ignoreVelocityForVolume(newValue: boolean);
    }
    export class Module extends ModuleBase implements ModuleType {
        name: string;
        flags: number;
        readonly typeName = "Sampler";
        readonly optionsChnm = 257;
        readonly controllerSetters: ((val: number) => void)[];
        readonly controllerValues: SamplerControllerValues;
        readonly controllers: SamplerControllers;
        readonly c: SamplerControllers;
        readonly midiMaps: SamplerControllerMidiMaps;
        readonly optionValues: SamplerOptionValues;
        readonly options: SamplerOptions;
        readonly o: SamplerOptions;
        behavior?: SamplerBehavior;
        constructor();
        attachTo(project: Project): AttachedModule;
        setRawControllerValue(ctlNum: number, value: number): void;
        rawControllerValues(): Generator<number>;
        setMidiMaps(midiMaps: MidiMap[]): void;
        midiMapsArray(): MidiMap[];
        rawOptionBytes(): Uint8Array;
        setOptions(dataChunks: ModuleDataChunks): void;
    }
    export class AttachedModule extends Module {
        get index(): number;
        set index(_: number);
    }
    export {};
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/sampler.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { LfoBaseControllers } from "./lfoBaseControllers";
export declare class LfoControllers extends LfoBaseControllers {
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/lfoControllers.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { ControllerValues } from "./moduleType";
export interface OutputControllerValues extends ControllerValues {
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/outputControllerValues.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { ModulatorBaseControllers } from "./modulatorBaseControllers";
export declare class ModulatorControllers extends ModulatorBaseControllers {
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/modulatorControllers.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { Controllers, ModuleType } from "./moduleType";
import { SamplerControllerValues } from "./samplerControllerValues";
import { SampleInterpolation } from "./samplerEnums";
import { EnvelopeInterpolation } from "./samplerEnums";
export declare class SamplerBaseControllers implements Controllers {
    readonly module: ModuleType;
    readonly controllerValues: SamplerControllerValues;
    constructor(module: ModuleType, controllerValues: SamplerControllerValues);
    get volume(): number;
    set volume(newValue: number);
    get panning(): number;
    set panning(newValue: number);
    get sampleInterpolation(): SampleInterpolation;
    set sampleInterpolation(newValue: SampleInterpolation);
    get envelopeInterpolation(): EnvelopeInterpolation;
    set envelopeInterpolation(newValue: EnvelopeInterpolation);
    get polyphonyCh(): number;
    set polyphonyCh(newValue: number);
    get recThreshold(): number;
    set recThreshold(newValue: number);
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/samplerBaseControllers.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { MidiMap, ControllerMidiMap, ControllerMidiMaps } from "../controllerMidiMap";
import { Project } from "../project";
import { ModuleBase } from "./moduleBase";
import { ModuleType, OptionValues, Options } from "./moduleType";
import { PitchShifterBehavior } from "./pitchShifterBehavior";
import { PitchShifterControllers } from "./pitchShifterControllers";
import { PitchShifterControllerValues } from "./pitchShifterControllerValues";
export declare namespace PitchShifter {
    export enum Mode {
        Hq = 0,
        HqMono = 1,
        Lq = 2,
        LqMono = 3
    }
    export enum BypassIfPitchEq0 {
        Off = 0,
        SlowTransition = 1,
        FastTransition = 2
    }
    export enum CtlNum {
        Volume = 1,
        Pitch = 2,
        PitchScale = 3,
        Feedback = 4,
        GrainSize = 5,
        Mode = 6,
        BypassIfPitchEq_0 = 7
    }
    interface PitchShifterControllerMidiMaps extends ControllerMidiMaps {
        volume: ControllerMidiMap;
        pitch: ControllerMidiMap;
        pitchScale: ControllerMidiMap;
        feedback: ControllerMidiMap;
        grainSize: ControllerMidiMap;
        mode: ControllerMidiMap;
        bypassIfPitchEq_0: ControllerMidiMap;
    }
    interface PitchShifterOptionValues extends OptionValues {
    }
    class PitchShifterOptions implements Options {
        readonly optionValues: PitchShifterOptionValues;
        constructor(optionValues: PitchShifterOptionValues);
    }
    export class Module extends ModuleBase implements ModuleType {
        name: string;
        flags: number;
        readonly typeName = "Pitch shifter";
        readonly controllerSetters: ((val: number) => void)[];
        readonly controllerValues: PitchShifterControllerValues;
        readonly controllers: PitchShifterControllers;
        readonly c: PitchShifterControllers;
        readonly midiMaps: PitchShifterControllerMidiMaps;
        readonly optionValues: PitchShifterOptionValues;
        readonly options: PitchShifterOptions;
        readonly o: PitchShifterOptions;
        behavior?: PitchShifterBehavior;
        constructor();
        attachTo(project: Project): AttachedModule;
        setRawControllerValue(ctlNum: number, value: number): void;
        rawControllerValues(): Generator<number>;
        setMidiMaps(midiMaps: MidiMap[]): void;
        midiMapsArray(): MidiMap[];
    }
    export class AttachedModule extends Module {
        get index(): number;
        set index(_: number);
    }
    export {};
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/pitchShifter.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { ModuleDataChunks } from "../moduleDataChunk";
import { MidiMap, ControllerMidiMap, ControllerMidiMaps } from "../controllerMidiMap";
import { Project } from "../project";
import { ModuleBase } from "./moduleBase";
import { ModuleType, OptionValues, Options } from "./moduleType";
import { AnalogGeneratorBehavior } from "./analogGeneratorBehavior";
import { AnalogGeneratorControllers } from "./analogGeneratorControllers";
import { AnalogGeneratorControllerValues } from "./analogGeneratorControllerValues";
export declare namespace AnalogGenerator {
    export enum Mode {
        Hq = 0,
        HqMono = 1,
        Lq = 2,
        LqMono = 3
    }
    export enum Waveform {
        Triangle = 0,
        Saw = 1,
        Square = 2,
        Noise = 3,
        Drawn = 4,
        Sin = 5,
        Hsin = 6,
        Asin = 7,
        DrawnSpline = 8,
        NoiseSpline = 9,
        WhiteNoise = 10,
        PinkNoise = 11,
        RedNoise = 12,
        BlueNoise = 13,
        VioletNoise = 14,
        GreyNoise = 15,
        Harmonics = 16
    }
    export enum Filter {
        Off = 0,
        Lp_12db = 1,
        Hp_12db = 2,
        Bp_12db = 3,
        Br_12db = 4,
        Lp_24db = 5,
        Hp_24db = 6,
        Bp_24db = 7,
        Br_24db = 8
    }
    export enum FilterEnvelope {
        Off = 0,
        SustainOff = 1,
        SustainOn = 2
    }
    export enum CtlNum {
        Volume = 1,
        Waveform = 2,
        Panning = 3,
        Attack = 4,
        Release = 5,
        Sustain = 6,
        ExponentialEnvelope = 7,
        DutyCycle = 8,
        Freq2 = 9,
        Filter = 10,
        FFreqHz = 11,
        FResonance = 12,
        FExponentialFreq = 13,
        FAttack = 14,
        FRelease = 15,
        FEnvelope = 16,
        PolyphonyCh = 17,
        Mode = 18,
        Noise = 19
    }
    interface AnalogGeneratorControllerMidiMaps extends ControllerMidiMaps {
        volume: ControllerMidiMap;
        waveform: ControllerMidiMap;
        panning: ControllerMidiMap;
        attack: ControllerMidiMap;
        release: ControllerMidiMap;
        sustain: ControllerMidiMap;
        exponentialEnvelope: ControllerMidiMap;
        dutyCycle: ControllerMidiMap;
        freq2: ControllerMidiMap;
        filter: ControllerMidiMap;
        fFreqHz: ControllerMidiMap;
        fResonance: ControllerMidiMap;
        fExponentialFreq: ControllerMidiMap;
        fAttack: ControllerMidiMap;
        fRelease: ControllerMidiMap;
        fEnvelope: ControllerMidiMap;
        polyphonyCh: ControllerMidiMap;
        mode: ControllerMidiMap;
        noise: ControllerMidiMap;
    }
    interface AnalogGeneratorOptionValues extends OptionValues {
        volumeEnvelopeScalingPerKey: boolean;
        filterEnvelopeScalingPerKey: boolean;
        volumeScalingPerKey: boolean;
        filterFreqScalingPerKey: boolean;
        velocityDependentFilterFrequency: boolean;
        frequencyDiv_2: boolean;
        smoothFrequencyChange: boolean;
        filterFreqScalingPerKeyReverse: boolean;
        retainPhase: boolean;
        randomPhase: boolean;
        filterFreqEqNoteFreq: boolean;
        velocityDependentFilterResonance: boolean;
        trueZeroAttackRelease: boolean;
    }
    class AnalogGeneratorOptions implements Options {
        readonly optionValues: AnalogGeneratorOptionValues;
        constructor(optionValues: AnalogGeneratorOptionValues);
        get volumeEnvelopeScalingPerKey(): boolean;
        set volumeEnvelopeScalingPerKey(newValue: boolean);
        get filterEnvelopeScalingPerKey(): boolean;
        set filterEnvelopeScalingPerKey(newValue: boolean);
        get volumeScalingPerKey(): boolean;
        set volumeScalingPerKey(newValue: boolean);
        get filterFreqScalingPerKey(): boolean;
        set filterFreqScalingPerKey(newValue: boolean);
        get velocityDependentFilterFrequency(): boolean;
        set velocityDependentFilterFrequency(newValue: boolean);
        get frequencyDiv_2(): boolean;
        set frequencyDiv_2(newValue: boolean);
        get smoothFrequencyChange(): boolean;
        set smoothFrequencyChange(newValue: boolean);
        get filterFreqScalingPerKeyReverse(): boolean;
        set filterFreqScalingPerKeyReverse(newValue: boolean);
        get retainPhase(): boolean;
        set retainPhase(newValue: boolean);
        get randomPhase(): boolean;
        set randomPhase(newValue: boolean);
        get filterFreqEqNoteFreq(): boolean;
        set filterFreqEqNoteFreq(newValue: boolean);
        get velocityDependentFilterResonance(): boolean;
        set velocityDependentFilterResonance(newValue: boolean);
        get trueZeroAttackRelease(): boolean;
        set trueZeroAttackRelease(newValue: boolean);
    }
    export class Module extends ModuleBase implements ModuleType {
        name: string;
        flags: number;
        readonly typeName = "Analog generator";
        readonly optionsChnm = 1;
        readonly controllerSetters: ((val: number) => void)[];
        readonly controllerValues: AnalogGeneratorControllerValues;
        readonly controllers: AnalogGeneratorControllers;
        readonly c: AnalogGeneratorControllers;
        readonly midiMaps: AnalogGeneratorControllerMidiMaps;
        readonly optionValues: AnalogGeneratorOptionValues;
        readonly options: AnalogGeneratorOptions;
        readonly o: AnalogGeneratorOptions;
        behavior?: AnalogGeneratorBehavior;
        constructor();
        attachTo(project: Project): AttachedModule;
        setRawControllerValue(ctlNum: number, value: number): void;
        rawControllerValues(): Generator<number>;
        setMidiMaps(midiMaps: MidiMap[]): void;
        midiMapsArray(): MidiMap[];
        rawOptionBytes(): Uint8Array;
        setOptions(dataChunks: ModuleDataChunks): void;
    }
    export class AttachedModule extends Module {
        get index(): number;
        set index(_: number);
    }
    export {};
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/analogGenerator.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { Controllers, ModuleType } from "./moduleType";
import { Sound2CtlControllerValues } from "./sound2CtlControllerValues";
import { Channels } from "./sound2CtlEnums";
import { Mode } from "./sound2CtlEnums";
export declare class Sound2CtlBaseControllers implements Controllers {
    readonly module: ModuleType;
    readonly controllerValues: Sound2CtlControllerValues;
    constructor(module: ModuleType, controllerValues: Sound2CtlControllerValues);
    get sampleRateHz(): number;
    set sampleRateHz(newValue: number);
    get channels(): Channels;
    set channels(newValue: Channels);
    get absolute(): boolean;
    set absolute(newValue: boolean);
    get gain(): number;
    set gain(newValue: number);
    get smooth(): number;
    set smooth(newValue: number);
    get mode(): Mode;
    set mode(newValue: Mode);
    get outMin(): number;
    set outMin(newValue: number);
    get outMax(): number;
    set outMax(newValue: number);
    get outController(): number;
    set outController(newValue: number);
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/sound2CtlBaseControllers.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
export declare enum Mode {
    Hq = 0,
    HqMono = 1,
    Lq = 2,
    LqMono = 3
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/waveShaperEnums.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { ControllerValues } from "./moduleType";
import { Mode } from "./pitchShifterEnums";
import { BypassIfPitchEq0 } from "./pitchShifterEnums";
export interface PitchShifterControllerValues extends ControllerValues {
    volume: number;
    pitch: number;
    pitchScale: number;
    feedback: number;
    grainSize: number;
    mode: Mode;
    bypassIfPitchEq_0: BypassIfPitchEq0;
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/pitchShifterControllerValues.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { ModuleBase } from "./moduleBase";
import { ModuleDataChunks } from "../moduleDataChunk";
import { Chunk } from "../chunks/chunk";
export declare class ModuleSpecificBehavior {
    readonly module: ModuleBase;
    constructor(module: ModuleBase);
    chnk(): number;
    processDataChunks(dataChunks: ModuleDataChunks): void;
    typeSpecificChunks(): Generator<Chunk>;
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/moduleSpecificBehavior.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { MidiMap, ControllerMidiMap, ControllerMidiMaps } from "../controllerMidiMap";
import { Project } from "../project";
import { ModuleBase } from "./moduleBase";
import { ModuleType, OptionValues, Options } from "./moduleType";
import { DistortionBehavior } from "./distortionBehavior";
import { DistortionControllers } from "./distortionControllers";
import { DistortionControllerValues } from "./distortionControllerValues";
export declare namespace Distortion {
    export enum Type {
        Lim = 0,
        Clipping = 0,
        Sat = 1,
        Foldback = 1,
        Foldback2 = 2,
        Foldback3 = 3,
        Overflow = 4
    }
    export enum CtlNum {
        Volume = 1,
        Type = 2,
        Power = 3,
        BitDepth = 4,
        FreqHz = 5,
        Noise = 6
    }
    interface DistortionControllerMidiMaps extends ControllerMidiMaps {
        volume: ControllerMidiMap;
        type: ControllerMidiMap;
        power: ControllerMidiMap;
        bitDepth: ControllerMidiMap;
        freqHz: ControllerMidiMap;
        noise: ControllerMidiMap;
    }
    interface DistortionOptionValues extends OptionValues {
    }
    class DistortionOptions implements Options {
        readonly optionValues: DistortionOptionValues;
        constructor(optionValues: DistortionOptionValues);
    }
    export class Module extends ModuleBase implements ModuleType {
        name: string;
        flags: number;
        readonly typeName = "Distortion";
        readonly controllerSetters: ((val: number) => void)[];
        readonly controllerValues: DistortionControllerValues;
        readonly controllers: DistortionControllers;
        readonly c: DistortionControllers;
        readonly midiMaps: DistortionControllerMidiMaps;
        readonly optionValues: DistortionOptionValues;
        readonly options: DistortionOptions;
        readonly o: DistortionOptions;
        behavior?: DistortionBehavior;
        constructor();
        attachTo(project: Project): AttachedModule;
        setRawControllerValue(ctlNum: number, value: number): void;
        rawControllerValues(): Generator<number>;
        setMidiMaps(midiMaps: MidiMap[]): void;
        midiMapsArray(): MidiMap[];
    }
    export class AttachedModule extends Module {
        get index(): number;
        set index(_: number);
    }
    export {};
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/distortion.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
export declare enum Channels {
    Stereo = 0,
    Mono = 1
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/dcBlockerEnums.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { ModuleDataChunks } from "../moduleDataChunk";
import { ModuleSpecificBehavior } from "./moduleSpecificBehavior";
import { Color } from "../color";
import { ControllerMidiMaps, MidiMap } from "../controllerMidiMap";
import { Project } from "../project";
import { Linkable } from "../links";
export declare class ModuleBase implements Linkable {
    protected _index: number | undefined;
    project?: Project;
    name: string;
    typeName: string;
    flags: number;
    finetune: number;
    relativeNote: number;
    x: number;
    y: number;
    layer: number;
    scale: number;
    color: Color;
    visualization: number;
    midiMaps: ControllerMidiMaps;
    midiInAlways: boolean;
    midiInChannel: number;
    midiOutName?: string;
    midiOutChannel: number;
    midiOutBank?: number;
    midiOutProgram?: number;
    inLinks: number[];
    inLinkSlots: number[];
    outLinks: number[];
    outLinkSlots: number[];
    readonly optionsChnm?: number;
    behavior?: ModuleSpecificBehavior;
    get index(): number;
    set index(newIndex: number);
    attachTo(project: Project): ModuleBase;
    chnk(): number;
    linkFrom(other: Linkable | Linkable[]): Linkable;
    linkTo(other: Linkable | Linkable[]): Linkable;
    midiMapsArray(): MidiMap[];
    processDataChunks(dataChunks: ModuleDataChunks): void;
    rawControllerValues(): Generator<number>;
    rawOptionBytes(): Uint8Array;
    setRawControllerValue(ctlNum: number, value: number): void;
    setMidiMaps(midiMaps: MidiMap[]): void;
    setOptions(dataChunks: ModuleDataChunks): void;
}
export interface ModuleConstructor {
    new (): ModuleBase;
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/moduleBase.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { PitchDetectorBaseControllers } from "./pitchDetectorBaseControllers";
export declare class PitchDetectorControllers extends PitchDetectorBaseControllers {
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/pitchDetectorControllers.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
export declare enum VoiceType {
    Soprano = 0,
    Alto = 1,
    Tenor = 2,
    Bass = 3
}
export declare enum Channels {
    Stereo = 0,
    Mono = 1
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/vocalFilterEnums.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
export declare enum Channels {
    Mono = 0,
    Stereo = 1
}
export declare enum DelayUnit {
    Sec_256 = 0,
    Ms = 1,
    Hz = 2,
    Tick = 3,
    Line = 4,
    Line_2 = 5,
    Line_3 = 6
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/echoEnums.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { Controllers, ModuleType } from "./moduleType";
import { DcBlockerControllerValues } from "./dcBlockerControllerValues";
import { Channels } from "./dcBlockerEnums";
export declare class DcBlockerBaseControllers implements Controllers {
    readonly module: ModuleType;
    readonly controllerValues: DcBlockerControllerValues;
    constructor(module: ModuleType, controllerValues: DcBlockerControllerValues);
    get channels(): Channels;
    set channels(newValue: Channels);
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/dcBlockerBaseControllers.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { ModuleSpecificBehavior } from "./moduleSpecificBehavior";
export declare class VocalFilterBehavior extends ModuleSpecificBehavior {
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/vocalFilterBehavior.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { ControllerValues } from "./moduleType";
export interface DrumSynthControllerValues extends ControllerValues {
    volume: number;
    panning: number;
    polyphonyCh: number;
    bassVolume: number;
    bassPower: number;
    bassTone: number;
    bassLength: number;
    hihatVolume: number;
    hihatLength: number;
    snareVolume: number;
    snareTone: number;
    snareLength: number;
    bassPanning: number;
    hihatPanning: number;
    snarePanning: number;
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/drumSynthControllerValues.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { ModuleSpecificBehavior } from "./moduleSpecificBehavior";
export declare class Ctl2NoteBehavior extends ModuleSpecificBehavior {
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/ctl2NoteBehavior.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { Controllers, ModuleType } from "./moduleType";
import { GeneratorControllerValues } from "./generatorControllerValues";
import { Waveform } from "./generatorEnums";
import { Mode } from "./generatorEnums";
export declare class GeneratorBaseControllers implements Controllers {
    readonly module: ModuleType;
    readonly controllerValues: GeneratorControllerValues;
    constructor(module: ModuleType, controllerValues: GeneratorControllerValues);
    get volume(): number;
    set volume(newValue: number);
    get waveform(): Waveform;
    set waveform(newValue: Waveform);
    get panning(): number;
    set panning(newValue: number);
    get attack(): number;
    set attack(newValue: number);
    get release(): number;
    set release(newValue: number);
    get polyphonyCh(): number;
    set polyphonyCh(newValue: number);
    get mode(): Mode;
    set mode(newValue: Mode);
    get sustain(): boolean;
    set sustain(newValue: boolean);
    get freqModulationByInput(): number;
    set freqModulationByInput(newValue: number);
    get dutyCycle(): number;
    set dutyCycle(newValue: number);
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/generatorBaseControllers.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { Controllers, ModuleType } from "./moduleType";
import { LoopControllerValues } from "./loopControllerValues";
import { Channels } from "./loopEnums";
import { Mode } from "./loopEnums";
export declare class LoopBaseControllers implements Controllers {
    readonly module: ModuleType;
    readonly controllerValues: LoopControllerValues;
    constructor(module: ModuleType, controllerValues: LoopControllerValues);
    get volume(): number;
    set volume(newValue: number);
    get delay(): number;
    set delay(newValue: number);
    get channels(): Channels;
    set channels(newValue: Channels);
    get repeats(): number;
    set repeats(newValue: number);
    get mode(): Mode;
    set mode(newValue: Mode);
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/loopBaseControllers.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { FmBaseControllers } from "./fmBaseControllers";
export declare class FmControllers extends FmBaseControllers {
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/fmControllers.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
export declare enum Type {
    Lim = 0,
    Clipping = 0,
    Sat = 1,
    Foldback = 1,
    Foldback2 = 2,
    Foldback3 = 3,
    Overflow = 4
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/distortionEnums.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { Controllers, ModuleType } from "./moduleType";
import { ModulatorControllerValues } from "./modulatorControllerValues";
import { ModulationType } from "./modulatorEnums";
import { Channels } from "./modulatorEnums";
export declare class ModulatorBaseControllers implements Controllers {
    readonly module: ModuleType;
    readonly controllerValues: ModulatorControllerValues;
    constructor(module: ModuleType, controllerValues: ModulatorControllerValues);
    get volume(): number;
    set volume(newValue: number);
    get modulationType(): ModulationType;
    set modulationType(newValue: ModulationType);
    get channels(): Channels;
    set channels(newValue: Channels);
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/modulatorBaseControllers.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { DrumSynthBaseControllers } from "./drumSynthBaseControllers";
export declare class DrumSynthControllers extends DrumSynthBaseControllers {
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/drumSynthControllers.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `interface BooleanOption {
    type: "boolean";
    name: string;
    default: boolean;
}
interface RangeOption {
    type: "range";
    name: string;
    default: number;
    min: number;
    max: number;
}
export declare type Option = BooleanOption | RangeOption;
export interface ControllerValues {
    [key: string]: boolean | number;
}
export interface Controllers {
    readonly controllerValues: ControllerValues;
    readonly module: ModuleType;
}
export interface OptionValues {
    [key: string]: boolean | number;
}
export interface Options {
    optionValues: OptionValues;
}
export interface ModuleType {
    readonly c: Controllers;
    readonly controllers: Controllers;
    readonly controllerValues: ControllerValues;
    readonly o: Options;
    readonly options: Options;
    readonly optionValues: OptionValues;
    flags: number;
    name: string;
    finetune: number;
    relativeNote: number;
    layer: number;
    scale: number;
    controllerSetters: ControllerSetters;
    setRawControllerValue(ctlNum: number, value: number): void;
}
interface ControllerSetter {
    (val: number): void;
}
declare type ControllerSetters = Array<ControllerSetter>;
export {};
`,
    "file:///node_modules/@types/radiant-voices/modtypes/moduleType.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { Velocity2CtlBaseControllers } from "./velocity2CtlBaseControllers";
export declare class Velocity2CtlControllers extends Velocity2CtlBaseControllers {
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/velocity2CtlControllers.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { AdsrBaseControllers } from "./adsrBaseControllers";
export declare class AdsrControllers extends AdsrBaseControllers {
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/adsrControllers.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { ModuleSpecificBehavior } from "./moduleSpecificBehavior";
export declare class InputBehavior extends ModuleSpecificBehavior {
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/inputBehavior.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { Controllers, ModuleType } from "./moduleType";
import { AdsrControllerValues } from "./adsrControllerValues";
import { Curve } from "./adsrEnums";
import { State } from "./adsrEnums";
import { OnNoteOn } from "./adsrEnums";
import { OnNoteOff } from "./adsrEnums";
import { Mode } from "./adsrEnums";
import { SmoothTransitions } from "./adsrEnums";
export declare class AdsrBaseControllers implements Controllers {
    readonly module: ModuleType;
    readonly controllerValues: AdsrControllerValues;
    constructor(module: ModuleType, controllerValues: AdsrControllerValues);
    get volume(): number;
    set volume(newValue: number);
    get attackMs(): number;
    set attackMs(newValue: number);
    get decayMs(): number;
    set decayMs(newValue: number);
    get sustainLevel(): number;
    set sustainLevel(newValue: number);
    get releaseMs(): number;
    set releaseMs(newValue: number);
    get attackCurve(): Curve;
    set attackCurve(newValue: Curve);
    get decayCurve(): Curve;
    set decayCurve(newValue: Curve);
    get releaseCurve(): Curve;
    set releaseCurve(newValue: Curve);
    get sustain(): boolean;
    set sustain(newValue: boolean);
    get sustainPedal(): boolean;
    set sustainPedal(newValue: boolean);
    get state(): State;
    set state(newValue: State);
    get onNoteOn(): OnNoteOn;
    set onNoteOn(newValue: OnNoteOn);
    get onNoteOff(): OnNoteOff;
    set onNoteOff(newValue: OnNoteOff);
    get mode(): Mode;
    set mode(newValue: Mode);
    get smoothTransitions(): SmoothTransitions;
    set smoothTransitions(newValue: SmoothTransitions);
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/adsrBaseControllers.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { MidiMap, ControllerMidiMap, ControllerMidiMaps } from "../controllerMidiMap";
import { Project } from "../project";
import { ModuleBase } from "./moduleBase";
import { ModuleType, OptionValues, Options } from "./moduleType";
import { AdsrBehavior } from "./adsrBehavior";
import { AdsrControllers } from "./adsrControllers";
import { AdsrControllerValues } from "./adsrControllerValues";
export declare namespace Adsr {
    export enum Curve {
        Linear = 0,
        Exp1 = 1,
        Exp2 = 2,
        NegExp1 = 3,
        NegExp2 = 4,
        Sin = 5
    }
    export enum State {
        Stop = 0,
        Start = 1
    }
    export enum OnNoteOn {
        DoNothing = 0,
        StartOnFirstNote = 1,
        Start = 2
    }
    export enum OnNoteOff {
        DoNothing = 0,
        StopOnLastNote = 1,
        Stop = 2
    }
    export enum Mode {
        Generator = 0,
        AmpModulatorMono = 1,
        AmpModulatorStereo = 2
    }
    export enum SmoothTransitions {
        Off = 0,
        RestartAndVolumeChange = 1,
        RestartSmootherAndVolumeChange = 2
    }
    export enum CtlNum {
        Volume = 1,
        AttackMs = 2,
        DecayMs = 3,
        SustainLevel = 4,
        ReleaseMs = 5,
        AttackCurve = 6,
        DecayCurve = 7,
        ReleaseCurve = 8,
        Sustain = 9,
        SustainPedal = 10,
        State = 11,
        OnNoteOn = 12,
        OnNoteOff = 13,
        Mode = 14,
        SmoothTransitions = 15
    }
    interface AdsrControllerMidiMaps extends ControllerMidiMaps {
        volume: ControllerMidiMap;
        attackMs: ControllerMidiMap;
        decayMs: ControllerMidiMap;
        sustainLevel: ControllerMidiMap;
        releaseMs: ControllerMidiMap;
        attackCurve: ControllerMidiMap;
        decayCurve: ControllerMidiMap;
        releaseCurve: ControllerMidiMap;
        sustain: ControllerMidiMap;
        sustainPedal: ControllerMidiMap;
        state: ControllerMidiMap;
        onNoteOn: ControllerMidiMap;
        onNoteOff: ControllerMidiMap;
        mode: ControllerMidiMap;
        smoothTransitions: ControllerMidiMap;
    }
    interface AdsrOptionValues extends OptionValues {
    }
    class AdsrOptions implements Options {
        readonly optionValues: AdsrOptionValues;
        constructor(optionValues: AdsrOptionValues);
    }
    export class Module extends ModuleBase implements ModuleType {
        name: string;
        flags: number;
        readonly typeName = "ADSR";
        readonly controllerSetters: ((val: number) => void)[];
        readonly controllerValues: AdsrControllerValues;
        readonly controllers: AdsrControllers;
        readonly c: AdsrControllers;
        readonly midiMaps: AdsrControllerMidiMaps;
        readonly optionValues: AdsrOptionValues;
        readonly options: AdsrOptions;
        readonly o: AdsrOptions;
        behavior?: AdsrBehavior;
        constructor();
        attachTo(project: Project): AttachedModule;
        setRawControllerValue(ctlNum: number, value: number): void;
        rawControllerValues(): Generator<number>;
        setMidiMaps(midiMaps: MidiMap[]): void;
        midiMapsArray(): MidiMap[];
    }
    export class AttachedModule extends Module {
        get index(): number;
        set index(_: number);
    }
    export {};
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/adsr.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { Controllers, ModuleType } from "./moduleType";
import { SpectraVoiceControllerValues } from "./spectraVoiceControllerValues";
import { Mode } from "./spectraVoiceEnums";
import { HarmonicType } from "./spectraVoiceEnums";
export declare class SpectraVoiceBaseControllers implements Controllers {
    readonly module: ModuleType;
    readonly controllerValues: SpectraVoiceControllerValues;
    constructor(module: ModuleType, controllerValues: SpectraVoiceControllerValues);
    get volume(): number;
    set volume(newValue: number);
    get panning(): number;
    set panning(newValue: number);
    get attack(): number;
    set attack(newValue: number);
    get release(): number;
    set release(newValue: number);
    get polyphonyCh(): number;
    set polyphonyCh(newValue: number);
    get mode(): Mode;
    set mode(newValue: Mode);
    get sustain(): boolean;
    set sustain(newValue: boolean);
    get spectrumResolution(): number;
    set spectrumResolution(newValue: number);
    get harmonic(): number;
    set harmonic(newValue: number);
    get hFreqHz(): number;
    set hFreqHz(newValue: number);
    get hVolume(): number;
    set hVolume(newValue: number);
    get hWidth(): number;
    set hWidth(newValue: number);
    get hType(): HarmonicType;
    set hType(newValue: HarmonicType);
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/spectraVoiceBaseControllers.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { ControllerValues } from "./moduleType";
import { Type } from "./filterProEnums";
import { RollOff } from "./filterProEnums";
import { Mode } from "./filterProEnums";
import { LfoWaveform } from "./filterProEnums";
import { LfoFreqUnit } from "./filterProEnums";
export interface FilterProControllerValues extends ControllerValues {
    volume: number;
    type: Type;
    freqHz: number;
    freqFinetune: number;
    freqScale: number;
    exponentialFreq: boolean;
    q: number;
    gain: number;
    rollOff: RollOff;
    response: number;
    mode: Mode;
    mix: number;
    lfoFreq: number;
    lfoAmp: number;
    lfoWaveform: LfoWaveform;
    setLfoPhase: number;
    lfoFreqUnit: LfoFreqUnit;
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/filterProControllerValues.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { MidiMap, ControllerMidiMap, ControllerMidiMaps } from "../controllerMidiMap";
import { Project } from "../project";
import { ModuleBase } from "./moduleBase";
import { ModuleType, OptionValues, Options } from "./moduleType";
import { DrumSynthBehavior } from "./drumSynthBehavior";
import { DrumSynthControllers } from "./drumSynthControllers";
import { DrumSynthControllerValues } from "./drumSynthControllerValues";
export declare namespace DrumSynth {
    export enum CtlNum {
        Volume = 1,
        Panning = 2,
        PolyphonyCh = 3,
        BassVolume = 4,
        BassPower = 5,
        BassTone = 6,
        BassLength = 7,
        HihatVolume = 8,
        HihatLength = 9,
        SnareVolume = 10,
        SnareTone = 11,
        SnareLength = 12,
        BassPanning = 13,
        HihatPanning = 14,
        SnarePanning = 15
    }
    interface DrumSynthControllerMidiMaps extends ControllerMidiMaps {
        volume: ControllerMidiMap;
        panning: ControllerMidiMap;
        polyphonyCh: ControllerMidiMap;
        bassVolume: ControllerMidiMap;
        bassPower: ControllerMidiMap;
        bassTone: ControllerMidiMap;
        bassLength: ControllerMidiMap;
        hihatVolume: ControllerMidiMap;
        hihatLength: ControllerMidiMap;
        snareVolume: ControllerMidiMap;
        snareTone: ControllerMidiMap;
        snareLength: ControllerMidiMap;
        bassPanning: ControllerMidiMap;
        hihatPanning: ControllerMidiMap;
        snarePanning: ControllerMidiMap;
    }
    interface DrumSynthOptionValues extends OptionValues {
    }
    class DrumSynthOptions implements Options {
        readonly optionValues: DrumSynthOptionValues;
        constructor(optionValues: DrumSynthOptionValues);
    }
    export class Module extends ModuleBase implements ModuleType {
        name: string;
        flags: number;
        readonly typeName = "DrumSynth";
        readonly controllerSetters: ((val: number) => void)[];
        readonly controllerValues: DrumSynthControllerValues;
        readonly controllers: DrumSynthControllers;
        readonly c: DrumSynthControllers;
        readonly midiMaps: DrumSynthControllerMidiMaps;
        readonly optionValues: DrumSynthOptionValues;
        readonly options: DrumSynthOptions;
        readonly o: DrumSynthOptions;
        behavior?: DrumSynthBehavior;
        constructor();
        attachTo(project: Project): AttachedModule;
        setRawControllerValue(ctlNum: number, value: number): void;
        rawControllerValues(): Generator<number>;
        setMidiMaps(midiMaps: MidiMap[]): void;
        midiMapsArray(): MidiMap[];
    }
    export class AttachedModule extends Module {
        get index(): number;
        set index(_: number);
    }
    export {};
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/drumSynth.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { ControllerValues } from "./moduleType";
import { Channels } from "./delayEnums";
import { DelayUnit } from "./delayEnums";
export interface DelayControllerValues extends ControllerValues {
    dry: number;
    wet: number;
    delayL: number;
    delayR: number;
    volumeL: number;
    volumeR: number;
    channels: Channels;
    inverse: boolean;
    delayUnit: DelayUnit;
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/delayControllerValues.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { MidiMap, ControllerMidiMap, ControllerMidiMaps } from "../controllerMidiMap";
import { Project } from "../project";
import { ModuleBase } from "./moduleBase";
import { ModuleType, OptionValues, Options } from "./moduleType";
import { ModulatorBehavior } from "./modulatorBehavior";
import { ModulatorControllers } from "./modulatorControllers";
import { ModulatorControllerValues } from "./modulatorControllerValues";
export declare namespace Modulator {
    export enum ModulationType {
        Amplitude = 0,
        Phase = 1,
        PhaseAbs = 2
    }
    export enum Channels {
        Stereo = 0,
        Mono = 1
    }
    export enum CtlNum {
        Volume = 1,
        ModulationType = 2,
        Channels = 3
    }
    interface ModulatorControllerMidiMaps extends ControllerMidiMaps {
        volume: ControllerMidiMap;
        modulationType: ControllerMidiMap;
        channels: ControllerMidiMap;
    }
    interface ModulatorOptionValues extends OptionValues {
    }
    class ModulatorOptions implements Options {
        readonly optionValues: ModulatorOptionValues;
        constructor(optionValues: ModulatorOptionValues);
    }
    export class Module extends ModuleBase implements ModuleType {
        name: string;
        flags: number;
        readonly typeName = "Modulator";
        readonly controllerSetters: ((val: number) => void)[];
        readonly controllerValues: ModulatorControllerValues;
        readonly controllers: ModulatorControllers;
        readonly c: ModulatorControllers;
        readonly midiMaps: ModulatorControllerMidiMaps;
        readonly optionValues: ModulatorOptionValues;
        readonly options: ModulatorOptions;
        readonly o: ModulatorOptions;
        behavior?: ModulatorBehavior;
        constructor();
        attachTo(project: Project): AttachedModule;
        setRawControllerValue(ctlNum: number, value: number): void;
        rawControllerValues(): Generator<number>;
        setMidiMaps(midiMaps: MidiMap[]): void;
        midiMapsArray(): MidiMap[];
    }
    export class AttachedModule extends Module {
        get index(): number;
        set index(_: number);
    }
    export {};
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/modulator.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { FilterBaseControllers } from "./filterBaseControllers";
export declare class FilterControllers extends FilterBaseControllers {
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/filterControllers.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { Controllers, ModuleType } from "./moduleType";
import { ReverbControllerValues } from "./reverbControllerValues";
import { Mode } from "./reverbEnums";
export declare class ReverbBaseControllers implements Controllers {
    readonly module: ModuleType;
    readonly controllerValues: ReverbControllerValues;
    constructor(module: ModuleType, controllerValues: ReverbControllerValues);
    get dry(): number;
    set dry(newValue: number);
    get wet(): number;
    set wet(newValue: number);
    get feedback(): number;
    set feedback(newValue: number);
    get damp(): number;
    set damp(newValue: number);
    get stereoWidth(): number;
    set stereoWidth(newValue: number);
    get freeze(): boolean;
    set freeze(newValue: boolean);
    get mode(): Mode;
    set mode(newValue: Mode);
    get allPassFilter(): boolean;
    set allPassFilter(newValue: boolean);
    get roomSize(): number;
    set roomSize(newValue: number);
    get randomSeed(): number;
    set randomSeed(newValue: number);
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/reverbBaseControllers.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { ModuleSpecificBehavior } from "./moduleSpecificBehavior";
export declare class CompressorBehavior extends ModuleSpecificBehavior {
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/compressorBehavior.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { MidiMap, ControllerMidiMap, ControllerMidiMaps } from "../controllerMidiMap";
import { Project } from "../project";
import { ModuleBase } from "./moduleBase";
import { ModuleType, OptionValues, Options } from "./moduleType";
import { DelayBehavior } from "./delayBehavior";
import { DelayControllers } from "./delayControllers";
import { DelayControllerValues } from "./delayControllerValues";
export declare namespace Delay {
    export enum Channels {
        Stereo = 0,
        Mono = 1
    }
    export enum DelayUnit {
        Sec_16384 = 0,
        Ms = 1,
        Hz = 2,
        Tick = 3,
        Line = 4,
        Line_2 = 5,
        Line_3 = 6
    }
    export enum CtlNum {
        Dry = 1,
        Wet = 2,
        DelayL = 3,
        DelayR = 4,
        VolumeL = 5,
        VolumeR = 6,
        Channels = 7,
        Inverse = 8,
        DelayUnit = 9
    }
    interface DelayControllerMidiMaps extends ControllerMidiMaps {
        dry: ControllerMidiMap;
        wet: ControllerMidiMap;
        delayL: ControllerMidiMap;
        delayR: ControllerMidiMap;
        volumeL: ControllerMidiMap;
        volumeR: ControllerMidiMap;
        channels: ControllerMidiMap;
        inverse: ControllerMidiMap;
        delayUnit: ControllerMidiMap;
    }
    interface DelayOptionValues extends OptionValues {
    }
    class DelayOptions implements Options {
        readonly optionValues: DelayOptionValues;
        constructor(optionValues: DelayOptionValues);
    }
    export class Module extends ModuleBase implements ModuleType {
        name: string;
        flags: number;
        readonly typeName = "Delay";
        readonly controllerSetters: ((val: number) => void)[];
        readonly controllerValues: DelayControllerValues;
        readonly controllers: DelayControllers;
        readonly c: DelayControllers;
        readonly midiMaps: DelayControllerMidiMaps;
        readonly optionValues: DelayOptionValues;
        readonly options: DelayOptions;
        readonly o: DelayOptions;
        behavior?: DelayBehavior;
        constructor();
        attachTo(project: Project): AttachedModule;
        setRawControllerValue(ctlNum: number, value: number): void;
        rawControllerValues(): Generator<number>;
        setMidiMaps(midiMaps: MidiMap[]): void;
        midiMapsArray(): MidiMap[];
    }
    export class AttachedModule extends Module {
        get index(): number;
        set index(_: number);
    }
    export {};
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/delay.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { OutputBaseControllers } from "./outputBaseControllers";
export declare class OutputControllers extends OutputBaseControllers {
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/outputControllers.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { ControllerValues } from "./moduleType";
import { Mode } from "./pitch2CtlEnums";
import { NoteOffAction } from "./pitch2CtlEnums";
export interface Pitch2CtlControllerValues extends ControllerValues {
    mode: Mode;
    noteOffAction: NoteOffAction;
    firstNote: number;
    numberOfSemitones: number;
    outMin: number;
    outMax: number;
    outController: number;
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/pitch2CtlControllerValues.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { SpectraVoiceBaseControllers } from "./spectraVoiceBaseControllers";
import { HarmonicType } from "./spectraVoiceEnums";
export declare class SpectraVoiceControllers extends SpectraVoiceBaseControllers {
    get harmonic(): number;
    set harmonic(newValue: number);
    get hFreqHz(): number;
    set hFreqHz(newValue: number);
    get hVolume(): number;
    set hVolume(newValue: number);
    get hWidth(): number;
    set hWidth(newValue: number);
    get hType(): HarmonicType;
    set hType(newValue: HarmonicType);
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/spectraVoiceControllers.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { ControllerValues } from "./moduleType";
import { SampleInterpolation } from "./samplerEnums";
import { EnvelopeInterpolation } from "./samplerEnums";
export interface SamplerControllerValues extends ControllerValues {
    volume: number;
    panning: number;
    sampleInterpolation: SampleInterpolation;
    envelopeInterpolation: EnvelopeInterpolation;
    polyphonyCh: number;
    recThreshold: number;
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/samplerControllerValues.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { ControllerValues } from "./moduleType";
import { Channels } from "./dcBlockerEnums";
export interface DcBlockerControllerValues extends ControllerValues {
    channels: Channels;
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/dcBlockerControllerValues.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { GlideBaseControllers } from "./glideBaseControllers";
export declare class GlideControllers extends GlideBaseControllers {
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/glideControllers.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { InputBaseControllers } from "./inputBaseControllers";
export declare class InputControllers extends InputBaseControllers {
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/inputControllers.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { Controllers, ModuleType } from "./moduleType";
import { FilterControllerValues } from "./filterControllerValues";
import { Type } from "./filterEnums";
import { Mode } from "./filterEnums";
import { RollOff } from "./filterEnums";
import { LfoFreqUnit } from "./filterEnums";
import { LfoWaveform } from "./filterEnums";
export declare class FilterBaseControllers implements Controllers {
    readonly module: ModuleType;
    readonly controllerValues: FilterControllerValues;
    constructor(module: ModuleType, controllerValues: FilterControllerValues);
    get volume(): number;
    set volume(newValue: number);
    get freq(): number;
    set freq(newValue: number);
    get resonance(): number;
    set resonance(newValue: number);
    get type(): Type;
    set type(newValue: Type);
    get response(): number;
    set response(newValue: number);
    get mode(): Mode;
    set mode(newValue: Mode);
    get impulse(): number;
    set impulse(newValue: number);
    get mix(): number;
    set mix(newValue: number);
    get lfoFreq(): number;
    set lfoFreq(newValue: number);
    get lfoAmp(): number;
    set lfoAmp(newValue: number);
    get setLfoPhase(): number;
    set setLfoPhase(newValue: number);
    get exponentialFreq(): boolean;
    set exponentialFreq(newValue: boolean);
    get rollOff(): RollOff;
    set rollOff(newValue: RollOff);
    get lfoFreqUnit(): LfoFreqUnit;
    set lfoFreqUnit(newValue: LfoFreqUnit);
    get lfoWaveform(): LfoWaveform;
    set lfoWaveform(newValue: LfoWaveform);
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/filterBaseControllers.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { ControllerValues } from "./moduleType";
export interface VorbisPlayerControllerValues extends ControllerValues {
    volume: number;
    originalSpeed: boolean;
    finetune: number;
    transpose: number;
    interpolation: boolean;
    polyphonyCh: number;
    repeat: boolean;
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/vorbisPlayerControllerValues.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { ModuleSpecificBehavior } from "./moduleSpecificBehavior";
import { ModuleDataChunks } from "@radiant-voices/moduleDataChunk";
import { Chunk } from "@radiant-voices/chunks/chunk";
export declare class VorbisPlayerBehavior extends ModuleSpecificBehavior {
    data?: Uint8Array;
    chnk(): number;
    processDataChunks(dataChunks: ModuleDataChunks): void;
    private processData;
    typeSpecificChunks(): Generator<Chunk>;
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/vorbisPlayerBehavior.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { MidiMap, ControllerMidiMap, ControllerMidiMaps } from "../controllerMidiMap";
import { Project } from "../project";
import { ModuleBase } from "./moduleBase";
import { ModuleType, OptionValues, Options } from "./moduleType";
import { CompressorBehavior } from "./compressorBehavior";
import { CompressorControllers } from "./compressorControllers";
import { CompressorControllerValues } from "./compressorControllerValues";
export declare namespace Compressor {
    export enum Mode {
        Peak = 0,
        Rms = 1,
        PeakZeroLatency = 2
    }
    export enum CtlNum {
        Volume = 1,
        Threshold = 2,
        SlopePct = 3,
        AttackMs = 4,
        ReleaseMs = 5,
        Mode = 6,
        SidechainInput = 7
    }
    interface CompressorControllerMidiMaps extends ControllerMidiMaps {
        volume: ControllerMidiMap;
        threshold: ControllerMidiMap;
        slopePct: ControllerMidiMap;
        attackMs: ControllerMidiMap;
        releaseMs: ControllerMidiMap;
        mode: ControllerMidiMap;
        sidechainInput: ControllerMidiMap;
    }
    interface CompressorOptionValues extends OptionValues {
    }
    class CompressorOptions implements Options {
        readonly optionValues: CompressorOptionValues;
        constructor(optionValues: CompressorOptionValues);
    }
    export class Module extends ModuleBase implements ModuleType {
        name: string;
        flags: number;
        readonly typeName = "Compressor";
        readonly controllerSetters: ((val: number) => void)[];
        readonly controllerValues: CompressorControllerValues;
        readonly controllers: CompressorControllers;
        readonly c: CompressorControllers;
        readonly midiMaps: CompressorControllerMidiMaps;
        readonly optionValues: CompressorOptionValues;
        readonly options: CompressorOptions;
        readonly o: CompressorOptions;
        behavior?: CompressorBehavior;
        constructor();
        attachTo(project: Project): AttachedModule;
        setRawControllerValue(ctlNum: number, value: number): void;
        rawControllerValues(): Generator<number>;
        setMidiMaps(midiMaps: MidiMap[]): void;
        midiMapsArray(): MidiMap[];
    }
    export class AttachedModule extends Module {
        get index(): number;
        set index(_: number);
    }
    export {};
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/compressor.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { Controllers, ModuleType } from "./moduleType";
import { InputControllerValues } from "./inputControllerValues";
import { Channels } from "./inputEnums";
export declare class InputBaseControllers implements Controllers {
    readonly module: ModuleType;
    readonly controllerValues: InputControllerValues;
    constructor(module: ModuleType, controllerValues: InputControllerValues);
    get volume(): number;
    set volume(newValue: number);
    get channels(): Channels;
    set channels(newValue: Channels);
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/inputBaseControllers.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { DistortionBaseControllers } from "./distortionBaseControllers";
export declare class DistortionControllers extends DistortionBaseControllers {
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/distortionControllers.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { Controllers, ModuleType } from "./moduleType";
import { DrumSynthControllerValues } from "./drumSynthControllerValues";
export declare class DrumSynthBaseControllers implements Controllers {
    readonly module: ModuleType;
    readonly controllerValues: DrumSynthControllerValues;
    constructor(module: ModuleType, controllerValues: DrumSynthControllerValues);
    get volume(): number;
    set volume(newValue: number);
    get panning(): number;
    set panning(newValue: number);
    get polyphonyCh(): number;
    set polyphonyCh(newValue: number);
    get bassVolume(): number;
    set bassVolume(newValue: number);
    get bassPower(): number;
    set bassPower(newValue: number);
    get bassTone(): number;
    set bassTone(newValue: number);
    get bassLength(): number;
    set bassLength(newValue: number);
    get hihatVolume(): number;
    set hihatVolume(newValue: number);
    get hihatLength(): number;
    set hihatLength(newValue: number);
    get snareVolume(): number;
    set snareVolume(newValue: number);
    get snareTone(): number;
    set snareTone(newValue: number);
    get snareLength(): number;
    set snareLength(newValue: number);
    get bassPanning(): number;
    set bassPanning(newValue: number);
    get hihatPanning(): number;
    set hihatPanning(newValue: number);
    get snarePanning(): number;
    set snarePanning(newValue: number);
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/drumSynthBaseControllers.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { ModuleSpecificBehavior } from "./moduleSpecificBehavior";
import { ModuleDataChunks } from "../moduleDataChunk";
import { Chunk } from "../chunks/chunk";
export declare class AnalogGeneratorBehavior extends ModuleSpecificBehavior {
    drawnWaveform: Int8Array;
    chnk(): number;
    processDataChunks(dataChunks: ModuleDataChunks): void;
    private processDrawnWaveformChunk;
    typeSpecificChunks(): Generator<Chunk>;
}
export declare const defaultDrawnWaveform: Int8Array;
`,
    "file:///node_modules/@types/radiant-voices/modtypes/analogGeneratorBehavior.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { ModuleSpecificBehavior } from "./moduleSpecificBehavior";
export declare class EchoBehavior extends ModuleSpecificBehavior {
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/echoBehavior.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { ModuleSpecificBehavior } from "./moduleSpecificBehavior";
export declare class PitchDetectorBehavior extends ModuleSpecificBehavior {
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/pitchDetectorBehavior.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { ControllerValues } from "./moduleType";
import { Curve } from "./adsrEnums";
import { State } from "./adsrEnums";
import { OnNoteOn } from "./adsrEnums";
import { OnNoteOff } from "./adsrEnums";
import { Mode } from "./adsrEnums";
import { SmoothTransitions } from "./adsrEnums";
export interface AdsrControllerValues extends ControllerValues {
    volume: number;
    attackMs: number;
    decayMs: number;
    sustainLevel: number;
    releaseMs: number;
    attackCurve: Curve;
    decayCurve: Curve;
    releaseCurve: Curve;
    sustain: boolean;
    sustainPedal: boolean;
    state: State;
    onNoteOn: OnNoteOn;
    onNoteOff: OnNoteOff;
    mode: Mode;
    smoothTransitions: SmoothTransitions;
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/adsrControllerValues.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { Controllers, ModuleType } from "./moduleType";
import { MetaModuleControllerValues } from "./metaModuleControllerValues";
import { PlayPatterns } from "./metaModuleEnums";
export declare class MetaModuleBaseControllers implements Controllers {
    readonly module: ModuleType;
    readonly controllerValues: MetaModuleControllerValues;
    constructor(module: ModuleType, controllerValues: MetaModuleControllerValues);
    get volume(): number;
    set volume(newValue: number);
    get inputModule(): number;
    set inputModule(newValue: number);
    get playPatterns(): PlayPatterns;
    set playPatterns(newValue: PlayPatterns);
    get bpm(): number;
    set bpm(newValue: number);
    get tpl(): number;
    set tpl(newValue: number);
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/metaModuleBaseControllers.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { ModuleSpecificBehavior } from "./moduleSpecificBehavior";
import { Project } from "../project";
import { ModuleDataChunks } from "../moduleDataChunk";
import { Chunk } from "../chunks/chunk";
export declare class MetaModuleBehavior extends ModuleSpecificBehavior {
    project?: Project;
    readonly mappings: Mapping[];
    readonly controllerNames: Array<string | undefined>;
    chnk(): number;
    processDataChunks(dataChunks: ModuleDataChunks): void;
    private processProjectData;
    private processMappingData;
    private processControllerName;
    typeSpecificChunks(): Generator<Chunk>;
}
interface Mapping {
    module: number;
    controller: number;
}
export {};
`,
    "file:///node_modules/@types/radiant-voices/modtypes/metaModuleBehavior.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { ControllerValues } from "./moduleType";
import { Mode } from "./waveShaperEnums";
export interface WaveShaperControllerValues extends ControllerValues {
    inputVolume: number;
    mix: number;
    outputVolume: number;
    symmetric: boolean;
    mode: Mode;
    dcBlocker: boolean;
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/waveShaperControllerValues.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { ModuleSpecificBehavior } from "./moduleSpecificBehavior";
export declare class AdsrBehavior extends ModuleSpecificBehavior {
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/adsrBehavior.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { MidiMap, ControllerMidiMap, ControllerMidiMaps } from "../controllerMidiMap";
import { Project } from "../project";
import { ModuleBase } from "./moduleBase";
import { ModuleType, OptionValues, Options } from "./moduleType";
import { FmBehavior } from "./fmBehavior";
import { FmControllers } from "./fmControllers";
import { FmControllerValues } from "./fmControllerValues";
export declare namespace Fm {
    export enum Mode {
        Hq = 0,
        HqMono = 1,
        Lq = 2,
        LqMono = 3
    }
    export enum CtlNum {
        CVolume = 1,
        MVolume = 2,
        Panning = 3,
        CFreqRatio = 4,
        MFreqRatio = 5,
        MFeedback = 6,
        CAttack = 7,
        CDecay = 8,
        CSustain = 9,
        CRelease = 10,
        MAttack = 11,
        MDecay = 12,
        MSustain = 13,
        MRelease = 14,
        MScalingPerKey = 15,
        PolyphonyCh = 16,
        Mode = 17
    }
    interface FmControllerMidiMaps extends ControllerMidiMaps {
        cVolume: ControllerMidiMap;
        mVolume: ControllerMidiMap;
        panning: ControllerMidiMap;
        cFreqRatio: ControllerMidiMap;
        mFreqRatio: ControllerMidiMap;
        mFeedback: ControllerMidiMap;
        cAttack: ControllerMidiMap;
        cDecay: ControllerMidiMap;
        cSustain: ControllerMidiMap;
        cRelease: ControllerMidiMap;
        mAttack: ControllerMidiMap;
        mDecay: ControllerMidiMap;
        mSustain: ControllerMidiMap;
        mRelease: ControllerMidiMap;
        mScalingPerKey: ControllerMidiMap;
        polyphonyCh: ControllerMidiMap;
        mode: ControllerMidiMap;
    }
    interface FmOptionValues extends OptionValues {
    }
    class FmOptions implements Options {
        readonly optionValues: FmOptionValues;
        constructor(optionValues: FmOptionValues);
    }
    export class Module extends ModuleBase implements ModuleType {
        name: string;
        flags: number;
        readonly typeName = "FM";
        readonly controllerSetters: ((val: number) => void)[];
        readonly controllerValues: FmControllerValues;
        readonly controllers: FmControllers;
        readonly c: FmControllers;
        readonly midiMaps: FmControllerMidiMaps;
        readonly optionValues: FmOptionValues;
        readonly options: FmOptions;
        readonly o: FmOptions;
        behavior?: FmBehavior;
        constructor();
        attachTo(project: Project): AttachedModule;
        setRawControllerValue(ctlNum: number, value: number): void;
        rawControllerValues(): Generator<number>;
        setMidiMaps(midiMaps: MidiMap[]): void;
        midiMapsArray(): MidiMap[];
    }
    export class AttachedModule extends Module {
        get index(): number;
        set index(_: number);
    }
    export {};
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/fm.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { MetaModuleBaseControllers } from "./metaModuleBaseControllers";
export declare class MetaModuleControllers extends MetaModuleBaseControllers {
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/metaModuleControllers.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { MidiMap, ControllerMidiMap, ControllerMidiMaps } from "../controllerMidiMap";
import { Project } from "../project";
import { ModuleBase } from "./moduleBase";
import { ModuleType, OptionValues, Options } from "./moduleType";
import { GpioBehavior } from "./gpioBehavior";
import { GpioControllers } from "./gpioControllers";
import { GpioControllerValues } from "./gpioControllerValues";
export declare namespace Gpio {
    export enum CtlNum {
        Out = 1,
        OutPin = 2,
        OutThreshold = 3,
        In = 4,
        InPin = 5,
        InNote = 6,
        InAmplitude = 7
    }
    interface GpioControllerMidiMaps extends ControllerMidiMaps {
        out: ControllerMidiMap;
        outPin: ControllerMidiMap;
        outThreshold: ControllerMidiMap;
        in: ControllerMidiMap;
        inPin: ControllerMidiMap;
        inNote: ControllerMidiMap;
        inAmplitude: ControllerMidiMap;
    }
    interface GpioOptionValues extends OptionValues {
    }
    class GpioOptions implements Options {
        readonly optionValues: GpioOptionValues;
        constructor(optionValues: GpioOptionValues);
    }
    export class Module extends ModuleBase implements ModuleType {
        name: string;
        flags: number;
        readonly typeName = "GPIO";
        readonly controllerSetters: ((val: number) => void)[];
        readonly controllerValues: GpioControllerValues;
        readonly controllers: GpioControllers;
        readonly c: GpioControllers;
        readonly midiMaps: GpioControllerMidiMaps;
        readonly optionValues: GpioOptionValues;
        readonly options: GpioOptions;
        readonly o: GpioOptions;
        behavior?: GpioBehavior;
        constructor();
        attachTo(project: Project): AttachedModule;
        setRawControllerValue(ctlNum: number, value: number): void;
        rawControllerValues(): Generator<number>;
        setMidiMaps(midiMaps: MidiMap[]): void;
        midiMapsArray(): MidiMap[];
    }
    export class AttachedModule extends Module {
        get index(): number;
        set index(_: number);
    }
    export {};
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/gpio.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { ModuleSpecificBehavior } from "./moduleSpecificBehavior";
export declare class FlangerBehavior extends ModuleSpecificBehavior {
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/flangerBehavior.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { Controllers, ModuleType } from "./moduleType";
import { EqControllerValues } from "./eqControllerValues";
import { Channels } from "./eqEnums";
export declare class EqBaseControllers implements Controllers {
    readonly module: ModuleType;
    readonly controllerValues: EqControllerValues;
    constructor(module: ModuleType, controllerValues: EqControllerValues);
    get low(): number;
    set low(newValue: number);
    get middle(): number;
    set middle(newValue: number);
    get high(): number;
    set high(newValue: number);
    get channels(): Channels;
    set channels(newValue: Channels);
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/eqBaseControllers.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
export declare enum SampleInterpolation {
    Off = 0,
    Linear = 1,
    Spline = 2
}
export declare enum EnvelopeInterpolation {
    Off = 0,
    Linear = 1
}
export declare enum VibratoType {
    Sin = 0,
    Saw = 1,
    Square = 2
}
export declare enum LoopType {
    Off = 0,
    Forward = 1,
    PingPong = 2
}
export declare enum Format {
    Int8 = 1,
    Int16 = 2,
    Float32 = 4
}
export declare enum Channels {
    Mono = 0,
    Stereo = 8
}
export declare enum EnvelopeFlags {
    Enabled = 1,
    Sustain = 2,
    Loop = 4
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/samplerEnums.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `export * as m from "./m";
export { ModuleType } from "./moduleType";
`,
    "file:///node_modules/@types/radiant-voices/modtypes/index.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { Controllers, ModuleType } from "./moduleType";
import { Velocity2CtlControllerValues } from "./velocity2CtlControllerValues";
import { NoteOffAction } from "./velocity2CtlEnums";
export declare class Velocity2CtlBaseControllers implements Controllers {
    readonly module: ModuleType;
    readonly controllerValues: Velocity2CtlControllerValues;
    constructor(module: ModuleType, controllerValues: Velocity2CtlControllerValues);
    get noteOffAction(): NoteOffAction;
    set noteOffAction(newValue: NoteOffAction);
    get outMin(): number;
    set outMin(newValue: number);
    get outMax(): number;
    set outMax(newValue: number);
    get outOffset(): number;
    set outOffset(newValue: number);
    get outController(): number;
    set outController(newValue: number);
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/velocity2CtlBaseControllers.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { MidiMap, ControllerMidiMap, ControllerMidiMaps } from "../controllerMidiMap";
import { Project } from "../project";
import { ModuleBase } from "./moduleBase";
import { ModuleType, OptionValues, Options } from "./moduleType";
import { FeedbackBehavior } from "./feedbackBehavior";
import { FeedbackControllers } from "./feedbackControllers";
import { FeedbackControllerValues } from "./feedbackControllerValues";
export declare namespace Feedback {
    export enum Channels {
        Stereo = 0,
        Mono = 1
    }
    export enum CtlNum {
        Volume = 1,
        Channels = 2
    }
    interface FeedbackControllerMidiMaps extends ControllerMidiMaps {
        volume: ControllerMidiMap;
        channels: ControllerMidiMap;
    }
    interface FeedbackOptionValues extends OptionValues {
    }
    class FeedbackOptions implements Options {
        readonly optionValues: FeedbackOptionValues;
        constructor(optionValues: FeedbackOptionValues);
    }
    export class Module extends ModuleBase implements ModuleType {
        name: string;
        flags: number;
        readonly typeName = "Feedback";
        readonly controllerSetters: ((val: number) => void)[];
        readonly controllerValues: FeedbackControllerValues;
        readonly controllers: FeedbackControllers;
        readonly c: FeedbackControllers;
        readonly midiMaps: FeedbackControllerMidiMaps;
        readonly optionValues: FeedbackOptionValues;
        readonly options: FeedbackOptions;
        readonly o: FeedbackOptions;
        behavior?: FeedbackBehavior;
        constructor();
        attachTo(project: Project): AttachedModule;
        setRawControllerValue(ctlNum: number, value: number): void;
        rawControllerValues(): Generator<number>;
        setMidiMaps(midiMaps: MidiMap[]): void;
        midiMapsArray(): MidiMap[];
    }
    export class AttachedModule extends Module {
        get index(): number;
        set index(_: number);
    }
    export {};
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/feedback.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { ModuleSpecificBehavior } from "./moduleSpecificBehavior";
export declare class FmBehavior extends ModuleSpecificBehavior {
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/fmBehavior.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { ModuleSpecificBehavior } from "./moduleSpecificBehavior";
export declare class FeedbackBehavior extends ModuleSpecificBehavior {
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/feedbackBehavior.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { MidiMap, ControllerMidiMap, ControllerMidiMaps } from "../controllerMidiMap";
import { Project } from "../project";
import { ModuleBase } from "./moduleBase";
import { ModuleType, OptionValues, Options } from "./moduleType";
import { VibratoBehavior } from "./vibratoBehavior";
import { VibratoControllers } from "./vibratoControllers";
import { VibratoControllerValues } from "./vibratoControllerValues";
export declare namespace Vibrato {
    export enum Channels {
        Stereo = 0,
        Mono = 1
    }
    export enum FrequencyUnit {
        Hz_64 = 0,
        Ms = 1,
        Hz = 2,
        Tick = 3,
        Line = 4,
        Line_2 = 5,
        Line_3 = 6
    }
    export enum CtlNum {
        Volume = 1,
        Amplitude = 2,
        Freq = 3,
        Channels = 4,
        SetPhase = 5,
        FrequencyUnit = 6,
        ExponentialAmplitude = 7
    }
    interface VibratoControllerMidiMaps extends ControllerMidiMaps {
        volume: ControllerMidiMap;
        amplitude: ControllerMidiMap;
        freq: ControllerMidiMap;
        channels: ControllerMidiMap;
        setPhase: ControllerMidiMap;
        frequencyUnit: ControllerMidiMap;
        exponentialAmplitude: ControllerMidiMap;
    }
    interface VibratoOptionValues extends OptionValues {
    }
    class VibratoOptions implements Options {
        readonly optionValues: VibratoOptionValues;
        constructor(optionValues: VibratoOptionValues);
    }
    export class Module extends ModuleBase implements ModuleType {
        name: string;
        flags: number;
        readonly typeName = "Vibrato";
        readonly controllerSetters: ((val: number) => void)[];
        readonly controllerValues: VibratoControllerValues;
        readonly controllers: VibratoControllers;
        readonly c: VibratoControllers;
        readonly midiMaps: VibratoControllerMidiMaps;
        readonly optionValues: VibratoOptionValues;
        readonly options: VibratoOptions;
        readonly o: VibratoOptions;
        behavior?: VibratoBehavior;
        constructor();
        attachTo(project: Project): AttachedModule;
        setRawControllerValue(ctlNum: number, value: number): void;
        rawControllerValues(): Generator<number>;
        setMidiMaps(midiMaps: MidiMap[]): void;
        midiMapsArray(): MidiMap[];
    }
    export class AttachedModule extends Module {
        get index(): number;
        set index(_: number);
    }
    export {};
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/vibrato.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { Controllers, ModuleType } from "./moduleType";
import { MultiSynthControllerValues } from "./multiSynthControllerValues";
export declare class MultiSynthBaseControllers implements Controllers {
    readonly module: ModuleType;
    readonly controllerValues: MultiSynthControllerValues;
    constructor(module: ModuleType, controllerValues: MultiSynthControllerValues);
    get transpose(): number;
    set transpose(newValue: number);
    get randomPitch(): number;
    set randomPitch(newValue: number);
    get velocity(): number;
    set velocity(newValue: number);
    get finetune(): number;
    set finetune(newValue: number);
    get randomPhase(): number;
    set randomPhase(newValue: number);
    get randomVelocity(): number;
    set randomVelocity(newValue: number);
    get phase(): number;
    set phase(newValue: number);
    get curve2Influence(): number;
    set curve2Influence(newValue: number);
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/multiSynthBaseControllers.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
export declare enum PlayPatterns {
    Off = 0,
    On = 1,
    OnNoRepeat = 2
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/metaModuleEnums.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { FlangerBaseControllers } from "./flangerBaseControllers";
export declare class FlangerControllers extends FlangerBaseControllers {
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/flangerControllers.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { ControllerValues } from "./moduleType";
export interface MultiCtlControllerValues extends ControllerValues {
    value: number;
    gain: number;
    quantization: number;
    outOffset: number;
    response: number;
    sampleRateHz: number;
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/multiCtlControllerValues.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { Controllers, ModuleType } from "./moduleType";
import { OutputControllerValues } from "./outputControllerValues";
export declare class OutputBaseControllers implements Controllers {
    readonly module: ModuleType;
    readonly controllerValues: OutputControllerValues;
    constructor(module: ModuleType, controllerValues: OutputControllerValues);
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/outputBaseControllers.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { Controllers, ModuleType } from "./moduleType";
import { Pitch2CtlControllerValues } from "./pitch2CtlControllerValues";
import { Mode } from "./pitch2CtlEnums";
import { NoteOffAction } from "./pitch2CtlEnums";
export declare class Pitch2CtlBaseControllers implements Controllers {
    readonly module: ModuleType;
    readonly controllerValues: Pitch2CtlControllerValues;
    constructor(module: ModuleType, controllerValues: Pitch2CtlControllerValues);
    get mode(): Mode;
    set mode(newValue: Mode);
    get noteOffAction(): NoteOffAction;
    set noteOffAction(newValue: NoteOffAction);
    get firstNote(): number;
    set firstNote(newValue: number);
    get numberOfSemitones(): number;
    set numberOfSemitones(newValue: number);
    get outMin(): number;
    set outMin(newValue: number);
    get outMax(): number;
    set outMax(newValue: number);
    get outController(): number;
    set outController(newValue: number);
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/pitch2CtlBaseControllers.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
export declare enum Type {
    Lp = 0,
    Hp = 1,
    Bp = 2,
    Notch = 3
}
export declare enum Mode {
    Hq = 0,
    HqMono = 1,
    Lq = 2,
    LqMono = 3
}
export declare enum RollOff {
    Db_12 = 0,
    Db_24 = 1,
    Db_36 = 2,
    Db_48 = 3
}
export declare enum LfoFreqUnit {
    Hz_0_02 = 0,
    Ms = 1,
    Hz = 2,
    Tick = 3,
    Line = 4,
    Line_2 = 5,
    Line_3 = 6
}
export declare enum LfoWaveform {
    Sin = 0,
    Saw = 1,
    Saw2 = 2,
    Square = 3,
    Random = 4
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/filterEnums.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { FeedbackBaseControllers } from "./feedbackBaseControllers";
export declare class FeedbackControllers extends FeedbackBaseControllers {
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/feedbackControllers.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { KickerBaseControllers } from "./kickerBaseControllers";
export declare class KickerControllers extends KickerBaseControllers {
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/kickerControllers.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { ModuleSpecificBehavior } from "./moduleSpecificBehavior";
export declare class DistortionBehavior extends ModuleSpecificBehavior {
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/distortionBehavior.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { MidiMap, ControllerMidiMap, ControllerMidiMaps } from "../controllerMidiMap";
import { Project } from "../project";
import { ModuleBase } from "./moduleBase";
import { ModuleType, OptionValues, Options } from "./moduleType";
import { VocalFilterBehavior } from "./vocalFilterBehavior";
import { VocalFilterControllers } from "./vocalFilterControllers";
import { VocalFilterControllerValues } from "./vocalFilterControllerValues";
export declare namespace VocalFilter {
    export enum VoiceType {
        Soprano = 0,
        Alto = 1,
        Tenor = 2,
        Bass = 3
    }
    export enum Channels {
        Stereo = 0,
        Mono = 1
    }
    export enum CtlNum {
        Volume = 1,
        FormantWidthHz = 2,
        Intensity = 3,
        Formants = 4,
        Vowel = 5,
        VoiceType = 6,
        Channels = 7
    }
    interface VocalFilterControllerMidiMaps extends ControllerMidiMaps {
        volume: ControllerMidiMap;
        formantWidthHz: ControllerMidiMap;
        intensity: ControllerMidiMap;
        formants: ControllerMidiMap;
        vowel: ControllerMidiMap;
        voiceType: ControllerMidiMap;
        channels: ControllerMidiMap;
    }
    interface VocalFilterOptionValues extends OptionValues {
    }
    class VocalFilterOptions implements Options {
        readonly optionValues: VocalFilterOptionValues;
        constructor(optionValues: VocalFilterOptionValues);
    }
    export class Module extends ModuleBase implements ModuleType {
        name: string;
        flags: number;
        readonly typeName = "Vocal filter";
        readonly controllerSetters: ((val: number) => void)[];
        readonly controllerValues: VocalFilterControllerValues;
        readonly controllers: VocalFilterControllers;
        readonly c: VocalFilterControllers;
        readonly midiMaps: VocalFilterControllerMidiMaps;
        readonly optionValues: VocalFilterOptionValues;
        readonly options: VocalFilterOptions;
        readonly o: VocalFilterOptions;
        behavior?: VocalFilterBehavior;
        constructor();
        attachTo(project: Project): AttachedModule;
        setRawControllerValue(ctlNum: number, value: number): void;
        rawControllerValues(): Generator<number>;
        setMidiMaps(midiMaps: MidiMap[]): void;
        midiMapsArray(): MidiMap[];
    }
    export class AttachedModule extends Module {
        get index(): number;
        set index(_: number);
    }
    export {};
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/vocalFilter.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
export declare enum Mode {
    Hq = 0,
    HqMono = 1,
    Lq = 2,
    LqMono = 3
}
export declare enum Waveform {
    Triangle = 0,
    Saw = 1,
    Square = 2,
    Noise = 3,
    Drawn = 4,
    Sin = 5,
    Hsin = 6,
    Asin = 7,
    DrawnSpline = 8,
    NoiseSpline = 9,
    WhiteNoise = 10,
    PinkNoise = 11,
    RedNoise = 12,
    BlueNoise = 13,
    VioletNoise = 14,
    GreyNoise = 15,
    Harmonics = 16
}
export declare enum Filter {
    Off = 0,
    Lp_12db = 1,
    Hp_12db = 2,
    Bp_12db = 3,
    Br_12db = 4,
    Lp_24db = 5,
    Hp_24db = 6,
    Bp_24db = 7,
    Br_24db = 8
}
export declare enum FilterEnvelope {
    Off = 0,
    SustainOff = 1,
    SustainOn = 2
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/analogGeneratorEnums.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { Controllers, ModuleType } from "./moduleType";
import { VocalFilterControllerValues } from "./vocalFilterControllerValues";
import { VoiceType } from "./vocalFilterEnums";
import { Channels } from "./vocalFilterEnums";
export declare class VocalFilterBaseControllers implements Controllers {
    readonly module: ModuleType;
    readonly controllerValues: VocalFilterControllerValues;
    constructor(module: ModuleType, controllerValues: VocalFilterControllerValues);
    get volume(): number;
    set volume(newValue: number);
    get formantWidthHz(): number;
    set formantWidthHz(newValue: number);
    get intensity(): number;
    set intensity(newValue: number);
    get formants(): number;
    set formants(newValue: number);
    get vowel(): number;
    set vowel(newValue: number);
    get voiceType(): VoiceType;
    set voiceType(newValue: VoiceType);
    get channels(): Channels;
    set channels(newValue: Channels);
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/vocalFilterBaseControllers.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { ControllerValues } from "./moduleType";
import { Channels } from "./feedbackEnums";
export interface FeedbackControllerValues extends ControllerValues {
    volume: number;
    channels: Channels;
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/feedbackControllerValues.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { ModuleSpecificBehavior } from "./moduleSpecificBehavior";
export declare class DelayBehavior extends ModuleSpecificBehavior {
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/delayBehavior.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { FilterProBaseControllers } from "./filterProBaseControllers";
export declare class FilterProControllers extends FilterProBaseControllers {
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/filterProControllers.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { MidiMap, ControllerMidiMap, ControllerMidiMaps } from "../controllerMidiMap";
import { Project } from "../project";
import { ModuleBase } from "./moduleBase";
import { ModuleType, OptionValues, Options } from "./moduleType";
import { SpectraVoiceBehavior } from "./spectraVoiceBehavior";
import { SpectraVoiceControllers } from "./spectraVoiceControllers";
import { SpectraVoiceControllerValues } from "./spectraVoiceControllerValues";
export declare namespace SpectraVoice {
    export enum Mode {
        Hq = 0,
        HqMono = 1,
        Lq = 2,
        LqMono = 3,
        HqSpline = 4
    }
    export enum HarmonicType {
        Hsin = 0,
        Rect = 1,
        Org1 = 2,
        Org2 = 3,
        Org3 = 4,
        Org4 = 5,
        Sin = 6,
        Random = 7,
        Triangle1 = 8,
        Triangle2 = 9,
        Overtones1 = 10,
        Overtones2 = 11,
        Overtones3 = 12,
        Overtones4 = 13,
        Overtones1Plus = 14,
        Overtones2Plus = 15,
        Overtones3Plus = 16,
        Overtones4Plus = 17,
        Metal = 18
    }
    export enum CtlNum {
        Volume = 1,
        Panning = 2,
        Attack = 3,
        Release = 4,
        PolyphonyCh = 5,
        Mode = 6,
        Sustain = 7,
        SpectrumResolution = 8,
        Harmonic = 9,
        HFreqHz = 10,
        HVolume = 11,
        HWidth = 12,
        HType = 13
    }
    interface SpectraVoiceControllerMidiMaps extends ControllerMidiMaps {
        volume: ControllerMidiMap;
        panning: ControllerMidiMap;
        attack: ControllerMidiMap;
        release: ControllerMidiMap;
        polyphonyCh: ControllerMidiMap;
        mode: ControllerMidiMap;
        sustain: ControllerMidiMap;
        spectrumResolution: ControllerMidiMap;
        harmonic: ControllerMidiMap;
        hFreqHz: ControllerMidiMap;
        hVolume: ControllerMidiMap;
        hWidth: ControllerMidiMap;
        hType: ControllerMidiMap;
    }
    interface SpectraVoiceOptionValues extends OptionValues {
    }
    class SpectraVoiceOptions implements Options {
        readonly optionValues: SpectraVoiceOptionValues;
        constructor(optionValues: SpectraVoiceOptionValues);
    }
    export class Module extends ModuleBase implements ModuleType {
        name: string;
        flags: number;
        readonly typeName = "SpectraVoice";
        readonly controllerSetters: ((val: number) => void)[];
        readonly controllerValues: SpectraVoiceControllerValues;
        readonly controllers: SpectraVoiceControllers;
        readonly c: SpectraVoiceControllers;
        readonly midiMaps: SpectraVoiceControllerMidiMaps;
        readonly optionValues: SpectraVoiceOptionValues;
        readonly options: SpectraVoiceOptions;
        readonly o: SpectraVoiceOptions;
        behavior?: SpectraVoiceBehavior;
        constructor();
        attachTo(project: Project): AttachedModule;
        setRawControllerValue(ctlNum: number, value: number): void;
        rawControllerValues(): Generator<number>;
        setMidiMaps(midiMaps: MidiMap[]): void;
        midiMapsArray(): MidiMap[];
    }
    export class AttachedModule extends Module {
        get index(): number;
        set index(_: number);
    }
    export {};
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/spectraVoice.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { ControllerValues } from "./moduleType";
export interface GpioControllerValues extends ControllerValues {
    out: boolean;
    outPin: number;
    outThreshold: number;
    in: boolean;
    inPin: number;
    inNote: number;
    inAmplitude: number;
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/gpioControllerValues.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { ControllerValues } from "./moduleType";
import { Channels } from "./vibratoEnums";
import { FrequencyUnit } from "./vibratoEnums";
export interface VibratoControllerValues extends ControllerValues {
    volume: number;
    amplitude: number;
    freq: number;
    channels: Channels;
    setPhase: number;
    frequencyUnit: FrequencyUnit;
    exponentialAmplitude: boolean;
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/vibratoControllerValues.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { Controllers, ModuleType } from "./moduleType";
import { MultiCtlControllerValues } from "./multiCtlControllerValues";
export declare class MultiCtlBaseControllers implements Controllers {
    readonly module: ModuleType;
    readonly controllerValues: MultiCtlControllerValues;
    constructor(module: ModuleType, controllerValues: MultiCtlControllerValues);
    get value(): number;
    set value(newValue: number);
    get gain(): number;
    set gain(newValue: number);
    get quantization(): number;
    set quantization(newValue: number);
    get outOffset(): number;
    set outOffset(newValue: number);
    get response(): number;
    set response(newValue: number);
    get sampleRateHz(): number;
    set sampleRateHz(newValue: number);
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/multiCtlBaseControllers.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { Controllers, ModuleType } from "./moduleType";
import { PitchDetectorControllerValues } from "./pitchDetectorControllerValues";
import { Algorithm } from "./pitchDetectorEnums";
import { RollOff } from "./pitchDetectorEnums";
import { SampleRate } from "./pitchDetectorEnums";
import { Buffer } from "./pitchDetectorEnums";
export declare class PitchDetectorBaseControllers implements Controllers {
    readonly module: ModuleType;
    readonly controllerValues: PitchDetectorControllerValues;
    constructor(module: ModuleType, controllerValues: PitchDetectorControllerValues);
    get algorithm(): Algorithm;
    set algorithm(newValue: Algorithm);
    get threshold(): number;
    set threshold(newValue: number);
    get gain(): number;
    set gain(newValue: number);
    get microtones(): boolean;
    set microtones(newValue: boolean);
    get detectorFinetune(): number;
    set detectorFinetune(newValue: number);
    get lpFilterFreqHz(): number;
    set lpFilterFreqHz(newValue: number);
    get lpFilterRolloff(): RollOff;
    set lpFilterRolloff(newValue: RollOff);
    get alg_1_2SampleRate(): SampleRate;
    set alg_1_2SampleRate(newValue: SampleRate);
    get alg_1_2Buffer(): Buffer;
    set alg_1_2Buffer(newValue: Buffer);
    get alg_1_2BufferOverlapPct(): number;
    set alg_1_2BufferOverlapPct(newValue: number);
    get alg_1Sensitivity(): number;
    set alg_1Sensitivity(newValue: number);
    get recordNotes(): boolean;
    set recordNotes(newValue: boolean);
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/pitchDetectorBaseControllers.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { ControllerValues } from "./moduleType";
import { NoteOn } from "./ctl2NoteEnums";
import { NoteOff } from "./ctl2NoteEnums";
export interface Ctl2NoteControllerValues extends ControllerValues {
    pitch: number;
    firstNote: number;
    rangeSemitones: number;
    transpose: number;
    finetune: number;
    velocity: number;
    state: boolean;
    noteOn: NoteOn;
    noteOff: NoteOff;
    recordNotes: boolean;
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/ctl2NoteControllerValues.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { Controllers, ModuleType } from "./moduleType";
import { DelayControllerValues } from "./delayControllerValues";
import { Channels } from "./delayEnums";
import { DelayUnit } from "./delayEnums";
export declare class DelayBaseControllers implements Controllers {
    readonly module: ModuleType;
    readonly controllerValues: DelayControllerValues;
    constructor(module: ModuleType, controllerValues: DelayControllerValues);
    get dry(): number;
    set dry(newValue: number);
    get wet(): number;
    set wet(newValue: number);
    get delayL(): number;
    set delayL(newValue: number);
    get delayR(): number;
    set delayR(newValue: number);
    get volumeL(): number;
    set volumeL(newValue: number);
    get volumeR(): number;
    set volumeR(newValue: number);
    get channels(): Channels;
    set channels(newValue: Channels);
    get inverse(): boolean;
    set inverse(newValue: boolean);
    get delayUnit(): DelayUnit;
    set delayUnit(newValue: DelayUnit);
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/delayBaseControllers.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { ModuleSpecificBehavior } from "./moduleSpecificBehavior";
export declare class FilterProBehavior extends ModuleSpecificBehavior {
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/filterProBehavior.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { ControllerValues } from "./moduleType";
import { Waveform } from "./generatorEnums";
import { Mode } from "./generatorEnums";
export interface GeneratorControllerValues extends ControllerValues {
    volume: number;
    waveform: Waveform;
    panning: number;
    attack: number;
    release: number;
    polyphonyCh: number;
    mode: Mode;
    sustain: boolean;
    freqModulationByInput: number;
    dutyCycle: number;
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/generatorControllerValues.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { ModuleSpecificBehavior } from "./moduleSpecificBehavior";
export declare class ReverbBehavior extends ModuleSpecificBehavior {
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/reverbBehavior.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
export declare enum ModulationType {
    Amplitude = 0,
    Phase = 1,
    PhaseAbs = 2
}
export declare enum Channels {
    Stereo = 0,
    Mono = 1
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/modulatorEnums.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { ModuleSpecificBehavior } from "./moduleSpecificBehavior";
export declare class LoopBehavior extends ModuleSpecificBehavior {
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/loopBehavior.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
export declare enum Waveform {
    Triangle = 0,
    Saw = 1,
    Square = 2,
    Noise = 3,
    Drawn = 4,
    Sin = 5,
    Hsin = 6,
    Asin = 7,
    Psin = 8
}
export declare enum Mode {
    Stereo = 0,
    Mono = 1
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/generatorEnums.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { Controllers, ModuleType } from "./moduleType";
import { KickerControllerValues } from "./kickerControllerValues";
import { Waveform } from "./kickerEnums";
export declare class KickerBaseControllers implements Controllers {
    readonly module: ModuleType;
    readonly controllerValues: KickerControllerValues;
    constructor(module: ModuleType, controllerValues: KickerControllerValues);
    get volume(): number;
    set volume(newValue: number);
    get waveform(): Waveform;
    set waveform(newValue: Waveform);
    get panning(): number;
    set panning(newValue: number);
    get attack(): number;
    set attack(newValue: number);
    get release(): number;
    set release(newValue: number);
    get boost(): number;
    set boost(newValue: number);
    get acceleration(): number;
    set acceleration(newValue: number);
    get polyphonyCh(): number;
    set polyphonyCh(newValue: number);
    get noClick(): boolean;
    set noClick(newValue: boolean);
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/kickerBaseControllers.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
export declare enum NoteOffAction {
    DoNothing = 0,
    VelDown = 1,
    VelUp = 2
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/velocity2CtlEnums.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
export declare enum LfoWaveform {
    Hsin = 0,
    Sin = 1
}
export declare enum LfoFreqUnit {
    Hz_0_05 = 0,
    Ms = 1,
    Hz = 2,
    Tick = 3,
    Line = 4,
    Line_2 = 5,
    Line_3 = 6
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/flangerEnums.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { ModuleSpecificBehavior } from "./moduleSpecificBehavior";
import { Chunk } from "../chunks/chunk";
import { ModuleDataChunks } from "../moduleDataChunk";
interface Mapping {
    min: number;
    max: number;
    ctl: number;
}
export declare class MultiCtlBehavior extends ModuleSpecificBehavior {
    readonly mappings: Mapping[];
    curve: Uint16Array;
    chnk(): number;
    processDataChunks(dataChunks: ModuleDataChunks): void;
    private processMappingsDataChunk;
    private processCurveDataChunk;
    typeSpecificChunks(): Generator<Chunk>;
}
export {};
`,
    "file:///node_modules/@types/radiant-voices/modtypes/multiCtlBehavior.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { Controllers, ModuleType } from "./moduleType";
import { Ctl2NoteControllerValues } from "./ctl2NoteControllerValues";
import { NoteOn } from "./ctl2NoteEnums";
import { NoteOff } from "./ctl2NoteEnums";
export declare class Ctl2NoteBaseControllers implements Controllers {
    readonly module: ModuleType;
    readonly controllerValues: Ctl2NoteControllerValues;
    constructor(module: ModuleType, controllerValues: Ctl2NoteControllerValues);
    get pitch(): number;
    set pitch(newValue: number);
    get firstNote(): number;
    set firstNote(newValue: number);
    get rangeSemitones(): number;
    set rangeSemitones(newValue: number);
    get transpose(): number;
    set transpose(newValue: number);
    get finetune(): number;
    set finetune(newValue: number);
    get velocity(): number;
    set velocity(newValue: number);
    get state(): boolean;
    set state(newValue: boolean);
    get noteOn(): NoteOn;
    set noteOn(newValue: NoteOn);
    get noteOff(): NoteOff;
    set noteOff(newValue: NoteOff);
    get recordNotes(): boolean;
    set recordNotes(newValue: boolean);
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/ctl2NoteBaseControllers.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { ControllerValues } from "./moduleType";
import { Type } from "./filterEnums";
import { Mode } from "./filterEnums";
import { RollOff } from "./filterEnums";
import { LfoFreqUnit } from "./filterEnums";
import { LfoWaveform } from "./filterEnums";
export interface FilterControllerValues extends ControllerValues {
    volume: number;
    freq: number;
    resonance: number;
    type: Type;
    response: number;
    mode: Mode;
    impulse: number;
    mix: number;
    lfoFreq: number;
    lfoAmp: number;
    setLfoPhase: number;
    exponentialFreq: boolean;
    rollOff: RollOff;
    lfoFreqUnit: LfoFreqUnit;
    lfoWaveform: LfoWaveform;
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/filterControllerValues.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `import { Amplifier } from "./amplifier";
import { DcBlocker } from "./dcBlocker";
import { Delay } from "./delay";
import { Distortion } from "./distortion";
import { Echo } from "./echo";
import { Eq } from "./eq";
import { Filter } from "./filter";
import { Flanger } from "./flanger";
import { FilterPro } from "./filterPro";
import { Lfo } from "./lfo";
import { Loop } from "./loop";
import { PitchShifter } from "./pitchShifter";
import { Reverb } from "./reverb";
import { Channels, EnvelopeFlags, Format, LoopType, VibratoType } from "./samplerEnums";
import { VocalFilter } from "./vocalFilter";
import { Vibrato } from "./vibrato";
import { WaveShaper } from "./waveShaper";
import { ModuleSpecificBehavior } from "./moduleSpecificBehavior";
import { Chunk } from "../chunks/chunk";
import { ModuleDataChunk, ModuleDataChunks } from "../moduleDataChunk";
declare type EffectModule = Amplifier.Module | DcBlocker.Module | Delay.Module | Distortion.Module | Echo.Module | Eq.Module | Filter.Module | FilterPro.Module | Flanger.Module | Lfo.Module | Loop.Module | PitchShifter.Module | Reverb.Module | VocalFilter.Module | Vibrato.Module | WaveShaper.Module;
declare type SampleData = Int8Array | Int16Array | Float32Array | Uint8Array;
export declare class SamplerBehavior extends ModuleSpecificBehavior {
    vibratoType: VibratoType;
    vibratoAttack: number;
    vibratoDepth: number;
    vibratoRate: number;
    volumeFadeout: number;
    noteSampleMap: Record<number, number>;
    samples: (Sample | undefined)[];
    effect?: EffectModule;
    volumeEnvelope: VolumeEnvelope;
    panningEnvelope: PanningEnvelope;
    pitchEnvelope: PitchEnvelope;
    effectControl1Envelope: EffectControlEnvelope;
    effectControl2Envelope: EffectControlEnvelope;
    effectControl3Envelope: EffectControlEnvelope;
    effectControl4Envelope: EffectControlEnvelope;
    chnk(): number;
    processDataChunks(dataChunks: ModuleDataChunks): void;
    private processSamplerConfigChunk;
    private processSampleMetaChunk;
    private processSampleDataChunk;
    private processEffectSynthChunk;
    typeSpecificChunks(): Generator<Chunk>;
}
declare class Sample {
    data: SampleData;
    loopStart: number;
    loopLength: number;
    volume: number;
    finetune: number;
    format: Format;
    channels: Channels;
    rate: number;
    loopType: LoopType;
    loopSustain: boolean;
    panning: number;
    relativeNote: number;
    /**
     * Get number of bytes per frame in the sample data.
     */
    get frameSize(): number;
    /**
     * Get number of frames that are in the sample data.
     */
    get frames(): number;
}
interface Envelope {
    readonly chnm: number;
    readonly min: number;
    readonly max: number;
    points: EnvelopePoint[];
    flags: EnvelopeFlags;
    ctlIndex: number;
    gainPct: number;
    velocity: number;
    sustainPoint: number;
    loopStartPoint: number;
    loopEndPoint: number;
}
interface EnvelopePoint {
    tick: number;
    value: number;
}
declare class BaseEnvelope implements Envelope {
    chnm: number;
    min: number;
    max: number;
    flags: number;
    points: EnvelopePoint[];
    ctlIndex: number;
    gainPct: number;
    velocity: number;
    sustainPoint: number;
    loopStartPoint: number;
    loopEndPoint: number;
    processChunk(chunk: ModuleDataChunk): void;
    chunks(): Generator<Chunk>;
}
declare class VolumeEnvelope extends BaseEnvelope {
    chnm: number;
}
declare class PanningEnvelope extends BaseEnvelope {
    chnm: number;
    min: number;
    max: number;
}
declare class PitchEnvelope extends BaseEnvelope {
    chnm: number;
    min: number;
    max: number;
}
declare class EffectControlEnvelope extends BaseEnvelope {
    readonly chnm: number;
    constructor(chnm: number);
}
export {};
`,
    "file:///node_modules/@types/radiant-voices/modtypes/samplerBehavior.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
export declare enum Mode {
    Hq = 0,
    HqMono = 1,
    Lq = 2,
    LqMono = 3
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/reverbEnums.d.ts"
  )
  monaco.languages.typescript.typescriptDefaults.addExtraLib(
    `/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { ControllerValues } from "./moduleType";
export interface GlideControllerValues extends ControllerValues {
    response: number;
    sampleRateHz: number;
    resetOnFirstNote: boolean;
    polyphony: boolean;
    pitch: number;
    pitchScale: number;
    reset: boolean;
}
`,
    "file:///node_modules/@types/radiant-voices/modtypes/glideControllerValues.d.ts"
  )
}
