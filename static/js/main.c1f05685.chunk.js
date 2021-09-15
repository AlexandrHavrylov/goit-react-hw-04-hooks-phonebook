(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{17:function(n,e,t){},22:function(n,e,t){"use strict";t.r(e);var a,c,r,i,o,s,d,l,b=t(0),u=t.n(b),p=t(8),x=t.n(p),j=(t(17),t(11)),f=t(4),g=t(2),O=t(3),h=O.a.form(a||(a=Object(g.a)(["\n  width: 600px;\n  padding: 16px;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  border: 1px black solid;\n  border-radius: 5px;\n  align-items: center;\n  justify-content: space-between;\n  box-shadow: rgb(25 26 27 / 20%) 4px 4px 8px 0px;\n"]))),m=O.a.label(c||(c=Object(g.a)(["\n  font-size: 24px;\n  margin-bottom: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),v=O.a.input(r||(r=Object(g.a)(["\n  font-size: 16px;\n  width: 300px;\n  padding: 4px;\n  margin-top: 5px;\n"]))),y=O.a.button(i||(i=Object(g.a)(["\n  font-size: 20px;\n  font-weight: 700;\n  padding: 10px;\n  cursor: pointer;\n  margin-top: 10px;\n  text-align: center;\n  border-radius: 5px;\n  border: 0.5px black solid;\n  &:hover {\n    background-color: #8ecafc;\n  }\n"]))),w=t(1);function C(n){var e=n.onSubmit,t=Object(b.useState)(""),a=Object(f.a)(t,2),c=a[0],r=a[1],i=Object(b.useState)(""),o=Object(f.a)(i,2),s=o[0],d=o[1],l=function(n){var e=n.currentTarget,t=e.name,a=e.value;switch(t){case"name":r(a);break;case"number":d(a)}};return Object(w.jsx)("div",{children:Object(w.jsxs)(h,{onSubmit:function(n){n.preventDefault(),e(c,s),r(""),d("")},children:[Object(w.jsxs)(m,{children:["\u0418\u043c\u044f",Object(w.jsx)(v,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:c,onChange:l})]}),Object(w.jsxs)(m,{children:["\u0422\u0435\u043b\u0435\u0444\u043e\u043d",Object(w.jsx)(v,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:s,onChange:l})]}),Object(w.jsx)(y,{type:"submit",children:"Add contact"})]})})}var k,S,z,F=O.a.ul(o||(o=Object(g.a)(["\n  margin: 0;\n  padding: 24px;\n  list-style: none;\n"]))),A=O.a.li(s||(s=Object(g.a)(["\n  position: relative;\n  padding: 10px;\n  padding-left: 30px;\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  font-size: 24px;\n  font-weight: 500;\n  border: 1px gray solid;\n  border-radius: 10px;\n  box-shadow: rgb(25 26 27 / 20%) 1px 1px 1px 1px;\n  :not(:last-child) {\n    margin-bottom: 10px;\n  }\n"]))),D=O.a.span(d||(d=Object(g.a)(["\n  margin-right: 56px;\n\n  svg {\n    position: absolute;\n    top: 15px;\n    left: 5px;\n    color: #010174;\n  }\n"]))),J=O.a.button(l||(l=Object(g.a)(["\n  display: block;\n  font-size: 16px;\n  font-weight: 700;\n  padding: 10px;\n  cursor: pointer;\n\n  text-align: center;\n  border-radius: 5px;\n  border: 0.5px black solid;\n  &:hover {\n    background-color: tomato;\n  }\n"]))),I=t(10),L=function(n){var e=n.contacts,t=n.onDeleteContact;return Object(w.jsxs)("div",{children:[Object(w.jsx)("h2",{children:"Contacts"}),Object(w.jsx)(F,{children:e.map((function(n){var e=n.id,a=n.name,c=n.number;return Object(w.jsxs)(A,{children:[Object(w.jsxs)(D,{children:[Object(w.jsx)(I.a,{})," ",a,": ",c]}),Object(w.jsx)(J,{onClick:function(){return t(e)},type:"button",children:"Delete"})]},e)}))})]})},T=t(24),B=O.a.div(k||(k=Object(g.a)(["\n  display: flex;\n  flex-direction: column;\n\n  padding: 24px;\n  align-items: center;\n  text-align: center;\n"]))),E=O.a.h1(S||(S=Object(g.a)(["\n  font-size: 36px;\n"]))),N=O.a.div(z||(z=Object(g.a)(["\n  padding: 24px;\n"]))),P=function(n){var e=n.value,t=n.onFilterChange;return Object(w.jsx)(N,{children:Object(w.jsxs)(m,{children:["Find contatcs by Name",Object(w.jsx)(v,{type:"text",value:e,onChange:t})]})})};function Z(){var n=Object(b.useState)([]),e=Object(f.a)(n,2),t=e[0],a=e[1],c=Object(b.useState)(""),r=Object(f.a)(c,2),i=r[0],o=r[1];Object(b.useEffect)((function(){var n=JSON.parse(localStorage.getItem("contacts"));n&&a(n)}),[]),Object(b.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(t))}),[t]);var s=function(){var n=i.toLowerCase().trim();return t.filter((function(e){return e.name.toLowerCase().includes(n)}))}();return Object(w.jsxs)(B,{children:[Object(w.jsx)(E,{children:"Phonebook"}),Object(w.jsx)(C,{onSubmit:function(n,e){var c={id:Object(T.a)(),name:n,number:e};t.find((function(e){return e.name===n}))?alert("".concat(c.name," is already in contacts")):a([c].concat(Object(j.a)(t)))}}),Object(w.jsx)(P,{value:i,onFilterChange:function(n){o(n.currentTarget.value)}}),Object(w.jsx)(L,{contacts:s,onDeleteContact:function(n){a(t.filter((function(e){return e.id!==n})))}})]})}var q=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,25)).then((function(e){var t=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,i=e.getTTFB;t(n),a(n),c(n),r(n),i(n)}))};x.a.render(Object(w.jsx)(u.a.StrictMode,{children:Object(w.jsx)(Z,{})}),document.getElementById("root")),q()}},[[22,1,2]]]);
//# sourceMappingURL=main.c1f05685.chunk.js.map