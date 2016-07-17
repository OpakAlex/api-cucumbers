'use strict';


export function expectResponseJsonToBeJsonSchema(schema, world) {
  return world.lastRequest.then((response) => {
    return response.json().then((json) => {
      world.expect(json).to.be.jsonSchema(JSON.parse(schema))
    })
  })
}
