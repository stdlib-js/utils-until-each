"use strict";var g=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var m=g(function(E,s){
var h=require('@stdlib/assert-is-collection/dist'),n=require('@stdlib/assert-is-function/dist'),i=require('@stdlib/error-tools-fmtprodmsg/dist');function w(r,e,a,v){var t,u;if(!h(r))throw new TypeError(i('1YDAh',r));if(!n(e))throw new TypeError(i('1YD2H',e));if(!n(a))throw new TypeError(i('1YD3N',a));for(t=r.length,u=0;u<t&&!e(r[u],u,r);)a.call(v,r[u],u,r),u+=1,t=r.length;return r}s.exports=w
});var f=m();module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
