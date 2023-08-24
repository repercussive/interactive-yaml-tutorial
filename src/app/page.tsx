import CodeEditor from '@components/CodeEditor'
import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles.wrapper}>
      <div>
        <h1>Interactive YAML tutorial</h1>
        <CodeEditor language='json' readOnly={false} />
      </div>
    </main>
  )
}
