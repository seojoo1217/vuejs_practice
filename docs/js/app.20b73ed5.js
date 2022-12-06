(function(){"use strict";var t={1887:function(t,e,n){var i=n(9963),a=n(6252);function o(t,e,n,i,o,s){const r=(0,a.up)("DefaultContainer");return(0,a.wg)(),(0,a.j4)(r,{msg:"Welcome to Your Vue.js App"})}var s=n(3577);const r=t=>((0,a.dD)("data-v-3df555b8"),t=t(),(0,a.Cn)(),t),c={class:"container"},l={class:"header"},d=r((()=>(0,a._)("div",{class:"menu"},null,-1))),u={class:"second-container"},p={class:"sidebar"},v={class:"view"},m={class:"header"},h={class:"container"};function f(t,e,n,i,o,r){const f=(0,a.up)("router-link"),_=(0,a.up)("BodyPage");return(0,a.wg)(),(0,a.iD)("div",c,[(0,a._)("div",l,[(0,a.Wm)(f,{to:"/main"},{default:(0,a.w5)((()=>[(0,a.Uk)("Vue.js 학습")])),_:1}),d]),(0,a._)("div",u,[(0,a._)("div",p,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.indexArray,((e,n)=>((0,a.wg)(),(0,a.iD)("div",{key:n},[(0,a.Wm)(f,{to:e.path},{default:(0,a.w5)((()=>[(0,a._)("div",{class:(0,s.C_)(["side-item",{active:e.path===t.$route.path}])},(0,s.zw)(e.title),3)])),_:2},1032,["to"])])))),128))]),(0,a._)("div",v,[(0,a._)("div",m,(0,s.zw)(o.indexArray.find((e=>e.path===t.$route.path))?.title),1),(0,a._)("div",h,[(0,a.Wm)(_)])])])])}function _(t,e,n,i,o,s){const r=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(r)}var g={name:"BodyPage",data(){}},k=n(3744);const w=(0,k.Z)(g,[["render",_],["__scopeId","data-v-46588352"]]);var b=w,y={components:{BodyPage:b},name:"DefaultContainer",props:{msg:String},data(){return{indexArray:[{path:"/vuejs_practice/",title:"TODOLIST"},{path:"/vuejs_practice/watch",title:"Computed/Watch"},{path:"/vuejs_practice/components",title:"Vue Components"},{path:"/vuejs_practice/routes",title:"Vue Routes"},{path:"/vuejs_practice/template",title:"Vue Template"},{path:"/vuejs_practice/loader",title:"Vue Loader"},{path:"/vuejs_practice/cli",title:"Vue CLI"},{path:"/vuejs_practice/file",title:"Single File Component"}]}}};const O=(0,k.Z)(y,[["render",f],["__scopeId","data-v-3df555b8"]]);var D=O,I={name:"App",components:{DefaultContainer:D}};const L=(0,k.Z)(I,[["render",o]]);var C=L;const x=t=>((0,a.dD)("data-v-18c9bf08"),t=t(),(0,a.Cn)(),t),P={class:"container"},j={class:"todo-container"},S=x((()=>(0,a._)("div",{class:"header"},"TODO LIST",-1))),T={class:"list-container"},B={class:"list-item"},z=["onClick"],A=["value","onChange"],V=["checked","onChange"],H={key:0,class:"nodata"},N={class:"footer"};function F(t,e,n,o,s,r){return(0,a.wg)(),(0,a.iD)("div",P,[(0,a._)("div",j,[S,(0,a._)("div",T,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.list,((t,e)=>((0,a.wg)(),(0,a.iD)("div",{key:e},[(0,a._)("div",B,[(0,a._)("span",{class:"cancel",onClick:t=>r.delItem(e)},"X",8,z),(0,a._)("input",{type:"text",value:t.title,onChange:t=>r.updateItem({index:e,key:"title",value:t.target.value})},null,40,A),(0,a._)("input",{type:"checkbox",checked:t.checked,onChange:t=>r.updateItem({index:e,key:"checked",value:t.target.checked})},null,40,V)])])))),128)),0===s.itemArr.length?((0,a.wg)(),(0,a.iD)("div",H,"데이터가 없습니다.")):(0,a.kq)("",!0)]),(0,a._)("div",N,[(0,a.wy)((0,a._)("input",{type:"text",placeholder:"입력하세요.","onUpdate:modelValue":e[0]||(e[0]=t=>s.newtodo=t),onKeyup:e[1]||(e[1]=(0,i.D2)(((...t)=>r.addItem&&r.addItem(...t)),["enter"]))},null,544),[[i.nr,s.newtodo]]),(0,a._)("button",{onClick:e[2]||(e[2]=(...t)=>r.addItem&&r.addItem(...t))},"Add")])])])}var R=n(3907);function W(){const t=(0,R.oR)(),e=(0,a.Fl)((()=>t.state.TODO.list));return{list:e}}var Z={name:"RoutesPage",props:{msg:String},setup(){return{...W()}},data(){return{itemArr:[{title:"test"}],newtodo:"",currentClick:""}},methods:{addItem(){if(0===this.newtodo.length)return alert("작성된 문구가 없습니다."),!1;this.$store.commit("TODO/addItem",this.newtodo),this.newtodo=""},delItem(t){this.$store.commit("TODO/removeItem",t)},updateItem(t){console.log("param",t),this.$store.commit("TODO/updateItem",t)}}};const $=(0,k.Z)(Z,[["render",F],["__scopeId","data-v-18c9bf08"]]);var K=$;const Y=t=>((0,a.dD)("data-v-8b338d64"),t=t(),(0,a.Cn)(),t),G={class:"container"},U=Y((()=>(0,a._)("div",null,null,-1))),E=[U];function q(t,e,n,i,o,s){return(0,a.wg)(),(0,a.iD)("div",G,E)}var M={name:"RoutesPage",props:{msg:String}};const X=(0,k.Z)(M,[["render",q],["__scopeId","data-v-8b338d64"]]);var J=X;const Q=t=>((0,a.dD)("data-v-02005735"),t=t(),(0,a.Cn)(),t),tt={class:"container"},et={class:"body"},nt={class:"box shopping"},it=Q((()=>(0,a._)("div",{class:"box-header"},"Shopping Component",-1))),at={class:"box-body"},ot={class:"list-item"},st=["id","value"],rt={class:"footer"},ct={class:"box"},lt=Q((()=>(0,a._)("div",{class:"box-header"},"Basket Component",-1))),dt={class:"box-body"},ut={class:"list-item"},pt={class:"footer"},vt=Q((()=>(0,a._)("button",null,"Payment",-1))),mt=Q((()=>(0,a._)("div",{class:"box"},[(0,a._)("div",{class:"box-header"},"Payment Component")],-1)));function ht(t,e,n,o,r,c){return(0,a.wg)(),(0,a.iD)("div",tt,[(0,a._)("div",et,[(0,a._)("div",nt,[it,(0,a._)("div",at,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.list,((t,n)=>((0,a.wg)(),(0,a.iD)("div",{key:n},[(0,a._)("div",ot,[(0,a._)("div",null,(0,s.zw)(n+1),1),(0,a._)("div",null,(0,s.zw)(t.title),1),(0,a._)("div",null,(0,s.zw)(Number(t.price).toLocaleString())+"원",1),(0,a._)("div",null,[(0,a.wy)(((0,a.wg)(),(0,a.iD)("input",{type:"checkbox",id:t,value:t,key:n,"onUpdate:modelValue":e[0]||(e[0]=t=>r.selectList=t)},null,8,st)),[[i.e8,r.selectList]])])])])))),128))]),(0,a._)("div",rt,[(0,a._)("button",{onClick:e[1]||(e[1]=(...t)=>c.addBasket&&c.addBasket(...t))},"Add Basket")])]),(0,a._)("div",ct,[lt,(0,a._)("div",dt,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.basketList,((t,e)=>((0,a.wg)(),(0,a.iD)("div",{key:e},[(0,a._)("div",ut,[(0,a._)("div",null,(0,s.zw)(e+1),1),(0,a._)("div",null,(0,s.zw)(t.title),1),(0,a._)("div",null,(0,s.zw)(Number(t.price).toLocaleString()),1)])])))),128))]),(0,a._)("div",pt,[vt,(0,a.Uk)(" 수량 "+(0,s.zw)(t.basketList.length)+" ",1),(0,a._)("div",null,"값 : "+(0,s.zw)(Number(c.totalSum).toLocaleString()),1)])]),mt])])}function ft(){const t=(0,R.oR)(),e=(0,a.Fl)((()=>t.state.SHOPPING.productList));return{list:e}}function _t(){const t=(0,R.oR)(),e=(0,a.Fl)((()=>t.state.SHOPPING.basketList));return{basketList:e}}var gt={name:"WatchPage",data(){return{selectList:[]}},setup(){return{...ft(),..._t()}},methods:{addBasket(){if(0===this.selectList.length)return alert("체크된 항목이 없습니다."),!1;this.$store.commit("SHOPPING/addBasket",this.selectList),this.newtodo=""}},computed:{totalSum(){return this.basketList.map((({price:t})=>t)).reduce(((t,e)=>t+e),0)},allSelected:{get:function(){return this.checkList.length===this.selectList.length},set:function(t){this.selectList=t?this.checkList:[]}}}};const kt=(0,k.Z)(gt,[["render",ht],["__scopeId","data-v-02005735"]]);var wt=kt,bt=n(2119);const yt=[{path:"/vuejs_practice",component:b,children:[{path:"",name:"todoPage",component:K},{path:"routes",name:"routesPage",component:J},{path:"watch",name:"watchPage",component:wt}]}],Ot=(0,bt.p7)({history:(0,bt.PO)(),routes:yt});var Dt=Ot;n(7658);const It={list:[]},Lt={todoList:t=>t.list},Ct={addList({commit:t},e){t("TODO",e)}},xt={addItem(t,e){t.list.push({title:e,checked:!1})},removeItem(t,e){let n=t.list.filter(((t,n)=>n!==e));t.list=n},updateItem(t,e){let n=t.list.findIndex(((t,n)=>n===e.index));t.list[n][e.key]=e.value}};var Pt={namespaced:!0,state:It,getters:Lt,actions:Ct,mutations:xt};const jt={productList:[{key:"A",cnt:0,title:"자켓",price:1400},{key:"B",cnt:0,title:"바지",price:3200},{key:"C",cnt:0,title:"옷",price:1500},{key:"D",cnt:0,title:"스웨터",price:2e3},{key:"E",cnt:0,title:"니트",price:2e3},{key:"F",cnt:0,title:"목폴라",price:2e3}],basketList:[]},St={productList:t=>t.productList},Tt={addList({commit:t},e){t("TODO",e)}},Bt={addBasket(t,e){t.basketList=e},removeItem(t,e){let n=t.list.filter(((t,n)=>n!==e));t.list=n},updateItem(t,e){let n=t.list.findIndex(((t,n)=>n===e.index));t.list[n][e.key]=e.value}};var zt={namespaced:!0,state:jt,getters:St,actions:Tt,mutations:Bt},At=(0,R.MT)({modules:{TODO:Pt,SHOPPING:zt}});(0,i.ri)(C).use(Dt).use(At).mount("#app")}},e={};function n(i){var a=e[i];if(void 0!==a)return a.exports;var o=e[i]={exports:{}};return t[i](o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,i,a,o){if(!i){var s=1/0;for(d=0;d<t.length;d++){i=t[d][0],a=t[d][1],o=t[d][2];for(var r=!0,c=0;c<i.length;c++)(!1&o||s>=o)&&Object.keys(n.O).every((function(t){return n.O[t](i[c])}))?i.splice(c--,1):(r=!1,o<s&&(s=o));if(r){t.splice(d--,1);var l=a();void 0!==l&&(e=l)}}return e}o=o||0;for(var d=t.length;d>0&&t[d-1][2]>o;d--)t[d]=t[d-1];t[d]=[i,a,o]}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,i){var a,o,s=i[0],r=i[1],c=i[2],l=0;if(s.some((function(e){return 0!==t[e]}))){for(a in r)n.o(r,a)&&(n.m[a]=r[a]);if(c)var d=c(n)}for(e&&e(i);l<s.length;l++)o=s[l],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(d)},i=self["webpackChunkvue_project"]=self["webpackChunkvue_project"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(1887)}));i=n.O(i)})();
//# sourceMappingURL=app.20b73ed5.js.map