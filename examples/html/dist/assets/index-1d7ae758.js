import{f as a,e as C,n as p}from"./index-c3a5c559.js";import{t as S}from"./tslib-795b6beb.js";const x="PARSE_ERROR",D="INVALID_REQUEST",M="METHOD_NOT_FOUND",N="INVALID_PARAMS",b="INTERNAL_ERROR",f="SERVER_ERROR",j=[-32700,-32600,-32601,-32602,-32603],u={[x]:{code:-32700,message:"Parse error"},[D]:{code:-32600,message:"Invalid Request"},[M]:{code:-32601,message:"Method not found"},[N]:{code:-32602,message:"Invalid params"},[b]:{code:-32603,message:"Internal error"},[f]:{code:-32e3,message:"Server error"}},O=f;function I(t){return j.includes(t)}function l(t){return Object.keys(u).includes(t)?u[t]:u[O]}function U(t){const e=Object.values(u).find(n=>n.code===t);return e||u[O]}function J(t,e,n){return t.message.includes("getaddrinfo ENOTFOUND")||t.message.includes("connect ECONNREFUSED")?new Error(`Unavailable ${n} RPC url at ${e}`):t}var H={},i={},v;function B(){if(v)return i;v=1,Object.defineProperty(i,"__esModule",{value:!0}),i.isBrowserCryptoAvailable=i.getSubtleCrypto=i.getBrowerCrypto=void 0;function t(){return(a===null||a===void 0?void 0:a.crypto)||(a===null||a===void 0?void 0:a.msCrypto)||{}}i.getBrowerCrypto=t;function e(){const s=t();return s.subtle||s.webkitSubtle}i.getSubtleCrypto=e;function n(){return!!t()&&!!e()}return i.isBrowserCryptoAvailable=n,i}var c={},E;function q(){if(E)return c;E=1,Object.defineProperty(c,"__esModule",{value:!0}),c.isBrowser=c.isNode=c.isReactNative=void 0;function t(){return typeof document>"u"&&typeof navigator<"u"&&navigator.product==="ReactNative"}c.isReactNative=t;function e(){return typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u"}c.isNode=e;function n(){return!t()&&!e()}return c.isBrowser=n,c}(function(t){Object.defineProperty(t,"__esModule",{value:!0});const e=S;e.__exportStar(B(),t),e.__exportStar(q(),t)})(H);function V(){const t=Date.now()*Math.pow(10,3),e=Math.floor(Math.random()*Math.pow(10,3));return t+e}function $(t,e,n){return{id:n||V(),jsonrpc:"2.0",method:t,params:e}}function ae(t,e){return{id:t,jsonrpc:"2.0",result:e}}function G(t,e,n){return{id:t,jsonrpc:"2.0",error:X(e,n)}}function X(t,e){return typeof t>"u"?l(b):(typeof t=="string"&&(t=Object.assign(Object.assign({},l(f)),{message:t})),typeof e<"u"&&(t.data=e),I(t.code)&&(t=U(t.code)),t)}class T{}class ue extends T{constructor(e){super()}}class k extends T{constructor(){super()}}class Q extends k{constructor(e){super()}}const W="^https?:",z="^wss?:";function K(t){const e=t.match(new RegExp(/^\w+:/,"gi"));if(!(!e||!e.length))return e[0]}function A(t,e){const n=K(t);return typeof n>"u"?!1:new RegExp(e).test(n)}function g(t){return A(t,W)}function he(t){return A(t,z)}function fe(t){return new RegExp("wss?://localhost(:d{2,5})?").test(t)}function P(t){return typeof t=="object"&&"id"in t&&"jsonrpc"in t&&t.jsonrpc==="2.0"}function de(t){return P(t)&&"method"in t}function Y(t){return P(t)&&(Z(t)||L(t))}function Z(t){return"result"in t}function L(t){return"error"in t}class pe extends Q{constructor(e){super(e),this.events=new C.EventEmitter,this.hasRegisteredEventListeners=!1,this.connection=this.setConnection(e),this.connection.connected&&this.registerEventListeners()}async connect(e=this.connection){await this.open(e)}async disconnect(){await this.close()}on(e,n){this.events.on(e,n)}once(e,n){this.events.once(e,n)}off(e,n){this.events.off(e,n)}removeListener(e,n){this.events.removeListener(e,n)}async request(e,n){return this.requestStrict($(e.method,e.params||[]),n)}async requestStrict(e,n){return new Promise(async(s,o)=>{if(!this.connection.connected)try{await this.open()}catch(r){o(r)}this.events.on(`${e.id}`,r=>{L(r)?o(r.error):s(r.result)});try{await this.connection.send(e,n)}catch(r){o(r)}})}setConnection(e=this.connection){return e}onPayload(e){this.events.emit("payload",e),Y(e)?this.events.emit(`${e.id}`,e):this.events.emit("message",{type:e.method,data:e.params})}async open(e=this.connection){this.connection===e&&this.connection.connected||(this.connection.connected&&this.close(),typeof e=="string"&&(await this.connection.open(e),e=this.connection),this.connection=this.setConnection(e),await this.connection.open(),this.registerEventListeners(),this.events.emit("connect"))}async close(){await this.connection.close()}registerEventListeners(){this.hasRegisteredEventListeners||(this.connection.on("payload",e=>this.onPayload(e)),this.connection.on("close",()=>this.events.emit("disconnect")),this.connection.on("error",e=>this.events.emit("error",e)),this.hasRegisteredEventListeners=!0)}}function ee(t){if(typeof t!="string")throw new Error(`Cannot safe json parse value of type ${typeof t}`);try{return JSON.parse(t)}catch{return t}}function R(t){return typeof t=="string"?t:JSON.stringify(t)}const te={Accept:"application/json","Content-Type":"application/json"},ne="POST",y={headers:te,method:ne},m=10;class le{constructor(e){if(this.url=e,this.events=new C.EventEmitter,this.isAvailable=!1,this.registering=!1,!g(e))throw new Error(`Provided URL is not compatible with HTTP connection: ${e}`);this.url=e}get connected(){return this.isAvailable}get connecting(){return this.registering}on(e,n){this.events.on(e,n)}once(e,n){this.events.once(e,n)}off(e,n){this.events.off(e,n)}removeListener(e,n){this.events.removeListener(e,n)}async open(e=this.url){await this.register(e)}async close(){if(!this.isAvailable)throw new Error("Connection already closed");this.onClose()}async send(e,n){this.isAvailable||await this.register();try{const s=R(e),r=await(await p(this.url,Object.assign(Object.assign({},y),{body:s}))).json();this.onPayload({data:r})}catch(s){this.onError(e.id,s)}}async register(e=this.url){if(!g(e))throw new Error(`Provided URL is not compatible with HTTP connection: ${e}`);if(this.registering){const n=this.events.getMaxListeners();return(this.events.listenerCount("register_error")>=n||this.events.listenerCount("open")>=n)&&this.events.setMaxListeners(n+1),new Promise((s,o)=>{this.events.once("register_error",r=>{this.resetMaxListeners(),o(r)}),this.events.once("open",()=>{if(this.resetMaxListeners(),typeof this.isAvailable>"u")return o(new Error("HTTP connection is missing or invalid"));s()})})}this.url=e,this.registering=!0;try{const n=R({id:1,jsonrpc:"2.0",method:"test",params:[]});await p(e,Object.assign(Object.assign({},y),{body:n})),this.onOpen()}catch(n){const s=this.parseError(n);throw this.events.emit("register_error",s),this.onClose(),s}}onOpen(){this.isAvailable=!0,this.registering=!1,this.events.emit("open")}onClose(){this.isAvailable=!1,this.registering=!1,this.events.emit("close")}onPayload(e){if(typeof e.data>"u")return;const n=typeof e.data=="string"?ee(e.data):e.data;this.events.emit("payload",n)}onError(e,n){const s=this.parseError(n),o=s.message||s.toString(),r=G(e,o);this.events.emit("payload",r)}parseError(e,n=this.url){return J(e,n,"HTTP")}resetMaxListeners(){this.events.getMaxListeners()>m&&this.events.setMaxListeners(m)}}var ve=t=>encodeURIComponent(t).replace(/[!'()*]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`),F="%[a-f0-9]{2}",w=new RegExp("("+F+")|([^%]+?)","gi"),_=new RegExp("("+F+")+","gi");function h(t,e){try{return[decodeURIComponent(t.join(""))]}catch{}if(t.length===1)return t;e=e||1;var n=t.slice(0,e),s=t.slice(e);return Array.prototype.concat.call([],h(n),h(s))}function se(t){try{return decodeURIComponent(t)}catch{for(var e=t.match(w)||[],n=1;n<e.length;n++)t=h(e,n).join(""),e=t.match(w)||[];return t}}function re(t){for(var e={"%FE%FF":"��","%FF%FE":"��"},n=_.exec(t);n;){try{e[n[0]]=decodeURIComponent(n[0])}catch{var s=se(n[0]);s!==n[0]&&(e[n[0]]=s)}n=_.exec(t)}e["%C2"]="�";for(var o=Object.keys(e),r=0;r<o.length;r++){var d=o[r];t=t.replace(new RegExp(d,"g"),e[d])}return t}var Ee=function(t){if(typeof t!="string")throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch{return re(t)}},ge=(t,e)=>{if(!(typeof t=="string"&&typeof e=="string"))throw new TypeError("Expected the arguments to be of type `string`");if(e==="")return[t];const n=t.indexOf(e);return n===-1?[t]:[t.slice(0,n),t.slice(n+e.length)]};export{le as H,ue as I,pe as J,ve as a,R as b,H as c,Ee as d,fe as e,G as f,ee as g,J as h,he as i,de as j,ae as k,Z as l,L as m,Y as n,$ as o,V as p,ge as s};
