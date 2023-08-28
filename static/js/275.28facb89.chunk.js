"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[275],{6275:function(n,e,t){t.r(e),t.d(e,{default:function(){return F}});var r,i,a,s=t(9434),o=t(4056),l=t(2236),c=t(5218),d=t(5705),u=t(7298),m=t(9055),x=t(168),p=t(8126),h=(0,p.ZP)(d.l0)(r||(r=(0,x.Z)(["\n  margin-left: 20px;\n  margin-bottom: 1px;\n  label {\n    display: block;\n    margin-bottom: 2px;\n    font-size: 24px;\n    margin-left: 4px;\n  }\n  input {\n    display: block;\n    font-size: 20px;\n    width: 300px;\n    height: 40px;\n    pudding-left: 20px;\n    margin-bottom: 8px;\n    border: 1px solid black;\n    border-radius: 4px;\n  }\n\n"]))),f=t(184),b=function(){var n=(0,s.I0)(),e=(0,s.v9)(o.K2).items;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(c.x7,{}),(0,f.jsx)(d.J9,{initialValues:{name:"",number:""},onSubmit:function(t,r){var i=t.name,a=t.number,s=r.resetForm;e.some((function(n){return n.name===i}))?alert("".concat(i," is already in contacts")):n((0,l.je)({name:i,number:a})).unwrap().then((function(){c.ZP.success("Contact was successfully added to your phonebook list."),s()}))},children:function(n){return(0,f.jsxs)(h,{as:d.l0,children:[(0,f.jsx)(u.l,{htmlFor:"name",children:"Name"}),(0,f.jsx)(d.gN,{id:"name",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,f.jsx)(u.l,{htmlFor:"number",children:"Number"}),(0,f.jsx)(d.gN,{id:"number",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,f.jsx)(m.z,{colorScheme:"yellow",size:"sm",type:"submit",mb:5,children:"Add contact"})]})}})]})},g=function(){return(0,f.jsx)("div",{style:{marginLeft:"30px"},children:"You don't have any contact"})},j=t(5898),y=p.ZP.div(i||(i=(0,x.Z)(["\n    display: flex;\n    flex-direction: column;\n    width: 250px;\n  label {\n    font-size: 20px;\n    display: block;\n    margin-bottom: 12px;\n    margin-left: 20px;\n  }\n  input {\n    width: 280px;\n    height: 25px;\n    margin-bottom: 12px;\n    font-size: 16px;\n    border: 1px solid black;\n    border-radius: 4px;\n  }\n"]))),v=function(){var n=(0,s.v9)(o.K2).items,e=(0,s.I0)();return 0!==n.length?(0,f.jsx)(y,{children:(0,f.jsxs)("label",{children:["Find contacts by name:",(0,f.jsx)("input",{type:"text",name:"filter",onChange:function(n){e((0,j.x)(n.target.value.toLowerCase().trim()))}})]})}):(0,f.jsx)(g,{})},w=t(2791),z=t(2715),k=p.ZP.ul(a||(a=(0,x.Z)(["\n  font-size: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  padding-bottom: 10px;  \n\n  li {\n    max-width: 465px;\n    height: auto;\n    display: flex;\n    justify-content: space-between;\n\n  }\n"]))),C=function(){var n=(0,s.I0)(),e=(0,s.v9)(o.F4);(0,w.useEffect)((function(){n((0,l.XQ)())}),[n]);var t=function(e){n((0,l.ml)(e)).unwrap().then((function(){c.Am.error("Contact was successfully deleted from your contacts list.")}))};return(0,f.jsx)(k,{children:null===e||void 0===e?void 0:e.map((function(n){var e=n.id,r=n.name,i=n.number;return(0,f.jsxs)("li",{children:[(0,f.jsxs)(z.x,{as:"samp",fontSize:"xl",ml:5,fontWeight:"500",textTransform:"capitalize",children:[r,": ",i]}),(0,f.jsx)(m.z,{size:"sm",colorScheme:"messenger",type:"button",onClick:function(){return t(e)},children:"Delete"})]},e)}))})},Z=t(8410),A=t(824),F=function(){var n=(0,s.v9)(o.K2),e=n.isLoading,t=n.error;return(0,f.jsxs)(Z.W,{children:[(0,f.jsxs)(A.xu,{bgColor:"blue.400",borderRadius:4,children:[(0,f.jsx)(z.x,{as:"i",fontSize:"4xl",ml:5,fontWeight:"700",children:"Phonebook"}),(0,f.jsx)(b,{})]}),(0,f.jsxs)(A.xu,{bgColor:"yellow.400",borderRadius:4,children:[(0,f.jsx)(z.x,{as:"i",fontSize:"4xl",ml:5,fontWeight:"600",children:"Contacts"}),e&&(0,f.jsx)("div",{style:{marginLeft:"30px"},children:"Loading..."}),t&&(0,f.jsx)("div",{children:t.message}),(0,f.jsx)(v,{}),(0,f.jsx)(C,{})]})]})}}}]);
//# sourceMappingURL=275.28facb89.chunk.js.map