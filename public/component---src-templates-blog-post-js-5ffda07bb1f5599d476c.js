(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[989],{6439:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Ke}});for(var r=n(7294),i=n(6119),o=n(3751),a=n(2375),l=n(3088),u=n(7492),c={tokenize:function(e,t,n){return function(t){return e.consume(t),r};function r(t){return 87===t||119===t?(e.consume(t),i):n(t)}function i(t){return 87===t||119===t?(e.consume(t),o):n(t)}function o(t){return 46===t?(e.consume(t),a):n(t)}function a(e){return null===e||(0,u.Ch)(e)?n(e):t(e)}},partial:!0},f={tokenize:function(e,t,n){var r,i;return o;function o(t){return 38===t?e.check(p,l,a)(t):46===t||95===t?e.check(h,l,a)(t):null===t||(0,u.Av)(t)||(0,u.B8)(t)||45!==t&&(0,u.Xh)(t)?l(t):(e.consume(t),o)}function a(t){return 46===t?(i=r,r=void 0,e.consume(t),o):(95===t&&(r=!0),e.consume(t),o)}function l(e){return i||r?n(e):t(e)}},partial:!0},s={tokenize:function(e,t){var n=0;return r;function r(a){return 38===a?e.check(p,t,i)(a):(40===a&&n++,41===a?e.check(h,o,i)(a):x(a)?t(a):y(a)?e.check(h,t,i)(a):(e.consume(a),r))}function i(t){return e.consume(t),r}function o(e){return--n<0?t(e):i(e)}},partial:!0},h={tokenize:function(e,t,n){return function(t){return e.consume(t),r};function r(i){return y(i)?(e.consume(i),r):x(i)?t(i):n(i)}},partial:!0},p={tokenize:function(e,t,n){return function(t){return e.consume(t),r};function r(t){return(0,u.jv)(t)?(e.consume(t),r):59===t?(e.consume(t),i):n(t)}function i(e){return x(e)?t(e):n(e)}},partial:!0},g={tokenize:function(e,t,n){var r=this;return function(t){if(87!==t&&119!==t||!w(r.previous)||F(r.events))return n(t);return e.enter("literalAutolink"),e.enter("literalAutolinkWww"),e.check(c,e.attempt(f,e.attempt(s,i),n),n)(t)};function i(n){return e.exit("literalAutolinkWww"),e.exit("literalAutolink"),t(n)}},previous:w},d={tokenize:function(e,t,n){var r=this;return function(t){if(72!==t&&104!==t||!D(r.previous)||F(r.events))return n(t);return e.enter("literalAutolink"),e.enter("literalAutolinkHttp"),e.consume(t),i};function i(t){return 84===t||116===t?(e.consume(t),o):n(t)}function o(t){return 84===t||116===t?(e.consume(t),a):n(t)}function a(t){return 80===t||112===t?(e.consume(t),l):n(t)}function l(t){return 83===t||115===t?(e.consume(t),c):c(t)}function c(t){return 58===t?(e.consume(t),h):n(t)}function h(t){return 47===t?(e.consume(t),p):n(t)}function p(t){return 47===t?(e.consume(t),g):n(t)}function g(t){return null===t||(0,u.Av)(t)||(0,u.B8)(t)||(0,u.Xh)(t)?n(t):e.attempt(f,e.attempt(s,d),n)(t)}function d(n){return e.exit("literalAutolinkHttp"),e.exit("literalAutolink"),t(n)}},previous:D},m={tokenize:function(e,t,n){var r,i,o=this;return function(t){if(!C(t)||!A(o.previous)||F(o.events))return n(t);return e.enter("literalAutolink"),e.enter("literalAutolinkEmail"),a(t)};function a(t){return C(t)?(e.consume(t),a):64===t?(e.consume(t),l):n(t)}function l(t){return 46===t?e.check(h,p,c)(t):45===t||95===t?e.check(h,n,f)(t):(0,u.H$)(t)?(!i&&(0,u.pY)(t)&&(i=!0),e.consume(t),l):p(t)}function c(t){return e.consume(t),r=!0,i=void 0,l}function f(t){return e.consume(t),s}function s(t){return 46===t?e.check(h,n,c)(t):l(t)}function p(o){return r&&!i?(e.exit("literalAutolinkEmail"),e.exit("literalAutolink"),t(o)):n(o)}},previous:A},v={},k={text:v},b=48;b<123;)v[b]=m,58===++b?b=65:91===b&&(b=97);function y(e){return 33===e||34===e||39===e||41===e||42===e||44===e||46===e||58===e||59===e||60===e||63===e||95===e||126===e}function x(e){return null===e||60===e||(0,u.z3)(e)}function C(e){return 43===e||45===e||46===e||95===e||(0,u.H$)(e)}function w(e){return null===e||40===e||42===e||95===e||126===e||(0,u.z3)(e)}function D(e){return null===e||!(0,u.jv)(e)}function A(e){return 47!==e&&D(e)}function F(e){for(var t=e.length,n=!1;t--;){var r=e[t][1];if(("labelLink"===r.type||"labelImage"===r.type)&&!r._balanced){n=!0;break}if(r._gfmAutolinkLiteralWalkedInto){n=!1;break}}return e.length>0&&!n&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),n}v[43]=m,v[45]=m,v[46]=m,v[95]=m,v[72]=[m,d],v[104]=[m,d],v[87]=[m,g],v[119]=[m,g];var z=n(6156),L=n(9080),S=n(4827),j=n(6060),E={tokenize:function(e,t,n){var r=this;return(0,S.f)(e,(function(e){var i=r.events[r.events.length-1];return i&&"gfmFootnoteDefinitionIndent"===i[1].type&&4===i[2].sliceSerialize(i[1],!0).length?t(e):n(e)}),"gfmFootnoteDefinitionIndent",5)},partial:!0};function T(e,t,n){for(var r,i=this,o=i.events.length,a=i.parser.gfmFootnotes||(i.parser.gfmFootnotes=[]);o--;){var l=i.events[o][1];if("labelImage"===l.type){r=l;break}if("gfmFootnoteCall"===l.type||"labelLink"===l.type||"label"===l.type||"image"===l.type||"link"===l.type)break}return function(o){if(!r||!r._balanced)return n(o);var l=(0,j.d)(i.sliceSerialize({start:r.end,end:i.now()}));if(94!==l.charCodeAt(0)||!a.includes(l.slice(1)))return n(o);return e.enter("gfmFootnoteCallLabelMarker"),e.consume(o),e.exit("gfmFootnoteCallLabelMarker"),t(o)}}function M(e,t){for(var n=e.length;n--;)if("labelImage"===e[n][1].type&&"enter"===e[n][0]){e[n][1];break}e[n+1][1].type="data",e[n+3][1].type="gfmFootnoteCallLabelMarker";var r={type:"gfmFootnoteCall",start:Object.assign({},e[n+3][1].start),end:Object.assign({},e[e.length-1][1].end)},i={type:"gfmFootnoteCallMarker",start:Object.assign({},e[n+3][1].end),end:Object.assign({},e[n+3][1].end)};i.end.column++,i.end.offset++,i.end._bufferIndex++;var o={type:"gfmFootnoteCallString",start:Object.assign({},i.end),end:Object.assign({},e[e.length-1][1].start)},a={type:"chunkString",contentType:"string",start:Object.assign({},o.start),end:Object.assign({},o.end)},l=[e[n+1],e[n+2],["enter",r,t],e[n+3],e[n+4],["enter",i,t],["exit",i,t],["enter",o,t],["enter",a,t],["exit",a,t],["exit",o,t],e[e.length-2],e[e.length-1],["exit",r,t]];return e.splice.apply(e,[n,e.length-n+1].concat(l)),e}function O(e,t,n){var r,i=this,o=i.parser.gfmFootnotes||(i.parser.gfmFootnotes=[]),a=0;return function(t){return e.enter("gfmFootnoteCall"),e.enter("gfmFootnoteCallLabelMarker"),e.consume(t),e.exit("gfmFootnoteCallLabelMarker"),l};function l(t){return 94!==t?n(t):(e.enter("gfmFootnoteCallMarker"),e.consume(t),e.exit("gfmFootnoteCallMarker"),e.enter("gfmFootnoteCallString"),e.enter("chunkString").contentType="string",c)}function c(l){var s;return null===l||91===l||a++>999?n(l):93===l?r?(e.exit("chunkString"),s=e.exit("gfmFootnoteCallString"),o.includes((0,j.d)(i.sliceSerialize(s)))?function(n){return e.enter("gfmFootnoteCallLabelMarker"),e.consume(n),e.exit("gfmFootnoteCallLabelMarker"),e.exit("gfmFootnoteCall"),t}(l):n(l)):n(l):(e.consume(l),(0,u.z3)(l)||(r=!0),92===l?f:c)}function f(t){return 91===t||92===t||93===t?(e.consume(t),a++,c):c(t)}}function I(e,t,n){var r,i,o=this,a=o.parser.gfmFootnotes||(o.parser.gfmFootnotes=[]),l=0;return function(t){return e.enter("gfmFootnoteDefinition")._container=!0,e.enter("gfmFootnoteDefinitionLabel"),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(t),e.exit("gfmFootnoteDefinitionLabelMarker"),c};function c(t){return 94===t?(e.enter("gfmFootnoteDefinitionMarker"),e.consume(t),e.exit("gfmFootnoteDefinitionMarker"),e.enter("gfmFootnoteDefinitionLabelString"),f):n(t)}function f(t){var a;return null===t||91===t||l>999?n(t):93===t?i?(a=e.exit("gfmFootnoteDefinitionLabelString"),r=(0,j.d)(o.sliceSerialize(a)),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(t),e.exit("gfmFootnoteDefinitionLabelMarker"),e.exit("gfmFootnoteDefinitionLabel"),p):n(t):(0,u.Ch)(t)?(e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),l++,f):(e.enter("chunkString").contentType="string",s(t))}function s(t){return null===t||(0,u.Ch)(t)||91===t||93===t||l>999?(e.exit("chunkString"),f(t)):((0,u.z3)(t)||(i=!0),l++,e.consume(t),92===t?h:s)}function h(t){return 91===t||92===t||93===t?(e.consume(t),l++,s):s(t)}function p(t){return 58===t?(e.enter("definitionMarker"),e.consume(t),e.exit("definitionMarker"),(0,S.f)(e,g,"gfmFootnoteDefinitionWhitespace")):n(t)}function g(e){return a.includes(r)||a.push(r),t(e)}}function _(e,t,n){return e.check(L.w,t,e.attempt(E,t,n))}function R(e){e.exit("gfmFootnoteDefinition")}var B=n(7037),H=n(7230),P=n(7163);function $(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.singleTilde,n={tokenize:i,resolveAll:r};return null==t&&(t=!0),{text:(0,z.Z)({},126,n),insideSpan:{null:[n]},attentionMarkers:{null:[126]}};function r(e,t){for(var n=-1;++n<e.length;)if("enter"===e[n][0]&&"strikethroughSequenceTemporary"===e[n][1].type&&e[n][1]._close)for(var r=n;r--;)if("exit"===e[r][0]&&"strikethroughSequenceTemporary"===e[r][1].type&&e[r][1]._open&&e[n][1].end.offset-e[n][1].start.offset==e[r][1].end.offset-e[r][1].start.offset){e[n][1].type="strikethroughSequence",e[r][1].type="strikethroughSequence";var i={type:"strikethrough",start:Object.assign({},e[r][1].start),end:Object.assign({},e[n][1].end)},o={type:"strikethroughText",start:Object.assign({},e[r][1].end),end:Object.assign({},e[n][1].start)},a=[["enter",i,t],["enter",e[r][1],t],["exit",e[r][1],t],["enter",o,t]];(0,B.d)(a,a.length,0,(0,P.C)(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),(0,B.d)(a,a.length,0,[["exit",o,t],["enter",e[n][1],t],["exit",e[n][1],t],["exit",i,t]]),(0,B.d)(e,r-1,n-r+3,a),n=r+a.length-2;break}for(n=-1;++n<e.length;)"strikethroughSequenceTemporary"===e[n][1].type&&(e[n][1].type="data");return e}function i(e,n,r){var i=this.previous,o=this.events,a=0;return function(t){if(126===i&&"characterEscape"!==o[o.length-1][1].type)return r(t);return e.enter("strikethroughSequenceTemporary"),l(t)};function l(o){var u=(0,H.r)(i);if(126===o)return a>1?r(o):(e.consume(o),a++,l);if(a<2&&!t)return r(o);var c=e.exit("strikethroughSequenceTemporary"),f=(0,H.r)(o);return c._open=!f||2===f&&Boolean(u),c._close=!u||2===u&&Boolean(f),n(o)}}}var Z={flow:{null:{tokenize:function(e,t,n){var r,i,o=this,a=[],l=0;return function(t){if(e.enter("table")._align=a,e.enter("tableHead"),e.enter("tableRow"),124===t)return c(t);return l++,e.enter("temporaryTableCellContent"),h(t)};function c(t){return e.enter("tableCellDivider"),e.consume(t),e.exit("tableCellDivider"),r=!0,f}function f(t){return null===t||(0,u.Ch)(t)?function(t){if(null===t)return n(t);e.exit("tableRow"),e.exit("tableHead");var r=o.interrupt;return o.interrupt=!0,e.attempt({tokenize:j,partial:!0},(function(t){return o.interrupt=r,e.enter("tableDelimiterRow"),g(t)}),(function(e){return o.interrupt=r,n(e)}))(t)}(t):(0,u.xz)(t)?(e.enter("whitespace"),e.consume(t),s):(r&&(r=void 0,l++),124===t?c(t):(e.enter("temporaryTableCellContent"),h(t)))}function s(t){return(0,u.xz)(t)?(e.consume(t),s):(e.exit("whitespace"),f(t))}function h(t){return null===t||124===t||(0,u.z3)(t)?(e.exit("temporaryTableCellContent"),f(t)):(e.consume(t),92===t?p:h)}function p(t){return 92===t||124===t?(e.consume(t),h):h(t)}function g(t){return null===t||(0,u.Ch)(t)?b(t):(0,u.xz)(t)?(e.enter("whitespace"),e.consume(t),d):45===t?(e.enter("tableDelimiterFiller"),e.consume(t),i=!0,a.push("none"),m):58===t?(e.enter("tableDelimiterAlignment"),e.consume(t),e.exit("tableDelimiterAlignment"),a.push("left"),v):124===t?(e.enter("tableCellDivider"),e.consume(t),e.exit("tableCellDivider"),g):n(t)}function d(t){return(0,u.xz)(t)?(e.consume(t),d):(e.exit("whitespace"),g(t))}function m(t){return 45===t?(e.consume(t),m):(e.exit("tableDelimiterFiller"),58===t?(e.enter("tableDelimiterAlignment"),e.consume(t),e.exit("tableDelimiterAlignment"),a[a.length-1]="left"===a[a.length-1]?"center":"right",k):g(t))}function v(t){return 45===t?(e.enter("tableDelimiterFiller"),e.consume(t),i=!0,m):n(t)}function k(t){return null===t||(0,u.Ch)(t)?b(t):(0,u.xz)(t)?(e.enter("whitespace"),e.consume(t),d):124===t?(e.enter("tableCellDivider"),e.consume(t),e.exit("tableCellDivider"),g):n(t)}function b(t){return e.exit("tableDelimiterRow"),i&&l===a.length?null===t?y(t):e.check(W,y,e.attempt({tokenize:j,partial:!0},(0,S.f)(e,x,"linePrefix",4),y))(t):n(t)}function y(n){return e.exit("table"),t(n)}function x(t){return e.enter("tableBody"),C(t)}function C(t){return e.enter("tableRow"),124===t?w(t):(e.enter("temporaryTableCellContent"),F(t))}function w(t){return e.enter("tableCellDivider"),e.consume(t),e.exit("tableCellDivider"),D}function D(t){return null===t||(0,u.Ch)(t)?function(t){if(e.exit("tableRow"),null===t)return L(t);return e.check(W,L,e.attempt({tokenize:j,partial:!0},(0,S.f)(e,C,"linePrefix",4),L))(t)}(t):(0,u.xz)(t)?(e.enter("whitespace"),e.consume(t),A):124===t?w(t):(e.enter("temporaryTableCellContent"),F(t))}function A(t){return(0,u.xz)(t)?(e.consume(t),A):(e.exit("whitespace"),D(t))}function F(t){return null===t||124===t||(0,u.z3)(t)?(e.exit("temporaryTableCellContent"),D(t)):(e.consume(t),92===t?z:F)}function z(t){return 92===t||124===t?(e.consume(t),F):F(t)}function L(t){return e.exit("tableBody"),y(t)}function j(e,t,n){return function(t){return e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),(0,S.f)(e,r,"linePrefix")};function r(r){if(o.parser.lazy[o.now().line]||null===r||(0,u.Ch)(r))return n(r);var i=o.events[o.events.length-1];return!o.parser.constructs.disable.null.includes("codeIndented")&&i&&"linePrefix"===i[1].type&&i[2].sliceSerialize(i[1],!0).length>=4?n(r):(o._gfmTableDynamicInterruptHack=!0,e.check(o.parser.constructs.flow,(function(e){return o._gfmTableDynamicInterruptHack=!1,n(e)}),(function(e){return o._gfmTableDynamicInterruptHack=!1,t(e)}))(r))}}},resolve:function(e,t){var n,r,i,o,a,l,u,c=-1;for(;++c<e.length;){var f=e[c][1];if(i&&("temporaryTableCellContent"===f.type&&(o=o||c,a=c),("tableCellDivider"===f.type||"tableRow"===f.type)&&a)){var s={type:"tableContent",start:e[o][1].start,end:e[a][1].end},h={type:"chunkText",start:s.start,end:s.end,contentType:"text"};e.splice(o,a-o+1,["enter",s,t],["enter",h,t],["exit",h,t],["exit",s,t]),c-=a-o-3,o=void 0,a=void 0}if("exit"===e[c][0]&&void 0!==l&&l+(u?0:1)<c&&("tableCellDivider"===f.type||"tableRow"===f.type&&(l+3<c||"whitespace"!==e[l][1].type))){var p={type:r?"tableDelimiter":n?"tableHeader":"tableData",start:e[l][1].start,end:e[c][1].end};e.splice(c+("tableCellDivider"===f.type?1:0),0,["exit",p,t]),e.splice(l,0,["enter",p,t]),l=(c+=2)+1,u=!0}"tableRow"===f.type&&(i="enter"===e[c][0])&&(l=c+1,u=!1),"tableDelimiterRow"===f.type&&(r="enter"===e[c][0])&&(l=c+1,u=!1),"tableHead"===f.type&&(n="enter"===e[c][0])}return e}}}},W={tokenize:function(e,t,n){var r=0;return function(t){return e.enter("check"),e.consume(t),i};function i(o){return-1===o||32===o?(e.consume(o),4===++r?t:i):null===o||(0,u.z3)(o)?t(o):n(o)}},partial:!0};var q={tokenize:function(e,t,n){var r=this;return function(t){if(null!==r.previous||!r._gfmTasklistFirstContentOfListItem)return n(t);return e.enter("taskListCheck"),e.enter("taskListCheckMarker"),e.consume(t),e.exit("taskListCheckMarker"),i};function i(t){return(0,u.z3)(t)?(e.enter("taskListCheckValueUnchecked"),e.consume(t),e.exit("taskListCheckValueUnchecked"),o):88===t||120===t?(e.enter("taskListCheckValueChecked"),e.consume(t),e.exit("taskListCheckValueChecked"),o):n(t)}function o(r){return 93===r?(e.enter("taskListCheckMarker"),e.consume(r),e.exit("taskListCheckMarker"),e.exit("taskListCheck"),e.check({tokenize:U},t,n)):n(r)}}},V={text:(0,z.Z)({},91,q)};function U(e,t,n){var r=this;return(0,S.f)(e,(function(e){var i=r.events[r.events.length-1];return(i&&"whitespace"===i[1].type||(0,u.Ch)(e))&&null!==e?t(e):n(e)}),"whitespace")}function N(e){return(0,l.W)([k,{document:(0,z.Z)({},91,{tokenize:I,continuation:{tokenize:_},exit:R}),text:(t={},(0,z.Z)(t,91,{tokenize:O}),(0,z.Z)(t,93,{add:"after",tokenize:T,resolveTo:M}),t)},$(e),Z,V]);var t}function G(e,t){var n=String(e);if("string"!=typeof t)throw new TypeError("Expected character");for(var r=0,i=n.indexOf(t);-1!==i;)r++,i=n.indexOf(t,i+t.length);return r}var X=n(5061);var Y=function(e){if(null==e)return Q;if("string"==typeof e)return function(e){return K(t);function t(t){return t&&t.type===e}}(e);if("object"==typeof e)return Array.isArray(e)?J(e):function(e){return K(t);function t(t){var n;for(n in e)if(t[n]!==e[n])return!1;return!0}}(e);if("function"==typeof e)return K(e);throw new Error("Expected function, string, or object as test")};function J(e){for(var t=[],n=-1;++n<e.length;)t[n]=Y(e[n]);return K((function(){for(var e=-1,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];for(;++e<t.length;){var o;if((o=t[e]).call.apply(o,[this].concat(r)))return!0}return!1}))}function K(e){return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return Boolean(e.call.apply(e,[this].concat(n)))}}function Q(){return!0}var ee=function(e,t,n,r){"function"==typeof t&&"function"!=typeof n&&(r=n,n=t,t=null);var i=Y(t),o=r?-1:1;!function e(a,l,u){var c,f="object"==typeof a&&null!==a?a:{};"string"==typeof f.type&&(c="string"==typeof f.tagName?f.tagName:"string"==typeof f.name?f.name:void 0,Object.defineProperty(s,"name",{value:"node ("+f.type+(c?"<"+c+">":"")+")"}));return s;function s(){var c,f,s,h=[];if((!t||i(a,l,u[u.length-1]||null))&&false===(h=function(e){if(Array.isArray(e))return e;if("number"==typeof e)return[true,e];return[e]}(n(a,u)))[0])return h;if(a.children&&"skip"!==h[0])for(f=(r?a.children.length:-1)+o,s=u.concat(a);f>-1&&f<a.children.length;){if(false===(c=e(a.children[f],f,s)())[0])return c;f="number"==typeof c[1]?c[1]:f+o}return h}}(e,null,[])()};var te={}.hasOwnProperty,ne=function(e,t,n,r){var i,o;"string"==typeof t||t instanceof RegExp?(o=[[t,n]],i=r):(o=t,i=n),i||(i={});for(var a=Y(i.ignore||[]),l=function(e){var t=[];if("object"!=typeof e)throw new TypeError("Expected array or object as schema");if(Array.isArray(e))for(var n=-1;++n<e.length;)t.push([re(e[n][0]),ie(e[n][1])]);else{var r;for(r in e)te.call(e,r)&&t.push([re(r),ie(e[r])])}return t}(o),u=-1;++u<l.length;)ee(e,"text",c);return e;function c(e,t){for(var n,r=-1;++r<t.length;){var i=t[r];if(a(i,n?n.children.indexOf(i):void 0,n))return;n=i}if(n)return function(e,t){var n,r=l[u][0],i=l[u][1],o=0,a=t.children.indexOf(e),c=[];r.lastIndex=0;var f=r.exec(e.value);for(;f;){n=f.index;var s=i.apply(void 0,(0,X.Z)(f).concat([{index:f.index,input:f.input}]));if("string"==typeof s&&(s=s.length>0?{type:"text",value:s}:void 0),!1!==s){var h;if(o!==n&&c.push({type:"text",value:e.value.slice(o,n)}),Array.isArray(s))(h=c).push.apply(h,(0,X.Z)(s));else s&&c.push(s);o=n+f[0].length}if(!r.global)break;f=r.exec(e.value)}if(void 0===n)c=[e],a--;else{var p;o<e.value.length&&c.push({type:"text",value:e.value.slice(o)}),(p=t.children).splice.apply(p,[a,1].concat((0,X.Z)(c)))}return a+c.length+1}(e,n)}};function re(e){return"string"==typeof e?new RegExp(function(e){if("string"!=typeof e)throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}(e),"g"):e}function ie(e){return"function"==typeof e?e:function(){return e}}var oe="phrasing",ae=["autolink","link","image","label"],le={transforms:[function(e){ne(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,fe],[/([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/g,se]],{ignore:["link","linkReference"]})}],enter:{literalAutolink:function(e){this.enter({type:"link",title:null,url:"",children:[]},e)},literalAutolinkEmail:ce,literalAutolinkHttp:ce,literalAutolinkWww:ce},exit:{literalAutolink:function(e){this.exit(e)},literalAutolinkEmail:function(e){this.config.exit.autolinkEmail.call(this,e)},literalAutolinkHttp:function(e){this.config.exit.autolinkProtocol.call(this,e)},literalAutolinkWww:function(e){this.config.exit.data.call(this,e),this.stack[this.stack.length-1].url="http://"+this.sliceSerialize(e)}}},ue={unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:oe,notInConstruct:ae},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:oe,notInConstruct:ae},{character:":",before:"[ps]",after:"\\/",inConstruct:oe,notInConstruct:ae}]};function ce(e){this.config.enter.autolinkProtocol.call(this,e)}function fe(e,t,n,r,i){var o="";if(!he(i))return!1;if(/^w/i.test(t)&&(n=t+n,t="",o="http://"),!function(e){var t=e.split(".");if(t.length<2||t[t.length-1]&&(/_/.test(t[t.length-1])||!/[a-zA-Z\d]/.test(t[t.length-1]))||t[t.length-2]&&(/_/.test(t[t.length-2])||!/[a-zA-Z\d]/.test(t[t.length-2])))return!1;return!0}(n))return!1;var a=function(e){var t,n,r,i,o=/[!"&'),.:;<>?\]}]+$/.exec(e);if(o)for(e=e.slice(0,o.index),t=(i=o[0]).indexOf(")"),n=G(e,"("),r=G(e,")");-1!==t&&n>r;)e+=i.slice(0,t+1),t=(i=i.slice(t+1)).indexOf(")"),r++;return[e,i]}(n+r);if(!a[0])return!1;var l={type:"link",title:null,url:o+t+a[0],children:[{type:"text",value:t+a[0]}]};return a[1]?[l,{type:"text",value:a[1]}]:l}function se(e,t,n,r){return!(!he(r,!0)||/[_-\d]$/.test(n))&&{type:"link",title:null,url:"mailto:"+t+"@"+n,children:[{type:"text",value:t+"@"+n}]}}function he(e,t){var n=e.input.charCodeAt(e.index-1);return(0===e.index||(0,u.B8)(n)||(0,u.Xh)(n))&&(!t||47!==n)}var pe=n(3632);function ge(e){return e.label||!e.identifier?e.label||"":(0,pe.v)(e.identifier)}function de(e,t){var n=t.indexStack,r=e.children||[],i=[],o=-1;for(n.push(-1);++o<r.length;){var a=r[o];n[n.length-1]=o,i.push(t.handle(a,e,t,{before:"\n",after:"\n"})),"list"!==a.type&&(t.bulletLastUsed=void 0),o<r.length-1&&i.push(l(a,r[o+1]))}return n.pop(),i.join("");function l(n,r){for(var i=t.join.length;i--;){var o=t.join[i](n,r,e,t);if(!0===o||1===o)break;if("number"==typeof o)return"\n".repeat(1+o);if(!1===o)return"\n\n\x3c!----\x3e\n\n"}return"\n\n"}}var me=/\r?\n|\r/g;function ve(e,t){for(var n,r=[],i=0,o=0;n=me.exec(e);)a(e.slice(i,n.index)),r.push(n[0]),i=n.index+n[0].length,o++;return a(e.slice(i)),r.join("");function a(e){r.push(t(e,o,!e))}}function ke(e){if(!e._compiled){var t=(e.atBreak?"[\\r\\n][\\t ]*":"")+(e.before?"(?:"+e.before+")":"");e._compiled=new RegExp((t?"("+t+")":"")+(/[|\\{}()[\]^$+*?.-]/.test(e.character)?"\\":"")+e.character+(e.after?"(?:"+e.after+")":""),"g")}return e._compiled}function be(e,t){return ye(e,t.inConstruct,!0)&&!ye(e,t.notInConstruct,!1)}function ye(e,t,n){if(!t)return n;"string"==typeof t&&(t=[t]);for(var r=-1;++r<t.length;)if(e.includes(t[r]))return!0;return!1}function xe(e,t,n){for(var r=(n.before||"")+(t||"")+(n.after||""),i=[],o=[],a={},l=-1;++l<e.unsafe.length;){var u=e.unsafe[l];if(be(e.stack,u))for(var c=ke(u),f=void 0;f=c.exec(r);){var s="before"in u||Boolean(u.atBreak),h="after"in u,p=f.index+(s?f[1].length:0);i.includes(p)?(a[p].before&&!s&&(a[p].before=!1),a[p].after&&!h&&(a[p].after=!1)):(i.push(p),a[p]={before:s,after:h})}}i.sort(Ce);var g=n.before?n.before.length:0,d=r.length-(n.after?n.after.length:0);for(l=-1;++l<i.length;){var m=i[l];m<g||m>=d||(m+1<d&&i[l+1]===m+1&&a[m].after&&!a[m+1].before&&!a[m+1].after||i[l-1]===m-1&&a[m].before&&!a[m-1].before&&!a[m-1].after||(g!==m&&o.push(we(r.slice(g,m),"\\")),g=m,!/[!-/:-@[-`{-~]/.test(r.charAt(m))||n.encode&&n.encode.includes(r.charAt(m))?(o.push("&#x"+r.charCodeAt(m).toString(16).toUpperCase()+";"),g++):o.push("\\")))}return o.push(we(r.slice(g,d),n.after)),o.join("")}function Ce(e,t){return e-t}function we(e,t){for(var n,r=/\\(?=[!-/:-@[-`{-~])/g,i=[],o=[],a=e+t,l=-1,u=0;n=r.exec(a);)i.push(n.index);for(;++l<i.length;)u!==i[l]&&o.push(e.slice(u,i[l])),o.push("\\"),u=i[l];return o.push(e.slice(u)),o.join("")}var De=function(e){if(null==e)return Fe;if("string"==typeof e)return function(e){return Ae(t);function t(t){return t&&t.type===e}}(e);if("object"==typeof e)return Array.isArray(e)?function(e){var t=[],n=-1;for(;++n<e.length;)t[n]=De(e[n]);return Ae(r);function r(){for(var e=-1,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];for(;++e<t.length;){var o;if((o=t[e]).call.apply(o,[this].concat(r)))return!0}return!1}}(e):function(e){return Ae(t);function t(t){var n;for(n in e)if(t[n]!==e[n])return!1;return!0}}(e);if("function"==typeof e)return Ae(e);throw new Error("Expected function, string, or object as test")};function Ae(e){return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return Boolean(e.call.apply(e,[this].concat(n)))}}function Fe(){return!0}var ze=!1,Le=function(e,t,n,r){"function"==typeof t&&"function"!=typeof n&&(r=n,n=t,t=null);var i=De(t),o=r?-1:1;!function e(a,l,u){var c,f="object"==typeof a&&null!==a?a:{};"string"==typeof f.type&&(c="string"==typeof f.tagName?f.tagName:"string"==typeof f.name?f.name:void 0,Object.defineProperty(s,"name",{value:"node ("+f.type+(c?"<"+c+">":"")+")"}));return s;function s(){var c,f,s,h=[];if((!t||i(a,l,u[u.length-1]||null))&&(h=function(e){if(Array.isArray(e))return e;if("number"==typeof e)return[true,e];return[e]}(n(a,u)))[0]===ze)return h;if(a.children&&"skip"!==h[0])for(f=(r?a.children.length:-1)+o,s=u.concat(a);f>-1&&f<a.children.length;){if((c=e(a.children[f],f,s)())[0]===ze)return c;f="number"==typeof c[1]?c[1]:f+o}return h}}(e,null,[])()};var Se=!1,je=!1;function Ee(){return e.peek=function(){return"["},{unsafe:[{character:"[",inConstruct:["phrasing","label","reference"]}],handlers:{footnoteDefinition:function(e,t,n){var r=n.enter("footnoteDefinition"),i=n.enter("label"),o=xe(n,ge(e),{before:"^",after:"]"}),a="[^"+o+"]:";i();var l=ve(de(e,n),(function(e,t,n){if(t)return(n?"":"    ")+e;return(n?a:a+" ")+e}));r(),!Se&&o.includes(":")&&(console.warn("[mdast-util-gfm-footnote] Warning: Found a colon in footnote identifier `"+o+"`. GitHub currently crahes on colons in footnotes (see <https://github.com/github/cmark-gfm/issues/241> for more info)"),Se=!0);je||(c=function(){return console.warn("[mdast-util-gfm-footnote] Warning: Found a list in a footnote definition. GitHub currently crahes on lists in footnotes (see <https://github.com/github/cmark-gfm/issues/241> for more info)"),je=!0,ze},"function"==typeof(u="list")&&"function"!=typeof c&&(f=c,c=u,u=null),Le(e,u,(function(e,t){var n=t[t.length-1];return c(e,n?n.children.indexOf(e):null,n)}),f));var u,c,f;return l},footnoteReference:e}};function e(e,t,n){var r=n.enter("footnoteReference"),i=n.enter("reference"),o=xe(n,ge(e),{before:"^",after:"]"});return i(),r(),"[^"+o+"]"}}function Te(e,t,n){var r=t.indexStack,i=e.children||[],o=[],a=-1,l=n.before;for(r.push(-1);++a<i.length;){var u=i[a],c=void 0;if(r[r.length-1]=a,a+1<i.length){var f=t.handle.handlers[i[a+1].type];f&&f.peek&&(f=f.peek),c=f?f(i[a+1],e,t,{before:"",after:""}).charAt(0):""}else c=n.after;o.length>0&&("\r"===l||"\n"===l)&&"html"===u.type&&(o[o.length-1]=o[o.length-1].replace(/(\r?\n|\r)$/," "),l=" "),o.push(t.handle(u,e,t,{before:l,after:c})),l=o[o.length-1].slice(-1)}return r.pop(),o.join("")}var Me={canContainEols:["delete"],enter:{strikethrough:function(e){this.enter({type:"delete",children:[]},e)}},exit:{strikethrough:function(e){this.exit(e)}}},Oe={unsafe:[{character:"~",inConstruct:"phrasing"}],handlers:{delete:Ie}};function Ie(e,t,n){var r=n.enter("emphasis"),i=Te(e,n,{before:"~",after:"~"});return r(),"~~"+i+"~~"}function _e(e,t,n){for(var r=e.value||"",i="`",o=-1;new RegExp("(^|[^`])"+i+"([^`]|$)").test(r);)i+="`";for(/[^ \r\n]/.test(r)&&(/^[ \r\n]/.test(r)&&/[ \r\n]$/.test(r)||/^`|`$/.test(r))&&(r=" "+r+" ");++o<n.unsafe.length;){var a=n.unsafe[o],l=ke(a),u=void 0;if(a.atBreak)for(;u=l.exec(r);){var c=u.index;10===r.charCodeAt(c)&&13===r.charCodeAt(c-1)&&c--,r=r.slice(0,c)+" "+r.slice(u.index+1)}}return i+r+i}function Re(e){return null==e?"":String(e)}function Be(e){return e.length}function He(e){var t="string"==typeof e?e.codePointAt(0):0;return 67===t||99===t?99:76===t||108===t?108:82===t||114===t?114:0}Ie.peek=function(){return"~"},_e.peek=function(){return"`"};var Pe={enter:{table:function(e){var t=e._align;this.enter({type:"table",align:t.map((function(e){return"none"===e?null:e})),children:[]},e),this.setData("inTable",!0)},tableData:Ze,tableHeader:Ze,tableRow:function(e){this.enter({type:"tableRow",children:[]},e)}},exit:{codeText:function(e){var t=this.resume();this.getData("inTable")&&(t=t.replace(/\\([\\|])/g,We));this.stack[this.stack.length-1].value=t,this.exit(e)},table:function(e){this.exit(e),this.setData("inTable")},tableData:$e,tableHeader:$e,tableRow:$e}};function $e(e){this.exit(e)}function Ze(e){this.enter({type:"tableCell",children:[]},e)}function We(e,t){return"|"===t?t:e}function qe(e){var t=e||{},n=t.tableCellPadding,r=t.tablePipeAlign,i=t.stringLength,o=n?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:"\n",inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[\t :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{table:function(e,t,n){return l(function(e,t){var n=e.children,r=-1,i=[],o=t.enter("table");for(;++r<n.length;)i[r]=u(n[r],t);return o(),i}(e,n),e.align)},tableRow:function(e,t,n){var r=l([u(e,n)]);return r.slice(0,r.indexOf("\n"))},tableCell:a,inlineCode:function(e,t,n){var r=_e(e,0,n);n.stack.includes("tableCell")&&(r=r.replace(/\|/g,"\\$&"));return r}}};function a(e,t,n){var r=n.enter("tableCell"),i=n.enter("phrasing"),a=Te(e,n,{before:o,after:o});return i(),r(),a}function l(e,t){return function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=(t.align||[]).concat(),r=t.stringLength||Be,i=[],o=[],a=[],l=[],u=0,c=-1;++c<e.length;){var f=[],s=[],h=-1;for(e[c].length>u&&(u=e[c].length);++h<e[c].length;){var p=Re(e[c][h]);if(!1!==t.alignDelimiters){var g=r(p);s[h]=g,(void 0===l[h]||g>l[h])&&(l[h]=g)}f.push(p)}o[c]=f,a[c]=s}var d=-1;if("object"==typeof n&&"length"in n)for(;++d<u;)i[d]=He(n[d]);else for(var m=He(n);++d<u;)i[d]=m;d=-1;for(var v=[],k=[];++d<u;){var b=i[d],y="",x="";99===b?(y=":",x=":"):108===b?y=":":114===b&&(x=":");var C=!1===t.alignDelimiters?1:Math.max(1,l[d]-y.length-x.length),w=y+"-".repeat(C)+x;!1!==t.alignDelimiters&&((C=y.length+C+x.length)>l[d]&&(l[d]=C),k[d]=C),v[d]=w}o.splice(1,0,v),a.splice(1,0,k),c=-1;for(var D=[];++c<o.length;){var A=o[c],F=a[c];d=-1;for(var z=[];++d<u;){var L=A[d]||"",S="",j="";if(!1!==t.alignDelimiters){var E=l[d]-(F[d]||0),T=i[d];114===T?S=" ".repeat(E):99===T?E%2?(S=" ".repeat(E/2+.5),j=" ".repeat(E/2-.5)):j=S=" ".repeat(E/2):j=" ".repeat(E)}!1===t.delimiterStart||d||z.push("|"),!1===t.padding||!1===t.alignDelimiters&&""===L||!1===t.delimiterStart&&!d||z.push(" "),!1!==t.alignDelimiters&&z.push(S),z.push(L),!1!==t.alignDelimiters&&z.push(j),!1!==t.padding&&z.push(" "),!1===t.delimiterEnd&&d===u-1||z.push("|")}D.push(!1===t.delimiterEnd?z.join("").replace(/ +$/,""):z.join(""))}return D.join("\n")}(e,{align:t,alignDelimiters:r,padding:n,stringLength:i})}function u(e,t){for(var n=e.children,r=-1,i=[],o=t.enter("tableRow");++r<n.length;)i[r]=a(n[r],0,t);return o(),i}}function Ve(e,t,n){var r=function(e){var t=e.options.listItemIndent||"tab";if(1===t||"1"===t)return"one";if("tab"!==t&&"one"!==t&&"mixed"!==t)throw new Error("Cannot serialize items with `"+t+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return t}(n),i=n.bulletCurrent||function(e){var t=e.options.bullet||"*";if("*"!==t&&"+"!==t&&"-"!==t)throw new Error("Cannot serialize items with `"+t+"` for `options.bullet`, expected `*`, `+`, or `-`");return t}(n);t&&"list"===t.type&&t.ordered&&(i=("number"==typeof t.start&&t.start>-1?t.start:1)+(!1===n.options.incrementListMarker?0:t.children.indexOf(e))+i);var o=i.length+1;("tab"===r||"mixed"===r&&(t&&"list"===t.type&&t.spread||e.spread))&&(o=4*Math.ceil(o/4));var a=n.enter("listItem"),l=ve(de(e,n),(function(e,t,n){if(t)return(n?"":" ".repeat(o))+e;return(n?i:i+" ".repeat(o-i.length))+e}));return a(),l}var Ue={exit:{taskListCheckValueChecked:Ge,taskListCheckValueUnchecked:Ge,paragraph:function(e){var t,n=this.stack[this.stack.length-2],r=this.stack[this.stack.length-1],i=n.children,o=r.children[0],a=-1;if(n&&"listItem"===n.type&&"boolean"==typeof n.checked&&o&&"text"===o.type){for(;++a<i.length;){var l=i[a];if("paragraph"===l.type){t=l;break}}t===r&&(o.value=o.value.slice(1),0===o.value.length?r.children.shift():(o.position.start.column++,o.position.start.offset++,r.position.start=Object.assign({},o.position.start)))}this.exit(e)}}},Ne={unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:function(e,t,n){var r=e.children[0],i=Ve(e,t,n);"boolean"==typeof e.checked&&r&&"paragraph"===r.type&&(i=i.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,(function(t){return t+"["+(e.checked?"x":" ")+"] "})));return i}}};function Ge(e){this.stack[this.stack.length-2].checked="taskListCheckValueChecked"===e.type}function Xe(){return[le,{enter:{gfmFootnoteDefinition:function(e){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},e)},gfmFootnoteDefinitionLabelString:function(){this.buffer()},gfmFootnoteCall:function(e){this.enter({type:"footnoteReference",identifier:"",label:""},e)},gfmFootnoteCallString:function(){this.buffer()}},exit:{gfmFootnoteDefinition:function(e){this.exit(e)},gfmFootnoteDefinitionLabelString:function(e){var t=this.resume(),n=this.stack[this.stack.length-1];n.label=t,n.identifier=(0,j.d)(this.sliceSerialize(e)).toLowerCase()},gfmFootnoteCall:function(e){this.exit(e)},gfmFootnoteCallString:function(e){var t=this.resume(),n=this.stack[this.stack.length-1];n.label=t,n.identifier=(0,j.d)(this.sliceSerialize(e)).toLowerCase()}}},Me,Pe,Ue]}function Ye(e){return{extensions:[ue,Ee(),Oe,qe(e),Ne]}}function Je(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=this.data();function n(e,n){(t[e]?t[e]:t[e]=[]).push(n)}n("micromarkExtensions",N(e)),n("fromMarkdownExtensions",Xe()),n("toMarkdownExtensions",Ye(e))}var Ke=function(e){var t=e.data,n=e.pageContext,l=t.strapiArticle,u=l.slug,c=(l.title,l.description),f=l.content,s=l.localizations,h=t.strapiGlobal;console.log(u),console.log(c),console.log(f),console.log(s);return r.createElement(r.Fragment,null,r.createElement(o.Z,{seo:{metaDescription:"This is our Blog",metaTitle:"Blog/InspiraLiving"},global:h}),r.createElement(i.Z,{global:h,pageContext:Object.assign({},n,{localizations:s})},r.createElement(a.D,{children:f,remarkPlugins:[Je]})))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-5ffda07bb1f5599d476c.js.map