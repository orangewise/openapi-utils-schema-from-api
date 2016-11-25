exports.schemaFromApi = function (api, schema) {
  if (!('schema' in schema)) {
    return false
  }
  schema = schema['schema']
  if ('$ref' in schema) {
    var splitup = schema['$ref'].split('/')
    var schemaName = splitup[splitup.length - 1]
    if ((schemaName in api['definitions'])) {
      return api['definitions'][schemaName]
    } else {
      return false
    }
  } else {
    return schema
  }
}
