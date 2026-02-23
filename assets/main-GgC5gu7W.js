(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))h(m);new MutationObserver(m=>{for(const c of m)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&h(d)}).observe(document,{childList:!0,subtree:!0});function u(m){const c={};return m.integrity&&(c.integrity=m.integrity),m.referrerPolicy&&(c.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?c.credentials="include":m.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function h(m){if(m.ep)return;m.ep=!0;const c=u(m);fetch(m.href,c)}})();function Yt(_){return _&&_.__esModule&&Object.prototype.hasOwnProperty.call(_,"default")?_.default:_}var le={exports:{}},ce={exports:{}},F={},q={},ze;function T(){if(ze)return q;ze=1,q.__esModule=!0,q.extend=m,q.indexOf=s,q.escapeExpression=i,q.isEmpty=a,q.createFrame=f,q.blockParams=r,q.appendContextPath=t;var _={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},n=/[&<>"'`=]/g,u=/[&<>"'`=]/;function h(e){return _[e]}function m(e){for(var o=1;o<arguments.length;o++)for(var p in arguments[o])Object.prototype.hasOwnProperty.call(arguments[o],p)&&(e[p]=arguments[o][p]);return e}var c=Object.prototype.toString;q.toString=c;var d=function(o){return typeof o=="function"};d(/x/)&&(q.isFunction=d=function(e){return typeof e=="function"&&c.call(e)==="[object Function]"}),q.isFunction=d;var l=Array.isArray||function(e){return e&&typeof e=="object"?c.call(e)==="[object Array]":!1};q.isArray=l;function s(e,o){for(var p=0,v=e.length;p<v;p++)if(e[p]===o)return p;return-1}function i(e){if(typeof e!="string"){if(e&&e.toHTML)return e.toHTML();if(e==null)return"";if(!e)return e+"";e=""+e}return u.test(e)?e.replace(n,h):e}function a(e){return!e&&e!==0?!0:!!(l(e)&&e.length===0)}function f(e){var o=m({},e);return o._parent=e,o}function r(e,o){return e.path=o,e}function t(e,o){return(e?e+".":"")+o}return q}var ue={exports:{}},Qe;function V(){return Qe||(Qe=1,(function(_,n){n.__esModule=!0;var u=["description","fileName","lineNumber","endLineNumber","message","name","number","stack"];function h(m,c){var d=c&&c.loc,l=void 0,s=void 0,i=void 0,a=void 0;d&&(l=d.start.line,s=d.end.line,i=d.start.column,a=d.end.column,m+=" - "+l+":"+i);for(var f=Error.prototype.constructor.call(this,m),r=0;r<u.length;r++)this[u[r]]=f[u[r]];Error.captureStackTrace&&Error.captureStackTrace(this,h);try{d&&(this.lineNumber=l,this.endLineNumber=s,Object.defineProperty?(Object.defineProperty(this,"column",{value:i,enumerable:!0}),Object.defineProperty(this,"endColumn",{value:a,enumerable:!0})):(this.column=i,this.endColumn=a))}catch{}}h.prototype=new Error,n.default=h,_.exports=n.default})(ue,ue.exports)),ue.exports}var ee={},he={exports:{}},Ze;function jt(){return Ze||(Ze=1,(function(_,n){n.__esModule=!0;var u=T();n.default=function(h){h.registerHelper("blockHelperMissing",function(m,c){var d=c.inverse,l=c.fn;if(m===!0)return l(this);if(m===!1||m==null)return d(this);if(u.isArray(m))return m.length>0?(c.ids&&(c.ids=[c.name]),h.helpers.each(m,c)):d(this);if(c.data&&c.ids){var s=u.createFrame(c.data);s.contextPath=u.appendContextPath(c.data.contextPath,c.name),c={data:s}}return l(m,c)})},_.exports=n.default})(he,he.exports)),he.exports}var pe={exports:{}},Xe;function $t(){return Xe||(Xe=1,(function(_,n){n.__esModule=!0;function u(d){return d&&d.__esModule?d:{default:d}}var h=T(),m=V(),c=u(m);n.default=function(d){d.registerHelper("each",function(l,s){if(!s)throw new c.default("Must pass iterator to #each");var i=s.fn,a=s.inverse,f=0,r="",t=void 0,e=void 0;s.data&&s.ids&&(e=h.appendContextPath(s.data.contextPath,s.ids[0])+"."),h.isFunction(l)&&(l=l.call(this)),s.data&&(t=h.createFrame(s.data));function o(g,y,w){t&&(t.key=g,t.index=y,t.first=y===0,t.last=!!w,e&&(t.contextPath=e+g)),r=r+i(l[g],{data:t,blockParams:h.blockParams([l[g],g],[e+g,null])})}if(l&&typeof l=="object")if(h.isArray(l))for(var p=l.length;f<p;f++)f in l&&o(f,f,f===l.length-1);else if(typeof Symbol=="function"&&l[Symbol.iterator]){for(var v=[],b=l[Symbol.iterator](),S=b.next();!S.done;S=b.next())v.push(S.value);l=v;for(var p=l.length;f<p;f++)o(f,f,f===l.length-1)}else(function(){var g=void 0;Object.keys(l).forEach(function(y){g!==void 0&&o(g,f-1),g=y,f++}),g!==void 0&&o(g,f-1,!0)})();return f===0&&(r=a(this)),r})},_.exports=n.default})(pe,pe.exports)),pe.exports}var de={exports:{}},Ye;function er(){return Ye||(Ye=1,(function(_,n){n.__esModule=!0;function u(c){return c&&c.__esModule?c:{default:c}}var h=V(),m=u(h);n.default=function(c){c.registerHelper("helperMissing",function(){if(arguments.length!==1)throw new m.default('Missing helper: "'+arguments[arguments.length-1].name+'"')})},_.exports=n.default})(de,de.exports)),de.exports}var fe={exports:{}},je;function tr(){return je||(je=1,(function(_,n){n.__esModule=!0;function u(d){return d&&d.__esModule?d:{default:d}}var h=T(),m=V(),c=u(m);n.default=function(d){d.registerHelper("if",function(l,s){if(arguments.length!=2)throw new c.default("#if requires exactly one argument");return h.isFunction(l)&&(l=l.call(this)),!s.hash.includeZero&&!l||h.isEmpty(l)?s.inverse(this):s.fn(this)}),d.registerHelper("unless",function(l,s){if(arguments.length!=2)throw new c.default("#unless requires exactly one argument");return d.helpers.if.call(this,l,{fn:s.inverse,inverse:s.fn,hash:s.hash})})},_.exports=n.default})(fe,fe.exports)),fe.exports}var me={exports:{}},$e;function rr(){return $e||($e=1,(function(_,n){n.__esModule=!0,n.default=function(u){u.registerHelper("log",function(){for(var h=[void 0],m=arguments[arguments.length-1],c=0;c<arguments.length-1;c++)h.push(arguments[c]);var d=1;m.hash.level!=null?d=m.hash.level:m.data&&m.data.level!=null&&(d=m.data.level),h[0]=d,u.log.apply(u,h)})},_.exports=n.default})(me,me.exports)),me.exports}var ge={exports:{}},et;function nr(){return et||(et=1,(function(_,n){n.__esModule=!0,n.default=function(u){u.registerHelper("lookup",function(h,m,c){return h&&c.lookupProperty(h,m)})},_.exports=n.default})(ge,ge.exports)),ge.exports}var _e={exports:{}},tt;function ar(){return tt||(tt=1,(function(_,n){n.__esModule=!0;function u(d){return d&&d.__esModule?d:{default:d}}var h=T(),m=V(),c=u(m);n.default=function(d){d.registerHelper("with",function(l,s){if(arguments.length!=2)throw new c.default("#with requires exactly one argument");h.isFunction(l)&&(l=l.call(this));var i=s.fn;if(h.isEmpty(l))return s.inverse(this);var a=s.data;return s.data&&s.ids&&(a=h.createFrame(s.data),a.contextPath=h.appendContextPath(s.data.contextPath,s.ids[0])),i(l,{data:a,blockParams:h.blockParams([l],[a&&a.contextPath])})})},_.exports=n.default})(_e,_e.exports)),_e.exports}var rt;function Ft(){if(rt)return ee;rt=1,ee.__esModule=!0,ee.registerDefaultHelpers=o,ee.moveHelperToHooks=p;function _(v){return v&&v.__esModule?v:{default:v}}var n=jt(),u=_(n),h=$t(),m=_(h),c=er(),d=_(c),l=tr(),s=_(l),i=rr(),a=_(i),f=nr(),r=_(f),t=ar(),e=_(t);function o(v){u.default(v),m.default(v),d.default(v),s.default(v),a.default(v),r.default(v),e.default(v)}function p(v,b,S){v.helpers[b]&&(v.hooks[b]=v.helpers[b],S||delete v.helpers[b])}return ee}var ve={},be={exports:{}},nt;function sr(){return nt||(nt=1,(function(_,n){n.__esModule=!0;var u=T();n.default=function(h){h.registerDecorator("inline",function(m,c,d,l){var s=m;return c.partials||(c.partials={},s=function(i,a){var f=d.partials;d.partials=u.extend({},f,c.partials);var r=m(i,a);return d.partials=f,r}),c.partials[l.args[0]]=l.fn,s})},_.exports=n.default})(be,be.exports)),be.exports}var at;function ir(){if(at)return ve;at=1,ve.__esModule=!0,ve.registerDefaultDecorators=h;function _(m){return m&&m.__esModule?m:{default:m}}var n=sr(),u=_(n);function h(m){u.default(m)}return ve}var ye={exports:{}},st;function Vt(){return st||(st=1,(function(_,n){n.__esModule=!0;var u=T(),h={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(c){if(typeof c=="string"){var d=u.indexOf(h.methodMap,c.toLowerCase());d>=0?c=d:c=parseInt(c,10)}return c},log:function(c){if(c=h.lookupLevel(c),typeof console<"u"&&h.lookupLevel(h.level)<=c){var d=h.methodMap[c];console[d]||(d="log");for(var l=arguments.length,s=Array(l>1?l-1:0),i=1;i<l;i++)s[i-1]=arguments[i];console[d].apply(console,s)}}};n.default=h,_.exports=n.default})(ye,ye.exports)),ye.exports}var X={},Se={},it;function or(){if(it)return Se;it=1,Se.__esModule=!0,Se.createNewLookupObject=n;var _=T();function n(){for(var u=arguments.length,h=Array(u),m=0;m<u;m++)h[m]=arguments[m];return _.extend.apply(void 0,[Object.create(null)].concat(h))}return Se}var ot;function Gt(){if(ot)return X;ot=1,X.__esModule=!0,X.createProtoAccessControl=c,X.resultIsAllowed=d,X.resetLoggedProperties=i;function _(a){return a&&a.__esModule?a:{default:a}}var n=or(),u=Vt(),h=_(u),m=Object.create(null);function c(a){var f=Object.create(null);f.constructor=!1,f.__defineGetter__=!1,f.__defineSetter__=!1,f.__lookupGetter__=!1;var r=Object.create(null);return r.__proto__=!1,{properties:{whitelist:n.createNewLookupObject(r,a.allowedProtoProperties),defaultValue:a.allowProtoPropertiesByDefault},methods:{whitelist:n.createNewLookupObject(f,a.allowedProtoMethods),defaultValue:a.allowProtoMethodsByDefault}}}function d(a,f,r){return l(typeof a=="function"?f.methods:f.properties,r)}function l(a,f){return a.whitelist[f]!==void 0?a.whitelist[f]===!0:a.defaultValue!==void 0?a.defaultValue:(s(f),!1)}function s(a){m[a]!==!0&&(m[a]=!0,h.default.log("error",'Handlebars: Access has been denied to resolve the property "'+a+`" because it is not an "own property" of its parent.
You can add a runtime option to disable the check or this warning:
See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details`))}function i(){Object.keys(m).forEach(function(a){delete m[a]})}return X}var lt;function Ke(){if(lt)return F;lt=1,F.__esModule=!0,F.HandlebarsEnvironment=e;function _(p){return p&&p.__esModule?p:{default:p}}var n=T(),u=V(),h=_(u),m=Ft(),c=ir(),d=Vt(),l=_(d),s=Gt(),i="4.7.8";F.VERSION=i;var a=8;F.COMPILER_REVISION=a;var f=7;F.LAST_COMPATIBLE_COMPILER_REVISION=f;var r={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0 <4.3.0",8:">= 4.3.0"};F.REVISION_CHANGES=r;var t="[object Object]";function e(p,v,b){this.helpers=p||{},this.partials=v||{},this.decorators=b||{},m.registerDefaultHelpers(this),c.registerDefaultDecorators(this)}e.prototype={constructor:e,logger:l.default,log:l.default.log,registerHelper:function(v,b){if(n.toString.call(v)===t){if(b)throw new h.default("Arg not supported with multiple helpers");n.extend(this.helpers,v)}else this.helpers[v]=b},unregisterHelper:function(v){delete this.helpers[v]},registerPartial:function(v,b){if(n.toString.call(v)===t)n.extend(this.partials,v);else{if(typeof b>"u")throw new h.default('Attempting to register a partial called "'+v+'" as undefined');this.partials[v]=b}},unregisterPartial:function(v){delete this.partials[v]},registerDecorator:function(v,b){if(n.toString.call(v)===t){if(b)throw new h.default("Arg not supported with multiple decorators");n.extend(this.decorators,v)}else this.decorators[v]=b},unregisterDecorator:function(v){delete this.decorators[v]},resetLoggedPropertyAccesses:function(){s.resetLoggedProperties()}};var o=l.default.log;return F.log=o,F.createFrame=n.createFrame,F.logger=l.default,F}var we={exports:{}},ct;function lr(){return ct||(ct=1,(function(_,n){n.__esModule=!0;function u(h){this.string=h}u.prototype.toString=u.prototype.toHTML=function(){return""+this.string},n.default=u,_.exports=n.default})(we,we.exports)),we.exports}var G={},ke={},ut;function cr(){if(ut)return ke;ut=1,ke.__esModule=!0,ke.wrapHelper=_;function _(n,u){if(typeof n!="function")return n;var h=function(){var c=arguments[arguments.length-1];return arguments[arguments.length-1]=u(c),n.apply(this,arguments)};return h}return ke}var ht;function ur(){if(ht)return G;ht=1,G.__esModule=!0,G.checkRevision=a,G.template=f,G.wrapProgram=r,G.resolvePartial=t,G.invokePartial=e,G.noop=o;function _(g){return g&&g.__esModule?g:{default:g}}function n(g){if(g&&g.__esModule)return g;var y={};if(g!=null)for(var w in g)Object.prototype.hasOwnProperty.call(g,w)&&(y[w]=g[w]);return y.default=g,y}var u=T(),h=n(u),m=V(),c=_(m),d=Ke(),l=Ft(),s=cr(),i=Gt();function a(g){var y=g&&g[0]||1,w=d.COMPILER_REVISION;if(!(y>=d.LAST_COMPATIBLE_COMPILER_REVISION&&y<=d.COMPILER_REVISION))if(y<d.LAST_COMPATIBLE_COMPILER_REVISION){var k=d.REVISION_CHANGES[w],P=d.REVISION_CHANGES[y];throw new c.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+k+") or downgrade your runtime to an older version ("+P+").")}else throw new c.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+g[1]+").")}function f(g,y){if(!y)throw new c.default("No environment passed to template");if(!g||!g.main)throw new c.default("Unknown template object: "+typeof g);g.main.decorator=g.main_d,y.VM.checkRevision(g.compiler);var w=g.compiler&&g.compiler[0]===7;function k(L,C,E){E.hash&&(C=h.extend({},C,E.hash),E.ids&&(E.ids[0]=!0)),L=y.VM.resolvePartial.call(this,L,C,E);var I=h.extend({},E,{hooks:this.hooks,protoAccessControl:this.protoAccessControl}),A=y.VM.invokePartial.call(this,L,C,I);if(A==null&&y.compile&&(E.partials[E.name]=y.compile(L,g.compilerOptions,y),A=E.partials[E.name](C,I)),A!=null){if(E.indent){for(var R=A.split(`
`),H=0,$=R.length;H<$&&!(!R[H]&&H+1===$);H++)R[H]=E.indent+R[H];A=R.join(`
`)}return A}else throw new c.default("The partial "+E.name+" could not be compiled when running in runtime-only mode")}var P={strict:function(C,E,I){if(!C||!(E in C))throw new c.default('"'+E+'" not defined in '+C,{loc:I});return P.lookupProperty(C,E)},lookupProperty:function(C,E){var I=C[E];if(I==null||Object.prototype.hasOwnProperty.call(C,E)||i.resultIsAllowed(I,P.protoAccessControl,E))return I},lookup:function(C,E){for(var I=C.length,A=0;A<I;A++){var R=C[A]&&P.lookupProperty(C[A],E);if(R!=null)return C[A][E]}},lambda:function(C,E){return typeof C=="function"?C.call(E):C},escapeExpression:h.escapeExpression,invokePartial:k,fn:function(C){var E=g[C];return E.decorator=g[C+"_d"],E},programs:[],program:function(C,E,I,A,R){var H=this.programs[C],$=this.fn(C);return E||R||A||I?H=r(this,C,$,E,I,A,R):H||(H=this.programs[C]=r(this,C,$)),H},data:function(C,E){for(;C&&E--;)C=C._parent;return C},mergeIfNeeded:function(C,E){var I=C||E;return C&&E&&C!==E&&(I=h.extend({},E,C)),I},nullContext:Object.seal({}),noop:y.VM.noop,compilerInfo:g.compiler};function x(L){var C=arguments.length<=1||arguments[1]===void 0?{}:arguments[1],E=C.data;x._setup(C),!C.partial&&g.useData&&(E=p(L,E));var I=void 0,A=g.useBlockParams?[]:void 0;g.useDepths&&(C.depths?I=L!=C.depths[0]?[L].concat(C.depths):C.depths:I=[L]);function R(H){return""+g.main(P,H,P.helpers,P.partials,E,A,I)}return R=v(g.main,R,P,C.depths||[],E,A),R(L,C)}return x.isTop=!0,x._setup=function(L){if(L.partial)P.protoAccessControl=L.protoAccessControl,P.helpers=L.helpers,P.partials=L.partials,P.decorators=L.decorators,P.hooks=L.hooks;else{var C=h.extend({},y.helpers,L.helpers);b(C,P),P.helpers=C,g.usePartial&&(P.partials=P.mergeIfNeeded(L.partials,y.partials)),(g.usePartial||g.useDecorators)&&(P.decorators=h.extend({},y.decorators,L.decorators)),P.hooks={},P.protoAccessControl=i.createProtoAccessControl(L);var E=L.allowCallsToHelperMissing||w;l.moveHelperToHooks(P,"helperMissing",E),l.moveHelperToHooks(P,"blockHelperMissing",E)}},x._child=function(L,C,E,I){if(g.useBlockParams&&!E)throw new c.default("must pass block params");if(g.useDepths&&!I)throw new c.default("must pass parent depths");return r(P,L,g[L],C,0,E,I)},x}function r(g,y,w,k,P,x,L){function C(E){var I=arguments.length<=1||arguments[1]===void 0?{}:arguments[1],A=L;return L&&E!=L[0]&&!(E===g.nullContext&&L[0]===null)&&(A=[E].concat(L)),w(g,E,g.helpers,g.partials,I.data||k,x&&[I.blockParams].concat(x),A)}return C=v(w,C,g,L,k,x),C.program=y,C.depth=L?L.length:0,C.blockParams=P||0,C}function t(g,y,w){return g?!g.call&&!w.name&&(w.name=g,g=w.partials[g]):w.name==="@partial-block"?g=w.data["partial-block"]:g=w.partials[w.name],g}function e(g,y,w){var k=w.data&&w.data["partial-block"];w.partial=!0,w.ids&&(w.data.contextPath=w.ids[0]||w.data.contextPath);var P=void 0;if(w.fn&&w.fn!==o&&(function(){w.data=d.createFrame(w.data);var x=w.fn;P=w.data["partial-block"]=function(C){var E=arguments.length<=1||arguments[1]===void 0?{}:arguments[1];return E.data=d.createFrame(E.data),E.data["partial-block"]=k,x(C,E)},x.partials&&(w.partials=h.extend({},w.partials,x.partials))})(),g===void 0&&P&&(g=P),g===void 0)throw new c.default("The partial "+w.name+" could not be found");if(g instanceof Function)return g(y,w)}function o(){return""}function p(g,y){return(!y||!("root"in y))&&(y=y?d.createFrame(y):{},y.root=g),y}function v(g,y,w,k,P,x){if(g.decorator){var L={};y=g.decorator(y,L,w,k&&k[0],P,x,k),h.extend(y,L)}return y}function b(g,y){Object.keys(g).forEach(function(w){var k=g[w];g[w]=S(k,y)})}function S(g,y){var w=y.lookupProperty;return s.wrapHelper(g,function(k){return h.extend({lookupProperty:w},k)})}return G}var Ce={exports:{}},pt;function Wt(){return pt||(pt=1,(function(_,n){n.__esModule=!0,n.default=function(u){(function(){typeof globalThis!="object"&&(Object.prototype.__defineGetter__("__magic__",function(){return this}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__)})();var h=globalThis.Handlebars;u.noConflict=function(){return globalThis.Handlebars===u&&(globalThis.Handlebars=h),u}},_.exports=n.default})(Ce,Ce.exports)),Ce.exports}var dt;function hr(){return dt||(dt=1,(function(_,n){n.__esModule=!0;function u(b){return b&&b.__esModule?b:{default:b}}function h(b){if(b&&b.__esModule)return b;var S={};if(b!=null)for(var g in b)Object.prototype.hasOwnProperty.call(b,g)&&(S[g]=b[g]);return S.default=b,S}var m=Ke(),c=h(m),d=lr(),l=u(d),s=V(),i=u(s),a=T(),f=h(a),r=ur(),t=h(r),e=Wt(),o=u(e);function p(){var b=new c.HandlebarsEnvironment;return f.extend(b,c),b.SafeString=l.default,b.Exception=i.default,b.Utils=f,b.escapeExpression=f.escapeExpression,b.VM=t,b.template=function(S){return t.template(S,b)},b}var v=p();v.create=p,o.default(v),v.default=v,n.default=v,_.exports=n.default})(ce,ce.exports)),ce.exports}var Pe={exports:{}},ft;function Kt(){return ft||(ft=1,(function(_,n){n.__esModule=!0;var u={helpers:{helperExpression:function(m){return m.type==="SubExpression"||(m.type==="MustacheStatement"||m.type==="BlockStatement")&&!!(m.params&&m.params.length||m.hash)},scopedId:function(m){return/^\.|this\b/.test(m.original)},simpleId:function(m){return m.parts.length===1&&!u.helpers.scopedId(m)&&!m.depth}}};n.default=u,_.exports=n.default})(Pe,Pe.exports)),Pe.exports}var Y={},Le={exports:{}},mt;function pr(){return mt||(mt=1,(function(_,n){n.__esModule=!0;var u=(function(){var h={trace:function(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,program_repetition0:6,statement:7,mustache:8,block:9,rawBlock:10,partial:11,partialBlock:12,content:13,COMMENT:14,CONTENT:15,openRawBlock:16,rawBlock_repetition0:17,END_RAW_BLOCK:18,OPEN_RAW_BLOCK:19,helperName:20,openRawBlock_repetition0:21,openRawBlock_option0:22,CLOSE_RAW_BLOCK:23,openBlock:24,block_option0:25,closeBlock:26,openInverse:27,block_option1:28,OPEN_BLOCK:29,openBlock_repetition0:30,openBlock_option0:31,openBlock_option1:32,CLOSE:33,OPEN_INVERSE:34,openInverse_repetition0:35,openInverse_option0:36,openInverse_option1:37,openInverseChain:38,OPEN_INVERSE_CHAIN:39,openInverseChain_repetition0:40,openInverseChain_option0:41,openInverseChain_option1:42,inverseAndProgram:43,INVERSE:44,inverseChain:45,inverseChain_option0:46,OPEN_ENDBLOCK:47,OPEN:48,mustache_repetition0:49,mustache_option0:50,OPEN_UNESCAPED:51,mustache_repetition1:52,mustache_option1:53,CLOSE_UNESCAPED:54,OPEN_PARTIAL:55,partialName:56,partial_repetition0:57,partial_option0:58,openPartialBlock:59,OPEN_PARTIAL_BLOCK:60,openPartialBlock_repetition0:61,openPartialBlock_option0:62,param:63,sexpr:64,OPEN_SEXPR:65,sexpr_repetition0:66,sexpr_option0:67,CLOSE_SEXPR:68,hash:69,hash_repetition_plus0:70,hashSegment:71,ID:72,EQUALS:73,blockParams:74,OPEN_BLOCK_PARAMS:75,blockParams_repetition_plus0:76,CLOSE_BLOCK_PARAMS:77,path:78,dataName:79,STRING:80,NUMBER:81,BOOLEAN:82,UNDEFINED:83,NULL:84,DATA:85,pathSegments:86,SEP:87,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",14:"COMMENT",15:"CONTENT",18:"END_RAW_BLOCK",19:"OPEN_RAW_BLOCK",23:"CLOSE_RAW_BLOCK",29:"OPEN_BLOCK",33:"CLOSE",34:"OPEN_INVERSE",39:"OPEN_INVERSE_CHAIN",44:"INVERSE",47:"OPEN_ENDBLOCK",48:"OPEN",51:"OPEN_UNESCAPED",54:"CLOSE_UNESCAPED",55:"OPEN_PARTIAL",60:"OPEN_PARTIAL_BLOCK",65:"OPEN_SEXPR",68:"CLOSE_SEXPR",72:"ID",73:"EQUALS",75:"OPEN_BLOCK_PARAMS",77:"CLOSE_BLOCK_PARAMS",80:"STRING",81:"NUMBER",82:"BOOLEAN",83:"UNDEFINED",84:"NULL",85:"DATA",87:"SEP"},productions_:[0,[3,2],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[13,1],[10,3],[16,5],[9,4],[9,4],[24,6],[27,6],[38,6],[43,2],[45,3],[45,1],[26,3],[8,5],[8,5],[11,5],[12,3],[59,5],[63,1],[63,1],[64,5],[69,1],[71,3],[74,3],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[56,1],[56,1],[79,2],[78,1],[86,3],[86,1],[6,0],[6,2],[17,0],[17,2],[21,0],[21,2],[22,0],[22,1],[25,0],[25,1],[28,0],[28,1],[30,0],[30,2],[31,0],[31,1],[32,0],[32,1],[35,0],[35,2],[36,0],[36,1],[37,0],[37,1],[40,0],[40,2],[41,0],[41,1],[42,0],[42,1],[46,0],[46,1],[49,0],[49,2],[50,0],[50,1],[52,0],[52,2],[53,0],[53,1],[57,0],[57,2],[58,0],[58,1],[61,0],[61,2],[62,0],[62,1],[66,0],[66,2],[67,0],[67,1],[70,1],[70,2],[76,1],[76,2]],performAction:function(l,s,i,a,f,r,t){var e=r.length-1;switch(f){case 1:return r[e-1];case 2:this.$=a.prepareProgram(r[e]);break;case 3:this.$=r[e];break;case 4:this.$=r[e];break;case 5:this.$=r[e];break;case 6:this.$=r[e];break;case 7:this.$=r[e];break;case 8:this.$=r[e];break;case 9:this.$={type:"CommentStatement",value:a.stripComment(r[e]),strip:a.stripFlags(r[e],r[e]),loc:a.locInfo(this._$)};break;case 10:this.$={type:"ContentStatement",original:r[e],value:r[e],loc:a.locInfo(this._$)};break;case 11:this.$=a.prepareRawBlock(r[e-2],r[e-1],r[e],this._$);break;case 12:this.$={path:r[e-3],params:r[e-2],hash:r[e-1]};break;case 13:this.$=a.prepareBlock(r[e-3],r[e-2],r[e-1],r[e],!1,this._$);break;case 14:this.$=a.prepareBlock(r[e-3],r[e-2],r[e-1],r[e],!0,this._$);break;case 15:this.$={open:r[e-5],path:r[e-4],params:r[e-3],hash:r[e-2],blockParams:r[e-1],strip:a.stripFlags(r[e-5],r[e])};break;case 16:this.$={path:r[e-4],params:r[e-3],hash:r[e-2],blockParams:r[e-1],strip:a.stripFlags(r[e-5],r[e])};break;case 17:this.$={path:r[e-4],params:r[e-3],hash:r[e-2],blockParams:r[e-1],strip:a.stripFlags(r[e-5],r[e])};break;case 18:this.$={strip:a.stripFlags(r[e-1],r[e-1]),program:r[e]};break;case 19:var o=a.prepareBlock(r[e-2],r[e-1],r[e],r[e],!1,this._$),p=a.prepareProgram([o],r[e-1].loc);p.chained=!0,this.$={strip:r[e-2].strip,program:p,chain:!0};break;case 20:this.$=r[e];break;case 21:this.$={path:r[e-1],strip:a.stripFlags(r[e-2],r[e])};break;case 22:this.$=a.prepareMustache(r[e-3],r[e-2],r[e-1],r[e-4],a.stripFlags(r[e-4],r[e]),this._$);break;case 23:this.$=a.prepareMustache(r[e-3],r[e-2],r[e-1],r[e-4],a.stripFlags(r[e-4],r[e]),this._$);break;case 24:this.$={type:"PartialStatement",name:r[e-3],params:r[e-2],hash:r[e-1],indent:"",strip:a.stripFlags(r[e-4],r[e]),loc:a.locInfo(this._$)};break;case 25:this.$=a.preparePartialBlock(r[e-2],r[e-1],r[e],this._$);break;case 26:this.$={path:r[e-3],params:r[e-2],hash:r[e-1],strip:a.stripFlags(r[e-4],r[e])};break;case 27:this.$=r[e];break;case 28:this.$=r[e];break;case 29:this.$={type:"SubExpression",path:r[e-3],params:r[e-2],hash:r[e-1],loc:a.locInfo(this._$)};break;case 30:this.$={type:"Hash",pairs:r[e],loc:a.locInfo(this._$)};break;case 31:this.$={type:"HashPair",key:a.id(r[e-2]),value:r[e],loc:a.locInfo(this._$)};break;case 32:this.$=a.id(r[e-1]);break;case 33:this.$=r[e];break;case 34:this.$=r[e];break;case 35:this.$={type:"StringLiteral",value:r[e],original:r[e],loc:a.locInfo(this._$)};break;case 36:this.$={type:"NumberLiteral",value:Number(r[e]),original:Number(r[e]),loc:a.locInfo(this._$)};break;case 37:this.$={type:"BooleanLiteral",value:r[e]==="true",original:r[e]==="true",loc:a.locInfo(this._$)};break;case 38:this.$={type:"UndefinedLiteral",original:void 0,value:void 0,loc:a.locInfo(this._$)};break;case 39:this.$={type:"NullLiteral",original:null,value:null,loc:a.locInfo(this._$)};break;case 40:this.$=r[e];break;case 41:this.$=r[e];break;case 42:this.$=a.preparePath(!0,r[e],this._$);break;case 43:this.$=a.preparePath(!1,r[e],this._$);break;case 44:r[e-2].push({part:a.id(r[e]),original:r[e],separator:r[e-1]}),this.$=r[e-2];break;case 45:this.$=[{part:a.id(r[e]),original:r[e]}];break;case 46:this.$=[];break;case 47:r[e-1].push(r[e]);break;case 48:this.$=[];break;case 49:r[e-1].push(r[e]);break;case 50:this.$=[];break;case 51:r[e-1].push(r[e]);break;case 58:this.$=[];break;case 59:r[e-1].push(r[e]);break;case 64:this.$=[];break;case 65:r[e-1].push(r[e]);break;case 70:this.$=[];break;case 71:r[e-1].push(r[e]);break;case 78:this.$=[];break;case 79:r[e-1].push(r[e]);break;case 82:this.$=[];break;case 83:r[e-1].push(r[e]);break;case 86:this.$=[];break;case 87:r[e-1].push(r[e]);break;case 90:this.$=[];break;case 91:r[e-1].push(r[e]);break;case 94:this.$=[];break;case 95:r[e-1].push(r[e]);break;case 98:this.$=[r[e]];break;case 99:r[e-1].push(r[e]);break;case 100:this.$=[r[e]];break;case 101:r[e-1].push(r[e]);break}},table:[{3:1,4:2,5:[2,46],6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{1:[3]},{5:[1,4]},{5:[2,2],7:5,8:6,9:7,10:8,11:9,12:10,13:11,14:[1,12],15:[1,20],16:17,19:[1,23],24:15,27:16,29:[1,21],34:[1,22],39:[2,2],44:[2,2],47:[2,2],48:[1,13],51:[1,14],55:[1,18],59:19,60:[1,24]},{1:[2,1]},{5:[2,47],14:[2,47],15:[2,47],19:[2,47],29:[2,47],34:[2,47],39:[2,47],44:[2,47],47:[2,47],48:[2,47],51:[2,47],55:[2,47],60:[2,47]},{5:[2,3],14:[2,3],15:[2,3],19:[2,3],29:[2,3],34:[2,3],39:[2,3],44:[2,3],47:[2,3],48:[2,3],51:[2,3],55:[2,3],60:[2,3]},{5:[2,4],14:[2,4],15:[2,4],19:[2,4],29:[2,4],34:[2,4],39:[2,4],44:[2,4],47:[2,4],48:[2,4],51:[2,4],55:[2,4],60:[2,4]},{5:[2,5],14:[2,5],15:[2,5],19:[2,5],29:[2,5],34:[2,5],39:[2,5],44:[2,5],47:[2,5],48:[2,5],51:[2,5],55:[2,5],60:[2,5]},{5:[2,6],14:[2,6],15:[2,6],19:[2,6],29:[2,6],34:[2,6],39:[2,6],44:[2,6],47:[2,6],48:[2,6],51:[2,6],55:[2,6],60:[2,6]},{5:[2,7],14:[2,7],15:[2,7],19:[2,7],29:[2,7],34:[2,7],39:[2,7],44:[2,7],47:[2,7],48:[2,7],51:[2,7],55:[2,7],60:[2,7]},{5:[2,8],14:[2,8],15:[2,8],19:[2,8],29:[2,8],34:[2,8],39:[2,8],44:[2,8],47:[2,8],48:[2,8],51:[2,8],55:[2,8],60:[2,8]},{5:[2,9],14:[2,9],15:[2,9],19:[2,9],29:[2,9],34:[2,9],39:[2,9],44:[2,9],47:[2,9],48:[2,9],51:[2,9],55:[2,9],60:[2,9]},{20:25,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:36,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:37,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{4:38,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{15:[2,48],17:39,18:[2,48]},{20:41,56:40,64:42,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:44,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{5:[2,10],14:[2,10],15:[2,10],18:[2,10],19:[2,10],29:[2,10],34:[2,10],39:[2,10],44:[2,10],47:[2,10],48:[2,10],51:[2,10],55:[2,10],60:[2,10]},{20:45,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:46,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:47,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:41,56:48,64:42,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[2,78],49:49,65:[2,78],72:[2,78],80:[2,78],81:[2,78],82:[2,78],83:[2,78],84:[2,78],85:[2,78]},{23:[2,33],33:[2,33],54:[2,33],65:[2,33],68:[2,33],72:[2,33],75:[2,33],80:[2,33],81:[2,33],82:[2,33],83:[2,33],84:[2,33],85:[2,33]},{23:[2,34],33:[2,34],54:[2,34],65:[2,34],68:[2,34],72:[2,34],75:[2,34],80:[2,34],81:[2,34],82:[2,34],83:[2,34],84:[2,34],85:[2,34]},{23:[2,35],33:[2,35],54:[2,35],65:[2,35],68:[2,35],72:[2,35],75:[2,35],80:[2,35],81:[2,35],82:[2,35],83:[2,35],84:[2,35],85:[2,35]},{23:[2,36],33:[2,36],54:[2,36],65:[2,36],68:[2,36],72:[2,36],75:[2,36],80:[2,36],81:[2,36],82:[2,36],83:[2,36],84:[2,36],85:[2,36]},{23:[2,37],33:[2,37],54:[2,37],65:[2,37],68:[2,37],72:[2,37],75:[2,37],80:[2,37],81:[2,37],82:[2,37],83:[2,37],84:[2,37],85:[2,37]},{23:[2,38],33:[2,38],54:[2,38],65:[2,38],68:[2,38],72:[2,38],75:[2,38],80:[2,38],81:[2,38],82:[2,38],83:[2,38],84:[2,38],85:[2,38]},{23:[2,39],33:[2,39],54:[2,39],65:[2,39],68:[2,39],72:[2,39],75:[2,39],80:[2,39],81:[2,39],82:[2,39],83:[2,39],84:[2,39],85:[2,39]},{23:[2,43],33:[2,43],54:[2,43],65:[2,43],68:[2,43],72:[2,43],75:[2,43],80:[2,43],81:[2,43],82:[2,43],83:[2,43],84:[2,43],85:[2,43],87:[1,50]},{72:[1,35],86:51},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{52:52,54:[2,82],65:[2,82],72:[2,82],80:[2,82],81:[2,82],82:[2,82],83:[2,82],84:[2,82],85:[2,82]},{25:53,38:55,39:[1,57],43:56,44:[1,58],45:54,47:[2,54]},{28:59,43:60,44:[1,58],47:[2,56]},{13:62,15:[1,20],18:[1,61]},{33:[2,86],57:63,65:[2,86],72:[2,86],80:[2,86],81:[2,86],82:[2,86],83:[2,86],84:[2,86],85:[2,86]},{33:[2,40],65:[2,40],72:[2,40],80:[2,40],81:[2,40],82:[2,40],83:[2,40],84:[2,40],85:[2,40]},{33:[2,41],65:[2,41],72:[2,41],80:[2,41],81:[2,41],82:[2,41],83:[2,41],84:[2,41],85:[2,41]},{20:64,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:65,47:[1,66]},{30:67,33:[2,58],65:[2,58],72:[2,58],75:[2,58],80:[2,58],81:[2,58],82:[2,58],83:[2,58],84:[2,58],85:[2,58]},{33:[2,64],35:68,65:[2,64],72:[2,64],75:[2,64],80:[2,64],81:[2,64],82:[2,64],83:[2,64],84:[2,64],85:[2,64]},{21:69,23:[2,50],65:[2,50],72:[2,50],80:[2,50],81:[2,50],82:[2,50],83:[2,50],84:[2,50],85:[2,50]},{33:[2,90],61:70,65:[2,90],72:[2,90],80:[2,90],81:[2,90],82:[2,90],83:[2,90],84:[2,90],85:[2,90]},{20:74,33:[2,80],50:71,63:72,64:75,65:[1,43],69:73,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{72:[1,79]},{23:[2,42],33:[2,42],54:[2,42],65:[2,42],68:[2,42],72:[2,42],75:[2,42],80:[2,42],81:[2,42],82:[2,42],83:[2,42],84:[2,42],85:[2,42],87:[1,50]},{20:74,53:80,54:[2,84],63:81,64:75,65:[1,43],69:82,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:83,47:[1,66]},{47:[2,55]},{4:84,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{47:[2,20]},{20:85,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:86,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{26:87,47:[1,66]},{47:[2,57]},{5:[2,11],14:[2,11],15:[2,11],19:[2,11],29:[2,11],34:[2,11],39:[2,11],44:[2,11],47:[2,11],48:[2,11],51:[2,11],55:[2,11],60:[2,11]},{15:[2,49],18:[2,49]},{20:74,33:[2,88],58:88,63:89,64:75,65:[1,43],69:90,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{65:[2,94],66:91,68:[2,94],72:[2,94],80:[2,94],81:[2,94],82:[2,94],83:[2,94],84:[2,94],85:[2,94]},{5:[2,25],14:[2,25],15:[2,25],19:[2,25],29:[2,25],34:[2,25],39:[2,25],44:[2,25],47:[2,25],48:[2,25],51:[2,25],55:[2,25],60:[2,25]},{20:92,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,31:93,33:[2,60],63:94,64:75,65:[1,43],69:95,70:76,71:77,72:[1,78],75:[2,60],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,33:[2,66],36:96,63:97,64:75,65:[1,43],69:98,70:76,71:77,72:[1,78],75:[2,66],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,22:99,23:[2,52],63:100,64:75,65:[1,43],69:101,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,33:[2,92],62:102,63:103,64:75,65:[1,43],69:104,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,105]},{33:[2,79],65:[2,79],72:[2,79],80:[2,79],81:[2,79],82:[2,79],83:[2,79],84:[2,79],85:[2,79]},{33:[2,81]},{23:[2,27],33:[2,27],54:[2,27],65:[2,27],68:[2,27],72:[2,27],75:[2,27],80:[2,27],81:[2,27],82:[2,27],83:[2,27],84:[2,27],85:[2,27]},{23:[2,28],33:[2,28],54:[2,28],65:[2,28],68:[2,28],72:[2,28],75:[2,28],80:[2,28],81:[2,28],82:[2,28],83:[2,28],84:[2,28],85:[2,28]},{23:[2,30],33:[2,30],54:[2,30],68:[2,30],71:106,72:[1,107],75:[2,30]},{23:[2,98],33:[2,98],54:[2,98],68:[2,98],72:[2,98],75:[2,98]},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],73:[1,108],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{23:[2,44],33:[2,44],54:[2,44],65:[2,44],68:[2,44],72:[2,44],75:[2,44],80:[2,44],81:[2,44],82:[2,44],83:[2,44],84:[2,44],85:[2,44],87:[2,44]},{54:[1,109]},{54:[2,83],65:[2,83],72:[2,83],80:[2,83],81:[2,83],82:[2,83],83:[2,83],84:[2,83],85:[2,83]},{54:[2,85]},{5:[2,13],14:[2,13],15:[2,13],19:[2,13],29:[2,13],34:[2,13],39:[2,13],44:[2,13],47:[2,13],48:[2,13],51:[2,13],55:[2,13],60:[2,13]},{38:55,39:[1,57],43:56,44:[1,58],45:111,46:110,47:[2,76]},{33:[2,70],40:112,65:[2,70],72:[2,70],75:[2,70],80:[2,70],81:[2,70],82:[2,70],83:[2,70],84:[2,70],85:[2,70]},{47:[2,18]},{5:[2,14],14:[2,14],15:[2,14],19:[2,14],29:[2,14],34:[2,14],39:[2,14],44:[2,14],47:[2,14],48:[2,14],51:[2,14],55:[2,14],60:[2,14]},{33:[1,113]},{33:[2,87],65:[2,87],72:[2,87],80:[2,87],81:[2,87],82:[2,87],83:[2,87],84:[2,87],85:[2,87]},{33:[2,89]},{20:74,63:115,64:75,65:[1,43],67:114,68:[2,96],69:116,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,117]},{32:118,33:[2,62],74:119,75:[1,120]},{33:[2,59],65:[2,59],72:[2,59],75:[2,59],80:[2,59],81:[2,59],82:[2,59],83:[2,59],84:[2,59],85:[2,59]},{33:[2,61],75:[2,61]},{33:[2,68],37:121,74:122,75:[1,120]},{33:[2,65],65:[2,65],72:[2,65],75:[2,65],80:[2,65],81:[2,65],82:[2,65],83:[2,65],84:[2,65],85:[2,65]},{33:[2,67],75:[2,67]},{23:[1,123]},{23:[2,51],65:[2,51],72:[2,51],80:[2,51],81:[2,51],82:[2,51],83:[2,51],84:[2,51],85:[2,51]},{23:[2,53]},{33:[1,124]},{33:[2,91],65:[2,91],72:[2,91],80:[2,91],81:[2,91],82:[2,91],83:[2,91],84:[2,91],85:[2,91]},{33:[2,93]},{5:[2,22],14:[2,22],15:[2,22],19:[2,22],29:[2,22],34:[2,22],39:[2,22],44:[2,22],47:[2,22],48:[2,22],51:[2,22],55:[2,22],60:[2,22]},{23:[2,99],33:[2,99],54:[2,99],68:[2,99],72:[2,99],75:[2,99]},{73:[1,108]},{20:74,63:125,64:75,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,23],14:[2,23],15:[2,23],19:[2,23],29:[2,23],34:[2,23],39:[2,23],44:[2,23],47:[2,23],48:[2,23],51:[2,23],55:[2,23],60:[2,23]},{47:[2,19]},{47:[2,77]},{20:74,33:[2,72],41:126,63:127,64:75,65:[1,43],69:128,70:76,71:77,72:[1,78],75:[2,72],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,24],14:[2,24],15:[2,24],19:[2,24],29:[2,24],34:[2,24],39:[2,24],44:[2,24],47:[2,24],48:[2,24],51:[2,24],55:[2,24],60:[2,24]},{68:[1,129]},{65:[2,95],68:[2,95],72:[2,95],80:[2,95],81:[2,95],82:[2,95],83:[2,95],84:[2,95],85:[2,95]},{68:[2,97]},{5:[2,21],14:[2,21],15:[2,21],19:[2,21],29:[2,21],34:[2,21],39:[2,21],44:[2,21],47:[2,21],48:[2,21],51:[2,21],55:[2,21],60:[2,21]},{33:[1,130]},{33:[2,63]},{72:[1,132],76:131},{33:[1,133]},{33:[2,69]},{15:[2,12],18:[2,12]},{14:[2,26],15:[2,26],19:[2,26],29:[2,26],34:[2,26],47:[2,26],48:[2,26],51:[2,26],55:[2,26],60:[2,26]},{23:[2,31],33:[2,31],54:[2,31],68:[2,31],72:[2,31],75:[2,31]},{33:[2,74],42:134,74:135,75:[1,120]},{33:[2,71],65:[2,71],72:[2,71],75:[2,71],80:[2,71],81:[2,71],82:[2,71],83:[2,71],84:[2,71],85:[2,71]},{33:[2,73],75:[2,73]},{23:[2,29],33:[2,29],54:[2,29],65:[2,29],68:[2,29],72:[2,29],75:[2,29],80:[2,29],81:[2,29],82:[2,29],83:[2,29],84:[2,29],85:[2,29]},{14:[2,15],15:[2,15],19:[2,15],29:[2,15],34:[2,15],39:[2,15],44:[2,15],47:[2,15],48:[2,15],51:[2,15],55:[2,15],60:[2,15]},{72:[1,137],77:[1,136]},{72:[2,100],77:[2,100]},{14:[2,16],15:[2,16],19:[2,16],29:[2,16],34:[2,16],44:[2,16],47:[2,16],48:[2,16],51:[2,16],55:[2,16],60:[2,16]},{33:[1,138]},{33:[2,75]},{33:[2,32]},{72:[2,101],77:[2,101]},{14:[2,17],15:[2,17],19:[2,17],29:[2,17],34:[2,17],39:[2,17],44:[2,17],47:[2,17],48:[2,17],51:[2,17],55:[2,17],60:[2,17]}],defaultActions:{4:[2,1],54:[2,55],56:[2,20],60:[2,57],73:[2,81],82:[2,85],86:[2,18],90:[2,89],101:[2,53],104:[2,93],110:[2,19],111:[2,77],116:[2,97],119:[2,63],122:[2,69],135:[2,75],136:[2,32]},parseError:function(l,s){throw new Error(l)},parse:function(l){var s=this,i=[0],a=[null],f=[],r=this.table,t="",e=0,o=0;this.lexer.setInput(l),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,this.yy.parser=this,typeof this.lexer.yylloc>"u"&&(this.lexer.yylloc={});var p=this.lexer.yylloc;f.push(p);var v=this.lexer.options&&this.lexer.options.ranges;typeof this.yy.parseError=="function"&&(this.parseError=this.yy.parseError);function b(){var I;return I=s.lexer.lex()||1,typeof I!="number"&&(I=s.symbols_[I]||I),I}for(var S,g,y,w,k={},P,x,L,C;;){if(g=i[i.length-1],this.defaultActions[g]?y=this.defaultActions[g]:((S===null||typeof S>"u")&&(S=b()),y=r[g]&&r[g][S]),typeof y>"u"||!y.length||!y[0]){var E="";{C=[];for(P in r[g])this.terminals_[P]&&P>2&&C.push("'"+this.terminals_[P]+"'");this.lexer.showPosition?E="Parse error on line "+(e+1)+`:
`+this.lexer.showPosition()+`
Expecting `+C.join(", ")+", got '"+(this.terminals_[S]||S)+"'":E="Parse error on line "+(e+1)+": Unexpected "+(S==1?"end of input":"'"+(this.terminals_[S]||S)+"'"),this.parseError(E,{text:this.lexer.match,token:this.terminals_[S]||S,line:this.lexer.yylineno,loc:p,expected:C})}}if(y[0]instanceof Array&&y.length>1)throw new Error("Parse Error: multiple actions possible at state: "+g+", token: "+S);switch(y[0]){case 1:i.push(S),a.push(this.lexer.yytext),f.push(this.lexer.yylloc),i.push(y[1]),S=null,o=this.lexer.yyleng,t=this.lexer.yytext,e=this.lexer.yylineno,p=this.lexer.yylloc;break;case 2:if(x=this.productions_[y[1]][1],k.$=a[a.length-x],k._$={first_line:f[f.length-(x||1)].first_line,last_line:f[f.length-1].last_line,first_column:f[f.length-(x||1)].first_column,last_column:f[f.length-1].last_column},v&&(k._$.range=[f[f.length-(x||1)].range[0],f[f.length-1].range[1]]),w=this.performAction.call(k,t,o,e,this.yy,y[1],a,f),typeof w<"u")return w;x&&(i=i.slice(0,-1*x*2),a=a.slice(0,-1*x),f=f.slice(0,-1*x)),i.push(this.productions_[y[1]][0]),a.push(k.$),f.push(k._$),L=r[i[i.length-2]][i[i.length-1]],i.push(L);break;case 3:return!0}}return!0}},m=(function(){var d={EOF:1,parseError:function(s,i){if(this.yy.parser)this.yy.parser.parseError(s,i);else throw new Error(s)},setInput:function(s){return this._input=s,this._more=this._less=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var s=this._input[0];this.yytext+=s,this.yyleng++,this.offset++,this.match+=s,this.matched+=s;var i=s.match(/(?:\r\n?|\n).*/g);return i?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),s},unput:function(s){var i=s.length,a=s.split(/(?:\r\n?|\n)/g);this._input=s+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-i-1),this.offset-=i;var f=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),a.length-1&&(this.yylineno-=a.length-1);var r=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:a?(a.length===f.length?this.yylloc.first_column:0)+f[f.length-a.length].length-a[0].length:this.yylloc.first_column-i},this.options.ranges&&(this.yylloc.range=[r[0],r[0]+this.yyleng-i]),this},more:function(){return this._more=!0,this},less:function(s){this.unput(this.match.slice(s))},pastInput:function(){var s=this.matched.substr(0,this.matched.length-this.match.length);return(s.length>20?"...":"")+s.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var s=this.match;return s.length<20&&(s+=this._input.substr(0,20-s.length)),(s.substr(0,20)+(s.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var s=this.pastInput(),i=new Array(s.length+1).join("-");return s+this.upcomingInput()+`
`+i+"^"},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var s,i,a,f,r;this._more||(this.yytext="",this.match="");for(var t=this._currentRules(),e=0;e<t.length&&(a=this._input.match(this.rules[t[e]]),!(a&&(!i||a[0].length>i[0].length)&&(i=a,f=e,!this.options.flex)));e++);return i?(r=i[0].match(/(?:\r\n?|\n).*/g),r&&(this.yylineno+=r.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:r?r[r.length-1].length-r[r.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+i[0].length},this.yytext+=i[0],this.match+=i[0],this.matches=i,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._input=this._input.slice(i[0].length),this.matched+=i[0],s=this.performAction.call(this,this.yy,this,t[f],this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),s||void 0):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var s=this.next();return typeof s<"u"?s:this.lex()},begin:function(s){this.conditionStack.push(s)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(s){this.begin(s)}};return d.options={},d.performAction=function(s,i,a,f){function r(t,e){return i.yytext=i.yytext.substring(t,i.yyleng-e+t)}switch(a){case 0:if(i.yytext.slice(-2)==="\\\\"?(r(0,1),this.begin("mu")):i.yytext.slice(-1)==="\\"?(r(0,1),this.begin("emu")):this.begin("mu"),i.yytext)return 15;break;case 1:return 15;case 2:return this.popState(),15;case 3:return this.begin("raw"),15;case 4:return this.popState(),this.conditionStack[this.conditionStack.length-1]==="raw"?15:(r(5,9),"END_RAW_BLOCK");case 5:return 15;case 6:return this.popState(),14;case 7:return 65;case 8:return 68;case 9:return 19;case 10:return this.popState(),this.begin("raw"),23;case 11:return 55;case 12:return 60;case 13:return 29;case 14:return 47;case 15:return this.popState(),44;case 16:return this.popState(),44;case 17:return 34;case 18:return 39;case 19:return 51;case 20:return 48;case 21:this.unput(i.yytext),this.popState(),this.begin("com");break;case 22:return this.popState(),14;case 23:return 48;case 24:return 73;case 25:return 72;case 26:return 72;case 27:return 87;case 28:break;case 29:return this.popState(),54;case 30:return this.popState(),33;case 31:return i.yytext=r(1,2).replace(/\\"/g,'"'),80;case 32:return i.yytext=r(1,2).replace(/\\'/g,"'"),80;case 33:return 85;case 34:return 82;case 35:return 82;case 36:return 83;case 37:return 84;case 38:return 81;case 39:return 75;case 40:return 77;case 41:return 72;case 42:return i.yytext=i.yytext.replace(/\\([\\\]])/g,"$1"),72;case 43:return"INVALID";case 44:return 5}},d.rules=[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:\{\{\{\{(?=[^/]))/,/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,/^(?:[^\x00]+?(?=(\{\{\{\{)))/,/^(?:[\s\S]*?--(~)?\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{\{\{)/,/^(?:\}\}\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#>)/,/^(?:\{\{(~)?#\*?)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^\s*(~)?\}\})/,/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{(~)?!--)/,/^(?:\{\{(~)?![\s\S]*?\}\})/,/^(?:\{\{(~)?\*?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)|])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:undefined(?=([~}\s)])))/,/^(?:null(?=([~}\s)])))/,/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,/^(?:as\s+\|)/,/^(?:\|)/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/,/^(?:\[(\\\]|[^\]])*\])/,/^(?:.)/,/^(?:$)/],d.conditions={mu:{rules:[7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44],inclusive:!1},emu:{rules:[2],inclusive:!1},com:{rules:[6],inclusive:!1},raw:{rules:[3,4,5],inclusive:!1},INITIAL:{rules:[0,1,44],inclusive:!0}},d})();h.lexer=m;function c(){this.yy={}}return c.prototype=h,h.Parser=c,new c})();n.default=u,_.exports=n.default})(Le,Le.exports)),Le.exports}var Ee={exports:{}},xe={exports:{}},gt;function Jt(){return gt||(gt=1,(function(_,n){n.__esModule=!0;function u(i){return i&&i.__esModule?i:{default:i}}var h=V(),m=u(h);function c(){this.parents=[]}c.prototype={constructor:c,mutating:!1,acceptKey:function(a,f){var r=this.accept(a[f]);if(this.mutating){if(r&&!c.prototype[r.type])throw new m.default('Unexpected node type "'+r.type+'" found when accepting '+f+" on "+a.type);a[f]=r}},acceptRequired:function(a,f){if(this.acceptKey(a,f),!a[f])throw new m.default(a.type+" requires "+f)},acceptArray:function(a){for(var f=0,r=a.length;f<r;f++)this.acceptKey(a,f),a[f]||(a.splice(f,1),f--,r--)},accept:function(a){if(a){if(!this[a.type])throw new m.default("Unknown type: "+a.type,a);this.current&&this.parents.unshift(this.current),this.current=a;var f=this[a.type](a);if(this.current=this.parents.shift(),!this.mutating||f)return f;if(f!==!1)return a}},Program:function(a){this.acceptArray(a.body)},MustacheStatement:d,Decorator:d,BlockStatement:l,DecoratorBlock:l,PartialStatement:s,PartialBlockStatement:function(a){s.call(this,a),this.acceptKey(a,"program")},ContentStatement:function(){},CommentStatement:function(){},SubExpression:d,PathExpression:function(){},StringLiteral:function(){},NumberLiteral:function(){},BooleanLiteral:function(){},UndefinedLiteral:function(){},NullLiteral:function(){},Hash:function(a){this.acceptArray(a.pairs)},HashPair:function(a){this.acceptRequired(a,"value")}};function d(i){this.acceptRequired(i,"path"),this.acceptArray(i.params),this.acceptKey(i,"hash")}function l(i){d.call(this,i),this.acceptKey(i,"program"),this.acceptKey(i,"inverse")}function s(i){this.acceptRequired(i,"name"),this.acceptArray(i.params),this.acceptKey(i,"hash")}n.default=c,_.exports=n.default})(xe,xe.exports)),xe.exports}var _t;function dr(){return _t||(_t=1,(function(_,n){n.__esModule=!0;function u(a){return a&&a.__esModule?a:{default:a}}var h=Jt(),m=u(h);function c(){var a=arguments.length<=0||arguments[0]===void 0?{}:arguments[0];this.options=a}c.prototype=new m.default,c.prototype.Program=function(a){var f=!this.options.ignoreStandalone,r=!this.isRootSeen;this.isRootSeen=!0;for(var t=a.body,e=0,o=t.length;e<o;e++){var p=t[e],v=this.accept(p);if(v){var b=d(t,e,r),S=l(t,e,r),g=v.openStandalone&&b,y=v.closeStandalone&&S,w=v.inlineStandalone&&b&&S;v.close&&s(t,e,!0),v.open&&i(t,e,!0),f&&w&&(s(t,e),i(t,e)&&p.type==="PartialStatement"&&(p.indent=/([ \t]+$)/.exec(t[e-1].original)[1])),f&&g&&(s((p.program||p.inverse).body),i(t,e)),f&&y&&(s(t,e),i((p.inverse||p.program).body))}}return a},c.prototype.BlockStatement=c.prototype.DecoratorBlock=c.prototype.PartialBlockStatement=function(a){this.accept(a.program),this.accept(a.inverse);var f=a.program||a.inverse,r=a.program&&a.inverse,t=r,e=r;if(r&&r.chained)for(t=r.body[0].program;e.chained;)e=e.body[e.body.length-1].program;var o={open:a.openStrip.open,close:a.closeStrip.close,openStandalone:l(f.body),closeStandalone:d((t||f).body)};if(a.openStrip.close&&s(f.body,null,!0),r){var p=a.inverseStrip;p.open&&i(f.body,null,!0),p.close&&s(t.body,null,!0),a.closeStrip.open&&i(e.body,null,!0),!this.options.ignoreStandalone&&d(f.body)&&l(t.body)&&(i(f.body),s(t.body))}else a.closeStrip.open&&i(f.body,null,!0);return o},c.prototype.Decorator=c.prototype.MustacheStatement=function(a){return a.strip},c.prototype.PartialStatement=c.prototype.CommentStatement=function(a){var f=a.strip||{};return{inlineStandalone:!0,open:f.open,close:f.close}};function d(a,f,r){f===void 0&&(f=a.length);var t=a[f-1],e=a[f-2];if(!t)return r;if(t.type==="ContentStatement")return(e||!r?/\r?\n\s*?$/:/(^|\r?\n)\s*?$/).test(t.original)}function l(a,f,r){f===void 0&&(f=-1);var t=a[f+1],e=a[f+2];if(!t)return r;if(t.type==="ContentStatement")return(e||!r?/^\s*?\r?\n/:/^\s*?(\r?\n|$)/).test(t.original)}function s(a,f,r){var t=a[f==null?0:f+1];if(!(!t||t.type!=="ContentStatement"||!r&&t.rightStripped)){var e=t.value;t.value=t.value.replace(r?/^\s+/:/^[ \t]*\r?\n?/,""),t.rightStripped=t.value!==e}}function i(a,f,r){var t=a[f==null?a.length-1:f-1];if(!(!t||t.type!=="ContentStatement"||!r&&t.leftStripped)){var e=t.value;return t.value=t.value.replace(r?/\s+$/:/[ \t]+$/,""),t.leftStripped=t.value!==e,t.leftStripped}}n.default=c,_.exports=n.default})(Ee,Ee.exports)),Ee.exports}var U={},vt;function fr(){if(vt)return U;vt=1,U.__esModule=!0,U.SourceLocation=m,U.id=c,U.stripFlags=d,U.stripComment=l,U.preparePath=s,U.prepareMustache=i,U.prepareRawBlock=a,U.prepareBlock=f,U.prepareProgram=r,U.preparePartialBlock=t;function _(e){return e&&e.__esModule?e:{default:e}}var n=V(),u=_(n);function h(e,o){if(o=o.path?o.path.original:o,e.path.original!==o){var p={loc:e.path.loc};throw new u.default(e.path.original+" doesn't match "+o,p)}}function m(e,o){this.source=e,this.start={line:o.first_line,column:o.first_column},this.end={line:o.last_line,column:o.last_column}}function c(e){return/^\[.*\]$/.test(e)?e.substring(1,e.length-1):e}function d(e,o){return{open:e.charAt(2)==="~",close:o.charAt(o.length-3)==="~"}}function l(e){return e.replace(/^\{\{~?!-?-?/,"").replace(/-?-?~?\}\}$/,"")}function s(e,o,p){p=this.locInfo(p);for(var v=e?"@":"",b=[],S=0,g=0,y=o.length;g<y;g++){var w=o[g].part,k=o[g].original!==w;if(v+=(o[g].separator||"")+w,!k&&(w===".."||w==="."||w==="this")){if(b.length>0)throw new u.default("Invalid path: "+v,{loc:p});w===".."&&S++}else b.push(w)}return{type:"PathExpression",data:e,depth:S,parts:b,original:v,loc:p}}function i(e,o,p,v,b,S){var g=v.charAt(3)||v.charAt(2),y=g!=="{"&&g!=="&",w=/\*/.test(v);return{type:w?"Decorator":"MustacheStatement",path:e,params:o,hash:p,escaped:y,strip:b,loc:this.locInfo(S)}}function a(e,o,p,v){h(e,p),v=this.locInfo(v);var b={type:"Program",body:o,strip:{},loc:v};return{type:"BlockStatement",path:e.path,params:e.params,hash:e.hash,program:b,openStrip:{},inverseStrip:{},closeStrip:{},loc:v}}function f(e,o,p,v,b,S){v&&v.path&&h(e,v);var g=/\*/.test(e.open);o.blockParams=e.blockParams;var y=void 0,w=void 0;if(p){if(g)throw new u.default("Unexpected inverse block on decorator",p);p.chain&&(p.program.body[0].closeStrip=v.strip),w=p.strip,y=p.program}return b&&(b=y,y=o,o=b),{type:g?"DecoratorBlock":"BlockStatement",path:e.path,params:e.params,hash:e.hash,program:o,inverse:y,openStrip:e.strip,inverseStrip:w,closeStrip:v&&v.strip,loc:this.locInfo(S)}}function r(e,o){if(!o&&e.length){var p=e[0].loc,v=e[e.length-1].loc;p&&v&&(o={source:p.source,start:{line:p.start.line,column:p.start.column},end:{line:v.end.line,column:v.end.column}})}return{type:"Program",body:e,strip:{},loc:o}}function t(e,o,p,v){return h(e,p),{type:"PartialBlockStatement",name:e.path,params:e.params,hash:e.hash,program:o,openStrip:e.strip,closeStrip:p&&p.strip,loc:this.locInfo(v)}}return U}var bt;function mr(){if(bt)return Y;bt=1,Y.__esModule=!0,Y.parseWithoutProcessing=a,Y.parse=f;function _(r){if(r&&r.__esModule)return r;var t={};if(r!=null)for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e]);return t.default=r,t}function n(r){return r&&r.__esModule?r:{default:r}}var u=pr(),h=n(u),m=dr(),c=n(m),d=fr(),l=_(d),s=T();Y.parser=h.default;var i={};s.extend(i,l);function a(r,t){if(r.type==="Program")return r;h.default.yy=i,i.locInfo=function(o){return new i.SourceLocation(t&&t.srcName,o)};var e=h.default.parse(r);return e}function f(r,t){var e=a(r,t),o=new c.default(t);return o.accept(e)}return Y}var j={},yt;function gr(){if(yt)return j;yt=1,j.__esModule=!0,j.Compiler=l,j.precompile=s,j.compile=i;function _(r){return r&&r.__esModule?r:{default:r}}var n=V(),u=_(n),h=T(),m=Kt(),c=_(m),d=[].slice;function l(){}l.prototype={compiler:l,equals:function(t){var e=this.opcodes.length;if(t.opcodes.length!==e)return!1;for(var o=0;o<e;o++){var p=this.opcodes[o],v=t.opcodes[o];if(p.opcode!==v.opcode||!a(p.args,v.args))return!1}e=this.children.length;for(var o=0;o<e;o++)if(!this.children[o].equals(t.children[o]))return!1;return!0},guid:0,compile:function(t,e){return this.sourceNode=[],this.opcodes=[],this.children=[],this.options=e,this.stringParams=e.stringParams,this.trackIds=e.trackIds,e.blockParams=e.blockParams||[],e.knownHelpers=h.extend(Object.create(null),{helperMissing:!0,blockHelperMissing:!0,each:!0,if:!0,unless:!0,with:!0,log:!0,lookup:!0},e.knownHelpers),this.accept(t)},compileProgram:function(t){var e=new this.compiler,o=e.compile(t,this.options),p=this.guid++;return this.usePartial=this.usePartial||o.usePartial,this.children[p]=o,this.useDepths=this.useDepths||o.useDepths,p},accept:function(t){if(!this[t.type])throw new u.default("Unknown type: "+t.type,t);this.sourceNode.unshift(t);var e=this[t.type](t);return this.sourceNode.shift(),e},Program:function(t){this.options.blockParams.unshift(t.blockParams);for(var e=t.body,o=e.length,p=0;p<o;p++)this.accept(e[p]);return this.options.blockParams.shift(),this.isSimple=o===1,this.blockParams=t.blockParams?t.blockParams.length:0,this},BlockStatement:function(t){f(t);var e=t.program,o=t.inverse;e=e&&this.compileProgram(e),o=o&&this.compileProgram(o);var p=this.classifySexpr(t);p==="helper"?this.helperSexpr(t,e,o):p==="simple"?(this.simpleSexpr(t),this.opcode("pushProgram",e),this.opcode("pushProgram",o),this.opcode("emptyHash"),this.opcode("blockValue",t.path.original)):(this.ambiguousSexpr(t,e,o),this.opcode("pushProgram",e),this.opcode("pushProgram",o),this.opcode("emptyHash"),this.opcode("ambiguousBlockValue")),this.opcode("append")},DecoratorBlock:function(t){var e=t.program&&this.compileProgram(t.program),o=this.setupFullMustacheParams(t,e,void 0),p=t.path;this.useDecorators=!0,this.opcode("registerDecorator",o.length,p.original)},PartialStatement:function(t){this.usePartial=!0;var e=t.program;e&&(e=this.compileProgram(t.program));var o=t.params;if(o.length>1)throw new u.default("Unsupported number of partial arguments: "+o.length,t);o.length||(this.options.explicitPartialContext?this.opcode("pushLiteral","undefined"):o.push({type:"PathExpression",parts:[],depth:0}));var p=t.name.original,v=t.name.type==="SubExpression";v&&this.accept(t.name),this.setupFullMustacheParams(t,e,void 0,!0);var b=t.indent||"";this.options.preventIndent&&b&&(this.opcode("appendContent",b),b=""),this.opcode("invokePartial",v,p,b),this.opcode("append")},PartialBlockStatement:function(t){this.PartialStatement(t)},MustacheStatement:function(t){this.SubExpression(t),t.escaped&&!this.options.noEscape?this.opcode("appendEscaped"):this.opcode("append")},Decorator:function(t){this.DecoratorBlock(t)},ContentStatement:function(t){t.value&&this.opcode("appendContent",t.value)},CommentStatement:function(){},SubExpression:function(t){f(t);var e=this.classifySexpr(t);e==="simple"?this.simpleSexpr(t):e==="helper"?this.helperSexpr(t):this.ambiguousSexpr(t)},ambiguousSexpr:function(t,e,o){var p=t.path,v=p.parts[0],b=e!=null||o!=null;this.opcode("getContext",p.depth),this.opcode("pushProgram",e),this.opcode("pushProgram",o),p.strict=!0,this.accept(p),this.opcode("invokeAmbiguous",v,b)},simpleSexpr:function(t){var e=t.path;e.strict=!0,this.accept(e),this.opcode("resolvePossibleLambda")},helperSexpr:function(t,e,o){var p=this.setupFullMustacheParams(t,e,o),v=t.path,b=v.parts[0];if(this.options.knownHelpers[b])this.opcode("invokeKnownHelper",p.length,b);else{if(this.options.knownHelpersOnly)throw new u.default("You specified knownHelpersOnly, but used the unknown helper "+b,t);v.strict=!0,v.falsy=!0,this.accept(v),this.opcode("invokeHelper",p.length,v.original,c.default.helpers.simpleId(v))}},PathExpression:function(t){this.addDepth(t.depth),this.opcode("getContext",t.depth);var e=t.parts[0],o=c.default.helpers.scopedId(t),p=!t.depth&&!o&&this.blockParamIndex(e);p?this.opcode("lookupBlockParam",p,t.parts):e?t.data?(this.options.data=!0,this.opcode("lookupData",t.depth,t.parts,t.strict)):this.opcode("lookupOnContext",t.parts,t.falsy,t.strict,o):this.opcode("pushContext")},StringLiteral:function(t){this.opcode("pushString",t.value)},NumberLiteral:function(t){this.opcode("pushLiteral",t.value)},BooleanLiteral:function(t){this.opcode("pushLiteral",t.value)},UndefinedLiteral:function(){this.opcode("pushLiteral","undefined")},NullLiteral:function(){this.opcode("pushLiteral","null")},Hash:function(t){var e=t.pairs,o=0,p=e.length;for(this.opcode("pushHash");o<p;o++)this.pushParam(e[o].value);for(;o--;)this.opcode("assignToHash",e[o].key);this.opcode("popHash")},opcode:function(t){this.opcodes.push({opcode:t,args:d.call(arguments,1),loc:this.sourceNode[0].loc})},addDepth:function(t){t&&(this.useDepths=!0)},classifySexpr:function(t){var e=c.default.helpers.simpleId(t.path),o=e&&!!this.blockParamIndex(t.path.parts[0]),p=!o&&c.default.helpers.helperExpression(t),v=!o&&(p||e);if(v&&!p){var b=t.path.parts[0],S=this.options;S.knownHelpers[b]?p=!0:S.knownHelpersOnly&&(v=!1)}return p?"helper":v?"ambiguous":"simple"},pushParams:function(t){for(var e=0,o=t.length;e<o;e++)this.pushParam(t[e])},pushParam:function(t){var e=t.value!=null?t.value:t.original||"";if(this.stringParams)e.replace&&(e=e.replace(/^(\.?\.\/)*/g,"").replace(/\//g,".")),t.depth&&this.addDepth(t.depth),this.opcode("getContext",t.depth||0),this.opcode("pushStringParam",e,t.type),t.type==="SubExpression"&&this.accept(t);else{if(this.trackIds){var o=void 0;if(t.parts&&!c.default.helpers.scopedId(t)&&!t.depth&&(o=this.blockParamIndex(t.parts[0])),o){var p=t.parts.slice(1).join(".");this.opcode("pushId","BlockParam",o,p)}else e=t.original||e,e.replace&&(e=e.replace(/^this(?:\.|$)/,"").replace(/^\.\//,"").replace(/^\.$/,"")),this.opcode("pushId",t.type,e)}this.accept(t)}},setupFullMustacheParams:function(t,e,o,p){var v=t.params;return this.pushParams(v),this.opcode("pushProgram",e),this.opcode("pushProgram",o),t.hash?this.accept(t.hash):this.opcode("emptyHash",p),v},blockParamIndex:function(t){for(var e=0,o=this.options.blockParams.length;e<o;e++){var p=this.options.blockParams[e],v=p&&h.indexOf(p,t);if(p&&v>=0)return[e,v]}}};function s(r,t,e){if(r==null||typeof r!="string"&&r.type!=="Program")throw new u.default("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+r);t=t||{},"data"in t||(t.data=!0),t.compat&&(t.useDepths=!0);var o=e.parse(r,t),p=new e.Compiler().compile(o,t);return new e.JavaScriptCompiler().compile(p,t)}function i(r,t,e){if(t===void 0&&(t={}),r==null||typeof r!="string"&&r.type!=="Program")throw new u.default("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+r);t=h.extend({},t),"data"in t||(t.data=!0),t.compat&&(t.useDepths=!0);var o=void 0;function p(){var b=e.parse(r,t),S=new e.Compiler().compile(b,t),g=new e.JavaScriptCompiler().compile(S,t,void 0,!0);return e.template(g)}function v(b,S){return o||(o=p()),o.call(this,b,S)}return v._setup=function(b){return o||(o=p()),o._setup(b)},v._child=function(b,S,g,y){return o||(o=p()),o._child(b,S,g,y)},v}function a(r,t){if(r===t)return!0;if(h.isArray(r)&&h.isArray(t)&&r.length===t.length){for(var e=0;e<r.length;e++)if(!a(r[e],t[e]))return!1;return!0}}function f(r){if(!r.path.parts){var t=r.path;r.path={type:"PathExpression",data:!1,depth:0,parts:[t.original+""],original:t.original+"",loc:t.loc}}}return j}var Me={exports:{}},Ie={exports:{}},te={},Re={},Ae={},Oe={},St;function _r(){if(St)return Oe;St=1;var _="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");return Oe.encode=function(n){if(0<=n&&n<_.length)return _[n];throw new TypeError("Must be between 0 and 63: "+n)},Oe.decode=function(n){var u=65,h=90,m=97,c=122,d=48,l=57,s=43,i=47,a=26,f=52;return u<=n&&n<=h?n-u:m<=n&&n<=c?n-m+a:d<=n&&n<=l?n-d+f:n==s?62:n==i?63:-1},Oe}var wt;function zt(){if(wt)return Ae;wt=1;var _=_r(),n=5,u=1<<n,h=u-1,m=u;function c(l){return l<0?(-l<<1)+1:(l<<1)+0}function d(l){var s=(l&1)===1,i=l>>1;return s?-i:i}return Ae.encode=function(s){var i="",a,f=c(s);do a=f&h,f>>>=n,f>0&&(a|=m),i+=_.encode(a);while(f>0);return i},Ae.decode=function(s,i,a){var f=s.length,r=0,t=0,e,o;do{if(i>=f)throw new Error("Expected more digits in base 64 VLQ value.");if(o=_.decode(s.charCodeAt(i++)),o===-1)throw new Error("Invalid base64 digit: "+s.charAt(i-1));e=!!(o&m),o&=h,r=r+(o<<t),t+=n}while(e);a.value=d(r),a.rest=i},Ae}var qe={},kt;function ie(){return kt||(kt=1,(function(_){function n(g,y,w){if(y in g)return g[y];if(arguments.length===3)return w;throw new Error('"'+y+'" is a required argument.')}_.getArg=n;var u=/^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/,h=/^data:.+\,.+$/;function m(g){var y=g.match(u);return y?{scheme:y[1],auth:y[2],host:y[3],port:y[4],path:y[5]}:null}_.urlParse=m;function c(g){var y="";return g.scheme&&(y+=g.scheme+":"),y+="//",g.auth&&(y+=g.auth+"@"),g.host&&(y+=g.host),g.port&&(y+=":"+g.port),g.path&&(y+=g.path),y}_.urlGenerate=c;function d(g){var y=g,w=m(g);if(w){if(!w.path)return g;y=w.path}for(var k=_.isAbsolute(y),P=y.split(/\/+/),x,L=0,C=P.length-1;C>=0;C--)x=P[C],x==="."?P.splice(C,1):x===".."?L++:L>0&&(x===""?(P.splice(C+1,L),L=0):(P.splice(C,2),L--));return y=P.join("/"),y===""&&(y=k?"/":"."),w?(w.path=y,c(w)):y}_.normalize=d;function l(g,y){g===""&&(g="."),y===""&&(y=".");var w=m(y),k=m(g);if(k&&(g=k.path||"/"),w&&!w.scheme)return k&&(w.scheme=k.scheme),c(w);if(w||y.match(h))return y;if(k&&!k.host&&!k.path)return k.host=y,c(k);var P=y.charAt(0)==="/"?y:d(g.replace(/\/+$/,"")+"/"+y);return k?(k.path=P,c(k)):P}_.join=l,_.isAbsolute=function(g){return g.charAt(0)==="/"||u.test(g)};function s(g,y){g===""&&(g="."),g=g.replace(/\/$/,"");for(var w=0;y.indexOf(g+"/")!==0;){var k=g.lastIndexOf("/");if(k<0||(g=g.slice(0,k),g.match(/^([^\/]+:\/)?\/*$/)))return y;++w}return Array(w+1).join("../")+y.substr(g.length+1)}_.relative=s;var i=(function(){var g=Object.create(null);return!("__proto__"in g)})();function a(g){return g}function f(g){return t(g)?"$"+g:g}_.toSetString=i?a:f;function r(g){return t(g)?g.slice(1):g}_.fromSetString=i?a:r;function t(g){if(!g)return!1;var y=g.length;if(y<9||g.charCodeAt(y-1)!==95||g.charCodeAt(y-2)!==95||g.charCodeAt(y-3)!==111||g.charCodeAt(y-4)!==116||g.charCodeAt(y-5)!==111||g.charCodeAt(y-6)!==114||g.charCodeAt(y-7)!==112||g.charCodeAt(y-8)!==95||g.charCodeAt(y-9)!==95)return!1;for(var w=y-10;w>=0;w--)if(g.charCodeAt(w)!==36)return!1;return!0}function e(g,y,w){var k=p(g.source,y.source);return k!==0||(k=g.originalLine-y.originalLine,k!==0)||(k=g.originalColumn-y.originalColumn,k!==0||w)||(k=g.generatedColumn-y.generatedColumn,k!==0)||(k=g.generatedLine-y.generatedLine,k!==0)?k:p(g.name,y.name)}_.compareByOriginalPositions=e;function o(g,y,w){var k=g.generatedLine-y.generatedLine;return k!==0||(k=g.generatedColumn-y.generatedColumn,k!==0||w)||(k=p(g.source,y.source),k!==0)||(k=g.originalLine-y.originalLine,k!==0)||(k=g.originalColumn-y.originalColumn,k!==0)?k:p(g.name,y.name)}_.compareByGeneratedPositionsDeflated=o;function p(g,y){return g===y?0:g===null?1:y===null?-1:g>y?1:-1}function v(g,y){var w=g.generatedLine-y.generatedLine;return w!==0||(w=g.generatedColumn-y.generatedColumn,w!==0)||(w=p(g.source,y.source),w!==0)||(w=g.originalLine-y.originalLine,w!==0)||(w=g.originalColumn-y.originalColumn,w!==0)?w:p(g.name,y.name)}_.compareByGeneratedPositionsInflated=v;function b(g){return JSON.parse(g.replace(/^\)]}'[^\n]*\n/,""))}_.parseSourceMapInput=b;function S(g,y,w){if(y=y||"",g&&(g[g.length-1]!=="/"&&y[0]!=="/"&&(g+="/"),y=g+y),w){var k=m(w);if(!k)throw new Error("sourceMapURL could not be parsed");if(k.path){var P=k.path.lastIndexOf("/");P>=0&&(k.path=k.path.substring(0,P+1))}y=l(c(k),y)}return d(y)}_.computeSourceURL=S})(qe)),qe}var Be={},Ct;function Qt(){if(Ct)return Be;Ct=1;var _=ie(),n=Object.prototype.hasOwnProperty,u=typeof Map<"u";function h(){this._array=[],this._set=u?new Map:Object.create(null)}return h.fromArray=function(c,d){for(var l=new h,s=0,i=c.length;s<i;s++)l.add(c[s],d);return l},h.prototype.size=function(){return u?this._set.size:Object.getOwnPropertyNames(this._set).length},h.prototype.add=function(c,d){var l=u?c:_.toSetString(c),s=u?this.has(c):n.call(this._set,l),i=this._array.length;(!s||d)&&this._array.push(c),s||(u?this._set.set(c,i):this._set[l]=i)},h.prototype.has=function(c){if(u)return this._set.has(c);var d=_.toSetString(c);return n.call(this._set,d)},h.prototype.indexOf=function(c){if(u){var d=this._set.get(c);if(d>=0)return d}else{var l=_.toSetString(c);if(n.call(this._set,l))return this._set[l]}throw new Error('"'+c+'" is not in the set.')},h.prototype.at=function(c){if(c>=0&&c<this._array.length)return this._array[c];throw new Error("No element indexed by "+c)},h.prototype.toArray=function(){return this._array.slice()},Be.ArraySet=h,Be}var Te={},Pt;function vr(){if(Pt)return Te;Pt=1;var _=ie();function n(h,m){var c=h.generatedLine,d=m.generatedLine,l=h.generatedColumn,s=m.generatedColumn;return d>c||d==c&&s>=l||_.compareByGeneratedPositionsInflated(h,m)<=0}function u(){this._array=[],this._sorted=!0,this._last={generatedLine:-1,generatedColumn:0}}return u.prototype.unsortedForEach=function(m,c){this._array.forEach(m,c)},u.prototype.add=function(m){n(this._last,m)?(this._last=m,this._array.push(m)):(this._sorted=!1,this._array.push(m))},u.prototype.toArray=function(){return this._sorted||(this._array.sort(_.compareByGeneratedPositionsInflated),this._sorted=!0),this._array},Te.MappingList=u,Te}var Lt;function Zt(){if(Lt)return Re;Lt=1;var _=zt(),n=ie(),u=Qt().ArraySet,h=vr().MappingList;function m(c){c||(c={}),this._file=n.getArg(c,"file",null),this._sourceRoot=n.getArg(c,"sourceRoot",null),this._skipValidation=n.getArg(c,"skipValidation",!1),this._sources=new u,this._names=new u,this._mappings=new h,this._sourcesContents=null}return m.prototype._version=3,m.fromSourceMap=function(d){var l=d.sourceRoot,s=new m({file:d.file,sourceRoot:l});return d.eachMapping(function(i){var a={generated:{line:i.generatedLine,column:i.generatedColumn}};i.source!=null&&(a.source=i.source,l!=null&&(a.source=n.relative(l,a.source)),a.original={line:i.originalLine,column:i.originalColumn},i.name!=null&&(a.name=i.name)),s.addMapping(a)}),d.sources.forEach(function(i){var a=i;l!==null&&(a=n.relative(l,i)),s._sources.has(a)||s._sources.add(a);var f=d.sourceContentFor(i);f!=null&&s.setSourceContent(i,f)}),s},m.prototype.addMapping=function(d){var l=n.getArg(d,"generated"),s=n.getArg(d,"original",null),i=n.getArg(d,"source",null),a=n.getArg(d,"name",null);this._skipValidation||this._validateMapping(l,s,i,a),i!=null&&(i=String(i),this._sources.has(i)||this._sources.add(i)),a!=null&&(a=String(a),this._names.has(a)||this._names.add(a)),this._mappings.add({generatedLine:l.line,generatedColumn:l.column,originalLine:s!=null&&s.line,originalColumn:s!=null&&s.column,source:i,name:a})},m.prototype.setSourceContent=function(d,l){var s=d;this._sourceRoot!=null&&(s=n.relative(this._sourceRoot,s)),l!=null?(this._sourcesContents||(this._sourcesContents=Object.create(null)),this._sourcesContents[n.toSetString(s)]=l):this._sourcesContents&&(delete this._sourcesContents[n.toSetString(s)],Object.keys(this._sourcesContents).length===0&&(this._sourcesContents=null))},m.prototype.applySourceMap=function(d,l,s){var i=l;if(l==null){if(d.file==null)throw new Error(`SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`);i=d.file}var a=this._sourceRoot;a!=null&&(i=n.relative(a,i));var f=new u,r=new u;this._mappings.unsortedForEach(function(t){if(t.source===i&&t.originalLine!=null){var e=d.originalPositionFor({line:t.originalLine,column:t.originalColumn});e.source!=null&&(t.source=e.source,s!=null&&(t.source=n.join(s,t.source)),a!=null&&(t.source=n.relative(a,t.source)),t.originalLine=e.line,t.originalColumn=e.column,e.name!=null&&(t.name=e.name))}var o=t.source;o!=null&&!f.has(o)&&f.add(o);var p=t.name;p!=null&&!r.has(p)&&r.add(p)},this),this._sources=f,this._names=r,d.sources.forEach(function(t){var e=d.sourceContentFor(t);e!=null&&(s!=null&&(t=n.join(s,t)),a!=null&&(t=n.relative(a,t)),this.setSourceContent(t,e))},this)},m.prototype._validateMapping=function(d,l,s,i){if(l&&typeof l.line!="number"&&typeof l.column!="number")throw new Error("original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.");if(!(d&&"line"in d&&"column"in d&&d.line>0&&d.column>=0&&!l&&!s&&!i)){if(d&&"line"in d&&"column"in d&&l&&"line"in l&&"column"in l&&d.line>0&&d.column>=0&&l.line>0&&l.column>=0&&s)return;throw new Error("Invalid mapping: "+JSON.stringify({generated:d,source:s,original:l,name:i}))}},m.prototype._serializeMappings=function(){for(var d=0,l=1,s=0,i=0,a=0,f=0,r="",t,e,o,p,v=this._mappings.toArray(),b=0,S=v.length;b<S;b++){if(e=v[b],t="",e.generatedLine!==l)for(d=0;e.generatedLine!==l;)t+=";",l++;else if(b>0){if(!n.compareByGeneratedPositionsInflated(e,v[b-1]))continue;t+=","}t+=_.encode(e.generatedColumn-d),d=e.generatedColumn,e.source!=null&&(p=this._sources.indexOf(e.source),t+=_.encode(p-f),f=p,t+=_.encode(e.originalLine-1-i),i=e.originalLine-1,t+=_.encode(e.originalColumn-s),s=e.originalColumn,e.name!=null&&(o=this._names.indexOf(e.name),t+=_.encode(o-a),a=o)),r+=t}return r},m.prototype._generateSourcesContent=function(d,l){return d.map(function(s){if(!this._sourcesContents)return null;l!=null&&(s=n.relative(l,s));var i=n.toSetString(s);return Object.prototype.hasOwnProperty.call(this._sourcesContents,i)?this._sourcesContents[i]:null},this)},m.prototype.toJSON=function(){var d={version:this._version,sources:this._sources.toArray(),names:this._names.toArray(),mappings:this._serializeMappings()};return this._file!=null&&(d.file=this._file),this._sourceRoot!=null&&(d.sourceRoot=this._sourceRoot),this._sourcesContents&&(d.sourcesContent=this._generateSourcesContent(d.sources,d.sourceRoot)),d},m.prototype.toString=function(){return JSON.stringify(this.toJSON())},Re.SourceMapGenerator=m,Re}var re={},He={},Et;function br(){return Et||(Et=1,(function(_){_.GREATEST_LOWER_BOUND=1,_.LEAST_UPPER_BOUND=2;function n(u,h,m,c,d,l){var s=Math.floor((h-u)/2)+u,i=d(m,c[s],!0);return i===0?s:i>0?h-s>1?n(s,h,m,c,d,l):l==_.LEAST_UPPER_BOUND?h<c.length?h:-1:s:s-u>1?n(u,s,m,c,d,l):l==_.LEAST_UPPER_BOUND?s:u<0?-1:u}_.search=function(h,m,c,d){if(m.length===0)return-1;var l=n(-1,m.length,h,m,c,d||_.GREATEST_LOWER_BOUND);if(l<0)return-1;for(;l-1>=0&&c(m[l],m[l-1],!0)===0;)--l;return l}})(He)),He}var Ue={},xt;function yr(){if(xt)return Ue;xt=1;function _(h,m,c){var d=h[m];h[m]=h[c],h[c]=d}function n(h,m){return Math.round(h+Math.random()*(m-h))}function u(h,m,c,d){if(c<d){var l=n(c,d),s=c-1;_(h,l,d);for(var i=h[d],a=c;a<d;a++)m(h[a],i)<=0&&(s+=1,_(h,s,a));_(h,s+1,a);var f=s+1;u(h,m,c,f-1),u(h,m,f+1,d)}}return Ue.quickSort=function(h,m){u(h,m,0,h.length-1)},Ue}var Mt;function Sr(){if(Mt)return re;Mt=1;var _=ie(),n=br(),u=Qt().ArraySet,h=zt(),m=yr().quickSort;function c(i,a){var f=i;return typeof i=="string"&&(f=_.parseSourceMapInput(i)),f.sections!=null?new s(f,a):new d(f,a)}c.fromSourceMap=function(i,a){return d.fromSourceMap(i,a)},c.prototype._version=3,c.prototype.__generatedMappings=null,Object.defineProperty(c.prototype,"_generatedMappings",{configurable:!0,enumerable:!0,get:function(){return this.__generatedMappings||this._parseMappings(this._mappings,this.sourceRoot),this.__generatedMappings}}),c.prototype.__originalMappings=null,Object.defineProperty(c.prototype,"_originalMappings",{configurable:!0,enumerable:!0,get:function(){return this.__originalMappings||this._parseMappings(this._mappings,this.sourceRoot),this.__originalMappings}}),c.prototype._charIsMappingSeparator=function(a,f){var r=a.charAt(f);return r===";"||r===","},c.prototype._parseMappings=function(a,f){throw new Error("Subclasses must implement _parseMappings")},c.GENERATED_ORDER=1,c.ORIGINAL_ORDER=2,c.GREATEST_LOWER_BOUND=1,c.LEAST_UPPER_BOUND=2,c.prototype.eachMapping=function(a,f,r){var t=f||null,e=r||c.GENERATED_ORDER,o;switch(e){case c.GENERATED_ORDER:o=this._generatedMappings;break;case c.ORIGINAL_ORDER:o=this._originalMappings;break;default:throw new Error("Unknown order of iteration.")}var p=this.sourceRoot;o.map(function(v){var b=v.source===null?null:this._sources.at(v.source);return b=_.computeSourceURL(p,b,this._sourceMapURL),{source:b,generatedLine:v.generatedLine,generatedColumn:v.generatedColumn,originalLine:v.originalLine,originalColumn:v.originalColumn,name:v.name===null?null:this._names.at(v.name)}},this).forEach(a,t)},c.prototype.allGeneratedPositionsFor=function(a){var f=_.getArg(a,"line"),r={source:_.getArg(a,"source"),originalLine:f,originalColumn:_.getArg(a,"column",0)};if(r.source=this._findSourceIndex(r.source),r.source<0)return[];var t=[],e=this._findMapping(r,this._originalMappings,"originalLine","originalColumn",_.compareByOriginalPositions,n.LEAST_UPPER_BOUND);if(e>=0){var o=this._originalMappings[e];if(a.column===void 0)for(var p=o.originalLine;o&&o.originalLine===p;)t.push({line:_.getArg(o,"generatedLine",null),column:_.getArg(o,"generatedColumn",null),lastColumn:_.getArg(o,"lastGeneratedColumn",null)}),o=this._originalMappings[++e];else for(var v=o.originalColumn;o&&o.originalLine===f&&o.originalColumn==v;)t.push({line:_.getArg(o,"generatedLine",null),column:_.getArg(o,"generatedColumn",null),lastColumn:_.getArg(o,"lastGeneratedColumn",null)}),o=this._originalMappings[++e]}return t},re.SourceMapConsumer=c;function d(i,a){var f=i;typeof i=="string"&&(f=_.parseSourceMapInput(i));var r=_.getArg(f,"version"),t=_.getArg(f,"sources"),e=_.getArg(f,"names",[]),o=_.getArg(f,"sourceRoot",null),p=_.getArg(f,"sourcesContent",null),v=_.getArg(f,"mappings"),b=_.getArg(f,"file",null);if(r!=this._version)throw new Error("Unsupported version: "+r);o&&(o=_.normalize(o)),t=t.map(String).map(_.normalize).map(function(S){return o&&_.isAbsolute(o)&&_.isAbsolute(S)?_.relative(o,S):S}),this._names=u.fromArray(e.map(String),!0),this._sources=u.fromArray(t,!0),this._absoluteSources=this._sources.toArray().map(function(S){return _.computeSourceURL(o,S,a)}),this.sourceRoot=o,this.sourcesContent=p,this._mappings=v,this._sourceMapURL=a,this.file=b}d.prototype=Object.create(c.prototype),d.prototype.consumer=c,d.prototype._findSourceIndex=function(i){var a=i;if(this.sourceRoot!=null&&(a=_.relative(this.sourceRoot,a)),this._sources.has(a))return this._sources.indexOf(a);var f;for(f=0;f<this._absoluteSources.length;++f)if(this._absoluteSources[f]==i)return f;return-1},d.fromSourceMap=function(a,f){var r=Object.create(d.prototype),t=r._names=u.fromArray(a._names.toArray(),!0),e=r._sources=u.fromArray(a._sources.toArray(),!0);r.sourceRoot=a._sourceRoot,r.sourcesContent=a._generateSourcesContent(r._sources.toArray(),r.sourceRoot),r.file=a._file,r._sourceMapURL=f,r._absoluteSources=r._sources.toArray().map(function(w){return _.computeSourceURL(r.sourceRoot,w,f)});for(var o=a._mappings.toArray().slice(),p=r.__generatedMappings=[],v=r.__originalMappings=[],b=0,S=o.length;b<S;b++){var g=o[b],y=new l;y.generatedLine=g.generatedLine,y.generatedColumn=g.generatedColumn,g.source&&(y.source=e.indexOf(g.source),y.originalLine=g.originalLine,y.originalColumn=g.originalColumn,g.name&&(y.name=t.indexOf(g.name)),v.push(y)),p.push(y)}return m(r.__originalMappings,_.compareByOriginalPositions),r},d.prototype._version=3,Object.defineProperty(d.prototype,"sources",{get:function(){return this._absoluteSources.slice()}});function l(){this.generatedLine=0,this.generatedColumn=0,this.source=null,this.originalLine=null,this.originalColumn=null,this.name=null}d.prototype._parseMappings=function(a,f){for(var r=1,t=0,e=0,o=0,p=0,v=0,b=a.length,S=0,g={},y={},w=[],k=[],P,x,L,C,E;S<b;)if(a.charAt(S)===";")r++,S++,t=0;else if(a.charAt(S)===",")S++;else{for(P=new l,P.generatedLine=r,C=S;C<b&&!this._charIsMappingSeparator(a,C);C++);if(x=a.slice(S,C),L=g[x],L)S+=x.length;else{for(L=[];S<C;)h.decode(a,S,y),E=y.value,S=y.rest,L.push(E);if(L.length===2)throw new Error("Found a source, but no line and column");if(L.length===3)throw new Error("Found a source and line, but no column");g[x]=L}P.generatedColumn=t+L[0],t=P.generatedColumn,L.length>1&&(P.source=p+L[1],p+=L[1],P.originalLine=e+L[2],e=P.originalLine,P.originalLine+=1,P.originalColumn=o+L[3],o=P.originalColumn,L.length>4&&(P.name=v+L[4],v+=L[4])),k.push(P),typeof P.originalLine=="number"&&w.push(P)}m(k,_.compareByGeneratedPositionsDeflated),this.__generatedMappings=k,m(w,_.compareByOriginalPositions),this.__originalMappings=w},d.prototype._findMapping=function(a,f,r,t,e,o){if(a[r]<=0)throw new TypeError("Line must be greater than or equal to 1, got "+a[r]);if(a[t]<0)throw new TypeError("Column must be greater than or equal to 0, got "+a[t]);return n.search(a,f,e,o)},d.prototype.computeColumnSpans=function(){for(var a=0;a<this._generatedMappings.length;++a){var f=this._generatedMappings[a];if(a+1<this._generatedMappings.length){var r=this._generatedMappings[a+1];if(f.generatedLine===r.generatedLine){f.lastGeneratedColumn=r.generatedColumn-1;continue}}f.lastGeneratedColumn=1/0}},d.prototype.originalPositionFor=function(a){var f={generatedLine:_.getArg(a,"line"),generatedColumn:_.getArg(a,"column")},r=this._findMapping(f,this._generatedMappings,"generatedLine","generatedColumn",_.compareByGeneratedPositionsDeflated,_.getArg(a,"bias",c.GREATEST_LOWER_BOUND));if(r>=0){var t=this._generatedMappings[r];if(t.generatedLine===f.generatedLine){var e=_.getArg(t,"source",null);e!==null&&(e=this._sources.at(e),e=_.computeSourceURL(this.sourceRoot,e,this._sourceMapURL));var o=_.getArg(t,"name",null);return o!==null&&(o=this._names.at(o)),{source:e,line:_.getArg(t,"originalLine",null),column:_.getArg(t,"originalColumn",null),name:o}}}return{source:null,line:null,column:null,name:null}},d.prototype.hasContentsOfAllSources=function(){return this.sourcesContent?this.sourcesContent.length>=this._sources.size()&&!this.sourcesContent.some(function(a){return a==null}):!1},d.prototype.sourceContentFor=function(a,f){if(!this.sourcesContent)return null;var r=this._findSourceIndex(a);if(r>=0)return this.sourcesContent[r];var t=a;this.sourceRoot!=null&&(t=_.relative(this.sourceRoot,t));var e;if(this.sourceRoot!=null&&(e=_.urlParse(this.sourceRoot))){var o=t.replace(/^file:\/\//,"");if(e.scheme=="file"&&this._sources.has(o))return this.sourcesContent[this._sources.indexOf(o)];if((!e.path||e.path=="/")&&this._sources.has("/"+t))return this.sourcesContent[this._sources.indexOf("/"+t)]}if(f)return null;throw new Error('"'+t+'" is not in the SourceMap.')},d.prototype.generatedPositionFor=function(a){var f=_.getArg(a,"source");if(f=this._findSourceIndex(f),f<0)return{line:null,column:null,lastColumn:null};var r={source:f,originalLine:_.getArg(a,"line"),originalColumn:_.getArg(a,"column")},t=this._findMapping(r,this._originalMappings,"originalLine","originalColumn",_.compareByOriginalPositions,_.getArg(a,"bias",c.GREATEST_LOWER_BOUND));if(t>=0){var e=this._originalMappings[t];if(e.source===r.source)return{line:_.getArg(e,"generatedLine",null),column:_.getArg(e,"generatedColumn",null),lastColumn:_.getArg(e,"lastGeneratedColumn",null)}}return{line:null,column:null,lastColumn:null}},re.BasicSourceMapConsumer=d;function s(i,a){var f=i;typeof i=="string"&&(f=_.parseSourceMapInput(i));var r=_.getArg(f,"version"),t=_.getArg(f,"sections");if(r!=this._version)throw new Error("Unsupported version: "+r);this._sources=new u,this._names=new u;var e={line:-1,column:0};this._sections=t.map(function(o){if(o.url)throw new Error("Support for url field in sections not implemented.");var p=_.getArg(o,"offset"),v=_.getArg(p,"line"),b=_.getArg(p,"column");if(v<e.line||v===e.line&&b<e.column)throw new Error("Section offsets must be ordered and non-overlapping.");return e=p,{generatedOffset:{generatedLine:v+1,generatedColumn:b+1},consumer:new c(_.getArg(o,"map"),a)}})}return s.prototype=Object.create(c.prototype),s.prototype.constructor=c,s.prototype._version=3,Object.defineProperty(s.prototype,"sources",{get:function(){for(var i=[],a=0;a<this._sections.length;a++)for(var f=0;f<this._sections[a].consumer.sources.length;f++)i.push(this._sections[a].consumer.sources[f]);return i}}),s.prototype.originalPositionFor=function(a){var f={generatedLine:_.getArg(a,"line"),generatedColumn:_.getArg(a,"column")},r=n.search(f,this._sections,function(e,o){var p=e.generatedLine-o.generatedOffset.generatedLine;return p||e.generatedColumn-o.generatedOffset.generatedColumn}),t=this._sections[r];return t?t.consumer.originalPositionFor({line:f.generatedLine-(t.generatedOffset.generatedLine-1),column:f.generatedColumn-(t.generatedOffset.generatedLine===f.generatedLine?t.generatedOffset.generatedColumn-1:0),bias:a.bias}):{source:null,line:null,column:null,name:null}},s.prototype.hasContentsOfAllSources=function(){return this._sections.every(function(a){return a.consumer.hasContentsOfAllSources()})},s.prototype.sourceContentFor=function(a,f){for(var r=0;r<this._sections.length;r++){var t=this._sections[r],e=t.consumer.sourceContentFor(a,!0);if(e)return e}if(f)return null;throw new Error('"'+a+'" is not in the SourceMap.')},s.prototype.generatedPositionFor=function(a){for(var f=0;f<this._sections.length;f++){var r=this._sections[f];if(r.consumer._findSourceIndex(_.getArg(a,"source"))!==-1){var t=r.consumer.generatedPositionFor(a);if(t){var e={line:t.line+(r.generatedOffset.generatedLine-1),column:t.column+(r.generatedOffset.generatedLine===t.line?r.generatedOffset.generatedColumn-1:0)};return e}}}return{line:null,column:null}},s.prototype._parseMappings=function(a,f){this.__generatedMappings=[],this.__originalMappings=[];for(var r=0;r<this._sections.length;r++)for(var t=this._sections[r],e=t.consumer._generatedMappings,o=0;o<e.length;o++){var p=e[o],v=t.consumer._sources.at(p.source);v=_.computeSourceURL(t.consumer.sourceRoot,v,this._sourceMapURL),this._sources.add(v),v=this._sources.indexOf(v);var b=null;p.name&&(b=t.consumer._names.at(p.name),this._names.add(b),b=this._names.indexOf(b));var S={source:v,generatedLine:p.generatedLine+(t.generatedOffset.generatedLine-1),generatedColumn:p.generatedColumn+(t.generatedOffset.generatedLine===p.generatedLine?t.generatedOffset.generatedColumn-1:0),originalLine:p.originalLine,originalColumn:p.originalColumn,name:b};this.__generatedMappings.push(S),typeof S.originalLine=="number"&&this.__originalMappings.push(S)}m(this.__generatedMappings,_.compareByGeneratedPositionsDeflated),m(this.__originalMappings,_.compareByOriginalPositions)},re.IndexedSourceMapConsumer=s,re}var Fe={},It;function wr(){if(It)return Fe;It=1;var _=Zt().SourceMapGenerator,n=ie(),u=/(\r?\n)/,h=10,m="$$$isSourceNode$$$";function c(d,l,s,i,a){this.children=[],this.sourceContents={},this.line=d??null,this.column=l??null,this.source=s??null,this.name=a??null,this[m]=!0,i!=null&&this.add(i)}return c.fromStringWithSourceMap=function(l,s,i){var a=new c,f=l.split(u),r=0,t=function(){var b=g(),S=g()||"";return b+S;function g(){return r<f.length?f[r++]:void 0}},e=1,o=0,p=null;return s.eachMapping(function(b){if(p!==null)if(e<b.generatedLine)v(p,t()),e++,o=0;else{var S=f[r]||"",g=S.substr(0,b.generatedColumn-o);f[r]=S.substr(b.generatedColumn-o),o=b.generatedColumn,v(p,g),p=b;return}for(;e<b.generatedLine;)a.add(t()),e++;if(o<b.generatedColumn){var S=f[r]||"";a.add(S.substr(0,b.generatedColumn)),f[r]=S.substr(b.generatedColumn),o=b.generatedColumn}p=b},this),r<f.length&&(p&&v(p,t()),a.add(f.splice(r).join(""))),s.sources.forEach(function(b){var S=s.sourceContentFor(b);S!=null&&(i!=null&&(b=n.join(i,b)),a.setSourceContent(b,S))}),a;function v(b,S){if(b===null||b.source===void 0)a.add(S);else{var g=i?n.join(i,b.source):b.source;a.add(new c(b.originalLine,b.originalColumn,g,S,b.name))}}},c.prototype.add=function(l){if(Array.isArray(l))l.forEach(function(s){this.add(s)},this);else if(l[m]||typeof l=="string")l&&this.children.push(l);else throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+l);return this},c.prototype.prepend=function(l){if(Array.isArray(l))for(var s=l.length-1;s>=0;s--)this.prepend(l[s]);else if(l[m]||typeof l=="string")this.children.unshift(l);else throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+l);return this},c.prototype.walk=function(l){for(var s,i=0,a=this.children.length;i<a;i++)s=this.children[i],s[m]?s.walk(l):s!==""&&l(s,{source:this.source,line:this.line,column:this.column,name:this.name})},c.prototype.join=function(l){var s,i,a=this.children.length;if(a>0){for(s=[],i=0;i<a-1;i++)s.push(this.children[i]),s.push(l);s.push(this.children[i]),this.children=s}return this},c.prototype.replaceRight=function(l,s){var i=this.children[this.children.length-1];return i[m]?i.replaceRight(l,s):typeof i=="string"?this.children[this.children.length-1]=i.replace(l,s):this.children.push("".replace(l,s)),this},c.prototype.setSourceContent=function(l,s){this.sourceContents[n.toSetString(l)]=s},c.prototype.walkSourceContents=function(l){for(var s=0,i=this.children.length;s<i;s++)this.children[s][m]&&this.children[s].walkSourceContents(l);for(var a=Object.keys(this.sourceContents),s=0,i=a.length;s<i;s++)l(n.fromSetString(a[s]),this.sourceContents[a[s]])},c.prototype.toString=function(){var l="";return this.walk(function(s){l+=s}),l},c.prototype.toStringWithSourceMap=function(l){var s={code:"",line:1,column:0},i=new _(l),a=!1,f=null,r=null,t=null,e=null;return this.walk(function(o,p){s.code+=o,p.source!==null&&p.line!==null&&p.column!==null?((f!==p.source||r!==p.line||t!==p.column||e!==p.name)&&i.addMapping({source:p.source,original:{line:p.line,column:p.column},generated:{line:s.line,column:s.column},name:p.name}),f=p.source,r=p.line,t=p.column,e=p.name,a=!0):a&&(i.addMapping({generated:{line:s.line,column:s.column}}),f=null,a=!1);for(var v=0,b=o.length;v<b;v++)o.charCodeAt(v)===h?(s.line++,s.column=0,v+1===b?(f=null,a=!1):a&&i.addMapping({source:p.source,original:{line:p.line,column:p.column},generated:{line:s.line,column:s.column},name:p.name})):s.column++}),this.walkSourceContents(function(o,p){i.setSourceContent(o,p)}),{code:s.code,map:i}},Fe.SourceNode=c,Fe}var At;function kr(){return At||(At=1,te.SourceMapGenerator=Zt().SourceMapGenerator,te.SourceMapConsumer=Sr().SourceMapConsumer,te.SourceNode=wr().SourceNode),te}var Ot;function Cr(){return Ot||(Ot=1,(function(_,n){n.__esModule=!0;var u=T(),h=void 0;try{var m=kr();h=m.SourceNode}catch{}h||(h=function(l,s,i,a){this.src="",a&&this.add(a)},h.prototype={add:function(s){u.isArray(s)&&(s=s.join("")),this.src+=s},prepend:function(s){u.isArray(s)&&(s=s.join("")),this.src=s+this.src},toStringWithSourceMap:function(){return{code:this.toString()}},toString:function(){return this.src}});function c(l,s,i){if(u.isArray(l)){for(var a=[],f=0,r=l.length;f<r;f++)a.push(s.wrap(l[f],i));return a}else if(typeof l=="boolean"||typeof l=="number")return l+"";return l}function d(l){this.srcFile=l,this.source=[]}d.prototype={isEmpty:function(){return!this.source.length},prepend:function(s,i){this.source.unshift(this.wrap(s,i))},push:function(s,i){this.source.push(this.wrap(s,i))},merge:function(){var s=this.empty();return this.each(function(i){s.add(["  ",i,`
`])}),s},each:function(s){for(var i=0,a=this.source.length;i<a;i++)s(this.source[i])},empty:function(){var s=this.currentLocation||{start:{}};return new h(s.start.line,s.start.column,this.srcFile)},wrap:function(s){var i=arguments.length<=1||arguments[1]===void 0?this.currentLocation||{start:{}}:arguments[1];return s instanceof h?s:(s=c(s,this,i),new h(i.start.line,i.start.column,this.srcFile,s))},functionCall:function(s,i,a){return a=this.generateList(a),this.wrap([s,i?"."+i+"(":"(",a,")"])},quotedString:function(s){return'"'+(s+"").replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'},objectLiteral:function(s){var i=this,a=[];Object.keys(s).forEach(function(r){var t=c(s[r],i);t!=="undefined"&&a.push([i.quotedString(r),":",t])});var f=this.generateList(a);return f.prepend("{"),f.add("}"),f},generateList:function(s){for(var i=this.empty(),a=0,f=s.length;a<f;a++)a&&i.add(","),i.add(c(s[a],this));return i},generateArray:function(s){var i=this.generateList(s);return i.prepend("["),i.add("]"),i}},n.default=d,_.exports=n.default})(Ie,Ie.exports)),Ie.exports}var Dt;function Pr(){return Dt||(Dt=1,(function(_,n){n.__esModule=!0;function u(r){return r&&r.__esModule?r:{default:r}}var h=Ke(),m=V(),c=u(m),d=T(),l=Cr(),s=u(l);function i(r){this.value=r}function a(){}a.prototype={nameLookup:function(t,e){return this.internalNameLookup(t,e)},depthedLookup:function(t){return[this.aliasable("container.lookup"),"(depths, ",JSON.stringify(t),")"]},compilerInfo:function(){var t=h.COMPILER_REVISION,e=h.REVISION_CHANGES[t];return[t,e]},appendToBuffer:function(t,e,o){return d.isArray(t)||(t=[t]),t=this.source.wrap(t,e),this.environment.isSimple?["return ",t,";"]:o?["buffer += ",t,";"]:(t.appendToBuffer=!0,t)},initializeBuffer:function(){return this.quotedString("")},internalNameLookup:function(t,e){return this.lookupPropertyFunctionIsUsed=!0,["lookupProperty(",t,",",JSON.stringify(e),")"]},lookupPropertyFunctionIsUsed:!1,compile:function(t,e,o,p){this.environment=t,this.options=e,this.stringParams=this.options.stringParams,this.trackIds=this.options.trackIds,this.precompile=!p,this.name=this.environment.name,this.isChild=!!o,this.context=o||{decorators:[],programs:[],environments:[]},this.preamble(),this.stackSlot=0,this.stackVars=[],this.aliases={},this.registers={list:[]},this.hashes=[],this.compileStack=[],this.inlineStack=[],this.blockParams=[],this.compileChildren(t,e),this.useDepths=this.useDepths||t.useDepths||t.useDecorators||this.options.compat,this.useBlockParams=this.useBlockParams||t.useBlockParams;var v=t.opcodes,b=void 0,S=void 0,g=void 0,y=void 0;for(g=0,y=v.length;g<y;g++)b=v[g],this.source.currentLocation=b.loc,S=S||b.loc,this[b.opcode].apply(this,b.args);if(this.source.currentLocation=S,this.pushSource(""),this.stackSlot||this.inlineStack.length||this.compileStack.length)throw new c.default("Compile completed with content left on stack");this.decorators.isEmpty()?this.decorators=void 0:(this.useDecorators=!0,this.decorators.prepend(["var decorators = container.decorators, ",this.lookupPropertyFunctionVarDeclaration(),`;
`]),this.decorators.push("return fn;"),p?this.decorators=Function.apply(this,["fn","props","container","depth0","data","blockParams","depths",this.decorators.merge()]):(this.decorators.prepend(`function(fn, props, container, depth0, data, blockParams, depths) {
`),this.decorators.push(`}
`),this.decorators=this.decorators.merge()));var w=this.createFunctionContext(p);if(this.isChild)return w;var k={compiler:this.compilerInfo(),main:w};this.decorators&&(k.main_d=this.decorators,k.useDecorators=!0);var P=this.context,x=P.programs,L=P.decorators;for(g=0,y=x.length;g<y;g++)x[g]&&(k[g]=x[g],L[g]&&(k[g+"_d"]=L[g],k.useDecorators=!0));return this.environment.usePartial&&(k.usePartial=!0),this.options.data&&(k.useData=!0),this.useDepths&&(k.useDepths=!0),this.useBlockParams&&(k.useBlockParams=!0),this.options.compat&&(k.compat=!0),p?k.compilerOptions=this.options:(k.compiler=JSON.stringify(k.compiler),this.source.currentLocation={start:{line:1,column:0}},k=this.objectLiteral(k),e.srcName?(k=k.toStringWithSourceMap({file:e.destName}),k.map=k.map&&k.map.toString()):k=k.toString()),k},preamble:function(){this.lastContext=0,this.source=new s.default(this.options.srcName),this.decorators=new s.default(this.options.srcName)},createFunctionContext:function(t){var e=this,o="",p=this.stackVars.concat(this.registers.list);p.length>0&&(o+=", "+p.join(", "));var v=0;Object.keys(this.aliases).forEach(function(g){var y=e.aliases[g];y.children&&y.referenceCount>1&&(o+=", alias"+ ++v+"="+g,y.children[0]="alias"+v)}),this.lookupPropertyFunctionIsUsed&&(o+=", "+this.lookupPropertyFunctionVarDeclaration());var b=["container","depth0","helpers","partials","data"];(this.useBlockParams||this.useDepths)&&b.push("blockParams"),this.useDepths&&b.push("depths");var S=this.mergeSource(o);return t?(b.push(S),Function.apply(this,b)):this.source.wrap(["function(",b.join(","),`) {
  `,S,"}"])},mergeSource:function(t){var e=this.environment.isSimple,o=!this.forceBuffer,p=void 0,v=void 0,b=void 0,S=void 0;return this.source.each(function(g){g.appendToBuffer?(b?g.prepend("  + "):b=g,S=g):(b&&(v?b.prepend("buffer += "):p=!0,S.add(";"),b=S=void 0),v=!0,e||(o=!1))}),o?b?(b.prepend("return "),S.add(";")):v||this.source.push('return "";'):(t+=", buffer = "+(p?"":this.initializeBuffer()),b?(b.prepend("return buffer + "),S.add(";")):this.source.push("return buffer;")),t&&this.source.prepend("var "+t.substring(2)+(p?"":`;
`)),this.source.merge()},lookupPropertyFunctionVarDeclaration:function(){return`
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    }
    `.trim()},blockValue:function(t){var e=this.aliasable("container.hooks.blockHelperMissing"),o=[this.contextName(0)];this.setupHelperArgs(t,0,o);var p=this.popStack();o.splice(1,0,p),this.push(this.source.functionCall(e,"call",o))},ambiguousBlockValue:function(){var t=this.aliasable("container.hooks.blockHelperMissing"),e=[this.contextName(0)];this.setupHelperArgs("",0,e,!0),this.flushInline();var o=this.topStack();e.splice(1,0,o),this.pushSource(["if (!",this.lastHelper,") { ",o," = ",this.source.functionCall(t,"call",e),"}"])},appendContent:function(t){this.pendingContent?t=this.pendingContent+t:this.pendingLocation=this.source.currentLocation,this.pendingContent=t},append:function(){if(this.isInline())this.replaceStack(function(e){return[" != null ? ",e,' : ""']}),this.pushSource(this.appendToBuffer(this.popStack()));else{var t=this.popStack();this.pushSource(["if (",t," != null) { ",this.appendToBuffer(t,void 0,!0)," }"]),this.environment.isSimple&&this.pushSource(["else { ",this.appendToBuffer("''",void 0,!0)," }"])}},appendEscaped:function(){this.pushSource(this.appendToBuffer([this.aliasable("container.escapeExpression"),"(",this.popStack(),")"]))},getContext:function(t){this.lastContext=t},pushContext:function(){this.pushStackLiteral(this.contextName(this.lastContext))},lookupOnContext:function(t,e,o,p){var v=0;!p&&this.options.compat&&!this.lastContext?this.push(this.depthedLookup(t[v++])):this.pushContext(),this.resolvePath("context",t,v,e,o)},lookupBlockParam:function(t,e){this.useBlockParams=!0,this.push(["blockParams[",t[0],"][",t[1],"]"]),this.resolvePath("context",e,1)},lookupData:function(t,e,o){t?this.pushStackLiteral("container.data(data, "+t+")"):this.pushStackLiteral("data"),this.resolvePath("data",e,0,!0,o)},resolvePath:function(t,e,o,p,v){var b=this;if(this.options.strict||this.options.assumeObjects){this.push(f(this.options.strict&&v,this,e,o,t));return}for(var S=e.length;o<S;o++)this.replaceStack(function(g){var y=b.nameLookup(g,e[o],t);return p?[" && ",y]:[" != null ? ",y," : ",g]})},resolvePossibleLambda:function(){this.push([this.aliasable("container.lambda"),"(",this.popStack(),", ",this.contextName(0),")"])},pushStringParam:function(t,e){this.pushContext(),this.pushString(e),e!=="SubExpression"&&(typeof t=="string"?this.pushString(t):this.pushStackLiteral(t))},emptyHash:function(t){this.trackIds&&this.push("{}"),this.stringParams&&(this.push("{}"),this.push("{}")),this.pushStackLiteral(t?"undefined":"{}")},pushHash:function(){this.hash&&this.hashes.push(this.hash),this.hash={values:{},types:[],contexts:[],ids:[]}},popHash:function(){var t=this.hash;this.hash=this.hashes.pop(),this.trackIds&&this.push(this.objectLiteral(t.ids)),this.stringParams&&(this.push(this.objectLiteral(t.contexts)),this.push(this.objectLiteral(t.types))),this.push(this.objectLiteral(t.values))},pushString:function(t){this.pushStackLiteral(this.quotedString(t))},pushLiteral:function(t){this.pushStackLiteral(t)},pushProgram:function(t){t!=null?this.pushStackLiteral(this.programExpression(t)):this.pushStackLiteral(null)},registerDecorator:function(t,e){var o=this.nameLookup("decorators",e,"decorator"),p=this.setupHelperArgs(e,t);this.decorators.push(["fn = ",this.decorators.functionCall(o,"",["fn","props","container",p])," || fn;"])},invokeHelper:function(t,e,o){var p=this.popStack(),v=this.setupHelper(t,e),b=[];o&&b.push(v.name),b.push(p),this.options.strict||b.push(this.aliasable("container.hooks.helperMissing"));var S=["(",this.itemsSeparatedBy(b,"||"),")"],g=this.source.functionCall(S,"call",v.callParams);this.push(g)},itemsSeparatedBy:function(t,e){var o=[];o.push(t[0]);for(var p=1;p<t.length;p++)o.push(e,t[p]);return o},invokeKnownHelper:function(t,e){var o=this.setupHelper(t,e);this.push(this.source.functionCall(o.name,"call",o.callParams))},invokeAmbiguous:function(t,e){this.useRegister("helper");var o=this.popStack();this.emptyHash();var p=this.setupHelper(0,t,e),v=this.lastHelper=this.nameLookup("helpers",t,"helper"),b=["(","(helper = ",v," || ",o,")"];this.options.strict||(b[0]="(helper = ",b.push(" != null ? helper : ",this.aliasable("container.hooks.helperMissing"))),this.push(["(",b,p.paramsInit?["),(",p.paramsInit]:[],"),","(typeof helper === ",this.aliasable('"function"')," ? ",this.source.functionCall("helper","call",p.callParams)," : helper))"])},invokePartial:function(t,e,o){var p=[],v=this.setupParams(e,1,p);t&&(e=this.popStack(),delete v.name),o&&(v.indent=JSON.stringify(o)),v.helpers="helpers",v.partials="partials",v.decorators="container.decorators",t?p.unshift(e):p.unshift(this.nameLookup("partials",e,"partial")),this.options.compat&&(v.depths="depths"),v=this.objectLiteral(v),p.push(v),this.push(this.source.functionCall("container.invokePartial","",p))},assignToHash:function(t){var e=this.popStack(),o=void 0,p=void 0,v=void 0;this.trackIds&&(v=this.popStack()),this.stringParams&&(p=this.popStack(),o=this.popStack());var b=this.hash;o&&(b.contexts[t]=o),p&&(b.types[t]=p),v&&(b.ids[t]=v),b.values[t]=e},pushId:function(t,e,o){t==="BlockParam"?this.pushStackLiteral("blockParams["+e[0]+"].path["+e[1]+"]"+(o?" + "+JSON.stringify("."+o):"")):t==="PathExpression"?this.pushString(e):t==="SubExpression"?this.pushStackLiteral("true"):this.pushStackLiteral("null")},compiler:a,compileChildren:function(t,e){for(var o=t.children,p=void 0,v=void 0,b=0,S=o.length;b<S;b++){p=o[b],v=new this.compiler;var g=this.matchExistingProgram(p);if(g==null){this.context.programs.push("");var y=this.context.programs.length;p.index=y,p.name="program"+y,this.context.programs[y]=v.compile(p,e,this.context,!this.precompile),this.context.decorators[y]=v.decorators,this.context.environments[y]=p,this.useDepths=this.useDepths||v.useDepths,this.useBlockParams=this.useBlockParams||v.useBlockParams,p.useDepths=this.useDepths,p.useBlockParams=this.useBlockParams}else p.index=g.index,p.name="program"+g.index,this.useDepths=this.useDepths||g.useDepths,this.useBlockParams=this.useBlockParams||g.useBlockParams}},matchExistingProgram:function(t){for(var e=0,o=this.context.environments.length;e<o;e++){var p=this.context.environments[e];if(p&&p.equals(t))return p}},programExpression:function(t){var e=this.environment.children[t],o=[e.index,"data",e.blockParams];return(this.useBlockParams||this.useDepths)&&o.push("blockParams"),this.useDepths&&o.push("depths"),"container.program("+o.join(", ")+")"},useRegister:function(t){this.registers[t]||(this.registers[t]=!0,this.registers.list.push(t))},push:function(t){return t instanceof i||(t=this.source.wrap(t)),this.inlineStack.push(t),t},pushStackLiteral:function(t){this.push(new i(t))},pushSource:function(t){this.pendingContent&&(this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent),this.pendingLocation)),this.pendingContent=void 0),t&&this.source.push(t)},replaceStack:function(t){var e=["("],o=void 0,p=void 0,v=void 0;if(!this.isInline())throw new c.default("replaceStack on non-inline");var b=this.popStack(!0);if(b instanceof i)o=[b.value],e=["(",o],v=!0;else{p=!0;var S=this.incrStack();e=["((",this.push(S)," = ",b,")"],o=this.topStack()}var g=t.call(this,o);v||this.popStack(),p&&this.stackSlot--,this.push(e.concat(g,")"))},incrStack:function(){return this.stackSlot++,this.stackSlot>this.stackVars.length&&this.stackVars.push("stack"+this.stackSlot),this.topStackName()},topStackName:function(){return"stack"+this.stackSlot},flushInline:function(){var t=this.inlineStack;this.inlineStack=[];for(var e=0,o=t.length;e<o;e++){var p=t[e];if(p instanceof i)this.compileStack.push(p);else{var v=this.incrStack();this.pushSource([v," = ",p,";"]),this.compileStack.push(v)}}},isInline:function(){return this.inlineStack.length},popStack:function(t){var e=this.isInline(),o=(e?this.inlineStack:this.compileStack).pop();if(!t&&o instanceof i)return o.value;if(!e){if(!this.stackSlot)throw new c.default("Invalid stack pop");this.stackSlot--}return o},topStack:function(){var t=this.isInline()?this.inlineStack:this.compileStack,e=t[t.length-1];return e instanceof i?e.value:e},contextName:function(t){return this.useDepths&&t?"depths["+t+"]":"depth"+t},quotedString:function(t){return this.source.quotedString(t)},objectLiteral:function(t){return this.source.objectLiteral(t)},aliasable:function(t){var e=this.aliases[t];return e?(e.referenceCount++,e):(e=this.aliases[t]=this.source.wrap(t),e.aliasable=!0,e.referenceCount=1,e)},setupHelper:function(t,e,o){var p=[],v=this.setupHelperArgs(e,t,p,o),b=this.nameLookup("helpers",e,"helper"),S=this.aliasable(this.contextName(0)+" != null ? "+this.contextName(0)+" : (container.nullContext || {})");return{params:p,paramsInit:v,name:b,callParams:[S].concat(p)}},setupParams:function(t,e,o){var p={},v=[],b=[],S=[],g=!o,y=void 0;g&&(o=[]),p.name=this.quotedString(t),p.hash=this.popStack(),this.trackIds&&(p.hashIds=this.popStack()),this.stringParams&&(p.hashTypes=this.popStack(),p.hashContexts=this.popStack());var w=this.popStack(),k=this.popStack();(k||w)&&(p.fn=k||"container.noop",p.inverse=w||"container.noop");for(var P=e;P--;)y=this.popStack(),o[P]=y,this.trackIds&&(S[P]=this.popStack()),this.stringParams&&(b[P]=this.popStack(),v[P]=this.popStack());return g&&(p.args=this.source.generateArray(o)),this.trackIds&&(p.ids=this.source.generateArray(S)),this.stringParams&&(p.types=this.source.generateArray(b),p.contexts=this.source.generateArray(v)),this.options.data&&(p.data="data"),this.useBlockParams&&(p.blockParams="blockParams"),p},setupHelperArgs:function(t,e,o,p){var v=this.setupParams(t,e,o);return v.loc=JSON.stringify(this.source.currentLocation),v=this.objectLiteral(v),p?(this.useRegister("options"),o.push("options"),["options=",v]):o?(o.push(v),""):v}},(function(){for(var r="break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "),t=a.RESERVED_WORDS={},e=0,o=r.length;e<o;e++)t[r[e]]=!0})(),a.isValidJavaScriptVariableName=function(r){return!a.RESERVED_WORDS[r]&&/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(r)};function f(r,t,e,o,p){var v=t.popStack(),b=e.length;for(r&&b--;o<b;o++)v=t.nameLookup(v,e[o],p);return r?[t.aliasable("container.strict"),"(",v,", ",t.quotedString(e[o]),", ",JSON.stringify(t.source.currentLocation)," )"]:v}n.default=a,_.exports=n.default})(Me,Me.exports)),Me.exports}var Nt;function Lr(){return Nt||(Nt=1,(function(_,n){n.__esModule=!0;function u(b){return b&&b.__esModule?b:{default:b}}var h=hr(),m=u(h),c=Kt(),d=u(c),l=mr(),s=gr(),i=Pr(),a=u(i),f=Jt(),r=u(f),t=Wt(),e=u(t),o=m.default.create;function p(){var b=o();return b.compile=function(S,g){return s.compile(S,g,b)},b.precompile=function(S,g){return s.precompile(S,g,b)},b.AST=d.default,b.Compiler=s.Compiler,b.JavaScriptCompiler=a.default,b.Parser=l.parser,b.parse=l.parse,b.parseWithoutProcessing=l.parseWithoutProcessing,b}var v=p();v.create=p,e.default(v),v.Visitor=r.default,v.default=v,n.default=v,_.exports=n.default})(le,le.exports)),le.exports}var Er=Lr();const N=Yt(Er),xr=`<div class="form-group">
  <div class="form-field">
    <label class="form-field__label" for="{{id}}">{{label}}</label>
    <input
        type="{{type}}"
        id="{{id}}"
        name="{{name}}"
        class="form-input {{#if error}}form-input--error{{/if}}"
        placeholder="{{placeholder}}"
        value="{{value}}"
        {{#if required}}required{{/if}}
        {{#if disabled}}disabled{{/if}}
        data-testid="{{testId}}"
    />
    <div class="form-field__error error-{{name}}">
        {{#if error}}
            <span class="error-message">{{error}}</span>
        {{/if}}

        {{#if helpText}}
            <small class="help-text">{{helpText}}</small>
        {{/if}}
    </div>
  </div>
</div>
`,Mr=`<button class="button" type="{{type}}">
  {{text}}
</button>
`,Ir=`<aside class="messenger__sidebar">
  <header class="messenger__sidebar-header">
    <a class="messenger__profile-link" href="/profile" data-link data-link-profile>Профиль</a>
    <input class="messenger__search" type="text" placeholder="Поиск 🔎" />
  </header>

  <ul class="messenger__chat-list">
    {{#each chats}}
      {{> chat-item}}
    {{/each}}
  </ul>
</aside>
`,Ar=`<li class="chat-item">
  <div class="chat-item__avatar">{{initials}}</div>
  <div class="chat-item__content">
    <div class="chat-item__top">
      <span class="chat-item__title">{{title}}</span>
      <span class="chat-item__time">{{time}}</span>
    </div>
    <div class="chat-item__bottom">
      <span class="chat-item__last">{{lastMessage}}</span>
      {{#if unread}}
        <span class="chat-item__badge">{{unread}}</span>
      {{/if}}
    </div>
  </div>
</li>
`,Or=`<ul class="messenger__messages">
  {{#each messages}}
    {{> message-item}}
  {{/each}}
</ul>
`,Dr=`<li class="message message--{{type}}">
  <div class="message__bubble">
    <p class="message__text">{{text}}</p>
    <span class="message__time">{{time}}</span>
  </div>
</li>
`,Nr=`<section class="chat-preview" aria-label="Превью чата с ИИ">
  <div class="chat-preview__window">
    <header class="chat-preview__header">
      <div class="chat-preview__title">
        <span class="chat-preview__logo-dot"></span>
        <span>Чат-эксперт</span>
      </div>
      <span class="chat-preview__status">Online</span>
    </header>

    <div class="chat-preview__messages">
      <article class="chat-preview-message chat-preview-message--assistant">
        <div class="chat-preview-message__avatar chat-preview-message__avatar--assistant">
          X
        </div>
        <div class="chat-preview-message__bubble">
          <p class="chat-preview-message__text">
            Привет! Я помогу найти ответы на важные вопросы и разобраться в сложной теме.
          </p>
        </div>
      </article>

      <article class="chat-preview-message chat-preview-message--user">
        <div class="chat-preview-message__avatar chat-preview-message__avatar--user">
          MD
        </div>
        <div class="chat-preview-message__bubble">
          <p class="chat-preview-message__text">
            Как мне в жизни найти свой путь к счастью?
          </p>
        </div>
      </article>

      <article class="chat-preview-message chat-preview-message--assistant">
        <div class="chat-preview-message__avatar chat-preview-message__avatar--assistant">
          X
        </div>
        <div class="chat-preview-message__bubble">
          <p class="chat-preview-message__text">
            Это вопрос, который волнует каждого. Универсального "пути" не существует. 
            Счастье — это не точка назначения, а способ передвижения. Подсказать несколько направлений?
          </p>
        </div>
      </article>
    </div>

    <footer class="chat-preview__input">
      <div class="chat-preview__input-bar">
        <span class="chat-preview__placeholder">
          Задайте вопрос про учебу, работу или жизнь…
        </span>
        <span class="chat-preview__send-pill">▸</span>
      </div>
    </footer>
  </div>
</section>
`,Rr=`<header class="chat-thread__header">
  <div class="chat-thread__left">
    <div class="chat-thread__avatar">
      <span>
        <a href="/profile" class="message__avatar-link" data-link-profile>Г</a>
      </span>
    </div>
    <div>
      <h1 class="chat-thread__title">тет-а-теты</h1>
      <p class="chat-thread__subtitle">
        Групповой чат с мега-экспертами
      </p>
    </div>
  </div>

  <div class="chat-thread__right">
    <div class="chat-thread__profile">
      <span class="chat-thread__profile-name">
        <a href="/profile" class="message__avatar-link" data-link-profile>ivanivanov</a>
      </span>
    </div>

    <div class="chat-thread__menu">
      <button
        type="button"
        class="chat-thread__menu-btn"
        id="chat-menu-toggle"
        aria-haspopup="true"
        aria-expanded="false"
      >
        ⋮
      </button>
      <div class="chat-thread__menu-dropdown" id="chat-menu">
        <button type="button" class="chat-thread__menu-item" data-action="add-user">
          Добавить пользователя
        </button>
        <button type="button" class="chat-thread__menu-item" data-action="remove-user">
          Удалить пользователя
        </button>
      </div>
    </div>
  </div>
</header>
`,qr=`<aside class="chat-sidebar" data-chat-sidebar>
  <header class="chat-sidebar__header">
    <div class="chat-sidebar__title">
      <span class="chat-sidebar__logo-dot"></span>
      <span>Диалоги</span>
    </div>
  </header>

  <div class="chat-sidebar__search">
    <input
      type="text"
      class="chat-sidebar__search-input"
      placeholder="Поиск по чатам"
      aria-label="Поиск по чатам"
    />
  </div>
  <div class="chat-sidebar__create-wrapper">
    <button
      id="open-create-chat"
      class="chat-sidebar__create-btn"
      type="button"
    >
      + Новый чат
    </button>
  </div>

  <div class="chat-sidebar__body">
    <div
      id="create-chat-panel"
      class="chat-sidebar__create-panel"
    >
      <form id="create-chat-form" class="chat-sidebar__create-form">
        <input
          name="title"
          type="text"
          class="chat-sidebar__create-input"
          placeholder="Название чата"
        />
        <button class="btn btn--primary chat-sidebar__create-submit" type="submit">
          Создать чат
        </button>
      </form>
    </div>

    <nav class="chat-sidebar__list">
      {{!-- Cписок чатов заполняется из JS в [data-chats-list] --}}
      <ul class="chat-list" data-chats-list></ul>
    </nav>
  </div>
</aside>
`,Br=`<form class="chat-input" id="chat-form">
  <div class="chat-input__inner">
    <div class="chat-input__attach-wrapper">
      <button
        type="button"
        class="chat-input__icon-btn"
        id="attach-toggle"
        aria-haspopup="true"
        aria-expanded="false"
      >
        📎
      </button>
      <div class="chat-input__attach-menu" id="attach-menu">
        <button type="button" class="chat-input__attach-item" data-type="photo">
          Фото или видео
        </button>
        <button type="button" class="chat-input__attach-item" data-type="file">
          Файл
        </button>
        <button type="button" class="chat-input__attach-item" data-type="location">
          Локация
        </button>
      </div>
    </div>

    <textarea
      class="chat-input__textarea"
      name="message"
      id="message"
      rows="1"
      placeholder="Задайте вопрос про учебу, работу или отношения…"
    ></textarea>

    <button type="submit" class="btn btn--primary chat-input__send">
      Отправить
    </button>
  </div>
</form>

<section class="avatar-modal chat-upload-modal" id="upload-modal" aria-hidden="true">
  <h1 class="avatar-modal__title" id="upload-modal-title">Загрузите файл</h1>
  <p class="avatar-modal__subtitle" id="upload-modal-subtitle">
  </p>
  <label class="avatar-modal__file-label">
    <span id="upload-modal-label">Выбрать файл на устройстве</span>
    <input
      type="file"
      name="attachment"
      class="avatar-modal__file-input"
      id="upload-modal-input"
    />
  </label>
  <button type="button" class="btn btn--primary avatar-modal__btn" id="upload-modal-submit">
    Поменять
  </button>
</section>
<div class="chat-upload-backdrop" id="upload-backdrop" aria-hidden="true"></div>
`,Tr=`<section class="chat-thread" aria-label="Лента сообщений">
  <div class="chat-thread__messages" id="chat-messages" data-chat-messages>
    {{!-- <article class="message message--assistant">
      <div class="message__avatar message__avatar--user">
        <a href="/profile" class="message__avatar-link"  data-link-profile>Э</a>
      </div>
      <div class="message__content">
        <div class="message__meta">
          <span class="message__author">Эксперт</span>
          <span class="message__time">11:00</span>
        </div>
        <div class="message__bubble">
          <p class="chat-preview-message__text">
          Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то
          момент попросила Хассельблад адаптировать модель SWC для полётов на Луну…
          </p>
        </div>
      </div>
    </article>

    <article class="message message--assistant">
      <div class="message__avatar message__avatar--user">
        <a href="/profile" class="message__avatar-link" data-link-profile>Э</a>
      </div>
      <div class="message__content">
        <div class="message__meta">
          <span class="message__author">Эксперт</span>
          <span class="message__time">11:01</span>
        </div>
        <div class="message__bubble message__bubble--image">
          <img
            src="/assets/image-cam.png"
            alt="Камера Hasselblad"
            class="message__image"
          />
          <p class="chat-preview-message__text">
            Всего было произведено 25 экземпляров этой модификации, одну из них недавно продали на
            аукционе за 45&nbsp;000&nbsp;евро.
          </p>
        </div>
      </div>
    </article>

    <article class="message message--user">
      <div class="message__avatar message__avatar--user">
        <a href="/profile" class="message__avatar-link" data-link-profile>И</a>
      </div>
      <div class="message__content">
        <div class="message__meta">
          <span class="message__author">Вы</span>
          <span class="message__time">11:12</span>
        </div>
        <div class="message__bubble">
          <p class="chat-preview-message__text">
          Круто!
          </p>
        </div>
      </div>
    </article> --}}
  </div>
</section>
`,Hr=`<aside class="profile-sidebar">
  <button
    type="button"
    class="profile-sidebar__back"
    aria-label="Вернуться назад"
    onclick="window.history.back()"
  >
    ←
  </button>
</aside>

`,Ur=`<div class="app-shell">
  {{{body}}}
</div>
`,Fr=()=>{N.registerPartial("input",xr),N.registerPartial("button",Mr),N.registerPartial("chat-list",Ir),N.registerPartial("chat-item",Ar),N.registerPartial("message-list",Or),N.registerPartial("message-item",Dr),N.registerPartial("chat-preview",Nr),N.registerPartial("chat-header",Rr),N.registerPartial("chat-sidebar",qr),N.registerPartial("chat-input",Br),N.registerPartial("chat-messages",Tr),N.registerPartial("profile-sidebar",Hr),N.registerPartial("main",Ur)},Vr=_=>_==null?"":String(_).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),Gr=()=>{N.registerHelper("safeText",_=>Vr(_))};class Wr{pathname;BlockClass;blockInstance=null;rootQuery;constructor(n,u,h){this.pathname=n,this.BlockClass=u,this.rootQuery=h}navigate(n){this.match(n)&&(this.pathname=n,this.render())}leave(){this.blockInstance&&this.blockInstance.hide()}match(n){return n===this.pathname}render(){this.blockInstance||(this.blockInstance=new this.BlockClass),this.blockInstance&&(this.blockInstance.mount(this.rootQuery),this.blockInstance.show())}}class z{static __instance=null;routes=[];currentRoute=null;rootQuery;constructor(n){this.rootQuery=n}static init(n){return z.__instance||(z.__instance=new z(n)),z.__instance}static getInstance(){if(!z.__instance)throw new Error("Router is not initialized. Call Router.init() first.");return z.__instance}use(n,u){const h=new Wr(n,u,this.rootQuery);return this.routes.push(h),this}start(){window.onpopstate=()=>{this._onRoute(window.location.pathname)},this._onRoute(window.location.pathname)}go(n){window.location.pathname!==n&&(window.history.pushState({},"",n),this._onRoute(n))}back(){window.history.back()}forward(){window.history.forward()}getRoute(n){return this.routes.find(u=>u.match(n))}_onRoute(n){const u=this.getRoute(n);u&&(this.currentRoute&&this.currentRoute.leave(),this.currentRoute=u,u.render())}}const D=z.init("#app");class Xt{listeners={};on(n,u){const h=this.listeners[n]??[];h.push(u),this.listeners[n]=h}off(n,u){const h=this.listeners[n];h&&(this.listeners[n]=h.filter(m=>m!==u))}emit(n,...u){const h=this.listeners[n];h&&h.forEach(m=>{m(...u)})}}function Kr(_){return typeof _=="object"&&_!==null}function Jr(_,n,u){const h=n.split(".");let m=_;return h.forEach((c,d)=>{d===h.length-1?m[c]=u:(Kr(m[c])||(m[c]={}),m=m[c])}),_}const Rt={user:null,chats:[],activeChatId:null,messages:{}},ne={Updated:"updated"};class Q{static __instance=null;state={...Rt};eventBus;constructor(){this.eventBus=new Xt}static init(){return Q.__instance||(Q.__instance=new Q),Q.__instance}static getInstance(){if(!Q.__instance)throw new Error("Store не инициализирован. Надо вызвать Store.init().");return Q.__instance}getState(){return this.state}set(n,u){Jr(this.state,n,u),this.eventBus.emit(ne.Updated,this.state)}setState(n){this.state={...this.state,...n},this.eventBus.emit(ne.Updated,this.state)}reset(){this.state={...Rt},this.eventBus.emit(ne.Updated,this.state)}onUpdate(n){this.eventBus.on(ne.Updated,n)}offUpdate(n){this.eventBus.off(ne.Updated,n)}}const M=Q.init(),zr="https://ya-praktikum.tech/api/v2",K="https://ya-praktikum.tech/api/v2/resources";class oe{baseUrl;constructor(n=""){this.baseUrl=`${zr}${n}`}get=(n,u={})=>this.request(n,"GET",u);put=(n,u={})=>this.request(n,"PUT",u);post=(n,u={})=>this.request(n,"POST",u);delete=(n,u={})=>this.request(n,"DELETE",u);request(n,u,h){const{data:m,headers:c={},timeout:d=5e3}=h;return new Promise((l,s)=>{const i=new XMLHttpRequest,a=u==="GET";let f=`${this.baseUrl}${n}`;if(a&&m){const r=new URLSearchParams(m).toString();f=`${f}?${r}`}i.open(u,f),i.withCredentials=!0,i.timeout=d,Object.entries(c).forEach(([r,t])=>{i.setRequestHeader(r,t)}),i.onload=()=>{const{status:r}=i,{responseText:t}=i;let e=t;try{e=t&&JSON.parse(t)}catch{}r>=200&&r<300?l(e):s({status:r,...e||{}})},i.onabort=()=>s(new Error("Request aborted")),i.ontimeout=()=>s(new Error("Request timeout")),i.onerror=()=>s(new Error("Network error")),a||!m?i.send():m instanceof FormData?i.send(m):(i.setRequestHeader("Content-Type","application/json"),i.send(JSON.stringify(m)))})}}const De=new oe("/auth");class Qr{signUp(n){return De.post("/signup",{data:n})}async signIn(n){return De.post("/signin",{data:n}).catch(u=>{throw console.error("AuthAPI.signIn error",u),u})}getUser(){return De.get("/user")}logout(){return De.post("/logout")}}const J=new Qr,Zr={INIT:"init",FLOW_CDM:"flow:component-did-mount",FLOW_CDU:"flow:component-did-update",FLOW_RENDER:"flow:render"};class O{props;static EVENTS=Zr;eventBus;_element=null;_meta;_unsubscribeLocalListeners=[];_unsubscribeGlobalListeners=[];addDOMListener(n,u,h){n.addEventListener(u,h),this._unsubscribeLocalListeners.push(()=>{n.removeEventListener(u,h)})}addGlobalListener(n,u,h){n.addEventListener(u,h),this._unsubscribeGlobalListeners.push(()=>{n.removeEventListener(u,h)})}constructor(n="div",u={}){this.eventBus=new Xt,this._meta={tagName:n,props:u},this.props=this._makePropsProxy(u),this._registerEvents(),this.eventBus.emit(O.EVENTS.INIT)}_registerEvents(){this.eventBus.on(O.EVENTS.INIT,this.init.bind(this)),this.eventBus.on(O.EVENTS.FLOW_CDM,this._componentDidMount.bind(this)),this.eventBus.on(O.EVENTS.FLOW_CDU,this._componentDidUpdate.bind(this)),this.eventBus.on(O.EVENTS.FLOW_RENDER,this._render.bind(this))}init(){this._createResources(),this.eventBus.emit(O.EVENTS.FLOW_RENDER)}_createResources(){const{tagName:n}=this._meta;this._element=this._createDocumentElement(n)}setProps(n){if(!n)return;const u={...this.props};let h=!1;if(Object.entries(n).forEach(([c,d])=>{this.props[c]!==d&&(h=!0,this.props[c]=d)}),!h)return;const m={...this.props};this.eventBus.emit(O.EVENTS.FLOW_CDU,u,m)}_makePropsProxy(n){return new Proxy(n,{get(u,h){const m=u[h];return typeof m=="function"?m.bind(u):m},set(u,h,m){return u[h]=m,!0},deleteProperty(){throw new Error("Нет доступа")},defineProperty(u,h,m){return Reflect.defineProperty(u,h,m)}})}_componentDidMount(){this.componentDidMount()}componentDidMount(){}dispatchComponentDidMount(){this.eventBus.emit(O.EVENTS.FLOW_CDM)}_componentDidUpdate(n,u){const h=this.componentDidUpdate(n,u);(typeof h!="boolean"||h)&&this.eventBus.emit(O.EVENTS.FLOW_RENDER)}componentDidUpdate(n,u){return!0}_render(){const n=this.render();if(!this._element)return;const u=document.createElement("template");for(u.innerHTML=n;this._element.firstChild;)this._element.removeChild(this._element.firstChild);this._element.appendChild(u.content),this.componentDidMount()}mount(n){const u=document.querySelector(n);if(!u)return;u.innerHTML="";const h=this.getContent();h&&u.appendChild(h)}getContent(){return this._element}_createDocumentElement(n){return document.createElement(n)}show(){this._element&&(this._element.style.display="block")}hide(){this._element&&(this._element.style.display="none")}removeLocalDOMListeners(){this._unsubscribeLocalListeners.forEach(n=>n()),this._unsubscribeLocalListeners=[]}removeGlobalDOMListeners(){this._unsubscribeGlobalListeners.forEach(n=>n()),this._unsubscribeGlobalListeners=[]}destroy(){this.removeLocalDOMListeners(),this.removeGlobalDOMListeners()}}function ae(_){return class extends O{pageInstance=null;constructor(u){super("div",u)}async componentDidMount(){if(!M.getState().user)try{const d=await J.getUser();M.setState({user:d})}catch{M.setState({user:null}),D.go("/login");return}this.pageInstance=new _({});const h=this.getContent();if(!h)return;const m=this.pageInstance.getContent();if(!m)return;h.innerHTML=`
        <div class="app-layout">
          <aside class="app-layout__sidebar">
            <!-- здесь будет меню -->
          </aside>
          <main class="app-layout__main"></main>
        </div>
      `;const c=h.querySelector(".app-layout__main");c&&c.appendChild(m)}render(){return'<div class="app-layout"></div>'}}}function Z(_,n){return window.Handlebars&&typeof window.Handlebars.compile=="function"?window.Handlebars.compile(_)(n):_}const Xr=/^[A-ZА-ЯЁ][A-Za-zА-ЯЁа-яё-]*$/,Yr=/^(?!\d+$)[A-Za-z0-9_-]{3,20}$/,jr=/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,$r=/^\+?\d{10,15}$/,en=/[A-Z]/,tn=/\d/,rn=_=>{switch(_){case"first_name":return"Имя";case"second_name":return"Фамилия";case"display_name":return"Имя в чате";case"login":return"Логин";case"email":return"Почта";case"phone":return"Телефон";case"password":case"oldPassword":case"newPassword":case"repeatPassword":return"Пароль";default:return"Поле"}},se=(_,n)=>{const u=m=>{const{name:c}=m,d=m.value.trim(),l=rn(c);let s="";if(!d)s=`${l} обязательно для заполнения`;else if(["first_name","second_name","display_name"].includes(c)&&(Xr.test(d)||(s=`${l} должно начинаться с заглавной буквы и содержать только буквы или дефис`)),c==="login"&&(Yr.test(d)||(s='Логин от 3 до 20 символов, латиница, цифры, "-" и "_", не только цифры')),c==="email"&&(jr.test(d)||(s="Некорректный формат почты")),c==="phone"&&($r.test(d)||(s='Телефон должен содержать от 10 до 15 цифр и может начинаться с "+"')),(c==="password"||c==="oldPassword"||c==="newPassword"||c==="repeatPassword")&&(d.length<8||d.length>40?s="Пароль должен быть от 8 до 40 символов":en.test(d)?tn.test(d)||(s="Пароль должен содержать хотя бы одну цифру"):s="Пароль должен содержать хотя бы одну заглавную латинскую букву"),c==="repeatPassword"){const f=_.querySelector('input[name="newPassword"]')||_.querySelector('input[name="password"]');f&&f.value&&f.value!==d&&(s="Пароли не совпадают")}const a=m.closest(".form__field")?.querySelector(".form__error");a&&(a.textContent=s),s&&console.error(`[validateField] ${c}: ${s}`)};return{validateField:u,validateForm:()=>{const m=Array.from(_.querySelectorAll("input, textarea")),c={};m.forEach(l=>{u(l);const a=l.closest(".form__field")?.querySelector(".form__error")?.textContent??"";a&&(c[l.name]=a)});const d=Object.keys(c).length===0;if(d&&n?.logOnSuccess){const l=Object.fromEntries(new FormData(_).entries());console.log("[formValidation] Данные успешно отправлены",l)}return{valid:d,errors:c}}}},nn=`<div class="app-shell">
  <main class="auth">
    <section class="auth-card">
      <header class="auth-card__header">
        {{!-- button class="theme-toggle" type="button" data-theme-toggle>🌓</button> --}}
        <h1 class="auth-card__title">Регистрация</h1>
        <p class="auth-card__subtitle">Создайте аккаунт, чтобы продолжить</p>
      </header>

      <form class="form" id="register-form">
        <div class="form__field">
          <label for="first_name" class="form__label">Имя</label>
          <input
            id="first_name"
            name="first_name"
            type="text"
            class="form__input"
          />
          <p class="form__error"></p>
        </div>

        <div class="form__field">
          <label for="second_name" class="form__label">Фамилия</label>
          <input
            id="second_name"
            name="second_name"
            type="text"
            class="form__input"
          />
          <p class="form__error"></p>
        </div>

        <div class="form__field">
          <label for="login" class="form__label">Логин</label>
          <input
            id="login"
            name="login"
            type="text"
            class="form__input"
          />
          <p class="form__error"></p>
        </div>

        <div class="form__field">
          <label for="email" class="form__label">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            class="form__input"
          />
          <p class="form__error"></p>
        </div>

        <div class="form__field">
          <label for="password" class="form__label">Пароль</label>
          <input
            id="password"
            name="password"
            type="password"
            class="form__input"
          />
          <p class="form__error"></p>
        </div>

        <div class="form__field">
          <label for="password_confirm" class="form__label">Повторите пароль</label>
          <input
            id="password_confirm"
            name="password_confirm"
            type="password"
            class="form__input"
          />
          <p class="form__error"></p>
        </div>

        <div class="form__field">
          <label for="phone" class="form__label">Телефон</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            class="form__input"
          />
          <p class="form__error"></p>
        </div>

        <p class="form__error form__error--global" data-form-error></p>

        <div class="auth-card__footer">
          <button class="btn btn--primary btn--full" type="submit">
            <span>Зарегистрироваться</span>
          </button>
          <span>Уже есть аккаунт?
            <a class="link" data-link-logout href="/login" data-logout>Войти</a>
          </span>
        </div>
      </form>
    </section>
  </main>
</div>
`;class qt extends O{componentDidMount(){const n=this.getContent();if(!n)return;const u=n.querySelector("#register-form");if(!u)return;const h=n.querySelector("[data-form-error]"),{validateField:m,validateForm:c}=se(u,{logOnSuccess:!1});Array.from(u.querySelectorAll("input, textarea")).forEach(l=>{this.addDOMListener(l,"blur",s=>{const{target:i}=s;(i instanceof HTMLInputElement||i instanceof HTMLTextAreaElement)&&m(i)})}),this.addDOMListener(u,"submit",async l=>{if(l.preventDefault(),h&&(h.textContent=""),!c()){console.warn("RegisterPage: form is not valid");return}const i=new FormData(u),a=String(i.get("password")??""),f=String(i.get("password_confirm")??"");if(a!==f){h&&(h.textContent="Пароли не совпадают");return}const r={email:String(i.get("email")??""),login:String(i.get("login")??""),first_name:String(i.get("first_name")??""),second_name:String(i.get("second_name")??""),phone:String(i.get("phone")??""),password:a};try{await J.signUp(r),await J.signIn({login:r.login,password:r.password});const t=await J.getUser();M.setState({user:t}),D.go("/messenger")}catch(t){const o=(t&&typeof t=="object"&&"reason"in t?t:null)?.reason;console.error("RegisterPage signUp error",t),h&&(h.textContent=o||"Не удалось зарегистрироваться. Проверьте данные и попробуйте ещё раз.")}})}render(){return Z(nn,this.props)}}const an=`<main class="auth">
  <section class="auth-card">
    <header class="auth-card__header">
      <h1 class="auth-card__title">Вход в аккаунт</h1>
      <p class="auth-card__subtitle">
      </p>
    </header>

    <form class="form" id="login-form">
      <div class="form__field">
        <label for="login" class="form__label">Логин</label>
        <input
          id="login"
          name="login"
          type="text"
          autocomplete="username"
          class="form__input"
          required
        />
        <p class="form__error"></p>
      </div>

      <div class="form__field">
        <label for="password" class="form__label">Пароль</label>
        <input
          id="password"
          name="password"
          type="password"
          autocomplete="current-password"
          class="form__input"
          required
        />
        <p class="form__error" data-form-error></p>
      </div>

      <button type="submit" class="btn btn--primary btn--full">
        Вход
      </button>
    </form>

    <footer class="auth-card__footer">
      <span class="auth-card__hint">Нет аккаунта?</span>
      <a href="/register" class="link" data-link-register>Зарегистрироваться</a>
    </footer>
  </section>
</main>
`;class Bt extends O{componentDidMount(){const n=this.getContent();if(!n)return;const u=n.querySelector("#login-form");if(!u)return;const{validateField:h,validateForm:m}=se(u,{logOnSuccess:!1});Array.from(u.querySelectorAll("input, textarea")).forEach(d=>{this.addDOMListener(d,"blur",l=>{const{target:s}=l;(s instanceof HTMLInputElement||s instanceof HTMLTextAreaElement)&&h(s)})}),this.addDOMListener(u,"submit",async d=>{d.preventDefault();const l=n.querySelector("[data-form-error]");if(l&&(l.textContent=""),!m())return;const i=new FormData(u),a=String(i.get("login")??""),f=String(i.get("password")??"");try{await J.signIn({login:a,password:f});const r=await J.getUser();M.setState({user:r}),D.go("/messenger")}catch(r){const e=(r&&typeof r=="object"&&"reason"in r?r:null)?.reason;if(e==="User already in system")try{const o=await J.getUser();M.setState({user:o}),D.go("/messenger");return}catch(o){console.error("LoginPage getUser пользователь уже авторизован",o)}console.error("LoginPage signIn error",r),l&&(l.textContent=e||"Не удалось войти. Проверьте логин и пароль.")}})}render(){return Z(an,this.props)}}class sn extends O{constructor(n={}){super("div",n)}async componentDidMount(){try{await J.logout()}catch(n){console.error("[LogoutPage] logout error",n)}finally{M.setState({user:null}),D.go("/login")}}render(){return"<p>Выход из аккаунта…</p>"}}const W=new oe("/chats");class on{async getChats(n={}){const u=await W.get("",{data:n});return!u||u.length===0?[{id:-1,title:"Демо-чат с камерой",avatar:null,unread_count:0,created_by:0,last_message:null}]:u}createChat(n){return W.post("",{data:n})}deleteChat(n){return W.delete("",{data:{chatId:n}})}getChatUsers(n){return W.get(`/${n}/users`)}findUsersByLogin(n){const u={login:n};return W.post("/user/search",{data:u})}addUsersToChat(n){return W.put("/users",{data:n})}deleteUsersFromChat(n){return W.delete("/users",{data:n})}getChatToken(n){return W.post(`/token/${n}`)}updateChatAvatar(n,u){const h=new FormData;return h.append("chatId",String(n)),h.append("avatar",u),W.put("/avatar",{data:h})}}const B=new on,ln=`<div class="app-shell">
  <header class="landing-nav">
    <div class="landing-nav__inner">
      <div class="landing-nav__brand">
        <span class="landing-nav__dot"></span>
        <a href="/" class="landing-nav__link" data-link data-link-home>
          <span>Chat App</span>
        </a>
      </div>
      <nav class="landing-nav__links" id="nav-links">
        <a
          href="/settings"
          class="landing-nav__link landing-nav__link--primary"
          data-link
          data-link-profile
        >
          Профиль
        </a>
        <a href="/logout" class="landing-nav__link" data-link-logout data-logout>Выход</a>
      </nav>
    </div>
  </header>

  <section class="chat-layout">
    {{> chat-sidebar}}

    <div class="chat-main">
      <header class="chat-thread__header">
        <div class="chat-thread__left">
          <div class="chat-thread__avatar" data-chat-avatar>?</div>
          <div>
            <h2 class="chat-thread__title" data-chat-title>Выберите чат</h2>
            <p class="chat-thread__subtitle" data-chat-subtitle>
              {{!-- Сообщения появятся здесь, после выбора чата --}}
            </p>
          </div>
          <div class="chat-thread__all">
            <button
              id="chat-avatar-change"
              class="chat-thread__avatar-change-btn"
              type="button"
              aria-label="Изменить аватар чата"
            >
              ✎
            </button>
            <input
              id="chat-avatar-input"
              type="file"
              accept="image/*"
              hidden
            />
          </div>
        </div>

        <div class="chat-thread__right">
          <a
            href="/settings"
            class="link"
            data-link
            data-link-profile
            data-chat-username
          >
            <!-- имя подставляется из store -->
          </a>

          <div class="chat-thread__menu">
            <button
              id="chat-menu-toggle"
              class="chat-thread__menu-btn"
              type="button"
            >
              ⋮
            </button>
            <div id="chat-menu" class="chat-thread__menu-dropdown">
              <button
                class="chat-thread__menu-item"
                type="button"
                data-modal-open="add-user"
              >
                Добавить пользователя
              </button>
              <button
                class="chat-thread__menu-item"
                type="button"
                data-modal-open="remove-user"
              >
                Удалить пользователя
              </button>
              <button
                class="chat-thread__menu-item"
                type="button"
                data-chat-action="change-avatar"
              >
                Изменить аватар чата
              </button>
              <button
                class="chat-thread__menu-item"
                type="button"
                data-chat-action="leave-chat"
              >
                Покинуть чат
              </button>
              <button
                class="chat-thread__menu-item"
                type="button"
                data-chat-action="delete-chat"
              >
                Удалить чат
              </button>
            </div>
          </div>
          <input
            id="chat-avatar-input"
            type="file"
            accept="image/*"
            hidden
          />
        </div>
      </header>

      <div class="chat-thread__messages" data-chat-messages>
        {{!-- сюда рисуем сообщения --}}
      </div>

      <form class="chat-input" id="chat-message-form">
        <div class="chat-input__inner">
          <div class="chat-input__attach-wrapper">
            <button
              id="attach-toggle"
              class="chat-input__icon-btn"
              type="button"
            >
              📎
            </button>

            <div id="attach-menu" class="chat-input__attach-menu">
              <button
                class="chat-input__attach-item"
                type="button"
                data-type="photo"
              >
                Фото или видео
              </button>
              <button
                class="chat-input__attach-item"
                type="button"
                data-type="file"
              >
                Файл
              </button>
              <button
                class="chat-input__attach-item"
                type="button"
                data-type="location"
              >
                Локация
              </button>
            </div>
          </div>

          <textarea
            class="chat-input__textarea"
            name="message"
            placeholder="Напишите сообщение…"
          ></textarea>

          <button class="btn btn--primary chat-input__send" type="submit">
            Отправить
          </button>
        </div>
      </form>
    </div>
  </section>

  <div class="chat-sidebar-backdrop" data-chat-sidebar-backdrop></div>

  {{!-- модалка добавления пользователя --}}
  <div id="user-modal-add" class="chat-user-modal">
    <div class="modal">
      <h2 class="modal__title">Добавить пользователя</h2>

      <div class="chat-user-modal__field">
        <label class="form__label" for="add-login">Логин пользователя</label>
        <input id="add-login" class="form__input" type="text" />
      </div>

      <div class="modal__actions">
        <button
          id="user-modal-add-submit"
          class="btn btn--primary"
          type="button"
        >
          Добавить в чат
        </button>
        <button
          id="user-modal-add-close"
          class="btn btn--ghost"
          type="button"
        >
          Закрыть
        </button>
      </div>

      <p class="chat-user-modal__error" data-user-modal-add-error></p>
    </div>
  </div>

  {{!-- модалка удаления пользователя --}}
  <div id="user-modal-remove" class="chat-user-modal">
    <div class="modal">
      <h2 class="modal__title">Участники чата</h2>

      <ul class="chat-user-modal__list" data-chat-users>
        {{!-- сюда подставим список через JS --}}
      </ul>

      <div class="modal__actions">
        <button
          id="user-modal-remove-close"
          class="btn btn--ghost"
          type="button"
        >
          Закрыть
        </button>
      </div>

      <p class="chat-user-modal__error" data-user-modal-remove-error></p>
    </div>
  </div>

  <div id="user-modal-backdrop" class="chat-user-backdrop"></div>

  <div id="upload-modal" class="chat-upload-modal" data-modal="attach">
    <div class="modal">
      <h2 class="modal__title" data-modal-title>Загрузка файла</h2>
      <input
        id="upload-file"
        name="file"
        class="profile-form__input"
        type="file"
      />
      <div class="modal__actions">
        <button id="upload-close" class="btn btn--primary" type="button">
          Закрыть
        </button>
      </div>
    </div>
  </div>

  <div id="upload-backdrop" class="chat-upload-backdrop"></div>
</div>
`;class cn{socket=null;status="idle";pingIntervalId=null;activeChatId=null;listeners=[];subscribe(n){this.listeners.push(n)}unsubscribe(n){this.listeners=this.listeners.filter(u=>u!==n)}notify(n){this.listeners.forEach(u=>u(n))}async connect(n){const h=M.getState().user;if(!h)throw new Error("User is not authorized");if(this.socket&&this.activeChatId===n&&this.status==="open")return;this.disconnect(),this.status="connecting",this.activeChatId=n;const{token:m}=await B.getChatToken(n),c=`wss://ya-praktikum.tech/ws/chats/${h.id}/${n}/${m}`;this.socket=new WebSocket(c),this.socket.addEventListener("open",()=>{this.status="open",console.log("[ChatSocket] open for chat",n),this.send({type:"get old",content:"0"}),this.pingIntervalId=window.setInterval(()=>{this.send({type:"ping"})},1e4)}),this.socket.addEventListener("close",d=>{this.status="closed",console.log("[ChatSocket] closed",d.code,d.reason),d.wasClean||setTimeout(()=>{this.activeChatId&&this.connect(this.activeChatId).catch(l=>{console.error("[ChatSocket] reconnect failed",l)})},3e3),this.clearPing()}),this.socket.addEventListener("message",d=>{if(!d.data)return;let l;try{l=JSON.parse(d.data)}catch(i){console.error("[ChatSocket] Не вышло спарсить сообщение",i,d.data);return}if(Array.isArray(l)){const a=[...l].sort((r,t)=>new Date(r.time).getTime()-new Date(t.time).getTime()).filter((r,t,e)=>e.findIndex(o=>o.id===r.id)===t),f=M.getState();M.setState({messages:{...f.messages??{},[n]:a}}),a.forEach(r=>this.notify(r));return}const s=l;if(s.type==="message"||s.type==="file"){const i=M.getState(),r=[...(i.messages?.[n]??[]).filter(t=>t.id!==s.id),s].sort((t,e)=>new Date(t.time).getTime()-new Date(e.time).getTime());M.setState({messages:{...i.messages??{},[n]:r}}),this.notify(s)}}),this.socket.addEventListener("error",d=>{console.error("[ChatSocket] error",d)})}send(n){this.status!=="open"||!this.socket||this.socket.send(JSON.stringify(n))}sendMessage(n){this.send({content:n,type:"message"})}sendFile(n){this.send({content:n,type:"file"})}disconnect(){this.clearPing(),this.socket&&(this.socket.close(),this.socket=null),this.status="closed",this.activeChatId=null}clearPing(){this.pingIntervalId!==null&&(window.clearInterval(this.pingIntervalId),this.pingIntervalId=null)}}const Ne=new cn,un=new oe("/resources");class hn{uploadFile(n){const u=new FormData;return u.append("resource",n),un.post("",{data:u})}}const pn=new hn,dn=new oe("/user");class fn{findUsersByLogin(n){const u={login:n};return dn.post("/search",{data:u})}}const mn=new fn;class Ve extends O{constructor(n){const u={chats:[]};super("div",{...u,...n})}updateChatsList(n){const u=this.getContent();if(!u)return;const h=u.querySelector("[data-chats-list]");h&&(h.innerHTML=n.map(m=>{const c=m.last_message?.content??"",d=m.last_message?.time?new Date(m.last_message.time).toLocaleTimeString("ru-RU",{hour:"2-digit",minute:"2-digit"}):"",l=m.unread_count,s=m.title.charAt(0).toUpperCase(),i=m.avatar?`<div class="chat-sidebar__item-avatar chat-sidebar__item-avatar--image"
              style="background-image: url('${K}${m.avatar}');">
            </div>`:`<div class="chat-sidebar__item-avatar">
              ${s}
            </div>`;return`
          <li class="chat-list__item" data-chat-id="${m.id}">
            <button class="chat-sidebar__item" type="button">
              <div class="chat-sidebar__item-top">
                ${i}
                <span class="chat-sidebar__item-title">${m.title}</span>
                <span class="chat-sidebar__item-time">${d}</span>
              </div>
              <div class="chat-sidebar__item-bottom">
                <span class="chat-sidebar__item-subtitle">
                  ${c}
                </span>
                ${l>0?`<span class="chat-sidebar__item-unread">${l}</span>`:""}
              </div>
            </button>
          </li>`}).join(""),h.querySelectorAll("[data-chat-id]").forEach(m=>{m.addEventListener("click",async()=>{const c=Number(m.dataset.chatId);M.setState({activeChatId:c});const d=this.getContent();if(d){const l=d.querySelector("[data-chat-title]"),s=d.querySelector("[data-chat-avatar]"),i=d.querySelector("[data-chat-messages]"),a=n.find(f=>f.id===c);l&&(l.textContent=a?.title??"Чат"),s&&(a?.avatar?(s.textContent="",s.setAttribute("style",`background-image: url('${K}${a.avatar}');`)):(s.style.backgroundImage="",s.textContent=(a?.title??"?").charAt(0).toUpperCase())),i&&(c===-1?i.innerHTML=this.renderDemoThread():i.innerHTML='<p class="chat-thread__placeholder">Сообщения будут здесь</p>')}if(c!==-1)try{await Ne.connect(c);const l=await B.getChatUsers(c),s=M.getState();M.setState({chatUsers:{...s.chatUsers??{},[c]:l}})}catch(l){console.error("Не удалось подключить сокет чатов",l)}})}))}renderDemoThread(){return`
      <div class="chat-message chat-message--incoming">
        <div class="chat-message__avatar">Н</div>
        <div class="chat-message__content">
          <div class="chat-message__header">
            <span class="chat-message__author">Нил Армстронг</span>
            <span class="chat-message__time">21:56</span>
          </div>
          <div class="chat-message__bubble">
            Хассельблад SWC отлично подходит для съёмки на Луне…
          </div>
        </div>
      </div>
    `}async componentDidMount(){const n=this.getContent();if(!n)return;try{const r=await B.getChats({limit:50});M.setState({chats:r}),this.updateChatsList(r);const t=n.querySelector("[data-chat-avatar]");t&&this.addDOMListener(t,"click",()=>{this.handleChatAvatarChange(n)})}catch(r){console.error("ChatsPage: не удалось загрузить чаты",r)}const u=n.querySelector("#chat-message-form");if(u){const r=u.querySelector('textarea[name="message"]');this.addDOMListener(u,"submit",t=>{if(t.preventDefault(),!r)return;const o=r.value.trim();if(!o){console.warn("[ChatsPage] Пустое сообщение – отправка отменена");return}const v=M.getState().activeChatId;if(!v||v===-1){console.warn("[ChatsPage]: Нет выбранного реального чата");return}Ne.sendMessage(o),r.value=""})}document.querySelectorAll("[data-link]").forEach(r=>{r.addEventListener("click",t=>{t.preventDefault();const e=t.currentTarget.getAttribute("href");e&&D.go(e)})});const m=document.querySelector("[data-logout]");m&&m.addEventListener("click",r=>{r.preventDefault(),D.go("/logout")});const c=n.querySelector("#open-create-chat"),d=n.querySelector("#create-chat-panel"),l=n.querySelector("#create-chat-form");c&&d&&this.addDOMListener(c,"click",()=>{d.classList.toggle("chat-sidebar__create-panel--open")}),l&&this.addDOMListener(l,"submit",async r=>{r.preventDefault();const t=new FormData(l),e=String(t.get("title")??"").trim();if(e)try{await B.createChat({title:e});const o=await B.getChats({limit:50});M.setState({chats:o}),this.updateChatsList(o),l.reset(),d?.classList.remove("chat-sidebar__create-panel--open");const p=n.querySelector("[data-chat-messages]");p&&(p.innerHTML='<p class="chat-thread__placeholder">Сообщения здесь</p>')}catch(o){console.error("ChatsPage: не удалось создать новый чат",o)}});const s=n.querySelector("#chat-avatar-change"),i=n.querySelector("#chat-avatar-input");s&&i&&(this.addDOMListener(s,"click",()=>{i.click()}),this.addDOMListener(i,"change",async()=>{const r=i.files?.[0];if(!r)return;const t=M.getState(),e=t.activeChatId;if(!e||e===-1){console.warn("[ChatsPage] Нет выбранного чата для смены аватара");return}try{const o=await B.updateChatAvatar(e,r),p=(t.chats??[]).map(b=>b.id===o.id?o:b);M.setState({chats:p}),this.updateChatsList(p);const v=n.querySelector("[data-chat-avatar]");v&&(o.avatar?(v.innerHTML="",v.style.backgroundImage=`url("${K}${o.avatar}")`):(v.style.backgroundImage="",v.textContent=o.title.charAt(0).toUpperCase()))}catch(o){console.error("[ChatsPage] updateChatAvatar failed",o)}finally{i.value=""}}));const a=n.querySelector("#chat-add-user-form");a&&this.addDOMListener(a,"submit",async r=>{r.preventDefault();const e=M.getState().activeChatId;if(!e||e===-1)return;const o=new FormData(a),p=Number(o.get("userId")??0);if(p)try{console.log("[ChatsPage:addUser] chatId=",e,"userId=",p),await B.addUsersToChat({users:[p],chatId:e}),a.reset()}catch(v){console.error("ChatsPage: не удалось добавить пользователя",v)}});const f=n.querySelector("#chat-remove-user-form");f&&this.addDOMListener(f,"submit",async r=>{r.preventDefault();const e=M.getState().activeChatId;if(!e||e===-1)return;const o=new FormData(f),p=Number(o.get("userId")??0);if(p)try{console.log("[ChatsPage:removeUser] chatId=",e,"userId=",p),await B.deleteUsersFromChat({users:[p],chatId:e}),f.reset()}catch(v){console.error("ChatsPage: не удалось удалить пользователя",v)}}),Ne.subscribe(r=>{if(!n)return;const t=n.querySelector("[data-chat-messages]");if(!t)return;t.querySelector(".chat-thread__placeholder")&&(t.innerHTML="");const e=M.getState(),o=e.user?.id,p=r.user_id===o,{activeChatId:v,chatUsers:b}=e,y=(v?(b??{})[v]??[]:[]).find(E=>E.id===r.user_id),w=y?.display_name||y?.first_name||y?.login||"Пользователь",k=w.charAt(0).toUpperCase();let P="";const x=y?.avatar?`${K}${y.avatar}`:"";if(r.type==="file"){const E=r.content,I=`${K}${E}`,A=E.endsWith(".png")||E.endsWith(".jpg")||E.endsWith(".jpeg")||E.endsWith(".webp")||E.endsWith(".gif");P=`
          <div>
            <a href="${I}" target="_blank" rel="noopener noreferrer">
              ${A?`<img src="${I}" alt="file" class="chat-message__image" />`:"Файл"}
            </a>
          </div>
        `}else P=`<div>${r.content}</div>`;const L=new Date(r.time).toLocaleTimeString("ru-RU",{hour:"2-digit",minute:"2-digit"}),C=x?`<img src="${x}" alt="${w}" class="chat-message__avatar-image" />`:`<span class="chat-message__avatar-initial">${k}</span>`;t.insertAdjacentHTML("beforeend",`
          <div class="chat-message chat-message--${p?"outgoing":"incoming"}">
            <div class="chat-message__avatar">
              ${C}
            </div>
            <div class="chat-message__content">
              <div class="chat-message__header">
                <span class="chat-message__author">${w}</span>
                <span class="chat-message__time">${L}</span>
              </div>
              <div class="chat-message__bubble">
                ${P}
              </div>
            </div>
          </div>
        `),t.scrollTop=t.scrollHeight}),this.setupMenus(n)}setupMenus(n){const u=n.querySelector("#chat-menu-toggle"),h=n.querySelector("#chat-menu");u&&h&&(this.addDOMListener(u,"click",()=>{h.classList.toggle("chat-thread__menu-dropdown--open")}),this.addDOMListener(n,"click",o=>{const v=o.target;!h.contains(v)&&v!==u&&h.classList.remove("chat-thread__menu-dropdown--open")}),this.addDOMListener(h,"click",o=>{const v=o.target.closest(".chat-thread__menu-item");if(!v)return;const b=v.dataset.modalOpen,{chatAction:S}=v.dataset;if(v.dataset.chatAction==="change-avatar"){this.handleChatAvatarChange(n),h.classList.remove("chat-thread__menu-dropdown--open");return}if(S==="leave-chat"){this.handleLeaveChat(),h.classList.remove("chat-thread__menu-dropdown--open");return}if(S==="delete-chat"){this.handleDeleteChat(),h.classList.remove("chat-thread__menu-dropdown--open");return}if(!b)return;const y=b==="add-user"?"#user-modal-add":"#user-modal-remove",w=n.querySelector(y),k=n.querySelector("#user-modal-backdrop");!w||!k||(b==="remove-user"&&this.populateChatUsers(w).catch(P=>{console.error("[ChatsPage] failed to load chat users",P)}),w.classList.add("chat-user-modal--open"),k.classList.add("chat-user-backdrop--open"))}));const m=n.querySelector("#user-modal-add"),c=n.querySelector("#user-modal-remove"),d=n.querySelector("#user-modal-backdrop"),l=()=>{m?.classList.remove("chat-user-modal--open"),c?.classList.remove("chat-user-modal--open"),d?.classList.remove("chat-user-backdrop--open")};d&&this.addDOMListener(d,"click",()=>{l()}),m&&this.addDOMListener(m,"click",o=>{o.target.closest(".modal")||l()}),c&&this.addDOMListener(c,"click",o=>{o.target.closest(".modal")||l()}),this.addDOMListener(n,"keydown",o=>{o.key==="Escape"&&l()});const s=n.querySelector("#user-modal-add-submit"),i=n.querySelector("#user-modal-add-close"),a=n.querySelector("#add-login"),f=n.querySelector("[data-user-modal-add-error]");s&&a&&this.addDOMListener(s,"click",async()=>{f&&(f.textContent="");const o=a.value.trim();if(!o){f&&(f.textContent="Укажите логин пользователя");return}const v=M.getState().activeChatId;if(!v||v===-1){f&&(f.textContent="Чат не выбран");return}try{const S=(await mn.findUsersByLogin(o))[0];if(!S){f&&(f.textContent="Пользователь не найден");return}await B.addUsersToChat({users:[S.id],chatId:v}),a.value="",l()}catch(b){if(b&&typeof b=="object"&&"reason"in b){const{reason:S}=b;console.error("[ChatsPage] пользователи не добавлены",S)}else console.error("[ChatsPage] пользователи не добавлены",b)}}),i&&this.addDOMListener(i,"click",()=>{l()});const r=n.querySelector("#user-modal-remove-close");r&&this.addDOMListener(r,"click",()=>{l()});const t=n.querySelector("#attach-toggle"),e=n.querySelector("#attach-menu");t&&e&&(this.addDOMListener(t,"click",()=>{e.classList.toggle("chat-input__attach-menu--open")}),this.addDOMListener(e,"click",o=>{const v=o.target.closest(".chat-input__attach-item");if(!v)return;const b=v.dataset.type||(v.textContent??"").trim().toLowerCase();e.classList.remove("chat-input__attach-menu--open"),this.openAttachModal(b,n)}))}handleChatAvatarChange(n){const u=n.querySelector("#chat-avatar-input");u&&(u.value="",this.addDOMListener(u,"change",async()=>{const h=u.files?.[0];if(!h)return;const m=M.getState(),c=m.activeChatId;if(!c||c===-1){console.warn("[ChatsPage] Нет выбранного чата для смены аватара");return}try{const d=await B.updateChatAvatar(c,h),l=(m.chats??[]).map(i=>i.id===d.id?d:i);M.setState({chats:l}),this.updateChatsList(l);const s=n.querySelector("[data-chat-avatar]");s&&(d.avatar?(s.textContent="",s.style.backgroundImage=`url("${K}${d.avatar}")`,s.style.backgroundSize="cover",s.style.backgroundPosition="center"):(s.style.backgroundImage="",s.textContent=d.title.charAt(0).toUpperCase()))}catch(d){console.error("[ChatsPage] updateChatAvatar failed",d)}finally{u.value=""}}),u.click())}async handleDeleteChat(){const n=M.getState(),u=n.activeChatId,h=n.chats??[],m=n.user?.id;if(!u||u===-1){console.warn("[ChatsPage] Нет выбранного чата для удаления");return}const c=h.find(l=>l.id===u);if(!c)return;if(c.created_by!==m){console.warn("[ChatsPage] Только создатель чата может его удалить");return}if(window.confirm("Удалить этот чат? Его нельзя будет восстановить."))try{await B.deleteChat(u);const l=h.filter(i=>i.id!==u);M.setState({chats:l,activeChatId:void 0});const s=this.getContent();if(s){const i=s.querySelector("[data-chat-title]"),a=s.querySelector("[data-chat-avatar]"),f=s.querySelector("[data-chat-messages]");i&&(i.textContent="Выберите чат"),a&&(a.textContent="?",a.style.backgroundImage=""),f&&(f.innerHTML='<p class="chat-thread__placeholder">Сообщения появятся здесь, после выбора чата</p>')}this.updateChatsList(l)}catch(l){console.error("[ChatsPage] чат не удален",l)}}async handleLeaveChat(){const n=M.getState(),u=n.activeChatId,h=n.chats??[],m=n.user?.id;if(!u||u===-1||!m){console.warn("[ChatsPage] Нет выбранного чата или пользователя для выхода");return}if(window.confirm("Покинуть этот чат?"))try{await B.deleteUsersFromChat({users:[m],chatId:u});const d=h.filter(s=>s.id!==u);M.setState({chats:d,activeChatId:void 0});const l=this.getContent();if(l){const s=l.querySelector("[data-chat-title]"),i=l.querySelector("[data-chat-avatar]"),a=l.querySelector("[data-chat-messages]");s&&(s.textContent="Выберите чат"),i&&(i.textContent="?",i.style.backgroundImage=""),a&&(a.innerHTML='<p class="chat-thread__placeholder">Сообщения появятся здесь, после выбора чата</p>')}this.updateChatsList(d)}catch(d){console.error("[ChatsPage] Не удалось выйти из чата",d)}}async populateChatUsers(n){const h=M.getState().activeChatId;if(!h||h===-1)return;const m=n.querySelector("[data-chat-users]"),c=n.querySelector("[data-user-modal-remove-error]");if(m){c&&(c.textContent="");try{const d=await B.getChatUsers(h);if(!d.length){m.innerHTML="<li>В чате нет других участников</li>";return}m.innerHTML=d.map(l=>`
          <li
            class="chat-user-modal__item"
            data-user-id="${l.id}"
          >
            <span class="chat-user-modal__item-name">
              ${l.display_name||l.login}
            </span>
            <button
              class="chat-user-modal__item-remove"
              type="button"
            >
              Удалить
            </button>
          </li>`).join(""),m.querySelectorAll(".chat-user-modal__item-remove").forEach(l=>{this.addDOMListener(l,"click",async()=>{const s=l.closest(".chat-user-modal__item");if(!s)return;const i=Number(s.dataset.userId??0);if(i)try{await B.deleteUsersFromChat({users:[i],chatId:h}),s.remove()}catch(a){if(a&&typeof a=="object"&&"reason"in a){const{reason:f}=a;console.error("[ChatsPage] пользователь не удален",f)}else console.error("[ChatsPage] пользователь не удален",a)}})})}catch(d){if(d&&typeof d=="object"&&"reason"in d){const{reason:l}=d;console.error("[ChatsPage] список участников не получен",l)}else console.error("[ChatsPage] список участников не получен",d)}}}openAttachModal(n,u){const h=u.querySelector("#upload-modal"),m=u.querySelector("#upload-backdrop"),c=h?.querySelector("#upload-file");if(!h||!m||!c)return;const d=h.querySelector("[data-modal-title]");d&&(n.includes("фото")||n.includes("видео")||n==="photo"?d.textContent="Прикрепить фото или видео":n.includes("файл")||n==="file"?d.textContent="Прикрепить файл":n.includes("локация")||n==="location"?d.textContent="Поделиться локацией (пока файл)":d.textContent="Прикрепить вложение"),c.value="",h.classList.add("chat-upload-modal--open"),m.classList.add("chat-upload-backdrop--open");const l=()=>{h.classList.remove("chat-upload-modal--open"),m.classList.remove("chat-upload-backdrop--open")},s=async()=>{const a=c.files?.[0];if(!a)return;const r=M.getState().activeChatId;if(!r||r===-1){console.warn("[ChatsPage] Нет выбранного чата для вложения");return}try{const t=await pn.uploadFile(a);Ne.sendFile(t.path),l()}catch(t){console.error("[ChatsPage] upload file failed",t)}finally{c.value=""}};this.addDOMListener(c,"change",s);const i=u.querySelector("#upload-close");i&&this.addDOMListener(i,"click",()=>{l()}),this.addDOMListener(m,"click",()=>{l()}),this.addDOMListener(h,"click",a=>{a.target.closest(".modal")||l()})}render(){return Z(ln,this.props)}}const gn=`<main class="error-page">
  <section class="error-card">
    <h1 class="error-card__code">404</h1>
    <p class="error-card__title">Страница не найдена</p>
    <p class="error-card__text">
      Никогда не существовала или переехала.
    </p>
    <a href="/chats" class="btn btn--primary" data-link-chats>
      К списку чатов
    </a>
  </section>
</main>
`;class _n extends O{constructor(n={}){super("div",n)}render(){return gn}}const vn=`<main class="error-page">
  <section class="error-card">
    <h1 class="error-card__code">5xx</h1>
    <p class="error-card__title">Что‑то пошло не так</p>
    <p class="error-card__text">
      Сервер временно недоступен.<br>
      Попробуйте обновить страницу позже.
    </p>
    <a href="/chats" class="btn btn--primary" data-link-chats>
      Обновить страницу
    </a>
  </section>
</main>
`;class Tt extends O{constructor(n={}){super("div",n)}render(){return vn}}const bn=`<div class="app">
  <div class="app-shell">
    <header class="landing-nav">
      <div class="landing-nav__inner">
        <div class="landing-nav__brand">
          <span class="landing-nav__dot"></span>
          <span><a href="/" class="logo" data-link data-link-home>Chat App</a></span>
        </div>
        <nav class="landing-nav__links" id="nav-links">
            <a href="/login" class="landing-nav__link" data-link data-link-login>Вход</a>
            <a href="/register" class="landing-nav__link landing-nav__link--primary" data-link data-link-register>Регистрация</a>
            <a href="/chat" class="landing-nav__link landing-nav__link--primary" data-link data-link-chats>Диалоги</a>
            <a href="/profile" class="landing-nav__link landing-nav__link--primary" data-link data-link-profile>Профиль</a>
          {{!-- <button
            class="theme-toggle"
            type="button"
            data-theme-toggle
            id="nav-theme-toggle"
          >
            Тема
          </button> --}}
        </nav>
      </div>
    </header>

    <main class="landing">
      <section class="landing-hero">
        <div>
          <div class="landing-hero__badge">
            <span class="landing-hero__badge-dot"></span>
            <span>ИИ + живые эксперты</span>
          </div>

          <h1 class="landing-hero__title">Чаты, в которых вас понимают.</h1>
          <p class="landing-hero__subtitle">
            Задавайте важным вопросы на естественном языке. Эксперты сразу ответят
            или помогут найти ответ самостоятельно.
          </p>

          <div class="landing-hero__actions">
            <a href="/login" class="btn btn--primary" data-link data-link-login>Войдите</a>
          </div>
          <p class="landing-hero__hint">
            Нет аккаунта?
            <a href="/register" class="landing-nav__link landing-nav__link--primary" data-link data-link-register>Зарегистрируйтесь</a>
          </p>
        </div>

        <div class="landing-hero__preview">
          {{> chat-preview}}
        </div>
      </section>
    </main>
  </div>
</div>
`;class yn extends O{componentDidMount(){const n=this.getContent();if(!n)return;console.log("[LandingPage] componentDidMount");const u=n.querySelector("nav.landing-nav");if(u){const h=u.querySelector("#nav-toggle"),m=u.querySelector("#nav-links");h&&m&&this.addDOMListener(h,"click",()=>{m.classList.toggle("landing-nav__links--open"),console.log("[LandingPage] Вкл/выкл мобильного меню")})}}render(){return Z(bn,this.props)}}const Sn=`<section class="profile-layout">
  <aside class="profile-sidebar">
    <a href="/chats" class="profile-sidebar__back" data-link-chats>←</a>
  </aside>

  <div class="profile-card">
    <div class="profile-card__avatar-block">
      <div
        class="profile-avatar profile-avatar--button"
        style="background-image: url('{{avatar}}');"
      >
      </div>
      <div class="profile-card__name">
        {{display_name}}
      </div>
      <a href="/profile/avatar" class="profile-link" data-link data-link-profile-avatar>
        Поменять аватар
      </a>
    </div>

    <dl class="profile-table">
      <div class="profile-table__row">
        <dt>Почта</dt>
        <dd>{{email}}</dd>
      </div>
      <div class="profile-table__row">
        <dt>Логин</dt>
        <dd>{{login}}</dd>
      </div>
      <div class="profile-table__row">
        <dt>Имя</dt>
        <dd>{{first_name}}</dd>
      </div>
      <div class="profile-table__row">
        <dt>Фамилия</dt>
        <dd>{{second_name}}</dd>
      </div>
      <div class="profile-table__row">
        <dt>Имя в чате</dt>
        <dd>{{display_name}}</dd>
      </div>
      <div class="profile-table__row">
        <dt>Телефон</dt>
        <dd>{{phone}}</dd>
      </div>
    </dl>

    <div class="profile-card__actions">
      <a href="/profile/edit" class="profile-link" data-link-profile-edit>Изменить данные</a>
      <a href="/profile/password" class="profile-link" data-link-profile-password>Изменить пароль</a>
      <a href="/profile/avatar" class="profile-link" data-link-profile-avatar>Изменить аватар</a>
      <button class="profile-link profile-link--danger" type="button" data-logout data-link-logout>
        Выйти
      </button>
    </div>
  </div>
</section>
`,wn=_=>_?`${K}${_}`:"/assets/avatar-transp.png";class Ht extends O{constructor(n){const h=M.getState().user,m=h?.avatar??null,c={email:h?.email??"ivan@example.com",login:h?.login??"ivanivanov",first_name:h?.first_name??"Иван",second_name:h?.second_name??"Иванов",display_name:h?.display_name??h?.first_name??"",phone:h?.phone??"+79991234567",avatar:wn(m)};super("div",{...c,...n})}render(){return Z(Sn,this.props)}}const Ge=new oe("/user");class kn{updateProfile(n){return Ge.put("/profile",{data:n})}updatePassword(n){return Ge.put("/password",{data:n})}updateAvatar(n){const u=new FormData;return u.append("avatar",n),Ge.put("/profile/avatar",{data:u})}}const Je=new kn,Cn=`<section class="profile-layout">
  <aside class="profile-sidebar">
    <a href="/profile" class="profile-sidebar__back" data-link-profile>←</a>
  </aside>

  <div class="profile-card">
    <h1 class="settings-card__title">Изменить данные</h1>
    <div class="profile-card__avatar-block">
      <div
        class="profile-avatar profile-avatar--button"
        style="background-image: url('{{avatar}}');"
      >
      <div class="profile-card__name">
        <a href="/profile/avatar" title="Поменять аватар" class="profile-link" data-link data-link-profile-avatar>
          {{display_name}}
        </a>
      </div>
    </div>

    <form class="profile-form" id="profile-edit-form">
      <div class="profile-form__row form__field">
        <label class="form__label" for="email">Почта</label>
        <input
          id="email"
          name="email"
          class="profile-form__input"
          type="email"
          value="{{email}}"
        />
        <p class="form__error"></p>
      </div>

      <div class="form__field profile-form__row">
        <label class="form__label" for="login">Логин</label>
        <input
          id="login"
          name="login"
          class="profile-form__input"
          type="text"
          value="{{login}}"
        />
        <p class="form__error"></p>
      </div>

      <div class="form__field profile-form__row">
        <label class="form__label" for="first_name">Имя</label>
        <input
          id="first_name"
          name="first_name"
          class="profile-form__input"
          type="text"
          value="{{first_name}}"
        />
        <p class="form__error"></p>
      </div>

      <div class="form__field profile-form__row">
        <label class="form__label" for="second_name">Фамилия</label>
        <input
          id="second_name"
          name="second_name"
          class="profile-form__input"
          type="text"
          value="{{second_name}}"
        />
        <p class="form__error"></p>
      </div>

      <div class="form__field profile-form__row">
        <label class="form__label" for="display_name">Имя в чате</label>
        <input
          id="display_name"
          name="display_name"
          class="profile-form__input"
          type="text"
          value="{{display_name}}"
        />
        <p class="form__error"></p>
      </div>

      <div class="form__field profile-form__row">
        <label class="form__label" for="phone">Телефон</label>
        <input
          id="phone"
          name="phone"
          class="profile-form__input"
          type="tel"
          value="{{phone}}"
        />
        <p class="form__error"></p>
      </div>

      <div class="profile-form__actions">
        <button class="btn btn--primary" type="submit">
          Сохранить
        </button>
      </div>
    </form>
  </div>
</section>
`,Pn=_=>_?`${K}${_}`:"/assets/avatar-transp.png";class Ln extends O{constructor(n){const u=M.getState();console.log("[ProfileEditPage] state.user =",u.user);const h=u.user,m={email:h?.email??"",login:h?.login??"",first_name:h?.first_name??"",second_name:h?.second_name??"",display_name:h?.display_name??h?.first_name??"",phone:h?.phone??"",avatar:Pn(h?.avatar)};super("div",{...m,...n})}componentDidMount(){const n=this.getContent();if(!n)return;const u=n.querySelector("#profile-edit-form");if(!u){console.warn("[ProfileEditPage] форма потерялась");return}const h=n.querySelector("[data-form-error]"),{validateField:m,validateForm:c}=se(u,{logOnSuccess:!1});Array.from(u.querySelectorAll("input, textarea")).forEach(l=>{this.addDOMListener(l,"blur",s=>{const i=s,{target:a}=i;(a instanceof HTMLInputElement||a instanceof HTMLTextAreaElement)&&m(a)})}),this.addDOMListener(u,"submit",async l=>{l.preventDefault(),h&&(h.textContent="");const{valid:i}=c();if(!i){console.warn("[ProfileEditPage] форма невалидна — отправка отменена");return}const a=new FormData(u),f={first_name:String(a.get("first_name")??""),second_name:String(a.get("second_name")??""),display_name:String(a.get("display_name")??""),login:String(a.get("login")??""),email:String(a.get("email")??""),phone:String(a.get("phone")??"")};try{const r=await Je.updateProfile(f);M.setState({user:r}),console.log("[ProfileEditPage] профиль обновлён"),D.go("/profile")}catch(r){const e=(r&&typeof r=="object"&&"reason"in r?r:null)?.reason;console.error("[ProfileEditPage] ошибка обновления профиля",r),h&&(h.textContent=e||"Не удалось обновить профиль.")}})}render(){return Z(Cn,this.props)}}const En=`<section class="profile-layout">
  <aside class="profile-sidebar">
    <a href="/profile" class="profile-sidebar__back" data-link-profile>←</a>
  </aside>

  <div class="profile-card">
    <h1 class="settings-card__title">Изменить аватар</h1>

    <div class="profile-card__avatar-block">
      <div
        class="profile-avatar profile-avatar--button"
        style="background-image: url('{{avatar}}');"
      >
    </div>

    <form class="profile-form" id="profile-avatar-form">
      <div class="profile-form__row">
        {{!-- <label for="avatar">Загрузите файл</label> --}}
        <input
          id="avatar"
          name="avatar"
          class="profile-form__input"
          type="file"
          accept="image/*"
        />
      </div>

      <div class="profile-form__actions">
        <button class="btn btn--primary" type="submit">
          Поменять
        </button>
      </div>
    </form>
  </div>
</section>
`,Ut=_=>_?`${K}${_}`:"/assets/avatar-transp.png";class xn extends O{constructor(n){const h=M.getState().user,m={avatar:Ut(h?.avatar)};super("div",{...m,...n})}componentDidMount(){const n=this.getContent();if(!n)return;const u=n.querySelector("#profile-avatar-form");if(!u)return;const h=u.querySelector('input[type="file"]'),m=n.querySelector("[data-form-error]");this.addDOMListener(u,"submit",async c=>{if(c.preventDefault(),m&&(m.textContent=""),!h||!h.files||h.files.length===0){m&&(m.textContent="Файл не выбран");return}const d=h.files[0];try{const l=await Je.updateAvatar(d);M.setState({user:l});const s=Ut(l.avatar);this.setProps({avatar:s});const i=n.querySelector(".profile-avatar-button");i&&(i.style.backgroundImage=`url("${s}")`),D.go("/profile")}catch(l){const i=(l&&typeof l=="object"&&"reason"in l?l:null)?.reason;console.error("[ProfileAvatarPage] ошибка загрузки аватара",l),m&&(m.textContent=i||"Не удалось загрузить аватар.")}})}render(){return Z(En,this.props)}}const Mn=`<section class="profile-layout">
  <aside class="profile-sidebar">
    <a href="/profile" class="profile-sidebar__back" data-link-profile>←</a>
  </aside>

  <div class="profile-card">
    <h1 class="settings-card__title">Изменить пароль</h1>

    <form class="profile-form" id="profile-password-form">
      <div class="profile-form__row">
        <label for="oldPassword">Старый пароль</label>
        <input
          id="oldPassword"
          name="oldPassword"
          class="profile-form__input"
          type="password"
        />
      </div>

      <div class="profile-form__row">
        <label for="password">Новый пароль</label>
        <input
          id="password"
          name="password"
          class="profile-form__input"
          type="password"
        />
      </div>

      <div class="profile-form__row">
        <label for="password_repeat">Повторите новый пароль</label>
        <input
          id="password_repeat"
          name="password_repeat"
          class="profile-form__input"
          type="password"
        />
      </div>

      <div class="profile-form__actions">
        <button class="btn btn--primary" type="submit">
          Сохранить
        </button>
      </div>
    </form>
  </div>
</section>
`;class In extends O{handleSubmit;constructor(n={}){super("div",n),this.handleSubmit=u=>{this.onSubmit(u)}}async onSubmit(n){n.preventDefault();const u=n.currentTarget;if(!(u instanceof HTMLFormElement))return;const h=u.querySelector("[data-form-error]"),{validateForm:m}=se(u,{logOnSuccess:!1}),{valid:c}=m();if(!c){console.warn("[ProfilePasswordPage] Данные формы невалидны — отправка отменена");return}const d=new FormData(u),l=String(d.get("oldPassword")??""),s=String(d.get("newPassword")??""),i=String(d.get("newPasswordConfirm")??"");if(s!==i){h&&(h.textContent="Новый пароль и подтверждение не совпадают");return}try{await Je.updatePassword({oldPassword:l,newPassword:s}),console.log("[ProfilePasswordPage] пароль обновлён"),h&&(h.textContent="Пароль успешно изменён")}catch(a){const r=(a&&typeof a=="object"&&"reason"in a?a:null)?.reason;console.error("[ProfilePasswordPage] ошибка смены пароля",a),h&&(h.textContent=r||"Не удалось сменить пароль. Попробуйте ещё раз.")}}componentDidMount(){const n=this.getContent();if(!n)return;const u=n.querySelector("#profile-password-form");if(!u){console.warn("[ProfilePasswordPage] форма потерялась");return}const{validateField:h}=se(u,{logOnSuccess:!1});Array.from(u.querySelectorAll("input, textarea")).forEach(c=>{this.addDOMListener(c,"blur",d=>{const l=d,{target:s}=l;(s instanceof HTMLInputElement||s instanceof HTMLTextAreaElement)&&h(s)})}),this.addDOMListener(u,"submit",this.handleSubmit)}render(){return Z(Mn,this.props)}}window.Handlebars=N;const An=["/messenger","/chats","/chat","/settings"],We=_=>An.includes(_)||_.startsWith("/profile"),On=_=>{const n=M.getState();if((_==="/login"||_==="/register"||_==="/sign-up")&&n.user){D.go("/messenger");return}if(_==="/"){D.go("/");return}if(!n.user&&We(_)){D.go("/login");return}D.go(_)},Dn=()=>{const _=document.querySelectorAll("[data-theme-toggle]");_.length&&_.forEach(n=>{n.addEventListener("click",()=>{const u=document.body.classList.contains("theme-dark");document.body.classList.toggle("theme-dark",!u),document.body.classList.toggle("theme-light",u)})})},Nn=()=>{const _=document.getElementById("nav-toggle"),n=document.getElementById("nav-links");!_||!n||_.addEventListener("click",()=>{n.classList.toggle("landing-nav__links--open")})},Rn=()=>{document.addEventListener("click",_=>{const n=_.target;if(!n)return;const u=n.closest("[data-link]");if(!u)return;const h=u.getAttribute("data-link")||u.getAttribute("href");h&&(_.preventDefault(),On(h))})},qn=()=>{!document.body.classList.contains("theme-light")&&!document.body.classList.contains("theme-dark")&&document.body.classList.add("theme-light"),Dn(),Nn(),Rn()},Bn=async()=>{Fr(),Gr(),qn(),D.use("/",yn).use("/sign-up",qt).use("/register",qt).use("/login",Bt).use("/sign-in",Bt).use("/logout",sn).use("/messenger",Ve).use("/chat",Ve).use("/chats",Ve).use("/profile",ae(Ht)).use("/profile/edit",ae(Ln)).use("/profile/avatar",ae(xn)).use("/profile/password",ae(In)).use("/settings",ae(Ht)).use("/404",_n).use("/5xx",Tt).use("/500",Tt);try{const _=await J.getUser();if(_){M.setState({user:_});const n=window.location.pathname;if(n==="/login"||n==="/sign-in"||n==="/register"||n==="/sign-up"){D.go("/messenger");return}}else{M.setState({user:null});const n=window.location.pathname;if(We(n)){D.go("/login");return}}}catch{M.setState({user:null});const _=window.location.pathname;if(We(_)){D.go("/login");return}}D.start()};document.addEventListener("DOMContentLoaded",()=>{Bn().catch(_=>{console.error("[initApp] unhandled error",_)})});
