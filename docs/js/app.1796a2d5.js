(function(){"use strict";var t={4976:function(t,e,n){var o=n(9963),a=n(6252);function r(t,e,n,o,r,i){const c=(0,a.up)("DefaultContainer");return(0,a.wg)(),(0,a.j4)(c,{msg:"Welcome to Your Vue.js App"})}var i=n(3577);const c=t=>((0,a.dD)("data-v-3df555b8"),t=t(),(0,a.Cn)(),t),s={class:"container"},d={class:"header"},u=c((()=>(0,a._)("div",{class:"menu"},null,-1))),l={class:"second-container"},p={class:"sidebar"},v={class:"view"},m={class:"header"},h={class:"container"};function f(t,e,n,o,r,c){const f=(0,a.up)("router-link"),_=(0,a.up)("BodyPage");return(0,a.wg)(),(0,a.iD)("div",s,[(0,a._)("div",d,[(0,a.Wm)(f,{to:"/main"},{default:(0,a.w5)((()=>[(0,a.Uk)("Vue.js 학습")])),_:1}),u]),(0,a._)("div",l,[(0,a._)("div",p,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.indexArray,((e,n)=>((0,a.wg)(),(0,a.iD)("div",{key:n},[(0,a.Wm)(f,{to:e.path},{default:(0,a.w5)((()=>[(0,a._)("div",{class:(0,i.C_)(["side-item",{active:e.path===t.$route.path}])},(0,i.zw)(e.title),3)])),_:2},1032,["to"])])))),128))]),(0,a._)("div",v,[(0,a._)("div",m,(0,i.zw)(r.indexArray.find((e=>e.path===t.$route.path))?.title),1),(0,a._)("div",h,[(0,a.Wm)(_)])])])])}function _(t,e,n,o,r,i){const c=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(c)}var g={name:"BodyPage",data(){}},w=n(3744);const k=(0,w.Z)(g,[["render",_],["__scopeId","data-v-46588352"]]);var b=k,O={components:{BodyPage:b},name:"DefaultContainer",props:{msg:String},data(){return{indexArray:[{path:"/vuejs_practice/",title:"TODOLIST"},{path:"/vuejs_practice/watch",title:"Computed/Watch"},{path:"/vuejs_practice/components",title:"Vue Components"},{path:"/vuejs_practice/routes",title:"Vue Routes"},{path:"/vuejs_practice/template",title:"Vue Template"},{path:"/vuejs_practice/loader",title:"Vue Loader"},{path:"/vuejs_practice/cli",title:"Vue CLI"},{path:"/vuejs_practice/file",title:"Single File Component"}]}}};const y=(0,w.Z)(O,[["render",f],["__scopeId","data-v-3df555b8"]]);var D=y,I={name:"App",components:{DefaultContainer:D}};const C=(0,w.Z)(I,[["render",r]]);var j=C;const x=t=>((0,a.dD)("data-v-18c9bf08"),t=t(),(0,a.Cn)(),t),T={class:"container"},P={class:"todo-container"},V=x((()=>(0,a._)("div",{class:"header"},"TODO LIST",-1))),U={class:"list-container"},A={class:"list-item"},S=["onClick"],L=["value","onChange"],W=["checked","onChange"],Z={key:0,class:"nodata"},B={class:"footer"};function E(t,e,n,r,i,c){return(0,a.wg)(),(0,a.iD)("div",T,[(0,a._)("div",P,[V,(0,a._)("div",U,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.list,((t,e)=>((0,a.wg)(),(0,a.iD)("div",{key:e},[(0,a._)("div",A,[(0,a._)("span",{class:"cancel",onClick:t=>c.delItem(e)},"X",8,S),(0,a._)("input",{type:"text",value:t.title,onChange:t=>c.updateItem({index:e,key:"title",value:t.target.value})},null,40,L),(0,a._)("input",{type:"checkbox",checked:t.checked,onChange:t=>c.updateItem({index:e,key:"checked",value:t.target.checked})},null,40,W)])])))),128)),0===i.itemArr.length?((0,a.wg)(),(0,a.iD)("div",Z,"데이터가 없습니다.")):(0,a.kq)("",!0)]),(0,a._)("div",B,[(0,a.wy)((0,a._)("input",{type:"text",placeholder:"입력하세요.","onUpdate:modelValue":e[0]||(e[0]=t=>i.newtodo=t),onKeyup:e[1]||(e[1]=(0,o.D2)(((...t)=>c.addItem&&c.addItem(...t)),["enter"]))},null,544),[[o.nr,i.newtodo]]),(0,a._)("button",{onClick:e[2]||(e[2]=(...t)=>c.addItem&&c.addItem(...t))},"Add")])])])}var $=n(3907);function R(){const t=(0,$.oR)(),e=(0,a.Fl)((()=>t.state.TODO.list));return{list:e}}var Y={name:"RoutesPage",props:{msg:String},setup(){return{...R()}},data(){return{itemArr:[{title:"test"}],newtodo:"",currentClick:""}},methods:{addItem(){if(0===this.newtodo.length)return alert("작성된 문구가 없습니다."),!1;this.$store.commit("TODO/addItem",this.newtodo),this.newtodo=""},delItem(t){this.$store.commit("TODO/removeItem",t)},updateItem(t){console.log("param",t),this.$store.commit("TODO/updateItem",t)}}};const F=(0,w.Z)(Y,[["render",E],["__scopeId","data-v-18c9bf08"]]);var K=F;const M=t=>((0,a.dD)("data-v-8b338d64"),t=t(),(0,a.Cn)(),t),z={class:"container"},H=M((()=>(0,a._)("div",null,null,-1))),q=[H];function J(t,e,n,o,r,i){return(0,a.wg)(),(0,a.iD)("div",z,q)}var N={name:"RoutesPage",props:{msg:String}};const X=(0,w.Z)(N,[["render",J],["__scopeId","data-v-8b338d64"]]);var G=X;const Q=t=>((0,a.dD)("data-v-488f7abc"),t=t(),(0,a.Cn)(),t),tt={class:"container"},et=Q((()=>(0,a._)("div",{class:"info"},[(0,a.Uk)(" computed/watch 두 방법의 접근방식은 서로 "),(0,a._)("b",null,"동일"),(0,a.Uk)("하다 "),(0,a._)("br"),(0,a.Uk)(" computed = 의존하는 값이 변하는 경우 계속 실행 함수가 실행된다 "),(0,a._)("br"),(0,a._)("hr"),(0,a.Uk)(" method = 값이 렌더링 된 값으로 유지 하고 싶으면 method "),(0,a._)("br"),(0,a.Uk)(" computed = 계속 캐싱하여 값을 바꿔 보여주고 싶을땐 computed ")],-1))),nt=[et];function ot(t,e,n,o,r,i){return(0,a.wg)(),(0,a.iD)("div",tt,nt)}var at={name:"WatchPage",data(){return{author:{name:"John",books:["VUE-1","VUE-2","VUE-3"]}}},methods:{publishedBooksMethod(){return"method"}},computed:{publishedBooksMessage(){return this.author.books.length>0?"YES":"NO"}}};const rt=(0,w.Z)(at,[["render",ot],["__scopeId","data-v-488f7abc"]]);var it=rt,ct=n(2119);const st=[{path:"/vuejs_practice",component:b,children:[{path:"",name:"todoPage",component:K},{path:"routes",name:"routesPage",component:G},{path:"watch",name:"watchPage",component:it}]}],dt=(0,ct.p7)({history:(0,ct.PO)(),routes:st});var ut=dt;n(7658);const lt={list:[]},pt={todoList:t=>t.list},vt={addList({commit:t},e){t("TODO",e)}},mt={addItem(t,e){t.list.push({title:e,checked:!1})},removeItem(t,e){let n=t.list.filter(((t,n)=>n!==e));t.list=n},updateItem(t,e){let n=t.list.findIndex(((t,n)=>n===e.index));t.list[n][e.key]=e.value}};var ht={namespaced:!0,state:lt,getters:pt,actions:vt,mutations:mt},ft=(0,$.MT)({modules:{TODO:ht}});(0,o.ri)(j).use(ut).use(ft).mount("#app")}},e={};function n(o){var a=e[o];if(void 0!==a)return a.exports;var r=e[o]={exports:{}};return t[o](r,r.exports,n),r.exports}n.m=t,function(){var t=[];n.O=function(e,o,a,r){if(!o){var i=1/0;for(u=0;u<t.length;u++){o=t[u][0],a=t[u][1],r=t[u][2];for(var c=!0,s=0;s<o.length;s++)(!1&r||i>=r)&&Object.keys(n.O).every((function(t){return n.O[t](o[s])}))?o.splice(s--,1):(c=!1,r<i&&(i=r));if(c){t.splice(u--,1);var d=a();void 0!==d&&(e=d)}}return e}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[o,a,r]}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var a,r,i=o[0],c=o[1],s=o[2],d=0;if(i.some((function(e){return 0!==t[e]}))){for(a in c)n.o(c,a)&&(n.m[a]=c[a]);if(s)var u=s(n)}for(e&&e(o);d<i.length;d++)r=i[d],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(u)},o=self["webpackChunkvue_project"]=self["webpackChunkvue_project"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(4976)}));o=n.O(o)})();
//# sourceMappingURL=app.1796a2d5.js.map