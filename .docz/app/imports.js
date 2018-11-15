export const imports = {
  'authentication.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "authentication" */ 'authentication.mdx'),
  'home.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "home" */ 'home.mdx'),
  'installation.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "installation" */ 'installation.mdx'),
  'modules.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "modules" */ 'modules.mdx'),
}
