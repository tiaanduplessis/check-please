!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@tiaanduplessis/type")):"function"==typeof define&&define.amd?define(["exports","@tiaanduplessis/type"],t):t(n.checkPlease={},null)}(this,function(n,t){function e(n){return void 0===n&&(n=function(){return!0}),function(t){return void 0===t&&(t=""),function(e){var r=n(e);return{valid:r,message:r?"":t}}}}t=t&&t.hasOwnProperty("default")?t.default:t,n.check=function(){for(var n=[],e=arguments.length;e--;)n[e]=arguments[e];return function(e){for(var r=0;r<n.length;r++){var u=n[r];if(t.isFunc(u)){var i=u(e);if(!i.valid)return i}}return{valid:!0,message:""}}},n.checkWrapper=e,n.exists=function(n){return e(function(n){return!t.isEmpty(n)})(n)},n.empty=function(n){return e(t.isEmpty)(n)},n.bool=function(n){return e(t.isBool)(n)},n.int=function(n){return e(function(n){return t.isNum(n)&&Number.isInteger(n)})(n)},n.num=function(n){return e(t.isNum)(n)},n.str=function(n){return e(t.isStr)(n)},n.pattern=function(n,t){return e(function(t){return n&&t&&n.test(t)})(t)},n.exact=function(n,t){return e(function(t){return n&&t&&n===t})(t)}});
//# sourceMappingURL=check-please.umd.js.map