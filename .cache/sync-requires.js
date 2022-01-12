
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/frank/Desktop/website_inspiraliving/frontend/src/pages/404.js")),
  "component---src-templates-blog-post-js": preferDefault(require("/Users/frank/Desktop/website_inspiraliving/frontend/src/templates/blogPost.js")),
  "component---src-templates-category-js": preferDefault(require("/Users/frank/Desktop/website_inspiraliving/frontend/src/templates/category.js")),
  "component---src-templates-page-js": preferDefault(require("/Users/frank/Desktop/website_inspiraliving/frontend/src/templates/page.js")),
  "component---src-templates-reflections-js": preferDefault(require("/Users/frank/Desktop/website_inspiraliving/frontend/src/templates/reflections.js"))
}

