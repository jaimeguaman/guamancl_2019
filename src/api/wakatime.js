/* global APP_CONFIG */
import jsonp from 'jsonp'

export default {
  getCodingLanguages (query) {
    return new Promise((resolve, reject) => {
      jsonp(APP_CONFIG.WAKATIME.CODING_LANGUAGE_URL, null, (err, response) => {
        if (err) {
          reject(err.message)
        } else {
          resolve(response.data)
        }
      })
    })
  }
}
