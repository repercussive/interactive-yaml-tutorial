import { JsonToYamlExercise } from '@components/JsonToYamlExercise'
import exercise01 from '@json/exercises/01_simple.json'
import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles.wrapper}>
      <div>
        <h1>Interactive YAML tutorial</h1>
        <JsonToYamlExercise jsonData={exercise01}  />
      </div>
    </main>
  )
}
