'use strict';


export function get(url, headers, world) {
  world.lastRequestUrl = url
  world.lastRequestInit['headers'] = headers
  world.lastRequest = fetch(world)
}

export function fetch(world) {
  return world.fetch(world.lastRequestUrl, world.lastRequestInit)
}
