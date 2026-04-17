import{a as Y}from"./chunk-OOWTRVAW.js";import{a as ie,e as ae,g as oe}from"./chunk-2KLI3MAM.js";import{N as Z,O as C,R as ee,U as te,V as ne,Y as u,b as L,d as U,f as W,g as X}from"./chunk-74BNMPI4.js";import{$a as j,Ab as g,Bb as b,Cb as H,Hb as J,Ma as v,N as M,Na as F,O as w,Pa as N,Q as S,Qa as A,Ra as m,S as p,Wb as K,X as B,Xa as P,Y as D,Ya as T,Za as h,ab as V,bb as s,cb as c,db as r,eb as _,ib as z,jb as G,la as x,lb as Q,nb as $,ob as l,pb as O,qb as R,rb as q,tb as k,ub as I,ya as o,zb as d}from"./chunk-NSESU7DK.js";var re=`
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
`;var ge=["icon"],me=["*"];function ue(e,a){if(e&1&&_(0,"span",4),e&2){let t=l(2);d(t.cx("icon")),s("ngClass",t.icon)("pBind",t.ptm("icon"))}}function fe(e,a){if(e&1&&(z(0),m(1,ue,1,4,"span",3),G()),e&2){let t=l();o(),s("ngIf",t.icon)}}function ye(e,a){}function ve(e,a){e&1&&m(0,ye,0,0,"ng-template")}function _e(e,a){if(e&1&&(c(0,"span",2),m(1,ve,1,0,null,5),r()),e&2){let t=l();d(t.cx("icon")),s("pBind",t.ptm("icon")),o(),s("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)}}var be={root:({instance:e})=>["p-tag p-component",{"p-tag-info":e.severity==="info","p-tag-success":e.severity==="success","p-tag-warn":e.severity==="warn","p-tag-danger":e.severity==="danger","p-tag-secondary":e.severity==="secondary","p-tag-contrast":e.severity==="contrast","p-tag-rounded":e.rounded}],icon:"p-tag-icon",label:"p-tag-label"},se=(()=>{class e extends ee{name="tag";style=re;classes=be;static \u0275fac=(()=>{let t;return function(n){return(t||(t=x(e)))(n||e)}})();static \u0275prov=M({token:e,factory:e.\u0275fac})}return e})();var ce=new S("TAG_INSTANCE"),E=(()=>{class e extends ne{componentName="Tag";$pcTag=p(ce,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=p(u,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass;severity;value;icon;rounded;iconTemplate;templates;_iconTemplate;_componentStyle=p(se);onAfterContentInit(){this.templates?.forEach(t=>{t.getType()==="icon"&&(this._iconTemplate=t.template)})}get dataP(){return this.cn({rounded:this.rounded,[this.severity]:this.severity})}static \u0275fac=(()=>{let t;return function(n){return(t||(t=x(e)))(n||e)}})();static \u0275cmp=v({type:e,selectors:[["p-tag"]],contentQueries:function(i,n,f){if(i&1&&q(f,ge,4)(f,Z,4),i&2){let y;k(y=I())&&(n.iconTemplate=y.first),k(y=I())&&(n.templates=y)}},hostVars:3,hostBindings:function(i,n){i&2&&(P("data-p",n.dataP),d(n.cn(n.cx("root"),n.styleClass)))},inputs:{styleClass:"styleClass",severity:"severity",value:"value",icon:"icon",rounded:[2,"rounded","rounded",K]},features:[J([se,{provide:ce,useExisting:e},{provide:te,useExisting:e}]),N([u]),A],ngContentSelectors:me,decls:5,vars:6,consts:[[4,"ngIf"],[3,"class","pBind",4,"ngIf"],[3,"pBind"],[3,"class","ngClass","pBind",4,"ngIf"],[3,"ngClass","pBind"],[4,"ngTemplateOutlet"]],template:function(i,n){i&1&&(O(),R(0),m(1,fe,2,1,"ng-container",0)(2,_e,2,4,"span",1),c(3,"span",2),g(4),r()),i&2&&(o(),s("ngIf",!n.iconTemplate&&!n._iconTemplate),o(),s("ngIf",n.iconTemplate||n._iconTemplate),o(),d(n.cx("label")),s("pBind",n.ptm("label")),o(),b(n.value))},dependencies:[X,L,U,W,C,u],encapsulation:2,changeDetection:0})}return e})(),le=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=F({type:e});static \u0275inj=w({imports:[E,C,C]})}return e})();var xe=(e,a)=>a.id;function Te(e,a){if(e&1&&(c(0,"span",7),g(1),r()),e&2){let t=l().$implicit;o(),H("Eliminato (",t.role,")")}}function he(e,a){if(e&1){let t=Q();c(0,"p-button",9),$("onClick",function(){B(t);let n=l().$implicit,f=l();return D(f.store.eliminatePlayer(n.id))}),r()}e&2&&s("rounded",!0)("text",!0)}function ke(e,a){if(e&1&&(c(0,"p-card")(1,"div",1)(2,"div")(3,"span",6),g(4),r(),T(5,Te,2,1,"span",7),r(),T(6,he,1,2,"p-button",8),r()()),e&2){let t=a.$implicit;d(t.isAlive?"shadow-md border-l-4 border-green-500":"opacity-40 grayscale pointer-events-none transition-all"),o(4),b(t.name),o(),h(t.isAlive?-1:5),o(),h(t.isAlive?6:-1)}}var de=class e{store=p(Y);aliveCount=()=>this.store.players().filter(a=>a.isAlive).length;static \u0275fac=function(t){return new(t||e)};static \u0275cmp=v({type:e,selectors:[["app-play"]],decls:8,vars:1,consts:[[1,"flex","flex-col","gap-6","animate-in","slide-in-from-bottom","duration-500"],[1,"flex","justify-between","items-center"],[1,"text-2xl","font-bold"],["severity","info",3,"value"],[1,"grid","grid-cols-1","md:grid-cols-2","gap-4"],[3,"class"],[1,"text-lg","font-bold","block"],[1,"text-xs","font-bold","uppercase","text-red-500"],["icon","fa-solid fa-skull","severity","danger",3,"rounded","text"],["icon","fa-solid fa-skull","severity","danger",3,"onClick","rounded","text"]],template:function(t,i){t&1&&(c(0,"div",0)(1,"div",1)(2,"h2",2),g(3,"Giocatori in Gara"),r(),_(4,"p-tag",3),r(),c(5,"div",4),j(6,ke,7,5,"p-card",5,xe),r()()),t&2&&(o(4),s("value","Vivi: "+i.aliveCount()),o(2),V(i.store.players()))},dependencies:[oe,ie,ae,le,E],encapsulation:2})};export{de as Play};
