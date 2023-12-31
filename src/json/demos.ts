const demo01Json = 
`{
  "name": "Alice",
  "age": 25,
  "wears-glasses": true
}`

const demo01Yaml = 
`name: Alice
age: 25
wears-glasses: true`

const demo02Json =
`{
  "name": "Bob",
  "hobbies": ["skiing", "gaming", "singing"]
}`

const demo02Yaml = 
`name: Bob
hobbies:
  - skiing
  - gaming
  - singing`

const demo03Json =
`{
  "name": "Charlie",
  "address": {
    "house": {
      "number": "123",
      "street-name": "YAML Avenue"
    },
    "city": "Datatown",
    "postcode": "Y4ML DA74" 
  }
}`

const demo03Yaml = 
`name: Charlie
address:
  house: 
    number: 123
    street-name: YAML Avenue
  city: Datatown
  postcode: Y4ML DA74`

const demo04Json = 
`{
  "name": Dan,
  "family-members": [
    { 
      "name": "Alice"
      "relationship": "sister"
    },
    {
      "name": "Bob"
      "relationship": "father"
    },
    {
      "name": "Charlie"
      "relationship": "son"
    }
  ]
}`

const demo04Yaml = 
`name: Dan
family-members:
  - name: Alice
    relationship: sister
  - name: Bob
    relationship: father
  - name: Charlie
    relationship: son`

const demo04YamlAlt = 
`name: Dan
family-members:
  - name: Alice
    relationship: sister

  - name: Bob
    relationship: father

  - name: Charlie
    relationship: son`

const demo05Yaml = 
`pipeline:
  # Install dependencies
  - run: npm ci
    with:
      node-version: "20.5.0"

  # Bundle application to /dist folder
  - run: npm run build
  
  # Run unit tests
  - run: npm test`


const demo06aYaml = 
`my-string: >
  This string is way too long for a single line,
  so I've decided to wrap it onto multiple lines.
  In the resulting string, the line breaks will be turned into spaces.`

const demo06bYaml = 
`pipeline:
  steps:
    - name: Set environment variables
      run: |
        if [ "\${{ github.ref }}" == "refs/heads/main" ]; then
          echo "Setting environment to production"
          export ENVIRONMENT=production
        else
          echo "Setting environment to staging"
          export ENVIRONMENT=staging
        fi`

export default {
  simple: { json: demo01Json,  yaml: demo01Yaml },
  arrays: { json: demo02Json, yaml: demo02Yaml },
  nestedData: { json: demo03Json, yaml: demo03Yaml },
  arraysOfObjects: { json: demo04Json, yaml: demo04Yaml, yamlAlt: demo04YamlAlt },
  comments: { yaml: demo05Yaml },
  multiLineString: { yamlA: demo06aYaml, yamlB: demo06bYaml }
}