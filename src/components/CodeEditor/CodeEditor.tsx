'use client'

import CodeMirror from '@uiw/react-codemirror'
import { StreamLanguage } from '@codemirror/language'
import { json } from '@codemirror/lang-json'
import { yaml } from '@codemirror/legacy-modes/mode/yaml'
import styles from './CodeEditor.module.scss'

const yamlExtension = StreamLanguage.define(yaml)

type Props = {
  language: 'json' | 'yaml',
  readOnly?: boolean,
  startValue?: string,
  minHeight?: number,
  maxHeight?: number,
  highlight?: 'red' | 'green' | undefined
  onChange?: (newValue: string) => void,
}

export default function CodeEditor({ 
  language, 
  readOnly = false, 
  startValue = '',
  minHeight,
  maxHeight,
  onChange,
  highlight
}: Props) {
  return (
    <div className={styles.wrapper}>
      <p>{language.toUpperCase()}</p>
      <CodeMirror
        value={startValue}
        extensions={[language === 'json' ? json() : yamlExtension]}
        theme={'dark'}
        minHeight={minHeight ? `calc(${minHeight}lh + 4px)` : undefined}
        maxHeight={maxHeight ? `${maxHeight}lh` : undefined}
        readOnly={readOnly}
        minWidth='300px'
        onChange={(newValue) => onChange?.(newValue)}
        data-highlight={highlight}
      />
    </div>
  )
}