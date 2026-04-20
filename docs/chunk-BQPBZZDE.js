import{a as X}from"./chunk-SEFSLC6M.js";import{A as E,Aa as w,C as g,E as M,F as A,Fa as c,Ga as s,Ha as q,Ia as f,Na as H,P as T,Sb as Y,Tb as C,U as i,Wb as Z,Z as _,Zb as ee,_ as F,_a as J,_b as te,aa as P,ac as y,ba as B,bb as K,ca as u,da as D,db as L,ea as b,fa as h,fb as U,gb as W,gc as ne,ha as N,ia as j,ja as p,ka as r,la as o,lc as ie,ma as m,oa as z,pa as V,ra as Q,ta as $,ua as d,va as R,wa as G,xa as O,y as S,z as I,za as k}from"./chunk-EYQAAGNF.js";var ae=`
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
`;var ce=["icon"],de=["*"];function me(e,a){if(e&1&&m(0,"span",4),e&2){let t=d(2);c(t.cx("icon")),p("ngClass",t.icon)("pBind",t.ptm("icon"))}}function ge(e,a){if(e&1&&(z(0),u(1,me,1,4,"span",3),V()),e&2){let t=d();i(),p("ngIf",t.icon)}}function ue(e,a){}function fe(e,a){e&1&&u(0,ue,0,0,"ng-template")}function ye(e,a){if(e&1&&(r(0,"span",2),u(1,fe,1,0,null,5),o()),e&2){let t=d();c(t.cx("icon")),p("pBind",t.ptm("icon")),i(),p("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)}}var xe={root:({instance:e})=>["p-tag p-component",{"p-tag-info":e.severity==="info","p-tag-success":e.severity==="success","p-tag-warn":e.severity==="warn","p-tag-danger":e.severity==="danger","p-tag-secondary":e.severity==="secondary","p-tag-contrast":e.severity==="contrast","p-tag-rounded":e.rounded}],icon:"p-tag-icon",label:"p-tag-label"},re=(()=>{class e extends Z{name="tag";style=ae;classes=xe;static \u0275fac=(()=>{let t;return function(n){return(t||(t=T(e)))(n||e)}})();static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})();var oe=new E("TAG_INSTANCE"),ve=(()=>{class e extends te{componentName="Tag";$pcTag=g(oe,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(y,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass;severity;value;icon;rounded;iconTemplate;templates;_iconTemplate;_componentStyle=g(re);onAfterContentInit(){this.templates?.forEach(t=>{t.getType()==="icon"&&(this._iconTemplate=t.template)})}get dataP(){return this.cn({rounded:this.rounded,[this.severity]:this.severity})}static \u0275fac=(()=>{let t;return function(n){return(t||(t=T(e)))(n||e)}})();static \u0275cmp=_({type:e,selectors:[["p-tag"]],contentQueries:function(l,n,x){if(l&1&&O(x,ce,4)(x,Y,4),l&2){let v;k(v=w())&&(n.iconTemplate=v.first),k(v=w())&&(n.templates=v)}},hostVars:3,hostBindings:function(l,n){l&2&&(D("data-p",n.dataP),c(n.cn(n.cx("root"),n.styleClass)))},inputs:{styleClass:"styleClass",severity:"severity",value:"value",icon:"icon",rounded:[2,"rounded","rounded",J]},features:[H([re,{provide:oe,useExisting:e},{provide:ee,useExisting:e}]),P([y]),B],ngContentSelectors:de,decls:5,vars:6,consts:[[4,"ngIf"],[3,"class","pBind",4,"ngIf"],[3,"pBind"],[3,"class","ngClass","pBind",4,"ngIf"],[3,"ngClass","pBind"],[4,"ngTemplateOutlet"]],template:function(l,n){l&1&&(R(),G(0),u(1,ge,2,1,"ng-container",0)(2,ye,2,4,"span",1),r(3,"span",2),s(4),o()),l&2&&(i(),p("ngIf",!n.iconTemplate&&!n._iconTemplate),i(),p("ngIf",n.iconTemplate||n._iconTemplate),i(),c(n.cx("label")),p("pBind",n.ptm("label")),i(),q(n.value))},dependencies:[W,K,L,U,C,y],encapsulation:2,changeDetection:0})}return e})(),le=(()=>{class e{static \u0275fac=function(l){return new(l||e)};static \u0275mod=F({type:e});static \u0275inj=I({imports:[ve,C,C]})}return e})();var _e=(e,a)=>a.id;function be(e,a){e&1&&m(0,"div",11)}function he(e,a){if(e&1&&(r(0,"div",17)(1,"span",22),s(2,"Compromesso"),o(),r(3,"span",23),s(4),o()()),e&2){let t=d().$implicit;i(4),f("Ruolo: ",t.role)}}function Ce(e,a){e&1&&(r(0,"span",18),s(1,"Soggetto_In_Analisi"),o())}function Te(e,a){if(e&1){let t=Q();r(0,"p-button",24),$("onClick",function(){M(t);let n=d().$implicit,x=d();return A(x.store.eliminatePlayer(n.id))}),o()}e&2&&p("text",!0)}function ke(e,a){e&1&&m(0,"i",20)}function we(e,a){if(e&1&&(r(0,"div",10),b(1,be,1,0,"div",11),r(2,"div",12)(3,"div",13)(4,"div",14),m(5,"span",15),r(6,"span",16),s(7),o()(),b(8,he,5,1,"div",17)(9,Ce,2,0,"span",18),o(),b(10,Te,1,1,"p-button",19)(11,ke,1,0,"i",20),o(),m(12,"div",21),o()),e&2){let t=a.$implicit;c(t.isAlive?"bg-primary-500/5 border-primary-900/40 hover:border-primary-500/60":"bg-red-950/10 border-red-900/30 opacity-60 grayscale-[0.8]"),i(),h(t.isAlive?-1:1),i(4),c(t.isAlive?"bg-primary-500 shadow-[0_0_5px_rgba(var(--primary-rgb),0.8)]":"bg-red-600 shadow-[0_0_5px_red]"),i(),c(t.isAlive?"text-primary-300":"text-red-900 line-through"),i(),f(" ",t.name," "),i(),h(t.isAlive?9:8),i(2),h(t.isAlive?10:11),i(2),c(t.isAlive?"from-primary-500/50 to-transparent":"from-red-600/50 to-transparent")}}var se=class e{store=g(X);aliveCount=()=>this.store.players().filter(a=>a.isAlive).length;static \u0275fac=function(t){return new(t||e)};static \u0275cmp=_({type:e,selectors:[["app-play"]],decls:17,vars:2,consts:[[1,"h-full","w-full","flex","flex-col","p-4","relative","overflow-hidden"],[1,"w-full","max-w-md","mx-auto","mb-6","flex","justify-between","items-end","border-b","border-primary-900/50","pb-2","shrink-0"],[1,"text-xl","font-black","tracking-widest","text-primary-400","uppercase"],[1,"text-[9px]","text-primary-700","font-bold","uppercase","tracking-tighter"],[1,"text-right"],[1,"text-[10px]","text-primary-500","font-mono","tracking-widest","uppercase","mb-1"],[1,"text-2xl","font-black","text-primary-400","leading-none"],[1,"text-xs","text-primary-900"],[1,"flex-1","w-full","max-w-md","mx-auto","overflow-y-auto","scrollbar-none","flex","flex-col","gap-3","min-h-0"],[1,"relative","transition-all","duration-500","overflow-hidden","border","shrink-0","min-h-[70px]",3,"class"],[1,"relative","transition-all","duration-500","overflow-hidden","border","shrink-0","min-h-[70px]"],[1,"absolute","inset-0","bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,0,0,0.05)_10px,rgba(255,0,0,0.05)_20px)]","pointer-events-none"],[1,"p-3","h-full","flex","items-center","justify-between"],[1,"flex","flex-col"],[1,"flex","items-center","gap-2"],[1,"w-2","h-2","rounded-full","shrink-0"],[1,"font-mono","text-lg","font-bold","tracking-tighter","uppercase"],[1,"flex","items-center","gap-2","mt-1"],[1,"text-[8px]","text-primary-800","font-mono","uppercase","tracking-[0.2em]","mt-1"],["icon","pi pi-bolt","styleClass","border border-primary-900/50 hover:bg-red-500 hover:text-slate-950 hover:border-red-500 p-2 transition-all",3,"text"],[1,"pi","pi-times-circle","text-red-900","p-2","opacity-50"],[1,"h-0.5","w-full","bg-gradient-to-right","shrink-0"],[1,"text-[8px]","font-black","uppercase","bg-red-900","text-slate-950","px-1"],[1,"text-[10px]","text-red-700","font-mono","uppercase","tracking-widest"],["icon","pi pi-bolt","styleClass","border border-primary-900/50 hover:bg-red-500 hover:text-slate-950 hover:border-red-500 p-2 transition-all",3,"onClick","text"]],template:function(t,l){t&1&&(r(0,"div",0)(1,"header",1)(2,"div")(3,"h2",2),s(4," Monitor_Soggetti "),o(),r(5,"p",3),s(6," Scanning for anomalies... "),o()(),r(7,"div",4)(8,"div",5),s(9," Status_Attivi "),o(),r(10,"div",6),s(11),r(12,"span",7),s(13),o()()()(),r(14,"main",8),N(15,we,13,12,"div",9,_e),o()()),t&2&&(i(11),f(" ",l.aliveCount()),i(2),f("/",l.store.players().length),i(2),j(l.store.players()))},dependencies:[ie,ne,le],encapsulation:2})};export{se as Play};
