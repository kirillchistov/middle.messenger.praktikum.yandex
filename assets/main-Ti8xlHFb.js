(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const g of document.querySelectorAll('link[rel="modulepreload"]'))c(g);new MutationObserver(g=>{for(const h of g)if(h.type==="childList")for(const d of h.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function u(g){const h={};return g.integrity&&(h.integrity=g.integrity),g.referrerPolicy&&(h.referrerPolicy=g.referrerPolicy),g.crossOrigin==="use-credentials"?h.credentials="include":g.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function c(g){if(g.ep)return;g.ep=!0;const h=u(g);fetch(g.href,h)}})();function ir(f){return f&&f.__esModule&&Object.prototype.hasOwnProperty.call(f,"default")?f.default:f}var de={exports:{}},fe={exports:{}},V={},T={},et;function H(){if(et)return T;et=1,T.__esModule=!0,T.extend=g,T.indexOf=a,T.escapeExpression=i,T.isEmpty=s,T.createFrame=m,T.blockParams=r,T.appendContextPath=t;var f={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},n=/[&<>"'`=]/g,u=/[&<>"'`=]/;function c(e){return f[e]}function g(e){for(var o=1;o<arguments.length;o++)for(var p in arguments[o])Object.prototype.hasOwnProperty.call(arguments[o],p)&&(e[p]=arguments[o][p]);return e}var h=Object.prototype.toString;T.toString=h;var d=function(o){return typeof o=="function"};d(/x/)&&(T.isFunction=d=function(e){return typeof e=="function"&&h.call(e)==="[object Function]"}),T.isFunction=d;var l=Array.isArray||function(e){return e&&typeof e=="object"?h.call(e)==="[object Array]":!1};T.isArray=l;function a(e,o){for(var p=0,v=e.length;p<v;p++)if(e[p]===o)return p;return-1}function i(e){if(typeof e!="string"){if(e&&e.toHTML)return e.toHTML();if(e==null)return"";if(!e)return e+"";e=""+e}return u.test(e)?e.replace(n,c):e}function s(e){return!e&&e!==0?!0:!!(l(e)&&e.length===0)}function m(e){var o=g({},e);return o._parent=e,o}function r(e,o){return e.path=o,e}function t(e,o){return(e?e+".":"")+o}return T}var me={exports:{}},tt;function G(){return tt||(tt=1,(function(f,n){n.__esModule=!0;var u=["description","fileName","lineNumber","endLineNumber","message","name","number","stack"];function c(g,h){var d=h&&h.loc,l=void 0,a=void 0,i=void 0,s=void 0;d&&(l=d.start.line,a=d.end.line,i=d.start.column,s=d.end.column,g+=" - "+l+":"+i);for(var m=Error.prototype.constructor.call(this,g),r=0;r<u.length;r++)this[u[r]]=m[u[r]];Error.captureStackTrace&&Error.captureStackTrace(this,c);try{d&&(this.lineNumber=l,this.endLineNumber=a,Object.defineProperty?(Object.defineProperty(this,"column",{value:i,enumerable:!0}),Object.defineProperty(this,"endColumn",{value:s,enumerable:!0})):(this.column=i,this.endColumn=s))}catch{}}c.prototype=new Error,n.default=c,f.exports=n.default})(me,me.exports)),me.exports}var se={},ge={exports:{}},rt;function or(){return rt||(rt=1,(function(f,n){n.__esModule=!0;var u=H();n.default=function(c){c.registerHelper("blockHelperMissing",function(g,h){var d=h.inverse,l=h.fn;if(g===!0)return l(this);if(g===!1||g==null)return d(this);if(u.isArray(g))return g.length>0?(h.ids&&(h.ids=[h.name]),c.helpers.each(g,h)):d(this);if(h.data&&h.ids){var a=u.createFrame(h.data);a.contextPath=u.appendContextPath(h.data.contextPath,h.name),h={data:a}}return l(g,h)})},f.exports=n.default})(ge,ge.exports)),ge.exports}var _e={exports:{}},nt;function lr(){return nt||(nt=1,(function(f,n){n.__esModule=!0;function u(d){return d&&d.__esModule?d:{default:d}}var c=H(),g=G(),h=u(g);n.default=function(d){d.registerHelper("each",function(l,a){if(!a)throw new h.default("Must pass iterator to #each");var i=a.fn,s=a.inverse,m=0,r="",t=void 0,e=void 0;a.data&&a.ids&&(e=c.appendContextPath(a.data.contextPath,a.ids[0])+"."),c.isFunction(l)&&(l=l.call(this)),a.data&&(t=c.createFrame(a.data));function o(_,y,w){t&&(t.key=_,t.index=y,t.first=y===0,t.last=!!w,e&&(t.contextPath=e+_)),r=r+i(l[_],{data:t,blockParams:c.blockParams([l[_],_],[e+_,null])})}if(l&&typeof l=="object")if(c.isArray(l))for(var p=l.length;m<p;m++)m in l&&o(m,m,m===l.length-1);else if(typeof Symbol=="function"&&l[Symbol.iterator]){for(var v=[],b=l[Symbol.iterator](),S=b.next();!S.done;S=b.next())v.push(S.value);l=v;for(var p=l.length;m<p;m++)o(m,m,m===l.length-1)}else(function(){var _=void 0;Object.keys(l).forEach(function(y){_!==void 0&&o(_,m-1),_=y,m++}),_!==void 0&&o(_,m-1,!0)})();return m===0&&(r=s(this)),r})},f.exports=n.default})(_e,_e.exports)),_e.exports}var ve={exports:{}},st;function cr(){return st||(st=1,(function(f,n){n.__esModule=!0;function u(h){return h&&h.__esModule?h:{default:h}}var c=G(),g=u(c);n.default=function(h){h.registerHelper("helperMissing",function(){if(arguments.length!==1)throw new g.default('Missing helper: "'+arguments[arguments.length-1].name+'"')})},f.exports=n.default})(ve,ve.exports)),ve.exports}var be={exports:{}},at;function ur(){return at||(at=1,(function(f,n){n.__esModule=!0;function u(d){return d&&d.__esModule?d:{default:d}}var c=H(),g=G(),h=u(g);n.default=function(d){d.registerHelper("if",function(l,a){if(arguments.length!=2)throw new h.default("#if requires exactly one argument");return c.isFunction(l)&&(l=l.call(this)),!a.hash.includeZero&&!l||c.isEmpty(l)?a.inverse(this):a.fn(this)}),d.registerHelper("unless",function(l,a){if(arguments.length!=2)throw new h.default("#unless requires exactly one argument");return d.helpers.if.call(this,l,{fn:a.inverse,inverse:a.fn,hash:a.hash})})},f.exports=n.default})(be,be.exports)),be.exports}var ye={exports:{}},it;function hr(){return it||(it=1,(function(f,n){n.__esModule=!0,n.default=function(u){u.registerHelper("log",function(){for(var c=[void 0],g=arguments[arguments.length-1],h=0;h<arguments.length-1;h++)c.push(arguments[h]);var d=1;g.hash.level!=null?d=g.hash.level:g.data&&g.data.level!=null&&(d=g.data.level),c[0]=d,u.log.apply(u,c)})},f.exports=n.default})(ye,ye.exports)),ye.exports}var Se={exports:{}},ot;function pr(){return ot||(ot=1,(function(f,n){n.__esModule=!0,n.default=function(u){u.registerHelper("lookup",function(c,g,h){return c&&h.lookupProperty(c,g)})},f.exports=n.default})(Se,Se.exports)),Se.exports}var we={exports:{}},lt;function dr(){return lt||(lt=1,(function(f,n){n.__esModule=!0;function u(d){return d&&d.__esModule?d:{default:d}}var c=H(),g=G(),h=u(g);n.default=function(d){d.registerHelper("with",function(l,a){if(arguments.length!=2)throw new h.default("#with requires exactly one argument");c.isFunction(l)&&(l=l.call(this));var i=a.fn;if(c.isEmpty(l))return a.inverse(this);var s=a.data;return a.data&&a.ids&&(s=c.createFrame(a.data),s.contextPath=c.appendContextPath(a.data.contextPath,a.ids[0])),i(l,{data:s,blockParams:c.blockParams([l],[s&&s.contextPath])})})},f.exports=n.default})(we,we.exports)),we.exports}var ct;function jt(){if(ct)return se;ct=1,se.__esModule=!0,se.registerDefaultHelpers=o,se.moveHelperToHooks=p;function f(v){return v&&v.__esModule?v:{default:v}}var n=or(),u=f(n),c=lr(),g=f(c),h=cr(),d=f(h),l=ur(),a=f(l),i=hr(),s=f(i),m=pr(),r=f(m),t=dr(),e=f(t);function o(v){u.default(v),g.default(v),d.default(v),a.default(v),s.default(v),r.default(v),e.default(v)}function p(v,b,S){v.helpers[b]&&(v.hooks[b]=v.helpers[b],S||delete v.helpers[b])}return se}var ke={},Ce={exports:{}},ut;function fr(){return ut||(ut=1,(function(f,n){n.__esModule=!0;var u=H();n.default=function(c){c.registerDecorator("inline",function(g,h,d,l){var a=g;return h.partials||(h.partials={},a=function(i,s){var m=d.partials;d.partials=u.extend({},m,h.partials);var r=g(i,s);return d.partials=m,r}),h.partials[l.args[0]]=l.fn,a})},f.exports=n.default})(Ce,Ce.exports)),Ce.exports}var ht;function mr(){if(ht)return ke;ht=1,ke.__esModule=!0,ke.registerDefaultDecorators=c;function f(g){return g&&g.__esModule?g:{default:g}}var n=fr(),u=f(n);function c(g){u.default(g)}return ke}var Pe={exports:{}},pt;function Yt(){return pt||(pt=1,(function(f,n){n.__esModule=!0;var u=H(),c={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(h){if(typeof h=="string"){var d=u.indexOf(c.methodMap,h.toLowerCase());d>=0?h=d:h=parseInt(h,10)}return h},log:function(h){if(h=c.lookupLevel(h),typeof console<"u"&&c.lookupLevel(c.level)<=h){var d=c.methodMap[h];console[d]||(d="log");for(var l=arguments.length,a=Array(l>1?l-1:0),i=1;i<l;i++)a[i-1]=arguments[i];console[d].apply(console,a)}}};n.default=c,f.exports=n.default})(Pe,Pe.exports)),Pe.exports}var X={},Le={},dt;function gr(){if(dt)return Le;dt=1,Le.__esModule=!0,Le.createNewLookupObject=n;var f=H();function n(){for(var u=arguments.length,c=Array(u),g=0;g<u;g++)c[g]=arguments[g];return f.extend.apply(void 0,[Object.create(null)].concat(c))}return Le}var ft;function Xt(){if(ft)return X;ft=1,X.__esModule=!0,X.createProtoAccessControl=h,X.resultIsAllowed=d,X.resetLoggedProperties=i;function f(s){return s&&s.__esModule?s:{default:s}}var n=gr(),u=Yt(),c=f(u),g=Object.create(null);function h(s){var m=Object.create(null);m.constructor=!1,m.__defineGetter__=!1,m.__defineSetter__=!1,m.__lookupGetter__=!1;var r=Object.create(null);return r.__proto__=!1,{properties:{whitelist:n.createNewLookupObject(r,s.allowedProtoProperties),defaultValue:s.allowProtoPropertiesByDefault},methods:{whitelist:n.createNewLookupObject(m,s.allowedProtoMethods),defaultValue:s.allowProtoMethodsByDefault}}}function d(s,m,r){return l(typeof s=="function"?m.methods:m.properties,r)}function l(s,m){return s.whitelist[m]!==void 0?s.whitelist[m]===!0:s.defaultValue!==void 0?s.defaultValue:(a(m),!1)}function a(s){g[s]!==!0&&(g[s]=!0,c.default.log("error",'Handlebars: Access has been denied to resolve the property "'+s+`" because it is not an "own property" of its parent.
You can add a runtime option to disable the check or this warning:
See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details`))}function i(){Object.keys(g).forEach(function(s){delete g[s]})}return X}var mt;function Xe(){if(mt)return V;mt=1,V.__esModule=!0,V.HandlebarsEnvironment=e;function f(p){return p&&p.__esModule?p:{default:p}}var n=H(),u=G(),c=f(u),g=jt(),h=mr(),d=Yt(),l=f(d),a=Xt(),i="4.7.8";V.VERSION=i;var s=8;V.COMPILER_REVISION=s;var m=7;V.LAST_COMPATIBLE_COMPILER_REVISION=m;var r={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0 <4.3.0",8:">= 4.3.0"};V.REVISION_CHANGES=r;var t="[object Object]";function e(p,v,b){this.helpers=p||{},this.partials=v||{},this.decorators=b||{},g.registerDefaultHelpers(this),h.registerDefaultDecorators(this)}e.prototype={constructor:e,logger:l.default,log:l.default.log,registerHelper:function(v,b){if(n.toString.call(v)===t){if(b)throw new c.default("Arg not supported with multiple helpers");n.extend(this.helpers,v)}else this.helpers[v]=b},unregisterHelper:function(v){delete this.helpers[v]},registerPartial:function(v,b){if(n.toString.call(v)===t)n.extend(this.partials,v);else{if(typeof b>"u")throw new c.default('Attempting to register a partial called "'+v+'" as undefined');this.partials[v]=b}},unregisterPartial:function(v){delete this.partials[v]},registerDecorator:function(v,b){if(n.toString.call(v)===t){if(b)throw new c.default("Arg not supported with multiple decorators");n.extend(this.decorators,v)}else this.decorators[v]=b},unregisterDecorator:function(v){delete this.decorators[v]},resetLoggedPropertyAccesses:function(){a.resetLoggedProperties()}};var o=l.default.log;return V.log=o,V.createFrame=n.createFrame,V.logger=l.default,V}var Ee={exports:{}},gt;function _r(){return gt||(gt=1,(function(f,n){n.__esModule=!0;function u(c){this.string=c}u.prototype.toString=u.prototype.toHTML=function(){return""+this.string},n.default=u,f.exports=n.default})(Ee,Ee.exports)),Ee.exports}var K={},xe={},_t;function vr(){if(_t)return xe;_t=1,xe.__esModule=!0,xe.wrapHelper=f;function f(n,u){if(typeof n!="function")return n;var c=function(){var h=arguments[arguments.length-1];return arguments[arguments.length-1]=u(h),n.apply(this,arguments)};return c}return xe}var vt;function br(){if(vt)return K;vt=1,K.__esModule=!0,K.checkRevision=s,K.template=m,K.wrapProgram=r,K.resolvePartial=t,K.invokePartial=e,K.noop=o;function f(_){return _&&_.__esModule?_:{default:_}}function n(_){if(_&&_.__esModule)return _;var y={};if(_!=null)for(var w in _)Object.prototype.hasOwnProperty.call(_,w)&&(y[w]=_[w]);return y.default=_,y}var u=H(),c=n(u),g=G(),h=f(g),d=Xe(),l=jt(),a=vr(),i=Xt();function s(_){var y=_&&_[0]||1,w=d.COMPILER_REVISION;if(!(y>=d.LAST_COMPATIBLE_COMPILER_REVISION&&y<=d.COMPILER_REVISION))if(y<d.LAST_COMPATIBLE_COMPILER_REVISION){var k=d.REVISION_CHANGES[w],P=d.REVISION_CHANGES[y];throw new h.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+k+") or downgrade your runtime to an older version ("+P+").")}else throw new h.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+_[1]+").")}function m(_,y){if(!y)throw new h.default("No environment passed to template");if(!_||!_.main)throw new h.default("Unknown template object: "+typeof _);_.main.decorator=_.main_d,y.VM.checkRevision(_.compiler);var w=_.compiler&&_.compiler[0]===7;function k(L,C,E){E.hash&&(C=c.extend({},C,E.hash),E.ids&&(E.ids[0]=!0)),L=y.VM.resolvePartial.call(this,L,C,E);var I=c.extend({},E,{hooks:this.hooks,protoAccessControl:this.protoAccessControl}),O=y.VM.invokePartial.call(this,L,C,I);if(O==null&&y.compile&&(E.partials[E.name]=y.compile(L,_.compilerOptions,y),O=E.partials[E.name](C,I)),O!=null){if(E.indent){for(var R=O.split(`
`),U=0,ne=R.length;U<ne&&!(!R[U]&&U+1===ne);U++)R[U]=E.indent+R[U];O=R.join(`
`)}return O}else throw new h.default("The partial "+E.name+" could not be compiled when running in runtime-only mode")}var P={strict:function(C,E,I){if(!C||!(E in C))throw new h.default('"'+E+'" not defined in '+C,{loc:I});return P.lookupProperty(C,E)},lookupProperty:function(C,E){var I=C[E];if(I==null||Object.prototype.hasOwnProperty.call(C,E)||i.resultIsAllowed(I,P.protoAccessControl,E))return I},lookup:function(C,E){for(var I=C.length,O=0;O<I;O++){var R=C[O]&&P.lookupProperty(C[O],E);if(R!=null)return C[O][E]}},lambda:function(C,E){return typeof C=="function"?C.call(E):C},escapeExpression:c.escapeExpression,invokePartial:k,fn:function(C){var E=_[C];return E.decorator=_[C+"_d"],E},programs:[],program:function(C,E,I,O,R){var U=this.programs[C],ne=this.fn(C);return E||R||O||I?U=r(this,C,ne,E,I,O,R):U||(U=this.programs[C]=r(this,C,ne)),U},data:function(C,E){for(;C&&E--;)C=C._parent;return C},mergeIfNeeded:function(C,E){var I=C||E;return C&&E&&C!==E&&(I=c.extend({},E,C)),I},nullContext:Object.seal({}),noop:y.VM.noop,compilerInfo:_.compiler};function M(L){var C=arguments.length<=1||arguments[1]===void 0?{}:arguments[1],E=C.data;M._setup(C),!C.partial&&_.useData&&(E=p(L,E));var I=void 0,O=_.useBlockParams?[]:void 0;_.useDepths&&(C.depths?I=L!=C.depths[0]?[L].concat(C.depths):C.depths:I=[L]);function R(U){return""+_.main(P,U,P.helpers,P.partials,E,O,I)}return R=v(_.main,R,P,C.depths||[],E,O),R(L,C)}return M.isTop=!0,M._setup=function(L){if(L.partial)P.protoAccessControl=L.protoAccessControl,P.helpers=L.helpers,P.partials=L.partials,P.decorators=L.decorators,P.hooks=L.hooks;else{var C=c.extend({},y.helpers,L.helpers);b(C,P),P.helpers=C,_.usePartial&&(P.partials=P.mergeIfNeeded(L.partials,y.partials)),(_.usePartial||_.useDecorators)&&(P.decorators=c.extend({},y.decorators,L.decorators)),P.hooks={},P.protoAccessControl=i.createProtoAccessControl(L);var E=L.allowCallsToHelperMissing||w;l.moveHelperToHooks(P,"helperMissing",E),l.moveHelperToHooks(P,"blockHelperMissing",E)}},M._child=function(L,C,E,I){if(_.useBlockParams&&!E)throw new h.default("must pass block params");if(_.useDepths&&!I)throw new h.default("must pass parent depths");return r(P,L,_[L],C,0,E,I)},M}function r(_,y,w,k,P,M,L){function C(E){var I=arguments.length<=1||arguments[1]===void 0?{}:arguments[1],O=L;return L&&E!=L[0]&&!(E===_.nullContext&&L[0]===null)&&(O=[E].concat(L)),w(_,E,_.helpers,_.partials,I.data||k,M&&[I.blockParams].concat(M),O)}return C=v(w,C,_,L,k,M),C.program=y,C.depth=L?L.length:0,C.blockParams=P||0,C}function t(_,y,w){return _?!_.call&&!w.name&&(w.name=_,_=w.partials[_]):w.name==="@partial-block"?_=w.data["partial-block"]:_=w.partials[w.name],_}function e(_,y,w){var k=w.data&&w.data["partial-block"];w.partial=!0,w.ids&&(w.data.contextPath=w.ids[0]||w.data.contextPath);var P=void 0;if(w.fn&&w.fn!==o&&(function(){w.data=d.createFrame(w.data);var M=w.fn;P=w.data["partial-block"]=function(C){var E=arguments.length<=1||arguments[1]===void 0?{}:arguments[1];return E.data=d.createFrame(E.data),E.data["partial-block"]=k,M(C,E)},M.partials&&(w.partials=c.extend({},w.partials,M.partials))})(),_===void 0&&P&&(_=P),_===void 0)throw new h.default("The partial "+w.name+" could not be found");if(_ instanceof Function)return _(y,w)}function o(){return""}function p(_,y){return(!y||!("root"in y))&&(y=y?d.createFrame(y):{},y.root=_),y}function v(_,y,w,k,P,M){if(_.decorator){var L={};y=_.decorator(y,L,w,k&&k[0],P,M,k),c.extend(y,L)}return y}function b(_,y){Object.keys(_).forEach(function(w){var k=_[w];_[w]=S(k,y)})}function S(_,y){var w=y.lookupProperty;return a.wrapHelper(_,function(k){return c.extend({lookupProperty:w},k)})}return K}var Me={exports:{}},bt;function $t(){return bt||(bt=1,(function(f,n){n.__esModule=!0,n.default=function(u){(function(){typeof globalThis!="object"&&(Object.prototype.__defineGetter__("__magic__",function(){return this}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__)})();var c=globalThis.Handlebars;u.noConflict=function(){return globalThis.Handlebars===u&&(globalThis.Handlebars=c),u}},f.exports=n.default})(Me,Me.exports)),Me.exports}var yt;function yr(){return yt||(yt=1,(function(f,n){n.__esModule=!0;function u(b){return b&&b.__esModule?b:{default:b}}function c(b){if(b&&b.__esModule)return b;var S={};if(b!=null)for(var _ in b)Object.prototype.hasOwnProperty.call(b,_)&&(S[_]=b[_]);return S.default=b,S}var g=Xe(),h=c(g),d=_r(),l=u(d),a=G(),i=u(a),s=H(),m=c(s),r=br(),t=c(r),e=$t(),o=u(e);function p(){var b=new h.HandlebarsEnvironment;return m.extend(b,h),b.SafeString=l.default,b.Exception=i.default,b.Utils=m,b.escapeExpression=m.escapeExpression,b.VM=t,b.template=function(S){return t.template(S,b)},b}var v=p();v.create=p,o.default(v),v.default=v,n.default=v,f.exports=n.default})(fe,fe.exports)),fe.exports}var Ie={exports:{}},St;function er(){return St||(St=1,(function(f,n){n.__esModule=!0;var u={helpers:{helperExpression:function(g){return g.type==="SubExpression"||(g.type==="MustacheStatement"||g.type==="BlockStatement")&&!!(g.params&&g.params.length||g.hash)},scopedId:function(g){return/^\.|this\b/.test(g.original)},simpleId:function(g){return g.parts.length===1&&!u.helpers.scopedId(g)&&!g.depth}}};n.default=u,f.exports=n.default})(Ie,Ie.exports)),Ie.exports}var $={},Ae={exports:{}},wt;function Sr(){return wt||(wt=1,(function(f,n){n.__esModule=!0;var u=(function(){var c={trace:function(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,program_repetition0:6,statement:7,mustache:8,block:9,rawBlock:10,partial:11,partialBlock:12,content:13,COMMENT:14,CONTENT:15,openRawBlock:16,rawBlock_repetition0:17,END_RAW_BLOCK:18,OPEN_RAW_BLOCK:19,helperName:20,openRawBlock_repetition0:21,openRawBlock_option0:22,CLOSE_RAW_BLOCK:23,openBlock:24,block_option0:25,closeBlock:26,openInverse:27,block_option1:28,OPEN_BLOCK:29,openBlock_repetition0:30,openBlock_option0:31,openBlock_option1:32,CLOSE:33,OPEN_INVERSE:34,openInverse_repetition0:35,openInverse_option0:36,openInverse_option1:37,openInverseChain:38,OPEN_INVERSE_CHAIN:39,openInverseChain_repetition0:40,openInverseChain_option0:41,openInverseChain_option1:42,inverseAndProgram:43,INVERSE:44,inverseChain:45,inverseChain_option0:46,OPEN_ENDBLOCK:47,OPEN:48,mustache_repetition0:49,mustache_option0:50,OPEN_UNESCAPED:51,mustache_repetition1:52,mustache_option1:53,CLOSE_UNESCAPED:54,OPEN_PARTIAL:55,partialName:56,partial_repetition0:57,partial_option0:58,openPartialBlock:59,OPEN_PARTIAL_BLOCK:60,openPartialBlock_repetition0:61,openPartialBlock_option0:62,param:63,sexpr:64,OPEN_SEXPR:65,sexpr_repetition0:66,sexpr_option0:67,CLOSE_SEXPR:68,hash:69,hash_repetition_plus0:70,hashSegment:71,ID:72,EQUALS:73,blockParams:74,OPEN_BLOCK_PARAMS:75,blockParams_repetition_plus0:76,CLOSE_BLOCK_PARAMS:77,path:78,dataName:79,STRING:80,NUMBER:81,BOOLEAN:82,UNDEFINED:83,NULL:84,DATA:85,pathSegments:86,SEP:87,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",14:"COMMENT",15:"CONTENT",18:"END_RAW_BLOCK",19:"OPEN_RAW_BLOCK",23:"CLOSE_RAW_BLOCK",29:"OPEN_BLOCK",33:"CLOSE",34:"OPEN_INVERSE",39:"OPEN_INVERSE_CHAIN",44:"INVERSE",47:"OPEN_ENDBLOCK",48:"OPEN",51:"OPEN_UNESCAPED",54:"CLOSE_UNESCAPED",55:"OPEN_PARTIAL",60:"OPEN_PARTIAL_BLOCK",65:"OPEN_SEXPR",68:"CLOSE_SEXPR",72:"ID",73:"EQUALS",75:"OPEN_BLOCK_PARAMS",77:"CLOSE_BLOCK_PARAMS",80:"STRING",81:"NUMBER",82:"BOOLEAN",83:"UNDEFINED",84:"NULL",85:"DATA",87:"SEP"},productions_:[0,[3,2],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[13,1],[10,3],[16,5],[9,4],[9,4],[24,6],[27,6],[38,6],[43,2],[45,3],[45,1],[26,3],[8,5],[8,5],[11,5],[12,3],[59,5],[63,1],[63,1],[64,5],[69,1],[71,3],[74,3],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[56,1],[56,1],[79,2],[78,1],[86,3],[86,1],[6,0],[6,2],[17,0],[17,2],[21,0],[21,2],[22,0],[22,1],[25,0],[25,1],[28,0],[28,1],[30,0],[30,2],[31,0],[31,1],[32,0],[32,1],[35,0],[35,2],[36,0],[36,1],[37,0],[37,1],[40,0],[40,2],[41,0],[41,1],[42,0],[42,1],[46,0],[46,1],[49,0],[49,2],[50,0],[50,1],[52,0],[52,2],[53,0],[53,1],[57,0],[57,2],[58,0],[58,1],[61,0],[61,2],[62,0],[62,1],[66,0],[66,2],[67,0],[67,1],[70,1],[70,2],[76,1],[76,2]],performAction:function(l,a,i,s,m,r,t){var e=r.length-1;switch(m){case 1:return r[e-1];case 2:this.$=s.prepareProgram(r[e]);break;case 3:this.$=r[e];break;case 4:this.$=r[e];break;case 5:this.$=r[e];break;case 6:this.$=r[e];break;case 7:this.$=r[e];break;case 8:this.$=r[e];break;case 9:this.$={type:"CommentStatement",value:s.stripComment(r[e]),strip:s.stripFlags(r[e],r[e]),loc:s.locInfo(this._$)};break;case 10:this.$={type:"ContentStatement",original:r[e],value:r[e],loc:s.locInfo(this._$)};break;case 11:this.$=s.prepareRawBlock(r[e-2],r[e-1],r[e],this._$);break;case 12:this.$={path:r[e-3],params:r[e-2],hash:r[e-1]};break;case 13:this.$=s.prepareBlock(r[e-3],r[e-2],r[e-1],r[e],!1,this._$);break;case 14:this.$=s.prepareBlock(r[e-3],r[e-2],r[e-1],r[e],!0,this._$);break;case 15:this.$={open:r[e-5],path:r[e-4],params:r[e-3],hash:r[e-2],blockParams:r[e-1],strip:s.stripFlags(r[e-5],r[e])};break;case 16:this.$={path:r[e-4],params:r[e-3],hash:r[e-2],blockParams:r[e-1],strip:s.stripFlags(r[e-5],r[e])};break;case 17:this.$={path:r[e-4],params:r[e-3],hash:r[e-2],blockParams:r[e-1],strip:s.stripFlags(r[e-5],r[e])};break;case 18:this.$={strip:s.stripFlags(r[e-1],r[e-1]),program:r[e]};break;case 19:var o=s.prepareBlock(r[e-2],r[e-1],r[e],r[e],!1,this._$),p=s.prepareProgram([o],r[e-1].loc);p.chained=!0,this.$={strip:r[e-2].strip,program:p,chain:!0};break;case 20:this.$=r[e];break;case 21:this.$={path:r[e-1],strip:s.stripFlags(r[e-2],r[e])};break;case 22:this.$=s.prepareMustache(r[e-3],r[e-2],r[e-1],r[e-4],s.stripFlags(r[e-4],r[e]),this._$);break;case 23:this.$=s.prepareMustache(r[e-3],r[e-2],r[e-1],r[e-4],s.stripFlags(r[e-4],r[e]),this._$);break;case 24:this.$={type:"PartialStatement",name:r[e-3],params:r[e-2],hash:r[e-1],indent:"",strip:s.stripFlags(r[e-4],r[e]),loc:s.locInfo(this._$)};break;case 25:this.$=s.preparePartialBlock(r[e-2],r[e-1],r[e],this._$);break;case 26:this.$={path:r[e-3],params:r[e-2],hash:r[e-1],strip:s.stripFlags(r[e-4],r[e])};break;case 27:this.$=r[e];break;case 28:this.$=r[e];break;case 29:this.$={type:"SubExpression",path:r[e-3],params:r[e-2],hash:r[e-1],loc:s.locInfo(this._$)};break;case 30:this.$={type:"Hash",pairs:r[e],loc:s.locInfo(this._$)};break;case 31:this.$={type:"HashPair",key:s.id(r[e-2]),value:r[e],loc:s.locInfo(this._$)};break;case 32:this.$=s.id(r[e-1]);break;case 33:this.$=r[e];break;case 34:this.$=r[e];break;case 35:this.$={type:"StringLiteral",value:r[e],original:r[e],loc:s.locInfo(this._$)};break;case 36:this.$={type:"NumberLiteral",value:Number(r[e]),original:Number(r[e]),loc:s.locInfo(this._$)};break;case 37:this.$={type:"BooleanLiteral",value:r[e]==="true",original:r[e]==="true",loc:s.locInfo(this._$)};break;case 38:this.$={type:"UndefinedLiteral",original:void 0,value:void 0,loc:s.locInfo(this._$)};break;case 39:this.$={type:"NullLiteral",original:null,value:null,loc:s.locInfo(this._$)};break;case 40:this.$=r[e];break;case 41:this.$=r[e];break;case 42:this.$=s.preparePath(!0,r[e],this._$);break;case 43:this.$=s.preparePath(!1,r[e],this._$);break;case 44:r[e-2].push({part:s.id(r[e]),original:r[e],separator:r[e-1]}),this.$=r[e-2];break;case 45:this.$=[{part:s.id(r[e]),original:r[e]}];break;case 46:this.$=[];break;case 47:r[e-1].push(r[e]);break;case 48:this.$=[];break;case 49:r[e-1].push(r[e]);break;case 50:this.$=[];break;case 51:r[e-1].push(r[e]);break;case 58:this.$=[];break;case 59:r[e-1].push(r[e]);break;case 64:this.$=[];break;case 65:r[e-1].push(r[e]);break;case 70:this.$=[];break;case 71:r[e-1].push(r[e]);break;case 78:this.$=[];break;case 79:r[e-1].push(r[e]);break;case 82:this.$=[];break;case 83:r[e-1].push(r[e]);break;case 86:this.$=[];break;case 87:r[e-1].push(r[e]);break;case 90:this.$=[];break;case 91:r[e-1].push(r[e]);break;case 94:this.$=[];break;case 95:r[e-1].push(r[e]);break;case 98:this.$=[r[e]];break;case 99:r[e-1].push(r[e]);break;case 100:this.$=[r[e]];break;case 101:r[e-1].push(r[e]);break}},table:[{3:1,4:2,5:[2,46],6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{1:[3]},{5:[1,4]},{5:[2,2],7:5,8:6,9:7,10:8,11:9,12:10,13:11,14:[1,12],15:[1,20],16:17,19:[1,23],24:15,27:16,29:[1,21],34:[1,22],39:[2,2],44:[2,2],47:[2,2],48:[1,13],51:[1,14],55:[1,18],59:19,60:[1,24]},{1:[2,1]},{5:[2,47],14:[2,47],15:[2,47],19:[2,47],29:[2,47],34:[2,47],39:[2,47],44:[2,47],47:[2,47],48:[2,47],51:[2,47],55:[2,47],60:[2,47]},{5:[2,3],14:[2,3],15:[2,3],19:[2,3],29:[2,3],34:[2,3],39:[2,3],44:[2,3],47:[2,3],48:[2,3],51:[2,3],55:[2,3],60:[2,3]},{5:[2,4],14:[2,4],15:[2,4],19:[2,4],29:[2,4],34:[2,4],39:[2,4],44:[2,4],47:[2,4],48:[2,4],51:[2,4],55:[2,4],60:[2,4]},{5:[2,5],14:[2,5],15:[2,5],19:[2,5],29:[2,5],34:[2,5],39:[2,5],44:[2,5],47:[2,5],48:[2,5],51:[2,5],55:[2,5],60:[2,5]},{5:[2,6],14:[2,6],15:[2,6],19:[2,6],29:[2,6],34:[2,6],39:[2,6],44:[2,6],47:[2,6],48:[2,6],51:[2,6],55:[2,6],60:[2,6]},{5:[2,7],14:[2,7],15:[2,7],19:[2,7],29:[2,7],34:[2,7],39:[2,7],44:[2,7],47:[2,7],48:[2,7],51:[2,7],55:[2,7],60:[2,7]},{5:[2,8],14:[2,8],15:[2,8],19:[2,8],29:[2,8],34:[2,8],39:[2,8],44:[2,8],47:[2,8],48:[2,8],51:[2,8],55:[2,8],60:[2,8]},{5:[2,9],14:[2,9],15:[2,9],19:[2,9],29:[2,9],34:[2,9],39:[2,9],44:[2,9],47:[2,9],48:[2,9],51:[2,9],55:[2,9],60:[2,9]},{20:25,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:36,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:37,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{4:38,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{15:[2,48],17:39,18:[2,48]},{20:41,56:40,64:42,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:44,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{5:[2,10],14:[2,10],15:[2,10],18:[2,10],19:[2,10],29:[2,10],34:[2,10],39:[2,10],44:[2,10],47:[2,10],48:[2,10],51:[2,10],55:[2,10],60:[2,10]},{20:45,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:46,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:47,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:41,56:48,64:42,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[2,78],49:49,65:[2,78],72:[2,78],80:[2,78],81:[2,78],82:[2,78],83:[2,78],84:[2,78],85:[2,78]},{23:[2,33],33:[2,33],54:[2,33],65:[2,33],68:[2,33],72:[2,33],75:[2,33],80:[2,33],81:[2,33],82:[2,33],83:[2,33],84:[2,33],85:[2,33]},{23:[2,34],33:[2,34],54:[2,34],65:[2,34],68:[2,34],72:[2,34],75:[2,34],80:[2,34],81:[2,34],82:[2,34],83:[2,34],84:[2,34],85:[2,34]},{23:[2,35],33:[2,35],54:[2,35],65:[2,35],68:[2,35],72:[2,35],75:[2,35],80:[2,35],81:[2,35],82:[2,35],83:[2,35],84:[2,35],85:[2,35]},{23:[2,36],33:[2,36],54:[2,36],65:[2,36],68:[2,36],72:[2,36],75:[2,36],80:[2,36],81:[2,36],82:[2,36],83:[2,36],84:[2,36],85:[2,36]},{23:[2,37],33:[2,37],54:[2,37],65:[2,37],68:[2,37],72:[2,37],75:[2,37],80:[2,37],81:[2,37],82:[2,37],83:[2,37],84:[2,37],85:[2,37]},{23:[2,38],33:[2,38],54:[2,38],65:[2,38],68:[2,38],72:[2,38],75:[2,38],80:[2,38],81:[2,38],82:[2,38],83:[2,38],84:[2,38],85:[2,38]},{23:[2,39],33:[2,39],54:[2,39],65:[2,39],68:[2,39],72:[2,39],75:[2,39],80:[2,39],81:[2,39],82:[2,39],83:[2,39],84:[2,39],85:[2,39]},{23:[2,43],33:[2,43],54:[2,43],65:[2,43],68:[2,43],72:[2,43],75:[2,43],80:[2,43],81:[2,43],82:[2,43],83:[2,43],84:[2,43],85:[2,43],87:[1,50]},{72:[1,35],86:51},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{52:52,54:[2,82],65:[2,82],72:[2,82],80:[2,82],81:[2,82],82:[2,82],83:[2,82],84:[2,82],85:[2,82]},{25:53,38:55,39:[1,57],43:56,44:[1,58],45:54,47:[2,54]},{28:59,43:60,44:[1,58],47:[2,56]},{13:62,15:[1,20],18:[1,61]},{33:[2,86],57:63,65:[2,86],72:[2,86],80:[2,86],81:[2,86],82:[2,86],83:[2,86],84:[2,86],85:[2,86]},{33:[2,40],65:[2,40],72:[2,40],80:[2,40],81:[2,40],82:[2,40],83:[2,40],84:[2,40],85:[2,40]},{33:[2,41],65:[2,41],72:[2,41],80:[2,41],81:[2,41],82:[2,41],83:[2,41],84:[2,41],85:[2,41]},{20:64,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:65,47:[1,66]},{30:67,33:[2,58],65:[2,58],72:[2,58],75:[2,58],80:[2,58],81:[2,58],82:[2,58],83:[2,58],84:[2,58],85:[2,58]},{33:[2,64],35:68,65:[2,64],72:[2,64],75:[2,64],80:[2,64],81:[2,64],82:[2,64],83:[2,64],84:[2,64],85:[2,64]},{21:69,23:[2,50],65:[2,50],72:[2,50],80:[2,50],81:[2,50],82:[2,50],83:[2,50],84:[2,50],85:[2,50]},{33:[2,90],61:70,65:[2,90],72:[2,90],80:[2,90],81:[2,90],82:[2,90],83:[2,90],84:[2,90],85:[2,90]},{20:74,33:[2,80],50:71,63:72,64:75,65:[1,43],69:73,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{72:[1,79]},{23:[2,42],33:[2,42],54:[2,42],65:[2,42],68:[2,42],72:[2,42],75:[2,42],80:[2,42],81:[2,42],82:[2,42],83:[2,42],84:[2,42],85:[2,42],87:[1,50]},{20:74,53:80,54:[2,84],63:81,64:75,65:[1,43],69:82,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:83,47:[1,66]},{47:[2,55]},{4:84,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{47:[2,20]},{20:85,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:86,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{26:87,47:[1,66]},{47:[2,57]},{5:[2,11],14:[2,11],15:[2,11],19:[2,11],29:[2,11],34:[2,11],39:[2,11],44:[2,11],47:[2,11],48:[2,11],51:[2,11],55:[2,11],60:[2,11]},{15:[2,49],18:[2,49]},{20:74,33:[2,88],58:88,63:89,64:75,65:[1,43],69:90,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{65:[2,94],66:91,68:[2,94],72:[2,94],80:[2,94],81:[2,94],82:[2,94],83:[2,94],84:[2,94],85:[2,94]},{5:[2,25],14:[2,25],15:[2,25],19:[2,25],29:[2,25],34:[2,25],39:[2,25],44:[2,25],47:[2,25],48:[2,25],51:[2,25],55:[2,25],60:[2,25]},{20:92,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,31:93,33:[2,60],63:94,64:75,65:[1,43],69:95,70:76,71:77,72:[1,78],75:[2,60],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,33:[2,66],36:96,63:97,64:75,65:[1,43],69:98,70:76,71:77,72:[1,78],75:[2,66],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,22:99,23:[2,52],63:100,64:75,65:[1,43],69:101,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,33:[2,92],62:102,63:103,64:75,65:[1,43],69:104,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,105]},{33:[2,79],65:[2,79],72:[2,79],80:[2,79],81:[2,79],82:[2,79],83:[2,79],84:[2,79],85:[2,79]},{33:[2,81]},{23:[2,27],33:[2,27],54:[2,27],65:[2,27],68:[2,27],72:[2,27],75:[2,27],80:[2,27],81:[2,27],82:[2,27],83:[2,27],84:[2,27],85:[2,27]},{23:[2,28],33:[2,28],54:[2,28],65:[2,28],68:[2,28],72:[2,28],75:[2,28],80:[2,28],81:[2,28],82:[2,28],83:[2,28],84:[2,28],85:[2,28]},{23:[2,30],33:[2,30],54:[2,30],68:[2,30],71:106,72:[1,107],75:[2,30]},{23:[2,98],33:[2,98],54:[2,98],68:[2,98],72:[2,98],75:[2,98]},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],73:[1,108],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{23:[2,44],33:[2,44],54:[2,44],65:[2,44],68:[2,44],72:[2,44],75:[2,44],80:[2,44],81:[2,44],82:[2,44],83:[2,44],84:[2,44],85:[2,44],87:[2,44]},{54:[1,109]},{54:[2,83],65:[2,83],72:[2,83],80:[2,83],81:[2,83],82:[2,83],83:[2,83],84:[2,83],85:[2,83]},{54:[2,85]},{5:[2,13],14:[2,13],15:[2,13],19:[2,13],29:[2,13],34:[2,13],39:[2,13],44:[2,13],47:[2,13],48:[2,13],51:[2,13],55:[2,13],60:[2,13]},{38:55,39:[1,57],43:56,44:[1,58],45:111,46:110,47:[2,76]},{33:[2,70],40:112,65:[2,70],72:[2,70],75:[2,70],80:[2,70],81:[2,70],82:[2,70],83:[2,70],84:[2,70],85:[2,70]},{47:[2,18]},{5:[2,14],14:[2,14],15:[2,14],19:[2,14],29:[2,14],34:[2,14],39:[2,14],44:[2,14],47:[2,14],48:[2,14],51:[2,14],55:[2,14],60:[2,14]},{33:[1,113]},{33:[2,87],65:[2,87],72:[2,87],80:[2,87],81:[2,87],82:[2,87],83:[2,87],84:[2,87],85:[2,87]},{33:[2,89]},{20:74,63:115,64:75,65:[1,43],67:114,68:[2,96],69:116,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,117]},{32:118,33:[2,62],74:119,75:[1,120]},{33:[2,59],65:[2,59],72:[2,59],75:[2,59],80:[2,59],81:[2,59],82:[2,59],83:[2,59],84:[2,59],85:[2,59]},{33:[2,61],75:[2,61]},{33:[2,68],37:121,74:122,75:[1,120]},{33:[2,65],65:[2,65],72:[2,65],75:[2,65],80:[2,65],81:[2,65],82:[2,65],83:[2,65],84:[2,65],85:[2,65]},{33:[2,67],75:[2,67]},{23:[1,123]},{23:[2,51],65:[2,51],72:[2,51],80:[2,51],81:[2,51],82:[2,51],83:[2,51],84:[2,51],85:[2,51]},{23:[2,53]},{33:[1,124]},{33:[2,91],65:[2,91],72:[2,91],80:[2,91],81:[2,91],82:[2,91],83:[2,91],84:[2,91],85:[2,91]},{33:[2,93]},{5:[2,22],14:[2,22],15:[2,22],19:[2,22],29:[2,22],34:[2,22],39:[2,22],44:[2,22],47:[2,22],48:[2,22],51:[2,22],55:[2,22],60:[2,22]},{23:[2,99],33:[2,99],54:[2,99],68:[2,99],72:[2,99],75:[2,99]},{73:[1,108]},{20:74,63:125,64:75,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,23],14:[2,23],15:[2,23],19:[2,23],29:[2,23],34:[2,23],39:[2,23],44:[2,23],47:[2,23],48:[2,23],51:[2,23],55:[2,23],60:[2,23]},{47:[2,19]},{47:[2,77]},{20:74,33:[2,72],41:126,63:127,64:75,65:[1,43],69:128,70:76,71:77,72:[1,78],75:[2,72],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,24],14:[2,24],15:[2,24],19:[2,24],29:[2,24],34:[2,24],39:[2,24],44:[2,24],47:[2,24],48:[2,24],51:[2,24],55:[2,24],60:[2,24]},{68:[1,129]},{65:[2,95],68:[2,95],72:[2,95],80:[2,95],81:[2,95],82:[2,95],83:[2,95],84:[2,95],85:[2,95]},{68:[2,97]},{5:[2,21],14:[2,21],15:[2,21],19:[2,21],29:[2,21],34:[2,21],39:[2,21],44:[2,21],47:[2,21],48:[2,21],51:[2,21],55:[2,21],60:[2,21]},{33:[1,130]},{33:[2,63]},{72:[1,132],76:131},{33:[1,133]},{33:[2,69]},{15:[2,12],18:[2,12]},{14:[2,26],15:[2,26],19:[2,26],29:[2,26],34:[2,26],47:[2,26],48:[2,26],51:[2,26],55:[2,26],60:[2,26]},{23:[2,31],33:[2,31],54:[2,31],68:[2,31],72:[2,31],75:[2,31]},{33:[2,74],42:134,74:135,75:[1,120]},{33:[2,71],65:[2,71],72:[2,71],75:[2,71],80:[2,71],81:[2,71],82:[2,71],83:[2,71],84:[2,71],85:[2,71]},{33:[2,73],75:[2,73]},{23:[2,29],33:[2,29],54:[2,29],65:[2,29],68:[2,29],72:[2,29],75:[2,29],80:[2,29],81:[2,29],82:[2,29],83:[2,29],84:[2,29],85:[2,29]},{14:[2,15],15:[2,15],19:[2,15],29:[2,15],34:[2,15],39:[2,15],44:[2,15],47:[2,15],48:[2,15],51:[2,15],55:[2,15],60:[2,15]},{72:[1,137],77:[1,136]},{72:[2,100],77:[2,100]},{14:[2,16],15:[2,16],19:[2,16],29:[2,16],34:[2,16],44:[2,16],47:[2,16],48:[2,16],51:[2,16],55:[2,16],60:[2,16]},{33:[1,138]},{33:[2,75]},{33:[2,32]},{72:[2,101],77:[2,101]},{14:[2,17],15:[2,17],19:[2,17],29:[2,17],34:[2,17],39:[2,17],44:[2,17],47:[2,17],48:[2,17],51:[2,17],55:[2,17],60:[2,17]}],defaultActions:{4:[2,1],54:[2,55],56:[2,20],60:[2,57],73:[2,81],82:[2,85],86:[2,18],90:[2,89],101:[2,53],104:[2,93],110:[2,19],111:[2,77],116:[2,97],119:[2,63],122:[2,69],135:[2,75],136:[2,32]},parseError:function(l,a){throw new Error(l)},parse:function(l){var a=this,i=[0],s=[null],m=[],r=this.table,t="",e=0,o=0;this.lexer.setInput(l),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,this.yy.parser=this,typeof this.lexer.yylloc>"u"&&(this.lexer.yylloc={});var p=this.lexer.yylloc;m.push(p);var v=this.lexer.options&&this.lexer.options.ranges;typeof this.yy.parseError=="function"&&(this.parseError=this.yy.parseError);function b(){var I;return I=a.lexer.lex()||1,typeof I!="number"&&(I=a.symbols_[I]||I),I}for(var S,_,y,w,k={},P,M,L,C;;){if(_=i[i.length-1],this.defaultActions[_]?y=this.defaultActions[_]:((S===null||typeof S>"u")&&(S=b()),y=r[_]&&r[_][S]),typeof y>"u"||!y.length||!y[0]){var E="";{C=[];for(P in r[_])this.terminals_[P]&&P>2&&C.push("'"+this.terminals_[P]+"'");this.lexer.showPosition?E="Parse error on line "+(e+1)+`:
`+this.lexer.showPosition()+`
Expecting `+C.join(", ")+", got '"+(this.terminals_[S]||S)+"'":E="Parse error on line "+(e+1)+": Unexpected "+(S==1?"end of input":"'"+(this.terminals_[S]||S)+"'"),this.parseError(E,{text:this.lexer.match,token:this.terminals_[S]||S,line:this.lexer.yylineno,loc:p,expected:C})}}if(y[0]instanceof Array&&y.length>1)throw new Error("Parse Error: multiple actions possible at state: "+_+", token: "+S);switch(y[0]){case 1:i.push(S),s.push(this.lexer.yytext),m.push(this.lexer.yylloc),i.push(y[1]),S=null,o=this.lexer.yyleng,t=this.lexer.yytext,e=this.lexer.yylineno,p=this.lexer.yylloc;break;case 2:if(M=this.productions_[y[1]][1],k.$=s[s.length-M],k._$={first_line:m[m.length-(M||1)].first_line,last_line:m[m.length-1].last_line,first_column:m[m.length-(M||1)].first_column,last_column:m[m.length-1].last_column},v&&(k._$.range=[m[m.length-(M||1)].range[0],m[m.length-1].range[1]]),w=this.performAction.call(k,t,o,e,this.yy,y[1],s,m),typeof w<"u")return w;M&&(i=i.slice(0,-1*M*2),s=s.slice(0,-1*M),m=m.slice(0,-1*M)),i.push(this.productions_[y[1]][0]),s.push(k.$),m.push(k._$),L=r[i[i.length-2]][i[i.length-1]],i.push(L);break;case 3:return!0}}return!0}},g=(function(){var d={EOF:1,parseError:function(a,i){if(this.yy.parser)this.yy.parser.parseError(a,i);else throw new Error(a)},setInput:function(a){return this._input=a,this._more=this._less=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var a=this._input[0];this.yytext+=a,this.yyleng++,this.offset++,this.match+=a,this.matched+=a;var i=a.match(/(?:\r\n?|\n).*/g);return i?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),a},unput:function(a){var i=a.length,s=a.split(/(?:\r\n?|\n)/g);this._input=a+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-i-1),this.offset-=i;var m=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),s.length-1&&(this.yylineno-=s.length-1);var r=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:s?(s.length===m.length?this.yylloc.first_column:0)+m[m.length-s.length].length-s[0].length:this.yylloc.first_column-i},this.options.ranges&&(this.yylloc.range=[r[0],r[0]+this.yyleng-i]),this},more:function(){return this._more=!0,this},less:function(a){this.unput(this.match.slice(a))},pastInput:function(){var a=this.matched.substr(0,this.matched.length-this.match.length);return(a.length>20?"...":"")+a.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var a=this.match;return a.length<20&&(a+=this._input.substr(0,20-a.length)),(a.substr(0,20)+(a.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var a=this.pastInput(),i=new Array(a.length+1).join("-");return a+this.upcomingInput()+`
`+i+"^"},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var a,i,s,m,r;this._more||(this.yytext="",this.match="");for(var t=this._currentRules(),e=0;e<t.length&&(s=this._input.match(this.rules[t[e]]),!(s&&(!i||s[0].length>i[0].length)&&(i=s,m=e,!this.options.flex)));e++);return i?(r=i[0].match(/(?:\r\n?|\n).*/g),r&&(this.yylineno+=r.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:r?r[r.length-1].length-r[r.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+i[0].length},this.yytext+=i[0],this.match+=i[0],this.matches=i,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._input=this._input.slice(i[0].length),this.matched+=i[0],a=this.performAction.call(this,this.yy,this,t[m],this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),a||void 0):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var a=this.next();return typeof a<"u"?a:this.lex()},begin:function(a){this.conditionStack.push(a)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(a){this.begin(a)}};return d.options={},d.performAction=function(a,i,s,m){function r(t,e){return i.yytext=i.yytext.substring(t,i.yyleng-e+t)}switch(s){case 0:if(i.yytext.slice(-2)==="\\\\"?(r(0,1),this.begin("mu")):i.yytext.slice(-1)==="\\"?(r(0,1),this.begin("emu")):this.begin("mu"),i.yytext)return 15;break;case 1:return 15;case 2:return this.popState(),15;case 3:return this.begin("raw"),15;case 4:return this.popState(),this.conditionStack[this.conditionStack.length-1]==="raw"?15:(r(5,9),"END_RAW_BLOCK");case 5:return 15;case 6:return this.popState(),14;case 7:return 65;case 8:return 68;case 9:return 19;case 10:return this.popState(),this.begin("raw"),23;case 11:return 55;case 12:return 60;case 13:return 29;case 14:return 47;case 15:return this.popState(),44;case 16:return this.popState(),44;case 17:return 34;case 18:return 39;case 19:return 51;case 20:return 48;case 21:this.unput(i.yytext),this.popState(),this.begin("com");break;case 22:return this.popState(),14;case 23:return 48;case 24:return 73;case 25:return 72;case 26:return 72;case 27:return 87;case 28:break;case 29:return this.popState(),54;case 30:return this.popState(),33;case 31:return i.yytext=r(1,2).replace(/\\"/g,'"'),80;case 32:return i.yytext=r(1,2).replace(/\\'/g,"'"),80;case 33:return 85;case 34:return 82;case 35:return 82;case 36:return 83;case 37:return 84;case 38:return 81;case 39:return 75;case 40:return 77;case 41:return 72;case 42:return i.yytext=i.yytext.replace(/\\([\\\]])/g,"$1"),72;case 43:return"INVALID";case 44:return 5}},d.rules=[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:\{\{\{\{(?=[^/]))/,/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,/^(?:[^\x00]+?(?=(\{\{\{\{)))/,/^(?:[\s\S]*?--(~)?\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{\{\{)/,/^(?:\}\}\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#>)/,/^(?:\{\{(~)?#\*?)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^\s*(~)?\}\})/,/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{(~)?!--)/,/^(?:\{\{(~)?![\s\S]*?\}\})/,/^(?:\{\{(~)?\*?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)|])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:undefined(?=([~}\s)])))/,/^(?:null(?=([~}\s)])))/,/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,/^(?:as\s+\|)/,/^(?:\|)/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/,/^(?:\[(\\\]|[^\]])*\])/,/^(?:.)/,/^(?:$)/],d.conditions={mu:{rules:[7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44],inclusive:!1},emu:{rules:[2],inclusive:!1},com:{rules:[6],inclusive:!1},raw:{rules:[3,4,5],inclusive:!1},INITIAL:{rules:[0,1,44],inclusive:!0}},d})();c.lexer=g;function h(){this.yy={}}return h.prototype=c,c.Parser=h,new h})();n.default=u,f.exports=n.default})(Ae,Ae.exports)),Ae.exports}var Oe={exports:{}},De={exports:{}},kt;function tr(){return kt||(kt=1,(function(f,n){n.__esModule=!0;function u(i){return i&&i.__esModule?i:{default:i}}var c=G(),g=u(c);function h(){this.parents=[]}h.prototype={constructor:h,mutating:!1,acceptKey:function(s,m){var r=this.accept(s[m]);if(this.mutating){if(r&&!h.prototype[r.type])throw new g.default('Unexpected node type "'+r.type+'" found when accepting '+m+" on "+s.type);s[m]=r}},acceptRequired:function(s,m){if(this.acceptKey(s,m),!s[m])throw new g.default(s.type+" requires "+m)},acceptArray:function(s){for(var m=0,r=s.length;m<r;m++)this.acceptKey(s,m),s[m]||(s.splice(m,1),m--,r--)},accept:function(s){if(s){if(!this[s.type])throw new g.default("Unknown type: "+s.type,s);this.current&&this.parents.unshift(this.current),this.current=s;var m=this[s.type](s);if(this.current=this.parents.shift(),!this.mutating||m)return m;if(m!==!1)return s}},Program:function(s){this.acceptArray(s.body)},MustacheStatement:d,Decorator:d,BlockStatement:l,DecoratorBlock:l,PartialStatement:a,PartialBlockStatement:function(s){a.call(this,s),this.acceptKey(s,"program")},ContentStatement:function(){},CommentStatement:function(){},SubExpression:d,PathExpression:function(){},StringLiteral:function(){},NumberLiteral:function(){},BooleanLiteral:function(){},UndefinedLiteral:function(){},NullLiteral:function(){},Hash:function(s){this.acceptArray(s.pairs)},HashPair:function(s){this.acceptRequired(s,"value")}};function d(i){this.acceptRequired(i,"path"),this.acceptArray(i.params),this.acceptKey(i,"hash")}function l(i){d.call(this,i),this.acceptKey(i,"program"),this.acceptKey(i,"inverse")}function a(i){this.acceptRequired(i,"name"),this.acceptArray(i.params),this.acceptKey(i,"hash")}n.default=h,f.exports=n.default})(De,De.exports)),De.exports}var Ct;function wr(){return Ct||(Ct=1,(function(f,n){n.__esModule=!0;function u(s){return s&&s.__esModule?s:{default:s}}var c=tr(),g=u(c);function h(){var s=arguments.length<=0||arguments[0]===void 0?{}:arguments[0];this.options=s}h.prototype=new g.default,h.prototype.Program=function(s){var m=!this.options.ignoreStandalone,r=!this.isRootSeen;this.isRootSeen=!0;for(var t=s.body,e=0,o=t.length;e<o;e++){var p=t[e],v=this.accept(p);if(v){var b=d(t,e,r),S=l(t,e,r),_=v.openStandalone&&b,y=v.closeStandalone&&S,w=v.inlineStandalone&&b&&S;v.close&&a(t,e,!0),v.open&&i(t,e,!0),m&&w&&(a(t,e),i(t,e)&&p.type==="PartialStatement"&&(p.indent=/([ \t]+$)/.exec(t[e-1].original)[1])),m&&_&&(a((p.program||p.inverse).body),i(t,e)),m&&y&&(a(t,e),i((p.inverse||p.program).body))}}return s},h.prototype.BlockStatement=h.prototype.DecoratorBlock=h.prototype.PartialBlockStatement=function(s){this.accept(s.program),this.accept(s.inverse);var m=s.program||s.inverse,r=s.program&&s.inverse,t=r,e=r;if(r&&r.chained)for(t=r.body[0].program;e.chained;)e=e.body[e.body.length-1].program;var o={open:s.openStrip.open,close:s.closeStrip.close,openStandalone:l(m.body),closeStandalone:d((t||m).body)};if(s.openStrip.close&&a(m.body,null,!0),r){var p=s.inverseStrip;p.open&&i(m.body,null,!0),p.close&&a(t.body,null,!0),s.closeStrip.open&&i(e.body,null,!0),!this.options.ignoreStandalone&&d(m.body)&&l(t.body)&&(i(m.body),a(t.body))}else s.closeStrip.open&&i(m.body,null,!0);return o},h.prototype.Decorator=h.prototype.MustacheStatement=function(s){return s.strip},h.prototype.PartialStatement=h.prototype.CommentStatement=function(s){var m=s.strip||{};return{inlineStandalone:!0,open:m.open,close:m.close}};function d(s,m,r){m===void 0&&(m=s.length);var t=s[m-1],e=s[m-2];if(!t)return r;if(t.type==="ContentStatement")return(e||!r?/\r?\n\s*?$/:/(^|\r?\n)\s*?$/).test(t.original)}function l(s,m,r){m===void 0&&(m=-1);var t=s[m+1],e=s[m+2];if(!t)return r;if(t.type==="ContentStatement")return(e||!r?/^\s*?\r?\n/:/^\s*?(\r?\n|$)/).test(t.original)}function a(s,m,r){var t=s[m==null?0:m+1];if(!(!t||t.type!=="ContentStatement"||!r&&t.rightStripped)){var e=t.value;t.value=t.value.replace(r?/^\s+/:/^[ \t]*\r?\n?/,""),t.rightStripped=t.value!==e}}function i(s,m,r){var t=s[m==null?s.length-1:m-1];if(!(!t||t.type!=="ContentStatement"||!r&&t.leftStripped)){var e=t.value;return t.value=t.value.replace(r?/\s+$/:/[ \t]+$/,""),t.leftStripped=t.value!==e,t.leftStripped}}n.default=h,f.exports=n.default})(Oe,Oe.exports)),Oe.exports}var F={},Pt;function kr(){if(Pt)return F;Pt=1,F.__esModule=!0,F.SourceLocation=g,F.id=h,F.stripFlags=d,F.stripComment=l,F.preparePath=a,F.prepareMustache=i,F.prepareRawBlock=s,F.prepareBlock=m,F.prepareProgram=r,F.preparePartialBlock=t;function f(e){return e&&e.__esModule?e:{default:e}}var n=G(),u=f(n);function c(e,o){if(o=o.path?o.path.original:o,e.path.original!==o){var p={loc:e.path.loc};throw new u.default(e.path.original+" doesn't match "+o,p)}}function g(e,o){this.source=e,this.start={line:o.first_line,column:o.first_column},this.end={line:o.last_line,column:o.last_column}}function h(e){return/^\[.*\]$/.test(e)?e.substring(1,e.length-1):e}function d(e,o){return{open:e.charAt(2)==="~",close:o.charAt(o.length-3)==="~"}}function l(e){return e.replace(/^\{\{~?!-?-?/,"").replace(/-?-?~?\}\}$/,"")}function a(e,o,p){p=this.locInfo(p);for(var v=e?"@":"",b=[],S=0,_=0,y=o.length;_<y;_++){var w=o[_].part,k=o[_].original!==w;if(v+=(o[_].separator||"")+w,!k&&(w===".."||w==="."||w==="this")){if(b.length>0)throw new u.default("Invalid path: "+v,{loc:p});w===".."&&S++}else b.push(w)}return{type:"PathExpression",data:e,depth:S,parts:b,original:v,loc:p}}function i(e,o,p,v,b,S){var _=v.charAt(3)||v.charAt(2),y=_!=="{"&&_!=="&",w=/\*/.test(v);return{type:w?"Decorator":"MustacheStatement",path:e,params:o,hash:p,escaped:y,strip:b,loc:this.locInfo(S)}}function s(e,o,p,v){c(e,p),v=this.locInfo(v);var b={type:"Program",body:o,strip:{},loc:v};return{type:"BlockStatement",path:e.path,params:e.params,hash:e.hash,program:b,openStrip:{},inverseStrip:{},closeStrip:{},loc:v}}function m(e,o,p,v,b,S){v&&v.path&&c(e,v);var _=/\*/.test(e.open);o.blockParams=e.blockParams;var y=void 0,w=void 0;if(p){if(_)throw new u.default("Unexpected inverse block on decorator",p);p.chain&&(p.program.body[0].closeStrip=v.strip),w=p.strip,y=p.program}return b&&(b=y,y=o,o=b),{type:_?"DecoratorBlock":"BlockStatement",path:e.path,params:e.params,hash:e.hash,program:o,inverse:y,openStrip:e.strip,inverseStrip:w,closeStrip:v&&v.strip,loc:this.locInfo(S)}}function r(e,o){if(!o&&e.length){var p=e[0].loc,v=e[e.length-1].loc;p&&v&&(o={source:p.source,start:{line:p.start.line,column:p.start.column},end:{line:v.end.line,column:v.end.column}})}return{type:"Program",body:e,strip:{},loc:o}}function t(e,o,p,v){return c(e,p),{type:"PartialBlockStatement",name:e.path,params:e.params,hash:e.hash,program:o,openStrip:e.strip,closeStrip:p&&p.strip,loc:this.locInfo(v)}}return F}var Lt;function Cr(){if(Lt)return $;Lt=1,$.__esModule=!0,$.parseWithoutProcessing=s,$.parse=m;function f(r){if(r&&r.__esModule)return r;var t={};if(r!=null)for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e]);return t.default=r,t}function n(r){return r&&r.__esModule?r:{default:r}}var u=Sr(),c=n(u),g=wr(),h=n(g),d=kr(),l=f(d),a=H();$.parser=c.default;var i={};a.extend(i,l);function s(r,t){if(r.type==="Program")return r;c.default.yy=i,i.locInfo=function(o){return new i.SourceLocation(t&&t.srcName,o)};var e=c.default.parse(r);return e}function m(r,t){var e=s(r,t),o=new h.default(t);return o.accept(e)}return $}var ee={},Et;function Pr(){if(Et)return ee;Et=1,ee.__esModule=!0,ee.Compiler=l,ee.precompile=a,ee.compile=i;function f(r){return r&&r.__esModule?r:{default:r}}var n=G(),u=f(n),c=H(),g=er(),h=f(g),d=[].slice;function l(){}l.prototype={compiler:l,equals:function(t){var e=this.opcodes.length;if(t.opcodes.length!==e)return!1;for(var o=0;o<e;o++){var p=this.opcodes[o],v=t.opcodes[o];if(p.opcode!==v.opcode||!s(p.args,v.args))return!1}e=this.children.length;for(var o=0;o<e;o++)if(!this.children[o].equals(t.children[o]))return!1;return!0},guid:0,compile:function(t,e){return this.sourceNode=[],this.opcodes=[],this.children=[],this.options=e,this.stringParams=e.stringParams,this.trackIds=e.trackIds,e.blockParams=e.blockParams||[],e.knownHelpers=c.extend(Object.create(null),{helperMissing:!0,blockHelperMissing:!0,each:!0,if:!0,unless:!0,with:!0,log:!0,lookup:!0},e.knownHelpers),this.accept(t)},compileProgram:function(t){var e=new this.compiler,o=e.compile(t,this.options),p=this.guid++;return this.usePartial=this.usePartial||o.usePartial,this.children[p]=o,this.useDepths=this.useDepths||o.useDepths,p},accept:function(t){if(!this[t.type])throw new u.default("Unknown type: "+t.type,t);this.sourceNode.unshift(t);var e=this[t.type](t);return this.sourceNode.shift(),e},Program:function(t){this.options.blockParams.unshift(t.blockParams);for(var e=t.body,o=e.length,p=0;p<o;p++)this.accept(e[p]);return this.options.blockParams.shift(),this.isSimple=o===1,this.blockParams=t.blockParams?t.blockParams.length:0,this},BlockStatement:function(t){m(t);var e=t.program,o=t.inverse;e=e&&this.compileProgram(e),o=o&&this.compileProgram(o);var p=this.classifySexpr(t);p==="helper"?this.helperSexpr(t,e,o):p==="simple"?(this.simpleSexpr(t),this.opcode("pushProgram",e),this.opcode("pushProgram",o),this.opcode("emptyHash"),this.opcode("blockValue",t.path.original)):(this.ambiguousSexpr(t,e,o),this.opcode("pushProgram",e),this.opcode("pushProgram",o),this.opcode("emptyHash"),this.opcode("ambiguousBlockValue")),this.opcode("append")},DecoratorBlock:function(t){var e=t.program&&this.compileProgram(t.program),o=this.setupFullMustacheParams(t,e,void 0),p=t.path;this.useDecorators=!0,this.opcode("registerDecorator",o.length,p.original)},PartialStatement:function(t){this.usePartial=!0;var e=t.program;e&&(e=this.compileProgram(t.program));var o=t.params;if(o.length>1)throw new u.default("Unsupported number of partial arguments: "+o.length,t);o.length||(this.options.explicitPartialContext?this.opcode("pushLiteral","undefined"):o.push({type:"PathExpression",parts:[],depth:0}));var p=t.name.original,v=t.name.type==="SubExpression";v&&this.accept(t.name),this.setupFullMustacheParams(t,e,void 0,!0);var b=t.indent||"";this.options.preventIndent&&b&&(this.opcode("appendContent",b),b=""),this.opcode("invokePartial",v,p,b),this.opcode("append")},PartialBlockStatement:function(t){this.PartialStatement(t)},MustacheStatement:function(t){this.SubExpression(t),t.escaped&&!this.options.noEscape?this.opcode("appendEscaped"):this.opcode("append")},Decorator:function(t){this.DecoratorBlock(t)},ContentStatement:function(t){t.value&&this.opcode("appendContent",t.value)},CommentStatement:function(){},SubExpression:function(t){m(t);var e=this.classifySexpr(t);e==="simple"?this.simpleSexpr(t):e==="helper"?this.helperSexpr(t):this.ambiguousSexpr(t)},ambiguousSexpr:function(t,e,o){var p=t.path,v=p.parts[0],b=e!=null||o!=null;this.opcode("getContext",p.depth),this.opcode("pushProgram",e),this.opcode("pushProgram",o),p.strict=!0,this.accept(p),this.opcode("invokeAmbiguous",v,b)},simpleSexpr:function(t){var e=t.path;e.strict=!0,this.accept(e),this.opcode("resolvePossibleLambda")},helperSexpr:function(t,e,o){var p=this.setupFullMustacheParams(t,e,o),v=t.path,b=v.parts[0];if(this.options.knownHelpers[b])this.opcode("invokeKnownHelper",p.length,b);else{if(this.options.knownHelpersOnly)throw new u.default("You specified knownHelpersOnly, but used the unknown helper "+b,t);v.strict=!0,v.falsy=!0,this.accept(v),this.opcode("invokeHelper",p.length,v.original,h.default.helpers.simpleId(v))}},PathExpression:function(t){this.addDepth(t.depth),this.opcode("getContext",t.depth);var e=t.parts[0],o=h.default.helpers.scopedId(t),p=!t.depth&&!o&&this.blockParamIndex(e);p?this.opcode("lookupBlockParam",p,t.parts):e?t.data?(this.options.data=!0,this.opcode("lookupData",t.depth,t.parts,t.strict)):this.opcode("lookupOnContext",t.parts,t.falsy,t.strict,o):this.opcode("pushContext")},StringLiteral:function(t){this.opcode("pushString",t.value)},NumberLiteral:function(t){this.opcode("pushLiteral",t.value)},BooleanLiteral:function(t){this.opcode("pushLiteral",t.value)},UndefinedLiteral:function(){this.opcode("pushLiteral","undefined")},NullLiteral:function(){this.opcode("pushLiteral","null")},Hash:function(t){var e=t.pairs,o=0,p=e.length;for(this.opcode("pushHash");o<p;o++)this.pushParam(e[o].value);for(;o--;)this.opcode("assignToHash",e[o].key);this.opcode("popHash")},opcode:function(t){this.opcodes.push({opcode:t,args:d.call(arguments,1),loc:this.sourceNode[0].loc})},addDepth:function(t){t&&(this.useDepths=!0)},classifySexpr:function(t){var e=h.default.helpers.simpleId(t.path),o=e&&!!this.blockParamIndex(t.path.parts[0]),p=!o&&h.default.helpers.helperExpression(t),v=!o&&(p||e);if(v&&!p){var b=t.path.parts[0],S=this.options;S.knownHelpers[b]?p=!0:S.knownHelpersOnly&&(v=!1)}return p?"helper":v?"ambiguous":"simple"},pushParams:function(t){for(var e=0,o=t.length;e<o;e++)this.pushParam(t[e])},pushParam:function(t){var e=t.value!=null?t.value:t.original||"";if(this.stringParams)e.replace&&(e=e.replace(/^(\.?\.\/)*/g,"").replace(/\//g,".")),t.depth&&this.addDepth(t.depth),this.opcode("getContext",t.depth||0),this.opcode("pushStringParam",e,t.type),t.type==="SubExpression"&&this.accept(t);else{if(this.trackIds){var o=void 0;if(t.parts&&!h.default.helpers.scopedId(t)&&!t.depth&&(o=this.blockParamIndex(t.parts[0])),o){var p=t.parts.slice(1).join(".");this.opcode("pushId","BlockParam",o,p)}else e=t.original||e,e.replace&&(e=e.replace(/^this(?:\.|$)/,"").replace(/^\.\//,"").replace(/^\.$/,"")),this.opcode("pushId",t.type,e)}this.accept(t)}},setupFullMustacheParams:function(t,e,o,p){var v=t.params;return this.pushParams(v),this.opcode("pushProgram",e),this.opcode("pushProgram",o),t.hash?this.accept(t.hash):this.opcode("emptyHash",p),v},blockParamIndex:function(t){for(var e=0,o=this.options.blockParams.length;e<o;e++){var p=this.options.blockParams[e],v=p&&c.indexOf(p,t);if(p&&v>=0)return[e,v]}}};function a(r,t,e){if(r==null||typeof r!="string"&&r.type!=="Program")throw new u.default("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+r);t=t||{},"data"in t||(t.data=!0),t.compat&&(t.useDepths=!0);var o=e.parse(r,t),p=new e.Compiler().compile(o,t);return new e.JavaScriptCompiler().compile(p,t)}function i(r,t,e){if(t===void 0&&(t={}),r==null||typeof r!="string"&&r.type!=="Program")throw new u.default("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+r);t=c.extend({},t),"data"in t||(t.data=!0),t.compat&&(t.useDepths=!0);var o=void 0;function p(){var b=e.parse(r,t),S=new e.Compiler().compile(b,t),_=new e.JavaScriptCompiler().compile(S,t,void 0,!0);return e.template(_)}function v(b,S){return o||(o=p()),o.call(this,b,S)}return v._setup=function(b){return o||(o=p()),o._setup(b)},v._child=function(b,S,_,y){return o||(o=p()),o._child(b,S,_,y)},v}function s(r,t){if(r===t)return!0;if(c.isArray(r)&&c.isArray(t)&&r.length===t.length){for(var e=0;e<r.length;e++)if(!s(r[e],t[e]))return!1;return!0}}function m(r){if(!r.path.parts){var t=r.path;r.path={type:"PathExpression",data:!1,depth:0,parts:[t.original+""],original:t.original+"",loc:t.loc}}}return ee}var Ne={exports:{}},qe={exports:{}},ae={},Ve={},Re={},Te={},xt;function Lr(){if(xt)return Te;xt=1;var f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");return Te.encode=function(n){if(0<=n&&n<f.length)return f[n];throw new TypeError("Must be between 0 and 63: "+n)},Te.decode=function(n){var u=65,c=90,g=97,h=122,d=48,l=57,a=43,i=47,s=26,m=52;return u<=n&&n<=c?n-u:g<=n&&n<=h?n-g+s:d<=n&&n<=l?n-d+m:n==a?62:n==i?63:-1},Te}var Mt;function rr(){if(Mt)return Re;Mt=1;var f=Lr(),n=5,u=1<<n,c=u-1,g=u;function h(l){return l<0?(-l<<1)+1:(l<<1)+0}function d(l){var a=(l&1)===1,i=l>>1;return a?-i:i}return Re.encode=function(a){var i="",s,m=h(a);do s=m&c,m>>>=n,m>0&&(s|=g),i+=f.encode(s);while(m>0);return i},Re.decode=function(a,i,s){var m=a.length,r=0,t=0,e,o;do{if(i>=m)throw new Error("Expected more digits in base 64 VLQ value.");if(o=f.decode(a.charCodeAt(i++)),o===-1)throw new Error("Invalid base64 digit: "+a.charAt(i-1));e=!!(o&g),o&=c,r=r+(o<<t),t+=n}while(e);s.value=d(r),s.rest=i},Re}var Ge={},It;function he(){return It||(It=1,(function(f){function n(_,y,w){if(y in _)return _[y];if(arguments.length===3)return w;throw new Error('"'+y+'" is a required argument.')}f.getArg=n;var u=/^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/,c=/^data:.+\,.+$/;function g(_){var y=_.match(u);return y?{scheme:y[1],auth:y[2],host:y[3],port:y[4],path:y[5]}:null}f.urlParse=g;function h(_){var y="";return _.scheme&&(y+=_.scheme+":"),y+="//",_.auth&&(y+=_.auth+"@"),_.host&&(y+=_.host),_.port&&(y+=":"+_.port),_.path&&(y+=_.path),y}f.urlGenerate=h;function d(_){var y=_,w=g(_);if(w){if(!w.path)return _;y=w.path}for(var k=f.isAbsolute(y),P=y.split(/\/+/),M,L=0,C=P.length-1;C>=0;C--)M=P[C],M==="."?P.splice(C,1):M===".."?L++:L>0&&(M===""?(P.splice(C+1,L),L=0):(P.splice(C,2),L--));return y=P.join("/"),y===""&&(y=k?"/":"."),w?(w.path=y,h(w)):y}f.normalize=d;function l(_,y){_===""&&(_="."),y===""&&(y=".");var w=g(y),k=g(_);if(k&&(_=k.path||"/"),w&&!w.scheme)return k&&(w.scheme=k.scheme),h(w);if(w||y.match(c))return y;if(k&&!k.host&&!k.path)return k.host=y,h(k);var P=y.charAt(0)==="/"?y:d(_.replace(/\/+$/,"")+"/"+y);return k?(k.path=P,h(k)):P}f.join=l,f.isAbsolute=function(_){return _.charAt(0)==="/"||u.test(_)};function a(_,y){_===""&&(_="."),_=_.replace(/\/$/,"");for(var w=0;y.indexOf(_+"/")!==0;){var k=_.lastIndexOf("/");if(k<0||(_=_.slice(0,k),_.match(/^([^\/]+:\/)?\/*$/)))return y;++w}return Array(w+1).join("../")+y.substr(_.length+1)}f.relative=a;var i=(function(){var _=Object.create(null);return!("__proto__"in _)})();function s(_){return _}function m(_){return t(_)?"$"+_:_}f.toSetString=i?s:m;function r(_){return t(_)?_.slice(1):_}f.fromSetString=i?s:r;function t(_){if(!_)return!1;var y=_.length;if(y<9||_.charCodeAt(y-1)!==95||_.charCodeAt(y-2)!==95||_.charCodeAt(y-3)!==111||_.charCodeAt(y-4)!==116||_.charCodeAt(y-5)!==111||_.charCodeAt(y-6)!==114||_.charCodeAt(y-7)!==112||_.charCodeAt(y-8)!==95||_.charCodeAt(y-9)!==95)return!1;for(var w=y-10;w>=0;w--)if(_.charCodeAt(w)!==36)return!1;return!0}function e(_,y,w){var k=p(_.source,y.source);return k!==0||(k=_.originalLine-y.originalLine,k!==0)||(k=_.originalColumn-y.originalColumn,k!==0||w)||(k=_.generatedColumn-y.generatedColumn,k!==0)||(k=_.generatedLine-y.generatedLine,k!==0)?k:p(_.name,y.name)}f.compareByOriginalPositions=e;function o(_,y,w){var k=_.generatedLine-y.generatedLine;return k!==0||(k=_.generatedColumn-y.generatedColumn,k!==0||w)||(k=p(_.source,y.source),k!==0)||(k=_.originalLine-y.originalLine,k!==0)||(k=_.originalColumn-y.originalColumn,k!==0)?k:p(_.name,y.name)}f.compareByGeneratedPositionsDeflated=o;function p(_,y){return _===y?0:_===null?1:y===null?-1:_>y?1:-1}function v(_,y){var w=_.generatedLine-y.generatedLine;return w!==0||(w=_.generatedColumn-y.generatedColumn,w!==0)||(w=p(_.source,y.source),w!==0)||(w=_.originalLine-y.originalLine,w!==0)||(w=_.originalColumn-y.originalColumn,w!==0)?w:p(_.name,y.name)}f.compareByGeneratedPositionsInflated=v;function b(_){return JSON.parse(_.replace(/^\)]}'[^\n]*\n/,""))}f.parseSourceMapInput=b;function S(_,y,w){if(y=y||"",_&&(_[_.length-1]!=="/"&&y[0]!=="/"&&(_+="/"),y=_+y),w){var k=g(w);if(!k)throw new Error("sourceMapURL could not be parsed");if(k.path){var P=k.path.lastIndexOf("/");P>=0&&(k.path=k.path.substring(0,P+1))}y=l(h(k),y)}return d(y)}f.computeSourceURL=S})(Ge)),Ge}var We={},At;function nr(){if(At)return We;At=1;var f=he(),n=Object.prototype.hasOwnProperty,u=typeof Map<"u";function c(){this._array=[],this._set=u?new Map:Object.create(null)}return c.fromArray=function(h,d){for(var l=new c,a=0,i=h.length;a<i;a++)l.add(h[a],d);return l},c.prototype.size=function(){return u?this._set.size:Object.getOwnPropertyNames(this._set).length},c.prototype.add=function(h,d){var l=u?h:f.toSetString(h),a=u?this.has(h):n.call(this._set,l),i=this._array.length;(!a||d)&&this._array.push(h),a||(u?this._set.set(h,i):this._set[l]=i)},c.prototype.has=function(h){if(u)return this._set.has(h);var d=f.toSetString(h);return n.call(this._set,d)},c.prototype.indexOf=function(h){if(u){var d=this._set.get(h);if(d>=0)return d}else{var l=f.toSetString(h);if(n.call(this._set,l))return this._set[l]}throw new Error('"'+h+'" is not in the set.')},c.prototype.at=function(h){if(h>=0&&h<this._array.length)return this._array[h];throw new Error("No element indexed by "+h)},c.prototype.toArray=function(){return this._array.slice()},We.ArraySet=c,We}var Ke={},Ot;function Er(){if(Ot)return Ke;Ot=1;var f=he();function n(c,g){var h=c.generatedLine,d=g.generatedLine,l=c.generatedColumn,a=g.generatedColumn;return d>h||d==h&&a>=l||f.compareByGeneratedPositionsInflated(c,g)<=0}function u(){this._array=[],this._sorted=!0,this._last={generatedLine:-1,generatedColumn:0}}return u.prototype.unsortedForEach=function(g,h){this._array.forEach(g,h)},u.prototype.add=function(g){n(this._last,g)?(this._last=g,this._array.push(g)):(this._sorted=!1,this._array.push(g))},u.prototype.toArray=function(){return this._sorted||(this._array.sort(f.compareByGeneratedPositionsInflated),this._sorted=!0),this._array},Ke.MappingList=u,Ke}var Dt;function sr(){if(Dt)return Ve;Dt=1;var f=rr(),n=he(),u=nr().ArraySet,c=Er().MappingList;function g(h){h||(h={}),this._file=n.getArg(h,"file",null),this._sourceRoot=n.getArg(h,"sourceRoot",null),this._skipValidation=n.getArg(h,"skipValidation",!1),this._sources=new u,this._names=new u,this._mappings=new c,this._sourcesContents=null}return g.prototype._version=3,g.fromSourceMap=function(d){var l=d.sourceRoot,a=new g({file:d.file,sourceRoot:l});return d.eachMapping(function(i){var s={generated:{line:i.generatedLine,column:i.generatedColumn}};i.source!=null&&(s.source=i.source,l!=null&&(s.source=n.relative(l,s.source)),s.original={line:i.originalLine,column:i.originalColumn},i.name!=null&&(s.name=i.name)),a.addMapping(s)}),d.sources.forEach(function(i){var s=i;l!==null&&(s=n.relative(l,i)),a._sources.has(s)||a._sources.add(s);var m=d.sourceContentFor(i);m!=null&&a.setSourceContent(i,m)}),a},g.prototype.addMapping=function(d){var l=n.getArg(d,"generated"),a=n.getArg(d,"original",null),i=n.getArg(d,"source",null),s=n.getArg(d,"name",null);this._skipValidation||this._validateMapping(l,a,i,s),i!=null&&(i=String(i),this._sources.has(i)||this._sources.add(i)),s!=null&&(s=String(s),this._names.has(s)||this._names.add(s)),this._mappings.add({generatedLine:l.line,generatedColumn:l.column,originalLine:a!=null&&a.line,originalColumn:a!=null&&a.column,source:i,name:s})},g.prototype.setSourceContent=function(d,l){var a=d;this._sourceRoot!=null&&(a=n.relative(this._sourceRoot,a)),l!=null?(this._sourcesContents||(this._sourcesContents=Object.create(null)),this._sourcesContents[n.toSetString(a)]=l):this._sourcesContents&&(delete this._sourcesContents[n.toSetString(a)],Object.keys(this._sourcesContents).length===0&&(this._sourcesContents=null))},g.prototype.applySourceMap=function(d,l,a){var i=l;if(l==null){if(d.file==null)throw new Error(`SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`);i=d.file}var s=this._sourceRoot;s!=null&&(i=n.relative(s,i));var m=new u,r=new u;this._mappings.unsortedForEach(function(t){if(t.source===i&&t.originalLine!=null){var e=d.originalPositionFor({line:t.originalLine,column:t.originalColumn});e.source!=null&&(t.source=e.source,a!=null&&(t.source=n.join(a,t.source)),s!=null&&(t.source=n.relative(s,t.source)),t.originalLine=e.line,t.originalColumn=e.column,e.name!=null&&(t.name=e.name))}var o=t.source;o!=null&&!m.has(o)&&m.add(o);var p=t.name;p!=null&&!r.has(p)&&r.add(p)},this),this._sources=m,this._names=r,d.sources.forEach(function(t){var e=d.sourceContentFor(t);e!=null&&(a!=null&&(t=n.join(a,t)),s!=null&&(t=n.relative(s,t)),this.setSourceContent(t,e))},this)},g.prototype._validateMapping=function(d,l,a,i){if(l&&typeof l.line!="number"&&typeof l.column!="number")throw new Error("original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.");if(!(d&&"line"in d&&"column"in d&&d.line>0&&d.column>=0&&!l&&!a&&!i)){if(d&&"line"in d&&"column"in d&&l&&"line"in l&&"column"in l&&d.line>0&&d.column>=0&&l.line>0&&l.column>=0&&a)return;throw new Error("Invalid mapping: "+JSON.stringify({generated:d,source:a,original:l,name:i}))}},g.prototype._serializeMappings=function(){for(var d=0,l=1,a=0,i=0,s=0,m=0,r="",t,e,o,p,v=this._mappings.toArray(),b=0,S=v.length;b<S;b++){if(e=v[b],t="",e.generatedLine!==l)for(d=0;e.generatedLine!==l;)t+=";",l++;else if(b>0){if(!n.compareByGeneratedPositionsInflated(e,v[b-1]))continue;t+=","}t+=f.encode(e.generatedColumn-d),d=e.generatedColumn,e.source!=null&&(p=this._sources.indexOf(e.source),t+=f.encode(p-m),m=p,t+=f.encode(e.originalLine-1-i),i=e.originalLine-1,t+=f.encode(e.originalColumn-a),a=e.originalColumn,e.name!=null&&(o=this._names.indexOf(e.name),t+=f.encode(o-s),s=o)),r+=t}return r},g.prototype._generateSourcesContent=function(d,l){return d.map(function(a){if(!this._sourcesContents)return null;l!=null&&(a=n.relative(l,a));var i=n.toSetString(a);return Object.prototype.hasOwnProperty.call(this._sourcesContents,i)?this._sourcesContents[i]:null},this)},g.prototype.toJSON=function(){var d={version:this._version,sources:this._sources.toArray(),names:this._names.toArray(),mappings:this._serializeMappings()};return this._file!=null&&(d.file=this._file),this._sourceRoot!=null&&(d.sourceRoot=this._sourceRoot),this._sourcesContents&&(d.sourcesContent=this._generateSourcesContent(d.sources,d.sourceRoot)),d},g.prototype.toString=function(){return JSON.stringify(this.toJSON())},Ve.SourceMapGenerator=g,Ve}var ie={},Je={},Nt;function xr(){return Nt||(Nt=1,(function(f){f.GREATEST_LOWER_BOUND=1,f.LEAST_UPPER_BOUND=2;function n(u,c,g,h,d,l){var a=Math.floor((c-u)/2)+u,i=d(g,h[a],!0);return i===0?a:i>0?c-a>1?n(a,c,g,h,d,l):l==f.LEAST_UPPER_BOUND?c<h.length?c:-1:a:a-u>1?n(u,a,g,h,d,l):l==f.LEAST_UPPER_BOUND?a:u<0?-1:u}f.search=function(c,g,h,d){if(g.length===0)return-1;var l=n(-1,g.length,c,g,h,d||f.GREATEST_LOWER_BOUND);if(l<0)return-1;for(;l-1>=0&&h(g[l],g[l-1],!0)===0;)--l;return l}})(Je)),Je}var ze={},qt;function Mr(){if(qt)return ze;qt=1;function f(c,g,h){var d=c[g];c[g]=c[h],c[h]=d}function n(c,g){return Math.round(c+Math.random()*(g-c))}function u(c,g,h,d){if(h<d){var l=n(h,d),a=h-1;f(c,l,d);for(var i=c[d],s=h;s<d;s++)g(c[s],i)<=0&&(a+=1,f(c,a,s));f(c,a+1,s);var m=a+1;u(c,g,h,m-1),u(c,g,m+1,d)}}return ze.quickSort=function(c,g){u(c,g,0,c.length-1)},ze}var Rt;function Ir(){if(Rt)return ie;Rt=1;var f=he(),n=xr(),u=nr().ArraySet,c=rr(),g=Mr().quickSort;function h(i,s){var m=i;return typeof i=="string"&&(m=f.parseSourceMapInput(i)),m.sections!=null?new a(m,s):new d(m,s)}h.fromSourceMap=function(i,s){return d.fromSourceMap(i,s)},h.prototype._version=3,h.prototype.__generatedMappings=null,Object.defineProperty(h.prototype,"_generatedMappings",{configurable:!0,enumerable:!0,get:function(){return this.__generatedMappings||this._parseMappings(this._mappings,this.sourceRoot),this.__generatedMappings}}),h.prototype.__originalMappings=null,Object.defineProperty(h.prototype,"_originalMappings",{configurable:!0,enumerable:!0,get:function(){return this.__originalMappings||this._parseMappings(this._mappings,this.sourceRoot),this.__originalMappings}}),h.prototype._charIsMappingSeparator=function(s,m){var r=s.charAt(m);return r===";"||r===","},h.prototype._parseMappings=function(s,m){throw new Error("Subclasses must implement _parseMappings")},h.GENERATED_ORDER=1,h.ORIGINAL_ORDER=2,h.GREATEST_LOWER_BOUND=1,h.LEAST_UPPER_BOUND=2,h.prototype.eachMapping=function(s,m,r){var t=m||null,e=r||h.GENERATED_ORDER,o;switch(e){case h.GENERATED_ORDER:o=this._generatedMappings;break;case h.ORIGINAL_ORDER:o=this._originalMappings;break;default:throw new Error("Unknown order of iteration.")}var p=this.sourceRoot;o.map(function(v){var b=v.source===null?null:this._sources.at(v.source);return b=f.computeSourceURL(p,b,this._sourceMapURL),{source:b,generatedLine:v.generatedLine,generatedColumn:v.generatedColumn,originalLine:v.originalLine,originalColumn:v.originalColumn,name:v.name===null?null:this._names.at(v.name)}},this).forEach(s,t)},h.prototype.allGeneratedPositionsFor=function(s){var m=f.getArg(s,"line"),r={source:f.getArg(s,"source"),originalLine:m,originalColumn:f.getArg(s,"column",0)};if(r.source=this._findSourceIndex(r.source),r.source<0)return[];var t=[],e=this._findMapping(r,this._originalMappings,"originalLine","originalColumn",f.compareByOriginalPositions,n.LEAST_UPPER_BOUND);if(e>=0){var o=this._originalMappings[e];if(s.column===void 0)for(var p=o.originalLine;o&&o.originalLine===p;)t.push({line:f.getArg(o,"generatedLine",null),column:f.getArg(o,"generatedColumn",null),lastColumn:f.getArg(o,"lastGeneratedColumn",null)}),o=this._originalMappings[++e];else for(var v=o.originalColumn;o&&o.originalLine===m&&o.originalColumn==v;)t.push({line:f.getArg(o,"generatedLine",null),column:f.getArg(o,"generatedColumn",null),lastColumn:f.getArg(o,"lastGeneratedColumn",null)}),o=this._originalMappings[++e]}return t},ie.SourceMapConsumer=h;function d(i,s){var m=i;typeof i=="string"&&(m=f.parseSourceMapInput(i));var r=f.getArg(m,"version"),t=f.getArg(m,"sources"),e=f.getArg(m,"names",[]),o=f.getArg(m,"sourceRoot",null),p=f.getArg(m,"sourcesContent",null),v=f.getArg(m,"mappings"),b=f.getArg(m,"file",null);if(r!=this._version)throw new Error("Unsupported version: "+r);o&&(o=f.normalize(o)),t=t.map(String).map(f.normalize).map(function(S){return o&&f.isAbsolute(o)&&f.isAbsolute(S)?f.relative(o,S):S}),this._names=u.fromArray(e.map(String),!0),this._sources=u.fromArray(t,!0),this._absoluteSources=this._sources.toArray().map(function(S){return f.computeSourceURL(o,S,s)}),this.sourceRoot=o,this.sourcesContent=p,this._mappings=v,this._sourceMapURL=s,this.file=b}d.prototype=Object.create(h.prototype),d.prototype.consumer=h,d.prototype._findSourceIndex=function(i){var s=i;if(this.sourceRoot!=null&&(s=f.relative(this.sourceRoot,s)),this._sources.has(s))return this._sources.indexOf(s);var m;for(m=0;m<this._absoluteSources.length;++m)if(this._absoluteSources[m]==i)return m;return-1},d.fromSourceMap=function(s,m){var r=Object.create(d.prototype),t=r._names=u.fromArray(s._names.toArray(),!0),e=r._sources=u.fromArray(s._sources.toArray(),!0);r.sourceRoot=s._sourceRoot,r.sourcesContent=s._generateSourcesContent(r._sources.toArray(),r.sourceRoot),r.file=s._file,r._sourceMapURL=m,r._absoluteSources=r._sources.toArray().map(function(w){return f.computeSourceURL(r.sourceRoot,w,m)});for(var o=s._mappings.toArray().slice(),p=r.__generatedMappings=[],v=r.__originalMappings=[],b=0,S=o.length;b<S;b++){var _=o[b],y=new l;y.generatedLine=_.generatedLine,y.generatedColumn=_.generatedColumn,_.source&&(y.source=e.indexOf(_.source),y.originalLine=_.originalLine,y.originalColumn=_.originalColumn,_.name&&(y.name=t.indexOf(_.name)),v.push(y)),p.push(y)}return g(r.__originalMappings,f.compareByOriginalPositions),r},d.prototype._version=3,Object.defineProperty(d.prototype,"sources",{get:function(){return this._absoluteSources.slice()}});function l(){this.generatedLine=0,this.generatedColumn=0,this.source=null,this.originalLine=null,this.originalColumn=null,this.name=null}d.prototype._parseMappings=function(s,m){for(var r=1,t=0,e=0,o=0,p=0,v=0,b=s.length,S=0,_={},y={},w=[],k=[],P,M,L,C,E;S<b;)if(s.charAt(S)===";")r++,S++,t=0;else if(s.charAt(S)===",")S++;else{for(P=new l,P.generatedLine=r,C=S;C<b&&!this._charIsMappingSeparator(s,C);C++);if(M=s.slice(S,C),L=_[M],L)S+=M.length;else{for(L=[];S<C;)c.decode(s,S,y),E=y.value,S=y.rest,L.push(E);if(L.length===2)throw new Error("Found a source, but no line and column");if(L.length===3)throw new Error("Found a source and line, but no column");_[M]=L}P.generatedColumn=t+L[0],t=P.generatedColumn,L.length>1&&(P.source=p+L[1],p+=L[1],P.originalLine=e+L[2],e=P.originalLine,P.originalLine+=1,P.originalColumn=o+L[3],o=P.originalColumn,L.length>4&&(P.name=v+L[4],v+=L[4])),k.push(P),typeof P.originalLine=="number"&&w.push(P)}g(k,f.compareByGeneratedPositionsDeflated),this.__generatedMappings=k,g(w,f.compareByOriginalPositions),this.__originalMappings=w},d.prototype._findMapping=function(s,m,r,t,e,o){if(s[r]<=0)throw new TypeError("Line must be greater than or equal to 1, got "+s[r]);if(s[t]<0)throw new TypeError("Column must be greater than or equal to 0, got "+s[t]);return n.search(s,m,e,o)},d.prototype.computeColumnSpans=function(){for(var s=0;s<this._generatedMappings.length;++s){var m=this._generatedMappings[s];if(s+1<this._generatedMappings.length){var r=this._generatedMappings[s+1];if(m.generatedLine===r.generatedLine){m.lastGeneratedColumn=r.generatedColumn-1;continue}}m.lastGeneratedColumn=1/0}},d.prototype.originalPositionFor=function(s){var m={generatedLine:f.getArg(s,"line"),generatedColumn:f.getArg(s,"column")},r=this._findMapping(m,this._generatedMappings,"generatedLine","generatedColumn",f.compareByGeneratedPositionsDeflated,f.getArg(s,"bias",h.GREATEST_LOWER_BOUND));if(r>=0){var t=this._generatedMappings[r];if(t.generatedLine===m.generatedLine){var e=f.getArg(t,"source",null);e!==null&&(e=this._sources.at(e),e=f.computeSourceURL(this.sourceRoot,e,this._sourceMapURL));var o=f.getArg(t,"name",null);return o!==null&&(o=this._names.at(o)),{source:e,line:f.getArg(t,"originalLine",null),column:f.getArg(t,"originalColumn",null),name:o}}}return{source:null,line:null,column:null,name:null}},d.prototype.hasContentsOfAllSources=function(){return this.sourcesContent?this.sourcesContent.length>=this._sources.size()&&!this.sourcesContent.some(function(s){return s==null}):!1},d.prototype.sourceContentFor=function(s,m){if(!this.sourcesContent)return null;var r=this._findSourceIndex(s);if(r>=0)return this.sourcesContent[r];var t=s;this.sourceRoot!=null&&(t=f.relative(this.sourceRoot,t));var e;if(this.sourceRoot!=null&&(e=f.urlParse(this.sourceRoot))){var o=t.replace(/^file:\/\//,"");if(e.scheme=="file"&&this._sources.has(o))return this.sourcesContent[this._sources.indexOf(o)];if((!e.path||e.path=="/")&&this._sources.has("/"+t))return this.sourcesContent[this._sources.indexOf("/"+t)]}if(m)return null;throw new Error('"'+t+'" is not in the SourceMap.')},d.prototype.generatedPositionFor=function(s){var m=f.getArg(s,"source");if(m=this._findSourceIndex(m),m<0)return{line:null,column:null,lastColumn:null};var r={source:m,originalLine:f.getArg(s,"line"),originalColumn:f.getArg(s,"column")},t=this._findMapping(r,this._originalMappings,"originalLine","originalColumn",f.compareByOriginalPositions,f.getArg(s,"bias",h.GREATEST_LOWER_BOUND));if(t>=0){var e=this._originalMappings[t];if(e.source===r.source)return{line:f.getArg(e,"generatedLine",null),column:f.getArg(e,"generatedColumn",null),lastColumn:f.getArg(e,"lastGeneratedColumn",null)}}return{line:null,column:null,lastColumn:null}},ie.BasicSourceMapConsumer=d;function a(i,s){var m=i;typeof i=="string"&&(m=f.parseSourceMapInput(i));var r=f.getArg(m,"version"),t=f.getArg(m,"sections");if(r!=this._version)throw new Error("Unsupported version: "+r);this._sources=new u,this._names=new u;var e={line:-1,column:0};this._sections=t.map(function(o){if(o.url)throw new Error("Support for url field in sections not implemented.");var p=f.getArg(o,"offset"),v=f.getArg(p,"line"),b=f.getArg(p,"column");if(v<e.line||v===e.line&&b<e.column)throw new Error("Section offsets must be ordered and non-overlapping.");return e=p,{generatedOffset:{generatedLine:v+1,generatedColumn:b+1},consumer:new h(f.getArg(o,"map"),s)}})}return a.prototype=Object.create(h.prototype),a.prototype.constructor=h,a.prototype._version=3,Object.defineProperty(a.prototype,"sources",{get:function(){for(var i=[],s=0;s<this._sections.length;s++)for(var m=0;m<this._sections[s].consumer.sources.length;m++)i.push(this._sections[s].consumer.sources[m]);return i}}),a.prototype.originalPositionFor=function(s){var m={generatedLine:f.getArg(s,"line"),generatedColumn:f.getArg(s,"column")},r=n.search(m,this._sections,function(e,o){var p=e.generatedLine-o.generatedOffset.generatedLine;return p||e.generatedColumn-o.generatedOffset.generatedColumn}),t=this._sections[r];return t?t.consumer.originalPositionFor({line:m.generatedLine-(t.generatedOffset.generatedLine-1),column:m.generatedColumn-(t.generatedOffset.generatedLine===m.generatedLine?t.generatedOffset.generatedColumn-1:0),bias:s.bias}):{source:null,line:null,column:null,name:null}},a.prototype.hasContentsOfAllSources=function(){return this._sections.every(function(s){return s.consumer.hasContentsOfAllSources()})},a.prototype.sourceContentFor=function(s,m){for(var r=0;r<this._sections.length;r++){var t=this._sections[r],e=t.consumer.sourceContentFor(s,!0);if(e)return e}if(m)return null;throw new Error('"'+s+'" is not in the SourceMap.')},a.prototype.generatedPositionFor=function(s){for(var m=0;m<this._sections.length;m++){var r=this._sections[m];if(r.consumer._findSourceIndex(f.getArg(s,"source"))!==-1){var t=r.consumer.generatedPositionFor(s);if(t){var e={line:t.line+(r.generatedOffset.generatedLine-1),column:t.column+(r.generatedOffset.generatedLine===t.line?r.generatedOffset.generatedColumn-1:0)};return e}}}return{line:null,column:null}},a.prototype._parseMappings=function(s,m){this.__generatedMappings=[],this.__originalMappings=[];for(var r=0;r<this._sections.length;r++)for(var t=this._sections[r],e=t.consumer._generatedMappings,o=0;o<e.length;o++){var p=e[o],v=t.consumer._sources.at(p.source);v=f.computeSourceURL(t.consumer.sourceRoot,v,this._sourceMapURL),this._sources.add(v),v=this._sources.indexOf(v);var b=null;p.name&&(b=t.consumer._names.at(p.name),this._names.add(b),b=this._names.indexOf(b));var S={source:v,generatedLine:p.generatedLine+(t.generatedOffset.generatedLine-1),generatedColumn:p.generatedColumn+(t.generatedOffset.generatedLine===p.generatedLine?t.generatedOffset.generatedColumn-1:0),originalLine:p.originalLine,originalColumn:p.originalColumn,name:b};this.__generatedMappings.push(S),typeof S.originalLine=="number"&&this.__originalMappings.push(S)}g(this.__generatedMappings,f.compareByGeneratedPositionsDeflated),g(this.__originalMappings,f.compareByOriginalPositions)},ie.IndexedSourceMapConsumer=a,ie}var Qe={},Tt;function Ar(){if(Tt)return Qe;Tt=1;var f=sr().SourceMapGenerator,n=he(),u=/(\r?\n)/,c=10,g="$$$isSourceNode$$$";function h(d,l,a,i,s){this.children=[],this.sourceContents={},this.line=d??null,this.column=l??null,this.source=a??null,this.name=s??null,this[g]=!0,i!=null&&this.add(i)}return h.fromStringWithSourceMap=function(l,a,i){var s=new h,m=l.split(u),r=0,t=function(){var b=_(),S=_()||"";return b+S;function _(){return r<m.length?m[r++]:void 0}},e=1,o=0,p=null;return a.eachMapping(function(b){if(p!==null)if(e<b.generatedLine)v(p,t()),e++,o=0;else{var S=m[r]||"",_=S.substr(0,b.generatedColumn-o);m[r]=S.substr(b.generatedColumn-o),o=b.generatedColumn,v(p,_),p=b;return}for(;e<b.generatedLine;)s.add(t()),e++;if(o<b.generatedColumn){var S=m[r]||"";s.add(S.substr(0,b.generatedColumn)),m[r]=S.substr(b.generatedColumn),o=b.generatedColumn}p=b},this),r<m.length&&(p&&v(p,t()),s.add(m.splice(r).join(""))),a.sources.forEach(function(b){var S=a.sourceContentFor(b);S!=null&&(i!=null&&(b=n.join(i,b)),s.setSourceContent(b,S))}),s;function v(b,S){if(b===null||b.source===void 0)s.add(S);else{var _=i?n.join(i,b.source):b.source;s.add(new h(b.originalLine,b.originalColumn,_,S,b.name))}}},h.prototype.add=function(l){if(Array.isArray(l))l.forEach(function(a){this.add(a)},this);else if(l[g]||typeof l=="string")l&&this.children.push(l);else throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+l);return this},h.prototype.prepend=function(l){if(Array.isArray(l))for(var a=l.length-1;a>=0;a--)this.prepend(l[a]);else if(l[g]||typeof l=="string")this.children.unshift(l);else throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+l);return this},h.prototype.walk=function(l){for(var a,i=0,s=this.children.length;i<s;i++)a=this.children[i],a[g]?a.walk(l):a!==""&&l(a,{source:this.source,line:this.line,column:this.column,name:this.name})},h.prototype.join=function(l){var a,i,s=this.children.length;if(s>0){for(a=[],i=0;i<s-1;i++)a.push(this.children[i]),a.push(l);a.push(this.children[i]),this.children=a}return this},h.prototype.replaceRight=function(l,a){var i=this.children[this.children.length-1];return i[g]?i.replaceRight(l,a):typeof i=="string"?this.children[this.children.length-1]=i.replace(l,a):this.children.push("".replace(l,a)),this},h.prototype.setSourceContent=function(l,a){this.sourceContents[n.toSetString(l)]=a},h.prototype.walkSourceContents=function(l){for(var a=0,i=this.children.length;a<i;a++)this.children[a][g]&&this.children[a].walkSourceContents(l);for(var s=Object.keys(this.sourceContents),a=0,i=s.length;a<i;a++)l(n.fromSetString(s[a]),this.sourceContents[s[a]])},h.prototype.toString=function(){var l="";return this.walk(function(a){l+=a}),l},h.prototype.toStringWithSourceMap=function(l){var a={code:"",line:1,column:0},i=new f(l),s=!1,m=null,r=null,t=null,e=null;return this.walk(function(o,p){a.code+=o,p.source!==null&&p.line!==null&&p.column!==null?((m!==p.source||r!==p.line||t!==p.column||e!==p.name)&&i.addMapping({source:p.source,original:{line:p.line,column:p.column},generated:{line:a.line,column:a.column},name:p.name}),m=p.source,r=p.line,t=p.column,e=p.name,s=!0):s&&(i.addMapping({generated:{line:a.line,column:a.column}}),m=null,s=!1);for(var v=0,b=o.length;v<b;v++)o.charCodeAt(v)===c?(a.line++,a.column=0,v+1===b?(m=null,s=!1):s&&i.addMapping({source:p.source,original:{line:p.line,column:p.column},generated:{line:a.line,column:a.column},name:p.name})):a.column++}),this.walkSourceContents(function(o,p){i.setSourceContent(o,p)}),{code:a.code,map:i}},Qe.SourceNode=h,Qe}var Bt;function Or(){return Bt||(Bt=1,ae.SourceMapGenerator=sr().SourceMapGenerator,ae.SourceMapConsumer=Ir().SourceMapConsumer,ae.SourceNode=Ar().SourceNode),ae}var Ht;function Dr(){return Ht||(Ht=1,(function(f,n){n.__esModule=!0;var u=H(),c=void 0;try{var g=Or();c=g.SourceNode}catch{}c||(c=function(l,a,i,s){this.src="",s&&this.add(s)},c.prototype={add:function(a){u.isArray(a)&&(a=a.join("")),this.src+=a},prepend:function(a){u.isArray(a)&&(a=a.join("")),this.src=a+this.src},toStringWithSourceMap:function(){return{code:this.toString()}},toString:function(){return this.src}});function h(l,a,i){if(u.isArray(l)){for(var s=[],m=0,r=l.length;m<r;m++)s.push(a.wrap(l[m],i));return s}else if(typeof l=="boolean"||typeof l=="number")return l+"";return l}function d(l){this.srcFile=l,this.source=[]}d.prototype={isEmpty:function(){return!this.source.length},prepend:function(a,i){this.source.unshift(this.wrap(a,i))},push:function(a,i){this.source.push(this.wrap(a,i))},merge:function(){var a=this.empty();return this.each(function(i){a.add(["  ",i,`
`])}),a},each:function(a){for(var i=0,s=this.source.length;i<s;i++)a(this.source[i])},empty:function(){var a=this.currentLocation||{start:{}};return new c(a.start.line,a.start.column,this.srcFile)},wrap:function(a){var i=arguments.length<=1||arguments[1]===void 0?this.currentLocation||{start:{}}:arguments[1];return a instanceof c?a:(a=h(a,this,i),new c(i.start.line,i.start.column,this.srcFile,a))},functionCall:function(a,i,s){return s=this.generateList(s),this.wrap([a,i?"."+i+"(":"(",s,")"])},quotedString:function(a){return'"'+(a+"").replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'},objectLiteral:function(a){var i=this,s=[];Object.keys(a).forEach(function(r){var t=h(a[r],i);t!=="undefined"&&s.push([i.quotedString(r),":",t])});var m=this.generateList(s);return m.prepend("{"),m.add("}"),m},generateList:function(a){for(var i=this.empty(),s=0,m=a.length;s<m;s++)s&&i.add(","),i.add(h(a[s],this));return i},generateArray:function(a){var i=this.generateList(a);return i.prepend("["),i.add("]"),i}},n.default=d,f.exports=n.default})(qe,qe.exports)),qe.exports}var Ut;function Nr(){return Ut||(Ut=1,(function(f,n){n.__esModule=!0;function u(r){return r&&r.__esModule?r:{default:r}}var c=Xe(),g=G(),h=u(g),d=H(),l=Dr(),a=u(l);function i(r){this.value=r}function s(){}s.prototype={nameLookup:function(t,e){return this.internalNameLookup(t,e)},depthedLookup:function(t){return[this.aliasable("container.lookup"),"(depths, ",JSON.stringify(t),")"]},compilerInfo:function(){var t=c.COMPILER_REVISION,e=c.REVISION_CHANGES[t];return[t,e]},appendToBuffer:function(t,e,o){return d.isArray(t)||(t=[t]),t=this.source.wrap(t,e),this.environment.isSimple?["return ",t,";"]:o?["buffer += ",t,";"]:(t.appendToBuffer=!0,t)},initializeBuffer:function(){return this.quotedString("")},internalNameLookup:function(t,e){return this.lookupPropertyFunctionIsUsed=!0,["lookupProperty(",t,",",JSON.stringify(e),")"]},lookupPropertyFunctionIsUsed:!1,compile:function(t,e,o,p){this.environment=t,this.options=e,this.stringParams=this.options.stringParams,this.trackIds=this.options.trackIds,this.precompile=!p,this.name=this.environment.name,this.isChild=!!o,this.context=o||{decorators:[],programs:[],environments:[]},this.preamble(),this.stackSlot=0,this.stackVars=[],this.aliases={},this.registers={list:[]},this.hashes=[],this.compileStack=[],this.inlineStack=[],this.blockParams=[],this.compileChildren(t,e),this.useDepths=this.useDepths||t.useDepths||t.useDecorators||this.options.compat,this.useBlockParams=this.useBlockParams||t.useBlockParams;var v=t.opcodes,b=void 0,S=void 0,_=void 0,y=void 0;for(_=0,y=v.length;_<y;_++)b=v[_],this.source.currentLocation=b.loc,S=S||b.loc,this[b.opcode].apply(this,b.args);if(this.source.currentLocation=S,this.pushSource(""),this.stackSlot||this.inlineStack.length||this.compileStack.length)throw new h.default("Compile completed with content left on stack");this.decorators.isEmpty()?this.decorators=void 0:(this.useDecorators=!0,this.decorators.prepend(["var decorators = container.decorators, ",this.lookupPropertyFunctionVarDeclaration(),`;
`]),this.decorators.push("return fn;"),p?this.decorators=Function.apply(this,["fn","props","container","depth0","data","blockParams","depths",this.decorators.merge()]):(this.decorators.prepend(`function(fn, props, container, depth0, data, blockParams, depths) {
`),this.decorators.push(`}
`),this.decorators=this.decorators.merge()));var w=this.createFunctionContext(p);if(this.isChild)return w;var k={compiler:this.compilerInfo(),main:w};this.decorators&&(k.main_d=this.decorators,k.useDecorators=!0);var P=this.context,M=P.programs,L=P.decorators;for(_=0,y=M.length;_<y;_++)M[_]&&(k[_]=M[_],L[_]&&(k[_+"_d"]=L[_],k.useDecorators=!0));return this.environment.usePartial&&(k.usePartial=!0),this.options.data&&(k.useData=!0),this.useDepths&&(k.useDepths=!0),this.useBlockParams&&(k.useBlockParams=!0),this.options.compat&&(k.compat=!0),p?k.compilerOptions=this.options:(k.compiler=JSON.stringify(k.compiler),this.source.currentLocation={start:{line:1,column:0}},k=this.objectLiteral(k),e.srcName?(k=k.toStringWithSourceMap({file:e.destName}),k.map=k.map&&k.map.toString()):k=k.toString()),k},preamble:function(){this.lastContext=0,this.source=new a.default(this.options.srcName),this.decorators=new a.default(this.options.srcName)},createFunctionContext:function(t){var e=this,o="",p=this.stackVars.concat(this.registers.list);p.length>0&&(o+=", "+p.join(", "));var v=0;Object.keys(this.aliases).forEach(function(_){var y=e.aliases[_];y.children&&y.referenceCount>1&&(o+=", alias"+ ++v+"="+_,y.children[0]="alias"+v)}),this.lookupPropertyFunctionIsUsed&&(o+=", "+this.lookupPropertyFunctionVarDeclaration());var b=["container","depth0","helpers","partials","data"];(this.useBlockParams||this.useDepths)&&b.push("blockParams"),this.useDepths&&b.push("depths");var S=this.mergeSource(o);return t?(b.push(S),Function.apply(this,b)):this.source.wrap(["function(",b.join(","),`) {
  `,S,"}"])},mergeSource:function(t){var e=this.environment.isSimple,o=!this.forceBuffer,p=void 0,v=void 0,b=void 0,S=void 0;return this.source.each(function(_){_.appendToBuffer?(b?_.prepend("  + "):b=_,S=_):(b&&(v?b.prepend("buffer += "):p=!0,S.add(";"),b=S=void 0),v=!0,e||(o=!1))}),o?b?(b.prepend("return "),S.add(";")):v||this.source.push('return "";'):(t+=", buffer = "+(p?"":this.initializeBuffer()),b?(b.prepend("return buffer + "),S.add(";")):this.source.push("return buffer;")),t&&this.source.prepend("var "+t.substring(2)+(p?"":`;
`)),this.source.merge()},lookupPropertyFunctionVarDeclaration:function(){return`
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    }
    `.trim()},blockValue:function(t){var e=this.aliasable("container.hooks.blockHelperMissing"),o=[this.contextName(0)];this.setupHelperArgs(t,0,o);var p=this.popStack();o.splice(1,0,p),this.push(this.source.functionCall(e,"call",o))},ambiguousBlockValue:function(){var t=this.aliasable("container.hooks.blockHelperMissing"),e=[this.contextName(0)];this.setupHelperArgs("",0,e,!0),this.flushInline();var o=this.topStack();e.splice(1,0,o),this.pushSource(["if (!",this.lastHelper,") { ",o," = ",this.source.functionCall(t,"call",e),"}"])},appendContent:function(t){this.pendingContent?t=this.pendingContent+t:this.pendingLocation=this.source.currentLocation,this.pendingContent=t},append:function(){if(this.isInline())this.replaceStack(function(e){return[" != null ? ",e,' : ""']}),this.pushSource(this.appendToBuffer(this.popStack()));else{var t=this.popStack();this.pushSource(["if (",t," != null) { ",this.appendToBuffer(t,void 0,!0)," }"]),this.environment.isSimple&&this.pushSource(["else { ",this.appendToBuffer("''",void 0,!0)," }"])}},appendEscaped:function(){this.pushSource(this.appendToBuffer([this.aliasable("container.escapeExpression"),"(",this.popStack(),")"]))},getContext:function(t){this.lastContext=t},pushContext:function(){this.pushStackLiteral(this.contextName(this.lastContext))},lookupOnContext:function(t,e,o,p){var v=0;!p&&this.options.compat&&!this.lastContext?this.push(this.depthedLookup(t[v++])):this.pushContext(),this.resolvePath("context",t,v,e,o)},lookupBlockParam:function(t,e){this.useBlockParams=!0,this.push(["blockParams[",t[0],"][",t[1],"]"]),this.resolvePath("context",e,1)},lookupData:function(t,e,o){t?this.pushStackLiteral("container.data(data, "+t+")"):this.pushStackLiteral("data"),this.resolvePath("data",e,0,!0,o)},resolvePath:function(t,e,o,p,v){var b=this;if(this.options.strict||this.options.assumeObjects){this.push(m(this.options.strict&&v,this,e,o,t));return}for(var S=e.length;o<S;o++)this.replaceStack(function(_){var y=b.nameLookup(_,e[o],t);return p?[" && ",y]:[" != null ? ",y," : ",_]})},resolvePossibleLambda:function(){this.push([this.aliasable("container.lambda"),"(",this.popStack(),", ",this.contextName(0),")"])},pushStringParam:function(t,e){this.pushContext(),this.pushString(e),e!=="SubExpression"&&(typeof t=="string"?this.pushString(t):this.pushStackLiteral(t))},emptyHash:function(t){this.trackIds&&this.push("{}"),this.stringParams&&(this.push("{}"),this.push("{}")),this.pushStackLiteral(t?"undefined":"{}")},pushHash:function(){this.hash&&this.hashes.push(this.hash),this.hash={values:{},types:[],contexts:[],ids:[]}},popHash:function(){var t=this.hash;this.hash=this.hashes.pop(),this.trackIds&&this.push(this.objectLiteral(t.ids)),this.stringParams&&(this.push(this.objectLiteral(t.contexts)),this.push(this.objectLiteral(t.types))),this.push(this.objectLiteral(t.values))},pushString:function(t){this.pushStackLiteral(this.quotedString(t))},pushLiteral:function(t){this.pushStackLiteral(t)},pushProgram:function(t){t!=null?this.pushStackLiteral(this.programExpression(t)):this.pushStackLiteral(null)},registerDecorator:function(t,e){var o=this.nameLookup("decorators",e,"decorator"),p=this.setupHelperArgs(e,t);this.decorators.push(["fn = ",this.decorators.functionCall(o,"",["fn","props","container",p])," || fn;"])},invokeHelper:function(t,e,o){var p=this.popStack(),v=this.setupHelper(t,e),b=[];o&&b.push(v.name),b.push(p),this.options.strict||b.push(this.aliasable("container.hooks.helperMissing"));var S=["(",this.itemsSeparatedBy(b,"||"),")"],_=this.source.functionCall(S,"call",v.callParams);this.push(_)},itemsSeparatedBy:function(t,e){var o=[];o.push(t[0]);for(var p=1;p<t.length;p++)o.push(e,t[p]);return o},invokeKnownHelper:function(t,e){var o=this.setupHelper(t,e);this.push(this.source.functionCall(o.name,"call",o.callParams))},invokeAmbiguous:function(t,e){this.useRegister("helper");var o=this.popStack();this.emptyHash();var p=this.setupHelper(0,t,e),v=this.lastHelper=this.nameLookup("helpers",t,"helper"),b=["(","(helper = ",v," || ",o,")"];this.options.strict||(b[0]="(helper = ",b.push(" != null ? helper : ",this.aliasable("container.hooks.helperMissing"))),this.push(["(",b,p.paramsInit?["),(",p.paramsInit]:[],"),","(typeof helper === ",this.aliasable('"function"')," ? ",this.source.functionCall("helper","call",p.callParams)," : helper))"])},invokePartial:function(t,e,o){var p=[],v=this.setupParams(e,1,p);t&&(e=this.popStack(),delete v.name),o&&(v.indent=JSON.stringify(o)),v.helpers="helpers",v.partials="partials",v.decorators="container.decorators",t?p.unshift(e):p.unshift(this.nameLookup("partials",e,"partial")),this.options.compat&&(v.depths="depths"),v=this.objectLiteral(v),p.push(v),this.push(this.source.functionCall("container.invokePartial","",p))},assignToHash:function(t){var e=this.popStack(),o=void 0,p=void 0,v=void 0;this.trackIds&&(v=this.popStack()),this.stringParams&&(p=this.popStack(),o=this.popStack());var b=this.hash;o&&(b.contexts[t]=o),p&&(b.types[t]=p),v&&(b.ids[t]=v),b.values[t]=e},pushId:function(t,e,o){t==="BlockParam"?this.pushStackLiteral("blockParams["+e[0]+"].path["+e[1]+"]"+(o?" + "+JSON.stringify("."+o):"")):t==="PathExpression"?this.pushString(e):t==="SubExpression"?this.pushStackLiteral("true"):this.pushStackLiteral("null")},compiler:s,compileChildren:function(t,e){for(var o=t.children,p=void 0,v=void 0,b=0,S=o.length;b<S;b++){p=o[b],v=new this.compiler;var _=this.matchExistingProgram(p);if(_==null){this.context.programs.push("");var y=this.context.programs.length;p.index=y,p.name="program"+y,this.context.programs[y]=v.compile(p,e,this.context,!this.precompile),this.context.decorators[y]=v.decorators,this.context.environments[y]=p,this.useDepths=this.useDepths||v.useDepths,this.useBlockParams=this.useBlockParams||v.useBlockParams,p.useDepths=this.useDepths,p.useBlockParams=this.useBlockParams}else p.index=_.index,p.name="program"+_.index,this.useDepths=this.useDepths||_.useDepths,this.useBlockParams=this.useBlockParams||_.useBlockParams}},matchExistingProgram:function(t){for(var e=0,o=this.context.environments.length;e<o;e++){var p=this.context.environments[e];if(p&&p.equals(t))return p}},programExpression:function(t){var e=this.environment.children[t],o=[e.index,"data",e.blockParams];return(this.useBlockParams||this.useDepths)&&o.push("blockParams"),this.useDepths&&o.push("depths"),"container.program("+o.join(", ")+")"},useRegister:function(t){this.registers[t]||(this.registers[t]=!0,this.registers.list.push(t))},push:function(t){return t instanceof i||(t=this.source.wrap(t)),this.inlineStack.push(t),t},pushStackLiteral:function(t){this.push(new i(t))},pushSource:function(t){this.pendingContent&&(this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent),this.pendingLocation)),this.pendingContent=void 0),t&&this.source.push(t)},replaceStack:function(t){var e=["("],o=void 0,p=void 0,v=void 0;if(!this.isInline())throw new h.default("replaceStack on non-inline");var b=this.popStack(!0);if(b instanceof i)o=[b.value],e=["(",o],v=!0;else{p=!0;var S=this.incrStack();e=["((",this.push(S)," = ",b,")"],o=this.topStack()}var _=t.call(this,o);v||this.popStack(),p&&this.stackSlot--,this.push(e.concat(_,")"))},incrStack:function(){return this.stackSlot++,this.stackSlot>this.stackVars.length&&this.stackVars.push("stack"+this.stackSlot),this.topStackName()},topStackName:function(){return"stack"+this.stackSlot},flushInline:function(){var t=this.inlineStack;this.inlineStack=[];for(var e=0,o=t.length;e<o;e++){var p=t[e];if(p instanceof i)this.compileStack.push(p);else{var v=this.incrStack();this.pushSource([v," = ",p,";"]),this.compileStack.push(v)}}},isInline:function(){return this.inlineStack.length},popStack:function(t){var e=this.isInline(),o=(e?this.inlineStack:this.compileStack).pop();if(!t&&o instanceof i)return o.value;if(!e){if(!this.stackSlot)throw new h.default("Invalid stack pop");this.stackSlot--}return o},topStack:function(){var t=this.isInline()?this.inlineStack:this.compileStack,e=t[t.length-1];return e instanceof i?e.value:e},contextName:function(t){return this.useDepths&&t?"depths["+t+"]":"depth"+t},quotedString:function(t){return this.source.quotedString(t)},objectLiteral:function(t){return this.source.objectLiteral(t)},aliasable:function(t){var e=this.aliases[t];return e?(e.referenceCount++,e):(e=this.aliases[t]=this.source.wrap(t),e.aliasable=!0,e.referenceCount=1,e)},setupHelper:function(t,e,o){var p=[],v=this.setupHelperArgs(e,t,p,o),b=this.nameLookup("helpers",e,"helper"),S=this.aliasable(this.contextName(0)+" != null ? "+this.contextName(0)+" : (container.nullContext || {})");return{params:p,paramsInit:v,name:b,callParams:[S].concat(p)}},setupParams:function(t,e,o){var p={},v=[],b=[],S=[],_=!o,y=void 0;_&&(o=[]),p.name=this.quotedString(t),p.hash=this.popStack(),this.trackIds&&(p.hashIds=this.popStack()),this.stringParams&&(p.hashTypes=this.popStack(),p.hashContexts=this.popStack());var w=this.popStack(),k=this.popStack();(k||w)&&(p.fn=k||"container.noop",p.inverse=w||"container.noop");for(var P=e;P--;)y=this.popStack(),o[P]=y,this.trackIds&&(S[P]=this.popStack()),this.stringParams&&(b[P]=this.popStack(),v[P]=this.popStack());return _&&(p.args=this.source.generateArray(o)),this.trackIds&&(p.ids=this.source.generateArray(S)),this.stringParams&&(p.types=this.source.generateArray(b),p.contexts=this.source.generateArray(v)),this.options.data&&(p.data="data"),this.useBlockParams&&(p.blockParams="blockParams"),p},setupHelperArgs:function(t,e,o,p){var v=this.setupParams(t,e,o);return v.loc=JSON.stringify(this.source.currentLocation),v=this.objectLiteral(v),p?(this.useRegister("options"),o.push("options"),["options=",v]):o?(o.push(v),""):v}},(function(){for(var r="break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "),t=s.RESERVED_WORDS={},e=0,o=r.length;e<o;e++)t[r[e]]=!0})(),s.isValidJavaScriptVariableName=function(r){return!s.RESERVED_WORDS[r]&&/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(r)};function m(r,t,e,o,p){var v=t.popStack(),b=e.length;for(r&&b--;o<b;o++)v=t.nameLookup(v,e[o],p);return r?[t.aliasable("container.strict"),"(",v,", ",t.quotedString(e[o]),", ",JSON.stringify(t.source.currentLocation)," )"]:v}n.default=s,f.exports=n.default})(Ne,Ne.exports)),Ne.exports}var Ft;function qr(){return Ft||(Ft=1,(function(f,n){n.__esModule=!0;function u(b){return b&&b.__esModule?b:{default:b}}var c=yr(),g=u(c),h=er(),d=u(h),l=Cr(),a=Pr(),i=Nr(),s=u(i),m=tr(),r=u(m),t=$t(),e=u(t),o=g.default.create;function p(){var b=o();return b.compile=function(S,_){return a.compile(S,_,b)},b.precompile=function(S,_){return a.precompile(S,_,b)},b.AST=d.default,b.Compiler=a.Compiler,b.JavaScriptCompiler=s.default,b.Parser=l.parser,b.parse=l.parse,b.parseWithoutProcessing=l.parseWithoutProcessing,b}var v=p();v.create=p,e.default(v),v.Visitor=r.default,v.default=v,n.default=v,f.exports=n.default})(de,de.exports)),de.exports}var Rr=qr();const q=ir(Rr),Tr=`<div class="form-group">
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
`,Br=`<button class="button" type="{{type}}">
  {{text}}
</button>
`,Hr=`<aside class="messenger__sidebar">
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
`,Ur=`<li class="chat-item">
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
`,Fr=`<ul class="messenger__messages">
  {{#each messages}}
    {{> message-item}}
  {{/each}}
</ul>
`,Vr=`<li class="message message--{{type}}">
  <div class="message__bubble">
    <p class="message__text">{{text}}</p>
    <span class="message__time">{{time}}</span>
  </div>
</li>
`,Gr=`<section class="chat-preview" aria-label="Превью чата с ИИ">
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
`,Wr=`<header class="chat-thread__header">
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
`,Kr=`<aside class="chat-sidebar" data-chat-sidebar>
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
      data-chats-search
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
`,Jr=`<form class="chat-input" id="chat-form">
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
`,zr=`<section class="chat-thread" aria-label="Лента сообщений">
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
            src="{{publicAsset 'assets/image-cam.png'}}"
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
`,Qr=`<aside class="profile-sidebar">
  <button
    type="button"
    class="profile-sidebar__back"
    aria-label="Вернуться назад"
    onclick="window.history.back()"
  >
    ←
  </button>
</aside>

`,Zr=`<div class="app-shell">
  {{{body}}}
</div>
`,jr=()=>{q.registerPartial("input",Tr),q.registerPartial("button",Br),q.registerPartial("chat-list",Hr),q.registerPartial("chat-item",Ur),q.registerPartial("message-list",Fr),q.registerPartial("message-item",Vr),q.registerPartial("chat-preview",Gr),q.registerPartial("chat-header",Wr),q.registerPartial("chat-sidebar",Kr),q.registerPartial("chat-input",Jr),q.registerPartial("chat-messages",zr),q.registerPartial("profile-sidebar",Qr),q.registerPartial("main",Zr)},te="/middle.messenger.praktikum.yandex/".replace(/\/$/,""),re=f=>te&&f.startsWith(te)?f.slice(te.length)||"/":f||"/",Yr=f=>te?f==="/"?`${te}/`:`${te}${f}`:f,Fe=f=>`/middle.messenger.praktikum.yandex/${f.replace(/^\//,"")}`,Xr=f=>f==null?"":String(f).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),$r=()=>{q.registerHelper("safeText",f=>Xr(f)),q.registerHelper("publicAsset",f=>Fe(String(f)))};class en{pathname;BlockClass;blockInstance=null;rootQuery;constructor(n,u,c){this.pathname=n,this.BlockClass=u,this.rootQuery=c}navigate(n){this.match(n)&&(this.pathname=n,this.render())}leave(){this.blockInstance&&this.blockInstance.hide()}match(n){return n===this.pathname}render(){this.blockInstance||(this.blockInstance=new this.BlockClass),this.blockInstance&&(this.blockInstance.mount(this.rootQuery),this.blockInstance.show())}}class Z{static __instance=null;routes=[];currentRoute=null;rootQuery;constructor(n){this.rootQuery=n}static init(n){return Z.__instance||(Z.__instance=new Z(n)),Z.__instance}static getInstance(){if(!Z.__instance)throw new Error("Router is not initialized. Call Router.init() first.");return Z.__instance}use(n,u){const c=new en(n,u,this.rootQuery);return this.routes.push(c),this}start(){window.onpopstate=()=>{this._onRoute(re(window.location.pathname))},this._onRoute(re(window.location.pathname))}go(n){re(window.location.pathname)!==n&&(window.history.pushState({},"",Yr(n)),this._onRoute(n))}back(){window.history.back()}forward(){window.history.forward()}getRoute(n){return this.routes.find(u=>u.match(n))}_onRoute(n){const u=this.getRoute(n);u&&(this.currentRoute&&this.currentRoute.leave(),this.currentRoute=u,u.render())}}const N=Z.init("#app");class ar{listeners={};on(n,u){const c=this.listeners[n]??[];c.push(u),this.listeners[n]=c}off(n,u){const c=this.listeners[n];c&&(this.listeners[n]=c.filter(g=>g!==u))}emit(n,...u){const c=this.listeners[n];c&&c.forEach(g=>{g(...u)})}}function tn(f){return typeof f=="object"&&f!==null}function rn(f,n,u){const c=n.split(".");let g=f;return c.forEach((h,d)=>{d===c.length-1?g[h]=u:(tn(g[h])||(g[h]={}),g=g[h])}),f}const Vt={user:null,chats:[],activeChatId:null,messages:{}},oe={Updated:"updated"};class j{static __instance=null;state={...Vt};eventBus;constructor(){this.eventBus=new ar}static init(){return j.__instance||(j.__instance=new j),j.__instance}static getInstance(){if(!j.__instance)throw new Error("Store не инициализирован. Надо вызвать Store.init().");return j.__instance}getState(){return this.state}set(n,u){rn(this.state,n,u),this.eventBus.emit(oe.Updated,this.state)}setState(n){this.state={...this.state,...n},this.eventBus.emit(oe.Updated,this.state)}reset(){this.state={...Vt},this.eventBus.emit(oe.Updated,this.state)}onUpdate(n){this.eventBus.on(oe.Updated,n)}offUpdate(n){this.eventBus.off(oe.Updated,n)}}const x=j.init(),nn="https://ya-praktikum.tech/api/v2",z="https://ya-praktikum.tech/api/v2/resources";class pe{baseUrl;constructor(n=""){this.baseUrl=`${nn}${n}`}get=(n,u={})=>this.request(n,"GET",u);put=(n,u={})=>this.request(n,"PUT",u);post=(n,u={})=>this.request(n,"POST",u);delete=(n,u={})=>this.request(n,"DELETE",u);request(n,u,c){const{data:g,headers:h={},timeout:d=5e3}=c;return new Promise((l,a)=>{const i=new XMLHttpRequest,s=u==="GET";let m=`${this.baseUrl}${n}`;if(s&&g){const r=new URLSearchParams(g).toString();m=`${m}?${r}`}i.open(u,m),i.withCredentials=!0,i.timeout=d,Object.entries(h).forEach(([r,t])=>{i.setRequestHeader(r,t)}),i.onload=()=>{const{status:r}=i,{responseText:t}=i;let e=t;try{e=t&&JSON.parse(t)}catch{}if(r>=200&&r<300)l(e);else{const o=e&&typeof e=="object"&&"reason"in e?String(e.reason):void 0,p=Object.assign(new Error(`HTTP error: ${r}`),{status:r,reason:o,response:e});a(p)}},i.onabort=()=>a(new Error("Request aborted")),i.ontimeout=()=>a(new Error("Request timeout")),i.onerror=()=>a(new Error("Network error")),s||!g?i.send():g instanceof FormData?i.send(g):(i.setRequestHeader("Content-Type","application/json"),i.send(JSON.stringify(g)))})}}const Be=new pe("/auth");class sn{signUp(n){return Be.post("/signup",{data:n})}async signIn(n){return Be.post("/signin",{data:n}).catch(u=>{throw console.error("AuthAPI.signIn error",u),u})}getUser(){return Be.get("/user")}logout(){return Be.post("/logout")}}const Q=new sn,le="messenger.localAuth.user",Gt=f=>({id:Date.now(),first_name:f.first_name||f.login,second_name:f.second_name||"",display_name:f.first_name||f.login,login:f.login,email:f.email||`${f.login}@local.test`,phone:f.phone||"",avatar:null}),W={saveFromSignIn(f){const n=Gt(f);return localStorage.setItem(le,JSON.stringify(n)),n},saveFromSignUp(f){const n=Gt(f);return localStorage.setItem(le,JSON.stringify(n)),n},getUser(){const f=localStorage.getItem(le);if(!f)return null;try{return JSON.parse(f)}catch{return localStorage.removeItem(le),null}},hasUser(){return this.getUser()!==null},clear(){localStorage.removeItem(le)}},an={INIT:"init",FLOW_CDM:"flow:component-did-mount",FLOW_CDU:"flow:component-did-update",FLOW_RENDER:"flow:render"};class D{props;static EVENTS=an;eventBus;_element=null;_meta;_unsubscribeLocalListeners=[];_unsubscribeGlobalListeners=[];addDOMListener(n,u,c){n.addEventListener(u,c),this._unsubscribeLocalListeners.push(()=>{n.removeEventListener(u,c)})}addGlobalListener(n,u,c){n.addEventListener(u,c),this._unsubscribeGlobalListeners.push(()=>{n.removeEventListener(u,c)})}constructor(n="div",u={}){this.eventBus=new ar,this._meta={tagName:n,props:u},this.props=this._makePropsProxy(u),this._registerEvents(),this.eventBus.emit(D.EVENTS.INIT)}_registerEvents(){this.eventBus.on(D.EVENTS.INIT,this.init.bind(this)),this.eventBus.on(D.EVENTS.FLOW_CDM,this._componentDidMount.bind(this)),this.eventBus.on(D.EVENTS.FLOW_CDU,this._componentDidUpdate.bind(this)),this.eventBus.on(D.EVENTS.FLOW_RENDER,this._render.bind(this))}init(){this._createResources(),this.eventBus.emit(D.EVENTS.FLOW_RENDER)}_createResources(){const{tagName:n}=this._meta;this._element=this._createDocumentElement(n)}setProps(n){if(!n)return;const u={...this.props};let c=!1;if(Object.entries(n).forEach(([h,d])=>{this.props[h]!==d&&(c=!0,this.props[h]=d)}),!c)return;const g={...this.props};this.eventBus.emit(D.EVENTS.FLOW_CDU,u,g)}_makePropsProxy(n){return new Proxy(n,{get(u,c){const g=u[c];return typeof g=="function"?g.bind(u):g},set(u,c,g){return u[c]=g,!0},deleteProperty(){throw new Error("Нет доступа")},defineProperty(u,c,g){return Reflect.defineProperty(u,c,g)}})}_componentDidMount(){this.componentDidMount()}componentDidMount(){}dispatchComponentDidMount(){this.eventBus.emit(D.EVENTS.FLOW_CDM)}_componentDidUpdate(n,u){const c=this.componentDidUpdate(n,u);(typeof c!="boolean"||c)&&this.eventBus.emit(D.EVENTS.FLOW_RENDER)}componentDidUpdate(n,u){return!0}_render(){const n=this.render();if(!this._element)return;const u=document.createElement("template");for(u.innerHTML=n;this._element.firstChild;)this._element.removeChild(this._element.firstChild);this._element.appendChild(u.content),this.componentDidMount()}mount(n){const u=document.querySelector(n);if(!u)return;u.innerHTML="";const c=this.getContent();c&&u.appendChild(c)}getContent(){return this._element}_createDocumentElement(n){return document.createElement(n)}show(){this._element&&(this._element.style.display="block")}hide(){this._element&&(this._element.style.display="none")}removeLocalDOMListeners(){this._unsubscribeLocalListeners.forEach(n=>n()),this._unsubscribeLocalListeners=[]}removeGlobalDOMListeners(){this._unsubscribeGlobalListeners.forEach(n=>n()),this._unsubscribeGlobalListeners=[]}destroy(){this.removeLocalDOMListeners(),this.removeGlobalDOMListeners()}}function ce(f){return class extends D{pageInstance=null;constructor(u){super("div",u)}async componentDidMount(){if(!x.getState().user)try{const d=await Q.getUser();W.clear(),x.setState({user:d})}catch{const l=W.getUser();if(!l){x.setState({user:null}),N.go("/login");return}x.setState({user:l})}this.pageInstance=new f({});const c=this.getContent();if(!c)return;const g=this.pageInstance.getContent();if(!g)return;c.innerHTML=`
        <div class="app-layout">
          <aside class="app-layout__sidebar">
            <!-- здесь будет меню -->
          </aside>
          <main class="app-layout__main"></main>
        </div>
      `;const h=c.querySelector(".app-layout__main");h&&h.appendChild(g)}render(){return'<div class="app-layout"></div>'}}}function Y(f,n){return window.Handlebars&&typeof window.Handlebars.compile=="function"?window.Handlebars.compile(f)(n):f}const on=/^[A-ZА-ЯЁ][A-Za-zА-ЯЁа-яё-]*$/,ln=/^(?!\d+$)[A-Za-z0-9_-]{3,20}$/,cn=/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,un=/^\+?\d{10,15}$/,hn=/[A-Z]/,pn=/\d/,dn=f=>{switch(f){case"first_name":return"Имя";case"second_name":return"Фамилия";case"display_name":return"Имя в чате";case"login":return"Логин";case"email":return"Почта";case"phone":return"Телефон";case"password":case"oldPassword":case"newPassword":case"repeatPassword":return"Пароль";default:return"Поле"}},ue=(f,n)=>{const u=g=>{const{name:h}=g,d=g.value.trim(),l=dn(h);let a="";if(!d)a=`${l} обязательно для заполнения`;else if(["first_name","second_name","display_name"].includes(h)&&(on.test(d)||(a=`${l} должно начинаться с заглавной буквы и содержать только буквы или дефис`)),h==="login"&&(ln.test(d)||(a='Логин от 3 до 20 символов, латиница, цифры, "-" и "_", не только цифры')),h==="email"&&(cn.test(d)||(a="Некорректный формат почты")),h==="phone"&&(un.test(d)||(a='Телефон должен содержать от 10 до 15 цифр и может начинаться с "+"')),(h==="password"||h==="oldPassword"||h==="newPassword"||h==="repeatPassword")&&(d.length<8||d.length>40?a="Пароль должен быть от 8 до 40 символов":hn.test(d)?pn.test(d)||(a="Пароль должен содержать хотя бы одну цифру"):a="Пароль должен содержать хотя бы одну заглавную латинскую букву"),h==="repeatPassword"){const m=f.querySelector('input[name="newPassword"]')||f.querySelector('input[name="password"]');m&&m.value&&m.value!==d&&(a="Пароли не совпадают")}const s=g.closest(".form__field")?.querySelector(".form__error");s&&(s.textContent=a),a&&console.error(`[validateField] ${h}: ${a}`)};return{validateField:u,validateForm:()=>{const g=Array.from(f.querySelectorAll("input, textarea")),h={};g.forEach(l=>{u(l);const s=l.closest(".form__field")?.querySelector(".form__error")?.textContent??"";s&&(h[l.name]=s)});const d=Object.keys(h).length===0;if(d&&n?.logOnSuccess){const l=Object.fromEntries(new FormData(f).entries());console.log("[formValidation] Данные успешно отправлены",l)}return{valid:d,errors:h}}}},fn=`<div class="app-shell">
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
`;class Wt extends D{componentDidMount(){const n=this.getContent();if(!n)return;const u=n.querySelector("#register-form");if(!u)return;const c=n.querySelector("[data-form-error]"),{validateField:g,validateForm:h}=ue(u,{logOnSuccess:!1});Array.from(u.querySelectorAll("input, textarea")).forEach(l=>{this.addDOMListener(l,"blur",a=>{const{target:i}=a;(i instanceof HTMLInputElement||i instanceof HTMLTextAreaElement)&&g(i)})}),this.addDOMListener(u,"submit",async l=>{if(l.preventDefault(),c&&(c.textContent=""),!h()){console.warn("RegisterPage: form is not valid");return}const i=new FormData(u),s=String(i.get("password")??""),m=String(i.get("password_confirm")??"");if(s!==m){c&&(c.textContent="Пароли не совпадают");return}const r={email:String(i.get("email")??""),login:String(i.get("login")??""),first_name:String(i.get("first_name")??""),second_name:String(i.get("second_name")??""),phone:String(i.get("phone")??""),password:s};try{await Q.signUp(r),await Q.signIn({login:r.login,password:r.password});let t;try{t=await Q.getUser(),W.clear()}catch(e){t=W.saveFromSignUp(r),console.warn("Cookie auth is unavailable, using local auth fallback",e)}x.setState({user:t}),N.go("/messenger")}catch(t){const o=(t&&typeof t=="object"&&"reason"in t?t:null)?.reason;console.error("RegisterPage signUp error",t),c&&(c.textContent=o||"Не удалось зарегистрироваться. Проверьте данные и попробуйте ещё раз.")}})}render(){return Y(fn,this.props)}}const mn=`<main class="auth">
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
`;class Kt extends D{componentDidMount(){const n=this.getContent();if(!n)return;const u=n.querySelector("#login-form");if(!u)return;const{validateField:c,validateForm:g}=ue(u,{logOnSuccess:!1});Array.from(u.querySelectorAll("input, textarea")).forEach(d=>{this.addDOMListener(d,"blur",l=>{const{target:a}=l;(a instanceof HTMLInputElement||a instanceof HTMLTextAreaElement)&&c(a)})}),this.addDOMListener(u,"submit",async d=>{d.preventDefault();const l=n.querySelector("[data-form-error]");if(l&&(l.textContent=""),!g())return;const i=new FormData(u),s=String(i.get("login")??""),m=String(i.get("password")??"");try{await Q.signIn({login:s,password:m});let r;try{r=await Q.getUser(),W.clear()}catch(t){r=W.saveFromSignIn({login:s,password:m}),console.warn("Cookie auth is unavailable, using local auth fallback",t)}x.setState({user:r}),N.go("/messenger")}catch(r){const e=(r&&typeof r=="object"&&"reason"in r?r:null)?.reason;if(e==="User already in system")try{const o=await Q.getUser();x.setState({user:o}),N.go("/messenger");return}catch(o){console.error("LoginPage getUser пользователь уже авторизован",o)}console.error("LoginPage signIn error",r),l&&(l.textContent=e||"Не удалось войти. Проверьте логин и пароль.")}})}render(){return Y(mn,this.props)}}class gn extends D{constructor(n={}){super("div",n)}async componentDidMount(){try{await Q.logout()}catch(n){console.error("[LogoutPage] logout error",n)}finally{W.clear(),x.setState({user:null}),N.go("/login")}}render(){return"<p>Выход из аккаунта…</p>"}}const J=new pe("/chats"),Jt={id:-1,title:"Демо-чат с камерой",avatar:null,unread_count:0,created_by:0,last_message:null};class _n{async getChats(n={}){let u;try{u=await J.get("",{data:n})}catch(c){const{status:g}=c;if(g===401&&W.hasUser())return[Jt];throw c}return!u||u.length===0?[Jt]:u}createChat(n){return J.post("",{data:n})}deleteChat(n){return J.delete("",{data:{chatId:n}})}getChatUsers(n){return J.get(`/${n}/users`)}findUsersByLogin(n){const u={login:n};return J.post("/user/search",{data:u})}addUsersToChat(n){return J.put("/users",{data:n})}deleteUsersFromChat(n){return J.delete("/users",{data:n})}getChatToken(n){return J.post(`/token/${n}`)}updateChatAvatar(n,u){const c=new FormData;return c.append("chatId",String(n)),c.append("avatar",u),J.put("/avatar",{data:c})}}const B=new _n,vn=`<div class="app-shell">
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
            <input type="file" id="chat-file-input" hidden />

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
`;class bn{socket=null;status="idle";pingIntervalId=null;activeChatId=null;listeners=[];subscribe(n){this.listeners.push(n)}unsubscribe(n){this.listeners=this.listeners.filter(u=>u!==n)}notify(n){this.listeners.forEach(u=>u(n))}async connect(n){const c=x.getState().user;if(!c)throw new Error("User is not authorized");if(this.socket&&this.activeChatId===n&&this.status==="open")return;this.disconnect(),this.status="connecting",this.activeChatId=n;const{token:g}=await B.getChatToken(n),h=`wss://ya-praktikum.tech/ws/chats/${c.id}/${n}/${g}`;this.socket=new WebSocket(h),this.socket.addEventListener("open",()=>{this.status="open",console.log("[ChatSocket] open for chat",n),this.send({type:"get old",content:"0"}),this.pingIntervalId=window.setInterval(()=>{this.send({type:"ping"})},1e4)}),this.socket.addEventListener("close",d=>{this.status="closed",console.log("[ChatSocket] closed",d.code,d.reason),d.wasClean||setTimeout(()=>{this.activeChatId&&this.connect(this.activeChatId).catch(l=>{console.error("[ChatSocket] reconnect failed",l)})},3e3),this.clearPing()}),this.socket.addEventListener("message",d=>{if(!d.data)return;let l;try{l=JSON.parse(d.data)}catch(i){console.error("[ChatSocket] Не вышло спарсить сообщение",i,d.data);return}if(Array.isArray(l)){const s=[...l].sort((r,t)=>new Date(r.time).getTime()-new Date(t.time).getTime()).filter((r,t,e)=>e.findIndex(o=>o.id===r.id)===t),m=x.getState();x.setState({messages:{...m.messages??{},[n]:s}}),s.forEach(r=>this.notify(r));return}const a=l;if(a.type==="message"||a.type==="file"){const i=x.getState(),r=[...(i.messages?.[n]??[]).filter(t=>t.id!==a.id),a].sort((t,e)=>new Date(t.time).getTime()-new Date(e.time).getTime());x.setState({messages:{...i.messages??{},[n]:r}}),this.notify(a)}}),this.socket.addEventListener("error",d=>{console.error("[ChatSocket] error",d)})}send(n){this.status!=="open"||!this.socket||this.socket.send(JSON.stringify(n))}sendMessage(n){this.send({content:n,type:"message"})}sendFile(n){this.send({content:n,type:"file"})}disconnect(){this.clearPing(),this.socket&&(this.socket.close(),this.socket=null),this.status="closed",this.activeChatId=null}clearPing(){this.pingIntervalId!==null&&(window.clearInterval(this.pingIntervalId),this.pingIntervalId=null)}}const He=new bn,yn=new pe("/resources");class Sn{uploadFile(n){const u=new FormData;return u.append("resource",n),yn.post("",{data:u})}}const wn=new Sn,kn=new pe("/user");class Cn{findUsersByLogin(n){const u={login:n};return kn.post("/search",{data:u})}}const Pn=new Cn;let Ue=null;function A(f,n="success"){const u=document.querySelector("#toast-root");if(!u)return;u.innerHTML="";const c=document.createElement("div");c.className=`toast toast--${n}`,c.textContent=f,u.appendChild(c),requestAnimationFrame(()=>{c.classList.add("toast--visible")}),Ue!==null&&window.clearTimeout(Ue),Ue=window.setTimeout(()=>{c.classList.remove("toast--visible"),Ue=null},3e3)}class Ze extends D{constructor(n){const u={chats:[]};super("div",{...u,...n})}updateChatsList(n){const u=this.getContent();if(!u)return;const c=u.querySelector("[data-chats-list]");c&&(c.innerHTML=n.map(g=>{const h=g.last_message?.content??"",d=g.last_message?.time?new Date(g.last_message.time).toLocaleTimeString("ru-RU",{hour:"2-digit",minute:"2-digit"}):"",l=g.unread_count,a=g.title.charAt(0).toUpperCase(),i=g.avatar?`<div class="chat-sidebar__item-avatar chat-sidebar__item-avatar--image"
              style="background-image: url('${z}${g.avatar}');">
            </div>`:`<div class="chat-sidebar__item-avatar">
              ${a}
            </div>`;return`
          <li class="chat-list__item" data-chat-id="${g.id}">
            <button class="chat-sidebar__item" type="button">
              <div class="chat-sidebar__item-top">
                ${i}
                <span class="chat-sidebar__item-title">${g.title}</span>
                <span class="chat-sidebar__item-time">${d}</span>
              </div>
              <div class="chat-sidebar__item-bottom">
                <span class="chat-sidebar__item-subtitle">
                  ${h}
                </span>
                ${l>0?`<span class="chat-sidebar__item-unread">${l}</span>`:""}
              </div>
            </button>
          </li>`}).join(""),c.querySelectorAll("[data-chat-id]").forEach(g=>{g.addEventListener("click",async()=>{const h=Number(g.dataset.chatId);x.setState({activeChatId:h});const d=this.getContent();if(d){const l=d.querySelector("[data-chat-title]"),a=d.querySelector("[data-chat-avatar]"),i=d.querySelector("[data-chat-messages]"),s=n.find(m=>m.id===h);l&&(l.textContent=s?.title??"Чат"),a&&(s?.avatar?(a.textContent="",a.setAttribute("style",`background-image: url('${z}${s.avatar}');`)):(a.style.backgroundImage="",a.textContent=(s?.title??"?").charAt(0).toUpperCase())),i&&(h===-1?i.innerHTML=this.renderDemoThread():i.innerHTML='<p class="chat-thread__placeholder">Сообщения будут здесь</p>')}if(h!==-1)try{await He.connect(h);const l=await B.getChatUsers(h),a=x.getState();x.setState({chatUsers:{...a.chatUsers??{},[h]:l}})}catch(l){console.error("Не удалось подключить сокет чатов",l)}})}))}renderDemoThread(){return`
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
    `}async componentDidMount(){const n=this.getContent();if(!n)return;try{const r=await B.getChats({limit:50});x.setState({chats:r}),this.updateChatsList(r);const t=n.querySelector("[data-chat-avatar]");t&&this.addDOMListener(t,"click",()=>{this.handleChatAvatarChange(n)})}catch(r){console.error("ChatsPage: не удалось загрузить чаты",r)}const u=n.querySelector("#chat-message-form");if(u){const r=u.querySelector('textarea[name="message"]');this.addDOMListener(u,"submit",t=>{if(t.preventDefault(),!r)return;const o=r.value.trim();if(!o){console.warn("[ChatsPage] Пустое сообщение – отправка отменена");return}const v=x.getState().activeChatId;if(!v||v===-1){console.warn("[ChatsPage]: Нет выбранного реального чата");return}He.sendMessage(o),r.value=""})}document.querySelectorAll("[data-link]").forEach(r=>{r.addEventListener("click",t=>{t.preventDefault();const e=t.currentTarget.getAttribute("href");e&&N.go(e)})});const g=document.querySelector("[data-logout]");g&&g.addEventListener("click",r=>{r.preventDefault(),N.go("/logout")});const h=n.querySelector("#open-create-chat"),d=n.querySelector("#create-chat-panel"),l=n.querySelector("#create-chat-form");h&&d&&this.addDOMListener(h,"click",()=>{d.classList.toggle("chat-sidebar__create-panel--open")}),l&&this.addDOMListener(l,"submit",async r=>{r.preventDefault();const t=new FormData(l),e=String(t.get("title")??"").trim();if(e)try{await B.createChat({title:e});const o=await B.getChats({limit:50});x.setState({chats:o}),this.updateChatsList(o),l.reset(),d?.classList.remove("chat-sidebar__create-panel--open");const p=n.querySelector("[data-chat-messages]");p&&(p.innerHTML='<p class="chat-thread__placeholder">Сообщения здесь</p>')}catch(o){console.error("ChatsPage: не удалось создать новый чат",o)}});const a=n.querySelector("#chat-avatar-change"),i=n.querySelector("#chat-avatar-input");a&&i&&(this.addDOMListener(a,"click",()=>{i.click()}),this.addDOMListener(i,"change",async()=>{const r=i.files?.[0];if(!r)return;const t=x.getState(),e=t.activeChatId;if(!e||e===-1){console.warn("[ChatsPage] Нет выбранного чата для смены аватара");return}try{const o=await B.updateChatAvatar(e,r),p=(t.chats??[]).map(b=>b.id===o.id?o:b);x.setState({chats:p}),this.updateChatsList(p);const v=n.querySelector("[data-chat-avatar]");v&&(o.avatar?(v.innerHTML="",v.style.backgroundImage=`url("${z}${o.avatar}")`):(v.style.backgroundImage="",v.textContent=o.title.charAt(0).toUpperCase()))}catch(o){console.error("[ChatsPage] updateChatAvatar failed",o)}finally{i.value=""}}));const s=n.querySelector("#chat-add-user-form");s&&this.addDOMListener(s,"submit",async r=>{r.preventDefault();const e=x.getState().activeChatId;if(!e||e===-1)return;const o=new FormData(s),p=Number(o.get("userId")??0);if(p)try{console.log("[ChatsPage:addUser] chatId=",e,"userId=",p),await B.addUsersToChat({users:[p],chatId:e}),A("Пользователь добавлен в чат","success"),s.reset()}catch(v){console.error("ChatsPage: не удалось добавить пользователя",v),A("Не удалось добавить пользователя","error")}});const m=n.querySelector("#chat-remove-user-form");m&&this.addDOMListener(m,"submit",async r=>{r.preventDefault();const e=x.getState().activeChatId;if(!e||e===-1)return;const o=new FormData(m),p=Number(o.get("userId")??0);if(p)try{console.log("[ChatsPage:removeUser] chatId=",e,"userId=",p),await B.deleteUsersFromChat({users:[p],chatId:e}),A("Пользователь удалён из чата","success"),m.reset()}catch(v){console.error("ChatsPage: не удалось удалить пользователя",v),A("Не удалось удалить пользователя","error")}}),He.subscribe(r=>{if(!n)return;const t=n.querySelector("[data-chat-messages]");if(!t)return;t.querySelector(".chat-thread__placeholder")&&(t.innerHTML="");const e=x.getState(),o=e.user?.id,p=r.user_id===o,{activeChatId:v,chatUsers:b}=e,y=(v?(b??{})[v]??[]:[]).find(E=>E.id===r.user_id),w=y?.display_name||y?.first_name||y?.login||"Пользователь",k=w.charAt(0).toUpperCase();let P="";const M=y?.avatar?`${z}${y.avatar}`:"";if(r.type==="file"){const E=r.content,I=`${z}${E}`,O=E.endsWith(".png")||E.endsWith(".jpg")||E.endsWith(".jpeg")||E.endsWith(".webp")||E.endsWith(".gif");P=`
          <div>
            <a href="${I}" target="_blank" rel="noopener noreferrer">
              ${O?`<img src="${I}" alt="file" class="chat-message__image" />`:"Файл"}
            </a>
          </div>
        `}else P=`<div>${r.content}</div>`;const L=new Date(r.time).toLocaleTimeString("ru-RU",{hour:"2-digit",minute:"2-digit"}),C=M?`<img src="${M}" alt="${w}" class="chat-message__avatar-image" />`:`<span class="chat-message__avatar-initial">${k}</span>`;t.insertAdjacentHTML("beforeend",`
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
        `),t.scrollTop=t.scrollHeight}),this.setupSearch(n),this.setupMenus(n)}setupSearch(n){const u=n.querySelector("[data-chats-search]");u&&this.addDOMListener(u,"input",()=>{const c=u.value.trim().toLowerCase(),h=x.getState().chats??[],d=c?h.filter(l=>l.title.toLowerCase().includes(c)):h;this.updateChatsList(d)})}setupMenus(n){const u=n.querySelector("#chat-menu-toggle"),c=n.querySelector("#chat-menu");u&&c&&(this.addDOMListener(u,"click",()=>{c.classList.toggle("chat-thread__menu-dropdown--open")}),this.addDOMListener(n,"click",o=>{const v=o.target;!c.contains(v)&&v!==u&&c.classList.remove("chat-thread__menu-dropdown--open")}),this.addDOMListener(c,"click",o=>{const v=o.target.closest(".chat-thread__menu-item");if(!v)return;const b=v.dataset.modalOpen,{chatAction:S}=v.dataset;if(v.dataset.chatAction==="change-avatar"){this.handleChatAvatarChange(n),c.classList.remove("chat-thread__menu-dropdown--open");return}if(S==="leave-chat"){this.handleLeaveChat(),c.classList.remove("chat-thread__menu-dropdown--open");return}if(S==="delete-chat"){this.handleDeleteChat(),c.classList.remove("chat-thread__menu-dropdown--open");return}if(!b)return;const y=b==="add-user"?"#user-modal-add":"#user-modal-remove",w=n.querySelector(y),k=n.querySelector("#user-modal-backdrop");!w||!k||(b==="remove-user"&&this.populateChatUsers(w).catch(P=>{console.error("[ChatsPage] failed to load chat users",P)}),w.classList.add("chat-user-modal--open"),k.classList.add("chat-user-backdrop--open"))}));const g=n.querySelector("#user-modal-add"),h=n.querySelector("#user-modal-remove"),d=n.querySelector("#user-modal-backdrop"),l=()=>{g?.classList.remove("chat-user-modal--open"),h?.classList.remove("chat-user-modal--open"),d?.classList.remove("chat-user-backdrop--open")};d&&this.addDOMListener(d,"click",()=>{l()}),g&&this.addDOMListener(g,"click",o=>{o.target.closest(".modal")||l()}),h&&this.addDOMListener(h,"click",o=>{o.target.closest(".modal")||l()}),this.addDOMListener(n,"keydown",o=>{o.key==="Escape"&&l()});const a=n.querySelector("#user-modal-add-submit"),i=n.querySelector("#user-modal-add-close"),s=n.querySelector("#add-login"),m=n.querySelector("[data-user-modal-add-error]");a&&s&&this.addDOMListener(a,"click",async()=>{m&&(m.textContent="");const o=s.value.trim();if(!o){m&&(m.textContent="Укажите логин пользователя");return}const v=x.getState().activeChatId;if(!v||v===-1){m&&(m.textContent="Чат не выбран");return}try{const S=(await Pn.findUsersByLogin(o))[0];if(!S){m&&(m.textContent="Пользователь не найден");return}await B.addUsersToChat({users:[S.id],chatId:v}),s.value="",A("Пользователь добавлен в чат","success"),l()}catch(b){if(b&&typeof b=="object"&&"reason"in b){const{reason:S}=b;console.error("[ChatsPage] пользователи не добавлены",S),A(S,"error")}else console.error("[ChatsPage] пользователи не добавлены",b),A("Не удалось добавить пользователя","error")}}),i&&this.addDOMListener(i,"click",()=>{l()});const r=n.querySelector("#user-modal-remove-close");r&&this.addDOMListener(r,"click",()=>{l()});const t=n.querySelector("#attach-toggle"),e=n.querySelector("#attach-menu");t&&e&&(this.addDOMListener(t,"click",()=>{e.classList.toggle("chat-input__attach-menu--open")}),this.addDOMListener(e,"click",o=>{const v=o.target.closest(".chat-input__attach-item");if(!v)return;const b=v.dataset.type||(v.textContent??"").trim().toLowerCase();e.classList.remove("chat-input__attach-menu--open"),this.openAttachModal(b,n)}))}handleChatAvatarChange(n){const u=n.querySelector("#chat-avatar-input");u&&(u.value="",this.addDOMListener(u,"change",async()=>{const c=u.files?.[0];if(!c)return;const g=x.getState(),h=g.activeChatId;if(!h||h===-1){console.warn("[ChatsPage] Нет выбранного чата для смены аватара");return}try{const d=await B.updateChatAvatar(h,c),l=(g.chats??[]).map(i=>i.id===d.id?d:i);x.setState({chats:l}),this.updateChatsList(l);const a=n.querySelector("[data-chat-avatar]");a&&(d.avatar?(a.textContent="",a.style.backgroundImage=`url("${z}${d.avatar}")`,a.style.backgroundSize="cover",a.style.backgroundPosition="center"):(a.style.backgroundImage="",a.textContent=d.title.charAt(0).toUpperCase()))}catch(d){console.error("[ChatsPage] updateChatAvatar failed",d),A("Не удалось обновить аватар","error")}finally{u.value=""}}),u.click())}async handleDeleteChat(){const n=x.getState(),u=n.activeChatId,c=n.chats??[],g=n.user?.id;if(!u||u===-1){console.warn("[ChatsPage] Нет выбранного чата для удаления");return}const h=c.find(l=>l.id===u);if(!h)return;if(h.created_by!==g){console.warn("[ChatsPage] Только создатель чата может его удалить");return}if(window.confirm("Удалить этот чат? Его нельзя будет восстановить."))try{await B.deleteChat(u),A("Чат удалён","success");const l=c.filter(i=>i.id!==u);x.setState({chats:l,activeChatId:void 0});const a=this.getContent();if(a){const i=a.querySelector("[data-chat-title]"),s=a.querySelector("[data-chat-avatar]"),m=a.querySelector("[data-chat-messages]");i&&(i.textContent="Выберите чат"),s&&(s.textContent="?",s.style.backgroundImage=""),m&&(m.innerHTML='<p class="chat-thread__placeholder">Сообщения появятся здесь, после выбора чата</p>')}this.updateChatsList(l)}catch(l){console.error("[ChatsPage] чат не удален",l),A("Не удалось удалить чат","error")}}async handleLeaveChat(){const n=x.getState(),u=n.activeChatId,c=n.chats??[],g=n.user?.id;if(!u||u===-1||!g){console.warn("[ChatsPage] Нет выбранного чата или пользователя для выхода");return}if(window.confirm("Покинуть этот чат?"))try{await B.deleteUsersFromChat({users:[g],chatId:u}),A("Вы покинули чат","success");const d=c.filter(a=>a.id!==u);x.setState({chats:d,activeChatId:void 0});const l=this.getContent();if(l){const a=l.querySelector("[data-chat-title]"),i=l.querySelector("[data-chat-avatar]"),s=l.querySelector("[data-chat-messages]");a&&(a.textContent="Выберите чат"),i&&(i.textContent="?",i.style.backgroundImage=""),s&&(s.innerHTML='<p class="chat-thread__placeholder">Сообщения появятся здесь, после выбора чата</p>')}this.updateChatsList(d)}catch(d){console.error("[ChatsPage] Не удалось выйти из чата",d),A("Не удалось покинуть чат","error")}}async populateChatUsers(n){const c=x.getState().activeChatId;if(!c||c===-1)return;const g=n.querySelector("[data-chat-users]"),h=n.querySelector("[data-user-modal-remove-error]");if(g){h&&(h.textContent="");try{const d=await B.getChatUsers(c);if(!d.length){g.innerHTML="<li>В чате нет других участников</li>";return}g.innerHTML=d.map(l=>`
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
          </li>`).join(""),g.querySelectorAll(".chat-user-modal__item-remove").forEach(l=>{this.addDOMListener(l,"click",async()=>{const a=l.closest(".chat-user-modal__item");if(!a)return;const i=Number(a.dataset.userId??0);if(i)try{await B.deleteUsersFromChat({users:[i],chatId:c}),a.remove(),A("Пользователь удалён из чата","success")}catch(s){if(s&&typeof s=="object"&&"reason"in s){const{reason:m}=s;console.error("[ChatsPage] пользователь не удален",m),A(m,"error")}else console.error("[ChatsPage] пользователь не удален",s),A("Не удалось удалить пользователя","error")}})})}catch(d){if(d&&typeof d=="object"&&"reason"in d){const{reason:l}=d;console.error("[ChatsPage] список участников не получен",l)}else console.error("[ChatsPage] список участников не получен",d)}}}openAttachModal(n,u){const c=u.querySelector("#upload-modal"),g=u.querySelector("#upload-backdrop"),h=c?.querySelector("#upload-file");if(!c||!g||!h)return;const d=c.querySelector("[data-modal-title]");d&&(n.includes("фото")||n.includes("видео")||n==="photo"?d.textContent="Прикрепить фото или видео":n.includes("файл")||n==="file"?d.textContent="Прикрепить файл":n.includes("локация")||n==="location"?d.textContent="Поделиться локацией (пока файл)":d.textContent="Прикрепить вложение"),h.value="",c.classList.add("chat-upload-modal--open"),g.classList.add("chat-upload-backdrop--open");const l=()=>{c.classList.remove("chat-upload-modal--open"),g.classList.remove("chat-upload-backdrop--open")},a=async()=>{const s=h.files?.[0];if(!s)return;const r=x.getState().activeChatId;if(!r||r===-1){console.warn("[ChatsPage] Нет выбранного чата для вложения");return}try{const t=await wn.uploadFile(s);He.sendFile(t.path),A("Файл отправлен","success"),l()}catch(t){console.error("[ChatsPage] upload file failed",t),A("Не удалось загрузить файл","error")}finally{h.value=""}};this.addDOMListener(h,"change",a);const i=u.querySelector("#upload-close");i&&this.addDOMListener(i,"click",()=>{l()}),this.addDOMListener(g,"click",()=>{l()}),this.addDOMListener(c,"click",s=>{s.target.closest(".modal")||l()})}render(){return Y(vn,this.props)}}const Ln=`<main class="error-page">
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
`;class En extends D{constructor(n={}){super("div",n)}render(){return Ln}}const xn=`<main class="error-page">
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
`;class zt extends D{constructor(n={}){super("div",n)}render(){return xn}}const Mn=`<div class="app">
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
`;class In extends D{componentDidMount(){const n=this.getContent();if(!n)return;console.log("[LandingPage] componentDidMount");const u=n.querySelector("nav.landing-nav");if(u){const c=u.querySelector("#nav-toggle"),g=u.querySelector("#nav-links");c&&g&&this.addDOMListener(c,"click",()=>{g.classList.toggle("landing-nav__links--open"),console.log("[LandingPage] Вкл/выкл мобильного меню")})}}render(){return Y(Mn,this.props)}}const An=`<section class="profile-layout">
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
`,On=f=>f?`${z}${f}`:Fe("assets/avatar-transp.png");class Qt extends D{constructor(n){const c=x.getState().user,g=c?.avatar??null,h={email:c?.email??"ivan@example.com",login:c?.login??"ivanivanov",first_name:c?.first_name??"Иван",second_name:c?.second_name??"Иванов",display_name:c?.display_name??c?.first_name??"",phone:c?.phone??"+79991234567",avatar:On(g)};super("div",{...h,...n})}render(){return Y(An,this.props)}}const je=new pe("/user");class Dn{updateProfile(n){return je.put("/profile",{data:n})}updatePassword(n){return je.put("/password",{data:n})}updateAvatar(n){const u=new FormData;return u.append("avatar",n),je.put("/profile/avatar",{data:u})}}const $e=new Dn,Nn=`<section class="profile-layout">
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
`,qn=f=>f?`${z}${f}`:Fe("assets/avatar-transp.png");class Rn extends D{constructor(n){const u=x.getState();console.log("[ProfileEditPage] state.user =",u.user);const c=u.user,g={email:c?.email??"",login:c?.login??"",first_name:c?.first_name??"",second_name:c?.second_name??"",display_name:c?.display_name??c?.first_name??"",phone:c?.phone??"",avatar:qn(c?.avatar)};super("div",{...g,...n})}componentDidMount(){const n=this.getContent();if(!n)return;const u=n.querySelector("#profile-edit-form");if(!u){console.warn("[ProfileEditPage] форма потерялась");return}const c=n.querySelector("[data-form-error]"),{validateField:g,validateForm:h}=ue(u,{logOnSuccess:!1});Array.from(u.querySelectorAll("input, textarea")).forEach(l=>{this.addDOMListener(l,"blur",a=>{const i=a,{target:s}=i;(s instanceof HTMLInputElement||s instanceof HTMLTextAreaElement)&&g(s)})}),this.addDOMListener(u,"submit",async l=>{l.preventDefault(),c&&(c.textContent="");const{valid:i}=h();if(!i){console.warn("[ProfileEditPage] форма невалидна — отправка отменена");return}const s=new FormData(u),m={first_name:String(s.get("first_name")??""),second_name:String(s.get("second_name")??""),display_name:String(s.get("display_name")??""),login:String(s.get("login")??""),email:String(s.get("email")??""),phone:String(s.get("phone")??"")};try{const r=await $e.updateProfile(m);x.setState({user:r}),console.log("[ProfileEditPage] профиль обновлён"),A("Профиль обновлён","success"),N.go("/profile")}catch(r){const e=(r&&typeof r=="object"&&"reason"in r?r:null)?.reason;console.error("[ProfileEditPage] ошибка обновления профиля",r),c&&(A(e||"Не удалось обновить профиль.","error"),c.textContent=e||"Не удалось обновить профиль.")}})}render(){return Y(Nn,this.props)}}const Tn=`<section class="profile-layout">
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
`,Zt=f=>f?`${z}${f}`:Fe("assets/avatar-transp.png");class Bn extends D{constructor(n){const c=x.getState().user,g={avatar:Zt(c?.avatar)};super("div",{...g,...n})}componentDidMount(){const n=this.getContent();if(!n)return;const u=n.querySelector("#profile-avatar-form");if(!u)return;const c=u.querySelector('input[type="file"]'),g=n.querySelector("[data-form-error]");this.addDOMListener(u,"submit",async h=>{if(h.preventDefault(),g&&(g.textContent=""),!c||!c.files||c.files.length===0){g&&(g.textContent="Файл не выбран");return}const d=c.files[0];try{const l=await $e.updateAvatar(d);x.setState({user:l});const a=Zt(l.avatar);this.setProps({avatar:a});const i=n.querySelector(".profile-avatar-button");i&&(i.style.backgroundImage=`url("${a}")`),A("Аватар обновлён","success"),N.go("/profile")}catch(l){const i=(l&&typeof l=="object"&&"reason"in l?l:null)?.reason;console.error("[ProfileAvatarPage] ошибка загрузки аватара",l),A(i||"Не удалось загрузить аватар.","error"),g&&(g.textContent=i||"Не удалось загрузить аватар.",A(i||"Не удалось загрузить аватар.","error"))}})}render(){return Y(Tn,this.props)}}const Hn=`<section class="profile-layout">
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
`;class Un extends D{handleSubmit;constructor(n={}){super("div",n),this.handleSubmit=u=>{this.onSubmit(u)}}async onSubmit(n){n.preventDefault();const u=n.currentTarget;if(!(u instanceof HTMLFormElement))return;const c=u.querySelector("[data-form-error]"),{validateForm:g}=ue(u,{logOnSuccess:!1}),{valid:h}=g();if(!h){console.warn("[ProfilePasswordPage] Данные формы невалидны — отправка отменена");return}const d=new FormData(u),l=String(d.get("oldPassword")??""),a=String(d.get("newPassword")??""),i=String(d.get("newPasswordConfirm")??"");if(a!==i){c&&(c.textContent="Новый пароль и подтверждение не совпадают");return}try{await $e.updatePassword({oldPassword:l,newPassword:a}),console.log("[ProfilePasswordPage] пароль обновлён"),A("Пароль успешно изменён","success"),c&&(c.textContent="Пароль успешно изменён")}catch(s){const r=(s&&typeof s=="object"&&"reason"in s?s:null)?.reason;console.error("[ProfilePasswordPage] ошибка смены пароля",s),A(r||"Не удалось сменить пароль. Попробуйте ещё раз.","error"),c&&(c.textContent=r||"Не удалось сменить пароль. Попробуйте ещё раз.",A(r||"Не удалось сменить пароль. Попробуйте ещё раз.","error"))}}componentDidMount(){const n=this.getContent();if(!n)return;const u=n.querySelector("#profile-password-form");if(!u){console.warn("[ProfilePasswordPage] форма потерялась");return}const{validateField:c}=ue(u,{logOnSuccess:!1});Array.from(u.querySelectorAll("input, textarea")).forEach(h=>{this.addDOMListener(h,"blur",d=>{const l=d,{target:a}=l;(a instanceof HTMLInputElement||a instanceof HTMLTextAreaElement)&&c(a)})}),this.addDOMListener(u,"submit",this.handleSubmit)}render(){return Y(Hn,this.props)}}window.Handlebars=q;const Fn=["/messenger","/chats","/chat","/settings"],Ye=f=>Fn.includes(f)||f.startsWith("/profile"),Vn=f=>{const n=x.getState();if((f==="/login"||f==="/register"||f==="/sign-up")&&n.user){N.go("/messenger");return}if(f==="/"){N.go("/");return}if(!n.user&&Ye(f)){N.go("/login");return}N.go(f)},Gn=()=>{const f=document.querySelectorAll("[data-theme-toggle]");f.length&&f.forEach(n=>{n.addEventListener("click",()=>{const u=document.body.classList.contains("theme-dark");document.body.classList.toggle("theme-dark",!u),document.body.classList.toggle("theme-light",u)})})},Wn=()=>{const f=document.getElementById("nav-toggle"),n=document.getElementById("nav-links");!f||!n||f.addEventListener("click",()=>{n.classList.toggle("landing-nav__links--open")})},Kn=()=>{document.addEventListener("click",f=>{const n=f.target;if(!n)return;const u=n.closest("[data-link]");if(!u)return;const c=u.getAttribute("data-link")||u.getAttribute("href");c&&(f.preventDefault(),Vn(c))})},Jn=()=>{!document.body.classList.contains("theme-light")&&!document.body.classList.contains("theme-dark")&&document.body.classList.add("theme-light"),Gn(),Wn(),Kn()},zn=async()=>{jr(),$r(),Jn(),N.use("/",In).use("/sign-up",Wt).use("/register",Wt).use("/login",Kt).use("/sign-in",Kt).use("/logout",gn).use("/messenger",Ze).use("/chat",Ze).use("/chats",Ze).use("/profile",ce(Qt)).use("/profile/edit",ce(Rn)).use("/profile/avatar",ce(Bn)).use("/profile/password",ce(Un)).use("/settings",ce(Qt)).use("/404",En).use("/5xx",zt).use("/500",zt);try{const f=await Q.getUser();if(f){W.clear(),x.setState({user:f});const n=re(window.location.pathname);if(n==="/login"||n==="/sign-in"||n==="/register"||n==="/sign-up"){N.go("/messenger");return}}else{x.setState({user:null});const n=re(window.location.pathname);if(Ye(n)){N.go("/login");return}}}catch{const f=W.getUser();x.setState({user:f});const n=re(window.location.pathname);if(f&&(n==="/login"||n==="/sign-in"||n==="/register"||n==="/sign-up")){N.go("/messenger");return}if(Ye(n)){f||N.go("/login");return}}N.start()};document.addEventListener("DOMContentLoaded",()=>{zn().catch(f=>{console.error("[initApp] unhandled error",f)})});
