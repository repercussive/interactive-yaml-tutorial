'use client'

import { CodeEditor } from '@components/CodeEditor'
import { useState } from 'react'
import { parse as parseYaml } from 'yaml' 
import equal from 'fast-deep-equal'
import styles from './JsonToYamlExercise.module.scss'
import YAML from 'json-to-pretty-yaml'
import jsonFormat from 'json-format'

type Props = {
  jsonData: object
}

export default function JsonToYamlExercise({ jsonData }: Props) {
  const [jsonString] = useState(jsonFormat(jsonData))
  const [minimumLines] = useState(calculateMinimumLines(jsonData, jsonString))
  const [isCorrect, setIsCorrect] = useState<boolean | undefined>() 
  const [yamlValue, setYamlValue] = useState('')

  function handleChangeYaml(newValue: string) {
    setIsCorrect(undefined)
    setYamlValue(newValue)
  }

  function handleCheckAnswer() {
    try {
      const parsedYaml = parseYaml(yamlValue)
      console.dir(parsedYaml)
      setIsCorrect(equal(jsonData, parsedYaml))
    }
    catch {
      setIsCorrect(false)
    }
  }

  return (
    <div className={styles.wrapper}>
      <div>
        <CodeEditor language='json' startValue={jsonString} minHeight={minimumLines} readOnly />
        <CodeEditor 
          language='yaml' 
          minHeight={minimumLines}
          onChange={handleChangeYaml}
          highlight={getHighlightColor(isCorrect)}
        />
      </div>
      <div data-is-correct={isCorrect}>
        <p>{getStatusText(isCorrect)}</p>
        <button onClick={handleCheckAnswer} disabled={isCorrect}>{isCorrect ? '' : 'Check answer'}</button>
      </div>
    </div>
  )
}

function countLinesInString(str: string) {
  return str.split(/\r\n|\r|\n/).length
}

function calculateMinimumLines(jsonData: object, jsonString: string) {
  const yamlString = YAML.stringify(jsonData)
  return Math.max(countLinesInString(jsonString), countLinesInString(yamlString))
}

function getStatusText(isCorrect: boolean | undefined) {
  switch (isCorrect) {
    case true: return 'Correct!'
    case false: return 'Not quite, try again'
    default: return 'Convert JSON to YAML, then check your answer'
  }
}

function getHighlightColor(isCorrect: boolean | undefined): 'green' | 'red' | undefined {
  switch (isCorrect) {
    case true: return 'green'
    case false: return 'red'
    default: return undefined
  }
}