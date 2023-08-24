declare module 'json-to-pretty-yaml' {
  export function stringify(json: object): string
}

declare module 'json-format' {
  function jsonFormat(jsonData: object): string
  export = jsonFormat
}