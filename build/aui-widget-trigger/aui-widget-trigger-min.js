YUI.add("aui-widget-trigger",function(e,t){function r(){}var n=e.Lang;r.ATTRS={bindDOMEvents:{validator:n.isBoolean,value:!0,writeOnce:!0},trigger:{setter:e.one},triggerHideEvent:{value:null},triggerShowEvent:{value:null},triggerShowFn:{validator:n.isString,value:"show"},triggerHideFn:{validator:n.isString,value:"hide"},triggerToggleFn:{validator:n.isString,value:"toggle"},triggerToggleEvent:{value:null}},e.mix(r.prototype,{_triggerEventHandles:null,initializer:function(){var t=this;e.after(t._afterRenderUIWT,t,"renderUI"),t.after("triggerChange",t._afterTriggerChange)},destructor:function(){var t=this;(new e.EventHandle(t._triggerEventHandles)).detach()},_afterRenderUIWT:function(){var e=this;e._uiSetTrigger(e.get("trigger"))},_afterTriggerChange:function(e){var t=this;t._uiSetTrigger(e.newVal)},_uiSetTrigger:function(t){var n=this,r,i,s,o,u,a,f;(new e.EventHandle(n._triggerEventHandles)).detach(),t&&n.get("bindDOMEvents")&&(r=n._triggerEventHandles=[],i=n.get("triggerHideEvent"),s=n.get("triggerShowEvent"),o=n.get("triggerToggleEvent"),u=n.get("triggerHideFn"),a=n.get("triggerShowFn"),f=n.get("triggerToggleFn"),i&&r.push(t.on(n.get("triggerHideEvent"),e.bind(n[u],n))),s&&r.push(t.on(n.get("triggerShowEvent"),e.bind(n[a],n))),o&&r.push(t.on(n.get("triggerToggleEvent"),e.bind(n[f],n))))}}),e.WidgetTrigger=r},"3.1.0-deprecated.26",{requires:["node"]});
