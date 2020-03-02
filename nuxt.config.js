export default {
  mode: 'universal',

  plugins: [
    '@/plugins/index.js',
  ],

  modules: [
    '@/modules/index.js',
  ],

  serverMiddleware: [
    '@/createCacheMiddleware.js',
  ],
}
