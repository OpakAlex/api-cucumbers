'use strict';


export function expectResponseStatusToEqual(status, world) {
  return world.lastRequest.then((response) => {
    world.expect(`${response.status}`).to.equal(status)
  })
}
