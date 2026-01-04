const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ManagerRoutes-BfUuieDj.js","assets/badge-C9jT8Gnn.js","assets/select-DZvdiNse.js","assets/shopping-bag-B1Afa7R_.js","assets/WaiterRoutes-CElTqatN.js","assets/sheet-Cij3qWhQ.js","assets/StaffRoutes-CozfXlSg.js"])))=>i.map(i=>d[i]);
function oR(n,e){for(var t=0;t<e.length;t++){const r=e[t];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in n)){const a=Object.getOwnPropertyDescriptor(r,o);a&&Object.defineProperty(n,o,a.get?a:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();var T2=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function $E(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Ap={exports:{}},Gl={},Rp={exports:{}},je={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var av;function aR(){if(av)return je;av=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),E=Symbol.iterator;function S(M){return M===null||typeof M!="object"?null:(M=E&&M[E]||M["@@iterator"],typeof M=="function"?M:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B=Object.assign,q={};function O(M,Q,Te){this.props=M,this.context=Q,this.refs=q,this.updater=Te||x}O.prototype.isReactComponent={},O.prototype.setState=function(M,Q){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,Q,"setState")},O.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function ne(){}ne.prototype=O.prototype;function re(M,Q,Te){this.props=M,this.context=Q,this.refs=q,this.updater=Te||x}var te=re.prototype=new ne;te.constructor=re,B(te,O.prototype),te.isPureReactComponent=!0;var ce=Array.isArray,he=Object.prototype.hasOwnProperty,ue={current:null},P={key:!0,ref:!0,__self:!0,__source:!0};function T(M,Q,Te){var Re,Me={},H=null,G=null;if(Q!=null)for(Re in Q.ref!==void 0&&(G=Q.ref),Q.key!==void 0&&(H=""+Q.key),Q)he.call(Q,Re)&&!P.hasOwnProperty(Re)&&(Me[Re]=Q[Re]);var Y=arguments.length-2;if(Y===1)Me.children=Te;else if(1<Y){for(var oe=Array(Y),Ee=0;Ee<Y;Ee++)oe[Ee]=arguments[Ee+2];Me.children=oe}if(M&&M.defaultProps)for(Re in Y=M.defaultProps,Y)Me[Re]===void 0&&(Me[Re]=Y[Re]);return{$$typeof:n,type:M,key:H,ref:G,props:Me,_owner:ue.current}}function k(M,Q){return{$$typeof:n,type:M.type,key:Q,ref:M.ref,props:M.props,_owner:M._owner}}function N(M){return typeof M=="object"&&M!==null&&M.$$typeof===n}function C(M){var Q={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(Te){return Q[Te]})}var V=/\/+/g;function A(M,Q){return typeof M=="object"&&M!==null&&M.key!=null?C(""+M.key):Q.toString(36)}function ze(M,Q,Te,Re,Me){var H=typeof M;(H==="undefined"||H==="boolean")&&(M=null);var G=!1;if(M===null)G=!0;else switch(H){case"string":case"number":G=!0;break;case"object":switch(M.$$typeof){case n:case e:G=!0}}if(G)return G=M,Me=Me(G),M=Re===""?"."+A(G,0):Re,ce(Me)?(Te="",M!=null&&(Te=M.replace(V,"$&/")+"/"),ze(Me,Q,Te,"",function(Ee){return Ee})):Me!=null&&(N(Me)&&(Me=k(Me,Te+(!Me.key||G&&G.key===Me.key?"":(""+Me.key).replace(V,"$&/")+"/")+M)),Q.push(Me)),1;if(G=0,Re=Re===""?".":Re+":",ce(M))for(var Y=0;Y<M.length;Y++){H=M[Y];var oe=Re+A(H,Y);G+=ze(H,Q,Te,oe,Me)}else if(oe=S(M),typeof oe=="function")for(M=oe.call(M),Y=0;!(H=M.next()).done;)H=H.value,oe=Re+A(H,Y++),G+=ze(H,Q,Te,oe,Me);else if(H==="object")throw Q=String(M),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.");return G}function st(M,Q,Te){if(M==null)return M;var Re=[],Me=0;return ze(M,Re,"","",function(H){return Q.call(Te,H,Me++)}),Re}function it(M){if(M._status===-1){var Q=M._result;Q=Q(),Q.then(function(Te){(M._status===0||M._status===-1)&&(M._status=1,M._result=Te)},function(Te){(M._status===0||M._status===-1)&&(M._status=2,M._result=Te)}),M._status===-1&&(M._status=0,M._result=Q)}if(M._status===1)return M._result.default;throw M._result}var Ge={current:null},W={transition:null},Ae={ReactCurrentDispatcher:Ge,ReactCurrentBatchConfig:W,ReactCurrentOwner:ue};function de(){throw Error("act(...) is not supported in production builds of React.")}return je.Children={map:st,forEach:function(M,Q,Te){st(M,function(){Q.apply(this,arguments)},Te)},count:function(M){var Q=0;return st(M,function(){Q++}),Q},toArray:function(M){return st(M,function(Q){return Q})||[]},only:function(M){if(!N(M))throw Error("React.Children.only expected to receive a single React element child.");return M}},je.Component=O,je.Fragment=t,je.Profiler=o,je.PureComponent=re,je.StrictMode=r,je.Suspense=f,je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ae,je.act=de,je.cloneElement=function(M,Q,Te){if(M==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+M+".");var Re=B({},M.props),Me=M.key,H=M.ref,G=M._owner;if(Q!=null){if(Q.ref!==void 0&&(H=Q.ref,G=ue.current),Q.key!==void 0&&(Me=""+Q.key),M.type&&M.type.defaultProps)var Y=M.type.defaultProps;for(oe in Q)he.call(Q,oe)&&!P.hasOwnProperty(oe)&&(Re[oe]=Q[oe]===void 0&&Y!==void 0?Y[oe]:Q[oe])}var oe=arguments.length-2;if(oe===1)Re.children=Te;else if(1<oe){Y=Array(oe);for(var Ee=0;Ee<oe;Ee++)Y[Ee]=arguments[Ee+2];Re.children=Y}return{$$typeof:n,type:M.type,key:Me,ref:H,props:Re,_owner:G}},je.createContext=function(M){return M={$$typeof:u,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},M.Provider={$$typeof:a,_context:M},M.Consumer=M},je.createElement=T,je.createFactory=function(M){var Q=T.bind(null,M);return Q.type=M,Q},je.createRef=function(){return{current:null}},je.forwardRef=function(M){return{$$typeof:d,render:M}},je.isValidElement=N,je.lazy=function(M){return{$$typeof:v,_payload:{_status:-1,_result:M},_init:it}},je.memo=function(M,Q){return{$$typeof:m,type:M,compare:Q===void 0?null:Q}},je.startTransition=function(M){var Q=W.transition;W.transition={};try{M()}finally{W.transition=Q}},je.unstable_act=de,je.useCallback=function(M,Q){return Ge.current.useCallback(M,Q)},je.useContext=function(M){return Ge.current.useContext(M)},je.useDebugValue=function(){},je.useDeferredValue=function(M){return Ge.current.useDeferredValue(M)},je.useEffect=function(M,Q){return Ge.current.useEffect(M,Q)},je.useId=function(){return Ge.current.useId()},je.useImperativeHandle=function(M,Q,Te){return Ge.current.useImperativeHandle(M,Q,Te)},je.useInsertionEffect=function(M,Q){return Ge.current.useInsertionEffect(M,Q)},je.useLayoutEffect=function(M,Q){return Ge.current.useLayoutEffect(M,Q)},je.useMemo=function(M,Q){return Ge.current.useMemo(M,Q)},je.useReducer=function(M,Q,Te){return Ge.current.useReducer(M,Q,Te)},je.useRef=function(M){return Ge.current.useRef(M)},je.useState=function(M){return Ge.current.useState(M)},je.useSyncExternalStore=function(M,Q,Te){return Ge.current.useSyncExternalStore(M,Q,Te)},je.useTransition=function(){return Ge.current.useTransition()},je.version="18.3.1",je}var lv;function Mm(){return lv||(lv=1,Rp.exports=aR()),Rp.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uv;function lR(){if(uv)return Gl;uv=1;var n=Mm(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(d,f,m){var v,E={},S=null,x=null;m!==void 0&&(S=""+m),f.key!==void 0&&(S=""+f.key),f.ref!==void 0&&(x=f.ref);for(v in f)r.call(f,v)&&!a.hasOwnProperty(v)&&(E[v]=f[v]);if(d&&d.defaultProps)for(v in f=d.defaultProps,f)E[v]===void 0&&(E[v]=f[v]);return{$$typeof:e,type:d,key:S,ref:x,props:E,_owner:o.current}}return Gl.Fragment=t,Gl.jsx=u,Gl.jsxs=u,Gl}var cv;function uR(){return cv||(cv=1,Ap.exports=lR()),Ap.exports}var pe=uR(),dh={},kp={exports:{}},wn={},Pp={exports:{}},bp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hv;function cR(){return hv||(hv=1,(function(n){function e(W,Ae){var de=W.length;W.push(Ae);e:for(;0<de;){var M=de-1>>>1,Q=W[M];if(0<o(Q,Ae))W[M]=Ae,W[de]=Q,de=M;else break e}}function t(W){return W.length===0?null:W[0]}function r(W){if(W.length===0)return null;var Ae=W[0],de=W.pop();if(de!==Ae){W[0]=de;e:for(var M=0,Q=W.length,Te=Q>>>1;M<Te;){var Re=2*(M+1)-1,Me=W[Re],H=Re+1,G=W[H];if(0>o(Me,de))H<Q&&0>o(G,Me)?(W[M]=G,W[H]=de,M=H):(W[M]=Me,W[Re]=de,M=Re);else if(H<Q&&0>o(G,de))W[M]=G,W[H]=de,M=H;else break e}}return Ae}function o(W,Ae){var de=W.sortIndex-Ae.sortIndex;return de!==0?de:W.id-Ae.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var u=Date,d=u.now();n.unstable_now=function(){return u.now()-d}}var f=[],m=[],v=1,E=null,S=3,x=!1,B=!1,q=!1,O=typeof setTimeout=="function"?setTimeout:null,ne=typeof clearTimeout=="function"?clearTimeout:null,re=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function te(W){for(var Ae=t(m);Ae!==null;){if(Ae.callback===null)r(m);else if(Ae.startTime<=W)r(m),Ae.sortIndex=Ae.expirationTime,e(f,Ae);else break;Ae=t(m)}}function ce(W){if(q=!1,te(W),!B)if(t(f)!==null)B=!0,it(he);else{var Ae=t(m);Ae!==null&&Ge(ce,Ae.startTime-W)}}function he(W,Ae){B=!1,q&&(q=!1,ne(T),T=-1),x=!0;var de=S;try{for(te(Ae),E=t(f);E!==null&&(!(E.expirationTime>Ae)||W&&!C());){var M=E.callback;if(typeof M=="function"){E.callback=null,S=E.priorityLevel;var Q=M(E.expirationTime<=Ae);Ae=n.unstable_now(),typeof Q=="function"?E.callback=Q:E===t(f)&&r(f),te(Ae)}else r(f);E=t(f)}if(E!==null)var Te=!0;else{var Re=t(m);Re!==null&&Ge(ce,Re.startTime-Ae),Te=!1}return Te}finally{E=null,S=de,x=!1}}var ue=!1,P=null,T=-1,k=5,N=-1;function C(){return!(n.unstable_now()-N<k)}function V(){if(P!==null){var W=n.unstable_now();N=W;var Ae=!0;try{Ae=P(!0,W)}finally{Ae?A():(ue=!1,P=null)}}else ue=!1}var A;if(typeof re=="function")A=function(){re(V)};else if(typeof MessageChannel<"u"){var ze=new MessageChannel,st=ze.port2;ze.port1.onmessage=V,A=function(){st.postMessage(null)}}else A=function(){O(V,0)};function it(W){P=W,ue||(ue=!0,A())}function Ge(W,Ae){T=O(function(){W(n.unstable_now())},Ae)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(W){W.callback=null},n.unstable_continueExecution=function(){B||x||(B=!0,it(he))},n.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<W?Math.floor(1e3/W):5},n.unstable_getCurrentPriorityLevel=function(){return S},n.unstable_getFirstCallbackNode=function(){return t(f)},n.unstable_next=function(W){switch(S){case 1:case 2:case 3:var Ae=3;break;default:Ae=S}var de=S;S=Ae;try{return W()}finally{S=de}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(W,Ae){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var de=S;S=W;try{return Ae()}finally{S=de}},n.unstable_scheduleCallback=function(W,Ae,de){var M=n.unstable_now();switch(typeof de=="object"&&de!==null?(de=de.delay,de=typeof de=="number"&&0<de?M+de:M):de=M,W){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=de+Q,W={id:v++,callback:Ae,priorityLevel:W,startTime:de,expirationTime:Q,sortIndex:-1},de>M?(W.sortIndex=de,e(m,W),t(f)===null&&W===t(m)&&(q?(ne(T),T=-1):q=!0,Ge(ce,de-M))):(W.sortIndex=Q,e(f,W),B||x||(B=!0,it(he))),W},n.unstable_shouldYield=C,n.unstable_wrapCallback=function(W){var Ae=S;return function(){var de=S;S=Ae;try{return W.apply(this,arguments)}finally{S=de}}}})(bp)),bp}var dv;function hR(){return dv||(dv=1,Pp.exports=cR()),Pp.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fv;function dR(){if(fv)return wn;fv=1;var n=Mm(),e=hR();function t(i){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+i,l=1;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function a(i,s){u(i,s),u(i+"Capture",s)}function u(i,s){for(o[i]=s,i=0;i<s.length;i++)r.add(s[i])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},E={};function S(i){return f.call(E,i)?!0:f.call(v,i)?!1:m.test(i)?E[i]=!0:(v[i]=!0,!1)}function x(i,s,l,h){if(l!==null&&l.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return h?!1:l!==null?!l.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function B(i,s,l,h){if(s===null||typeof s>"u"||x(i,s,l,h))return!0;if(h)return!1;if(l!==null)switch(l.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function q(i,s,l,h,p,g,w){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=h,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=i,this.type=s,this.sanitizeURL=g,this.removeEmptyString=w}var O={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){O[i]=new q(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var s=i[0];O[s]=new q(s,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){O[i]=new q(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){O[i]=new q(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){O[i]=new q(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){O[i]=new q(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){O[i]=new q(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){O[i]=new q(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){O[i]=new q(i,5,!1,i.toLowerCase(),null,!1,!1)});var ne=/[\-:]([a-z])/g;function re(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var s=i.replace(ne,re);O[s]=new q(s,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var s=i.replace(ne,re);O[s]=new q(s,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var s=i.replace(ne,re);O[s]=new q(s,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){O[i]=new q(i,1,!1,i.toLowerCase(),null,!1,!1)}),O.xlinkHref=new q("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){O[i]=new q(i,1,!1,i.toLowerCase(),null,!0,!0)});function te(i,s,l,h){var p=O.hasOwnProperty(s)?O[s]:null;(p!==null?p.type!==0:h||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(B(s,l,p,h)&&(l=null),h||p===null?S(s)&&(l===null?i.removeAttribute(s):i.setAttribute(s,""+l)):p.mustUseProperty?i[p.propertyName]=l===null?p.type===3?!1:"":l:(s=p.attributeName,h=p.attributeNamespace,l===null?i.removeAttribute(s):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,h?i.setAttributeNS(h,s,l):i.setAttribute(s,l))))}var ce=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,he=Symbol.for("react.element"),ue=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),k=Symbol.for("react.profiler"),N=Symbol.for("react.provider"),C=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),ze=Symbol.for("react.suspense_list"),st=Symbol.for("react.memo"),it=Symbol.for("react.lazy"),Ge=Symbol.for("react.offscreen"),W=Symbol.iterator;function Ae(i){return i===null||typeof i!="object"?null:(i=W&&i[W]||i["@@iterator"],typeof i=="function"?i:null)}var de=Object.assign,M;function Q(i){if(M===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);M=s&&s[1]||""}return`
`+M+i}var Te=!1;function Re(i,s){if(!i||Te)return"";Te=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(z){var h=z}Reflect.construct(i,[],s)}else{try{s.call()}catch(z){h=z}i.call(s.prototype)}else{try{throw Error()}catch(z){h=z}i()}}catch(z){if(z&&h&&typeof z.stack=="string"){for(var p=z.stack.split(`
`),g=h.stack.split(`
`),w=p.length-1,R=g.length-1;1<=w&&0<=R&&p[w]!==g[R];)R--;for(;1<=w&&0<=R;w--,R--)if(p[w]!==g[R]){if(w!==1||R!==1)do if(w--,R--,0>R||p[w]!==g[R]){var b=`
`+p[w].replace(" at new "," at ");return i.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",i.displayName)),b}while(1<=w&&0<=R);break}}}finally{Te=!1,Error.prepareStackTrace=l}return(i=i?i.displayName||i.name:"")?Q(i):""}function Me(i){switch(i.tag){case 5:return Q(i.type);case 16:return Q("Lazy");case 13:return Q("Suspense");case 19:return Q("SuspenseList");case 0:case 2:case 15:return i=Re(i.type,!1),i;case 11:return i=Re(i.type.render,!1),i;case 1:return i=Re(i.type,!0),i;default:return""}}function H(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case P:return"Fragment";case ue:return"Portal";case k:return"Profiler";case T:return"StrictMode";case A:return"Suspense";case ze:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case C:return(i.displayName||"Context")+".Consumer";case N:return(i._context.displayName||"Context")+".Provider";case V:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case st:return s=i.displayName||null,s!==null?s:H(i.type)||"Memo";case it:s=i._payload,i=i._init;try{return H(i(s))}catch{}}return null}function G(i){var s=i.type;switch(i.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=s.render,i=i.displayName||i.name||"",s.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return H(s);case 8:return s===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Y(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function oe(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Ee(i){var s=oe(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),h=""+i[s];if(!i.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,g=l.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return p.call(this)},set:function(w){h=""+w,g.call(this,w)}}),Object.defineProperty(i,s,{enumerable:l.enumerable}),{getValue:function(){return h},setValue:function(w){h=""+w},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function Fe(i){i._valueTracker||(i._valueTracker=Ee(i))}function Le(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var l=s.getValue(),h="";return i&&(h=oe(i)?i.checked?"true":"false":i.value),i=h,i!==l?(s.setValue(i),!0):!1}function Ye(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function dt(i,s){var l=s.checked;return de({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??i._wrapperState.initialChecked})}function Et(i,s){var l=s.defaultValue==null?"":s.defaultValue,h=s.checked!=null?s.checked:s.defaultChecked;l=Y(s.value!=null?s.value:l),i._wrapperState={initialChecked:h,initialValue:l,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function un(i,s){s=s.checked,s!=null&&te(i,"checked",s,!1)}function $t(i,s){un(i,s);var l=Y(s.value),h=s.type;if(l!=null)h==="number"?(l===0&&i.value===""||i.value!=l)&&(i.value=""+l):i.value!==""+l&&(i.value=""+l);else if(h==="submit"||h==="reset"){i.removeAttribute("value");return}s.hasOwnProperty("value")?It(i,s.type,l):s.hasOwnProperty("defaultValue")&&It(i,s.type,Y(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(i.defaultChecked=!!s.defaultChecked)}function Xn(i,s,l){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var h=s.type;if(!(h!=="submit"&&h!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+i._wrapperState.initialValue,l||s===i.value||(i.value=s),i.defaultValue=s}l=i.name,l!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,l!==""&&(i.name=l)}function It(i,s,l){(s!=="number"||Ye(i.ownerDocument)!==i)&&(l==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+l&&(i.defaultValue=""+l))}var Tt=Array.isArray;function pn(i,s,l,h){if(i=i.options,s){s={};for(var p=0;p<l.length;p++)s["$"+l[p]]=!0;for(l=0;l<i.length;l++)p=s.hasOwnProperty("$"+i[l].value),i[l].selected!==p&&(i[l].selected=p),p&&h&&(i[l].defaultSelected=!0)}else{for(l=""+Y(l),s=null,p=0;p<i.length;p++){if(i[p].value===l){i[p].selected=!0,h&&(i[p].defaultSelected=!0);return}s!==null||i[p].disabled||(s=i[p])}s!==null&&(s.selected=!0)}}function Wr(i,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return de({},s,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function Ss(i,s){var l=s.value;if(l==null){if(l=s.children,s=s.defaultValue,l!=null){if(s!=null)throw Error(t(92));if(Tt(l)){if(1<l.length)throw Error(t(93));l=l[0]}s=l}s==null&&(s=""),l=s}i._wrapperState={initialValue:Y(l)}}function Do(i,s){var l=Y(s.value),h=Y(s.defaultValue);l!=null&&(l=""+l,l!==i.value&&(i.value=l),s.defaultValue==null&&i.defaultValue!==l&&(i.defaultValue=l)),h!=null&&(i.defaultValue=""+h)}function Ln(i){var s=i.textContent;s===i._wrapperState.initialValue&&s!==""&&s!==null&&(i.value=s)}function Ze(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gr(i,s){return i==null||i==="http://www.w3.org/1999/xhtml"?Ze(s):i==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var Ri,Zu=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,l,h,p){MSApp.execUnsafeLocalFunction(function(){return i(s,l,h,p)})}:i})(function(i,s){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=s;else{for(Ri=Ri||document.createElement("div"),Ri.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=Ri.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;s.firstChild;)i.appendChild(s.firstChild)}});function As(i,s){if(s){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=s;return}}i.textContent=s}var ki={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ec=["Webkit","ms","Moz","O"];Object.keys(ki).forEach(function(i){ec.forEach(function(s){s=s+i.charAt(0).toUpperCase()+i.substring(1),ki[s]=ki[i]})});function Pi(i,s,l){return s==null||typeof s=="boolean"||s===""?"":l||typeof s!="number"||s===0||ki.hasOwnProperty(i)&&ki[i]?(""+s).trim():s+"px"}function Vo(i,s){i=i.style;for(var l in s)if(s.hasOwnProperty(l)){var h=l.indexOf("--")===0,p=Pi(l,s[l],h);l==="float"&&(l="cssFloat"),h?i.setProperty(l,p):i[l]=p}}var rl=de({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Jn(i,s){if(s){if(rl[i]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Oo(i,s){if(i.indexOf("-")===-1)return typeof s.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bi=null;function Mo(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var Hr=null,Qr=null,St=null;function il(i){if(i=xl(i)){if(typeof Hr!="function")throw Error(t(280));var s=i.stateNode;s&&(s=kc(s),Hr(i.stateNode,i.type,s))}}function Ci(i){Qr?St?St.push(i):St=[i]:Qr=i}function xi(){if(Qr){var i=Qr,s=St;if(St=Qr=null,il(i),s)for(i=0;i<s.length;i++)il(s[i])}}function tc(i,s){return i(s)}function nc(){}var yr=!1;function rc(i,s,l){if(yr)return i(s,l);yr=!0;try{return tc(i,s,l)}finally{yr=!1,(Qr!==null||St!==null)&&(nc(),xi())}}function Rs(i,s){var l=i.stateNode;if(l===null)return null;var h=kc(l);if(h===null)return null;l=h[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(i=i.type,h=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!h;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(t(231,s,typeof l));return l}var Ni=!1;if(d)try{var Di={};Object.defineProperty(Di,"passive",{get:function(){Ni=!0}}),window.addEventListener("test",Di,Di),window.removeEventListener("test",Di,Di)}catch{Ni=!1}function ic(i,s,l,h,p,g,w,R,b){var z=Array.prototype.slice.call(arguments,3);try{s.apply(l,z)}catch(J){this.onError(J)}}var Yr=!1,_r=null,Lo=!1,Fn=null,sc={onError:function(i){Yr=!0,_r=i}};function oc(i,s,l,h,p,g,w,R,b){Yr=!1,_r=null,ic.apply(sc,arguments)}function sl(i,s,l,h,p,g,w,R,b){if(oc.apply(this,arguments),Yr){if(Yr){var z=_r;Yr=!1,_r=null}else throw Error(t(198));Lo||(Lo=!0,Fn=z)}}function Zn(i){var s=i,l=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,(s.flags&4098)!==0&&(l=s.return),i=s.return;while(i)}return s.tag===3?l:null}function ol(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function ac(i){if(Zn(i)!==i)throw Error(t(188))}function lc(i){var s=i.alternate;if(!s){if(s=Zn(i),s===null)throw Error(t(188));return s!==i?null:i}for(var l=i,h=s;;){var p=l.return;if(p===null)break;var g=p.alternate;if(g===null){if(h=p.return,h!==null){l=h;continue}break}if(p.child===g.child){for(g=p.child;g;){if(g===l)return ac(p),i;if(g===h)return ac(p),s;g=g.sibling}throw Error(t(188))}if(l.return!==h.return)l=p,h=g;else{for(var w=!1,R=p.child;R;){if(R===l){w=!0,l=p,h=g;break}if(R===h){w=!0,h=p,l=g;break}R=R.sibling}if(!w){for(R=g.child;R;){if(R===l){w=!0,l=g,h=p;break}if(R===h){w=!0,h=g,l=p;break}R=R.sibling}if(!w)throw Error(t(189))}}if(l.alternate!==h)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?i:s}function uc(i){return i=lc(i),i!==null?ks(i):null}function ks(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var s=ks(i);if(s!==null)return s;i=i.sibling}return null}var al=e.unstable_scheduleCallback,Fo=e.unstable_cancelCallback,Ps=e.unstable_shouldYield,Xr=e.unstable_requestPaint,lt=e.unstable_now,tf=e.unstable_getCurrentPriorityLevel,Uo=e.unstable_ImmediatePriority,ll=e.unstable_UserBlockingPriority,bs=e.unstable_NormalPriority,ul=e.unstable_LowPriority,Bo=e.unstable_IdlePriority,Cs=null,Tn=null;function cc(i){if(Tn&&typeof Tn.onCommitFiberRoot=="function")try{Tn.onCommitFiberRoot(Cs,i,void 0,(i.current.flags&128)===128)}catch{}}var Sn=Math.clz32?Math.clz32:xs,vr=Math.log,Un=Math.LN2;function xs(i){return i>>>=0,i===0?32:31-(vr(i)/Un|0)|0}var wr=64,Vi=4194304;function Xe(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function Jr(i,s){var l=i.pendingLanes;if(l===0)return 0;var h=0,p=i.suspendedLanes,g=i.pingedLanes,w=l&268435455;if(w!==0){var R=w&~p;R!==0?h=Xe(R):(g&=w,g!==0&&(h=Xe(g)))}else w=l&~p,w!==0?h=Xe(w):g!==0&&(h=Xe(g));if(h===0)return 0;if(s!==0&&s!==h&&(s&p)===0&&(p=h&-h,g=s&-s,p>=g||p===16&&(g&4194240)!==0))return s;if((h&4)!==0&&(h|=l&16),s=i.entangledLanes,s!==0)for(i=i.entanglements,s&=h;0<s;)l=31-Sn(s),p=1<<l,h|=i[l],s&=~p;return h}function Ns(i,s){switch(i){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ds(i,s){for(var l=i.suspendedLanes,h=i.pingedLanes,p=i.expirationTimes,g=i.pendingLanes;0<g;){var w=31-Sn(g),R=1<<w,b=p[w];b===-1?((R&l)===0||(R&h)!==0)&&(p[w]=Ns(R,s)):b<=s&&(i.expiredLanes|=R),g&=~R}}function cl(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function hl(){var i=wr;return wr<<=1,(wr&4194240)===0&&(wr=64),i}function dl(i){for(var s=[],l=0;31>l;l++)s.push(i);return s}function Vs(i,s,l){i.pendingLanes|=s,s!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,s=31-Sn(s),i[s]=l}function nf(i,s){var l=i.pendingLanes&~s;i.pendingLanes=s,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=s,i.mutableReadLanes&=s,i.entangledLanes&=s,s=i.entanglements;var h=i.eventTimes;for(i=i.expirationTimes;0<l;){var p=31-Sn(l),g=1<<p;s[p]=0,h[p]=-1,i[p]=-1,l&=~g}}function fl(i,s){var l=i.entangledLanes|=s;for(i=i.entanglements;l;){var h=31-Sn(l),p=1<<h;p&s|i[h]&s&&(i[h]|=s),l&=~p}}var Ke=0;function Er(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var pl,jo,ml,gl,yl,Ir=!1,zo=[],Tr=null,Sr=null,qt=null,Os=new Map,Zr=new Map,An=[],hc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Oi(i,s){switch(i){case"focusin":case"focusout":Tr=null;break;case"dragenter":case"dragleave":Sr=null;break;case"mouseover":case"mouseout":qt=null;break;case"pointerover":case"pointerout":Os.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zr.delete(s.pointerId)}}function er(i,s,l,h,p,g){return i===null||i.nativeEvent!==g?(i={blockedOn:s,domEventName:l,eventSystemFlags:h,nativeEvent:g,targetContainers:[p]},s!==null&&(s=xl(s),s!==null&&jo(s)),i):(i.eventSystemFlags|=h,s=i.targetContainers,p!==null&&s.indexOf(p)===-1&&s.push(p),i)}function dc(i,s,l,h,p){switch(s){case"focusin":return Tr=er(Tr,i,s,l,h,p),!0;case"dragenter":return Sr=er(Sr,i,s,l,h,p),!0;case"mouseover":return qt=er(qt,i,s,l,h,p),!0;case"pointerover":var g=p.pointerId;return Os.set(g,er(Os.get(g)||null,i,s,l,h,p)),!0;case"gotpointercapture":return g=p.pointerId,Zr.set(g,er(Zr.get(g)||null,i,s,l,h,p)),!0}return!1}function $o(i){var s=Us(i.target);if(s!==null){var l=Zn(s);if(l!==null){if(s=l.tag,s===13){if(s=ol(l),s!==null){i.blockedOn=s,yl(i.priority,function(){ml(l)});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function ot(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var l=qo(i.domEventName,i.eventSystemFlags,s[0],i.nativeEvent);if(l===null){l=i.nativeEvent;var h=new l.constructor(l.type,l);bi=h,l.target.dispatchEvent(h),bi=null}else return s=xl(l),s!==null&&jo(s),i.blockedOn=l,!1;s.shift()}return!0}function fc(i,s,l){ot(i)&&l.delete(s)}function rf(){Ir=!1,Tr!==null&&ot(Tr)&&(Tr=null),Sr!==null&&ot(Sr)&&(Sr=null),qt!==null&&ot(qt)&&(qt=null),Os.forEach(fc),Zr.forEach(fc)}function Mi(i,s){i.blockedOn===s&&(i.blockedOn=null,Ir||(Ir=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,rf)))}function Li(i){function s(p){return Mi(p,i)}if(0<zo.length){Mi(zo[0],i);for(var l=1;l<zo.length;l++){var h=zo[l];h.blockedOn===i&&(h.blockedOn=null)}}for(Tr!==null&&Mi(Tr,i),Sr!==null&&Mi(Sr,i),qt!==null&&Mi(qt,i),Os.forEach(s),Zr.forEach(s),l=0;l<An.length;l++)h=An[l],h.blockedOn===i&&(h.blockedOn=null);for(;0<An.length&&(l=An[0],l.blockedOn===null);)$o(l),l.blockedOn===null&&An.shift()}var ei=ce.ReactCurrentBatchConfig,ti=!0;function Ar(i,s,l,h){var p=Ke,g=ei.transition;ei.transition=null;try{Ke=1,_l(i,s,l,h)}finally{Ke=p,ei.transition=g}}function pc(i,s,l,h){var p=Ke,g=ei.transition;ei.transition=null;try{Ke=4,_l(i,s,l,h)}finally{Ke=p,ei.transition=g}}function _l(i,s,l,h){if(ti){var p=qo(i,s,l,h);if(p===null)mf(i,s,h,Rr,l),Oi(i,h);else if(dc(p,i,s,l,h))h.stopPropagation();else if(Oi(i,h),s&4&&-1<hc.indexOf(i)){for(;p!==null;){var g=xl(p);if(g!==null&&pl(g),g=qo(i,s,l,h),g===null&&mf(i,s,h,Rr,l),g===p)break;p=g}p!==null&&h.stopPropagation()}else mf(i,s,h,null,l)}}var Rr=null;function qo(i,s,l,h){if(Rr=null,i=Mo(h),i=Us(i),i!==null)if(s=Zn(i),s===null)i=null;else if(l=s.tag,l===13){if(i=ol(s),i!==null)return i;i=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null);return Rr=i,null}function Ko(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(tf()){case Uo:return 1;case ll:return 4;case bs:case ul:return 16;case Bo:return 536870912;default:return 16}default:return 16}}var Rn=null,Go=null,ni=null;function mc(){if(ni)return ni;var i,s=Go,l=s.length,h,p="value"in Rn?Rn.value:Rn.textContent,g=p.length;for(i=0;i<l&&s[i]===p[i];i++);var w=l-i;for(h=1;h<=w&&s[l-h]===p[g-h];h++);return ni=p.slice(i,1<h?1-h:void 0)}function Ms(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function kr(){return!0}function vl(){return!1}function Xt(i){function s(l,h,p,g,w){this._reactName=l,this._targetInst=p,this.type=h,this.nativeEvent=g,this.target=w,this.currentTarget=null;for(var R in i)i.hasOwnProperty(R)&&(l=i[R],this[R]=l?l(g):g[R]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?kr:vl,this.isPropagationStopped=vl,this}return de(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=kr)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=kr)},persist:function(){},isPersistent:kr}),s}var Pr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ls=Xt(Pr),Fi=de({},Pr,{view:0,detail:0}),Wo=Xt(Fi),Ho,Qo,kn,Fs=de({},Fi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Oe,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==kn&&(kn&&i.type==="mousemove"?(Ho=i.screenX-kn.screenX,Qo=i.screenY-kn.screenY):Qo=Ho=0,kn=i),Ho)},movementY:function(i){return"movementY"in i?i.movementY:Qo}}),wl=Xt(Fs),gc=de({},Fs,{dataTransfer:0}),yc=Xt(gc),Yo=de({},Fi,{relatedTarget:0}),Kt=Xt(Yo),_c=de({},Pr,{animationName:0,elapsedTime:0,pseudoElement:0}),vc=Xt(_c),Ui=de({},Pr,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),c=Xt(Ui),y=de({},Pr,{data:0}),_=Xt(y),I={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},U={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ae(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=$[i])?!!s[i]:!1}function Oe(){return ae}var kt=de({},Fi,{key:function(i){if(i.key){var s=I[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=Ms(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?U[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Oe,charCode:function(i){return i.type==="keypress"?Ms(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Ms(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),et=Xt(kt),bt=de({},Fs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pn=Xt(bt),ri=de({},Fi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Oe}),br=Xt(ri),Cr=de({},Pr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xo=Xt(Cr),El=de({},Fs,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),eA=Xt(El),tA=[9,13,27,32],sf=d&&"CompositionEvent"in window,Il=null;d&&"documentMode"in document&&(Il=document.documentMode);var nA=d&&"TextEvent"in window&&!Il,Zg=d&&(!sf||Il&&8<Il&&11>=Il),ey=" ",ty=!1;function ny(i,s){switch(i){case"keyup":return tA.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ry(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Jo=!1;function rA(i,s){switch(i){case"compositionend":return ry(s);case"keypress":return s.which!==32?null:(ty=!0,ey);case"textInput":return i=s.data,i===ey&&ty?null:i;default:return null}}function iA(i,s){if(Jo)return i==="compositionend"||!sf&&ny(i,s)?(i=mc(),ni=Go=Rn=null,Jo=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Zg&&s.locale!=="ko"?null:s.data;default:return null}}var sA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function iy(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!sA[i.type]:s==="textarea"}function sy(i,s,l,h){Ci(h),s=Sc(s,"onChange"),0<s.length&&(l=new Ls("onChange","change",null,l,h),i.push({event:l,listeners:s}))}var Tl=null,Sl=null;function oA(i){Ty(i,0)}function wc(i){var s=ra(i);if(Le(s))return i}function aA(i,s){if(i==="change")return s}var oy=!1;if(d){var of;if(d){var af="oninput"in document;if(!af){var ay=document.createElement("div");ay.setAttribute("oninput","return;"),af=typeof ay.oninput=="function"}of=af}else of=!1;oy=of&&(!document.documentMode||9<document.documentMode)}function ly(){Tl&&(Tl.detachEvent("onpropertychange",uy),Sl=Tl=null)}function uy(i){if(i.propertyName==="value"&&wc(Sl)){var s=[];sy(s,Sl,i,Mo(i)),rc(oA,s)}}function lA(i,s,l){i==="focusin"?(ly(),Tl=s,Sl=l,Tl.attachEvent("onpropertychange",uy)):i==="focusout"&&ly()}function uA(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return wc(Sl)}function cA(i,s){if(i==="click")return wc(s)}function hA(i,s){if(i==="input"||i==="change")return wc(s)}function dA(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var tr=typeof Object.is=="function"?Object.is:dA;function Al(i,s){if(tr(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var l=Object.keys(i),h=Object.keys(s);if(l.length!==h.length)return!1;for(h=0;h<l.length;h++){var p=l[h];if(!f.call(s,p)||!tr(i[p],s[p]))return!1}return!0}function cy(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function hy(i,s){var l=cy(i);i=0;for(var h;l;){if(l.nodeType===3){if(h=i+l.textContent.length,i<=s&&h>=s)return{node:l,offset:s-i};i=h}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=cy(l)}}function dy(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?dy(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function fy(){for(var i=window,s=Ye();s instanceof i.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)i=s.contentWindow;else break;s=Ye(i.document)}return s}function lf(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}function fA(i){var s=fy(),l=i.focusedElem,h=i.selectionRange;if(s!==l&&l&&l.ownerDocument&&dy(l.ownerDocument.documentElement,l)){if(h!==null&&lf(l)){if(s=h.start,i=h.end,i===void 0&&(i=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(i,l.value.length);else if(i=(s=l.ownerDocument||document)&&s.defaultView||window,i.getSelection){i=i.getSelection();var p=l.textContent.length,g=Math.min(h.start,p);h=h.end===void 0?g:Math.min(h.end,p),!i.extend&&g>h&&(p=h,h=g,g=p),p=hy(l,g);var w=hy(l,h);p&&w&&(i.rangeCount!==1||i.anchorNode!==p.node||i.anchorOffset!==p.offset||i.focusNode!==w.node||i.focusOffset!==w.offset)&&(s=s.createRange(),s.setStart(p.node,p.offset),i.removeAllRanges(),g>h?(i.addRange(s),i.extend(w.node,w.offset)):(s.setEnd(w.node,w.offset),i.addRange(s)))}}for(s=[],i=l;i=i.parentNode;)i.nodeType===1&&s.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<s.length;l++)i=s[l],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var pA=d&&"documentMode"in document&&11>=document.documentMode,Zo=null,uf=null,Rl=null,cf=!1;function py(i,s,l){var h=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;cf||Zo==null||Zo!==Ye(h)||(h=Zo,"selectionStart"in h&&lf(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),Rl&&Al(Rl,h)||(Rl=h,h=Sc(uf,"onSelect"),0<h.length&&(s=new Ls("onSelect","select",null,s,l),i.push({event:s,listeners:h}),s.target=Zo)))}function Ec(i,s){var l={};return l[i.toLowerCase()]=s.toLowerCase(),l["Webkit"+i]="webkit"+s,l["Moz"+i]="moz"+s,l}var ea={animationend:Ec("Animation","AnimationEnd"),animationiteration:Ec("Animation","AnimationIteration"),animationstart:Ec("Animation","AnimationStart"),transitionend:Ec("Transition","TransitionEnd")},hf={},my={};d&&(my=document.createElement("div").style,"AnimationEvent"in window||(delete ea.animationend.animation,delete ea.animationiteration.animation,delete ea.animationstart.animation),"TransitionEvent"in window||delete ea.transitionend.transition);function Ic(i){if(hf[i])return hf[i];if(!ea[i])return i;var s=ea[i],l;for(l in s)if(s.hasOwnProperty(l)&&l in my)return hf[i]=s[l];return i}var gy=Ic("animationend"),yy=Ic("animationiteration"),_y=Ic("animationstart"),vy=Ic("transitionend"),wy=new Map,Ey="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Bi(i,s){wy.set(i,s),a(s,[i])}for(var df=0;df<Ey.length;df++){var ff=Ey[df],mA=ff.toLowerCase(),gA=ff[0].toUpperCase()+ff.slice(1);Bi(mA,"on"+gA)}Bi(gy,"onAnimationEnd"),Bi(yy,"onAnimationIteration"),Bi(_y,"onAnimationStart"),Bi("dblclick","onDoubleClick"),Bi("focusin","onFocus"),Bi("focusout","onBlur"),Bi(vy,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var kl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yA=new Set("cancel close invalid load scroll toggle".split(" ").concat(kl));function Iy(i,s,l){var h=i.type||"unknown-event";i.currentTarget=l,sl(h,s,void 0,i),i.currentTarget=null}function Ty(i,s){s=(s&4)!==0;for(var l=0;l<i.length;l++){var h=i[l],p=h.event;h=h.listeners;e:{var g=void 0;if(s)for(var w=h.length-1;0<=w;w--){var R=h[w],b=R.instance,z=R.currentTarget;if(R=R.listener,b!==g&&p.isPropagationStopped())break e;Iy(p,R,z),g=b}else for(w=0;w<h.length;w++){if(R=h[w],b=R.instance,z=R.currentTarget,R=R.listener,b!==g&&p.isPropagationStopped())break e;Iy(p,R,z),g=b}}}if(Lo)throw i=Fn,Lo=!1,Fn=null,i}function ut(i,s){var l=s[Ef];l===void 0&&(l=s[Ef]=new Set);var h=i+"__bubble";l.has(h)||(Sy(s,i,2,!1),l.add(h))}function pf(i,s,l){var h=0;s&&(h|=4),Sy(l,i,h,s)}var Tc="_reactListening"+Math.random().toString(36).slice(2);function Pl(i){if(!i[Tc]){i[Tc]=!0,r.forEach(function(l){l!=="selectionchange"&&(yA.has(l)||pf(l,!1,i),pf(l,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[Tc]||(s[Tc]=!0,pf("selectionchange",!1,s))}}function Sy(i,s,l,h){switch(Ko(s)){case 1:var p=Ar;break;case 4:p=pc;break;default:p=_l}l=p.bind(null,s,l,i),p=void 0,!Ni||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(p=!0),h?p!==void 0?i.addEventListener(s,l,{capture:!0,passive:p}):i.addEventListener(s,l,!0):p!==void 0?i.addEventListener(s,l,{passive:p}):i.addEventListener(s,l,!1)}function mf(i,s,l,h,p){var g=h;if((s&1)===0&&(s&2)===0&&h!==null)e:for(;;){if(h===null)return;var w=h.tag;if(w===3||w===4){var R=h.stateNode.containerInfo;if(R===p||R.nodeType===8&&R.parentNode===p)break;if(w===4)for(w=h.return;w!==null;){var b=w.tag;if((b===3||b===4)&&(b=w.stateNode.containerInfo,b===p||b.nodeType===8&&b.parentNode===p))return;w=w.return}for(;R!==null;){if(w=Us(R),w===null)return;if(b=w.tag,b===5||b===6){h=g=w;continue e}R=R.parentNode}}h=h.return}rc(function(){var z=g,J=Mo(l),Z=[];e:{var X=wy.get(i);if(X!==void 0){var fe=Ls,ye=i;switch(i){case"keypress":if(Ms(l)===0)break e;case"keydown":case"keyup":fe=et;break;case"focusin":ye="focus",fe=Kt;break;case"focusout":ye="blur",fe=Kt;break;case"beforeblur":case"afterblur":fe=Kt;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":fe=wl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":fe=yc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":fe=br;break;case gy:case yy:case _y:fe=vc;break;case vy:fe=Xo;break;case"scroll":fe=Wo;break;case"wheel":fe=eA;break;case"copy":case"cut":case"paste":fe=c;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":fe=Pn}var Ie=(s&4)!==0,Pt=!Ie&&i==="scroll",F=Ie?X!==null?X+"Capture":null:X;Ie=[];for(var D=z,j;D!==null;){j=D;var ie=j.stateNode;if(j.tag===5&&ie!==null&&(j=ie,F!==null&&(ie=Rs(D,F),ie!=null&&Ie.push(bl(D,ie,j)))),Pt)break;D=D.return}0<Ie.length&&(X=new fe(X,ye,null,l,J),Z.push({event:X,listeners:Ie}))}}if((s&7)===0){e:{if(X=i==="mouseover"||i==="pointerover",fe=i==="mouseout"||i==="pointerout",X&&l!==bi&&(ye=l.relatedTarget||l.fromElement)&&(Us(ye)||ye[ii]))break e;if((fe||X)&&(X=J.window===J?J:(X=J.ownerDocument)?X.defaultView||X.parentWindow:window,fe?(ye=l.relatedTarget||l.toElement,fe=z,ye=ye?Us(ye):null,ye!==null&&(Pt=Zn(ye),ye!==Pt||ye.tag!==5&&ye.tag!==6)&&(ye=null)):(fe=null,ye=z),fe!==ye)){if(Ie=wl,ie="onMouseLeave",F="onMouseEnter",D="mouse",(i==="pointerout"||i==="pointerover")&&(Ie=Pn,ie="onPointerLeave",F="onPointerEnter",D="pointer"),Pt=fe==null?X:ra(fe),j=ye==null?X:ra(ye),X=new Ie(ie,D+"leave",fe,l,J),X.target=Pt,X.relatedTarget=j,ie=null,Us(J)===z&&(Ie=new Ie(F,D+"enter",ye,l,J),Ie.target=j,Ie.relatedTarget=Pt,ie=Ie),Pt=ie,fe&&ye)t:{for(Ie=fe,F=ye,D=0,j=Ie;j;j=ta(j))D++;for(j=0,ie=F;ie;ie=ta(ie))j++;for(;0<D-j;)Ie=ta(Ie),D--;for(;0<j-D;)F=ta(F),j--;for(;D--;){if(Ie===F||F!==null&&Ie===F.alternate)break t;Ie=ta(Ie),F=ta(F)}Ie=null}else Ie=null;fe!==null&&Ay(Z,X,fe,Ie,!1),ye!==null&&Pt!==null&&Ay(Z,Pt,ye,Ie,!0)}}e:{if(X=z?ra(z):window,fe=X.nodeName&&X.nodeName.toLowerCase(),fe==="select"||fe==="input"&&X.type==="file")var Se=aA;else if(iy(X))if(oy)Se=hA;else{Se=uA;var be=lA}else(fe=X.nodeName)&&fe.toLowerCase()==="input"&&(X.type==="checkbox"||X.type==="radio")&&(Se=cA);if(Se&&(Se=Se(i,z))){sy(Z,Se,l,J);break e}be&&be(i,X,z),i==="focusout"&&(be=X._wrapperState)&&be.controlled&&X.type==="number"&&It(X,"number",X.value)}switch(be=z?ra(z):window,i){case"focusin":(iy(be)||be.contentEditable==="true")&&(Zo=be,uf=z,Rl=null);break;case"focusout":Rl=uf=Zo=null;break;case"mousedown":cf=!0;break;case"contextmenu":case"mouseup":case"dragend":cf=!1,py(Z,l,J);break;case"selectionchange":if(pA)break;case"keydown":case"keyup":py(Z,l,J)}var Ce;if(sf)e:{switch(i){case"compositionstart":var Ne="onCompositionStart";break e;case"compositionend":Ne="onCompositionEnd";break e;case"compositionupdate":Ne="onCompositionUpdate";break e}Ne=void 0}else Jo?ny(i,l)&&(Ne="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(Ne="onCompositionStart");Ne&&(Zg&&l.locale!=="ko"&&(Jo||Ne!=="onCompositionStart"?Ne==="onCompositionEnd"&&Jo&&(Ce=mc()):(Rn=J,Go="value"in Rn?Rn.value:Rn.textContent,Jo=!0)),be=Sc(z,Ne),0<be.length&&(Ne=new _(Ne,i,null,l,J),Z.push({event:Ne,listeners:be}),Ce?Ne.data=Ce:(Ce=ry(l),Ce!==null&&(Ne.data=Ce)))),(Ce=nA?rA(i,l):iA(i,l))&&(z=Sc(z,"onBeforeInput"),0<z.length&&(J=new _("onBeforeInput","beforeinput",null,l,J),Z.push({event:J,listeners:z}),J.data=Ce))}Ty(Z,s)})}function bl(i,s,l){return{instance:i,listener:s,currentTarget:l}}function Sc(i,s){for(var l=s+"Capture",h=[];i!==null;){var p=i,g=p.stateNode;p.tag===5&&g!==null&&(p=g,g=Rs(i,l),g!=null&&h.unshift(bl(i,g,p)),g=Rs(i,s),g!=null&&h.push(bl(i,g,p))),i=i.return}return h}function ta(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function Ay(i,s,l,h,p){for(var g=s._reactName,w=[];l!==null&&l!==h;){var R=l,b=R.alternate,z=R.stateNode;if(b!==null&&b===h)break;R.tag===5&&z!==null&&(R=z,p?(b=Rs(l,g),b!=null&&w.unshift(bl(l,b,R))):p||(b=Rs(l,g),b!=null&&w.push(bl(l,b,R)))),l=l.return}w.length!==0&&i.push({event:s,listeners:w})}var _A=/\r\n?/g,vA=/\u0000|\uFFFD/g;function Ry(i){return(typeof i=="string"?i:""+i).replace(_A,`
`).replace(vA,"")}function Ac(i,s,l){if(s=Ry(s),Ry(i)!==s&&l)throw Error(t(425))}function Rc(){}var gf=null,yf=null;function _f(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var vf=typeof setTimeout=="function"?setTimeout:void 0,wA=typeof clearTimeout=="function"?clearTimeout:void 0,ky=typeof Promise=="function"?Promise:void 0,EA=typeof queueMicrotask=="function"?queueMicrotask:typeof ky<"u"?function(i){return ky.resolve(null).then(i).catch(IA)}:vf;function IA(i){setTimeout(function(){throw i})}function wf(i,s){var l=s,h=0;do{var p=l.nextSibling;if(i.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(h===0){i.removeChild(p),Li(s);return}h--}else l!=="$"&&l!=="$?"&&l!=="$!"||h++;l=p}while(l);Li(s)}function ji(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return i}function Py(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return i;s--}else l==="/$"&&s++}i=i.previousSibling}return null}var na=Math.random().toString(36).slice(2),xr="__reactFiber$"+na,Cl="__reactProps$"+na,ii="__reactContainer$"+na,Ef="__reactEvents$"+na,TA="__reactListeners$"+na,SA="__reactHandles$"+na;function Us(i){var s=i[xr];if(s)return s;for(var l=i.parentNode;l;){if(s=l[ii]||l[xr]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(i=Py(i);i!==null;){if(l=i[xr])return l;i=Py(i)}return s}i=l,l=i.parentNode}return null}function xl(i){return i=i[xr]||i[ii],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function ra(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function kc(i){return i[Cl]||null}var If=[],ia=-1;function zi(i){return{current:i}}function ct(i){0>ia||(i.current=If[ia],If[ia]=null,ia--)}function at(i,s){ia++,If[ia]=i.current,i.current=s}var $i={},Jt=zi($i),mn=zi(!1),Bs=$i;function sa(i,s){var l=i.type.contextTypes;if(!l)return $i;var h=i.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===s)return h.__reactInternalMemoizedMaskedChildContext;var p={},g;for(g in l)p[g]=s[g];return h&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=s,i.__reactInternalMemoizedMaskedChildContext=p),p}function gn(i){return i=i.childContextTypes,i!=null}function Pc(){ct(mn),ct(Jt)}function by(i,s,l){if(Jt.current!==$i)throw Error(t(168));at(Jt,s),at(mn,l)}function Cy(i,s,l){var h=i.stateNode;if(s=s.childContextTypes,typeof h.getChildContext!="function")return l;h=h.getChildContext();for(var p in h)if(!(p in s))throw Error(t(108,G(i)||"Unknown",p));return de({},l,h)}function bc(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||$i,Bs=Jt.current,at(Jt,i),at(mn,mn.current),!0}function xy(i,s,l){var h=i.stateNode;if(!h)throw Error(t(169));l?(i=Cy(i,s,Bs),h.__reactInternalMemoizedMergedChildContext=i,ct(mn),ct(Jt),at(Jt,i)):ct(mn),at(mn,l)}var si=null,Cc=!1,Tf=!1;function Ny(i){si===null?si=[i]:si.push(i)}function AA(i){Cc=!0,Ny(i)}function qi(){if(!Tf&&si!==null){Tf=!0;var i=0,s=Ke;try{var l=si;for(Ke=1;i<l.length;i++){var h=l[i];do h=h(!0);while(h!==null)}si=null,Cc=!1}catch(p){throw si!==null&&(si=si.slice(i+1)),al(Uo,qi),p}finally{Ke=s,Tf=!1}}return null}var oa=[],aa=0,xc=null,Nc=0,Bn=[],jn=0,js=null,oi=1,ai="";function zs(i,s){oa[aa++]=Nc,oa[aa++]=xc,xc=i,Nc=s}function Dy(i,s,l){Bn[jn++]=oi,Bn[jn++]=ai,Bn[jn++]=js,js=i;var h=oi;i=ai;var p=32-Sn(h)-1;h&=~(1<<p),l+=1;var g=32-Sn(s)+p;if(30<g){var w=p-p%5;g=(h&(1<<w)-1).toString(32),h>>=w,p-=w,oi=1<<32-Sn(s)+p|l<<p|h,ai=g+i}else oi=1<<g|l<<p|h,ai=i}function Sf(i){i.return!==null&&(zs(i,1),Dy(i,1,0))}function Af(i){for(;i===xc;)xc=oa[--aa],oa[aa]=null,Nc=oa[--aa],oa[aa]=null;for(;i===js;)js=Bn[--jn],Bn[jn]=null,ai=Bn[--jn],Bn[jn]=null,oi=Bn[--jn],Bn[jn]=null}var bn=null,Cn=null,ft=!1,nr=null;function Vy(i,s){var l=Kn(5,null,null,0);l.elementType="DELETED",l.stateNode=s,l.return=i,s=i.deletions,s===null?(i.deletions=[l],i.flags|=16):s.push(l)}function Oy(i,s){switch(i.tag){case 5:var l=i.type;return s=s.nodeType!==1||l.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(i.stateNode=s,bn=i,Cn=ji(s.firstChild),!0):!1;case 6:return s=i.pendingProps===""||s.nodeType!==3?null:s,s!==null?(i.stateNode=s,bn=i,Cn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(l=js!==null?{id:oi,overflow:ai}:null,i.memoizedState={dehydrated:s,treeContext:l,retryLane:1073741824},l=Kn(18,null,null,0),l.stateNode=s,l.return=i,i.child=l,bn=i,Cn=null,!0):!1;default:return!1}}function Rf(i){return(i.mode&1)!==0&&(i.flags&128)===0}function kf(i){if(ft){var s=Cn;if(s){var l=s;if(!Oy(i,s)){if(Rf(i))throw Error(t(418));s=ji(l.nextSibling);var h=bn;s&&Oy(i,s)?Vy(h,l):(i.flags=i.flags&-4097|2,ft=!1,bn=i)}}else{if(Rf(i))throw Error(t(418));i.flags=i.flags&-4097|2,ft=!1,bn=i}}}function My(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;bn=i}function Dc(i){if(i!==bn)return!1;if(!ft)return My(i),ft=!0,!1;var s;if((s=i.tag!==3)&&!(s=i.tag!==5)&&(s=i.type,s=s!=="head"&&s!=="body"&&!_f(i.type,i.memoizedProps)),s&&(s=Cn)){if(Rf(i))throw Ly(),Error(t(418));for(;s;)Vy(i,s),s=ji(s.nextSibling)}if(My(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="/$"){if(s===0){Cn=ji(i.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++}i=i.nextSibling}Cn=null}}else Cn=bn?ji(i.stateNode.nextSibling):null;return!0}function Ly(){for(var i=Cn;i;)i=ji(i.nextSibling)}function la(){Cn=bn=null,ft=!1}function Pf(i){nr===null?nr=[i]:nr.push(i)}var RA=ce.ReactCurrentBatchConfig;function Nl(i,s,l){if(i=l.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var h=l.stateNode}if(!h)throw Error(t(147,i));var p=h,g=""+i;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===g?s.ref:(s=function(w){var R=p.refs;w===null?delete R[g]:R[g]=w},s._stringRef=g,s)}if(typeof i!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,i))}return i}function Vc(i,s){throw i=Object.prototype.toString.call(s),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i))}function Fy(i){var s=i._init;return s(i._payload)}function Uy(i){function s(F,D){if(i){var j=F.deletions;j===null?(F.deletions=[D],F.flags|=16):j.push(D)}}function l(F,D){if(!i)return null;for(;D!==null;)s(F,D),D=D.sibling;return null}function h(F,D){for(F=new Map;D!==null;)D.key!==null?F.set(D.key,D):F.set(D.index,D),D=D.sibling;return F}function p(F,D){return F=Ji(F,D),F.index=0,F.sibling=null,F}function g(F,D,j){return F.index=j,i?(j=F.alternate,j!==null?(j=j.index,j<D?(F.flags|=2,D):j):(F.flags|=2,D)):(F.flags|=1048576,D)}function w(F){return i&&F.alternate===null&&(F.flags|=2),F}function R(F,D,j,ie){return D===null||D.tag!==6?(D=vp(j,F.mode,ie),D.return=F,D):(D=p(D,j),D.return=F,D)}function b(F,D,j,ie){var Se=j.type;return Se===P?J(F,D,j.props.children,ie,j.key):D!==null&&(D.elementType===Se||typeof Se=="object"&&Se!==null&&Se.$$typeof===it&&Fy(Se)===D.type)?(ie=p(D,j.props),ie.ref=Nl(F,D,j),ie.return=F,ie):(ie=ih(j.type,j.key,j.props,null,F.mode,ie),ie.ref=Nl(F,D,j),ie.return=F,ie)}function z(F,D,j,ie){return D===null||D.tag!==4||D.stateNode.containerInfo!==j.containerInfo||D.stateNode.implementation!==j.implementation?(D=wp(j,F.mode,ie),D.return=F,D):(D=p(D,j.children||[]),D.return=F,D)}function J(F,D,j,ie,Se){return D===null||D.tag!==7?(D=Ys(j,F.mode,ie,Se),D.return=F,D):(D=p(D,j),D.return=F,D)}function Z(F,D,j){if(typeof D=="string"&&D!==""||typeof D=="number")return D=vp(""+D,F.mode,j),D.return=F,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case he:return j=ih(D.type,D.key,D.props,null,F.mode,j),j.ref=Nl(F,null,D),j.return=F,j;case ue:return D=wp(D,F.mode,j),D.return=F,D;case it:var ie=D._init;return Z(F,ie(D._payload),j)}if(Tt(D)||Ae(D))return D=Ys(D,F.mode,j,null),D.return=F,D;Vc(F,D)}return null}function X(F,D,j,ie){var Se=D!==null?D.key:null;if(typeof j=="string"&&j!==""||typeof j=="number")return Se!==null?null:R(F,D,""+j,ie);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case he:return j.key===Se?b(F,D,j,ie):null;case ue:return j.key===Se?z(F,D,j,ie):null;case it:return Se=j._init,X(F,D,Se(j._payload),ie)}if(Tt(j)||Ae(j))return Se!==null?null:J(F,D,j,ie,null);Vc(F,j)}return null}function fe(F,D,j,ie,Se){if(typeof ie=="string"&&ie!==""||typeof ie=="number")return F=F.get(j)||null,R(D,F,""+ie,Se);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case he:return F=F.get(ie.key===null?j:ie.key)||null,b(D,F,ie,Se);case ue:return F=F.get(ie.key===null?j:ie.key)||null,z(D,F,ie,Se);case it:var be=ie._init;return fe(F,D,j,be(ie._payload),Se)}if(Tt(ie)||Ae(ie))return F=F.get(j)||null,J(D,F,ie,Se,null);Vc(D,ie)}return null}function ye(F,D,j,ie){for(var Se=null,be=null,Ce=D,Ne=D=0,jt=null;Ce!==null&&Ne<j.length;Ne++){Ce.index>Ne?(jt=Ce,Ce=null):jt=Ce.sibling;var Qe=X(F,Ce,j[Ne],ie);if(Qe===null){Ce===null&&(Ce=jt);break}i&&Ce&&Qe.alternate===null&&s(F,Ce),D=g(Qe,D,Ne),be===null?Se=Qe:be.sibling=Qe,be=Qe,Ce=jt}if(Ne===j.length)return l(F,Ce),ft&&zs(F,Ne),Se;if(Ce===null){for(;Ne<j.length;Ne++)Ce=Z(F,j[Ne],ie),Ce!==null&&(D=g(Ce,D,Ne),be===null?Se=Ce:be.sibling=Ce,be=Ce);return ft&&zs(F,Ne),Se}for(Ce=h(F,Ce);Ne<j.length;Ne++)jt=fe(Ce,F,Ne,j[Ne],ie),jt!==null&&(i&&jt.alternate!==null&&Ce.delete(jt.key===null?Ne:jt.key),D=g(jt,D,Ne),be===null?Se=jt:be.sibling=jt,be=jt);return i&&Ce.forEach(function(Zi){return s(F,Zi)}),ft&&zs(F,Ne),Se}function Ie(F,D,j,ie){var Se=Ae(j);if(typeof Se!="function")throw Error(t(150));if(j=Se.call(j),j==null)throw Error(t(151));for(var be=Se=null,Ce=D,Ne=D=0,jt=null,Qe=j.next();Ce!==null&&!Qe.done;Ne++,Qe=j.next()){Ce.index>Ne?(jt=Ce,Ce=null):jt=Ce.sibling;var Zi=X(F,Ce,Qe.value,ie);if(Zi===null){Ce===null&&(Ce=jt);break}i&&Ce&&Zi.alternate===null&&s(F,Ce),D=g(Zi,D,Ne),be===null?Se=Zi:be.sibling=Zi,be=Zi,Ce=jt}if(Qe.done)return l(F,Ce),ft&&zs(F,Ne),Se;if(Ce===null){for(;!Qe.done;Ne++,Qe=j.next())Qe=Z(F,Qe.value,ie),Qe!==null&&(D=g(Qe,D,Ne),be===null?Se=Qe:be.sibling=Qe,be=Qe);return ft&&zs(F,Ne),Se}for(Ce=h(F,Ce);!Qe.done;Ne++,Qe=j.next())Qe=fe(Ce,F,Ne,Qe.value,ie),Qe!==null&&(i&&Qe.alternate!==null&&Ce.delete(Qe.key===null?Ne:Qe.key),D=g(Qe,D,Ne),be===null?Se=Qe:be.sibling=Qe,be=Qe);return i&&Ce.forEach(function(sR){return s(F,sR)}),ft&&zs(F,Ne),Se}function Pt(F,D,j,ie){if(typeof j=="object"&&j!==null&&j.type===P&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case he:e:{for(var Se=j.key,be=D;be!==null;){if(be.key===Se){if(Se=j.type,Se===P){if(be.tag===7){l(F,be.sibling),D=p(be,j.props.children),D.return=F,F=D;break e}}else if(be.elementType===Se||typeof Se=="object"&&Se!==null&&Se.$$typeof===it&&Fy(Se)===be.type){l(F,be.sibling),D=p(be,j.props),D.ref=Nl(F,be,j),D.return=F,F=D;break e}l(F,be);break}else s(F,be);be=be.sibling}j.type===P?(D=Ys(j.props.children,F.mode,ie,j.key),D.return=F,F=D):(ie=ih(j.type,j.key,j.props,null,F.mode,ie),ie.ref=Nl(F,D,j),ie.return=F,F=ie)}return w(F);case ue:e:{for(be=j.key;D!==null;){if(D.key===be)if(D.tag===4&&D.stateNode.containerInfo===j.containerInfo&&D.stateNode.implementation===j.implementation){l(F,D.sibling),D=p(D,j.children||[]),D.return=F,F=D;break e}else{l(F,D);break}else s(F,D);D=D.sibling}D=wp(j,F.mode,ie),D.return=F,F=D}return w(F);case it:return be=j._init,Pt(F,D,be(j._payload),ie)}if(Tt(j))return ye(F,D,j,ie);if(Ae(j))return Ie(F,D,j,ie);Vc(F,j)}return typeof j=="string"&&j!==""||typeof j=="number"?(j=""+j,D!==null&&D.tag===6?(l(F,D.sibling),D=p(D,j),D.return=F,F=D):(l(F,D),D=vp(j,F.mode,ie),D.return=F,F=D),w(F)):l(F,D)}return Pt}var ua=Uy(!0),By=Uy(!1),Oc=zi(null),Mc=null,ca=null,bf=null;function Cf(){bf=ca=Mc=null}function xf(i){var s=Oc.current;ct(Oc),i._currentValue=s}function Nf(i,s,l){for(;i!==null;){var h=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,h!==null&&(h.childLanes|=s)):h!==null&&(h.childLanes&s)!==s&&(h.childLanes|=s),i===l)break;i=i.return}}function ha(i,s){Mc=i,bf=ca=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&s)!==0&&(yn=!0),i.firstContext=null)}function zn(i){var s=i._currentValue;if(bf!==i)if(i={context:i,memoizedValue:s,next:null},ca===null){if(Mc===null)throw Error(t(308));ca=i,Mc.dependencies={lanes:0,firstContext:i}}else ca=ca.next=i;return s}var $s=null;function Df(i){$s===null?$s=[i]:$s.push(i)}function jy(i,s,l,h){var p=s.interleaved;return p===null?(l.next=l,Df(s)):(l.next=p.next,p.next=l),s.interleaved=l,li(i,h)}function li(i,s){i.lanes|=s;var l=i.alternate;for(l!==null&&(l.lanes|=s),l=i,i=i.return;i!==null;)i.childLanes|=s,l=i.alternate,l!==null&&(l.childLanes|=s),l=i,i=i.return;return l.tag===3?l.stateNode:null}var Ki=!1;function Vf(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zy(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function ui(i,s){return{eventTime:i,lane:s,tag:0,payload:null,callback:null,next:null}}function Gi(i,s,l){var h=i.updateQueue;if(h===null)return null;if(h=h.shared,(He&2)!==0){var p=h.pending;return p===null?s.next=s:(s.next=p.next,p.next=s),h.pending=s,li(i,l)}return p=h.interleaved,p===null?(s.next=s,Df(h)):(s.next=p.next,p.next=s),h.interleaved=s,li(i,l)}function Lc(i,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194240)!==0)){var h=s.lanes;h&=i.pendingLanes,l|=h,s.lanes=l,fl(i,l)}}function $y(i,s){var l=i.updateQueue,h=i.alternate;if(h!==null&&(h=h.updateQueue,l===h)){var p=null,g=null;if(l=l.firstBaseUpdate,l!==null){do{var w={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};g===null?p=g=w:g=g.next=w,l=l.next}while(l!==null);g===null?p=g=s:g=g.next=s}else p=g=s;l={baseState:h.baseState,firstBaseUpdate:p,lastBaseUpdate:g,shared:h.shared,effects:h.effects},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=s:i.next=s,l.lastBaseUpdate=s}function Fc(i,s,l,h){var p=i.updateQueue;Ki=!1;var g=p.firstBaseUpdate,w=p.lastBaseUpdate,R=p.shared.pending;if(R!==null){p.shared.pending=null;var b=R,z=b.next;b.next=null,w===null?g=z:w.next=z,w=b;var J=i.alternate;J!==null&&(J=J.updateQueue,R=J.lastBaseUpdate,R!==w&&(R===null?J.firstBaseUpdate=z:R.next=z,J.lastBaseUpdate=b))}if(g!==null){var Z=p.baseState;w=0,J=z=b=null,R=g;do{var X=R.lane,fe=R.eventTime;if((h&X)===X){J!==null&&(J=J.next={eventTime:fe,lane:0,tag:R.tag,payload:R.payload,callback:R.callback,next:null});e:{var ye=i,Ie=R;switch(X=s,fe=l,Ie.tag){case 1:if(ye=Ie.payload,typeof ye=="function"){Z=ye.call(fe,Z,X);break e}Z=ye;break e;case 3:ye.flags=ye.flags&-65537|128;case 0:if(ye=Ie.payload,X=typeof ye=="function"?ye.call(fe,Z,X):ye,X==null)break e;Z=de({},Z,X);break e;case 2:Ki=!0}}R.callback!==null&&R.lane!==0&&(i.flags|=64,X=p.effects,X===null?p.effects=[R]:X.push(R))}else fe={eventTime:fe,lane:X,tag:R.tag,payload:R.payload,callback:R.callback,next:null},J===null?(z=J=fe,b=Z):J=J.next=fe,w|=X;if(R=R.next,R===null){if(R=p.shared.pending,R===null)break;X=R,R=X.next,X.next=null,p.lastBaseUpdate=X,p.shared.pending=null}}while(!0);if(J===null&&(b=Z),p.baseState=b,p.firstBaseUpdate=z,p.lastBaseUpdate=J,s=p.shared.interleaved,s!==null){p=s;do w|=p.lane,p=p.next;while(p!==s)}else g===null&&(p.shared.lanes=0);Gs|=w,i.lanes=w,i.memoizedState=Z}}function qy(i,s,l){if(i=s.effects,s.effects=null,i!==null)for(s=0;s<i.length;s++){var h=i[s],p=h.callback;if(p!==null){if(h.callback=null,h=l,typeof p!="function")throw Error(t(191,p));p.call(h)}}}var Dl={},Nr=zi(Dl),Vl=zi(Dl),Ol=zi(Dl);function qs(i){if(i===Dl)throw Error(t(174));return i}function Of(i,s){switch(at(Ol,s),at(Vl,i),at(Nr,Dl),i=s.nodeType,i){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:gr(null,"");break;default:i=i===8?s.parentNode:s,s=i.namespaceURI||null,i=i.tagName,s=gr(s,i)}ct(Nr),at(Nr,s)}function da(){ct(Nr),ct(Vl),ct(Ol)}function Ky(i){qs(Ol.current);var s=qs(Nr.current),l=gr(s,i.type);s!==l&&(at(Vl,i),at(Nr,l))}function Mf(i){Vl.current===i&&(ct(Nr),ct(Vl))}var yt=zi(0);function Uc(i){for(var s=i;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Lf=[];function Ff(){for(var i=0;i<Lf.length;i++)Lf[i]._workInProgressVersionPrimary=null;Lf.length=0}var Bc=ce.ReactCurrentDispatcher,Uf=ce.ReactCurrentBatchConfig,Ks=0,_t=null,Vt=null,Ut=null,jc=!1,Ml=!1,Ll=0,kA=0;function Zt(){throw Error(t(321))}function Bf(i,s){if(s===null)return!1;for(var l=0;l<s.length&&l<i.length;l++)if(!tr(i[l],s[l]))return!1;return!0}function jf(i,s,l,h,p,g){if(Ks=g,_t=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Bc.current=i===null||i.memoizedState===null?xA:NA,i=l(h,p),Ml){g=0;do{if(Ml=!1,Ll=0,25<=g)throw Error(t(301));g+=1,Ut=Vt=null,s.updateQueue=null,Bc.current=DA,i=l(h,p)}while(Ml)}if(Bc.current=qc,s=Vt!==null&&Vt.next!==null,Ks=0,Ut=Vt=_t=null,jc=!1,s)throw Error(t(300));return i}function zf(){var i=Ll!==0;return Ll=0,i}function Dr(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ut===null?_t.memoizedState=Ut=i:Ut=Ut.next=i,Ut}function $n(){if(Vt===null){var i=_t.alternate;i=i!==null?i.memoizedState:null}else i=Vt.next;var s=Ut===null?_t.memoizedState:Ut.next;if(s!==null)Ut=s,Vt=i;else{if(i===null)throw Error(t(310));Vt=i,i={memoizedState:Vt.memoizedState,baseState:Vt.baseState,baseQueue:Vt.baseQueue,queue:Vt.queue,next:null},Ut===null?_t.memoizedState=Ut=i:Ut=Ut.next=i}return Ut}function Fl(i,s){return typeof s=="function"?s(i):s}function $f(i){var s=$n(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var h=Vt,p=h.baseQueue,g=l.pending;if(g!==null){if(p!==null){var w=p.next;p.next=g.next,g.next=w}h.baseQueue=p=g,l.pending=null}if(p!==null){g=p.next,h=h.baseState;var R=w=null,b=null,z=g;do{var J=z.lane;if((Ks&J)===J)b!==null&&(b=b.next={lane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),h=z.hasEagerState?z.eagerState:i(h,z.action);else{var Z={lane:J,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null};b===null?(R=b=Z,w=h):b=b.next=Z,_t.lanes|=J,Gs|=J}z=z.next}while(z!==null&&z!==g);b===null?w=h:b.next=R,tr(h,s.memoizedState)||(yn=!0),s.memoizedState=h,s.baseState=w,s.baseQueue=b,l.lastRenderedState=h}if(i=l.interleaved,i!==null){p=i;do g=p.lane,_t.lanes|=g,Gs|=g,p=p.next;while(p!==i)}else p===null&&(l.lanes=0);return[s.memoizedState,l.dispatch]}function qf(i){var s=$n(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var h=l.dispatch,p=l.pending,g=s.memoizedState;if(p!==null){l.pending=null;var w=p=p.next;do g=i(g,w.action),w=w.next;while(w!==p);tr(g,s.memoizedState)||(yn=!0),s.memoizedState=g,s.baseQueue===null&&(s.baseState=g),l.lastRenderedState=g}return[g,h]}function Gy(){}function Wy(i,s){var l=_t,h=$n(),p=s(),g=!tr(h.memoizedState,p);if(g&&(h.memoizedState=p,yn=!0),h=h.queue,Kf(Yy.bind(null,l,h,i),[i]),h.getSnapshot!==s||g||Ut!==null&&Ut.memoizedState.tag&1){if(l.flags|=2048,Ul(9,Qy.bind(null,l,h,p,s),void 0,null),Bt===null)throw Error(t(349));(Ks&30)!==0||Hy(l,s,p)}return p}function Hy(i,s,l){i.flags|=16384,i={getSnapshot:s,value:l},s=_t.updateQueue,s===null?(s={lastEffect:null,stores:null},_t.updateQueue=s,s.stores=[i]):(l=s.stores,l===null?s.stores=[i]:l.push(i))}function Qy(i,s,l,h){s.value=l,s.getSnapshot=h,Xy(s)&&Jy(i)}function Yy(i,s,l){return l(function(){Xy(s)&&Jy(i)})}function Xy(i){var s=i.getSnapshot;i=i.value;try{var l=s();return!tr(i,l)}catch{return!0}}function Jy(i){var s=li(i,1);s!==null&&or(s,i,1,-1)}function Zy(i){var s=Dr();return typeof i=="function"&&(i=i()),s.memoizedState=s.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fl,lastRenderedState:i},s.queue=i,i=i.dispatch=CA.bind(null,_t,i),[s.memoizedState,i]}function Ul(i,s,l,h){return i={tag:i,create:s,destroy:l,deps:h,next:null},s=_t.updateQueue,s===null?(s={lastEffect:null,stores:null},_t.updateQueue=s,s.lastEffect=i.next=i):(l=s.lastEffect,l===null?s.lastEffect=i.next=i:(h=l.next,l.next=i,i.next=h,s.lastEffect=i)),i}function e_(){return $n().memoizedState}function zc(i,s,l,h){var p=Dr();_t.flags|=i,p.memoizedState=Ul(1|s,l,void 0,h===void 0?null:h)}function $c(i,s,l,h){var p=$n();h=h===void 0?null:h;var g=void 0;if(Vt!==null){var w=Vt.memoizedState;if(g=w.destroy,h!==null&&Bf(h,w.deps)){p.memoizedState=Ul(s,l,g,h);return}}_t.flags|=i,p.memoizedState=Ul(1|s,l,g,h)}function t_(i,s){return zc(8390656,8,i,s)}function Kf(i,s){return $c(2048,8,i,s)}function n_(i,s){return $c(4,2,i,s)}function r_(i,s){return $c(4,4,i,s)}function i_(i,s){if(typeof s=="function")return i=i(),s(i),function(){s(null)};if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function s_(i,s,l){return l=l!=null?l.concat([i]):null,$c(4,4,i_.bind(null,s,i),l)}function Gf(){}function o_(i,s){var l=$n();s=s===void 0?null:s;var h=l.memoizedState;return h!==null&&s!==null&&Bf(s,h[1])?h[0]:(l.memoizedState=[i,s],i)}function a_(i,s){var l=$n();s=s===void 0?null:s;var h=l.memoizedState;return h!==null&&s!==null&&Bf(s,h[1])?h[0]:(i=i(),l.memoizedState=[i,s],i)}function l_(i,s,l){return(Ks&21)===0?(i.baseState&&(i.baseState=!1,yn=!0),i.memoizedState=l):(tr(l,s)||(l=hl(),_t.lanes|=l,Gs|=l,i.baseState=!0),s)}function PA(i,s){var l=Ke;Ke=l!==0&&4>l?l:4,i(!0);var h=Uf.transition;Uf.transition={};try{i(!1),s()}finally{Ke=l,Uf.transition=h}}function u_(){return $n().memoizedState}function bA(i,s,l){var h=Yi(i);if(l={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null},c_(i))h_(s,l);else if(l=jy(i,s,l,h),l!==null){var p=hn();or(l,i,h,p),d_(l,s,h)}}function CA(i,s,l){var h=Yi(i),p={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null};if(c_(i))h_(s,p);else{var g=i.alternate;if(i.lanes===0&&(g===null||g.lanes===0)&&(g=s.lastRenderedReducer,g!==null))try{var w=s.lastRenderedState,R=g(w,l);if(p.hasEagerState=!0,p.eagerState=R,tr(R,w)){var b=s.interleaved;b===null?(p.next=p,Df(s)):(p.next=b.next,b.next=p),s.interleaved=p;return}}catch{}finally{}l=jy(i,s,p,h),l!==null&&(p=hn(),or(l,i,h,p),d_(l,s,h))}}function c_(i){var s=i.alternate;return i===_t||s!==null&&s===_t}function h_(i,s){Ml=jc=!0;var l=i.pending;l===null?s.next=s:(s.next=l.next,l.next=s),i.pending=s}function d_(i,s,l){if((l&4194240)!==0){var h=s.lanes;h&=i.pendingLanes,l|=h,s.lanes=l,fl(i,l)}}var qc={readContext:zn,useCallback:Zt,useContext:Zt,useEffect:Zt,useImperativeHandle:Zt,useInsertionEffect:Zt,useLayoutEffect:Zt,useMemo:Zt,useReducer:Zt,useRef:Zt,useState:Zt,useDebugValue:Zt,useDeferredValue:Zt,useTransition:Zt,useMutableSource:Zt,useSyncExternalStore:Zt,useId:Zt,unstable_isNewReconciler:!1},xA={readContext:zn,useCallback:function(i,s){return Dr().memoizedState=[i,s===void 0?null:s],i},useContext:zn,useEffect:t_,useImperativeHandle:function(i,s,l){return l=l!=null?l.concat([i]):null,zc(4194308,4,i_.bind(null,s,i),l)},useLayoutEffect:function(i,s){return zc(4194308,4,i,s)},useInsertionEffect:function(i,s){return zc(4,2,i,s)},useMemo:function(i,s){var l=Dr();return s=s===void 0?null:s,i=i(),l.memoizedState=[i,s],i},useReducer:function(i,s,l){var h=Dr();return s=l!==void 0?l(s):s,h.memoizedState=h.baseState=s,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:s},h.queue=i,i=i.dispatch=bA.bind(null,_t,i),[h.memoizedState,i]},useRef:function(i){var s=Dr();return i={current:i},s.memoizedState=i},useState:Zy,useDebugValue:Gf,useDeferredValue:function(i){return Dr().memoizedState=i},useTransition:function(){var i=Zy(!1),s=i[0];return i=PA.bind(null,i[1]),Dr().memoizedState=i,[s,i]},useMutableSource:function(){},useSyncExternalStore:function(i,s,l){var h=_t,p=Dr();if(ft){if(l===void 0)throw Error(t(407));l=l()}else{if(l=s(),Bt===null)throw Error(t(349));(Ks&30)!==0||Hy(h,s,l)}p.memoizedState=l;var g={value:l,getSnapshot:s};return p.queue=g,t_(Yy.bind(null,h,g,i),[i]),h.flags|=2048,Ul(9,Qy.bind(null,h,g,l,s),void 0,null),l},useId:function(){var i=Dr(),s=Bt.identifierPrefix;if(ft){var l=ai,h=oi;l=(h&~(1<<32-Sn(h)-1)).toString(32)+l,s=":"+s+"R"+l,l=Ll++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=kA++,s=":"+s+"r"+l.toString(32)+":";return i.memoizedState=s},unstable_isNewReconciler:!1},NA={readContext:zn,useCallback:o_,useContext:zn,useEffect:Kf,useImperativeHandle:s_,useInsertionEffect:n_,useLayoutEffect:r_,useMemo:a_,useReducer:$f,useRef:e_,useState:function(){return $f(Fl)},useDebugValue:Gf,useDeferredValue:function(i){var s=$n();return l_(s,Vt.memoizedState,i)},useTransition:function(){var i=$f(Fl)[0],s=$n().memoizedState;return[i,s]},useMutableSource:Gy,useSyncExternalStore:Wy,useId:u_,unstable_isNewReconciler:!1},DA={readContext:zn,useCallback:o_,useContext:zn,useEffect:Kf,useImperativeHandle:s_,useInsertionEffect:n_,useLayoutEffect:r_,useMemo:a_,useReducer:qf,useRef:e_,useState:function(){return qf(Fl)},useDebugValue:Gf,useDeferredValue:function(i){var s=$n();return Vt===null?s.memoizedState=i:l_(s,Vt.memoizedState,i)},useTransition:function(){var i=qf(Fl)[0],s=$n().memoizedState;return[i,s]},useMutableSource:Gy,useSyncExternalStore:Wy,useId:u_,unstable_isNewReconciler:!1};function rr(i,s){if(i&&i.defaultProps){s=de({},s),i=i.defaultProps;for(var l in i)s[l]===void 0&&(s[l]=i[l]);return s}return s}function Wf(i,s,l,h){s=i.memoizedState,l=l(h,s),l=l==null?s:de({},s,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var Kc={isMounted:function(i){return(i=i._reactInternals)?Zn(i)===i:!1},enqueueSetState:function(i,s,l){i=i._reactInternals;var h=hn(),p=Yi(i),g=ui(h,p);g.payload=s,l!=null&&(g.callback=l),s=Gi(i,g,p),s!==null&&(or(s,i,p,h),Lc(s,i,p))},enqueueReplaceState:function(i,s,l){i=i._reactInternals;var h=hn(),p=Yi(i),g=ui(h,p);g.tag=1,g.payload=s,l!=null&&(g.callback=l),s=Gi(i,g,p),s!==null&&(or(s,i,p,h),Lc(s,i,p))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var l=hn(),h=Yi(i),p=ui(l,h);p.tag=2,s!=null&&(p.callback=s),s=Gi(i,p,h),s!==null&&(or(s,i,h,l),Lc(s,i,h))}};function f_(i,s,l,h,p,g,w){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(h,g,w):s.prototype&&s.prototype.isPureReactComponent?!Al(l,h)||!Al(p,g):!0}function p_(i,s,l){var h=!1,p=$i,g=s.contextType;return typeof g=="object"&&g!==null?g=zn(g):(p=gn(s)?Bs:Jt.current,h=s.contextTypes,g=(h=h!=null)?sa(i,p):$i),s=new s(l,g),i.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Kc,i.stateNode=s,s._reactInternals=i,h&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=p,i.__reactInternalMemoizedMaskedChildContext=g),s}function m_(i,s,l,h){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,h),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,h),s.state!==i&&Kc.enqueueReplaceState(s,s.state,null)}function Hf(i,s,l,h){var p=i.stateNode;p.props=l,p.state=i.memoizedState,p.refs={},Vf(i);var g=s.contextType;typeof g=="object"&&g!==null?p.context=zn(g):(g=gn(s)?Bs:Jt.current,p.context=sa(i,g)),p.state=i.memoizedState,g=s.getDerivedStateFromProps,typeof g=="function"&&(Wf(i,s,g,l),p.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(s=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),s!==p.state&&Kc.enqueueReplaceState(p,p.state,null),Fc(i,l,p,h),p.state=i.memoizedState),typeof p.componentDidMount=="function"&&(i.flags|=4194308)}function fa(i,s){try{var l="",h=s;do l+=Me(h),h=h.return;while(h);var p=l}catch(g){p=`
Error generating stack: `+g.message+`
`+g.stack}return{value:i,source:s,stack:p,digest:null}}function Qf(i,s,l){return{value:i,source:null,stack:l??null,digest:s??null}}function Yf(i,s){try{console.error(s.value)}catch(l){setTimeout(function(){throw l})}}var VA=typeof WeakMap=="function"?WeakMap:Map;function g_(i,s,l){l=ui(-1,l),l.tag=3,l.payload={element:null};var h=s.value;return l.callback=function(){Jc||(Jc=!0,hp=h),Yf(i,s)},l}function y_(i,s,l){l=ui(-1,l),l.tag=3;var h=i.type.getDerivedStateFromError;if(typeof h=="function"){var p=s.value;l.payload=function(){return h(p)},l.callback=function(){Yf(i,s)}}var g=i.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(l.callback=function(){Yf(i,s),typeof h!="function"&&(Hi===null?Hi=new Set([this]):Hi.add(this));var w=s.stack;this.componentDidCatch(s.value,{componentStack:w!==null?w:""})}),l}function __(i,s,l){var h=i.pingCache;if(h===null){h=i.pingCache=new VA;var p=new Set;h.set(s,p)}else p=h.get(s),p===void 0&&(p=new Set,h.set(s,p));p.has(l)||(p.add(l),i=HA.bind(null,i,s,l),s.then(i,i))}function v_(i){do{var s;if((s=i.tag===13)&&(s=i.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return i;i=i.return}while(i!==null);return null}function w_(i,s,l,h,p){return(i.mode&1)===0?(i===s?i.flags|=65536:(i.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(s=ui(-1,1),s.tag=2,Gi(l,s,1))),l.lanes|=1),i):(i.flags|=65536,i.lanes=p,i)}var OA=ce.ReactCurrentOwner,yn=!1;function cn(i,s,l,h){s.child=i===null?By(s,null,l,h):ua(s,i.child,l,h)}function E_(i,s,l,h,p){l=l.render;var g=s.ref;return ha(s,p),h=jf(i,s,l,h,g,p),l=zf(),i!==null&&!yn?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~p,ci(i,s,p)):(ft&&l&&Sf(s),s.flags|=1,cn(i,s,h,p),s.child)}function I_(i,s,l,h,p){if(i===null){var g=l.type;return typeof g=="function"&&!_p(g)&&g.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(s.tag=15,s.type=g,T_(i,s,g,h,p)):(i=ih(l.type,null,h,s,s.mode,p),i.ref=s.ref,i.return=s,s.child=i)}if(g=i.child,(i.lanes&p)===0){var w=g.memoizedProps;if(l=l.compare,l=l!==null?l:Al,l(w,h)&&i.ref===s.ref)return ci(i,s,p)}return s.flags|=1,i=Ji(g,h),i.ref=s.ref,i.return=s,s.child=i}function T_(i,s,l,h,p){if(i!==null){var g=i.memoizedProps;if(Al(g,h)&&i.ref===s.ref)if(yn=!1,s.pendingProps=h=g,(i.lanes&p)!==0)(i.flags&131072)!==0&&(yn=!0);else return s.lanes=i.lanes,ci(i,s,p)}return Xf(i,s,l,h,p)}function S_(i,s,l){var h=s.pendingProps,p=h.children,g=i!==null?i.memoizedState:null;if(h.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},at(ma,xn),xn|=l;else{if((l&1073741824)===0)return i=g!==null?g.baseLanes|l:l,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:i,cachePool:null,transitions:null},s.updateQueue=null,at(ma,xn),xn|=i,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=g!==null?g.baseLanes:l,at(ma,xn),xn|=h}else g!==null?(h=g.baseLanes|l,s.memoizedState=null):h=l,at(ma,xn),xn|=h;return cn(i,s,p,l),s.child}function A_(i,s){var l=s.ref;(i===null&&l!==null||i!==null&&i.ref!==l)&&(s.flags|=512,s.flags|=2097152)}function Xf(i,s,l,h,p){var g=gn(l)?Bs:Jt.current;return g=sa(s,g),ha(s,p),l=jf(i,s,l,h,g,p),h=zf(),i!==null&&!yn?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~p,ci(i,s,p)):(ft&&h&&Sf(s),s.flags|=1,cn(i,s,l,p),s.child)}function R_(i,s,l,h,p){if(gn(l)){var g=!0;bc(s)}else g=!1;if(ha(s,p),s.stateNode===null)Wc(i,s),p_(s,l,h),Hf(s,l,h,p),h=!0;else if(i===null){var w=s.stateNode,R=s.memoizedProps;w.props=R;var b=w.context,z=l.contextType;typeof z=="object"&&z!==null?z=zn(z):(z=gn(l)?Bs:Jt.current,z=sa(s,z));var J=l.getDerivedStateFromProps,Z=typeof J=="function"||typeof w.getSnapshotBeforeUpdate=="function";Z||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(R!==h||b!==z)&&m_(s,w,h,z),Ki=!1;var X=s.memoizedState;w.state=X,Fc(s,h,w,p),b=s.memoizedState,R!==h||X!==b||mn.current||Ki?(typeof J=="function"&&(Wf(s,l,J,h),b=s.memoizedState),(R=Ki||f_(s,l,R,h,X,b,z))?(Z||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(s.flags|=4194308)):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=h,s.memoizedState=b),w.props=h,w.state=b,w.context=z,h=R):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),h=!1)}else{w=s.stateNode,zy(i,s),R=s.memoizedProps,z=s.type===s.elementType?R:rr(s.type,R),w.props=z,Z=s.pendingProps,X=w.context,b=l.contextType,typeof b=="object"&&b!==null?b=zn(b):(b=gn(l)?Bs:Jt.current,b=sa(s,b));var fe=l.getDerivedStateFromProps;(J=typeof fe=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(R!==Z||X!==b)&&m_(s,w,h,b),Ki=!1,X=s.memoizedState,w.state=X,Fc(s,h,w,p);var ye=s.memoizedState;R!==Z||X!==ye||mn.current||Ki?(typeof fe=="function"&&(Wf(s,l,fe,h),ye=s.memoizedState),(z=Ki||f_(s,l,z,h,X,ye,b)||!1)?(J||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(h,ye,b),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(h,ye,b)),typeof w.componentDidUpdate=="function"&&(s.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof w.componentDidUpdate!="function"||R===i.memoizedProps&&X===i.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||R===i.memoizedProps&&X===i.memoizedState||(s.flags|=1024),s.memoizedProps=h,s.memoizedState=ye),w.props=h,w.state=ye,w.context=b,h=z):(typeof w.componentDidUpdate!="function"||R===i.memoizedProps&&X===i.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||R===i.memoizedProps&&X===i.memoizedState||(s.flags|=1024),h=!1)}return Jf(i,s,l,h,g,p)}function Jf(i,s,l,h,p,g){A_(i,s);var w=(s.flags&128)!==0;if(!h&&!w)return p&&xy(s,l,!1),ci(i,s,g);h=s.stateNode,OA.current=s;var R=w&&typeof l.getDerivedStateFromError!="function"?null:h.render();return s.flags|=1,i!==null&&w?(s.child=ua(s,i.child,null,g),s.child=ua(s,null,R,g)):cn(i,s,R,g),s.memoizedState=h.state,p&&xy(s,l,!0),s.child}function k_(i){var s=i.stateNode;s.pendingContext?by(i,s.pendingContext,s.pendingContext!==s.context):s.context&&by(i,s.context,!1),Of(i,s.containerInfo)}function P_(i,s,l,h,p){return la(),Pf(p),s.flags|=256,cn(i,s,l,h),s.child}var Zf={dehydrated:null,treeContext:null,retryLane:0};function ep(i){return{baseLanes:i,cachePool:null,transitions:null}}function b_(i,s,l){var h=s.pendingProps,p=yt.current,g=!1,w=(s.flags&128)!==0,R;if((R=w)||(R=i!==null&&i.memoizedState===null?!1:(p&2)!==0),R?(g=!0,s.flags&=-129):(i===null||i.memoizedState!==null)&&(p|=1),at(yt,p&1),i===null)return kf(s),i=s.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((s.mode&1)===0?s.lanes=1:i.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(w=h.children,i=h.fallback,g?(h=s.mode,g=s.child,w={mode:"hidden",children:w},(h&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=w):g=sh(w,h,0,null),i=Ys(i,h,l,null),g.return=s,i.return=s,g.sibling=i,s.child=g,s.child.memoizedState=ep(l),s.memoizedState=Zf,i):tp(s,w));if(p=i.memoizedState,p!==null&&(R=p.dehydrated,R!==null))return MA(i,s,w,h,R,p,l);if(g){g=h.fallback,w=s.mode,p=i.child,R=p.sibling;var b={mode:"hidden",children:h.children};return(w&1)===0&&s.child!==p?(h=s.child,h.childLanes=0,h.pendingProps=b,s.deletions=null):(h=Ji(p,b),h.subtreeFlags=p.subtreeFlags&14680064),R!==null?g=Ji(R,g):(g=Ys(g,w,l,null),g.flags|=2),g.return=s,h.return=s,h.sibling=g,s.child=h,h=g,g=s.child,w=i.child.memoizedState,w=w===null?ep(l):{baseLanes:w.baseLanes|l,cachePool:null,transitions:w.transitions},g.memoizedState=w,g.childLanes=i.childLanes&~l,s.memoizedState=Zf,h}return g=i.child,i=g.sibling,h=Ji(g,{mode:"visible",children:h.children}),(s.mode&1)===0&&(h.lanes=l),h.return=s,h.sibling=null,i!==null&&(l=s.deletions,l===null?(s.deletions=[i],s.flags|=16):l.push(i)),s.child=h,s.memoizedState=null,h}function tp(i,s){return s=sh({mode:"visible",children:s},i.mode,0,null),s.return=i,i.child=s}function Gc(i,s,l,h){return h!==null&&Pf(h),ua(s,i.child,null,l),i=tp(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function MA(i,s,l,h,p,g,w){if(l)return s.flags&256?(s.flags&=-257,h=Qf(Error(t(422))),Gc(i,s,w,h)):s.memoizedState!==null?(s.child=i.child,s.flags|=128,null):(g=h.fallback,p=s.mode,h=sh({mode:"visible",children:h.children},p,0,null),g=Ys(g,p,w,null),g.flags|=2,h.return=s,g.return=s,h.sibling=g,s.child=h,(s.mode&1)!==0&&ua(s,i.child,null,w),s.child.memoizedState=ep(w),s.memoizedState=Zf,g);if((s.mode&1)===0)return Gc(i,s,w,null);if(p.data==="$!"){if(h=p.nextSibling&&p.nextSibling.dataset,h)var R=h.dgst;return h=R,g=Error(t(419)),h=Qf(g,h,void 0),Gc(i,s,w,h)}if(R=(w&i.childLanes)!==0,yn||R){if(h=Bt,h!==null){switch(w&-w){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(h.suspendedLanes|w))!==0?0:p,p!==0&&p!==g.retryLane&&(g.retryLane=p,li(i,p),or(h,i,p,-1))}return yp(),h=Qf(Error(t(421))),Gc(i,s,w,h)}return p.data==="$?"?(s.flags|=128,s.child=i.child,s=QA.bind(null,i),p._reactRetry=s,null):(i=g.treeContext,Cn=ji(p.nextSibling),bn=s,ft=!0,nr=null,i!==null&&(Bn[jn++]=oi,Bn[jn++]=ai,Bn[jn++]=js,oi=i.id,ai=i.overflow,js=s),s=tp(s,h.children),s.flags|=4096,s)}function C_(i,s,l){i.lanes|=s;var h=i.alternate;h!==null&&(h.lanes|=s),Nf(i.return,s,l)}function np(i,s,l,h,p){var g=i.memoizedState;g===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:h,tail:l,tailMode:p}:(g.isBackwards=s,g.rendering=null,g.renderingStartTime=0,g.last=h,g.tail=l,g.tailMode=p)}function x_(i,s,l){var h=s.pendingProps,p=h.revealOrder,g=h.tail;if(cn(i,s,h.children,l),h=yt.current,(h&2)!==0)h=h&1|2,s.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&C_(i,l,s);else if(i.tag===19)C_(i,l,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}h&=1}if(at(yt,h),(s.mode&1)===0)s.memoizedState=null;else switch(p){case"forwards":for(l=s.child,p=null;l!==null;)i=l.alternate,i!==null&&Uc(i)===null&&(p=l),l=l.sibling;l=p,l===null?(p=s.child,s.child=null):(p=l.sibling,l.sibling=null),np(s,!1,p,l,g);break;case"backwards":for(l=null,p=s.child,s.child=null;p!==null;){if(i=p.alternate,i!==null&&Uc(i)===null){s.child=p;break}i=p.sibling,p.sibling=l,l=p,p=i}np(s,!0,l,null,g);break;case"together":np(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Wc(i,s){(s.mode&1)===0&&i!==null&&(i.alternate=null,s.alternate=null,s.flags|=2)}function ci(i,s,l){if(i!==null&&(s.dependencies=i.dependencies),Gs|=s.lanes,(l&s.childLanes)===0)return null;if(i!==null&&s.child!==i.child)throw Error(t(153));if(s.child!==null){for(i=s.child,l=Ji(i,i.pendingProps),s.child=l,l.return=s;i.sibling!==null;)i=i.sibling,l=l.sibling=Ji(i,i.pendingProps),l.return=s;l.sibling=null}return s.child}function LA(i,s,l){switch(s.tag){case 3:k_(s),la();break;case 5:Ky(s);break;case 1:gn(s.type)&&bc(s);break;case 4:Of(s,s.stateNode.containerInfo);break;case 10:var h=s.type._context,p=s.memoizedProps.value;at(Oc,h._currentValue),h._currentValue=p;break;case 13:if(h=s.memoizedState,h!==null)return h.dehydrated!==null?(at(yt,yt.current&1),s.flags|=128,null):(l&s.child.childLanes)!==0?b_(i,s,l):(at(yt,yt.current&1),i=ci(i,s,l),i!==null?i.sibling:null);at(yt,yt.current&1);break;case 19:if(h=(l&s.childLanes)!==0,(i.flags&128)!==0){if(h)return x_(i,s,l);s.flags|=128}if(p=s.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),at(yt,yt.current),h)break;return null;case 22:case 23:return s.lanes=0,S_(i,s,l)}return ci(i,s,l)}var N_,rp,D_,V_;N_=function(i,s){for(var l=s.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===s)break;for(;l.sibling===null;){if(l.return===null||l.return===s)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},rp=function(){},D_=function(i,s,l,h){var p=i.memoizedProps;if(p!==h){i=s.stateNode,qs(Nr.current);var g=null;switch(l){case"input":p=dt(i,p),h=dt(i,h),g=[];break;case"select":p=de({},p,{value:void 0}),h=de({},h,{value:void 0}),g=[];break;case"textarea":p=Wr(i,p),h=Wr(i,h),g=[];break;default:typeof p.onClick!="function"&&typeof h.onClick=="function"&&(i.onclick=Rc)}Jn(l,h);var w;l=null;for(z in p)if(!h.hasOwnProperty(z)&&p.hasOwnProperty(z)&&p[z]!=null)if(z==="style"){var R=p[z];for(w in R)R.hasOwnProperty(w)&&(l||(l={}),l[w]="")}else z!=="dangerouslySetInnerHTML"&&z!=="children"&&z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&z!=="autoFocus"&&(o.hasOwnProperty(z)?g||(g=[]):(g=g||[]).push(z,null));for(z in h){var b=h[z];if(R=p?.[z],h.hasOwnProperty(z)&&b!==R&&(b!=null||R!=null))if(z==="style")if(R){for(w in R)!R.hasOwnProperty(w)||b&&b.hasOwnProperty(w)||(l||(l={}),l[w]="");for(w in b)b.hasOwnProperty(w)&&R[w]!==b[w]&&(l||(l={}),l[w]=b[w])}else l||(g||(g=[]),g.push(z,l)),l=b;else z==="dangerouslySetInnerHTML"?(b=b?b.__html:void 0,R=R?R.__html:void 0,b!=null&&R!==b&&(g=g||[]).push(z,b)):z==="children"?typeof b!="string"&&typeof b!="number"||(g=g||[]).push(z,""+b):z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&(o.hasOwnProperty(z)?(b!=null&&z==="onScroll"&&ut("scroll",i),g||R===b||(g=[])):(g=g||[]).push(z,b))}l&&(g=g||[]).push("style",l);var z=g;(s.updateQueue=z)&&(s.flags|=4)}},V_=function(i,s,l,h){l!==h&&(s.flags|=4)};function Bl(i,s){if(!ft)switch(i.tailMode){case"hidden":s=i.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var h=null;l!==null;)l.alternate!==null&&(h=l),l=l.sibling;h===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:h.sibling=null}}function en(i){var s=i.alternate!==null&&i.alternate.child===i.child,l=0,h=0;if(s)for(var p=i.child;p!==null;)l|=p.lanes|p.childLanes,h|=p.subtreeFlags&14680064,h|=p.flags&14680064,p.return=i,p=p.sibling;else for(p=i.child;p!==null;)l|=p.lanes|p.childLanes,h|=p.subtreeFlags,h|=p.flags,p.return=i,p=p.sibling;return i.subtreeFlags|=h,i.childLanes=l,s}function FA(i,s,l){var h=s.pendingProps;switch(Af(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(s),null;case 1:return gn(s.type)&&Pc(),en(s),null;case 3:return h=s.stateNode,da(),ct(mn),ct(Jt),Ff(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(i===null||i.child===null)&&(Dc(s)?s.flags|=4:i===null||i.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,nr!==null&&(pp(nr),nr=null))),rp(i,s),en(s),null;case 5:Mf(s);var p=qs(Ol.current);if(l=s.type,i!==null&&s.stateNode!=null)D_(i,s,l,h,p),i.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!h){if(s.stateNode===null)throw Error(t(166));return en(s),null}if(i=qs(Nr.current),Dc(s)){h=s.stateNode,l=s.type;var g=s.memoizedProps;switch(h[xr]=s,h[Cl]=g,i=(s.mode&1)!==0,l){case"dialog":ut("cancel",h),ut("close",h);break;case"iframe":case"object":case"embed":ut("load",h);break;case"video":case"audio":for(p=0;p<kl.length;p++)ut(kl[p],h);break;case"source":ut("error",h);break;case"img":case"image":case"link":ut("error",h),ut("load",h);break;case"details":ut("toggle",h);break;case"input":Et(h,g),ut("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!g.multiple},ut("invalid",h);break;case"textarea":Ss(h,g),ut("invalid",h)}Jn(l,g),p=null;for(var w in g)if(g.hasOwnProperty(w)){var R=g[w];w==="children"?typeof R=="string"?h.textContent!==R&&(g.suppressHydrationWarning!==!0&&Ac(h.textContent,R,i),p=["children",R]):typeof R=="number"&&h.textContent!==""+R&&(g.suppressHydrationWarning!==!0&&Ac(h.textContent,R,i),p=["children",""+R]):o.hasOwnProperty(w)&&R!=null&&w==="onScroll"&&ut("scroll",h)}switch(l){case"input":Fe(h),Xn(h,g,!0);break;case"textarea":Fe(h),Ln(h);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(h.onclick=Rc)}h=p,s.updateQueue=h,h!==null&&(s.flags|=4)}else{w=p.nodeType===9?p:p.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=Ze(l)),i==="http://www.w3.org/1999/xhtml"?l==="script"?(i=w.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof h.is=="string"?i=w.createElement(l,{is:h.is}):(i=w.createElement(l),l==="select"&&(w=i,h.multiple?w.multiple=!0:h.size&&(w.size=h.size))):i=w.createElementNS(i,l),i[xr]=s,i[Cl]=h,N_(i,s,!1,!1),s.stateNode=i;e:{switch(w=Oo(l,h),l){case"dialog":ut("cancel",i),ut("close",i),p=h;break;case"iframe":case"object":case"embed":ut("load",i),p=h;break;case"video":case"audio":for(p=0;p<kl.length;p++)ut(kl[p],i);p=h;break;case"source":ut("error",i),p=h;break;case"img":case"image":case"link":ut("error",i),ut("load",i),p=h;break;case"details":ut("toggle",i),p=h;break;case"input":Et(i,h),p=dt(i,h),ut("invalid",i);break;case"option":p=h;break;case"select":i._wrapperState={wasMultiple:!!h.multiple},p=de({},h,{value:void 0}),ut("invalid",i);break;case"textarea":Ss(i,h),p=Wr(i,h),ut("invalid",i);break;default:p=h}Jn(l,p),R=p;for(g in R)if(R.hasOwnProperty(g)){var b=R[g];g==="style"?Vo(i,b):g==="dangerouslySetInnerHTML"?(b=b?b.__html:void 0,b!=null&&Zu(i,b)):g==="children"?typeof b=="string"?(l!=="textarea"||b!=="")&&As(i,b):typeof b=="number"&&As(i,""+b):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?b!=null&&g==="onScroll"&&ut("scroll",i):b!=null&&te(i,g,b,w))}switch(l){case"input":Fe(i),Xn(i,h,!1);break;case"textarea":Fe(i),Ln(i);break;case"option":h.value!=null&&i.setAttribute("value",""+Y(h.value));break;case"select":i.multiple=!!h.multiple,g=h.value,g!=null?pn(i,!!h.multiple,g,!1):h.defaultValue!=null&&pn(i,!!h.multiple,h.defaultValue,!0);break;default:typeof p.onClick=="function"&&(i.onclick=Rc)}switch(l){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return en(s),null;case 6:if(i&&s.stateNode!=null)V_(i,s,i.memoizedProps,h);else{if(typeof h!="string"&&s.stateNode===null)throw Error(t(166));if(l=qs(Ol.current),qs(Nr.current),Dc(s)){if(h=s.stateNode,l=s.memoizedProps,h[xr]=s,(g=h.nodeValue!==l)&&(i=bn,i!==null))switch(i.tag){case 3:Ac(h.nodeValue,l,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&Ac(h.nodeValue,l,(i.mode&1)!==0)}g&&(s.flags|=4)}else h=(l.nodeType===9?l:l.ownerDocument).createTextNode(h),h[xr]=s,s.stateNode=h}return en(s),null;case 13:if(ct(yt),h=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(ft&&Cn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)Ly(),la(),s.flags|=98560,g=!1;else if(g=Dc(s),h!==null&&h.dehydrated!==null){if(i===null){if(!g)throw Error(t(318));if(g=s.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[xr]=s}else la(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;en(s),g=!1}else nr!==null&&(pp(nr),nr=null),g=!0;if(!g)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=l,s):(h=h!==null,h!==(i!==null&&i.memoizedState!==null)&&h&&(s.child.flags|=8192,(s.mode&1)!==0&&(i===null||(yt.current&1)!==0?Ot===0&&(Ot=3):yp())),s.updateQueue!==null&&(s.flags|=4),en(s),null);case 4:return da(),rp(i,s),i===null&&Pl(s.stateNode.containerInfo),en(s),null;case 10:return xf(s.type._context),en(s),null;case 17:return gn(s.type)&&Pc(),en(s),null;case 19:if(ct(yt),g=s.memoizedState,g===null)return en(s),null;if(h=(s.flags&128)!==0,w=g.rendering,w===null)if(h)Bl(g,!1);else{if(Ot!==0||i!==null&&(i.flags&128)!==0)for(i=s.child;i!==null;){if(w=Uc(i),w!==null){for(s.flags|=128,Bl(g,!1),h=w.updateQueue,h!==null&&(s.updateQueue=h,s.flags|=4),s.subtreeFlags=0,h=l,l=s.child;l!==null;)g=l,i=h,g.flags&=14680066,w=g.alternate,w===null?(g.childLanes=0,g.lanes=i,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=w.childLanes,g.lanes=w.lanes,g.child=w.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=w.memoizedProps,g.memoizedState=w.memoizedState,g.updateQueue=w.updateQueue,g.type=w.type,i=w.dependencies,g.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),l=l.sibling;return at(yt,yt.current&1|2),s.child}i=i.sibling}g.tail!==null&&lt()>ga&&(s.flags|=128,h=!0,Bl(g,!1),s.lanes=4194304)}else{if(!h)if(i=Uc(w),i!==null){if(s.flags|=128,h=!0,l=i.updateQueue,l!==null&&(s.updateQueue=l,s.flags|=4),Bl(g,!0),g.tail===null&&g.tailMode==="hidden"&&!w.alternate&&!ft)return en(s),null}else 2*lt()-g.renderingStartTime>ga&&l!==1073741824&&(s.flags|=128,h=!0,Bl(g,!1),s.lanes=4194304);g.isBackwards?(w.sibling=s.child,s.child=w):(l=g.last,l!==null?l.sibling=w:s.child=w,g.last=w)}return g.tail!==null?(s=g.tail,g.rendering=s,g.tail=s.sibling,g.renderingStartTime=lt(),s.sibling=null,l=yt.current,at(yt,h?l&1|2:l&1),s):(en(s),null);case 22:case 23:return gp(),h=s.memoizedState!==null,i!==null&&i.memoizedState!==null!==h&&(s.flags|=8192),h&&(s.mode&1)!==0?(xn&1073741824)!==0&&(en(s),s.subtreeFlags&6&&(s.flags|=8192)):en(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function UA(i,s){switch(Af(s),s.tag){case 1:return gn(s.type)&&Pc(),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return da(),ct(mn),ct(Jt),Ff(),i=s.flags,(i&65536)!==0&&(i&128)===0?(s.flags=i&-65537|128,s):null;case 5:return Mf(s),null;case 13:if(ct(yt),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(t(340));la()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return ct(yt),null;case 4:return da(),null;case 10:return xf(s.type._context),null;case 22:case 23:return gp(),null;case 24:return null;default:return null}}var Hc=!1,tn=!1,BA=typeof WeakSet=="function"?WeakSet:Set,me=null;function pa(i,s){var l=i.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(h){At(i,s,h)}else l.current=null}function ip(i,s,l){try{l()}catch(h){At(i,s,h)}}var O_=!1;function jA(i,s){if(gf=ti,i=fy(),lf(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var h=l.getSelection&&l.getSelection();if(h&&h.rangeCount!==0){l=h.anchorNode;var p=h.anchorOffset,g=h.focusNode;h=h.focusOffset;try{l.nodeType,g.nodeType}catch{l=null;break e}var w=0,R=-1,b=-1,z=0,J=0,Z=i,X=null;t:for(;;){for(var fe;Z!==l||p!==0&&Z.nodeType!==3||(R=w+p),Z!==g||h!==0&&Z.nodeType!==3||(b=w+h),Z.nodeType===3&&(w+=Z.nodeValue.length),(fe=Z.firstChild)!==null;)X=Z,Z=fe;for(;;){if(Z===i)break t;if(X===l&&++z===p&&(R=w),X===g&&++J===h&&(b=w),(fe=Z.nextSibling)!==null)break;Z=X,X=Z.parentNode}Z=fe}l=R===-1||b===-1?null:{start:R,end:b}}else l=null}l=l||{start:0,end:0}}else l=null;for(yf={focusedElem:i,selectionRange:l},ti=!1,me=s;me!==null;)if(s=me,i=s.child,(s.subtreeFlags&1028)!==0&&i!==null)i.return=s,me=i;else for(;me!==null;){s=me;try{var ye=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(ye!==null){var Ie=ye.memoizedProps,Pt=ye.memoizedState,F=s.stateNode,D=F.getSnapshotBeforeUpdate(s.elementType===s.type?Ie:rr(s.type,Ie),Pt);F.__reactInternalSnapshotBeforeUpdate=D}break;case 3:var j=s.stateNode.containerInfo;j.nodeType===1?j.textContent="":j.nodeType===9&&j.documentElement&&j.removeChild(j.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(ie){At(s,s.return,ie)}if(i=s.sibling,i!==null){i.return=s.return,me=i;break}me=s.return}return ye=O_,O_=!1,ye}function jl(i,s,l){var h=s.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var p=h=h.next;do{if((p.tag&i)===i){var g=p.destroy;p.destroy=void 0,g!==void 0&&ip(s,l,g)}p=p.next}while(p!==h)}}function Qc(i,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&i)===i){var h=l.create;l.destroy=h()}l=l.next}while(l!==s)}}function sp(i){var s=i.ref;if(s!==null){var l=i.stateNode;switch(i.tag){case 5:i=l;break;default:i=l}typeof s=="function"?s(i):s.current=i}}function M_(i){var s=i.alternate;s!==null&&(i.alternate=null,M_(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&(delete s[xr],delete s[Cl],delete s[Ef],delete s[TA],delete s[SA])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function L_(i){return i.tag===5||i.tag===3||i.tag===4}function F_(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||L_(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function op(i,s,l){var h=i.tag;if(h===5||h===6)i=i.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(i,s):l.insertBefore(i,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(i,l)):(s=l,s.appendChild(i)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=Rc));else if(h!==4&&(i=i.child,i!==null))for(op(i,s,l),i=i.sibling;i!==null;)op(i,s,l),i=i.sibling}function ap(i,s,l){var h=i.tag;if(h===5||h===6)i=i.stateNode,s?l.insertBefore(i,s):l.appendChild(i);else if(h!==4&&(i=i.child,i!==null))for(ap(i,s,l),i=i.sibling;i!==null;)ap(i,s,l),i=i.sibling}var Gt=null,ir=!1;function Wi(i,s,l){for(l=l.child;l!==null;)U_(i,s,l),l=l.sibling}function U_(i,s,l){if(Tn&&typeof Tn.onCommitFiberUnmount=="function")try{Tn.onCommitFiberUnmount(Cs,l)}catch{}switch(l.tag){case 5:tn||pa(l,s);case 6:var h=Gt,p=ir;Gt=null,Wi(i,s,l),Gt=h,ir=p,Gt!==null&&(ir?(i=Gt,l=l.stateNode,i.nodeType===8?i.parentNode.removeChild(l):i.removeChild(l)):Gt.removeChild(l.stateNode));break;case 18:Gt!==null&&(ir?(i=Gt,l=l.stateNode,i.nodeType===8?wf(i.parentNode,l):i.nodeType===1&&wf(i,l),Li(i)):wf(Gt,l.stateNode));break;case 4:h=Gt,p=ir,Gt=l.stateNode.containerInfo,ir=!0,Wi(i,s,l),Gt=h,ir=p;break;case 0:case 11:case 14:case 15:if(!tn&&(h=l.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){p=h=h.next;do{var g=p,w=g.destroy;g=g.tag,w!==void 0&&((g&2)!==0||(g&4)!==0)&&ip(l,s,w),p=p.next}while(p!==h)}Wi(i,s,l);break;case 1:if(!tn&&(pa(l,s),h=l.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=l.memoizedProps,h.state=l.memoizedState,h.componentWillUnmount()}catch(R){At(l,s,R)}Wi(i,s,l);break;case 21:Wi(i,s,l);break;case 22:l.mode&1?(tn=(h=tn)||l.memoizedState!==null,Wi(i,s,l),tn=h):Wi(i,s,l);break;default:Wi(i,s,l)}}function B_(i){var s=i.updateQueue;if(s!==null){i.updateQueue=null;var l=i.stateNode;l===null&&(l=i.stateNode=new BA),s.forEach(function(h){var p=YA.bind(null,i,h);l.has(h)||(l.add(h),h.then(p,p))})}}function sr(i,s){var l=s.deletions;if(l!==null)for(var h=0;h<l.length;h++){var p=l[h];try{var g=i,w=s,R=w;e:for(;R!==null;){switch(R.tag){case 5:Gt=R.stateNode,ir=!1;break e;case 3:Gt=R.stateNode.containerInfo,ir=!0;break e;case 4:Gt=R.stateNode.containerInfo,ir=!0;break e}R=R.return}if(Gt===null)throw Error(t(160));U_(g,w,p),Gt=null,ir=!1;var b=p.alternate;b!==null&&(b.return=null),p.return=null}catch(z){At(p,s,z)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)j_(s,i),s=s.sibling}function j_(i,s){var l=i.alternate,h=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(sr(s,i),Vr(i),h&4){try{jl(3,i,i.return),Qc(3,i)}catch(Ie){At(i,i.return,Ie)}try{jl(5,i,i.return)}catch(Ie){At(i,i.return,Ie)}}break;case 1:sr(s,i),Vr(i),h&512&&l!==null&&pa(l,l.return);break;case 5:if(sr(s,i),Vr(i),h&512&&l!==null&&pa(l,l.return),i.flags&32){var p=i.stateNode;try{As(p,"")}catch(Ie){At(i,i.return,Ie)}}if(h&4&&(p=i.stateNode,p!=null)){var g=i.memoizedProps,w=l!==null?l.memoizedProps:g,R=i.type,b=i.updateQueue;if(i.updateQueue=null,b!==null)try{R==="input"&&g.type==="radio"&&g.name!=null&&un(p,g),Oo(R,w);var z=Oo(R,g);for(w=0;w<b.length;w+=2){var J=b[w],Z=b[w+1];J==="style"?Vo(p,Z):J==="dangerouslySetInnerHTML"?Zu(p,Z):J==="children"?As(p,Z):te(p,J,Z,z)}switch(R){case"input":$t(p,g);break;case"textarea":Do(p,g);break;case"select":var X=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!g.multiple;var fe=g.value;fe!=null?pn(p,!!g.multiple,fe,!1):X!==!!g.multiple&&(g.defaultValue!=null?pn(p,!!g.multiple,g.defaultValue,!0):pn(p,!!g.multiple,g.multiple?[]:"",!1))}p[Cl]=g}catch(Ie){At(i,i.return,Ie)}}break;case 6:if(sr(s,i),Vr(i),h&4){if(i.stateNode===null)throw Error(t(162));p=i.stateNode,g=i.memoizedProps;try{p.nodeValue=g}catch(Ie){At(i,i.return,Ie)}}break;case 3:if(sr(s,i),Vr(i),h&4&&l!==null&&l.memoizedState.isDehydrated)try{Li(s.containerInfo)}catch(Ie){At(i,i.return,Ie)}break;case 4:sr(s,i),Vr(i);break;case 13:sr(s,i),Vr(i),p=i.child,p.flags&8192&&(g=p.memoizedState!==null,p.stateNode.isHidden=g,!g||p.alternate!==null&&p.alternate.memoizedState!==null||(cp=lt())),h&4&&B_(i);break;case 22:if(J=l!==null&&l.memoizedState!==null,i.mode&1?(tn=(z=tn)||J,sr(s,i),tn=z):sr(s,i),Vr(i),h&8192){if(z=i.memoizedState!==null,(i.stateNode.isHidden=z)&&!J&&(i.mode&1)!==0)for(me=i,J=i.child;J!==null;){for(Z=me=J;me!==null;){switch(X=me,fe=X.child,X.tag){case 0:case 11:case 14:case 15:jl(4,X,X.return);break;case 1:pa(X,X.return);var ye=X.stateNode;if(typeof ye.componentWillUnmount=="function"){h=X,l=X.return;try{s=h,ye.props=s.memoizedProps,ye.state=s.memoizedState,ye.componentWillUnmount()}catch(Ie){At(h,l,Ie)}}break;case 5:pa(X,X.return);break;case 22:if(X.memoizedState!==null){q_(Z);continue}}fe!==null?(fe.return=X,me=fe):q_(Z)}J=J.sibling}e:for(J=null,Z=i;;){if(Z.tag===5){if(J===null){J=Z;try{p=Z.stateNode,z?(g=p.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(R=Z.stateNode,b=Z.memoizedProps.style,w=b!=null&&b.hasOwnProperty("display")?b.display:null,R.style.display=Pi("display",w))}catch(Ie){At(i,i.return,Ie)}}}else if(Z.tag===6){if(J===null)try{Z.stateNode.nodeValue=z?"":Z.memoizedProps}catch(Ie){At(i,i.return,Ie)}}else if((Z.tag!==22&&Z.tag!==23||Z.memoizedState===null||Z===i)&&Z.child!==null){Z.child.return=Z,Z=Z.child;continue}if(Z===i)break e;for(;Z.sibling===null;){if(Z.return===null||Z.return===i)break e;J===Z&&(J=null),Z=Z.return}J===Z&&(J=null),Z.sibling.return=Z.return,Z=Z.sibling}}break;case 19:sr(s,i),Vr(i),h&4&&B_(i);break;case 21:break;default:sr(s,i),Vr(i)}}function Vr(i){var s=i.flags;if(s&2){try{e:{for(var l=i.return;l!==null;){if(L_(l)){var h=l;break e}l=l.return}throw Error(t(160))}switch(h.tag){case 5:var p=h.stateNode;h.flags&32&&(As(p,""),h.flags&=-33);var g=F_(i);ap(i,g,p);break;case 3:case 4:var w=h.stateNode.containerInfo,R=F_(i);op(i,R,w);break;default:throw Error(t(161))}}catch(b){At(i,i.return,b)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function zA(i,s,l){me=i,z_(i)}function z_(i,s,l){for(var h=(i.mode&1)!==0;me!==null;){var p=me,g=p.child;if(p.tag===22&&h){var w=p.memoizedState!==null||Hc;if(!w){var R=p.alternate,b=R!==null&&R.memoizedState!==null||tn;R=Hc;var z=tn;if(Hc=w,(tn=b)&&!z)for(me=p;me!==null;)w=me,b=w.child,w.tag===22&&w.memoizedState!==null?K_(p):b!==null?(b.return=w,me=b):K_(p);for(;g!==null;)me=g,z_(g),g=g.sibling;me=p,Hc=R,tn=z}$_(i)}else(p.subtreeFlags&8772)!==0&&g!==null?(g.return=p,me=g):$_(i)}}function $_(i){for(;me!==null;){var s=me;if((s.flags&8772)!==0){var l=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:tn||Qc(5,s);break;case 1:var h=s.stateNode;if(s.flags&4&&!tn)if(l===null)h.componentDidMount();else{var p=s.elementType===s.type?l.memoizedProps:rr(s.type,l.memoizedProps);h.componentDidUpdate(p,l.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var g=s.updateQueue;g!==null&&qy(s,g,h);break;case 3:var w=s.updateQueue;if(w!==null){if(l=null,s.child!==null)switch(s.child.tag){case 5:l=s.child.stateNode;break;case 1:l=s.child.stateNode}qy(s,w,l)}break;case 5:var R=s.stateNode;if(l===null&&s.flags&4){l=R;var b=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":b.autoFocus&&l.focus();break;case"img":b.src&&(l.src=b.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var z=s.alternate;if(z!==null){var J=z.memoizedState;if(J!==null){var Z=J.dehydrated;Z!==null&&Li(Z)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}tn||s.flags&512&&sp(s)}catch(X){At(s,s.return,X)}}if(s===i){me=null;break}if(l=s.sibling,l!==null){l.return=s.return,me=l;break}me=s.return}}function q_(i){for(;me!==null;){var s=me;if(s===i){me=null;break}var l=s.sibling;if(l!==null){l.return=s.return,me=l;break}me=s.return}}function K_(i){for(;me!==null;){var s=me;try{switch(s.tag){case 0:case 11:case 15:var l=s.return;try{Qc(4,s)}catch(b){At(s,l,b)}break;case 1:var h=s.stateNode;if(typeof h.componentDidMount=="function"){var p=s.return;try{h.componentDidMount()}catch(b){At(s,p,b)}}var g=s.return;try{sp(s)}catch(b){At(s,g,b)}break;case 5:var w=s.return;try{sp(s)}catch(b){At(s,w,b)}}}catch(b){At(s,s.return,b)}if(s===i){me=null;break}var R=s.sibling;if(R!==null){R.return=s.return,me=R;break}me=s.return}}var $A=Math.ceil,Yc=ce.ReactCurrentDispatcher,lp=ce.ReactCurrentOwner,qn=ce.ReactCurrentBatchConfig,He=0,Bt=null,Ct=null,Wt=0,xn=0,ma=zi(0),Ot=0,zl=null,Gs=0,Xc=0,up=0,$l=null,_n=null,cp=0,ga=1/0,hi=null,Jc=!1,hp=null,Hi=null,Zc=!1,Qi=null,eh=0,ql=0,dp=null,th=-1,nh=0;function hn(){return(He&6)!==0?lt():th!==-1?th:th=lt()}function Yi(i){return(i.mode&1)===0?1:(He&2)!==0&&Wt!==0?Wt&-Wt:RA.transition!==null?(nh===0&&(nh=hl()),nh):(i=Ke,i!==0||(i=window.event,i=i===void 0?16:Ko(i.type)),i)}function or(i,s,l,h){if(50<ql)throw ql=0,dp=null,Error(t(185));Vs(i,l,h),((He&2)===0||i!==Bt)&&(i===Bt&&((He&2)===0&&(Xc|=l),Ot===4&&Xi(i,Wt)),vn(i,h),l===1&&He===0&&(s.mode&1)===0&&(ga=lt()+500,Cc&&qi()))}function vn(i,s){var l=i.callbackNode;Ds(i,s);var h=Jr(i,i===Bt?Wt:0);if(h===0)l!==null&&Fo(l),i.callbackNode=null,i.callbackPriority=0;else if(s=h&-h,i.callbackPriority!==s){if(l!=null&&Fo(l),s===1)i.tag===0?AA(W_.bind(null,i)):Ny(W_.bind(null,i)),EA(function(){(He&6)===0&&qi()}),l=null;else{switch(Er(h)){case 1:l=Uo;break;case 4:l=ll;break;case 16:l=bs;break;case 536870912:l=Bo;break;default:l=bs}l=tv(l,G_.bind(null,i))}i.callbackPriority=s,i.callbackNode=l}}function G_(i,s){if(th=-1,nh=0,(He&6)!==0)throw Error(t(327));var l=i.callbackNode;if(ya()&&i.callbackNode!==l)return null;var h=Jr(i,i===Bt?Wt:0);if(h===0)return null;if((h&30)!==0||(h&i.expiredLanes)!==0||s)s=rh(i,h);else{s=h;var p=He;He|=2;var g=Q_();(Bt!==i||Wt!==s)&&(hi=null,ga=lt()+500,Hs(i,s));do try{GA();break}catch(R){H_(i,R)}while(!0);Cf(),Yc.current=g,He=p,Ct!==null?s=0:(Bt=null,Wt=0,s=Ot)}if(s!==0){if(s===2&&(p=cl(i),p!==0&&(h=p,s=fp(i,p))),s===1)throw l=zl,Hs(i,0),Xi(i,h),vn(i,lt()),l;if(s===6)Xi(i,h);else{if(p=i.current.alternate,(h&30)===0&&!qA(p)&&(s=rh(i,h),s===2&&(g=cl(i),g!==0&&(h=g,s=fp(i,g))),s===1))throw l=zl,Hs(i,0),Xi(i,h),vn(i,lt()),l;switch(i.finishedWork=p,i.finishedLanes=h,s){case 0:case 1:throw Error(t(345));case 2:Qs(i,_n,hi);break;case 3:if(Xi(i,h),(h&130023424)===h&&(s=cp+500-lt(),10<s)){if(Jr(i,0)!==0)break;if(p=i.suspendedLanes,(p&h)!==h){hn(),i.pingedLanes|=i.suspendedLanes&p;break}i.timeoutHandle=vf(Qs.bind(null,i,_n,hi),s);break}Qs(i,_n,hi);break;case 4:if(Xi(i,h),(h&4194240)===h)break;for(s=i.eventTimes,p=-1;0<h;){var w=31-Sn(h);g=1<<w,w=s[w],w>p&&(p=w),h&=~g}if(h=p,h=lt()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*$A(h/1960))-h,10<h){i.timeoutHandle=vf(Qs.bind(null,i,_n,hi),h);break}Qs(i,_n,hi);break;case 5:Qs(i,_n,hi);break;default:throw Error(t(329))}}}return vn(i,lt()),i.callbackNode===l?G_.bind(null,i):null}function fp(i,s){var l=$l;return i.current.memoizedState.isDehydrated&&(Hs(i,s).flags|=256),i=rh(i,s),i!==2&&(s=_n,_n=l,s!==null&&pp(s)),i}function pp(i){_n===null?_n=i:_n.push.apply(_n,i)}function qA(i){for(var s=i;;){if(s.flags&16384){var l=s.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var h=0;h<l.length;h++){var p=l[h],g=p.getSnapshot;p=p.value;try{if(!tr(g(),p))return!1}catch{return!1}}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Xi(i,s){for(s&=~up,s&=~Xc,i.suspendedLanes|=s,i.pingedLanes&=~s,i=i.expirationTimes;0<s;){var l=31-Sn(s),h=1<<l;i[l]=-1,s&=~h}}function W_(i){if((He&6)!==0)throw Error(t(327));ya();var s=Jr(i,0);if((s&1)===0)return vn(i,lt()),null;var l=rh(i,s);if(i.tag!==0&&l===2){var h=cl(i);h!==0&&(s=h,l=fp(i,h))}if(l===1)throw l=zl,Hs(i,0),Xi(i,s),vn(i,lt()),l;if(l===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=s,Qs(i,_n,hi),vn(i,lt()),null}function mp(i,s){var l=He;He|=1;try{return i(s)}finally{He=l,He===0&&(ga=lt()+500,Cc&&qi())}}function Ws(i){Qi!==null&&Qi.tag===0&&(He&6)===0&&ya();var s=He;He|=1;var l=qn.transition,h=Ke;try{if(qn.transition=null,Ke=1,i)return i()}finally{Ke=h,qn.transition=l,He=s,(He&6)===0&&qi()}}function gp(){xn=ma.current,ct(ma)}function Hs(i,s){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;if(l!==-1&&(i.timeoutHandle=-1,wA(l)),Ct!==null)for(l=Ct.return;l!==null;){var h=l;switch(Af(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&Pc();break;case 3:da(),ct(mn),ct(Jt),Ff();break;case 5:Mf(h);break;case 4:da();break;case 13:ct(yt);break;case 19:ct(yt);break;case 10:xf(h.type._context);break;case 22:case 23:gp()}l=l.return}if(Bt=i,Ct=i=Ji(i.current,null),Wt=xn=s,Ot=0,zl=null,up=Xc=Gs=0,_n=$l=null,$s!==null){for(s=0;s<$s.length;s++)if(l=$s[s],h=l.interleaved,h!==null){l.interleaved=null;var p=h.next,g=l.pending;if(g!==null){var w=g.next;g.next=p,h.next=w}l.pending=h}$s=null}return i}function H_(i,s){do{var l=Ct;try{if(Cf(),Bc.current=qc,jc){for(var h=_t.memoizedState;h!==null;){var p=h.queue;p!==null&&(p.pending=null),h=h.next}jc=!1}if(Ks=0,Ut=Vt=_t=null,Ml=!1,Ll=0,lp.current=null,l===null||l.return===null){Ot=1,zl=s,Ct=null;break}e:{var g=i,w=l.return,R=l,b=s;if(s=Wt,R.flags|=32768,b!==null&&typeof b=="object"&&typeof b.then=="function"){var z=b,J=R,Z=J.tag;if((J.mode&1)===0&&(Z===0||Z===11||Z===15)){var X=J.alternate;X?(J.updateQueue=X.updateQueue,J.memoizedState=X.memoizedState,J.lanes=X.lanes):(J.updateQueue=null,J.memoizedState=null)}var fe=v_(w);if(fe!==null){fe.flags&=-257,w_(fe,w,R,g,s),fe.mode&1&&__(g,z,s),s=fe,b=z;var ye=s.updateQueue;if(ye===null){var Ie=new Set;Ie.add(b),s.updateQueue=Ie}else ye.add(b);break e}else{if((s&1)===0){__(g,z,s),yp();break e}b=Error(t(426))}}else if(ft&&R.mode&1){var Pt=v_(w);if(Pt!==null){(Pt.flags&65536)===0&&(Pt.flags|=256),w_(Pt,w,R,g,s),Pf(fa(b,R));break e}}g=b=fa(b,R),Ot!==4&&(Ot=2),$l===null?$l=[g]:$l.push(g),g=w;do{switch(g.tag){case 3:g.flags|=65536,s&=-s,g.lanes|=s;var F=g_(g,b,s);$y(g,F);break e;case 1:R=b;var D=g.type,j=g.stateNode;if((g.flags&128)===0&&(typeof D.getDerivedStateFromError=="function"||j!==null&&typeof j.componentDidCatch=="function"&&(Hi===null||!Hi.has(j)))){g.flags|=65536,s&=-s,g.lanes|=s;var ie=y_(g,R,s);$y(g,ie);break e}}g=g.return}while(g!==null)}X_(l)}catch(Se){s=Se,Ct===l&&l!==null&&(Ct=l=l.return);continue}break}while(!0)}function Q_(){var i=Yc.current;return Yc.current=qc,i===null?qc:i}function yp(){(Ot===0||Ot===3||Ot===2)&&(Ot=4),Bt===null||(Gs&268435455)===0&&(Xc&268435455)===0||Xi(Bt,Wt)}function rh(i,s){var l=He;He|=2;var h=Q_();(Bt!==i||Wt!==s)&&(hi=null,Hs(i,s));do try{KA();break}catch(p){H_(i,p)}while(!0);if(Cf(),He=l,Yc.current=h,Ct!==null)throw Error(t(261));return Bt=null,Wt=0,Ot}function KA(){for(;Ct!==null;)Y_(Ct)}function GA(){for(;Ct!==null&&!Ps();)Y_(Ct)}function Y_(i){var s=ev(i.alternate,i,xn);i.memoizedProps=i.pendingProps,s===null?X_(i):Ct=s,lp.current=null}function X_(i){var s=i;do{var l=s.alternate;if(i=s.return,(s.flags&32768)===0){if(l=FA(l,s,xn),l!==null){Ct=l;return}}else{if(l=UA(l,s),l!==null){l.flags&=32767,Ct=l;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{Ot=6,Ct=null;return}}if(s=s.sibling,s!==null){Ct=s;return}Ct=s=i}while(s!==null);Ot===0&&(Ot=5)}function Qs(i,s,l){var h=Ke,p=qn.transition;try{qn.transition=null,Ke=1,WA(i,s,l,h)}finally{qn.transition=p,Ke=h}return null}function WA(i,s,l,h){do ya();while(Qi!==null);if((He&6)!==0)throw Error(t(327));l=i.finishedWork;var p=i.finishedLanes;if(l===null)return null;if(i.finishedWork=null,i.finishedLanes=0,l===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var g=l.lanes|l.childLanes;if(nf(i,g),i===Bt&&(Ct=Bt=null,Wt=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||Zc||(Zc=!0,tv(bs,function(){return ya(),null})),g=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||g){g=qn.transition,qn.transition=null;var w=Ke;Ke=1;var R=He;He|=4,lp.current=null,jA(i,l),j_(l,i),fA(yf),ti=!!gf,yf=gf=null,i.current=l,zA(l),Xr(),He=R,Ke=w,qn.transition=g}else i.current=l;if(Zc&&(Zc=!1,Qi=i,eh=p),g=i.pendingLanes,g===0&&(Hi=null),cc(l.stateNode),vn(i,lt()),s!==null)for(h=i.onRecoverableError,l=0;l<s.length;l++)p=s[l],h(p.value,{componentStack:p.stack,digest:p.digest});if(Jc)throw Jc=!1,i=hp,hp=null,i;return(eh&1)!==0&&i.tag!==0&&ya(),g=i.pendingLanes,(g&1)!==0?i===dp?ql++:(ql=0,dp=i):ql=0,qi(),null}function ya(){if(Qi!==null){var i=Er(eh),s=qn.transition,l=Ke;try{if(qn.transition=null,Ke=16>i?16:i,Qi===null)var h=!1;else{if(i=Qi,Qi=null,eh=0,(He&6)!==0)throw Error(t(331));var p=He;for(He|=4,me=i.current;me!==null;){var g=me,w=g.child;if((me.flags&16)!==0){var R=g.deletions;if(R!==null){for(var b=0;b<R.length;b++){var z=R[b];for(me=z;me!==null;){var J=me;switch(J.tag){case 0:case 11:case 15:jl(8,J,g)}var Z=J.child;if(Z!==null)Z.return=J,me=Z;else for(;me!==null;){J=me;var X=J.sibling,fe=J.return;if(M_(J),J===z){me=null;break}if(X!==null){X.return=fe,me=X;break}me=fe}}}var ye=g.alternate;if(ye!==null){var Ie=ye.child;if(Ie!==null){ye.child=null;do{var Pt=Ie.sibling;Ie.sibling=null,Ie=Pt}while(Ie!==null)}}me=g}}if((g.subtreeFlags&2064)!==0&&w!==null)w.return=g,me=w;else e:for(;me!==null;){if(g=me,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:jl(9,g,g.return)}var F=g.sibling;if(F!==null){F.return=g.return,me=F;break e}me=g.return}}var D=i.current;for(me=D;me!==null;){w=me;var j=w.child;if((w.subtreeFlags&2064)!==0&&j!==null)j.return=w,me=j;else e:for(w=D;me!==null;){if(R=me,(R.flags&2048)!==0)try{switch(R.tag){case 0:case 11:case 15:Qc(9,R)}}catch(Se){At(R,R.return,Se)}if(R===w){me=null;break e}var ie=R.sibling;if(ie!==null){ie.return=R.return,me=ie;break e}me=R.return}}if(He=p,qi(),Tn&&typeof Tn.onPostCommitFiberRoot=="function")try{Tn.onPostCommitFiberRoot(Cs,i)}catch{}h=!0}return h}finally{Ke=l,qn.transition=s}}return!1}function J_(i,s,l){s=fa(l,s),s=g_(i,s,1),i=Gi(i,s,1),s=hn(),i!==null&&(Vs(i,1,s),vn(i,s))}function At(i,s,l){if(i.tag===3)J_(i,i,l);else for(;s!==null;){if(s.tag===3){J_(s,i,l);break}else if(s.tag===1){var h=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(Hi===null||!Hi.has(h))){i=fa(l,i),i=y_(s,i,1),s=Gi(s,i,1),i=hn(),s!==null&&(Vs(s,1,i),vn(s,i));break}}s=s.return}}function HA(i,s,l){var h=i.pingCache;h!==null&&h.delete(s),s=hn(),i.pingedLanes|=i.suspendedLanes&l,Bt===i&&(Wt&l)===l&&(Ot===4||Ot===3&&(Wt&130023424)===Wt&&500>lt()-cp?Hs(i,0):up|=l),vn(i,s)}function Z_(i,s){s===0&&((i.mode&1)===0?s=1:(s=Vi,Vi<<=1,(Vi&130023424)===0&&(Vi=4194304)));var l=hn();i=li(i,s),i!==null&&(Vs(i,s,l),vn(i,l))}function QA(i){var s=i.memoizedState,l=0;s!==null&&(l=s.retryLane),Z_(i,l)}function YA(i,s){var l=0;switch(i.tag){case 13:var h=i.stateNode,p=i.memoizedState;p!==null&&(l=p.retryLane);break;case 19:h=i.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(s),Z_(i,l)}var ev;ev=function(i,s,l){if(i!==null)if(i.memoizedProps!==s.pendingProps||mn.current)yn=!0;else{if((i.lanes&l)===0&&(s.flags&128)===0)return yn=!1,LA(i,s,l);yn=(i.flags&131072)!==0}else yn=!1,ft&&(s.flags&1048576)!==0&&Dy(s,Nc,s.index);switch(s.lanes=0,s.tag){case 2:var h=s.type;Wc(i,s),i=s.pendingProps;var p=sa(s,Jt.current);ha(s,l),p=jf(null,s,h,i,p,l);var g=zf();return s.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,gn(h)?(g=!0,bc(s)):g=!1,s.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,Vf(s),p.updater=Kc,s.stateNode=p,p._reactInternals=s,Hf(s,h,i,l),s=Jf(null,s,h,!0,g,l)):(s.tag=0,ft&&g&&Sf(s),cn(null,s,p,l),s=s.child),s;case 16:h=s.elementType;e:{switch(Wc(i,s),i=s.pendingProps,p=h._init,h=p(h._payload),s.type=h,p=s.tag=JA(h),i=rr(h,i),p){case 0:s=Xf(null,s,h,i,l);break e;case 1:s=R_(null,s,h,i,l);break e;case 11:s=E_(null,s,h,i,l);break e;case 14:s=I_(null,s,h,rr(h.type,i),l);break e}throw Error(t(306,h,""))}return s;case 0:return h=s.type,p=s.pendingProps,p=s.elementType===h?p:rr(h,p),Xf(i,s,h,p,l);case 1:return h=s.type,p=s.pendingProps,p=s.elementType===h?p:rr(h,p),R_(i,s,h,p,l);case 3:e:{if(k_(s),i===null)throw Error(t(387));h=s.pendingProps,g=s.memoizedState,p=g.element,zy(i,s),Fc(s,h,null,l);var w=s.memoizedState;if(h=w.element,g.isDehydrated)if(g={element:h,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},s.updateQueue.baseState=g,s.memoizedState=g,s.flags&256){p=fa(Error(t(423)),s),s=P_(i,s,h,l,p);break e}else if(h!==p){p=fa(Error(t(424)),s),s=P_(i,s,h,l,p);break e}else for(Cn=ji(s.stateNode.containerInfo.firstChild),bn=s,ft=!0,nr=null,l=By(s,null,h,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(la(),h===p){s=ci(i,s,l);break e}cn(i,s,h,l)}s=s.child}return s;case 5:return Ky(s),i===null&&kf(s),h=s.type,p=s.pendingProps,g=i!==null?i.memoizedProps:null,w=p.children,_f(h,p)?w=null:g!==null&&_f(h,g)&&(s.flags|=32),A_(i,s),cn(i,s,w,l),s.child;case 6:return i===null&&kf(s),null;case 13:return b_(i,s,l);case 4:return Of(s,s.stateNode.containerInfo),h=s.pendingProps,i===null?s.child=ua(s,null,h,l):cn(i,s,h,l),s.child;case 11:return h=s.type,p=s.pendingProps,p=s.elementType===h?p:rr(h,p),E_(i,s,h,p,l);case 7:return cn(i,s,s.pendingProps,l),s.child;case 8:return cn(i,s,s.pendingProps.children,l),s.child;case 12:return cn(i,s,s.pendingProps.children,l),s.child;case 10:e:{if(h=s.type._context,p=s.pendingProps,g=s.memoizedProps,w=p.value,at(Oc,h._currentValue),h._currentValue=w,g!==null)if(tr(g.value,w)){if(g.children===p.children&&!mn.current){s=ci(i,s,l);break e}}else for(g=s.child,g!==null&&(g.return=s);g!==null;){var R=g.dependencies;if(R!==null){w=g.child;for(var b=R.firstContext;b!==null;){if(b.context===h){if(g.tag===1){b=ui(-1,l&-l),b.tag=2;var z=g.updateQueue;if(z!==null){z=z.shared;var J=z.pending;J===null?b.next=b:(b.next=J.next,J.next=b),z.pending=b}}g.lanes|=l,b=g.alternate,b!==null&&(b.lanes|=l),Nf(g.return,l,s),R.lanes|=l;break}b=b.next}}else if(g.tag===10)w=g.type===s.type?null:g.child;else if(g.tag===18){if(w=g.return,w===null)throw Error(t(341));w.lanes|=l,R=w.alternate,R!==null&&(R.lanes|=l),Nf(w,l,s),w=g.sibling}else w=g.child;if(w!==null)w.return=g;else for(w=g;w!==null;){if(w===s){w=null;break}if(g=w.sibling,g!==null){g.return=w.return,w=g;break}w=w.return}g=w}cn(i,s,p.children,l),s=s.child}return s;case 9:return p=s.type,h=s.pendingProps.children,ha(s,l),p=zn(p),h=h(p),s.flags|=1,cn(i,s,h,l),s.child;case 14:return h=s.type,p=rr(h,s.pendingProps),p=rr(h.type,p),I_(i,s,h,p,l);case 15:return T_(i,s,s.type,s.pendingProps,l);case 17:return h=s.type,p=s.pendingProps,p=s.elementType===h?p:rr(h,p),Wc(i,s),s.tag=1,gn(h)?(i=!0,bc(s)):i=!1,ha(s,l),p_(s,h,p),Hf(s,h,p,l),Jf(null,s,h,!0,i,l);case 19:return x_(i,s,l);case 22:return S_(i,s,l)}throw Error(t(156,s.tag))};function tv(i,s){return al(i,s)}function XA(i,s,l,h){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(i,s,l,h){return new XA(i,s,l,h)}function _p(i){return i=i.prototype,!(!i||!i.isReactComponent)}function JA(i){if(typeof i=="function")return _p(i)?1:0;if(i!=null){if(i=i.$$typeof,i===V)return 11;if(i===st)return 14}return 2}function Ji(i,s){var l=i.alternate;return l===null?(l=Kn(i.tag,s,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=s,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&14680064,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,s=i.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l}function ih(i,s,l,h,p,g){var w=2;if(h=i,typeof i=="function")_p(i)&&(w=1);else if(typeof i=="string")w=5;else e:switch(i){case P:return Ys(l.children,p,g,s);case T:w=8,p|=8;break;case k:return i=Kn(12,l,s,p|2),i.elementType=k,i.lanes=g,i;case A:return i=Kn(13,l,s,p),i.elementType=A,i.lanes=g,i;case ze:return i=Kn(19,l,s,p),i.elementType=ze,i.lanes=g,i;case Ge:return sh(l,p,g,s);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case N:w=10;break e;case C:w=9;break e;case V:w=11;break e;case st:w=14;break e;case it:w=16,h=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return s=Kn(w,l,s,p),s.elementType=i,s.type=h,s.lanes=g,s}function Ys(i,s,l,h){return i=Kn(7,i,h,s),i.lanes=l,i}function sh(i,s,l,h){return i=Kn(22,i,h,s),i.elementType=Ge,i.lanes=l,i.stateNode={isHidden:!1},i}function vp(i,s,l){return i=Kn(6,i,null,s),i.lanes=l,i}function wp(i,s,l){return s=Kn(4,i.children!==null?i.children:[],i.key,s),s.lanes=l,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}function ZA(i,s,l,h,p){this.tag=s,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=dl(0),this.expirationTimes=dl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=dl(0),this.identifierPrefix=h,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function Ep(i,s,l,h,p,g,w,R,b){return i=new ZA(i,s,l,R,b),s===1?(s=1,g===!0&&(s|=8)):s=0,g=Kn(3,null,null,s),i.current=g,g.stateNode=i,g.memoizedState={element:h,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vf(g),i}function eR(i,s,l){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ue,key:h==null?null:""+h,children:i,containerInfo:s,implementation:l}}function nv(i){if(!i)return $i;i=i._reactInternals;e:{if(Zn(i)!==i||i.tag!==1)throw Error(t(170));var s=i;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(gn(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(i.tag===1){var l=i.type;if(gn(l))return Cy(i,l,s)}return s}function rv(i,s,l,h,p,g,w,R,b){return i=Ep(l,h,!0,i,p,g,w,R,b),i.context=nv(null),l=i.current,h=hn(),p=Yi(l),g=ui(h,p),g.callback=s??null,Gi(l,g,p),i.current.lanes=p,Vs(i,p,h),vn(i,h),i}function oh(i,s,l,h){var p=s.current,g=hn(),w=Yi(p);return l=nv(l),s.context===null?s.context=l:s.pendingContext=l,s=ui(g,w),s.payload={element:i},h=h===void 0?null:h,h!==null&&(s.callback=h),i=Gi(p,s,w),i!==null&&(or(i,p,w,g),Lc(i,p,w)),w}function ah(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function iv(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<s?l:s}}function Ip(i,s){iv(i,s),(i=i.alternate)&&iv(i,s)}function tR(){return null}var sv=typeof reportError=="function"?reportError:function(i){console.error(i)};function Tp(i){this._internalRoot=i}lh.prototype.render=Tp.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(t(409));oh(i,s,null,null)},lh.prototype.unmount=Tp.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;Ws(function(){oh(null,i,null,null)}),s[ii]=null}};function lh(i){this._internalRoot=i}lh.prototype.unstable_scheduleHydration=function(i){if(i){var s=gl();i={blockedOn:null,target:i,priority:s};for(var l=0;l<An.length&&s!==0&&s<An[l].priority;l++);An.splice(l,0,i),l===0&&$o(i)}};function Sp(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function uh(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function ov(){}function nR(i,s,l,h,p){if(p){if(typeof h=="function"){var g=h;h=function(){var z=ah(w);g.call(z)}}var w=rv(s,h,i,0,null,!1,!1,"",ov);return i._reactRootContainer=w,i[ii]=w.current,Pl(i.nodeType===8?i.parentNode:i),Ws(),w}for(;p=i.lastChild;)i.removeChild(p);if(typeof h=="function"){var R=h;h=function(){var z=ah(b);R.call(z)}}var b=Ep(i,0,!1,null,null,!1,!1,"",ov);return i._reactRootContainer=b,i[ii]=b.current,Pl(i.nodeType===8?i.parentNode:i),Ws(function(){oh(s,b,l,h)}),b}function ch(i,s,l,h,p){var g=l._reactRootContainer;if(g){var w=g;if(typeof p=="function"){var R=p;p=function(){var b=ah(w);R.call(b)}}oh(s,w,i,p)}else w=nR(l,s,i,p,h);return ah(w)}pl=function(i){switch(i.tag){case 3:var s=i.stateNode;if(s.current.memoizedState.isDehydrated){var l=Xe(s.pendingLanes);l!==0&&(fl(s,l|1),vn(s,lt()),(He&6)===0&&(ga=lt()+500,qi()))}break;case 13:Ws(function(){var h=li(i,1);if(h!==null){var p=hn();or(h,i,1,p)}}),Ip(i,1)}},jo=function(i){if(i.tag===13){var s=li(i,134217728);if(s!==null){var l=hn();or(s,i,134217728,l)}Ip(i,134217728)}},ml=function(i){if(i.tag===13){var s=Yi(i),l=li(i,s);if(l!==null){var h=hn();or(l,i,s,h)}Ip(i,s)}},gl=function(){return Ke},yl=function(i,s){var l=Ke;try{return Ke=i,s()}finally{Ke=l}},Hr=function(i,s,l){switch(s){case"input":if($t(i,l),s=l.name,l.type==="radio"&&s!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<l.length;s++){var h=l[s];if(h!==i&&h.form===i.form){var p=kc(h);if(!p)throw Error(t(90));Le(h),$t(h,p)}}}break;case"textarea":Do(i,l);break;case"select":s=l.value,s!=null&&pn(i,!!l.multiple,s,!1)}},tc=mp,nc=Ws;var rR={usingClientEntryPoint:!1,Events:[xl,ra,kc,Ci,xi,mp]},Kl={findFiberByHostInstance:Us,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},iR={bundleType:Kl.bundleType,version:Kl.version,rendererPackageName:Kl.rendererPackageName,rendererConfig:Kl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ce.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=uc(i),i===null?null:i.stateNode},findFiberByHostInstance:Kl.findFiberByHostInstance||tR,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hh.isDisabled&&hh.supportsFiber)try{Cs=hh.inject(iR),Tn=hh}catch{}}return wn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rR,wn.createPortal=function(i,s){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Sp(s))throw Error(t(200));return eR(i,s,null,l)},wn.createRoot=function(i,s){if(!Sp(i))throw Error(t(299));var l=!1,h="",p=sv;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onRecoverableError!==void 0&&(p=s.onRecoverableError)),s=Ep(i,1,!1,null,null,l,!1,h,p),i[ii]=s.current,Pl(i.nodeType===8?i.parentNode:i),new Tp(s)},wn.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=uc(s),i=i===null?null:i.stateNode,i},wn.flushSync=function(i){return Ws(i)},wn.hydrate=function(i,s,l){if(!uh(s))throw Error(t(200));return ch(null,i,s,!0,l)},wn.hydrateRoot=function(i,s,l){if(!Sp(i))throw Error(t(405));var h=l!=null&&l.hydratedSources||null,p=!1,g="",w=sv;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(g=l.identifierPrefix),l.onRecoverableError!==void 0&&(w=l.onRecoverableError)),s=rv(s,null,i,1,l??null,p,!1,g,w),i[ii]=s.current,Pl(i),h)for(i=0;i<h.length;i++)l=h[i],p=l._getVersion,p=p(l._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[l,p]:s.mutableSourceEagerHydrationData.push(l,p);return new lh(s)},wn.render=function(i,s,l){if(!uh(s))throw Error(t(200));return ch(null,i,s,!1,l)},wn.unmountComponentAtNode=function(i){if(!uh(i))throw Error(t(40));return i._reactRootContainer?(Ws(function(){ch(null,null,i,!1,function(){i._reactRootContainer=null,i[ii]=null})}),!0):!1},wn.unstable_batchedUpdates=mp,wn.unstable_renderSubtreeIntoContainer=function(i,s,l,h){if(!uh(l))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return ch(i,s,l,!1,h)},wn.version="18.3.1-next-f1338f8080-20240426",wn}var pv;function qE(){if(pv)return kp.exports;pv=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),kp.exports=dR(),kp.exports}var mv;function fR(){if(mv)return dh;mv=1;var n=qE();return dh.createRoot=n.createRoot,dh.hydrateRoot=n.hydrateRoot,dh}var pR=fR();const mR="modulepreload",gR=function(n){return"/"+n},gv={},Lm=function(e,t,r){let o=Promise.resolve();if(t&&t.length>0){let u=function(m){return Promise.all(m.map(v=>Promise.resolve(v).then(E=>({status:"fulfilled",value:E}),E=>({status:"rejected",reason:E}))))};document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),f=d?.nonce||d?.getAttribute("nonce");o=u(t.map(m=>{if(m=gR(m),m in gv)return;gv[m]=!0;const v=m.endsWith(".css"),E=v?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${m}"]${E}`))return;const S=document.createElement("link");if(S.rel=v?"stylesheet":mR,v||(S.as="script"),S.crossOrigin="",S.href=m,f&&S.setAttribute("nonce",f),document.head.appendChild(S),v)return new Promise((x,B)=>{S.addEventListener("load",x),S.addEventListener("error",()=>B(new Error(`Unable to preload CSS for ${m}`)))})}))}function a(u){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=u,window.dispatchEvent(d),!d.defaultPrevented)throw u}return o.then(u=>{for(const d of u||[])d.status==="rejected"&&a(d.reason);return e().catch(a)})};var ge=Mm();const yR=$E(ge),_R=oR({__proto__:null,default:yR},[ge]);function yv(n,e){if(typeof n=="function")return n(e);n!=null&&(n.current=e)}function KE(...n){return e=>{let t=!1;const r=n.map(o=>{const a=yv(o,e);return!t&&typeof a=="function"&&(t=!0),a});if(t)return()=>{for(let o=0;o<r.length;o++){const a=r[o];typeof a=="function"?a():yv(n[o],null)}}}}function S2(...n){return ge.useCallback(KE(...n),n)}var vR=Symbol.for("react.lazy"),jh=_R[" use ".trim().toString()];function wR(n){return typeof n=="object"&&n!==null&&"then"in n}function GE(n){return n!=null&&typeof n=="object"&&"$$typeof"in n&&n.$$typeof===vR&&"_payload"in n&&wR(n._payload)}function WE(n){const e=IR(n),t=ge.forwardRef((r,o)=>{let{children:a,...u}=r;GE(a)&&typeof jh=="function"&&(a=jh(a._payload));const d=ge.Children.toArray(a),f=d.find(SR);if(f){const m=f.props.children,v=d.map(E=>E===f?ge.Children.count(m)>1?ge.Children.only(null):ge.isValidElement(m)?m.props.children:null:E);return pe.jsx(e,{...u,ref:o,children:ge.isValidElement(m)?ge.cloneElement(m,void 0,v):null})}return pe.jsx(e,{...u,ref:o,children:a})});return t.displayName=`${n}.Slot`,t}var ER=WE("Slot");function IR(n){const e=ge.forwardRef((t,r)=>{let{children:o,...a}=t;if(GE(o)&&typeof jh=="function"&&(o=jh(o._payload)),ge.isValidElement(o)){const u=RR(o),d=AR(a,o.props);return o.type!==ge.Fragment&&(d.ref=r?KE(r,u):u),ge.cloneElement(o,d)}return ge.Children.count(o)>1?ge.Children.only(null):null});return e.displayName=`${n}.SlotClone`,e}var TR=Symbol("radix.slottable");function SR(n){return ge.isValidElement(n)&&typeof n.type=="function"&&"__radixId"in n.type&&n.type.__radixId===TR}function AR(n,e){const t={...e};for(const r in e){const o=n[r],a=e[r];/^on[A-Z]/.test(r)?o&&a?t[r]=(...d)=>{const f=a(...d);return o(...d),f}:o&&(t[r]=o):r==="style"?t[r]={...o,...a}:r==="className"&&(t[r]=[o,a].filter(Boolean).join(" "))}return{...n,...t}}function RR(n){let e=Object.getOwnPropertyDescriptor(n.props,"ref")?.get,t=e&&"isReactWarning"in e&&e.isReactWarning;return t?n.ref:(e=Object.getOwnPropertyDescriptor(n,"ref")?.get,t=e&&"isReactWarning"in e&&e.isReactWarning,t?n.props.ref:n.props.ref||n.ref)}function HE(n){var e,t,r="";if(typeof n=="string"||typeof n=="number")r+=n;else if(typeof n=="object")if(Array.isArray(n)){var o=n.length;for(e=0;e<o;e++)n[e]&&(t=HE(n[e]))&&(r&&(r+=" "),r+=t)}else for(t in n)n[t]&&(r&&(r+=" "),r+=t);return r}function QE(){for(var n,e,t=0,r="",o=arguments.length;t<o;t++)(n=arguments[t])&&(e=HE(n))&&(r&&(r+=" "),r+=e);return r}const _v=n=>typeof n=="boolean"?`${n}`:n===0?"0":n,vv=QE,kR=(n,e)=>t=>{var r;if(e?.variants==null)return vv(n,t?.class,t?.className);const{variants:o,defaultVariants:a}=e,u=Object.keys(o).map(m=>{const v=t?.[m],E=a?.[m];if(v===null)return null;const S=_v(v)||_v(E);return o[m][S]}),d=t&&Object.entries(t).reduce((m,v)=>{let[E,S]=v;return S===void 0||(m[E]=S),m},{}),f=e==null||(r=e.compoundVariants)===null||r===void 0?void 0:r.reduce((m,v)=>{let{class:E,className:S,...x}=v;return Object.entries(x).every(B=>{let[q,O]=B;return Array.isArray(O)?O.includes({...a,...d}[q]):{...a,...d}[q]===O})?[...m,E,S]:m},[]);return vv(n,u,f,t?.class,t?.className)},PR=(n,e)=>{const t=new Array(n.length+e.length);for(let r=0;r<n.length;r++)t[r]=n[r];for(let r=0;r<e.length;r++)t[n.length+r]=e[r];return t},bR=(n,e)=>({classGroupId:n,validator:e}),YE=(n=new Map,e=null,t)=>({nextPart:n,validators:e,classGroupId:t}),zh="-",wv=[],CR="arbitrary..",xR=n=>{const e=DR(n),{conflictingClassGroups:t,conflictingClassGroupModifiers:r}=n;return{getClassGroupId:u=>{if(u.startsWith("[")&&u.endsWith("]"))return NR(u);const d=u.split(zh),f=d[0]===""&&d.length>1?1:0;return XE(d,f,e)},getConflictingClassGroupIds:(u,d)=>{if(d){const f=r[u],m=t[u];return f?m?PR(m,f):f:m||wv}return t[u]||wv}}},XE=(n,e,t)=>{if(n.length-e===0)return t.classGroupId;const o=n[e],a=t.nextPart.get(o);if(a){const m=XE(n,e+1,a);if(m)return m}const u=t.validators;if(u===null)return;const d=e===0?n.join(zh):n.slice(e).join(zh),f=u.length;for(let m=0;m<f;m++){const v=u[m];if(v.validator(d))return v.classGroupId}},NR=n=>n.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const e=n.slice(1,-1),t=e.indexOf(":"),r=e.slice(0,t);return r?CR+r:void 0})(),DR=n=>{const{theme:e,classGroups:t}=n;return VR(t,e)},VR=(n,e)=>{const t=YE();for(const r in n){const o=n[r];Fm(o,t,r,e)}return t},Fm=(n,e,t,r)=>{const o=n.length;for(let a=0;a<o;a++){const u=n[a];OR(u,e,t,r)}},OR=(n,e,t,r)=>{if(typeof n=="string"){MR(n,e,t);return}if(typeof n=="function"){LR(n,e,t,r);return}FR(n,e,t,r)},MR=(n,e,t)=>{const r=n===""?e:JE(e,n);r.classGroupId=t},LR=(n,e,t,r)=>{if(UR(n)){Fm(n(r),e,t,r);return}e.validators===null&&(e.validators=[]),e.validators.push(bR(t,n))},FR=(n,e,t,r)=>{const o=Object.entries(n),a=o.length;for(let u=0;u<a;u++){const[d,f]=o[u];Fm(f,JE(e,d),t,r)}},JE=(n,e)=>{let t=n;const r=e.split(zh),o=r.length;for(let a=0;a<o;a++){const u=r[a];let d=t.nextPart.get(u);d||(d=YE(),t.nextPart.set(u,d)),t=d}return t},UR=n=>"isThemeGetter"in n&&n.isThemeGetter===!0,BR=n=>{if(n<1)return{get:()=>{},set:()=>{}};let e=0,t=Object.create(null),r=Object.create(null);const o=(a,u)=>{t[a]=u,e++,e>n&&(e=0,r=t,t=Object.create(null))};return{get(a){let u=t[a];if(u!==void 0)return u;if((u=r[a])!==void 0)return o(a,u),u},set(a,u){a in t?t[a]=u:o(a,u)}}},Zp="!",Ev=":",jR=[],Iv=(n,e,t,r,o)=>({modifiers:n,hasImportantModifier:e,baseClassName:t,maybePostfixModifierPosition:r,isExternal:o}),zR=n=>{const{prefix:e,experimentalParseClassName:t}=n;let r=o=>{const a=[];let u=0,d=0,f=0,m;const v=o.length;for(let q=0;q<v;q++){const O=o[q];if(u===0&&d===0){if(O===Ev){a.push(o.slice(f,q)),f=q+1;continue}if(O==="/"){m=q;continue}}O==="["?u++:O==="]"?u--:O==="("?d++:O===")"&&d--}const E=a.length===0?o:o.slice(f);let S=E,x=!1;E.endsWith(Zp)?(S=E.slice(0,-1),x=!0):E.startsWith(Zp)&&(S=E.slice(1),x=!0);const B=m&&m>f?m-f:void 0;return Iv(a,x,S,B)};if(e){const o=e+Ev,a=r;r=u=>u.startsWith(o)?a(u.slice(o.length)):Iv(jR,!1,u,void 0,!0)}if(t){const o=r;r=a=>t({className:a,parseClassName:o})}return r},$R=n=>{const e=new Map;return n.orderSensitiveModifiers.forEach((t,r)=>{e.set(t,1e6+r)}),t=>{const r=[];let o=[];for(let a=0;a<t.length;a++){const u=t[a],d=u[0]==="[",f=e.has(u);d||f?(o.length>0&&(o.sort(),r.push(...o),o=[]),r.push(u)):o.push(u)}return o.length>0&&(o.sort(),r.push(...o)),r}},qR=n=>({cache:BR(n.cacheSize),parseClassName:zR(n),sortModifiers:$R(n),...xR(n)}),KR=/\s+/,GR=(n,e)=>{const{parseClassName:t,getClassGroupId:r,getConflictingClassGroupIds:o,sortModifiers:a}=e,u=[],d=n.trim().split(KR);let f="";for(let m=d.length-1;m>=0;m-=1){const v=d[m],{isExternal:E,modifiers:S,hasImportantModifier:x,baseClassName:B,maybePostfixModifierPosition:q}=t(v);if(E){f=v+(f.length>0?" "+f:f);continue}let O=!!q,ne=r(O?B.substring(0,q):B);if(!ne){if(!O){f=v+(f.length>0?" "+f:f);continue}if(ne=r(B),!ne){f=v+(f.length>0?" "+f:f);continue}O=!1}const re=S.length===0?"":S.length===1?S[0]:a(S).join(":"),te=x?re+Zp:re,ce=te+ne;if(u.indexOf(ce)>-1)continue;u.push(ce);const he=o(ne,O);for(let ue=0;ue<he.length;++ue){const P=he[ue];u.push(te+P)}f=v+(f.length>0?" "+f:f)}return f},WR=(...n)=>{let e=0,t,r,o="";for(;e<n.length;)(t=n[e++])&&(r=ZE(t))&&(o&&(o+=" "),o+=r);return o},ZE=n=>{if(typeof n=="string")return n;let e,t="";for(let r=0;r<n.length;r++)n[r]&&(e=ZE(n[r]))&&(t&&(t+=" "),t+=e);return t},HR=(n,...e)=>{let t,r,o,a;const u=f=>{const m=e.reduce((v,E)=>E(v),n());return t=qR(m),r=t.cache.get,o=t.cache.set,a=d,d(f)},d=f=>{const m=r(f);if(m)return m;const v=GR(f,t);return o(f,v),v};return a=u,(...f)=>a(WR(...f))},QR=[],Mt=n=>{const e=t=>t[n]||QR;return e.isThemeGetter=!0,e},eI=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,tI=/^\((?:(\w[\w-]*):)?(.+)\)$/i,YR=/^\d+\/\d+$/,XR=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,JR=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,ZR=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,ek=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,tk=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,_a=n=>YR.test(n),Ue=n=>!!n&&!Number.isNaN(Number(n)),es=n=>!!n&&Number.isInteger(Number(n)),Cp=n=>n.endsWith("%")&&Ue(n.slice(0,-1)),di=n=>XR.test(n),nk=()=>!0,rk=n=>JR.test(n)&&!ZR.test(n),nI=()=>!1,ik=n=>ek.test(n),sk=n=>tk.test(n),ok=n=>!_e(n)&&!ve(n),ak=n=>Ya(n,sI,nI),_e=n=>eI.test(n),Xs=n=>Ya(n,oI,rk),xp=n=>Ya(n,dk,Ue),Tv=n=>Ya(n,rI,nI),lk=n=>Ya(n,iI,sk),fh=n=>Ya(n,aI,ik),ve=n=>tI.test(n),Wl=n=>Xa(n,oI),uk=n=>Xa(n,fk),Sv=n=>Xa(n,rI),ck=n=>Xa(n,sI),hk=n=>Xa(n,iI),ph=n=>Xa(n,aI,!0),Ya=(n,e,t)=>{const r=eI.exec(n);return r?r[1]?e(r[1]):t(r[2]):!1},Xa=(n,e,t=!1)=>{const r=tI.exec(n);return r?r[1]?e(r[1]):t:!1},rI=n=>n==="position"||n==="percentage",iI=n=>n==="image"||n==="url",sI=n=>n==="length"||n==="size"||n==="bg-size",oI=n=>n==="length",dk=n=>n==="number",fk=n=>n==="family-name",aI=n=>n==="shadow",pk=()=>{const n=Mt("color"),e=Mt("font"),t=Mt("text"),r=Mt("font-weight"),o=Mt("tracking"),a=Mt("leading"),u=Mt("breakpoint"),d=Mt("container"),f=Mt("spacing"),m=Mt("radius"),v=Mt("shadow"),E=Mt("inset-shadow"),S=Mt("text-shadow"),x=Mt("drop-shadow"),B=Mt("blur"),q=Mt("perspective"),O=Mt("aspect"),ne=Mt("ease"),re=Mt("animate"),te=()=>["auto","avoid","all","avoid-page","page","left","right","column"],ce=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],he=()=>[...ce(),ve,_e],ue=()=>["auto","hidden","clip","visible","scroll"],P=()=>["auto","contain","none"],T=()=>[ve,_e,f],k=()=>[_a,"full","auto",...T()],N=()=>[es,"none","subgrid",ve,_e],C=()=>["auto",{span:["full",es,ve,_e]},es,ve,_e],V=()=>[es,"auto",ve,_e],A=()=>["auto","min","max","fr",ve,_e],ze=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],st=()=>["start","end","center","stretch","center-safe","end-safe"],it=()=>["auto",...T()],Ge=()=>[_a,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...T()],W=()=>[n,ve,_e],Ae=()=>[...ce(),Sv,Tv,{position:[ve,_e]}],de=()=>["no-repeat",{repeat:["","x","y","space","round"]}],M=()=>["auto","cover","contain",ck,ak,{size:[ve,_e]}],Q=()=>[Cp,Wl,Xs],Te=()=>["","none","full",m,ve,_e],Re=()=>["",Ue,Wl,Xs],Me=()=>["solid","dashed","dotted","double"],H=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],G=()=>[Ue,Cp,Sv,Tv],Y=()=>["","none",B,ve,_e],oe=()=>["none",Ue,ve,_e],Ee=()=>["none",Ue,ve,_e],Fe=()=>[Ue,ve,_e],Le=()=>[_a,"full",...T()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[di],breakpoint:[di],color:[nk],container:[di],"drop-shadow":[di],ease:["in","out","in-out"],font:[ok],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[di],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[di],shadow:[di],spacing:["px",Ue],text:[di],"text-shadow":[di],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",_a,_e,ve,O]}],container:["container"],columns:[{columns:[Ue,_e,ve,d]}],"break-after":[{"break-after":te()}],"break-before":[{"break-before":te()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:he()}],overflow:[{overflow:ue()}],"overflow-x":[{"overflow-x":ue()}],"overflow-y":[{"overflow-y":ue()}],overscroll:[{overscroll:P()}],"overscroll-x":[{"overscroll-x":P()}],"overscroll-y":[{"overscroll-y":P()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:k()}],"inset-x":[{"inset-x":k()}],"inset-y":[{"inset-y":k()}],start:[{start:k()}],end:[{end:k()}],top:[{top:k()}],right:[{right:k()}],bottom:[{bottom:k()}],left:[{left:k()}],visibility:["visible","invisible","collapse"],z:[{z:[es,"auto",ve,_e]}],basis:[{basis:[_a,"full","auto",d,...T()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[Ue,_a,"auto","initial","none",_e]}],grow:[{grow:["",Ue,ve,_e]}],shrink:[{shrink:["",Ue,ve,_e]}],order:[{order:[es,"first","last","none",ve,_e]}],"grid-cols":[{"grid-cols":N()}],"col-start-end":[{col:C()}],"col-start":[{"col-start":V()}],"col-end":[{"col-end":V()}],"grid-rows":[{"grid-rows":N()}],"row-start-end":[{row:C()}],"row-start":[{"row-start":V()}],"row-end":[{"row-end":V()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":A()}],"auto-rows":[{"auto-rows":A()}],gap:[{gap:T()}],"gap-x":[{"gap-x":T()}],"gap-y":[{"gap-y":T()}],"justify-content":[{justify:[...ze(),"normal"]}],"justify-items":[{"justify-items":[...st(),"normal"]}],"justify-self":[{"justify-self":["auto",...st()]}],"align-content":[{content:["normal",...ze()]}],"align-items":[{items:[...st(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...st(),{baseline:["","last"]}]}],"place-content":[{"place-content":ze()}],"place-items":[{"place-items":[...st(),"baseline"]}],"place-self":[{"place-self":["auto",...st()]}],p:[{p:T()}],px:[{px:T()}],py:[{py:T()}],ps:[{ps:T()}],pe:[{pe:T()}],pt:[{pt:T()}],pr:[{pr:T()}],pb:[{pb:T()}],pl:[{pl:T()}],m:[{m:it()}],mx:[{mx:it()}],my:[{my:it()}],ms:[{ms:it()}],me:[{me:it()}],mt:[{mt:it()}],mr:[{mr:it()}],mb:[{mb:it()}],ml:[{ml:it()}],"space-x":[{"space-x":T()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":T()}],"space-y-reverse":["space-y-reverse"],size:[{size:Ge()}],w:[{w:[d,"screen",...Ge()]}],"min-w":[{"min-w":[d,"screen","none",...Ge()]}],"max-w":[{"max-w":[d,"screen","none","prose",{screen:[u]},...Ge()]}],h:[{h:["screen","lh",...Ge()]}],"min-h":[{"min-h":["screen","lh","none",...Ge()]}],"max-h":[{"max-h":["screen","lh",...Ge()]}],"font-size":[{text:["base",t,Wl,Xs]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[r,ve,xp]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",Cp,_e]}],"font-family":[{font:[uk,_e,e]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[o,ve,_e]}],"line-clamp":[{"line-clamp":[Ue,"none",ve,xp]}],leading:[{leading:[a,...T()]}],"list-image":[{"list-image":["none",ve,_e]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",ve,_e]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:W()}],"text-color":[{text:W()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...Me(),"wavy"]}],"text-decoration-thickness":[{decoration:[Ue,"from-font","auto",ve,Xs]}],"text-decoration-color":[{decoration:W()}],"underline-offset":[{"underline-offset":[Ue,"auto",ve,_e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:T()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",ve,_e]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",ve,_e]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:Ae()}],"bg-repeat":[{bg:de()}],"bg-size":[{bg:M()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},es,ve,_e],radial:["",ve,_e],conic:[es,ve,_e]},hk,lk]}],"bg-color":[{bg:W()}],"gradient-from-pos":[{from:Q()}],"gradient-via-pos":[{via:Q()}],"gradient-to-pos":[{to:Q()}],"gradient-from":[{from:W()}],"gradient-via":[{via:W()}],"gradient-to":[{to:W()}],rounded:[{rounded:Te()}],"rounded-s":[{"rounded-s":Te()}],"rounded-e":[{"rounded-e":Te()}],"rounded-t":[{"rounded-t":Te()}],"rounded-r":[{"rounded-r":Te()}],"rounded-b":[{"rounded-b":Te()}],"rounded-l":[{"rounded-l":Te()}],"rounded-ss":[{"rounded-ss":Te()}],"rounded-se":[{"rounded-se":Te()}],"rounded-ee":[{"rounded-ee":Te()}],"rounded-es":[{"rounded-es":Te()}],"rounded-tl":[{"rounded-tl":Te()}],"rounded-tr":[{"rounded-tr":Te()}],"rounded-br":[{"rounded-br":Te()}],"rounded-bl":[{"rounded-bl":Te()}],"border-w":[{border:Re()}],"border-w-x":[{"border-x":Re()}],"border-w-y":[{"border-y":Re()}],"border-w-s":[{"border-s":Re()}],"border-w-e":[{"border-e":Re()}],"border-w-t":[{"border-t":Re()}],"border-w-r":[{"border-r":Re()}],"border-w-b":[{"border-b":Re()}],"border-w-l":[{"border-l":Re()}],"divide-x":[{"divide-x":Re()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":Re()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...Me(),"hidden","none"]}],"divide-style":[{divide:[...Me(),"hidden","none"]}],"border-color":[{border:W()}],"border-color-x":[{"border-x":W()}],"border-color-y":[{"border-y":W()}],"border-color-s":[{"border-s":W()}],"border-color-e":[{"border-e":W()}],"border-color-t":[{"border-t":W()}],"border-color-r":[{"border-r":W()}],"border-color-b":[{"border-b":W()}],"border-color-l":[{"border-l":W()}],"divide-color":[{divide:W()}],"outline-style":[{outline:[...Me(),"none","hidden"]}],"outline-offset":[{"outline-offset":[Ue,ve,_e]}],"outline-w":[{outline:["",Ue,Wl,Xs]}],"outline-color":[{outline:W()}],shadow:[{shadow:["","none",v,ph,fh]}],"shadow-color":[{shadow:W()}],"inset-shadow":[{"inset-shadow":["none",E,ph,fh]}],"inset-shadow-color":[{"inset-shadow":W()}],"ring-w":[{ring:Re()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:W()}],"ring-offset-w":[{"ring-offset":[Ue,Xs]}],"ring-offset-color":[{"ring-offset":W()}],"inset-ring-w":[{"inset-ring":Re()}],"inset-ring-color":[{"inset-ring":W()}],"text-shadow":[{"text-shadow":["none",S,ph,fh]}],"text-shadow-color":[{"text-shadow":W()}],opacity:[{opacity:[Ue,ve,_e]}],"mix-blend":[{"mix-blend":[...H(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":H()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[Ue]}],"mask-image-linear-from-pos":[{"mask-linear-from":G()}],"mask-image-linear-to-pos":[{"mask-linear-to":G()}],"mask-image-linear-from-color":[{"mask-linear-from":W()}],"mask-image-linear-to-color":[{"mask-linear-to":W()}],"mask-image-t-from-pos":[{"mask-t-from":G()}],"mask-image-t-to-pos":[{"mask-t-to":G()}],"mask-image-t-from-color":[{"mask-t-from":W()}],"mask-image-t-to-color":[{"mask-t-to":W()}],"mask-image-r-from-pos":[{"mask-r-from":G()}],"mask-image-r-to-pos":[{"mask-r-to":G()}],"mask-image-r-from-color":[{"mask-r-from":W()}],"mask-image-r-to-color":[{"mask-r-to":W()}],"mask-image-b-from-pos":[{"mask-b-from":G()}],"mask-image-b-to-pos":[{"mask-b-to":G()}],"mask-image-b-from-color":[{"mask-b-from":W()}],"mask-image-b-to-color":[{"mask-b-to":W()}],"mask-image-l-from-pos":[{"mask-l-from":G()}],"mask-image-l-to-pos":[{"mask-l-to":G()}],"mask-image-l-from-color":[{"mask-l-from":W()}],"mask-image-l-to-color":[{"mask-l-to":W()}],"mask-image-x-from-pos":[{"mask-x-from":G()}],"mask-image-x-to-pos":[{"mask-x-to":G()}],"mask-image-x-from-color":[{"mask-x-from":W()}],"mask-image-x-to-color":[{"mask-x-to":W()}],"mask-image-y-from-pos":[{"mask-y-from":G()}],"mask-image-y-to-pos":[{"mask-y-to":G()}],"mask-image-y-from-color":[{"mask-y-from":W()}],"mask-image-y-to-color":[{"mask-y-to":W()}],"mask-image-radial":[{"mask-radial":[ve,_e]}],"mask-image-radial-from-pos":[{"mask-radial-from":G()}],"mask-image-radial-to-pos":[{"mask-radial-to":G()}],"mask-image-radial-from-color":[{"mask-radial-from":W()}],"mask-image-radial-to-color":[{"mask-radial-to":W()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":ce()}],"mask-image-conic-pos":[{"mask-conic":[Ue]}],"mask-image-conic-from-pos":[{"mask-conic-from":G()}],"mask-image-conic-to-pos":[{"mask-conic-to":G()}],"mask-image-conic-from-color":[{"mask-conic-from":W()}],"mask-image-conic-to-color":[{"mask-conic-to":W()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:Ae()}],"mask-repeat":[{mask:de()}],"mask-size":[{mask:M()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",ve,_e]}],filter:[{filter:["","none",ve,_e]}],blur:[{blur:Y()}],brightness:[{brightness:[Ue,ve,_e]}],contrast:[{contrast:[Ue,ve,_e]}],"drop-shadow":[{"drop-shadow":["","none",x,ph,fh]}],"drop-shadow-color":[{"drop-shadow":W()}],grayscale:[{grayscale:["",Ue,ve,_e]}],"hue-rotate":[{"hue-rotate":[Ue,ve,_e]}],invert:[{invert:["",Ue,ve,_e]}],saturate:[{saturate:[Ue,ve,_e]}],sepia:[{sepia:["",Ue,ve,_e]}],"backdrop-filter":[{"backdrop-filter":["","none",ve,_e]}],"backdrop-blur":[{"backdrop-blur":Y()}],"backdrop-brightness":[{"backdrop-brightness":[Ue,ve,_e]}],"backdrop-contrast":[{"backdrop-contrast":[Ue,ve,_e]}],"backdrop-grayscale":[{"backdrop-grayscale":["",Ue,ve,_e]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[Ue,ve,_e]}],"backdrop-invert":[{"backdrop-invert":["",Ue,ve,_e]}],"backdrop-opacity":[{"backdrop-opacity":[Ue,ve,_e]}],"backdrop-saturate":[{"backdrop-saturate":[Ue,ve,_e]}],"backdrop-sepia":[{"backdrop-sepia":["",Ue,ve,_e]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":T()}],"border-spacing-x":[{"border-spacing-x":T()}],"border-spacing-y":[{"border-spacing-y":T()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",ve,_e]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[Ue,"initial",ve,_e]}],ease:[{ease:["linear","initial",ne,ve,_e]}],delay:[{delay:[Ue,ve,_e]}],animate:[{animate:["none",re,ve,_e]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[q,ve,_e]}],"perspective-origin":[{"perspective-origin":he()}],rotate:[{rotate:oe()}],"rotate-x":[{"rotate-x":oe()}],"rotate-y":[{"rotate-y":oe()}],"rotate-z":[{"rotate-z":oe()}],scale:[{scale:Ee()}],"scale-x":[{"scale-x":Ee()}],"scale-y":[{"scale-y":Ee()}],"scale-z":[{"scale-z":Ee()}],"scale-3d":["scale-3d"],skew:[{skew:Fe()}],"skew-x":[{"skew-x":Fe()}],"skew-y":[{"skew-y":Fe()}],transform:[{transform:[ve,_e,"","none","gpu","cpu"]}],"transform-origin":[{origin:he()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:Le()}],"translate-x":[{"translate-x":Le()}],"translate-y":[{"translate-y":Le()}],"translate-z":[{"translate-z":Le()}],"translate-none":["translate-none"],accent:[{accent:W()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:W()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",ve,_e]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":T()}],"scroll-mx":[{"scroll-mx":T()}],"scroll-my":[{"scroll-my":T()}],"scroll-ms":[{"scroll-ms":T()}],"scroll-me":[{"scroll-me":T()}],"scroll-mt":[{"scroll-mt":T()}],"scroll-mr":[{"scroll-mr":T()}],"scroll-mb":[{"scroll-mb":T()}],"scroll-ml":[{"scroll-ml":T()}],"scroll-p":[{"scroll-p":T()}],"scroll-px":[{"scroll-px":T()}],"scroll-py":[{"scroll-py":T()}],"scroll-ps":[{"scroll-ps":T()}],"scroll-pe":[{"scroll-pe":T()}],"scroll-pt":[{"scroll-pt":T()}],"scroll-pr":[{"scroll-pr":T()}],"scroll-pb":[{"scroll-pb":T()}],"scroll-pl":[{"scroll-pl":T()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",ve,_e]}],fill:[{fill:["none",...W()]}],"stroke-w":[{stroke:[Ue,Wl,Xs,xp]}],stroke:[{stroke:["none",...W()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},mk=HR(pk);function vd(...n){return mk(QE(n))}const gk=kR("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9 rounded-md"}},defaultVariants:{variant:"default",size:"default"}});function yk({className:n,variant:e,size:t,asChild:r=!1,...o}){const a=r?ER:"button";return pe.jsx(a,{"data-slot":"button",className:vd(gk({variant:e,size:t,className:n})),...o})}function Av({className:n,type:e,...t}){return pe.jsx("input",{type:e,"data-slot":"input",className:vd("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base bg-input-background transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm","focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]","aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",n),...t})}var _k=qE();const A2=$E(_k);var vk=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],wk=vk.reduce((n,e)=>{const t=WE(`Primitive.${e}`),r=ge.forwardRef((o,a)=>{const{asChild:u,...d}=o,f=u?t:e;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),pe.jsx(f,{...d,ref:a})});return r.displayName=`Primitive.${e}`,{...n,[e]:r}},{}),Ek="Label",lI=ge.forwardRef((n,e)=>pe.jsx(wk.label,{...n,ref:e,onMouseDown:t=>{t.target.closest("button, input, select, textarea")||(n.onMouseDown?.(t),!t.defaultPrevented&&t.detail>1&&t.preventDefault())}}));lI.displayName=Ek;var Ik=lI;function Rv({className:n,...e}){return pe.jsx(Ik,{"data-slot":"label",className:vd("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",n),...e})}function Tk({className:n,...e}){return pe.jsx("div",{"data-slot":"card",className:vd("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border",n),...e})}/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sk=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Ak=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,r)=>r?r.toUpperCase():t.toLowerCase()),kv=n=>{const e=Ak(n);return e.charAt(0).toUpperCase()+e.slice(1)},uI=(...n)=>n.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Rk={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kk=ge.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:o="",children:a,iconNode:u,...d},f)=>ge.createElement("svg",{ref:f,...Rk,width:e,height:e,stroke:n,strokeWidth:r?Number(t)*24/Number(e):t,className:uI("lucide",o),...d},[...u.map(([m,v])=>ge.createElement(m,v)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cI=(n,e)=>{const t=ge.forwardRef(({className:r,...o},a)=>ge.createElement(kk,{ref:a,iconNode:e,className:uI(`lucide-${Sk(kv(n))}`,`lucide-${n}`,r),...o}));return t.displayName=kv(n),t};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pk=[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]],bk=cI("refresh-ccw",Pk);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ck=[["path",{d:"m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8",key:"n7qcjb"}],["path",{d:"M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7",key:"d0u48b"}],["path",{d:"m2.1 21.8 6.4-6.3",key:"yn04lh"}],["path",{d:"m19 5-7 7",key:"194lzd"}]],xk=cI("utensils-crossed",Ck),Nk=()=>{};var Pv={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hI=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let o=n.charCodeAt(r);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},Dk=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const o=n[t++];if(o<128)e[r++]=String.fromCharCode(o);else if(o>191&&o<224){const a=n[t++];e[r++]=String.fromCharCode((o&31)<<6|a&63)}else if(o>239&&o<365){const a=n[t++],u=n[t++],d=n[t++],f=((o&7)<<18|(a&63)<<12|(u&63)<<6|d&63)-65536;e[r++]=String.fromCharCode(55296+(f>>10)),e[r++]=String.fromCharCode(56320+(f&1023))}else{const a=n[t++],u=n[t++];e[r++]=String.fromCharCode((o&15)<<12|(a&63)<<6|u&63)}}return e.join("")},dI={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<n.length;o+=3){const a=n[o],u=o+1<n.length,d=u?n[o+1]:0,f=o+2<n.length,m=f?n[o+2]:0,v=a>>2,E=(a&3)<<4|d>>4;let S=(d&15)<<2|m>>6,x=m&63;f||(x=64,u||(S=64)),r.push(t[v],t[E],t[S],t[x])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(hI(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Dk(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<n.length;){const a=t[n.charAt(o++)],d=o<n.length?t[n.charAt(o)]:0;++o;const m=o<n.length?t[n.charAt(o)]:64;++o;const E=o<n.length?t[n.charAt(o)]:64;if(++o,a==null||d==null||m==null||E==null)throw new Vk;const S=a<<2|d>>4;if(r.push(S),m!==64){const x=d<<4&240|m>>2;if(r.push(x),E!==64){const B=m<<6&192|E;r.push(B)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Vk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ok=function(n){const e=hI(n);return dI.encodeByteArray(e,!0)},$h=function(n){return Ok(n).replace(/\./g,"")},fI=function(n){try{return dI.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mk=()=>pI().__FIREBASE_DEFAULTS__,Lk=()=>{if(typeof process>"u"||typeof Pv>"u")return;const n=Pv.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Fk=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&fI(n[1]);return e&&JSON.parse(e)},wd=()=>{try{return Nk()||Mk()||Lk()||Fk()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},mI=n=>wd()?.emulatorHosts?.[n],gI=n=>{const e=mI(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},yI=()=>wd()?.config,_I=n=>wd()?.[`_${n}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uk{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ro(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Um(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vI(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",o=n.iat||0,a=n.sub||n.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u={iss:`https://securetoken.google.com/${r}`,aud:r,iat:o,exp:o+3600,auth_time:o,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}},...n};return[$h(JSON.stringify(t)),$h(JSON.stringify(u)),""].join(".")}const au={};function Bk(){const n={prod:[],emulator:[]};for(const e of Object.keys(au))au[e]?n.emulator.push(e):n.prod.push(e);return n}function jk(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let bv=!1;function Bm(n,e){if(typeof window>"u"||typeof document>"u"||!Ro(window.location.host)||au[n]===e||au[n]||bv)return;au[n]=e;function t(S){return`__firebase__banner__${S}`}const r="__firebase__banner",a=Bk().prod.length>0;function u(){const S=document.getElementById(r);S&&S.remove()}function d(S){S.style.display="flex",S.style.background="#7faaf0",S.style.position="fixed",S.style.bottom="5px",S.style.left="5px",S.style.padding=".5em",S.style.borderRadius="5px",S.style.alignItems="center"}function f(S,x){S.setAttribute("width","24"),S.setAttribute("id",x),S.setAttribute("height","24"),S.setAttribute("viewBox","0 0 24 24"),S.setAttribute("fill","none"),S.style.marginLeft="-6px"}function m(){const S=document.createElement("span");return S.style.cursor="pointer",S.style.marginLeft="16px",S.style.fontSize="24px",S.innerHTML=" &times;",S.onclick=()=>{bv=!0,u()},S}function v(S,x){S.setAttribute("id",x),S.innerText="Learn more",S.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",S.setAttribute("target","__blank"),S.style.paddingLeft="5px",S.style.textDecoration="underline"}function E(){const S=jk(r),x=t("text"),B=document.getElementById(x)||document.createElement("span"),q=t("learnmore"),O=document.getElementById(q)||document.createElement("a"),ne=t("preprendIcon"),re=document.getElementById(ne)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(S.created){const te=S.element;d(te),v(O,q);const ce=m();f(re,ne),te.append(re,B,O,ce),document.body.appendChild(te)}a?(B.innerText="Preview backend disconnected.",re.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(re.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,B.innerText="Preview backend running in this workspace."),B.setAttribute("id",x)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",E):E()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function zk(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Lt())}function wI(){const n=wd()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function $k(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function qk(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Kk(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Gk(){const n=Lt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function EI(){return!wI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function II(){return!wI()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function jm(){try{return typeof indexedDB=="object"}catch{return!1}}function TI(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{e(o.error?.message||"")}}catch(t){e(t)}})}function Wk(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hk="FirebaseError";class mr extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Hk,Object.setPrototypeOf(this,mr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ko.prototype.create)}}class ko{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},o=`${this.service}/${e}`,a=this.errors[e],u=a?Qk(a,r):"Error",d=`${this.serviceName}: ${u} (${o}).`;return new mr(o,d,r)}}function Qk(n,e){return n.replace(Yk,(t,r)=>{const o=e[r];return o!=null?String(o):`<${r}?>`})}const Yk=/\{\$([^}]+)}/g;function Xk(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function fo(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const o of t){if(!r.includes(o))return!1;const a=n[o],u=e[o];if(Cv(a)&&Cv(u)){if(!fo(a,u))return!1}else if(a!==u)return!1}for(const o of r)if(!t.includes(o))return!1;return!0}function Cv(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mu(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function eu(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[o,a]=r.split("=");e[decodeURIComponent(o)]=decodeURIComponent(a)}}),e}function tu(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Jk(n,e){const t=new Zk(n,e);return t.subscribe.bind(t)}class Zk{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let o;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");eP(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:r},o.next===void 0&&(o.next=Np),o.error===void 0&&(o.error=Np),o.complete===void 0&&(o.complete=Np);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function eP(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Np(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(n){return n&&n._delegate?n._delegate:n}class Yn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tP{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Uk;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&r.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(r)return null;throw o}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(rP(e))try{this.getOrInitializeService({instanceIdentifier:Zs})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:o});r.resolve(a)}catch{}}}}clearInstance(e=Zs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Zs){return this.instances.has(e)}getOptions(e=Zs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[a,u]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(a);r===d&&u.resolve(o)}return o}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),o=this.onInitCallbacks.get(r)??new Set;o.add(e),this.onInitCallbacks.set(r,o);const a=this.instances.get(r);return a&&e(a,r),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const o of r)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:nP(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Zs){return this.component?this.component.multipleInstances?e:Zs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function nP(n){return n===Zs?void 0:n}function rP(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iP{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new tP(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $e;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})($e||($e={}));const sP={debug:$e.DEBUG,verbose:$e.VERBOSE,info:$e.INFO,warn:$e.WARN,error:$e.ERROR,silent:$e.SILENT},oP=$e.INFO,aP={[$e.DEBUG]:"log",[$e.VERBOSE]:"log",[$e.INFO]:"info",[$e.WARN]:"warn",[$e.ERROR]:"error"},lP=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),o=aP[e];if(o)console[o](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class zm{constructor(e){this.name=e,this._logLevel=oP,this._logHandler=lP,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in $e))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?sP[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,$e.DEBUG,...e),this._logHandler(this,$e.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,$e.VERBOSE,...e),this._logHandler(this,$e.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,$e.INFO,...e),this._logHandler(this,$e.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,$e.WARN,...e),this._logHandler(this,$e.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,$e.ERROR,...e),this._logHandler(this,$e.ERROR,...e)}}const uP=(n,e)=>e.some(t=>n instanceof t);let xv,Nv;function cP(){return xv||(xv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function hP(){return Nv||(Nv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const SI=new WeakMap,em=new WeakMap,AI=new WeakMap,Dp=new WeakMap,$m=new WeakMap;function dP(n){const e=new Promise((t,r)=>{const o=()=>{n.removeEventListener("success",a),n.removeEventListener("error",u)},a=()=>{t(yi(n.result)),o()},u=()=>{r(n.error),o()};n.addEventListener("success",a),n.addEventListener("error",u)});return e.then(t=>{t instanceof IDBCursor&&SI.set(t,n)}).catch(()=>{}),$m.set(e,n),e}function fP(n){if(em.has(n))return;const e=new Promise((t,r)=>{const o=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",u),n.removeEventListener("abort",u)},a=()=>{t(),o()},u=()=>{r(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",a),n.addEventListener("error",u),n.addEventListener("abort",u)});em.set(n,e)}let tm={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return em.get(n);if(e==="objectStoreNames")return n.objectStoreNames||AI.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return yi(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function pP(n){tm=n(tm)}function mP(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Vp(this),e,...t);return AI.set(r,e.sort?e.sort():[e]),yi(r)}:hP().includes(n)?function(...e){return n.apply(Vp(this),e),yi(SI.get(this))}:function(...e){return yi(n.apply(Vp(this),e))}}function gP(n){return typeof n=="function"?mP(n):(n instanceof IDBTransaction&&fP(n),uP(n,cP())?new Proxy(n,tm):n)}function yi(n){if(n instanceof IDBRequest)return dP(n);if(Dp.has(n))return Dp.get(n);const e=gP(n);return e!==n&&(Dp.set(n,e),$m.set(e,n)),e}const Vp=n=>$m.get(n);function Ed(n,e,{blocked:t,upgrade:r,blocking:o,terminated:a}={}){const u=indexedDB.open(n,e),d=yi(u);return r&&u.addEventListener("upgradeneeded",f=>{r(yi(u.result),f.oldVersion,f.newVersion,yi(u.transaction),f)}),t&&u.addEventListener("blocked",f=>t(f.oldVersion,f.newVersion,f)),d.then(f=>{a&&f.addEventListener("close",()=>a()),o&&f.addEventListener("versionchange",m=>o(m.oldVersion,m.newVersion,m))}).catch(()=>{}),d}function Op(n,{blocked:e}={}){const t=indexedDB.deleteDatabase(n);return e&&t.addEventListener("blocked",r=>e(r.oldVersion,r)),yi(t).then(()=>{})}const yP=["get","getKey","getAll","getAllKeys","count"],_P=["put","add","delete","clear"],Mp=new Map;function Dv(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Mp.get(e))return Mp.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,o=_P.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(o||yP.includes(t)))return;const a=async function(u,...d){const f=this.transaction(u,o?"readwrite":"readonly");let m=f.store;return r&&(m=m.index(d.shift())),(await Promise.all([m[t](...d),o&&f.done]))[0]};return Mp.set(e,a),a}pP(n=>({...n,get:(e,t,r)=>Dv(e,t)||n.get(e,t,r),has:(e,t)=>!!Dv(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vP{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(wP(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function wP(n){return n.getComponent()?.type==="VERSION"}const nm="@firebase/app",Vv="0.14.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vi=new zm("@firebase/app"),EP="@firebase/app-compat",IP="@firebase/analytics-compat",TP="@firebase/analytics",SP="@firebase/app-check-compat",AP="@firebase/app-check",RP="@firebase/auth",kP="@firebase/auth-compat",PP="@firebase/database",bP="@firebase/data-connect",CP="@firebase/database-compat",xP="@firebase/functions",NP="@firebase/functions-compat",DP="@firebase/installations",VP="@firebase/installations-compat",OP="@firebase/messaging",MP="@firebase/messaging-compat",LP="@firebase/performance",FP="@firebase/performance-compat",UP="@firebase/remote-config",BP="@firebase/remote-config-compat",jP="@firebase/storage",zP="@firebase/storage-compat",$P="@firebase/firestore",qP="@firebase/ai",KP="@firebase/firestore-compat",GP="firebase",WP="12.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rm="[DEFAULT]",HP={[nm]:"fire-core",[EP]:"fire-core-compat",[TP]:"fire-analytics",[IP]:"fire-analytics-compat",[AP]:"fire-app-check",[SP]:"fire-app-check-compat",[RP]:"fire-auth",[kP]:"fire-auth-compat",[PP]:"fire-rtdb",[bP]:"fire-data-connect",[CP]:"fire-rtdb-compat",[xP]:"fire-fn",[NP]:"fire-fn-compat",[DP]:"fire-iid",[VP]:"fire-iid-compat",[OP]:"fire-fcm",[MP]:"fire-fcm-compat",[LP]:"fire-perf",[FP]:"fire-perf-compat",[UP]:"fire-rc",[BP]:"fire-rc-compat",[jP]:"fire-gcs",[zP]:"fire-gcs-compat",[$P]:"fire-fst",[KP]:"fire-fst-compat",[qP]:"fire-vertex","fire-js":"fire-js",[GP]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qh=new Map,QP=new Map,im=new Map;function Ov(n,e){try{n.container.addComponent(e)}catch(t){vi.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function dr(n){const e=n.name;if(im.has(e))return vi.debug(`There were multiple attempts to register component ${e}.`),!1;im.set(e,n);for(const t of qh.values())Ov(t,n);for(const t of QP.values())Ov(t,n);return!0}function Po(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Vn(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YP={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},hs=new ko("app","Firebase",YP);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XP{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Yn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw hs.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bo=WP;function RI(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:rm,automaticDataCollectionEnabled:!0,...e},o=r.name;if(typeof o!="string"||!o)throw hs.create("bad-app-name",{appName:String(o)});if(t||(t=yI()),!t)throw hs.create("no-options");const a=qh.get(o);if(a){if(fo(t,a.options)&&fo(r,a.config))return a;throw hs.create("duplicate-app",{appName:o})}const u=new iP(o);for(const f of im.values())u.addComponent(f);const d=new XP(t,r,u);return qh.set(o,d),d}function Id(n=rm){const e=qh.get(n);if(!e&&n===rm&&yI())return RI();if(!e)throw hs.create("no-app",{appName:n});return e}function In(n,e,t){let r=HP[n]??n;t&&(r+=`-${t}`);const o=r.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const u=[`Unable to register library "${r}" with version "${e}":`];o&&u.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&a&&u.push("and"),a&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),vi.warn(u.join(" "));return}dr(new Yn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JP="firebase-heartbeat-database",ZP=1,yu="firebase-heartbeat-store";let Lp=null;function kI(){return Lp||(Lp=Ed(JP,ZP,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(yu)}catch(t){console.warn(t)}}}}).catch(n=>{throw hs.create("idb-open",{originalErrorMessage:n.message})})),Lp}async function eb(n){try{const t=(await kI()).transaction(yu),r=await t.objectStore(yu).get(PI(n));return await t.done,r}catch(e){if(e instanceof mr)vi.warn(e.message);else{const t=hs.create("idb-get",{originalErrorMessage:e?.message});vi.warn(t.message)}}}async function Mv(n,e){try{const r=(await kI()).transaction(yu,"readwrite");await r.objectStore(yu).put(e,PI(n)),await r.done}catch(t){if(t instanceof mr)vi.warn(t.message);else{const r=hs.create("idb-set",{originalErrorMessage:t?.message});vi.warn(r.message)}}}function PI(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tb=1024,nb=30;class rb{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new sb(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Lv();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats.length>nb){const o=ob(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){vi.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Lv(),{heartbeatsToSend:t,unsentEntries:r}=ib(this._heartbeatsCache.heartbeats),o=$h(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return vi.warn(e),""}}}function Lv(){return new Date().toISOString().substring(0,10)}function ib(n,e=tb){const t=[];let r=n.slice();for(const o of n){const a=t.find(u=>u.agent===o.agent);if(a){if(a.dates.push(o.date),Fv(t)>e){a.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Fv(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class sb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return jm()?TI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await eb(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Mv(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Mv(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Fv(n){return $h(JSON.stringify({version:2,heartbeats:n})).length}function ob(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ab(n){dr(new Yn("platform-logger",e=>new vP(e),"PRIVATE")),dr(new Yn("heartbeat",e=>new rb(e),"PRIVATE")),In(nm,Vv,n),In(nm,Vv,"esm2020"),In("fire-js","")}ab("");function bI(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const lb=bI,CI=new ko("auth","Firebase",bI());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kh=new zm("@firebase/auth");function ub(n,...e){Kh.logLevel<=$e.WARN&&Kh.warn(`Auth (${bo}): ${n}`,...e)}function Sh(n,...e){Kh.logLevel<=$e.ERROR&&Kh.error(`Auth (${bo}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fr(n,...e){throw qm(n,...e)}function Br(n,...e){return qm(n,...e)}function xI(n,e,t){const r={...lb(),[e]:t};return new ko("auth","Firebase",r).create(e,{appName:n.name})}function _i(n){return xI(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function qm(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return CI.create(n,...e)}function xe(n,e,...t){if(!n)throw qm(e,...t)}function pi(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Sh(e),new Error(e)}function wi(n,e){n||pi(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sm(){return typeof self<"u"&&self.location?.href||""}function cb(){return Uv()==="http:"||Uv()==="https:"}function Uv(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(cb()||qk()||"connection"in navigator)?navigator.onLine:!0}function db(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(e,t){this.shortDelay=e,this.longDelay=t,wi(t>e,"Short delay should be less than long delay!"),this.isMobile=zk()||Kk()}get(){return hb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Km(n,e){wi(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;pi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;pi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;pi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pb=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],mb=new Lu(3e4,6e4);function ws(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Es(n,e,t,r,o={}){return DI(n,o,async()=>{let a={},u={};r&&(e==="GET"?u=r:a={body:JSON.stringify(r)});const d=Mu({key:n.config.apiKey,...u}).slice(1),f=await n._getAdditionalHeaders();f["Content-Type"]="application/json",n.languageCode&&(f["X-Firebase-Locale"]=n.languageCode);const m={method:e,headers:f,...a};return $k()||(m.referrerPolicy="no-referrer"),n.emulatorConfig&&Ro(n.emulatorConfig.host)&&(m.credentials="include"),NI.fetch()(await VI(n,n.config.apiHost,t,d),m)})}async function DI(n,e,t){n._canInitEmulator=!1;const r={...fb,...e};try{const o=new yb(n),a=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const u=await a.json();if("needConfirmation"in u)throw mh(n,"account-exists-with-different-credential",u);if(a.ok&&!("errorMessage"in u))return u;{const d=a.ok?u.errorMessage:u.error.message,[f,m]=d.split(" : ");if(f==="FEDERATED_USER_ID_ALREADY_LINKED")throw mh(n,"credential-already-in-use",u);if(f==="EMAIL_EXISTS")throw mh(n,"email-already-in-use",u);if(f==="USER_DISABLED")throw mh(n,"user-disabled",u);const v=r[f]||f.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw xI(n,v,m);fr(n,v)}}catch(o){if(o instanceof mr)throw o;fr(n,"network-request-failed",{message:String(o)})}}async function Fu(n,e,t,r,o={}){const a=await Es(n,e,t,r,o);return"mfaPendingCredential"in a&&fr(n,"multi-factor-auth-required",{_serverResponse:a}),a}async function VI(n,e,t,r){const o=`${e}${t}?${r}`,a=n,u=a.config.emulator?Km(n.config,o):`${n.config.apiScheme}://${o}`;return pb.includes(t)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(u).toString():u}function gb(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class yb{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Br(this.auth,"network-request-failed")),mb.get())})}}function mh(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const o=Br(n,e,r);return o.customData._tokenResponse=t,o}function Bv(n){return n!==void 0&&n.enterprise!==void 0}class _b{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return gb(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function vb(n,e){return Es(n,"GET","/v2/recaptchaConfig",ws(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wb(n,e){return Es(n,"POST","/v1/accounts:delete",e)}async function Gh(n,e){return Es(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lu(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Eb(n,e=!1){const t=mt(n),r=await t.getIdToken(e),o=Gm(r);xe(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const a=typeof o.firebase=="object"?o.firebase:void 0,u=a?.sign_in_provider;return{claims:o,token:r,authTime:lu(Fp(o.auth_time)),issuedAtTime:lu(Fp(o.iat)),expirationTime:lu(Fp(o.exp)),signInProvider:u||null,signInSecondFactor:a?.sign_in_second_factor||null}}function Fp(n){return Number(n)*1e3}function Gm(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Sh("JWT malformed, contained fewer than 3 sections"),null;try{const o=fI(t);return o?JSON.parse(o):(Sh("Failed to decode base64 JWT payload"),null)}catch(o){return Sh("Caught error parsing JWT payload as JSON",o?.toString()),null}}function jv(n){const e=Gm(n);return xe(e,"internal-error"),xe(typeof e.exp<"u","internal-error"),xe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _u(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof mr&&Ib(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Ib({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=lu(this.lastLoginAt),this.creationTime=lu(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wh(n){const e=n.auth,t=await n.getIdToken(),r=await _u(n,Gh(e,{idToken:t}));xe(r?.users.length,e,"internal-error");const o=r.users[0];n._notifyReloadListener(o);const a=o.providerUserInfo?.length?OI(o.providerUserInfo):[],u=Ab(n.providerData,a),d=n.isAnonymous,f=!(n.email&&o.passwordHash)&&!u?.length,m=d?f:!1,v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new om(o.createdAt,o.lastLoginAt),isAnonymous:m};Object.assign(n,v)}async function Sb(n){const e=mt(n);await Wh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ab(n,e){return[...n.filter(r=>!e.some(o=>o.providerId===r.providerId)),...e]}function OI(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rb(n,e){const t=await DI(n,{},async()=>{const r=Mu({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:a}=n.config,u=await VI(n,o,"/v1/token",`key=${a}`),d=await n._getAdditionalHeaders();d["Content-Type"]="application/x-www-form-urlencoded";const f={method:"POST",headers:d,body:r};return n.emulatorConfig&&Ro(n.emulatorConfig.host)&&(f.credentials="include"),NI.fetch()(u,f)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function kb(n,e){return Es(n,"POST","/v2/accounts:revokeToken",ws(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){xe(e.idToken,"internal-error"),xe(typeof e.idToken<"u","internal-error"),xe(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):jv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){xe(e.length!==0,"internal-error");const t=jv(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(xe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:o,expiresIn:a}=await Rb(e,t);this.updateTokensAndExpiration(r,o,Number(a))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:o,expirationTime:a}=t,u=new Na;return r&&(xe(typeof r=="string","internal-error",{appName:e}),u.refreshToken=r),o&&(xe(typeof o=="string","internal-error",{appName:e}),u.accessToken=o),a&&(xe(typeof a=="number","internal-error",{appName:e}),u.expirationTime=a),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Na,this.toJSON())}_performRefresh(){return pi("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ts(n,e){xe(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class ur{constructor({uid:e,auth:t,stsTokenManager:r,...o}){this.providerId="firebase",this.proactiveRefresh=new Tb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new om(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await _u(this,this.stsTokenManager.getToken(this.auth,e));return xe(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Eb(this,e)}reload(){return Sb(this)}_assign(e){this!==e&&(xe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ur({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){xe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Wh(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Vn(this.auth.app))return Promise.reject(_i(this.auth));const e=await this.getIdToken();return await _u(this,wb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,o=t.email??void 0,a=t.phoneNumber??void 0,u=t.photoURL??void 0,d=t.tenantId??void 0,f=t._redirectEventId??void 0,m=t.createdAt??void 0,v=t.lastLoginAt??void 0,{uid:E,emailVerified:S,isAnonymous:x,providerData:B,stsTokenManager:q}=t;xe(E&&q,e,"internal-error");const O=Na.fromJSON(this.name,q);xe(typeof E=="string",e,"internal-error"),ts(r,e.name),ts(o,e.name),xe(typeof S=="boolean",e,"internal-error"),xe(typeof x=="boolean",e,"internal-error"),ts(a,e.name),ts(u,e.name),ts(d,e.name),ts(f,e.name),ts(m,e.name),ts(v,e.name);const ne=new ur({uid:E,auth:e,email:o,emailVerified:S,displayName:r,isAnonymous:x,photoURL:u,phoneNumber:a,tenantId:d,stsTokenManager:O,createdAt:m,lastLoginAt:v});return B&&Array.isArray(B)&&(ne.providerData=B.map(re=>({...re}))),f&&(ne._redirectEventId=f),ne}static async _fromIdTokenResponse(e,t,r=!1){const o=new Na;o.updateFromServerResponse(t);const a=new ur({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:r});return await Wh(a),a}static async _fromGetAccountInfoResponse(e,t,r){const o=t.users[0];xe(o.localId!==void 0,"internal-error");const a=o.providerUserInfo!==void 0?OI(o.providerUserInfo):[],u=!(o.email&&o.passwordHash)&&!a?.length,d=new Na;d.updateFromIdToken(r);const f=new ur({uid:o.localId,auth:e,stsTokenManager:d,isAnonymous:u}),m={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new om(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!a?.length};return Object.assign(f,m),f}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zv=new Map;function mi(n){wi(n instanceof Function,"Expected a class definition");let e=zv.get(n);return e?(wi(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,zv.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MI{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}MI.type="NONE";const $v=MI;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ah(n,e,t){return`firebase:${n}:${e}:${t}`}class Da{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:o,name:a}=this.auth;this.fullUserKey=Ah(this.userKey,o.apiKey,a),this.fullPersistenceKey=Ah("persistence",o.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Gh(this.auth,{idToken:e}).catch(()=>{});return t?ur._fromGetAccountInfoResponse(this.auth,t,e):null}return ur._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Da(mi($v),e,r);const o=(await Promise.all(t.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let a=o[0]||mi($v);const u=Ah(r,e.config.apiKey,e.name);let d=null;for(const m of t)try{const v=await m._get(u);if(v){let E;if(typeof v=="string"){const S=await Gh(e,{idToken:v}).catch(()=>{});if(!S)break;E=await ur._fromGetAccountInfoResponse(e,S,v)}else E=ur._fromJSON(e,v);m!==a&&(d=E),a=m;break}}catch{}const f=o.filter(m=>m._shouldAllowMigration);return!a._shouldAllowMigration||!f.length?new Da(a,e,r):(a=f[0],d&&await a._set(u,d.toJSON()),await Promise.all(t.map(async m=>{if(m!==a)try{await m._remove(u)}catch{}})),new Da(a,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qv(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(BI(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(LI(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(zI(e))return"Blackberry";if($I(e))return"Webos";if(FI(e))return"Safari";if((e.includes("chrome/")||UI(e))&&!e.includes("edge/"))return"Chrome";if(jI(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function LI(n=Lt()){return/firefox\//i.test(n)}function FI(n=Lt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function UI(n=Lt()){return/crios\//i.test(n)}function BI(n=Lt()){return/iemobile/i.test(n)}function jI(n=Lt()){return/android/i.test(n)}function zI(n=Lt()){return/blackberry/i.test(n)}function $I(n=Lt()){return/webos/i.test(n)}function Wm(n=Lt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Pb(n=Lt()){return Wm(n)&&!!window.navigator?.standalone}function bb(){return Gk()&&document.documentMode===10}function qI(n=Lt()){return Wm(n)||jI(n)||$I(n)||zI(n)||/windows phone/i.test(n)||BI(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KI(n,e=[]){let t;switch(n){case"Browser":t=qv(Lt());break;case"Worker":t=`${qv(Lt())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${bo}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=a=>new Promise((u,d)=>{try{const f=e(a);u(f)}catch(f){d(f)}});r.onAbort=t,this.queue.push(r);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xb(n,e={}){return Es(n,"GET","/v2/passwordPolicy",ws(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nb=6;class Db{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??Nb,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let o=0;o<e.length;o++)r=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,o,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vb{constructor(e,t,r,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Kv(this),this.idTokenSubscription=new Kv(this),this.beforeStateQueue=new Cb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=CI,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=mi(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Da.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Gh(this,{idToken:e}),r=await ur._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Vn(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(u,u))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=this.redirectUser?._redirectEventId,u=r?._redirectEventId,d=await this.tryRedirectSignIn(e);(!a||a===u)&&d?.user&&(r=d.user,o=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return xe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Wh(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=db()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Vn(this.app))return Promise.reject(_i(this));const t=e?mt(e):null;return t&&xe(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&xe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Vn(this.app)?Promise.reject(_i(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Vn(this.app)?Promise.reject(_i(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(mi(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await xb(this),t=new Db(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ko("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await kb(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&mi(e)||this._popupRedirectResolver;xe(t,this,"argument-error"),this.redirectPersistenceManager=await Da.create(this,[mi(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,o){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let u=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(xe(d,this,"internal-error"),d.then(()=>{u||a(this.currentUser)}),typeof t=="function"){const f=e.addObserver(t,r,o);return()=>{u=!0,f()}}else{const f=e.addObserver(t);return()=>{u=!0,f()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return xe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=KI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(Vn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&ub(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Co(n){return mt(n)}class Kv{constructor(e){this.auth=e,this.observer=null,this.addObserver=Jk(t=>this.observer=t)}get next(){return xe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Td={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ob(n){Td=n}function GI(n){return Td.loadJS(n)}function Mb(){return Td.recaptchaEnterpriseScript}function Lb(){return Td.gapiScript}function Fb(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class Ub{constructor(){this.enterprise=new Bb}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Bb{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const jb="recaptcha-enterprise",WI="NO_RECAPTCHA";class zb{constructor(e){this.type=jb,this.auth=Co(e)}async verify(e="verify",t=!1){async function r(a){if(!t){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(u,d)=>{vb(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(f=>{if(f.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const m=new _b(f);return a.tenantId==null?a._agentRecaptchaConfig=m:a._tenantRecaptchaConfigs[a.tenantId]=m,u(m.siteKey)}}).catch(f=>{d(f)})})}function o(a,u,d){const f=window.grecaptcha;Bv(f)?f.enterprise.ready(()=>{f.enterprise.execute(a,{action:e}).then(m=>{u(m)}).catch(()=>{u(WI)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Ub().execute("siteKey",{action:"verify"}):new Promise((a,u)=>{r(this.auth).then(d=>{if(!t&&Bv(window.grecaptcha))o(d,a,u);else{if(typeof window>"u"){u(new Error("RecaptchaVerifier is only supported in browser"));return}let f=Mb();f.length!==0&&(f+=d),GI(f).then(()=>{o(d,a,u)}).catch(m=>{u(m)})}}).catch(d=>{u(d)})})}}async function Gv(n,e,t,r=!1,o=!1){const a=new zb(n);let u;if(o)u=WI;else try{u=await a.verify(t)}catch{u=await a.verify(t,!0)}const d={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const f=d.phoneEnrollmentInfo.phoneNumber,m=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:f,recaptchaToken:m,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const f=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:f,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return r?Object.assign(d,{captchaResp:u}):Object.assign(d,{captchaResponse:u}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function am(n,e,t,r,o){if(n._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Gv(n,e,t,t==="getOobCode");return r(n,a)}else return r(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const u=await Gv(n,e,t,t==="getOobCode");return r(n,u)}else return Promise.reject(a)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $b(n,e){const t=Po(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),a=t.getOptions();if(fo(a,e??{}))return o;fr(o,"already-initialized")}return t.initialize({options:e})}function qb(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(mi);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function Kb(n,e,t){const r=Co(n);xe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const o=!1,a=HI(e),{host:u,port:d}=Gb(e),f=d===null?"":`:${d}`,m={url:`${a}//${u}${f}/`},v=Object.freeze({host:u,port:d,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!r._canInitEmulator){xe(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),xe(fo(m,r.config.emulator)&&fo(v,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=m,r.emulatorConfig=v,r.settings.appVerificationDisabledForTesting=!0,Ro(u)?(Um(`${a}//${u}${f}`),Bm("Auth",!0)):Wb()}function HI(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Gb(n){const e=HI(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(r);if(o){const a=o[1];return{host:a,port:Wv(r.substr(a.length+1))}}else{const[a,u]=r.split(":");return{host:a,port:Wv(u)}}}function Wv(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Wb(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return pi("not implemented")}_getIdTokenResponse(e){return pi("not implemented")}_linkToIdToken(e,t){return pi("not implemented")}_getReauthenticationResolver(e){return pi("not implemented")}}async function Hb(n,e){return Es(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qb(n,e){return Fu(n,"POST","/v1/accounts:signInWithPassword",ws(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yb(n,e){return Fu(n,"POST","/v1/accounts:signInWithEmailLink",ws(n,e))}async function Xb(n,e){return Fu(n,"POST","/v1/accounts:signInWithEmailLink",ws(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu extends Hm{constructor(e,t,r,o=null){super("password",r),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new vu(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new vu(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return am(e,t,"signInWithPassword",Qb);case"emailLink":return Yb(e,{email:this._email,oobCode:this._password});default:fr(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return am(e,r,"signUpPassword",Hb);case"emailLink":return Xb(e,{idToken:t,email:this._email,oobCode:this._password});default:fr(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Va(n,e){return Fu(n,"POST","/v1/accounts:signInWithIdp",ws(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jb="http://localhost";class po extends Hm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new po(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):fr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:o,...a}=t;if(!r||!o)return null;const u=new po(r,o);return u.idToken=a.idToken||void 0,u.accessToken=a.accessToken||void 0,u.secret=a.secret,u.nonce=a.nonce,u.pendingToken=a.pendingToken||null,u}_getIdTokenResponse(e){const t=this.buildRequest();return Va(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Va(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Va(e,t)}buildRequest(){const e={requestUri:Jb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Mu(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zb(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function e1(n){const e=eu(tu(n)).link,t=e?eu(tu(e)).deep_link_id:null,r=eu(tu(n)).deep_link_id;return(r?eu(tu(r)).link:null)||r||t||e||n}class Qm{constructor(e){const t=eu(tu(e)),r=t.apiKey??null,o=t.oobCode??null,a=Zb(t.mode??null);xe(r&&o&&a,"argument-error"),this.apiKey=r,this.operation=a,this.code=o,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=e1(e);try{return new Qm(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(){this.providerId=Ja.PROVIDER_ID}static credential(e,t){return vu._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Qm.parseLink(t);return xe(r,"argument-error"),vu._fromEmailAndCode(e,r.code,r.tenantId)}}Ja.PROVIDER_ID="password";Ja.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ja.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu extends QI{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss extends Uu{constructor(){super("facebook.com")}static credential(e){return po._fromParams({providerId:ss.PROVIDER_ID,signInMethod:ss.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ss.credentialFromTaggedObject(e)}static credentialFromError(e){return ss.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ss.credential(e.oauthAccessToken)}catch{return null}}}ss.FACEBOOK_SIGN_IN_METHOD="facebook.com";ss.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os extends Uu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return po._fromParams({providerId:os.PROVIDER_ID,signInMethod:os.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return os.credentialFromTaggedObject(e)}static credentialFromError(e){return os.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return os.credential(t,r)}catch{return null}}}os.GOOGLE_SIGN_IN_METHOD="google.com";os.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as extends Uu{constructor(){super("github.com")}static credential(e){return po._fromParams({providerId:as.PROVIDER_ID,signInMethod:as.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return as.credentialFromTaggedObject(e)}static credentialFromError(e){return as.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return as.credential(e.oauthAccessToken)}catch{return null}}}as.GITHUB_SIGN_IN_METHOD="github.com";as.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls extends Uu{constructor(){super("twitter.com")}static credential(e,t){return po._fromParams({providerId:ls.PROVIDER_ID,signInMethod:ls.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ls.credentialFromTaggedObject(e)}static credentialFromError(e){return ls.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return ls.credential(t,r)}catch{return null}}}ls.TWITTER_SIGN_IN_METHOD="twitter.com";ls.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t1(n,e){return Fu(n,"POST","/v1/accounts:signUp",ws(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,o=!1){const a=await ur._fromIdTokenResponse(e,r,o),u=Hv(r);return new mo({user:a,providerId:u,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const o=Hv(r);return new mo({user:e,providerId:o,_tokenResponse:r,operationType:t})}}function Hv(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh extends mr{constructor(e,t,r,o){super(t.code,t.message),this.operationType=r,this.user=o,Object.setPrototypeOf(this,Hh.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,o){return new Hh(e,t,r,o)}}function YI(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?Hh._fromErrorAndOperation(n,a,e,r):a})}async function n1(n,e,t=!1){const r=await _u(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return mo._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function r1(n,e,t=!1){const{auth:r}=n;if(Vn(r.app))return Promise.reject(_i(r));const o="reauthenticate";try{const a=await _u(n,YI(r,o,e,n),t);xe(a.idToken,r,"internal-error");const u=Gm(a.idToken);xe(u,r,"internal-error");const{sub:d}=u;return xe(n.uid===d,r,"user-mismatch"),mo._forOperation(n,o,a)}catch(a){throw a?.code==="auth/user-not-found"&&fr(r,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XI(n,e,t=!1){if(Vn(n.app))return Promise.reject(_i(n));const r="signIn",o=await YI(n,r,e),a=await mo._fromIdTokenResponse(n,r,o);return t||await n._updateCurrentUser(a.user),a}async function i1(n,e){return XI(Co(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JI(n){const e=Co(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function s1(n,e,t){if(Vn(n.app))return Promise.reject(_i(n));const r=Co(n),u=await am(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",t1).catch(f=>{throw f.code==="auth/password-does-not-meet-requirements"&&JI(n),f}),d=await mo._fromIdTokenResponse(r,"signIn",u);return await r._updateCurrentUser(d.user),d}function o1(n,e,t){return Vn(n.app)?Promise.reject(_i(n)):i1(mt(n),Ja.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&JI(n),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a1(n,e){return mt(n).setPersistence(e)}function l1(n,e,t,r){return mt(n).onIdTokenChanged(e,t,r)}function u1(n,e,t){return mt(n).beforeAuthStateChanged(e,t)}function c1(n,e,t,r){return mt(n).onAuthStateChanged(e,t,r)}function h1(n){return mt(n).signOut()}const Qh="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Qh,"1"),this.storage.removeItem(Qh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d1=1e3,f1=10;class eT extends ZI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=qI(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),o=this.localCache[t];r!==o&&e(t,o,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((u,d,f)=>{this.notifyListeners(u,f)});return}const r=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const u=this.storage.getItem(r);!t&&this.localCache[r]===u||this.notifyListeners(r,u)},a=this.storage.getItem(r);bb()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,f1):o()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},d1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}eT.type="LOCAL";const tT=eT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nT extends ZI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}nT.type="SESSION";const rT=nT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p1(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const r=new Sd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:o,data:a}=t.data,u=this.handlersMap[o];if(!u?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:o});const d=Array.from(u).map(async m=>m(t.origin,a)),f=await p1(d);t.ports[0].postMessage({status:"done",eventId:r,eventType:o,response:f})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Sd.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ym(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let a,u;return new Promise((d,f)=>{const m=Ym("",20);o.port1.start();const v=setTimeout(()=>{f(new Error("unsupported_event"))},r);u={messageChannel:o,onMessage(E){const S=E;if(S.data.eventId===m)switch(S.data.status){case"ack":clearTimeout(v),a=setTimeout(()=>{f(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),d(S.data.response);break;default:clearTimeout(v),clearTimeout(a),f(new Error("invalid_response"));break}}},this.handlers.add(u),o.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:m,data:t},[o.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jr(){return window}function g1(n){jr().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iT(){return typeof jr().WorkerGlobalScope<"u"&&typeof jr().importScripts=="function"}async function y1(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function _1(){return navigator?.serviceWorker?.controller||null}function v1(){return iT()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sT="firebaseLocalStorageDb",w1=1,Yh="firebaseLocalStorage",oT="fbase_key";class Bu{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ad(n,e){return n.transaction([Yh],e?"readwrite":"readonly").objectStore(Yh)}function E1(){const n=indexedDB.deleteDatabase(sT);return new Bu(n).toPromise()}function lm(){const n=indexedDB.open(sT,w1);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Yh,{keyPath:oT})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Yh)?e(r):(r.close(),await E1(),e(await lm()))})})}async function Qv(n,e,t){const r=Ad(n,!0).put({[oT]:e,value:t});return new Bu(r).toPromise()}async function I1(n,e){const t=Ad(n,!1).get(e),r=await new Bu(t).toPromise();return r===void 0?null:r.value}function Yv(n,e){const t=Ad(n,!0).delete(e);return new Bu(t).toPromise()}const T1=800,S1=3;class aT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await lm(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>S1)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return iT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Sd._getInstance(v1()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await y1(),!this.activeServiceWorker)return;this.sender=new m1(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||_1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await lm();return await Qv(e,Qh,"1"),await Yv(e,Qh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Qv(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>I1(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Yv(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const a=Ad(o,!1).getAll();return new Bu(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:o,value:a}of e)r.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(a)&&(this.notifyListeners(o,a),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!r.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),T1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}aT.type="LOCAL";const A1=aT;new Lu(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R1(n,e){return e?mi(e):(xe(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm extends Hm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Va(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Va(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Va(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function k1(n){return XI(n.auth,new Xm(n),n.bypassAuthState)}function P1(n){const{auth:e,user:t}=n;return xe(t,e,"internal-error"),r1(t,new Xm(n),n.bypassAuthState)}async function b1(n){const{auth:e,user:t}=n;return xe(t,e,"internal-error"),n1(t,new Xm(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lT{constructor(e,t,r,o,a=!1){this.auth=e,this.resolver=r,this.user=o,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:o,tenantId:a,error:u,type:d}=e;if(u){this.reject(u);return}const f={auth:this.auth,requestUri:t,sessionId:r,tenantId:a||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(f))}catch(m){this.reject(m)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return k1;case"linkViaPopup":case"linkViaRedirect":return b1;case"reauthViaPopup":case"reauthViaRedirect":return P1;default:fr(this.auth,"internal-error")}}resolve(e){wi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){wi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C1=new Lu(2e3,1e4);class Ca extends lT{constructor(e,t,r,o,a){super(e,t,o,a),this.provider=r,this.authWindow=null,this.pollId=null,Ca.currentPopupAction&&Ca.currentPopupAction.cancel(),Ca.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return xe(e,this.auth,"internal-error"),e}async onExecution(){wi(this.filter.length===1,"Popup operations only handle one event");const e=Ym();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Br(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Br(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ca.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Br(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,C1.get())};e()}}Ca.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x1="pendingRedirect",Rh=new Map;class N1 extends lT{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Rh.get(this.auth._key());if(!e){try{const r=await D1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Rh.set(this.auth._key(),e)}return this.bypassAuthState||Rh.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function D1(n,e){const t=M1(e),r=O1(n);if(!await r._isAvailable())return!1;const o=await r._get(t)==="true";return await r._remove(t),o}function V1(n,e){Rh.set(n._key(),e)}function O1(n){return mi(n._redirectPersistence)}function M1(n){return Ah(x1,n.config.apiKey,n.name)}async function L1(n,e,t=!1){if(Vn(n.app))return Promise.reject(_i(n));const r=Co(n),o=R1(r,e),u=await new N1(r,o,t).execute();return u&&!t&&(delete u.user._redirectEventId,await r._persistUserIfCurrent(u.user),await r._setRedirectUser(null,e)),u}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F1=600*1e3;class U1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!B1(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!uT(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";t.onError(Br(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=F1&&this.cachedEventUids.clear(),this.cachedEventUids.has(Xv(e))}saveEventToCache(e){this.cachedEventUids.add(Xv(e)),this.lastProcessedEventTime=Date.now()}}function Xv(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function uT({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function B1(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return uT(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j1(n,e={}){return Es(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,$1=/^https?/;async function q1(n){if(n.config.emulator)return;const{authorizedDomains:e}=await j1(n);for(const t of e)try{if(K1(t))return}catch{}fr(n,"unauthorized-domain")}function K1(n){const e=sm(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const u=new URL(n);return u.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&u.hostname===r}if(!$1.test(t))return!1;if(z1.test(n))return r===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G1=new Lu(3e4,6e4);function Jv(){const n=jr().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function W1(n){return new Promise((e,t)=>{function r(){Jv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Jv(),t(Br(n,"network-request-failed"))},timeout:G1.get()})}if(jr().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(jr().gapi?.load)r();else{const o=Fb("iframefcb");return jr()[o]=()=>{gapi.load?r():t(Br(n,"network-request-failed"))},GI(`${Lb()}?onload=${o}`).catch(a=>t(a))}}).catch(e=>{throw kh=null,e})}let kh=null;function H1(n){return kh=kh||W1(n),kh}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q1=new Lu(5e3,15e3),Y1="__/auth/iframe",X1="emulator/auth/iframe",J1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Z1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function eC(n){const e=n.config;xe(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Km(e,X1):`https://${n.config.authDomain}/${Y1}`,r={apiKey:e.apiKey,appName:n.name,v:bo},o=Z1.get(n.config.apiHost);o&&(r.eid=o);const a=n._getFrameworks();return a.length&&(r.fw=a.join(",")),`${t}?${Mu(r).slice(1)}`}async function tC(n){const e=await H1(n),t=jr().gapi;return xe(t,n,"internal-error"),e.open({where:document.body,url:eC(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:J1,dontclear:!0},r=>new Promise(async(o,a)=>{await r.restyle({setHideOnLeave:!1});const u=Br(n,"network-request-failed"),d=jr().setTimeout(()=>{a(u)},Q1.get());function f(){jr().clearTimeout(d),o(r)}r.ping(f).then(f,()=>{a(u)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},rC=500,iC=600,sC="_blank",oC="http://localhost";class Zv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function aC(n,e,t,r=rC,o=iC){const a=Math.max((window.screen.availHeight-o)/2,0).toString(),u=Math.max((window.screen.availWidth-r)/2,0).toString();let d="";const f={...nC,width:r.toString(),height:o.toString(),top:a,left:u},m=Lt().toLowerCase();t&&(d=UI(m)?sC:t),LI(m)&&(e=e||oC,f.scrollbars="yes");const v=Object.entries(f).reduce((S,[x,B])=>`${S}${x}=${B},`,"");if(Pb(m)&&d!=="_self")return lC(e||"",d),new Zv(null);const E=window.open(e||"",d,v);xe(E,n,"popup-blocked");try{E.focus()}catch{}return new Zv(E)}function lC(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uC="__/auth/handler",cC="emulator/auth/handler",hC=encodeURIComponent("fac");async function ew(n,e,t,r,o,a){xe(n.config.authDomain,n,"auth-domain-config-required"),xe(n.config.apiKey,n,"invalid-api-key");const u={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:bo,eventId:o};if(e instanceof QI){e.setDefaultLanguage(n.languageCode),u.providerId=e.providerId||"",Xk(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,E]of Object.entries({}))u[v]=E}if(e instanceof Uu){const v=e.getScopes().filter(E=>E!=="");v.length>0&&(u.scopes=v.join(","))}n.tenantId&&(u.tid=n.tenantId);const d=u;for(const v of Object.keys(d))d[v]===void 0&&delete d[v];const f=await n._getAppCheckToken(),m=f?`#${hC}=${encodeURIComponent(f)}`:"";return`${dC(n)}?${Mu(d).slice(1)}${m}`}function dC({config:n}){return n.emulator?Km(n,cC):`https://${n.authDomain}/${uC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Up="webStorageSupport";class fC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=rT,this._completeRedirectFn=L1,this._overrideRedirectResult=V1}async _openPopup(e,t,r,o){wi(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const a=await ew(e,t,r,sm(),o);return aC(e,a,Ym())}async _openRedirect(e,t,r,o){await this._originValidation(e);const a=await ew(e,t,r,sm(),o);return g1(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:a}=this.eventManagers[t];return o?Promise.resolve(o):(wi(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await tC(e),r=new U1(e);return t.register("authEvent",o=>(xe(o?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Up,{type:Up},o=>{const a=o?.[0]?.[Up];a!==void 0&&t(!!a),fr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=q1(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return qI()||FI()||Wm()}}const pC=fC;var tw="@firebase/auth",nw="1.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){xe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gC(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function yC(n){dr(new Yn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:u,authDomain:d}=r.options;xe(u&&!u.includes(":"),"invalid-api-key",{appName:r.name});const f={apiKey:u,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:KI(n)},m=new Vb(r,o,a,f);return qb(m,t),m},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),dr(new Yn("auth-internal",e=>{const t=Co(e.getProvider("auth").getImmediate());return(r=>new mC(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),In(tw,nw,gC(n)),In(tw,nw,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _C=300,vC=_I("authIdTokenMaxAge")||_C;let rw=null;const wC=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>vC)return;const o=t?.token;rw!==o&&(rw=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function EC(n=Id()){const e=Po(n,"auth");if(e.isInitialized())return e.getImmediate();const t=$b(n,{popupRedirectResolver:pC,persistence:[A1,tT,rT]}),r=_I("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(r,location.origin);if(location.origin===a.origin){const u=wC(a.toString());u1(t,u,()=>u(t.currentUser)),l1(t,d=>u(d))}}const o=mI("auth");return o&&Kb(t,`http://${o}`),t}function IC(){return document.getElementsByTagName("head")?.[0]??document}Ob({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=o=>{const a=Br("internal-error");a.customData=o,t(a)},r.type="text/javascript",r.charset="UTF-8",IC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});yC("Browser");var TC="firebase",SC="12.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */In(TC,SC,"app");var iw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ds,cT;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(P,T){function k(){}k.prototype=T.prototype,P.F=T.prototype,P.prototype=new k,P.prototype.constructor=P,P.D=function(N,C,V){for(var A=Array(arguments.length-2),ze=2;ze<arguments.length;ze++)A[ze-2]=arguments[ze];return T.prototype[C].apply(N,A)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(P,T,k){k||(k=0);const N=Array(16);if(typeof T=="string")for(var C=0;C<16;++C)N[C]=T.charCodeAt(k++)|T.charCodeAt(k++)<<8|T.charCodeAt(k++)<<16|T.charCodeAt(k++)<<24;else for(C=0;C<16;++C)N[C]=T[k++]|T[k++]<<8|T[k++]<<16|T[k++]<<24;T=P.g[0],k=P.g[1],C=P.g[2];let V=P.g[3],A;A=T+(V^k&(C^V))+N[0]+3614090360&4294967295,T=k+(A<<7&4294967295|A>>>25),A=V+(C^T&(k^C))+N[1]+3905402710&4294967295,V=T+(A<<12&4294967295|A>>>20),A=C+(k^V&(T^k))+N[2]+606105819&4294967295,C=V+(A<<17&4294967295|A>>>15),A=k+(T^C&(V^T))+N[3]+3250441966&4294967295,k=C+(A<<22&4294967295|A>>>10),A=T+(V^k&(C^V))+N[4]+4118548399&4294967295,T=k+(A<<7&4294967295|A>>>25),A=V+(C^T&(k^C))+N[5]+1200080426&4294967295,V=T+(A<<12&4294967295|A>>>20),A=C+(k^V&(T^k))+N[6]+2821735955&4294967295,C=V+(A<<17&4294967295|A>>>15),A=k+(T^C&(V^T))+N[7]+4249261313&4294967295,k=C+(A<<22&4294967295|A>>>10),A=T+(V^k&(C^V))+N[8]+1770035416&4294967295,T=k+(A<<7&4294967295|A>>>25),A=V+(C^T&(k^C))+N[9]+2336552879&4294967295,V=T+(A<<12&4294967295|A>>>20),A=C+(k^V&(T^k))+N[10]+4294925233&4294967295,C=V+(A<<17&4294967295|A>>>15),A=k+(T^C&(V^T))+N[11]+2304563134&4294967295,k=C+(A<<22&4294967295|A>>>10),A=T+(V^k&(C^V))+N[12]+1804603682&4294967295,T=k+(A<<7&4294967295|A>>>25),A=V+(C^T&(k^C))+N[13]+4254626195&4294967295,V=T+(A<<12&4294967295|A>>>20),A=C+(k^V&(T^k))+N[14]+2792965006&4294967295,C=V+(A<<17&4294967295|A>>>15),A=k+(T^C&(V^T))+N[15]+1236535329&4294967295,k=C+(A<<22&4294967295|A>>>10),A=T+(C^V&(k^C))+N[1]+4129170786&4294967295,T=k+(A<<5&4294967295|A>>>27),A=V+(k^C&(T^k))+N[6]+3225465664&4294967295,V=T+(A<<9&4294967295|A>>>23),A=C+(T^k&(V^T))+N[11]+643717713&4294967295,C=V+(A<<14&4294967295|A>>>18),A=k+(V^T&(C^V))+N[0]+3921069994&4294967295,k=C+(A<<20&4294967295|A>>>12),A=T+(C^V&(k^C))+N[5]+3593408605&4294967295,T=k+(A<<5&4294967295|A>>>27),A=V+(k^C&(T^k))+N[10]+38016083&4294967295,V=T+(A<<9&4294967295|A>>>23),A=C+(T^k&(V^T))+N[15]+3634488961&4294967295,C=V+(A<<14&4294967295|A>>>18),A=k+(V^T&(C^V))+N[4]+3889429448&4294967295,k=C+(A<<20&4294967295|A>>>12),A=T+(C^V&(k^C))+N[9]+568446438&4294967295,T=k+(A<<5&4294967295|A>>>27),A=V+(k^C&(T^k))+N[14]+3275163606&4294967295,V=T+(A<<9&4294967295|A>>>23),A=C+(T^k&(V^T))+N[3]+4107603335&4294967295,C=V+(A<<14&4294967295|A>>>18),A=k+(V^T&(C^V))+N[8]+1163531501&4294967295,k=C+(A<<20&4294967295|A>>>12),A=T+(C^V&(k^C))+N[13]+2850285829&4294967295,T=k+(A<<5&4294967295|A>>>27),A=V+(k^C&(T^k))+N[2]+4243563512&4294967295,V=T+(A<<9&4294967295|A>>>23),A=C+(T^k&(V^T))+N[7]+1735328473&4294967295,C=V+(A<<14&4294967295|A>>>18),A=k+(V^T&(C^V))+N[12]+2368359562&4294967295,k=C+(A<<20&4294967295|A>>>12),A=T+(k^C^V)+N[5]+4294588738&4294967295,T=k+(A<<4&4294967295|A>>>28),A=V+(T^k^C)+N[8]+2272392833&4294967295,V=T+(A<<11&4294967295|A>>>21),A=C+(V^T^k)+N[11]+1839030562&4294967295,C=V+(A<<16&4294967295|A>>>16),A=k+(C^V^T)+N[14]+4259657740&4294967295,k=C+(A<<23&4294967295|A>>>9),A=T+(k^C^V)+N[1]+2763975236&4294967295,T=k+(A<<4&4294967295|A>>>28),A=V+(T^k^C)+N[4]+1272893353&4294967295,V=T+(A<<11&4294967295|A>>>21),A=C+(V^T^k)+N[7]+4139469664&4294967295,C=V+(A<<16&4294967295|A>>>16),A=k+(C^V^T)+N[10]+3200236656&4294967295,k=C+(A<<23&4294967295|A>>>9),A=T+(k^C^V)+N[13]+681279174&4294967295,T=k+(A<<4&4294967295|A>>>28),A=V+(T^k^C)+N[0]+3936430074&4294967295,V=T+(A<<11&4294967295|A>>>21),A=C+(V^T^k)+N[3]+3572445317&4294967295,C=V+(A<<16&4294967295|A>>>16),A=k+(C^V^T)+N[6]+76029189&4294967295,k=C+(A<<23&4294967295|A>>>9),A=T+(k^C^V)+N[9]+3654602809&4294967295,T=k+(A<<4&4294967295|A>>>28),A=V+(T^k^C)+N[12]+3873151461&4294967295,V=T+(A<<11&4294967295|A>>>21),A=C+(V^T^k)+N[15]+530742520&4294967295,C=V+(A<<16&4294967295|A>>>16),A=k+(C^V^T)+N[2]+3299628645&4294967295,k=C+(A<<23&4294967295|A>>>9),A=T+(C^(k|~V))+N[0]+4096336452&4294967295,T=k+(A<<6&4294967295|A>>>26),A=V+(k^(T|~C))+N[7]+1126891415&4294967295,V=T+(A<<10&4294967295|A>>>22),A=C+(T^(V|~k))+N[14]+2878612391&4294967295,C=V+(A<<15&4294967295|A>>>17),A=k+(V^(C|~T))+N[5]+4237533241&4294967295,k=C+(A<<21&4294967295|A>>>11),A=T+(C^(k|~V))+N[12]+1700485571&4294967295,T=k+(A<<6&4294967295|A>>>26),A=V+(k^(T|~C))+N[3]+2399980690&4294967295,V=T+(A<<10&4294967295|A>>>22),A=C+(T^(V|~k))+N[10]+4293915773&4294967295,C=V+(A<<15&4294967295|A>>>17),A=k+(V^(C|~T))+N[1]+2240044497&4294967295,k=C+(A<<21&4294967295|A>>>11),A=T+(C^(k|~V))+N[8]+1873313359&4294967295,T=k+(A<<6&4294967295|A>>>26),A=V+(k^(T|~C))+N[15]+4264355552&4294967295,V=T+(A<<10&4294967295|A>>>22),A=C+(T^(V|~k))+N[6]+2734768916&4294967295,C=V+(A<<15&4294967295|A>>>17),A=k+(V^(C|~T))+N[13]+1309151649&4294967295,k=C+(A<<21&4294967295|A>>>11),A=T+(C^(k|~V))+N[4]+4149444226&4294967295,T=k+(A<<6&4294967295|A>>>26),A=V+(k^(T|~C))+N[11]+3174756917&4294967295,V=T+(A<<10&4294967295|A>>>22),A=C+(T^(V|~k))+N[2]+718787259&4294967295,C=V+(A<<15&4294967295|A>>>17),A=k+(V^(C|~T))+N[9]+3951481745&4294967295,P.g[0]=P.g[0]+T&4294967295,P.g[1]=P.g[1]+(C+(A<<21&4294967295|A>>>11))&4294967295,P.g[2]=P.g[2]+C&4294967295,P.g[3]=P.g[3]+V&4294967295}r.prototype.v=function(P,T){T===void 0&&(T=P.length);const k=T-this.blockSize,N=this.C;let C=this.h,V=0;for(;V<T;){if(C==0)for(;V<=k;)o(this,P,V),V+=this.blockSize;if(typeof P=="string"){for(;V<T;)if(N[C++]=P.charCodeAt(V++),C==this.blockSize){o(this,N),C=0;break}}else for(;V<T;)if(N[C++]=P[V++],C==this.blockSize){o(this,N),C=0;break}}this.h=C,this.o+=T},r.prototype.A=function(){var P=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);P[0]=128;for(var T=1;T<P.length-8;++T)P[T]=0;T=this.o*8;for(var k=P.length-8;k<P.length;++k)P[k]=T&255,T/=256;for(this.v(P),P=Array(16),T=0,k=0;k<4;++k)for(let N=0;N<32;N+=8)P[T++]=this.g[k]>>>N&255;return P};function a(P,T){var k=d;return Object.prototype.hasOwnProperty.call(k,P)?k[P]:k[P]=T(P)}function u(P,T){this.h=T;const k=[];let N=!0;for(let C=P.length-1;C>=0;C--){const V=P[C]|0;N&&V==T||(k[C]=V,N=!1)}this.g=k}var d={};function f(P){return-128<=P&&P<128?a(P,function(T){return new u([T|0],T<0?-1:0)}):new u([P|0],P<0?-1:0)}function m(P){if(isNaN(P)||!isFinite(P))return E;if(P<0)return O(m(-P));const T=[];let k=1;for(let N=0;P>=k;N++)T[N]=P/k|0,k*=4294967296;return new u(T,0)}function v(P,T){if(P.length==0)throw Error("number format error: empty string");if(T=T||10,T<2||36<T)throw Error("radix out of range: "+T);if(P.charAt(0)=="-")return O(v(P.substring(1),T));if(P.indexOf("-")>=0)throw Error('number format error: interior "-" character');const k=m(Math.pow(T,8));let N=E;for(let V=0;V<P.length;V+=8){var C=Math.min(8,P.length-V);const A=parseInt(P.substring(V,V+C),T);C<8?(C=m(Math.pow(T,C)),N=N.j(C).add(m(A))):(N=N.j(k),N=N.add(m(A)))}return N}var E=f(0),S=f(1),x=f(16777216);n=u.prototype,n.m=function(){if(q(this))return-O(this).m();let P=0,T=1;for(let k=0;k<this.g.length;k++){const N=this.i(k);P+=(N>=0?N:4294967296+N)*T,T*=4294967296}return P},n.toString=function(P){if(P=P||10,P<2||36<P)throw Error("radix out of range: "+P);if(B(this))return"0";if(q(this))return"-"+O(this).toString(P);const T=m(Math.pow(P,6));var k=this;let N="";for(;;){const C=ce(k,T).g;k=ne(k,C.j(T));let V=((k.g.length>0?k.g[0]:k.h)>>>0).toString(P);if(k=C,B(k))return V+N;for(;V.length<6;)V="0"+V;N=V+N}},n.i=function(P){return P<0?0:P<this.g.length?this.g[P]:this.h};function B(P){if(P.h!=0)return!1;for(let T=0;T<P.g.length;T++)if(P.g[T]!=0)return!1;return!0}function q(P){return P.h==-1}n.l=function(P){return P=ne(this,P),q(P)?-1:B(P)?0:1};function O(P){const T=P.g.length,k=[];for(let N=0;N<T;N++)k[N]=~P.g[N];return new u(k,~P.h).add(S)}n.abs=function(){return q(this)?O(this):this},n.add=function(P){const T=Math.max(this.g.length,P.g.length),k=[];let N=0;for(let C=0;C<=T;C++){let V=N+(this.i(C)&65535)+(P.i(C)&65535),A=(V>>>16)+(this.i(C)>>>16)+(P.i(C)>>>16);N=A>>>16,V&=65535,A&=65535,k[C]=A<<16|V}return new u(k,k[k.length-1]&-2147483648?-1:0)};function ne(P,T){return P.add(O(T))}n.j=function(P){if(B(this)||B(P))return E;if(q(this))return q(P)?O(this).j(O(P)):O(O(this).j(P));if(q(P))return O(this.j(O(P)));if(this.l(x)<0&&P.l(x)<0)return m(this.m()*P.m());const T=this.g.length+P.g.length,k=[];for(var N=0;N<2*T;N++)k[N]=0;for(N=0;N<this.g.length;N++)for(let C=0;C<P.g.length;C++){const V=this.i(N)>>>16,A=this.i(N)&65535,ze=P.i(C)>>>16,st=P.i(C)&65535;k[2*N+2*C]+=A*st,re(k,2*N+2*C),k[2*N+2*C+1]+=V*st,re(k,2*N+2*C+1),k[2*N+2*C+1]+=A*ze,re(k,2*N+2*C+1),k[2*N+2*C+2]+=V*ze,re(k,2*N+2*C+2)}for(P=0;P<T;P++)k[P]=k[2*P+1]<<16|k[2*P];for(P=T;P<2*T;P++)k[P]=0;return new u(k,0)};function re(P,T){for(;(P[T]&65535)!=P[T];)P[T+1]+=P[T]>>>16,P[T]&=65535,T++}function te(P,T){this.g=P,this.h=T}function ce(P,T){if(B(T))throw Error("division by zero");if(B(P))return new te(E,E);if(q(P))return T=ce(O(P),T),new te(O(T.g),O(T.h));if(q(T))return T=ce(P,O(T)),new te(O(T.g),T.h);if(P.g.length>30){if(q(P)||q(T))throw Error("slowDivide_ only works with positive integers.");for(var k=S,N=T;N.l(P)<=0;)k=he(k),N=he(N);var C=ue(k,1),V=ue(N,1);for(N=ue(N,2),k=ue(k,2);!B(N);){var A=V.add(N);A.l(P)<=0&&(C=C.add(k),V=A),N=ue(N,1),k=ue(k,1)}return T=ne(P,C.j(T)),new te(C,T)}for(C=E;P.l(T)>=0;){for(k=Math.max(1,Math.floor(P.m()/T.m())),N=Math.ceil(Math.log(k)/Math.LN2),N=N<=48?1:Math.pow(2,N-48),V=m(k),A=V.j(T);q(A)||A.l(P)>0;)k-=N,V=m(k),A=V.j(T);B(V)&&(V=S),C=C.add(V),P=ne(P,A)}return new te(C,P)}n.B=function(P){return ce(this,P).h},n.and=function(P){const T=Math.max(this.g.length,P.g.length),k=[];for(let N=0;N<T;N++)k[N]=this.i(N)&P.i(N);return new u(k,this.h&P.h)},n.or=function(P){const T=Math.max(this.g.length,P.g.length),k=[];for(let N=0;N<T;N++)k[N]=this.i(N)|P.i(N);return new u(k,this.h|P.h)},n.xor=function(P){const T=Math.max(this.g.length,P.g.length),k=[];for(let N=0;N<T;N++)k[N]=this.i(N)^P.i(N);return new u(k,this.h^P.h)};function he(P){const T=P.g.length+1,k=[];for(let N=0;N<T;N++)k[N]=P.i(N)<<1|P.i(N-1)>>>31;return new u(k,P.h)}function ue(P,T){const k=T>>5;T%=32;const N=P.g.length-k,C=[];for(let V=0;V<N;V++)C[V]=T>0?P.i(V+k)>>>T|P.i(V+k+1)<<32-T:P.i(V+k);return new u(C,P.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,cT=r,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.B,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=m,u.fromString=v,ds=u}).apply(typeof iw<"u"?iw:typeof self<"u"?self:typeof window<"u"?window:{});var gh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var hT,nu,dT,Ph,um,fT,pT,mT;(function(){var n,e=Object.defineProperty;function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof gh=="object"&&gh];for(var y=0;y<c.length;++y){var _=c[y];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var r=t(this);function o(c,y){if(y)e:{var _=r;c=c.split(".");for(var I=0;I<c.length-1;I++){var U=c[I];if(!(U in _))break e;_=_[U]}c=c[c.length-1],I=_[c],y=y(I),y!=I&&y!=null&&e(_,c,{configurable:!0,writable:!0,value:y})}}o("Symbol.dispose",function(c){return c||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(c){return c||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(c){return c||function(y){var _=[],I;for(I in y)Object.prototype.hasOwnProperty.call(y,I)&&_.push([I,y[I]]);return _}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function d(c){var y=typeof c;return y=="object"&&c!=null||y=="function"}function f(c,y,_){return c.call.apply(c.bind,arguments)}function m(c,y,_){return m=f,m.apply(null,arguments)}function v(c,y){var _=Array.prototype.slice.call(arguments,1);return function(){var I=_.slice();return I.push.apply(I,arguments),c.apply(this,I)}}function E(c,y){function _(){}_.prototype=y.prototype,c.Z=y.prototype,c.prototype=new _,c.prototype.constructor=c,c.Ob=function(I,U,$){for(var ae=Array(arguments.length-2),Oe=2;Oe<arguments.length;Oe++)ae[Oe-2]=arguments[Oe];return y.prototype[U].apply(I,ae)}}var S=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?c=>c&&AsyncContext.Snapshot.wrap(c):c=>c;function x(c){const y=c.length;if(y>0){const _=Array(y);for(let I=0;I<y;I++)_[I]=c[I];return _}return[]}function B(c,y){for(let I=1;I<arguments.length;I++){const U=arguments[I];var _=typeof U;if(_=_!="object"?_:U?Array.isArray(U)?"array":_:"null",_=="array"||_=="object"&&typeof U.length=="number"){_=c.length||0;const $=U.length||0;c.length=_+$;for(let ae=0;ae<$;ae++)c[_+ae]=U[ae]}else c.push(U)}}class q{constructor(y,_){this.i=y,this.j=_,this.h=0,this.g=null}get(){let y;return this.h>0?(this.h--,y=this.g,this.g=y.next,y.next=null):y=this.i(),y}}function O(c){u.setTimeout(()=>{throw c},0)}function ne(){var c=P;let y=null;return c.g&&(y=c.g,c.g=c.g.next,c.g||(c.h=null),y.next=null),y}class re{constructor(){this.h=this.g=null}add(y,_){const I=te.get();I.set(y,_),this.h?this.h.next=I:this.g=I,this.h=I}}var te=new q(()=>new ce,c=>c.reset());class ce{constructor(){this.next=this.g=this.h=null}set(y,_){this.h=y,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let he,ue=!1,P=new re,T=()=>{const c=Promise.resolve(void 0);he=()=>{c.then(k)}};function k(){for(var c;c=ne();){try{c.h.call(c.g)}catch(_){O(_)}var y=te;y.j(c),y.h<100&&(y.h++,c.next=y.g,y.g=c)}ue=!1}function N(){this.u=this.u,this.C=this.C}N.prototype.u=!1,N.prototype.dispose=function(){this.u||(this.u=!0,this.N())},N.prototype[Symbol.dispose]=function(){this.dispose()},N.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function C(c,y){this.type=c,this.g=this.target=y,this.defaultPrevented=!1}C.prototype.h=function(){this.defaultPrevented=!0};var V=(function(){if(!u.addEventListener||!Object.defineProperty)return!1;var c=!1,y=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const _=()=>{};u.addEventListener("test",_,y),u.removeEventListener("test",_,y)}catch{}return c})();function A(c){return/^[\s\xa0]*$/.test(c)}function ze(c,y){C.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c&&this.init(c,y)}E(ze,C),ze.prototype.init=function(c,y){const _=this.type=c.type,I=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;this.target=c.target||c.srcElement,this.g=y,y=c.relatedTarget,y||(_=="mouseover"?y=c.fromElement:_=="mouseout"&&(y=c.toElement)),this.relatedTarget=y,I?(this.clientX=I.clientX!==void 0?I.clientX:I.pageX,this.clientY=I.clientY!==void 0?I.clientY:I.pageY,this.screenX=I.screenX||0,this.screenY=I.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=c.pointerType,this.state=c.state,this.i=c,c.defaultPrevented&&ze.Z.h.call(this)},ze.prototype.h=function(){ze.Z.h.call(this);const c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var st="closure_listenable_"+(Math.random()*1e6|0),it=0;function Ge(c,y,_,I,U){this.listener=c,this.proxy=null,this.src=y,this.type=_,this.capture=!!I,this.ha=U,this.key=++it,this.da=this.fa=!1}function W(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Ae(c,y,_){for(const I in c)y.call(_,c[I],I,c)}function de(c,y){for(const _ in c)y.call(void 0,c[_],_,c)}function M(c){const y={};for(const _ in c)y[_]=c[_];return y}const Q="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Te(c,y){let _,I;for(let U=1;U<arguments.length;U++){I=arguments[U];for(_ in I)c[_]=I[_];for(let $=0;$<Q.length;$++)_=Q[$],Object.prototype.hasOwnProperty.call(I,_)&&(c[_]=I[_])}}function Re(c){this.src=c,this.g={},this.h=0}Re.prototype.add=function(c,y,_,I,U){const $=c.toString();c=this.g[$],c||(c=this.g[$]=[],this.h++);const ae=H(c,y,I,U);return ae>-1?(y=c[ae],_||(y.fa=!1)):(y=new Ge(y,this.src,$,!!I,U),y.fa=_,c.push(y)),y};function Me(c,y){const _=y.type;if(_ in c.g){var I=c.g[_],U=Array.prototype.indexOf.call(I,y,void 0),$;($=U>=0)&&Array.prototype.splice.call(I,U,1),$&&(W(y),c.g[_].length==0&&(delete c.g[_],c.h--))}}function H(c,y,_,I){for(let U=0;U<c.length;++U){const $=c[U];if(!$.da&&$.listener==y&&$.capture==!!_&&$.ha==I)return U}return-1}var G="closure_lm_"+(Math.random()*1e6|0),Y={};function oe(c,y,_,I,U){if(Array.isArray(y)){for(let $=0;$<y.length;$++)oe(c,y[$],_,I,U);return null}return _=Xn(_),c&&c[st]?c.J(y,_,d(I)?!!I.capture:!1,U):Ee(c,y,_,!1,I,U)}function Ee(c,y,_,I,U,$){if(!y)throw Error("Invalid event type");const ae=d(U)?!!U.capture:!!U;let Oe=un(c);if(Oe||(c[G]=Oe=new Re(c)),_=Oe.add(y,_,I,ae,$),_.proxy)return _;if(I=Fe(),_.proxy=I,I.src=c,I.listener=_,c.addEventListener)V||(U=ae),U===void 0&&(U=!1),c.addEventListener(y.toString(),I,U);else if(c.attachEvent)c.attachEvent(dt(y.toString()),I);else if(c.addListener&&c.removeListener)c.addListener(I);else throw Error("addEventListener and attachEvent are unavailable.");return _}function Fe(){function c(_){return y.call(c.src,c.listener,_)}const y=Et;return c}function Le(c,y,_,I,U){if(Array.isArray(y))for(var $=0;$<y.length;$++)Le(c,y[$],_,I,U);else I=d(I)?!!I.capture:!!I,_=Xn(_),c&&c[st]?(c=c.i,$=String(y).toString(),$ in c.g&&(y=c.g[$],_=H(y,_,I,U),_>-1&&(W(y[_]),Array.prototype.splice.call(y,_,1),y.length==0&&(delete c.g[$],c.h--)))):c&&(c=un(c))&&(y=c.g[y.toString()],c=-1,y&&(c=H(y,_,I,U)),(_=c>-1?y[c]:null)&&Ye(_))}function Ye(c){if(typeof c!="number"&&c&&!c.da){var y=c.src;if(y&&y[st])Me(y.i,c);else{var _=c.type,I=c.proxy;y.removeEventListener?y.removeEventListener(_,I,c.capture):y.detachEvent?y.detachEvent(dt(_),I):y.addListener&&y.removeListener&&y.removeListener(I),(_=un(y))?(Me(_,c),_.h==0&&(_.src=null,y[G]=null)):W(c)}}}function dt(c){return c in Y?Y[c]:Y[c]="on"+c}function Et(c,y){if(c.da)c=!0;else{y=new ze(y,this);const _=c.listener,I=c.ha||c.src;c.fa&&Ye(c),c=_.call(I,y)}return c}function un(c){return c=c[G],c instanceof Re?c:null}var $t="__closure_events_fn_"+(Math.random()*1e9>>>0);function Xn(c){return typeof c=="function"?c:(c[$t]||(c[$t]=function(y){return c.handleEvent(y)}),c[$t])}function It(){N.call(this),this.i=new Re(this),this.M=this,this.G=null}E(It,N),It.prototype[st]=!0,It.prototype.removeEventListener=function(c,y,_,I){Le(this,c,y,_,I)};function Tt(c,y){var _,I=c.G;if(I)for(_=[];I;I=I.G)_.push(I);if(c=c.M,I=y.type||y,typeof y=="string")y=new C(y,c);else if(y instanceof C)y.target=y.target||c;else{var U=y;y=new C(I,c),Te(y,U)}U=!0;let $,ae;if(_)for(ae=_.length-1;ae>=0;ae--)$=y.g=_[ae],U=pn($,I,!0,y)&&U;if($=y.g=c,U=pn($,I,!0,y)&&U,U=pn($,I,!1,y)&&U,_)for(ae=0;ae<_.length;ae++)$=y.g=_[ae],U=pn($,I,!1,y)&&U}It.prototype.N=function(){if(It.Z.N.call(this),this.i){var c=this.i;for(const y in c.g){const _=c.g[y];for(let I=0;I<_.length;I++)W(_[I]);delete c.g[y],c.h--}}this.G=null},It.prototype.J=function(c,y,_,I){return this.i.add(String(c),y,!1,_,I)},It.prototype.K=function(c,y,_,I){return this.i.add(String(c),y,!0,_,I)};function pn(c,y,_,I){if(y=c.i.g[String(y)],!y)return!0;y=y.concat();let U=!0;for(let $=0;$<y.length;++$){const ae=y[$];if(ae&&!ae.da&&ae.capture==_){const Oe=ae.listener,kt=ae.ha||ae.src;ae.fa&&Me(c.i,ae),U=Oe.call(kt,I)!==!1&&U}}return U&&!I.defaultPrevented}function Wr(c,y){if(typeof c!="function")if(c&&typeof c.handleEvent=="function")c=m(c.handleEvent,c);else throw Error("Invalid listener argument");return Number(y)>2147483647?-1:u.setTimeout(c,y||0)}function Ss(c){c.g=Wr(()=>{c.g=null,c.i&&(c.i=!1,Ss(c))},c.l);const y=c.h;c.h=null,c.m.apply(null,y)}class Do extends N{constructor(y,_){super(),this.m=y,this.l=_,this.h=null,this.i=!1,this.g=null}j(y){this.h=arguments,this.g?this.i=!0:Ss(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ln(c){N.call(this),this.h=c,this.g={}}E(Ln,N);var Ze=[];function gr(c){Ae(c.g,function(y,_){this.g.hasOwnProperty(_)&&Ye(y)},c),c.g={}}Ln.prototype.N=function(){Ln.Z.N.call(this),gr(this)},Ln.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ri=u.JSON.stringify,Zu=u.JSON.parse,As=class{stringify(c){return u.JSON.stringify(c,void 0)}parse(c){return u.JSON.parse(c,void 0)}};function ki(){}function ec(){}var Pi={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Vo(){C.call(this,"d")}E(Vo,C);function rl(){C.call(this,"c")}E(rl,C);var Jn={},Oo=null;function bi(){return Oo=Oo||new It}Jn.Ia="serverreachability";function Mo(c){C.call(this,Jn.Ia,c)}E(Mo,C);function Hr(c){const y=bi();Tt(y,new Mo(y))}Jn.STAT_EVENT="statevent";function Qr(c,y){C.call(this,Jn.STAT_EVENT,c),this.stat=y}E(Qr,C);function St(c){const y=bi();Tt(y,new Qr(y,c))}Jn.Ja="timingevent";function il(c,y){C.call(this,Jn.Ja,c),this.size=y}E(il,C);function Ci(c,y){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){c()},y)}function xi(){this.g=!0}xi.prototype.ua=function(){this.g=!1};function tc(c,y,_,I,U,$){c.info(function(){if(c.g)if($){var ae="",Oe=$.split("&");for(let et=0;et<Oe.length;et++){var kt=Oe[et].split("=");if(kt.length>1){const bt=kt[0];kt=kt[1];const Pn=bt.split("_");ae=Pn.length>=2&&Pn[1]=="type"?ae+(bt+"="+kt+"&"):ae+(bt+"=redacted&")}}}else ae=null;else ae=$;return"XMLHTTP REQ ("+I+") [attempt "+U+"]: "+y+`
`+_+`
`+ae})}function nc(c,y,_,I,U,$,ae){c.info(function(){return"XMLHTTP RESP ("+I+") [ attempt "+U+"]: "+y+`
`+_+`
`+$+" "+ae})}function yr(c,y,_,I){c.info(function(){return"XMLHTTP TEXT ("+y+"): "+Rs(c,_)+(I?" "+I:"")})}function rc(c,y){c.info(function(){return"TIMEOUT: "+y})}xi.prototype.info=function(){};function Rs(c,y){if(!c.g)return y;if(!y)return null;try{const $=JSON.parse(y);if($){for(c=0;c<$.length;c++)if(Array.isArray($[c])){var _=$[c];if(!(_.length<2)){var I=_[1];if(Array.isArray(I)&&!(I.length<1)){var U=I[0];if(U!="noop"&&U!="stop"&&U!="close")for(let ae=1;ae<I.length;ae++)I[ae]=""}}}}return Ri($)}catch{return y}}var Ni={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Di={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},ic;function Yr(){}E(Yr,ki),Yr.prototype.g=function(){return new XMLHttpRequest},ic=new Yr;function _r(c){return encodeURIComponent(String(c))}function Lo(c){var y=1;c=c.split(":");const _=[];for(;y>0&&c.length;)_.push(c.shift()),y--;return c.length&&_.push(c.join(":")),_}function Fn(c,y,_,I){this.j=c,this.i=y,this.l=_,this.S=I||1,this.V=new Ln(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new sc}function sc(){this.i=null,this.g="",this.h=!1}var oc={},sl={};function Zn(c,y,_){c.M=1,c.A=Jr(Un(y)),c.u=_,c.R=!0,ol(c,null)}function ol(c,y){c.F=Date.now(),ks(c),c.B=Un(c.A);var _=c.B,I=c.S;Array.isArray(I)||(I=[String(I)]),gl(_.i,"t",I),c.C=0,_=c.j.L,c.h=new sc,c.g=gc(c.j,_?y:null,!c.u),c.P>0&&(c.O=new Do(m(c.Y,c,c.g),c.P)),y=c.V,_=c.g,I=c.ba;var U="readystatechange";Array.isArray(U)||(U&&(Ze[0]=U.toString()),U=Ze);for(let $=0;$<U.length;$++){const ae=oe(_,U[$],I||y.handleEvent,!1,y.h||y);if(!ae)break;y.g[ae.key]=ae}y=c.J?M(c.J):{},c.u?(c.v||(c.v="POST"),y["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.B,c.v,c.u,y)):(c.v="GET",c.g.ea(c.B,c.v,null,y)),Hr(),tc(c.i,c.v,c.B,c.l,c.S,c.u)}Fn.prototype.ba=function(c){c=c.target;const y=this.O;y&&Ar(c)==3?y.j():this.Y(c)},Fn.prototype.Y=function(c){try{if(c==this.g)e:{const Oe=Ar(this.g),kt=this.g.ya(),et=this.g.ca();if(!(Oe<3)&&(Oe!=3||this.g&&(this.h.h||this.g.la()||pc(this.g)))){this.K||Oe!=4||kt==7||(kt==8||et<=0?Hr(3):Hr(2)),Fo(this);var y=this.g.ca();this.X=y;var _=ac(this);if(this.o=y==200,nc(this.i,this.v,this.B,this.l,this.S,Oe,y),this.o){if(this.U&&!this.L){t:{if(this.g){var I,U=this.g;if((I=U.g?U.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!A(I)){var $=I;break t}}$=null}if(c=$)yr(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,lt(this,c);else{this.o=!1,this.m=3,St(12),Xr(this),Ps(this);break e}}if(this.R){c=!0;let bt;for(;!this.K&&this.C<_.length;)if(bt=uc(this,_),bt==sl){Oe==4&&(this.m=4,St(14),c=!1),yr(this.i,this.l,null,"[Incomplete Response]");break}else if(bt==oc){this.m=4,St(15),yr(this.i,this.l,_,"[Invalid Chunk]"),c=!1;break}else yr(this.i,this.l,bt,null),lt(this,bt);if(lc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Oe!=4||_.length!=0||this.h.h||(this.m=1,St(16),c=!1),this.o=this.o&&c,!c)yr(this.i,this.l,_,"[Invalid Chunked Response]"),Xr(this),Ps(this);else if(_.length>0&&!this.W){this.W=!0;var ae=this.j;ae.g==this&&ae.aa&&!ae.P&&(ae.j.info("Great, no buffering proxy detected. Bytes received: "+_.length),Ls(ae),ae.P=!0,St(11))}}else yr(this.i,this.l,_,null),lt(this,_);Oe==4&&Xr(this),this.o&&!this.K&&(Oe==4?Ho(this.j,this):(this.o=!1,ks(this)))}else _l(this.g),y==400&&_.indexOf("Unknown SID")>0?(this.m=3,St(12)):(this.m=0,St(13)),Xr(this),Ps(this)}}}catch{}finally{}};function ac(c){if(!lc(c))return c.g.la();const y=pc(c.g);if(y==="")return"";let _="";const I=y.length,U=Ar(c.g)==4;if(!c.h.i){if(typeof TextDecoder>"u")return Xr(c),Ps(c),"";c.h.i=new u.TextDecoder}for(let $=0;$<I;$++)c.h.h=!0,_+=c.h.i.decode(y[$],{stream:!(U&&$==I-1)});return y.length=0,c.h.g+=_,c.C=0,c.h.g}function lc(c){return c.g?c.v=="GET"&&c.M!=2&&c.j.Aa:!1}function uc(c,y){var _=c.C,I=y.indexOf(`
`,_);return I==-1?sl:(_=Number(y.substring(_,I)),isNaN(_)?oc:(I+=1,I+_>y.length?sl:(y=y.slice(I,I+_),c.C=I+_,y)))}Fn.prototype.cancel=function(){this.K=!0,Xr(this)};function ks(c){c.T=Date.now()+c.H,al(c,c.H)}function al(c,y){if(c.D!=null)throw Error("WatchDog timer not null");c.D=Ci(m(c.aa,c),y)}function Fo(c){c.D&&(u.clearTimeout(c.D),c.D=null)}Fn.prototype.aa=function(){this.D=null;const c=Date.now();c-this.T>=0?(rc(this.i,this.B),this.M!=2&&(Hr(),St(17)),Xr(this),this.m=2,Ps(this)):al(this,this.T-c)};function Ps(c){c.j.I==0||c.K||Ho(c.j,c)}function Xr(c){Fo(c);var y=c.O;y&&typeof y.dispose=="function"&&y.dispose(),c.O=null,gr(c.V),c.g&&(y=c.g,c.g=null,y.abort(),y.dispose())}function lt(c,y){try{var _=c.j;if(_.I!=0&&(_.g==c||ul(_.h,c))){if(!c.L&&ul(_.h,c)&&_.I==3){try{var I=_.Ba.g.parse(y)}catch{I=null}if(Array.isArray(I)&&I.length==3){var U=I;if(U[0]==0){e:if(!_.v){if(_.g)if(_.g.F+3e3<c.F)Wo(_),Rn(_);else break e;Pr(_),St(18)}}else _.xa=U[1],0<_.xa-_.K&&U[2]<37500&&_.F&&_.A==0&&!_.C&&(_.C=Ci(m(_.Va,_),6e3));bs(_.h)<=1&&_.ta&&(_.ta=void 0)}else kn(_,11)}else if((c.L||_.g==c)&&Wo(_),!A(y))for(U=_.Ba.g.parse(y),y=0;y<U.length;y++){let et=U[y];const bt=et[0];if(!(bt<=_.K))if(_.K=bt,et=et[1],_.I==2)if(et[0]=="c"){_.M=et[1],_.ba=et[2];const Pn=et[3];Pn!=null&&(_.ka=Pn,_.j.info("VER="+_.ka));const ri=et[4];ri!=null&&(_.za=ri,_.j.info("SVER="+_.za));const br=et[5];br!=null&&typeof br=="number"&&br>0&&(I=1.5*br,_.O=I,_.j.info("backChannelRequestTimeoutMs_="+I)),I=_;const Cr=c.g;if(Cr){const Xo=Cr.g?Cr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Xo){var $=I.h;$.g||Xo.indexOf("spdy")==-1&&Xo.indexOf("quic")==-1&&Xo.indexOf("h2")==-1||($.j=$.l,$.g=new Set,$.h&&(Bo($,$.h),$.h=null))}if(I.G){const El=Cr.g?Cr.g.getResponseHeader("X-HTTP-Session-Id"):null;El&&(I.wa=El,Xe(I.J,I.G,El))}}_.I=3,_.l&&_.l.ra(),_.aa&&(_.T=Date.now()-c.F,_.j.info("Handshake RTT: "+_.T+"ms")),I=_;var ae=c;if(I.na=wl(I,I.L?I.ba:null,I.W),ae.L){Cs(I.h,ae);var Oe=ae,kt=I.O;kt&&(Oe.H=kt),Oe.D&&(Fo(Oe),ks(Oe)),I.g=ae}else Xt(I);_.i.length>0&&ni(_)}else et[0]!="stop"&&et[0]!="close"||kn(_,7);else _.I==3&&(et[0]=="stop"||et[0]=="close"?et[0]=="stop"?kn(_,7):Ko(_):et[0]!="noop"&&_.l&&_.l.qa(et),_.A=0)}}Hr(4)}catch{}}var tf=class{constructor(c,y){this.g=c,this.map=y}};function Uo(c){this.l=c||10,u.PerformanceNavigationTiming?(c=u.performance.getEntriesByType("navigation"),c=c.length>0&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function ll(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function bs(c){return c.h?1:c.g?c.g.size:0}function ul(c,y){return c.h?c.h==y:c.g?c.g.has(y):!1}function Bo(c,y){c.g?c.g.add(y):c.h=y}function Cs(c,y){c.h&&c.h==y?c.h=null:c.g&&c.g.has(y)&&c.g.delete(y)}Uo.prototype.cancel=function(){if(this.i=Tn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Tn(c){if(c.h!=null)return c.i.concat(c.h.G);if(c.g!=null&&c.g.size!==0){let y=c.i;for(const _ of c.g.values())y=y.concat(_.G);return y}return x(c.i)}var cc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Sn(c,y){if(c){c=c.split("&");for(let _=0;_<c.length;_++){const I=c[_].indexOf("=");let U,$=null;I>=0?(U=c[_].substring(0,I),$=c[_].substring(I+1)):U=c[_],y(U,$?decodeURIComponent($.replace(/\+/g," ")):"")}}}function vr(c){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let y;c instanceof vr?(this.l=c.l,xs(this,c.j),this.o=c.o,this.g=c.g,wr(this,c.u),this.h=c.h,Vi(this,yl(c.i)),this.m=c.m):c&&(y=String(c).match(cc))?(this.l=!1,xs(this,y[1]||"",!0),this.o=Ns(y[2]||""),this.g=Ns(y[3]||"",!0),wr(this,y[4]),this.h=Ns(y[5]||"",!0),Vi(this,y[6]||"",!0),this.m=Ns(y[7]||"")):(this.l=!1,this.i=new Ke(null,this.l))}vr.prototype.toString=function(){const c=[];var y=this.j;y&&c.push(Ds(y,hl,!0),":");var _=this.g;return(_||y=="file")&&(c.push("//"),(y=this.o)&&c.push(Ds(y,hl,!0),"@"),c.push(_r(_).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.u,_!=null&&c.push(":",String(_))),(_=this.h)&&(this.g&&_.charAt(0)!="/"&&c.push("/"),c.push(Ds(_,_.charAt(0)=="/"?Vs:dl,!0))),(_=this.i.toString())&&c.push("?",_),(_=this.m)&&c.push("#",Ds(_,fl)),c.join("")},vr.prototype.resolve=function(c){const y=Un(this);let _=!!c.j;_?xs(y,c.j):_=!!c.o,_?y.o=c.o:_=!!c.g,_?y.g=c.g:_=c.u!=null;var I=c.h;if(_)wr(y,c.u);else if(_=!!c.h){if(I.charAt(0)!="/")if(this.g&&!this.h)I="/"+I;else{var U=y.h.lastIndexOf("/");U!=-1&&(I=y.h.slice(0,U+1)+I)}if(U=I,U==".."||U==".")I="";else if(U.indexOf("./")!=-1||U.indexOf("/.")!=-1){I=U.lastIndexOf("/",0)==0,U=U.split("/");const $=[];for(let ae=0;ae<U.length;){const Oe=U[ae++];Oe=="."?I&&ae==U.length&&$.push(""):Oe==".."?(($.length>1||$.length==1&&$[0]!="")&&$.pop(),I&&ae==U.length&&$.push("")):($.push(Oe),I=!0)}I=$.join("/")}else I=U}return _?y.h=I:_=c.i.toString()!=="",_?Vi(y,yl(c.i)):_=!!c.m,_&&(y.m=c.m),y};function Un(c){return new vr(c)}function xs(c,y,_){c.j=_?Ns(y,!0):y,c.j&&(c.j=c.j.replace(/:$/,""))}function wr(c,y){if(y){if(y=Number(y),isNaN(y)||y<0)throw Error("Bad port number "+y);c.u=y}else c.u=null}function Vi(c,y,_){y instanceof Ke?(c.i=y,zo(c.i,c.l)):(_||(y=Ds(y,nf)),c.i=new Ke(y,c.l))}function Xe(c,y,_){c.i.set(y,_)}function Jr(c){return Xe(c,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),c}function Ns(c,y){return c?y?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Ds(c,y,_){return typeof c=="string"?(c=encodeURI(c).replace(y,cl),_&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function cl(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var hl=/[#\/\?@]/g,dl=/[#\?:]/g,Vs=/[#\?]/g,nf=/[#\?@]/g,fl=/#/g;function Ke(c,y){this.h=this.g=null,this.i=c||null,this.j=!!y}function Er(c){c.g||(c.g=new Map,c.h=0,c.i&&Sn(c.i,function(y,_){c.add(decodeURIComponent(y.replace(/\+/g," ")),_)}))}n=Ke.prototype,n.add=function(c,y){Er(this),this.i=null,c=Ir(this,c);let _=this.g.get(c);return _||this.g.set(c,_=[]),_.push(y),this.h+=1,this};function pl(c,y){Er(c),y=Ir(c,y),c.g.has(y)&&(c.i=null,c.h-=c.g.get(y).length,c.g.delete(y))}function jo(c,y){return Er(c),y=Ir(c,y),c.g.has(y)}n.forEach=function(c,y){Er(this),this.g.forEach(function(_,I){_.forEach(function(U){c.call(y,U,I,this)},this)},this)};function ml(c,y){Er(c);let _=[];if(typeof y=="string")jo(c,y)&&(_=_.concat(c.g.get(Ir(c,y))));else for(c=Array.from(c.g.values()),y=0;y<c.length;y++)_=_.concat(c[y]);return _}n.set=function(c,y){return Er(this),this.i=null,c=Ir(this,c),jo(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[y]),this.h+=1,this},n.get=function(c,y){return c?(c=ml(this,c),c.length>0?String(c[0]):y):y};function gl(c,y,_){pl(c,y),_.length>0&&(c.i=null,c.g.set(Ir(c,y),x(_)),c.h+=_.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],y=Array.from(this.g.keys());for(let I=0;I<y.length;I++){var _=y[I];const U=_r(_);_=ml(this,_);for(let $=0;$<_.length;$++){let ae=U;_[$]!==""&&(ae+="="+_r(_[$])),c.push(ae)}}return this.i=c.join("&")};function yl(c){const y=new Ke;return y.i=c.i,c.g&&(y.g=new Map(c.g),y.h=c.h),y}function Ir(c,y){return y=String(y),c.j&&(y=y.toLowerCase()),y}function zo(c,y){y&&!c.j&&(Er(c),c.i=null,c.g.forEach(function(_,I){const U=I.toLowerCase();I!=U&&(pl(this,I),gl(this,U,_))},c)),c.j=y}function Tr(c,y){const _=new xi;if(u.Image){const I=new Image;I.onload=v(qt,_,"TestLoadImage: loaded",!0,y,I),I.onerror=v(qt,_,"TestLoadImage: error",!1,y,I),I.onabort=v(qt,_,"TestLoadImage: abort",!1,y,I),I.ontimeout=v(qt,_,"TestLoadImage: timeout",!1,y,I),u.setTimeout(function(){I.ontimeout&&I.ontimeout()},1e4),I.src=c}else y(!1)}function Sr(c,y){const _=new xi,I=new AbortController,U=setTimeout(()=>{I.abort(),qt(_,"TestPingServer: timeout",!1,y)},1e4);fetch(c,{signal:I.signal}).then($=>{clearTimeout(U),$.ok?qt(_,"TestPingServer: ok",!0,y):qt(_,"TestPingServer: server error",!1,y)}).catch(()=>{clearTimeout(U),qt(_,"TestPingServer: error",!1,y)})}function qt(c,y,_,I,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),I(_)}catch{}}function Os(){this.g=new As}function Zr(c){this.i=c.Sb||null,this.h=c.ab||!1}E(Zr,ki),Zr.prototype.g=function(){return new An(this.i,this.h)};function An(c,y){It.call(this),this.H=c,this.o=y,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}E(An,It),n=An.prototype,n.open=function(c,y){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=c,this.D=y,this.readyState=1,er(this)},n.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const y={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};c&&(y.body=c),(this.H||u).fetch(new Request(this.D,y)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Oi(this)),this.readyState=0},n.Pa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,er(this)),this.g&&(this.readyState=3,er(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;hc(this)}else c.text().then(this.Oa.bind(this),this.ga.bind(this))};function hc(c){c.j.read().then(c.Ma.bind(c)).catch(c.ga.bind(c))}n.Ma=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var y=c.value?c.value:new Uint8Array(0);(y=this.B.decode(y,{stream:!c.done}))&&(this.response=this.responseText+=y)}c.done?Oi(this):er(this),this.readyState==3&&hc(this)}},n.Oa=function(c){this.g&&(this.response=this.responseText=c,Oi(this))},n.Na=function(c){this.g&&(this.response=c,Oi(this))},n.ga=function(){this.g&&Oi(this)};function Oi(c){c.readyState=4,c.l=null,c.j=null,c.B=null,er(c)}n.setRequestHeader=function(c,y){this.A.append(c,y)},n.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],y=this.h.entries();for(var _=y.next();!_.done;)_=_.value,c.push(_[0]+": "+_[1]),_=y.next();return c.join(`\r
`)};function er(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(An.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function dc(c){let y="";return Ae(c,function(_,I){y+=I,y+=":",y+=_,y+=`\r
`}),y}function $o(c,y,_){e:{for(I in _){var I=!1;break e}I=!0}I||(_=dc(_),typeof c=="string"?_!=null&&_r(_):Xe(c,y,_))}function ot(c){It.call(this),this.headers=new Map,this.L=c||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}E(ot,It);var fc=/^https?$/i,rf=["POST","PUT"];n=ot.prototype,n.Fa=function(c){this.H=c},n.ea=function(c,y,_,I){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);y=y?y.toUpperCase():"GET",this.D=c,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():ic.g(),this.g.onreadystatechange=S(m(this.Ca,this));try{this.B=!0,this.g.open(y,String(c),!0),this.B=!1}catch($){Mi(this,$);return}if(c=_||"",_=new Map(this.headers),I)if(Object.getPrototypeOf(I)===Object.prototype)for(var U in I)_.set(U,I[U]);else if(typeof I.keys=="function"&&typeof I.get=="function")for(const $ of I.keys())_.set($,I.get($));else throw Error("Unknown input type for opt_headers: "+String(I));I=Array.from(_.keys()).find($=>$.toLowerCase()=="content-type"),U=u.FormData&&c instanceof u.FormData,!(Array.prototype.indexOf.call(rf,y,void 0)>=0)||I||U||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[$,ae]of _)this.g.setRequestHeader($,ae);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(c),this.v=!1}catch($){Mi(this,$)}};function Mi(c,y){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=y,c.o=5,Li(c),ti(c)}function Li(c){c.A||(c.A=!0,Tt(c,"complete"),Tt(c,"error"))}n.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=c||7,Tt(this,"complete"),Tt(this,"abort"),ti(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ti(this,!0)),ot.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?ei(this):this.Xa())},n.Xa=function(){ei(this)};function ei(c){if(c.h&&typeof a<"u"){if(c.v&&Ar(c)==4)setTimeout(c.Ca.bind(c),0);else if(Tt(c,"readystatechange"),Ar(c)==4){c.h=!1;try{const $=c.ca();e:switch($){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var y=!0;break e;default:y=!1}var _;if(!(_=y)){var I;if(I=$===0){let ae=String(c.D).match(cc)[1]||null;!ae&&u.self&&u.self.location&&(ae=u.self.location.protocol.slice(0,-1)),I=!fc.test(ae?ae.toLowerCase():"")}_=I}if(_)Tt(c,"complete"),Tt(c,"success");else{c.o=6;try{var U=Ar(c)>2?c.g.statusText:""}catch{U=""}c.l=U+" ["+c.ca()+"]",Li(c)}}finally{ti(c)}}}}function ti(c,y){if(c.g){c.m&&(clearTimeout(c.m),c.m=null);const _=c.g;c.g=null,y||Tt(c,"ready");try{_.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Ar(c){return c.g?c.g.readyState:0}n.ca=function(){try{return Ar(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(c){if(this.g){var y=this.g.responseText;return c&&y.indexOf(c)==0&&(y=y.substring(c.length)),Zu(y)}};function pc(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.F){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function _l(c){const y={};c=(c.g&&Ar(c)>=2&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let I=0;I<c.length;I++){if(A(c[I]))continue;var _=Lo(c[I]);const U=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const $=y[U]||[];y[U]=$,$.push(_)}de(y,function(I){return I.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Rr(c,y,_){return _&&_.internalChannelParams&&_.internalChannelParams[c]||y}function qo(c){this.za=0,this.i=[],this.j=new xi,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Rr("failFast",!1,c),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Rr("baseRetryDelayMs",5e3,c),this.Za=Rr("retryDelaySeedMs",1e4,c),this.Ta=Rr("forwardChannelMaxRetries",2,c),this.va=Rr("forwardChannelRequestTimeoutMs",2e4,c),this.ma=c&&c.xmlHttpFactory||void 0,this.Ua=c&&c.Rb||void 0,this.Aa=c&&c.useFetchStreams||!1,this.O=void 0,this.L=c&&c.supportsCrossDomainXhr||!1,this.M="",this.h=new Uo(c&&c.concurrentRequestLimit),this.Ba=new Os,this.S=c&&c.fastHandshake||!1,this.R=c&&c.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=c&&c.Pb||!1,c&&c.ua&&this.j.ua(),c&&c.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&c&&c.detectBufferingProxy||!1,this.ia=void 0,c&&c.longPollingTimeout&&c.longPollingTimeout>0&&(this.ia=c.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=qo.prototype,n.ka=8,n.I=1,n.connect=function(c,y,_,I){St(0),this.W=c,this.H=y||{},_&&I!==void 0&&(this.H.OSID=_,this.H.OAID=I),this.F=this.X,this.J=wl(this,null,this.W),ni(this)};function Ko(c){if(Go(c),c.I==3){var y=c.V++,_=Un(c.J);if(Xe(_,"SID",c.M),Xe(_,"RID",y),Xe(_,"TYPE","terminate"),kr(c,_),y=new Fn(c,c.j,y),y.M=2,y.A=Jr(Un(_)),_=!1,u.navigator&&u.navigator.sendBeacon)try{_=u.navigator.sendBeacon(y.A.toString(),"")}catch{}!_&&u.Image&&(new Image().src=y.A,_=!0),_||(y.g=gc(y.j,null),y.g.ea(y.A)),y.F=Date.now(),ks(y)}Fs(c)}function Rn(c){c.g&&(Ls(c),c.g.cancel(),c.g=null)}function Go(c){Rn(c),c.v&&(u.clearTimeout(c.v),c.v=null),Wo(c),c.h.cancel(),c.m&&(typeof c.m=="number"&&u.clearTimeout(c.m),c.m=null)}function ni(c){if(!ll(c.h)&&!c.m){c.m=!0;var y=c.Ea;he||T(),ue||(he(),ue=!0),P.add(y,c),c.D=0}}function mc(c,y){return bs(c.h)>=c.h.j-(c.m?1:0)?!1:c.m?(c.i=y.G.concat(c.i),!0):c.I==1||c.I==2||c.D>=(c.Sa?0:c.Ta)?!1:(c.m=Ci(m(c.Ea,c,y),Qo(c,c.D)),c.D++,!0)}n.Ea=function(c){if(this.m)if(this.m=null,this.I==1){if(!c){this.V=Math.floor(Math.random()*1e5),c=this.V++;const U=new Fn(this,this.j,c);let $=this.o;if(this.U&&($?($=M($),Te($,this.U)):$=this.U),this.u!==null||this.R||(U.J=$,$=null),this.S)e:{for(var y=0,_=0;_<this.i.length;_++){t:{var I=this.i[_];if("__data__"in I.map&&(I=I.map.__data__,typeof I=="string")){I=I.length;break t}I=void 0}if(I===void 0)break;if(y+=I,y>4096){y=_;break e}if(y===4096||_===this.i.length-1){y=_+1;break e}}y=1e3}else y=1e3;y=vl(this,U,y),_=Un(this.J),Xe(_,"RID",c),Xe(_,"CVER",22),this.G&&Xe(_,"X-HTTP-Session-Id",this.G),kr(this,_),$&&(this.R?y="headers="+_r(dc($))+"&"+y:this.u&&$o(_,this.u,$)),Bo(this.h,U),this.Ra&&Xe(_,"TYPE","init"),this.S?(Xe(_,"$req",y),Xe(_,"SID","null"),U.U=!0,Zn(U,_,null)):Zn(U,_,y),this.I=2}}else this.I==3&&(c?Ms(this,c):this.i.length==0||ll(this.h)||Ms(this))};function Ms(c,y){var _;y?_=y.l:_=c.V++;const I=Un(c.J);Xe(I,"SID",c.M),Xe(I,"RID",_),Xe(I,"AID",c.K),kr(c,I),c.u&&c.o&&$o(I,c.u,c.o),_=new Fn(c,c.j,_,c.D+1),c.u===null&&(_.J=c.o),y&&(c.i=y.G.concat(c.i)),y=vl(c,_,1e3),_.H=Math.round(c.va*.5)+Math.round(c.va*.5*Math.random()),Bo(c.h,_),Zn(_,I,y)}function kr(c,y){c.H&&Ae(c.H,function(_,I){Xe(y,I,_)}),c.l&&Ae({},function(_,I){Xe(y,I,_)})}function vl(c,y,_){_=Math.min(c.i.length,_);const I=c.l?m(c.l.Ka,c.l,c):null;e:{var U=c.i;let Oe=-1;for(;;){const kt=["count="+_];Oe==-1?_>0?(Oe=U[0].g,kt.push("ofs="+Oe)):Oe=0:kt.push("ofs="+Oe);let et=!0;for(let bt=0;bt<_;bt++){var $=U[bt].g;const Pn=U[bt].map;if($-=Oe,$<0)Oe=Math.max(0,U[bt].g-100),et=!1;else try{$="req"+$+"_"||"";try{var ae=Pn instanceof Map?Pn:Object.entries(Pn);for(const[ri,br]of ae){let Cr=br;d(br)&&(Cr=Ri(br)),kt.push($+ri+"="+encodeURIComponent(Cr))}}catch(ri){throw kt.push($+"type="+encodeURIComponent("_badmap")),ri}}catch{I&&I(Pn)}}if(et){ae=kt.join("&");break e}}ae=void 0}return c=c.i.splice(0,_),y.G=c,ae}function Xt(c){if(!c.g&&!c.v){c.Y=1;var y=c.Da;he||T(),ue||(he(),ue=!0),P.add(y,c),c.A=0}}function Pr(c){return c.g||c.v||c.A>=3?!1:(c.Y++,c.v=Ci(m(c.Da,c),Qo(c,c.A)),c.A++,!0)}n.Da=function(){if(this.v=null,Fi(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var c=4*this.T;this.j.info("BP detection timer enabled: "+c),this.B=Ci(m(this.Wa,this),c)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,St(10),Rn(this),Fi(this))};function Ls(c){c.B!=null&&(u.clearTimeout(c.B),c.B=null)}function Fi(c){c.g=new Fn(c,c.j,"rpc",c.Y),c.u===null&&(c.g.J=c.o),c.g.P=0;var y=Un(c.na);Xe(y,"RID","rpc"),Xe(y,"SID",c.M),Xe(y,"AID",c.K),Xe(y,"CI",c.F?"0":"1"),!c.F&&c.ia&&Xe(y,"TO",c.ia),Xe(y,"TYPE","xmlhttp"),kr(c,y),c.u&&c.o&&$o(y,c.u,c.o),c.O&&(c.g.H=c.O);var _=c.g;c=c.ba,_.M=1,_.A=Jr(Un(y)),_.u=null,_.R=!0,ol(_,c)}n.Va=function(){this.C!=null&&(this.C=null,Rn(this),Pr(this),St(19))};function Wo(c){c.C!=null&&(u.clearTimeout(c.C),c.C=null)}function Ho(c,y){var _=null;if(c.g==y){Wo(c),Ls(c),c.g=null;var I=2}else if(ul(c.h,y))_=y.G,Cs(c.h,y),I=1;else return;if(c.I!=0){if(y.o)if(I==1){_=y.u?y.u.length:0,y=Date.now()-y.F;var U=c.D;I=bi(),Tt(I,new il(I,_)),ni(c)}else Xt(c);else if(U=y.m,U==3||U==0&&y.X>0||!(I==1&&mc(c,y)||I==2&&Pr(c)))switch(_&&_.length>0&&(y=c.h,y.i=y.i.concat(_)),U){case 1:kn(c,5);break;case 4:kn(c,10);break;case 3:kn(c,6);break;default:kn(c,2)}}}function Qo(c,y){let _=c.Qa+Math.floor(Math.random()*c.Za);return c.isActive()||(_*=2),_*y}function kn(c,y){if(c.j.info("Error code "+y),y==2){var _=m(c.bb,c),I=c.Ua;const U=!I;I=new vr(I||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||xs(I,"https"),Jr(I),U?Tr(I.toString(),_):Sr(I.toString(),_)}else St(2);c.I=0,c.l&&c.l.pa(y),Fs(c),Go(c)}n.bb=function(c){c?(this.j.info("Successfully pinged google.com"),St(2)):(this.j.info("Failed to ping google.com"),St(1))};function Fs(c){if(c.I=0,c.ja=[],c.l){const y=Tn(c.h);(y.length!=0||c.i.length!=0)&&(B(c.ja,y),B(c.ja,c.i),c.h.i.length=0,x(c.i),c.i.length=0),c.l.oa()}}function wl(c,y,_){var I=_ instanceof vr?Un(_):new vr(_);if(I.g!="")y&&(I.g=y+"."+I.g),wr(I,I.u);else{var U=u.location;I=U.protocol,y=y?y+"."+U.hostname:U.hostname,U=+U.port;const $=new vr(null);I&&xs($,I),y&&($.g=y),U&&wr($,U),_&&($.h=_),I=$}return _=c.G,y=c.wa,_&&y&&Xe(I,_,y),Xe(I,"VER",c.ka),kr(c,I),I}function gc(c,y,_){if(y&&!c.L)throw Error("Can't create secondary domain capable XhrIo object.");return y=c.Aa&&!c.ma?new ot(new Zr({ab:_})):new ot(c.ma),y.Fa(c.L),y}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function yc(){}n=yc.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Yo(){}Yo.prototype.g=function(c,y){return new Kt(c,y)};function Kt(c,y){It.call(this),this.g=new qo(y),this.l=c,this.h=y&&y.messageUrlParams||null,c=y&&y.messageHeaders||null,y&&y.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=y&&y.initMessageHeaders||null,y&&y.messageContentType&&(c?c["X-WebChannel-Content-Type"]=y.messageContentType:c={"X-WebChannel-Content-Type":y.messageContentType}),y&&y.sa&&(c?c["X-WebChannel-Client-Profile"]=y.sa:c={"X-WebChannel-Client-Profile":y.sa}),this.g.U=c,(c=y&&y.Qb)&&!A(c)&&(this.g.u=c),this.A=y&&y.supportsCrossDomainXhr||!1,this.v=y&&y.sendRawJson||!1,(y=y&&y.httpSessionIdParam)&&!A(y)&&(this.g.G=y,c=this.h,c!==null&&y in c&&(c=this.h,y in c&&delete c[y])),this.j=new Ui(this)}E(Kt,It),Kt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Kt.prototype.close=function(){Ko(this.g)},Kt.prototype.o=function(c){var y=this.g;if(typeof c=="string"){var _={};_.__data__=c,c=_}else this.v&&(_={},_.__data__=Ri(c),c=_);y.i.push(new tf(y.Ya++,c)),y.I==3&&ni(y)},Kt.prototype.N=function(){this.g.l=null,delete this.j,Ko(this.g),delete this.g,Kt.Z.N.call(this)};function _c(c){Vo.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var y=c.__sm__;if(y){e:{for(const _ in y){c=_;break e}c=void 0}(this.i=c)&&(c=this.i,y=y!==null&&c in y?y[c]:void 0),this.data=y}else this.data=c}E(_c,Vo);function vc(){rl.call(this),this.status=1}E(vc,rl);function Ui(c){this.g=c}E(Ui,yc),Ui.prototype.ra=function(){Tt(this.g,"a")},Ui.prototype.qa=function(c){Tt(this.g,new _c(c))},Ui.prototype.pa=function(c){Tt(this.g,new vc)},Ui.prototype.oa=function(){Tt(this.g,"b")},Yo.prototype.createWebChannel=Yo.prototype.g,Kt.prototype.send=Kt.prototype.o,Kt.prototype.open=Kt.prototype.m,Kt.prototype.close=Kt.prototype.close,mT=function(){return new Yo},pT=function(){return bi()},fT=Jn,um={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Ni.NO_ERROR=0,Ni.TIMEOUT=8,Ni.HTTP_ERROR=6,Ph=Ni,Di.COMPLETE="complete",dT=Di,ec.EventType=Pi,Pi.OPEN="a",Pi.CLOSE="b",Pi.ERROR="c",Pi.MESSAGE="d",It.prototype.listen=It.prototype.J,nu=ec,ot.prototype.listenOnce=ot.prototype.K,ot.prototype.getLastError=ot.prototype.Ha,ot.prototype.getLastErrorCode=ot.prototype.ya,ot.prototype.getStatus=ot.prototype.ca,ot.prototype.getResponseJson=ot.prototype.La,ot.prototype.getResponseText=ot.prototype.la,ot.prototype.send=ot.prototype.ea,ot.prototype.setWithCredentials=ot.prototype.Fa,hT=ot}).apply(typeof gh<"u"?gh:typeof self<"u"?self:typeof window<"u"?window:{});const sw="@firebase/firestore",ow="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ht.UNAUTHENTICATED=new Ht(null),Ht.GOOGLE_CREDENTIALS=new Ht("google-credentials-uid"),Ht.FIRST_PARTY=new Ht("first-party-uid"),Ht.MOCK_USER=new Ht("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Za="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const go=new zm("@firebase/firestore");function Aa(){return go.logLevel}function ee(n,...e){if(go.logLevel<=$e.DEBUG){const t=e.map(Jm);go.debug(`Firestore (${Za}): ${n}`,...t)}}function dn(n,...e){if(go.logLevel<=$e.ERROR){const t=e.map(Jm);go.error(`Firestore (${Za}): ${n}`,...t)}}function yo(n,...e){if(go.logLevel<=$e.WARN){const t=e.map(Jm);go.warn(`Firestore (${Za}): ${n}`,...t)}}function Jm(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,gT(n,r,t)}function gT(n,e,t){let r=`FIRESTORE (${Za}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw dn(r),new Error(r)}function ke(n,e,t,r){let o="Unexpected state";typeof t=="string"?o=t:r=t,n||gT(e,o,r)}function De(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class se extends mr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yT{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class AC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ht.UNAUTHENTICATED)))}shutdown(){}}class RC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class kC{constructor(e){this.t=e,this.currentUser=Ht.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ke(this.o===void 0,42304);let r=this.i;const o=f=>this.i!==r?(r=this.i,t(f)):Promise.resolve();let a=new hr;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new hr,e.enqueueRetryable((()=>o(this.currentUser)))};const u=()=>{const f=a;e.enqueueRetryable((async()=>{await f.promise,await o(this.currentUser)}))},d=f=>{ee("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit((f=>d(f))),setTimeout((()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?d(f):(ee("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new hr)}}),0),u()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(ee("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ke(typeof r.accessToken=="string",31837,{l:r}),new yT(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ke(e===null||typeof e=="string",2055,{h:e}),new Ht(e)}}class PC{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Ht.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class bC{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new PC(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Ht.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class aw{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class CC{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Vn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ke(this.o===void 0,3512);const r=a=>{a.error!=null&&ee("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const u=a.token!==this.m;return this.m=a.token,ee("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?t(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable((()=>r(a)))};const o=a=>{ee("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((a=>o(a))),setTimeout((()=>{if(!this.appCheck){const a=this.V.getImmediate({optional:!0});a?o(a):ee("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new aw(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(ke(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new aw(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xC(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const o=xC(40);for(let a=0;a<o.length;++a)r.length<20&&o[a]<t&&(r+=e.charAt(o[a]%62))}return r}}function Ve(n,e){return n<e?-1:n>e?1:0}function cm(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const o=n.charAt(r),a=e.charAt(r);if(o!==a)return Bp(o)===Bp(a)?Ve(o,a):Bp(o)?1:-1}return Ve(n.length,e.length)}const NC=55296,DC=57343;function Bp(n){const e=n.charCodeAt(0);return e>=NC&&e<=DC}function Ma(n,e,t){return n.length===e.length&&n.every(((r,o)=>t(r,e[o])))}function _T(n){return n+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lw="__name__";class Mr{constructor(e,t,r){t===void 0?t=0:t>e.length&&we(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&we(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Mr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Mr?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let o=0;o<r;o++){const a=Mr.compareSegments(e.get(o),t.get(o));if(a!==0)return a}return Ve(e.length,t.length)}static compareSegments(e,t){const r=Mr.isNumericId(e),o=Mr.isNumericId(t);return r&&!o?-1:!r&&o?1:r&&o?Mr.extractNumericId(e).compare(Mr.extractNumericId(t)):cm(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ds.fromString(e.substring(4,e.length-2))}}class Je extends Mr{construct(e,t,r){return new Je(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new se(K.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((o=>o.length>0)))}return new Je(t)}static emptyPath(){return new Je([])}}const VC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class vt extends Mr{construct(e,t,r){return new vt(e,t,r)}static isValidIdentifier(e){return VC.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),vt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===lw}static keyField(){return new vt([lw])}static fromServerFormat(e){const t=[];let r="",o=0;const a=()=>{if(r.length===0)throw new se(K.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let u=!1;for(;o<e.length;){const d=e[o];if(d==="\\"){if(o+1===e.length)throw new se(K.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const f=e[o+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new se(K.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=f,o+=2}else d==="`"?(u=!u,o++):d!=="."||u?(r+=d,o++):(a(),o++)}if(a(),u)throw new se(K.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new vt(t)}static emptyPath(){return new vt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e){this.path=e}static fromPath(e){return new le(Je.fromString(e))}static fromName(e){return new le(Je.fromString(e).popFirst(5))}static empty(){return new le(Je.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Je.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Je.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new le(new Je(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vT(n,e,t){if(!t)throw new se(K.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function OC(n,e,t,r){if(e===!0&&r===!0)throw new se(K.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function uw(n){if(!le.isDocumentKey(n))throw new se(K.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function cw(n){if(le.isDocumentKey(n))throw new se(K.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function wT(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Rd(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":we(12329,{type:typeof n})}function Yt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new se(K.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Rd(n);throw new se(K.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function MC(n,e){if(e<=0)throw new se(K.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(n,e){const t={typeString:n};return e&&(t.value=e),t}function ju(n,e){if(!wT(n))throw new se(K.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const o=e[r].typeString,a="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const u=n[r];if(o&&typeof u!==o){t=`JSON field '${r}' must be a ${o}.`;break}if(a!==void 0&&u!==a.value){t=`Expected '${r}' field to equal '${a.value}'`;break}}if(t)throw new se(K.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hw=-62135596800,dw=1e6;class tt{static now(){return tt.fromMillis(Date.now())}static fromDate(e){return tt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*dw);return new tt(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new se(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new se(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<hw)throw new se(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new se(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/dw}_compareTo(e){return this.seconds===e.seconds?Ve(this.nanoseconds,e.nanoseconds):Ve(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:tt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ju(e,tt._jsonSchema))return new tt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-hw;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}tt._jsonSchemaVersion="firestore/timestamp/1.0",tt._jsonSchema={type:Nt("string",tt._jsonSchemaVersion),seconds:Nt("number"),nanoseconds:Nt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{static fromTimestamp(e){return new Pe(e)}static min(){return new Pe(new tt(0,0))}static max(){return new Pe(new tt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wu=-1;class Xh{constructor(e,t,r,o){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=o}}function hm(n){return n.fields.find((e=>e.kind===2))}function eo(n){return n.fields.filter((e=>e.kind!==2))}Xh.UNKNOWN_ID=-1;class bh{constructor(e,t){this.fieldPath=e,this.kind=t}}class Eu{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Eu(0,Mn.min())}}function LC(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,o=Pe.fromTimestamp(r===1e9?new tt(t+1,0):new tt(t,r));return new Mn(o,le.empty(),e)}function ET(n){return new Mn(n.readTime,n.key,wu)}class Mn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Mn(Pe.min(),le.empty(),wu)}static max(){return new Mn(Pe.max(),le.empty(),wu)}}function eg(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=le.comparator(n.documentKey,e.documentKey),t!==0?t:Ve(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class TT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xo(n){if(n.code!==K.FAILED_PRECONDITION||n.message!==IT)throw n;ee("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&we(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new L(((r,o)=>{this.nextCallback=a=>{this.wrapSuccess(e,a).next(r,o)},this.catchCallback=a=>{this.wrapFailure(t,a).next(r,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof L?t:L.resolve(t)}catch(t){return L.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):L.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):L.reject(t)}static resolve(e){return new L(((t,r)=>{t(e)}))}static reject(e){return new L(((t,r)=>{r(e)}))}static waitFor(e){return new L(((t,r)=>{let o=0,a=0,u=!1;e.forEach((d=>{++o,d.next((()=>{++a,u&&a===o&&t()}),(f=>r(f)))})),u=!0,a===o&&t()}))}static or(e){let t=L.resolve(!1);for(const r of e)t=t.next((o=>o?L.resolve(o):r()));return t}static forEach(e,t){const r=[];return e.forEach(((o,a)=>{r.push(t.call(this,o,a))})),this.waitFor(r)}static mapArray(e,t){return new L(((r,o)=>{const a=e.length,u=new Array(a);let d=0;for(let f=0;f<a;f++){const m=f;t(e[m]).next((v=>{u[m]=v,++d,d===a&&r(u)}),(v=>o(v)))}}))}static doWhile(e,t){return new L(((r,o)=>{const a=()=>{e()===!0?t().next((()=>{a()}),o):r()};a()}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dn="SimpleDb";class kd{static open(e,t,r,o){try{return new kd(t,e.transaction(o,r))}catch(a){throw new uu(t,a)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.S=new hr,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{t.error?this.S.reject(new uu(e,t.error)):this.S.resolve()},this.transaction.onerror=r=>{const o=tg(r.target.error);this.S.reject(new uu(e,o))}}get D(){return this.S.promise}abort(e){e&&this.S.reject(e),this.aborted||(ee(Dn,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}C(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new UC(t)}}class fs{static delete(e){return ee(Dn,"Removing database:",e),no(pI().indexedDB.deleteDatabase(e)).toPromise()}static v(){if(!jm())return!1;if(fs.F())return!0;const e=Lt(),t=fs.M(e),r=0<t&&t<10,o=ST(e),a=0<o&&o<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||a)}static F(){return typeof process<"u"&&process.__PRIVATE_env?.__PRIVATE_USE_MOCK_PERSISTENCE==="YES"}static O(e,t){return e.store(t)}static M(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}constructor(e,t,r){this.name=e,this.version=t,this.N=r,this.B=null,fs.M(Lt())===12.2&&dn("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async L(e){return this.db||(ee(Dn,"Opening database:",this.name),this.db=await new Promise(((t,r)=>{const o=indexedDB.open(this.name,this.version);o.onsuccess=a=>{const u=a.target.result;t(u)},o.onblocked=()=>{r(new uu(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},o.onerror=a=>{const u=a.target.error;u.name==="VersionError"?r(new se(K.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):u.name==="InvalidStateError"?r(new se(K.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+u)):r(new uu(e,u))},o.onupgradeneeded=a=>{ee(Dn,'Database "'+this.name+'" requires upgrade from version:',a.oldVersion);const u=a.target.result;this.N.k(u,o.transaction,a.oldVersion,this.version).next((()=>{ee(Dn,"Database upgrade to version "+this.version+" complete")}))}}))),this.q&&(this.db.onversionchange=t=>this.q(t)),this.db}$(e){this.q=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,o){const a=t==="readonly";let u=0;for(;;){++u;try{this.db=await this.L(e);const d=kd.open(this.db,e,a?"readonly":"readwrite",r),f=o(d).next((m=>(d.C(),m))).catch((m=>(d.abort(m),L.reject(m)))).toPromise();return f.catch((()=>{})),await d.D,f}catch(d){const f=d,m=f.name!=="FirebaseError"&&u<3;if(ee(Dn,"Transaction failed with error:",f.message,"Retrying:",m),this.close(),!m)return Promise.reject(f)}}}close(){this.db&&this.db.close(),this.db=void 0}}function ST(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class FC{constructor(e){this.U=e,this.K=!1,this.W=null}get isDone(){return this.K}get G(){return this.W}set cursor(e){this.U=e}done(){this.K=!0}j(e){this.W=e}delete(){return no(this.U.delete())}}class uu extends se{constructor(e,t){super(K.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Is(n){return n.name==="IndexedDbTransactionError"}class UC{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(ee(Dn,"PUT",this.store.name,e,t),r=this.store.put(t,e)):(ee(Dn,"PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),no(r)}add(e){return ee(Dn,"ADD",this.store.name,e,e),no(this.store.add(e))}get(e){return no(this.store.get(e)).next((t=>(t===void 0&&(t=null),ee(Dn,"GET",this.store.name,e,t),t)))}delete(e){return ee(Dn,"DELETE",this.store.name,e),no(this.store.delete(e))}count(){return ee(Dn,"COUNT",this.store.name),no(this.store.count())}J(e,t){const r=this.options(e,t),o=r.index?this.store.index(r.index):this.store;if(typeof o.getAll=="function"){const a=o.getAll(r.range);return new L(((u,d)=>{a.onerror=f=>{d(f.target.error)},a.onsuccess=f=>{u(f.target.result)}}))}{const a=this.cursor(r),u=[];return this.H(a,((d,f)=>{u.push(f)})).next((()=>u))}}Y(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new L(((o,a)=>{r.onerror=u=>{a(u.target.error)},r.onsuccess=u=>{o(u.target.result)}}))}Z(e,t){ee(Dn,"DELETE ALL",this.store.name);const r=this.options(e,t);r.X=!1;const o=this.cursor(r);return this.H(o,((a,u,d)=>d.delete()))}ee(e,t){let r;t?r=e:(r={},t=e);const o=this.cursor(r);return this.H(o,t)}te(e){const t=this.cursor({});return new L(((r,o)=>{t.onerror=a=>{const u=tg(a.target.error);o(u)},t.onsuccess=a=>{const u=a.target.result;u?e(u.primaryKey,u.value).next((d=>{d?u.continue():r()})):r()}}))}H(e,t){const r=[];return new L(((o,a)=>{e.onerror=u=>{a(u.target.error)},e.onsuccess=u=>{const d=u.target.result;if(!d)return void o();const f=new FC(d),m=t(d.primaryKey,d.value,f);if(m instanceof L){const v=m.catch((E=>(f.done(),L.reject(E))));r.push(v)}f.isDone?o():f.G===null?d.continue():d.continue(f.G)}})).next((()=>L.waitFor(r)))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.X?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function no(n){return new L(((e,t)=>{n.onsuccess=r=>{const o=r.target.result;e(o)},n.onerror=r=>{const o=tg(r.target.error);t(o)}}))}let fw=!1;function tg(n){const e=fs.M(Lt());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new se("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return fw||(fw=!0,setTimeout((()=>{throw r}),0)),r}}return n}const cu="IndexBackfiller";class BC{constructor(e,t){this.asyncQueue=e,this.ne=t,this.task=null}start(){this.re(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}re(e){ee(cu,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,(async()=>{this.task=null;try{const t=await this.ne.ie();ee(cu,`Documents written: ${t}`)}catch(t){Is(t)?ee(cu,"Ignoring IndexedDB error during index backfill: ",t):await xo(t)}await this.re(6e4)}))}}class jC{constructor(e,t){this.localStore=e,this.persistence=t}async ie(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",(t=>this.se(t,e)))}se(e,t){const r=new Set;let o=t,a=!0;return L.doWhile((()=>a===!0&&o>0),(()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next((u=>{if(u!==null&&!r.has(u))return ee(cu,`Processing collection: ${u}`),this.oe(e,u,o).next((d=>{o-=d,r.add(u)}));a=!1})))).next((()=>t-o))}oe(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next((o=>this.localStore.localDocuments.getNextDocuments(e,t,o,r).next((a=>{const u=a.changes;return this.localStore.indexManager.updateIndexEntries(e,u).next((()=>this._e(o,a))).next((d=>(ee(cu,`Updating offset: ${d}`),this.localStore.indexManager.updateCollectionGroup(e,t,d)))).next((()=>u.size))}))))}_e(e,t){let r=e;return t.changes.forEach(((o,a)=>{const u=ET(a);eg(u,r)>0&&(r=u)})),new Mn(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Hn.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lo=-1;function Pd(n){return n==null}function Iu(n){return n===0&&1/n==-1/0}function zC(n){return typeof n=="number"&&Number.isInteger(n)&&!Iu(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jh="";function an(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=pw(e)),e=$C(n.get(t),e);return pw(e)}function $C(n,e){let t=e;const r=n.length;for(let o=0;o<r;o++){const a=n.charAt(o);switch(a){case"\0":t+="";break;case Jh:t+="";break;default:t+=a}}return t}function pw(n){return n+Jh+""}function Fr(n){const e=n.length;if(ke(e>=2,64408,{path:n}),e===2)return ke(n.charAt(0)===Jh&&n.charAt(1)==="",56145,{path:n}),Je.emptyPath();const t=e-2,r=[];let o="";for(let a=0;a<e;){const u=n.indexOf(Jh,a);switch((u<0||u>t)&&we(50515,{path:n}),n.charAt(u+1)){case"":const d=n.substring(a,u);let f;o.length===0?f=d:(o+=d,f=o,o=""),r.push(f);break;case"":o+=n.substring(a,u),o+="\0";break;case"":o+=n.substring(a,u+1);break;default:we(61167,{path:n})}a=u+2}return new Je(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const to="remoteDocuments",zu="owner",va="owner",Tu="mutationQueues",qC="userId",lr="mutations",mw="batchId",oo="userMutationsIndex",gw=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ch(n,e){return[n,an(e)]}function AT(n,e,t){return[n,an(e),t]}const KC={},La="documentMutations",Zh="remoteDocumentsV14",GC=["prefixPath","collectionGroup","readTime","documentId"],xh="documentKeyIndex",WC=["prefixPath","collectionGroup","documentId"],RT="collectionGroupIndex",HC=["collectionGroup","readTime","prefixPath","documentId"],Su="remoteDocumentGlobal",dm="remoteDocumentGlobalKey",Fa="targets",kT="queryTargetsIndex",QC=["canonicalId","targetId"],Ua="targetDocuments",YC=["targetId","path"],ng="documentTargetsIndex",XC=["path","targetId"],ed="targetGlobalKey",uo="targetGlobal",Au="collectionParents",JC=["collectionId","parent"],Ba="clientMetadata",ZC="clientId",bd="bundles",ex="bundleId",Cd="namedQueries",tx="name",rg="indexConfiguration",nx="indexId",fm="collectionGroupIndex",rx="collectionGroup",hu="indexState",ix=["indexId","uid"],PT="sequenceNumberIndex",sx=["uid","sequenceNumber"],du="indexEntries",ox=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],bT="documentKeyIndex",ax=["indexId","uid","orderedDocumentKey"],xd="documentOverlays",lx=["userId","collectionPath","documentId"],pm="collectionPathOverlayIndex",ux=["userId","collectionPath","largestBatchId"],CT="collectionGroupOverlayIndex",cx=["userId","collectionGroup","largestBatchId"],ig="globals",hx="name",xT=[Tu,lr,La,to,Fa,zu,uo,Ua,Ba,Su,Au,bd,Cd],dx=[...xT,xd],NT=[Tu,lr,La,Zh,Fa,zu,uo,Ua,Ba,Su,Au,bd,Cd,xd],DT=NT,sg=[...DT,rg,hu,du],fx=sg,VT=[...sg,ig],px=VT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm extends TT{constructor(e,t){super(),this.le=e,this.currentSequenceNumber=t}}function Ft(n,e){const t=De(n);return fs.O(t.le,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yw(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Ts(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function OT(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e,t){this.comparator=e,this.root=t||Qt.EMPTY}insert(e,t){return new gt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Qt.BLACK,null,null))}remove(e){return new gt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Qt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const o=this.comparator(e,r.key);if(o===0)return t+r.left.size;o<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new yh(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new yh(this.root,e,this.comparator,!1)}getReverseIterator(){return new yh(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new yh(this.root,e,this.comparator,!0)}}class yh{constructor(e,t,r,o){this.isReverse=o,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=t?r(e.key,t):1,t&&o&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Qt{constructor(e,t,r,o,a){this.key=e,this.value=t,this.color=r??Qt.RED,this.left=o??Qt.EMPTY,this.right=a??Qt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,o,a){return new Qt(e??this.key,t??this.value,r??this.color,o??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let o=this;const a=r(e,o.key);return o=a<0?o.copy(null,null,null,o.left.insert(e,t,r),null):a===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,r)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Qt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Qt.EMPTY;r=o.right.min(),o=o.copy(r.key,r.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Qt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Qt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw we(43730,{key:this.key,value:this.value});if(this.right.isRed())throw we(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw we(27949);return e+(this.isRed()?0:1)}}Qt.EMPTY=null,Qt.RED=!0,Qt.BLACK=!1;Qt.EMPTY=new class{constructor(){this.size=0}get key(){throw we(57766)}get value(){throw we(16141)}get color(){throw we(16727)}get left(){throw we(29726)}get right(){throw we(36894)}copy(e,t,r,o,a){return this}insert(e,t,r){return new Qt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.comparator=e,this.data=new gt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const o=r.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new _w(this.data.getIterator())}getIteratorFrom(e){return new _w(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof rt)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,a=r.getNext().key;if(this.comparator(o,a)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new rt(this.comparator);return t.data=e,t}}class _w{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function wa(n){return n.hasNext()?n.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e){this.fields=e,e.sort(vt.comparator)}static empty(){return new En([])}unionWith(e){let t=new rt(vt.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new En(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ma(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new MT("Invalid base64 string: "+a):a}})(e);return new Dt(t)}static fromUint8Array(e){const t=(function(o){let a="";for(let u=0;u<o.length;++u)a+=String.fromCharCode(o[u]);return a})(e);return new Dt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let o=0;o<t.length;o++)r[o]=t.charCodeAt(o);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ve(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Dt.EMPTY_BYTE_STRING=new Dt("");const mx=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ei(n){if(ke(!!n,39018),typeof n=="string"){let e=0;const t=mx.exec(n);if(ke(!!t,46558,{timestamp:n}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:pt(n.seconds),nanos:pt(n.nanos)}}function pt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ii(n){return typeof n=="string"?Dt.fromBase64String(n):Dt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LT="server_timestamp",FT="__type__",UT="__previous_value__",BT="__local_write_time__";function og(n){return(n?.mapValue?.fields||{})[FT]?.stringValue===LT}function Nd(n){const e=n.mapValue.fields[UT];return og(e)?Nd(e):e}function Ru(n){const e=Ei(n.mapValue.fields[BT].timestampValue);return new tt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gx{constructor(e,t,r,o,a,u,d,f,m,v){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=o,this.ssl=a,this.forceLongPolling=u,this.autoDetectLongPolling=d,this.longPollingOptions=f,this.useFetchStreams=m,this.isUsingEmulator=v}}const td="(default)";class _o{constructor(e,t){this.projectId=e,this.database=t||td}static empty(){return new _o("","")}get isDefaultDatabase(){return this.database===td}isEqual(e){return e instanceof _o&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ag="__type__",jT="__max__",cs={mapValue:{fields:{__type__:{stringValue:jT}}}},lg="__vector__",ja="value",Nh={nullValue:"NULL_VALUE"};function gs(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?og(n)?4:zT(n)?9007199254740991:Dd(n)?10:11:we(28295,{value:n})}function qr(n,e){if(n===e)return!0;const t=gs(n);if(t!==gs(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Ru(n).isEqual(Ru(e));case 3:return(function(o,a){if(typeof o.timestampValue=="string"&&typeof a.timestampValue=="string"&&o.timestampValue.length===a.timestampValue.length)return o.timestampValue===a.timestampValue;const u=Ei(o.timestampValue),d=Ei(a.timestampValue);return u.seconds===d.seconds&&u.nanos===d.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(o,a){return Ii(o.bytesValue).isEqual(Ii(a.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(o,a){return pt(o.geoPointValue.latitude)===pt(a.geoPointValue.latitude)&&pt(o.geoPointValue.longitude)===pt(a.geoPointValue.longitude)})(n,e);case 2:return(function(o,a){if("integerValue"in o&&"integerValue"in a)return pt(o.integerValue)===pt(a.integerValue);if("doubleValue"in o&&"doubleValue"in a){const u=pt(o.doubleValue),d=pt(a.doubleValue);return u===d?Iu(u)===Iu(d):isNaN(u)&&isNaN(d)}return!1})(n,e);case 9:return Ma(n.arrayValue.values||[],e.arrayValue.values||[],qr);case 10:case 11:return(function(o,a){const u=o.mapValue.fields||{},d=a.mapValue.fields||{};if(yw(u)!==yw(d))return!1;for(const f in u)if(u.hasOwnProperty(f)&&(d[f]===void 0||!qr(u[f],d[f])))return!1;return!0})(n,e);default:return we(52216,{left:n})}}function ku(n,e){return(n.values||[]).find((t=>qr(t,e)))!==void 0}function ys(n,e){if(n===e)return 0;const t=gs(n),r=gs(e);if(t!==r)return Ve(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ve(n.booleanValue,e.booleanValue);case 2:return(function(a,u){const d=pt(a.integerValue||a.doubleValue),f=pt(u.integerValue||u.doubleValue);return d<f?-1:d>f?1:d===f?0:isNaN(d)?isNaN(f)?0:-1:1})(n,e);case 3:return vw(n.timestampValue,e.timestampValue);case 4:return vw(Ru(n),Ru(e));case 5:return cm(n.stringValue,e.stringValue);case 6:return(function(a,u){const d=Ii(a),f=Ii(u);return d.compareTo(f)})(n.bytesValue,e.bytesValue);case 7:return(function(a,u){const d=a.split("/"),f=u.split("/");for(let m=0;m<d.length&&m<f.length;m++){const v=Ve(d[m],f[m]);if(v!==0)return v}return Ve(d.length,f.length)})(n.referenceValue,e.referenceValue);case 8:return(function(a,u){const d=Ve(pt(a.latitude),pt(u.latitude));return d!==0?d:Ve(pt(a.longitude),pt(u.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return ww(n.arrayValue,e.arrayValue);case 10:return(function(a,u){const d=a.fields||{},f=u.fields||{},m=d[ja]?.arrayValue,v=f[ja]?.arrayValue,E=Ve(m?.values?.length||0,v?.values?.length||0);return E!==0?E:ww(m,v)})(n.mapValue,e.mapValue);case 11:return(function(a,u){if(a===cs.mapValue&&u===cs.mapValue)return 0;if(a===cs.mapValue)return 1;if(u===cs.mapValue)return-1;const d=a.fields||{},f=Object.keys(d),m=u.fields||{},v=Object.keys(m);f.sort(),v.sort();for(let E=0;E<f.length&&E<v.length;++E){const S=cm(f[E],v[E]);if(S!==0)return S;const x=ys(d[f[E]],m[v[E]]);if(x!==0)return x}return Ve(f.length,v.length)})(n.mapValue,e.mapValue);default:throw we(23264,{he:t})}}function vw(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Ve(n,e);const t=Ei(n),r=Ei(e),o=Ve(t.seconds,r.seconds);return o!==0?o:Ve(t.nanos,r.nanos)}function ww(n,e){const t=n.values||[],r=e.values||[];for(let o=0;o<t.length&&o<r.length;++o){const a=ys(t[o],r[o]);if(a)return a}return Ve(t.length,r.length)}function za(n){return gm(n)}function gm(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=Ei(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Ii(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return le.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",o=!0;for(const a of t.values||[])o?o=!1:r+=",",r+=gm(a);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let o="{",a=!0;for(const u of r)a?a=!1:o+=",",o+=`${u}:${gm(t.fields[u])}`;return o+"}"})(n.mapValue):we(61005,{value:n})}function Dh(n){switch(gs(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Nd(n);return e?16+Dh(e):16;case 5:return 2*n.stringValue.length;case 6:return Ii(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((o,a)=>o+Dh(a)),0)})(n.arrayValue);case 10:case 11:return(function(r){let o=0;return Ts(r.fields,((a,u)=>{o+=a.length+Dh(u)})),o})(n.mapValue);default:throw we(13486,{value:n})}}function Pu(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function ym(n){return!!n&&"integerValue"in n}function bu(n){return!!n&&"arrayValue"in n}function Ew(n){return!!n&&"nullValue"in n}function Iw(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Vh(n){return!!n&&"mapValue"in n}function Dd(n){return(n?.mapValue?.fields||{})[ag]?.stringValue===lg}function fu(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Ts(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=fu(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=fu(n.arrayValue.values[t]);return e}return{...n}}function zT(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===jT}const $T={mapValue:{fields:{[ag]:{stringValue:lg},[ja]:{arrayValue:{}}}}};function yx(n){return"nullValue"in n?Nh:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?Pu(_o.empty(),le.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?Dd(n)?$T:{mapValue:{}}:we(35942,{value:n})}function _x(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?Pu(_o.empty(),le.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?$T:"mapValue"in n?Dd(n)?{mapValue:{}}:cs:we(61959,{value:n})}function Tw(n,e){const t=ys(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function Sw(n,e){const t=ys(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e){this.value=e}static empty(){return new sn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Vh(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=fu(t)}setAll(e){let t=vt.emptyPath(),r={},o=[];e.forEach(((u,d)=>{if(!t.isImmediateParentOf(d)){const f=this.getFieldsMap(t);this.applyChanges(f,r,o),r={},o=[],t=d.popLast()}u?r[d.lastSegment()]=fu(u):o.push(d.lastSegment())}));const a=this.getFieldsMap(t);this.applyChanges(a,r,o)}delete(e){const t=this.field(e.popLast());Vh(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return qr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let o=t.mapValue.fields[e.get(r)];Vh(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,r){Ts(t,((o,a)=>e[o]=a));for(const o of r)delete e[o]}clone(){return new sn(fu(this.value))}}function qT(n){const e=[];return Ts(n.fields,((t,r)=>{const o=new vt([t]);if(Vh(r)){const a=qT(r.mapValue).fields;if(a.length===0)e.push(o);else for(const u of a)e.push(o.child(u))}else e.push(o)})),new En(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e,t,r,o,a,u,d){this.key=e,this.documentType=t,this.version=r,this.readTime=o,this.createTime=a,this.data=u,this.documentState=d}static newInvalidDocument(e){return new Rt(e,0,Pe.min(),Pe.min(),Pe.min(),sn.empty(),0)}static newFoundDocument(e,t,r,o){return new Rt(e,1,t,Pe.min(),r,o,0)}static newNoDocument(e,t){return new Rt(e,2,t,Pe.min(),Pe.min(),sn.empty(),0)}static newUnknownDocument(e,t){return new Rt(e,3,t,Pe.min(),Pe.min(),sn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Pe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=sn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=sn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Pe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Rt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Rt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(e,t){this.position=e,this.inclusive=t}}function Aw(n,e,t){let r=0;for(let o=0;o<n.position.length;o++){const a=e[o],u=n.position[o];if(a.field.isKeyField()?r=le.comparator(le.fromName(u.referenceValue),t.key):r=ys(u,t.data.field(a.field)),a.dir==="desc"&&(r*=-1),r!==0)break}return r}function Rw(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!qr(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(e,t="asc"){this.field=e,this.dir=t}}function vx(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KT{}class qe extends KT{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new wx(e,t,r):t==="array-contains"?new Tx(e,r):t==="in"?new XT(e,r):t==="not-in"?new Sx(e,r):t==="array-contains-any"?new Ax(e,r):new qe(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Ex(e,r):new Ix(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(ys(t,this.value)):t!==null&&gs(this.value)===gs(t)&&this.matchesComparison(ys(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return we(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class nt extends KT{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new nt(e,t)}matches(e){return qa(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function qa(n){return n.op==="and"}function _m(n){return n.op==="or"}function ug(n){return GT(n)&&qa(n)}function GT(n){for(const e of n.filters)if(e instanceof nt)return!1;return!0}function vm(n){if(n instanceof qe)return n.field.canonicalString()+n.op.toString()+za(n.value);if(ug(n))return n.filters.map((e=>vm(e))).join(",");{const e=n.filters.map((t=>vm(t))).join(",");return`${n.op}(${e})`}}function WT(n,e){return n instanceof qe?(function(r,o){return o instanceof qe&&r.op===o.op&&r.field.isEqual(o.field)&&qr(r.value,o.value)})(n,e):n instanceof nt?(function(r,o){return o instanceof nt&&r.op===o.op&&r.filters.length===o.filters.length?r.filters.reduce(((a,u,d)=>a&&WT(u,o.filters[d])),!0):!1})(n,e):void we(19439)}function HT(n,e){const t=n.filters.concat(e);return nt.create(t,n.op)}function QT(n){return n instanceof qe?(function(t){return`${t.field.canonicalString()} ${t.op} ${za(t.value)}`})(n):n instanceof nt?(function(t){return t.op.toString()+" {"+t.getFilters().map(QT).join(" ,")+"}"})(n):"Filter"}class wx extends qe{constructor(e,t,r){super(e,t,r),this.key=le.fromName(r.referenceValue)}matches(e){const t=le.comparator(e.key,this.key);return this.matchesComparison(t)}}class Ex extends qe{constructor(e,t){super(e,"in",t),this.keys=YT("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Ix extends qe{constructor(e,t){super(e,"not-in",t),this.keys=YT("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function YT(n,e){return(e.arrayValue?.values||[]).map((t=>le.fromName(t.referenceValue)))}class Tx extends qe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return bu(t)&&ku(t.arrayValue,this.value)}}class XT extends qe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ku(this.value.arrayValue,t)}}class Sx extends qe{constructor(e,t){super(e,"not-in",t)}matches(e){if(ku(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ku(this.value.arrayValue,t)}}class Ax extends qe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!bu(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>ku(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rx{constructor(e,t=null,r=[],o=[],a=null,u=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=o,this.limit=a,this.startAt=u,this.endAt=d,this.Te=null}}function wm(n,e=null,t=[],r=[],o=null,a=null,u=null){return new Rx(n,e,t,r,o,a,u)}function vo(n){const e=De(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>vm(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(a){return a.field.canonicalString()+a.dir})(r))).join(","),Pd(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>za(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>za(r))).join(",")),e.Te=t}return e.Te}function $u(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!vx(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!WT(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Rw(n.startAt,e.startAt)&&Rw(n.endAt,e.endAt)}function nd(n){return le.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function rd(n,e){return n.filters.filter((t=>t instanceof qe&&t.field.isEqual(e)))}function kw(n,e,t){let r=Nh,o=!0;for(const a of rd(n,e)){let u=Nh,d=!0;switch(a.op){case"<":case"<=":u=yx(a.value);break;case"==":case"in":case">=":u=a.value;break;case">":u=a.value,d=!1;break;case"!=":case"not-in":u=Nh}Tw({value:r,inclusive:o},{value:u,inclusive:d})<0&&(r=u,o=d)}if(t!==null){for(let a=0;a<n.orderBy.length;++a)if(n.orderBy[a].field.isEqual(e)){const u=t.position[a];Tw({value:r,inclusive:o},{value:u,inclusive:t.inclusive})<0&&(r=u,o=t.inclusive);break}}return{value:r,inclusive:o}}function Pw(n,e,t){let r=cs,o=!0;for(const a of rd(n,e)){let u=cs,d=!0;switch(a.op){case">=":case">":u=_x(a.value),d=!1;break;case"==":case"in":case"<=":u=a.value;break;case"<":u=a.value,d=!1;break;case"!=":case"not-in":u=cs}Sw({value:r,inclusive:o},{value:u,inclusive:d})>0&&(r=u,o=d)}if(t!==null){for(let a=0;a<n.orderBy.length;++a)if(n.orderBy[a].field.isEqual(e)){const u=t.position[a];Sw({value:r,inclusive:o},{value:u,inclusive:t.inclusive})>0&&(r=u,o=t.inclusive);break}}return{value:r,inclusive:o}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e,t=null,r=[],o=[],a=null,u="F",d=null,f=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=o,this.limit=a,this.limitType=u,this.startAt=d,this.endAt=f,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function kx(n,e,t,r,o,a,u,d){return new el(n,e,t,r,o,a,u,d)}function qu(n){return new el(n)}function bw(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function JT(n){return n.collectionGroup!==null}function pu(n){const e=De(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const a of e.explicitOrderBy)e.Ie.push(a),t.add(a.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(u){let d=new rt(vt.comparator);return u.filters.forEach((f=>{f.getFlattenedFilters().forEach((m=>{m.isInequality()&&(d=d.add(m.field))}))})),d})(e).forEach((a=>{t.has(a.canonicalString())||a.isKeyField()||e.Ie.push(new Cu(a,r))})),t.has(vt.keyField().canonicalString())||e.Ie.push(new Cu(vt.keyField(),r))}return e.Ie}function Qn(n){const e=De(n);return e.Ee||(e.Ee=Px(e,pu(n))),e.Ee}function Px(n,e){if(n.limitType==="F")return wm(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((o=>{const a=o.dir==="desc"?"asc":"desc";return new Cu(o.field,a)}));const t=n.endAt?new $a(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new $a(n.startAt.position,n.startAt.inclusive):null;return wm(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Em(n,e){const t=n.filters.concat([e]);return new el(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function id(n,e,t){return new el(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Vd(n,e){return $u(Qn(n),Qn(e))&&n.limitType===e.limitType}function ZT(n){return`${vo(Qn(n))}|lt:${n.limitType}`}function Ra(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((o=>QT(o))).join(", ")}]`),Pd(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((o=>(function(u){return`${u.field.canonicalString()} (${u.dir})`})(o))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((o=>za(o))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((o=>za(o))).join(",")),`Target(${r})`})(Qn(n))}; limitType=${n.limitType})`}function Ku(n,e){return e.isFoundDocument()&&(function(r,o){const a=o.key.path;return r.collectionGroup!==null?o.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(a):le.isDocumentKey(r.path)?r.path.isEqual(a):r.path.isImmediateParentOf(a)})(n,e)&&(function(r,o){for(const a of pu(r))if(!a.field.isKeyField()&&o.data.field(a.field)===null)return!1;return!0})(n,e)&&(function(r,o){for(const a of r.filters)if(!a.matches(o))return!1;return!0})(n,e)&&(function(r,o){return!(r.startAt&&!(function(u,d,f){const m=Aw(u,d,f);return u.inclusive?m<=0:m<0})(r.startAt,pu(r),o)||r.endAt&&!(function(u,d,f){const m=Aw(u,d,f);return u.inclusive?m>=0:m>0})(r.endAt,pu(r),o))})(n,e)}function bx(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function e0(n){return(e,t)=>{let r=!1;for(const o of pu(n)){const a=Cx(o,e,t);if(a!==0)return a;r=r||o.field.isKeyField()}return 0}}function Cx(n,e,t){const r=n.field.isKeyField()?le.comparator(e.key,t.key):(function(a,u,d){const f=u.data.field(a),m=d.data.field(a);return f!==null&&m!==null?ys(f,m):we(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return we(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[o,a]of r)if(this.equalsFn(o,e))return a}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),o=this.inner[r];if(o===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let a=0;a<o.length;a++)if(this.equalsFn(o[a][0],e))return void(o[a]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let o=0;o<r.length;o++)if(this.equalsFn(r[o][0],e))return r.length===1?delete this.inner[t]:r.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Ts(this.inner,((t,r)=>{for(const[o,a]of r)e(o,a)}))}isEmpty(){return OT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xx=new gt(le.comparator);function On(){return xx}const t0=new gt(le.comparator);function ru(...n){let e=t0;for(const t of n)e=e.insert(t.key,t);return e}function n0(n){let e=t0;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function Ur(){return mu()}function r0(){return mu()}function mu(){return new Ti((n=>n.toString()),((n,e)=>n.isEqual(e)))}const Nx=new gt(le.comparator),Dx=new rt(le.comparator);function Be(...n){let e=Dx;for(const t of n)e=e.add(t);return e}const Vx=new rt(Ve);function Ox(){return Vx}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cg(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Iu(e)?"-0":e}}function i0(n){return{integerValue:""+n}}function Mx(n,e){return zC(e)?i0(e):cg(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(){this._=void 0}}function Lx(n,e,t){return n instanceof xu?(function(o,a){const u={fields:{[FT]:{stringValue:LT},[BT]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return a&&og(a)&&(a=Nd(a)),a&&(u.fields[UT]=a),{mapValue:u}})(t,e):n instanceof Ka?o0(n,e):n instanceof Ga?a0(n,e):(function(o,a){const u=s0(o,a),d=Cw(u)+Cw(o.Ae);return ym(u)&&ym(o.Ae)?i0(d):cg(o.serializer,d)})(n,e)}function Fx(n,e,t){return n instanceof Ka?o0(n,e):n instanceof Ga?a0(n,e):t}function s0(n,e){return n instanceof Nu?(function(r){return ym(r)||(function(a){return!!a&&"doubleValue"in a})(r)})(e)?e:{integerValue:0}:null}class xu extends Od{}class Ka extends Od{constructor(e){super(),this.elements=e}}function o0(n,e){const t=l0(e);for(const r of n.elements)t.some((o=>qr(o,r)))||t.push(r);return{arrayValue:{values:t}}}class Ga extends Od{constructor(e){super(),this.elements=e}}function a0(n,e){let t=l0(e);for(const r of n.elements)t=t.filter((o=>!qr(o,r)));return{arrayValue:{values:t}}}class Nu extends Od{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Cw(n){return pt(n.integerValue||n.doubleValue)}function l0(n){return bu(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ux{constructor(e,t){this.field=e,this.transform=t}}function Bx(n,e){return n.field.isEqual(e.field)&&(function(r,o){return r instanceof Ka&&o instanceof Ka||r instanceof Ga&&o instanceof Ga?Ma(r.elements,o.elements,qr):r instanceof Nu&&o instanceof Nu?qr(r.Ae,o.Ae):r instanceof xu&&o instanceof xu})(n.transform,e.transform)}class jx{constructor(e,t){this.version=e,this.transformResults=t}}class on{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new on}static exists(e){return new on(void 0,e)}static updateTime(e){return new on(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Oh(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Md{}function u0(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Ld(n.key,on.none()):new tl(n.key,n.data,on.none());{const t=n.data,r=sn.empty();let o=new rt(vt.comparator);for(let a of e.fields)if(!o.has(a)){let u=t.field(a);u===null&&a.length>1&&(a=a.popLast(),u=t.field(a)),u===null?r.delete(a):r.set(a,u),o=o.add(a)}return new Si(n.key,r,new En(o.toArray()),on.none())}}function zx(n,e,t){n instanceof tl?(function(o,a,u){const d=o.value.clone(),f=Nw(o.fieldTransforms,a,u.transformResults);d.setAll(f),a.convertToFoundDocument(u.version,d).setHasCommittedMutations()})(n,e,t):n instanceof Si?(function(o,a,u){if(!Oh(o.precondition,a))return void a.convertToUnknownDocument(u.version);const d=Nw(o.fieldTransforms,a,u.transformResults),f=a.data;f.setAll(c0(o)),f.setAll(d),a.convertToFoundDocument(u.version,f).setHasCommittedMutations()})(n,e,t):(function(o,a,u){a.convertToNoDocument(u.version).setHasCommittedMutations()})(0,e,t)}function gu(n,e,t,r){return n instanceof tl?(function(a,u,d,f){if(!Oh(a.precondition,u))return d;const m=a.value.clone(),v=Dw(a.fieldTransforms,f,u);return m.setAll(v),u.convertToFoundDocument(u.version,m).setHasLocalMutations(),null})(n,e,t,r):n instanceof Si?(function(a,u,d,f){if(!Oh(a.precondition,u))return d;const m=Dw(a.fieldTransforms,f,u),v=u.data;return v.setAll(c0(a)),v.setAll(m),u.convertToFoundDocument(u.version,v).setHasLocalMutations(),d===null?null:d.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map((E=>E.field)))})(n,e,t,r):(function(a,u,d){return Oh(a.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):d})(n,e,t)}function $x(n,e){let t=null;for(const r of n.fieldTransforms){const o=e.data.field(r.field),a=s0(r.transform,o||null);a!=null&&(t===null&&(t=sn.empty()),t.set(r.field,a))}return t||null}function xw(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,o){return r===void 0&&o===void 0||!(!r||!o)&&Ma(r,o,((a,u)=>Bx(a,u)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class tl extends Md{constructor(e,t,r,o=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Si extends Md{constructor(e,t,r,o,a=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=o,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function c0(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function Nw(n,e,t){const r=new Map;ke(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let o=0;o<t.length;o++){const a=n[o],u=a.transform,d=e.data.field(a.field);r.set(a.field,Fx(u,d,t[o]))}return r}function Dw(n,e,t){const r=new Map;for(const o of n){const a=o.transform,u=t.data.field(o.field);r.set(o.field,Lx(a,u,e))}return r}class Ld extends Md{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class h0 extends Md{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(e,t,r,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=o}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const a=this.mutations[o];a.key.isEqual(e.key)&&zx(a,e,r[o])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=gu(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=gu(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=r0();return this.mutations.forEach((o=>{const a=e.get(o.key),u=a.overlayedDocument;let d=this.applyToLocalView(u,a.mutatedFields);d=t.has(o.key)?null:d;const f=u0(u,d);f!==null&&r.set(o.key,f),u.isValidDocument()||u.convertToNoDocument(Pe.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Be())}isEqual(e){return this.batchId===e.batchId&&Ma(this.mutations,e.mutations,((t,r)=>xw(t,r)))&&Ma(this.baseMutations,e.baseMutations,((t,r)=>xw(t,r)))}}class dg{constructor(e,t,r,o){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=o}static from(e,t,r){ke(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let o=(function(){return Nx})();const a=e.mutations;for(let u=0;u<a.length;u++)o=o.insert(a[u].key,r[u].version);return new dg(e,t,r,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qx{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xt,We;function Kx(n){switch(n){case K.OK:return we(64938);case K.CANCELLED:case K.UNKNOWN:case K.DEADLINE_EXCEEDED:case K.RESOURCE_EXHAUSTED:case K.INTERNAL:case K.UNAVAILABLE:case K.UNAUTHENTICATED:return!1;case K.INVALID_ARGUMENT:case K.NOT_FOUND:case K.ALREADY_EXISTS:case K.PERMISSION_DENIED:case K.FAILED_PRECONDITION:case K.ABORTED:case K.OUT_OF_RANGE:case K.UNIMPLEMENTED:case K.DATA_LOSS:return!0;default:return we(15467,{code:n})}}function d0(n){if(n===void 0)return dn("GRPC error has no .code"),K.UNKNOWN;switch(n){case xt.OK:return K.OK;case xt.CANCELLED:return K.CANCELLED;case xt.UNKNOWN:return K.UNKNOWN;case xt.DEADLINE_EXCEEDED:return K.DEADLINE_EXCEEDED;case xt.RESOURCE_EXHAUSTED:return K.RESOURCE_EXHAUSTED;case xt.INTERNAL:return K.INTERNAL;case xt.UNAVAILABLE:return K.UNAVAILABLE;case xt.UNAUTHENTICATED:return K.UNAUTHENTICATED;case xt.INVALID_ARGUMENT:return K.INVALID_ARGUMENT;case xt.NOT_FOUND:return K.NOT_FOUND;case xt.ALREADY_EXISTS:return K.ALREADY_EXISTS;case xt.PERMISSION_DENIED:return K.PERMISSION_DENIED;case xt.FAILED_PRECONDITION:return K.FAILED_PRECONDITION;case xt.ABORTED:return K.ABORTED;case xt.OUT_OF_RANGE:return K.OUT_OF_RANGE;case xt.UNIMPLEMENTED:return K.UNIMPLEMENTED;case xt.DATA_LOSS:return K.DATA_LOSS;default:return we(39323,{code:n})}}(We=xt||(xt={}))[We.OK=0]="OK",We[We.CANCELLED=1]="CANCELLED",We[We.UNKNOWN=2]="UNKNOWN",We[We.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",We[We.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",We[We.NOT_FOUND=5]="NOT_FOUND",We[We.ALREADY_EXISTS=6]="ALREADY_EXISTS",We[We.PERMISSION_DENIED=7]="PERMISSION_DENIED",We[We.UNAUTHENTICATED=16]="UNAUTHENTICATED",We[We.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",We[We.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",We[We.ABORTED=10]="ABORTED",We[We.OUT_OF_RANGE=11]="OUT_OF_RANGE",We[We.UNIMPLEMENTED=12]="UNIMPLEMENTED",We[We.INTERNAL=13]="INTERNAL",We[We.UNAVAILABLE=14]="UNAVAILABLE",We[We.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gx(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wx=new ds([4294967295,4294967295],0);function Vw(n){const e=Gx().encode(n),t=new cT;return t.update(e),new Uint8Array(t.digest())}function Ow(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),o=e.getUint32(8,!0),a=e.getUint32(12,!0);return[new ds([t,r],0),new ds([o,a],0)]}class pg{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new iu(`Invalid padding: ${t}`);if(r<0)throw new iu(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new iu(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new iu(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=ds.fromNumber(this.ge)}ye(e,t,r){let o=e.add(t.multiply(ds.fromNumber(r)));return o.compare(Wx)===1&&(o=new ds([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Vw(e),[r,o]=Ow(t);for(let a=0;a<this.hashCount;a++){const u=this.ye(r,o,a);if(!this.we(u))return!1}return!0}static create(e,t,r){const o=e%8==0?0:8-e%8,a=new Uint8Array(Math.ceil(e/8)),u=new pg(a,o,t);return r.forEach((d=>u.insert(d))),u}insert(e){if(this.ge===0)return;const t=Vw(e),[r,o]=Ow(t);for(let a=0;a<this.hashCount;a++){const u=this.ye(r,o,a);this.Se(u)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class iu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(e,t,r,o,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=o,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const o=new Map;return o.set(e,Gu.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Fd(Pe.min(),o,new gt(Ve),On(),Be())}}class Gu{constructor(e,t,r,o,a){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=o,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Gu(r,t,Be(),Be(),Be())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(e,t,r,o){this.be=e,this.removedTargetIds=t,this.key=r,this.De=o}}class f0{constructor(e,t){this.targetId=e,this.Ce=t}}class p0{constructor(e,t,r=Dt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=o}}class Mw{constructor(){this.ve=0,this.Fe=Lw(),this.Me=Dt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Be(),t=Be(),r=Be();return this.Fe.forEach(((o,a)=>{switch(a){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:r=r.add(o);break;default:we(38017,{changeType:a})}})),new Gu(this.Me,this.xe,e,t,r)}qe(){this.Oe=!1,this.Fe=Lw()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,ke(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class Hx{constructor(e){this.Ge=e,this.ze=new Map,this.je=On(),this.Je=_h(),this.He=_h(),this.Ye=new gt(Ve)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:we(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((r,o)=>{this.rt(o)&&t(o)}))}st(e){const t=e.targetId,r=e.Ce.count,o=this.ot(t);if(o){const a=o.target;if(nd(a))if(r===0){const u=new le(a.path);this.et(t,u,Rt.newNoDocument(u,Pe.min()))}else ke(r===1,20013,{expectedCount:r});else{const u=this._t(t);if(u!==r){const d=this.ut(e),f=d?this.ct(d,e,u):1;if(f!==0){this.it(t);const m=f===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,m)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:o=0},hashCount:a=0}=t;let u,d;try{u=Ii(r).toUint8Array()}catch(f){if(f instanceof MT)return yo("Decoding the base64 bloom filter in existence filter failed ("+f.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw f}try{d=new pg(u,o,a)}catch(f){return yo(f instanceof iu?"BloomFilter error: ":"Applying bloom filter failed: ",f),null}return d.ge===0?null:d}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let o=0;return r.forEach((a=>{const u=this.Ge.ht(),d=`projects/${u.projectId}/databases/${u.database}/documents/${a.path.canonicalString()}`;e.mightContain(d)||(this.et(t,a,null),o++)})),o}Tt(e){const t=new Map;this.ze.forEach(((a,u)=>{const d=this.ot(u);if(d){if(a.current&&nd(d.target)){const f=new le(d.target.path);this.It(f).has(u)||this.Et(u,f)||this.et(u,f,Rt.newNoDocument(f,e))}a.Be&&(t.set(u,a.ke()),a.qe())}}));let r=Be();this.He.forEach(((a,u)=>{let d=!0;u.forEachWhile((f=>{const m=this.ot(f);return!m||m.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)})),d&&(r=r.add(a))})),this.je.forEach(((a,u)=>u.setReadTime(e)));const o=new Fd(e,t,this.Ye,this.je,r);return this.je=On(),this.Je=_h(),this.He=_h(),this.Ye=new gt(Ve),o}Xe(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const o=this.nt(e);this.Et(e,t)?o.Qe(t,1):o.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new Mw,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new rt(Ve),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new rt(Ve),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||ee("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Mw),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function _h(){return new gt(le.comparator)}function Lw(){return new gt(le.comparator)}const Qx={asc:"ASCENDING",desc:"DESCENDING"},Yx={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Xx={and:"AND",or:"OR"};class Jx{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Im(n,e){return n.useProto3Json||Pd(e)?e:{value:e}}function Wa(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function m0(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Zx(n,e){return Wa(n,e.toTimestamp())}function fn(n){return ke(!!n,49232),Pe.fromTimestamp((function(t){const r=Ei(t);return new tt(r.seconds,r.nanos)})(n))}function mg(n,e){return Tm(n,e).canonicalString()}function Tm(n,e){const t=(function(o){return new Je(["projects",o.projectId,"databases",o.database])})(n).child("documents");return e===void 0?t:t.child(e)}function g0(n){const e=Je.fromString(n);return ke(A0(e),10190,{key:e.toString()}),e}function sd(n,e){return mg(n.databaseId,e.path)}function co(n,e){const t=g0(e);if(t.get(1)!==n.databaseId.projectId)throw new se(K.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new se(K.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new le(v0(t))}function y0(n,e){return mg(n.databaseId,e)}function _0(n){const e=g0(n);return e.length===4?Je.emptyPath():v0(e)}function Sm(n){return new Je(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function v0(n){return ke(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Fw(n,e,t){return{name:sd(n,e),fields:t.value.mapValue.fields}}function eN(n,e,t){const r=co(n,e.name),o=fn(e.updateTime),a=e.createTime?fn(e.createTime):Pe.min(),u=new sn({mapValue:{fields:e.fields}}),d=Rt.newFoundDocument(r,o,a,u);return t&&d.setHasCommittedMutations(),t?d.setHasCommittedMutations():d}function tN(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(m){return m==="NO_CHANGE"?0:m==="ADD"?1:m==="REMOVE"?2:m==="CURRENT"?3:m==="RESET"?4:we(39313,{state:m})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],a=(function(m,v){return m.useProto3Json?(ke(v===void 0||typeof v=="string",58123),Dt.fromBase64String(v||"")):(ke(v===void 0||v instanceof Buffer||v instanceof Uint8Array,16193),Dt.fromUint8Array(v||new Uint8Array))})(n,e.targetChange.resumeToken),u=e.targetChange.cause,d=u&&(function(m){const v=m.code===void 0?K.UNKNOWN:d0(m.code);return new se(v,m.message||"")})(u);t=new p0(r,o,a,d||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const o=co(n,r.document.name),a=fn(r.document.updateTime),u=r.document.createTime?fn(r.document.createTime):Pe.min(),d=new sn({mapValue:{fields:r.document.fields}}),f=Rt.newFoundDocument(o,a,u,d),m=r.targetIds||[],v=r.removedTargetIds||[];t=new Mh(m,v,f.key,f)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const o=co(n,r.document),a=r.readTime?fn(r.readTime):Pe.min(),u=Rt.newNoDocument(o,a),d=r.removedTargetIds||[];t=new Mh([],d,u.key,u)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const o=co(n,r.document),a=r.removedTargetIds||[];t=new Mh([],a,o,null)}else{if(!("filter"in e))return we(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:o=0,unchangedNames:a}=r,u=new qx(o,a),d=r.targetId;t=new f0(d,u)}}return t}function od(n,e){let t;if(e instanceof tl)t={update:Fw(n,e.key,e.value)};else if(e instanceof Ld)t={delete:sd(n,e.key)};else if(e instanceof Si)t={update:Fw(n,e.key,e.data),updateMask:aN(e.fieldMask)};else{if(!(e instanceof h0))return we(16599,{Vt:e.type});t={verify:sd(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(a,u){const d=u.transform;if(d instanceof xu)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof Ka)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof Ga)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof Nu)return{fieldPath:u.field.canonicalString(),increment:d.Ae};throw we(20930,{transform:u.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(o,a){return a.updateTime!==void 0?{updateTime:Zx(o,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:we(27497)})(n,e.precondition)),t}function Am(n,e){const t=e.currentDocument?(function(a){return a.updateTime!==void 0?on.updateTime(fn(a.updateTime)):a.exists!==void 0?on.exists(a.exists):on.none()})(e.currentDocument):on.none(),r=e.updateTransforms?e.updateTransforms.map((o=>(function(u,d){let f=null;if("setToServerValue"in d)ke(d.setToServerValue==="REQUEST_TIME",16630,{proto:d}),f=new xu;else if("appendMissingElements"in d){const v=d.appendMissingElements.values||[];f=new Ka(v)}else if("removeAllFromArray"in d){const v=d.removeAllFromArray.values||[];f=new Ga(v)}else"increment"in d?f=new Nu(u,d.increment):we(16584,{proto:d});const m=vt.fromServerFormat(d.fieldPath);return new Ux(m,f)})(n,o))):[];if(e.update){e.update.name;const o=co(n,e.update.name),a=new sn({mapValue:{fields:e.update.fields}});if(e.updateMask){const u=(function(f){const m=f.fieldPaths||[];return new En(m.map((v=>vt.fromServerFormat(v))))})(e.updateMask);return new Si(o,a,u,t,r)}return new tl(o,a,t,r)}if(e.delete){const o=co(n,e.delete);return new Ld(o,t)}if(e.verify){const o=co(n,e.verify);return new h0(o,t)}return we(1463,{proto:e})}function nN(n,e){return n&&n.length>0?(ke(e!==void 0,14353),n.map((t=>(function(o,a){let u=o.updateTime?fn(o.updateTime):fn(a);return u.isEqual(Pe.min())&&(u=fn(a)),new jx(u,o.transformResults||[])})(t,e)))):[]}function w0(n,e){return{documents:[y0(n,e.path)]}}function E0(n,e){const t={structuredQuery:{}},r=e.path;let o;e.collectionGroup!==null?(o=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=y0(n,o);const a=(function(m){if(m.length!==0)return S0(nt.create(m,"and"))})(e.filters);a&&(t.structuredQuery.where=a);const u=(function(m){if(m.length!==0)return m.map((v=>(function(S){return{field:ka(S.field),direction:iN(S.dir)}})(v)))})(e.orderBy);u&&(t.structuredQuery.orderBy=u);const d=Im(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=(function(m){return{before:m.inclusive,values:m.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(m){return{before:!m.inclusive,values:m.position}})(e.endAt)),{ft:t,parent:o}}function I0(n){let e=_0(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let o=null;if(r>0){ke(r===1,65062);const v=t.from[0];v.allDescendants?o=v.collectionId:e=e.child(v.collectionId)}let a=[];t.where&&(a=(function(E){const S=T0(E);return S instanceof nt&&ug(S)?S.getFilters():[S]})(t.where));let u=[];t.orderBy&&(u=(function(E){return E.map((S=>(function(B){return new Cu(Pa(B.field),(function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(B.direction))})(S)))})(t.orderBy));let d=null;t.limit&&(d=(function(E){let S;return S=typeof E=="object"?E.value:E,Pd(S)?null:S})(t.limit));let f=null;t.startAt&&(f=(function(E){const S=!!E.before,x=E.values||[];return new $a(x,S)})(t.startAt));let m=null;return t.endAt&&(m=(function(E){const S=!E.before,x=E.values||[];return new $a(x,S)})(t.endAt)),kx(e,o,u,a,d,"F",f,m)}function rN(n,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return we(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function T0(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Pa(t.unaryFilter.field);return qe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const o=Pa(t.unaryFilter.field);return qe.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=Pa(t.unaryFilter.field);return qe.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=Pa(t.unaryFilter.field);return qe.create(u,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return we(61313);default:return we(60726)}})(n):n.fieldFilter!==void 0?(function(t){return qe.create(Pa(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return we(58110);default:return we(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return nt.create(t.compositeFilter.filters.map((r=>T0(r))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return we(1026)}})(t.compositeFilter.op))})(n):we(30097,{filter:n})}function iN(n){return Qx[n]}function sN(n){return Yx[n]}function oN(n){return Xx[n]}function ka(n){return{fieldPath:n.canonicalString()}}function Pa(n){return vt.fromServerFormat(n.fieldPath)}function S0(n){return n instanceof qe?(function(t){if(t.op==="=="){if(Iw(t.value))return{unaryFilter:{field:ka(t.field),op:"IS_NAN"}};if(Ew(t.value))return{unaryFilter:{field:ka(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Iw(t.value))return{unaryFilter:{field:ka(t.field),op:"IS_NOT_NAN"}};if(Ew(t.value))return{unaryFilter:{field:ka(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ka(t.field),op:sN(t.op),value:t.value}}})(n):n instanceof nt?(function(t){const r=t.getFilters().map((o=>S0(o)));return r.length===1?r[0]:{compositeFilter:{op:oN(t.op),filters:r}}})(n):we(54877,{filter:n})}function aN(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function A0(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e,t,r,o,a=Pe.min(),u=Pe.min(),d=Dt.EMPTY_BYTE_STRING,f=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=o,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=d,this.expectedCount=f}withSequenceNumber(e){return new gi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new gi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new gi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new gi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R0{constructor(e){this.yt=e}}function lN(n,e){let t;if(e.document)t=eN(n.yt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=le.fromSegments(e.noDocument.path),o=Eo(e.noDocument.readTime);t=Rt.newNoDocument(r,o),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return we(56709);{const r=le.fromSegments(e.unknownDocument.path),o=Eo(e.unknownDocument.version);t=Rt.newUnknownDocument(r,o)}}return e.readTime&&t.setReadTime((function(o){const a=new tt(o[0],o[1]);return Pe.fromTimestamp(a)})(e.readTime)),t}function Uw(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:ad(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=(function(a,u){return{name:sd(a,u.key),fields:u.data.value.mapValue.fields,updateTime:Wa(a,u.version.toTimestamp()),createTime:Wa(a,u.createTime.toTimestamp())}})(n.yt,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:wo(e.version)};else{if(!e.isUnknownDocument())return we(57904,{document:e});r.unknownDocument={path:t.path.toArray(),version:wo(e.version)}}return r}function ad(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function wo(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Eo(n){const e=new tt(n.seconds,n.nanoseconds);return Pe.fromTimestamp(e)}function ro(n,e){const t=(e.baseMutations||[]).map((a=>Am(n.yt,a)));for(let a=0;a<e.mutations.length-1;++a){const u=e.mutations[a];if(a+1<e.mutations.length&&e.mutations[a+1].transform!==void 0){const d=e.mutations[a+1];u.updateTransforms=d.transform.fieldTransforms,e.mutations.splice(a+1,1),++a}}const r=e.mutations.map((a=>Am(n.yt,a))),o=tt.fromMillis(e.localWriteTimeMs);return new hg(e.batchId,o,t,r)}function su(n){const e=Eo(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?Eo(n.lastLimboFreeSnapshotVersion):Pe.min();let r;return r=(function(a){return a.documents!==void 0})(n.query)?(function(a){const u=a.documents.length;return ke(u===1,1966,{count:u}),Qn(qu(_0(a.documents[0])))})(n.query):(function(a){return Qn(I0(a))})(n.query),new gi(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,Dt.fromBase64String(n.resumeToken))}function k0(n,e){const t=wo(e.snapshotVersion),r=wo(e.lastLimboFreeSnapshotVersion);let o;o=nd(e.target)?w0(n.yt,e.target):E0(n.yt,e.target).ft;const a=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:vo(e.target),readTime:t,resumeToken:a,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:o}}function P0(n){const e=I0({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?id(e,e.limit,"L"):e}function jp(n,e){return new fg(e.largestBatchId,Am(n.yt,e.overlayMutation))}function Bw(n,e){const t=e.path.lastSegment();return[n,an(e.path.popLast()),t]}function jw(n,e,t,r){return{indexId:n,uid:e,sequenceNumber:t,readTime:wo(r.readTime),documentKey:an(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uN{getBundleMetadata(e,t){return zw(e).get(t).next((r=>{if(r)return(function(a){return{id:a.bundleId,createTime:Eo(a.createTime),version:a.version}})(r)}))}saveBundleMetadata(e,t){return zw(e).put((function(o){return{bundleId:o.id,createTime:wo(fn(o.createTime)),version:o.version}})(t))}getNamedQuery(e,t){return $w(e).get(t).next((r=>{if(r)return(function(a){return{name:a.name,query:P0(a.bundledQuery),readTime:Eo(a.readTime)}})(r)}))}saveNamedQuery(e,t){return $w(e).put((function(o){return{name:o.name,readTime:wo(fn(o.readTime)),bundledQuery:o.bundledQuery}})(t))}}function zw(n){return Ft(n,bd)}function $w(n){return Ft(n,Cd)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(e,t){this.serializer=e,this.userId=t}static wt(e,t){const r=t.uid||"";return new Ud(e,r)}getOverlay(e,t){return Hl(e).get(Bw(this.userId,t)).next((r=>r?jp(this.serializer,r):null))}getOverlays(e,t){const r=Ur();return L.forEach(t,(o=>this.getOverlay(e,o).next((a=>{a!==null&&r.set(o,a)})))).next((()=>r))}saveOverlays(e,t,r){const o=[];return r.forEach(((a,u)=>{const d=new fg(t,u);o.push(this.St(e,d))})),L.waitFor(o)}removeOverlaysForBatchId(e,t,r){const o=new Set;t.forEach((u=>o.add(an(u.getCollectionPath()))));const a=[];return o.forEach((u=>{const d=IDBKeyRange.bound([this.userId,u,r],[this.userId,u,r+1],!1,!0);a.push(Hl(e).Z(pm,d))})),L.waitFor(a)}getOverlaysForCollection(e,t,r){const o=Ur(),a=an(t),u=IDBKeyRange.bound([this.userId,a,r],[this.userId,a,Number.POSITIVE_INFINITY],!0);return Hl(e).J(pm,u).next((d=>{for(const f of d){const m=jp(this.serializer,f);o.set(m.getKey(),m)}return o}))}getOverlaysForCollectionGroup(e,t,r,o){const a=Ur();let u;const d=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Hl(e).ee({index:CT,range:d},((f,m,v)=>{const E=jp(this.serializer,m);a.size()<o||E.largestBatchId===u?(a.set(E.getKey(),E),u=E.largestBatchId):v.done()})).next((()=>a))}St(e,t){return Hl(e).put((function(o,a,u){const[d,f,m]=Bw(a,u.mutation.key);return{userId:a,collectionPath:f,documentId:m,collectionGroup:u.mutation.key.getCollectionGroup(),largestBatchId:u.largestBatchId,overlayMutation:od(o.yt,u.mutation)}})(this.serializer,this.userId,t))}}function Hl(n){return Ft(n,xd)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cN{bt(e){return Ft(e,ig)}getSessionToken(e){return this.bt(e).get("sessionToken").next((t=>{const r=t?.value;return r?Dt.fromUint8Array(r):Dt.EMPTY_BYTE_STRING}))}setSessionToken(e,t){return this.bt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(){}Dt(e,t){this.Ct(e,t),t.vt()}Ct(e,t){if("nullValue"in e)this.Ft(t,5);else if("booleanValue"in e)this.Ft(t,10),t.Mt(e.booleanValue?1:0);else if("integerValue"in e)this.Ft(t,15),t.Mt(pt(e.integerValue));else if("doubleValue"in e){const r=pt(e.doubleValue);isNaN(r)?this.Ft(t,13):(this.Ft(t,15),Iu(r)?t.Mt(0):t.Mt(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Ft(t,20),typeof r=="string"&&(r=Ei(r)),t.xt(`${r.seconds||""}`),t.Mt(r.nanos||0)}else if("stringValue"in e)this.Ot(e.stringValue,t),this.Nt(t);else if("bytesValue"in e)this.Ft(t,30),t.Bt(Ii(e.bytesValue)),this.Nt(t);else if("referenceValue"in e)this.Lt(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.Ft(t,45),t.Mt(r.latitude||0),t.Mt(r.longitude||0)}else"mapValue"in e?zT(e)?this.Ft(t,Number.MAX_SAFE_INTEGER):Dd(e)?this.kt(e.mapValue,t):(this.qt(e.mapValue,t),this.Nt(t)):"arrayValue"in e?(this.Qt(e.arrayValue,t),this.Nt(t)):we(19022,{$t:e})}Ot(e,t){this.Ft(t,25),this.Ut(e,t)}Ut(e,t){t.xt(e)}qt(e,t){const r=e.fields||{};this.Ft(t,55);for(const o of Object.keys(r))this.Ot(o,t),this.Ct(r[o],t)}kt(e,t){const r=e.fields||{};this.Ft(t,53);const o=ja,a=r[o].arrayValue?.values?.length||0;this.Ft(t,15),t.Mt(pt(a)),this.Ot(o,t),this.Ct(r[o],t)}Qt(e,t){const r=e.values||[];this.Ft(t,50);for(const o of r)this.Ct(o,t)}Lt(e,t){this.Ft(t,37),le.fromName(e).path.forEach((r=>{this.Ft(t,60),this.Ut(r,t)}))}Ft(e,t){e.Mt(t)}Nt(e){e.Mt(2)}}io.Kt=new io;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law | agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ea=255;function hN(n){if(n===0)return 8;let e=0;return n>>4||(e+=4,n<<=4),n>>6||(e+=2,n<<=2),n>>7||(e+=1),e}function qw(n){const e=64-(function(r){let o=0;for(let a=0;a<8;++a){const u=hN(255&r[a]);if(o+=u,u!==8)break}return o})(n);return Math.ceil(e/8)}class dN{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Wt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Gt(r.value),r=t.next();this.zt()}jt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Jt(r.value),r=t.next();this.Ht()}Yt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Gt(r);else if(r<2048)this.Gt(960|r>>>6),this.Gt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Gt(480|r>>>12),this.Gt(128|63&r>>>6),this.Gt(128|63&r);else{const o=t.codePointAt(0);this.Gt(240|o>>>18),this.Gt(128|63&o>>>12),this.Gt(128|63&o>>>6),this.Gt(128|63&o)}}this.zt()}Zt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Jt(r);else if(r<2048)this.Jt(960|r>>>6),this.Jt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Jt(480|r>>>12),this.Jt(128|63&r>>>6),this.Jt(128|63&r);else{const o=t.codePointAt(0);this.Jt(240|o>>>18),this.Jt(128|63&o>>>12),this.Jt(128|63&o>>>6),this.Jt(128|63&o)}}this.Ht()}Xt(e){const t=this.en(e),r=qw(t);this.tn(1+r),this.buffer[this.position++]=255&r;for(let o=t.length-r;o<t.length;++o)this.buffer[this.position++]=255&t[o]}nn(e){const t=this.en(e),r=qw(t);this.tn(1+r),this.buffer[this.position++]=~(255&r);for(let o=t.length-r;o<t.length;++o)this.buffer[this.position++]=~(255&t[o])}rn(){this.sn(Ea),this.sn(255)}_n(){this.an(Ea),this.an(255)}reset(){this.position=0}seed(e){this.tn(e.length),this.buffer.set(e,this.position),this.position+=e.length}un(){return this.buffer.slice(0,this.position)}en(e){const t=(function(a){const u=new DataView(new ArrayBuffer(8));return u.setFloat64(0,a,!1),new Uint8Array(u.buffer)})(e),r=!!(128&t[0]);t[0]^=r?255:128;for(let o=1;o<t.length;++o)t[o]^=r?255:0;return t}Gt(e){const t=255&e;t===0?(this.sn(0),this.sn(255)):t===Ea?(this.sn(Ea),this.sn(0)):this.sn(t)}Jt(e){const t=255&e;t===0?(this.an(0),this.an(255)):t===Ea?(this.an(Ea),this.an(0)):this.an(e)}zt(){this.sn(0),this.sn(1)}Ht(){this.an(0),this.an(1)}sn(e){this.tn(1),this.buffer[this.position++]=e}an(e){this.tn(1),this.buffer[this.position++]=~e}tn(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const o=new Uint8Array(r);o.set(this.buffer),this.buffer=o}}class fN{constructor(e){this.cn=e}Bt(e){this.cn.Wt(e)}xt(e){this.cn.Yt(e)}Mt(e){this.cn.Xt(e)}vt(){this.cn.rn()}}class pN{constructor(e){this.cn=e}Bt(e){this.cn.jt(e)}xt(e){this.cn.Zt(e)}Mt(e){this.cn.nn(e)}vt(){this.cn._n()}}class Ql{constructor(){this.cn=new dN,this.ln=new fN(this.cn),this.hn=new pN(this.cn)}seed(e){this.cn.seed(e)}Pn(e){return e===0?this.ln:this.hn}un(){return this.cn.un()}reset(){this.cn.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e,t,r,o){this.Tn=e,this.In=t,this.En=r,this.dn=o}An(){const e=this.dn.length,t=e===0||this.dn[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.dn,0),t!==e?r.set([0],this.dn.length):++r[r.length-1],new so(this.Tn,this.In,this.En,r)}Rn(e,t,r){return{indexId:this.Tn,uid:e,arrayValue:Lh(this.En),directionalValue:Lh(this.dn),orderedDocumentKey:Lh(t),documentKey:r.path.toArray()}}Vn(e,t,r){const o=this.Rn(e,t,r);return[o.indexId,o.uid,o.arrayValue,o.directionalValue,o.orderedDocumentKey,o.documentKey]}}function ns(n,e){let t=n.Tn-e.Tn;return t!==0?t:(t=Kw(n.En,e.En),t!==0?t:(t=Kw(n.dn,e.dn),t!==0?t:le.comparator(n.In,e.In)))}function Kw(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}function Lh(n){return II()?(function(t){let r="";for(let o=0;o<t.length;o++)r+=String.fromCharCode(t[o]);return r})(n):n}function Gw(n){return typeof n!="string"?n:(function(t){const r=new Uint8Array(t.length);for(let o=0;o<t.length;o++)r[o]=t.charCodeAt(o);return r})(n)}class Ww{constructor(e){this.mn=new rt(((t,r)=>vt.comparator(t.field,r.field))),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.fn=e.orderBy,this.gn=[];for(const t of e.filters){const r=t;r.isInequality()?this.mn=this.mn.add(r):this.gn.push(r)}}get pn(){return this.mn.size>1}yn(e){if(ke(e.collectionGroup===this.collectionId,49279),this.pn)return!1;const t=hm(e);if(t!==void 0&&!this.wn(t))return!1;const r=eo(e);let o=new Set,a=0,u=0;for(;a<r.length&&this.wn(r[a]);++a)o=o.add(r[a].fieldPath.canonicalString());if(a===r.length)return!0;if(this.mn.size>0){const d=this.mn.getIterator().getNext();if(!o.has(d.field.canonicalString())){const f=r[a];if(!this.Sn(d,f)||!this.bn(this.fn[u++],f))return!1}++a}for(;a<r.length;++a){const d=r[a];if(u>=this.fn.length||!this.bn(this.fn[u++],d))return!1}return!0}Dn(){if(this.pn)return null;let e=new rt(vt.comparator);const t=[];for(const r of this.gn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")t.push(new bh(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new bh(r.field,0))}for(const r of this.fn)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new bh(r.field,r.dir==="asc"?0:1)));return new Xh(Xh.UNKNOWN_ID,this.collectionId,t,Eu.empty())}wn(e){for(const t of this.gn)if(this.Sn(t,e))return!0;return!1}Sn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}bn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b0(n){if(ke(n instanceof qe||n instanceof nt,20012),n instanceof qe){if(n instanceof XT){const t=n.value.arrayValue?.values?.map((r=>qe.create(n.field,"==",r)))||[];return nt.create(t,"or")}return n}const e=n.filters.map((t=>b0(t)));return nt.create(e,n.op)}function mN(n){if(n.getFilters().length===0)return[];const e=Pm(b0(n));return ke(C0(e),7391),Rm(e)||km(e)?[e]:e.getFilters()}function Rm(n){return n instanceof qe}function km(n){return n instanceof nt&&ug(n)}function C0(n){return Rm(n)||km(n)||(function(t){if(t instanceof nt&&_m(t)){for(const r of t.getFilters())if(!Rm(r)&&!km(r))return!1;return!0}return!1})(n)}function Pm(n){if(ke(n instanceof qe||n instanceof nt,34018),n instanceof qe)return n;if(n.filters.length===1)return Pm(n.filters[0]);const e=n.filters.map((r=>Pm(r)));let t=nt.create(e,n.op);return t=ld(t),C0(t)?t:(ke(t instanceof nt,64498),ke(qa(t),40251),ke(t.filters.length>1,57927),t.filters.reduce(((r,o)=>gg(r,o))))}function gg(n,e){let t;return ke(n instanceof qe||n instanceof nt,38388),ke(e instanceof qe||e instanceof nt,25473),t=n instanceof qe?e instanceof qe?(function(o,a){return nt.create([o,a],"and")})(n,e):Hw(n,e):e instanceof qe?Hw(e,n):(function(o,a){if(ke(o.filters.length>0&&a.filters.length>0,48005),qa(o)&&qa(a))return HT(o,a.getFilters());const u=_m(o)?o:a,d=_m(o)?a:o,f=u.filters.map((m=>gg(m,d)));return nt.create(f,"or")})(n,e),ld(t)}function Hw(n,e){if(qa(e))return HT(e,n.getFilters());{const t=e.filters.map((r=>gg(n,r)));return nt.create(t,"or")}}function ld(n){if(ke(n instanceof qe||n instanceof nt,11850),n instanceof qe)return n;const e=n.getFilters();if(e.length===1)return ld(e[0]);if(GT(n))return n;const t=e.map((o=>ld(o))),r=[];return t.forEach((o=>{o instanceof qe?r.push(o):o instanceof nt&&(o.op===n.op?r.push(...o.filters):r.push(o))})),r.length===1?r[0]:nt.create(r,n.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gN{constructor(){this.Cn=new yg}addToCollectionParentIndex(e,t){return this.Cn.add(t),L.resolve()}getCollectionParents(e,t){return L.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return L.resolve()}deleteFieldIndex(e,t){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,t){return L.resolve()}getDocumentsMatchingTarget(e,t){return L.resolve(null)}getIndexType(e,t){return L.resolve(0)}getFieldIndexes(e,t){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,t){return L.resolve(Mn.min())}getMinOffsetFromCollectionGroup(e,t){return L.resolve(Mn.min())}updateCollectionGroup(e,t,r){return L.resolve()}updateIndexEntries(e,t){return L.resolve()}}class yg{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),o=this.index[t]||new rt(Je.comparator),a=!o.has(r);return this.index[t]=o.add(r),a}has(e){const t=e.lastSegment(),r=e.popLast(),o=this.index[t];return o&&o.has(r)}getEntries(e){return(this.index[e]||new rt(Je.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qw="IndexedDbIndexManager",vh=new Uint8Array(0);class yN{constructor(e,t){this.databaseId=t,this.vn=new yg,this.Fn=new Ti((r=>vo(r)),((r,o)=>$u(r,o))),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.vn.has(t)){const r=t.lastSegment(),o=t.popLast();e.addOnCommittedListener((()=>{this.vn.add(t)}));const a={collectionId:r,parent:an(o)};return Yw(e).put(a)}return L.resolve()}getCollectionParents(e,t){const r=[],o=IDBKeyRange.bound([t,""],[_T(t),""],!1,!0);return Yw(e).J(o).next((a=>{for(const u of a){if(u.collectionId!==t)break;r.push(Fr(u.parent))}return r}))}addFieldIndex(e,t){const r=Yl(e),o=(function(d){return{indexId:d.indexId,collectionGroup:d.collectionGroup,fields:d.fields.map((f=>[f.fieldPath.canonicalString(),f.kind]))}})(t);delete o.indexId;const a=r.add(o);if(t.indexState){const u=Ta(e);return a.next((d=>{u.put(jw(d,this.uid,t.indexState.sequenceNumber,t.indexState.offset))}))}return a.next()}deleteFieldIndex(e,t){const r=Yl(e),o=Ta(e),a=Ia(e);return r.delete(t.indexId).next((()=>o.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))).next((()=>a.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))))}deleteAllFieldIndexes(e){const t=Yl(e),r=Ia(e),o=Ta(e);return t.Z().next((()=>r.Z())).next((()=>o.Z()))}createTargetIndexes(e,t){return L.forEach(this.Mn(t),(r=>this.getIndexType(e,r).next((o=>{if(o===0||o===1){const a=new Ww(r).Dn();if(a!=null)return this.addFieldIndex(e,a)}}))))}getDocumentsMatchingTarget(e,t){const r=Ia(e);let o=!0;const a=new Map;return L.forEach(this.Mn(t),(u=>this.xn(e,u).next((d=>{o&&(o=!!d),a.set(u,d)})))).next((()=>{if(o){let u=Be();const d=[];return L.forEach(a,((f,m)=>{ee(Qw,`Using index ${(function(te){return`id=${te.indexId}|cg=${te.collectionGroup}|f=${te.fields.map((ce=>`${ce.fieldPath}:${ce.kind}`)).join(",")}`})(f)} to execute ${vo(t)}`);const v=(function(te,ce){const he=hm(ce);if(he===void 0)return null;for(const ue of rd(te,he.fieldPath))switch(ue.op){case"array-contains-any":return ue.value.arrayValue.values||[];case"array-contains":return[ue.value]}return null})(m,f),E=(function(te,ce){const he=new Map;for(const ue of eo(ce))for(const P of rd(te,ue.fieldPath))switch(P.op){case"==":case"in":he.set(ue.fieldPath.canonicalString(),P.value);break;case"not-in":case"!=":return he.set(ue.fieldPath.canonicalString(),P.value),Array.from(he.values())}return null})(m,f),S=(function(te,ce){const he=[];let ue=!0;for(const P of eo(ce)){const T=P.kind===0?kw(te,P.fieldPath,te.startAt):Pw(te,P.fieldPath,te.startAt);he.push(T.value),ue&&(ue=T.inclusive)}return new $a(he,ue)})(m,f),x=(function(te,ce){const he=[];let ue=!0;for(const P of eo(ce)){const T=P.kind===0?Pw(te,P.fieldPath,te.endAt):kw(te,P.fieldPath,te.endAt);he.push(T.value),ue&&(ue=T.inclusive)}return new $a(he,ue)})(m,f),B=this.On(f,m,S),q=this.On(f,m,x),O=this.Nn(f,m,E),ne=this.Bn(f.indexId,v,B,S.inclusive,q,x.inclusive,O);return L.forEach(ne,(re=>r.Y(re,t.limit).next((te=>{te.forEach((ce=>{const he=le.fromSegments(ce.documentKey);u.has(he)||(u=u.add(he),d.push(he))}))}))))})).next((()=>d))}return L.resolve(null)}))}Mn(e){let t=this.Fn.get(e);return t||(e.filters.length===0?t=[e]:t=mN(nt.create(e.filters,"and")).map((r=>wm(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt))),this.Fn.set(e,t),t)}Bn(e,t,r,o,a,u,d){const f=(t!=null?t.length:1)*Math.max(r.length,a.length),m=f/(t!=null?t.length:1),v=[];for(let E=0;E<f;++E){const S=t?this.Ln(t[E/m]):vh,x=this.kn(e,S,r[E%m],o),B=this.qn(e,S,a[E%m],u),q=d.map((O=>this.kn(e,S,O,!0)));v.push(...this.createRange(x,B,q))}return v}kn(e,t,r,o){const a=new so(e,le.empty(),t,r);return o?a:a.An()}qn(e,t,r,o){const a=new so(e,le.empty(),t,r);return o?a.An():a}xn(e,t){const r=new Ww(t),o=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,o).next((a=>{let u=null;for(const d of a)r.yn(d)&&(!u||d.fields.length>u.fields.length)&&(u=d);return u}))}getIndexType(e,t){let r=2;const o=this.Mn(t);return L.forEach(o,(a=>this.xn(e,a).next((u=>{u?r!==0&&u.fields.length<(function(f){let m=new rt(vt.comparator),v=!1;for(const E of f.filters)for(const S of E.getFlattenedFilters())S.field.isKeyField()||(S.op==="array-contains"||S.op==="array-contains-any"?v=!0:m=m.add(S.field));for(const E of f.orderBy)E.field.isKeyField()||(m=m.add(E.field));return m.size+(v?1:0)})(a)&&(r=1):r=0})))).next((()=>(function(u){return u.limit!==null})(t)&&o.length>1&&r===2?1:r))}Qn(e,t){const r=new Ql;for(const o of eo(e)){const a=t.data.field(o.fieldPath);if(a==null)return null;const u=r.Pn(o.kind);io.Kt.Dt(a,u)}return r.un()}Ln(e){const t=new Ql;return io.Kt.Dt(e,t.Pn(0)),t.un()}$n(e,t){const r=new Ql;return io.Kt.Dt(Pu(this.databaseId,t),r.Pn((function(a){const u=eo(a);return u.length===0?0:u[u.length-1].kind})(e))),r.un()}Nn(e,t,r){if(r===null)return[];let o=[];o.push(new Ql);let a=0;for(const u of eo(e)){const d=r[a++];for(const f of o)if(this.Un(t,u.fieldPath)&&bu(d))o=this.Kn(o,u,d);else{const m=f.Pn(u.kind);io.Kt.Dt(d,m)}}return this.Wn(o)}On(e,t,r){return this.Nn(e,t,r.position)}Wn(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].un();return t}Kn(e,t,r){const o=[...e],a=[];for(const u of r.arrayValue.values||[])for(const d of o){const f=new Ql;f.seed(d.un()),io.Kt.Dt(u,f.Pn(t.kind)),a.push(f)}return a}Un(e,t){return!!e.filters.find((r=>r instanceof qe&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in")))}getFieldIndexes(e,t){const r=Yl(e),o=Ta(e);return(t?r.J(fm,IDBKeyRange.bound(t,t)):r.J()).next((a=>{const u=[];return L.forEach(a,(d=>o.get([d.indexId,this.uid]).next((f=>{u.push((function(v,E){const S=E?new Eu(E.sequenceNumber,new Mn(Eo(E.readTime),new le(Fr(E.documentKey)),E.largestBatchId)):Eu.empty(),x=v.fields.map((([B,q])=>new bh(vt.fromServerFormat(B),q)));return new Xh(v.indexId,v.collectionGroup,x,S)})(d,f))})))).next((()=>u))}))}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next((t=>t.length===0?null:(t.sort(((r,o)=>{const a=r.indexState.sequenceNumber-o.indexState.sequenceNumber;return a!==0?a:Ve(r.collectionGroup,o.collectionGroup)})),t[0].collectionGroup)))}updateCollectionGroup(e,t,r){const o=Yl(e),a=Ta(e);return this.Gn(e).next((u=>o.J(fm,IDBKeyRange.bound(t,t)).next((d=>L.forEach(d,(f=>a.put(jw(f.indexId,this.uid,u,r))))))))}updateIndexEntries(e,t){const r=new Map;return L.forEach(t,((o,a)=>{const u=r.get(o.collectionGroup);return(u?L.resolve(u):this.getFieldIndexes(e,o.collectionGroup)).next((d=>(r.set(o.collectionGroup,d),L.forEach(d,(f=>this.zn(e,o,f).next((m=>{const v=this.jn(a,f);return m.isEqual(v)?L.resolve():this.Jn(e,a,f,m,v)})))))))}))}Hn(e,t,r,o){return Ia(e).put(o.Rn(this.uid,this.$n(r,t.key),t.key))}Yn(e,t,r,o){return Ia(e).delete(o.Vn(this.uid,this.$n(r,t.key),t.key))}zn(e,t,r){const o=Ia(e);let a=new rt(ns);return o.ee({index:bT,range:IDBKeyRange.only([r.indexId,this.uid,Lh(this.$n(r,t))])},((u,d)=>{a=a.add(new so(r.indexId,t,Gw(d.arrayValue),Gw(d.directionalValue)))})).next((()=>a))}jn(e,t){let r=new rt(ns);const o=this.Qn(t,e);if(o==null)return r;const a=hm(t);if(a!=null){const u=e.data.field(a.fieldPath);if(bu(u))for(const d of u.arrayValue.values||[])r=r.add(new so(t.indexId,e.key,this.Ln(d),o))}else r=r.add(new so(t.indexId,e.key,vh,o));return r}Jn(e,t,r,o,a){ee(Qw,"Updating index entries for document '%s'",t.key);const u=[];return(function(f,m,v,E,S){const x=f.getIterator(),B=m.getIterator();let q=wa(x),O=wa(B);for(;q||O;){let ne=!1,re=!1;if(q&&O){const te=v(q,O);te<0?re=!0:te>0&&(ne=!0)}else q!=null?re=!0:ne=!0;ne?(E(O),O=wa(B)):re?(S(q),q=wa(x)):(q=wa(x),O=wa(B))}})(o,a,ns,(d=>{u.push(this.Hn(e,t,r,d))}),(d=>{u.push(this.Yn(e,t,r,d))})),L.waitFor(u)}Gn(e){let t=1;return Ta(e).ee({index:PT,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},((r,o,a)=>{a.done(),t=o.sequenceNumber+1})).next((()=>t))}createRange(e,t,r){r=r.sort(((u,d)=>ns(u,d))).filter(((u,d,f)=>!d||ns(u,f[d-1])!==0));const o=[];o.push(e);for(const u of r){const d=ns(u,e),f=ns(u,t);if(d===0)o[0]=e.An();else if(d>0&&f<0)o.push(u),o.push(u.An());else if(f>0)break}o.push(t);const a=[];for(let u=0;u<o.length;u+=2){if(this.Zn(o[u],o[u+1]))return[];const d=o[u].Vn(this.uid,vh,le.empty()),f=o[u+1].Vn(this.uid,vh,le.empty());a.push(IDBKeyRange.bound(d,f))}return a}Zn(e,t){return ns(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Xw)}getMinOffset(e,t){return L.mapArray(this.Mn(t),(r=>this.xn(e,r).next((o=>o||we(44426))))).next(Xw)}}function Yw(n){return Ft(n,Au)}function Ia(n){return Ft(n,du)}function Yl(n){return Ft(n,rg)}function Ta(n){return Ft(n,hu)}function Xw(n){ke(n.length!==0,28825);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const o=n[r].indexState.offset;eg(o,e)<0&&(e=o),t<o.largestBatchId&&(t=o.largestBatchId)}return new Mn(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jw={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},x0=41943040;class rn{static withCacheSize(e){return new rn(e,rn.DEFAULT_COLLECTION_PERCENTILE,rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N0(n,e,t){const r=n.store(lr),o=n.store(La),a=[],u=IDBKeyRange.only(t.batchId);let d=0;const f=r.ee({range:u},((v,E,S)=>(d++,S.delete())));a.push(f.next((()=>{ke(d===1,47070,{batchId:t.batchId})})));const m=[];for(const v of t.mutations){const E=AT(e,v.key.path,t.batchId);a.push(o.delete(E)),m.push(v.key)}return L.waitFor(a).next((()=>m))}function ud(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw we(14731);e=n.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rn.DEFAULT_COLLECTION_PERCENTILE=10,rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,rn.DEFAULT=new rn(x0,rn.DEFAULT_COLLECTION_PERCENTILE,rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),rn.DISABLED=new rn(-1,0,0);class Bd{constructor(e,t,r,o){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=o,this.Xn={}}static wt(e,t,r,o){ke(e.uid!=="",64387);const a=e.isAuthenticated()?e.uid:"";return new Bd(a,t,r,o)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return rs(e).ee({index:oo,range:r},((o,a,u)=>{t=!1,u.done()})).next((()=>t))}addMutationBatch(e,t,r,o){const a=ba(e),u=rs(e);return u.add({}).next((d=>{ke(typeof d=="number",49019);const f=new hg(d,t,r,o),m=(function(x,B,q){const O=q.baseMutations.map((re=>od(x.yt,re))),ne=q.mutations.map((re=>od(x.yt,re)));return{userId:B,batchId:q.batchId,localWriteTimeMs:q.localWriteTime.toMillis(),baseMutations:O,mutations:ne}})(this.serializer,this.userId,f),v=[];let E=new rt(((S,x)=>Ve(S.canonicalString(),x.canonicalString())));for(const S of o){const x=AT(this.userId,S.key.path,d);E=E.add(S.key.path.popLast()),v.push(u.put(m)),v.push(a.put(x,KC))}return E.forEach((S=>{v.push(this.indexManager.addToCollectionParentIndex(e,S))})),e.addOnCommittedListener((()=>{this.Xn[d]=f.keys()})),L.waitFor(v).next((()=>f))}))}lookupMutationBatch(e,t){return rs(e).get(t).next((r=>r?(ke(r.userId===this.userId,48,"Unexpected user for mutation batch",{userId:r.userId,batchId:t}),ro(this.serializer,r)):null))}er(e,t){return this.Xn[t]?L.resolve(this.Xn[t]):this.lookupMutationBatch(e,t).next((r=>{if(r){const o=r.keys();return this.Xn[t]=o,o}return null}))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,o=IDBKeyRange.lowerBound([this.userId,r]);let a=null;return rs(e).ee({index:oo,range:o},((u,d,f)=>{d.userId===this.userId&&(ke(d.batchId>=r,47524,{tr:r}),a=ro(this.serializer,d)),f.done()})).next((()=>a))}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=lo;return rs(e).ee({index:oo,range:t,reverse:!0},((o,a,u)=>{r=a.batchId,u.done()})).next((()=>r))}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,lo],[this.userId,Number.POSITIVE_INFINITY]);return rs(e).J(oo,t).next((r=>r.map((o=>ro(this.serializer,o)))))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=Ch(this.userId,t.path),o=IDBKeyRange.lowerBound(r),a=[];return ba(e).ee({range:o},((u,d,f)=>{const[m,v,E]=u,S=Fr(v);if(m===this.userId&&t.path.isEqual(S))return rs(e).get(E).next((x=>{if(!x)throw we(61480,{nr:u,batchId:E});ke(x.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:x.userId,batchId:E}),a.push(ro(this.serializer,x))}));f.done()})).next((()=>a))}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new rt(Ve);const o=[];return t.forEach((a=>{const u=Ch(this.userId,a.path),d=IDBKeyRange.lowerBound(u),f=ba(e).ee({range:d},((m,v,E)=>{const[S,x,B]=m,q=Fr(x);S===this.userId&&a.path.isEqual(q)?r=r.add(B):E.done()}));o.push(f)})),L.waitFor(o).next((()=>this.rr(e,r)))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,o=r.length+1,a=Ch(this.userId,r),u=IDBKeyRange.lowerBound(a);let d=new rt(Ve);return ba(e).ee({range:u},((f,m,v)=>{const[E,S,x]=f,B=Fr(S);E===this.userId&&r.isPrefixOf(B)?B.length===o&&(d=d.add(x)):v.done()})).next((()=>this.rr(e,d)))}rr(e,t){const r=[],o=[];return t.forEach((a=>{o.push(rs(e).get(a).next((u=>{if(u===null)throw we(35274,{batchId:a});ke(u.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:u.userId,batchId:a}),r.push(ro(this.serializer,u))})))})),L.waitFor(o).next((()=>r))}removeMutationBatch(e,t){return N0(e.le,this.userId,t).next((r=>(e.addOnCommittedListener((()=>{this.ir(t.batchId)})),L.forEach(r,(o=>this.referenceDelegate.markPotentiallyOrphaned(e,o))))))}ir(e){delete this.Xn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next((t=>{if(!t)return L.resolve();const r=IDBKeyRange.lowerBound((function(u){return[u]})(this.userId)),o=[];return ba(e).ee({range:r},((a,u,d)=>{if(a[0]===this.userId){const f=Fr(a[1]);o.push(f)}else d.done()})).next((()=>{ke(o.length===0,56720,{sr:o.map((a=>a.canonicalString()))})}))}))}containsKey(e,t){return D0(e,this.userId,t)}_r(e){return V0(e).get(this.userId).next((t=>t||{userId:this.userId,lastAcknowledgedBatchId:lo,lastStreamToken:""}))}}function D0(n,e,t){const r=Ch(e,t.path),o=r[1],a=IDBKeyRange.lowerBound(r);let u=!1;return ba(n).ee({range:a,X:!0},((d,f,m)=>{const[v,E,S]=d;v===e&&E===o&&(u=!0),m.done()})).next((()=>u))}function rs(n){return Ft(n,lr)}function ba(n){return Ft(n,La)}function V0(n){return Ft(n,Tu)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Io(0)}static cr(){return new Io(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _N{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.lr(e).next((t=>{const r=new Io(t.highestTargetId);return t.highestTargetId=r.next(),this.hr(e,t).next((()=>t.highestTargetId))}))}getLastRemoteSnapshotVersion(e){return this.lr(e).next((t=>Pe.fromTimestamp(new tt(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(e){return this.lr(e).next((t=>t.highestListenSequenceNumber))}setTargetsMetadata(e,t,r){return this.lr(e).next((o=>(o.highestListenSequenceNumber=t,r&&(o.lastRemoteSnapshotVersion=r.toTimestamp()),t>o.highestListenSequenceNumber&&(o.highestListenSequenceNumber=t),this.hr(e,o))))}addTargetData(e,t){return this.Pr(e,t).next((()=>this.lr(e).next((r=>(r.targetCount+=1,this.Tr(t,r),this.hr(e,r))))))}updateTargetData(e,t){return this.Pr(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next((()=>Sa(e).delete(t.targetId))).next((()=>this.lr(e))).next((r=>(ke(r.targetCount>0,8065),r.targetCount-=1,this.hr(e,r))))}removeTargets(e,t,r){let o=0;const a=[];return Sa(e).ee(((u,d)=>{const f=su(d);f.sequenceNumber<=t&&r.get(f.targetId)===null&&(o++,a.push(this.removeTargetData(e,f)))})).next((()=>L.waitFor(a))).next((()=>o))}forEachTarget(e,t){return Sa(e).ee(((r,o)=>{const a=su(o);t(a)}))}lr(e){return Zw(e).get(ed).next((t=>(ke(t!==null,2888),t)))}hr(e,t){return Zw(e).put(ed,t)}Pr(e,t){return Sa(e).put(k0(this.serializer,t))}Tr(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.lr(e).next((t=>t.targetCount))}getTargetData(e,t){const r=vo(t),o=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let a=null;return Sa(e).ee({range:o,index:kT},((u,d,f)=>{const m=su(d);$u(t,m.target)&&(a=m,f.done())})).next((()=>a))}addMatchingKeys(e,t,r){const o=[],a=us(e);return t.forEach((u=>{const d=an(u.path);o.push(a.put({targetId:r,path:d})),o.push(this.referenceDelegate.addReference(e,r,u))})),L.waitFor(o)}removeMatchingKeys(e,t,r){const o=us(e);return L.forEach(t,(a=>{const u=an(a.path);return L.waitFor([o.delete([r,u]),this.referenceDelegate.removeReference(e,r,a)])}))}removeMatchingKeysForTargetId(e,t){const r=us(e),o=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(o)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),o=us(e);let a=Be();return o.ee({range:r,X:!0},((u,d,f)=>{const m=Fr(u[1]),v=new le(m);a=a.add(v)})).next((()=>a))}containsKey(e,t){const r=an(t.path),o=IDBKeyRange.bound([r],[_T(r)],!1,!0);let a=0;return us(e).ee({index:ng,X:!0,range:o},(([u,d],f,m)=>{u!==0&&(a++,m.done())})).next((()=>a>0))}At(e,t){return Sa(e).get(t).next((r=>r?su(r):null))}}function Sa(n){return Ft(n,Fa)}function Zw(n){return Ft(n,uo)}function us(n){return Ft(n,Ua)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eE="LruGarbageCollector",vN=1048576;function tE([n,e],[t,r]){const o=Ve(n,t);return o===0?Ve(e,r):o}class wN{constructor(e){this.Ir=e,this.buffer=new rt(tE),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();tE(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class O0{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){ee(eE,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Is(t)?ee(eE,"Ignoring IndexedDB error during garbage collection: ",t):await xo(t)}await this.Vr(3e5)}))}}class EN{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return L.resolve(Hn.ce);const r=new wN(t);return this.mr.forEachTarget(e,(o=>r.Ar(o.sequenceNumber))).next((()=>this.mr.pr(e,(o=>r.Ar(o))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.mr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ee("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(Jw)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(ee("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Jw):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let r,o,a,u,d,f,m;const v=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((E=>(E>this.params.maximumSequenceNumbersToCollect?(ee("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${E}`),o=this.params.maximumSequenceNumbersToCollect):o=E,u=Date.now(),this.nthSequenceNumber(e,o)))).next((E=>(r=E,d=Date.now(),this.removeTargets(e,r,t)))).next((E=>(a=E,f=Date.now(),this.removeOrphanedDocuments(e,r)))).next((E=>(m=Date.now(),Aa()<=$e.DEBUG&&ee("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-v}ms
	Determined least recently used ${o} in `+(d-u)+`ms
	Removed ${a} targets in `+(f-d)+`ms
	Removed ${E} documents in `+(m-f)+`ms
Total Duration: ${m-v}ms`),L.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:a,documentsRemoved:E}))))}}function M0(n,e){return new EN(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IN{constructor(e,t){this.db=e,this.garbageCollector=M0(this,t)}gr(e){const t=this.wr(e);return this.db.getTargetCache().getTargetCount(e).next((r=>t.next((o=>r+o))))}wr(e){let t=0;return this.pr(e,(r=>{t++})).next((()=>t))}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}pr(e,t){return this.Sr(e,((r,o)=>t(o)))}addReference(e,t,r){return wh(e,r)}removeReference(e,t,r){return wh(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return wh(e,t)}br(e,t){return(function(o,a){let u=!1;return V0(o).te((d=>D0(o,d,a).next((f=>(f&&(u=!0),L.resolve(!f)))))).next((()=>u))})(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),o=[];let a=0;return this.Sr(e,((u,d)=>{if(d<=t){const f=this.br(e,u).next((m=>{if(!m)return a++,r.getEntry(e,u).next((()=>(r.removeEntry(u,Pe.min()),us(e).delete((function(E){return[0,an(E.path)]})(u)))))}));o.push(f)}})).next((()=>L.waitFor(o))).next((()=>r.apply(e))).next((()=>a))}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return wh(e,t)}Sr(e,t){const r=us(e);let o,a=Hn.ce;return r.ee({index:ng},(([u,d],{path:f,sequenceNumber:m})=>{u===0?(a!==Hn.ce&&t(new le(Fr(o)),a),a=m,o=f):a=Hn.ce})).next((()=>{a!==Hn.ce&&t(new le(Fr(o)),a)}))}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function wh(n,e){return us(n).put((function(r,o){return{targetId:0,path:an(r.path),sequenceNumber:o}})(e,n.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L0{constructor(){this.changes=new Ti((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Rt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?L.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TN{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return Js(e).put(r)}removeEntry(e,t,r){return Js(e).delete((function(a,u){const d=a.path.toArray();return[d.slice(0,d.length-2),d[d.length-2],ad(u),d[d.length-1]]})(t,r))}updateMetadata(e,t){return this.getMetadata(e).next((r=>(r.byteSize+=t,this.Dr(e,r))))}getEntry(e,t){let r=Rt.newInvalidDocument(t);return Js(e).ee({index:xh,range:IDBKeyRange.only(Xl(t))},((o,a)=>{r=this.Cr(t,a)})).next((()=>r))}vr(e,t){let r={size:0,document:Rt.newInvalidDocument(t)};return Js(e).ee({index:xh,range:IDBKeyRange.only(Xl(t))},((o,a)=>{r={document:this.Cr(t,a),size:ud(a)}})).next((()=>r))}getEntries(e,t){let r=On();return this.Fr(e,t,((o,a)=>{const u=this.Cr(o,a);r=r.insert(o,u)})).next((()=>r))}Mr(e,t){let r=On(),o=new gt(le.comparator);return this.Fr(e,t,((a,u)=>{const d=this.Cr(a,u);r=r.insert(a,d),o=o.insert(a,ud(u))})).next((()=>({documents:r,Or:o})))}Fr(e,t,r){if(t.isEmpty())return L.resolve();let o=new rt(iE);t.forEach((f=>o=o.add(f)));const a=IDBKeyRange.bound(Xl(o.first()),Xl(o.last())),u=o.getIterator();let d=u.getNext();return Js(e).ee({index:xh,range:a},((f,m,v)=>{const E=le.fromSegments([...m.prefixPath,m.collectionGroup,m.documentId]);for(;d&&iE(d,E)<0;)r(d,null),d=u.getNext();d&&d.isEqual(E)&&(r(d,m),d=u.hasNext()?u.getNext():null),d?v.j(Xl(d)):v.done()})).next((()=>{for(;d;)r(d,null),d=u.hasNext()?u.getNext():null}))}getDocumentsMatchingQuery(e,t,r,o,a){const u=t.path,d=[u.popLast().toArray(),u.lastSegment(),ad(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],f=[u.popLast().toArray(),u.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Js(e).J(IDBKeyRange.bound(d,f,!0)).next((m=>{a?.incrementDocumentReadCount(m.length);let v=On();for(const E of m){const S=this.Cr(le.fromSegments(E.prefixPath.concat(E.collectionGroup,E.documentId)),E);S.isFoundDocument()&&(Ku(t,S)||o.has(S.key))&&(v=v.insert(S.key,S))}return v}))}getAllFromCollectionGroup(e,t,r,o){let a=On();const u=rE(t,r),d=rE(t,Mn.max());return Js(e).ee({index:RT,range:IDBKeyRange.bound(u,d,!0)},((f,m,v)=>{const E=this.Cr(le.fromSegments(m.prefixPath.concat(m.collectionGroup,m.documentId)),m);a=a.insert(E.key,E),a.size===o&&v.done()})).next((()=>a))}newChangeBuffer(e){return new SN(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next((t=>t.byteSize))}getMetadata(e){return nE(e).get(dm).next((t=>(ke(!!t,20021),t)))}Dr(e,t){return nE(e).put(dm,t)}Cr(e,t){if(t){const r=lN(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(Pe.min())))return r}return Rt.newInvalidDocument(e)}}function F0(n){return new TN(n)}class SN extends L0{constructor(e,t){super(),this.Nr=e,this.trackRemovals=t,this.Br=new Ti((r=>r.toString()),((r,o)=>r.isEqual(o)))}applyChanges(e){const t=[];let r=0,o=new rt(((a,u)=>Ve(a.canonicalString(),u.canonicalString())));return this.changes.forEach(((a,u)=>{const d=this.Br.get(a);if(t.push(this.Nr.removeEntry(e,a,d.readTime)),u.isValidDocument()){const f=Uw(this.Nr.serializer,u);o=o.add(a.path.popLast());const m=ud(f);r+=m-d.size,t.push(this.Nr.addEntry(e,a,f))}else if(r-=d.size,this.trackRemovals){const f=Uw(this.Nr.serializer,u.convertToNoDocument(Pe.min()));t.push(this.Nr.addEntry(e,a,f))}})),o.forEach((a=>{t.push(this.Nr.indexManager.addToCollectionParentIndex(e,a))})),t.push(this.Nr.updateMetadata(e,r)),L.waitFor(t)}getFromCache(e,t){return this.Nr.vr(e,t).next((r=>(this.Br.set(t,{size:r.size,readTime:r.document.readTime}),r.document)))}getAllFromCache(e,t){return this.Nr.Mr(e,t).next((({documents:r,Or:o})=>(o.forEach(((a,u)=>{this.Br.set(a,{size:u,readTime:r.get(a).readTime})})),r)))}}function nE(n){return Ft(n,Su)}function Js(n){return Ft(n,Zh)}function Xl(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function rE(n,e){const t=e.documentKey.path.toArray();return[n,ad(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function iE(n,e){const t=n.path.toArray(),r=e.path.toArray();let o=0;for(let a=0;a<t.length-2&&a<r.length-2;++a)if(o=Ve(t[a],r[a]),o)return o;return o=Ve(t.length,r.length),o||(o=Ve(t[t.length-2],r[r.length-2]),o||Ve(t[t.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AN{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0{constructor(e,t,r,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=o}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(r=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(r!==null&&gu(r.mutation,o,En.empty(),tt.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,Be()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=Be()){const o=Ur();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,r).next((a=>{let u=ru();return a.forEach(((d,f)=>{u=u.insert(d,f.overlayedDocument)})),u}))))}getOverlayedDocuments(e,t){const r=Ur();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,Be())))}populateOverlays(e,t,r){const o=[];return r.forEach((a=>{t.has(a)||o.push(a)})),this.documentOverlayCache.getOverlays(e,o).next((a=>{a.forEach(((u,d)=>{t.set(u,d)}))}))}computeViews(e,t,r,o){let a=On();const u=mu(),d=(function(){return mu()})();return t.forEach(((f,m)=>{const v=r.get(m.key);o.has(m.key)&&(v===void 0||v.mutation instanceof Si)?a=a.insert(m.key,m):v!==void 0?(u.set(m.key,v.mutation.getFieldMask()),gu(v.mutation,m,v.mutation.getFieldMask(),tt.now())):u.set(m.key,En.empty())})),this.recalculateAndSaveOverlays(e,a).next((f=>(f.forEach(((m,v)=>u.set(m,v))),t.forEach(((m,v)=>d.set(m,new AN(v,u.get(m)??null)))),d)))}recalculateAndSaveOverlays(e,t){const r=mu();let o=new gt(((u,d)=>u-d)),a=Be();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((u=>{for(const d of u)d.keys().forEach((f=>{const m=t.get(f);if(m===null)return;let v=r.get(f)||En.empty();v=d.applyToLocalView(m,v),r.set(f,v);const E=(o.get(d.batchId)||Be()).add(f);o=o.insert(d.batchId,E)}))})).next((()=>{const u=[],d=o.getReverseIterator();for(;d.hasNext();){const f=d.getNext(),m=f.key,v=f.value,E=r0();v.forEach((S=>{if(!a.has(S)){const x=u0(t.get(S),r.get(S));x!==null&&E.set(S,x),a=a.add(S)}})),u.push(this.documentOverlayCache.saveOverlays(e,m,E))}return L.waitFor(u)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,o){return(function(u){return le.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):JT(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,o):this.getDocumentsMatchingCollectionQuery(e,t,r,o)}getNextDocuments(e,t,r,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,o).next((a=>{const u=o-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,o-a.size):L.resolve(Ur());let d=wu,f=a;return u.next((m=>L.forEach(m,((v,E)=>(d<E.largestBatchId&&(d=E.largestBatchId),a.get(v)?L.resolve():this.remoteDocumentCache.getEntry(e,v).next((S=>{f=f.insert(v,S)}))))).next((()=>this.populateOverlays(e,m,a))).next((()=>this.computeViews(e,f,m,Be()))).next((v=>({batchId:d,changes:n0(v)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new le(t)).next((r=>{let o=ru();return r.isFoundDocument()&&(o=o.insert(r.key,r)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,o){const a=t.collectionGroup;let u=ru();return this.indexManager.getCollectionParents(e,a).next((d=>L.forEach(d,(f=>{const m=(function(E,S){return new el(S,null,E.explicitOrderBy.slice(),E.filters.slice(),E.limit,E.limitType,E.startAt,E.endAt)})(t,f.child(a));return this.getDocumentsMatchingCollectionQuery(e,m,r,o).next((v=>{v.forEach(((E,S)=>{u=u.insert(E,S)}))}))})).next((()=>u))))}getDocumentsMatchingCollectionQuery(e,t,r,o){let a;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((u=>(a=u,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,a,o)))).next((u=>{a.forEach(((f,m)=>{const v=m.getKey();u.get(v)===null&&(u=u.insert(v,Rt.newInvalidDocument(v)))}));let d=ru();return u.forEach(((f,m)=>{const v=a.get(f);v!==void 0&&gu(v.mutation,m,En.empty(),tt.now()),Ku(t,m)&&(d=d.insert(f,m))})),d}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RN{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return L.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:fn(o.createTime)}})(t)),L.resolve()}getNamedQuery(e,t){return L.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(o){return{name:o.name,query:P0(o.bundledQuery),readTime:fn(o.readTime)}})(t)),L.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kN{constructor(){this.overlays=new gt(le.comparator),this.qr=new Map}getOverlay(e,t){return L.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Ur();return L.forEach(t,(o=>this.getOverlay(e,o).next((a=>{a!==null&&r.set(o,a)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((o,a)=>{this.St(e,t,a)})),L.resolve()}removeOverlaysForBatchId(e,t,r){const o=this.qr.get(r);return o!==void 0&&(o.forEach((a=>this.overlays=this.overlays.remove(a))),this.qr.delete(r)),L.resolve()}getOverlaysForCollection(e,t,r){const o=Ur(),a=t.length+1,u=new le(t.child("")),d=this.overlays.getIteratorFrom(u);for(;d.hasNext();){const f=d.getNext().value,m=f.getKey();if(!t.isPrefixOf(m.path))break;m.path.length===a&&f.largestBatchId>r&&o.set(f.getKey(),f)}return L.resolve(o)}getOverlaysForCollectionGroup(e,t,r,o){let a=new gt(((m,v)=>m-v));const u=this.overlays.getIterator();for(;u.hasNext();){const m=u.getNext().value;if(m.getKey().getCollectionGroup()===t&&m.largestBatchId>r){let v=a.get(m.largestBatchId);v===null&&(v=Ur(),a=a.insert(m.largestBatchId,v)),v.set(m.getKey(),m)}}const d=Ur(),f=a.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach(((m,v)=>d.set(m,v))),!(d.size()>=o)););return L.resolve(d)}St(e,t,r){const o=this.overlays.get(r.key);if(o!==null){const u=this.qr.get(o.largestBatchId).delete(r.key);this.qr.set(o.largestBatchId,u)}this.overlays=this.overlays.insert(r.key,new fg(t,r));let a=this.qr.get(t);a===void 0&&(a=Be(),this.qr.set(t,a)),this.qr.set(t,a.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PN{constructor(){this.sessionToken=Dt.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,L.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(){this.Qr=new rt(zt.$r),this.Ur=new rt(zt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const r=new zt(e,t);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Gr(new zt(e,t))}zr(e,t){e.forEach((r=>this.removeReference(r,t)))}jr(e){const t=new le(new Je([])),r=new zt(t,e),o=new zt(t,e+1),a=[];return this.Ur.forEachInRange([r,o],(u=>{this.Gr(u),a.push(u.key)})),a}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new le(new Je([])),r=new zt(t,e),o=new zt(t,e+1);let a=Be();return this.Ur.forEachInRange([r,o],(u=>{a=a.add(u.key)})),a}containsKey(e){const t=new zt(e,0),r=this.Qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class zt{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return le.comparator(e.key,t.key)||Ve(e.Yr,t.Yr)}static Kr(e,t){return Ve(e.Yr,t.Yr)||le.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bN{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new rt(zt.$r)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,o){const a=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new hg(a,t,r,o);this.mutationQueue.push(u);for(const d of o)this.Zr=this.Zr.add(new zt(d.key,a)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return L.resolve(u)}lookupMutationBatch(e,t){return L.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,o=this.ei(r),a=o<0?0:o;return L.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?lo:this.tr-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new zt(t,0),o=new zt(t,Number.POSITIVE_INFINITY),a=[];return this.Zr.forEachInRange([r,o],(u=>{const d=this.Xr(u.Yr);a.push(d)})),L.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new rt(Ve);return t.forEach((o=>{const a=new zt(o,0),u=new zt(o,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([a,u],(d=>{r=r.add(d.Yr)}))})),L.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,o=r.length+1;let a=r;le.isDocumentKey(a)||(a=a.child(""));const u=new zt(new le(a),0);let d=new rt(Ve);return this.Zr.forEachWhile((f=>{const m=f.key.path;return!!r.isPrefixOf(m)&&(m.length===o&&(d=d.add(f.Yr)),!0)}),u),L.resolve(this.ti(d))}ti(e){const t=[];return e.forEach((r=>{const o=this.Xr(r);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){ke(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return L.forEach(t.mutations,(o=>{const a=new zt(o.key,t.batchId);return r=r.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Zr=r}))}ir(e){}containsKey(e,t){const r=new zt(t,0),o=this.Zr.firstAfterOrEqual(r);return L.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CN{constructor(e){this.ri=e,this.docs=(function(){return new gt(le.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,o=this.docs.get(r),a=o?o.size:0,u=this.ri(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:u}),this.size+=u-a,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return L.resolve(r?r.document.mutableCopy():Rt.newInvalidDocument(t))}getEntries(e,t){let r=On();return t.forEach((o=>{const a=this.docs.get(o);r=r.insert(o,a?a.document.mutableCopy():Rt.newInvalidDocument(o))})),L.resolve(r)}getDocumentsMatchingQuery(e,t,r,o){let a=On();const u=t.path,d=new le(u.child("__id-9223372036854775808__")),f=this.docs.getIteratorFrom(d);for(;f.hasNext();){const{key:m,value:{document:v}}=f.getNext();if(!u.isPrefixOf(m.path))break;m.path.length>u.length+1||eg(ET(v),r)<=0||(o.has(v.key)||Ku(t,v))&&(a=a.insert(v.key,v.mutableCopy()))}return L.resolve(a)}getAllFromCollectionGroup(e,t,r,o){we(9500)}ii(e,t){return L.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new xN(this)}getSize(e){return L.resolve(this.size)}}class xN extends L0{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((r,o)=>{o.isValidDocument()?t.push(this.Nr.addEntry(e,o)):this.Nr.removeEntry(r)})),L.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NN{constructor(e){this.persistence=e,this.si=new Ti((t=>vo(t)),$u),this.lastRemoteSnapshotVersion=Pe.min(),this.highestTargetId=0,this.oi=0,this._i=new _g,this.targetCount=0,this.ai=Io.ur()}forEachTarget(e,t){return this.si.forEach(((r,o)=>t(o))),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.oi&&(this.oi=t),L.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new Io(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,L.resolve()}updateTargetData(e,t){return this.Pr(t),L.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,t,r){let o=0;const a=[];return this.si.forEach(((u,d)=>{d.sequenceNumber<=t&&r.get(d.targetId)===null&&(this.si.delete(u),a.push(this.removeMatchingKeysForTargetId(e,d.targetId)),o++)})),L.waitFor(a).next((()=>o))}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,t){const r=this.si.get(t)||null;return L.resolve(r)}addMatchingKeys(e,t,r){return this._i.Wr(t,r),L.resolve()}removeMatchingKeys(e,t,r){this._i.zr(t,r);const o=this.persistence.referenceDelegate,a=[];return o&&t.forEach((u=>{a.push(o.markPotentiallyOrphaned(e,u))})),L.waitFor(a)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),L.resolve()}getMatchingKeysForTargetId(e,t){const r=this._i.Hr(t);return L.resolve(r)}containsKey(e,t){return L.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(e,t){this.ui={},this.overlays={},this.ci=new Hn(0),this.li=!1,this.li=!0,this.hi=new PN,this.referenceDelegate=e(this),this.Pi=new NN(this),this.indexManager=new gN,this.remoteDocumentCache=(function(o){return new CN(o)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new R0(t),this.Ii=new RN(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new kN,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ui[e.toKey()];return r||(r=new bN(t,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,r){ee("MemoryPersistence","Starting transaction:",e);const o=new DN(this.ci.next());return this.referenceDelegate.Ei(),r(o).next((a=>this.referenceDelegate.di(o).next((()=>a)))).toPromise().then((a=>(o.raiseOnCommittedEvent(),a)))}Ai(e,t){return L.or(Object.values(this.ui).map((r=>()=>r.containsKey(e,t))))}}class DN extends TT{constructor(e){super(),this.currentSequenceNumber=e}}class jd{constructor(e){this.persistence=e,this.Ri=new _g,this.Vi=null}static mi(e){return new jd(e)}get fi(){if(this.Vi)return this.Vi;throw we(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.fi.delete(r.toString()),L.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.fi.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),L.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((o=>this.fi.add(o.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((a=>this.fi.add(a.toString())))})).next((()=>r.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.fi,(r=>{const o=le.fromPath(r);return this.gi(e,o).next((a=>{a||t.removeEntry(o,Pe.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((r=>{r?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return L.or([()=>L.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class cd{constructor(e,t){this.persistence=e,this.pi=new Ti((r=>an(r.path)),((r,o)=>r.isEqual(o))),this.garbageCollector=M0(this,t)}static mi(e,t){return new cd(e,t)}Ei(){}di(e){return L.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((o=>r+o))))}wr(e){let t=0;return this.pr(e,(r=>{t++})).next((()=>t))}pr(e,t){return L.forEach(this.pi,((r,o)=>this.br(e,r,o).next((a=>a?L.resolve():t(o)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const o=this.persistence.getRemoteDocumentCache(),a=o.newChangeBuffer();return o.ii(e,(u=>this.br(e,u,t).next((d=>{d||(r++,a.removeEntry(u,Pe.min()))})))).next((()=>a.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),L.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),L.resolve()}removeReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),L.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),L.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Dh(e.data.value)),t}br(e,t,r){return L.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.pi.get(t);return L.resolve(o!==void 0&&o>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VN{constructor(e){this.serializer=e}k(e,t,r,o){const a=new kd("createOrUpgrade",t);r<1&&o>=1&&((function(f){f.createObjectStore(zu)})(e),(function(f){f.createObjectStore(Tu,{keyPath:qC}),f.createObjectStore(lr,{keyPath:mw,autoIncrement:!0}).createIndex(oo,gw,{unique:!0}),f.createObjectStore(La)})(e),sE(e),(function(f){f.createObjectStore(to)})(e));let u=L.resolve();return r<3&&o>=3&&(r!==0&&((function(f){f.deleteObjectStore(Ua),f.deleteObjectStore(Fa),f.deleteObjectStore(uo)})(e),sE(e)),u=u.next((()=>(function(f){const m=f.store(uo),v={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:Pe.min().toTimestamp(),targetCount:0};return m.put(ed,v)})(a)))),r<4&&o>=4&&(r!==0&&(u=u.next((()=>(function(f,m){return m.store(lr).J().next((E=>{f.deleteObjectStore(lr),f.createObjectStore(lr,{keyPath:mw,autoIncrement:!0}).createIndex(oo,gw,{unique:!0});const S=m.store(lr),x=E.map((B=>S.put(B)));return L.waitFor(x)}))})(e,a)))),u=u.next((()=>{(function(f){f.createObjectStore(Ba,{keyPath:ZC})})(e)}))),r<5&&o>=5&&(u=u.next((()=>this.yi(a)))),r<6&&o>=6&&(u=u.next((()=>((function(f){f.createObjectStore(Su)})(e),this.wi(a))))),r<7&&o>=7&&(u=u.next((()=>this.Si(a)))),r<8&&o>=8&&(u=u.next((()=>this.bi(e,a)))),r<9&&o>=9&&(u=u.next((()=>{(function(f){f.objectStoreNames.contains("remoteDocumentChanges")&&f.deleteObjectStore("remoteDocumentChanges")})(e)}))),r<10&&o>=10&&(u=u.next((()=>this.Di(a)))),r<11&&o>=11&&(u=u.next((()=>{(function(f){f.createObjectStore(bd,{keyPath:ex})})(e),(function(f){f.createObjectStore(Cd,{keyPath:tx})})(e)}))),r<12&&o>=12&&(u=u.next((()=>{(function(f){const m=f.createObjectStore(xd,{keyPath:lx});m.createIndex(pm,ux,{unique:!1}),m.createIndex(CT,cx,{unique:!1})})(e)}))),r<13&&o>=13&&(u=u.next((()=>(function(f){const m=f.createObjectStore(Zh,{keyPath:GC});m.createIndex(xh,WC),m.createIndex(RT,HC)})(e))).next((()=>this.Ci(e,a))).next((()=>e.deleteObjectStore(to)))),r<14&&o>=14&&(u=u.next((()=>this.Fi(e,a)))),r<15&&o>=15&&(u=u.next((()=>(function(f){f.createObjectStore(rg,{keyPath:nx,autoIncrement:!0}).createIndex(fm,rx,{unique:!1}),f.createObjectStore(hu,{keyPath:ix}).createIndex(PT,sx,{unique:!1}),f.createObjectStore(du,{keyPath:ox}).createIndex(bT,ax,{unique:!1})})(e)))),r<16&&o>=16&&(u=u.next((()=>{t.objectStore(hu).clear()})).next((()=>{t.objectStore(du).clear()}))),r<17&&o>=17&&(u=u.next((()=>{(function(f){f.createObjectStore(ig,{keyPath:hx})})(e)}))),r<18&&o>=18&&II()&&(u=u.next((()=>{t.objectStore(hu).clear()})).next((()=>{t.objectStore(du).clear()}))),u}wi(e){let t=0;return e.store(to).ee(((r,o)=>{t+=ud(o)})).next((()=>{const r={byteSize:t};return e.store(Su).put(dm,r)}))}yi(e){const t=e.store(Tu),r=e.store(lr);return t.J().next((o=>L.forEach(o,(a=>{const u=IDBKeyRange.bound([a.userId,lo],[a.userId,a.lastAcknowledgedBatchId]);return r.J(oo,u).next((d=>L.forEach(d,(f=>{ke(f.userId===a.userId,18650,"Cannot process batch from unexpected user",{batchId:f.batchId});const m=ro(this.serializer,f);return N0(e,a.userId,m).next((()=>{}))}))))}))))}Si(e){const t=e.store(Ua),r=e.store(to);return e.store(uo).get(ed).next((o=>{const a=[];return r.ee(((u,d)=>{const f=new Je(u),m=(function(E){return[0,an(E)]})(f);a.push(t.get(m).next((v=>v?L.resolve():(E=>t.put({targetId:0,path:an(E),sequenceNumber:o.highestListenSequenceNumber}))(f))))})).next((()=>L.waitFor(a)))}))}bi(e,t){e.createObjectStore(Au,{keyPath:JC});const r=t.store(Au),o=new yg,a=u=>{if(o.add(u)){const d=u.lastSegment(),f=u.popLast();return r.put({collectionId:d,parent:an(f)})}};return t.store(to).ee({X:!0},((u,d)=>{const f=new Je(u);return a(f.popLast())})).next((()=>t.store(La).ee({X:!0},(([u,d,f],m)=>{const v=Fr(d);return a(v.popLast())}))))}Di(e){const t=e.store(Fa);return t.ee(((r,o)=>{const a=su(o),u=k0(this.serializer,a);return t.put(u)}))}Ci(e,t){const r=t.store(to),o=[];return r.ee(((a,u)=>{const d=t.store(Zh),f=(function(E){return E.document?new le(Je.fromString(E.document.name).popFirst(5)):E.noDocument?le.fromSegments(E.noDocument.path):E.unknownDocument?le.fromSegments(E.unknownDocument.path):we(36783)})(u).path.toArray(),m={prefixPath:f.slice(0,f.length-2),collectionGroup:f[f.length-2],documentId:f[f.length-1],readTime:u.readTime||[0,0],unknownDocument:u.unknownDocument,noDocument:u.noDocument,document:u.document,hasCommittedMutations:!!u.hasCommittedMutations};o.push(d.put(m))})).next((()=>L.waitFor(o)))}Fi(e,t){const r=t.store(lr),o=F0(this.serializer),a=new vg(jd.mi,this.serializer.yt);return r.J().next((u=>{const d=new Map;return u.forEach((f=>{let m=d.get(f.userId)??Be();ro(this.serializer,f).keys().forEach((v=>m=m.add(v))),d.set(f.userId,m)})),L.forEach(d,((f,m)=>{const v=new Ht(m),E=Ud.wt(this.serializer,v),S=a.getIndexManager(v),x=Bd.wt(v,this.serializer,S,a.referenceDelegate);return new U0(o,x,E,S).recalculateAndSaveOverlaysForDocumentKeys(new mm(t,Hn.ce),f).next()}))}))}}function sE(n){n.createObjectStore(Ua,{keyPath:YC}).createIndex(ng,XC,{unique:!0}),n.createObjectStore(Fa,{keyPath:"targetId"}).createIndex(kT,QC,{unique:!0}),n.createObjectStore(uo)}const is="IndexedDbPersistence",zp=18e5,$p=5e3,qp="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",ON="main";class wg{constructor(e,t,r,o,a,u,d,f,m,v,E=18){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.Mi=a,this.window=u,this.document=d,this.xi=m,this.Oi=v,this.Ni=E,this.ci=null,this.li=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Bi=null,this.inForeground=!1,this.Li=null,this.ki=null,this.qi=Number.NEGATIVE_INFINITY,this.Qi=S=>Promise.resolve(),!wg.v())throw new se(K.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new IN(this,o),this.$i=t+ON,this.serializer=new R0(f),this.Ui=new fs(this.$i,this.Ni,new VN(this.serializer)),this.hi=new cN,this.Pi=new _N(this.referenceDelegate,this.serializer),this.remoteDocumentCache=F0(this.serializer),this.Ii=new uN,this.window&&this.window.localStorage?this.Ki=this.window.localStorage:(this.Ki=null,v===!1&&dn(is,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Wi().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new se(K.FAILED_PRECONDITION,qp);return this.Gi(),this.zi(),this.ji(),this.runTransaction("getHighestListenSequenceNumber","readonly",(e=>this.Pi.getHighestSequenceNumber(e)))})).then((e=>{this.ci=new Hn(e,this.xi)})).then((()=>{this.li=!0})).catch((e=>(this.Ui&&this.Ui.close(),Promise.reject(e))))}Ji(e){return this.Qi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ui.$((async t=>{t.newVersion===null&&await e()}))}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Mi.enqueueAndForget((async()=>{this.started&&await this.Wi()})))}Wi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(e=>Eh(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next((()=>{if(this.isPrimary)return this.Hi(e).next((t=>{t||(this.isPrimary=!1,this.Mi.enqueueRetryable((()=>this.Qi(!1))))}))})).next((()=>this.Yi(e))).next((t=>this.isPrimary&&!t?this.Zi(e).next((()=>!1)):!!t&&this.Xi(e).next((()=>!0)))))).catch((e=>{if(Is(e))return ee(is,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return ee(is,"Releasing owner lease after error during lease refresh",e),!1})).then((e=>{this.isPrimary!==e&&this.Mi.enqueueRetryable((()=>this.Qi(e))),this.isPrimary=e}))}Hi(e){return Jl(e).get(va).next((t=>L.resolve(this.es(t))))}ts(e){return Eh(e).delete(this.clientId)}async ns(){if(this.isPrimary&&!this.rs(this.qi,zp)){this.qi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(t=>{const r=Ft(t,Ba);return r.J().next((o=>{const a=this.ss(o,zp),u=o.filter((d=>a.indexOf(d)===-1));return L.forEach(u,(d=>r.delete(d.clientId))).next((()=>u))}))})).catch((()=>[]));if(this.Ki)for(const t of e)this.Ki.removeItem(this._s(t.clientId))}}ji(){this.ki=this.Mi.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.Wi().then((()=>this.ns())).then((()=>this.ji()))))}es(e){return!!e&&e.ownerId===this.clientId}Yi(e){return this.Oi?L.resolve(!0):Jl(e).get(va).next((t=>{if(t!==null&&this.rs(t.leaseTimestampMs,$p)&&!this.us(t.ownerId)){if(this.es(t)&&this.networkEnabled)return!0;if(!this.es(t)){if(!t.allowTabSynchronization)throw new se(K.FAILED_PRECONDITION,qp);return!1}}return!(!this.networkEnabled||!this.inForeground)||Eh(e).J().next((r=>this.ss(r,$p).find((o=>{if(this.clientId!==o.clientId){const a=!this.networkEnabled&&o.networkEnabled,u=!this.inForeground&&o.inForeground,d=this.networkEnabled===o.networkEnabled;if(a||u&&d)return!0}return!1}))===void 0))})).next((t=>(this.isPrimary!==t&&ee(is,`Client ${t?"is":"is not"} eligible for a primary lease.`),t)))}async shutdown(){this.li=!1,this.cs(),this.ki&&(this.ki.cancel(),this.ki=null),this.ls(),this.hs(),await this.Ui.runTransaction("shutdown","readwrite",[zu,Ba],(e=>{const t=new mm(e,Hn.ce);return this.Zi(t).next((()=>this.ts(t)))})),this.Ui.close(),this.Ps()}ss(e,t){return e.filter((r=>this.rs(r.updateTimeMs,t)&&!this.us(r.clientId)))}Ts(){return this.runTransaction("getActiveClients","readonly",(e=>Eh(e).J().next((t=>this.ss(t,zp).map((r=>r.clientId))))))}get started(){return this.li}getGlobalsCache(){return this.hi}getMutationQueue(e,t){return Bd.wt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new yN(e,this.serializer.yt.databaseId)}getDocumentOverlayCache(e){return Ud.wt(this.serializer,e)}getBundleCache(){return this.Ii}runTransaction(e,t,r){ee(is,"Starting transaction:",e);const o=t==="readonly"?"readonly":"readwrite",a=(function(f){return f===18?px:f===17?VT:f===16?fx:f===15?sg:f===14?DT:f===13?NT:f===12?dx:f===11?xT:void we(60245)})(this.Ni);let u;return this.Ui.runTransaction(e,o,a,(d=>(u=new mm(d,this.ci?this.ci.next():Hn.ce),t==="readwrite-primary"?this.Hi(u).next((f=>!!f||this.Yi(u))).next((f=>{if(!f)throw dn(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Mi.enqueueRetryable((()=>this.Qi(!1))),new se(K.FAILED_PRECONDITION,IT);return r(u)})).next((f=>this.Xi(u).next((()=>f)))):this.Is(u).next((()=>r(u)))))).then((d=>(u.raiseOnCommittedEvent(),d)))}Is(e){return Jl(e).get(va).next((t=>{if(t!==null&&this.rs(t.leaseTimestampMs,$p)&&!this.us(t.ownerId)&&!this.es(t)&&!(this.Oi||this.allowTabSynchronization&&t.allowTabSynchronization))throw new se(K.FAILED_PRECONDITION,qp)}))}Xi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Jl(e).put(va,t)}static v(){return fs.v()}Zi(e){const t=Jl(e);return t.get(va).next((r=>this.es(r)?(ee(is,"Releasing primary lease."),t.delete(va)):L.resolve()))}rs(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(dn(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Gi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Li=()=>{this.Mi.enqueueAndForget((()=>(this.inForeground=this.document.visibilityState==="visible",this.Wi())))},this.document.addEventListener("visibilitychange",this.Li),this.inForeground=this.document.visibilityState==="visible")}ls(){this.Li&&(this.document.removeEventListener("visibilitychange",this.Li),this.Li=null)}zi(){typeof this.window?.addEventListener=="function"&&(this.Bi=()=>{this.cs();const e=/(?:Version|Mobile)\/1[456]/;EI()&&(navigator.appVersion.match(e)||navigator.userAgent.match(e))&&this.Mi.enterRestrictedMode(!0),this.Mi.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.Bi))}hs(){this.Bi&&(this.window.removeEventListener("pagehide",this.Bi),this.Bi=null)}us(e){try{const t=this.Ki?.getItem(this._s(e))!==null;return ee(is,`Client '${e}' ${t?"is":"is not"} zombied in LocalStorage`),t}catch(t){return dn(is,"Failed to get zombied client id.",t),!1}}cs(){if(this.Ki)try{this.Ki.setItem(this._s(this.clientId),String(Date.now()))}catch(e){dn("Failed to set zombie client id.",e)}}Ps(){if(this.Ki)try{this.Ki.removeItem(this._s(this.clientId))}catch{}}_s(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Jl(n){return Ft(n,zu)}function Eh(n){return Ft(n,Ba)}function MN(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(e,t,r,o){this.targetId=e,this.fromCache=t,this.Es=r,this.ds=o}static As(e,t){let r=Be(),o=Be();for(const a of t.docChanges)switch(a.type){case 0:r=r.add(a.doc.key);break;case 1:o=o.add(a.doc.key)}return new Eg(e,t.fromCache,r,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LN{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B0{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return EI()?8:ST(Lt())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,o){const a={result:null};return this.ys(e,t).next((u=>{a.result=u})).next((()=>{if(!a.result)return this.ws(e,t,o,r).next((u=>{a.result=u}))})).next((()=>{if(a.result)return;const u=new LN;return this.Ss(e,t,u).next((d=>{if(a.result=d,this.Vs)return this.bs(e,t,u,d.size)}))})).next((()=>a.result))}bs(e,t,r,o){return r.documentReadCount<this.fs?(Aa()<=$e.DEBUG&&ee("QueryEngine","SDK will not create cache indexes for query:",Ra(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),L.resolve()):(Aa()<=$e.DEBUG&&ee("QueryEngine","Query:",Ra(t),"scans",r.documentReadCount,"local documents and returns",o,"documents as results."),r.documentReadCount>this.gs*o?(Aa()<=$e.DEBUG&&ee("QueryEngine","The SDK decides to create cache indexes for query:",Ra(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Qn(t))):L.resolve())}ys(e,t){if(bw(t))return L.resolve(null);let r=Qn(t);return this.indexManager.getIndexType(e,r).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=id(t,null,"F"),r=Qn(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((a=>{const u=Be(...a);return this.ps.getDocuments(e,u).next((d=>this.indexManager.getMinOffset(e,r).next((f=>{const m=this.Ds(t,d);return this.Cs(t,m,u,f.readTime)?this.ys(e,id(t,null,"F")):this.vs(e,m,t,f)}))))})))))}ws(e,t,r,o){return bw(t)||o.isEqual(Pe.min())?L.resolve(null):this.ps.getDocuments(e,r).next((a=>{const u=this.Ds(t,a);return this.Cs(t,u,r,o)?L.resolve(null):(Aa()<=$e.DEBUG&&ee("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Ra(t)),this.vs(e,u,t,LC(o,wu)).next((d=>d)))}))}Ds(e,t){let r=new rt(e0(e));return t.forEach(((o,a)=>{Ku(e,a)&&(r=r.add(a))})),r}Cs(e,t,r,o){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const a=e.limitType==="F"?t.last():t.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(o)>0)}Ss(e,t,r){return Aa()<=$e.DEBUG&&ee("QueryEngine","Using full collection scan to execute query:",Ra(t)),this.ps.getDocumentsMatchingQuery(e,t,Mn.min(),r)}vs(e,t,r,o){return this.ps.getDocumentsMatchingQuery(e,r,o).next((a=>(t.forEach((u=>{a=a.insert(u.key,u)})),a)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ig="LocalStore",FN=3e8;class UN{constructor(e,t,r,o){this.persistence=e,this.Fs=t,this.serializer=o,this.Ms=new gt(Ve),this.xs=new Ti((a=>vo(a)),$u),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new U0(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function j0(n,e,t,r){return new UN(n,e,t,r)}async function z0(n,e){const t=De(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let o;return t.mutationQueue.getAllMutationBatches(r).next((a=>(o=a,t.Bs(e),t.mutationQueue.getAllMutationBatches(r)))).next((a=>{const u=[],d=[];let f=Be();for(const m of o){u.push(m.batchId);for(const v of m.mutations)f=f.add(v.key)}for(const m of a){d.push(m.batchId);for(const v of m.mutations)f=f.add(v.key)}return t.localDocuments.getDocuments(r,f).next((m=>({Ls:m,removedBatchIds:u,addedBatchIds:d})))}))}))}function BN(n,e){const t=De(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const o=e.batch.keys(),a=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(d,f,m,v){const E=m.batch,S=E.keys();let x=L.resolve();return S.forEach((B=>{x=x.next((()=>v.getEntry(f,B))).next((q=>{const O=m.docVersions.get(B);ke(O!==null,48541),q.version.compareTo(O)<0&&(E.applyToRemoteDocument(q,m),q.isValidDocument()&&(q.setReadTime(m.commitVersion),v.addEntry(q)))}))})),x.next((()=>d.mutationQueue.removeMutationBatch(f,E)))})(t,r,e,a).next((()=>a.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(d){let f=Be();for(let m=0;m<d.mutationResults.length;++m)d.mutationResults[m].transformResults.length>0&&(f=f.add(d.batch.mutations[m].key));return f})(e)))).next((()=>t.localDocuments.getDocuments(r,o)))}))}function $0(n){const e=De(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function jN(n,e){const t=De(n),r=e.snapshotVersion;let o=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(a=>{const u=t.Ns.newChangeBuffer({trackRemovals:!0});o=t.Ms;const d=[];e.targetChanges.forEach(((v,E)=>{const S=o.get(E);if(!S)return;d.push(t.Pi.removeMatchingKeys(a,v.removedDocuments,E).next((()=>t.Pi.addMatchingKeys(a,v.addedDocuments,E))));let x=S.withSequenceNumber(a.currentSequenceNumber);e.targetMismatches.get(E)!==null?x=x.withResumeToken(Dt.EMPTY_BYTE_STRING,Pe.min()).withLastLimboFreeSnapshotVersion(Pe.min()):v.resumeToken.approximateByteSize()>0&&(x=x.withResumeToken(v.resumeToken,r)),o=o.insert(E,x),(function(q,O,ne){return q.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-q.snapshotVersion.toMicroseconds()>=FN?!0:ne.addedDocuments.size+ne.modifiedDocuments.size+ne.removedDocuments.size>0})(S,x,v)&&d.push(t.Pi.updateTargetData(a,x))}));let f=On(),m=Be();if(e.documentUpdates.forEach((v=>{e.resolvedLimboDocuments.has(v)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(a,v))})),d.push(zN(a,u,e.documentUpdates).next((v=>{f=v.ks,m=v.qs}))),!r.isEqual(Pe.min())){const v=t.Pi.getLastRemoteSnapshotVersion(a).next((E=>t.Pi.setTargetsMetadata(a,a.currentSequenceNumber,r)));d.push(v)}return L.waitFor(d).next((()=>u.apply(a))).next((()=>t.localDocuments.getLocalViewOfDocuments(a,f,m))).next((()=>f))})).then((a=>(t.Ms=o,a)))}function zN(n,e,t){let r=Be(),o=Be();return t.forEach((a=>r=r.add(a))),e.getEntries(n,r).next((a=>{let u=On();return t.forEach(((d,f)=>{const m=a.get(d);f.isFoundDocument()!==m.isFoundDocument()&&(o=o.add(d)),f.isNoDocument()&&f.version.isEqual(Pe.min())?(e.removeEntry(d,f.readTime),u=u.insert(d,f)):!m.isValidDocument()||f.version.compareTo(m.version)>0||f.version.compareTo(m.version)===0&&m.hasPendingWrites?(e.addEntry(f),u=u.insert(d,f)):ee(Ig,"Ignoring outdated watch update for ",d,". Current version:",m.version," Watch version:",f.version)})),{ks:u,qs:o}}))}function $N(n,e){const t=De(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=lo),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function qN(n,e){const t=De(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let o;return t.Pi.getTargetData(r,e).next((a=>a?(o=a,L.resolve(o)):t.Pi.allocateTargetId(r).next((u=>(o=new gi(e,u,"TargetPurposeListen",r.currentSequenceNumber),t.Pi.addTargetData(r,o).next((()=>o)))))))})).then((r=>{const o=t.Ms.get(r.targetId);return(o===null||r.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(r.targetId,r),t.xs.set(e,r.targetId)),r}))}async function bm(n,e,t){const r=De(n),o=r.Ms.get(e),a=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",a,(u=>r.persistence.referenceDelegate.removeTarget(u,o)))}catch(u){if(!Is(u))throw u;ee(Ig,`Failed to update sequence numbers for target ${e}: ${u}`)}r.Ms=r.Ms.remove(e),r.xs.delete(o.target)}function oE(n,e,t){const r=De(n);let o=Pe.min(),a=Be();return r.persistence.runTransaction("Execute query","readwrite",(u=>(function(f,m,v){const E=De(f),S=E.xs.get(v);return S!==void 0?L.resolve(E.Ms.get(S)):E.Pi.getTargetData(m,v)})(r,u,Qn(e)).next((d=>{if(d)return o=d.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(u,d.targetId).next((f=>{a=f}))})).next((()=>r.Fs.getDocumentsMatchingQuery(u,e,t?o:Pe.min(),t?a:Be()))).next((d=>(KN(r,bx(e),d),{documents:d,Qs:a})))))}function KN(n,e,t){let r=n.Os.get(e)||Pe.min();t.forEach(((o,a)=>{a.readTime.compareTo(r)>0&&(r=a.readTime)})),n.Os.set(e,r)}class aE{constructor(){this.activeTargetIds=Ox()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class q0{constructor(){this.Mo=new aE,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,r){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new aE,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GN{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lE="ConnectivityMonitor";class uE{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){ee(lE,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){ee(lE,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ih=null;function Cm(){return Ih===null?Ih=(function(){return 268435456+Math.round(2147483648*Math.random())})():Ih++,"0x"+Ih.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kp="RestConnection",WN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class HN{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${r}/databases/${o}`,this.Wo=this.databaseId.database===td?`project_id=${r}`:`project_id=${r}&database_id=${o}`}Go(e,t,r,o,a){const u=Cm(),d=this.zo(e,t.toUriEncodedString());ee(Kp,`Sending RPC '${e}' ${u}:`,d,r);const f={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(f,o,a);const{host:m}=new URL(d),v=Ro(m);return this.Jo(e,d,f,r,v).then((E=>(ee(Kp,`Received RPC '${e}' ${u}: `,E),E)),(E=>{throw yo(Kp,`RPC '${e}' ${u} failed with error: `,E,"url: ",d,"request:",r),E}))}Ho(e,t,r,o,a,u){return this.Go(e,t,r,o,a)}jo(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Za})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,a)=>e[a]=o)),r&&r.headers.forEach(((o,a)=>e[a]=o))}zo(e,t){const r=WN[e];return`${this.Uo}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QN{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn="WebChannelConnection";class YN extends HN{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,o,a){const u=Cm();return new Promise(((d,f)=>{const m=new hT;m.setWithCredentials(!0),m.listenOnce(dT.COMPLETE,(()=>{try{switch(m.getLastErrorCode()){case Ph.NO_ERROR:const E=m.getResponseJson();ee(nn,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(E)),d(E);break;case Ph.TIMEOUT:ee(nn,`RPC '${e}' ${u} timed out`),f(new se(K.DEADLINE_EXCEEDED,"Request time out"));break;case Ph.HTTP_ERROR:const S=m.getStatus();if(ee(nn,`RPC '${e}' ${u} failed with status:`,S,"response text:",m.getResponseText()),S>0){let x=m.getResponseJson();Array.isArray(x)&&(x=x[0]);const B=x?.error;if(B&&B.status&&B.message){const q=(function(ne){const re=ne.toLowerCase().replace(/_/g,"-");return Object.values(K).indexOf(re)>=0?re:K.UNKNOWN})(B.status);f(new se(q,B.message))}else f(new se(K.UNKNOWN,"Server responded with status "+m.getStatus()))}else f(new se(K.UNAVAILABLE,"Connection failed."));break;default:we(9055,{l_:e,streamId:u,h_:m.getLastErrorCode(),P_:m.getLastError()})}}finally{ee(nn,`RPC '${e}' ${u} completed.`)}}));const v=JSON.stringify(o);ee(nn,`RPC '${e}' ${u} sending request:`,o),m.send(t,"POST",v,r,15)}))}T_(e,t,r){const o=Cm(),a=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],u=mT(),d=pT(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},m=this.longPollingOptions.timeoutSeconds;m!==void 0&&(f.longPollingTimeout=Math.round(1e3*m)),this.useFetchStreams&&(f.useFetchStreams=!0),this.jo(f.initMessageHeaders,t,r),f.encodeInitMessageHeaders=!0;const v=a.join("");ee(nn,`Creating RPC '${e}' stream ${o}: ${v}`,f);const E=u.createWebChannel(v,f);this.I_(E);let S=!1,x=!1;const B=new QN({Yo:O=>{x?ee(nn,`Not sending because RPC '${e}' stream ${o} is closed:`,O):(S||(ee(nn,`Opening RPC '${e}' stream ${o} transport.`),E.open(),S=!0),ee(nn,`RPC '${e}' stream ${o} sending:`,O),E.send(O))},Zo:()=>E.close()}),q=(O,ne,re)=>{O.listen(ne,(te=>{try{re(te)}catch(ce){setTimeout((()=>{throw ce}),0)}}))};return q(E,nu.EventType.OPEN,(()=>{x||(ee(nn,`RPC '${e}' stream ${o} transport opened.`),B.o_())})),q(E,nu.EventType.CLOSE,(()=>{x||(x=!0,ee(nn,`RPC '${e}' stream ${o} transport closed`),B.a_(),this.E_(E))})),q(E,nu.EventType.ERROR,(O=>{x||(x=!0,yo(nn,`RPC '${e}' stream ${o} transport errored. Name:`,O.name,"Message:",O.message),B.a_(new se(K.UNAVAILABLE,"The operation could not be completed")))})),q(E,nu.EventType.MESSAGE,(O=>{if(!x){const ne=O.data[0];ke(!!ne,16349);const re=ne,te=re?.error||re[0]?.error;if(te){ee(nn,`RPC '${e}' stream ${o} received error:`,te);const ce=te.status;let he=(function(T){const k=xt[T];if(k!==void 0)return d0(k)})(ce),ue=te.message;he===void 0&&(he=K.INTERNAL,ue="Unknown error status: "+ce+" with message "+te.message),x=!0,B.a_(new se(he,ue)),E.close()}else ee(nn,`RPC '${e}' stream ${o} received:`,ne),B.u_(ne)}})),q(d,fT.STAT_EVENT,(O=>{O.stat===um.PROXY?ee(nn,`RPC '${e}' stream ${o} detected buffering proxy`):O.stat===um.NOPROXY&&ee(nn,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{B.__()}),0),B}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XN(){return typeof window<"u"?window:null}function Fh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zd(n){return new Jx(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K0{constructor(e,t,r=1e3,o=1.5,a=6e4){this.Mi=e,this.timerId=t,this.d_=r,this.A_=o,this.R_=a,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),o=Math.max(0,t-r);o>0&&ee("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cE="PersistentStream";class G0{constructor(e,t,r,o,a,u,d,f){this.Mi=e,this.S_=r,this.b_=o,this.connection=a,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=d,this.listener=f,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new K0(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===K.RESOURCE_EXHAUSTED?(dn(t.toString()),dn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===K.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,o])=>{this.D_===t&&this.G_(r,o)}),(r=>{e((()=>{const o=new se(K.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(o)}))}))}G_(e,t){const r=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((o=>{r((()=>this.z_(o)))})),this.stream.onMessage((o=>{r((()=>++this.F_==1?this.J_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return ee(cE,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(ee(cE,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class JN extends G0{constructor(e,t,r,o,a,u){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,o,u),this.serializer=a}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=tN(this.serializer,e),r=(function(a){if(!("targetChange"in a))return Pe.min();const u=a.targetChange;return u.targetIds&&u.targetIds.length?Pe.min():u.readTime?fn(u.readTime):Pe.min()})(e);return this.listener.H_(t,r)}Y_(e){const t={};t.database=Sm(this.serializer),t.addTarget=(function(a,u){let d;const f=u.target;if(d=nd(f)?{documents:w0(a,f)}:{query:E0(a,f).ft},d.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){d.resumeToken=m0(a,u.resumeToken);const m=Im(a,u.expectedCount);m!==null&&(d.expectedCount=m)}else if(u.snapshotVersion.compareTo(Pe.min())>0){d.readTime=Wa(a,u.snapshotVersion.toTimestamp());const m=Im(a,u.expectedCount);m!==null&&(d.expectedCount=m)}return d})(this.serializer,e);const r=rN(this.serializer,e);r&&(t.labels=r),this.q_(t)}Z_(e){const t={};t.database=Sm(this.serializer),t.removeTarget=e,this.q_(t)}}class ZN extends G0{constructor(e,t,r,o,a,u){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,o,u),this.serializer=a}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return ke(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ke(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ke(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=nN(e.writeResults,e.commitTime),r=fn(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=Sm(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>od(this.serializer,r)))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eD{}class tD extends eD{constructor(e,t,r,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new se(K.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,r,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,u])=>this.connection.Go(e,Tm(t,r),o,a,u))).catch((a=>{throw a.name==="FirebaseError"?(a.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new se(K.UNKNOWN,a.toString())}))}Ho(e,t,r,o,a){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,d])=>this.connection.Ho(e,Tm(t,r),o,u,d,a))).catch((u=>{throw u.name==="FirebaseError"?(u.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new se(K.UNKNOWN,u.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class nD{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(dn(t),this.aa=!1):ee("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const To="RemoteStore";class rD{constructor(e,t,r,o,a){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=a,this.Aa.Oo((u=>{r.enqueueAndForget((async()=>{No(this)&&(ee(To,"Restarting streams for network reachability change."),await(async function(f){const m=De(f);m.Ea.add(4),await Wu(m),m.Ra.set("Unknown"),m.Ea.delete(4),await $d(m)})(this))}))})),this.Ra=new nD(r,o)}}async function $d(n){if(No(n))for(const e of n.da)await e(!0)}async function Wu(n){for(const e of n.da)await e(!1)}function W0(n,e){const t=De(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Rg(t)?Ag(t):nl(t).O_()&&Sg(t,e))}function Tg(n,e){const t=De(n),r=nl(t);t.Ia.delete(e),r.O_()&&H0(t,e),t.Ia.size===0&&(r.O_()?r.L_():No(t)&&t.Ra.set("Unknown"))}function Sg(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Pe.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}nl(n).Y_(e)}function H0(n,e){n.Va.Ue(e),nl(n).Z_(e)}function Ag(n){n.Va=new Hx({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),nl(n).start(),n.Ra.ua()}function Rg(n){return No(n)&&!nl(n).x_()&&n.Ia.size>0}function No(n){return De(n).Ea.size===0}function Q0(n){n.Va=void 0}async function iD(n){n.Ra.set("Online")}async function sD(n){n.Ia.forEach(((e,t)=>{Sg(n,e)}))}async function oD(n,e){Q0(n),Rg(n)?(n.Ra.ha(e),Ag(n)):n.Ra.set("Unknown")}async function aD(n,e,t){if(n.Ra.set("Online"),e instanceof p0&&e.state===2&&e.cause)try{await(async function(o,a){const u=a.cause;for(const d of a.targetIds)o.Ia.has(d)&&(await o.remoteSyncer.rejectListen(d,u),o.Ia.delete(d),o.Va.removeTarget(d))})(n,e)}catch(r){ee(To,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await hd(n,r)}else if(e instanceof Mh?n.Va.Ze(e):e instanceof f0?n.Va.st(e):n.Va.tt(e),!t.isEqual(Pe.min()))try{const r=await $0(n.localStore);t.compareTo(r)>=0&&await(function(a,u){const d=a.Va.Tt(u);return d.targetChanges.forEach(((f,m)=>{if(f.resumeToken.approximateByteSize()>0){const v=a.Ia.get(m);v&&a.Ia.set(m,v.withResumeToken(f.resumeToken,u))}})),d.targetMismatches.forEach(((f,m)=>{const v=a.Ia.get(f);if(!v)return;a.Ia.set(f,v.withResumeToken(Dt.EMPTY_BYTE_STRING,v.snapshotVersion)),H0(a,f);const E=new gi(v.target,f,m,v.sequenceNumber);Sg(a,E)})),a.remoteSyncer.applyRemoteEvent(d)})(n,t)}catch(r){ee(To,"Failed to raise snapshot:",r),await hd(n,r)}}async function hd(n,e,t){if(!Is(e))throw e;n.Ea.add(1),await Wu(n),n.Ra.set("Offline"),t||(t=()=>$0(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{ee(To,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await $d(n)}))}function Y0(n,e){return e().catch((t=>hd(n,t,e)))}async function Hu(n){const e=De(n),t=_s(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:lo;for(;lD(e);)try{const o=await $N(e.localStore,r);if(o===null){e.Ta.length===0&&t.L_();break}r=o.batchId,uD(e,o)}catch(o){await hd(e,o)}X0(e)&&J0(e)}function lD(n){return No(n)&&n.Ta.length<10}function uD(n,e){n.Ta.push(e);const t=_s(n);t.O_()&&t.X_&&t.ea(e.mutations)}function X0(n){return No(n)&&!_s(n).x_()&&n.Ta.length>0}function J0(n){_s(n).start()}async function cD(n){_s(n).ra()}async function hD(n){const e=_s(n);for(const t of n.Ta)e.ea(t.mutations)}async function dD(n,e,t){const r=n.Ta.shift(),o=dg.from(r,e,t);await Y0(n,(()=>n.remoteSyncer.applySuccessfulWrite(o))),await Hu(n)}async function fD(n,e){e&&_s(n).X_&&await(async function(r,o){if((function(u){return Kx(u)&&u!==K.ABORTED})(o.code)){const a=r.Ta.shift();_s(r).B_(),await Y0(r,(()=>r.remoteSyncer.rejectFailedWrite(a.batchId,o))),await Hu(r)}})(n,e),X0(n)&&J0(n)}async function hE(n,e){const t=De(n);t.asyncQueue.verifyOperationInProgress(),ee(To,"RemoteStore received new credentials");const r=No(t);t.Ea.add(3),await Wu(t),r&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await $d(t)}async function pD(n,e){const t=De(n);e?(t.Ea.delete(2),await $d(t)):e||(t.Ea.add(2),await Wu(t),t.Ra.set("Unknown"))}function nl(n){return n.ma||(n.ma=(function(t,r,o){const a=De(t);return a.sa(),new JN(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,o)})(n.datastore,n.asyncQueue,{Xo:iD.bind(null,n),t_:sD.bind(null,n),r_:oD.bind(null,n),H_:aD.bind(null,n)}),n.da.push((async e=>{e?(n.ma.B_(),Rg(n)?Ag(n):n.Ra.set("Unknown")):(await n.ma.stop(),Q0(n))}))),n.ma}function _s(n){return n.fa||(n.fa=(function(t,r,o){const a=De(t);return a.sa(),new ZN(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,o)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:cD.bind(null,n),r_:fD.bind(null,n),ta:hD.bind(null,n),na:dD.bind(null,n)}),n.da.push((async e=>{e?(n.fa.B_(),await Hu(n)):(await n.fa.stop(),n.Ta.length>0&&(ee(To,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(e,t,r,o,a){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=o,this.removalCallback=a,this.deferred=new hr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((u=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,o,a){const u=Date.now()+r,d=new kg(e,t,u,o,a);return d.start(r),d}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new se(K.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function qd(n,e){if(dn("AsyncQueue",`${e}: ${n}`),Is(n))return new se(K.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{static emptySet(e){return new Oa(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||le.comparator(t.key,r.key):(t,r)=>le.comparator(t.key,r.key),this.keyedMap=ru(),this.sortedSet=new gt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Oa)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,a=r.getNext().key;if(!o.isEqual(a))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Oa;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dE{constructor(){this.ga=new gt(le.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):we(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,r)=>{e.push(r)})),e}}class Ha{constructor(e,t,r,o,a,u,d,f,m){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=o,this.mutatedKeys=a,this.fromCache=u,this.syncStateChanged=d,this.excludesMetadataChanges=f,this.hasCachedResults=m}static fromInitialDocuments(e,t,r,o,a){const u=[];return t.forEach((d=>{u.push({type:0,doc:d})})),new Ha(e,t,Oa.emptySet(t),u,r,o,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Vd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==r[o].type||!t[o].doc.isEqual(r[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mD{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class gD{constructor(){this.queries=fE(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const o=De(t),a=o.queries;o.queries=fE(),a.forEach(((u,d)=>{for(const f of d.Sa)f.onError(r)}))})(this,new se(K.ABORTED,"Firestore shutting down"))}}function fE(){return new Ti((n=>ZT(n)),Vd)}async function Pg(n,e){const t=De(n);let r=3;const o=e.query;let a=t.queries.get(o);a?!a.ba()&&e.Da()&&(r=2):(a=new mD,r=e.Da()?0:1);try{switch(r){case 0:a.wa=await t.onListen(o,!0);break;case 1:a.wa=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(u){const d=qd(u,`Initialization of query '${Ra(e.query)}' failed`);return void e.onError(d)}t.queries.set(o,a),a.Sa.push(e),e.va(t.onlineState),a.wa&&e.Fa(a.wa)&&Cg(t)}async function bg(n,e){const t=De(n),r=e.query;let o=3;const a=t.queries.get(r);if(a){const u=a.Sa.indexOf(e);u>=0&&(a.Sa.splice(u,1),a.Sa.length===0?o=e.Da()?0:1:!a.ba()&&e.Da()&&(o=2))}switch(o){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function yD(n,e){const t=De(n);let r=!1;for(const o of e){const a=o.query,u=t.queries.get(a);if(u){for(const d of u.Sa)d.Fa(o)&&(r=!0);u.wa=o}}r&&Cg(t)}function _D(n,e,t){const r=De(n),o=r.queries.get(e);if(o)for(const a of o.Sa)a.onError(t);r.queries.delete(e)}function Cg(n){n.Ca.forEach((e=>{e.next()}))}var xm,pE;(pE=xm||(xm={})).Ma="default",pE.Cache="cache";class xg{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const o of e.docChanges)o.type!==3&&r.push(o);e=new Ha(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Ha.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==xm.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z0{constructor(e){this.key=e}}class eS{constructor(e){this.key=e}}class vD{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Be(),this.mutatedKeys=Be(),this.eu=e0(e),this.tu=new Oa(this.eu)}get nu(){return this.Ya}ru(e,t){const r=t?t.iu:new dE,o=t?t.tu:this.tu;let a=t?t.mutatedKeys:this.mutatedKeys,u=o,d=!1;const f=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,m=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((v,E)=>{const S=o.get(v),x=Ku(this.query,E)?E:null,B=!!S&&this.mutatedKeys.has(S.key),q=!!x&&(x.hasLocalMutations||this.mutatedKeys.has(x.key)&&x.hasCommittedMutations);let O=!1;S&&x?S.data.isEqual(x.data)?B!==q&&(r.track({type:3,doc:x}),O=!0):this.su(S,x)||(r.track({type:2,doc:x}),O=!0,(f&&this.eu(x,f)>0||m&&this.eu(x,m)<0)&&(d=!0)):!S&&x?(r.track({type:0,doc:x}),O=!0):S&&!x&&(r.track({type:1,doc:S}),O=!0,(f||m)&&(d=!0)),O&&(x?(u=u.add(x),a=q?a.add(v):a.delete(v)):(u=u.delete(v),a=a.delete(v)))})),this.query.limit!==null)for(;u.size>this.query.limit;){const v=this.query.limitType==="F"?u.last():u.first();u=u.delete(v.key),a=a.delete(v.key),r.track({type:1,doc:v})}return{tu:u,iu:r,Cs:d,mutatedKeys:a}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,o){const a=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const u=e.iu.ya();u.sort(((v,E)=>(function(x,B){const q=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return we(20277,{Rt:O})}};return q(x)-q(B)})(v.type,E.type)||this.eu(v.doc,E.doc))),this.ou(r),o=o??!1;const d=t&&!o?this._u():[],f=this.Xa.size===0&&this.current&&!o?1:0,m=f!==this.Za;return this.Za=f,u.length!==0||m?{snapshot:new Ha(this.query,e.tu,a,u,e.mutatedKeys,f===0,m,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:d}:{au:d}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new dE,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Be(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))}));const t=[];return e.forEach((r=>{this.Xa.has(r)||t.push(new eS(r))})),this.Xa.forEach((r=>{e.has(r)||t.push(new Z0(r))})),t}cu(e){this.Ya=e.Qs,this.Xa=Be();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Ha.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Ng="SyncEngine";class wD{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class ED{constructor(e){this.key=e,this.hu=!1}}class ID{constructor(e,t,r,o,a,u){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=o,this.currentUser=a,this.maxConcurrentLimboResolutions=u,this.Pu={},this.Tu=new Ti((d=>ZT(d)),Vd),this.Iu=new Map,this.Eu=new Set,this.du=new gt(le.comparator),this.Au=new Map,this.Ru=new _g,this.Vu={},this.mu=new Map,this.fu=Io.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function TD(n,e,t=!0){const r=oS(n);let o;const a=r.Tu.get(e);return a?(r.sharedClientState.addLocalQueryTarget(a.targetId),o=a.view.lu()):o=await tS(r,e,t,!0),o}async function SD(n,e){const t=oS(n);await tS(t,e,!0,!1)}async function tS(n,e,t,r){const o=await qN(n.localStore,Qn(e)),a=o.targetId,u=n.sharedClientState.addLocalQueryTarget(a,t);let d;return r&&(d=await AD(n,e,a,u==="current",o.resumeToken)),n.isPrimaryClient&&t&&W0(n.remoteStore,o),d}async function AD(n,e,t,r,o){n.pu=(E,S,x)=>(async function(q,O,ne,re){let te=O.view.ru(ne);te.Cs&&(te=await oE(q.localStore,O.query,!1).then((({documents:P})=>O.view.ru(P,te))));const ce=re&&re.targetChanges.get(O.targetId),he=re&&re.targetMismatches.get(O.targetId)!=null,ue=O.view.applyChanges(te,q.isPrimaryClient,ce,he);return gE(q,O.targetId,ue.au),ue.snapshot})(n,E,S,x);const a=await oE(n.localStore,e,!0),u=new vD(e,a.Qs),d=u.ru(a.documents),f=Gu.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",o),m=u.applyChanges(d,n.isPrimaryClient,f);gE(n,t,m.au);const v=new wD(e,t,u);return n.Tu.set(e,v),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),m.snapshot}async function RD(n,e,t){const r=De(n),o=r.Tu.get(e),a=r.Iu.get(o.targetId);if(a.length>1)return r.Iu.set(o.targetId,a.filter((u=>!Vd(u,e)))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(o.targetId),r.sharedClientState.isActiveQueryTarget(o.targetId)||await bm(r.localStore,o.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(o.targetId),t&&Tg(r.remoteStore,o.targetId),Nm(r,o.targetId)})).catch(xo)):(Nm(r,o.targetId),await bm(r.localStore,o.targetId,!0))}async function kD(n,e){const t=De(n),r=t.Tu.get(e),o=t.Iu.get(r.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Tg(t.remoteStore,r.targetId))}async function PD(n,e,t){const r=aS(n);try{const o=await(function(u,d){const f=De(u),m=tt.now(),v=d.reduce(((x,B)=>x.add(B.key)),Be());let E,S;return f.persistence.runTransaction("Locally write mutations","readwrite",(x=>{let B=On(),q=Be();return f.Ns.getEntries(x,v).next((O=>{B=O,B.forEach(((ne,re)=>{re.isValidDocument()||(q=q.add(ne))}))})).next((()=>f.localDocuments.getOverlayedDocuments(x,B))).next((O=>{E=O;const ne=[];for(const re of d){const te=$x(re,E.get(re.key).overlayedDocument);te!=null&&ne.push(new Si(re.key,te,qT(te.value.mapValue),on.exists(!0)))}return f.mutationQueue.addMutationBatch(x,m,ne,d)})).next((O=>{S=O;const ne=O.applyToLocalDocumentSet(E,q);return f.documentOverlayCache.saveOverlays(x,O.batchId,ne)}))})).then((()=>({batchId:S.batchId,changes:n0(E)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(o.batchId),(function(u,d,f){let m=u.Vu[u.currentUser.toKey()];m||(m=new gt(Ve)),m=m.insert(d,f),u.Vu[u.currentUser.toKey()]=m})(r,o.batchId,t),await Qu(r,o.changes),await Hu(r.remoteStore)}catch(o){const a=qd(o,"Failed to persist write");t.reject(a)}}async function nS(n,e){const t=De(n);try{const r=await jN(t.localStore,e);e.targetChanges.forEach(((o,a)=>{const u=t.Au.get(a);u&&(ke(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?u.hu=!0:o.modifiedDocuments.size>0?ke(u.hu,14607):o.removedDocuments.size>0&&(ke(u.hu,42227),u.hu=!1))})),await Qu(t,r,e)}catch(r){await xo(r)}}function mE(n,e,t){const r=De(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const o=[];r.Tu.forEach(((a,u)=>{const d=u.view.va(e);d.snapshot&&o.push(d.snapshot)})),(function(u,d){const f=De(u);f.onlineState=d;let m=!1;f.queries.forEach(((v,E)=>{for(const S of E.Sa)S.va(d)&&(m=!0)})),m&&Cg(f)})(r.eventManager,e),o.length&&r.Pu.H_(o),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function bD(n,e,t){const r=De(n);r.sharedClientState.updateQueryState(e,"rejected",t);const o=r.Au.get(e),a=o&&o.key;if(a){let u=new gt(le.comparator);u=u.insert(a,Rt.newNoDocument(a,Pe.min()));const d=Be().add(a),f=new Fd(Pe.min(),new Map,new gt(Ve),u,d);await nS(r,f),r.du=r.du.remove(a),r.Au.delete(e),Dg(r)}else await bm(r.localStore,e,!1).then((()=>Nm(r,e,t))).catch(xo)}async function CD(n,e){const t=De(n),r=e.batch.batchId;try{const o=await BN(t.localStore,e);iS(t,r,null),rS(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Qu(t,o)}catch(o){await xo(o)}}async function xD(n,e,t){const r=De(n);try{const o=await(function(u,d){const f=De(u);return f.persistence.runTransaction("Reject batch","readwrite-primary",(m=>{let v;return f.mutationQueue.lookupMutationBatch(m,d).next((E=>(ke(E!==null,37113),v=E.keys(),f.mutationQueue.removeMutationBatch(m,E)))).next((()=>f.mutationQueue.performConsistencyCheck(m))).next((()=>f.documentOverlayCache.removeOverlaysForBatchId(m,v,d))).next((()=>f.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(m,v))).next((()=>f.localDocuments.getDocuments(m,v)))}))})(r.localStore,e);iS(r,e,t),rS(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Qu(r,o)}catch(o){await xo(o)}}function rS(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function iS(n,e,t){const r=De(n);let o=r.Vu[r.currentUser.toKey()];if(o){const a=o.get(e);a&&(t?a.reject(t):a.resolve(),o=o.remove(e)),r.Vu[r.currentUser.toKey()]=o}}function Nm(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Iu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach((r=>{n.Ru.containsKey(r)||sS(n,r)}))}function sS(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Tg(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),Dg(n))}function gE(n,e,t){for(const r of t)r instanceof Z0?(n.Ru.addReference(r.key,e),ND(n,r)):r instanceof eS?(ee(Ng,"Document no longer in limbo: "+r.key),n.Ru.removeReference(r.key,e),n.Ru.containsKey(r.key)||sS(n,r.key)):we(19791,{wu:r})}function ND(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Eu.has(r)||(ee(Ng,"New document in limbo: "+t),n.Eu.add(r),Dg(n))}function Dg(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new le(Je.fromString(e)),r=n.fu.next();n.Au.set(r,new ED(t)),n.du=n.du.insert(t,r),W0(n.remoteStore,new gi(Qn(qu(t.path)),r,"TargetPurposeLimboResolution",Hn.ce))}}async function Qu(n,e,t){const r=De(n),o=[],a=[],u=[];r.Tu.isEmpty()||(r.Tu.forEach(((d,f)=>{u.push(r.pu(f,e,t).then((m=>{if((m||t)&&r.isPrimaryClient){const v=m?!m.fromCache:t?.targetChanges.get(f.targetId)?.current;r.sharedClientState.updateQueryState(f.targetId,v?"current":"not-current")}if(m){o.push(m);const v=Eg.As(f.targetId,m);a.push(v)}})))})),await Promise.all(u),r.Pu.H_(o),await(async function(f,m){const v=De(f);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",(E=>L.forEach(m,(S=>L.forEach(S.Es,(x=>v.persistence.referenceDelegate.addReference(E,S.targetId,x))).next((()=>L.forEach(S.ds,(x=>v.persistence.referenceDelegate.removeReference(E,S.targetId,x)))))))))}catch(E){if(!Is(E))throw E;ee(Ig,"Failed to update sequence numbers: "+E)}for(const E of m){const S=E.targetId;if(!E.fromCache){const x=v.Ms.get(S),B=x.snapshotVersion,q=x.withLastLimboFreeSnapshotVersion(B);v.Ms=v.Ms.insert(S,q)}}})(r.localStore,a))}async function DD(n,e){const t=De(n);if(!t.currentUser.isEqual(e)){ee(Ng,"User change. New user:",e.toKey());const r=await z0(t.localStore,e);t.currentUser=e,(function(a,u){a.mu.forEach((d=>{d.forEach((f=>{f.reject(new se(K.CANCELLED,u))}))})),a.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Qu(t,r.Ls)}}function VD(n,e){const t=De(n),r=t.Au.get(e);if(r&&r.hu)return Be().add(r.key);{let o=Be();const a=t.Iu.get(e);if(!a)return o;for(const u of a){const d=t.Tu.get(u);o=o.unionWith(d.view.nu)}return o}}function oS(n){const e=De(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=nS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=VD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=bD.bind(null,e),e.Pu.H_=yD.bind(null,e.eventManager),e.Pu.yu=_D.bind(null,e.eventManager),e}function aS(n){const e=De(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=CD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=xD.bind(null,e),e}class Du{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=zd(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return j0(this.persistence,new B0,e.initialUser,this.serializer)}Cu(e){return new vg(jd.mi,this.serializer)}Du(e){return new q0}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Du.provider={build:()=>new Du};class OD extends Du{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){ke(this.persistence.referenceDelegate instanceof cd,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new O0(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?rn.withCacheSize(this.cacheSizeBytes):rn.DEFAULT;return new vg((r=>cd.mi(r,t)),this.serializer)}}class MD extends Du{constructor(e,t,r){super(),this.xu=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.xu.initialize(this,e),await aS(this.xu.syncEngine),await Hu(this.xu.remoteStore),await this.persistence.Ji((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve())))}vu(e){return j0(this.persistence,new B0,e.initialUser,this.serializer)}Fu(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new O0(r,e.asyncQueue,t)}Mu(e,t){const r=new jC(t,this.persistence);return new BC(e.asyncQueue,r)}Cu(e){const t=MN(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?rn.withCacheSize(this.cacheSizeBytes):rn.DEFAULT;return new wg(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,XN(),Fh(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Du(e){return new q0}}class dd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>mE(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=DD.bind(null,this.syncEngine),await pD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new gD})()}createDatastore(e){const t=zd(e.databaseInfo.databaseId),r=(function(a){return new YN(a)})(e.databaseInfo);return(function(a,u,d,f){return new tD(a,u,d,f)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,o,a,u,d){return new rD(r,o,a,u,d)})(this.localStore,this.datastore,e.asyncQueue,(t=>mE(this.syncEngine,t,0)),(function(){return uE.v()?new uE:new GN})())}createSyncEngine(e,t){return(function(o,a,u,d,f,m,v){const E=new ID(o,a,u,d,f,m);return v&&(E.gu=!0),E})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await(async function(t){const r=De(t);ee(To,"RemoteStore shutting down."),r.Ea.add(5),await Wu(r),r.Aa.shutdown(),r.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}dd.provider={build:()=>new dd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):dn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs="FirestoreClient";class LD{constructor(e,t,r,o,a){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=o,this.user=Ht.UNAUTHENTICATED,this.clientId=Zm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(r,(async u=>{ee(vs,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u})),this.appCheckCredentials.start(r,(u=>(ee(vs,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new hr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=qd(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function Gp(n,e){n.asyncQueue.verifyOperationInProgress(),ee(vs,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async o=>{r.isEqual(o)||(await z0(e.localStore,o),r=o)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function yE(n,e){n.asyncQueue.verifyOperationInProgress();const t=await lS(n);ee(vs,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>hE(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,o)=>hE(e.remoteStore,o))),n._onlineComponents=e}async function lS(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){ee(vs,"Using user provided OfflineComponentProvider");try{await Gp(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===K.FAILED_PRECONDITION||o.code===K.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;yo("Error using user provided cache. Falling back to memory cache: "+t),await Gp(n,new Du)}}else ee(vs,"Using default OfflineComponentProvider"),await Gp(n,new OD(void 0));return n._offlineComponents}async function uS(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(ee(vs,"Using user provided OnlineComponentProvider"),await yE(n,n._uninitializedComponentsProvider._online)):(ee(vs,"Using default OnlineComponentProvider"),await yE(n,new dd))),n._onlineComponents}function FD(n){return lS(n).then((e=>e.localStore))}function UD(n){return uS(n).then((e=>e.syncEngine))}async function fd(n){const e=await uS(n),t=e.eventManager;return t.onListen=TD.bind(null,e.syncEngine),t.onUnlisten=RD.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=SD.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=kD.bind(null,e.syncEngine),t}function BD(n,e){const t=new hr;return n.asyncQueue.enqueueAndForget((async()=>(async function(o,a,u){try{const d=await(function(m,v){const E=De(m);return E.persistence.runTransaction("read document","readonly",(S=>E.localDocuments.getDocument(S,v)))})(o,a);d.isFoundDocument()?u.resolve(d):d.isNoDocument()?u.resolve(null):u.reject(new se(K.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(d){const f=qd(d,`Failed to get document '${a} from cache`);u.reject(f)}})(await FD(n),e,t))),t.promise}function jD(n,e,t={}){const r=new hr;return n.asyncQueue.enqueueAndForget((async()=>(function(a,u,d,f,m){const v=new Vg({next:S=>{v.Nu(),u.enqueueAndForget((()=>bg(a,E)));const x=S.docs.has(d);!x&&S.fromCache?m.reject(new se(K.UNAVAILABLE,"Failed to get document because the client is offline.")):x&&S.fromCache&&f&&f.source==="server"?m.reject(new se(K.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):m.resolve(S)},error:S=>m.reject(S)}),E=new xg(qu(d.path),v,{includeMetadataChanges:!0,qa:!0});return Pg(a,E)})(await fd(n),n.asyncQueue,e,t,r))),r.promise}function zD(n,e,t={}){const r=new hr;return n.asyncQueue.enqueueAndForget((async()=>(function(a,u,d,f,m){const v=new Vg({next:S=>{v.Nu(),u.enqueueAndForget((()=>bg(a,E))),S.fromCache&&f.source==="server"?m.reject(new se(K.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):m.resolve(S)},error:S=>m.reject(S)}),E=new xg(d,v,{includeMetadataChanges:!0,qa:!0});return Pg(a,E)})(await fd(n),n.asyncQueue,e,t,r))),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cS(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _E=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hS="firestore.googleapis.com",vE=!0;class wE{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new se(K.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=hS,this.ssl=vE}else this.host=e.host,this.ssl=e.ssl??vE;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=x0;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<vN)throw new se(K.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}OC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=cS(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new se(K.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new se(K.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new se(K.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,o){return r.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Kd{constructor(e,t,r,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new wE({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new se(K.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new se(K.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new wE(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new AC;switch(r.type){case"firstParty":return new bC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new se(K.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=_E.get(t);r&&(ee("ComponentProvider","Removing Datastore"),_E.delete(t),r.terminate())})(this),Promise.resolve()}}function $D(n,e,t,r={}){n=Yt(n,Kd);const o=Ro(e),a=n._getSettings(),u={...a,emulatorOptions:n._getEmulatorOptions()},d=`${e}:${t}`;o&&(Um(`https://${d}`),Bm("Firestore",!0)),a.host!==hS&&a.host!==d&&yo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const f={...a,host:d,ssl:o,emulatorOptions:r};if(!fo(f,u)&&(n._setSettings(f),r.mockUserToken)){let m,v;if(typeof r.mockUserToken=="string")m=r.mockUserToken,v=Ht.MOCK_USER;else{m=vI(r.mockUserToken,n._app?.options.projectId);const E=r.mockUserToken.sub||r.mockUserToken.user_id;if(!E)throw new se(K.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");v=new Ht(E)}n._authCredentials=new RC(new yT(m,v))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ai(this.firestore,e,this._query)}}class wt{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ps(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new wt(this.firestore,e,this._key)}toJSON(){return{type:wt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(ju(t,wt._jsonSchema))return new wt(e,r||null,new le(Je.fromString(t.referencePath)))}}wt._jsonSchemaVersion="firestore/documentReference/1.0",wt._jsonSchema={type:Nt("string",wt._jsonSchemaVersion),referencePath:Nt("string")};class ps extends Ai{constructor(e,t,r){super(e,t,qu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new wt(this.firestore,null,new le(e))}withConverter(e){return new ps(this.firestore,e,this._path)}}function Gn(n,e,...t){if(n=mt(n),vT("collection","path",e),n instanceof Kd){const r=Je.fromString(e,...t);return cw(r),new ps(n,null,r)}{if(!(n instanceof wt||n instanceof ps))throw new se(K.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Je.fromString(e,...t));return cw(r),new ps(n.firestore,null,r)}}function Nn(n,e,...t){if(n=mt(n),arguments.length===1&&(e=Zm.newId()),vT("doc","path",e),n instanceof Kd){const r=Je.fromString(e,...t);return uw(r),new wt(n,null,new le(r))}{if(!(n instanceof wt||n instanceof ps))throw new se(K.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Je.fromString(e,...t));return uw(r),new wt(n.firestore,n instanceof ps?n.converter:null,new le(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EE="AsyncQueue";class IE{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new K0(this,"async_queue_retry"),this._c=()=>{const r=Fh();r&&ee(EE,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=Fh();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Fh();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new hr;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Is(e))throw e;ee(EE,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,dn("INTERNAL UNHANDLED ERROR: ",TE(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const o=kg.createAndSchedule(this,e,t,r,(a=>this.hc(a)));return this.tc.push(o),o}uc(){this.nc&&we(47125,{Pc:TE(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function TE(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SE(n){return(function(t,r){if(typeof t!="object"||t===null)return!1;const o=t;for(const a of r)if(a in o&&typeof o[a]=="function")return!0;return!1})(n,["next","error","complete"])}class pr extends Kd{constructor(e,t,r,o){super(e,t,r,o),this.type="firestore",this._queue=new IE,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new IE(e),this._firestoreClient=void 0,await e}}}function qD(n,e){const t=typeof n=="object"?n:Id(),r=typeof n=="string"?n:td,o=Po(t,"firestore").getImmediate({identifier:r});if(!o._initialized){const a=gI("firestore");a&&$D(o,...a)}return o}function Yu(n){if(n._terminated)throw new se(K.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||dS(n),n._firestoreClient}function dS(n){const e=n._freezeSettings(),t=(function(o,a,u,d){return new gx(o,a,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,cS(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)})(n._databaseId,n._app?.options.appId||"",n._persistenceKey,e);n._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new LD(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(o){const a=o?._online.build();return{_offline:o?._offline.build(a),_online:a}})(n._componentsProvider))}function KD(n,e){yo("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=n._freezeSettings();return GD(n,dd.provider,{build:r=>new MD(r,t.cacheSizeBytes,e?.forceOwnership)}),Promise.resolve()}function GD(n,e,t){if((n=Yt(n,pr))._firestoreClient||n._terminated)throw new se(K.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(n._componentsProvider||n._getSettings().localCache)throw new se(K.FAILED_PRECONDITION,"SDK cache is already specified.");n._componentsProvider={_online:e,_offline:t},dS(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Wn(Dt.fromBase64String(e))}catch(t){throw new se(K.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Wn(Dt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Wn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ju(e,Wn._jsonSchema))return Wn.fromBase64String(e.bytes)}}Wn._jsonSchemaVersion="firestore/bytes/1.0",Wn._jsonSchema={type:Nt("string",Wn._jsonSchemaVersion),bytes:Nt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new se(K.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new vt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new se(K.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new se(K.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ve(this._lat,e._lat)||Ve(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:zr._jsonSchemaVersion}}static fromJSON(e){if(ju(e,zr._jsonSchema))return new zr(e.latitude,e.longitude)}}zr._jsonSchemaVersion="firestore/geoPoint/1.0",zr._jsonSchema={type:Nt("string",zr._jsonSchemaVersion),latitude:Nt("number"),longitude:Nt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,o){if(r.length!==o.length)return!1;for(let a=0;a<r.length;++a)if(r[a]!==o[a])return!1;return!0})(this._values,e._values)}toJSON(){return{type:$r._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ju(e,$r._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new $r(e.vectorValues);throw new se(K.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}$r._jsonSchemaVersion="firestore/vectorValue/1.0",$r._jsonSchema={type:Nt("string",$r._jsonSchemaVersion),vectorValues:Nt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WD=/^__.*__$/;class HD{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Si(e,this.data,this.fieldMask,t,this.fieldTransforms):new tl(e,this.data,t,this.fieldTransforms)}}class fS{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Si(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function pS(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw we(40011,{Ac:n})}}class Mg{constructor(e,t,r,o,a,u){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=o,a===void 0&&this.Rc(),this.fieldTransforms=a||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Mg({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const t=this.path?.child(e),r=this.Vc({path:t,fc:!1});return r.gc(e),r}yc(e){const t=this.path?.child(e),r=this.Vc({path:t,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return pd(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(pS(this.Ac)&&WD.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class QD{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||zd(e)}Cc(e,t,r,o=!1){return new Mg({Ac:e,methodName:t,Dc:r,path:vt.emptyPath(),fc:!1,bc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Wd(n){const e=n._freezeSettings(),t=zd(n._databaseId);return new QD(n._databaseId,!!e.ignoreUndefinedProperties,t)}function mS(n,e,t,r,o,a={}){const u=n.Cc(a.merge||a.mergeFields?2:0,e,t,o);Lg("Data must be an object, but it was:",u,r);const d=gS(r,u);let f,m;if(a.merge)f=new En(u.fieldMask),m=u.fieldTransforms;else if(a.mergeFields){const v=[];for(const E of a.mergeFields){const S=Dm(e,E,t);if(!u.contains(S))throw new se(K.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);_S(v,S)||v.push(S)}f=new En(v),m=u.fieldTransforms.filter((E=>f.covers(E.field)))}else f=null,m=u.fieldTransforms;return new HD(new sn(d),f,m)}class Hd extends Og{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Hd}}function YD(n,e,t,r){const o=n.Cc(1,e,t);Lg("Data must be an object, but it was:",o,r);const a=[],u=sn.empty();Ts(r,((f,m)=>{const v=Fg(e,f,t);m=mt(m);const E=o.yc(v);if(m instanceof Hd)a.push(v);else{const S=Xu(m,E);S!=null&&(a.push(v),u.set(v,S))}}));const d=new En(a);return new fS(u,d,o.fieldTransforms)}function XD(n,e,t,r,o,a){const u=n.Cc(1,e,t),d=[Dm(e,r,t)],f=[o];if(a.length%2!=0)throw new se(K.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let S=0;S<a.length;S+=2)d.push(Dm(e,a[S])),f.push(a[S+1]);const m=[],v=sn.empty();for(let S=d.length-1;S>=0;--S)if(!_S(m,d[S])){const x=d[S];let B=f[S];B=mt(B);const q=u.yc(x);if(B instanceof Hd)m.push(x);else{const O=Xu(B,q);O!=null&&(m.push(x),v.set(x,O))}}const E=new En(m);return new fS(v,E,u.fieldTransforms)}function JD(n,e,t,r=!1){return Xu(t,n.Cc(r?4:3,e))}function Xu(n,e){if(yS(n=mt(n)))return Lg("Unsupported field value:",e,n),gS(n,e);if(n instanceof Og)return(function(r,o){if(!pS(o.Ac))throw o.Sc(`${r._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Sc(`${r._methodName}() is not currently supported inside arrays`);const a=r._toFieldTransform(o);a&&o.fieldTransforms.push(a)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(r,o){const a=[];let u=0;for(const d of r){let f=Xu(d,o.wc(u));f==null&&(f={nullValue:"NULL_VALUE"}),a.push(f),u++}return{arrayValue:{values:a}}})(n,e)}return(function(r,o){if((r=mt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Mx(o.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const a=tt.fromDate(r);return{timestampValue:Wa(o.serializer,a)}}if(r instanceof tt){const a=new tt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Wa(o.serializer,a)}}if(r instanceof zr)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Wn)return{bytesValue:m0(o.serializer,r._byteString)};if(r instanceof wt){const a=o.databaseId,u=r.firestore._databaseId;if(!u.isEqual(a))throw o.Sc(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:mg(r.firestore._databaseId||o.databaseId,r._key.path)}}if(r instanceof $r)return(function(u,d){return{mapValue:{fields:{[ag]:{stringValue:lg},[ja]:{arrayValue:{values:u.toArray().map((m=>{if(typeof m!="number")throw d.Sc("VectorValues must only contain numeric values.");return cg(d.serializer,m)}))}}}}}})(r,o);throw o.Sc(`Unsupported field value: ${Rd(r)}`)})(n,e)}function gS(n,e){const t={};return OT(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ts(n,((r,o)=>{const a=Xu(o,e.mc(r));a!=null&&(t[r]=a)})),{mapValue:{fields:t}}}function yS(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof tt||n instanceof zr||n instanceof Wn||n instanceof wt||n instanceof Og||n instanceof $r)}function Lg(n,e,t){if(!yS(t)||!wT(t)){const r=Rd(t);throw r==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+r)}}function Dm(n,e,t){if((e=mt(e))instanceof Gd)return e._internalPath;if(typeof e=="string")return Fg(n,e);throw pd("Field path arguments must be of type string or ",n,!1,void 0,t)}const ZD=new RegExp("[~\\*/\\[\\]]");function Fg(n,e,t){if(e.search(ZD)>=0)throw pd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Gd(...e.split("."))._internalPath}catch{throw pd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function pd(n,e,t,r,o){const a=r&&!r.isEmpty(),u=o!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let f="";return(a||u)&&(f+=" (found",a&&(f+=` in field ${r}`),u&&(f+=` in document ${o}`),f+=")"),new se(K.INVALID_ARGUMENT,d+n+f)}function _S(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vS{constructor(e,t,r,o,a){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=o,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new wt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new eV(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Qd("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class eV extends vS{data(){return super.data()}}function Qd(n,e){return typeof e=="string"?Fg(n,e):e instanceof Gd?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wS(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new se(K.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ug{}class Bg extends Ug{}function Lr(n,e,...t){let r=[];e instanceof Ug&&r.push(e),r=r.concat(t),(function(a){const u=a.filter((f=>f instanceof jg)).length,d=a.filter((f=>f instanceof Yd)).length;if(u>1||u>0&&d>0)throw new se(K.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const o of r)n=o._apply(n);return n}class Yd extends Bg{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Yd(e,t,r)}_apply(e){const t=this._parse(e);return ES(e._query,t),new Ai(e.firestore,e.converter,Em(e._query,t))}_parse(e){const t=Wd(e.firestore);return(function(a,u,d,f,m,v,E){let S;if(m.isKeyField()){if(v==="array-contains"||v==="array-contains-any")throw new se(K.INVALID_ARGUMENT,`Invalid Query. You can't perform '${v}' queries on documentId().`);if(v==="in"||v==="not-in"){PE(E,v);const B=[];for(const q of E)B.push(kE(f,a,q));S={arrayValue:{values:B}}}else S=kE(f,a,E)}else v!=="in"&&v!=="not-in"&&v!=="array-contains-any"||PE(E,v),S=JD(d,u,E,v==="in"||v==="not-in");return qe.create(m,v,S)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Zl(n,e,t){const r=e,o=Qd("where",n);return Yd._create(o,r,t)}class jg extends Ug{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new jg(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:nt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,a){let u=o;const d=a.getFlattenedFilters();for(const f of d)ES(u,f),u=Em(u,f)})(e._query,t),new Ai(e.firestore,e.converter,Em(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class zg extends Bg{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new zg(e,t)}_apply(e){const t=(function(o,a,u){if(o.startAt!==null)throw new se(K.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new se(K.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Cu(a,u)})(e._query,this._field,this._direction);return new Ai(e.firestore,e.converter,(function(o,a){const u=o.explicitOrderBy.concat([a]);return new el(o.path,o.collectionGroup,u,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)})(e._query,t))}}function AE(n,e="asc"){const t=e,r=Qd("orderBy",n);return zg._create(r,t)}class $g extends Bg{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new $g(e,t,r)}_apply(e){return new Ai(e.firestore,e.converter,id(e._query,this._limit,this._limitType))}}function RE(n){return MC("limit",n),$g._create("limit",n,"F")}function kE(n,e,t){if(typeof(t=mt(t))=="string"){if(t==="")throw new se(K.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!JT(e)&&t.indexOf("/")!==-1)throw new se(K.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Je.fromString(t));if(!le.isDocumentKey(r))throw new se(K.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Pu(n,new le(r))}if(t instanceof wt)return Pu(n,t._key);throw new se(K.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Rd(t)}.`)}function PE(n,e){if(!Array.isArray(n)||n.length===0)throw new se(K.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function ES(n,e){const t=(function(o,a){for(const u of o)for(const d of u.getFlattenedFilters())if(a.indexOf(d.op)>=0)return d.op;return null})(n.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new se(K.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new se(K.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class tV{convertValue(e,t="none"){switch(gs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return pt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ii(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw we(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Ts(e,((o,a)=>{r[o]=this.convertValue(a,t)})),r}convertVectorValue(e){const t=e.fields?.[ja].arrayValue?.values?.map((r=>pt(r.doubleValue)));return new $r(t)}convertGeoPoint(e){return new zr(pt(e.latitude),pt(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Nd(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Ru(e));default:return null}}convertTimestamp(e){const t=Ei(e);return new tt(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Je.fromString(e);ke(A0(r),9688,{name:e});const o=new _o(r.get(1),r.get(3)),a=new le(r.popFirst(5));return o.isEqual(t)||dn(`Document ${a} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IS(n,e,t){let r;return r=n?n.toFirestore(e):e,r}class xa{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ms extends vS{constructor(e,t,r,o,a,u){super(e,t,r,o,u),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Uh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Qd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new se(K.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=ms._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}ms._jsonSchemaVersion="firestore/documentSnapshot/1.0",ms._jsonSchema={type:Nt("string",ms._jsonSchemaVersion),bundleSource:Nt("string","DocumentSnapshot"),bundleName:Nt("string"),bundle:Nt("string")};class Uh extends ms{data(e={}){return super.data(e)}}class ho{constructor(e,t,r,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new xa(o.hasPendingWrites,o.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new Uh(this._firestore,this._userDataWriter,r.key,r,new xa(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new se(K.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,a){if(o._snapshot.oldDocs.isEmpty()){let u=0;return o._snapshot.docChanges.map((d=>{const f=new Uh(o._firestore,o._userDataWriter,d.doc.key,d.doc,new xa(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);return d.doc,{type:"added",doc:f,oldIndex:-1,newIndex:u++}}))}{let u=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((d=>a||d.type!==3)).map((d=>{const f=new Uh(o._firestore,o._userDataWriter,d.doc.key,d.doc,new xa(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);let m=-1,v=-1;return d.type!==0&&(m=u.indexOf(d.doc.key),u=u.delete(d.doc.key)),d.type!==1&&(u=u.add(d.doc),v=u.indexOf(d.doc.key)),{type:nV(d.type),doc:f,oldIndex:m,newIndex:v}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new se(K.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ho._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Zm.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],o=[];return this.docs.forEach((a=>{a._document!==null&&(t.push(a._document),r.push(this._userDataWriter.convertObjectMap(a._document.data.value.mapValue.fields,"previous")),o.push(a.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function nV(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return we(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function md(n){n=Yt(n,wt);const e=Yt(n.firestore,pr);return jD(Yu(e),n._key).then((t=>TS(e,n,t)))}ho._jsonSchemaVersion="firestore/querySnapshot/1.0",ho._jsonSchema={type:Nt("string",ho._jsonSchemaVersion),bundleSource:Nt("string","QuerySnapshot"),bundleName:Nt("string"),bundle:Nt("string")};class Xd extends tV{constructor(e){super(),this.firestore=e}convertBytes(e){return new Wn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new wt(this.firestore,null,t)}}function rV(n){n=Yt(n,wt);const e=Yt(n.firestore,pr),t=Yu(e),r=new Xd(e);return BD(t,n._key).then((o=>new ms(e,r,n._key,o,new xa(o!==null&&o.hasLocalMutations,!0),n.converter)))}function ou(n){n=Yt(n,Ai);const e=Yt(n.firestore,pr),t=Yu(e),r=new Xd(e);return wS(n._query),zD(t,n._query).then((o=>new ho(e,r,n,o)))}function iV(n,e,t){n=Yt(n,wt);const r=Yt(n.firestore,pr),o=IS(n.converter,e);return Jd(r,[mS(Wd(r),"setDoc",n._key,o,n.converter!==null,t).toMutation(n._key,on.none())])}function ar(n,e,t,...r){n=Yt(n,wt);const o=Yt(n.firestore,pr),a=Wd(o);let u;return u=typeof(e=mt(e))=="string"||e instanceof Gd?XD(a,"updateDoc",n._key,e,t,r):YD(a,"updateDoc",n._key,e),Jd(o,[u.toMutation(n._key,on.exists(!0))])}function k2(n){return Jd(Yt(n.firestore,pr),[new Ld(n._key,on.none())])}function Bh(n,e){const t=Yt(n.firestore,pr),r=Nn(n),o=IS(n.converter,e);return Jd(t,[mS(Wd(n.firestore),"addDoc",r._key,o,n.converter!==null,{}).toMutation(r._key,on.exists(!1))]).then((()=>r))}function qg(n,...e){n=mt(n);let t={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||SE(e[r])||(t=e[r++]);const o={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(SE(e[r])){const f=e[r];e[r]=f.next?.bind(f),e[r+1]=f.error?.bind(f),e[r+2]=f.complete?.bind(f)}let a,u,d;if(n instanceof wt)u=Yt(n.firestore,pr),d=qu(n._key.path),a={next:f=>{e[r]&&e[r](TS(u,n,f))},error:e[r+1],complete:e[r+2]};else{const f=Yt(n,Ai);u=Yt(f.firestore,pr),d=f._query;const m=new Xd(u);a={next:v=>{e[r]&&e[r](new ho(u,m,f,v))},error:e[r+1],complete:e[r+2]},wS(n._query)}return(function(m,v,E,S){const x=new Vg(S),B=new xg(v,x,E);return m.asyncQueue.enqueueAndForget((async()=>Pg(await fd(m),B))),()=>{x.Nu(),m.asyncQueue.enqueueAndForget((async()=>bg(await fd(m),B)))}})(Yu(u),d,o,a)}function Jd(n,e){return(function(r,o){const a=new hr;return r.asyncQueue.enqueueAndForget((async()=>PD(await UD(r),o,a))),a.promise})(Yu(n),e)}function TS(n,e,t){const r=t.docs.get(e._key),o=new Xd(n);return new ms(n,o,e._key,r,new xa(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(o){Za=o})(bo),dr(new Yn("firestore",((r,{instanceIdentifier:o,options:a})=>{const u=r.getProvider("app").getImmediate(),d=new pr(new kC(r.getProvider("auth-internal")),new CC(u,r.getProvider("app-check-internal")),(function(m,v){if(!Object.prototype.hasOwnProperty.apply(m.options,["projectId"]))throw new se(K.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new _o(m.options.projectId,v)})(u,o),u);return a={useFetchStreams:t,...a},d._setSettings(a),d}),"PUBLIC").setMultipleInstances(!0)),In(sw,ow,e),In(sw,ow,"esm2020")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SS="firebasestorage.googleapis.com",sV="storageBucket",oV=120*1e3,aV=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr extends mr{constructor(e,t,r=0){super(Wp(e),`Firebase Storage: ${t} (${Wp(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Gr.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Wp(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Kr;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Kr||(Kr={}));function Wp(n){return"storage/"+n}function lV(){const n="An unknown error occurred, please check the error payload for server response.";return new Gr(Kr.UNKNOWN,n)}function uV(){return new Gr(Kr.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function cV(){return new Gr(Kr.CANCELED,"User canceled the upload/download.")}function hV(n){return new Gr(Kr.INVALID_URL,"Invalid URL '"+n+"'.")}function dV(n){return new Gr(Kr.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function bE(n){return new Gr(Kr.INVALID_ARGUMENT,n)}function AS(){return new Gr(Kr.APP_DELETED,"The Firebase app was deleted.")}function fV(n){return new Gr(Kr.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=cr.makeFromUrl(e,t)}catch{return new cr(e,"")}if(r.path==="")return r;throw dV(e)}static makeFromUrl(e,t){let r=null;const o="([A-Za-z0-9.\\-_]+)";function a(ce){ce.path.charAt(ce.path.length-1)==="/"&&(ce.path_=ce.path_.slice(0,-1))}const u="(/(.*))?$",d=new RegExp("^gs://"+o+u,"i"),f={bucket:1,path:3};function m(ce){ce.path_=decodeURIComponent(ce.path)}const v="v[A-Za-z0-9_]+",E=t.replace(/[.]/g,"\\."),S="(/([^?#]*).*)?$",x=new RegExp(`^https?://${E}/${v}/b/${o}/o${S}`,"i"),B={bucket:1,path:3},q=t===SS?"(?:storage.googleapis.com|storage.cloud.google.com)":t,O="([^?#]*)",ne=new RegExp(`^https?://${q}/${o}/${O}`,"i"),te=[{regex:d,indices:f,postModify:a},{regex:x,indices:B,postModify:m},{regex:ne,indices:{bucket:1,path:2},postModify:m}];for(let ce=0;ce<te.length;ce++){const he=te[ce],ue=he.regex.exec(e);if(ue){const P=ue[he.indices.bucket];let T=ue[he.indices.path];T||(T=""),r=new cr(P,T),he.postModify(r);break}}if(r==null)throw hV(e);return r}}class pV{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mV(n,e,t){let r=1,o=null,a=null,u=!1,d=0;function f(){return d===2}let m=!1;function v(...O){m||(m=!0,e.apply(null,O))}function E(O){o=setTimeout(()=>{o=null,n(x,f())},O)}function S(){a&&clearTimeout(a)}function x(O,...ne){if(m){S();return}if(O){S(),v.call(null,O,...ne);return}if(f()||u){S(),v.call(null,O,...ne);return}r<64&&(r*=2);let te;d===1?(d=2,te=0):te=(r+Math.random())*1e3,E(te)}let B=!1;function q(O){B||(B=!0,S(),!m&&(o!==null?(O||(d=2),clearTimeout(o),E(0)):O||(d=1)))}return E(0),a=setTimeout(()=>{u=!0,q(!0)},t),q}function gV(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yV(n){return n!==void 0}function CE(n,e,t,r){if(r<e)throw bE(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw bE(`Invalid value for '${n}'. Expected ${t} or less.`)}function _V(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const o=e(r)+"="+e(n[r]);t=t+o+"&"}return t=t.slice(0,-1),t}var gd;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(gd||(gd={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vV(n,e){const t=n>=500&&n<600,o=[408,429].indexOf(n)!==-1,a=e.indexOf(n)!==-1;return t||o||a}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wV{constructor(e,t,r,o,a,u,d,f,m,v,E,S=!0,x=!1){this.url_=e,this.method_=t,this.headers_=r,this.body_=o,this.successCodes_=a,this.additionalRetryCodes_=u,this.callback_=d,this.errorCallback_=f,this.timeout_=m,this.progressCallback_=v,this.connectionFactory_=E,this.retry=S,this.isUsingEmulator=x,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((B,q)=>{this.resolve_=B,this.reject_=q,this.start_()})}start_(){const e=(r,o)=>{if(o){r(!1,new Th(!1,null,!0));return}const a=this.connectionFactory_();this.pendingConnection_=a;const u=d=>{const f=d.loaded,m=d.lengthComputable?d.total:-1;this.progressCallback_!==null&&this.progressCallback_(f,m)};this.progressCallback_!==null&&a.addUploadProgressListener(u),a.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&a.removeUploadProgressListener(u),this.pendingConnection_=null;const d=a.getErrorCode()===gd.NO_ERROR,f=a.getStatus();if(!d||vV(f,this.additionalRetryCodes_)&&this.retry){const v=a.getErrorCode()===gd.ABORT;r(!1,new Th(!1,null,v));return}const m=this.successCodes_.indexOf(f)!==-1;r(!0,new Th(m,a))})},t=(r,o)=>{const a=this.resolve_,u=this.reject_,d=o.connection;if(o.wasSuccessCode)try{const f=this.callback_(d,d.getResponse());yV(f)?a(f):a()}catch(f){u(f)}else if(d!==null){const f=lV();f.serverResponse=d.getErrorText(),this.errorCallback_?u(this.errorCallback_(d,f)):u(f)}else if(o.canceled){const f=this.appDelete_?AS():cV();u(f)}else{const f=uV();u(f)}};this.canceled_?t(!1,new Th(!1,null,!0)):this.backoffId_=mV(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&gV(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Th{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function EV(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function IV(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function TV(n,e){e&&(n["X-Firebase-GMPID"]=e)}function SV(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function AV(n,e,t,r,o,a,u=!0,d=!1){const f=_V(n.urlParams),m=n.url+f,v=Object.assign({},n.headers);return TV(v,e),EV(v,t),IV(v,a),SV(v,r),new wV(m,n.method,v,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,o,u,d)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RV(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function kV(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(e,t){this._service=e,t instanceof cr?this._location=t:this._location=cr.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new yd(e,t)}get root(){const e=new cr(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return kV(this._location.path)}get storage(){return this._service}get parent(){const e=RV(this._location.path);if(e===null)return null;const t=new cr(this._location.bucket,e);return new yd(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw fV(e)}}function xE(n,e){const t=e?.[sV];return t==null?null:cr.makeFromBucketSpec(t,n)}function PV(n,e,t,r={}){n.host=`${e}:${t}`;const o=Ro(e);o&&(Um(`https://${n.host}/b`),Bm("Storage",!0)),n._isUsingEmulator=!0,n._protocol=o?"https":"http";const{mockUserToken:a}=r;a&&(n._overrideAuthToken=typeof a=="string"?a:vI(a,n.app.options.projectId))}class bV{constructor(e,t,r,o,a,u=!1){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=o,this._firebaseVersion=a,this._isUsingEmulator=u,this._bucket=null,this._host=SS,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=oV,this._maxUploadRetryTime=aV,this._requests=new Set,o!=null?this._bucket=cr.makeFromBucketSpec(o,this._host):this._bucket=xE(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=cr.makeFromBucketSpec(this._url,e):this._bucket=xE(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){CE("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){CE("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(Vn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new yd(this,e)}_makeRequest(e,t,r,o,a=!0){if(this._deleted)return new pV(AS());{const u=AV(e,this._appId,r,o,t,this._firebaseVersion,a,this._isUsingEmulator);return this._requests.add(u),u.getPromise().then(()=>this._requests.delete(u),()=>this._requests.delete(u)),u}}async makeRequestWithTokens(e,t){const[r,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,o).getPromise()}}const NE="@firebase/storage",DE="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RS="storage";function CV(n=Id(),e){n=mt(n);const r=Po(n,RS).getImmediate({identifier:e}),o=gI("storage");return o&&xV(r,...o),r}function xV(n,e,t,r={}){PV(n,e,t,r)}function NV(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),o=n.getProvider("app-check-internal");return new bV(t,r,o,e,bo)}function DV(){dr(new Yn(RS,NV,"PUBLIC").setMultipleInstances(!0)),In(NE,DE,""),In(NE,DE,"esm2020")}DV();const kS="@firebase/installations",Kg="0.6.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PS=1e4,bS=`w:${Kg}`,CS="FIS_v2",VV="https://firebaseinstallations.googleapis.com/v1",OV=3600*1e3,MV="installations",LV="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FV={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},So=new ko(MV,LV,FV);function xS(n){return n instanceof mr&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NS({projectId:n}){return`${VV}/projects/${n}/installations`}function DS(n){return{token:n.token,requestStatus:2,expiresIn:BV(n.expiresIn),creationTime:Date.now()}}async function VS(n,e){const r=(await e.json()).error;return So.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function OS({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function UV(n,{refreshToken:e}){const t=OS(n);return t.append("Authorization",jV(e)),t}async function MS(n){const e=await n();return e.status>=500&&e.status<600?n():e}function BV(n){return Number(n.replace("s","000"))}function jV(n){return`${CS} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zV({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const r=NS(n),o=OS(n),a=e.getImmediate({optional:!0});if(a){const m=await a.getHeartbeatsHeader();m&&o.append("x-firebase-client",m)}const u={fid:t,authVersion:CS,appId:n.appId,sdkVersion:bS},d={method:"POST",headers:o,body:JSON.stringify(u)},f=await MS(()=>fetch(r,d));if(f.ok){const m=await f.json();return{fid:m.fid||t,registrationStatus:2,refreshToken:m.refreshToken,authToken:DS(m.authToken)}}else throw await VS("Create Installation",f)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LS(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $V(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qV=/^[cdef][\w-]{21}$/,Vm="";function KV(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=GV(n);return qV.test(t)?t:Vm}catch{return Vm}}function GV(n){return $V(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zd(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FS=new Map;function US(n,e){const t=Zd(n);BS(t,e),WV(t,e)}function BS(n,e){const t=FS.get(n);if(t)for(const r of t)r(e)}function WV(n,e){const t=HV();t&&t.postMessage({key:n,fid:e}),QV()}let ao=null;function HV(){return!ao&&"BroadcastChannel"in self&&(ao=new BroadcastChannel("[Firebase] FID Change"),ao.onmessage=n=>{BS(n.data.key,n.data.fid)}),ao}function QV(){FS.size===0&&ao&&(ao.close(),ao=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YV="firebase-installations-database",XV=1,Ao="firebase-installations-store";let Hp=null;function Gg(){return Hp||(Hp=Ed(YV,XV,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Ao)}}})),Hp}async function _d(n,e){const t=Zd(n),o=(await Gg()).transaction(Ao,"readwrite"),a=o.objectStore(Ao),u=await a.get(t);return await a.put(e,t),await o.done,(!u||u.fid!==e.fid)&&US(n,e.fid),e}async function jS(n){const e=Zd(n),r=(await Gg()).transaction(Ao,"readwrite");await r.objectStore(Ao).delete(e),await r.done}async function ef(n,e){const t=Zd(n),o=(await Gg()).transaction(Ao,"readwrite"),a=o.objectStore(Ao),u=await a.get(t),d=e(u);return d===void 0?await a.delete(t):await a.put(d,t),await o.done,d&&(!u||u.fid!==d.fid)&&US(n,d.fid),d}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wg(n){let e;const t=await ef(n.appConfig,r=>{const o=JV(r),a=ZV(n,o);return e=a.registrationPromise,a.installationEntry});return t.fid===Vm?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function JV(n){const e=n||{fid:KV(),registrationStatus:0};return zS(e)}function ZV(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(So.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=eO(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:tO(n)}:{installationEntry:e}}async function eO(n,e){try{const t=await zV(n,e);return _d(n.appConfig,t)}catch(t){throw xS(t)&&t.customData.serverCode===409?await jS(n.appConfig):await _d(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function tO(n){let e=await VE(n.appConfig);for(;e.registrationStatus===1;)await LS(100),e=await VE(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=await Wg(n);return r||t}return e}function VE(n){return ef(n,e=>{if(!e)throw So.create("installation-not-found");return zS(e)})}function zS(n){return nO(n)?{fid:n.fid,registrationStatus:0}:n}function nO(n){return n.registrationStatus===1&&n.registrationTime+PS<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rO({appConfig:n,heartbeatServiceProvider:e},t){const r=iO(n,t),o=UV(n,t),a=e.getImmediate({optional:!0});if(a){const m=await a.getHeartbeatsHeader();m&&o.append("x-firebase-client",m)}const u={installation:{sdkVersion:bS,appId:n.appId}},d={method:"POST",headers:o,body:JSON.stringify(u)},f=await MS(()=>fetch(r,d));if(f.ok){const m=await f.json();return DS(m)}else throw await VS("Generate Auth Token",f)}function iO(n,{fid:e}){return`${NS(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hg(n,e=!1){let t;const r=await ef(n.appConfig,a=>{if(!$S(a))throw So.create("not-registered");const u=a.authToken;if(!e&&aO(u))return a;if(u.requestStatus===1)return t=sO(n,e),a;{if(!navigator.onLine)throw So.create("app-offline");const d=uO(a);return t=oO(n,d),d}});return t?await t:r.authToken}async function sO(n,e){let t=await OE(n.appConfig);for(;t.authToken.requestStatus===1;)await LS(100),t=await OE(n.appConfig);const r=t.authToken;return r.requestStatus===0?Hg(n,e):r}function OE(n){return ef(n,e=>{if(!$S(e))throw So.create("not-registered");const t=e.authToken;return cO(t)?{...e,authToken:{requestStatus:0}}:e})}async function oO(n,e){try{const t=await rO(n,e),r={...e,authToken:t};return await _d(n.appConfig,r),t}catch(t){if(xS(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await jS(n.appConfig);else{const r={...e,authToken:{requestStatus:0}};await _d(n.appConfig,r)}throw t}}function $S(n){return n!==void 0&&n.registrationStatus===2}function aO(n){return n.requestStatus===2&&!lO(n)}function lO(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+OV}function uO(n){const e={requestStatus:1,requestTime:Date.now()};return{...n,authToken:e}}function cO(n){return n.requestStatus===1&&n.requestTime+PS<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hO(n){const e=n,{installationEntry:t,registrationPromise:r}=await Wg(e);return r?r.catch(console.error):Hg(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dO(n,e=!1){const t=n;return await fO(t),(await Hg(t,e)).token}async function fO(n){const{registrationPromise:e}=await Wg(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pO(n){if(!n||!n.options)throw Qp("App Configuration");if(!n.name)throw Qp("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Qp(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Qp(n){return So.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qS="installations",mO="installations-internal",gO=n=>{const e=n.getProvider("app").getImmediate(),t=pO(e),r=Po(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},yO=n=>{const e=n.getProvider("app").getImmediate(),t=Po(e,qS).getImmediate();return{getId:()=>hO(t),getToken:o=>dO(t,o)}};function _O(){dr(new Yn(qS,gO,"PUBLIC")),dr(new Yn(mO,yO,"PRIVATE"))}_O();In(kS,Kg);In(kS,Kg,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vO="/firebase-messaging-sw.js",wO="/firebase-cloud-messaging-push-scope",KS="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",EO="https://fcmregistrations.googleapis.com/v1",GS="google.c.a.c_id",IO="google.c.a.c_l",TO="google.c.a.ts",SO="google.c.a.e",ME=1e4;var LE;(function(n){n[n.DATA_MESSAGE=1]="DATA_MESSAGE",n[n.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(LE||(LE={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var Vu;(function(n){n.PUSH_RECEIVED="push-received",n.NOTIFICATION_CLICKED="notification-clicked"})(Vu||(Vu={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fi(n){const e=new Uint8Array(n);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function AO(n){const e="=".repeat((4-n.length%4)%4),t=(n+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(t),o=new Uint8Array(r.length);for(let a=0;a<r.length;++a)o[a]=r.charCodeAt(a);return o}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yp="fcm_token_details_db",RO=5,FE="fcm_token_object_Store";async function kO(n){if("databases"in indexedDB&&!(await indexedDB.databases()).map(a=>a.name).includes(Yp))return null;let e=null;return(await Ed(Yp,RO,{upgrade:async(r,o,a,u)=>{if(o<2||!r.objectStoreNames.contains(FE))return;const d=u.objectStore(FE),f=await d.index("fcmSenderId").get(n);if(await d.clear(),!!f){if(o===2){const m=f;if(!m.auth||!m.p256dh||!m.endpoint)return;e={token:m.fcmToken,createTime:m.createTime??Date.now(),subscriptionOptions:{auth:m.auth,p256dh:m.p256dh,endpoint:m.endpoint,swScope:m.swScope,vapidKey:typeof m.vapidKey=="string"?m.vapidKey:fi(m.vapidKey)}}}else if(o===3){const m=f;e={token:m.fcmToken,createTime:m.createTime,subscriptionOptions:{auth:fi(m.auth),p256dh:fi(m.p256dh),endpoint:m.endpoint,swScope:m.swScope,vapidKey:fi(m.vapidKey)}}}else if(o===4){const m=f;e={token:m.fcmToken,createTime:m.createTime,subscriptionOptions:{auth:fi(m.auth),p256dh:fi(m.p256dh),endpoint:m.endpoint,swScope:m.swScope,vapidKey:fi(m.vapidKey)}}}}}})).close(),await Op(Yp),await Op("fcm_vapid_details_db"),await Op("undefined"),PO(e)?e:null}function PO(n){if(!n||!n.subscriptionOptions)return!1;const{subscriptionOptions:e}=n;return typeof n.createTime=="number"&&n.createTime>0&&typeof n.token=="string"&&n.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bO="firebase-messaging-database",CO=1,Ou="firebase-messaging-store";let Xp=null;function WS(){return Xp||(Xp=Ed(bO,CO,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Ou)}}})),Xp}async function xO(n){const e=HS(n),r=await(await WS()).transaction(Ou).objectStore(Ou).get(e);if(r)return r;{const o=await kO(n.appConfig.senderId);if(o)return await Qg(n,o),o}}async function Qg(n,e){const t=HS(n),o=(await WS()).transaction(Ou,"readwrite");return await o.objectStore(Ou).put(e,t),await o.done,e}function HS({appConfig:n}){return n.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NO={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},ln=new ko("messaging","Messaging",NO);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DO(n,e){const t=await Xg(n),r=QS(e),o={method:"POST",headers:t,body:JSON.stringify(r)};let a;try{a=await(await fetch(Yg(n.appConfig),o)).json()}catch(u){throw ln.create("token-subscribe-failed",{errorInfo:u?.toString()})}if(a.error){const u=a.error.message;throw ln.create("token-subscribe-failed",{errorInfo:u})}if(!a.token)throw ln.create("token-subscribe-no-token");return a.token}async function VO(n,e){const t=await Xg(n),r=QS(e.subscriptionOptions),o={method:"PATCH",headers:t,body:JSON.stringify(r)};let a;try{a=await(await fetch(`${Yg(n.appConfig)}/${e.token}`,o)).json()}catch(u){throw ln.create("token-update-failed",{errorInfo:u?.toString()})}if(a.error){const u=a.error.message;throw ln.create("token-update-failed",{errorInfo:u})}if(!a.token)throw ln.create("token-update-no-token");return a.token}async function OO(n,e){const r={method:"DELETE",headers:await Xg(n)};try{const a=await(await fetch(`${Yg(n.appConfig)}/${e}`,r)).json();if(a.error){const u=a.error.message;throw ln.create("token-unsubscribe-failed",{errorInfo:u})}}catch(o){throw ln.create("token-unsubscribe-failed",{errorInfo:o?.toString()})}}function Yg({projectId:n}){return`${EO}/projects/${n}/registrations`}async function Xg({appConfig:n,installations:e}){const t=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n.apiKey,"x-goog-firebase-installations-auth":`FIS ${t}`})}function QS({p256dh:n,auth:e,endpoint:t,vapidKey:r}){const o={web:{endpoint:t,auth:e,p256dh:n}};return r!==KS&&(o.web.applicationPubKey=r),o}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MO=10080*60*1e3;async function LO(n){const e=await UO(n.swRegistration,n.vapidKey),t={vapidKey:n.vapidKey,swScope:n.swRegistration.scope,endpoint:e.endpoint,auth:fi(e.getKey("auth")),p256dh:fi(e.getKey("p256dh"))},r=await xO(n.firebaseDependencies);if(r){if(BO(r.subscriptionOptions,t))return Date.now()>=r.createTime+MO?FO(n,{token:r.token,createTime:Date.now(),subscriptionOptions:t}):r.token;try{await OO(n.firebaseDependencies,r.token)}catch(o){console.warn(o)}return UE(n.firebaseDependencies,t)}else return UE(n.firebaseDependencies,t)}async function FO(n,e){try{const t=await VO(n.firebaseDependencies,e),r={...e,token:t,createTime:Date.now()};return await Qg(n.firebaseDependencies,r),t}catch(t){throw t}}async function UE(n,e){const r={token:await DO(n,e),createTime:Date.now(),subscriptionOptions:e};return await Qg(n,r),r.token}async function UO(n,e){const t=await n.pushManager.getSubscription();return t||n.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:AO(e)})}function BO(n,e){const t=e.vapidKey===n.vapidKey,r=e.endpoint===n.endpoint,o=e.auth===n.auth,a=e.p256dh===n.p256dh;return t&&r&&o&&a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BE(n){const e={from:n.from,collapseKey:n.collapse_key,messageId:n.fcmMessageId};return jO(e,n),zO(e,n),$O(e,n),e}function jO(n,e){if(!e.notification)return;n.notification={};const t=e.notification.title;t&&(n.notification.title=t);const r=e.notification.body;r&&(n.notification.body=r);const o=e.notification.image;o&&(n.notification.image=o);const a=e.notification.icon;a&&(n.notification.icon=a)}function zO(n,e){e.data&&(n.data=e.data)}function $O(n,e){if(!e.fcmOptions&&!e.notification?.click_action)return;n.fcmOptions={};const t=e.fcmOptions?.link??e.notification?.click_action;t&&(n.fcmOptions.link=t);const r=e.fcmOptions?.analytics_label;r&&(n.fcmOptions.analyticsLabel=r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qO(n){return typeof n=="object"&&!!n&&GS in n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KO(n){if(!n||!n.options)throw Jp("App Configuration Object");if(!n.name)throw Jp("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:t}=n;for(const r of e)if(!t[r])throw Jp(r);return{appName:n.name,projectId:t.projectId,apiKey:t.apiKey,appId:t.appId,senderId:t.messagingSenderId}}function Jp(n){return ln.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GO{constructor(e,t,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const o=KO(e);this.firebaseDependencies={app:e,appConfig:o,installations:t,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WO(n){try{n.swRegistration=await navigator.serviceWorker.register(vO,{scope:wO}),n.swRegistration.update().catch(()=>{}),await HO(n.swRegistration)}catch(e){throw ln.create("failed-service-worker-registration",{browserErrorMessage:e?.message})}}async function HO(n){return new Promise((e,t)=>{const r=setTimeout(()=>t(new Error(`Service worker not registered after ${ME} ms`)),ME),o=n.installing||n.waiting;n.active?(clearTimeout(r),e()):o?o.onstatechange=a=>{a.target?.state==="activated"&&(o.onstatechange=null,clearTimeout(r),e())}:(clearTimeout(r),t(new Error("No incoming service worker found.")))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QO(n,e){if(!e&&!n.swRegistration&&await WO(n),!(!e&&n.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw ln.create("invalid-sw-registration");n.swRegistration=e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YO(n,e){e?n.vapidKey=e:n.vapidKey||(n.vapidKey=KS)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YS(n,e){if(!navigator)throw ln.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw ln.create("permission-blocked");return await YO(n,e?.vapidKey),await QO(n,e?.serviceWorkerRegistration),LO(n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XO(n,e,t){const r=JO(e);(await n.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:t[GS],message_name:t[IO],message_time:t[TO],message_device_time:Math.floor(Date.now()/1e3)})}function JO(n){switch(n){case Vu.NOTIFICATION_CLICKED:return"notification_open";case Vu.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZO(n,e){const t=e.data;if(!t.isFirebaseMessaging)return;n.onMessageHandler&&t.messageType===Vu.PUSH_RECEIVED&&(typeof n.onMessageHandler=="function"?n.onMessageHandler(BE(t)):n.onMessageHandler.next(BE(t)));const r=t.data;qO(r)&&r[SO]==="1"&&await XO(n,t.messageType,r)}const jE="@firebase/messaging",zE="0.12.23";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e2=n=>{const e=new GO(n.getProvider("app").getImmediate(),n.getProvider("installations-internal").getImmediate(),n.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",t=>ZO(e,t)),e},t2=n=>{const e=n.getProvider("messaging").getImmediate();return{getToken:r=>YS(e,r)}};function n2(){dr(new Yn("messaging",e2,"PUBLIC")),dr(new Yn("messaging-internal",t2,"PRIVATE")),In(jE,zE),In(jE,zE,"esm2020")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jg(){try{await TI()}catch{return!1}return typeof window<"u"&&jm()&&Wk()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r2(n,e){if(!navigator)throw ln.create("only-available-in-window");return n.onMessageHandler=e,()=>{n.onMessageHandler=null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XS(n=Id()){return Jg().then(e=>{if(!e)throw ln.create("unsupported-browser")},e=>{throw ln.create("indexed-db-unsupported")}),Po(mt(n),"messaging").getImmediate()}async function i2(n,e){return n=mt(n),YS(n,e)}function s2(n,e){return n=mt(n),r2(n,e)}n2();const o2={apiKey:"AIzaSyAlxN2fpjmc-tMRFLxW4H_jtLqS7tynEQw",authDomain:"virtual-restaurant-app.firebaseapp.com",projectId:"virtual-restaurant-app",storageBucket:"virtual-restaurant-app.appspot.com",messagingSenderId:"764282794302",appId:"1:764282794302:web:0f3114ce444d64e3833c6f"},Ju=RI(o2),Qa=EC(Ju),ht=qD(Ju);CV(Ju);a1(Qa,tT).catch(n=>{console.warn("Auth persistence setup failed:",n)});KD(ht).catch(n=>{console.warn("IndexedDB persistence failed (already enabled/private mode?):",n)});async function a2(){try{if(!await Jg()||typeof window>"u"||!("Notification"in window))return console.warn("FCM/push not supported in this browser."),null;if(Notification.permission!=="granted"&&await Notification.requestPermission()!=="granted")return console.warn("Notification permission not granted."),null;const e=await navigator.serviceWorker.ready,t=XS(Ju);return await i2(t,{vapidKey:"BCT4O2TyyEC4HrSKZJVuuVFdtKc3ggSVA0Kv_GAjETdNb0mJQxrX306L1r5DDh--33Yn0E77B2r0iELABrk-8ww",serviceWorkerRegistration:e})??null}catch(n){return console.error("Failed to get FCM token",n),null}}async function l2(n){if(!await Jg())return;const t=XS(Ju);s2(t,n)}function u2(){const[n,e]=ge.useState(""),[t,r]=ge.useState(""),[o,a]=ge.useState(!1),[u,d]=ge.useState(""),[f,m]=ge.useState(!1),v=async E=>{E.preventDefault(),a(!0),d("");try{if(f){const S=await s1(Qa,n,t),x=Nn(ht,"staff",n);(await md(x)).exists()||await iV(x,{name:n.split("@")[0],role:"Waiter",status:"pending"}),d("Account created successfully! Please wait for manager approval.")}else await o1(Qa,n,t)}catch(S){S.code==="auth/user-not-found"&&!f?(d("Account not found. Would you like to register?"),m(!0)):d(S.message)}finally{a(!1)}};return pe.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4",children:pe.jsxs(Tk,{className:"w-full max-w-md p-8",children:[pe.jsxs("div",{className:"flex flex-col items-center mb-8",children:[pe.jsx("div",{className:"w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4",children:pe.jsx(xk,{className:"w-8 h-8 text-white"})}),pe.jsx("h1",{className:"text-blue-600",children:"BistroSync"}),pe.jsx("p",{className:"text-gray-600 mt-2",children:"Restaurant Management System"}),pe.jsx("p",{className:"text-sm text-gray-500 mt-1",children:f?"Create New Account":"Staff Login"})]}),pe.jsxs("form",{onSubmit:v,className:"space-y-4",children:[pe.jsxs("div",{children:[pe.jsx(Rv,{htmlFor:"email",children:"Email"}),pe.jsx(Av,{id:"email",type:"email",value:n,onChange:E=>e(E.target.value),placeholder:"Enter your email",required:!0,className:"mt-1"})]}),pe.jsxs("div",{children:[pe.jsx(Rv,{htmlFor:"password",children:"Password"}),pe.jsx(Av,{id:"password",type:"password",value:t,onChange:E=>r(E.target.value),placeholder:"Enter your password",required:!0,className:"mt-1"})]}),u&&pe.jsx("p",{className:"text-red-600 text-sm",children:u}),pe.jsx(yk,{type:"submit",className:"w-full bg-blue-600 hover:bg-blue-700",disabled:o,children:o?"Processing...":f?"Register":"Login"}),!f&&pe.jsx("button",{type:"button",onClick:()=>m(!0),className:"w-full mt-2 text-blue-600 hover:text-blue-800 text-sm",children:"Don't have an account? Register here"}),f&&pe.jsx("button",{type:"button",onClick:()=>{m(!1),d("")},className:"w-full mt-2 text-blue-600 hover:text-blue-800 text-sm",children:"Already have an account? Login here"})]}),pe.jsxs("div",{className:"mt-6 p-4 bg-gray-50 rounded text-gray-600 space-y-2",children:[pe.jsx("p",{className:"text-center mb-2 font-medium",children:"How it works:"}),pe.jsx("p",{children:"• Register with any email/password to create account"}),pe.jsx("p",{children:'• New accounts start with "Pending" status'}),pe.jsx("p",{children:"• Manager must approve accounts before use"})]})]})})}const c2={en:{dashboard:"Dashboard",menu:"Menu",inventory:"Inventory",staff:"Staff",logout:"Logout",pending:"Pending",history:"History",ready:"Ready",orders:"Orders",tables:"Tables",createOrder:"Create Order",generatingBill:"Generating bill",total:"Total",markAsPaid:"Mark as Paid",mobileBanking:"Mobile Banking",cash:"Cash",viewPaymentImage:"View Payment Image",order:"Order",table:"Table",orderReadyForPickup:"Ready for Pickup",offlineBanner:"Offline mode: changes will sync when you reconnect",backOnline:"Back online. Syncing...",offlineNotice:"You are offline. Some features are unavailable."},am:{dashboard:"ዳሽቦርድ",menu:"ሜኑ",inventory:"እቃ መጋጠሚያ",staff:"ሰራተኞች",logout:"መውጣት",pending:"ለማረጋገጥ",history:"ታሪክ",ready:"ዝግ",orders:"ትዕዛዞች",tables:"ጠረጴዛዎች",createOrder:"ትዕዛዝ ይፍጠሩ",generatingBill:"ቢል በመፍጠር ላይ",total:"ጠቅላላ",markAsPaid:"ክፍያ ተከፍሏል ይሉ",mobileBanking:"ሞባይል ባንክ ክፍያ",cash:"ጥሬ ገንዘብ",viewPaymentImage:"የክፍያ ምስል ይመልከቱ",order:"ትዕዛዝ",table:"ጠረጴዛ",orderReadyForPickup:"ለመውሰድ ዝግ ነው",offlineBanner:"ኦፍላይን ሁነታ፡ ለውጦች ሲገናኙ ይቀመጣሉ",backOnline:"መስመር ላይ ተመልሷል። በመስተካከል ላይ...",offlineNotice:"ኦፍላይን ነዎት። አንዳንድ ባህሪዎች አይገኙም።"}},JS="vrm_locale";function Om(){try{const n=localStorage.getItem(JS);if(n==="am"||n==="en")return n}catch{}return"en"}function h2(n){try{localStorage.setItem(JS,n)}catch{}}function P2(n,e=Om()){return c2[e][n]??n}async function Or(n){try{await Bh(Gn(ht,"activities"),{...n,timestamp:new Date})}catch(e){console.error("Error logging activity:",e)}}const d2=()=>{const[n,e]=ge.useState(null),[t,r]=ge.useState(null),[o,a]=ge.useState(null),[u,d]=ge.useState(!0);return ge.useEffect(()=>{const m=c1(Qa,async v=>{if(v)try{const E=Nn(ht,"staff",v.email);let S=await md(E);if(!S.exists())try{S=await rV(E)}catch{}if(S&&S.exists()){const x=S.data(),B={uid:v.uid,email:v.email,name:x.name||v.displayName||v.email?.split("@")[0]||"Unknown",role:x.role,status:x.status};a(B);try{localStorage.setItem("vrm_staff_"+v.email,JSON.stringify({role:x.role,status:x.status,name:B.name}))}catch{}if(x&&x.status==="approved"&&x.role)e(x.role.toLowerCase()),r("approved");else if(x&&x.status==="pending")r("pending"),e(null);else if(x&&x.role)e(x.role.toLowerCase()),r("approved");else{const q=localStorage.getItem("vrm_staff_"+v.email);if(q){const O=JSON.parse(q);e(O.role?.toLowerCase()??null),r(O.status??null)}else e(null)}}else{const x=localStorage.getItem("vrm_staff_"+v.email);if(x){const B=JSON.parse(x);a({uid:v.uid,email:v.email,name:B.name||v.displayName||v.email?.split("@")[0]||"Unknown",role:B.role,status:B.status}),e(B.role?.toLowerCase()??null),r(B.status??null)}else e(null)}}catch(E){console.error("Error fetching staff data:",E);const S=localStorage.getItem("vrm_staff_"+v.email);if(S){const x=JSON.parse(S);e(x.role?.toLowerCase()??null),r(x.status??null)}else e(null)}else e(null),r(null),a(null);d(!1)});return()=>m()},[]),{currentRole:n,userStatus:t,currentUser:o,authInitializing:u,logout:async()=>{await h1(Qa)}}},ZS=ge.createContext(null),f2=()=>{const n=ge.useContext(ZS);if(!n)throw new Error("useAuthContext must be used within an AuthProvider");return n},p2=({children:n})=>{const e=d2();return pe.jsx(ZS.Provider,{value:e,children:n})},m2=(n=50,e)=>{const[t,r]=ge.useState([]),[o,a]=ge.useState(!0),[u,d]=ge.useState(!0),[f,m]=ge.useState(null);ge.useEffect(()=>{let O=Lr(Gn(ht,"orders"),AE("createdAt","desc"));O=Lr(O,RE(n));const ne=qg(O,async re=>{a(!1);let te=[];re.forEach(he=>{const ue=he.data();te.push({id:he.id,...ue,createdAt:ue.createdAt?.toDate()||new Date})});const ce=te.filter(he=>!he.orderNumber);if(ce.length>0){const he={};ce.forEach(P=>{const k=new Date(P.createdAt.getFullYear(),P.createdAt.getMonth(),P.createdAt.getDate()).toISOString().split("T")[0];he[k]||(he[k]=[]),he[k].push(P)});const ue=[...te];for(const[P,T]of Object.entries(he)){T.sort((V,A)=>V.createdAt.getTime()-A.createdAt.getTime());const N=te.filter(V=>V.orderNumber?new Date(V.createdAt.getFullYear(),V.createdAt.getMonth(),V.createdAt.getDate()).toISOString().split("T")[0]===P:!1).map(V=>V.orderNumber).sort((V,A)=>V-A);let C=1;for(const V of T){for(;N.includes(C);)C++;const A=ue.findIndex(ze=>ze.id===V.id);A!==-1&&(ue[A]={...ue[A],orderNumber:C});try{await ar(Nn(ht,"orders",V.id),{orderNumber:C}),N.push(C)}catch(ze){console.error("Error updating order number:",ze)}C++}}te=ue}r(te),d(re.size===n),re.empty||m(re.docs[re.docs.length-1])});return()=>ne()},[n,e]);const v=ge.useCallback(async()=>{if(!(!u||!f)){a(!0);try{let O=Lr(Gn(ht,"orders"),AE("createdAt","desc"));O=Lr(O,RE(n));const ne=await ou(O),re=[];ne.forEach(te=>{const ce=te.data();re.push({id:te.id,...ce,createdAt:ce.createdAt?.toDate()||new Date})}),r(te=>[...te,...re]),d(ne.size===n),ne.empty||m(ne.docs[ne.docs.length-1])}catch(O){console.error("Error loading more orders:",O)}finally{a(!1)}}},[u,f,n,e]);ge.useEffect(()=>{const O=setInterval(()=>{r(ne=>ne.map(re=>({...re,timeElapsed:`${Math.floor((Date.now()-re.createdAt.getTime())/6e4)}m`})))},1e4);return()=>clearInterval(O)},[]);const E=ge.useMemo(()=>t.filter(O=>["pending","in-kitchen","at-bar","ready","picked"].includes(O.status)),[t]),S=ge.useMemo(()=>t.filter(O=>O.status==="paid"),[t]),x=ge.useMemo(()=>t.filter(O=>O.status==="ready"),[t]),B=ge.useMemo(()=>{const O={};return t.forEach(ne=>{O[ne.status]||(O[ne.status]=[]),O[ne.status].push(ne)}),O},[t]),q=ge.useMemo(()=>t.slice(0,10),[t]);return{orders:t,loading:o,hasMore:u,loadMore:v,activeOrders:E,pendingOrders:S,readyOrders:x,ordersByStatus:B,recentOrders:q}},g2=n=>{const[e,t]=ge.useState([]),[r,o]=ge.useState([]);return ge.useEffect(()=>{const u=Lr(Gn(ht,"inventory")),d=qg(u,f=>{const m=[];f.forEach(B=>{const q=B.data();m.push({id:B.id,name:q.name,quantity:q.quantity||0,threshold:q.threshold||10,unit:q.unit||"pieces"})}),t(m);const E=m.filter(B=>B.quantity<=B.threshold).map(B=>({id:`low_stock_${B.id}`,type:"low_stock",title:"Low Stock Alert",message:`${B.name}: Only ${B.quantity} ${B.unit} remaining (threshold: ${B.threshold})`,timestamp:new Date})),S=r.map(B=>B.id),x=E.filter(B=>!S.includes(B.id));x.length>0&&n==="manager"&&o(B=>[...B,...x])});return()=>d()},[n,r]),{inventoryItems:e,notifications:r,dismissNotification:u=>{o(r.filter(d=>d.id!==u))}}},y2=ge.lazy(()=>Lm(()=>import("./ManagerRoutes-BfUuieDj.js"),__vite__mapDeps([0,1,2,3])).then(n=>({default:n.ManagerRoutes}))),_2=ge.lazy(()=>Lm(()=>import("./WaiterRoutes-CElTqatN.js"),__vite__mapDeps([4,1,5,3])).then(n=>({default:n.WaiterRoutes}))),v2=ge.lazy(()=>Lm(()=>import("./StaffRoutes-CozfXlSg.js"),__vite__mapDeps([6,1,2,5])).then(n=>({default:n.StaffRoutes}))),w2=async()=>{"Notification"in window&&Notification.permission==="default"&&await Notification.requestPermission()};w2();const E2=()=>{const{currentRole:n,userStatus:e,currentUser:t,authInitializing:r,logout:o}=f2(),{orders:a,activeOrders:u,pendingOrders:d,readyOrders:f}=m2(100),{inventoryItems:m,notifications:v,dismissNotification:E}=g2(n),[S,x]=ge.useState("default"),[B,q]=ge.useState(null),[O,ne]=ge.useState([]),[re,te]=ge.useState(typeof navigator<"u"?navigator.onLine:!0),[ce,he]=ge.useState(null),ue=ge.useRef(!1),P=(H,G,Y)=>{const oe=H??"anon",Ee=G??"default",Fe=Y??"";return`#r=${oe}&s=${Ee}${Fe!==""?`&t=${Fe}`:""}`};ge.useEffect(()=>{try{const G={role:n,screen:S,table:B};window.history.replaceState(G,"",P(n,S,B))}catch{}const H=G=>{ue.current=!0;const Y=G.state;if(Y&&typeof Y=="object")typeof Y.screen=="string"&&x(Y.screen),(typeof Y.table=="number"||Y.table===null||typeof Y.table>"u")&&q(Y.table??null);else try{const oe=window.location.hash||"",Ee=new URLSearchParams(oe.replace(/^#/,"").split("&").join("&")),Fe=Ee.get("s")||"default",Le=Ee.get("t");x(Fe),q(Le?Number(Le):null)}catch{x("default"),q(null)}setTimeout(()=>{ue.current=!1},0)};return window.addEventListener("popstate",H),()=>window.removeEventListener("popstate",H)},[n,S,B]),ge.useEffect(()=>{if(!ue.current)try{const H={role:n,screen:S,table:B};window.history.pushState(H,"",P(n,S,B))}catch{}},[n,S,B]),ge.useEffect(()=>{const H=()=>{te(!0),he("Back online. Syncing..."),window.clearTimeout(H._t),H._t=window.setTimeout(()=>he(null),2500)},G=()=>{te(!1),he("You are offline. Some features are unavailable."),window.clearTimeout(G._t),G._t=window.setTimeout(()=>he(null),3e3)};return window.addEventListener("online",H),window.addEventListener("offline",G),()=>{window.removeEventListener("online",H),window.removeEventListener("offline",G)}},[]),ge.useEffect(()=>{const H=[{number:1,status:"available"},{number:2,status:"available"},{number:3,status:"available"},{number:4,status:"available"},{number:5,status:"available"},{number:6,status:"available"},{number:7,status:"available"},{number:8,status:"available"},{number:9,status:"available"},{number:10,status:"available"}];try{const G=Lr(Gn(ht,"tables")),Y=qg(G,oe=>{const Ee=[];oe.forEach(Fe=>{const Le=Fe.data();typeof Le.number=="number"&&Ee.push({number:Le.number,status:Le.status||"available"})}),ne(Ee.length>0?Ee:H)},oe=>{console.error("Realtime tables listener error:",oe),ne(H)});return()=>Y()}catch(G){console.error("Failed to start tables realtime listener:",G),ne(H)}},[]),ge.useEffect(()=>{if(O.length>0){const H=u.map(Y=>Y.tableNumber),G=O.map(Y=>{const oe=H.includes(Y.number)?"occupied":"available";return Y.status!==oe&&A(Y.number,oe),{...Y,status:oe}});ne(G)}},[u,O.length]);const T=H=>{he(H),window.clearTimeout(T._t),T._t=window.setTimeout(()=>he(null),3e3)},k=()=>re?null:pe.jsx("div",{className:"fixed top-0 inset-x-0 z-50 bg-orange-100 text-orange-800 text-sm py-2 text-center border-b border-orange-200",children:"Offline mode: changes will sync when you reconnect"}),N=()=>ce?pe.jsx("div",{className:"fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-black/80 text-white text-sm px-4 py-2 rounded-md shadow-md",children:ce}):null,C=()=>pe.jsx("button",{onClick:()=>window.location.reload(),"aria-label":"Refresh",className:"fixed bottom-20 right-4 bg-blue-600 text-white rounded-full p-3 shadow-lg",title:"Refresh",children:pe.jsx(bk,{className:"w-5 h-5"})}),V=()=>pe.jsx("button",{onClick:()=>{const H=Om()==="en"?"am":"en";h2(H),window.location.reload()},"aria-label":"Toggle Language",className:"fixed top-4 left-4 z-50 bg-yellow-400 text-black rounded px-3 py-2 border border-black shadow-none text-xs",title:"Toggle Language",children:Om()==="en"?"AM":"EN"}),A=async(H,G)=>{try{const Y=Lr(Gn(ht,"tables"),Zl("number","==",H)),oe=await ou(Y);if(!oe.empty){const Ee=oe.docs[0];await ar(Ee.ref,{status:G})}}catch(Y){console.error("Error updating table status in Firestore:",Y)}},ze=async H=>{const G=Lr(Gn(ht,"menu")),Y=await ou(G),oe=[];Y.forEach(Ye=>{const dt=Ye.data();oe.push({id:Ye.id,...dt})});const Ee={};m.forEach(Ye=>{Ee[Ye.id]=Ye.quantity});const Fe=[],Le={};for(const Ye of H){const dt=oe.find(Et=>Et.name===Ye.name);if(dt&&dt.inventoryRequirements)for(const Et of dt.inventoryRequirements){const un=Et.quantity*Ye.quantity;(Ee[Et.inventoryId]||0)<un?Fe.push(`${Ye.name} (insufficient ${Et.inventoryName})`):Le[Et.inventoryId]=(Le[Et.inventoryId]||0)+un}}return{unavailableItems:Fe,inventoryDeductions:Le}},st=async(H,G)=>{const Y=Object.entries(H).map(async([oe,Ee])=>{const Fe=Nn(ht,"inventory",oe),Le=await md(Fe);if(Le.exists()){const Ye=Le.data().quantity||0,dt=Math.max(0,Ye-Ee);await ar(Fe,{quantity:dt,lastUpdated:new Date}),await Bh(Gn(ht,"inventory_transactions"),{inventoryId:oe,inventoryName:Le.data().name,type:"deduction",quantity:Ee,previousQuantity:Ye,newQuantity:dt,orderId:G,timestamp:new Date}),await Or({role:"System",description:`Inventory deducted: ${Ee} units from ${Le.data().name}`,orderId:G})}});await Promise.all(Y)},it=async H=>{try{const G=Lr(Gn(ht,"inventory_transactions"),Zl("orderId","==",H),Zl("type","==","deduction")),oe=(await ou(G)).docs.map(async Ee=>{const Fe=Ee.data(),Le=Nn(ht,"inventory",Fe.inventoryId),Ye=await md(Le);if(Ye.exists()){const dt=Ye.data().quantity||0,Et=dt+Fe.quantity;await ar(Le,{quantity:Et,lastUpdated:new Date}),await Bh(Gn(ht,"inventory_transactions"),{inventoryId:Fe.inventoryId,inventoryName:Fe.inventoryName,type:"restoration",quantity:Fe.quantity,previousQuantity:dt,newQuantity:Et,orderId:H,timestamp:new Date})}});await Promise.all(oe),await Or({role:"System",description:"Inventory restored for cancelled order",orderId:H})}catch(G){console.error("Error restoring inventory:",G)}},Ge=async(H,G)=>{let Y=null,oe=null;try{re||T("Offline: New order will sync when you're back online");const{unavailableItems:Ee,inventoryDeductions:Fe}=await ze(G);if(Ee.length>0){alert(`Cannot place order. Unavailable items:
${Ee.join(`
`)}`);return}const Le=G.map(Ze=>({name:Ze.name,quantity:Ze.quantity,price:Ze.price,requiresButcher:Ze.category==="Food-Butcher",butcherReady:Ze.category!=="Food-Butcher",requiresBar:Ze.category==="Drinks",barReady:Ze.category!=="Drinks"})),Ye=Le.some(Ze=>Ze.requiresBar),dt=Le.some(Ze=>Ze.requiresButcher||!Ze.requiresButcher&&!Ze.requiresBar);let Et;Et=Ye&&!dt?"at-bar":"in-kitchen";const un=new Date,$t=new Date(un.getFullYear(),un.getMonth(),un.getDate()),Xn=new Date($t.getTime()+1440*60*1e3),It=Lr(Gn(ht,"orders"),Zl("createdAt",">=",$t),Zl("createdAt","<",Xn)),pn=(await ou(It)).docs.map(Ze=>Ze.data().orderNumber||0).filter(Ze=>Ze>0),Wr=pn.length>0?Math.max(...pn)+1:1;oe=Wr;const Ss=t?.name||"Unknown Waiter",Do={orderNumber:Wr,tableNumber:H,status:Et,waiterId:Qa.currentUser?.uid,waiterName:Ss,items:Le,timeElapsed:"0m",createdAt:new Date},Ln=await Bh(Gn(ht,"orders"),Do);Y=Ln.id;try{await st(Fe,Ln.id)}catch(Ze){console.warn("Inventory deduct failed (non-critical):",Ze)}try{await Or({role:"Waiter",description:`Order #${Wr} submitted for Table ${H} (${Et==="at-bar"?"Bar":"Kitchen"})`,orderId:Ln.id,tableNumber:H})}catch(Ze){console.warn("Activity log failed (non-critical):",Ze)}if(q(null),x("my-orders"),H>0){const Ze=O.map(gr=>gr.number===H?{...gr,status:"occupied"}:gr);ne(Ze),A(H,"occupied")}}catch(Ee){console.error("Error submitting order:",Ee),Y?T("Order created. Some background steps will sync later."):alert("Failed to submit order. Please try again.")}},W=async(H,G)=>{try{re||T("Offline: Mark as paid will sync when you're back online");const Y=a.find(oe=>oe.id===H);if(await ar(Nn(ht,"orders",H),{status:"paid",paymentMethod:G,updatedAt:new Date}),Y&&(await Or({role:"Waiter",description:`Order marked as paid - ${G}`,orderId:H,tableNumber:Y.tableNumber}),Y.tableNumber>0)){const oe=O.map(Ee=>Ee.number===Y.tableNumber?{...Ee,status:"available"}:Ee);ne(oe),A(Y.tableNumber,"available")}}catch(Y){console.error("Error marking order as paid:",Y)}},Ae=async(H,G)=>{try{re||T("Offline: Payment submission will sync when you're back online");const Y=a.find($t=>$t.id===H);if(!Y){alert("Order not found.");return}if(!G.type.startsWith("image/")){alert("Please select a valid image file.");return}if(G.size>10*1024*1024){alert("Image file is too large. Please select an image smaller than 10MB.");return}const oe="dwqgypyim",Ee="ml_default",Fe="payment-proofs",Le=new FormData;Le.append("file",G),Le.append("upload_preset",Ee),Le.append("folder",Fe);const Ye=await fetch(`https://api.cloudinary.com/v1_1/${oe}/image/upload`,{method:"POST",body:Le});if(!Ye.ok){const $t=await Ye.text().catch(()=>"");throw new Error(`Cloudinary upload failed (${Ye.status}): ${$t}`)}const dt=await Ye.json(),Et=dt.secure_url||dt.url,un=dt.public_id;if(!Et)throw new Error("Cloudinary response missing secure_url");if(await ar(Nn(ht,"orders",H),{status:"paid",paymentMethod:"mobile",paymentImageUrl:Et,paymentImageName:un||null,paymentSubmittedAt:new Date,paymentStatus:"pending_approval",updatedAt:new Date}),await Or({role:"Waiter",description:"Mobile banking payment submitted for approval (Cloudinary)",orderId:H,tableNumber:Y.tableNumber}),Y.tableNumber>0){const $t=O.map(Xn=>Xn.number===Y.tableNumber?{...Xn,status:"available"}:Xn);ne($t),A(Y.tableNumber,"available")}alert("Payment proof submitted successfully! Waiting for cashier approval.")}catch(Y){console.error("Error processing mobile banking payment (Cloudinary):",Y),alert(`Failed to submit payment: ${Y?.message||"Unknown error"}`)}},de=async H=>{try{re||T("Offline: Payment confirmation will sync when you're back online"),await ar(Nn(ht,"orders",H),{status:"confirmed"});const G=a.find(oe=>oe.id===H);if(G){const oe=G.items.reduce((Fe,Le)=>Fe+Le.price*Le.quantity,0),Ee=G.items.reduce((Fe,Le)=>Fe+Le.quantity,0);await Or({role:"Cashier",description:`Payment confirmed - Order #${G.orderNumber||H}, Table ${G.tableNumber}, $${oe.toFixed(2)} (${G.paymentMethod}), ${Ee} items`,orderId:H,tableNumber:G.tableNumber})}const Y=a.find(oe=>oe.id===H);if(Y&&Y.tableNumber>0){const oe=O.map(Ee=>Ee.number===Y.tableNumber?{...Ee,status:"available"}:Ee);ne(oe),A(Y.tableNumber,"available")}}catch(G){console.error("Error confirming payment:",G)}},M=async H=>{try{re||T("Offline: Approval will sync when you're back online"),await ar(Nn(ht,"orders",H),{paymentStatus:"approved",status:"confirmed"});const G=a.find(oe=>oe.id===H);if(G){const oe=G.items.reduce((Ee,Fe)=>Ee+Fe.price*Fe.quantity,0);await Or({role:"Cashier",description:`Mobile banking payment approved - Order #${G.orderNumber||H}, Table ${G.tableNumber}, $${oe.toFixed(2)}`,orderId:H,tableNumber:G.tableNumber})}const Y=a.find(oe=>oe.id===H);if(Y&&Y.tableNumber>0){const oe=O.map(Ee=>Ee.number===Y.tableNumber?{...Ee,status:"available"}:Ee);ne(oe),A(Y.tableNumber,"available")}}catch(G){console.error("Error approving mobile payment:",G)}},Q=async H=>{try{re||T("Offline: Rejection will sync when you're back online"),await ar(Nn(ht,"orders",H),{paymentStatus:"rejected",status:"ready"});const G=a.find(Y=>Y.id===H);G&&await Or({role:"Cashier",description:`Mobile banking payment rejected - Order #${G.orderNumber||H}, Table ${G.tableNumber}`,orderId:H,tableNumber:G.tableNumber})}catch(G){console.error("Error rejecting mobile payment:",G)}},Te=async H=>{try{re||T("Offline: Pickup will sync when you're back online"),await ar(Nn(ht,"orders",H),{status:"picked"});const G=a.find(Y=>Y.id===H);G&&await Or({role:"Waiter",description:`Order picked up from Table ${G.tableNumber}`,orderId:H,tableNumber:G.tableNumber})}catch(G){console.error("Error picking up order:",G)}},Re=async H=>{try{re||T("Offline: Cancel order will sync when you're back online");const G=a.find(Y=>Y.id===H);if(!G||!confirm(`Are you sure you want to cancel order for Table ${G.tableNumber}?`))return;if(await it(H),await ar(Nn(ht,"orders",H),{status:"cancelled"}),G.tableNumber>0){const Y=O.map(oe=>oe.number===G.tableNumber?{...oe,status:"available"}:oe);ne(Y),A(G.tableNumber,"available")}await Or({role:"Waiter",description:`Order cancelled for Table ${G.tableNumber}`,orderId:H,tableNumber:G.tableNumber})}catch(G){console.error("Error cancelling order:",G),alert("Failed to cancel order. Please try again.")}};if(r)return pe.jsxs("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:[pe.jsx(V,{}),pe.jsxs("div",{className:"flex flex-col items-center gap-4",children:[pe.jsx("img",{src:"/icons/icon-192.png",alt:"VRM",width:"72",height:"72"}),pe.jsx("div",{className:"animate-spin h-6 w-6 rounded-full border-2 border-gray-300 border-t-blue-600"})]})]});if(e==="pending")return pe.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4",children:[pe.jsx(V,{}),pe.jsxs("div",{className:"bg-white p-8 rounded-lg shadow-md text-center",children:[pe.jsx("h1",{className:"text-2xl font-bold text-gray-800 mb-4",children:"Account Pending Approval"}),pe.jsx("p",{className:"text-gray-600 mb-4",children:"Your registration is being reviewed by a manager. Please wait for approval to access the system."}),pe.jsx("button",{onClick:o,className:"bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700",children:"Logout"})]})]});if(!n)return pe.jsx(u2,{});const Me=()=>pe.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:pe.jsxs("div",{className:"flex flex-col items-center gap-4",children:[pe.jsx("img",{src:"/icons/icon-192.png",alt:"VRM",width:"72",height:"72"}),pe.jsx("div",{className:"animate-spin h-6 w-6 rounded-full border-2 border-gray-300 border-t-blue-600"}),pe.jsx("p",{className:"text-gray-600",children:"Loading..."})]})});return pe.jsxs(pe.Fragment,{children:[pe.jsx(k,{}),pe.jsx(C,{}),pe.jsx(V,{}),pe.jsx(N,{}),pe.jsxs(ge.Suspense,{fallback:pe.jsx(Me,{}),children:[n==="manager"&&pe.jsx(y2,{currentScreen:S,setCurrentScreen:x,notifications:v,handleDismissNotification:E,isOnline:re,orders:a,handleLogout:o,t:H=>H}),n==="waiter"&&pe.jsx(_2,{selectedTable:B,setSelectedTable:q,currentScreen:S,setCurrentScreen:x,orders:a,readyOrders:f,handleMarkAsPaid:W,handlePickUp:Te,handleCancelOrder:Re,handleMobileBankingPayment:Ae,handleSubmitOrder:Ge,t:H=>H,handleLogout:o}),(n==="cashier"||n==="butcher"||n==="kitchen"||n==="bar")&&pe.jsx(v2,{role:n,orders:a,pendingOrders:d,currentScreen:S,setCurrentScreen:x,onConfirmPayment:de,onApproveMobilePayment:M,onRejectMobilePayment:Q,onLogout:o,t:H=>H})]})]})};function I2(){return pe.jsx(p2,{children:pe.jsx(E2,{})})}"serviceWorker"in navigator&&navigator.serviceWorker.register("/sw.js").then(n=>{console.log("Service worker registered:",n)});a2().then(n=>{n?console.log("FCM token:",n):console.warn("Failed to get FCM token")});l2(n=>{console.log("Foreground message received:",n)});pR.createRoot(document.getElementById("root")).render(pe.jsx(I2,{}));export{_R as A,yk as B,Tk as C,A2 as D,kR as E,Av as I,Rv as L,yR as R,ER as S,xk as U,T2 as a,QE as b,cI as c,Gn as d,qg as e,ht as f,$E as g,Nn as h,Bh as i,pe as j,k2 as k,RE as l,S2 as m,vd as n,AE as o,Om as p,Lr as q,ge as r,iV as s,P2 as t,ar as u,bk as v,Zl as w,Or as x,_k as y,KE as z};
