"use strict";var F=Object.defineProperty;var m=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var f=(e,t,n)=>t in e?F(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))T.call(t,n)&&f(e,n,t[n]);if(m)for(var n of m(t))q.call(t,n)&&f(e,n,t[n]);return e};var D=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)};var p=(e,t,n)=>(D(e,t,"read from private field"),n?n.call(e):t.get(e)),h=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)},g=(e,t,n,r)=>(D(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n);Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const S=require("../.Chunks/e2c2858e.js"),k=require("@wordpress/data"),x=require("@wordpress/compose"),d=require("react/jsx-runtime");require("react");const w=require("@wordpress/hooks"),P=require("@wordpress/i18n"),W=require("@wordpress/blocks"),_=require("@wordpress/block-editor"),b=e=>({namespacedWithDispatch:r=>k.withDispatch((i,s,{select:a})=>{const o=i(e),M=a(e);return r(o,M)}),namespacedWithSelect:r=>k.withSelect((i,s,a)=>{const o=i(e);return r(o,s,a)})}),H=(e,t,n)=>{const{namespacedWithDispatch:r,namespacedWithSelect:i}=b(e);let s=o=>o;t&&(s=i(t));let a=o=>o;return n&&(a=r(n)),x.compose(s,a)};var c;class v{constructor(){h(this,c,!1)}isInitialized(){return p(this,c)}_initLogic(){throw new Error("initLogic function is not implemented at extended class")}init(){this.isInitialized()||(this._initLogic.call(this,...arguments),g(this,c,!0))}}c=new WeakMap;var l;class L extends v{constructor(){super(...arguments);h(this,l,null)}_initLogic(n){const r=self||global;g(this,l,r[n]||{}),r[n]=void 0}getDataProperty(n,r=null){return p(this,l)[n]||r}}l=new WeakMap;const z=new L,y={filters:{ADD_SUB_COMPONENT:"subComponentAdd"}};function B(){const e="ub",t={FILTER:"filter",ACTION:"action"};this.hookTypes=y;const n=(r,i)=>`${e}.${i}.${r}`;this.applyFilters=(r,i)=>w.applyFilters(n(r,t.FILTER),i),this.addFilter=(r,i,s)=>{w.addFilter(n(r,t.FILTER),i,s)}}const I=new B,E=e=>t=>d.jsx(e,u(u({},t),I));function N({clientId:e}){function t(){return`ub-preview-provider_${e}`}return d.jsx("div",{className:"ub-preview-provider",id:t(),children:d.jsx(_.InnerBlocks,{})})}const j=()=>{W.registerBlockType("ub/preview-provider",{title:P.__("only for UB internal use","ultimate-blocks"),attributes:{},category:"ultimateblocks",supports:{inserter:!1,reusable:!1},edit:e=>d.jsx(N,u({},e)),save:()=>null})};exports.Debouncer=S.Debouncer;exports.IconSizeDefinition=S.IconSizeDefinition;exports.FrontendDataManager=z;exports.HookManager=I;exports.ManagerBase=v;exports.connectWithStore=H;exports.createNamespacedHelpers=b;exports.hookTypes=y;exports.registerPreviewManager=j;exports.withHookManager=E;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmMvanMvU3RvcmVIZWxwZXJzLmpzIiwiLi4vLi4vc3JjL2luYy9qcy9iYXNlL01hbmFnZXJCYXNlLmpzIiwiLi4vLi4vc3JjL2luYy9qcy9Gcm9udGVuZERhdGFNYW5hZ2VyLmpzIiwiLi4vLi4vc3JjL2luYy9qcy9Ib29rTWFuYWdlci5qc3giLCIuLi8uLi9zcmMvaW5jL2pzL2NvbXBvbmVudHMvUHJldmlld1Byb3ZpZGVyL1ByZXZpZXdQcm92aWRlci5qc3giLCIuLi8uLi9zcmMvaW5jL2pzL3JlZ2lzdGVyUHJldmlld01hbmFnZXIuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdpdGhEaXNwYXRjaCwgd2l0aFNlbGVjdCB9IGZyb20gJ0B3b3JkcHJlc3MvZGF0YSc7XG5pbXBvcnQgeyBjb21wb3NlIH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb3NlJztcblxuLyoqXG4gKiBDcmVhdGUgbmFtZXNwYWNlZCBzdG9yZSBoZWxwZXJzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdG9yZU5hbWVzcGFjZSBzdG9yZSBuYW1lc3BhY2VcbiAqIEByZXR1cm4ge09iamVjdH0gbmFtZXNwYWNlZCBoZWxwZXJzXG4gKi9cbmV4cG9ydCBjb25zdCBjcmVhdGVOYW1lc3BhY2VkSGVscGVycyA9IChzdG9yZU5hbWVzcGFjZSkgPT4ge1xuXHRjb25zdCBuYW1lc3BhY2VkV2l0aERpc3BhdGNoID0gKGNhbGxiYWNrKSA9PiB7XG5cdFx0cmV0dXJuIHdpdGhEaXNwYXRjaCgoZGlzcGF0Y2gsIG93blByb3BzLCB7IHNlbGVjdCB9KSA9PiB7XG5cdFx0XHRjb25zdCBuYW1lc3BhY2VkRGlzcGF0Y2ggPSBkaXNwYXRjaChzdG9yZU5hbWVzcGFjZSk7XG5cdFx0XHRjb25zdCBuYW1lc3BhY2VkU2VsZWN0ID0gc2VsZWN0KHN0b3JlTmFtZXNwYWNlKTtcblx0XHRcdHJldHVybiBjYWxsYmFjayhuYW1lc3BhY2VkRGlzcGF0Y2gsIG5hbWVzcGFjZWRTZWxlY3QpO1xuXHRcdH0pO1xuXHR9O1xuXG5cdGNvbnN0IG5hbWVzcGFjZWRXaXRoU2VsZWN0ID0gKGNhbGxiYWNrKSA9PiB7XG5cdFx0cmV0dXJuIHdpdGhTZWxlY3QoKHNlbGVjdCwgb3duUHJvcHMsIHJlZ2lzdHJ5KSA9PiB7XG5cdFx0XHRjb25zdCBuYW1lc3BhY2VkU2VsZWN0ID0gc2VsZWN0KHN0b3JlTmFtZXNwYWNlKTtcblx0XHRcdHJldHVybiBjYWxsYmFjayhuYW1lc3BhY2VkU2VsZWN0LCBvd25Qcm9wcywgcmVnaXN0cnkpO1xuXHRcdH0pO1xuXHR9O1xuXG5cdHJldHVybiB7IG5hbWVzcGFjZWRXaXRoRGlzcGF0Y2gsIG5hbWVzcGFjZWRXaXRoU2VsZWN0IH07XG59O1xuXG4vKipcbiAqIEhPQyBmb3IgY29ubmVjdGluZyBjb21wb25lbnRzIHdpdGggR3V0ZW5iZXJnIGRhdGEgc3RvcmVzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSAgIHN0b3JlTmFtZXNwYWNlIHN0b3JlIG5hbWVzcGFjZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gc2VsZWN0TWFwcGluZyAgc2VsZWN0IG1hcHBpbmdcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGFjdGlvbk1hcHBpbmcgIGFjdGlvbiBtYXBwaW5nXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gY29tcG9zZWQgSE9DIGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBjb25uZWN0V2l0aFN0b3JlID0gKFxuXHRzdG9yZU5hbWVzcGFjZSxcblx0c2VsZWN0TWFwcGluZyxcblx0YWN0aW9uTWFwcGluZ1xuKSA9PiB7XG5cdC8vIGdlbmVyYXRlIG5hbWVzcGFjZWQgaGVscGVycyBmb3IgcmVsYXRlZCBzdG9yZVxuXHRjb25zdCB7IG5hbWVzcGFjZWRXaXRoRGlzcGF0Y2gsIG5hbWVzcGFjZWRXaXRoU2VsZWN0IH0gPVxuXHRcdGNyZWF0ZU5hbWVzcGFjZWRIZWxwZXJzKHN0b3JlTmFtZXNwYWNlKTtcblxuXHRsZXQgYXBwbHlTZWxlY3QgPSAocHJvcHMpID0+IHByb3BzO1xuXHRpZiAoc2VsZWN0TWFwcGluZykge1xuXHRcdGFwcGx5U2VsZWN0ID0gbmFtZXNwYWNlZFdpdGhTZWxlY3Qoc2VsZWN0TWFwcGluZyk7XG5cdH1cblxuXHRsZXQgYXBwbHlBY3Rpb24gPSAocHJvcHMpID0+IHByb3BzO1xuXHRpZiAoYWN0aW9uTWFwcGluZykge1xuXHRcdGFwcGx5QWN0aW9uID0gbmFtZXNwYWNlZFdpdGhEaXNwYXRjaChhY3Rpb25NYXBwaW5nKTtcblx0fVxuXG5cdHJldHVybiBjb21wb3NlKGFwcGx5U2VsZWN0LCBhcHBseUFjdGlvbik7XG59O1xuIiwiLyoqXG4gKiBNYW5hZ2VyIGJhc2UgYWJzdHJhY3QgY2xhc3MuXG4gKlxuICogSW1wbGVtZW50IGBpbml0TG9naWNgIGZ1bmN0aW9uIHRvIGNvbXBseS5cbiAqL1xuY2xhc3MgTWFuYWdlckJhc2Uge1xuXHQvKipcblx0ICogSW5pdGlhbGl6YXRpb24gc3RhdHVzIG9mIG1hbmFnZXIuXG5cdCAqXG5cdCAqIEBwcml2YXRlXG5cdCAqIEB0eXBlIHtib29sZWFufVxuXHQgKi9cblx0I2luaXRpYWxpemVkID0gZmFsc2U7XG5cblx0LyoqXG5cdCAqIEdldCBpbml0aWFsaXphdGlvbiBzdGF0dXMgb2YgbWFuYWdlci5cblx0ICpcblx0ICogQHJldHVybiB7Ym9vbGVhbn0gaW5pdGlhbGl6YXRpb24gc3RhdHVzXG5cdCAqL1xuXHRpc0luaXRpYWxpemVkKCkge1xuXHRcdHJldHVybiB0aGlzLiNpbml0aWFsaXplZDtcblx0fVxuXG5cdC8qKlxuXHQgKiBJbml0aWFsaXphdGlvbiBsb2dpYy5cblx0ICpcblx0ICogQGFic3RyYWN0XG5cdCAqL1xuXHRfaW5pdExvZ2ljKCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcblx0XHRcdCdpbml0TG9naWMgZnVuY3Rpb24gaXMgbm90IGltcGxlbWVudGVkIGF0IGV4dGVuZGVkIGNsYXNzJ1xuXHRcdCk7XG5cdH1cblxuXHQvKipcblx0ICogSW5pdGlhbGl6ZSBtYW5hZ2VyIGluc3RhbmNlLlxuXHQgKi9cblx0aW5pdCgpIHtcblx0XHRpZiAoIXRoaXMuaXNJbml0aWFsaXplZCgpKSB7XG5cdFx0XHR0aGlzLl9pbml0TG9naWMuY2FsbCh0aGlzLCAuLi5hcmd1bWVudHMpO1xuXHRcdFx0dGhpcy4jaW5pdGlhbGl6ZWQgPSB0cnVlO1xuXHRcdH1cblx0fVxufVxuXG4vKipcbiAqIEBtb2R1bGUgTWFuYWdlckJhc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgTWFuYWdlckJhc2U7XG4iLCJpbXBvcnQgTWFuYWdlckJhc2UgZnJvbSAnQEluYy9qcy9iYXNlL01hbmFnZXJCYXNlJztcblxuLyoqXG4gKiBGcm9udGVuZCBkYXRhIG1hbmFnZXIuXG4gKi9cbmNsYXNzIEZyb250ZW5kRGF0YU1hbmFnZXIgZXh0ZW5kcyBNYW5hZ2VyQmFzZSB7XG5cdC8qKlxuXHQgKiBTZXJ2ZXIgc2VudCBkYXRhIGZvciBmcm9udGVuZCBvcGVyYXRpb25zLlxuXHQgKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAdHlwZSB7bnVsbH1cblx0ICovXG5cdCNmcm9udGVuZERhdGEgPSBudWxsO1xuXG5cdC8qKlxuXHQgKiBJbml0aWFsaXphdGlvbiBsb2dpYyBmb3IgbWFuYWdlclxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gZ2xvYmFsT2JqZWN0S2V5IG5hbWUgb2YgdGhlIGtleSB3aGVyZSBzZXJ2ZXIgc2VudCBkYXRhIGlzIHN0b3JlZCBhdCBnbG9iYWwgY29udGV4dFxuXHQgKi9cblx0X2luaXRMb2dpYyhnbG9iYWxPYmplY3RLZXkpIHtcblx0XHRjb25zdCBjb250ZXh0ID0gc2VsZiB8fCBnbG9iYWw7XG5cdFx0dGhpcy4jZnJvbnRlbmREYXRhID0gY29udGV4dFtnbG9iYWxPYmplY3RLZXldIHx8IHt9O1xuXHRcdGNvbnRleHRbZ2xvYmFsT2JqZWN0S2V5XSA9IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgZGF0YSB2YWx1ZSBvZiBoaWdoIGxldmVsIGtleS5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IGtleSAgICAgICAga2V5XG5cdCAqIEBwYXJhbSB7YW55fSAgICBkZWZhdWx0VmFsIGRlZmF1bHQgdmFsdWVcblx0ICogQHJldHVybiB7YW55fSB2YWx1ZVxuXHQgKi9cblx0Z2V0RGF0YVByb3BlcnR5KGtleSwgZGVmYXVsdFZhbCA9IG51bGwpIHtcblx0XHRyZXR1cm4gdGhpcy4jZnJvbnRlbmREYXRhW2tleV0gfHwgZGVmYXVsdFZhbDtcblx0fVxufVxuXG4vKipcbiAqIEBtb2R1bGUgRnJvbnRlbmREYXRhTWFuYWdlclxuICovXG5leHBvcnQgZGVmYXVsdCBuZXcgRnJvbnRlbmREYXRhTWFuYWdlcigpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGFwcGx5RmlsdGVycywgYWRkRmlsdGVyIH0gZnJvbSAnQHdvcmRwcmVzcy9ob29rcyc7XG5cbi8qKlxuICogQ29tbW9uIGhvb2tzIHVzZWQgdGhyb3VnaG91dCBwbHVnaW4uXG4gKlxuICogQHR5cGUge09iamVjdH1cbiAqL1xuZXhwb3J0IGNvbnN0IGhvb2tUeXBlcyA9IHtcblx0ZmlsdGVyczoge1xuXHRcdEFERF9TVUJfQ09NUE9ORU5UOiAnc3ViQ29tcG9uZW50QWRkJyxcblx0fSxcbn07XG5cbi8qKlxuICogTWFuYWdlciByZXNwb25zaWJsZSBmb3IgcGx1Z2luIHdpZGUgbWVzc2FnaW5nIGFuZCBmaWx0ZXJpbmcgb3BlcmF0aW9ucy5cbiAqL1xuZnVuY3Rpb24gSG9va01hbmFnZXIoKSB7XG5cdC8qKlxuXHQgKiBIb29rIG5hbWVzcGFjZVxuXHQgKlxuXHQgKiBAdHlwZSB7c3RyaW5nfVxuXHQgKi9cblx0Y29uc3QgaG9va05hbWVzcGFjZSA9ICd1Yic7XG5cblx0LyoqXG5cdCAqIEhvb2sgdHlwZXMuXG5cdCAqXG5cdCAqIEB0eXBlIHtPYmplY3R9XG5cdCAqL1xuXHRjb25zdCB0eXBlcyA9IHtcblx0XHRGSUxURVI6ICdmaWx0ZXInLFxuXHRcdEFDVElPTjogJ2FjdGlvbicsXG5cdH07XG5cblx0LyoqXG5cdCAqIENvbW1vbiBob29rcyB1c2VkIHRocm91Z2hvdXQgcGx1Z2luLlxuXHQgKlxuXHQgKiBAdHlwZSB7T2JqZWN0fVxuXHQgKi9cblx0dGhpcy5ob29rVHlwZXMgPSBob29rVHlwZXM7XG5cblx0LyoqXG5cdCAqIFByZXBhcmUgY29tcGF0aWJsZSBob29rIG5hbWVcblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgbmFtZVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBob29rIHR5cGUsIGF2YWlsYWJsZSB0eXBlcyBhcmUgYXQgdHlwZXMgdmFyaWFibGVcblx0ICogQHJldHVybiB7c3RyaW5nfSBob29rIG5hbWVcblx0ICovXG5cdGNvbnN0IHByZXBhcmVIb29rTmFtZSA9IChuYW1lLCB0eXBlKSA9PiB7XG5cdFx0cmV0dXJuIGAke2hvb2tOYW1lc3BhY2V9LiR7dHlwZX0uJHtuYW1lfWA7XG5cdH07XG5cblx0LyoqXG5cdCAqIEFwcGx5IGZpbHRlci5cblx0ICpcblx0ICogSXQgaXMgYSB3cmFwcGVyIGZvciBAd29yZHByZXNzL2hvb2tzIGFwcGx5RmlsdGVyIGZ1bmN0aW9uLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gZmlsdGVyTmFtZSBmaWx0ZXIgbmFtZVxuXHQgKiBAcGFyYW0ge2FueX0gICAgZGF0YSAgICAgICBmaWx0ZXIgZGF0YVxuXHQgKiBAcmV0dXJuIHthbnl9IGZpbHRlcmVkIGRhdGFcblx0ICovXG5cdHRoaXMuYXBwbHlGaWx0ZXJzID0gKGZpbHRlck5hbWUsIGRhdGEpID0+IHtcblx0XHRyZXR1cm4gYXBwbHlGaWx0ZXJzKHByZXBhcmVIb29rTmFtZShmaWx0ZXJOYW1lLCB0eXBlcy5GSUxURVIpLCBkYXRhKTtcblx0fTtcblxuXHQvKipcblx0ICogQWRkIGZpbHRlci5cblx0ICpcblx0ICogSXQgaXMgYSB3cmFwcGVyIGZvciBAd29yZHByZXNzL2hvb2tzIGFkZEZpbHRlciBmdW5jdGlvbi5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9ICAgZmlsdGVyTmFtZSAgICAgICBmaWx0ZXIgbmFtZVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gICB1bmlxdWVJZGVudGlmaWVyIGlkZW50aWZpZXIgZm9yIGNhbGxiYWNrIGZ1bmN0aW9uXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrICAgICAgICAgY2FsbGJhY2sgZnVuY3Rpb25cblx0ICovXG5cdHRoaXMuYWRkRmlsdGVyID0gKGZpbHRlck5hbWUsIHVuaXF1ZUlkZW50aWZpZXIsIGNhbGxiYWNrKSA9PiB7XG5cdFx0YWRkRmlsdGVyKFxuXHRcdFx0cHJlcGFyZUhvb2tOYW1lKGZpbHRlck5hbWUsIHR5cGVzLkZJTFRFUiksXG5cdFx0XHR1bmlxdWVJZGVudGlmaWVyLFxuXHRcdFx0Y2FsbGJhY2tcblx0XHQpO1xuXHR9O1xufVxuXG4vLyBzaW5nbGV0b24gbWFuYWdlciBpbnN0YW5jZVxuY29uc3QgbWFuYWdlckluc3RhbmNlID0gbmV3IEhvb2tNYW5hZ2VyKCk7XG5cbi8qKlxuICogSE9DIGZvciBjb25uZWN0aW9uIHRvIGhvb2sgbWFuYWdlci5cbiAqXG4gKiBAcGFyYW0ge0pTWC5FbGVtZW50fSBDb21wb25lbnQgY29tcG9uZW50XG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gSE9DIGNvbXBvbmVudFxuICovXG5leHBvcnQgY29uc3Qgd2l0aEhvb2tNYW5hZ2VyID0gKENvbXBvbmVudCkgPT4gKHByb3BzKSA9PiB7XG5cdHJldHVybiA8Q29tcG9uZW50IHsuLi5wcm9wc30gey4uLm1hbmFnZXJJbnN0YW5jZX0gLz47XG59O1xuXG4vKipcbiAqIEBtb2R1bGUgSG9va01hbmFnZXIgc2luZ2xldG9uIGluc3RhbmNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IG1hbmFnZXJJbnN0YW5jZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJbm5lckJsb2NrcyB9IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2stZWRpdG9yJztcblxuLyoqXG4gKiBQcmV2aWV3IHByb3ZpZGVyIGNvbXBvbmVudCBmb3Igc2F2ZWQgc3R5bGVzIHByZXZpZXcgZ2VuZXJhdGlvbi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHMgICAgICAgICAgY29tcG9uZW50IHByb3BlcnRpZXNcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wcy5jbGllbnRJZCBibG9jayBjbGllbnQgaWRcbiAqIEBjbGFzc1xuICovXG5mdW5jdGlvbiBQcmV2aWV3UHJvdmlkZXIoeyBjbGllbnRJZCB9KSB7XG5cdGZ1bmN0aW9uIGdlbmVyYXRlSWQoKSB7XG5cdFx0cmV0dXJuIGB1Yi1wcmV2aWV3LXByb3ZpZGVyXyR7Y2xpZW50SWR9YDtcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9eyd1Yi1wcmV2aWV3LXByb3ZpZGVyJ30gaWQ9e2dlbmVyYXRlSWQoKX0+XG5cdFx0XHQ8SW5uZXJCbG9ja3MgLz5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cblxuLyoqXG4gKiBAbW9kdWxlIFByZXZpZXdQcm92aWRlclxuICovXG5leHBvcnQgZGVmYXVsdCBQcmV2aWV3UHJvdmlkZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuaW1wb3J0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSBmcm9tICdAd29yZHByZXNzL2Jsb2Nrcyc7XG5pbXBvcnQgUHJldmlld1Byb3ZpZGVyIGZyb20gJ0BJbmMvanMvY29tcG9uZW50cy9QcmV2aWV3UHJvdmlkZXIvUHJldmlld1Byb3ZpZGVyLmpzeCc7XG5cbi8qKlxuICogUmVnaXN0ZXIgcHJldmlldyBtYW5hZ2VyIGJsb2NrLlxuICovXG5jb25zdCByZWdpc3RlclByZXZpZXdNYW5hZ2VyID0gKCkgPT4ge1xuXHRyZWdpc3RlckJsb2NrVHlwZSgndWIvcHJldmlldy1wcm92aWRlcicsIHtcblx0XHR0aXRsZTogX18oJ29ubHkgZm9yIFVCIGludGVybmFsIHVzZScsICd1bHRpbWF0ZS1ibG9ja3MnKSxcblx0XHRhdHRyaWJ1dGVzOiB7fSxcblx0XHRjYXRlZ29yeTogJ3VsdGltYXRlYmxvY2tzJyxcblx0XHRzdXBwb3J0czoge1xuXHRcdFx0aW5zZXJ0ZXI6IGZhbHNlLFxuXHRcdFx0cmV1c2FibGU6IGZhbHNlLFxuXHRcdH0sXG5cdFx0ZWRpdDogKHByb3BzKSA9PiB7XG5cdFx0XHRyZXR1cm4gPFByZXZpZXdQcm92aWRlciB7Li4ucHJvcHN9IC8+O1xuXHRcdH0sXG5cdFx0c2F2ZTogKCkgPT4ge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fSxcblx0fSk7XG59O1xuXG4vKipcbiAqIEBtb2R1bGUgcmVnaXN0ZXJQcmV2aWV3TWFuYWdlclxuICovXG5leHBvcnQgZGVmYXVsdCByZWdpc3RlclByZXZpZXdNYW5hZ2VyO1xuIl0sIm5hbWVzIjpbImNyZWF0ZU5hbWVzcGFjZWRIZWxwZXJzIiwic3RvcmVOYW1lc3BhY2UiLCJjYWxsYmFjayIsIndpdGhEaXNwYXRjaCIsImRpc3BhdGNoIiwib3duUHJvcHMiLCJzZWxlY3QiLCJuYW1lc3BhY2VkRGlzcGF0Y2giLCJuYW1lc3BhY2VkU2VsZWN0Iiwid2l0aFNlbGVjdCIsInJlZ2lzdHJ5IiwiY29ubmVjdFdpdGhTdG9yZSIsInNlbGVjdE1hcHBpbmciLCJhY3Rpb25NYXBwaW5nIiwibmFtZXNwYWNlZFdpdGhEaXNwYXRjaCIsIm5hbWVzcGFjZWRXaXRoU2VsZWN0IiwiYXBwbHlTZWxlY3QiLCJwcm9wcyIsImFwcGx5QWN0aW9uIiwiY29tcG9zZSIsIk1hbmFnZXJCYXNlIiwiX19wcml2YXRlQWRkIiwiX2luaXRpYWxpemVkIiwiX19wcml2YXRlR2V0IiwiX19wcml2YXRlU2V0IiwiRnJvbnRlbmREYXRhTWFuYWdlciIsIl9mcm9udGVuZERhdGEiLCJnbG9iYWxPYmplY3RLZXkiLCJjb250ZXh0Iiwia2V5IiwiZGVmYXVsdFZhbCIsIkZyb250ZW5kRGF0YU1hbmFnZXIkMSIsImhvb2tUeXBlcyIsIkhvb2tNYW5hZ2VyIiwiaG9va05hbWVzcGFjZSIsInR5cGVzIiwicHJlcGFyZUhvb2tOYW1lIiwibmFtZSIsInR5cGUiLCJmaWx0ZXJOYW1lIiwiZGF0YSIsImFwcGx5RmlsdGVycyIsInVuaXF1ZUlkZW50aWZpZXIiLCJhZGRGaWx0ZXIiLCJtYW5hZ2VySW5zdGFuY2UiLCJ3aXRoSG9va01hbmFnZXIiLCJDb21wb25lbnQiLCJqc3giLCJfX3NwcmVhZFZhbHVlcyIsIlByZXZpZXdQcm92aWRlciIsImNsaWVudElkIiwiZ2VuZXJhdGVJZCIsIklubmVyQmxvY2tzIiwicmVnaXN0ZXJQcmV2aWV3TWFuYWdlciIsInJlZ2lzdGVyQmxvY2tUeXBlIiwiX18iXSwibWFwcGluZ3MiOiJ3aENBU2FBLEVBQTJCQyxJQWdCaEMsQ0FBRSx1QkFmdUJDLEdBQ3hCQyxFQUFZLGFBQUMsQ0FBQ0MsRUFBVUMsRUFBVSxDQUFFLE9BQUFDLENBQU0sSUFBTyxDQUN2RCxNQUFNQyxFQUFxQkgsRUFBU0gsQ0FBYyxFQUM1Q08sRUFBbUJGLEVBQU9MLENBQWMsRUFDOUMsT0FBT0MsRUFBU0ssRUFBb0JDLENBQWdCLENBQ3ZELENBQUcsRUFVK0IscUJBUEhOLEdBQ3RCTyxhQUFXLENBQUNILEVBQVFELEVBQVVLLElBQWEsQ0FDakQsTUFBTUYsRUFBbUJGLEVBQU9MLENBQWMsRUFDOUMsT0FBT0MsRUFBU00sRUFBa0JILEVBQVVLLENBQVEsQ0FDdkQsQ0FBRyxJQWNVQyxFQUFtQixDQUMvQlYsRUFDQVcsRUFDQUMsSUFDSSxDQUVKLEtBQU0sQ0FBRSx1QkFBQUMsRUFBd0IscUJBQUFDLENBQXNCLEVBQ3JEZixFQUF3QkMsQ0FBYyxFQUV2QyxJQUFJZSxFQUFlQyxHQUFVQSxFQUN6QkwsSUFDSEksRUFBY0QsRUFBcUJILENBQWEsR0FHakQsSUFBSU0sRUFBZUQsR0FBVUEsRUFDN0IsT0FBSUosSUFDSEssRUFBY0osRUFBdUJELENBQWEsR0FHNUNNLEVBQU8sUUFBQ0gsRUFBYUUsQ0FBVyxDQUN4QyxRQ25EQSxNQUFNRSxDQUFZLENBQWxCLGNBT0NDLEVBQUEsS0FBQUMsRUFBZSxJQU9mLGVBQWdCLENBQ2YsT0FBT0MsRUFBQSxLQUFLRCxFQUNaLENBT0QsWUFBYSxDQUNaLE1BQU0sSUFBSSxNQUNULHlEQUNILENBQ0UsQ0FLRCxNQUFPLENBQ0QsS0FBSyxrQkFDVCxLQUFLLFdBQVcsS0FBSyxLQUFNLEdBQUcsU0FBUyxFQUN2Q0UsRUFBQSxLQUFLRixFQUFlLElBRXJCLENBQ0YsQ0EvQkNBLEVBQUEsa0JDUEQsTUFBTUcsVUFBNEJMLENBQVksQ0FBOUMsa0NBT0NDLEVBQUEsS0FBQUssRUFBZ0IsTUFPaEIsV0FBV0MsRUFBaUIsQ0FDM0IsTUFBTUMsRUFBVSxNQUFRLE9BQ3hCSixFQUFBLEtBQUtFLEVBQWdCRSxFQUFRRCxDQUFlLEdBQUssQ0FBQSxHQUNqREMsRUFBUUQsQ0FBZSxFQUFJLE1BQzNCLENBU0QsZ0JBQWdCRSxFQUFLQyxFQUFhLEtBQU0sQ0FDdkMsT0FBT1AsRUFBQSxLQUFLRyxHQUFjRyxDQUFHLEdBQUtDLENBQ2xDLENBQ0YsQ0F2QkNKLEVBQUEsWUE0QkQsTUFBZUssRUFBQSxJQUFJTixFQ2hDTk8sRUFBWSxDQUN4QixRQUFTLENBQ1Isa0JBQW1CLGlCQUNwQixDQUNELEVBS0EsU0FBU0MsR0FBYyxDQU10QixNQUFNQyxFQUFnQixLQU9oQkMsRUFBUSxDQUNiLE9BQVEsU0FDUixPQUFRLFFBQUEsRUFRVCxLQUFLLFVBQVlILEVBU1gsTUFBQUksRUFBa0IsQ0FBQ0MsRUFBTUMsSUFDdkIsR0FBR0osS0FBaUJJLEtBQVFELElBWS9CLEtBQUEsYUFBZSxDQUFDRSxFQUFZQyxJQUN6QkMsRUFBQUEsYUFBYUwsRUFBZ0JHLEVBQVlKLEVBQU0sTUFBTSxFQUFHSyxDQUFJLEVBWXBFLEtBQUssVUFBWSxDQUFDRCxFQUFZRyxFQUFrQnhDLElBQWEsQ0FDNUR5QyxFQUFBLFVBQ0NQLEVBQWdCRyxFQUFZSixFQUFNLE1BQU0sRUFDeENPLEVBQ0F4QyxDQUFBLENBQ0QsQ0FFRixDQUdNLE1BQUEwQyxFQUFrQixJQUFJWCxFQVFmWSxFQUFtQkMsR0FBZTdCLEdBQ3RDOEIsRUFBQUEsSUFBQUQsRUFBQUUsSUFBQSxHQUFjL0IsR0FBVzJCLEVBQWlCLEVDcEZuRCxTQUFTSyxFQUFnQixDQUFFLFNBQUFDLEdBQVksQ0FDdEMsU0FBU0MsR0FBYSxDQUNyQixNQUFPLHVCQUF1QkQsR0FDL0IsQ0FHQyxPQUFBSCxFQUFBLElBQUMsT0FBSSxVQUFXLHNCQUF1QixHQUFJSSxFQUFXLEVBQ3JELFNBQUNKLEVBQUEsSUFBQUssRUFBQSxZQUFBLENBQVksQ0FBQSxDQUNkLENBQUEsQ0FFRixDQ1pBLE1BQU1DLEVBQXlCLElBQU0sQ0FDcENDLEVBQUFBLGtCQUFrQixzQkFBdUIsQ0FDeEMsTUFBT0MsRUFBQUEsR0FBRywyQkFBNEIsaUJBQWlCLEVBQ3ZELFdBQVksQ0FBQyxFQUNiLFNBQVUsaUJBQ1YsU0FBVSxDQUNULFNBQVUsR0FDVixTQUFVLEVBQ1gsRUFDQSxLQUFPdEMsR0FDQzhCLEVBQUEsSUFBQ0UsRUFBaUJELEVBQUEsR0FBRy9CLEVBQU8sRUFFcEMsS0FBTSxJQUNFLElBQ1IsQ0FDQSxDQUNGIn0=