export const imports = {
  '1-set-up.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "1-set-up" */ '1-set-up.mdx'),
  '2-styles.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "2-styles" */ '2-styles.mdx'),
  '3-starter-jsx.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "3-starter-jsx" */ '3-starter-jsx.mdx'),
  '4-get-cat.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "4-get-cat" */ '4-get-cat.mdx'),
  '5-build-next-favorite.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "5-build-next-favorite" */ '5-build-next-favorite.mdx'),
  '6-add-favorites.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "6-add-favorites" */ '6-add-favorites.mdx'),
  '7-refactor-render.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "7-refactor-render" */ '7-refactor-render.mdx'),
  '8-remove-favorites.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "8-remove-favorites" */ '8-remove-favorites.mdx'),
  '9-disable-like.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "9-disable-like" */ '9-disable-like.mdx'),
  'home.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "home" */ 'home.mdx'),
}
