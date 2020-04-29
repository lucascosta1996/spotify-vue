import request from './../request'

export default {
  getCurrentPlayback () {
    return request.get('me/player')
  }
}
