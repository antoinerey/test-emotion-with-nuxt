import { extractCritical } from 'emotion-server'

export default {
  mode: 'universal',

  hooks: {
    render: {
      route(url, page) {
        const { css, ids } = extractCritical(page.html)
        const [before, after] = page.html.split('</head>')
        const styleTag = `<style data-emotion-css="${ids.join(' ')}">${css}</style>`

        page.html = `${before}${styleTag}</head>${after}`
      },
    },
  },
}
