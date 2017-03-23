YUI.add("aui-node-html5",function(e,t){if(e.UA.ie){var n=e.namespace("HTML5"),r=e.DOM._create;n._fragHTML5Shived||(n._fragHTML5Shived=e.html5shiv(e.config.doc.createDocumentFragment())),e.mix(n,{IECreateFix:function(e,t){var r=n._fragHTML5Shived;return r.appendChild(e),e.innerHTML=t,r.removeChild(e),e},_doBeforeCreate:function(t){var i=r.apply(this,arguments),s=n.IECreateFix(i,t);return new e.Do.Halt(null,s)}}),e.Do.before(n._doBeforeCreate,e.DOM,"_create",e.DOM)}var i=e.config,s=i.doc,o=i.win,u=e.UA,a=u.ie,f=function(){return o.AUI_HTML5_IE===!1};if(!a||a>=9||f())return;var l=[],c=o.location,h=c.protocol+"//"+c.host,p=s.documentElement,d=e.HTML5_ELEMENTS,v=d.length,m=d.join("|"),g=new RegExp("<(/?):("+m+")","gi"),y=new RegExp("("+m+")","gi"),b=new RegExp("\\b("+m+")\\b","i"),w=/print|all/,E=new RegExp("(^|[^\\n{}]*?\\s)("+m+").*?{([^}]*)}","gim"),S=new RegExp("<(/*)("+m+")","gi"),x=".printfix-$1",T="",N="url("+h,C="<$1$2",k="<$1font",L=e.html5shiv,A=function(e){return e&&e+T!==undefined},O=function(e,t,n){var r=t[n];r?e.setAttribute(n,r):e.removeAttribute(n)};L(s);var M=function(){var e,t=function(){f()?e():M.onAfterPrint()},n=function(){f()?e():M.onBeforePrint()};e=function(){o.detachEvent("onafterprint",t),o.detachEvent("onbeforeprint",n)};var r=function(){o.attachEvent("onafterprint",t),o.attachEvent("onbeforeprint",n)};r(),M.destroy=e,M.init=r};e.mix(M,{onAfterPrint:function(){var e=this;e.restoreHTML();var t=e._getStyleSheet();t.styleSheet.cssText=""},onBeforePrint:function(){var e=this,t=e._getStyleSheet(),n=e._getAllCSSText();t.styleSheet.cssText=e.parseCSS(n),e.writeHTML()},parseCSS:function(e){var t="",n=e.match(E);return n&&(t=n.join("\n").replace(y,x)),t},restoreHTML:function(){var e=this,t=e._getBodyClone(),n=e._getBodyEl(),r=t.getElementsByTagName("IFRAME"),i=n.getElementsByTagName("IFRAME"),s=i.length;if(s===r.length)while(s--){var o=r[s],u=i[s];u.swapNode(o)}t.innerHTML="",p.removeChild(t),p.appendChild(n)},writeHTML:function(){var e=this,t=-1,n,r=e._getBodyEl(),i,o,a,f,l,c=[];while(++t<v){i=d[t],a=s.getElementsByTagName(i),f=a.length,n=-1;while(++n<f)l=a[n],o=l.className,o.indexOf("printfix-")===-1&&(c[0]="printfix-"+i,c[1]=o,l.className=c.join(" "))}var h=e._getDocFrag(),m=e._getBodyClone();h.appendChild(r),p.appendChild(m),m.className=r.className,m.id=r.id;var y=r.getElementsByTagName("*"),b=y.length;if(u.secure){var w=r.style,E,x;w.display="none";for(t=0;t<b;t++)E=y[t].style,x=E.backgroundImage,x&&x.indexOf("url(")>-1&&x.indexOf("https")===-1&&(E.backgroundImage=x.replace("url(",N));w.display=""}var T=r.cloneNode(!0),L=T.getElementsByTagName("*");if(b===L.length)while(b--){var A=L[b],M=A.nodeName;if(M==="INPUT"||M==="OPTION"||M==="IFRAME"){var _=y[b],D=_.nodeName;if(D===M){var P=null;M==="OPTION"?P="selected":M!=="INPUT"||A.type!=="checkbox"&&A.type!=="radio"?M==="IFRAME"&&(A.src=""):P="checked",P!==null&&O(A,_,P)}}}var H=T.innerHTML;H=H.replace(g,C).replace(S,k),m.innerHTML=H,L=m.getElementsByTagName("IFRAME"),y=r.getElementsByTagName("IFRAME"),b=y.length;if(b===L.length)while(b--){var B=L[b],j=y[b];j.swapNode(B)}},_getAllCSSText:function(){var e=this,t=[],n=e._getAllStyleSheets(s.styleSheets,"all"),r,i,o;for(var u=0;o=n[u];u++){var a=o.rules;if(a&&a.length)for(var f=0,l=a.length;f<l;f++)r=a[f],r.href||(i=e._getCSSTextFromRule(r),t.push(i))}return t.join(" ")},_getCSSTextFromRule:function(e){var t="",n=e.style,r,i;return n&&(r=n.cssText)&&(i=e.selectorText)&&b.test(i)&&(l.length=0,l.push(i,"{",r,"}"),t=l.join(" ")),t},_getAllStyleSheets:function(e,t,n,r){var i=this;n=n||1,r=r||[];var s;if(A(e)){var o=e.imports;t=e.mediaType||t;if(w.test(t)){var u;if(n<=3&&A(o)&&o.length)for(s=0,u=o.length;s<u;s++)i._getAllStyleSheets(o[s],t,n+1,r);else if(e.length)for(s=0,u=e.length;s<u;s++)i._getAllStyleSheets(e[s],t,n,r);else{var a=e.rules,f;if(a&&a.length)for(s=0,u=a.length;s<u;s++)f=a[s].styleSheet,f&&i._getAllStyleSheets(f,t,n,r)}!e.disabled&&e.rules&&r.push(e)}}return t="all",r},_getBodyEl:function(){var e=this,t=e._bodyEl;return t||(t=s.body,e._bodyEl=t),t},_getBodyClone:function(){var e=this,t=e._bodyClone;return t||(t=s.createElement("body"),e._bodyClone=t),t},_getDocFrag:function(){var e=this,t=e._docFrag;return t||(t=s.createDocumentFragment(),L(t),e._docFrag=t),t},_getStyleSheet:function(){var e=this,t=e._styleSheet;if(!t){t=s.createElement("style");var n=s.documentElement.firstChild;n.insertBefore(t,n.firstChild),t.media="print",t.className="printfix",e._styleSheet=t}return t}}),e.namespace("HTML5").printFix=M,M()},"3.1.0-deprecated.9",{requires:["collection","aui-node-base"]});
