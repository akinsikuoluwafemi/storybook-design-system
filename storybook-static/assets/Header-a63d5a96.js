import{a as e,j as i,F as a}from"./emotion-react-jsx-runtime.browser.esm-1cc7cfce.js";import"./index-76fb7be0.js";import{P as r}from"./index-8d47fad6.js";import{B as l}from"./Button-a3418896.js";const n=({user:o,onLogin:s,onLogout:d,onCreateAccount:t})=>e("header",{children:i("div",{className:"storybook-header",children:[i("div",{children:[e("svg",{width:"32",height:"32",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:i("g",{fill:"none",fillRule:"evenodd",children:[e("path",{d:"M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z",fill:"#FFF"}),e("path",{d:"M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z",fill:"#555AB9"}),e("path",{d:"M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z",fill:"#91BAF8"})]})}),e("h1",{children:"Acme"})]}),e("div",{children:o?i(a,{children:[i("span",{className:"welcome",children:["Welcome, ",e("b",{children:o.name}),"!"]}),e(l,{size:"small",onClick:d,label:"Log out"})]}):i(a,{children:[e(l,{size:"small",onClick:s,label:"Log in"}),e(l,{primary:!0,size:"small",onClick:t,label:"Sign up"})]})})]})});n.propTypes={user:r.shape({name:r.string.isRequired}),onLogin:r.func.isRequired,onLogout:r.func.isRequired,onCreateAccount:r.func.isRequired};n.defaultProps={user:null};n.__docgenInfo={description:"",methods:[],displayName:"Header",props:{user:{defaultValue:{value:"null",computed:!1},type:{name:"shape",value:{name:{name:"string",required:!0}}},required:!1,description:""},onLogin:{type:{name:"func"},required:!0,description:""},onLogout:{type:{name:"func"},required:!0,description:""},onCreateAccount:{type:{name:"func"},required:!0,description:""}}};export{n as H};
//# sourceMappingURL=Header-a63d5a96.js.map
