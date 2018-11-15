export const imports = {
  'home.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "home" */ 'home.mdx'),
  'installation.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "installation" */ 'installation.mdx'),
}
