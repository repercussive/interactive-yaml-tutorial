import CodeEditor from '@components/CodeEditor'

export default function Home() {
  return (
    <main>
      <div>
        <h1>Interactive YAML tutorial</h1>
        <CodeEditor language='json' readOnly={false} />
      </div>
    </main>
  )
}
