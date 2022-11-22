(function(){"use strict";var t={4341:function(t,e,n){var r=n(9963),o=n(6252);function i(t,e,n,r,i,a){const c=(0,o.up)("DefaultContainer");return(0,o.wg)(),(0,o.j4)(c,{msg:"Welcome to Your Vue.js App"})}var a=n(3577);const c=t=>((0,o.dD)("data-v-0a98ac16"),t=t(),(0,o.Cn)(),t),s={class:"container"},u={class:"header"},l=c((()=>(0,o._)("div",{class:"menu"},null,-1))),d={class:"second-container"},p={class:"sidebar"},v={class:"view"},f={class:"header"};function h(t,e,n,r,i,c){const h=(0,o.up)("router-link"),m=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("div",s,[(0,o._)("div",u,[(0,o.Wm)(h,{to:"/main"},{default:(0,o.w5)((()=>[(0,o.Uk)("Vue.js 학습")])),_:1}),l]),(0,o._)("div",d,[(0,o._)("div",p,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.indexArray,((e,n)=>((0,o.wg)(),(0,o.iD)("div",{key:n},[(0,o.Wm)(h,{to:e.path},{default:(0,o.w5)((()=>[(0,o._)("div",{class:(0,a.C_)(["side-item",{active:e.path===t.$route.path}])},(0,a.zw)(e.title),3)])),_:2},1032,["to"])])))),128))]),(0,o._)("div",v,[(0,o._)("div",f,(0,a.zw)(i.indexArray.find((e=>e.path===t.$route.path))?.title),1),(0,o.Wm)(m)])])])}var m={name:"DefaultContainer",props:{msg:String},data(){return{indexArray:[{path:"/vuejs_practice/",title:"TODOLIST"},{path:"/vuejs_practice/instance",title:"Vue Instance"},{path:"/vuejs_practice/components",title:"Vue Components"},{path:"/vuejs_practice/routes",title:"Vue Routes"},{path:"/vuejs_practice/template",title:"Vue Template"},{path:"/vuejs_practice/loader",title:"Vue Loader"},{path:"/vuejs_practice/cli",title:"Vue CLI"},{path:"/vuejs_practice/file",title:"Single File Component"}]}}},_=n(3744);const w=(0,_.Z)(m,[["render",h],["__scopeId","data-v-0a98ac16"]]);var g=w,j={name:"App",components:{DefaultContainer:g}};const b=(0,_.Z)(j,[["render",i]]);var y=b;const O={class:"container"},D={class:"todo-container"},C={class:"list-container"},k={class:"list-item"},A={class:"footer"};function I(t,e,n,i,c,s){return(0,o.wg)(),(0,o.iD)("div",O,[(0,o._)("div",D,[(0,o._)("div",C,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(c.itemArr,((t,e)=>((0,o.wg)(),(0,o.iD)("div",{key:e},[(0,o._)("div",k,(0,a.zw)(t.title),1)])))),128))]),(0,o._)("div",A,[(0,o.wy)((0,o._)("input",{type:"text",placeholder:"입력하세요.","onUpdate:modelValue":e[0]||(e[0]=t=>c.newtodo=t)},null,512),[[r.nr,c.newtodo]]),(0,o._)("button",{onClick:e[1]||(e[1]=(...t)=>s.addItem&&s.addItem(...t))},"Add")])])])}n(7658);var V={name:"RoutesPage",props:{msg:String},data(){return{itemArr:[],newtodo:""}},methods:{addItem(){this.itemArr.push({title:this.newtodo}),this.newtodo=""}}};const x=(0,_.Z)(V,[["render",I],["__scopeId","data-v-54bcd1b8"]]);var P=x;const S=t=>((0,o.dD)("data-v-8b338d64"),t=t(),(0,o.Cn)(),t),T={class:"container"},W=S((()=>(0,o._)("div",null,null,-1))),Z=[W];function z(t,e,n,r,i,a){return(0,o.wg)(),(0,o.iD)("div",T,Z)}var L={name:"RoutesPage",props:{msg:String}};const R=(0,_.Z)(L,[["render",z],["__scopeId","data-v-8b338d64"]]);var Y=R,F=n(2119);const H=[{path:"/vuejs_practice",component:P,children:[{path:"routes",name:"routesPage",component:Y}]}],K=(0,F.p7)({history:(0,F.PO)(),routes:H});var U=K;(0,r.ri)(y).use(U).mount("#app")}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,i){if(!r){var a=1/0;for(l=0;l<t.length;l++){r=t[l][0],o=t[l][1],i=t[l][2];for(var c=!0,s=0;s<r.length;s++)(!1&i||a>=i)&&Object.keys(n.O).every((function(t){return n.O[t](r[s])}))?r.splice(s--,1):(c=!1,i<a&&(a=i));if(c){t.splice(l--,1);var u=o();void 0!==u&&(e=u)}}return e}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[r,o,i]}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,i,a=r[0],c=r[1],s=r[2],u=0;if(a.some((function(e){return 0!==t[e]}))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(s)var l=s(n)}for(e&&e(r);u<a.length;u++)i=a[u],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(l)},r=self["webpackChunkvue_project"]=self["webpackChunkvue_project"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(4341)}));r=n.O(r)})();
//# sourceMappingURL=app.11ab4a6c.js.map