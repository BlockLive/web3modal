import{ModalCtrl as r,ConfigCtrl as n,OptionsCtrl as l}from"@web3modal/core";var s=Object.defineProperty,a=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,i=(o,e,t)=>e in o?s(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,b=(o,e)=>{for(var t in e||(e={}))c.call(e,t)&&i(o,t,e[t]);if(a)for(var t of a(e))d.call(e,t)&&i(o,t,e[t]);return o};class f{constructor(e){this.openModal=r.open,this.closeModal=r.close,this.subscribeModal=r.subscribe,this.setTheme=n.setThemeConfig,n.setConfig(b({enableStandaloneMode:!0},e)),this.initUi()}async initUi(){if(typeof window<"u"){await import("@web3modal/ui");const e=document.createElement("w3m-modal");document.body.insertAdjacentElement("beforeend",e),l.setIsUiLoaded(!0)}}}export{f as Web3Modal};
//# sourceMappingURL=index.js.map
