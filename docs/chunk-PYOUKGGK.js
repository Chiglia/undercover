import{a as ee}from"./chunk-TJNPB6EV.js";import{$ as q,A as n,Cb as ne,E as C,F as D,Fb as ie,Ga as U,Gb as ae,H as N,I as j,Ib as _,J as x,Ja as W,K as z,L as T,La as X,M as k,Na as Y,O as V,Oa as Z,Ob as oe,P as Q,Q as s,R as o,S as r,T as m,Tb as re,V as $,W as G,Wb as le,Xb as pe,Y as O,Z as R,_ as d,aa as H,ba as J,da as S,ea as E,i as M,j as B,ja as c,k as A,ka as p,l as g,la as v,m as F,ma as u,n as P,na as K,ra as L,v as I,wa as f,xa as y,yb as te,zb as w}from"./chunk-5I5SZDLV.js";var se=`
    .p-tag {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: dt('tag.primary.background');
        color: dt('tag.primary.color');
        font-size: dt('tag.font.size');
        font-weight: dt('tag.font.weight');
        padding: dt('tag.padding');
        border-radius: dt('tag.border.radius');
        gap: dt('tag.gap');
    }

    .p-tag-icon {
        font-size: dt('tag.icon.size');
        width: dt('tag.icon.size');
        height: dt('tag.icon.size');
    }

    .p-tag-rounded {
        border-radius: dt('tag.rounded.border.radius');
    }

    .p-tag-success {
        background: dt('tag.success.background');
        color: dt('tag.success.color');
    }

    .p-tag-info {
        background: dt('tag.info.background');
        color: dt('tag.info.color');
    }

    .p-tag-warn {
        background: dt('tag.warn.background');
        color: dt('tag.warn.color');
    }

    .p-tag-danger {
        background: dt('tag.danger.background');
        color: dt('tag.danger.color');
    }

    .p-tag-secondary {
        background: dt('tag.secondary.background');
        color: dt('tag.secondary.color');
    }

    .p-tag-contrast {
        background: dt('tag.contrast.background');
        color: dt('tag.contrast.color');
    }
`;var fe=["icon"],ye=["*"];function xe(e,a){if(e&1&&m(0,"span",4),e&2){let t=d(2);c(t.cx("icon")),s("ngClass",t.icon)("pBind",t.ptm("icon"))}}function ve(e,a){if(e&1&&($(0),x(1,xe,1,4,"span",3),G()),e&2){let t=d();n(),s("ngIf",t.icon)}}function _e(e,a){}function be(e,a){e&1&&x(0,_e,0,0,"ng-template")}function he(e,a){if(e&1&&(o(0,"span",2),x(1,be,1,0,null,5),r()),e&2){let t=d();c(t.cx("icon")),s("pBind",t.ptm("icon")),n(),s("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)}}var Ce={root:({instance:e})=>["p-tag p-component",{"p-tag-info":e.severity==="info","p-tag-success":e.severity==="success","p-tag-warn":e.severity==="warn","p-tag-danger":e.severity==="danger","p-tag-secondary":e.severity==="secondary","p-tag-contrast":e.severity==="contrast","p-tag-rounded":e.rounded}],icon:"p-tag-icon",label:"p-tag-label"},ce=(()=>{class e extends ne{name="tag";style=se;classes=Ce;static \u0275fac=(()=>{let t;return function(i){return(t||(t=I(e)))(i||e)}})();static \u0275prov=M({token:e,factory:e.\u0275fac})}return e})();var de=new A("TAG_INSTANCE"),Te=(()=>{class e extends ae{componentName="Tag";$pcTag=g(de,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(_,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass;severity;value;icon;rounded;iconTemplate;templates;_iconTemplate;_componentStyle=g(ce);onAfterContentInit(){this.templates?.forEach(t=>{t.getType()==="icon"&&(this._iconTemplate=t.template)})}get dataP(){return this.cn({rounded:this.rounded,[this.severity]:this.severity})}static \u0275fac=(()=>{let t;return function(i){return(t||(t=I(e)))(i||e)}})();static \u0275cmp=C({type:e,selectors:[["p-tag"]],contentQueries:function(l,i,b){if(l&1&&J(b,fe,4)(b,te,4),l&2){let h;S(h=E())&&(i.iconTemplate=h.first),S(h=E())&&(i.templates=h)}},hostVars:3,hostBindings:function(l,i){l&2&&(z("data-p",i.dataP),c(i.cn(i.cx("root"),i.styleClass)))},inputs:{styleClass:"styleClass",severity:"severity",value:"value",icon:"icon",rounded:[2,"rounded","rounded",U]},features:[L([ce,{provide:de,useExisting:e},{provide:ie,useExisting:e}]),N([_]),j],ngContentSelectors:ye,decls:5,vars:6,consts:[[4,"ngIf"],[3,"class","pBind",4,"ngIf"],[3,"pBind"],[3,"class","ngClass","pBind",4,"ngIf"],[3,"ngClass","pBind"],[4,"ngTemplateOutlet"]],template:function(l,i){l&1&&(q(),H(0),x(1,ve,2,1,"ng-container",0)(2,he,2,4,"span",1),o(3,"span",2),p(4),r()),l&2&&(n(),s("ngIf",!i.iconTemplate&&!i._iconTemplate),n(),s("ngIf",i.iconTemplate||i._iconTemplate),n(),c(i.cx("label")),s("pBind",i.ptm("label")),n(),v(i.value))},dependencies:[Z,W,X,Y,w,_],encapsulation:2,changeDetection:0})}return e})(),me=(()=>{class e{static \u0275fac=function(l){return new(l||e)};static \u0275mod=D({type:e});static \u0275inj=B({imports:[Te,w,w]})}return e})();var ke=(e,a)=>a.id;function we(e,a){e&1&&m(0,"div",11)}function Ie(e,a){if(e&1&&(o(0,"div",17)(1,"span",22),p(2),f(3,"transloco"),r(),o(4,"span",23),p(5),f(6,"transloco"),r()()),e&2){let t=d().$implicit;n(2),v(y(3,3,"play.compromesso")),n(3),K("",y(6,5,"play.role")," ",t.role)}}function Se(e,a){e&1&&(o(0,"span",18),p(1),f(2,"transloco"),r()),e&2&&(n(),v(y(2,1,"play.soggettoInAnalisi")))}function Ee(e,a){if(e&1){let t=O();o(0,"p-button",24),R("onClick",function(){F(t);let i=d().$implicit,b=d();return P(b.store.eliminatePlayer(i.id))}),r()}e&2&&s("text",!0)}function Me(e,a){e&1&&m(0,"i",20)}function Be(e,a){if(e&1&&(o(0,"div",10),T(1,we,1,0,"div",11),o(2,"div",12)(3,"div",13)(4,"div",14),m(5,"span",15),o(6,"span",16),p(7),r()(),T(8,Ie,7,7,"div",17)(9,Se,3,3,"span",18),r(),T(10,Ee,1,1,"p-button",19)(11,Me,1,0,"i",20),r(),m(12,"div",21),r()),e&2){let t=a.$implicit;c(t.isAlive?"bg-primary-500/5 border-primary-900/40 hover:border-primary-500/60":"bg-red-950/10 border-red-900/30 opacity-60 grayscale-[0.8]"),n(),k(t.isAlive?-1:1),n(4),c(t.isAlive?"bg-primary-500 shadow-[0_0_5px_rgba(var(--primary-rgb),0.8)]":"bg-red-600 shadow-[0_0_5px_red]"),n(),c(t.isAlive?"text-primary-300":"text-red-900 line-through"),n(),u(" ",t.name," "),n(),k(t.isAlive?9:8),n(2),k(t.isAlive?10:11),n(2),c(t.isAlive?"from-primary-500/50 to-transparent":"from-red-600/50 to-transparent")}}var ge=class e{store=g(ee);aliveCount=()=>this.store.players().filter(a=>a.isAlive).length;static \u0275fac=function(t){return new(t||e)};static \u0275cmp=C({type:e,selectors:[["app-play"]],decls:19,vars:8,consts:[[1,"h-full","w-full","flex","flex-col","p-4","relative","overflow-hidden"],[1,"w-full","max-w-md","mx-auto","mb-6","flex","justify-between","items-end","border-b","border-primary-900/50","pb-2","shrink-0"],[1,"text-xl","font-black","tracking-widest","text-primary-400","uppercase"],[1,"text-[9px]","text-primary-700","font-bold","uppercase","tracking-tighter"],[1,"text-right"],[1,"text-[10px]","text-primary-500","font-mono","tracking-widest","uppercase","mb-1"],[1,"text-2xl","font-black","text-primary-400","leading-none"],[1,"text-xs","text-primary-900"],[1,"flex-1","w-full","max-w-md","mx-auto","overflow-y-auto","scrollbar-none","flex","flex-col","gap-3","min-h-0"],[1,"relative","transition-all","duration-500","overflow-hidden","border","shrink-0","min-h-[70px]",3,"class"],[1,"relative","transition-all","duration-500","overflow-hidden","border","shrink-0","min-h-[70px]"],[1,"absolute","inset-0","bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,0,0,0.05)_10px,rgba(255,0,0,0.05)_20px)]","pointer-events-none"],[1,"p-3","h-full","flex","items-center","justify-between"],[1,"flex","flex-col"],[1,"flex","items-center","gap-2"],[1,"w-2","h-2","rounded-full","shrink-0"],[1,"font-mono","text-lg","font-bold","tracking-tighter","uppercase"],[1,"flex","items-center","gap-2","mt-1"],[1,"text-[8px]","text-primary-800","font-mono","uppercase","tracking-[0.2em]","mt-1"],["icon","pi pi-bolt","styleClass","border border-primary-900/50 hover:bg-red-500 hover:text-slate-950 hover:border-red-500 p-2 transition-all",3,"text"],[1,"pi","pi-times-circle","text-red-900","p-2","opacity-50"],[1,"h-0.5","w-full","bg-gradient-to-right","shrink-0"],[1,"text-[8px]","font-black","uppercase","bg-red-900","text-slate-950","px-1"],[1,"text-[10px]","text-red-700","font-mono","uppercase","tracking-widest"],["icon","pi pi-bolt","styleClass","border border-primary-900/50 hover:bg-red-500 hover:text-slate-950 hover:border-red-500 p-2 transition-all",3,"onClick","text"]],template:function(t,l){t&1&&(o(0,"div",0)(1,"header",1)(2,"div")(3,"h2",2),p(4),f(5,"transloco"),r(),o(6,"p",3),p(7," Scanning for anomalies... "),r()(),o(8,"div",4)(9,"div",5),p(10),f(11,"transloco"),r(),o(12,"div",6),p(13),o(14,"span",7),p(15),r()()()(),o(16,"main",8),V(17,Be,13,12,"div",9,ke),r()()),t&2&&(n(4),u(" ",y(5,4,"play.monitorSoggetti")," "),n(6),u(" ",y(11,6,"play.statusAttivi")," "),n(3),u(" ",l.aliveCount()),n(2),u("/",l.store.players().length),n(2),Q(l.store.players()))},dependencies:[re,oe,me,pe,le],encapsulation:2})};export{ge as Play};
