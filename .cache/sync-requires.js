
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/frank/Desktop/inspiral_web/frontend/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/frank/Desktop/inspiral_web/frontend/src/pages/404.js")),
  "component---src-templates-blog-post-js": preferDefault(require("/Users/frank/Desktop/inspiral_web/frontend/src/templates/blogPost.js")),
  "component---src-templates-page-js": preferDefault(require("/Users/frank/Desktop/inspiral_web/frontend/src/templates/page.js"))
}

