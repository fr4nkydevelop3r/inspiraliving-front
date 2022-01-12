// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-templates-blog-post-js": () => import("./../../../src/templates/blogPost.js" /* webpackChunkName: "component---src-templates-blog-post-js" */),
  "component---src-templates-category-js": () => import("./../../../src/templates/category.js" /* webpackChunkName: "component---src-templates-category-js" */),
  "component---src-templates-page-js": () => import("./../../../src/templates/page.js" /* webpackChunkName: "component---src-templates-page-js" */),
  "component---src-templates-reflections-js": () => import("./../../../src/templates/reflections.js" /* webpackChunkName: "component---src-templates-reflections-js" */)
}

