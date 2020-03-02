import createCache from '@emotion/cache'

export default function(req, res, next) {
  req.$cache = createCache({ key: 'server' })
  next()
}
