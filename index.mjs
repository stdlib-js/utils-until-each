// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function s(s,o,i,n){var l,d;if(!r(s))throw new TypeError(e("0lxBO",s));if(!t(o))throw new TypeError(e("0lx2S",o));if(!t(i))throw new TypeError(e("0lx3Z",i));for(l=s.length,d=0;d<l&&!o(s[d],d,s);)i.call(n,s[d],d,s),d+=1,l=s.length;return s}export{s as default};
//# sourceMappingURL=index.mjs.map
