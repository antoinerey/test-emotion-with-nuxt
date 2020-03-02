import createCache from '@emotion/cache'

export default function({ req }, inject) {
  if (process.server) {
    inject('emotionCache', req.$cache)
  }
  else {
    inject('emotionCache', createCache({ key: 'client' }))
  }
}
