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

export default {
  demo_simple: { json: demo01Json,  yaml: demo01Yaml },
  demo_arrays: { json: demo02Json, yaml: demo02Yaml },
  demo_nestedData: { json: demo03Json, yaml: demo03Yaml },
  demo_arraysOfObjects: { json: demo04Json, yaml: demo04Yaml, yamlAlt: demo04YamlAlt }
}