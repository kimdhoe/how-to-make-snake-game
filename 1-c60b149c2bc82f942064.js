(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{149:function(t,e,a){"use strict";a.r(e),a.d(e,"graphql",function(){return m}),a.d(e,"StaticQueryContext",function(){return u}),a.d(e,"StaticQuery",function(){return g});var n=a(8),i=a(0),o=a.n(i),r=a(4),c=a.n(r),b=a(146),s=a.n(b);a.d(e,"Link",function(){return s.a}),a.d(e,"withPrefix",function(){return b.withPrefix}),a.d(e,"navigate",function(){return b.navigate}),a.d(e,"push",function(){return b.push}),a.d(e,"replace",function(){return b.replace}),a.d(e,"navigateTo",function(){return b.navigateTo});var d=a(155),l=a.n(d);a.d(e,"PageRenderer",function(){return l.a});var p=a(51);a.d(e,"parsePath",function(){return p.a});var u=o.a.createContext({}),g=function(t){return Object(n.b)(u.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):Object(n.b)("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}g.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},155:function(t,e,a){var n;t.exports=(n=a(178))&&n.default||n},156:function(t,e,a){"use strict";var n=a(8),i=a(181),o=(a(0),a(4)),r=a.n(o),c=a(182),b=a.n(c),s=a(149);function d(t){var e=t.description,a=t.lang,o=t.meta,r=t.keywords,c=t.title;return Object(n.b)(s.StaticQuery,{query:l,render:function(t){var i=e||t.site.siteMetadata.description;return Object(n.b)(b.a,{htmlAttributes:{lang:a},title:c,titleTemplate:""+t.site.siteMetadata.title,meta:[{name:"description",content:i},{property:"og:title",content:c},{property:"og:description",content:i},{property:"og:image",content:"https://kimdhoe.github.io/how-to-make-snake-game/snake-game.png"},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:i}].concat(r.length>0?{name:"keywords",content:r.join(", ")}:[]).concat(o)},Object(n.b)("link",{rel:"icon",type:"image/x-icon",href:"https://kimdhoe.github.io/how-to-make-snake-game/favicon.ico"}))},data:i})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:r.a.string,lang:r.a.string,meta:r.a.array,keywords:r.a.arrayOf(r.a.string),title:r.a.string},e.a=d;var l="1025518380"},173:function(t,e,a){"use strict";a(175);var n=a(27),i=a(8),o=a(177),r=a(0),c=a.n(r),b=a(4),s=a.n(b),d=a(149),l=(a(179),{container:{width:"11.9%",height:"11.9%",position:"absolute",border:"4px solid #f8f9fa",borderRadius:"50%"}}),p=function(t){var e=t.x,a=t.y,o=t.food;return Object(i.b)("div",{css:Object(n.a)([l.container,{left:10*e+"%",top:10*a+"%",backgroundColor:o?"rgba(201, 42, 42, 0.3)":"rgba(92, 148, 13, 0.7)"}],"")})},u={container:{width:"100%",height:"100%"}},g=function(){return Object(i.b)("div",{css:Object(n.a)([u.container],"")},Object(i.b)(p,{x:1,y:1}),Object(i.b)(p,{x:2,y:1}),Object(i.b)(p,{x:3,y:1}),Object(i.b)(p,{x:4,y:1}),Object(i.b)(p,{x:4,y:2}),Object(i.b)(p,{x:4,y:3}),Object(i.b)(p,{x:4,y:4}),Object(i.b)(p,{x:4,y:5}),Object(i.b)(p,{x:5,y:5}),Object(i.b)(p,{x:6,y:5}),Object(i.b)(p,{x:6,y:4}),Object(i.b)(p,{x:7,y:4}),Object(i.b)(p,{x:8,y:4}),Object(i.b)(p,{x:8,y:5}),Object(i.b)(p,{x:8,y:6}),Object(i.b)(p,{x:8,y:7}),Object(i.b)(p,{x:8,y:8}),Object(i.b)(p,{x:7,y:8}),Object(i.b)(p,{x:6,y:8}),Object(i.b)(p,{x:5,y:8}),Object(i.b)(p,{x:2,y:8,food:!0}))},m={container:{margin:"0 auto",maxWidth:960,borderRadius:17,padding:"1em 1.5em 0"},wrapper:{position:"relative",paddingBottom:"3em"},game:{position:"relative",margin:"0 auto",paddingBottom:"38%",width:"40%",height:0,borderRadius:10,backgroundColor:"#f8f9fa","@media (max-width: 768px)":{position:"absolute",top:"1em",right:0,opacity:.8,backgroundColor:"transparent"}},heading:{position:"absolute",top:"10%",left:0,"@media (max-width: 768px)":{position:"relative"}},headingText1:{paddingLeft:"0.2em",letterSpacing:"0.07em",textTransform:"uppercase",fontSize:"1.9rem",fontWeight:300,color:"black"},headingLine:{display:"block",margin:"0.2em",height:2,width:"50%",backgroundColor:"black"},headingText2:{fontSize:"4.4rem",fontFamily:"Georgia",fontWeight:600,fontStyle:"italic",color:"black"},note:{position:"absolute",bottom:"7%",right:0,padding:"0 1.5rem",width:"100%",maxWidth:380,borderRadius:5,backgroundColor:"rgba(255, 255, 255, 0.7)",color:"black","@media (max-width: 850px)":{position:"relative",marginTop:"3em",padding:0,maxWidth:"100%",backgroundColor:"transparent"}},noteTitle:{marginBottom:0,fontSize:"1.1em",fontWeight:"bold"},noteTitleEn:{letterSpacing:"0.05em",fontFamily:"Georgia",fontSize:"0.85em",fontStyle:"italic"},noteText:{marginTop:"0.3em",fontSize:"0.85em",color:"black"},em:{fontStyle:"italic",fontFamily:"Georgia"},strong:{textDecoration:"underline",fontStyle:"italic",fontWeight:400},beta:{fontWeight:600,fontSize:"1.3em",fontFamily:"Georgia",fontStyle:"italic"}},f=function(t){t.description;return Object(i.b)("div",{css:Object(n.a)([m.container],"")},Object(i.b)("div",{css:Object(n.a)([m.wrapper],"")},Object(i.b)("div",{css:Object(n.a)([m.game],"")},Object(i.b)(g,null)),Object(i.b)("div",{css:Object(n.a)([m.heading],"")},Object(i.b)("h1",{css:Object(n.a)([m.headingText],"")},Object(i.b)("span",{css:Object(n.a)([m.headingText1],"")},"How to Make"),Object(i.b)("span",{css:Object(n.a)([m.headingLine],"")}),Object(i.b)("span",{css:Object(n.a)([m.headingText2],"")},"Snake Game")),Object(i.b)("p",{css:Object(n.a)([m.beta],"")},"v0.0.1-beta.1")),Object(i.b)("div",{css:Object(n.a)([m.note],"")},Object(i.b)("p",{css:Object(n.a)([m.noteTitle],"")},"뱀 게임 만드는 법"),Object(i.b)("p",{css:Object(n.a)([m.noteText],"")},"시작하는 프로그래머를 위한 인터랙티브 튜토리얼."," ",Object(i.b)("span",{css:Object(n.a)([m.em],"")},"JavaScript"),"를 배웠고"," ",Object(i.b)("span",{css:Object(n.a)([m.em],"")},"React"),"의"," ",Object(i.b)("span",{css:Object(n.a)([m.em],"")},"setState"),"도 알지만"," ",Object(i.b)("strong",{css:Object(n.a)([m.strong],"")},"프로그램을 짜는 법"),"을 배우진 못했다고 느끼나요? 고전 게임을 만들면서 프로그램을 조감하는 기분을 만끽해보세요."))))},h=(a(180),function(t){var e=t.children;return Object(i.b)(d.StaticQuery,{query:"2328579951",render:function(t){return Object(i.b)(c.a.Fragment,null,Object(i.b)("div",{css:Object(n.a)([j.header],"")},Object(i.b)(f,{description:t.site.siteMetadata.description})),Object(i.b)("div",{css:Object(n.a)([j.container],"")},e,Object(i.b)("footer",{css:Object(n.a)([j.footer],"")},Object(i.b)("span",{css:Object(n.a)([j.copyright],"")},"© ",(new Date).getFullYear())," ",Object(i.b)("span",{css:Object(n.a)([j.title],"")},t.site.siteMetadata.title)," ","by"," ",Object(i.b)("a",{css:Object(n.a)([j.link],""),href:"https://dhk.party"},"Donghee Kim"))))},data:o})});h.propTypes={children:s.a.node.isRequired};var j={container:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0},header:{marginBottom:"5em"},footer:{textAlign:"center",fontSize:"0.9em"},copyright:{},title:{padding:"0 0.2em",fontFamily:"Georgia",fontWeight:"bold",fontStyle:"italic",fontSize:"1.1em"},link:{marginLeft:"0.2em",borderBottom:"2px solid black",textDecoration:"none",fontWeight:900,fontSize:"1.1em",color:"black",":hover":{color:"#087f5b",borderColor:"#5c940d"}}};e.a=h},177:function(t){t.exports={data:{site:{siteMetadata:{title:"How to Make Snake Game",description:'시작하는 프로그래머를 위한 인터랙티브 튜토리얼. JavaScript를 배웠고 React의 setState도 알지만 "프로그램을 짜는 법"을 배우진 못했다고 느끼나요? 고전 게임을 만들면서 프로그램을 조감하는 기분을 만끽해보세요.'}}}}},178:function(t,e,a){"use strict";a.r(e);a(58);var n=a(0),i=a.n(n),o=a(4),r=a.n(o),c=a(74),b=a(2),s=function(t){var e=t.location,a=b.default.getResourcesForPathnameSync(e.pathname);return i.a.createElement(c.a,Object.assign({location:e,pageResources:a},a.json))};s.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},e.default=s},180:function(t,e,a){},181:function(t){t.exports={data:{site:{siteMetadata:{title:"How to Make Snake Game",description:'시작하는 프로그래머를 위한 인터랙티브 튜토리얼. JavaScript를 배웠고 React의 setState도 알지만 "프로그램을 짜는 법"을 배우진 못했다고 느끼나요? 고전 게임을 만들면서 프로그램을 조감하는 기분을 만끽해보세요.',author:"@kimdhoe"}}}}}}]);
//# sourceMappingURL=1-c60b149c2bc82f942064.js.map