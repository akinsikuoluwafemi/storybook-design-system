import{a,j as p,F as h}from"./emotion-react-jsx-runtime.browser.esm-1cc7cfce.js";import{c as U,I as E}from"./Icon-d60a5ba8.js";import{P as n}from"./index-8d47fad6.js";import{a as y,c as t,t as o}from"./styles-016f4b68.js";import{g as R}from"./animation-632ea25b.js";import"./jsx-runtime-29545a09.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-929668a7.js";import"./extends-98964cd2.js";const r={large:40,medium:28,small:20,tiny:16},B=U("div",{target:"e4gt52h1"})("background:",e=>e.loading?y.light:"transparent",";border-radius:50%;display:inline-block;vertical-align:top;overflow:hidden;text-transform:uppercase;height:",r.medium,"px;width:",r.medium,"px;line-height:",r.medium,"px;",e=>e.size==="tiny"&&t("height:",r.tiny,"px;width:",r.tiny,"px;line-height:",r.tiny,"px;","")," ",e=>e.size==="small"&&t("height:",r.small,"px;width:",r.small,"px;line-height:",r.small,"px;","")," ",e=>e.size==="large"&&t("height:",r.large,"px;width:",r.large,"px;line-height:",r.large,"px;","")," ",e=>!e.src&&t("background:",!e.loading&&"#37D5D3",";","")," img{width:100%;height:auto;display:block;}svg{position:relative;bottom:-2px;height:100%;width:100%;vertical-align:top;}path{fill:",y.medium,";animation:",R," 1.5s ease-in-out infinite;}"),G=U("div",{target:"e4gt52h0"})("color:",y.lightest,";text-align:center;font-size:",o.size.s2,"px;line-height:",r.medium,"px;",e=>e.size==="tiny"&&t("font-size:",o.size.s1-2,"px;line-height:",r.tiny,"px;","")," ",e=>e.size==="small"&&t("font-size:",o.size.s1,"px;line-height:",r.small,"px;","")," ",e=>e.size==="large"&&t("font-size:",o.size.s3,"px;line-height:",r.large,"px;",""),";");function s({loading:e,username:v,src:z,size:x,...M}){let f=a(E,{icon:"useralt"});const i={};return e?(i["aria-busy"]=!0,i["aria-label"]="Loading avatar ..."):z?f=a("img",{src:z,alt:v}):(i["aria-label"]=v,f=a(G,{size:x,"aria-hidden":"true",children:v.substring(0,1)})),a(B,{size:x,loading:e,src:z,...i,...M,children:f})}s.propTypes={loading:n.bool,username:n.string,src:n.string,size:n.oneOf(Object.keys(r))};s.defaultProps={loading:!1,username:"loading",src:null,size:"medium"};s.__docgenInfo={description:`- Use an avatar for attributing actions or content to specific users.
- The user's name should always be present when using Avatar – either printed beside the avatar or in a tooltip.`,methods:[],displayName:"Avatar",props:{loading:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"Use the loading state to indicate that the data Avatar needs is still loading."},username:{defaultValue:{value:"'loading'",computed:!1},type:{name:"string"},required:!1,description:"Avatar falls back to the user's initial when no image is provided.\n    Supply a `username` and omit `src` to see what this looks like."},src:{defaultValue:{value:"null",computed:!1},type:{name:"string"},required:!1,description:"The URL of the Avatar's image."},size:{defaultValue:{value:"'medium'",computed:!1},type:{name:"enum",value:[{value:'"large"',computed:!1},{value:'"medium"',computed:!1},{value:'"small"',computed:!1},{value:'"tiny"',computed:!1}]},required:!1,description:"Avatar comes in four sizes. In most cases, you'll be fine with `medium`."}}};const ae={title:"Design System/Avatar",component:s,argTypes:{size:{control:{type:"select"},options:["tiny","small","medium","large"]}}},l={args:{size:"large",username:"Tom Coleman",src:"https://avatars2.githubusercontent.com/u/132554"}},m={args:{username:"Tom Coleman",src:"https://avatars2.githubusercontent.com/u/132554"},render:e=>p(h,{children:[a(s,{...e,size:"large"}),a(s,{...e,size:"medium"}),a(s,{...e,size:"small"}),a(s,{...e,size:"tiny"})]})},u={render:e=>p(h,{children:[a(s,{username:"Tom Coleman"}),a(s,{username:"Dominic Nguyen"}),a(s,{username:"Varun Vachhar"}),a(s,{username:"Michael Shilman"})]})},c={args:{loading:!0},render:e=>p(h,{children:[a(s,{...e,size:"large"}),a(s,{...e,size:"medium"}),a(s,{...e,size:"small"}),a(s,{...e,size:"tiny"})]})},d={render:()=>p(h,{children:[a(s,{loading:!0,size:"large"}),a(s,{size:"large",username:"Tom Coleman"}),a(s,{size:"large",username:"Tom Coleman",src:"https://avatars2.githubusercontent.com/u/132554"})]})},g={args:{loading:!1,size:"tiny",username:"Dominic Nguyen",src:"https://avatars2.githubusercontent.com/u/263385"}};var b,A,S;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    size: 'large',
    username: 'Tom Coleman',
    src: 'https://avatars2.githubusercontent.com/u/132554'
  }
}`,...(S=(A=l.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var T,w,C;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    username: 'Tom Coleman',
    src: 'https://avatars2.githubusercontent.com/u/132554'
  },
  render: args => <>
      <Avatar {...args} size='large' />
      <Avatar {...args} size='medium' />
      <Avatar {...args} size='small' />
      <Avatar {...args} size='tiny' />
    </>
}`,...(C=(w=m.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var k,I,V;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => <>
      <Avatar username='Tom Coleman' />
      <Avatar username='Dominic Nguyen' />
      <Avatar username='Varun Vachhar' />
      <Avatar username='Michael Shilman' />
    </>
}`,...(V=(I=u.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};var D,L,N;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    loading: true
  },
  render: args => <>
      <Avatar {...args} size='large' />
      <Avatar {...args} size='medium' />
      <Avatar {...args} size='small' />
      <Avatar {...args} size='tiny' />
    </>
}`,...(N=(L=c.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var _,j,q;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <>
      <Avatar loading size='large' />
      <Avatar size='large' username='Tom Coleman' />
      <Avatar size='large' username='Tom Coleman' src='https://avatars2.githubusercontent.com/u/132554' />
    </>
}`,...(q=(j=d.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var P,F,O;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    loading: false,
    size: 'tiny',
    username: 'Dominic Nguyen',
    src: 'https://avatars2.githubusercontent.com/u/263385'
  }
}`,...(O=(F=g.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};const se=["Standard","Sizes","Initials","Loading","Large","Controls"];export{g as Controls,u as Initials,d as Large,c as Loading,m as Sizes,l as Standard,se as __namedExportsOrder,ae as default};
//# sourceMappingURL=Avatar.stories-f0fedaf3.js.map
