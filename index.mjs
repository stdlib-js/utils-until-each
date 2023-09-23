// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.0-esm/index.mjs";function s(s,o,i,n){var d,l;if(!r(s))throw new TypeError(e("1YDAh,O3",s));if(!t(o))throw new TypeError(e("1YD2H,G6",o));if(!t(i))throw new TypeError(e("1YD3N,G4",i));for(d=s.length,l=0;l<d&&!o(s[l],l,s);)i.call(n,s[l],l,s),l+=1,d=s.length;return s}export{s as default};
//# sourceMappingURL=index.mjs.map
