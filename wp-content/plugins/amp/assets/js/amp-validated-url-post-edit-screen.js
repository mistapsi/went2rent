!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=12)}([function(e,t,n){var r=n(5),o=n(6),c=n(7),a=n(8);e.exports=function(e){return r(e)||o(e)||c(e)||a()}},function(e,t){!function(){e.exports=this.wp.domReady}()},function(e,t){!function(){e.exports=this.wp.i18n}()},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},function(e,t,n){"use strict";t.a=function(){document.querySelectorAll("tr[id]").forEach((function(e){var t=e.querySelector(".amp-validation-error-new");t&&e.classList.toggle("new",Boolean(parseInt(t.value)))}))}},function(e,t,n){var r=n(3);e.exports=function(e){if(Array.isArray(e))return r(e)}},function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},function(e,t,n){var r=n(3);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},,,,function(e,t,n){"use strict";n.r(t),function(e){var t=n(0),r=n.n(t),o=n(1),c=n.n(o),a=n(2),i=n(4);function l(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,a=!0,i=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){i=!0,c=e},f:function(){try{a||null==n.return||n.return()}finally{if(i)throw c}}}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var s="show-all-errors";c()((function(){h(),g(),b(),Object(i.a)(),S(),w(),m(),L()}));var d=!1,f=function(){d||(window.addEventListener("beforeunload",y),document.querySelector("#major-publishing-actions").addEventListener("click",(function(){window.removeEventListener("beforeunload",y)})),d=!0)},m=function(){document.getElementById("post").addEventListener("change",(function e(t){(t.target.matches(".amp-validation-error-status")||t.target.matches(".amp-validation-error-status-review"))&&(document.getElementById("post").removeEventListener("change",e),f())}))},y=function(e){return e.preventDefault(),e.returnValue=Object(a.__)("You have unsaved changes. Are you sure you want to leave?","amp"),Object(a.__)("You have unsaved changes. Are you sure you want to leave?","amp")},v=function(e,t){var n,r,o=document.getElementById(s),c=document.getElementById("number-errors"),i=document.getElementsByTagName("thead");i[0]&&!c&&(n=i[0],c=document.createElement("tr"),(r=document.createElement("th")).setAttribute("id","number-errors"),r.setAttribute("colspan","6"),c.appendChild(r),n.appendChild(c)),e===t?(o&&o.classList.add("hidden"),c.classList.add("hidden")):null!==e&&(document.getElementById("number-errors").innerText=Object(a.sprintf)(
/* translators: 1: number of errors being displayed. 2: total number of errors found. */
Object(a._n)("Showing %1$s of %2$s validation error","Showing %1$s of %2$s validation errors",t,"amp"),e,t),document.getElementById("number-errors").classList.remove("hidden"),p(),document.getElementById(s)&&document.getElementById(s).classList.remove("hidden"))},p=function(){var e=document.getElementById("url-post-filter"),t=document.getElementById(s);!t&&e&&((t=document.createElement("button")).id=s,t.classList.add("button"),t.innerText=Object(a.__)("Show all","amp"),e.appendChild(t))},h=function(){document.getElementById("url-post-filter").addEventListener("click",(function(e){if(e.target.matches("#"+s)){e.preventDefault();var t=document.querySelectorAll("[data-error-type]");t.forEach((function(e){e.parentElement.parentElement.classList.remove("hidden")})),v(t.length,t.length),e.target.classList.add("hidden"),document.getElementById("amp_validation_error_type").selectedIndex=0}}))},g=function(){document.getElementById("amp_validation_error_type").addEventListener("change",(function(e){if(e.target.matches("select")){e.preventDefault();var t=document.getElementById(s),n="-1"===e.target.value,r=document.querySelectorAll("[data-error-type]");n&&t&&t.classList.add("hidden");var o=0;r.forEach((function(t){var r=t.getAttribute("data-error-type");n||!e.target.value||e.target.value===r?(t.parentElement.parentElement.classList.remove("hidden"),o++):t.parentElement.parentElement.classList.add("hidden")})),v(o,r.length)}}))},b=function(){document.getElementById("search-submit").addEventListener("click",(function(e){if(e.preventDefault(),e.target.matches("input")){var t=document.getElementById("invalid-url-search-search-input").value,n=document.querySelectorAll("tbody .column-details"),r=0;n.forEach((function(e){var n=!1;e.querySelectorAll(".detailed").forEach((function(e){-1!==e.innerText.indexOf(t)&&(n=!0)})),n?(e.parentElement.classList.remove("hidden"),r++):e.parentElement.classList.add("hidden")})),v(r,n.length)}}))},E=function(e){var t=e.options[e.selectedIndex];t&&(e.style.borderColor=t.getAttribute("data-color"))},S=function(){document.querySelectorAll('tr[id^="tag-"]').forEach((function(e){var t=e.querySelector(".amp-validation-error-status"),n=e.querySelector(".amp-validation-error-status-review");t&&t.addEventListener("change",(function(e){e.target.matches("select")&&E(e.target)})),n&&n.addEventListener("change",(function(){return e.classList.toggle("new")}))}))},w=function(){var t=document.querySelector("button.action.remove"),n=document.querySelector("button.action.keep"),o=document.getElementById("remove-keep-buttons"),c=function(e){var t;e.target.matches("[type=checkbox]")&&(e.target.checked?o.classList.remove("hidden"):(t=!1,document.querySelectorAll(".check-column [type=checkbox]").forEach((function(e){e.checked&&(t=!0)})),t||o.classList.add("hidden")))};document.querySelectorAll(".check-column [type=checkbox]").forEach((function(e){e.addEventListener("change",c)})),t.addEventListener("click",(function(){Array.prototype.forEach.call(document.querySelectorAll("select.amp-validation-error-status"),(function(e){e.closest("tr").querySelector(".check-column input[type=checkbox]").checked&&(e.value="3",E(e),f())}))})),n.addEventListener("click",(function(){Array.prototype.forEach.call(document.querySelectorAll("select.amp-validation-error-status"),(function(e){e.closest("tr").querySelector(".check-column input[type=checkbox]").checked&&(e.value="2",E(e),f())}))})),e.addEventListener("click",(function(e){var t=e.target;if(t.classList.contains("reviewed-toggle")){var n=t.classList.contains("reviewed");r()(document.querySelectorAll("select.amp-validation-error-status")).forEach((function(e){var t=e.closest("tr");t.querySelector(".check-column input[type=checkbox]").checked&&(t.querySelector("input[type=checkbox].amp-validation-error-status-review").checked=n,t.classList.toggle("new",!n),f())}))}}))},L=function(){var e,t=document.getElementById("amp_stylesheets"),n=l(t.querySelectorAll(".toggle-stylesheet-details"));try{var r=function(){var t=e.value,n=t.closest("tr");t.addEventListener("click",(function(){n.classList.toggle("expanded")}))};for(n.s();!(e=n.n()).done;)r()}catch(e){n.e(e)}finally{n.f()}var o,c=l(t.querySelectorAll(".stylesheet-details"));try{var a=function(){var e=o.value,t=e.querySelector(".shaken-stylesheet"),n=e.querySelector(".show-removed-styles");n&&n.addEventListener("click",(function(){t.classList.toggle("removed-styles-shown",n.checked)}))};for(c.s();!(o=c.n()).done;)a()}catch(e){c.e(e)}finally{c.f()}}}.call(this,n(13))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n}]);