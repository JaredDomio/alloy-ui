YUI.add("aui-messaging",function(e,t){var n=e.Lang,r=n.isString,i,s,o,u,a=e.Env,f=YUI.Env,l=e.config.win,c=l.location,h=!!l.postMessage,p="_A=",d="=A_",v=".*?",m=d+"\\d+&",g=new RegExp(m+"("+v+")"+p),y=new RegExp(m+v+p);s=function(t,r,i){if(r){n.isObject(t)&&(t=e.QueryString.stringify(t));try{i=e.one(i),i=i&&i.getDOM().contentWindow}catch(s){}i=i||l.parent;if(h)r=r.replace(/([^:]+:\/\/[^\/?]+).*/,"$1"),i.postMessage(t,r);else{var o=r.split("#"),u=o[1]||"";u=u.replace(y,"");var f=n.now()+ ++a._uidx;u=d+f+"&"+t+p+u,o[1]=u,i.location=o.join("#")}}},o=function(t,r,i){if(h){var s=u._callbackFn;s&&(f.remove(l,"message",s),u._callbackFn=null);if(t){var o=e.rbind(u._validateCallback,u,r,t);u._callbackFn=o,f.add(l,"message",o)}}else{var a=u._INTERVAL_ID;a&&(e.clearInterval(a),u._INTERVAL_ID=null),t&&(n.isUndefined(i)&&(i=100,n.isNumber(r)&&(i=r)),u._INTERVAL_ID=e.setInterval(u._pollHash,i,u,t))}},u={post:s,receive:o,_formatEventObject:function(e){var t=this;return e.responseData=t._getResponseData(e.data),e},_getResponseData:function(t){var n=t;return n&&/\w+=\w+/.test(n)&&(n=e.QueryString.parse(n)),n},_pollHash:function(e){var t=u,n=c.hash;if(n!==i&&y.test(n)){i=n;var r=n.match(g);r=r&&r[1]||"";var s={data:r};t._formatEventObject(s),e.call(u,s)}},_validateCallback:function(e,t,i){var s=u,o=e.origin,a=!1;n.isFunction(t)?a=t(o):r(t)&&(a=t===o),a&&(s._formatEventObject(e),i.call(u,e))}},e.postMessage=s,e.receiveMessage=o,e.Messaging=u},"3.1.0-deprecated.9",{requires:["querystring","aui-timer"]});
