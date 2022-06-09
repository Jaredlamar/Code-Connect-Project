(this["webpackJsonpreact-rails-api-project-template-client"]=this["webpackJsonpreact-rails-api-project-template-client"]||[]).push([[0],{232:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),o=c(91),r=c.n(o),a=(c(97),c(2)),i=(c(98),c(11)),l=c(3),j=c(34),d=c(0);var u=function(e){var t,c=e.setCurrentUser,n=(e.currentUser,Object(s.useState)("")),o=Object(a.a)(n,2),r=o[0],i=o[1],u=Object(s.useState)(""),b=Object(a.a)(u,2),h=b[0],O=b[1],m=Object(s.useState)(!1),x=Object(a.a)(m,2),v=x[0],f=x[1],p=Object(s.useState)([]),g=Object(a.a)(p,2);g[0],g[1];var N=Object(l.f)();return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"body",children:Object(d.jsxs)("div",{className:"container",id:"container",children:[v?Object(d.jsx)("div",{className:"form-container sign-in-container",children:Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={username:r,password:h};fetch("/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){e.ok?e.json().then((function(e){return c(e)})).then(N("/main")):e.json().then((function(e){return alert(e.error)}))}))},children:[Object(d.jsx)("h1",{children:"Login"}),Object(d.jsx)("input",{type:"text",placeholder:"Username",value:r,onChange:function(e){return i(e.target.value)}}),Object(d.jsx)("input",{type:"password",placeholder:"Password",value:h,onChange:function(e){return O(e.target.value)}}),Object(d.jsx)("button",{type:"submit",children:"Login"})]})}):Object(d.jsx)("div",{className:"form-container sign-up-container",children:Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={username:r,password:h};fetch("/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){e.ok?e.json().then((function(e){return c(e)})).then(N("/main")):e.json().then((function(e){return alert("Username Already Used")}))}))},children:[Object(d.jsx)("h1",{children:"Create Account"}),Object(d.jsx)("input",{type:"text",placeholder:"UserName",value:r,onChange:function(e){return i(e.target.value)}}),Object(d.jsx)("input",(t={type:"password",placeholder:"Password"},Object(j.a)(t,"placeholder","Password"),Object(j.a)(t,"value",h),Object(j.a)(t,"onChange",(function(e){return O(e.target.value)})),t)),Object(d.jsx)("button",{type:"submit",children:"Register"})]})}),Object(d.jsxs)("p",{className:"toggle-container",children:[" ",Object(d.jsxs)("button",{className:"bttn",onClick:function(){f(!v)},children:[v?"No Account? Click to sign up":"Already Signed Up ? Click  to Login"," "]})]}),Object(d.jsx)("div",{className:"overlay-container",children:Object(d.jsxs)("div",{className:"overlay",children:[Object(d.jsx)("div",{className:"overlay-panel overlay-left"}),Object(d.jsx)("div",{className:"overlay-panel overlay-right"})]})})]})})})};var b=function(){var e=Object(s.useState)(!1),t=Object(a.a)(e,2),c=t[0],n=t[1],o=Object(l.f)();return Object(d.jsxs)("nav",{className:"navbar",children:[Object(d.jsxs)("h1",{className:"logo",children:["Code",Object(d.jsx)("br",{})," Connect"]}),Object(d.jsxs)("ul",{className:c?"nav-links-mobile":"nav-links",onClick:function(){return n(!1)},children:[Object(d.jsx)(i.b,{className:"Home",to:"/main",children:Object(d.jsx)("li",{children:"Home"})}),Object(d.jsx)(i.b,{className:"Books",to:"/bookcontainer",children:Object(d.jsx)("li",{children:"Books"})}),Object(d.jsx)(i.b,{className:"Schools",to:"/schoolcontainer",children:Object(d.jsx)("li",{children:"Bootcamps"})}),Object(d.jsx)(i.b,{className:"Events",to:"/events",children:Object(d.jsx)("li",{children:"Message Board"})}),Object(d.jsx)("li",{className:"li",children:Object(d.jsx)("button",{onClick:function(){fetch("logout/",{method:"DELETE"}).catch((function(e){return console.log(e.message)})).then(o("/"))},className:"Omega",to:"/",children:"Logout"})})]}),Object(d.jsx)("button",{className:"mobile-menu-icon",children:c?Object(d.jsx)("i",{className:"fas fa-times"}):Object(d.jsx)("i",{className:"fas fa-bars"})})]})};var h=function(e){var t=e.currentUser;return e.setCurrentUser,console.log(t),Object(d.jsxs)("div",{className:"main",children:[Object(d.jsx)(b,{}),Object(d.jsxs)("div",{className:"Neon-Container",children:[Object(d.jsx)("h1",{className:"Neon-Text",children:"Welcome to Code Connect"}),Object(d.jsx)("h1",{className:"Neon-Text",children:null===t||void 0===t?void 0:t.username}),"z"]})]})},O=c(33);var m=function(e){var t=e.books,c=e.currentUser,n=(e.key,e.onNewWatchList),o=Object(s.useState)([]),r=Object(a.a)(o,2),i=(r[0],r[1]);return Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("h2",{onClick:function(e){return e.preventDefault(),i(t),void fetch("/booklists",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({book_id:t.id,user_id:c.id})}).then((function(e){return e.json()})).then((function(e){n(e)}))},className:"book-title",children:t.title}),Object(d.jsx)("div",{className:"row_posters",children:Object(d.jsx)("img",{className:"row_posterLarge",src:t.image,alt:t.title})})]})};var x=function(e){var t=e.closeModal,c=e.selectedBook,s=e.selectedBooks,n=e.setSelectedBooks;return Object(d.jsx)("div",{className:"modalBackground",children:Object(d.jsxs)("div",{className:"modalContainer",children:[Object(d.jsx)("div",{className:"modalTitle",children:Object(d.jsx)("h2",{className:"post-H",children:c.book.title})}),Object(d.jsxs)("div",{className:"ModalBody",children:[Object(d.jsx)("img",{className:"selected-image",src:c.book.image}),Object(d.jsx)("div",{children:Object(d.jsxs)("em",{className:"selected",children:["Author:  ",c.book.author]})}),Object(d.jsx)("div",{children:Object(d.jsxs)("em",{children:["Published Date: ",c.book.published]})}),Object(d.jsx)("div",{children:Object(d.jsx)("a",{children:Object(d.jsx)("a",{href:c.book.link,target:"_blank",children:"Purchase Book"})})})]}),Object(d.jsxs)("div",{className:"modalFooter",children:[Object(d.jsx)("button",{onClick:function(){return t(!1)},children:"Close"})," ",Object(d.jsx)("button",{onClick:function(){console.log("deleting booklist ",c.id),fetch("/booklists/".concat(c.id),{method:"DELETE"}).then((function(){var e=s.filter((function(e){if(e.id!==(null===c||void 0===c?void 0:c.id))return e}));n(e),t(!1)})).catch((function(e){return console.log(e.message)}))},children:"Delete Book"})]})]})})};var v=function(e){var t,c=e.selectedBook,n=e.selectedBooks,o=e.setSelectedBooks;console.log("selectedBook: ".concat(JSON.stringify(c)));var r=Object(s.useState)(!1),i=Object(a.a)(r,2),l=i[0],j=i[1];return Object(d.jsxs)("div",{className:"row",children:[Object(d.jsxs)("div",{className:"row_posters",children:[Object(d.jsx)("img",{onClick:function(){j(!0)},className:"row_posterLarge",src:null===(t=c.book)||void 0===t?void 0:t.image}),Object(d.jsx)("div",{className:"mapped-bttn"})]}),l&&Object(d.jsx)(x,{closeModal:j,selectedBook:c,selectedBooks:n,setSelectedBooks:o})]})};var f=function(e){var t=e.selectedBooks,c=e.setSelectedBooks,s=t.map((function(e){return Object(d.jsx)(v,{selectedBook:e,selectedBooks:t,setSelectedBooks:c})}));return Object(d.jsx)("div",{children:s})};var p=function(e){e.currentUser;var t=e.selectedBooks,c=e.setSelectedBooks;return Object(d.jsx)("div",{children:Object(d.jsx)(f,{selectedBooks:t,setSelectedBooks:c})})};var g=function(e){var t=e.books,c=e.currentUser,n=Object(s.useState)([]),o=Object(a.a)(n,2),r=o[0],i=o[1];Object(s.useEffect)((function(){fetch("/booklists?user_id=".concat(c.id)).then((function(e){return e.json()})).then((function(e){return i(e)}))}),[]);var l=function(e){i([].concat(Object(O.a)(r),[e]))},j=t.map((function(e){return Object(d.jsx)(m,{currentUser:c,books:e,onNewWatchList:l},e.id)}));return Object(d.jsxs)("div",{children:[Object(d.jsx)(b,{}),Object(d.jsxs)("div",{className:"flex-container",children:[Object(d.jsx)("div",{className:"flex-child magenta",children:j}),Object(d.jsxs)("div",{className:"flex-child green",children:[Object(d.jsx)("h2",{className:"school-interest",children:"Personal Booklist"}),Object(d.jsx)(p,{selectedBooks:r,setSelectedBooks:i})]})]})]})};var N=function(e){var t=e.currentUser,c=Object(s.useState)([]),n=Object(a.a)(c,2),o=n[0],r=n[1];return Object(s.useEffect)((function(){fetch("/books").then((function(e){return e.json()})).then((function(e){return r(e)}))}),[]),Object(d.jsx)("div",{className:"main",children:Object(d.jsx)(g,{books:o,currentUser:t})})};var S=function(e){var t=e.schools,c=e.currentUser,n=(e.key,e.onNewSchoolList),o=Object(s.useState)([]),r=Object(a.a)(o,2),i=(r[0],r[1]);return Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("h2",{onClick:function(e){return e.preventDefault(),i(t),void fetch("/schoollists",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({school_id:t.id,user_id:c.id})}).then((function(e){return e.json()})).then((function(e){n(e)}))},className:"school-name",children:t.name}),Object(d.jsx)("div",{className:"row_posters",children:Object(d.jsx)("img",{className:"row_poster",src:t.logo,alt:t.name})})]})};var k=function(e){var t=e.closeSchoolModal,c=e.selectedSchool,s=e.setSelectedSchools,n=e.selectedSchools;return Object(d.jsx)("div",{className:"modalBackground",children:Object(d.jsxs)("div",{className:"modalContainer",children:[Object(d.jsx)("div",{className:"modalTitle",children:Object(d.jsx)("h2",{className:"post-H",children:c.school.name})}),Object(d.jsxs)("div",{className:"ModalBody",children:[Object(d.jsx)("img",{className:"selected-image",src:c.school.logo}),Object(d.jsx)("div",{children:Object(d.jsxs)("em",{className:"selected",children:["Email Address: ",c.school.email]})}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{children:Object(d.jsx)("a",{children:Object(d.jsx)("a",{href:c.school.link,target:"_blank",children:"Visit Website"})})})]}),Object(d.jsxs)("div",{className:"modalFooter",children:[Object(d.jsx)("button",{onClick:function(){return t(!1)},children:"Close"}),Object(d.jsx)("button",{onClick:function(){fetch("/schoollists/".concat(c.id),{method:"DELETE"}).then((function(){var e=n.filter((function(e){if(e.id!==(null===c||void 0===c?void 0:c.id))return e}));s(e),t(!1)})).catch((function(e){return console.log(e.message)}))},children:"Delete School"})]})]})})};var C=function(e){var t=e.selectedSchool,c=e.setSelectedSchools,n=e.selectedSchools,o=Object(s.useState)(!1),r=Object(a.a)(o,2),i=r[0],l=r[1];return Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("h2",{className:"book-title"}),Object(d.jsxs)("div",{className:"row_posters",children:[Object(d.jsx)("img",{onClick:function(){l(!0)},className:"row_poster",src:t.school.logo}),Object(d.jsx)("div",{className:"mapped-bttn"})]}),i&&Object(d.jsx)(k,{closeSchoolModal:l,selectedSchool:t,setSelectedSchools:c,selectedSchools:n})]})};var y=function(e){var t=e.selectedSchools,c=e.setSelectedSchools;console.log(t);var s=t.map((function(e){return Object(d.jsx)(C,{selectedSchool:e,setSelectedSchools:c,selectedSchools:t})}));return Object(d.jsx)("div",{children:s})};var B=function(e){var t=e.selectedSchools,c=e.setSelectedSchools;return Object(d.jsx)("div",{children:Object(d.jsx)(y,{selectedSchools:t,setSelectedSchools:c})})};var U=function(e){var t=e.schools,c=e.currentUser,n=Object(s.useState)([]),o=Object(a.a)(n,2),r=o[0],i=o[1];Object(s.useEffect)((function(){console.log(c),fetch("/schoollists?user_id=".concat(c.id)).then((function(e){return e.json()})).then((function(e){return i(e)}))}),[]);var l=function(e){i([].concat(Object(O.a)(r),[e]))},j=t.map((function(e){return Object(d.jsx)(S,{currentUser:c,schools:e,onNewSchoolList:l},e.id)}));return Object(d.jsxs)("div",{children:[Object(d.jsx)(b,{}),Object(d.jsxs)("div",{className:"flex-container",children:[Object(d.jsx)("div",{className:"flex-child magenta",children:j}),Object(d.jsxs)("div",{className:"flex-child green",children:[Object(d.jsx)("h2",{className:"school-interest",children:"Favorited Bootcamps"}),Object(d.jsx)(B,{selectedSchools:r,setSelectedSchools:i})]})]})]})};var E=function(e){var t=e.currentUser,c=Object(s.useState)([]),n=Object(a.a)(c,2),o=n[0],r=n[1];return Object(s.useEffect)((function(){fetch("/schools").then((function(e){return e.json()})).then((function(e){return r(e)}))}),[]),Object(d.jsx)("div",{children:Object(d.jsx)(U,{schools:o,currentUser:t})})},w=c(92),T=c.n(w);c(121);var _=function(e){var t=e.closeEventModal,c=e.postedEvent;return Object(d.jsx)("div",{className:"modalBackground",children:Object(d.jsxs)("div",{className:"modalContainer",children:[Object(d.jsx)("div",{className:"modalTitle"}),Object(d.jsx)("div",{className:"ModalBody",children:Object(d.jsx)("img",{className:"selected-images",src:c.image})}),Object(d.jsx)("div",{className:"modalFooter",children:Object(d.jsx)("button",{onClick:function(){return t(!1)},children:"Close"})})]})})};var P=function(e){var t=e.postedEvent,c=e.currentUser,n=Object(s.useState)(""),o=Object(a.a)(n,2),r=o[0],i=o[1],l=Object(s.useState)([]),j=Object(a.a)(l,2),u=(j[0],j[1],Object(s.useState)("")),b=Object(a.a)(u,2),h=b[0],O=b[1],m=Object(s.useState)(""),x=Object(a.a)(m,2),v=x[0],f=x[1],p=Object(s.useState)(!1),g=Object(a.a)(p,2),N=g[0],S=g[1];return Object(s.useEffect)((function(){v&&function(){console.log("patching post to backend"),console.log("imageUrl: ".concat(v));var e={image:v};fetch("/posts/".concat(t.id),{method:"PATCH",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()}))}()}),[v]),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"postEvents",children:[Object(d.jsxs)("div",{className:"post",children:[Object(d.jsxs)("div",{className:"postHeader",children:[Object(d.jsxs)("div",{className:"title",children:[Object(d.jsx)("h1",{className:"logo-1",children:t.event}),Object(d.jsx)("h2",{className:"logo-1",children:t.date})]}),Object(d.jsx)("div",{className:"deletePost",children:Object(d.jsx)("button",{onClick:function(){fetch("/posts/".concat(t.id),{method:"DELETE"}).catch((function(e){return console.log(e.message)}))},children:" \ud83d\uddd1 "})})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{onChange:function(e){O(e.target.files[0])},type:"file"}),Object(d.jsx)("button",{onClick:function(){var e=new FormData;e.append("file",h),e.append("upload_preset","de3dvas3"),T.a.post("http://api.cloudinary.com/v1_1/djj0rrbaw/image/upload",e).then((function(e){console.log("response.data.url: ".concat(e.data.url)),f(e.data.url)}))},children:"Upload Image"})]}),Object(d.jsx)("div",{className:"postImage-container",children:Object(d.jsx)("img",{onClick:function(){S(!0)},className:"selected-image",src:t.image||v})}),Object(d.jsx)("div",{children:Object(d.jsx)("em",{children:t.comments.length>0&&t.comments.map((function(e){return Object(d.jsxs)("ul",{children:["-",e.content]})}))})}),Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{type:"text",placeholder:"Leave Comment",value:r,onChange:function(e){return i(e.target.value)}})," ",Object(d.jsx)("button",{onClick:function(e){return function(e){e.preventDefault();var s={user_id:c.id,post_id:t.id,content:r};fetch("/comments",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(s)}).then((function(e){return e.json()})).then((function(e){t.comments.push(e),i("")}))}(e)},children:"Comment"})]})]}),N&&Object(d.jsx)(_,{closeEventModal:S,postedEvent:t})]})})};var D=function(e){var t=e.currentUser,c=e.handleEventPost,n=(e.handlePostDelete,Object(s.useState)([])),o=Object(a.a)(n,2),r=o[0],i=o[1];Object(s.useEffect)((function(){fetch("/posts").then((function(e){return e.json()})).then((function(e){i(e)}))}),[c]);var l=r.map((function(e){return Object(d.jsx)(P,{postedEvent:e,currentUser:t},e.id)}));return Object(d.jsx)("div",{children:l})};var L=function(e){e.setCurrentUser;var t=e.currentUser,c=Object(s.useState)(""),n=Object(a.a)(c,2),o=n[0],r=n[1],i=Object(s.useState)(new Date("")),l=Object(a.a)(i,2),j=l[0],u=l[1],h=Object(s.useState)(""),O=Object(a.a)(h,2),m=(O[0],O[1]);function x(e){e.preventDefault();var c={event:o,date:j,user_id:t.id};fetch("/posts",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(c)}).then((function(e){return e.json()})).then((function(e){return m(e)}))}return Object(d.jsxs)("div",{children:[Object(d.jsx)(b,{}),Object(d.jsxs)("form",{children:[Object(d.jsx)("i",{children:Object(d.jsx)("h3",{children:"Event"})}),Object(d.jsx)("input",{type:"text",value:o,onChange:function(e){return r(e.target.value)}}),Object(d.jsx)("i",{children:Object(d.jsx)("h3",{children:"Date"})}),Object(d.jsx)("input",{type:"date",value:j,onChange:function(e){return u(e.target.value)}}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{onClick:x,type:"submit",children:"Submit"})})]}),Object(d.jsx)("div",{children:Object(d.jsx)("h1",{className:"school-interest",children:"Message Board"})}),Object(d.jsx)(D,{currentUser:t,handleEventPost:x})]})};var A=function(){var e=Object(s.useState)(null),t=Object(a.a)(e,2),c=t[0],n=t[1];return Object(d.jsx)("div",{className:"main",children:Object(d.jsx)(i.a,{children:Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{path:"/",element:Object(d.jsx)(u,{setCurrentUser:n,currentUser:c})}),Object(d.jsx)(l.a,{path:"/main",element:Object(d.jsx)(h,{setCurrentUser:n,currentUser:c})}),Object(d.jsx)(l.a,{path:"/bookcontainer",element:Object(d.jsx)(N,{setCurrentUser:n,currentUser:c})}),Object(d.jsx)(l.a,{path:"/schoolcontainer",element:Object(d.jsx)(E,{setCurrentUser:n,currentUser:c})}),Object(d.jsx)(l.a,{path:"/events",element:Object(d.jsx)(L,{setCurrentUser:n,currentUser:c})})]})})})},M=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,235)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,o=t.getLCP,r=t.getTTFB;c(e),s(e),n(e),o(e),r(e)}))};r.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(A,{})}),document.getElementById("root")),M()},97:function(e,t,c){},98:function(e,t,c){}},[[232,1,2]]]);
//# sourceMappingURL=main.b5c2781b.chunk.js.map