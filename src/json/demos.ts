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
  - singing
`

const demo03Json =
`{
  "name": "Charlie",
  "address": {
    "street": "123 YAML Avenue",
    "city": "Datatown",
    "postcode": "Y4ML DA74" 
  }
}`

const demo03Yaml = 
`name: Charlie
address:
  street: 123 YAML Avenue
  city: Datatown
  postcode: Y4ML DA74`

export default {
  demo01: { json: demo01Json,  yaml: demo01Yaml },
  demo02: { json: demo02Json, yaml: demo02Yaml },
  demo03: { json: demo03Json, yaml: demo03Yaml }
}