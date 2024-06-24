"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[9130],{7533:(e,t,o)=>{o.d(t,{A:()=>c});var n=o(6540),s=o(1122),l=o(6025),r=o(4848);const c=e=>{let{alt:t,sources:o,style:c}=e;const[i,d]=(0,n.useState)(!1),a=e=>{"Escape"===e.key&&d(!1)};(0,n.useEffect)((()=>(i?document.addEventListener("keydown",a):document.removeEventListener("keydown",a),()=>{document.removeEventListener("keydown",a)})),[i]);return(0,r.jsx)("div",{className:"zoomable-image "+(i?"fullscreen":""),onClick:()=>{d(!i)},style:{width:"50%",margin:"0 auto",display:"flex",justifyContent:"center",...c},children:(0,r.jsx)(s.A,{className:"zoomable-image-inner",alt:t,sources:{light:(0,l.Ay)(o.light),dark:(0,l.Ay)(o.dark)}})})}},2187:(e,t,o)=>{o.r(t),o.d(t,{CH:()=>y,assets:()=>u,chCodeConfig:()=>x,contentTitle:()=>p,default:()=>m,frontMatter:()=>h,metadata:()=>g,toc:()=>j});o(6540);var n=o(4848),s=o(8453),l=o(4754),r=(o(1122),o(6025)),c=o(7533),i=o(3554),d=o.n(i),a=o(7293);const h={},p="Chat Widget",g={id:"administration/chat-widget",title:"Chat Widget",description:"This page may contain outdated information. It will be updated as soon as possible.",source:"@site/docs/administration/chat-widget.mdx",sourceDirName:"administration",slug:"/administration/chat-widget",permalink:"/administration/chat-widget",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Global Variables",permalink:"/administration/global-env"},next:{title:"Inputs and Outputs",permalink:"/components/inputs-and-outputs"}},u={},y={annotations:l.hk,InlineCode:l.R0,Code:l.Cy},x={staticMediaQuery:"not screen, (max-width: 768px)",lineNumbers:!0,showCopyButton:!0,themeName:"github-dark"},j=[{value:"Features",id:"features",level:2},{value:"Usage",id:"usage",level:2},{value:"Embed your flow into HTML",id:"embed-your-flow-into-html",level:3},{value:"Embed your flow with React",id:"embed-your-flow-with-react",level:3},{value:"Embed your flow with Angular",id:"embed-your-flow-with-angular",level:3},{value:"Chat widget configuration",id:"chat-widget-configuration",level:2}];function C(e){const t=Object.assign({h1:"h1",p:"p",h2:"h2",strong:"strong",hr:"hr",h3:"h3",ol:"ol",li:"li",em:"em",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,s.RP)(),e.components);return y||f("CH",!1),y.Code||f("CH.Code",!0),y.InlineCode||f("CH.InlineCode",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("style",{dangerouslySetInnerHTML:{__html:'[data-ch-theme="github-dark"] {  --ch-t-colorScheme: dark;--ch-t-foreground: #c9d1d9;--ch-t-background: #0d1117;--ch-t-lighter-inlineBackground: #0d1117e6;--ch-t-editor-background: #0d1117;--ch-t-editor-foreground: #c9d1d9;--ch-t-editor-lineHighlightBackground: #6e76811a;--ch-t-editor-rangeHighlightBackground: #ffffff0b;--ch-t-editor-infoForeground: #3794FF;--ch-t-editor-selectionBackground: #264F78;--ch-t-focusBorder: #1f6feb;--ch-t-tab-activeBackground: #0d1117;--ch-t-tab-activeForeground: #c9d1d9;--ch-t-tab-inactiveBackground: #010409;--ch-t-tab-inactiveForeground: #8b949e;--ch-t-tab-border: #30363d;--ch-t-tab-activeBorder: #0d1117;--ch-t-editorGroup-border: #30363d;--ch-t-editorGroupHeader-tabsBackground: #010409;--ch-t-editorLineNumber-foreground: #6e7681;--ch-t-input-background: #0d1117;--ch-t-input-foreground: #c9d1d9;--ch-t-input-border: #30363d;--ch-t-icon-foreground: #8b949e;--ch-t-sideBar-background: #010409;--ch-t-sideBar-foreground: #c9d1d9;--ch-t-sideBar-border: #30363d;--ch-t-list-activeSelectionBackground: #6e768166;--ch-t-list-activeSelectionForeground: #c9d1d9;--ch-t-list-hoverBackground: #6e76811a;--ch-t-list-hoverForeground: #c9d1d9; }'}}),"\n","\n","\n",(0,n.jsx)(t.h1,{id:"chat-widget",children:"Chat Widget"}),"\n",(0,n.jsx)(a.A,{type:"warning",title:"warning",children:(0,n.jsx)(t.p,{children:"This page may contain outdated information. It will be updated as soon as possible."})}),"\n",(0,n.jsx)("div",{style:{marginBottom:"20px"},children:(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)("b",{children:"Langflow Chat Widget"})," is a powerful web component that enables\ncommunication with a Langflow project. This widget allows for a chat interface\nembedding, allowing the integration of Langflow into web applications\neffortlessly."]})}),"\n",(0,n.jsx)(t.h2,{id:"features",children:"Features"}),"\n",(0,n.jsxs)(t.p,{children:["\ud83c\udf1f ",(0,n.jsx)(t.strong,{children:"Seamless Integration:"})," Easily integrate the Langflow Chat Widget into your website or web application with just a few lines of JavaScript."]}),"\n",(0,n.jsxs)(t.p,{children:["\ud83d\ude80 ",(0,n.jsx)(t.strong,{children:"Interactive Chat Interface:"})," Engage your users with a user-friendly conversation, powered by Langflow's advanced language understanding capabilities."]}),"\n",(0,n.jsxs)(t.p,{children:["\ud83c\udf9b\ufe0f ",(0,n.jsx)(t.strong,{children:"Customizable Styling:"})," Customize the appearance of the chat widget to match your application's design and branding."]}),"\n",(0,n.jsxs)(t.p,{children:["\ud83c\udf10 ",(0,n.jsx)(t.strong,{children:"Multilingual Support:"})," Communicate with users in multiple languages, opening up your application to a global audience."]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)("div",{style:{marginBottom:"20px"},children:(0,n.jsx)(t.p,{children:"You can get the HTML code embedded with the chat by clicking the Code button\nat the Sidebar after building a flow."})}),"\n"," ","\n",(0,n.jsx)(c.A,{alt:"Docusaurus themed image",sources:{light:(0,r.Ay)("img/widget-sidebar.png"),dark:(0,r.Ay)("img/widget-sidebar.png")},style:{width:"50%",maxWidth:"600px",margin:"0 auto"}}),"\n",(0,n.jsx)("div",{style:{marginBottom:"20px"},children:(0,n.jsx)(t.p,{children:"Clicking the Chat Widget HTML tab, you'll get the code to be inserted. Read\nbelow to learn how to use it with HTML, React and Angular."})}),"\n"," ","\n",(0,n.jsx)(c.A,{alt:"Docusaurus themed image",sources:{light:(0,r.Ay)("img/widget-code.png"),dark:(0,r.Ay)("img/widget-code.png")},style:{width:"100%",maxWidth:"800px",margin:"0 auto"}}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"embed-your-flow-into-html",children:"Embed your flow into HTML"}),"\n",(0,n.jsxs)(t.p,{children:["The Chat Widget can be embedded into any HTML page, inside a ",(0,n.jsx)(y.InlineCode,{codeConfig:x,code:{lines:[{tokens:[{content:"<",props:{style:{color:"#C9D1D9"}}},{content:"body",props:{style:{color:"#7EE787"}}},{content:">",props:{style:{color:"#C9D1D9"}}}]}],lang:"jsx"},children:"<body>"})," tag, as demonstrated in the video below."]}),"\n",(0,n.jsx)("div",{style:{marginBottom:"20px",display:"flex",justifyContent:"center"},children:(0,n.jsx)(d(),{playing:!0,controls:!0,url:"/videos/langflow_widget.mp4"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"embed-your-flow-with-react",children:"Embed your flow with React"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["To embed the Chat Widget using React, insert this ",(0,n.jsx)(y.InlineCode,{codeConfig:x,code:{lines:[{tokens:[{content:"<",props:{style:{color:"#C9D1D9"}}},{content:"script",props:{style:{color:"#7EE787"}}},{content:">",props:{style:{color:"#C9D1D9"}}}]}],lang:"jsx"},children:"<script>"})," tag into the React ",(0,n.jsx)(t.em,{children:"index.html"})," file, inside the ",(0,n.jsx)(y.InlineCode,{codeConfig:x,code:{lines:[{tokens:[{content:"<",props:{style:{color:"#C9D1D9"}}},{content:"body",props:{style:{color:"#7EE787"}}},{content:">",props:{style:{color:"#C9D1D9"}}}]}],lang:"jsx"},children:"<body>"})," tag:"]}),"\n"]}),"\n",(0,n.jsx)(y.Code,{codeConfig:x,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"<",props:{style:{color:"#C9D1D9"}}},{content:"script ",props:{style:{color:"#7EE787"}}},{content:"src",props:{style:{color:"#79C0FF"}}},{content:"=",props:{style:{color:"#C9D1D9"}}},{content:'"https://cdn.jsdelivr.net/gh/langflow-ai/langflow-embedded-chat@main/dist/build/static/js/bundle.min.js"',props:{style:{color:"#A5D6FF"}}},{content:"></",props:{style:{color:"#C9D1D9"}}},{content:"script",props:{style:{color:"#7EE787"}}},{content:">",props:{style:{color:"#C9D1D9"}}}]}],lang:"html"},annotations:[]}]}),"\n",(0,n.jsxs)(t.ol,{start:"2",children:["\n",(0,n.jsx)(t.li,{children:"Declare your Web Component and encapsulate it in a React component."}),"\n"]}),"\n",(0,n.jsx)(y.Code,{codeConfig:x,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"declare",props:{style:{color:"#FF7B72"}}},{content:" global {",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"  namespace ",props:{style:{color:"#FF7B72"}}},{content:"JSX",props:{style:{color:"#FFA657"}}},{content:" {",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"    interface ",props:{style:{color:"#FF7B72"}}},{content:"IntrinsicElements",props:{style:{color:"#FFA657"}}},{content:" {",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:'      "langflow-chat"',props:{style:{color:"#A5D6FF"}}},{content:": ",props:{style:{color:"#FF7B72"}}},{content:"any",props:{style:{color:"#79C0FF"}}},{content:";",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"    }",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"  }",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"}",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"export default function ",props:{style:{color:"#FF7B72"}}},{content:"ChatWidget",props:{style:{color:"#D2A8FF"}}},{content:"({ className }) ",props:{style:{color:"#FFA657"}}},{content:"{",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"  return",props:{style:{color:"#FF7B72"}}},{content:" (",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"    <",props:{style:{color:"#C9D1D9"}}},{content:"div ",props:{style:{color:"#7EE787"}}},{content:"className",props:{style:{color:"#79C0FF"}}},{content:"={",props:{style:{color:"#FF7B72"}}},{content:"className",props:{style:{color:"#C9D1D9"}}},{content:"}",props:{style:{color:"#FF7B72"}}},{content:">",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"      <",props:{style:{color:"#C9D1D9"}}},{content:"langflow-chat",props:{style:{color:"#7EE787"}}}]},{tokens:[{content:"        chat_inputs",props:{style:{color:"#79C0FF"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:'\'{"your_key":"value"}\'',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"        chat_input_field",props:{style:{color:"#79C0FF"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:'"your_chat_key"',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"        flow_id",props:{style:{color:"#79C0FF"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:'"your_flow_id"',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"        host_url",props:{style:{color:"#79C0FF"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:'"langflow_url"',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"      ></",props:{style:{color:"#C9D1D9"}}},{content:"langflow-chat",props:{style:{color:"#7EE787"}}},{content:">",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"    </",props:{style:{color:"#C9D1D9"}}},{content:"div",props:{style:{color:"#7EE787"}}},{content:">",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"  );",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"}",props:{style:{color:"#C9D1D9"}}}]}],lang:"jsx"},annotations:[]}]}),"\n",(0,n.jsxs)(t.ol,{start:"3",children:["\n",(0,n.jsx)(t.li,{children:"Finally, you can place the component anywhere in your code to display the Chat Widget."}),"\n"]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"embed-your-flow-with-angular",children:"Embed your flow with Angular"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["To use the chat widget in Angular, first add this ",(0,n.jsx)(y.InlineCode,{codeConfig:x,code:{lines:[{tokens:[{content:"<",props:{style:{color:"#C9D1D9"}}},{content:"script",props:{style:{color:"#7EE787"}}},{content:">",props:{style:{color:"#C9D1D9"}}}]}],lang:"jsx"},children:"<script>"})," tag into the Angular ",(0,n.jsx)(t.em,{children:"index.html"})," file, inside the ",(0,n.jsx)(y.InlineCode,{codeConfig:x,code:{lines:[{tokens:[{content:"<",props:{style:{color:"#C9D1D9"}}},{content:"body",props:{style:{color:"#7EE787"}}},{content:">",props:{style:{color:"#C9D1D9"}}}]}],lang:"jsx"},children:"<body>"})," tag."]}),"\n"]}),"\n",(0,n.jsx)(y.Code,{codeConfig:x,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"<",props:{style:{color:"#C9D1D9"}}},{content:"script ",props:{style:{color:"#7EE787"}}},{content:"src",props:{style:{color:"#79C0FF"}}},{content:"=",props:{style:{color:"#C9D1D9"}}},{content:'"https://cdn.jsdelivr.net/gh/langflow-ai/langflow-embedded-chat@main/dist/build/static/js/bundle.min.js"',props:{style:{color:"#A5D6FF"}}},{content:"></",props:{style:{color:"#C9D1D9"}}},{content:"script",props:{style:{color:"#7EE787"}}},{content:">",props:{style:{color:"#C9D1D9"}}}]}],lang:"html"},annotations:[]}]}),"\n",(0,n.jsxs)(t.ol,{start:"2",children:["\n",(0,n.jsxs)(t.li,{children:["When you use a custom web component in an Angular template, the Angular compiler might show a warning when it doesn't recognize the custom elements by default. To suppress this warning, add ",(0,n.jsx)(y.InlineCode,{codeConfig:x,code:{lines:[{tokens:[{content:"CUSTOM_ELEMENTS_SCHEMA",props:{style:{color:"#79C0FF"}}}]}],lang:"jsx"},children:"CUSTOM_ELEMENTS_SCHEMA"})," to the module's ",(0,n.jsx)(y.InlineCode,{codeConfig:x,code:{lines:[{tokens:[{content:"@NgModule.schemas",props:{style:{color:"#C9D1D9"}}}]}],lang:"jsx"},children:"@NgModule.schemas"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Open the module file (it typically ends with ",(0,n.jsx)(t.em,{children:".module.ts"}),") where you'd add the ",(0,n.jsx)(y.InlineCode,{codeConfig:x,code:{lines:[{tokens:[{content:"langflow",props:{style:{color:"#C9D1D9"}}},{content:"-",props:{style:{color:"#FF7B72"}}},{content:"chat",props:{style:{color:"#C9D1D9"}}}]}],lang:"jsx"},children:"langflow-chat"})," web component."]}),"\n",(0,n.jsxs)(t.li,{children:["Import ",(0,n.jsx)(y.InlineCode,{codeConfig:x,code:{lines:[{tokens:[{content:"CUSTOM_ELEMENTS_SCHEMA",props:{style:{color:"#79C0FF"}}}]}],lang:"jsx"},children:"CUSTOM_ELEMENTS_SCHEMA"})," at the top of the file:"]}),"\n"]}),"\n",(0,n.jsx)(y.Code,{codeConfig:x,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"import",props:{style:{color:"#FF7B72"}}},{content:" { NgModule, CUSTOM_ELEMENTS_SCHEMA } ",props:{style:{color:"#C9D1D9"}}},{content:"from ",props:{style:{color:"#FF7B72"}}},{content:'"@angular/core"',props:{style:{color:"#A5D6FF"}}},{content:";",props:{style:{color:"#C9D1D9"}}}]}],lang:"ts"},annotations:[]}]}),"\n",(0,n.jsxs)(t.ol,{start:"5",children:["\n",(0,n.jsxs)(t.li,{children:["Add ",(0,n.jsx)(y.InlineCode,{codeConfig:x,code:{lines:[{tokens:[{content:"CUSTOM_ELEMENTS_SCHEMA",props:{style:{color:"#79C0FF"}}}]}],lang:"jsx"},children:"CUSTOM_ELEMENTS_SCHEMA"})," to the 'schemas' array inside the '@NgModule' decorator:"]}),"\n"]}),"\n",(0,n.jsx)(y.Code,{codeConfig:x,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"@",props:{style:{color:"#C9D1D9"}}},{content:"NgModule",props:{style:{color:"#D2A8FF"}}},{content:"({",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"  declarations: [",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"    // ... Other components and directives ...",props:{style:{color:"#8B949E"}}}]},{tokens:[{content:"  ],",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"  imports: [",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"    // ... Other imported modules ...",props:{style:{color:"#8B949E"}}}]},{tokens:[{content:"  ],",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"  schemas: [",props:{style:{color:"#C9D1D9"}}},{content:"CUSTOM_ELEMENTS_SCHEMA",props:{style:{color:"#79C0FF"}}},{content:"], ",props:{style:{color:"#C9D1D9"}}},{content:"// Add the CUSTOM_ELEMENTS_SCHEMA here",props:{style:{color:"#8B949E"}}}]},{tokens:[{content:"})",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"export class ",props:{style:{color:"#FF7B72"}}},{content:"YourModule",props:{style:{color:"#FFA657"}}},{content:" {}",props:{style:{color:"#C9D1D9"}}}]}],lang:"ts"},annotations:[]}]}),"\n",(0,n.jsxs)(t.ol,{start:"6",children:["\n",(0,n.jsxs)(t.li,{children:["In your Angular project, find the component belonging to the module where ",(0,n.jsx)(y.InlineCode,{codeConfig:x,code:{lines:[{tokens:[{content:"CUSTOM_ELEMENTS_SCHEMA",props:{style:{color:"#79C0FF"}}}]}],lang:"jsx"},children:"CUSTOM_ELEMENTS_SCHEMA"})," was added. Inside the template, add the ",(0,n.jsx)(y.InlineCode,{codeConfig:x,code:{lines:[{tokens:[{content:"langflow",props:{style:{color:"#C9D1D9"}}},{content:"-",props:{style:{color:"#FF7B72"}}},{content:"chat",props:{style:{color:"#C9D1D9"}}}]}],lang:"jsx"},children:"langflow-chat"})," tag to include the Chat Widget in your component's view:"]}),"\n"]}),"\n",(0,n.jsx)(y.Code,{codeConfig:x,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"<",props:{style:{color:"#C9D1D9"}}},{content:"langflow-chat",props:{style:{color:"#7EE787"}}}]},{tokens:[{content:"  chat_inputs",props:{style:{color:"#79C0FF"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:'\'{"your_key":"value"}\'',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"  chat_input_field",props:{style:{color:"#79C0FF"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:'"your_chat_key"',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"  flow_id",props:{style:{color:"#79C0FF"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:'"your_flow_id"',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"  host_url",props:{style:{color:"#79C0FF"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:'"langflow_url"',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"></",props:{style:{color:"#C9D1D9"}}},{content:"langflow-chat",props:{style:{color:"#7EE787"}}},{content:">",props:{style:{color:"#C9D1D9"}}}]}],lang:"jsx"},annotations:[]}]}),"\n",(0,n.jsx)(a.A,{type:"info",children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)(y.InlineCode,{codeConfig:x,code:{lines:[{tokens:[{content:"CUSTOM_ELEMENTS_SCHEMA",props:{style:{color:"#79C0FF"}}}]}],lang:"jsx"},children:"CUSTOM_ELEMENTS_SCHEMA"})," is a built-in schema that allows Angular to\nrecognize custom elements."]})}),(0,n.jsx)("li",{children:(0,n.jsxs)(t.p,{children:["Adding ",(0,n.jsx)(y.InlineCode,{codeConfig:x,code:{lines:[{tokens:[{content:"CUSTOM_ELEMENTS_SCHEMA",props:{style:{color:"#79C0FF"}}}]}],lang:"jsx"},children:"CUSTOM_ELEMENTS_SCHEMA"})," tells Angular to allow custom elements\nin your templates, and it will suppress the warning related to unknown\nelements like ",(0,n.jsx)(y.InlineCode,{codeConfig:x,code:{lines:[{tokens:[{content:"langflow",props:{style:{color:"#C9D1D9"}}},{content:"-",props:{style:{color:"#FF7B72"}}},{content:"chat",props:{style:{color:"#C9D1D9"}}}]}],lang:"jsx"},children:"langflow-chat"}),"."]})}),(0,n.jsx)("li",{children:(0,n.jsxs)(t.p,{children:["Notice that you can only use the Chat Widget in components that are part\nof the module where you added ",(0,n.jsx)(y.InlineCode,{codeConfig:x,code:{lines:[{tokens:[{content:"CUSTOM_ELEMENTS_SCHEMA",props:{style:{color:"#79C0FF"}}}]}],lang:"jsx"},children:"CUSTOM_ELEMENTS_SCHEMA"}),"."]})})]})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"chat-widget-configuration",children:"Chat widget configuration"}),"\n",(0,n.jsx)(t.p,{children:"Use the widget API to customize your Chat Widget:"}),"\n",(0,n.jsx)(a.A,{type:"caution",children:(0,n.jsxs)(t.p,{children:["Props with the type JSON need to be passed as Stringified JSONs, with the\nformat {",(0,n.jsx)("span",{children:'"key":"value"'}),"}."]})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Prop"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Required"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"bot_message_style"}),(0,n.jsx)(t.td,{children:"JSON"}),(0,n.jsx)(t.td,{children:"No"}),(0,n.jsx)(t.td,{children:"Applies custom formatting to bot messages."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"chat_input_field"}),(0,n.jsx)(t.td,{children:"String"}),(0,n.jsx)(t.td,{children:"Yes"}),(0,n.jsx)(t.td,{children:"Defines the type of the input field for chat messages."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"chat_inputs"}),(0,n.jsx)(t.td,{children:"JSON"}),(0,n.jsx)(t.td,{children:"Yes"}),(0,n.jsx)(t.td,{children:"Determines the chat input elements and their respective values."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"chat_output_key"}),(0,n.jsx)(t.td,{children:"String"}),(0,n.jsx)(t.td,{children:"No"}),(0,n.jsx)(t.td,{children:"Specifies which output to display if multiple outputs are available."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"chat_position"}),(0,n.jsx)(t.td,{children:"String"}),(0,n.jsx)(t.td,{children:"No"}),(0,n.jsx)(t.td,{children:"Positions the chat window on the screen (options include: top-left, top-center, top-right, center-left, center-right, bottom-right, bottom-center, bottom-left)."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"chat_trigger_style"}),(0,n.jsx)(t.td,{children:"JSON"}),(0,n.jsx)(t.td,{children:"No"}),(0,n.jsx)(t.td,{children:"Styles the chat trigger button."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"chat_window_style"}),(0,n.jsx)(t.td,{children:"JSON"}),(0,n.jsx)(t.td,{children:"No"}),(0,n.jsx)(t.td,{children:"Customizes the overall appearance of the chat window."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"error_message_style"}),(0,n.jsx)(t.td,{children:"JSON"}),(0,n.jsx)(t.td,{children:"No"}),(0,n.jsx)(t.td,{children:"Sets the format for error messages within the chat window."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"flow_id"}),(0,n.jsx)(t.td,{children:"String"}),(0,n.jsx)(t.td,{children:"Yes"}),(0,n.jsx)(t.td,{children:"Identifies the flow that the component is associated with."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"height"}),(0,n.jsx)(t.td,{children:"Number"}),(0,n.jsx)(t.td,{children:"No"}),(0,n.jsx)(t.td,{children:"Sets the height of the chat window in pixels."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"host_url"}),(0,n.jsx)(t.td,{children:"String"}),(0,n.jsx)(t.td,{children:"Yes"}),(0,n.jsx)(t.td,{children:"Specifies the URL of the host for chat component communication."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"input_container_style"}),(0,n.jsx)(t.td,{children:"JSON"}),(0,n.jsx)(t.td,{children:"No"}),(0,n.jsx)(t.td,{children:"Applies styling to the container where chat messages are entered."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"input_style"}),(0,n.jsx)(t.td,{children:"JSON"}),(0,n.jsx)(t.td,{children:"No"}),(0,n.jsx)(t.td,{children:"Sets the style for the chat input field."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"online"}),(0,n.jsx)(t.td,{children:"Boolean"}),(0,n.jsx)(t.td,{children:"No"}),(0,n.jsx)(t.td,{children:"Toggles the online status of the chat component."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"online_message"}),(0,n.jsx)(t.td,{children:"String"}),(0,n.jsx)(t.td,{children:"No"}),(0,n.jsx)(t.td,{children:"Sets a custom message to display when the chat component is online."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"placeholder"}),(0,n.jsx)(t.td,{children:"String"}),(0,n.jsx)(t.td,{children:"No"}),(0,n.jsx)(t.td,{children:"Sets the placeholder text for the chat input field."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"placeholder_sending"}),(0,n.jsx)(t.td,{children:"String"}),(0,n.jsx)(t.td,{children:"No"}),(0,n.jsx)(t.td,{children:"Sets the placeholder text to display while a message is being sent."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"send_button_style"}),(0,n.jsx)(t.td,{children:"JSON"}),(0,n.jsx)(t.td,{children:"No"}),(0,n.jsx)(t.td,{children:"Sets the style for the send button in the chat window."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"send_icon_style"}),(0,n.jsx)(t.td,{children:"JSON"}),(0,n.jsx)(t.td,{children:"No"}),(0,n.jsx)(t.td,{children:"Sets the style for the send icon in the chat window."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"tweaks"}),(0,n.jsx)(t.td,{children:"JSON"}),(0,n.jsx)(t.td,{children:"No"}),(0,n.jsx)(t.td,{children:"Applies additional custom adjustments for the associated flow."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"user_message_style"}),(0,n.jsx)(t.td,{children:"JSON"}),(0,n.jsx)(t.td,{children:"No"}),(0,n.jsx)(t.td,{children:"Determines the formatting for user messages in the chat window."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"width"}),(0,n.jsx)(t.td,{children:"Number"}),(0,n.jsx)(t.td,{children:"No"}),(0,n.jsx)(t.td,{children:"Sets the width of the chat window in pixels."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"window_title"}),(0,n.jsx)(t.td,{children:"String"}),(0,n.jsx)(t.td,{children:"No"}),(0,n.jsx)(t.td,{children:"Sets the title displayed in the chat window's header or title bar."})]})]})]})]})}const m=function(e={}){const{wrapper:t}=Object.assign({},(0,s.RP)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(C,e)})):C(e)};function f(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);