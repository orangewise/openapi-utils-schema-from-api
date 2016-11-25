var test = require('tape')
var util = require('../.')
var api = require('./fixtures/api.json')

test('input a schema', function (t) {
  t.plan(2)
  t.deepEqual(util.schemaFromApi({}, { 'schema': {} }), {}, 'schema is returned if input is a schema')
  t.equal(util.schemaFromApi({}, {}), false, 'return false if input is not a schema')
  t.end()
})

test('input a $ref', function (t) {
  t.plan(1)
  var cat = { properties: { id: { type: 'string' } }, type: 'object' }
  t.deepEqual(util.schemaFromApi(api, { 'schema': { '$ref': '#/definitions/Cat' } }), cat, 'cat schema is returned if input is a $ref')
  t.end()
})
