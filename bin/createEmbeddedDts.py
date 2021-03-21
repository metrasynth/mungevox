from io import StringIO
from pathlib import Path

ADDEXTRALIB = "monaco.languages.typescript.typescriptDefaults.addExtraLib"


def main():
    rv_root = (Path(__file__).parent / "../node_modules/radiant-voices/dist").resolve()
    out_path = (Path(__file__).parent / "../src/embeddedDts.ts").resolve()
    out = StringIO()
    print('import { Monaco } from "@monaco-editor/react"', file=out)
    print("export function installEmbeddedDts(monaco: Monaco) {", file=out)
    for dts_path in rv_root.rglob("*.d.ts"):
        rel = dts_path.relative_to(rv_root)
        virtual_path = f"file:///node_modules/@types/radiant-voices/{rel}"
        print(f"{ADDEXTRALIB}(`{dts_path.read_text()}`,{virtual_path!r})", file=out)
    print("}", file=out)
    out_path.write_text(out.getvalue())
    print(out.getvalue())


if __name__ == "__main__":
    main()
