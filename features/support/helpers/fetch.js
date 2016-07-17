'use strict';


export function get(urlOrPath, headers, world) {
  world.lastRequestUrl = `${world.lastRequestUrl || ''}${urlOrPath}`
  world.lastRequestInit['headers'] = Object.assign((world.lastRequestInit.headers || {}), headers)
  world.lastRequest = fetch(world)
}

export function fetch(world) {
  return world.fetch(world.lastRequestUrl, world.lastRequestInit)
}
