(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"1NdR":function(e,t,n){},EDuE:function(e,t,n){},RXBc:function(e,t,n){"use strict";n.r(t);var a=n("zufY"),r=n("q1tI"),o=n.n(r),i=n("Wbzz"),s=(n("KKXr"),n("Vd3H"),n("+ZDr")),c=n.n(s),l=n("VgBE"),u=(n("1NdR"),l.sorter),d=function(e){var t=e.content,n=e.title;console.log(u);var a=t.map((function(e){return e.node.frontmatter})).sort(u).reduce((function(e,t){return e.length?(e[e.length-1][0].section.split(",")[0]===t.section.split(",")[0]?e[e.length-1].push(t):e.push([t]),e):(e.push([t]),e)}),[]);return o.a.createElement("div",{className:"main-card"},o.a.createElement("h1",{className:"lesson-title gradient"},n),o.a.createElement("div",{className:"lesson-content"},o.a.createElement("ol",{className:"sections-name"},a.map((function(e){return o.a.createElement("li",{key:e[0].section},o.a.createElement("h3",{className:"lesson-section-title"},e[0].section),o.a.createElement("ol",null,e.map((function(e){return o.a.createElement("li",{key:e.path},o.a.createElement(c.a,{to:e.path},e.title))}))))})))))};n("EDuE"),t.default=function(){return o.a.createElement(i.a,{query:"2707967039",render:function(e){return o.a.createElement("div",{className:"index"},o.a.createElement("div",{className:"jumbotron gradient"},o.a.createElement("h1",null,e.site.siteMetadata.title),o.a.createElement("h2",null,e.site.siteMetadata.subtitle)),o.a.createElement(d,{title:"Table of Contents",content:e.allMarkdownRemark.edges}))},data:a})}},VgBE:function(e,t,n){function a(e){if(!/^\d+[A-Z]+$/.test(e))throw new Error(e+" does not match the section format. It must be <numbers><capital letters>, like 16A or 5F (case sensitive)");return[/^\d+/.exec(e)[0],/[A-Z]+$/.exec(e)[0]]}n("KKXr");var r=function(e){return e.split("").map((function(e,t){return e.charCodeAt(0)*Math.pow(10,t)})).reduce((function(e,t){return e+t}))};e.exports.splitSections=a,e.exports.sorter=function(e,t){var n,o;e.attributes&&e.attributes.order?(n=e.attributes.order,o=t.attributes.order):(n=e.order,o=t.order);var i=a(n),s=i[0],c=i[1],l=a(o),u=l[0],d=l[1];return s!==u?s-u:r(c)-r(d)}},zufY:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Complete Intro to Linux and the CLI","subtitle":"Learn how to use the command","description":"The complete intro to using Linux and the command line as taught by Brian Holt","keywords":["linux","ubuntu","command line","cli","javascript","bash","zsh","js"]}},"allMarkdownRemark":{"edges":[{"node":{"id":"9bafde1e-3203-5197-af50-38cf8983af8d","frontmatter":{"order":"1A","path":"/intro","title":"Introduction","section":"The First Section","description":"this is the description that will show up in social shares"}}},{"node":{"id":"e11ce24f-3d0e-5a73-a027-962cd6ae90d2","frontmatter":{"order":"2A","path":"/what-will-you-learn","title":"What you will learn","section":"Linux","description":"It is always good to go in knowing what you\'re about to learn. Brian goes over why this course is useful to you and what problems Linux is going to solve for you."}}},{"node":{"id":"cd79d8da-dd34-540c-bcfa-572e4079c625","frontmatter":{"order":"2B","path":"/what-is-linux","title":"What is Linux","section":"Linux","description":"What is Linux? Why do you need it? Brian goes into why we need Linux and where it came from"}}}]}}}')}}]);
//# sourceMappingURL=component---src-pages-index-js-12aa32be39375a57d18d.js.map