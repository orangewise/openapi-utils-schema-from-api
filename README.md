# openapi-utils-schema-from-api

[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

Extract schema from openapi definition.

# Installation

```
npm install --save openapi-utils-schema-from-api
```

# Usage

```javascript
var openApiUtils = require('openapi-utils-schema-from-api')

var api = {
  "definitions": {
    "Cat": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string"
        }
      }
    }
  }
}

var schema = openApiUtils.schemaFromApi(api, { 'schema': { '$ref': '#/definitions/Cat' } } )
console.log(schema)
/*
  { type: 'object', properties: { id: { type: 'string' } } }
*/
```
