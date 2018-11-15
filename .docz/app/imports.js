export const imports = {
  'home.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "home" */ 'home.mdx'),
}
