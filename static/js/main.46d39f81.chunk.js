(this["webpackJsonpmarkdown-editor"]=this["webpackJsonpmarkdown-editor"]||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),s=n(3),i=n.n(s),r=n(5),c=n(4),l=n.n(c),d=(n(10),n(11),n(0));var u=function(){var e=Object(a.useState)('# Title\n## Sub-Title \n### Deeper title \n \n Paragraphs are separated\n by an empty line.\n\n Leave two spaces at the end of a line\n to go to the line.\n\n Attributs: *italic*, **bold**, \n`monospace`, ~~striped~~.\n\n List:\n\n * apples\n * oranges\n * pears\n\n Numbered list:\n\n 1. tofu\n 2. mushrooms\n 3. bread\n\n Link with placeholder text: *[Medium](https://www.medium.com)* \n\n Simple link: https://www.medium.com/ \n\n Code: ```\n console.log("Hello folks! I hoped you enjoyed this quick tutorial. Thanks for reading."); \n``` '),t=Object(r.a)(e,2),n=t[0],o=t[1];return Object(a.useEffect)((function(){var e=localStorage.getItem("text");e&&o(e)}),[]),Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-sm-6",children:Object(d.jsx)("textarea",{className:"form-control",rows:"35",onChange:function(e){o(e.target.value),localStorage.setItem("text",e.target.value)},value:n})}),Object(d.jsx)("div",{className:"col-sm-6",children:Object(d.jsx)("div",{dangerouslySetInnerHTML:function(e){return{__html:l()(e,{sanitize:!0})}}(n)})})]})})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),o(e),s(e),i(e)}))};i.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(u,{})}),document.getElementById("root")),m()}},[[13,1,2]]]);
//# sourceMappingURL=main.46d39f81.chunk.js.map