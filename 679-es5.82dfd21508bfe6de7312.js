!function(){function t(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}function n(t,e){return(n=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,e)}function e(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var e,o=r(t);if(n){var a=r(this).constructor;e=Reflect.construct(o,arguments,a)}else e=o.apply(this,arguments);return i(this,e)}}function i(t,n){return!n||"object"!=typeof n&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function o(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function a(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,n,e){return n&&a(t.prototype,n),e&&a(t,e),t}function u(t){return function(t){if(Array.isArray(t))return c(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||l(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,n){if(t){if("string"==typeof t)return c(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?c(t,n):void 0}}function c(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,i=new Array(n);e<n;e++)i[e]=t[e];return i}(self.webpackChunkharri_io=self.webpackChunkharri_io||[]).push([[679],{3679:function(n,i,r){"use strict";r.d(i,{sg:function(){return X},u5:function(){return tt},JU:function(){return d},a5:function(){return S},F:function(){return $}});var a=r(7716),c=(r(8583),r(4402)),h=r(5758),f=r(8002),d=new a.OlP("NgValueAccessor"),y=new a.OlP("NgValidators"),v=new a.OlP("NgAsyncValidators");function g(t){return null!=t}function p(t){var n=(0,a.QGY)(t)?(0,c.D)(t):t;return(0,a.CqO)(n),n}function _(t){var n={};return t.forEach(function(t){n=null!=t?Object.assign(Object.assign({},n),t):n}),0===Object.keys(n).length?null:n}function m(t,n){return n.map(function(n){return n(t)})}function k(t){return t.map(function(t){return function(t){return!t.validate}(t)?t:function(n){return t.validate(n)}})}function C(t){return null!=t?function(t){if(!t)return null;var n=t.filter(g);return 0==n.length?null:function(t){return _(m(t,n))}}(k(t)):null}function V(t){return null!=t?function(t){if(!t)return null;var n=t.filter(g);return 0==n.length?null:function(t){var e=m(t,n).map(p);return(0,h.D)(e).pipe((0,f.U)(_))}}(k(t)):null}function A(t,n){return null===t?[n]:Array.isArray(t)?[].concat(u(t),[n]):[t,n]}function b(t){return t._rawValidators}function E(t){return t._rawAsyncValidators}var O=function(){var t=function(){function t(){o(this,t),this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}return s(t,[{key:"value",get:function(){return this.control?this.control.value:null}},{key:"valid",get:function(){return this.control?this.control.valid:null}},{key:"invalid",get:function(){return this.control?this.control.invalid:null}},{key:"pending",get:function(){return this.control?this.control.pending:null}},{key:"disabled",get:function(){return this.control?this.control.disabled:null}},{key:"enabled",get:function(){return this.control?this.control.enabled:null}},{key:"errors",get:function(){return this.control?this.control.errors:null}},{key:"pristine",get:function(){return this.control?this.control.pristine:null}},{key:"dirty",get:function(){return this.control?this.control.dirty:null}},{key:"touched",get:function(){return this.control?this.control.touched:null}},{key:"status",get:function(){return this.control?this.control.status:null}},{key:"untouched",get:function(){return this.control?this.control.untouched:null}},{key:"statusChanges",get:function(){return this.control?this.control.statusChanges:null}},{key:"valueChanges",get:function(){return this.control?this.control.valueChanges:null}},{key:"path",get:function(){return null}},{key:"_setValidators",value:function(t){this._rawValidators=t||[],this._composedValidatorFn=C(this._rawValidators)}},{key:"_setAsyncValidators",value:function(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=V(this._rawAsyncValidators)}},{key:"validator",get:function(){return this._composedValidatorFn||null}},{key:"asyncValidator",get:function(){return this._composedAsyncValidatorFn||null}},{key:"_registerOnDestroy",value:function(t){this._onDestroyCallbacks.push(t)}},{key:"_invokeOnDestroyCallbacks",value:function(){this._onDestroyCallbacks.forEach(function(t){return t()}),this._onDestroyCallbacks=[]}},{key:"reset",value:function(t){this.control&&this.control.reset(t)}},{key:"hasError",value:function(t,n){return!!this.control&&this.control.hasError(t,n)}},{key:"getError",value:function(t,n){return this.control?this.control.getError(t,n):null}}]),t}();return t.\u0275fac=function(n){return new(n||t)},t.\u0275dir=a.lG2({type:t}),t}(),w=function(){var n,i=function(n){t(r,n);var i=e(r);function r(){return o(this,r),i.apply(this,arguments)}return s(r,[{key:"formDirective",get:function(){return null}},{key:"path",get:function(){return null}}]),r}(O);return i.\u0275fac=function(t){return(n||(n=a.n5z(i)))(t||i)},i.\u0275dir=a.lG2({type:i,features:[a.qOj]}),i}(),S=function(n){t(r,n);var i=e(r);function r(){var t;return o(this,r),(t=i.apply(this,arguments))._parent=null,t.name=null,t.valueAccessor=null,t}return r}(O);function D(t,n){T(t,n),n.valueAccessor.writeValue(t.value),function(t,n){n.valueAccessor.registerOnChange(function(e){t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,"change"===t.updateOn&&I(t,n)})}(t,n),function(t,n){var e=function(t,e){n.valueAccessor.writeValue(t),e&&n.viewToModelUpdate(t)};t.registerOnChange(e),n._registerOnDestroy(function(){t._unregisterOnChange(e)})}(t,n),function(t,n){n.valueAccessor.registerOnTouched(function(){t._pendingTouched=!0,"blur"===t.updateOn&&t._pendingChange&&I(t,n),"submit"!==t.updateOn&&t.markAsTouched()})}(t,n),function(t,n){if(n.valueAccessor.setDisabledState){var e=function(t){n.valueAccessor.setDisabledState(t)};t.registerOnDisabledChange(e),n._registerOnDestroy(function(){t._unregisterOnDisabledChange(e)})}}(t,n)}function P(t,n){var e=function(){};n.valueAccessor&&(n.valueAccessor.registerOnChange(e),n.valueAccessor.registerOnTouched(e)),j(t,n),t&&(n._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(function(){}))}function F(t,n){t.forEach(function(t){t.registerOnValidatorChange&&t.registerOnValidatorChange(n)})}function T(t,n){var e=b(t);null!==n.validator?t.setValidators(A(e,n.validator)):"function"==typeof e&&t.setValidators([e]);var i=E(t);null!==n.asyncValidator?t.setAsyncValidators(A(i,n.asyncValidator)):"function"==typeof i&&t.setAsyncValidators([i]);var r=function(){return t.updateValueAndValidity()};F(n._rawValidators,r),F(n._rawAsyncValidators,r)}function j(t,n){var e=!1;if(null!==t){if(null!==n.validator){var i=b(t);if(Array.isArray(i)&&i.length>0){var r=i.filter(function(t){return t!==n.validator});r.length!==i.length&&(e=!0,t.setValidators(r))}}if(null!==n.asyncValidator){var o=E(t);if(Array.isArray(o)&&o.length>0){var a=o.filter(function(t){return t!==n.asyncValidator});a.length!==o.length&&(e=!0,t.setAsyncValidators(a))}}}var s=function(){};return F(n._rawValidators,s),F(n._rawAsyncValidators,s),e}function I(t,n){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function U(t,n){T(t,n)}function G(t,n){t._syncPendingControls(),n.forEach(function(t){var n=t.control;"submit"===n.updateOn&&n._pendingChange&&(t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function N(t,n){var e=t.indexOf(n);e>-1&&t.splice(e,1)}function M(t){return(L(t)?t.validators:t)||null}function x(t){return Array.isArray(t)?C(t):t||null}function B(t,n){return(L(n)?n.asyncValidators:t)||null}function R(t){return Array.isArray(t)?V(t):t||null}function L(t){return null!=t&&!Array.isArray(t)&&"object"==typeof t}var J=function(){function t(n,e){o(this,t),this._hasOwnPendingAsyncValidator=!1,this._onCollectionChange=function(){},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._rawValidators=n,this._rawAsyncValidators=e,this._composedValidatorFn=x(this._rawValidators),this._composedAsyncValidatorFn=R(this._rawAsyncValidators)}return s(t,[{key:"validator",get:function(){return this._composedValidatorFn},set:function(t){this._rawValidators=this._composedValidatorFn=t}},{key:"asyncValidator",get:function(){return this._composedAsyncValidatorFn},set:function(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}},{key:"parent",get:function(){return this._parent}},{key:"valid",get:function(){return"VALID"===this.status}},{key:"invalid",get:function(){return"INVALID"===this.status}},{key:"pending",get:function(){return"PENDING"==this.status}},{key:"disabled",get:function(){return"DISABLED"===this.status}},{key:"enabled",get:function(){return"DISABLED"!==this.status}},{key:"dirty",get:function(){return!this.pristine}},{key:"untouched",get:function(){return!this.touched}},{key:"updateOn",get:function(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}},{key:"setValidators",value:function(t){this._rawValidators=t,this._composedValidatorFn=x(t)}},{key:"setAsyncValidators",value:function(t){this._rawAsyncValidators=t,this._composedAsyncValidatorFn=R(t)}},{key:"clearValidators",value:function(){this.validator=null}},{key:"clearAsyncValidators",value:function(){this.asyncValidator=null}},{key:"markAsTouched",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.touched=!0,this._parent&&!t.onlySelf&&this._parent.markAsTouched(t)}},{key:"markAllAsTouched",value:function(){this.markAsTouched({onlySelf:!0}),this._forEachChild(function(t){return t.markAllAsTouched()})}},{key:"markAsUntouched",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.touched=!1,this._pendingTouched=!1,this._forEachChild(function(t){t.markAsUntouched({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}},{key:"markAsDirty",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.pristine=!1,this._parent&&!t.onlySelf&&this._parent.markAsDirty(t)}},{key:"markAsPristine",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.pristine=!0,this._pendingDirty=!1,this._forEachChild(function(t){t.markAsPristine({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}},{key:"markAsPending",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.status="PENDING",!1!==t.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!t.onlySelf&&this._parent.markAsPending(t)}},{key:"disable",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=this._parentMarkedDirty(t.onlySelf);this.status="DISABLED",this.errors=null,this._forEachChild(function(n){n.disable(Object.assign(Object.assign({},t),{onlySelf:!0}))}),this._updateValue(),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(Object.assign(Object.assign({},t),{skipPristineCheck:n})),this._onDisabledChange.forEach(function(t){return t(!0)})}},{key:"enable",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=this._parentMarkedDirty(t.onlySelf);this.status="VALID",this._forEachChild(function(n){n.enable(Object.assign(Object.assign({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(Object.assign(Object.assign({},t),{skipPristineCheck:n})),this._onDisabledChange.forEach(function(t){return t(!1)})}},{key:"_updateAncestors",value:function(t){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}},{key:"setParent",value:function(t){this._parent=t}},{key:"updateValueAndValidity",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),"VALID"!==this.status&&"PENDING"!==this.status||this._runAsyncValidator(t.emitEvent)),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(t)}},{key:"_updateTreeValidity",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{emitEvent:!0};this._forEachChild(function(n){return n._updateTreeValidity(t)}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}},{key:"_setInitialStatus",value:function(){this.status=this._allControlsDisabled()?"DISABLED":"VALID"}},{key:"_runValidator",value:function(){return this.validator?this.validator(this):null}},{key:"_runAsyncValidator",value:function(t){var n=this;if(this.asyncValidator){this.status="PENDING",this._hasOwnPendingAsyncValidator=!0;var e=p(this.asyncValidator(this));this._asyncValidationSubscription=e.subscribe(function(e){n._hasOwnPendingAsyncValidator=!1,n.setErrors(e,{emitEvent:t})})}}},{key:"_cancelExistingSubscription",value:function(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}},{key:"setErrors",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.errors=t,this._updateControlsErrors(!1!==n.emitEvent)}},{key:"get",value:function(t){return function(t,n,e){if(null==n)return null;if(Array.isArray(n)||(n=n.split(".")),Array.isArray(n)&&0===n.length)return null;var i=t;return n.forEach(function(t){i=i instanceof q?i.controls.hasOwnProperty(t)?i.controls[t]:null:i instanceof H&&i.at(t)||null}),i}(this,t)}},{key:"getError",value:function(t,n){var e=n?this.get(n):this;return e&&e.errors?e.errors[t]:null}},{key:"hasError",value:function(t,n){return!!this.getError(t,n)}},{key:"root",get:function(){for(var t=this;t._parent;)t=t._parent;return t}},{key:"_updateControlsErrors",value:function(t){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(t)}},{key:"_initObservables",value:function(){this.valueChanges=new a.vpe,this.statusChanges=new a.vpe}},{key:"_calculateStatus",value:function(){return this._allControlsDisabled()?"DISABLED":this.errors?"INVALID":this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus("PENDING")?"PENDING":this._anyControlsHaveStatus("INVALID")?"INVALID":"VALID"}},{key:"_anyControlsHaveStatus",value:function(t){return this._anyControls(function(n){return n.status===t})}},{key:"_anyControlsDirty",value:function(){return this._anyControls(function(t){return t.dirty})}},{key:"_anyControlsTouched",value:function(){return this._anyControls(function(t){return t.touched})}},{key:"_updatePristine",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.pristine=!this._anyControlsDirty(),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}},{key:"_updateTouched",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.touched=this._anyControlsTouched(),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}},{key:"_isBoxedValue",value:function(t){return"object"==typeof t&&null!==t&&2===Object.keys(t).length&&"value"in t&&"disabled"in t}},{key:"_registerOnCollectionChange",value:function(t){this._onCollectionChange=t}},{key:"_setUpdateStrategy",value:function(t){L(t)&&null!=t.updateOn&&(this._updateOn=t.updateOn)}},{key:"_parentMarkedDirty",value:function(t){return!t&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}}]),t}(),Y=function(n){t(r,n);var i=e(r);function r(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1?arguments[1]:void 0,a=arguments.length>2?arguments[2]:void 0;return o(this,r),(t=i.call(this,M(e),B(a,e)))._onChange=[],t._applyFormState(n),t._setUpdateStrategy(e),t._initObservables(),t.updateValueAndValidity({onlySelf:!0,emitEvent:!!t.asyncValidator}),t}return s(r,[{key:"setValue",value:function(t){var n=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.value=this._pendingValue=t,this._onChange.length&&!1!==e.emitModelToViewChange&&this._onChange.forEach(function(t){return t(n.value,!1!==e.emitViewToModelChange)}),this.updateValueAndValidity(e)}},{key:"patchValue",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.setValue(t,n)}},{key:"reset",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this._applyFormState(t),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}},{key:"_updateValue",value:function(){}},{key:"_anyControls",value:function(t){return!1}},{key:"_allControlsDisabled",value:function(){return this.disabled}},{key:"registerOnChange",value:function(t){this._onChange.push(t)}},{key:"_unregisterOnChange",value:function(t){N(this._onChange,t)}},{key:"registerOnDisabledChange",value:function(t){this._onDisabledChange.push(t)}},{key:"_unregisterOnDisabledChange",value:function(t){N(this._onDisabledChange,t)}},{key:"_forEachChild",value:function(t){}},{key:"_syncPendingControls",value:function(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}},{key:"_applyFormState",value:function(t){this._isBoxedValue(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}}]),r}(J),q=function(n){t(r,n);var i=e(r);function r(t,n,e){var a;return o(this,r),(a=i.call(this,M(n),B(e,n))).controls=t,a._initObservables(),a._setUpdateStrategy(n),a._setUpControls(),a.updateValueAndValidity({onlySelf:!0,emitEvent:!!a.asyncValidator}),a}return s(r,[{key:"registerControl",value:function(t,n){return this.controls[t]?this.controls[t]:(this.controls[t]=n,n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange),n)}},{key:"addControl",value:function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.registerControl(t,n),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}},{key:"removeControl",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.controls[t]&&this.controls[t]._registerOnCollectionChange(function(){}),delete this.controls[t],this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}},{key:"setControl",value:function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.controls[t]&&this.controls[t]._registerOnCollectionChange(function(){}),delete this.controls[t],n&&this.registerControl(t,n),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}},{key:"contains",value:function(t){return this.controls.hasOwnProperty(t)&&this.controls[t].enabled}},{key:"setValue",value:function(t){var n=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this._checkAllValuesPresent(t),Object.keys(t).forEach(function(i){n._throwIfControlMissing(i),n.controls[i].setValue(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}},{key:"patchValue",value:function(t){var n=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};null!=t&&(Object.keys(t).forEach(function(i){n.controls[i]&&n.controls[i].patchValue(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}},{key:"reset",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this._forEachChild(function(e,i){e.reset(t[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n),this._updateTouched(n),this.updateValueAndValidity(n)}},{key:"getRawValue",value:function(){return this._reduceChildren({},function(t,n,e){return t[e]=n instanceof Y?n.value:n.getRawValue(),t})}},{key:"_syncPendingControls",value:function(){var t=this._reduceChildren(!1,function(t,n){return!!n._syncPendingControls()||t});return t&&this.updateValueAndValidity({onlySelf:!0}),t}},{key:"_throwIfControlMissing",value:function(t){if(!Object.keys(this.controls).length)throw new Error("\n        There are no form controls registered with this group yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");if(!this.controls[t])throw new Error("Cannot find form control with name: ".concat(t,"."))}},{key:"_forEachChild",value:function(t){var n=this;Object.keys(this.controls).forEach(function(e){var i=n.controls[e];i&&t(i,e)})}},{key:"_setUpControls",value:function(){var t=this;this._forEachChild(function(n){n.setParent(t),n._registerOnCollectionChange(t._onCollectionChange)})}},{key:"_updateValue",value:function(){this.value=this._reduceValue()}},{key:"_anyControls",value:function(t){for(var n=0,e=Object.keys(this.controls);n<e.length;n++){var i=e[n],r=this.controls[i];if(this.contains(i)&&t(r))return!0}return!1}},{key:"_reduceValue",value:function(){var t=this;return this._reduceChildren({},function(n,e,i){return(e.enabled||t.disabled)&&(n[i]=e.value),n})}},{key:"_reduceChildren",value:function(t,n){var e=t;return this._forEachChild(function(t,i){e=n(e,t,i)}),e}},{key:"_allControlsDisabled",value:function(){for(var t=0,n=Object.keys(this.controls);t<n.length;t++){var e=n[t];if(this.controls[e].enabled)return!1}return Object.keys(this.controls).length>0||this.disabled}},{key:"_checkAllValuesPresent",value:function(t){this._forEachChild(function(n,e){if(void 0===t[e])throw new Error("Must supply a value for form control with name: '".concat(e,"'."))})}}]),r}(J),H=function(n){t(r,n);var i=e(r);function r(t,n,e){var a;return o(this,r),(a=i.call(this,M(n),B(e,n))).controls=t,a._initObservables(),a._setUpdateStrategy(n),a._setUpControls(),a.updateValueAndValidity({onlySelf:!0,emitEvent:!!a.asyncValidator}),a}return s(r,[{key:"at",value:function(t){return this.controls[t]}},{key:"push",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.controls.push(t),this._registerControl(t),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}},{key:"insert",value:function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.controls.splice(t,0,n),this._registerControl(n),this.updateValueAndValidity({emitEvent:e.emitEvent})}},{key:"removeAt",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.controls[t]&&this.controls[t]._registerOnCollectionChange(function(){}),this.controls.splice(t,1),this.updateValueAndValidity({emitEvent:n.emitEvent})}},{key:"setControl",value:function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.controls[t]&&this.controls[t]._registerOnCollectionChange(function(){}),this.controls.splice(t,1),n&&(this.controls.splice(t,0,n),this._registerControl(n)),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}},{key:"length",get:function(){return this.controls.length}},{key:"setValue",value:function(t){var n=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this._checkAllValuesPresent(t),t.forEach(function(t,i){n._throwIfControlMissing(i),n.at(i).setValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}},{key:"patchValue",value:function(t){var n=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};null!=t&&(t.forEach(function(t,i){n.at(i)&&n.at(i).patchValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}},{key:"reset",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this._forEachChild(function(e,i){e.reset(t[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n),this._updateTouched(n),this.updateValueAndValidity(n)}},{key:"getRawValue",value:function(){return this.controls.map(function(t){return t instanceof Y?t.value:t.getRawValue()})}},{key:"clear",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.controls.length<1||(this._forEachChild(function(t){return t._registerOnCollectionChange(function(){})}),this.controls.splice(0),this.updateValueAndValidity({emitEvent:t.emitEvent}))}},{key:"_syncPendingControls",value:function(){var t=this.controls.reduce(function(t,n){return!!n._syncPendingControls()||t},!1);return t&&this.updateValueAndValidity({onlySelf:!0}),t}},{key:"_throwIfControlMissing",value:function(t){if(!this.controls.length)throw new Error("\n        There are no form controls registered with this array yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");if(!this.at(t))throw new Error("Cannot find form control at index ".concat(t))}},{key:"_forEachChild",value:function(t){this.controls.forEach(function(n,e){t(n,e)})}},{key:"_updateValue",value:function(){var t=this;this.value=this.controls.filter(function(n){return n.enabled||t.disabled}).map(function(t){return t.value})}},{key:"_anyControls",value:function(t){return this.controls.some(function(n){return n.enabled&&t(n)})}},{key:"_setUpControls",value:function(){var t=this;this._forEachChild(function(n){return t._registerControl(n)})}},{key:"_checkAllValuesPresent",value:function(t){this._forEachChild(function(n,e){if(void 0===t[e])throw new Error("Must supply a value for form control at index: ".concat(e,"."))})}},{key:"_allControlsDisabled",value:function(){var t,n=function(t,n){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=l(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,s=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return a=t.done,t},e:function(t){s=!0,o=t},f:function(){try{a||null==e.return||e.return()}finally{if(s)throw o}}}}(this.controls);try{for(n.s();!(t=n.n()).done;){if(t.value.enabled)return!1}}catch(e){n.e(e)}finally{n.f()}return this.controls.length>0||this.disabled}},{key:"_registerControl",value:function(t){t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)}}]),r}(J),z={provide:w,useExisting:(0,a.Gpc)(function(){return $})},Q=Promise.resolve(null),$=function(){var n=function(n){t(r,n);var i=e(r);function r(t,n){var e;return o(this,r),(e=i.call(this)).submitted=!1,e._directives=[],e.ngSubmit=new a.vpe,e.form=new q({},C(t),V(n)),e}return s(r,[{key:"ngAfterViewInit",value:function(){this._setUpdateStrategy()}},{key:"formDirective",get:function(){return this}},{key:"control",get:function(){return this.form}},{key:"path",get:function(){return[]}},{key:"controls",get:function(){return this.form.controls}},{key:"addControl",value:function(t){var n=this;Q.then(function(){var e=n._findContainer(t.path);t.control=e.registerControl(t.name,t.control),D(t.control,t),t.control.updateValueAndValidity({emitEvent:!1}),n._directives.push(t)})}},{key:"getControl",value:function(t){return this.form.get(t.path)}},{key:"removeControl",value:function(t){var n=this;Q.then(function(){var e=n._findContainer(t.path);e&&e.removeControl(t.name),N(n._directives,t)})}},{key:"addFormGroup",value:function(t){var n=this;Q.then(function(){var e=n._findContainer(t.path),i=new q({});U(i,t),e.registerControl(t.name,i),i.updateValueAndValidity({emitEvent:!1})})}},{key:"removeFormGroup",value:function(t){var n=this;Q.then(function(){var e=n._findContainer(t.path);e&&e.removeControl(t.name)})}},{key:"getFormGroup",value:function(t){return this.form.get(t.path)}},{key:"updateModel",value:function(t,n){var e=this;Q.then(function(){e.form.get(t.path).setValue(n)})}},{key:"setValue",value:function(t){this.control.setValue(t)}},{key:"onSubmit",value:function(t){return this.submitted=!0,G(this.form,this._directives),this.ngSubmit.emit(t),!1}},{key:"onReset",value:function(){this.resetForm()}},{key:"resetForm",value:function(t){this.form.reset(t),this.submitted=!1}},{key:"_setUpdateStrategy",value:function(){this.options&&null!=this.options.updateOn&&(this.form._updateOn=this.options.updateOn)}},{key:"_findContainer",value:function(t){return t.pop(),t.length?this.form.get(t):this.form}}]),r}(w);return n.\u0275fac=function(t){return new(t||n)(a.Y36(y,10),a.Y36(v,10))},n.\u0275dir=a.lG2({type:n,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(t,n){1&t&&a.NdJ("submit",function(t){return n.onSubmit(t)})("reset",function(){return n.onReset()})},inputs:{options:["ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[a._Bn([z]),a.qOj]}),n}(),K=function(){var t=function t(){o(this,t)};return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({}),t}(),W={provide:w,useExisting:(0,a.Gpc)(function(){return X})},X=function(){var n=function(n){t(r,n);var i=e(r);function r(t,n){var e;return o(this,r),(e=i.call(this)).validators=t,e.asyncValidators=n,e.submitted=!1,e._onCollectionChange=function(){return e._updateDomValue()},e.directives=[],e.form=null,e.ngSubmit=new a.vpe,e._setValidators(t),e._setAsyncValidators(n),e}return s(r,[{key:"ngOnChanges",value:function(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}},{key:"ngOnDestroy",value:function(){this.form&&(j(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(function(){}))}},{key:"formDirective",get:function(){return this}},{key:"control",get:function(){return this.form}},{key:"path",get:function(){return[]}},{key:"addControl",value:function(t){var n=this.form.get(t.path);return D(n,t),n.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),n}},{key:"getControl",value:function(t){return this.form.get(t.path)}},{key:"removeControl",value:function(t){P(t.control||null,t,!1),N(this.directives,t)}},{key:"addFormGroup",value:function(t){this._setUpFormContainer(t)}},{key:"removeFormGroup",value:function(t){this._cleanUpFormContainer(t)}},{key:"getFormGroup",value:function(t){return this.form.get(t.path)}},{key:"addFormArray",value:function(t){this._setUpFormContainer(t)}},{key:"removeFormArray",value:function(t){this._cleanUpFormContainer(t)}},{key:"getFormArray",value:function(t){return this.form.get(t.path)}},{key:"updateModel",value:function(t,n){this.form.get(t.path).setValue(n)}},{key:"onSubmit",value:function(t){return this.submitted=!0,G(this.form,this.directives),this.ngSubmit.emit(t),!1}},{key:"onReset",value:function(){this.resetForm()}},{key:"resetForm",value:function(t){this.form.reset(t),this.submitted=!1}},{key:"_updateDomValue",value:function(){var t=this;this.directives.forEach(function(n){var e=n.control,i=t.form.get(n.path);e!==i&&(P(e||null,n),i instanceof Y&&(D(i,n),n.control=i))}),this.form._updateTreeValidity({emitEvent:!1})}},{key:"_setUpFormContainer",value:function(t){var n=this.form.get(t.path);U(n,t),n.updateValueAndValidity({emitEvent:!1})}},{key:"_cleanUpFormContainer",value:function(t){if(this.form){var n=this.form.get(t.path);n&&function(t,n){return j(t,n)}(n,t)&&n.updateValueAndValidity({emitEvent:!1})}}},{key:"_updateRegistrations",value:function(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(function(){})}},{key:"_updateValidators",value:function(){T(this.form,this),this._oldForm&&j(this._oldForm,this)}},{key:"_checkFormPresent",value:function(){}}]),r}(w);return n.\u0275fac=function(t){return new(t||n)(a.Y36(y,10),a.Y36(v,10))},n.\u0275dir=a.lG2({type:n,selectors:[["","formGroup",""]],hostBindings:function(t,n){1&t&&a.NdJ("submit",function(t){return n.onSubmit(t)})("reset",function(){return n.onReset()})},inputs:{form:["formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[a._Bn([W]),a.qOj,a.TTD]}),n}(),Z=function(){var t=function t(){o(this,t)};return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[K]]}),t}(),tt=function(){var t=function t(){o(this,t)};return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[Z]}),t}()}}])}();