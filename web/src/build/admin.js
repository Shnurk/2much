!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).dragula=e()}}(function(){return function e(n,t,o){function i(a,u){if(!t[a]){if(!n[a]){var c="function"==typeof require&&require;if(!u&&c)return c(a,!0);if(r)return r(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var s=t[a]={exports:{}};n[a][0].call(s.exports,function(e){var t=n[a][1][e];return i(t||e)},s,s.exports,e,n,t,o)}return t[a].exports}for(var r="function"==typeof require&&require,a=0;a<o.length;a++)i(o[a]);return i}({1:[function(e,n,t){"use strict";function o(e){var n=i[e];return n?n.lastIndex=0:i[e]=n=new RegExp(r+e+a,"g"),n}var i={},r="(?:^|\\s)",a="(?:\\s|$)";n.exports={add:function(e,n){var t=e.className;t.length?o(n).test(t)||(e.className+=" "+n):e.className=n},rm:function(e,n){e.className=e.className.replace(o(n)," ").trim()}}},{}],2:[function(e,n,t){(function(t){"use strict";function o(e,n,o,i){t.navigator.pointerEnabled?g[n](e,{mouseup:"pointerup",mousedown:"pointerdown",mousemove:"pointermove"}[o],i):t.navigator.msPointerEnabled?g[n](e,{mouseup:"MSPointerUp",mousedown:"MSPointerDown",mousemove:"MSPointerMove"}[o],i):(g[n](e,{mouseup:"touchend",mousedown:"touchstart",mousemove:"touchmove"}[o],i),g[n](e,o,i))}function i(e){if(void 0!==e.touches)return e.touches.length;if(void 0!==e.which&&0!==e.which)return e.which;if(void 0!==e.buttons)return e.buttons;var n=e.button;return void 0!==n?1&n?1:2&n?3:4&n?2:0:void 0}function r(e,n){return void 0!==t[n]?t[n]:b.clientHeight?b[e]:y.body[e]}function a(e,n,t){var o,i=e||{},r=i.className;return i.className+=" gu-hide",o=y.elementFromPoint(n,t),i.className=r,o}function u(){return!1}function c(){return!0}function l(e){return e.width||e.right-e.left}function s(e){return e.height||e.bottom-e.top}function d(e){return e.parentNode===y?null:e.parentNode}function f(e){return"INPUT"===e.tagName||"TEXTAREA"===e.tagName||"SELECT"===e.tagName||function e(n){return!!n&&("false"!==n.contentEditable&&("true"===n.contentEditable||e(d(n))))}(e)}function m(e){return e.nextElementSibling||function(){var n=e;do{n=n.nextSibling}while(n&&1!==n.nodeType);return n}()}function v(e,n){var t,o=(t=n).targetTouches&&t.targetTouches.length?t.targetTouches[0]:t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:t,i={pageX:"clientX",pageY:"clientY"};return e in i&&!(e in o)&&i[e]in o&&(e=i[e]),o[e]}var p=e("contra/emitter"),g=e("crossvent"),h=e("./classes"),y=document,b=y.documentElement;n.exports=function(e,n){function t(e){return-1!==ee.containers.indexOf(e)||Z.isContainer(e)}function w(e){var n=e?"remove":"add";o(b,n,"mousedown",S),o(b,n,"mouseup",A)}function _(e){o(b,e?"remove":"add","mousemove",P)}function E(e){var n=e?"remove":"add";g[n](b,"selectstart",L),g[n](b,"click",L)}function L(e){Q&&e.preventDefault()}function S(e){if(U=e.clientX,z=e.clientY,1===i(e)&&!e.metaKey&&!e.ctrlKey){var n=e.target,t=$(n);t&&(Q=t,_(),"mousedown"===e.type&&(f(n)?n.focus():e.preventDefault()))}}function P(e){if(Q){if(0===i(e))return void A({});if(void 0===e.clientX||e.clientX!==U||void 0===e.clientY||e.clientY!==z){if(Z.ignoreInputTextSelection){var n=v("clientX",e),t=v("clientY",e);if(f(y.elementFromPoint(n,t)))return}var a=Q;_(!0),E(),x(),C(a);var u={left:(c=q.getBoundingClientRect()).left+r("scrollLeft","pageXOffset"),top:c.top+r("scrollTop","pageYOffset")};j=v("pageX",e)-u.left,H=v("pageY",e)-u.top,h.add(V||q,"gu-transit"),function(){if(!B){var e=q.getBoundingClientRect();(B=q.cloneNode(!0)).style.width=l(e)+"px",B.style.height=s(e)+"px",h.rm(B,"gu-transit"),h.add(B,"gu-mirror"),Z.mirrorContainer.appendChild(B),o(b,"add","mousemove",I),h.add(Z.mirrorContainer,"gu-unselectable"),ee.emit("cloned",B,q,"mirror")}}(),I(e)}}var c}function $(e){if(!(ee.dragging&&B||t(e))){for(var n=e;d(e)&&!1===t(d(e));){if(Z.invalid(e,n))return;if(!(e=d(e)))return}var o=d(e);if(o&&!Z.invalid(e,n)&&Z.moves(e,o,n,m(e)))return{item:e,source:o}}}function C(e){var n,t;n=e.item,t=e.source,("boolean"==typeof Z.copy?Z.copy:Z.copy(n,t))&&(V=e.item.cloneNode(!0),ee.emit("cloned",V,e.item,"copy")),Y=e.source,q=e.item,J=K=m(e.item),ee.dragging=!0,ee.emit("drag",q,Y)}function x(){if(ee.dragging){var e=V||q;O(e,d(e))}}function N(){Q=!1,_(!0),E(!0)}function A(e){if(N(),ee.dragging){var n=V||q,t=v("clientX",e),o=v("clientY",e),i=D(a(B,t,o),t,o);i&&(V&&Z.copySortSource||!V||i!==Y)?O(n,i):Z.removeOnSpill?T():k()}}function O(e,n){var t=d(e);V&&Z.copySortSource&&n===Y&&t.removeChild(q),R(n)?ee.emit("cancel",e,Y,Y):ee.emit("drop",e,n,Y,K),F()}function T(){if(ee.dragging){var e=V||q,n=d(e);n&&n.removeChild(e),ee.emit(V?"cancel":"remove",e,n,Y),F()}}function k(e){if(ee.dragging){var n=arguments.length>0?e:Z.revertOnSpill,t=V||q,o=d(t),i=R(o);!1===i&&n&&(V?o&&o.removeChild(V):Y.insertBefore(t,J)),i||n?ee.emit("cancel",t,Y,Y):ee.emit("drop",t,o,Y,K),F()}}function F(){var e=V||q;N(),B&&(h.rm(Z.mirrorContainer,"gu-unselectable"),o(b,"remove","mousemove",I),d(B).removeChild(B),B=null),e&&h.rm(e,"gu-transit"),G&&clearTimeout(G),ee.dragging=!1,W&&ee.emit("out",e,W,Y),ee.emit("dragend",e),Y=q=V=J=K=G=W=null}function R(e,n){var t;return t=void 0!==n?n:B?K:m(V||q),e===Y&&t===J}function D(e,n,o){function i(){if(!1===t(r))return!1;var i=M(r,e),a=X(r,i,n,o);return!!R(r,a)||Z.accepts(q,r,Y,a)}for(var r=e;r&&!i();)r=d(r);return r}function I(e){function n(e){ee.emit(e,u,W,Y)}if(B){e.preventDefault();var t=v("clientX",e),o=v("clientY",e),i=t-j,r=o-H;B.style.left=i+"px",B.style.top=r+"px";var u=V||q,c=a(B,t,o),l=D(c,t,o),s=null!==l&&l!==W;(s||null===l)&&(W&&n("out"),W=l,s&&n("over"));var f=d(u);if(l===Y&&V&&!Z.copySortSource)return void(f&&f.removeChild(u));var p,g=M(l,c);if(null!==g)p=X(l,g,t,o);else{if(!0!==Z.revertOnSpill||V)return void(V&&f&&f.removeChild(u));p=J,l=Y}(null===p&&s||p!==u&&p!==m(u))&&(K=p,l.insertBefore(u,p),ee.emit("shadow",u,l,Y))}}function M(e,n){for(var t=n;t!==e&&d(t)!==e;)t=d(t);return t===b?null:t}function X(e,n,t,o){var i,r="horizontal"===Z.direction;return n!==e?(i=n.getBoundingClientRect(),(r?t>i.left+l(i)/2:o>i.top+s(i)/2)?m(n):n):function(){var n,i,a,u=e.children.length;for(n=0;u>n;n++){if(a=(i=e.children[n]).getBoundingClientRect(),r&&a.left+a.width/2>t)return i;if(!r&&a.top+a.height/2>o)return i}return null}()}1===arguments.length&&!1===Array.isArray(e)&&(n=e,e=[]);var B,Y,q,j,H,U,z,J,K,V,G,Q,W=null,Z=n||{};void 0===Z.moves&&(Z.moves=c),void 0===Z.accepts&&(Z.accepts=c),void 0===Z.invalid&&(Z.invalid=function(){return!1}),void 0===Z.containers&&(Z.containers=e||[]),void 0===Z.isContainer&&(Z.isContainer=u),void 0===Z.copy&&(Z.copy=!1),void 0===Z.copySortSource&&(Z.copySortSource=!1),void 0===Z.revertOnSpill&&(Z.revertOnSpill=!1),void 0===Z.removeOnSpill&&(Z.removeOnSpill=!1),void 0===Z.direction&&(Z.direction="vertical"),void 0===Z.ignoreInputTextSelection&&(Z.ignoreInputTextSelection=!0),void 0===Z.mirrorContainer&&(Z.mirrorContainer=y.body);var ee=p({containers:Z.containers,start:function(e){var n=$(e);n&&C(n)},end:x,cancel:k,remove:T,destroy:function(){w(!0),A({})},canMove:function(e){return!!$(e)},dragging:!1});return!0===Z.removeOnSpill&&ee.on("over",function(e){h.rm(e,"gu-hide")}).on("out",function(e){ee.dragging&&h.add(e,"gu-hide")}),w(),ee}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./classes":1,"contra/emitter":5,crossvent:6}],3:[function(e,n,t){n.exports=function(e,n){return Array.prototype.slice.call(e,n)}},{}],4:[function(e,n,t){"use strict";var o=e("ticky");n.exports=function(e,n,t){e&&o(function(){e.apply(t||null,n||[])})}},{ticky:9}],5:[function(e,n,t){"use strict";var o=e("atoa"),i=e("./debounce");n.exports=function(e,n){var t=n||{},r={};return void 0===e&&(e={}),e.on=function(n,t){return r[n]?r[n].push(t):r[n]=[t],e},e.once=function(n,t){return t._once=!0,e.on(n,t),e},e.off=function(n,t){var o=arguments.length;if(1===o)delete r[n];else if(0===o)r={};else{var i=r[n];if(!i)return e;i.splice(i.indexOf(t),1)}return e},e.emit=function(){var n=o(arguments);return e.emitterSnapshot(n.shift()).apply(this,n)},e.emitterSnapshot=function(n){var a=(r[n]||[]).slice(0);return function(){var r=o(arguments),u=this||e;if("error"===n&&!1!==t.throws&&!a.length)throw 1===r.length?r[0]:r;return a.forEach(function(o){t.async?i(o,r,u):o.apply(u,r),o._once&&e.off(n,o)}),e}},e}},{"./debounce":4,atoa:3}],6:[function(e,n,t){(function(t){"use strict";function o(e,n,t){var o=function(e,n,t){var o,i;for(o=0;o<l.length;o++)if(i=l[o],i.element===e&&i.type===n&&i.fn===t)return o}(e,n,t);if(o){var i=l[o].wrapper;return l.splice(o,1),i}}var i=e("custom-event"),r=e("./eventmap"),a=t.document,u=function(e,n,t,o){return e.addEventListener(n,t,o)},c=function(e,n,t,o){return e.removeEventListener(n,t,o)},l=[];t.addEventListener||(u=function(e,n,i){return e.attachEvent("on"+n,(c=o(r=e,a=n,u=i)||(s=r,d=u,function(e){var n=e||t.event;n.target=n.target||n.srcElement,n.preventDefault=n.preventDefault||function(){n.returnValue=!1},n.stopPropagation=n.stopPropagation||function(){n.cancelBubble=!0},n.which=n.which||n.keyCode,d.call(s,n)}),l.push({wrapper:c,element:r,type:a,fn:u}),c));var r,a,u,c,s,d},c=function(e,n,t){var i=o(e,n,t);return i?e.detachEvent("on"+n,i):void 0}),n.exports={add:u,remove:c,fabricate:function(e,n,t){var o,u=-1===r.indexOf(n)?new i(n,{detail:t}):(a.createEvent?(o=a.createEvent("Event")).initEvent(n,!0,!0):a.createEventObject&&(o=a.createEventObject()),o);e.dispatchEvent?e.dispatchEvent(u):e.fireEvent("on"+n,u)}}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./eventmap":7,"custom-event":8}],7:[function(e,n,t){(function(e){"use strict";var t=[],o="",i=/^on/;for(o in e)i.test(o)&&t.push(o.slice(2));n.exports=t}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],8:[function(e,n,t){(function(e){var t=e.CustomEvent;n.exports=function(){try{var e=new t("cat",{detail:{foo:"bar"}});return"cat"===e.type&&"bar"===e.detail.foo}catch(e){}return!1}()?t:"function"==typeof document.createEvent?function(e,n){var t=document.createEvent("CustomEvent");return n?t.initCustomEvent(e,n.bubbles,n.cancelable,n.detail):t.initCustomEvent(e,!1,!1,void 0),t}:function(e,n){var t=document.createEventObject();return t.type=e,n?(t.bubbles=Boolean(n.bubbles),t.cancelable=Boolean(n.cancelable),t.detail=n.detail):(t.bubbles=!1,t.cancelable=!1,t.detail=void 0),t}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],9:[function(e,n,t){var o;o="function"==typeof setImmediate?function(e){setImmediate(e)}:function(e){setTimeout(e,0)},n.exports=o},{}]},{},[2])(2)}),(()=>{const e=g.q;g.skin.PhotoLoad={render:function(n={}){const t=n.photo,o=t?e.attr("style",`background-image: url('${t}')`):"",i=e.onClick("skin.PhotoLoad._onRemoveClick","event","this");return e.html`
    <div class="PhotoLoad" ${o} data-id="${n.id}">
      <div class="PhotoLoad__remove" ${i}>✕</div>
      ${100===n.percent?"":e.html`
        <div class="PhotoLoad__progress">
          <div class="PhotoLoad__progressLine"></div>
        </div>
      `}
    </div>
  `}}})(),(()=>{const e=g.skin.PhotoLoad||(g.skin.PhotoLoad={});function n(e,n){n.closest(".PhotoLoad").classList.toggle("PhotoLoad_removed")}Object.assign(e,{setPhoto:function(e,n){e.style.backgroundImage=`url('${n}')`},setProgress:function(e,n){const o=e.$(t.progressLine);100===n?o.parentElement.remove():o.style.width=`${n}%`}}),e._onRemoveClick=n;var t={progressLine:".PhotoLoad__progressLine"}})(),(()=>{g.$$,g.Resumable})(),(()=>{const e=g.$$,n=g.Resumable;function t(){return location.href.includes("models")}function o(){return location.href.includes("articles")}function i(){if(t())return{name:$("input[name=name]").value,gender:Number($("select[name=gender]").value),instagram:$("input[name=instagram]").value,cover:r("cover")[0]||null,book:r("book"),polaroids:r("polaroids"),params:{height:Number($("input[name=height]").value),chest:Number($("input[name=chest]").value),waist:Number($("input[name=waist]").value),hips:Number($("input[name=hips]").value),shoe:Number($("input[name=shoe]").value),hair:$("input[name=hair]").value,eyes:$("input[name=eyes]").value}};if(o()){const n=[];return Array.from(e(".AdminForm__model")).forEach(e=>{"0"!==e.value&&n.push(e.value)}),{title:$("input[name=title]").value,models:n,photos:r("photos"),date:{day:Number($("input[name=day]").value),month:Number($("input[name=month]").value),year:Number($("input[name=year]").value)}}}}function r(n){const t=e(`.AdminForm__section_${n} .PhotoLoad:not(.PhotoLoad_removed)`);return Array.from(t).map(e=>e.dataset.id)}!function(){const t=new n({target:"/upload"});t.assignBrowse(e(".AdminForm__section_upload .AdminForm__title")),t.assignDrop(e(".AdminForm__section_upload")),t.on("fileAdded",(e,n)=>{console.log("file added"),t.upload();const o=n.target.closest(".AdminForm__section_upload");o.classList.contains("AdminForm__section_cover")?o.$(".AdminForm__content").innerHTML=g.skin.PhotoLoad.render({id:e.uniqueIdentifier}):o.$(".AdminForm__content").insertAdjacentHTML("beforeend",g.skin.PhotoLoad.render({id:e.uniqueIdentifier}))}),t.on("fileProgress",(e,n)=>{console.log("file progress"),console.log(e);const t=$(`.PhotoLoad[data-id="${e.uniqueIdentifier}"]`);console.log(t),t&&g.skin.PhotoLoad.setProgress(t,100*e.progress())}),t.on("fileSuccess",(e,n)=>{console.log("file success");const t=$(`.PhotoLoad[data-id="${e.uniqueIdentifier}"]`);t&&(n=JSON.parse(n),g.skin.PhotoLoad.setPhoto(t,n.photo),t.setAttribute("data-id",n.id))}),t.on("fileError",(e,n)=>{console.log("file error"),console.log("ERROR!!!")}),t.on("fileRetry",e=>{console.log("file retry")})}(),dragula(Array.from(e(".AdminForm__section_upload .AdminForm__content"))),window.skin.AdminForm={_onSaveClick:async function(e){const n=i(),r=new FormData;r.append("json",JSON.stringify(n));await fetch(location.pathname,{method:"POST",body:r});t()&&(location.href="/admin/models");o()&&(location.href="/admin/articles")},_onDeleteClick:function(e){confirm("Are you sure?")||e.preventDefault()}},window.serialize=i,window.onAddModelChange=function(e){e.parentElement.insertAdjacentHTML("afterend",e.parentElement.outerHTML),e.setAttribute("onchange","")},window.removeSelect=function(e){e.parentElement.remove()}})();