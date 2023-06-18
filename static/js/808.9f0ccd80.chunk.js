"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[808],{9133:function(n,e,t){t.d(e,{II:function(){return p},__:function(){return d},tN:function(){return u},un:function(){return l}});var r,a,o,i,c=t(168),s=t(6444),u=s.ZP.form(r||(r=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  border: 1px solid black;\n  padding: 20px 12px;\n"]))),d=s.ZP.label(a||(a=(0,c.Z)(["\n  margin-bottom: 4px;\n"]))),p=s.ZP.input(o||(o=(0,c.Z)(["\n  width: 200px;\n  margin-bottom: 20px;\n"]))),l=s.ZP.button(i||(i=(0,c.Z)(["\n  cursor: pointer;\n  width: 120px;\n  padding: 4px 12px;\n  background-color: white;\n  border-radius: 4px;\n  border: none;\n  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,\n    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;\n  &:hover,\n  &:focus {\n    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n  }\n"])))},4814:function(n,e,t){t.d(e,{Z:function(){return s}});var r,a=t(5834),o=t(168),i=t(6444).ZP.div(r||(r=(0,o.Z)(["\npadding-top: 20px;\n"]))),c=t(3329),s=function(n){var e=n.title,t=n.children;return(0,c.jsx)(i,{children:(0,c.jsxs)(a.Z,{children:[(0,c.jsx)("h2",{children:e}),t]})})}},7808:function(n,e,t){t.r(e),t.d(e,{default:function(){return q}});var r=t(4814),a=t(9439),o=t(2791),i=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,e){return n+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"}),"")},c=t(9434),s=t(9369),u=function(n){return n.contacts.contacts},d=function(n){return n.contacts.isLoading},p=function(n){return n.contacts.error},l=function(n){return n.filter.filter},x=t(9133),h=t(3329);function m(){var n=(0,o.useState)(""),e=(0,a.Z)(n,2),t=e[0],r=e[1],d=(0,o.useState)(""),p=(0,a.Z)(d,2),l=p[0],m=p[1],f=i(),b=i(),g=(0,c.v9)(u),v=function(n){var e=n.target,t=e.name,a=e.value;switch(t){case"name":r(a);break;case"number":m(a)}},Z=(0,c.I0)(),j=function(){r(""),m("")};return(0,h.jsxs)(x.tN,{onSubmit:function(n){n.preventDefault(),g.find((function(n){return n.name.toLowerCase()===t.toLocaleLowerCase()||n.number===l}))?alert("".concat(t," or ").concat(l," is already in contacts")):(Z((0,s.uK)({name:t,number:l})),j())},children:[(0,h.jsx)(x.__,{htmlFor:f,children:"Name"}),(0,h.jsx)(x.II,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:t,onChange:v,id:f}),(0,h.jsx)(x.__,{htmlFor:b,children:"Number"}),(0,h.jsx)(x.II,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:l,onChange:v,id:b}),(0,h.jsx)(x.un,{type:"submit",children:"Add contact"})]})}var f,b,g,v,Z,j,w=t(5650),y=t(168),C=t(6444),_=C.ZP.div(f||(f=(0,y.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n"]))),A=C.ZP.label(b||(b=(0,y.Z)(["\n  margin-bottom: 4px;\n"]))),P=C.ZP.input(g||(g=(0,y.Z)(["\n  width: 200px;\n  margin-bottom: 20px;\n"]))),k=i(),I=function(){var n=(0,c.I0)(),e=(0,c.v9)(l);return(0,h.jsxs)(_,{children:[(0,h.jsx)(A,{htmlFor:k,children:"Find contacts by name"}),(0,h.jsx)(P,{type:"text",name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:e,onChange:function(e){return n((0,w.T)(e.target.value))},id:k})]})},F=C.ZP.div(v||(v=(0,y.Z)(["\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  align-items: center;\n"]))),z=C.ZP.button(Z||(Z=(0,y.Z)(["\n  cursor: pointer;\n  width: 120px;\n  height: 24px;\n  padding: 4px 12px;\n  background-color: white;\n  border-radius: 4px;\n  border: none;\n  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,\n    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;\n\n  &:hover,\n  &:focus {\n    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n  }\n"]))),L=function(n){var e=n.id,t=n.name,r=n.number,a=(0,c.I0)();return(0,h.jsx)(F,{children:(0,h.jsxs)("div",{children:[(0,h.jsxs)("p",{children:[t,": ",r]}),(0,h.jsx)(z,{type:"button",onClick:function(){return function(n){a((0,s.GK)(n))}(e)},children:"Delete"})]})})},N=C.ZP.ul(j||(j=(0,y.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n"]))),S=function(){var n=(0,c.v9)(u),e=(0,c.v9)(l).toLocaleLowerCase(),t=n.filter((function(n){return n.name.toLowerCase().includes(e)}));return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(N,{children:t.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,h.jsx)(L,{id:e,name:t,number:r},e)}))})})};function q(){var n=(0,c.I0)(),e=(0,c.v9)(d),t=(0,c.v9)(p),a=(0,c.v9)(u);return(0,o.useEffect)((function(){n((0,s.yF)())}),[n]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(r.Z,{title:"Phonebook",children:(0,h.jsx)(m,{})}),(0,h.jsxs)(r.Z,{title:"Contacts",children:[(0,h.jsx)(I,{}),e&&(0,h.jsx)("h2",{children:"Loading..."}),t&&(0,h.jsxs)("h2",{children:["Opps, something went wrong: ",t]}),a.length>0&&!t&&(0,h.jsx)(S,{}),!e&&0===a.length&&(0,h.jsx)("h4",{children:"You have no contacts. Add some in the form above"})]})]})}}}]);
//# sourceMappingURL=808.9f0ccd80.chunk.js.map