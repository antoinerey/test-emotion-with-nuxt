import { renderStyle } from '@egoist/vue-emotion/server'

export default function() {
  this.nuxt.hook('render:route', (url, { html }, { req }) => {
    const styles = renderStyle(req.$cache, html)
    console.log(styles)
  })
}
