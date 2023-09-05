import{a as e,j as l,F as f}from"./emotion-react-jsx-runtime.browser.esm-1cc7cfce.js";import{c as h,I as d}from"./Icon-d60a5ba8.js";import{r as M}from"./index-76fb7be0.js";import{P as i}from"./index-8d47fad6.js";import{r as p,c as O}from"./polished.esm-ed3ce7df.js";import{a}from"./styles-016f4b68.js";import{e as z}from"./animation-632ea25b.js";import{S as t}from"./StoryLinkWrapper-8afaaece.js";import"./jsx-runtime-29545a09.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-929668a7.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";import"./chunk-AY7I2SME-c7b6cf8a.js";const y=h("span",{target:"eltcyvq3"})({name:"x9illq",styles:"display:inline-block;vertical-align:top"}),m=h("span",{target:"eltcyvq2"})({name:"142i4ns",styles:"position:absolute;top:50%;left:0;right:0;opacity:0"}),u={PRIMARY:"primary",PRIMARY_OUTLINE:"primaryOutline",SECONDARY:"secondary",SECONDARY_OUTLINE:"secondaryOutline",TERTIARY:"tertiary",OUTLINE:"outline"},s={SMALL:"small",MEDIUM:"medium"},v=h("button",{target:"eltcyvq1"})("border:10px solid red;border-radius:3em;cursor:pointer;display:inline-block;overflow:hidden;padding:",n=>n.size===s.SMALL?"8px 16px":"13px 20px",";position:relative;text-align:center;text-decoration:none;transition:all 150ms ease-out;transform:translate3d(0, 0, 0);vertical-align:top;white-space:nowrap;user-select:none;opacity:1;margin:0;background:transparent;font-size:20px;",n=>!n.isLoading&&`
      &:hover {
        transform: translate3d(0, -2px, 0);
        box-shadow: rgba(0, 0, 0, 0.2) 0 2px 6px 0;
      }

      &:active {
        transform: translate3d(0, 0, 0);
      }

      &:focus {
        box-shadow: ${p(a.primary,.4)} 0 1px 9px 2px;
      }

      &:focus:hover {
        box-shadow: ${p(a.primary,.2)} 0 8px 18px 0px;
      }
    `," ",y,"{transform:scale3d(1, 1, 1) translate3d(0, 0, 0);transition:transform 700ms ",z.rubber,";opacity:1;}",m,"{transform:translate3d(0, 100%, 0);}svg{height:",n=>n.size===s.SMALL?"14":"16","px;width:",n=>n.size===s.SMALL?"14":"16","px;vertical-align:top;margin-right:",n=>n.size===s.SMALL?"4":"6","px;margin-top:",n=>n.size===s.SMALL?"-1":"-2","px;margin-bottom:",n=>n.size===s.SMALL?"-1":"-2","px;pointer-events:none;}",n=>n.disabled&&`
      cursor: not-allowed !important;
      opacity: 0.5;
      &:hover {
        transform: none;
      }
    `," ",n=>n.isUnclickable&&`
      cursor: default !important;
      pointer-events: none;
      &:hover {
        transform: none;
      }
    `," ",n=>n.isLoading&&`
      cursor: progress !important;
      opacity: 0.7;

      ${m} {
        transition: transform 700ms ${z.rubber};
        transform: translate3d(0, -50%, 0);
        opacity: 1;
      }

      ${y} {
        transform: scale3d(0, 0, 1) translate3d(0, -100%, 0);
        opacity: 0;
      }

      &:hover {
        transform: none;
      }
    `," ",n=>n.containsIcon&&`
      svg {
        display: block;
        margin: 0;
      }
      padding: ${n.size===s.SMALL?"7":"12"}px;
    `," ",n=>n.appearance===u.PRIMARY&&`
      background: ${a.primary};
      color: ${a.lightest};

      ${!n.isLoading&&`
          &:hover {
            background: ${O(.05,a.primary)};
          }
          &:active {
            box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 3em inset;
          }
          &:focus {
            box-shadow: ${p(a.primary,.4)} 0 1px 9px 2px;
          }
          &:focus:hover {
            box-shadow: ${p(a.primary,.2)} 0 8px 18px 0px;
          }
        `}
    `," ",n=>n.appearance===u.SECONDARY&&`
      background: ${a.secondary};
      color: ${a.lightest};

      ${!n.isLoading&&`
          &:hover {
            background: ${O(.05,a.secondary)};
          }
          &:active {
            box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 3em inset;
          }
          &:focus {
            box-shadow: ${p(a.secondary,.4)} 0 1px 9px 2px;
          }
          &:focus:hover {
            box-shadow: ${p(a.secondary,.2)} 0 8px 18px 0px;
          }
        `}
    `," ",n=>n.appearance===u.TERTIARY&&`
      background: ${a.tertiary};
      color: ${a.darkest};

      ${!n.isLoading&&`
          &:hover {
            background: ${O(.05,a.tertiary)};
          }
          &:active {
            box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 3em inset;
          }
          &:focus {
            box-shadow: ${p(a.tertiary,.4)} 0 1px 9px 2px;
          }
          &:focus:hover {
            box-shadow: ${p(a.tertiary,.2)} 0 8px 18px 0px;
          }
        `}
    `," ",n=>n.appearance===u.OUTLINE&&`
      box-shadow: ${a.medium} 0 0 0 1px inset;
      color: ${a.dark};
      background: transparent;

      ${!n.isLoading&&`
          &:hover {
            box-shadow: ${a.mediumdark} 0 0 0 1px inset;
          }

          &:active {
            background: ${a.medium};
            box-shadow: ${a.medium} 0 0 0 1px inset;
            color: ${a.darkest};
          }
          &:focus {
            box-shadow: ${a.medium} 0 0 0 1px inset, ${p(a.secondary,.4)} 0 1px 9px 2px;
          }
          &:focus:hover {
            box-shadow: ${a.medium} 0 0 0 1px inset, ${p(a.secondary,.2)} 0 8px 18px 0px;
          }
        `};
    `,";",n=>n.appearance===u.PRIMARY_OUTLINE&&`
        box-shadow: ${a.primary} 0 0 0 1px inset;
        color: ${a.primary};

        &:hover {
          box-shadow: ${a.primary} 0 0 0 1px inset;
          background: transparent;
        }

        &:active {
          background: ${a.primary};
          box-shadow: ${a.primary} 0 0 0 1px inset;
          color: ${a.lightest};
        }
        &:focus {
          box-shadow: ${a.primary} 0 0 0 1px inset, ${p(a.primary,.4)} 0 1px 9px 2px;
        }
        &:focus:hover {
          box-shadow: ${a.primary} 0 0 0 1px inset, ${p(a.primary,.2)} 0 8px 18px 0px;
        }
      `,";",n=>n.appearance===u.SECONDARY_OUTLINE&&`
        box-shadow: ${a.secondary} 0 0 0 1px inset;
        color: ${a.secondary};

        &:hover {
          box-shadow: ${a.secondary} 0 0 0 1px inset;
          background: transparent;
        }

        &:active {
          background: ${a.secondary};
          box-shadow: ${a.secondary} 0 0 0 1px inset;
          color: ${a.lightest};
        }
        &:focus {
          box-shadow: ${a.secondary} 0 0 0 1px inset,
            ${p(a.secondary,.4)} 0 1px 9px 2px;
        }
        &:focus:hover {
          box-shadow: ${a.secondary} 0 0 0 1px inset,
            ${p(a.secondary,.2)} 0 8px 18px 0px;
        }
      `,";"),C=h("a",{target:"eltcyvq0"})(""),r=M.forwardRef(function({isDisabled:S,isLoading:c,loadingText:k,isLink:q,children:x,ButtonWrapper:$,...W},L){return $?e(v,{as:$,disabled:S,isLoading:c,...W,ref:L,children:l(f,{children:[e(y,{children:x}),c&&e(m,{children:k||"Loading..."})]})}):q?e(v,{as:C,isLoading:c,...W,ref:L,children:l(f,{children:[e(y,{children:x}),c&&e(m,{children:k||"Loading..."})]})}):e(v,{disabled:S,isLoading:c,...W,ref:L,children:l(f,{children:[e(y,{children:x}),c&&e(m,{children:k||"Loading..."})]})})});r.propTypes={isLoading:i.bool,loadingText:i.node,isLink:i.bool,children:i.node.isRequired,appearance:i.oneOf(Object.values(u)),isDisabled:i.bool,isUnclickable:i.bool,containsIcon:i.bool,size:i.oneOf(Object.values(s)),ButtonWrapper:i.oneOfType([i.func,i.object])};r.defaultProps={isLoading:!1,loadingText:null,isLink:!1,appearance:u.TERTIARY,isDisabled:!1,isUnclickable:!1,containsIcon:!1,size:s.MEDIUM,ButtonWrapper:void 0};r.__docgenInfo={description:"",methods:[],displayName:"Button",props:{isLoading:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"Checks if the button is in a loading state"},loadingText:{defaultValue:{value:"null",computed:!1},type:{name:"node"},required:!1,description:"When a button is in the loading state you can supply custom text"},isLink:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"Buttons that have hrefs should use <a> instead of <button>"},appearance:{defaultValue:{value:"'tertiary'",computed:!1},type:{name:"enum",value:[{value:'"outline"',computed:!1},{value:'"primary"',computed:!1},{value:'"primaryOutline"',computed:!1},{value:'"secondary"',computed:!1},{value:'"secondaryOutline"',computed:!1},{value:'"tertiary"',computed:!1}]},required:!1,description:""},isDisabled:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},isUnclickable:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"Prevents users from clicking on a button multiple times (for things like payment forms)"},containsIcon:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"Buttons with icons by themselves have a circular shape"},size:{defaultValue:{value:"'medium'",computed:!1},type:{name:"enum",value:[{value:'"medium"',computed:!1},{value:'"small"',computed:!1}]},required:!1,description:""},ButtonWrapper:{defaultValue:{value:"undefined",computed:!0},type:{name:"union",value:[{name:"func"},{name:"object"}]},required:!1,description:`A component that wraps the button
Can be used to add custom styles or props to the button`},children:{type:{name:"node"},required:!0,description:""}}};const N=h("button",{target:"evlwrqf0"})({name:"wurlq1",styles:"border:1px solid green;background:lightgreen;color:rebeccapurple;padding:1em;font-size:1.2em"});function o(n){return e(N,{...n})}const re={title:"Design System/Button",component:r},B={name:"all buttons",render:()=>l(f,{children:[e(r,{appearance:"primary",children:"Primary"}),e(r,{appearance:"secondary",children:"Secondary"}),e(r,{appearance:"tertiary",children:"Tertiary"}),e(r,{appearance:"outline",children:"Outline"}),e(r,{appearance:"primaryOutline",children:"Outline primary"}),e(r,{appearance:"secondaryOutline",children:"Outline secondary"}),e(r,{appearance:"primary",isDisabled:!0,children:"Disabled"}),e("br",{}),e(r,{appearance:"primary",isLoading:!0,children:"Primary"}),e(r,{appearance:"secondary",isLoading:!0,children:"Secondary"}),e(r,{appearance:"tertiary",isLoading:!0,children:"Tertiary"}),e(r,{appearance:"outline",isLoading:!0,children:"Outline"}),e(r,{appearance:"outline",isLoading:!0,loadingText:"Custom...",children:"Outline"}),e("br",{}),e(r,{appearance:"primary",size:"small",children:"Primary"}),e(r,{appearance:"secondary",size:"small",children:"Secondary"}),e(r,{appearance:"tertiary",size:"small",children:"Tertiary"}),e(r,{appearance:"outline",size:"small",children:"Outline"}),e(r,{appearance:"primary",isDisabled:!0,size:"small",children:"Disabled"}),e(r,{appearance:"outline",size:"small",containsIcon:!0,children:e(d,{icon:"link","aria-label":"Link"})}),l(r,{appearance:"outline",size:"small",children:[e(d,{icon:"link"}),"Link"]})]})},b={name:"button wrapper",render:()=>l("div",{children:[e(o,{children:"Original Button Wrapper"}),e("br",{}),e(r,{ButtonWrapper:o,appearance:"primary",children:"Primary"}),e(r,{ButtonWrapper:o,appearance:"secondary",children:"Secondary"}),e(r,{ButtonWrapper:o,appearance:"tertiary",children:"Tertiary"}),e(r,{ButtonWrapper:o,appearance:"outline",children:"Outline"}),e(r,{ButtonWrapper:o,appearance:"primaryOutline",children:"Outline primary"}),e(r,{ButtonWrapper:o,appearance:"secondaryOutline",children:"Outline secondary"}),e(r,{ButtonWrapper:o,appearance:"primary",isDisabled:!0,children:"Disabled"}),e("br",{}),e(r,{ButtonWrapper:o,appearance:"primary",isLoading:!0,children:"Primary"}),e(r,{ButtonWrapper:o,appearance:"secondary",isLoading:!0,children:"Secondary"}),e(r,{ButtonWrapper:o,appearance:"tertiary",isLoading:!0,children:"Tertiary"}),e(r,{ButtonWrapper:o,appearance:"outline",isLoading:!0,children:"Outline"}),e(r,{ButtonWrapper:o,appearance:"outline",isLoading:!0,loadingText:"Custom...",children:"Outline"}),e("br",{}),e(r,{ButtonWrapper:o,appearance:"primary",size:"small",children:"Primary"}),e(r,{ButtonWrapper:o,appearance:"secondary",size:"small",children:"Secondary"}),e(r,{ButtonWrapper:o,appearance:"tertiary",size:"small",children:"Tertiary"}),e(r,{ButtonWrapper:o,appearance:"outline",size:"small",children:"Outline"}),e(r,{ButtonWrapper:o,appearance:"primary",isDisabled:!0,size:"small",children:"Disabled"}),e(r,{ButtonWrapper:o,appearance:"outline",size:"small",containsIcon:!0,children:e(d,{icon:"link","aria-label":"Link"})}),l(r,{ButtonWrapper:o,appearance:"outline",size:"small",children:[e(d,{icon:"link"}),"Link"]})]})},g={name:"anchor wrapper",render:()=>l("div",{children:[e(t,{to:"http://storybook.js.org",children:"Original Link Wrapper"}),e("br",{}),e(r,{ButtonWrapper:t,appearance:"primary",href:"http://storybook.js.org",children:"Primary"}),e(r,{ButtonWrapper:t,appearance:"secondary",href:"http://storybook.js.org",children:"Secondary"}),e(r,{ButtonWrapper:t,appearance:"tertiary",href:"http://storybook.js.org",children:"Tertiary"}),e(r,{ButtonWrapper:t,appearance:"outline",href:"http://storybook.js.org",children:"Outline"}),e(r,{ButtonWrapper:t,appearance:"primaryOutline",href:"http://storybook.js.org",children:"Outline primary"}),e(r,{ButtonWrapper:t,appearance:"secondaryOutline",href:"http://storybook.js.org",children:"Outline secondary"}),e(r,{ButtonWrapper:t,appearance:"primary",isDisabled:!0,href:"http://storybook.js.org",children:"Disabled"}),e("br",{}),e(r,{ButtonWrapper:t,appearance:"primary",isLoading:!0,href:"http://storybook.js.org",children:"Primary"}),e(r,{ButtonWrapper:t,appearance:"secondary",isLoading:!0,href:"http://storybook.js.org",children:"Secondary"}),e(r,{ButtonWrapper:t,appearance:"tertiary",isLoading:!0,href:"http://storybook.js.org",children:"Tertiary"}),e(r,{ButtonWrapper:t,appearance:"outline",isLoading:!0,href:"http://storybook.js.org",children:"Outline"}),e(r,{ButtonWrapper:t,appearance:"outline",isLoading:!0,loadingText:"Custom...",href:"http://storybook.js.org",children:"Outline"}),e("br",{}),e(r,{ButtonWrapper:t,appearance:"primary",size:"small",href:"http://storybook.js.org",children:"Primary"}),e(r,{ButtonWrapper:t,appearance:"secondary",size:"small",href:"http://storybook.js.org",children:"Secondary"}),e(r,{ButtonWrapper:t,appearance:"tertiary",size:"small",href:"http://storybook.js.org",children:"Tertiary"}),e(r,{ButtonWrapper:t,appearance:"outline",size:"small",href:"http://storybook.js.org",children:"Outline"}),e(r,{ButtonWrapper:t,appearance:"primary",isDisabled:!0,size:"small",href:"http://storybook.js.org",children:"Disabled"}),e(r,{ButtonWrapper:t,appearance:"outline",size:"small",containsIcon:!0,href:"http://storybook.js.org",children:e(d,{icon:"link","aria-label":"Link"})}),l(r,{ButtonWrapper:t,appearance:"outline",size:"small",href:"http://storybook.js.org",children:[e(d,{icon:"link"}),"Link"]})]})};var j,w,T;B.parameters={...B.parameters,docs:{...(j=B.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'all buttons',
  render: () => <>
      <Button appearance='primary'>Primary</Button>
      <Button appearance='secondary'>Secondary</Button>
      <Button appearance='tertiary'>Tertiary</Button>
      <Button appearance='outline'>Outline</Button>
      <Button appearance='primaryOutline'>Outline primary</Button>
      <Button appearance='secondaryOutline'>Outline secondary</Button>
      <Button appearance='primary' isDisabled>
        Disabled
      </Button>
      <br />
      <Button appearance='primary' isLoading>
        Primary
      </Button>
      <Button appearance='secondary' isLoading>
        Secondary
      </Button>
      <Button appearance='tertiary' isLoading>
        Tertiary
      </Button>
      <Button appearance='outline' isLoading>
        Outline
      </Button>
      <Button appearance='outline' isLoading loadingText='Custom...'>
        Outline
      </Button>
      <br />
      <Button appearance='primary' size='small'>
        Primary
      </Button>
      <Button appearance='secondary' size='small'>
        Secondary
      </Button>
      <Button appearance='tertiary' size='small'>
        Tertiary
      </Button>
      <Button appearance='outline' size='small'>
        Outline
      </Button>
      <Button appearance='primary' isDisabled size='small'>
        Disabled
      </Button>
      <Button appearance='outline' size='small' containsIcon>
        <Icon icon='link' aria-label='Link' />
      </Button>
      <Button appearance='outline' size='small'>
        <Icon icon='link' />
        Link
      </Button>
    </>
}`,...(T=(w=B.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var I,D,P;b.parameters={...b.parameters,docs:{...(I=b.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'button wrapper',
  render: () => <div>
      <ButtonWrapper>Original Button Wrapper</ButtonWrapper>
      <br />
      <Button ButtonWrapper={ButtonWrapper} appearance='primary'>
        Primary
      </Button>
      <Button ButtonWrapper={ButtonWrapper} appearance='secondary'>
        Secondary
      </Button>
      <Button ButtonWrapper={ButtonWrapper} appearance='tertiary'>
        Tertiary
      </Button>
      <Button ButtonWrapper={ButtonWrapper} appearance='outline'>
        Outline
      </Button>
      <Button ButtonWrapper={ButtonWrapper} appearance='primaryOutline'>
        Outline primary
      </Button>
      <Button ButtonWrapper={ButtonWrapper} appearance='secondaryOutline'>
        Outline secondary
      </Button>
      <Button ButtonWrapper={ButtonWrapper} appearance='primary' isDisabled>
        Disabled
      </Button>
      <br />
      <Button ButtonWrapper={ButtonWrapper} appearance='primary' isLoading>
        Primary
      </Button>
      <Button ButtonWrapper={ButtonWrapper} appearance='secondary' isLoading>
        Secondary
      </Button>
      <Button ButtonWrapper={ButtonWrapper} appearance='tertiary' isLoading>
        Tertiary
      </Button>
      <Button ButtonWrapper={ButtonWrapper} appearance='outline' isLoading>
        Outline
      </Button>
      <Button ButtonWrapper={ButtonWrapper} appearance='outline' isLoading loadingText='Custom...'>
        Outline
      </Button>
      <br />
      <Button ButtonWrapper={ButtonWrapper} appearance='primary' size='small'>
        Primary
      </Button>
      <Button ButtonWrapper={ButtonWrapper} appearance='secondary' size='small'>
        Secondary
      </Button>
      <Button ButtonWrapper={ButtonWrapper} appearance='tertiary' size='small'>
        Tertiary
      </Button>
      <Button ButtonWrapper={ButtonWrapper} appearance='outline' size='small'>
        Outline
      </Button>
      <Button ButtonWrapper={ButtonWrapper} appearance='primary' isDisabled size='small'>
        Disabled
      </Button>
      <Button ButtonWrapper={ButtonWrapper} appearance='outline' size='small' containsIcon>
        <Icon icon='link' aria-label='Link' />
      </Button>
      <Button ButtonWrapper={ButtonWrapper} appearance='outline' size='small'>
        <Icon icon='link' />
        Link
      </Button>
    </div>
}`,...(P=(D=b.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};var A,R,E;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'anchor wrapper',
  render: () => <div>
      <StoryLinkWrapper to='http://storybook.js.org'>
        Original Link Wrapper
      </StoryLinkWrapper>
      <br />
      <Button ButtonWrapper={StoryLinkWrapper} appearance='primary' href='http://storybook.js.org'>
        Primary
      </Button>
      <Button ButtonWrapper={StoryLinkWrapper} appearance='secondary' href='http://storybook.js.org'>
        Secondary
      </Button>
      <Button ButtonWrapper={StoryLinkWrapper} appearance='tertiary' href='http://storybook.js.org'>
        Tertiary
      </Button>
      <Button ButtonWrapper={StoryLinkWrapper} appearance='outline' href='http://storybook.js.org'>
        Outline
      </Button>
      <Button ButtonWrapper={StoryLinkWrapper} appearance='primaryOutline' href='http://storybook.js.org'>
        Outline primary
      </Button>
      <Button ButtonWrapper={StoryLinkWrapper} appearance='secondaryOutline' href='http://storybook.js.org'>
        Outline secondary
      </Button>
      <Button ButtonWrapper={StoryLinkWrapper} appearance='primary' isDisabled href='http://storybook.js.org'>
        Disabled
      </Button>
      <br />
      <Button ButtonWrapper={StoryLinkWrapper} appearance='primary' isLoading href='http://storybook.js.org'>
        Primary
      </Button>
      <Button ButtonWrapper={StoryLinkWrapper} appearance='secondary' isLoading href='http://storybook.js.org'>
        Secondary
      </Button>
      <Button ButtonWrapper={StoryLinkWrapper} appearance='tertiary' isLoading href='http://storybook.js.org'>
        Tertiary
      </Button>
      <Button ButtonWrapper={StoryLinkWrapper} appearance='outline' isLoading href='http://storybook.js.org'>
        Outline
      </Button>
      <Button ButtonWrapper={StoryLinkWrapper} appearance='outline' isLoading loadingText='Custom...' href='http://storybook.js.org'>
        Outline
      </Button>
      <br />
      <Button ButtonWrapper={StoryLinkWrapper} appearance='primary' size='small' href='http://storybook.js.org'>
        Primary
      </Button>
      <Button ButtonWrapper={StoryLinkWrapper} appearance='secondary' size='small' href='http://storybook.js.org'>
        Secondary
      </Button>
      <Button ButtonWrapper={StoryLinkWrapper} appearance='tertiary' size='small' href='http://storybook.js.org'>
        Tertiary
      </Button>
      <Button ButtonWrapper={StoryLinkWrapper} appearance='outline' size='small' href='http://storybook.js.org'>
        Outline
      </Button>
      <Button ButtonWrapper={StoryLinkWrapper} appearance='primary' isDisabled size='small' href='http://storybook.js.org'>
        Disabled
      </Button>
      <Button ButtonWrapper={StoryLinkWrapper} appearance='outline' size='small' containsIcon href='http://storybook.js.org'>
        <Icon icon='link' aria-label='Link' />
      </Button>
      <Button ButtonWrapper={StoryLinkWrapper} appearance='outline' size='small' href='http://storybook.js.org'>
        <Icon icon='link' />
        Link
      </Button>
    </div>
}`,...(E=(R=g.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};const ae=["AllButtons","buttonWrapper","AnchorWrapper"];export{B as AllButtons,g as AnchorWrapper,ae as __namedExportsOrder,b as buttonWrapper,re as default};
//# sourceMappingURL=Button.stories-d517de90.js.map
