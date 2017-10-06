YUI.add("aui-overlay-context-deprecated",function(e,t){var n=e.Lang,r=n.isString,i=n.isNumber,s=n.isObject,o=n.isBoolean,u=function(t){return t instanceof e.NodeList},a="align",f="bl",l="boundingBox",c="cancellableHide",h="overlaycontext",p="currentNode",d="focused",v="hide",m="hideDelay",g="hideOn",y="hideOnDocumentClick",b="mousedown",w="show",E="showDelay",S="showOn",x="tl",T="trigger",N="useARIA",C="visible",k=e.Component.create({NAME:h,ATTRS:{align:{value:{node:null,points:[x,f]}},cancellableHide:{value:!0,validator:o},currentNode:{valueFn:function(){return this.get(T).item(0)}},delay:{value:null,validator:s},hideOn:{lazyAdd:!1,value:"mouseout",setter:function(e){return this._setHideOn(e)}},hideOnDocumentClick:{lazyAdd:!1,setter:function(e){return this._setHideOnDocumentClick(e)},value:!0,validator:o},hideDelay:{lazyAdd:!1,setter:"_setHideDelay",value:0,validator:i},showOn:{lazyAdd:!1,value:"mouseover",setter:function(e){return this._setShowOn(e)}},showDelay:{lazyAdd:!1,setter:"_setShowDelay",value:0,validator:i},trigger:{lazyAdd:!1,setter:function(t){return u(t)?t:r(t)?e.all(t):new e.NodeList([t])}},useARIA:{value:!0},visible:{value:!1}},EXTENDS:e.OverlayBase,constructor:function(e){var t=this;t._showCallback=null,t._hideCallback=null,k.superclass.constructor.apply(this,arguments)},prototype:{initializer:function(){var e=this,t=e.get(T);t&&t.size()&&e.set("align.node",t.item(0))},bindUI:function(){var t=this,n=t.get(l);n.on(b,t._stopTriggerEventPropagation),t.before("triggerChange",t._beforeTriggerChange),t.before("showOnChange",t._beforeShowOnChange),t.before("hideOnChange",t._beforeHideOnChange),t.after("triggerChange",t._afterTriggerChange),t.after("showOnChange",t._afterShowOnChange),t.after("hideOnChange",t._afterHideOnChange),n.on("click",e.bind(t._cancelAutoHide,t)),n.on("mouseenter",e.bind(t._cancelAutoHide,t)),n.on("mouseleave",e.bind(t._invokeHideTaskOnInteraction,t)),t.after("focusedChange",e.bind(t._invokeHideTaskOnInteraction,t)),t.on("visibleChange",t._onVisibleChangeOverlayContext)},hide:function(){var e=this;e.clearIntervals(),e.fire("hide"),k.superclass.hide.apply(e,arguments)},show:function(e){var t=this;t.clearIntervals(),t.updateCurrentNode(e),t.fire("show"),k.superclass.show.apply(t,arguments),t.refreshAlign()},syncUI:function(){var t=this;t.get(N)&&t.plug(e.Plugin.Aria,{attributes:{trigger:{ariaName:"controls",format:function(e){var n=t.get(l).generateID();return n},node:function(){return t.get(T)}},visible:{ariaName:"hidden",format:function(e){return!e}}},roleName:"dialog"})},toggle:function(e){var t=this;t.get(C)?t._hideTask(e):t._showTask(e)},clearIntervals:function(){this._hideTask.cancel(),this._showTask.cancel()},refreshAlign:function(){var e=this,t=e.get(a),n=e.get(p);n&&e._uiSetAlign(n,t.points)},updateCurrentNode:function(e){var t=this,n=t.get(a),r=t.get(T),i=null;e&&(i=e.currentTarget);var s=i||r.item(0)||n.node;s&&t.set(p,s)},_toggle:function(e){var t=this;if(t.get("disabled"))return;var n=e.currentTarget;t._lastTarget!=n&&t.hide(),t.toggle(e),e.stopPropagation(),t._lastTarget=n},_afterShowOnChange:function(e){var t=this,n=e.prevVal==t.get(g);if(n){var r=t.get(T);r.detach(e.prevVal,t._hideCallback),t._setHideOn(t.get(g))}},_afterHideOnChange:function(e){var t=this,n=e.prevVal==t.get(S);if(n){var r=t.get(T);r.detach(e.prevVal,t._showCallback),t._setShowOn(t.get(S))}},_afterTriggerChange:function(e){var t=this;t._setShowOn(t.get(S)),t._setHideOn(t.get(g))},_beforeShowOnChange:function(e){var t=this,n=t.get(T);n.detach(e.prevVal,t._showCallback)},_beforeHideOnChange:function(e){var t=this,n=t.get(T);n.detach(e.prevVal,t._hideCallback)},_beforeTriggerChange:function(e){var t=this,n=t.get(T),r=t.get(S),i=t.get(g);n.detach(r,t._showCallback),n.detach(i,t._hideCallback),n.detach(b,t._stopTriggerEventPropagation)},_cancelAutoHide:function(e){var t=this;t.get(c)&&t.clearIntervals(),e.stopPropagation()},_invokeHideTaskOnInteraction:function(e){var t=this,n=t.get(c),r=t.get(d);!r&&!n&&t._hideTask()},_onVisibleChangeOverlayContext:function(e){var t=this;e.newVal&&t.get("disabled")&&e.preventDefault()},_stopTriggerEventPropagation:function(e){e.stopPropagation()},_setHideDelay:function(t){var n=this;return n._hideTask=e.debounce(n.hide,t,n),t},_setHideOn:function(t){var n=this,r=n.get(T),i=t==n.get(S);if(i)n._hideCallback=e.bind(n._toggle,n),r.detach(t,n._showCallback);else{var s=n.get(m);n._hideCallback=function(e){n._hideTask(e),e.stopPropagation()}}return r.on(t,n._hideCallback),t},_setHideOnDocumentClick:function(t){var n=this;return t?e.OverlayContextManager.register(n):e.OverlayContextManager.remove(n),t},_setShowDelay:function(t){var n=this;return n._showTask=e.debounce(n.show,t,n),t},_setShowOn:function(t){var n=this,r=n.get(T),i=t==n.get(g);if(i)n._showCallback=e.bind(n._toggle,n),r.detach(t,n._hideCallback);else{var s=n.get(E);n._showCallback=function(e){n._showTask(e),e.stopPropagation()}}return t!=b?r.on(b,n._stopTriggerEventPropagation):r.detach(b,n._stopTriggerEventPropagation),r.on(t,n._showCallback),t}}});e.OverlayContext=k,e.OverlayContextManager=new e.OverlayManager({}),e.on(b,function(){e.OverlayContextManager.hideAll()},e.getDoc())},"3.1.0-deprecated.26",{requires:["aui-overlay-manager-deprecated","aui-delayed-task-deprecated","aui-aria"]});
