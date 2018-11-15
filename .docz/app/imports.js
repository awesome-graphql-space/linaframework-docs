export const imports = {
  '2-styles.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "2-styles" */ '2-styles.mdx'),
  '5-build-next-favorite.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "5-build-next-favorite" */ '5-build-next-favorite.mdx'),
  '6-add-favorites.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "6-add-favorites" */ '6-add-favorites.mdx'),
  '7-refactor-render.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "7-refactor-render" */ '7-refactor-render.mdx'),
  'home.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "home" */ 'home.mdx'),
}
