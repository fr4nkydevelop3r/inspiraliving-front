(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[102],{4098:function(e,r,t){"use strict";t.r(r);var a=t(7294),n=t(6119),o=t(5444),l=t(6125),g=t(3751);r.default=function(e){var r=e.data,t=e.pageContext,d=r.strapiCategory,m=(d.contentSections,d.metadata),b=d.localizations,c=r.strapiGlobal,i=[{name:"blue",text:"text-blue-600",background:"bg-gradient-to-r from-blue-300 to-blue-600",border:"border-blue-500"},{name:"pink",text:"text-pink-500",background:"bg-gradient-to-r from-red-600  to-pink-600",border:"border-pink-500"},{name:"purple",text:"text-purple-500",background:"bg-gradient-to-r from-purple-400 to-purple-700",border:"border-purple-500"},{name:"green",text:"text-green-500",background:"bg-gradient-to-r from-green-400 to-green-900",border:"border-green-500"},{name:"yellow",text:"text-yellow-500",background:"bg-gradient-to-r from-yellow-400 to-yellow-900",border:"border-yellow-500"},{name:"red",text:"text-red-500",background:"bg-gradient-to-r from-red-300 to-red-900",border:"border-red-500"},{name:"gray",text:"text-gray-500",background:"bg-gradient-to-r from-gray-300 to-gray-600",border:"border-gray-500"},{name:"pink",text:"text-pink-500",background:"bg-gradient-to-r from-red-600  to-pink-600",border:"border-pink-500"},{name:"blue",text:"text-blue-600",background:"bg-gradient-to-r from-blue-300 to-blue-600",border:"border-blue-500"},{name:"purple",text:"text-purple-500",background:"bg-gradient-to-r from-purple-400 to-purple-700",border:"border-purple-500"},{name:"green",text:"text-green-500",background:"bg-gradient-to-r from-green-400 to-green-900",border:"border-green-500"},{name:"yellow",text:"text-yellow-500",background:"bg-gradient-to-r from-yellow-400 to-yellow-900",border:"border-yellow-500"},{name:"red",text:"text-red-500",background:"bg-gradient-to-r from-red-300 to-red-900",border:"border-red-500"},{name:"gray",text:"text-gray-500",background:"bg-gradient-to-r from-gray-300 to-gray-600",border:"border-gray-500"}],s=r.allStrapiCategory.edges;"all"!==s[0].node.name&&s.unshift({node:{name:"all",slug:"reflections"}});var u=(0,a.useState)(r.strapiCategory.name),p=u[0];u[1];s=s.map((function(e,r){return{name:e.node.name,color:Object.assign({},i[r]),slug:e.node.slug}}));var x=function(e){return s.find((function(r){return r.name===e})).color},f=function(e){"reflections"!==e&&"reflexiones"!==e?"en"===t.locale?(0,o.navigate)("/"+e):(0,o.navigate)("/es/"+e):"en"===t.locale?(0,o.navigate)("/reflections"):(0,o.navigate)("/es/reflections")},y=r.strapiCategory.articles;return a.createElement(a.Fragment,null,a.createElement(g.Z,{seo:m,global:c}),a.createElement(n.Z,{global:c,pageContext:Object.assign({},t,{localizations:b})},a.createElement("div",{className:"bg-black w-screen px-4 md:px-0"},a.createElement("div",{className:"mx-0 sm:mx-6 "},a.createElement("div",{className:"bg-black container w-full text-xl md:text-2xl text-gray-800 leading-normal rounded-t"},a.createElement("header",{className:"pt-12 mb-16"},a.createElement("ul",{className:"flex flex-wrap"},s.map((function(e,r){return a.createElement("li",{className:e.color.text+" mr-3 cursor-pointer "+(p===e.name?"underline":"")+" ",onClick:function(){return f(e.slug)},key:e.slug},"#",e.name)})))),y.length>0?a.createElement("div",{className:"masonry sm:masonry-sm md:masonry-md"},y.map((function(e){return a.createElement("div",{className:"bg-gray-900 mb-8 border "+x(r.strapiCategory.name).border+" rounded-lg shadow-md break-inside cursor-pointer",onClick:function(){return f(e.slug)},key:e.slug},a.createElement(o.Link,{to:"en"===t.locale?"/"+e.slug:"/es/"+e.slug},a.createElement(l.G,{image:(0,l.d)(e.image[0].localFile),alt:e.title,className:"rounded-lg"})),a.createElement("div",{className:"p-5"},a.createElement(o.Link,{to:"en"===t.locale?"/"+e.slug:"/es/"+e.slug},a.createElement("h5",{className:"mb-2 text-2xl font-bold tracking-tight text-gray-900 "+x(r.strapiCategory.name).text},e.title)),a.createElement("p",{className:"mb-3 text-gray-400"},e.description),a.createElement("div",null)))}))):a.createElement("p",null,"No hay articulos"))))))}}}]);
//# sourceMappingURL=component---src-templates-category-js-8dca3ab11bdfff42fd11.js.map