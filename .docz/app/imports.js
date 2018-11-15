export const imports = {
  '1-home.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "1-home" */ '1-home.mdx'),
  '2-installation.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "2-installation" */ '2-installation.mdx'),
  '3-modules.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "3-modules" */ '3-modules.mdx'),
  '4-authentication.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "4-authentication" */ '4-authentication.mdx'),
}
