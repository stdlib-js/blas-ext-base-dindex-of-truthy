"use strict";var a=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var n=a(function(g,v){
function p(e,r,i,c){var u,t;if(e<=0)return-1;for(u=c,t=0;t<e;t++){if(r[u])return t;u+=i}return-1}v.exports=p
});var f=a(function(k,d){
var O=require('@stdlib/strided-base-stride2offset/dist'),h=n();function T(e,r,i){return h(e,r,i,O(e,i))}d.exports=T
});var x=a(function(w,q){
var j=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),o=f(),m=n();j(o,"ndarray",m);q.exports=o
});var l=require("path").join,R=require('@stdlib/utils-try-require/dist'),_=require('@stdlib/assert-is-error/dist'),E=x(),s,y=R(l(__dirname,"./native.js"));_(y)?s=E:s=y;module.exports=s;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
