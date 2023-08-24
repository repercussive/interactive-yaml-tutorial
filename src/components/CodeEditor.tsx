'use client'

import CodeMirror from '@uiw/react-codemirror'
import { StreamLanguage } from '@codemirror/language'
import { json } from '@codemirror/lang-json'
import { yaml } from '@codemirror/legacy-modes/mode/yaml'

const yamlExtension = StreamLanguage.define(yaml)

type CodeEditorProps = {
  language: 'json' | 'yaml',
  readOnly?: boolean,
  startValue?: string,
  minHeight?: number,
  maxHeight?: number
}

export default function CodeEditor({ 
  language, 
  readOnly = true, 
  startValue = '',
  minHeight,
  maxHeight
}: CodeEditorProps) {
  return (
    <div>
      <CodeMirror
        value={startValue}
        extensions={[language === 'json' ? json() : yamlExtension]}
        theme={'dark'}
        minHeight={minHeight ? `${minHeight}lh` : undefined}
        maxHeight={maxHeight ? `${maxHeight}lh` : undefined}
        readOnly={readOnly}
      />
    </div>
  )
}