// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

/**** **** **** **** **** **** **** **** **** **** **** **** **** **** **** **** **** **** ****
  Placeholder
**** **** **** **** **** **** **** **** **** **** **** **** **** **** **** **** **** **** ****/

/* Placeholders.js v2.1.1 */

(function(t){"use strict";function e(t,e,r){return t.addEventListener?t.addEventListener(e,r,!1):t.attachEvent?t.attachEvent("on"+e,r):void 0}function r(t,e){var r,n;for(r=0,n=t.length;n>r;r++)if(t[r]===e)return!0;return!1}function n(t,e){var r;t.createTextRange?(r=t.createTextRange(),r.move("character",e),r.select()):t.selectionStart&&(t.focus(),t.setSelectionRange(e,e))}function a(t,e){try{return t.type=e,!0}catch(r){return!1}}t.Placeholders={Utils:{addEventListener:e,inArray:r,moveCaret:n,changeType:a}}})(this),function(t){"use strict";function e(){}function r(t,e){var r,n,a=!!e&&t.value!==e,u=t.value===t.getAttribute(V);return(a||u)&&"true"===t.getAttribute(D)?(t.setAttribute(D,"false"),t.value=t.value.replace(t.getAttribute(V),""),t.className=t.className.replace(R,""),n=t.getAttribute(z),n&&(t.setAttribute("maxLength",n),t.removeAttribute(z)),r=t.getAttribute(I),r&&(t.type=r),!0):!1}function n(t){var e,r,n=t.getAttribute(V);return""===t.value&&n?(t.setAttribute(D,"true"),t.value=n,t.className+=" "+k,r=t.getAttribute(z),r||(t.setAttribute(z,t.maxLength),t.removeAttribute("maxLength")),e=t.getAttribute(I),e?t.type="text":"password"===t.type&&K.changeType(t,"text")&&t.setAttribute(I,"password"),!0):!1}function a(t,e){var r,n,a,u,i;if(t&&t.getAttribute(V))e(t);else for(r=t?t.getElementsByTagName("input"):p,n=t?t.getElementsByTagName("textarea"):h,i=0,u=r.length+n.length;u>i;i++)a=r.length>i?r[i]:n[i-r.length],e(a)}function u(t){a(t,r)}function i(t){a(t,n)}function l(t){return function(){b&&t.value===t.getAttribute(V)&&"true"===t.getAttribute(D)?K.moveCaret(t,0):r(t)}}function o(t){return function(){n(t)}}function c(t){return function(e){return m=t.value,"true"===t.getAttribute(D)&&m===t.getAttribute(V)&&K.inArray(C,e.keyCode)?(e.preventDefault&&e.preventDefault(),!1):void 0}}function s(t){return function(){r(t,m),""===t.value&&(t.blur(),K.moveCaret(t,0))}}function d(t){return function(){t===document.activeElement&&t.value===t.getAttribute(V)&&"true"===t.getAttribute(D)&&K.moveCaret(t,0)}}function g(t){return function(){u(t)}}function v(t){t.form&&(L=t.form,L.getAttribute(P)||(K.addEventListener(L,"submit",g(L)),L.setAttribute(P,"true"))),K.addEventListener(t,"focus",l(t)),K.addEventListener(t,"blur",o(t)),b&&(K.addEventListener(t,"keydown",c(t)),K.addEventListener(t,"keyup",s(t)),K.addEventListener(t,"click",d(t))),t.setAttribute(U,"true"),t.setAttribute(V,E),n(t)}var p,h,b,f,m,A,y,E,x,L,T,N,S,w=["text","search","url","tel","email","password","number","textarea"],C=[27,33,34,35,36,37,38,39,40,8,46],B="#ccc",k="placeholdersjs",R=RegExp("(?:^|\\s)"+k+"(?!\\S)"),V="data-placeholder-value",D="data-placeholder-active",I="data-placeholder-type",P="data-placeholder-submit",U="data-placeholder-bound",j="data-placeholder-focus",q="data-placeholder-live",z="data-placeholder-maxlength",F=document.createElement("input"),G=document.getElementsByTagName("head")[0],H=document.documentElement,J=t.Placeholders,K=J.Utils;if(J.nativeSupport=void 0!==F.placeholder,!J.nativeSupport){for(p=document.getElementsByTagName("input"),h=document.getElementsByTagName("textarea"),b="false"===H.getAttribute(j),f="false"!==H.getAttribute(q),A=document.createElement("style"),A.type="text/css",y=document.createTextNode("."+k+" { color:"+B+"; }"),A.styleSheet?A.styleSheet.cssText=y.nodeValue:A.appendChild(y),G.insertBefore(A,G.firstChild),S=0,N=p.length+h.length;N>S;S++)T=p.length>S?p[S]:h[S-p.length],E=T.attributes.placeholder,E&&(E=E.nodeValue,E&&K.inArray(w,T.type)&&v(T));x=setInterval(function(){for(S=0,N=p.length+h.length;N>S;S++)T=p.length>S?p[S]:h[S-p.length],E=T.attributes.placeholder,E&&(E=E.nodeValue,E&&K.inArray(w,T.type)&&(T.getAttribute(U)||v(T),(E!==T.getAttribute(V)||"password"===T.type&&!T.getAttribute(I))&&("password"===T.type&&!T.getAttribute(I)&&K.changeType(T,"text")&&T.setAttribute(I,"password"),T.value===T.getAttribute(V)&&(T.value=E),T.setAttribute(V,E))));f||clearInterval(x)},100)}J.disable=J.nativeSupport?e:u,J.enable=J.nativeSupport?e:i}(this);