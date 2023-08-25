import { JsonToYamlExercise } from '@components/JsonToYamlExercise'
import { CodeEditor } from '@components/CodeEditor'
import demos from '@json/demos'
import exercises from '@json/exercises'
import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles.wrapper}>
      <div>
        <h1>🧑‍🏫️ Interactive YAML tutorial</h1>
        <section data-info>
          <h2>🤔 What is YAML?</h2>
          <p>
            YAML (short for YAML Ain't Markup Language) is a language for storing data, designed to be <b>human-readable</b>.
            One of the common uses for YAML is <b>configuration files</b>. Several cloud computing tools use YAML to configure settings
            and parameters, including products such as:
          </p>
          <ul>
            <li>Kubernetes</li>
            <li>Ansible</li>
            <li>CircleCI</li>
            <li>GitLab CI/CD</li>
            <li>GitHub Actions</li>
            <li>Azure DevOps</li>
          </ul>
          <h2>🧑 Who is this tutorial for?</h2>
          <p>
            This tutorial is suited for those with an awareness of JSON.
            Each example and exercise demonstrates how JSON can be converted to the equivalent YAML format.
          </p>
        </section>

        <section data-example>
          <h2>📃 Example: simple, flat data</h2>
          <p>Take a look at the JSON object below, which has three key-value pairs.</p>
          <CodeEditor initialValue={demos.exercise01.json} language='json' readOnly />
          <p>
            The equivalent YAML is below. Each key-value pair is represented as a simple line, with the key followed by a colon and the value.
            Notice that string values (e.g. Alice) don't need to be written in quotes.         
          </p>
          <CodeEditor initialValue={demos.exercise01.yaml} language='yaml' readOnly />
          <p>As you can see, the YAML code has less noise and complexity, with the aim of being as readable as possible.</p>
        </section>

        <section data-exercise> 
          <h2>💪 Exercise 1</h2>
          <p>
            Welcome to the first exercise! Take a look at the JSON data below representing a character in a video game. 
            Your task is to <b>write the equivalent YAML code</b> in the empty box.
            Once you're done, hit the "Check answer" button.
          </p>
          <JsonToYamlExercise jsonData={exercises.exercise01} />
        </section>

        <section data-example>
          <h2>📃 Example: arrays</h2>
          <p>In JSON, arrays are expressed in a similar way as in JavaScript:</p>
          <CodeEditor initialValue={demos.exercise02.json} language='json' readOnly/>
          <p>In YAML, the syntax looks quite different.</p>
          <CodeEditor initialValue={demos.exercise02.yaml} language='yaml' readOnly />
          <p>
            Each item in the array is represented with a hyphen followed by a space, 
            and each item is placed on a new, indented line.
          </p>
        </section>

        <section data-exercise>
          <h2>💪 Exercise 2</h2>
          <p>This time, our witch has certain strengths and weaknesses, stored in arrays. Make sure to include all of the data in your answer.</p>
          <JsonToYamlExercise jsonData={exercises.exercise02} />
        </section>
      </div>
    </main>
  )
}
