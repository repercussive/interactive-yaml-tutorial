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
        {/* Intro */}
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

        {/* Example: simple, flat data */}
        <section data-example>
          <h2>📃 Example: simple, flat data</h2>
          <p>Take a look at the JSON object below, which has three key-value pairs.</p>
          <CodeEditor initialValue={demos.simple.json} language='json' readOnly />
          <p>
            The equivalent YAML is below. Each key-value pair is represented as a simple line, with the key followed by a colon and the value.
            Notice that string values (e.g. Alice) don't need to be written in quotes.
          </p>
          <CodeEditor initialValue={demos.simple.yaml} language='yaml' readOnly />
          <p>As you can see, the YAML code has less noise and complexity, with the aim of being as readable as possible.</p>
        </section>

        {/* Exercise 1 */}
        <section data-exercise>
          <h2>💪 Exercise 1</h2>
          <p>
            Welcome to the first exercise! Take a look at the JSON data below representing a character in a video game.
            Your task is to <b>write the equivalent YAML code</b> in the empty box.
            Once you're done, hit the "Check answer" button.
          </p>
          <JsonToYamlExercise jsonData={exercises.simple} />
        </section>

        {/* Example: arrays */}
        <section data-example>
          <h2>📃 Example: arrays</h2>
          <p>In JSON, arrays are expressed in a similar way as in JavaScript:</p>
          <CodeEditor initialValue={demos.arrays.json} language='json' readOnly />
          <p>In YAML, the syntax looks quite different.</p>
          <CodeEditor initialValue={demos.arrays.yaml} language='yaml' readOnly />
          <p>
            Each item in the array is represented with a hyphen followed by a space,
            and each item is placed on a new line.
          </p>
          <p>💡 Keep in mind:</p>
          <ul>
            <li>The space after each hyphen is necessary.</li>
            <li>It's not strictly necessary to indent each element, but it is recommended.</li>
          </ul>
        </section>

        {/* Exercise 2 */}
        <section data-exercise>
          <h2>💪 Exercise 2</h2>
          <p>This time, our witch has certain strengths and weaknesses, stored in arrays. Make sure to include all of the data in your answer.</p>
          <JsonToYamlExercise jsonData={exercises.arrays} />
        </section>

        {/* Example: nested data */}
        <section data-example>
          <h2>📃 Example: nested data</h2>
          <p>In JSON, to create nested data, we place an object inside an object. Take a look at the address in the following example:</p>
          <CodeEditor initialValue={demos.nestedData.json} language='json' readOnly />
          <p>
            YAML uses indentation instead.
            Notice how the "street-name" property belongs to "house", which in turn belongs to "address":
          </p>
          <CodeEditor initialValue={demos.nestedData.yaml} language='yaml' readOnly />
        </section>

        {/* Exercise 3 */}
        <section data-exercise>
          <h2>💪 Exercise 3</h2>
          <p>Our Hexandra now has various spells. You'll need to create a couple levels of nested YAML for this one.</p>
          <p>💡 Tip: don't forget the <b>level</b> property.</p>
          <JsonToYamlExercise jsonData={exercises.nestedData} />
        </section>

        {/* Exercise 4 */}
        <section data-exercise>
          <h2>💪 Exercise 4</h2>
          <p>It's possible for an array to be nested inside an object. Give this exercise a shot.</p>
          <JsonToYamlExercise jsonData={exercises.nestedArrays} />
        </section>

        {/* Example: arrays of objects */}
        <section data-example>
          <h2>📃 Example: arrays of objects</h2>
          <p>A common but slightly more complex data structure is an array where each element of the array is an object:</p>
          <CodeEditor initialValue={demos.arraysOfObjects.json} language='json' readOnly />
          <p>
            Notice how the equivalent YAML syntax logically develops what we've looked at already.
            Each element of the array (each family member) is indicated separately by a hyphen,
            but instead of a single value, each array element is a set of key-value pairs.
          </p>
          <CodeEditor initialValue={demos.arraysOfObjects.yaml} language='yaml' readOnly />
          <p>
            The example above might feel a little cramped. It's a matter of preference,
            but adding an extra line between each array element can aid readability.
          </p>
          <CodeEditor initialValue={demos.arraysOfObjects.yamlAlt} language='yaml' readOnly />
        </section>

        {/* Exercise 5 */}
        <section data-exercise>
          <h2>💪 Exercise 5</h2>
          <p>
            Hexandra also has a variety of skills, which can individually be levelled up as the game progresses.
            You know what to do. 😎
          </p>
          <JsonToYamlExercise jsonData={exercises.arraysOfObjects} />
        </section>

        {/* Intermission */}
        <section data-info>
          <h2>👏 You've got the fundamentals down</h2>
          <p>
            If you've completed all the exercises up to this point,
            then you have the skills to read and write 80-90% of the YAML out there.
          </p>
          <p>Below are a couple of bonus features that are useful to know!</p>
        </section>

        <section data-example>
          <h2>📃 Example: comments</h2>
          <p>
            One limitation of JSON is that it can only store data.
            There's no way to store comments in JSON to help humans understand and contextualise the data.
          </p>
          <p>
            Thankfully, YAML does support comments, which is super handy.
            To create one, just place a hash (#) symbol followed by your comment.
          </p>
          <p>Here's an example of using comments to make a (fictional) configuration file easier to scan and decipher:</p>
          <CodeEditor initialValue={demos.comments.yaml} language='yaml' readOnly />
          <p>Feel free to add comments to any of the previous exercises, and notice that it has no effect on your correct answers.</p>
        </section>

        <section data-example>
          <h2>📃 Example: multi-line strings</h2>
          <p>You can use the <code>{'>'}</code> symbol to wrap a long string across multiple lines for convenience.</p>
          <CodeEditor initialValue={demos.multiLineString.yamlA} language='yaml' readOnly />
          <p>
            If you actually want to preserve the line breaks in the resulting string, you can use a pipe <code>|</code>:
          </p>
          <CodeEditor initialValue={demos.multiLineString.yamlB} language='yaml' readOnly />
          <p>Note, in both of the examples above, YAML will add a single line break to end of the string.</p>
          <p>You can control how YAML handles multi-line strings - see <a href="https://yaml-multiline.info/">here</a>.</p>
        </section>
      </div>
    </main>
  )
}
