/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2001 Robert Penner
 * All rights reserved.
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/
jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,f,a,h,g){return jQuery.easing[jQuery.easing.def](e,f,a,h,g)},easeInQuad:function(e,f,a,h,g){return h*(f/=g)*f+a},easeOutQuad:function(e,f,a,h,g){return -h*(f/=g)*(f-2)+a},easeInOutQuad:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f+a}return -h/2*((--f)*(f-2)-1)+a},easeInCubic:function(e,f,a,h,g){return h*(f/=g)*f*f+a},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a},easeInQuart:function(e,f,a,h,g){return h*(f/=g)*f*f*f+a},easeOutQuart:function(e,f,a,h,g){return -h*((f=f/g-1)*f*f*f-1)+a},easeInOutQuart:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f+a}return -h/2*((f-=2)*f*f*f-2)+a},easeInQuint:function(e,f,a,h,g){return h*(f/=g)*f*f*f*f+a},easeOutQuint:function(e,f,a,h,g){return h*((f=f/g-1)*f*f*f*f+1)+a},easeInOutQuint:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f*f+a}return h/2*((f-=2)*f*f*f*f+2)+a},easeInSine:function(e,f,a,h,g){return -h*Math.cos(f/g*(Math.PI/2))+h+a},easeOutSine:function(e,f,a,h,g){return h*Math.sin(f/g*(Math.PI/2))+a},easeInOutSine:function(e,f,a,h,g){return -h/2*(Math.cos(Math.PI*f/g)-1)+a},easeInExpo:function(e,f,a,h,g){return(f==0)?a:h*Math.pow(2,10*(f/g-1))+a},easeOutExpo:function(e,f,a,h,g){return(f==g)?a+h:h*(-Math.pow(2,-10*f/g)+1)+a},easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a},easeInCirc:function(e,f,a,h,g){return -h*(Math.sqrt(1-(f/=g)*f)-1)+a},easeOutCirc:function(e,f,a,h,g){return h*Math.sqrt(1-(f=f/g-1)*f)+a},easeInOutCirc:function(e,f,a,h,g){if((f/=g/2)<1){return -h/2*(Math.sqrt(1-f*f)-1)+a}return h/2*(Math.sqrt(1-(f-=2)*f)+1)+a},easeInElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return -(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e},easeOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return g*Math.pow(2,-10*h)*Math.sin((h*k-i)*(2*Math.PI)/j)+l+e},easeInOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k/2)==2){return e+l}if(!j){j=k*(0.3*1.5)}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}if(h<1){return -0.5*(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e}return g*Math.pow(2,-10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j)*0.5+l+e},easeInBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*(f/=h)*f*((g+1)*f-g)+a},easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeInOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}if((f/=h/2)<1){return i/2*(f*f*(((g*=(1.525))+1)*f-g))+a}return i/2*((f-=2)*f*(((g*=(1.525))+1)*f+g)+2)+a},easeInBounce:function(e,f,a,h,g){return h-jQuery.easing.easeOutBounce(e,g-f,0,h,g)+a},easeOutBounce:function(e,f,a,h,g){if((f/=g)<(1/2.75)){return h*(7.5625*f*f)+a}else{if(f<(2/2.75)){return h*(7.5625*(f-=(1.5/2.75))*f+0.75)+a}else{if(f<(2.5/2.75)){return h*(7.5625*(f-=(2.25/2.75))*f+0.9375)+a}else{return h*(7.5625*(f-=(2.625/2.75))*f+0.984375)+a}}}},easeInOutBounce:function(e,f,a,h,g){if(f<g/2){return jQuery.easing.easeInBounce(e,f*2,0,h,g)*0.5+a}return jQuery.easing.easeOutBounce(e,f*2-g,0,h,g)*0.5+h*0.5+a}});


/*-----------------------------------------------------------------------------------------------*/

/*!
 * Bootstrap v3.2.0 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.2.0",d.prototype.close=function(b){function c(){f.detach().trigger("closed.bs.alert").remove()}var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));var f=a(e);b&&b.preventDefault(),f.length||(f=d.hasClass("alert")?d:d.parent()),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",c).emulateTransitionEnd(150):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.2.0",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),d[e](null==f[b]?this.options[b]:f[b]),setTimeout(a.proxy(function(){"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}a&&this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),c.preventDefault()})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b).on("keydown.bs.carousel",a.proxy(this.keydown,this)),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.2.0",c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},c.prototype.keydown=function(a){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.to=function(b){var c=this,d=this.getItemIndex(this.$active=this.$element.find(".item.active"));return b>this.$items.length-1||0>b?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g="next"==b?"left":"right",h="next"==b?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}if(e.hasClass("active"))return this.sliding=!1;var j=e[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:g});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,f&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(e)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:g});return a.support.transition&&this.$element.hasClass("slide")?(e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one("bsTransitionEnd",function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(1e3*d.css("transition-duration").slice(0,-1))):(d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger(m)),f&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b);!e&&f.toggle&&"show"==b&&(b=!b),e||d.data("bs.collapse",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};c.VERSION="3.2.0",c.DEFAULTS={toggle:!0},c.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},c.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var c=a.Event("show.bs.collapse");if(this.$element.trigger(c),!c.isDefaultPrevented()){var d=this.$parent&&this.$parent.find("> .panel > .in");if(d&&d.length){var e=d.data("bs.collapse");if(e&&e.transitioning)return;b.call(d,"hide"),e||d.data("bs.collapse",null)}var f=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[f](0),this.transitioning=1;var g=function(){this.$element.removeClass("collapsing").addClass("collapse in")[f](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return g.call(this);var h=a.camelCase(["scroll",f].join("-"));this.$element.one("bsTransitionEnd",a.proxy(g,this)).emulateTransitionEnd(350)[f](this.$element[0][h])}}},c.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(d,this)).emulateTransitionEnd(350):d.call(this)}}},c.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var d=a.fn.collapse;a.fn.collapse=b,a.fn.collapse.Constructor=c,a.fn.collapse.noConflict=function(){return a.fn.collapse=d,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(c){var d,e=a(this),f=e.attr("data-target")||c.preventDefault()||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""),g=a(f),h=g.data("bs.collapse"),i=h?"toggle":e.data(),j=e.attr("data-parent"),k=j&&a(j);h&&h.transitioning||(k&&k.find('[data-toggle="collapse"][data-parent="'+j+'"]').not(e).addClass("collapsed"),e[g.hasClass("in")?"addClass":"removeClass"]("collapsed")),b.call(g,i)})}(jQuery),+function(a){"use strict";function b(b){b&&3===b.which||(a(e).remove(),a(f).each(function(){var d=c(a(this)),e={relatedTarget:this};d.hasClass("open")&&(d.trigger(b=a.Event("hide.bs.dropdown",e)),b.isDefaultPrevented()||d.removeClass("open").trigger("hidden.bs.dropdown",e))}))}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.2.0",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus"),f.toggleClass("open").trigger("shown.bs.dropdown",h)}return!1}},g.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var e=c(d),g=e.hasClass("open");if(!g||g&&27==b.keyCode)return 27==b.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.divider):visible a",i=e.find('[role="menu"]'+h+', [role="listbox"]'+h);if(i.length){var j=i.index(i.filter(":focus"));38==b.keyCode&&j>0&&j--,40==b.keyCode&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f+', [role="menu"], [role="listbox"]',g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$backdrop=this.isShown=null,this.scrollbarWidth=0,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.2.0",c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.$body.addClass("modal-open"),this.setScrollbar(),this.escape(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(c.$body),c.$element.show().scrollTop(0),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one("bsTransitionEnd",function(){c.$element.trigger("focus").trigger(e)}).emulateTransitionEnd(300):c.$element.trigger("focus").trigger(e)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.$body.removeClass("modal-open"),this.resetScrollbar(),this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var c=this,d=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var e=a.support.transition&&d;if(this.$backdrop=a('<div class="modal-backdrop '+d+'" />').appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),e&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;e?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(150):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var f=function(){c.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",f).emulateTransitionEnd(150):f()}else b&&b()},c.prototype.checkScrollbar=function(){document.body.clientWidth>=window.innerWidth||(this.scrollbarWidth=this.scrollbarWidth||this.measureScrollbar())},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.scrollbarWidth&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right","")},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||"destroy"!=b)&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};c.VERSION="3.2.0",c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(this.options.viewport.selector||this.options.viewport);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show()},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var c=a.contains(document.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!c)return;var d=this,e=this.tip(),f=this.getUID(this.type);this.setContent(),e.attr("id",f),this.$element.attr("aria-describedby",f),this.options.animation&&e.addClass("fade");var g="function"==typeof this.options.placement?this.options.placement.call(this,e[0],this.$element[0]):this.options.placement,h=/\s?auto?\s?/i,i=h.test(g);i&&(g=g.replace(h,"")||"top"),e.detach().css({top:0,left:0,display:"block"}).addClass(g).data("bs."+this.type,this),this.options.container?e.appendTo(this.options.container):e.insertAfter(this.$element);var j=this.getPosition(),k=e[0].offsetWidth,l=e[0].offsetHeight;if(i){var m=g,n=this.$element.parent(),o=this.getPosition(n);g="bottom"==g&&j.top+j.height+l-o.scroll>o.height?"top":"top"==g&&j.top-o.scroll-l<0?"bottom":"right"==g&&j.right+k>o.width?"left":"left"==g&&j.left-k<o.left?"right":g,e.removeClass(m).addClass(g)}var p=this.getCalculatedOffset(g,j,k,l);this.applyPlacement(p,g);var q=function(){d.$element.trigger("shown.bs."+d.type),d.hoverState=null};a.support.transition&&this.$tip.hasClass("fade")?e.one("bsTransitionEnd",q).emulateTransitionEnd(150):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top=b.top+g,b.left=b.left+h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=k.left?2*k.left-e+i:2*k.top-f+j,m=k.left?"left":"top",n=k.left?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(l,d[0][n],m)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(){function b(){"in"!=c.hoverState&&d.detach(),c.$element.trigger("hidden.bs."+c.type)}var c=this,d=this.tip(),e=a.Event("hide.bs."+this.type);return this.$element.removeAttr("aria-describedby"),this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d.one("bsTransitionEnd",b).emulateTransitionEnd(150):b(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName;return a.extend({},"function"==typeof c.getBoundingClientRect?c.getBoundingClientRect():null,{scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop(),width:d?a(window).width():b.outerWidth(),height:d?a(window).height():b.outerHeight()},d?{top:0,left:0}:b.offset())},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.width&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){clearTimeout(this.timeout),this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||"destroy"!=b)&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.2.0",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").empty()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},c.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){var e=a.proxy(this.process,this);this.$body=a("body"),this.$scrollElement=a(a(c).is("body")?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",e),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.2.0",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b="offset",c=0;a.isWindow(this.$scrollElement[0])||(b="position",c=this.$scrollElement.scrollTop()),this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight();var d=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[b]().top+c,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){d.offsets.push(this[0]),d.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<=e[0])return g!=(a=f[0])&&this.activate(a);for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parentsUntil(this.options.target,".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.2.0",c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});if(b.trigger(f),!f.isDefaultPrevented()){var g=a(d);this.activate(b.closest("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})}}},c.prototype.activate=function(b,c,d){function e(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),g?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var f=c.find("> .active"),g=d&&a.support.transition&&f.hasClass("fade");g?f.one("bsTransitionEnd",e).emulateTransitionEnd(150):e(),f.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(c){c.preventDefault(),b.call(a(this),"show")})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.2.0",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=a(document).height(),d=this.$target.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;"object"!=typeof f&&(h=g=f),"function"==typeof g&&(g=f.top(this.$element)),"function"==typeof h&&(h=f.bottom(this.$element));var i=null!=this.unpin&&d+this.unpin<=e.top?!1:null!=h&&e.top+this.$element.height()>=b-h?"bottom":null!=g&&g>=d?"top":!1;if(this.affixed!==i){null!=this.unpin&&this.$element.css("top","");var j="affix"+(i?"-"+i:""),k=a.Event(j+".bs.affix");this.$element.trigger(k),k.isDefaultPrevented()||(this.affixed=i,this.unpin="bottom"==i?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(j).trigger(a.Event(j.replace("affix","affixed"))),"bottom"==i&&this.$element.offset({top:b-this.$element.height()-h}))}}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},d.offsetBottom&&(d.offset.bottom=d.offsetBottom),d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);

/*Bootstrap Datepicker*/
(function(e,t){function r(){return new Date(Date.UTC.apply(Date,arguments))}function i(){var e=new Date;return r(e.getFullYear(),e.getMonth(),e.getDate())}function s(e){return function(){return this[e].apply(this,arguments)}}function f(t,n){function u(e,t){return t.toLowerCase()}var r=e(t).data(),i={},s,o=new RegExp("^"+n.toLowerCase()+"([A-Z])");n=new RegExp("^"+n.toLowerCase());for(var a in r)if(n.test(a)){s=a.replace(o,u);i[s]=r[a]}return i}function l(t){var n={};if(!d[t]){t=t.split("-")[0];if(!d[t])return}var r=d[t];e.each(p,function(e,t){if(t in r)n[t]=r[t]});return n}var n=e(window);var o=function(){var t={get:function(e){return this.slice(e)[0]},contains:function(e){var t=e&&e.valueOf();for(var n=0,r=this.length;n<r;n++)if(this[n].valueOf()===t)return n;return-1},remove:function(e){this.splice(e,1)},replace:function(t){if(!t)return;if(!e.isArray(t))t=[t];this.clear();this.push.apply(this,t)},clear:function(){this.splice(0)},copy:function(){var e=new o;e.replace(this);return e}};return function(){var n=[];n.push.apply(n,arguments);e.extend(n,t);return n}}();var u=function(t,n){this.dates=new o;this.viewDate=i();this.focusDate=null;this._process_options(n);this.element=e(t);this.isInline=false;this.isInput=this.element.is("input");this.component=this.element.is(".date")?this.element.find(".add-on, .input-group-addon, .btn"):false;this.hasInput=this.component&&this.element.find("input").length;if(this.component&&this.component.length===0)this.component=false;this.picker=e(v.template);this._buildEvents();this._attachEvents();if(this.isInline){this.picker.addClass("datepicker-inline").appendTo(this.element)}else{this.picker.addClass("datepicker-dropdown dropdown-menu")}if(this.o.rtl){this.picker.addClass("datepicker-rtl")}this.viewMode=this.o.startView;if(this.o.calendarWeeks)this.picker.find("tfoot th.today").attr("colspan",function(e,t){return parseInt(t)+1});this._allow_update=false;this.setStartDate(this._o.startDate);this.setEndDate(this._o.endDate);this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled);this.fillDow();this.fillMonths();this._allow_update=true;this.update();this.showMode();if(this.isInline){this.show()}};u.prototype={constructor:u,_process_options:function(t){this._o=e.extend({},this._o,t);var n=this.o=e.extend({},this._o);var r=n.language;if(!d[r]){r=r.split("-")[0];if(!d[r])r=h.language}n.language=r;switch(n.startView){case 2:case"decade":n.startView=2;break;case 1:case"year":n.startView=1;break;default:n.startView=0}switch(n.minViewMode){case 1:case"months":n.minViewMode=1;break;case 2:case"years":n.minViewMode=2;break;default:n.minViewMode=0}n.startView=Math.max(n.startView,n.minViewMode);if(n.multidate!==true){n.multidate=Number(n.multidate)||false;if(n.multidate!==false)n.multidate=Math.max(0,n.multidate);else n.multidate=1}n.multidateSeparator=String(n.multidateSeparator);n.weekStart%=7;n.weekEnd=(n.weekStart+6)%7;var i=v.parseFormat(n.format);if(n.startDate!==-Infinity){if(!!n.startDate){if(n.startDate instanceof Date)n.startDate=this._local_to_utc(this._zero_time(n.startDate));else n.startDate=v.parseDate(n.startDate,i,n.language)}else{n.startDate=-Infinity}}if(n.endDate!==Infinity){if(!!n.endDate){if(n.endDate instanceof Date)n.endDate=this._local_to_utc(this._zero_time(n.endDate));else n.endDate=v.parseDate(n.endDate,i,n.language)}else{n.endDate=Infinity}}n.daysOfWeekDisabled=n.daysOfWeekDisabled||[];if(!e.isArray(n.daysOfWeekDisabled))n.daysOfWeekDisabled=n.daysOfWeekDisabled.split(/[,\s]*/);n.daysOfWeekDisabled=e.map(n.daysOfWeekDisabled,function(e){return parseInt(e,10)});var s=String(n.orientation).toLowerCase().split(/\s+/g),o=n.orientation.toLowerCase();s=e.grep(s,function(e){return/^auto|left|right|top|bottom$/.test(e)});n.orientation={x:"auto",y:"auto"};if(!o||o==="auto");else if(s.length===1){switch(s[0]){case"top":case"bottom":n.orientation.y=s[0];break;case"left":case"right":n.orientation.x=s[0];break}}else{o=e.grep(s,function(e){return/^left|right$/.test(e)});n.orientation.x=o[0]||"auto";o=e.grep(s,function(e){return/^top|bottom$/.test(e)});n.orientation.y=o[0]||"auto"}},_events:[],_secondaryEvents:[],_applyEvents:function(e){for(var n=0,r,i,s;n<e.length;n++){r=e[n][0];if(e[n].length===2){i=t;s=e[n][1]}else if(e[n].length===3){i=e[n][1];s=e[n][2]}r.on(s,i)}},_unapplyEvents:function(e){for(var n=0,r,i,s;n<e.length;n++){r=e[n][0];if(e[n].length===2){s=t;i=e[n][1]}else if(e[n].length===3){s=e[n][1];i=e[n][2]}r.off(i,s)}},_buildEvents:function(){if(this.isInput){this._events=[[this.element,{focus:e.proxy(this.show,this),keyup:e.proxy(function(t){if(e.inArray(t.keyCode,[27,37,39,38,40,32,13,9])===-1)this.update()},this),keydown:e.proxy(this.keydown,this)}]]}else if(this.component&&this.hasInput){this._events=[[this.element.find("input"),{focus:e.proxy(this.show,this),keyup:e.proxy(function(t){if(e.inArray(t.keyCode,[27,37,39,38,40,32,13,9])===-1)this.update()},this),keydown:e.proxy(this.keydown,this)}],[this.component,{click:e.proxy(this.show,this)}]]}else if(this.element.is("div")){this.isInline=true}else{this._events=[[this.element,{click:e.proxy(this.show,this)}]]}this._events.push([this.element,"*",{blur:e.proxy(function(e){this._focused_from=e.target},this)}],[this.element,{blur:e.proxy(function(e){this._focused_from=e.target},this)}]);this._secondaryEvents=[[this.picker,{click:e.proxy(this.click,this)}],[e(window),{resize:e.proxy(this.place,this)}],[e(document),{"mousedown touchstart":e.proxy(function(e){if(!(this.element.is(e.target)||this.element.find(e.target).length||this.picker.is(e.target)||this.picker.find(e.target).length)){this.hide()}},this)}]]},_attachEvents:function(){this._detachEvents();this._applyEvents(this._events)},_detachEvents:function(){this._unapplyEvents(this._events)},_attachSecondaryEvents:function(){this._detachSecondaryEvents();this._applyEvents(this._secondaryEvents)},_detachSecondaryEvents:function(){this._unapplyEvents(this._secondaryEvents)},_trigger:function(t,n){var r=n||this.dates.get(-1),i=this._utc_to_local(r);this.element.trigger({type:t,date:i,dates:e.map(this.dates,this._utc_to_local),format:e.proxy(function(e,t){if(arguments.length===0){e=this.dates.length-1;t=this.o.format}else if(typeof e==="string"){t=e;e=this.dates.length-1}t=t||this.o.format;var n=this.dates.get(e);return v.formatDate(n,t,this.o.language)},this)})},show:function(){if(!this.isInline)this.picker.appendTo("body");this.picker.show();this.place();this._attachSecondaryEvents();this._trigger("show")},hide:function(){if(this.isInline)return;if(!this.picker.is(":visible"))return;this.focusDate=null;this.picker.hide().detach();this._detachSecondaryEvents();this.viewMode=this.o.startView;this.showMode();if(this.o.forceParse&&(this.isInput&&this.element.val()||this.hasInput&&this.element.find("input").val()))this.setValue();this._trigger("hide")},remove:function(){this.hide();this._detachEvents();this._detachSecondaryEvents();this.picker.remove();delete this.element.data().datepicker;if(!this.isInput){delete this.element.data().date}},_utc_to_local:function(e){return e&&new Date(e.getTime()+e.getTimezoneOffset()*6e4)},_local_to_utc:function(e){return e&&new Date(e.getTime()-e.getTimezoneOffset()*6e4)},_zero_time:function(e){return e&&new Date(e.getFullYear(),e.getMonth(),e.getDate())},_zero_utc_time:function(e){return e&&new Date(Date.UTC(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()))},getDates:function(){return e.map(this.dates,this._utc_to_local)},getUTCDates:function(){return e.map(this.dates,function(e){return new Date(e)})},getDate:function(){return this._utc_to_local(this.getUTCDate())},getUTCDate:function(){return new Date(this.dates.get(-1))},setDates:function(){var t=e.isArray(arguments[0])?arguments[0]:arguments;this.update.apply(this,t);this._trigger("changeDate");this.setValue()},setUTCDates:function(){var t=e.isArray(arguments[0])?arguments[0]:arguments;this.update.apply(this,e.map(t,this._utc_to_local));this._trigger("changeDate");this.setValue()},setDate:s("setDates"),setUTCDate:s("setUTCDates"),setValue:function(){var e=this.getFormattedDate();if(!this.isInput){if(this.component){this.element.find("input").val(e).change()}}else{this.element.val(e).change()}},getFormattedDate:function(n){if(n===t)n=this.o.format;var r=this.o.language;return e.map(this.dates,function(e){return v.formatDate(e,n,r)}).join(this.o.multidateSeparator)},setStartDate:function(e){this._process_options({startDate:e});this.update();this.updateNavArrows()},setEndDate:function(e){this._process_options({endDate:e});this.update();this.updateNavArrows()},setDaysOfWeekDisabled:function(e){this._process_options({daysOfWeekDisabled:e});this.update();this.updateNavArrows()},place:function(){if(this.isInline)return;var t=this.picker.outerWidth(),r=this.picker.outerHeight(),i=10,s=n.width(),o=n.height(),u=n.scrollTop();var a=parseInt(this.element.parents().filter(function(){return e(this).css("z-index")!=="auto"}).first().css("z-index"))+10;var f=this.component?this.component.parent().offset():this.element.offset();var l=this.component?this.component.outerHeight(true):this.element.outerHeight(false);var c=this.component?this.component.outerWidth(true):this.element.outerWidth(false);var h=f.left,p=f.top;this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom "+"datepicker-orient-right datepicker-orient-left");if(this.o.orientation.x!=="auto"){this.picker.addClass("datepicker-orient-"+this.o.orientation.x);if(this.o.orientation.x==="right")h-=t-c}else{this.picker.addClass("datepicker-orient-left");if(f.left<0)h-=f.left-i;else if(f.left+t>s)h=s-t-i}var d=this.o.orientation.y,v,m;if(d==="auto"){v=-u+f.top-r;m=u+o-(f.top+l+r);if(Math.max(v,m)===m)d="top";else d="bottom"}this.picker.addClass("datepicker-orient-"+d);if(d==="top")p+=l;else p-=r+parseInt(this.picker.css("padding-top"));this.picker.css({top:p,left:h,zIndex:a})},_allow_update:true,update:function(){if(!this._allow_update)return;var t=this.dates.copy(),n=[],r=false;if(arguments.length){e.each(arguments,e.proxy(function(e,t){if(t instanceof Date)t=this._local_to_utc(t);n.push(t)},this));r=true}else{n=this.isInput?this.element.val():this.element.data("date")||this.element.find("input").val();if(n&&this.o.multidate)n=n.split(this.o.multidateSeparator);else n=[n];delete this.element.data().date}n=e.map(n,e.proxy(function(e){return v.parseDate(e,this.o.format,this.o.language)},this));n=e.grep(n,e.proxy(function(e){return e<this.o.startDate||e>this.o.endDate||!e},this),true);this.dates.replace(n);if(this.dates.length)this.viewDate=new Date(this.dates.get(-1));else if(this.viewDate<this.o.startDate)this.viewDate=new Date(this.o.startDate);else if(this.viewDate>this.o.endDate)this.viewDate=new Date(this.o.endDate);if(r){this.setValue()}else if(n.length){if(String(t)!==String(this.dates))this._trigger("changeDate")}if(!this.dates.length&&t.length)this._trigger("clearDate");this.fill()},fillDow:function(){var e=this.o.weekStart,t="<tr>";if(this.o.calendarWeeks){var n='<th class="cw">&nbsp;</th>';t+=n;this.picker.find(".datepicker-days thead tr:first-child").prepend(n)}while(e<this.o.weekStart+7){t+='<th class="dow">'+d[this.o.language].daysMin[e++%7]+"</th>"}t+="</tr>";this.picker.find(".datepicker-days thead").append(t)},fillMonths:function(){var e="",t=0;while(t<12){e+='<span class="month">'+d[this.o.language].monthsShort[t++]+"</span>"}this.picker.find(".datepicker-months td").html(e)},setRange:function(t){if(!t||!t.length)delete this.range;else this.range=e.map(t,function(e){return e.valueOf()});this.fill()},getClassNames:function(t){var n=[],r=this.viewDate.getUTCFullYear(),i=this.viewDate.getUTCMonth(),s=new Date;if(t.getUTCFullYear()<r||t.getUTCFullYear()===r&&t.getUTCMonth()<i){n.push("old")}else if(t.getUTCFullYear()>r||t.getUTCFullYear()===r&&t.getUTCMonth()>i){n.push("new")}if(this.focusDate&&t.valueOf()===this.focusDate.valueOf())n.push("focused");if(this.o.todayHighlight&&t.getUTCFullYear()===s.getFullYear()&&t.getUTCMonth()===s.getMonth()&&t.getUTCDate()===s.getDate()){n.push("today")}if(this.dates.contains(t)!==-1)n.push("active");if(t.valueOf()<this.o.startDate||t.valueOf()>this.o.endDate||e.inArray(t.getUTCDay(),this.o.daysOfWeekDisabled)!==-1){n.push("disabled")}if(this.range){if(t>this.range[0]&&t<this.range[this.range.length-1]){n.push("range")}if(e.inArray(t.valueOf(),this.range)!==-1){n.push("selected")}}return n},fill:function(){var n=new Date(this.viewDate),i=n.getUTCFullYear(),s=n.getUTCMonth(),o=this.o.startDate!==-Infinity?this.o.startDate.getUTCFullYear():-Infinity,u=this.o.startDate!==-Infinity?this.o.startDate.getUTCMonth():-Infinity,a=this.o.endDate!==Infinity?this.o.endDate.getUTCFullYear():Infinity,f=this.o.endDate!==Infinity?this.o.endDate.getUTCMonth():Infinity,l=d[this.o.language].today||d["en"].today||"",c=d[this.o.language].clear||d["en"].clear||"",h;this.picker.find(".datepicker-days thead th.datepicker-switch").text(d[this.o.language].months[s]+" "+i);this.picker.find("tfoot th.today").text(l).toggle(this.o.todayBtn!==false);this.picker.find("tfoot th.clear").text(c).toggle(this.o.clearBtn!==false);this.updateNavArrows();this.fillMonths();var p=r(i,s-1,28),m=v.getDaysInMonth(p.getUTCFullYear(),p.getUTCMonth());p.setUTCDate(m);p.setUTCDate(m-(p.getUTCDay()-this.o.weekStart+7)%7);var g=new Date(p);g.setUTCDate(g.getUTCDate()+42);g=g.valueOf();var y=[];var b;while(p.valueOf()<g){if(p.getUTCDay()===this.o.weekStart){y.push("<tr>");if(this.o.calendarWeeks){var w=new Date(+p+(this.o.weekStart-p.getUTCDay()-7)%7*864e5),E=new Date(Number(w)+(7+4-w.getUTCDay())%7*864e5),S=new Date(Number(S=r(E.getUTCFullYear(),0,1))+(7+4-S.getUTCDay())%7*864e5),x=(E-S)/864e5/7+1;y.push('<td class="cw">'+x+"</td>")}}b=this.getClassNames(p);b.push("day");if(this.o.beforeShowDay!==e.noop){var T=this.o.beforeShowDay(this._utc_to_local(p));if(T===t)T={};else if(typeof T==="boolean")T={enabled:T};else if(typeof T==="string")T={classes:T};if(T.enabled===false)b.push("disabled");if(T.classes)b=b.concat(T.classes.split(/\s+/));if(T.tooltip)h=T.tooltip}b=e.unique(b);y.push('<td class="'+b.join(" ")+'"'+(h?' title="'+h+'"':"")+">"+p.getUTCDate()+"</td>");if(p.getUTCDay()===this.o.weekEnd){y.push("</tr>")}p.setUTCDate(p.getUTCDate()+1)}this.picker.find(".datepicker-days tbody").empty().append(y.join(""));var N=this.picker.find(".datepicker-months").find("th:eq(1)").text(i).end().find("span").removeClass("active");e.each(this.dates,function(e,t){if(t.getUTCFullYear()===i)N.eq(t.getUTCMonth()).addClass("active")});if(i<o||i>a){N.addClass("disabled")}if(i===o){N.slice(0,u).addClass("disabled")}if(i===a){N.slice(f+1).addClass("disabled")}y="";i=parseInt(i/10,10)*10;var C=this.picker.find(".datepicker-years").find("th:eq(1)").text(i+"-"+(i+9)).end().find("td");i-=1;var k=e.map(this.dates,function(e){return e.getUTCFullYear()}),L;for(var A=-1;A<11;A++){L=["year"];if(A===-1)L.push("old");else if(A===10)L.push("new");if(e.inArray(i,k)!==-1)L.push("active");if(i<o||i>a)L.push("disabled");y+='<span class="'+L.join(" ")+'">'+i+"</span>";i+=1}C.html(y)},updateNavArrows:function(){if(!this._allow_update)return;var e=new Date(this.viewDate),t=e.getUTCFullYear(),n=e.getUTCMonth();switch(this.viewMode){case 0:if(this.o.startDate!==-Infinity&&t<=this.o.startDate.getUTCFullYear()&&n<=this.o.startDate.getUTCMonth()){this.picker.find(".prev").css({visibility:"hidden"})}else{this.picker.find(".prev").css({visibility:"visible"})}if(this.o.endDate!==Infinity&&t>=this.o.endDate.getUTCFullYear()&&n>=this.o.endDate.getUTCMonth()){this.picker.find(".next").css({visibility:"hidden"})}else{this.picker.find(".next").css({visibility:"visible"})}break;case 1:case 2:if(this.o.startDate!==-Infinity&&t<=this.o.startDate.getUTCFullYear()){this.picker.find(".prev").css({visibility:"hidden"})}else{this.picker.find(".prev").css({visibility:"visible"})}if(this.o.endDate!==Infinity&&t>=this.o.endDate.getUTCFullYear()){this.picker.find(".next").css({visibility:"hidden"})}else{this.picker.find(".next").css({visibility:"visible"})}break}},click:function(t){t.preventDefault();var n=e(t.target).closest("span, td, th"),i,s,o;if(n.length===1){switch(n[0].nodeName.toLowerCase()){case"th":switch(n[0].className){case"datepicker-switch":this.showMode(1);break;case"prev":case"next":var u=v.modes[this.viewMode].navStep*(n[0].className==="prev"?-1:1);switch(this.viewMode){case 0:this.viewDate=this.moveMonth(this.viewDate,u);this._trigger("changeMonth",this.viewDate);break;case 1:case 2:this.viewDate=this.moveYear(this.viewDate,u);if(this.viewMode===1)this._trigger("changeYear",this.viewDate);break}this.fill();break;case"today":var a=new Date;a=r(a.getFullYear(),a.getMonth(),a.getDate(),0,0,0);this.showMode(-2);var f=this.o.todayBtn==="linked"?null:"view";this._setDate(a,f);break;case"clear":var l;if(this.isInput)l=this.element;else if(this.component)l=this.element.find("input");if(l)l.val("").change();this.update();this._trigger("changeDate");if(this.o.autoclose)this.hide();break}break;case"span":if(!n.is(".disabled")){this.viewDate.setUTCDate(1);if(n.is(".month")){o=1;s=n.parent().find("span").index(n);i=this.viewDate.getUTCFullYear();this.viewDate.setUTCMonth(s);this._trigger("changeMonth",this.viewDate);if(this.o.minViewMode===1){this._setDate(r(i,s,o))}}else{o=1;s=0;i=parseInt(n.text(),10)||0;this.viewDate.setUTCFullYear(i);this._trigger("changeYear",this.viewDate);if(this.o.minViewMode===2){this._setDate(r(i,s,o))}}this.showMode(-1);this.fill()}break;case"td":if(n.is(".day")&&!n.is(".disabled")){o=parseInt(n.text(),10)||1;i=this.viewDate.getUTCFullYear();s=this.viewDate.getUTCMonth();if(n.is(".old")){if(s===0){s=11;i-=1}else{s-=1}}else if(n.is(".new")){if(s===11){s=0;i+=1}else{s+=1}}this._setDate(r(i,s,o))}break}}if(this.picker.is(":visible")&&this._focused_from){e(this._focused_from).focus()}delete this._focused_from},_toggle_multidate:function(e){var t=this.dates.contains(e);if(!e){this.dates.clear()}else if(t!==-1){this.dates.remove(t)}else{this.dates.push(e)}if(typeof this.o.multidate==="number")while(this.dates.length>this.o.multidate)this.dates.remove(0)},_setDate:function(e,t){if(!t||t==="date")this._toggle_multidate(e&&new Date(e));if(!t||t==="view")this.viewDate=e&&new Date(e);this.fill();this.setValue();this._trigger("changeDate");var n;if(this.isInput){n=this.element}else if(this.component){n=this.element.find("input")}if(n){n.change()}if(this.o.autoclose&&(!t||t==="date")){this.hide()}},moveMonth:function(e,n){if(!e)return t;if(!n)return e;var r=new Date(e.valueOf()),i=r.getUTCDate(),s=r.getUTCMonth(),o=Math.abs(n),u,a;n=n>0?1:-1;if(o===1){a=n===-1?function(){return r.getUTCMonth()===s}:function(){return r.getUTCMonth()!==u};u=s+n;r.setUTCMonth(u);if(u<0||u>11)u=(u+12)%12}else{for(var f=0;f<o;f++)r=this.moveMonth(r,n);u=r.getUTCMonth();r.setUTCDate(i);a=function(){return u!==r.getUTCMonth()}}while(a()){r.setUTCDate(--i);r.setUTCMonth(u)}return r},moveYear:function(e,t){return this.moveMonth(e,t*12)},dateWithinRange:function(e){return e>=this.o.startDate&&e<=this.o.endDate},keydown:function(e){if(this.picker.is(":not(:visible)")){if(e.keyCode===27)this.show();return}var t=false,n,r,s,o=this.focusDate||this.viewDate;switch(e.keyCode){case 27:if(this.focusDate){this.focusDate=null;this.viewDate=this.dates.get(-1)||this.viewDate;this.fill()}else this.hide();e.preventDefault();break;case 37:case 39:if(!this.o.keyboardNavigation)break;n=e.keyCode===37?-1:1;if(e.ctrlKey){r=this.moveYear(this.dates.get(-1)||i(),n);s=this.moveYear(o,n);this._trigger("changeYear",this.viewDate)}else if(e.shiftKey){r=this.moveMonth(this.dates.get(-1)||i(),n);s=this.moveMonth(o,n);this._trigger("changeMonth",this.viewDate)}else{r=new Date(this.dates.get(-1)||i());r.setUTCDate(r.getUTCDate()+n);s=new Date(o);s.setUTCDate(o.getUTCDate()+n)}if(this.dateWithinRange(r)){this.focusDate=this.viewDate=s;this.setValue();this.fill();e.preventDefault()}break;case 38:case 40:if(!this.o.keyboardNavigation)break;n=e.keyCode===38?-1:1;if(e.ctrlKey){r=this.moveYear(this.dates.get(-1)||i(),n);s=this.moveYear(o,n);this._trigger("changeYear",this.viewDate)}else if(e.shiftKey){r=this.moveMonth(this.dates.get(-1)||i(),n);s=this.moveMonth(o,n);this._trigger("changeMonth",this.viewDate)}else{r=new Date(this.dates.get(-1)||i());r.setUTCDate(r.getUTCDate()+n*7);s=new Date(o);s.setUTCDate(o.getUTCDate()+n*7)}if(this.dateWithinRange(r)){this.focusDate=this.viewDate=s;this.setValue();this.fill();e.preventDefault()}break;case 32:break;case 13:o=this.focusDate||this.dates.get(-1)||this.viewDate;this._toggle_multidate(o);t=true;this.focusDate=null;this.viewDate=this.dates.get(-1)||this.viewDate;this.setValue();this.fill();if(this.picker.is(":visible")){e.preventDefault();if(this.o.autoclose)this.hide()}break;case 9:this.focusDate=null;this.viewDate=this.dates.get(-1)||this.viewDate;this.fill();this.hide();break}if(t){if(this.dates.length)this._trigger("changeDate");else this._trigger("clearDate");var u;if(this.isInput){u=this.element}else if(this.component){u=this.element.find("input")}if(u){u.change()}}},showMode:function(e){if(e){this.viewMode=Math.max(this.o.minViewMode,Math.min(2,this.viewMode+e))}this.picker.find(">div").hide().filter(".datepicker-"+v.modes[this.viewMode].clsName).css("display","block");this.updateNavArrows()}};var a=function(t,n){this.element=e(t);this.inputs=e.map(n.inputs,function(e){return e.jquery?e[0]:e});delete n.inputs;e(this.inputs).datepicker(n).bind("changeDate",e.proxy(this.dateUpdated,this));this.pickers=e.map(this.inputs,function(t){return e(t).data("datepicker")});this.updateDates()};a.prototype={updateDates:function(){this.dates=e.map(this.pickers,function(e){return e.getUTCDate()});this.updateRanges()},updateRanges:function(){var t=e.map(this.dates,function(e){return e.valueOf()});e.each(this.pickers,function(e,n){n.setRange(t)})},dateUpdated:function(t){if(this.updating)return;this.updating=true;var n=e(t.target).data("datepicker"),r=n.getUTCDate(),i=e.inArray(t.target,this.inputs),s=this.inputs.length;if(i===-1)return;e.each(this.pickers,function(e,t){if(!t.getUTCDate())t.setUTCDate(r)});if(r<this.dates[i]){while(i>=0&&r<this.dates[i]){this.pickers[i--].setUTCDate(r)}}else if(r>this.dates[i]){while(i<s&&r>this.dates[i]){this.pickers[i++].setUTCDate(r)}}this.updateDates();delete this.updating},remove:function(){e.map(this.pickers,function(e){e.remove()});delete this.element.data().datepicker}};var c=e.fn.datepicker;e.fn.datepicker=function(n){var r=Array.apply(null,arguments);r.shift();var i;this.each(function(){var s=e(this),o=s.data("datepicker"),c=typeof n==="object"&&n;if(!o){var p=f(this,"date"),d=e.extend({},h,p,c),v=l(d.language),m=e.extend({},h,v,p,c);if(s.is(".input-daterange")||m.inputs){var g={inputs:m.inputs||s.find("input").toArray()};s.data("datepicker",o=new a(this,e.extend(m,g)))}else{s.data("datepicker",o=new u(this,m))}}if(typeof n==="string"&&typeof o[n]==="function"){i=o[n].apply(o,r);if(i!==t)return false}});if(i!==t)return i;else return this};var h=e.fn.datepicker.defaults={autoclose:false,beforeShowDay:e.noop,calendarWeeks:false,clearBtn:false,daysOfWeekDisabled:[],endDate:Infinity,forceParse:true,format:"mm/dd/yyyy",keyboardNavigation:true,language:"en",minViewMode:0,multidate:false,multidateSeparator:",",orientation:"auto",rtl:false,startDate:-Infinity,startView:0,todayBtn:false,todayHighlight:false,weekStart:0};var p=e.fn.datepicker.locale_opts=["format","rtl","weekStart"];e.fn.datepicker.Constructor=u;var d=e.fn.datepicker.dates={en:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun"],daysMin:["Su","Mo","Tu","We","Th","Fr","Sa","Su"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],today:"Today",clear:"Clear"}};var v={modes:[{clsName:"days",navFnc:"Month",navStep:1},{clsName:"months",navFnc:"FullYear",navStep:1},{clsName:"years",navFnc:"FullYear",navStep:10}],isLeapYear:function(e){return e%4===0&&e%100!==0||e%400===0},getDaysInMonth:function(e,t){return[31,v.isLeapYear(e)?29:28,31,30,31,30,31,31,30,31,30,31][t]},validParts:/dd?|DD?|mm?|MM?|yy(?:yy)?/g,nonpunctuation:/[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,parseFormat:function(e){var t=e.replace(this.validParts,"\0").split("\0"),n=e.match(this.validParts);if(!t||!t.length||!n||n.length===0){throw new Error("Invalid date format.")}return{separators:t,parts:n}},parseDate:function(n,i,s){function w(){var e=this.slice(0,a[c].length),t=a[c].slice(0,e.length);return e===t}if(!n)return t;if(n instanceof Date)return n;if(typeof i==="string")i=v.parseFormat(i);var o=/([\-+]\d+)([dmwy])/,a=n.match(/([\-+]\d+)([dmwy])/g),f,l,c;if(/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(n)){n=new Date;for(c=0;c<a.length;c++){f=o.exec(a[c]);l=parseInt(f[1]);switch(f[2]){case"d":n.setUTCDate(n.getUTCDate()+l);break;case"m":n=u.prototype.moveMonth.call(u.prototype,n,l);break;case"w":n.setUTCDate(n.getUTCDate()+l*7);break;case"y":n=u.prototype.moveYear.call(u.prototype,n,l);break}}return r(n.getUTCFullYear(),n.getUTCMonth(),n.getUTCDate(),0,0,0)}a=n&&n.match(this.nonpunctuation)||[];n=new Date;var h={},p=["yyyy","yy","M","MM","m","mm","d","dd"],m={yyyy:function(e,t){return e.setUTCFullYear(t)},yy:function(e,t){return e.setUTCFullYear(2e3+t)},m:function(e,t){if(isNaN(e))return e;t-=1;while(t<0)t+=12;t%=12;e.setUTCMonth(t);while(e.getUTCMonth()!==t)e.setUTCDate(e.getUTCDate()-1);return e},d:function(e,t){return e.setUTCDate(t)}},g,y;m["M"]=m["MM"]=m["mm"]=m["m"];m["dd"]=m["d"];n=r(n.getFullYear(),n.getMonth(),n.getDate(),0,0,0);var b=i.parts.slice();if(a.length!==b.length){b=e(b).filter(function(t,n){return e.inArray(n,p)!==-1}).toArray()}if(a.length===b.length){var E;for(c=0,E=b.length;c<E;c++){g=parseInt(a[c],10);f=b[c];if(isNaN(g)){switch(f){case"MM":y=e(d[s].months).filter(w);g=e.inArray(y[0],d[s].months)+1;break;case"M":y=e(d[s].monthsShort).filter(w);g=e.inArray(y[0],d[s].monthsShort)+1;break}}h[f]=g}var S,x;for(c=0;c<p.length;c++){x=p[c];if(x in h&&!isNaN(h[x])){S=new Date(n);m[x](S,h[x]);if(!isNaN(S))n=S}}}return n},formatDate:function(t,n,r){if(!t)return"";if(typeof n==="string")n=v.parseFormat(n);var i={d:t.getUTCDate(),D:d[r].daysShort[t.getUTCDay()],DD:d[r].days[t.getUTCDay()],m:t.getUTCMonth()+1,M:d[r].monthsShort[t.getUTCMonth()],MM:d[r].months[t.getUTCMonth()],yy:t.getUTCFullYear().toString().substring(2),yyyy:t.getUTCFullYear()};i.dd=(i.d<10?"0":"")+i.d;i.mm=(i.m<10?"0":"")+i.m;t=[];var s=e.extend([],n.separators);for(var o=0,u=n.parts.length;o<=u;o++){if(s.length)t.push(s.shift());t.push(i[n.parts[o]])}return t.join("")},headTemplate:"<thead>"+"<tr>"+'<th class="prev">&laquo;</th>'+'<th colspan="5" class="datepicker-switch"></th>'+'<th class="next">&raquo;</th>'+"</tr>"+"</thead>",contTemplate:'<tbody><tr><td colspan="7"></td></tr></tbody>',footTemplate:"<tfoot>"+"<tr>"+'<th colspan="7" class="today"></th>'+"</tr>"+"<tr>"+'<th colspan="7" class="clear"></th>'+"</tr>"+"</tfoot>"};v.template='<div class="datepicker">'+'<div class="datepicker-days">'+'<table class=" table-condensed">'+v.headTemplate+"<tbody></tbody>"+v.footTemplate+"</table>"+"</div>"+'<div class="datepicker-months">'+'<table class="table-condensed">'+v.headTemplate+v.contTemplate+v.footTemplate+"</table>"+"</div>"+'<div class="datepicker-years">'+'<table class="table-condensed">'+v.headTemplate+v.contTemplate+v.footTemplate+"</table>"+"</div>"+"</div>";e.fn.datepicker.DPGlobal=v;e.fn.datepicker.noConflict=function(){e.fn.datepicker=c;return this};e(document).on("focus.datepicker.data-api click.datepicker.data-api",'[data-provide="datepicker"]',function(t){var n=e(this);if(n.data("datepicker"))return;t.preventDefault();n.datepicker("show")});e(function(){e('[data-provide="datepicker-inline"]').datepicker()})})(window.jQuery)


/*-----------------------------------------------------------------------------------------------*/

// Utilities

/* Breakpoints JS */
!function(n){"use strict"
function t(n){if(!n.condition()){if(c("Exiting breakpoint: "+n),"function"==typeof n.exit)try{n.exit.apply(n)}catch(t){}n.is_active=!1}}function i(n){if(n.condition()){if("function"==typeof n.first_enter){c("Entering breakpoint for the first time: "+n)
try{n.first_enter.apply(n)}catch(t){}delete n.first_enter}if("function"==typeof n.enter){c("Entering breakpoint: "+n)
try{n.enter.apply(n)}catch(t){}}n.is_active=!0}}function e(n){n.is_active?t(n):i(n)}function o(){var e=n.grep(r,function(n){return n.is_active}),o=n.grep(r,function(n){return!n.is_active})
n.each(e,function(n,i){t(i)}),n.each(o,function(n,t){i(t)})}function c(){n.breakpoint.debug&&console&&console.info&&console.info.apply(console,arguments)}var r=[]
n.breakpoint=function(t,i){i=n.extend(!0,{},n.breakpoint.defaults,i),r.push(t),1===r.length&&n(window).on("resize orientationchange",function(){o()}),e(t)},n.breakpoint.breakpoints=r,n.breakpoint.check=function(n){e(n)},n.breakpoint.defaults={},n.breakpoint.debug=!1}(jQuery);


/*-----------------------------------------------------------------------------------------------*/

/*foundation*/
(function(e,t,n,r){"use strict";function l(e){if(typeof e==="string"||e instanceof String){e=e.replace(/^['\\/"]+|(;\s?})+|['\\/"]+$/g,"")}return e}var i=function(t){var n=t.length;var r=e("head");while(n--){if(r.has("."+t[n]).length===0){r.append('<meta class="'+t[n]+'" />')}}};i(["foundation-mq-small","foundation-mq-medium","foundation-mq-large","foundation-mq-xlarge","foundation-mq-xxlarge","foundation-data-attribute-namespace"]);e(function(){if(typeof FastClick!=="undefined"){if(typeof n.body!=="undefined"){FastClick.attach(n.body)}}});var s=function(t,r){if(typeof t==="string"){if(r){var i;if(r.jquery){i=r[0];if(!i)return r}else{i=r}return e(i.querySelectorAll(t))}return e(n.querySelectorAll(t))}return e(t,r)};var o=function(e){var t=[];if(!e)t.push("data");if(this.namespace.length>0)t.push(this.namespace);t.push(this.name);return t.join("-")};var u=function(e){var t=e.split("-"),n=t.length,r=[];while(n--){if(n!==0){r.push(t[n])}else{if(this.namespace.length>0){r.push(this.namespace,t[n])}else{r.push(t[n])}}}return r.reverse().join("-")};var a=function(t,n){var r=this,i=!s(this).data(this.attr_name(true));if(s(this.scope).is("["+this.attr_name()+"]")){s(this.scope).data(this.attr_name(true)+"-init",e.extend({},this.settings,n||t,this.data_options(s(this.scope))));if(i){this.events(this.scope)}}else{s("["+this.attr_name()+"]",this.scope).each(function(){var i=!s(this).data(r.attr_name(true)+"-init");s(this).data(r.attr_name(true)+"-init",e.extend({},r.settings,n||t,r.data_options(s(this))));if(i){r.events(this)}})}if(typeof t==="string"){return this[t].call(this,n)}};var f=function(e,t){function n(){t(e[0])}function r(){this.one("load",n);if(/MSIE (\d+\.\d+);/.test(navigator.userAgent)){var e=this.attr("src"),t=e.match(/\?/)?"&":"?";t+="random="+(new Date).getTime();this.attr("src",e+t)}}if(!e.attr("src")){n();return}if(e[0].complete||e[0].readyState===4){n()}else{r.call(e)}};t.matchMedia=t.matchMedia||function(e){"use strict";var t,n=e.documentElement,r=n.firstElementChild||n.firstChild,i=e.createElement("body"),s=e.createElement("div");s.id="mq-test-1";s.style.cssText="position:absolute;top:-100em";i.style.background="none";i.appendChild(s);return function(e){s.innerHTML='&shy;<style media="'+e+'"> #mq-test-1 { width: 42px; }</style>';n.insertBefore(i,r);t=s.offsetWidth===42;n.removeChild(i);return{matches:t,media:e}}}(n);(function(e){function a(){if(n){s(a);if(u){jQuery.fx.tick()}}}var n,r=0,i=["webkit","moz"],s=t.requestAnimationFrame,o=t.cancelAnimationFrame,u="undefined"!==typeof jQuery.fx;for(;r<i.length&&!s;r++){s=t[i[r]+"RequestAnimationFrame"];o=o||t[i[r]+"CancelAnimationFrame"]||t[i[r]+"CancelRequestAnimationFrame"]}if(s){t.requestAnimationFrame=s;t.cancelAnimationFrame=o;if(u){jQuery.fx.timer=function(e){if(e()&&jQuery.timers.push(e)&&!n){n=true;a()}};jQuery.fx.stop=function(){n=false}}}else{t.requestAnimationFrame=function(e){var n=(new Date).getTime(),i=Math.max(0,16-(n-r)),s=t.setTimeout(function(){e(n+i)},i);r=n+i;return s};t.cancelAnimationFrame=function(e){clearTimeout(e)}}})(jQuery);t.Foundation={name:"Foundation",version:"5.3.1",media_queries:{small:s(".foundation-mq-small").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),medium:s(".foundation-mq-medium").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),large:s(".foundation-mq-large").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),xlarge:s(".foundation-mq-xlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),xxlarge:s(".foundation-mq-xxlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,"")},stylesheet:e("<style></style>").appendTo("head")[0].sheet,global:{namespace:r},init:function(e,t,n,r,i){var o=[e,n,r,i],u=[];this.rtl=/rtl/i.test(s("html").attr("dir"));this.scope=e||this.scope;this.set_namespace();if(t&&typeof t==="string"&&!/reflow/i.test(t)){if(this.libs.hasOwnProperty(t)){u.push(this.init_lib(t,o))}}else{for(var a in this.libs){u.push(this.init_lib(a,t))}}return e},init_lib:function(t,n){if(this.libs.hasOwnProperty(t)){this.patch(this.libs[t]);if(n&&n.hasOwnProperty(t)){if(typeof this.libs[t].settings!=="undefined"){e.extend(true,this.libs[t].settings,n[t])}else if(typeof this.libs[t].defaults!=="undefined"){e.extend(true,this.libs[t].defaults,n[t])}return this.libs[t].init.apply(this.libs[t],[this.scope,n[t]])}n=n instanceof Array?n:new Array(n);return this.libs[t].init.apply(this.libs[t],n)}return function(){}},patch:function(e){e.scope=this.scope;e.namespace=this.global.namespace;e.rtl=this.rtl;e["data_options"]=this.utils.data_options;e["attr_name"]=o;e["add_namespace"]=u;e["bindings"]=a;e["S"]=this.utils.S},inherit:function(e,t){var n=t.split(" "),r=n.length;while(r--){if(this.utils.hasOwnProperty(n[r])){e[n[r]]=this.utils[n[r]]}}},set_namespace:function(){var t=this.global.namespace===r?e(".foundation-data-attribute-namespace").css("font-family"):this.global.namespace;this.global.namespace=t===r||/false/i.test(t)?"":t},libs:{},utils:{S:s,throttle:function(e,t){var n=null;return function(){var r=this,i=arguments;if(n==null){n=setTimeout(function(){e.apply(r,i);n=null},t)}}},debounce:function(e,t,n){var r,i;return function(){var s=this,o=arguments;var u=function(){r=null;if(!n)i=e.apply(s,o)};var a=n&&!r;clearTimeout(r);r=setTimeout(u,t);if(a)i=e.apply(s,o);return i}},data_options:function(t,n){function f(e){return!isNaN(e-0)&&e!==null&&e!==""&&e!==false&&e!==true}function l(t){if(typeof t==="string")return e.trim(t);return t}n=n||"options";var r={},i,s,o,u=function(e){var t=Foundation.global.namespace;if(t.length>0){return e.data(t+"-"+n)}return e.data(n)};var a=u(t);if(typeof a==="object"){return a}o=(a||":").split(";");i=o.length;while(i--){s=o[i].split(":");s=[s[0],s.slice(1).join(":")];if(/true/i.test(s[1]))s[1]=true;if(/false/i.test(s[1]))s[1]=false;if(f(s[1])){if(s[1].indexOf(".")===-1){s[1]=parseInt(s[1],10)}else{s[1]=parseFloat(s[1])}}if(s.length===2&&s[0].length>0){r[l(s[0])]=l(s[1])}}return r},register_media:function(t,n){if(Foundation.media_queries[t]===r){e("head").append('<meta class="'+n+'"/>');Foundation.media_queries[t]=l(e("."+n).css("font-family"))}},add_custom_rule:function(e,t){if(t===r&&Foundation.stylesheet){Foundation.stylesheet.insertRule(e,Foundation.stylesheet.cssRules.length)}else{var n=Foundation.media_queries[t];if(n!==r){Foundation.stylesheet.insertRule("@media "+Foundation.media_queries[t]+"{ "+e+" }")}}},image_loaded:function(e,t){var n=this,r=e.length;if(r===0){t(e)}e.each(function(){f(n.S(this),function(){r-=1;if(r===0){t(e)}})})},random_str:function(){if(!this.fidx)this.fidx=0;this.prefix=this.prefix||[this.name||"F",(+(new Date)).toString(36)].join("-");return this.prefix+(this.fidx++).toString(36)}}};e.fn.foundation=function(){var e=Array.prototype.slice.call(arguments,0);return this.each(function(){Foundation.init.apply(Foundation,[this].concat(e));return this})}})(jQuery,window,window.document);(function(e,t,n,r){"use strict";Foundation.libs.offcanvas={name:"offcanvas",version:"5.3.1",settings:{open_method:"move",close_on_click:true},init:function(e,t,n){this.bindings(t,n)},events:function(){var e=this,t=e.S,n="",r="",i="";if(this.settings.open_method==="move"){n="move-";r="right";i="left"}else if(this.settings.open_method==="overlap"){n="offcanvas-overlap"}t(this.scope).off(".offcanvas").on("click.fndtn.offcanvas",".left-off-canvas-toggle",function(t){e.click_toggle_class(t,n+r)}).on("click.fndtn.offcanvas",".left-off-canvas-menu a",function(t){var i=e.get_settings(t);if(i.close_on_click){e.hide.call(e,n+r,e.get_wrapper(t))}}).on("click.fndtn.offcanvas",".right-off-canvas-toggle",function(t){e.click_toggle_class(t,n+i)}).on("click.fndtn.offcanvas",".right-off-canvas-menu a",function(t){var r=e.get_settings(t);if(r.close_on_click){e.hide.call(e,n+i,e.get_wrapper(t))}}).on("click.fndtn.offcanvas",".exit-off-canvas",function(t){e.click_remove_class(t,n+i);if(r)e.click_remove_class(t,n+r)})},toggle:function(e,t){t=t||this.get_wrapper();if(t.is("."+e)){this.hide(e,t)}else{this.show(e,t)}},show:function(e,t){t=t||this.get_wrapper();t.trigger("open").trigger("open.fndtn.offcanvas");t.addClass(e)},hide:function(e,t){t=t||this.get_wrapper();t.trigger("close").trigger("close.fndtn.offcanvas");t.removeClass(e)},click_toggle_class:function(e,t){e.preventDefault();var n=this.get_wrapper(e);this.toggle(t,n)},click_remove_class:function(e,t){e.preventDefault();var n=this.get_wrapper(e);this.hide(t,n)},get_settings:function(e){var t=this.S(e.target).closest("["+this.attr_name()+"]");return t.data(this.attr_name(true)+"-init")||this.settings},get_wrapper:function(e){var t=this.S(e?e.target:this.scope).closest(".off-canvas-wrap");if(t.length===0){t=this.S(".off-canvas-wrap")}return t},reflow:function(){}}})(jQuery,window,window.document);

/*-----------------------------------------------------------------------------------------------*/

/*!
jQuery Waypoints - v2.0.5
Copyright (c) 2011-2014 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/ /*
(function(){var t=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++){if(e in this&&this[e]===t)return e}return-1},e=[].slice;(function(t,e){if(typeof define==="function"&&define.amd){return define("waypoints",["jquery"],function(n){return e(n,t)})}else{return e(t.jQuery,t)}})(window,function(n,r){var i,o,l,s,f,u,c,a,h,d,p,y,v,w,g,m;i=n(r);a=t.call(r,"ontouchstart")>=0;s={horizontal:{},vertical:{}};f=1;c={};u="waypoints-context-id";p="resize.waypoints";y="scroll.waypoints";v=1;w="waypoints-waypoint-ids";g="waypoint";m="waypoints";o=function(){function t(t){var e=this;this.$element=t;this.element=t[0];this.didResize=false;this.didScroll=false;this.id="context"+f++;this.oldScroll={x:t.scrollLeft(),y:t.scrollTop()};this.waypoints={horizontal:{},vertical:{}};this.element[u]=this.id;c[this.id]=this;t.bind(y,function(){var t;if(!(e.didScroll||a)){e.didScroll=true;t=function(){e.doScroll();return e.didScroll=false};return r.setTimeout(t,n[m].settings.scrollThrottle)}});t.bind(p,function(){var t;if(!e.didResize){e.didResize=true;t=function(){n[m]("refresh");return e.didResize=false};return r.setTimeout(t,n[m].settings.resizeThrottle)}})}t.prototype.doScroll=function(){var t,e=this;t={horizontal:{newScroll:this.$element.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.$element.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};if(a&&(!t.vertical.oldScroll||!t.vertical.newScroll)){n[m]("refresh")}n.each(t,function(t,r){var i,o,l;l=[];o=r.newScroll>r.oldScroll;i=o?r.forward:r.backward;n.each(e.waypoints[t],function(t,e){var n,i;if(r.oldScroll<(n=e.offset)&&n<=r.newScroll){return l.push(e)}else if(r.newScroll<(i=e.offset)&&i<=r.oldScroll){return l.push(e)}});l.sort(function(t,e){return t.offset-e.offset});if(!o){l.reverse()}return n.each(l,function(t,e){if(e.options.continuous||t===l.length-1){return e.trigger([i])}})});return this.oldScroll={x:t.horizontal.newScroll,y:t.vertical.newScroll}};t.prototype.refresh=function(){var t,e,r,i=this;r=n.isWindow(this.element);e=this.$element.offset();this.doScroll();t={horizontal:{contextOffset:r?0:e.left,contextScroll:r?0:this.oldScroll.x,contextDimension:this.$element.width(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:r?0:e.top,contextScroll:r?0:this.oldScroll.y,contextDimension:r?n[m]("viewportHeight"):this.$element.height(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};return n.each(t,function(t,e){return n.each(i.waypoints[t],function(t,r){var i,o,l,s,f;i=r.options.offset;l=r.offset;o=n.isWindow(r.element)?0:r.$element.offset()[e.offsetProp];if(n.isFunction(i)){i=i.apply(r.element)}else if(typeof i==="string"){i=parseFloat(i);if(r.options.offset.indexOf("%")>-1){i=Math.ceil(e.contextDimension*i/100)}}r.offset=o-e.contextOffset+e.contextScroll-i;if(r.options.onlyOnScroll&&l!=null||!r.enabled){return}if(l!==null&&l<(s=e.oldScroll)&&s<=r.offset){return r.trigger([e.backward])}else if(l!==null&&l>(f=e.oldScroll)&&f>=r.offset){return r.trigger([e.forward])}else if(l===null&&e.oldScroll>=r.offset){return r.trigger([e.forward])}})})};t.prototype.checkEmpty=function(){if(n.isEmptyObject(this.waypoints.horizontal)&&n.isEmptyObject(this.waypoints.vertical)){this.$element.unbind([p,y].join(" "));return delete c[this.id]}};return t}();l=function(){function t(t,e,r){var i,o;if(r.offset==="bottom-in-view"){r.offset=function(){var t;t=n[m]("viewportHeight");if(!n.isWindow(e.element)){t=e.$element.height()}return t-n(this).outerHeight()}}this.$element=t;this.element=t[0];this.axis=r.horizontal?"horizontal":"vertical";this.callback=r.handler;this.context=e;this.enabled=r.enabled;this.id="waypoints"+v++;this.offset=null;this.options=r;e.waypoints[this.axis][this.id]=this;s[this.axis][this.id]=this;i=(o=this.element[w])!=null?o:[];i.push(this.id);this.element[w]=i}t.prototype.trigger=function(t){if(!this.enabled){return}if(this.callback!=null){this.callback.apply(this.element,t)}if(this.options.triggerOnce){return this.destroy()}};t.prototype.disable=function(){return this.enabled=false};t.prototype.enable=function(){this.context.refresh();return this.enabled=true};t.prototype.destroy=function(){delete s[this.axis][this.id];delete this.context.waypoints[this.axis][this.id];return this.context.checkEmpty()};t.getWaypointsByElement=function(t){var e,r;r=t[w];if(!r){return[]}e=n.extend({},s.horizontal,s.vertical);return n.map(r,function(t){return e[t]})};return t}();d={init:function(t,e){var r;e=n.extend({},n.fn[g].defaults,e);if((r=e.handler)==null){e.handler=t}this.each(function(){var t,r,i,s;t=n(this);i=(s=e.context)!=null?s:n.fn[g].defaults.context;if(!n.isWindow(i)){i=t.closest(i)}i=n(i);r=c[i[0][u]];if(!r){r=new o(i)}return new l(t,r,e)});n[m]("refresh");return this},disable:function(){return d._invoke.call(this,"disable")},enable:function(){return d._invoke.call(this,"enable")},destroy:function(){return d._invoke.call(this,"destroy")},prev:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e>0){return t.push(n[e-1])}})},next:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e<n.length-1){return t.push(n[e+1])}})},_traverse:function(t,e,i){var o,l;if(t==null){t="vertical"}if(e==null){e=r}l=h.aggregate(e);o=[];this.each(function(){var e;e=n.inArray(this,l[t]);return i(o,e,l[t])});return this.pushStack(o)},_invoke:function(t){this.each(function(){var e;e=l.getWaypointsByElement(this);return n.each(e,function(e,n){n[t]();return true})});return this}};n.fn[g]=function(){var t,r;r=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(d[r]){return d[r].apply(this,t)}else if(n.isFunction(r)){return d.init.apply(this,arguments)}else if(n.isPlainObject(r)){return d.init.apply(this,[null,r])}else if(!r){return n.error("jQuery Waypoints needs a callback function or handler option.")}else{return n.error("The "+r+" method does not exist in jQuery Waypoints.")}};n.fn[g].defaults={context:r,continuous:true,enabled:true,horizontal:false,offset:0,triggerOnce:false};h={refresh:function(){return n.each(c,function(t,e){return e.refresh()})},viewportHeight:function(){var t;return(t=r.innerHeight)!=null?t:i.height()},aggregate:function(t){var e,r,i;e=s;if(t){e=(i=c[n(t)[0][u]])!=null?i.waypoints:void 0}if(!e){return[]}r={horizontal:[],vertical:[]};n.each(r,function(t,i){n.each(e[t],function(t,e){return i.push(e)});i.sort(function(t,e){return t.offset-e.offset});r[t]=n.map(i,function(t){return t.element});return r[t]=n.unique(r[t])});return r},above:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset<=t.oldScroll.y})},below:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset>t.oldScroll.y})},left:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset<=t.oldScroll.x})},right:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset>t.oldScroll.x})},enable:function(){return h._invoke("enable")},disable:function(){return h._invoke("disable")},destroy:function(){return h._invoke("destroy")},extendFn:function(t,e){return d[t]=e},_invoke:function(t){var e;e=n.extend({},s.vertical,s.horizontal);return n.each(e,function(e,n){n[t]();return true})},_filter:function(t,e,r){var i,o;i=c[n(t)[0][u]];if(!i){return[]}o=[];n.each(i.waypoints[e],function(t,e){if(r(i,e)){return o.push(e)}});o.sort(function(t,e){return t.offset-e.offset});return n.map(o,function(t){return t.element})}};n[m]=function(){var t,n;n=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(h[n]){return h[n].apply(null,t)}else{return h.aggregate.call(null,n)}};n[m].settings={resizeThrottle:100,scrollThrottle:30};return i.on("load.waypoints",function(){return n[m]("refresh")})})}).call(this);
*/
/*
Sticky Elements Shortcut for jQuery Waypoints - v2.0.5
Copyright (c) 2011-2014 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/ /*
(function(){(function(t,n){if(typeof define==="function"&&define.amd){return define(["jquery","waypoints"],n)}else{return n(t.jQuery)}})(window,function(t){var n,i;n={wrapper:'<div class="sticky-wrapper" />',stuckClass:"stuck",direction:"down right"};i=function(t,n){var i;t.wrap(n.wrapper);i=t.parent();return i.data("isWaypointStickyWrapper",true)};t.waypoints("extendFn","sticky",function(r){var e,a,s;a=t.extend({},t.fn.waypoint.defaults,n,r);e=i(this,a);s=a.handler;a.handler=function(n){var i,r;i=t(this).children(":first");r=a.direction.indexOf(n)!==-1;i.toggleClass(a.stuckClass,r);e.height(r?i.outerHeight():"");if(s!=null){return s.call(this,n)}};e.waypoint(a);return this.data("stuckClass",a.stuckClass)});return t.waypoints("extendFn","unsticky",function(){var t;t=this.parent();if(!t.data("isWaypointStickyWrapper")){return this}t.waypoint("destroy");this.unwrap();return this.removeClass(this.data("stuckClass"))})})}).call(this);

*/
/*-----------------------------------------------------------------------------------------------*/


/*!
 * Isotope PACKAGED v2.0.0
 * Filter & sort magical layouts
 * http://isotope.metafizzy.co
 */

(function(t){function e(){}function i(t){function i(e){e.prototype.option||(e.prototype.option=function(e){t.isPlainObject(e)&&(this.options=t.extend(!0,this.options,e))})}function n(e,i){t.fn[e]=function(n){if("string"==typeof n){for(var s=o.call(arguments,1),a=0,u=this.length;u>a;a++){var p=this[a],h=t.data(p,e);if(h)if(t.isFunction(h[n])&&"_"!==n.charAt(0)){var f=h[n].apply(h,s);if(void 0!==f)return f}else r("no such method '"+n+"' for "+e+" instance");else r("cannot call methods on "+e+" prior to initialization; "+"attempted to call '"+n+"'")}return this}return this.each(function(){var o=t.data(this,e);o?(o.option(n),o._init()):(o=new i(this,n),t.data(this,e,o))})}}if(t){var r="undefined"==typeof console?e:function(t){console.error(t)};return t.bridget=function(t,e){i(e),n(t,e)},t.bridget}}var o=Array.prototype.slice;"function"==typeof define&&define.amd?define("jquery-bridget/jquery.bridget",["jquery"],i):i(t.jQuery)})(window),function(t){function e(e){var i=t.event;return i.target=i.target||i.srcElement||e,i}var i=document.documentElement,o=function(){};i.addEventListener?o=function(t,e,i){t.addEventListener(e,i,!1)}:i.attachEvent&&(o=function(t,i,o){t[i+o]=o.handleEvent?function(){var i=e(t);o.handleEvent.call(o,i)}:function(){var i=e(t);o.call(t,i)},t.attachEvent("on"+i,t[i+o])});var n=function(){};i.removeEventListener?n=function(t,e,i){t.removeEventListener(e,i,!1)}:i.detachEvent&&(n=function(t,e,i){t.detachEvent("on"+e,t[e+i]);try{delete t[e+i]}catch(o){t[e+i]=void 0}});var r={bind:o,unbind:n};"function"==typeof define&&define.amd?define("eventie/eventie",r):"object"==typeof exports?module.exports=r:t.eventie=r}(this),function(t){function e(t){"function"==typeof t&&(e.isReady?t():r.push(t))}function i(t){var i="readystatechange"===t.type&&"complete"!==n.readyState;if(!e.isReady&&!i){e.isReady=!0;for(var o=0,s=r.length;s>o;o++){var a=r[o];a()}}}function o(o){return o.bind(n,"DOMContentLoaded",i),o.bind(n,"readystatechange",i),o.bind(t,"load",i),e}var n=t.document,r=[];e.isReady=!1,"function"==typeof define&&define.amd?(e.isReady="function"==typeof requirejs,define("doc-ready/doc-ready",["eventie/eventie"],o)):t.docReady=o(t.eventie)}(this),function(){function t(){}function e(t,e){for(var i=t.length;i--;)if(t[i].listener===e)return i;return-1}function i(t){return function(){return this[t].apply(this,arguments)}}var o=t.prototype,n=this,r=n.EventEmitter;o.getListeners=function(t){var e,i,o=this._getEvents();if(t instanceof RegExp){e={};for(i in o)o.hasOwnProperty(i)&&t.test(i)&&(e[i]=o[i])}else e=o[t]||(o[t]=[]);return e},o.flattenListeners=function(t){var e,i=[];for(e=0;t.length>e;e+=1)i.push(t[e].listener);return i},o.getListenersAsObject=function(t){var e,i=this.getListeners(t);return i instanceof Array&&(e={},e[t]=i),e||i},o.addListener=function(t,i){var o,n=this.getListenersAsObject(t),r="object"==typeof i;for(o in n)n.hasOwnProperty(o)&&-1===e(n[o],i)&&n[o].push(r?i:{listener:i,once:!1});return this},o.on=i("addListener"),o.addOnceListener=function(t,e){return this.addListener(t,{listener:e,once:!0})},o.once=i("addOnceListener"),o.defineEvent=function(t){return this.getListeners(t),this},o.defineEvents=function(t){for(var e=0;t.length>e;e+=1)this.defineEvent(t[e]);return this},o.removeListener=function(t,i){var o,n,r=this.getListenersAsObject(t);for(n in r)r.hasOwnProperty(n)&&(o=e(r[n],i),-1!==o&&r[n].splice(o,1));return this},o.off=i("removeListener"),o.addListeners=function(t,e){return this.manipulateListeners(!1,t,e)},o.removeListeners=function(t,e){return this.manipulateListeners(!0,t,e)},o.manipulateListeners=function(t,e,i){var o,n,r=t?this.removeListener:this.addListener,s=t?this.removeListeners:this.addListeners;if("object"!=typeof e||e instanceof RegExp)for(o=i.length;o--;)r.call(this,e,i[o]);else for(o in e)e.hasOwnProperty(o)&&(n=e[o])&&("function"==typeof n?r.call(this,o,n):s.call(this,o,n));return this},o.removeEvent=function(t){var e,i=typeof t,o=this._getEvents();if("string"===i)delete o[t];else if(t instanceof RegExp)for(e in o)o.hasOwnProperty(e)&&t.test(e)&&delete o[e];else delete this._events;return this},o.removeAllListeners=i("removeEvent"),o.emitEvent=function(t,e){var i,o,n,r,s=this.getListenersAsObject(t);for(n in s)if(s.hasOwnProperty(n))for(o=s[n].length;o--;)i=s[n][o],i.once===!0&&this.removeListener(t,i.listener),r=i.listener.apply(this,e||[]),r===this._getOnceReturnValue()&&this.removeListener(t,i.listener);return this},o.trigger=i("emitEvent"),o.emit=function(t){var e=Array.prototype.slice.call(arguments,1);return this.emitEvent(t,e)},o.setOnceReturnValue=function(t){return this._onceReturnValue=t,this},o._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},o._getEvents=function(){return this._events||(this._events={})},t.noConflict=function(){return n.EventEmitter=r,t},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return t}):"object"==typeof module&&module.exports?module.exports=t:this.EventEmitter=t}.call(this),function(t){function e(t){if(t){if("string"==typeof o[t])return t;t=t.charAt(0).toUpperCase()+t.slice(1);for(var e,n=0,r=i.length;r>n;n++)if(e=i[n]+t,"string"==typeof o[e])return e}}var i="Webkit Moz ms Ms O".split(" "),o=document.documentElement.style;"function"==typeof define&&define.amd?define("get-style-property/get-style-property",[],function(){return e}):"object"==typeof exports?module.exports=e:t.getStyleProperty=e}(window),function(t){function e(t){var e=parseFloat(t),i=-1===t.indexOf("%")&&!isNaN(e);return i&&e}function i(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0,i=s.length;i>e;e++){var o=s[e];t[o]=0}return t}function o(t){function o(t){if("string"==typeof t&&(t=document.querySelector(t)),t&&"object"==typeof t&&t.nodeType){var o=r(t);if("none"===o.display)return i();var n={};n.width=t.offsetWidth,n.height=t.offsetHeight;for(var h=n.isBorderBox=!(!p||!o[p]||"border-box"!==o[p]),f=0,c=s.length;c>f;f++){var d=s[f],l=o[d];l=a(t,l);var y=parseFloat(l);n[d]=isNaN(y)?0:y}var m=n.paddingLeft+n.paddingRight,g=n.paddingTop+n.paddingBottom,v=n.marginLeft+n.marginRight,_=n.marginTop+n.marginBottom,I=n.borderLeftWidth+n.borderRightWidth,L=n.borderTopWidth+n.borderBottomWidth,z=h&&u,S=e(o.width);S!==!1&&(n.width=S+(z?0:m+I));var b=e(o.height);return b!==!1&&(n.height=b+(z?0:g+L)),n.innerWidth=n.width-(m+I),n.innerHeight=n.height-(g+L),n.outerWidth=n.width+v,n.outerHeight=n.height+_,n}}function a(t,e){if(n||-1===e.indexOf("%"))return e;var i=t.style,o=i.left,r=t.runtimeStyle,s=r&&r.left;return s&&(r.left=t.currentStyle.left),i.left=e,e=i.pixelLeft,i.left=o,s&&(r.left=s),e}var u,p=t("boxSizing");return function(){if(p){var t=document.createElement("div");t.style.width="200px",t.style.padding="1px 2px 3px 4px",t.style.borderStyle="solid",t.style.borderWidth="1px 2px 3px 4px",t.style[p]="border-box";var i=document.body||document.documentElement;i.appendChild(t);var o=r(t);u=200===e(o.width),i.removeChild(t)}}(),o}var n=t.getComputedStyle,r=n?function(t){return n(t,null)}:function(t){return t.currentStyle},s=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];"function"==typeof define&&define.amd?define("get-size/get-size",["get-style-property/get-style-property"],o):"object"==typeof exports?module.exports=o(require("get-style-property")):t.getSize=o(t.getStyleProperty)}(window),function(t,e){function i(t,e){return t[a](e)}function o(t){if(!t.parentNode){var e=document.createDocumentFragment();e.appendChild(t)}}function n(t,e){o(t);for(var i=t.parentNode.querySelectorAll(e),n=0,r=i.length;r>n;n++)if(i[n]===t)return!0;return!1}function r(t,e){return o(t),i(t,e)}var s,a=function(){if(e.matchesSelector)return"matchesSelector";for(var t=["webkit","moz","ms","o"],i=0,o=t.length;o>i;i++){var n=t[i],r=n+"MatchesSelector";if(e[r])return r}}();if(a){var u=document.createElement("div"),p=i(u,"div");s=p?i:r}else s=n;"function"==typeof define&&define.amd?define("matches-selector/matches-selector",[],function(){return s}):window.matchesSelector=s}(this,Element.prototype),function(t){function e(t,e){for(var i in e)t[i]=e[i];return t}function i(t){for(var e in t)return!1;return e=null,!0}function o(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}function n(t,n,r){function a(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}var u=r("transition"),p=r("transform"),h=u&&p,f=!!r("perspective"),c={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"}[u],d=["transform","transition","transitionDuration","transitionProperty"],l=function(){for(var t={},e=0,i=d.length;i>e;e++){var o=d[e],n=r(o);n&&n!==o&&(t[o]=n)}return t}();e(a.prototype,t.prototype),a.prototype._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},a.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},a.prototype.getSize=function(){this.size=n(this.element)},a.prototype.css=function(t){var e=this.element.style;for(var i in t){var o=l[i]||i;e[o]=t[i]}},a.prototype.getPosition=function(){var t=s(this.element),e=this.layout.options,i=e.isOriginLeft,o=e.isOriginTop,n=parseInt(t[i?"left":"right"],10),r=parseInt(t[o?"top":"bottom"],10);n=isNaN(n)?0:n,r=isNaN(r)?0:r;var a=this.layout.size;n-=i?a.paddingLeft:a.paddingRight,r-=o?a.paddingTop:a.paddingBottom,this.position.x=n,this.position.y=r},a.prototype.layoutPosition=function(){var t=this.layout.size,e=this.layout.options,i={};e.isOriginLeft?(i.left=this.position.x+t.paddingLeft+"px",i.right=""):(i.right=this.position.x+t.paddingRight+"px",i.left=""),e.isOriginTop?(i.top=this.position.y+t.paddingTop+"px",i.bottom=""):(i.bottom=this.position.y+t.paddingBottom+"px",i.top=""),this.css(i),this.emitEvent("layout",[this])};var y=f?function(t,e){return"translate3d("+t+"px, "+e+"px, 0)"}:function(t,e){return"translate("+t+"px, "+e+"px)"};a.prototype._transitionTo=function(t,e){this.getPosition();var i=this.position.x,o=this.position.y,n=parseInt(t,10),r=parseInt(e,10),s=n===this.position.x&&r===this.position.y;if(this.setPosition(t,e),s&&!this.isTransitioning)return this.layoutPosition(),void 0;var a=t-i,u=e-o,p={},h=this.layout.options;a=h.isOriginLeft?a:-a,u=h.isOriginTop?u:-u,p.transform=y(a,u),this.transition({to:p,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},a.prototype.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},a.prototype.moveTo=h?a.prototype._transitionTo:a.prototype.goTo,a.prototype.setPosition=function(t,e){this.position.x=parseInt(t,10),this.position.y=parseInt(e,10)},a.prototype._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to);for(var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)},a.prototype._transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return this._nonTransition(t),void 0;var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);var o=this.element.offsetHeight;o=null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0};var m=p&&o(p)+",opacity";a.prototype.enableTransition=function(){this.isTransitioning||(this.css({transitionProperty:m,transitionDuration:this.layout.options.transitionDuration}),this.element.addEventListener(c,this,!1))},a.prototype.transition=a.prototype[u?"_transition":"_nonTransition"],a.prototype.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},a.prototype.onotransitionend=function(t){this.ontransitionend(t)};var g={"-webkit-transform":"transform","-moz-transform":"transform","-o-transform":"transform"};a.prototype.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,o=g[t.propertyName]||t.propertyName;if(delete e.ingProperties[o],i(e.ingProperties)&&this.disableTransition(),o in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[o]),o in e.onEnd){var n=e.onEnd[o];n.call(this),delete e.onEnd[o]}this.emitEvent("transitionEnd",[this])}},a.prototype.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(c,this,!1),this.isTransitioning=!1},a.prototype._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var v={transitionProperty:"",transitionDuration:""};return a.prototype.removeTransitionStyles=function(){this.css(v)},a.prototype.removeElem=function(){this.element.parentNode.removeChild(this.element),this.emitEvent("remove",[this])},a.prototype.remove=function(){if(!u||!parseFloat(this.layout.options.transitionDuration))return this.removeElem(),void 0;var t=this;this.on("transitionEnd",function(){return t.removeElem(),!0}),this.hide()},a.prototype.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options;this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0})},a.prototype.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options;this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:{opacity:function(){this.isHidden&&this.css({display:"none"})}}})},a.prototype.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},a}var r=t.getComputedStyle,s=r?function(t){return r(t,null)}:function(t){return t.currentStyle};"function"==typeof define&&define.amd?define("outlayer/item",["eventEmitter/EventEmitter","get-size/get-size","get-style-property/get-style-property"],n):(t.Outlayer={},t.Outlayer.Item=n(t.EventEmitter,t.getSize,t.getStyleProperty))}(window),function(t){function e(t,e){for(var i in e)t[i]=e[i];return t}function i(t){return"[object Array]"===f.call(t)}function o(t){var e=[];if(i(t))e=t;else if(t&&"number"==typeof t.length)for(var o=0,n=t.length;n>o;o++)e.push(t[o]);else e.push(t);return e}function n(t,e){var i=d(e,t);-1!==i&&e.splice(i,1)}function r(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()}function s(i,s,f,d,l,y){function m(t,i){if("string"==typeof t&&(t=a.querySelector(t)),!t||!c(t))return u&&u.error("Bad "+this.constructor.namespace+" element: "+t),void 0;this.element=t,this.options=e({},this.constructor.defaults),this.option(i);var o=++g;this.element.outlayerGUID=o,v[o]=this,this._create(),this.options.isInitLayout&&this.layout()}var g=0,v={};return m.namespace="outlayer",m.Item=y,m.defaults={containerStyle:{position:"relative"},isInitLayout:!0,isOriginLeft:!0,isOriginTop:!0,isResizeBound:!0,isResizingContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}},e(m.prototype,f.prototype),m.prototype.option=function(t){e(this.options,t)},m.prototype._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),e(this.element.style,this.options.containerStyle),this.options.isResizeBound&&this.bindResize()},m.prototype.reloadItems=function(){this.items=this._itemize(this.element.children)},m.prototype._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,o=[],n=0,r=e.length;r>n;n++){var s=e[n],a=new i(s,this);o.push(a)}return o},m.prototype._filterFindItemElements=function(t){t=o(t);for(var e=this.options.itemSelector,i=[],n=0,r=t.length;r>n;n++){var s=t[n];if(c(s))if(e){l(s,e)&&i.push(s);for(var a=s.querySelectorAll(e),u=0,p=a.length;p>u;u++)i.push(a[u])}else i.push(s)}return i},m.prototype.getItemElements=function(){for(var t=[],e=0,i=this.items.length;i>e;e++)t.push(this.items[e].element);return t},m.prototype.layout=function(){this._resetLayout(),this._manageStamps();var t=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;this.layoutItems(this.items,t),this._isLayoutInited=!0},m.prototype._init=m.prototype.layout,m.prototype._resetLayout=function(){this.getSize()},m.prototype.getSize=function(){this.size=d(this.element)},m.prototype._getMeasurement=function(t,e){var i,o=this.options[t];o?("string"==typeof o?i=this.element.querySelector(o):c(o)&&(i=o),this[t]=i?d(i)[e]:o):this[t]=0},m.prototype.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},m.prototype._getItemsForLayout=function(t){for(var e=[],i=0,o=t.length;o>i;i++){var n=t[i];n.isIgnored||e.push(n)}return e},m.prototype._layoutItems=function(t,e){function i(){o.emitEvent("layoutComplete",[o,t])}var o=this;if(!t||!t.length)return i(),void 0;this._itemsOn(t,"layout",i);for(var n=[],r=0,s=t.length;s>r;r++){var a=t[r],u=this._getItemLayoutPosition(a);u.item=a,u.isInstant=e||a.isLayoutInstant,n.push(u)}this._processLayoutQueue(n)},m.prototype._getItemLayoutPosition=function(){return{x:0,y:0}},m.prototype._processLayoutQueue=function(t){for(var e=0,i=t.length;i>e;e++){var o=t[e];this._positionItem(o.item,o.x,o.y,o.isInstant)}},m.prototype._positionItem=function(t,e,i,o){o?t.goTo(e,i):t.moveTo(e,i)},m.prototype._postLayout=function(){this.resizeContainer()},m.prototype.resizeContainer=function(){if(this.options.isResizingContainer){var t=this._getContainerSize();t&&(this._setContainerMeasure(t.width,!0),this._setContainerMeasure(t.height,!1))}},m.prototype._getContainerSize=h,m.prototype._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},m.prototype._itemsOn=function(t,e,i){function o(){return n++,n===r&&i.call(s),!0}for(var n=0,r=t.length,s=this,a=0,u=t.length;u>a;a++){var p=t[a];p.on(e,o)}},m.prototype.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},m.prototype.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},m.prototype.stamp=function(t){if(t=this._find(t)){this.stamps=this.stamps.concat(t);for(var e=0,i=t.length;i>e;e++){var o=t[e];this.ignore(o)}}},m.prototype.unstamp=function(t){if(t=this._find(t))for(var e=0,i=t.length;i>e;e++){var o=t[e];n(o,this.stamps),this.unignore(o)}},m.prototype._find=function(t){return t?("string"==typeof t&&(t=this.element.querySelectorAll(t)),t=o(t)):void 0},m.prototype._manageStamps=function(){if(this.stamps&&this.stamps.length){this._getBoundingRect();for(var t=0,e=this.stamps.length;e>t;t++){var i=this.stamps[t];this._manageStamp(i)}}},m.prototype._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},m.prototype._manageStamp=h,m.prototype._getElementOffset=function(t){var e=t.getBoundingClientRect(),i=this._boundingRect,o=d(t),n={left:e.left-i.left-o.marginLeft,top:e.top-i.top-o.marginTop,right:i.right-e.right-o.marginRight,bottom:i.bottom-e.bottom-o.marginBottom};return n},m.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},m.prototype.bindResize=function(){this.isResizeBound||(i.bind(t,"resize",this),this.isResizeBound=!0)},m.prototype.unbindResize=function(){this.isResizeBound&&i.unbind(t,"resize",this),this.isResizeBound=!1},m.prototype.onresize=function(){function t(){e.resize(),delete e.resizeTimeout}this.resizeTimeout&&clearTimeout(this.resizeTimeout);var e=this;this.resizeTimeout=setTimeout(t,100)},m.prototype.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},m.prototype.needsResizeLayout=function(){var t=d(this.element),e=this.size&&t;return e&&t.innerWidth!==this.size.innerWidth},m.prototype.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},m.prototype.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},m.prototype.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},m.prototype.reveal=function(t){var e=t&&t.length;if(e)for(var i=0;e>i;i++){var o=t[i];o.reveal()}},m.prototype.hide=function(t){var e=t&&t.length;if(e)for(var i=0;e>i;i++){var o=t[i];o.hide()}},m.prototype.getItem=function(t){for(var e=0,i=this.items.length;i>e;e++){var o=this.items[e];if(o.element===t)return o}},m.prototype.getItems=function(t){if(t&&t.length){for(var e=[],i=0,o=t.length;o>i;i++){var n=t[i],r=this.getItem(n);r&&e.push(r)}return e}},m.prototype.remove=function(t){t=o(t);var e=this.getItems(t);if(e&&e.length){this._itemsOn(e,"remove",function(){this.emitEvent("removeComplete",[this,e])});for(var i=0,r=e.length;r>i;i++){var s=e[i];s.remove(),n(s,this.items)}}},m.prototype.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="";for(var e=0,i=this.items.length;i>e;e++){var o=this.items[e];o.destroy()}this.unbindResize(),delete this.element.outlayerGUID,p&&p.removeData(this.element,this.constructor.namespace)},m.data=function(t){var e=t&&t.outlayerGUID;return e&&v[e]},m.create=function(t,i){function o(){m.apply(this,arguments)}return Object.create?o.prototype=Object.create(m.prototype):e(o.prototype,m.prototype),o.prototype.constructor=o,o.defaults=e({},m.defaults),e(o.defaults,i),o.prototype.settings={},o.namespace=t,o.data=m.data,o.Item=function(){y.apply(this,arguments)},o.Item.prototype=new y,s(function(){for(var e=r(t),i=a.querySelectorAll(".js-"+e),n="data-"+e+"-options",s=0,h=i.length;h>s;s++){var f,c=i[s],d=c.getAttribute(n);try{f=d&&JSON.parse(d)}catch(l){u&&u.error("Error parsing "+n+" on "+c.nodeName.toLowerCase()+(c.id?"#"+c.id:"")+": "+l);continue}var y=new o(c,f);p&&p.data(c,t,y)}}),p&&p.bridget&&p.bridget(t,o),o},m.Item=y,m}var a=t.document,u=t.console,p=t.jQuery,h=function(){},f=Object.prototype.toString,c="object"==typeof HTMLElement?function(t){return t instanceof HTMLElement}:function(t){return t&&"object"==typeof t&&1===t.nodeType&&"string"==typeof t.nodeName},d=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var i=0,o=t.length;o>i;i++)if(t[i]===e)return i;return-1};"function"==typeof define&&define.amd?define("outlayer/outlayer",["eventie/eventie","doc-ready/doc-ready","eventEmitter/EventEmitter","get-size/get-size","matches-selector/matches-selector","./item"],s):t.Outlayer=s(t.eventie,t.docReady,t.EventEmitter,t.getSize,t.matchesSelector,t.Outlayer.Item)}(window),function(t){function e(t){function e(){t.Item.apply(this,arguments)}return e.prototype=new t.Item,e.prototype._create=function(){this.id=this.layout.itemGUID++,t.Item.prototype._create.call(this),this.sortData={}},e.prototype.updateSortData=function(){if(!this.isIgnored){this.sortData.id=this.id,this.sortData["original-order"]=this.id,this.sortData.random=Math.random();var t=this.layout.options.getSortData,e=this.layout._sorters;for(var i in t){var o=e[i];this.sortData[i]=o(this.element,this)}}},e}"function"==typeof define&&define.amd?define("isotope/js/item",["outlayer/outlayer"],e):(t.Isotope=t.Isotope||{},t.Isotope.Item=e(t.Outlayer))}(window),function(t){function e(t,e){function i(t){this.isotope=t,t&&(this.options=t.options[this.namespace],this.element=t.element,this.items=t.filteredItems,this.size=t.size)}return function(){function t(t){return function(){return e.prototype[t].apply(this.isotope,arguments)}}for(var o=["_resetLayout","_getItemLayoutPosition","_manageStamp","_getContainerSize","_getElementOffset","needsResizeLayout"],n=0,r=o.length;r>n;n++){var s=o[n];i.prototype[s]=t(s)}}(),i.prototype.needsVerticalResizeLayout=function(){var e=t(this.isotope.element),i=this.isotope.size&&e;return i&&e.innerHeight!==this.isotope.size.innerHeight},i.prototype._getMeasurement=function(){this.isotope._getMeasurement.apply(this,arguments)},i.prototype.getColumnWidth=function(){this.getSegmentSize("column","Width")},i.prototype.getRowHeight=function(){this.getSegmentSize("row","Height")},i.prototype.getSegmentSize=function(t,e){var i=t+e,o="outer"+e;if(this._getMeasurement(i,o),!this[i]){var n=this.getFirstItemSize();this[i]=n&&n[o]||this.isotope.size["inner"+e]}},i.prototype.getFirstItemSize=function(){var e=this.isotope.filteredItems[0];return e&&e.element&&t(e.element)},i.prototype.layout=function(){this.isotope.layout.apply(this.isotope,arguments)},i.prototype.getSize=function(){this.isotope.getSize(),this.size=this.isotope.size},i.modes={},i.create=function(t,e){function o(){i.apply(this,arguments)}return o.prototype=new i,e&&(o.options=e),o.prototype.namespace=t,i.modes[t]=o,o},i}"function"==typeof define&&define.amd?define("isotope/js/layout-mode",["get-size/get-size","outlayer/outlayer"],e):(t.Isotope=t.Isotope||{},t.Isotope.LayoutMode=e(t.getSize,t.Outlayer))}(window),function(t){function e(t,e){var o=t.create("masonry");return o.prototype._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns();var t=this.cols;for(this.colYs=[];t--;)this.colYs.push(0);this.maxY=0},o.prototype.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element;this.columnWidth=i&&e(i).outerWidth||this.containerWidth}this.columnWidth+=this.gutter,this.cols=Math.floor((this.containerWidth+this.gutter)/this.columnWidth),this.cols=Math.max(this.cols,1)},o.prototype.getContainerWidth=function(){var t=this.options.isFitWidth?this.element.parentNode:this.element,i=e(t);this.containerWidth=i&&i.innerWidth},o.prototype._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,o=e&&1>e?"round":"ceil",n=Math[o](t.size.outerWidth/this.columnWidth);n=Math.min(n,this.cols);for(var r=this._getColGroup(n),s=Math.min.apply(Math,r),a=i(r,s),u={x:this.columnWidth*a,y:s},p=s+t.size.outerHeight,h=this.cols+1-r.length,f=0;h>f;f++)this.colYs[a+f]=p;return u},o.prototype._getColGroup=function(t){if(2>t)return this.colYs;for(var e=[],i=this.cols+1-t,o=0;i>o;o++){var n=this.colYs.slice(o,o+t);e[o]=Math.max.apply(Math,n)}return e},o.prototype._manageStamp=function(t){var i=e(t),o=this._getElementOffset(t),n=this.options.isOriginLeft?o.left:o.right,r=n+i.outerWidth,s=Math.floor(n/this.columnWidth);s=Math.max(0,s);var a=Math.floor(r/this.columnWidth);a-=r%this.columnWidth?0:1,a=Math.min(this.cols-1,a);for(var u=(this.options.isOriginTop?o.top:o.bottom)+i.outerHeight,p=s;a>=p;p++)this.colYs[p]=Math.max(u,this.colYs[p])},o.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this.options.isFitWidth&&(t.width=this._getContainerFitWidth()),t},o.prototype._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},o.prototype.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!==this.containerWidth},o}var i=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var i=0,o=t.length;o>i;i++){var n=t[i];if(n===e)return i}return-1};"function"==typeof define&&define.amd?define("masonry/masonry",["outlayer/outlayer","get-size/get-size"],e):t.Masonry=e(t.Outlayer,t.getSize)}(window),function(t){function e(t,e){for(var i in e)t[i]=e[i];return t}function i(t,i){var o=t.create("masonry"),n=o.prototype._getElementOffset,r=o.prototype.layout,s=o.prototype._getMeasurement;e(o.prototype,i.prototype),o.prototype._getElementOffset=n,o.prototype.layout=r,o.prototype._getMeasurement=s;var a=o.prototype.measureColumns;o.prototype.measureColumns=function(){this.items=this.isotope.filteredItems,a.call(this)};var u=o.prototype._manageStamp;return o.prototype._manageStamp=function(){this.options.isOriginLeft=this.isotope.options.isOriginLeft,this.options.isOriginTop=this.isotope.options.isOriginTop,u.apply(this,arguments)},o}"function"==typeof define&&define.amd?define("isotope/js/layout-modes/masonry",["../layout-mode","masonry/masonry"],i):i(t.Isotope.LayoutMode,t.Masonry)}(window),function(t){function e(t){var e=t.create("fitRows");return e.prototype._resetLayout=function(){this.x=0,this.y=0,this.maxY=0},e.prototype._getItemLayoutPosition=function(t){t.getSize(),0!==this.x&&t.size.outerWidth+this.x>this.isotope.size.innerWidth&&(this.x=0,this.y=this.maxY);var e={x:this.x,y:this.y};return this.maxY=Math.max(this.maxY,this.y+t.size.outerHeight),this.x+=t.size.outerWidth,e},e.prototype._getContainerSize=function(){return{height:this.maxY}},e}"function"==typeof define&&define.amd?define("isotope/js/layout-modes/fit-rows",["../layout-mode"],e):e(t.Isotope.LayoutMode)}(window),function(t){function e(t){var e=t.create("vertical",{horizontalAlignment:0});return e.prototype._resetLayout=function(){this.y=0},e.prototype._getItemLayoutPosition=function(t){t.getSize();var e=(this.isotope.size.innerWidth-t.size.outerWidth)*this.options.horizontalAlignment,i=this.y;return this.y+=t.size.outerHeight,{x:e,y:i}},e.prototype._getContainerSize=function(){return{height:this.y}},e}"function"==typeof define&&define.amd?define("isotope/js/layout-modes/vertical",["../layout-mode"],e):e(t.Isotope.LayoutMode)}(window),function(t){function e(t,e){for(var i in e)t[i]=e[i];return t}function i(t){return"[object Array]"===h.call(t)}function o(t){var e=[];if(i(t))e=t;else if(t&&"number"==typeof t.length)for(var o=0,n=t.length;n>o;o++)e.push(t[o]);else e.push(t);return e}function n(t,e){var i=f(e,t);-1!==i&&e.splice(i,1)}function r(t,i,r,u,h){function f(t,e){return function(i,o){for(var n=0,r=t.length;r>n;n++){var s=t[n],a=i.sortData[s],u=o.sortData[s];if(a>u||u>a){var p=void 0!==e[s]?e[s]:e,h=p?1:-1;return(a>u?1:-1)*h}}return 0}}var c=t.create("isotope",{layoutMode:"masonry",isJQueryFiltering:!0,sortAscending:!0});c.Item=u,c.LayoutMode=h,c.prototype._create=function(){this.itemGUID=0,this._sorters={},this._getSorters(),t.prototype._create.call(this),this.modes={},this.filteredItems=this.items,this.sortHistory=["original-order"];for(var e in h.modes)this._initLayoutMode(e)},c.prototype.reloadItems=function(){this.itemGUID=0,t.prototype.reloadItems.call(this)},c.prototype._itemize=function(){for(var e=t.prototype._itemize.apply(this,arguments),i=0,o=e.length;o>i;i++){var n=e[i];n.id=this.itemGUID++}return this._updateItemsSortData(e),e},c.prototype._initLayoutMode=function(t){var i=h.modes[t],o=this.options[t]||{};this.options[t]=i.options?e(i.options,o):o,this.modes[t]=new i(this)},c.prototype.layout=function(){return!this._isLayoutInited&&this.options.isInitLayout?(this.arrange(),void 0):(this._layout(),void 0)},c.prototype._layout=function(){var t=this._getIsInstant();this._resetLayout(),this._manageStamps(),this.layoutItems(this.filteredItems,t),this._isLayoutInited=!0},c.prototype.arrange=function(t){this.option(t),this._getIsInstant(),this.filteredItems=this._filter(this.items),this._sort(),this._layout()},c.prototype._init=c.prototype.arrange,c.prototype._getIsInstant=function(){var t=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;return this._isInstant=t,t},c.prototype._filter=function(t){function e(){f.reveal(n),f.hide(r)}var i=this.options.filter;i=i||"*";for(var o=[],n=[],r=[],s=this._getFilterTest(i),a=0,u=t.length;u>a;a++){var p=t[a];if(!p.isIgnored){var h=s(p);h&&o.push(p),h&&p.isHidden?n.push(p):h||p.isHidden||r.push(p)}}var f=this;return this._isInstant?this._noTransition(e):e(),o},c.prototype._getFilterTest=function(t){return s&&this.options.isJQueryFiltering?function(e){return s(e.element).is(t)}:"function"==typeof t?function(e){return t(e.element)}:function(e){return r(e.element,t)}},c.prototype.updateSortData=function(t){this._getSorters(),t=o(t);var e=this.getItems(t);e=e.length?e:this.items,this._updateItemsSortData(e)
},c.prototype._getSorters=function(){var t=this.options.getSortData;for(var e in t){var i=t[e];this._sorters[e]=d(i)}},c.prototype._updateItemsSortData=function(t){for(var e=0,i=t.length;i>e;e++){var o=t[e];o.updateSortData()}};var d=function(){function t(t){if("string"!=typeof t)return t;var i=a(t).split(" "),o=i[0],n=o.match(/^\[(.+)\]$/),r=n&&n[1],s=e(r,o),u=c.sortDataParsers[i[1]];return t=u?function(t){return t&&u(s(t))}:function(t){return t&&s(t)}}function e(t,e){var i;return i=t?function(e){return e.getAttribute(t)}:function(t){var i=t.querySelector(e);return i&&p(i)}}return t}();c.sortDataParsers={parseInt:function(t){return parseInt(t,10)},parseFloat:function(t){return parseFloat(t)}},c.prototype._sort=function(){var t=this.options.sortBy;if(t){var e=[].concat.apply(t,this.sortHistory),i=f(e,this.options.sortAscending);this.filteredItems.sort(i),t!==this.sortHistory[0]&&this.sortHistory.unshift(t)}},c.prototype._mode=function(){var t=this.options.layoutMode,e=this.modes[t];if(!e)throw Error("No layout mode: "+t);return e.options=this.options[t],e},c.prototype._resetLayout=function(){t.prototype._resetLayout.call(this),this._mode()._resetLayout()},c.prototype._getItemLayoutPosition=function(t){return this._mode()._getItemLayoutPosition(t)},c.prototype._manageStamp=function(t){this._mode()._manageStamp(t)},c.prototype._getContainerSize=function(){return this._mode()._getContainerSize()},c.prototype.needsResizeLayout=function(){return this._mode().needsResizeLayout()},c.prototype.appended=function(t){var e=this.addItems(t);if(e.length){var i=this._filterRevealAdded(e);this.filteredItems=this.filteredItems.concat(i)}},c.prototype.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps();var o=this._filterRevealAdded(e);this.layoutItems(i),this.filteredItems=o.concat(this.filteredItems)}},c.prototype._filterRevealAdded=function(t){var e=this._noTransition(function(){return this._filter(t)});return this.layoutItems(e,!0),this.reveal(e),t},c.prototype.insert=function(t){var e=this.addItems(t);if(e.length){var i,o,n=e.length;for(i=0;n>i;i++)o=e[i],this.element.appendChild(o.element);var r=this._filter(e);for(this._noTransition(function(){this.hide(r)}),i=0;n>i;i++)e[i].isLayoutInstant=!0;for(this.arrange(),i=0;n>i;i++)delete e[i].isLayoutInstant;this.reveal(r)}};var l=c.prototype.remove;return c.prototype.remove=function(t){t=o(t);var e=this.getItems(t);if(l.call(this,t),e&&e.length)for(var i=0,r=e.length;r>i;i++){var s=e[i];n(s,this.filteredItems)}},c.prototype._noTransition=function(t){var e=this.options.transitionDuration;this.options.transitionDuration=0;var i=t.call(this);return this.options.transitionDuration=e,i},c}var s=t.jQuery,a=String.prototype.trim?function(t){return t.trim()}:function(t){return t.replace(/^\s+|\s+$/g,"")},u=document.documentElement,p=u.textContent?function(t){return t.textContent}:function(t){return t.innerText},h=Object.prototype.toString,f=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var i=0,o=t.length;o>i;i++)if(t[i]===e)return i;return-1};"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size","matches-selector/matches-selector","isotope/js/item","isotope/js/layout-mode","isotope/js/layout-modes/masonry","isotope/js/layout-modes/fit-rows","isotope/js/layout-modes/vertical"],r):t.Isotope=r(t.Outlayer,t.getSize,t.matchesSelector,t.Isotope.Item,t.Isotope.LayoutMode)}(window);

/*-----------------------------------------------------------------------------------------------*/


!function(a,b,c,d){function e(b,c){this.settings=null,this.options=a.extend({},e.Defaults,c),this.$element=a(b),this.drag=a.extend({},m),this.state=a.extend({},n),this.e=a.extend({},o),this._plugins={},this._supress={},this._current=null,this._speed=null,this._coordinates=[],this._breakpoint=null,this._width=null,this._items=[],this._clones=[],this._mergers=[],this._invalidated={},this._pipe=[],a.each(e.Plugins,a.proxy(function(a,b){this._plugins[a[0].toLowerCase()+a.slice(1)]=new b(this)},this)),a.each(e.Pipe,a.proxy(function(b,c){this._pipe.push({filter:c.filter,run:a.proxy(c.run,this)})},this)),this.setup(),this.initialize()}function f(a){if(a.touches!==d)return{x:a.touches[0].pageX,y:a.touches[0].pageY};if(a.touches===d){if(a.pageX!==d)return{x:a.pageX,y:a.pageY};if(a.pageX===d)return{x:a.clientX,y:a.clientY}}}function g(a){var b,d,e=c.createElement("div"),f=a;for(b in f)if(d=f[b],"undefined"!=typeof e.style[d])return e=null,[d,b];return[!1]}function h(){return g(["transition","WebkitTransition","MozTransition","OTransition"])[1]}function i(){return g(["transform","WebkitTransform","MozTransform","OTransform","msTransform"])[0]}function j(){return g(["perspective","webkitPerspective","MozPerspective","OPerspective","MsPerspective"])[0]}function k(){return"ontouchstart"in b||!!navigator.msMaxTouchPoints}function l(){return b.navigator.msPointerEnabled}var m,n,o;m={start:0,startX:0,startY:0,current:0,currentX:0,currentY:0,offsetX:0,offsetY:0,distance:null,startTime:0,endTime:0,updatedX:0,targetEl:null},n={isTouch:!1,isScrolling:!1,isSwiping:!1,direction:!1,inMotion:!1},o={_onDragStart:null,_onDragMove:null,_onDragEnd:null,_transitionEnd:null,_resizer:null,_responsiveCall:null,_goToLoop:null,_checkVisibile:null},e.Defaults={items:3,loop:!1,center:!1,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:b,responsiveClass:!1,fallbackEasing:"swing",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",themeClass:"owl-theme",baseClass:"owl-carousel",itemClass:"owl-item",centerClass:"center",activeClass:"active"},e.Width={Default:"default",Inner:"inner",Outer:"outer"},e.Plugins={},e.Pipe=[{filter:["width","items","settings"],run:function(a){a.current=this._items&&this._items[this.relative(this._current)]}},{filter:["items","settings"],run:function(){var a=this._clones,b=this.$stage.children(".cloned");(b.length!==a.length||!this.settings.loop&&a.length>0)&&(this.$stage.children(".cloned").remove(),this._clones=[])}},{filter:["items","settings"],run:function(){var a,b,c=this._clones,d=this._items,e=this.settings.loop?c.length-Math.max(2*this.settings.items,4):0;for(a=0,b=Math.abs(e/2);b>a;a++)e>0?(this.$stage.children().eq(d.length+c.length-1).remove(),c.pop(),this.$stage.children().eq(0).remove(),c.pop()):(c.push(c.length/2),this.$stage.append(d[c[c.length-1]].clone().addClass("cloned")),c.push(d.length-1-(c.length-1)/2),this.$stage.prepend(d[c[c.length-1]].clone().addClass("cloned")))}},{filter:["width","items","settings"],run:function(){var a,b,c,d=this.settings.rtl?1:-1,e=(this.width()/this.settings.items).toFixed(3),f=0;for(this._coordinates=[],b=0,c=this._clones.length+this._items.length;c>b;b++)a=this._mergers[this.relative(b)],a=this.settings.mergeFit&&Math.min(a,this.settings.items)||a,f+=(this.settings.autoWidth?this._items[this.relative(b)].width()+this.settings.margin:e*a)*d,this._coordinates.push(f)}},{filter:["width","items","settings"],run:function(){var b,c,d=(this.width()/this.settings.items).toFixed(3),e={width:Math.abs(this._coordinates[this._coordinates.length-1])+2*this.settings.stagePadding,"padding-left":this.settings.stagePadding||"","padding-right":this.settings.stagePadding||""};if(this.$stage.css(e),e={width:this.settings.autoWidth?"auto":d-this.settings.margin},e[this.settings.rtl?"margin-left":"margin-right"]=this.settings.margin,!this.settings.autoWidth&&a.grep(this._mergers,function(a){return a>1}).length>0)for(b=0,c=this._coordinates.length;c>b;b++)e.width=Math.abs(this._coordinates[b])-Math.abs(this._coordinates[b-1]||0)-this.settings.margin,this.$stage.children().eq(b).css(e);else this.$stage.children().css(e)}},{filter:["width","items","settings"],run:function(a){a.current&&this.reset(this.$stage.children().index(a.current))}},{filter:["position"],run:function(){this.animate(this.coordinates(this._current))}},{filter:["width","position","items","settings"],run:function(){var a,b,c,d,e=this.settings.rtl?1:-1,f=2*this.settings.stagePadding,g=this.coordinates(this.current())+f,h=g+this.width()*e,i=[];for(c=0,d=this._coordinates.length;d>c;c++)a=this._coordinates[c-1]||0,b=Math.abs(this._coordinates[c])+f*e,(this.op(a,"<=",g)&&this.op(a,">",h)||this.op(b,"<",g)&&this.op(b,">",h))&&i.push(c);this.$stage.children("."+this.settings.activeClass).removeClass(this.settings.activeClass),this.$stage.children(":eq("+i.join("), :eq(")+")").addClass(this.settings.activeClass),this.settings.center&&(this.$stage.children("."+this.settings.centerClass).removeClass(this.settings.centerClass),this.$stage.children().eq(this.current()).addClass(this.settings.centerClass))}}],e.prototype.initialize=function(){if(this.trigger("initialize"),this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass("owl-rtl",this.settings.rtl),this.browserSupport(),this.settings.autoWidth&&this.state.imagesLoaded!==!0){var b,c,e;if(b=this.$element.find("img"),c=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:d,e=this.$element.children(c).width(),b.length&&0>=e)return this.preloadAutoWidthImages(b),!1}this.$element.addClass("owl-loading"),this.$stage=a("<"+this.settings.stageElement+' class="owl-stage"/>').wrap('<div class="owl-stage-outer">'),this.$element.append(this.$stage.parent()),this.replace(this.$element.children().not(this.$stage.parent())),this._width=this.$element.width(),this.refresh(),this.$element.removeClass("owl-loading").addClass("owl-loaded"),this.eventsCall(),this.internalEvents(),this.addTriggerableEvents(),this.trigger("initialized")},e.prototype.setup=function(){var b=this.viewport(),c=this.options.responsive,d=-1,e=null;c?(a.each(c,function(a){b>=a&&a>d&&(d=Number(a))}),e=a.extend({},this.options,c[d]),delete e.responsive,e.responsiveClass&&this.$element.attr("class",function(a,b){return b.replace(/\b owl-responsive-\S+/g,"")}).addClass("owl-responsive-"+d)):e=a.extend({},this.options),(null===this.settings||this._breakpoint!==d)&&(this.trigger("change",{property:{name:"settings",value:e}}),this._breakpoint=d,this.settings=e,this.invalidate("settings"),this.trigger("changed",{property:{name:"settings",value:this.settings}}))},e.prototype.optionsLogic=function(){this.$element.toggleClass("owl-center",this.settings.center),this.settings.loop&&this._items.length<this.settings.items&&(this.settings.loop=!1),this.settings.autoWidth&&(this.settings.stagePadding=!1,this.settings.merge=!1)},e.prototype.prepare=function(b){var c=this.trigger("prepare",{content:b});return c.data||(c.data=a("<"+this.settings.itemElement+"/>").addClass(this.settings.itemClass).append(b)),this.trigger("prepared",{content:c.data}),c.data},e.prototype.update=function(){for(var b=0,c=this._pipe.length,d=a.proxy(function(a){return this[a]},this._invalidated),e={};c>b;)(this._invalidated.all||a.grep(this._pipe[b].filter,d).length>0)&&this._pipe[b].run(e),b++;this._invalidated={}},e.prototype.width=function(a){switch(a=a||e.Width.Default){case e.Width.Inner:case e.Width.Outer:return this._width;default:return this._width-2*this.settings.stagePadding+this.settings.margin}},e.prototype.refresh=function(){if(0===this._items.length)return!1;(new Date).getTime();this.trigger("refresh"),this.setup(),this.optionsLogic(),this.$stage.addClass("owl-refresh"),this.update(),this.$stage.removeClass("owl-refresh"),this.state.orientation=b.orientation,this.watchVisibility(),this.trigger("refreshed")},e.prototype.eventsCall=function(){this.e._onDragStart=a.proxy(function(a){this.onDragStart(a)},this),this.e._onDragMove=a.proxy(function(a){this.onDragMove(a)},this),this.e._onDragEnd=a.proxy(function(a){this.onDragEnd(a)},this),this.e._onResize=a.proxy(function(a){this.onResize(a)},this),this.e._transitionEnd=a.proxy(function(a){this.transitionEnd(a)},this),this.e._preventClick=a.proxy(function(a){this.preventClick(a)},this)},e.prototype.onThrottledResize=function(){b.clearTimeout(this.resizeTimer),this.resizeTimer=b.setTimeout(this.e._onResize,this.settings.responsiveRefreshRate)},e.prototype.onResize=function(){return this._items.length?this._width===this.$element.width()?!1:this.trigger("resize").isDefaultPrevented()?!1:(this._width=this.$element.width(),this.invalidate("width"),this.refresh(),void this.trigger("resized")):!1},e.prototype.eventsRouter=function(a){var b=a.type;"mousedown"===b||"touchstart"===b?this.onDragStart(a):"mousemove"===b||"touchmove"===b?this.onDragMove(a):"mouseup"===b||"touchend"===b?this.onDragEnd(a):"touchcancel"===b&&this.onDragEnd(a)},e.prototype.internalEvents=function(){var c=(k(),l());this.settings.mouseDrag?(this.$stage.on("mousedown",a.proxy(function(a){this.eventsRouter(a)},this)),this.$stage.on("dragstart",function(){return!1}),this.$stage.get(0).onselectstart=function(){return!1}):this.$element.addClass("owl-text-select-on"),this.settings.touchDrag&&!c&&this.$stage.on("touchstart touchcancel",a.proxy(function(a){this.eventsRouter(a)},this)),this.transitionEndVendor&&this.on(this.$stage.get(0),this.transitionEndVendor,this.e._transitionEnd,!1),this.settings.responsive!==!1&&this.on(b,"resize",a.proxy(this.onThrottledResize,this))},e.prototype.onDragStart=function(d){var e,g,h,i;if(e=d.originalEvent||d||b.event,3===e.which||this.state.isTouch)return!1;if("mousedown"===e.type&&this.$stage.addClass("owl-grab"),this.trigger("drag"),this.drag.startTime=(new Date).getTime(),this.speed(0),this.state.isTouch=!0,this.state.isScrolling=!1,this.state.isSwiping=!1,this.drag.distance=0,g=f(e).x,h=f(e).y,this.drag.offsetX=this.$stage.position().left,this.drag.offsetY=this.$stage.position().top,this.settings.rtl&&(this.drag.offsetX=this.$stage.position().left+this.$stage.width()-this.width()+this.settings.margin),this.state.inMotion&&this.support3d)i=this.getTransformProperty(),this.drag.offsetX=i,this.animate(i),this.state.inMotion=!0;else if(this.state.inMotion&&!this.support3d)return this.state.inMotion=!1,!1;this.drag.startX=g-this.drag.offsetX,this.drag.startY=h-this.drag.offsetY,this.drag.start=g-this.drag.startX,this.drag.targetEl=e.target||e.srcElement,this.drag.updatedX=this.drag.start,("IMG"===this.drag.targetEl.tagName||"A"===this.drag.targetEl.tagName)&&(this.drag.targetEl.draggable=!1),a(c).on("mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents",a.proxy(function(a){this.eventsRouter(a)},this))},e.prototype.onDragMove=function(a){var c,e,g,h,i,j;this.state.isTouch&&(this.state.isScrolling||(c=a.originalEvent||a||b.event,e=f(c).x,g=f(c).y,this.drag.currentX=e-this.drag.startX,this.drag.currentY=g-this.drag.startY,this.drag.distance=this.drag.currentX-this.drag.offsetX,this.drag.distance<0?this.state.direction=this.settings.rtl?"right":"left":this.drag.distance>0&&(this.state.direction=this.settings.rtl?"left":"right"),this.settings.loop?this.op(this.drag.currentX,">",this.coordinates(this.minimum()))&&"right"===this.state.direction?this.drag.currentX-=(this.settings.center&&this.coordinates(0))-this.coordinates(this._items.length):this.op(this.drag.currentX,"<",this.coordinates(this.maximum()))&&"left"===this.state.direction&&(this.drag.currentX+=(this.settings.center&&this.coordinates(0))-this.coordinates(this._items.length)):(h=this.coordinates(this.settings.rtl?this.maximum():this.minimum()),i=this.coordinates(this.settings.rtl?this.minimum():this.maximum()),j=this.settings.pullDrag?this.drag.distance/5:0,this.drag.currentX=Math.max(Math.min(this.drag.currentX,h+j),i+j)),(this.drag.distance>8||this.drag.distance<-8)&&(c.preventDefault!==d?c.preventDefault():c.returnValue=!1,this.state.isSwiping=!0),this.drag.updatedX=this.drag.currentX,(this.drag.currentY>16||this.drag.currentY<-16)&&this.state.isSwiping===!1&&(this.state.isScrolling=!0,this.drag.updatedX=this.drag.start),this.animate(this.drag.updatedX)))},e.prototype.onDragEnd=function(b){var d,e,f;if(this.state.isTouch){if("mouseup"===b.type&&this.$stage.removeClass("owl-grab"),this.trigger("dragged"),this.drag.targetEl.removeAttribute("draggable"),this.state.isTouch=!1,this.state.isScrolling=!1,this.state.isSwiping=!1,0===this.drag.distance&&this.state.inMotion!==!0)return this.state.inMotion=!1,!1;this.drag.endTime=(new Date).getTime(),d=this.drag.endTime-this.drag.startTime,e=Math.abs(this.drag.distance),(e>3||d>300)&&this.removeClick(this.drag.targetEl),f=this.closest(this.drag.updatedX),this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed),this.current(f),this.invalidate("position"),this.update(),this.settings.pullDrag||this.drag.updatedX!==this.coordinates(f)||this.transitionEnd(),this.drag.distance=0,a(c).off(".owl.dragEvents")}},e.prototype.removeClick=function(c){this.drag.targetEl=c,a(c).on("click.preventClick",this.e._preventClick),b.setTimeout(function(){a(c).off("click.preventClick")},300)},e.prototype.preventClick=function(b){b.preventDefault?b.preventDefault():b.returnValue=!1,b.stopPropagation&&b.stopPropagation(),a(b.target).off("click.preventClick")},e.prototype.getTransformProperty=function(){var a,c;return a=b.getComputedStyle(this.$stage.get(0),null).getPropertyValue(this.vendorName+"transform"),a=a.replace(/matrix(3d)?\(|\)/g,"").split(","),c=16===a.length,c!==!0?a[4]:a[12]},e.prototype.closest=function(b){var c=-1,d=30,e=this.width(),f=this.coordinates();return this.settings.freeDrag||a.each(f,a.proxy(function(a,g){return b>g-d&&g+d>b?c=a:this.op(b,"<",g)&&this.op(b,">",f[a+1]||g-e)&&(c="left"===this.state.direction?a+1:a),-1===c},this)),this.settings.loop||(this.op(b,">",f[this.minimum()])?c=b=this.minimum():this.op(b,"<",f[this.maximum()])&&(c=b=this.maximum())),c},e.prototype.animate=function(b){this.trigger("translate"),this.state.inMotion=this.speed()>0,this.support3d?this.$stage.css({transform:"translate3d("+b+"px,0px, 0px)",transition:this.speed()/1e3+"s"}):this.state.isTouch?this.$stage.css({left:b+"px"}):this.$stage.animate({left:b},this.speed()/1e3,this.settings.fallbackEasing,a.proxy(function(){this.state.inMotion&&this.transitionEnd()},this))},e.prototype.current=function(a){if(a===d)return this._current;if(0===this._items.length)return d;if(a=this.normalize(a),this._current!==a){var b=this.trigger("change",{property:{name:"position",value:a}});b.data!==d&&(a=this.normalize(b.data)),this._current=a,this.invalidate("position"),this.trigger("changed",{property:{name:"position",value:this._current}})}return this._current},e.prototype.invalidate=function(a){this._invalidated[a]=!0},e.prototype.reset=function(a){a=this.normalize(a),a!==d&&(this._speed=0,this._current=a,this.suppress(["translate","translated"]),this.animate(this.coordinates(a)),this.release(["translate","translated"]))},e.prototype.normalize=function(b,c){var e=c?this._items.length:this._items.length+this._clones.length;return!a.isNumeric(b)||1>e?d:b=this._clones.length?(b%e+e)%e:Math.max(this.minimum(c),Math.min(this.maximum(c),b))},e.prototype.relative=function(a){return a=this.normalize(a),a-=this._clones.length/2,this.normalize(a,!0)},e.prototype.maximum=function(a){var b,c,d,e=0,f=this.settings;if(a)return this._items.length-1;if(!f.loop&&f.center)b=this._items.length-1;else if(f.loop||f.center)if(f.loop||f.center)b=this._items.length+f.items;else{if(!f.autoWidth&&!f.merge)throw"Can not detect maximum absolute position.";for(revert=f.rtl?1:-1,c=this.$stage.width()-this.$element.width();(d=this.coordinates(e))&&!(d*revert>=c);)b=++e}else b=this._items.length-f.items;return b},e.prototype.minimum=function(a){return a?0:this._clones.length/2},e.prototype.items=function(a){return a===d?this._items.slice():(a=this.normalize(a,!0),this._items[a])},e.prototype.mergers=function(a){return a===d?this._mergers.slice():(a=this.normalize(a,!0),this._mergers[a])},e.prototype.clones=function(b){var c=this._clones.length/2,e=c+this._items.length,f=function(a){return a%2===0?e+a/2:c-(a+1)/2};return b===d?a.map(this._clones,function(a,b){return f(b)}):a.map(this._clones,function(a,c){return a===b?f(c):null})},e.prototype.speed=function(a){return a!==d&&(this._speed=a),this._speed},e.prototype.coordinates=function(b){var c=null;return b===d?a.map(this._coordinates,a.proxy(function(a,b){return this.coordinates(b)},this)):(this.settings.center?(c=this._coordinates[b],c+=(this.width()-c+(this._coordinates[b-1]||0))/2*(this.settings.rtl?-1:1)):c=this._coordinates[b-1]||0,c)},e.prototype.duration=function(a,b,c){return Math.min(Math.max(Math.abs(b-a),1),6)*Math.abs(c||this.settings.smartSpeed)},e.prototype.to=function(c,d){if(this.settings.loop){var e=c-this.relative(this.current()),f=this.current(),g=this.current(),h=this.current()+e,i=0>g-h?!0:!1,j=this._clones.length+this._items.length;h<this.settings.items&&i===!1?(f=g+this._items.length,this.reset(f)):h>=j-this.settings.items&&i===!0&&(f=g-this._items.length,this.reset(f)),b.clearTimeout(this.e._goToLoop),this.e._goToLoop=b.setTimeout(a.proxy(function(){this.speed(this.duration(this.current(),f+e,d)),this.current(f+e),this.update()},this),30)}else this.speed(this.duration(this.current(),c,d)),this.current(c),this.update()},e.prototype.next=function(a){a=a||!1,this.to(this.relative(this.current())+1,a)},e.prototype.prev=function(a){a=a||!1,this.to(this.relative(this.current())-1,a)},e.prototype.transitionEnd=function(a){return a!==d&&(a.stopPropagation(),(a.target||a.srcElement||a.originalTarget)!==this.$stage.get(0))?!1:(this.state.inMotion=!1,void this.trigger("translated"))},e.prototype.viewport=function(){var d;if(this.options.responsiveBaseElement!==b)d=a(this.options.responsiveBaseElement).width();else if(b.innerWidth)d=b.innerWidth;else{if(!c.documentElement||!c.documentElement.clientWidth)throw"Can not detect viewport width.";d=c.documentElement.clientWidth}return d},e.prototype.replace=function(b){this.$stage.empty(),this._items=[],b&&(b=b instanceof jQuery?b:a(b)),this.settings.nestedItemSelector&&(b=b.find("."+this.settings.nestedItemSelector)),b.filter(function(){return 1===this.nodeType}).each(a.proxy(function(a,b){b=this.prepare(b),this.$stage.append(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").andSelf("[data-merge]").attr("data-merge")||1)},this)),this.reset(a.isNumeric(this.settings.startPosition)?this.settings.startPosition:0),this.invalidate("items")},e.prototype.add=function(a,b){b=b===d?this._items.length:this.normalize(b,!0),this.trigger("add",{content:a,position:b}),0===this._items.length||b===this._items.length?(this.$stage.append(a),this._items.push(a),this._mergers.push(1*a.find("[data-merge]").andSelf("[data-merge]").attr("data-merge")||1)):(this._items[b].before(a),this._items.splice(b,0,a),this._mergers.splice(b,0,1*a.find("[data-merge]").andSelf("[data-merge]").attr("data-merge")||1)),this.invalidate("items"),this.trigger("added",{content:a,position:b})},e.prototype.remove=function(a){a=this.normalize(a,!0),a!==d&&(this.trigger("remove",{content:this._items[a],position:a}),this._items[a].remove(),this._items.splice(a,1),this._mergers.splice(a,1),this.invalidate("items"),this.trigger("removed",{content:null,position:a}))},e.prototype.addTriggerableEvents=function(){var b=a.proxy(function(b,c){return a.proxy(function(a){a.relatedTarget!==this&&(this.suppress([c]),b.apply(this,[].slice.call(arguments,1)),this.release([c]))},this)},this);a.each({next:this.next,prev:this.prev,to:this.to,destroy:this.destroy,refresh:this.refresh,replace:this.replace,add:this.add,remove:this.remove},a.proxy(function(a,c){this.$element.on(a+".owl.carousel",b(c,a+".owl.carousel"))},this))},e.prototype.watchVisibility=function(){function c(a){return a.offsetWidth>0&&a.offsetHeight>0}function d(){c(this.$element.get(0))&&(this.$element.removeClass("owl-hidden"),this.refresh(),b.clearInterval(this.e._checkVisibile))}c(this.$element.get(0))||(this.$element.addClass("owl-hidden"),b.clearInterval(this.e._checkVisibile),this.e._checkVisibile=b.setInterval(a.proxy(d,this),500))},e.prototype.preloadAutoWidthImages=function(b){var c,d,e,f;c=0,d=this,b.each(function(g,h){e=a(h),f=new Image,f.onload=function(){c++,e.attr("src",f.src),e.css("opacity",1),c>=b.length&&(d.state.imagesLoaded=!0,d.initialize())},f.src=e.attr("src")||e.attr("data-src")||e.attr("data-src-retina")})},e.prototype.destroy=function(){this.$element.hasClass(this.settings.themeClass)&&this.$element.removeClass(this.settings.themeClass),this.settings.responsive!==!1&&a(b).off("resize.owl.carousel"),this.transitionEndVendor&&this.off(this.$stage.get(0),this.transitionEndVendor,this.e._transitionEnd);for(var d in this._plugins)this._plugins[d].destroy();(this.settings.mouseDrag||this.settings.touchDrag)&&(this.$stage.off("mousedown touchstart touchcancel"),a(c).off(".owl.dragEvents"),this.$stage.get(0).onselectstart=function(){},this.$stage.off("dragstart",function(){return!1})),this.$element.off(".owl"),this.$stage.children(".cloned").remove(),this.e=null,this.$element.removeData("owlCarousel"),this.$stage.children().contents().unwrap(),this.$stage.children().unwrap(),this.$stage.unwrap()},e.prototype.op=function(a,b,c){var d=this.settings.rtl;switch(b){case"<":return d?a>c:c>a;case">":return d?c>a:a>c;case">=":return d?c>=a:a>=c;case"<=":return d?a>=c:c>=a}},e.prototype.on=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d):a.attachEvent&&a.attachEvent("on"+b,c)},e.prototype.off=function(a,b,c,d){a.removeEventListener?a.removeEventListener(b,c,d):a.detachEvent&&a.detachEvent("on"+b,c)},e.prototype.trigger=function(b,c,d){var e={item:{count:this._items.length,index:this.current()}},f=a.camelCase(a.grep(["on",b,d],function(a){return a}).join("-").toLowerCase()),g=a.Event([b,"owl",d||"carousel"].join(".").toLowerCase(),a.extend({relatedTarget:this},e,c));return this._supress[b]||(a.each(this._plugins,function(a,b){b.onTrigger&&b.onTrigger(g)}),this.$element.trigger(g),this.settings&&"function"==typeof this.settings[f]&&this.settings[f].apply(this,g)),g},e.prototype.suppress=function(b){a.each(b,a.proxy(function(a,b){this._supress[b]=!0},this))},e.prototype.release=function(b){a.each(b,a.proxy(function(a,b){delete this._supress[b]},this))},e.prototype.browserSupport=function(){if(this.support3d=j(),this.support3d){this.transformVendor=i();var a=["transitionend","webkitTransitionEnd","transitionend","oTransitionEnd"];this.transitionEndVendor=a[h()],this.vendorName=this.transformVendor.replace(/Transform/i,""),this.vendorName=""!==this.vendorName?"-"+this.vendorName.toLowerCase()+"-":""}this.state.orientation=b.orientation},a.fn.owlCarousel=function(b){return this.each(function(){a(this).data("owlCarousel")||a(this).data("owlCarousel",new e(this,b))})},a.fn.owlCarousel.Constructor=e}(window.Zepto||window.jQuery,window,document),function(a,b){var c=function(b){this._core=b,this._loaded=[],this._handlers={"initialized.owl.carousel change.owl.carousel":a.proxy(function(b){if(b.namespace&&this._core.settings&&this._core.settings.lazyLoad&&(b.property&&"position"==b.property.name||"initialized"==b.type))for(var c=this._core.settings,d=c.center&&Math.ceil(c.items/2)||c.items,e=c.center&&-1*d||0,f=(b.property&&b.property.value||this._core.current())+e,g=this._core.clones().length,h=a.proxy(function(a,b){this.load(b)},this);e++<d;)this.load(g/2+this._core.relative(f)),g&&a.each(this._core.clones(this._core.relative(f++)),h)},this)},this._core.options=a.extend({},c.Defaults,this._core.options),this._core.$element.on(this._handlers)};c.Defaults={lazyLoad:!1},c.prototype.load=function(c){var d=this._core.$stage.children().eq(c),e=d&&d.find(".owl-lazy");!e||a.inArray(d.get(0),this._loaded)>-1||(e.each(a.proxy(function(c,d){var e,f=a(d),g=b.devicePixelRatio>1&&f.attr("data-src-retina")||f.attr("data-src");this._core.trigger("load",{element:f,url:g},"lazy"),f.is("img")?f.one("load.owl.lazy",a.proxy(function(){f.css("opacity",1),this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("src",g):(e=new Image,e.onload=a.proxy(function(){f.css({"background-image":"url("+g+")",opacity:"1"}),this._core.trigger("loaded",{element:f,url:g},"lazy")},this),e.src=g)},this)),this._loaded.push(d.get(0)))},c.prototype.destroy=function(){var a,b;for(a in this.handlers)this._core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Lazy=c}(window.Zepto||window.jQuery,window,document),function(a){var b=function(c){this._core=c,this._handlers={"initialized.owl.carousel":a.proxy(function(){this._core.settings.autoHeight&&this.update()},this),"changed.owl.carousel":a.proxy(function(a){this._core.settings.autoHeight&&"position"==a.property.name&&this.update()},this),"loaded.owl.lazy":a.proxy(function(a){this._core.settings.autoHeight&&a.element.closest("."+this._core.settings.itemClass)===this._core.$stage.children().eq(this._core.current())&&this.update()},this)},this._core.options=a.extend({},b.Defaults,this._core.options),this._core.$element.on(this._handlers)};b.Defaults={autoHeight:!1,autoHeightClass:"owl-height"},b.prototype.update=function(){this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass)},b.prototype.destroy=function(){var a,b;for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoHeight=b}(window.Zepto||window.jQuery,window,document),function(a,b,c){var d=function(b){this._core=b,this._videos={},this._playing=null,this._fullscreen=!1,this._handlers={"resize.owl.carousel":a.proxy(function(a){this._core.settings.video&&!this.isInFullScreen()&&a.preventDefault()},this),"refresh.owl.carousel changed.owl.carousel":a.proxy(function(){this._playing&&this.stop()},this),"prepared.owl.carousel":a.proxy(function(b){var c=a(b.content).find(".owl-video");c.length&&(c.css("display","none"),this.fetch(c,a(b.content)))},this)},this._core.options=a.extend({},d.Defaults,this._core.options),this._core.$element.on(this._handlers),this._core.$element.on("click.owl.video",".owl-video-play-icon",a.proxy(function(a){this.play(a)},this))};d.Defaults={video:!1,videoHeight:!1,videoWidth:!1},d.prototype.fetch=function(a,b){var c=a.attr("data-vimeo-id")?"vimeo":"youtube",d=a.attr("data-vimeo-id")||a.attr("data-youtube-id"),e=a.attr("data-width")||this._core.settings.videoWidth,f=a.attr("data-height")||this._core.settings.videoHeight,g=a.attr("href");if(!g)throw new Error("Missing video URL.");if(d=g.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),d[3].indexOf("youtu")>-1)c="youtube";else{if(!(d[3].indexOf("vimeo")>-1))throw new Error("Video URL not supported.");c="vimeo"}d=d[6],this._videos[g]={type:c,id:d,width:e,height:f},b.attr("data-video",g),this.thumbnail(a,this._videos[g])},d.prototype.thumbnail=function(b,c){var d,e,f,g=c.width&&c.height?'style="width:'+c.width+"px;height:"+c.height+'px;"':"",h=b.find("img"),i="src",j="",k=this._core.settings,l=function(a){e='<div class="owl-video-play-icon"></div>',d=k.lazyLoad?'<div class="owl-video-tn '+j+'" '+i+'="'+a+'"></div>':'<div class="owl-video-tn" style="opacity:1;background-image:url('+a+')"></div>',b.after(d),b.after(e)};return b.wrap('<div class="owl-video-wrapper"'+g+"></div>"),this._core.settings.lazyLoad&&(i="data-src",j="owl-lazy"),h.length?(l(h.attr(i)),h.remove(),!1):void("youtube"===c.type?(f="http://img.youtube.com/vi/"+c.id+"/hqdefault.jpg",l(f)):"vimeo"===c.type&&a.ajax({type:"GET",url:"http://vimeo.com/api/v2/video/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a[0].thumbnail_large,l(f)}}))},d.prototype.stop=function(){this._core.trigger("stop",null,"video"),this._playing.find(".owl-video-frame").remove(),this._playing.removeClass("owl-video-playing"),this._playing=null},d.prototype.play=function(b){this._core.trigger("play",null,"video"),this._playing&&this.stop();var c,d,e=a(b.target||b.srcElement),f=e.closest("."+this._core.settings.itemClass),g=this._videos[f.attr("data-video")],h=g.width||"100%",i=g.height||this._core.$stage.height();"youtube"===g.type?c='<iframe width="'+h+'" height="'+i+'" src="http://www.youtube.com/embed/'+g.id+"?autoplay=1&v="+g.id+'" frameborder="0" allowfullscreen></iframe>':"vimeo"===g.type&&(c='<iframe src="http://player.vimeo.com/video/'+g.id+'?autoplay=1" width="'+h+'" height="'+i+'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'),f.addClass("owl-video-playing"),this._playing=f,d=a('<div style="height:'+i+"px; width:"+h+'px" class="owl-video-frame">'+c+"</div>"),e.after(d)},d.prototype.isInFullScreen=function(){var d=c.fullscreenElement||c.mozFullScreenElement||c.webkitFullscreenElement;return d&&a(d).parent().hasClass("owl-video-frame")&&(this._core.speed(0),this._fullscreen=!0),d&&this._fullscreen&&this._playing?!1:this._fullscreen?(this._fullscreen=!1,!1):this._playing&&this._core.state.orientation!==b.orientation?(this._core.state.orientation=b.orientation,!1):!0},d.prototype.destroy=function(){var a,b;this._core.$element.off("click.owl.video");for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Video=d}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this.core=b,this.core.options=a.extend({},e.Defaults,this.core.options),this.swapping=!0,this.previous=d,this.next=d,this.handlers={"change.owl.carousel":a.proxy(function(a){"position"==a.property.name&&(this.previous=this.core.current(),this.next=a.property.value)},this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":a.proxy(function(a){this.swapping="translated"==a.type},this),"translate.owl.carousel":a.proxy(function(){this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)&&this.swap()},this)},this.core.$element.on(this.handlers)};e.Defaults={animateOut:!1,animateIn:!1},e.prototype.swap=function(){if(1===this.core.settings.items&&this.core.support3d){this.core.speed(0);var b,c=a.proxy(this.clear,this),d=this.core.$stage.children().eq(this.previous),e=this.core.$stage.children().eq(this.next),f=this.core.settings.animateIn,g=this.core.settings.animateOut;this.core.current()!==this.previous&&(g&&(b=this.core.coordinates(this.previous)-this.core.coordinates(this.next),d.css({left:b+"px"}).addClass("animated owl-animated-out").addClass(g).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",c)),f&&e.addClass("animated owl-animated-in").addClass(f).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",c))}},e.prototype.clear=function(b){a(b.target).css({left:""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),this.core.transitionEnd()},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this.core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Animate=e}(window.Zepto||window.jQuery,window,document),function(a,b,c){var d=function(b){this.core=b,this.core.options=a.extend({},d.Defaults,this.core.options),this.handlers={"translated.owl.carousel refreshed.owl.carousel":a.proxy(function(){this.autoplay()
},this),"play.owl.autoplay":a.proxy(function(a,b,c){this.play(b,c)},this),"stop.owl.autoplay":a.proxy(function(){this.stop()},this),"mouseover.owl.autoplay":a.proxy(function(){this.core.settings.autoplayHoverPause&&this.pause()},this),"mouseleave.owl.autoplay":a.proxy(function(){this.core.settings.autoplayHoverPause&&this.autoplay()},this)},this.core.$element.on(this.handlers)};d.Defaults={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,autoplaySpeed:!1},d.prototype.autoplay=function(){this.core.settings.autoplay&&!this.core.state.videoPlay?(b.clearInterval(this.interval),this.interval=b.setInterval(a.proxy(function(){this.play()},this),this.core.settings.autoplayTimeout)):b.clearInterval(this.interval)},d.prototype.play=function(){return c.hidden===!0||this.core.state.isTouch||this.core.state.isScrolling||this.core.state.isSwiping||this.core.state.inMotion?void 0:this.core.settings.autoplay===!1?void b.clearInterval(this.interval):void this.core.next(this.core.settings.autoplaySpeed)},d.prototype.stop=function(){b.clearInterval(this.interval)},d.prototype.pause=function(){b.clearInterval(this.interval)},d.prototype.destroy=function(){var a,c;b.clearInterval(this.interval);for(a in this.handlers)this.core.$element.off(a,this.handlers[a]);for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},a.fn.owlCarousel.Constructor.Plugins.autoplay=d}(window.Zepto||window.jQuery,window,document),function(a){"use strict";var b=function(c){this._core=c,this._initialized=!1,this._pages=[],this._controls={},this._templates=[],this.$element=this._core.$element,this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to},this._handlers={"prepared.owl.carousel":a.proxy(function(b){this._core.settings.dotsData&&this._templates.push(a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))},this),"add.owl.carousel":a.proxy(function(b){this._core.settings.dotsData&&this._templates.splice(b.position,0,a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))},this),"remove.owl.carousel prepared.owl.carousel":a.proxy(function(a){this._core.settings.dotsData&&this._templates.splice(a.position,1)},this),"change.owl.carousel":a.proxy(function(a){if("position"==a.property.name&&!this._core.state.revert&&!this._core.settings.loop&&this._core.settings.navRewind){var b=this._core.current(),c=this._core.maximum(),d=this._core.minimum();a.data=a.property.value>c?b>=c?d:c:a.property.value<d?c:a.property.value}},this),"changed.owl.carousel":a.proxy(function(a){"position"==a.property.name&&this.draw()},this),"refreshed.owl.carousel":a.proxy(function(){this._initialized||(this.initialize(),this._initialized=!0),this._core.trigger("refresh",null,"navigation"),this.update(),this.draw(),this._core.trigger("refreshed",null,"navigation")},this)},this._core.options=a.extend({},b.Defaults,this._core.options),this.$element.on(this._handlers)};b.Defaults={nav:!1,navRewind:!0,navText:["prev","next"],navSpeed:!1,navElement:"div",navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotData:!1,dotsSpeed:!1,dotsContainer:!1,controlsClass:"owl-controls"},b.prototype.initialize=function(){var b,c,d=this._core.settings;d.dotsData||(this._templates=[a("<div>").addClass(d.dotClass).append(a("<span>")).prop("outerHTML")]),d.navContainer&&d.dotsContainer||(this._controls.$container=a("<div>").addClass(d.controlsClass).appendTo(this.$element)),this._controls.$indicators=d.dotsContainer?a(d.dotsContainer):a("<div>").hide().addClass(d.dotsClass).appendTo(this._controls.$container),this._controls.$indicators.on("click","div",a.proxy(function(b){var c=a(b.target).parent().is(this._controls.$indicators)?a(b.target).index():a(b.target).parent().index();b.preventDefault(),this.to(c,d.dotsSpeed)},this)),b=d.navContainer?a(d.navContainer):a("<div>").addClass(d.navContainerClass).prependTo(this._controls.$container),this._controls.$next=a("<"+d.navElement+">"),this._controls.$previous=this._controls.$next.clone(),this._controls.$previous.addClass(d.navClass[0]).html(d.navText[0]).hide().prependTo(b).on("click",a.proxy(function(){this.prev(d.navSpeed)},this)),this._controls.$next.addClass(d.navClass[1]).html(d.navText[1]).hide().appendTo(b).on("click",a.proxy(function(){this.next(d.navSpeed)},this));for(c in this._overrides)this._core[c]=a.proxy(this[c],this)},b.prototype.destroy=function(){var a,b,c,d;for(a in this._handlers)this.$element.off(a,this._handlers[a]);for(b in this._controls)this._controls[b].remove();for(d in this.overides)this._core[d]=this._overrides[d];for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},b.prototype.update=function(){var a,b,c,d=this._core.settings,e=this._core.clones().length/2,f=e+this._core.items().length,g=d.center||d.autoWidth||d.dotData?1:d.dotsEach||d.items;if("page"!==d.slideBy&&(d.slideBy=Math.min(d.slideBy,d.items)),d.dots||"page"==d.slideBy)for(this._pages=[],a=e,b=0,c=0;f>a;a++)(b>=g||0===b)&&(this._pages.push({start:a-e,end:a-e+g-1}),b=0,++c),b+=this._core.mergers(this._core.relative(a))},b.prototype.draw=function(){var b,c,d="",e=this._core.settings,f=(this._core.$stage.children(),this._core.relative(this._core.current()));if(!e.nav||e.loop||e.navRewind||(this._controls.$previous.toggleClass("disabled",0>=f),this._controls.$next.toggleClass("disabled",f>=this._core.maximum())),this._controls.$previous.toggle(e.nav),this._controls.$next.toggle(e.nav),e.dots){if(b=this._pages.length-this._controls.$indicators.children().length,e.dotData&&0!==b){for(c=0;c<this._controls.$indicators.children().length;c++)d+=this._templates[this._core.relative(c)];this._controls.$indicators.html(d)}else b>0?(d=new Array(b+1).join(this._templates[0]),this._controls.$indicators.append(d)):0>b&&this._controls.$indicators.children().slice(b).remove();this._controls.$indicators.find(".active").removeClass("active"),this._controls.$indicators.children().eq(a.inArray(this.current(),this._pages)).addClass("active")}this._controls.$indicators.toggle(e.dots)},b.prototype.onTrigger=function(b){var c=this._core.settings;b.page={index:a.inArray(this.current(),this._pages),count:this._pages.length,size:c&&(c.center||c.autoWidth||c.dotData?1:c.dotsEach||c.items)}},b.prototype.current=function(){var b=this._core.relative(this._core.current());return a.grep(this._pages,function(a){return a.start<=b&&a.end>=b}).pop()},b.prototype.getPosition=function(b){var c,d,e=this._core.settings;return"page"==e.slideBy?(c=a.inArray(this.current(),this._pages),d=this._pages.length,b?++c:--c,c=this._pages[(c%d+d)%d].start):(c=this._core.relative(this._core.current()),d=this._core.items().length,b?c+=e.slideBy:c-=e.slideBy),c},b.prototype.next=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!0),b)},b.prototype.prev=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!1),b)},b.prototype.to=function(b,c,d){var e;d?a.proxy(this._overrides.to,this._core)(b,c):(e=this._pages.length,a.proxy(this._overrides.to,this._core)(this._pages[(b%e+e)%e].start,c))},a.fn.owlCarousel.Constructor.Plugins.Navigation=b}(window.Zepto||window.jQuery,window,document),function(a,b){"use strict";var c=function(d){this._core=d,this._hashes={},this.$element=this._core.$element,this._handlers={"initialized.owl.carousel":a.proxy(function(){"URLHash"==this._core.settings.startPosition&&a(b).trigger("hashchange.owl.navigation")},this),"prepared.owl.carousel":a.proxy(function(b){var c=a(b.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");this._hashes[c]=b.content},this)},this._core.options=a.extend({},c.Defaults,this._core.options),this.$element.on(this._handlers),a(b).on("hashchange.owl.navigation",a.proxy(function(){var a=b.location.hash.substring(1),c=this._core.$stage.children(),d=this._hashes[a]&&c.index(this._hashes[a])||0;return a?void this._core.to(d,!1,!0):!1},this))};c.Defaults={URLhashListener:!1},c.prototype.destroy=function(){var c,d;a(b).off("hashchange.owl.navigation");for(c in this._handlers)this._core.$element.off(c,this._handlers[c]);for(d in Object.getOwnPropertyNames(this))"function"!=typeof this[d]&&(this[d]=null)},a.fn.owlCarousel.Constructor.Plugins.Hash=c}(window.Zepto||window.jQuery,window,document);

/*-----------------------------------------------------------------------------------------------*/

/*http://sachinchoolur.github.io/lightGallery*/
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('!2(e){"4s 4p";e.4k.7=2(i){4 a,l,t,n,s,o,d,r,c,h,u,v,f,p={X:"k",3n:!0,1b:"4d",U:4a,3l:!0,1m:!1,1B:!1,3k:47,M:1,3g:!0,1g:!1,3f:{3e:"3W 3V"},1r:!1,15:!1,Y:!0,1D:!1,3d:!1,19:!1,1q:!1,1M:!0,33:!1,1P:!1,32:3B,30:2Z,2Y:"3v",1z:!0,2X:4m,11:!1,W:[],2T:2(){},2S:2(){},2R:2(){},2a:2(){},2P:2(){},2O:2(){},2M:2(){}},m=e(3),g=!1,C=\'<6 L="7-2F"><6 L="7-2C"><6 L="7-25"></6><a L="7-1p" j="1p"></a></6></6>\',y=2y 0!==2x.3s||"4n"1T 18||"49"1T 18||2s.3E,b=!1,S=!1,w=!1,x=e.3x(!0,{},p,i),G={1h:2(){m.28(2(){4 i=e(3);1==x.11?(a=x.W,l=0,c=l,q.1h(l)):(a=e(3).1L(),a.13(2(t){B(1==x.1g&&i.12("1g")){4 n=i.12("1g");a=e(\'[12-1g="\'+n+\'"]\').1L()}10 a=i.1L();t.1i(),t.1x(),l=a.15(3),c=l,q.1h(l)}))})}},q={1h:2(){3.2p(),3.2n()},2p:2(){3.2l(),3.2k(),3.2i()},2n:2(){3.2h(),3.2g(),3.2f(),3.1q(),3.2d(),3.2c(),3.2b(),3.k(x.15?x.15:l),3.2J(),3.2Q(),26(2(){t.8("3u")},2Z)},2l:2(){e("1f").O(C).8("7"),n=e("#7-2F"),t=e("#7-2C"),s=t.D("#7-25");4 i="";B(1==x.11)J(4 l=0;l<x.W.9;l++)i+=\'<6 j="7-k"></6>\';10 a.28(2(){i+=\'<6 j="7-k"></6>\'});s.O(i),o=t.D(".7-k")},2i:2(){4 i=3;x.3l&&e(".7-k").Z("13",2(a){4l.3t(a.2e),e(a.2e).4j(".7-k")&&i.1F()}),e("#7-1p").Q("13 1a",2(){i.1F()})},2k:2(){4 i=2(){v=e(18).1C()};e(18).Q("2j.7",i())},F:2(){4 e=2(){J(4 e=["1Z","3w","3y","3z","3I","4g"],i=2x.4h,a=0;a<e.9;a++)B(e[a]1T i.2m)1j!0};1j x.3n&&e()?!0:!1},2Q:2(){4 i=3;B(y){4 a={},l={};e("1f").Z("2o.7",2(e){l=e.1y.1I[0],a.1e=e.1y.1I[0].1e,a.2q=e.1y.1I[0].2q}),e("1f").Z("2r.7",2(e){4 i=e.1y;l=i.1I[0],e.1i()}),e("1f").Z("1a.7",2(){4 e=l.1e-a.1e,t=x.30;e>=t?(i.I(),R(f)):-t>=e&&(i.H(),R(f))})}},2J:2(){4 i,a,l=3;e(".7").Q("2t",2(e){e.1x(),e.1i(),i=e.1e}),e(".7").Q("2u",2(e){e.1x(),e.1i(),a=e.1e,a-i>20?l.I():i-a>20&&l.H()})},2v:2(e){4 i=e.1n(/\\/\\/(?:1o\\.)?2w(?:\\.1K|1K\\.1d)\\/(?:2z\\?v=|1O\\/)?([a-2A-2B\\-]+)/i),a=e.1n(/\\/\\/(?:1o\\.)?24.1d\\/([0-2D-z\\-2E]+)/i);1j i||a?!0:2y 0},23:2(e,i){4 a=e.1n(/\\/\\/(?:1o\\.)?2w(?:\\.1K|1K\\.1d)\\/(?:2z\\?v=|1O\\/)?([a-2A-2B\\-]+)/i),l=e.1n(/\\/\\/(?:1o\\.)?24.1d\\/([0-2D-z\\-2E]+)/i),t="",n="";1j a?(n=x.1z===!0&&g===!1?"?2G=1&1g=0&2H=2I":"?2H=2I",t=\'<17 L="1s\'+i+\'" 1C="29" 2K="2L" T="//1o.3C.1d/1O/\'+a[1]+n+\'" 2N="0" 3G></17>\'):l&&(n=x.1z===!0&&g===!1?"2G=1&1U;":"",t=\'<17 L="1s\'+i+\'" 1C="29" 2K="2L"  T="3J://3K.24.1d/1s/\'+l[1]+"?"+n+"3R=0&1U;3T=0&1U;3U="+x.2Y+\'" 2N="0" 3X 3Y 3Z></17>\'),\'<6 j="43" 2m="44-1C:\'+x.2X+\'46 !48;"><6 j="1s">\'+t+"</6></6>"},P:2(e,i){{4 l,t=3;a.9-e}B(x.M>a.9&&(x.M=a.9),l=x.1P===!0&&v<=x.32?1==x.11?x.W[e].1P:a.5(e).V("12-4i-T"):1==x.11?x.W[e].T:a.5(e).V("12-T"),t.2v(l)){B(o.5(e).K("1v")||(i===!1&&g===!0&&0===x.M?26(2(){o.5(e).1w(t.23(l,e))},x.U):o.5(e).1w(t.23(l,e)),o.5(e).8("1v"),x.1B&&x.1z===!0&&R(f)),i===!1){4 n=!1;B(o.5(e).D("17")[0].2U&&(n=!0),n){J(4 s=e,d=0;d<=x.M;d++)t.P(s+d,!0);J(4 r=0;r<=x.M;r++)t.P(s-r,!0)}10 o.5(e).D("17").Z("2V 2W",2(){J(4 i=e,l=0;l<=x.M&&!(l>=a.9-e);l++)t.P(i+l,!0);J(4 n=0;n<=x.M;n++)t.P(i-n,!0)})}}10 B(o.5(e).K("1v")||(o.5(e).1w(\'<1c T="\'+l+\'" />\'),o.5(e).8("1v")),i===!1){4 n=!1;B(o.5(e).D("1c")[0].2U&&(n=!0),n){J(4 s=e,d=0;d<=x.M&&!(d>=a.9-e);d++)t.P(s+d,!0);J(4 r=0;r<=x.M&&!(0>s-r);r++)t.P(s-r,!0)}10 o.5(e).D("1c").Z("2V 2W",2(){J(4 i=e,l=0;l<=x.M&&!(l>=a.9-e);l++)t.P(i+l,!0);J(4 n=0;n<=x.M&&!(0>i-n);n++)t.P(i-n,!0)})}},2g:2(){B(x.1D===!0){4 e,i=!1;J(e=0;e<a.9;e++)B(i=1==x.11?x.W[e].1D:a.5(e).V("12-1X"),("1E"==1G i||1H==i)&&(i="31 "+e),x.3d===!0){4 l=a.5(e).V("12-3A");l="1E"!=1G l&&""!==l?l:"#",o.5(e).O(\'<6 j="1u 1Q"><a 3D="\'+l+\'" j="1X">\'+i+"</a></6>")}10 o.5(e).O(\'<6 j="1u 1Q"><E j="1X">\'+i+"</E></6>")}},2f:2(){B(x.19===!0){4 e,i=!1;J(e=0;e<a.9;e++)i=1==x.11?x.W[e].19:a.5(e).V("12-19"),("1E"==1G i||1H==i)&&(i="31 "+e),x.1D===!1?o.5(e).O(\'<6 j="1u 1Q"><E j="19">\'+i+"</E></6>"):o.5(e).D(".1u").O(\'<E j="19">\'+i+"</E>")}},1q:2(){B(x.1q===!0){4 i=e("#7-25 > 6").9;t.O("<6 L=\'3F\'><E L=\'34\'></E> / <E L=\'3H\'>"+i+"</E></6>")}},2c:2(){B(x.Y===!0&&a.9>1){4 i=3;t.O(\'<6 j="35"><6 j="36"><E j="1p 3a"><i j="3L-3M-3N-16" 3O-3P="3Q"></i></E></6><6 j="3b"></6></6>\'),h=t.D(".35"),d.3S(\'<a j="3c"></a>\'),t.D(".3c").Q("13 1a",2(){h.8("N"),i.F()&&"k"===x.X&&(o.5(l).1R().A("H").8("I"),o.5(l).22().A("I").8("H"))}),t.D(".1p").Q("13 1a",2(){h.A("N")});4 n,s=t.D(".36"),r=t.D(".3b"),c="";B(1==x.11)J(4 v=0;v<x.W.9;v++)n=x.W[v].1A,c+=\'<6 j="1A"><1c T="\'+n+\'" /></6>\';10 a.28(2(){n=x.1r===!1||"1E"==1G e(3).V(x.1r)||1H==e(3).V(x.1r)?e(3).D("1c").V("T"):e(3).V(x.1r),c+=\'<6 j="1A"><1c T="\'+n+\'" /></6>\'});r.O(c),u=r.D(".1A"),u.Q("13 1a",2(){b=!0;4 a=e(3).15();u.A("1t"),e(3).8("1t"),i.k(a),R(f)}),s.1w(\'<E j="3a 41">\'+x.3f.3e+" ("+u.9+")</E>")}},2d:2(){4 e=3;x.1M===!0&&a.9>1&&(t.O(\'<6 L="7-42"><a L="7-3h"></a><a L="7-3i"></a></6>\'),d=t.D("#7-3h"),r=t.D("#7-3i"),d.Q("13",2(){e.I(),R(f)}),r.Q("13",2(){e.H(),R(f)}))},2h:2(){4 e=3;x.1B===!0&&(f=45(2(){l=l+1<a.9?l:-1,l++,e.k(l)},x.3k))},2b:2(){4 i=3;e(18).Q("3j.7",2(e){e.1i(),e.1x(),37===e.1k&&(i.I(),R(f)),38===e.1k&&x.Y===!0?h.K("N")||(i.F()&&"k"===x.X&&(o.5(l).1R().A("H").8("I"),o.5(l).22().A("I").8("H")),h.8("N")):39===e.1k&&(i.H(),R(f)),40===e.1k&&x.Y===!0?h.K("N")&&h.A("N"):x.3g===!0&&27===e.1k&&(x.Y===!0&&h.K("N")?h.A("N"):i.1F())})},H:2(){4 e=3;l=o.15(o.5(c)),l+1<a.9?(l++,e.k(l)):x.1m?(l=0,e.k(l)):"1S"===x.X&&x.Y===!0&&a.9>1&&h.8("N"),x.2a.14(3)},I:2(){4 e=3;l=o.15(o.5(c)),l>0?(l--,e.k(l)):x.1m?(l=a.9-1,e.k(l)):"1S"===x.X&&x.Y===!0&&a.9>1&&h.8("N"),x.2P.14(3)},k:2(i){B(3.P(i,!1),g&&(s.K("Z")||s.8("Z"),3.F()&&""!==x.U&&(s.K("U")||s.8("U"),w===!1&&(s.1W("1Z-4b",x.U+"4c"),w=!0)),3.F()&&""!==x.1b&&(s.K("1N")||s.8("1N"),S===!1&&(s.1W("1Z-1N-2",x.1b),S=!0)),x.2S.14(3)),"k"===x.X){4 l=1H!=2s.4e.1n(/4f/i);!3.F()||s.K("k")||l?3.F()&&!s.K("3m")&&l&&s.8("3m"):s.8("k"),3.F()||g?!3.F()&&g&&s.1Y({3o:1J*-i+"%"},x.U,x.1b):s.1W({3o:1J*-i+"%"})}10"1S"===x.X&&(3.F()&&!s.K("21")?s.8("21"):3.F()||s.K("1Y")||s.8("1Y"),3.F()||g?!3.F()&&g&&(o.5(c).3p(x.U,x.1b),o.5(i).3q(x.U,x.1b)):(o.3p(1J),o.5(i).3q(1J)));B(i+1>=a.9&&x.1B&&x.1m===!1&&R(f),o.5(c).A("3r"),o.5(i).8("3r"),3.F()&&"k"===x.X&&(b===!1?(e(".I").A("I"),e(".H").A("H"),o.5(i-1).8("I"),o.5(i+1).8("H")):(o.5(i).1R().A("H").8("I"),o.5(i).22().A("I").8("H"))),x.Y===!0&&a.9>1&&(u.A("1t"),u.5(i).8("1t")),x.1M&&x.33&&x.1m===!1&&a.9>1){4 t=a.9;t=4o(t)-1,0===i?(d.8("1l"),r.A("1l")):i===t?(d.A("1l"),r.8("1l")):d.4q(r).A("1l")}c=i,g===!1?x.2T.14(3):x.2R.14(3),g=!0,b=!1,x.1q&&e("#34").4r(i+1)},1F:2(){x.2O.14(3),g=!1,S=!1,w=!1,b=!1,R(f),e(".7").1V("2t 2u"),e("1f").1V("2o.7 2r.7 1a.7"),e(18).1V("2j.7 3j.7"),t.8("21"),26(2(){n.4t(),e("1f").A("7")},4u),x.2M.14(3)}};1j G.1h(),3}}(4v);',62,280,'||function|this|var|eq|div|lightGallery|addClass|length||||||||||class|slide||||||||||||||||removeClass|if||find|span|doCss||nextSlide|prevSlide|for|hasClass|id|preload|open|append|loadContent|bind|clearInterval||src|speed|attr|dynamicEl|mode|thumbnail|on|else|dynamic|data|click|call|index||iframe|window|desc|touchend|easing|img|com|pageX|body|rel|init|preventDefault|return|keyCode|disabled|loop|match|www|close|counter|exThumbImage|video|active|info|loaded|prepend|stopPropagation|originalEvent|videoAutoplay|thumb|auto|width|caption|undefined|destroy|typeof|null|targetTouches|100|be|children|controls|timing|embed|mobileSrc|group|prevAll|fade|in|amp|off|css|title|animate|transition||fadeM|nextAll|loadVideo|vimeo|slider|setTimeout||each|560|onSlideNext|keyPress|buildThumbnail|slideTo|target|addDesc|addCaption|autoStart|closeSlide|resize|getWidth|structure|style|build|touchstart|start|pageY|touchmove|navigator|mousedown|mouseup|isVideo|youtu|document|void|watch|z0|9_|Gallery|9a|_|outer|autoplay|wmode|opaque|touch|height|315|onCloseAfter|frameborder|onBeforeClose|onSlidePrev|enableTouch|onSlideAfter|onSlideBefore|onOpen|complete|load|error|videoMaxWidth|vimeoColor|50|swipeThreshold|image|mobileSrcMaxWidth|hideControlOnEnd|lightGallery_counter_current|thumb_cont|thumb_info||||ib|thumb_inner|cLthumb|captionLink|allPhotos|lang|escKey|prev|next|keyup|pause|closable|useLeft|useCSS|left|fadeOut|fadeIn|current|createTouch|log|opacity|CCCCCC|MozTransition|extend|WebkitTransition|OTransition|link|640|youtube|href|msMaxTouchPoints|lightGallery_counter|allowfullscreen|lightGallery_counter_all|msTransition|http|player|bUi|iCn|rMv|aria|hidden|true|byline|after|portrait|color|photos|All|webkitAllowFullScreen|mozallowfullscreen|allowFullScreen||count|action|video_cont|max|setInterval|px|4e3|important|onmsgesturechange|1e3|duration|ms|ease|userAgent|iPad|KhtmlTransition|documentElement|responsive|is|fn|console|855|ontouchstart|parseInt|strict|add|text|use|remove|500|jQuery'.split('|'),0,{}))


/*-----------------------------------------------------------------------------------------------*/

/* intense */
window.requestAnimFrame=(function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(callback){window.setTimeout(callback,1000/60);};})();window.cancelRequestAnimFrame=(function(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||clearTimeout})();var Intense=(function(){'use strict';var KEYCODE_ESC=27;
 var mouse={xCurr:0,yCurr:0,xDest:0,yDest:0};var horizontalOrientation=true;var looper; var lastPosition,currentPosition=0;var sourceDimensions,target;var targetDimensions={w:0,h:0};var container;var containerDimensions={w:0,h:0};var overflowArea={x:0,y:0};var overflowValue;var active=false; function extend(target,source){for(var key in source)
if(!(key in target))
target[key]=source[key];return target;} 
function applyProperties(target,properties){for(var key in properties){target.style[key]=properties[key];}}
function getFit(source){var heightRatio=window.innerHeight/source.h;if((source.w*heightRatio)>window.innerWidth){return{w:source.w*heightRatio,h:source.h*heightRatio,fit:true};}else{var widthRatio=window.innerWidth/source.w;return{w:source.w*widthRatio,h:source.h*widthRatio,fit:false};}}
function startTracking(passedElements){var i;if(passedElements.length){ for(i=0;i<passedElements.length;i++){track(passedElements[i]);}}else{track(passedElements);}}
function track(element){if(element.getAttribute('data-image')||element.src||element.href){element.addEventListener('click',function(e){if(element.tagName==='A'){e.preventDefault();}
if(!active){init(this);}},false);}}
function start(){loop();}
function stop(){cancelRequestAnimFrame(looper);}
function loop(){looper=requestAnimFrame(loop);positionTarget();}
function lockBody(){overflowValue=document.body.style.overflow;document.body.style.overflow='hidden';}
function unlockBody(){document.body.style.overflow='auto';}
function setState(element,newClassName){if(element){element.classList.remove("loading");element.classList.remove("viewing");element.className+=" "+newClassName;}else{ var elems=document.querySelectorAll(".viewing");[].forEach.call(elems,function(el){el.classList.remove("viewing");});}}
function createViewer(title,caption){var containerProperties={'backgroundColor':'rgba(0,0,0,0.8)','width':'100%','height':'100%','position':'fixed','top':'0px','left':'0px','overflow':'hidden','zIndex':'1100','margin':'0px','webkitTransition':'opacity 150ms cubic-bezier( 0, 0, .26, 1 )','MozTransition':'opacity 150ms cubic-bezier( 0, 0, .26, 1 )','transition':'opacity 150ms cubic-bezier( 0, 0, .26, 1 )','webkitBackfaceVisibility':'hidden','opacity':'0'}
container=document.createElement('figure');container.className="fullzoomimg";container.appendChild(target);applyProperties(container,containerProperties);var imageProperties={'cursor':'zoom-out'}
applyProperties(target,imageProperties);var captionContainerProperties={'fontFamily':'"Open Sans", Arial, sans-serif','position':'fixed','top':'20px','left':'20px','padding':'20px','color':'white','background':"#99CCCC",'wordSpacing':'0.2px','webkitFontSmoothing':'antialiased'}
var captionContainer=document.createElement('figcaption');applyProperties(captionContainer,captionContainerProperties);if(title){var captionTitleProperties={'margin':'0px','padding':'0px','fontWeight':'300','fontSize':'10pt','letterSpacing':'0.1px','lineHeight':'35px','textAlign':'left','color':'white','textTransform':'uppercase','maxWidth':'150px','opacity':'0.75'}
var captionTitle=document.createElement('h1');applyProperties(captionTitle,captionTitleProperties);captionTitle.innerHTML=title;captionContainer.appendChild(captionTitle);}
if(caption){var captionTextProperties={'margin':'0px','padding':'0px','fontWeight':'300','fontSize':'10pt','letterSpacing':'0.1px','textAlign':'left','color':'white','textTransform':'uppercase','maxWidth':'150px'}
var captionText=document.createElement('h2');applyProperties(captionText,captionTextProperties);captionText.innerHTML=caption;captionContainer.appendChild(captionText);}
container.appendChild(captionContainer);setDimensions();mouse.xCurr=mouse.xDest=window.innerWidth/2;mouse.yCurr=mouse.yDest=window.innerHeight/2;document.body.appendChild(container);setTimeout(function(){container.style['opacity']='1';},10);}
function removeViewer(){unlockBody();unbindEvents();stop();$(".fullzoomimg").remove();active=false;setState(false);$(".fullarrow").hide();$("#fullzoomthumbs").hide();}
function setDimensions(){ var imageDimensions=getFit(sourceDimensions);target.width=imageDimensions.w;target.height=imageDimensions.h;horizontalOrientation=imageDimensions.fit;targetDimensions={w:target.width,h:target.height};containerDimensions={w:window.innerWidth,h:window.innerHeight};overflowArea={x:containerDimensions.w-targetDimensions.w,y:containerDimensions.h-targetDimensions.h};}
function init(element){setState(element,'loading');var imageSource=element.getAttribute('data-image')||element.src||element.href;var title=element.getAttribute('data-title')||element.title;var caption=element.getAttribute('data-caption');var img=new Image();img.onload=function(){sourceDimensions={w:img.width,h:img.height};target=this;createViewer(title,caption);lockBody();bindEvents();loop();setState(element,'viewing');}
img.src=imageSource;var key=gallery.indexOf(imageSource);$(".fullarrow").hide();$("#fullzoomthumbs img.active").removeClass("active");$(".fullarrow_"+key).show();var movethumbs=(gallery.length*65+4)/-2;$("#fullzoomthumbs").show().css("margin-left",movethumbs+"px");$(".fullthumb_"+key).addClass("active");}
function bindEvents(){container.addEventListener('mousemove',onMouseMove,false);container.addEventListener('touchmove',onTouchMove,false);window.addEventListener('resize',setDimensions,false);window.addEventListener('keyup',onKeyUp,false);target.addEventListener('click',removeViewer,false);}
function unbindEvents(){container.removeEventListener('mousemove',onMouseMove,false);container.removeEventListener('touchmove',onTouchMove,false);window.removeEventListener('resize',setDimensions,false);window.removeEventListener('keyup',onKeyUp,false);target.removeEventListener('click',removeViewer,false)}
function onMouseMove(event){mouse.xDest=event.clientX;mouse.yDest=event.clientY;}
function onTouchMove(event){event.preventDefault();mouse.xDest=event.touches[0].clientX;mouse.yDest=event.touches[0].clientY;}
function onKeyUp(event){event.preventDefault();if(event.keyCode===KEYCODE_ESC){removeViewer();}}
function positionTarget(){mouse.xCurr+=(mouse.xDest-mouse.xCurr)*0.05;mouse.yCurr+=(mouse.yDest-mouse.yCurr)*0.05;if(horizontalOrientation===true){ currentPosition+=(mouse.xCurr-currentPosition);if(mouse.xCurr!==lastPosition){var position=parseFloat(currentPosition/containerDimensions.w);position=overflowArea.x*position;target.style['webkitTransform']='translate('+position+'px, 0px)';target.style['MozTransform']='translate('+position+'px, 0px)';target.style['msTransform']='translate('+position+'px, 0px)';lastPosition=mouse.xCurr;}}else if(horizontalOrientation===false){ currentPosition+=(mouse.yCurr-currentPosition);if(mouse.yCurr!==lastPosition){var position=parseFloat(currentPosition/containerDimensions.h);position=overflowArea.y*position;target.style['webkitTransform']='translate( 0px, '+position+'px)';target.style['MozTransform']='translate( 0px, '+position+'px)';target.style['msTransform']='translate( 0px, '+position+'px)';lastPosition=mouse.yCurr;}}}
function main(element){ if(!element){throw'You need to pass an element!';}
startTracking(element);}
return extend(main,{resize:setDimensions,start:start,stop:stop});})();


/*-----------------------------------------------------------------------------------------------*/

/* SCRIPTS.JS */

/*
 *Kedavra HTML5 Multipurpose Template v2.0
 *Copyright 2015 8Guild.com
 *All scripts for Kedavra HTML5 Multipurpose Template
 */

/*Document Ready*////////////////////////////////////////////////////////////////////////////////////////////////////////////////
jQuery(document).ready(function($) {
  'use strict';
  
  /*Global Variables
  *******************************************/
  /// Header / Navigation Variables------------------------------------
  var $header = $('.header');
  var $headerToolbar = $('.header-toolbar');
  var $stickyHeader = $('.header.sticky');
  var $scrollHeader = $('.header.scroller');
  var $transpHeader = $('.header.transparent');
  var $menuItem = $('.menu ul li');
  var $naviToggle = $('#nav-toggle');
  var $exitOffCanv = $('.exit-off-canvas');
  var $megaSubmLink = $('.mega-menu .has-submenu a');
  var $megaSubmenu = $('.mega-menu .mega-submenu');
  var $megaMenu = $('.mega-menu');
  var $mobSubmenuToggle = $('.mobile-navi ul li span');
  var $mobButtonsToggle = $('.mobile-navi .buttons li > a:has(i)');
  var $searchBtn = $('.header .search');
  

  /// Forms Variables-------------------------------------------------
  var $contForm = $('.contact-form');
  var $qcForm = $('.quick-contact');
  var $scrollTopBtn = $('#scrollTop-btn');
  var $qsForm = $('.header .quick-search');
  
  /// ----------------------------------------------------------------
  
  ///Interactive Widgets Variables------------------------------------
  var $tooltip = $('.tooltipped');
  var $lightGallery = $('.lightGallery');
  var $logoCarousel = $('.logo-carousel');
  var $sidebarBtn = $('.sidebar-button');
  var $shareBar = $('.share-modal .bar');
  /// ----------------------------------------------------------------
  
  /// Shop Variables------------------------------------------
  var $shareBtn = $('.item footer .tools .share-btn');
  var $packageCarousel = $('.package-carousel');
  var $scItemDelete = $('.shopping-cart .item .delete');
  /// ----------------------------------------------------------------
  
  
  


  ///////////////////////////////////////////////////////////////////////
  ///////////////////  Header / Navigation  /////////////////////////////
  //////////////////////////////////////////////////////////////////////
  
	
/*Headroom Init
*******************************************/
var myElement = document.querySelector("header");
var headroom  = new Headroom(myElement, {
	tolerance: 5,
	offset : 205,
});
headroom.init(); 
	
  /*Navi Toggle Animation
  *******************************************/
  $naviToggle.click(function(){
    $(this).toggleClass('active');
    $header.find('.inner').toggleClass('no-shadow');
  });
  $exitOffCanv.click(function(){
    $naviToggle.removeClass('active');
    $header.find('.inner').removeClass('no-shadow');
  });
  
  /*Foundation Off-Canvas / Intercharge (for responsive images)
  ***************************************************************************************/
  $(document).foundation({
    offcanvas : {
      open_method: 'move', // Sets method in which offcanvas opens, can also be 'overlap'
      close_on_click : true
    }
  });
  
  /*Mobile Navigation
  *******************************************/
  //Breakpoints
  $.breakpoint({
      condition: function () {
          return window.matchMedia('only screen and (max-width:1024px)').matches;
      },
      exit: function () {
        $(window).scrollTop(50); //Topper Issue fix on resize
        $exitOffCanv.trigger('click', function(){
          $naviToggle.removeClass('active');
        });
      }
  });
	
  //Hamburger go visiable when click link
  $( ".mobile-navi a" ).click(function() {
      $( "#nav-toggle" ).toggleClass("active");
  });
  
  //Submenu Toggles
  $mobSubmenuToggle.click(function(){
    if($(this).parent().hasClass('active')) {
      $(this).siblings('ul').removeClass('open');
      $(this).parent().removeClass('active');
    } else {
      $(this).parent().siblings('li').removeClass('active');
      $(this).parent().siblings('li').find('ul').removeClass('open');
      $(this).siblings('ul').toggleClass('open');
      $(this).parent().toggleClass('active');
    }
  });
	
  $('.mobile-navi ul li h5').click(function(){
        if($(this).parent().hasClass('active')) {
          $(this).siblings('ul').removeClass('open');
          $(this).parent().removeClass('active');
        } else {
          $(this).siblings('ul').toggleClass('open');
          $(this).parent().toggleClass('active');
        }
  });   
  $('.left-off-canvas-toggle').click(function(){ $('html, body').animate({ scrollTop: 0}, 
      {duration: 0, easing: 'easeOutExpo'});
  });
	
	
$('.search-trigger').on('click', function(e) {
   if(e.currentTarget.className === 'search-trigger') {
      $('.off-canvas-searchbar').removeClass('hidden');
      $('.off-canvas-searchbar input').focus();
   };
   
   var that = $(this);
   $(this).toggleClass('active');
   $('.search-wrapper').toggleClass('off');
   $('.search-wrapper').toggleClass('on');
   $('#header-mobile-id').toggleClass('hidden');
   
});
	
$('.back-search').on('click', function(e) {
   $('.off-canvas-searchbar').toggleClass('hidden');
   $('.search-trigger').toggleClass('active');
   $('.search-wrapper').toggleClass('off');
   $('.search-wrapper').toggleClass('on');
   $('#header-mobile-id').toggleClass('hidden');
});	
$('.search-off-canvas').on('click', function(e) {
   $('.off-canvas-searchbar').toggleClass('hidden');
   $('.search-trigger').toggleClass('active');
   $('.search-wrapper').toggleClass('off');
   $('.search-wrapper').toggleClass('on');
   $('#header-mobile-id').toggleClass('hidden');
});
	
  //Scroll only menu
  function setMobileNaviHeight() {
    $('.left-off-canvas-menu .mobile-navi').each(function() {
      var h = $(window).height();
      $(this).css("height", h);
    });
  }
  setMobileNaviHeight();
  $(document).ready (setMobileNaviHeight);
  $( window ).resize (setMobileNaviHeight);  	
	
	
  //Add(+/-) Button Number Incrementers
  $(".incr-btn").on("click", function(e) {
    var $button = $(this);
    var oldValue = $button.parent().find('.quantity').val();
    $button.parent().find('.incr-btn[data-action="decrease"]').removeClass('inactive');
    if ($button.data('action') == "increase") {
      var newVal = parseFloat(oldValue) + 1;
    } else {
     // Don't allow decrementing below 1
      if (oldValue > 1) {
        var newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 1;
        $button.addClass('inactive');
      }
    }
    //$button.parent().find('.quantity').val(newVal);
    e.preventDefault();
  });
  
  //Deleting Items
  $(document).on('click', '.cart-dropdown .item .delete', function(){
    var $emptyCart = $('.empty-cart');
    var $target = $(this).parent().parent();
    var $positions = $('.cart-dropdown .item');
    var $positionQty = parseInt($('.cart-btn > .link span').text());
    $target.fadeOut(300, function(){
      $.when($target.remove()).then( function(){
        $positionQty = $positionQty -1;
        $('.cart-btn > .link span').text($positionQty);
        if($positions.length === 4) {
          $('.cart-dropdown .owl-nav').hide();
        }
        if($positions.length === 1) {
          $('.cart-dropdown .wrap .container .row').remove();
          $emptyCart.appendTo($('.cart-dropdown .wrap .container'));
          $emptyCart.css('display', 'block');
        }
      });
    });
  });
  
  /*Moodboard Rectangular image - resize
  *******************************************/
$(window).on('load', function(){	  
    $('.item-narrow').each(function() {
      if ($(window).width() >= 580) {      
        var h = $('.col-md-3 .img-responsive').css("height");
        $('.item-narrow').css( "max-height", h);
      }
    });
	  
    $( window ).resize(function() {
      if ($(window).width() >= 580) {      
        var h = $('.col-md-3 .img-responsive').css("height");
        $('.item-narrow').css( "max-height", h);
        } else {
          $('.item-narrow').css( "max-height", "unset");
      	}
    });	  
});  
  
  /*Quick Search Form Animation
  *******************************************/
  $searchBtn.click(function() {
    $qsForm.toggleClass('open');
  });
  $('.topper, .page, .footer').click(function(){
    $qsForm.removeClass('open');
  });
  $(window).on('resize', function(){
    $qsForm.removeClass('open');
  });

  /*Mega Menu
  *******************************************/
  //Submenu Switching on Hover
  $megaSubmLink.on('mouseenter', function(){
    var $target = $(this).attr('data-target');
    $(this).parent().parent().find('.has-submenu').removeClass('active');
    $(this).parent().addClass('active');
    $(this).parent().parent().parent().parent().find($megaSubmenu).removeClass('active');
    $($target).addClass('active');
  });

  
  
  /*Share Bars Animation + Mail (Share Modal)
  *********************************************/
  $shareBar.hover(function(){
    $shareBar.addClass('collapsed');
    $(this).removeClass('collapsed').addClass('expanded');
  }, function(){
    $shareBar.removeClass('collapsed').removeClass('expanded');
  });
  
  
  
  /*Slide Up/Down Home Events
  ************************************************************/
  $('#slide-up-toggle').click(function(){
    $('.slide-up').toggleClass('open');
  });
  
  /*Tooltips
  *******************************************/
  $tooltip.tooltip();
  
  /*Light Gallery (Lightbox)
  *******************************************/
  $lightGallery.lightGallery({caption: true});
  
  ///////////////////////////////////////////////////////////////////////
  /////////////////////////////  Shop Tools  ////////////////////////////
  //////////////////////////////////////////////////////////////////////
  
  /*Share Button
  *******************************************/
  $shareBtn.click(function(e){
    $(this).toggleClass('active');  
    $(this).parent().parent().parent().find('.share-opts').toggleClass('show'); 
    $(this).parent().parent().parent().find('.description').toggleClass('hide');
    e.preventDefault(); 
  });
  
  
  /*Shopping Cart Items Delete
  *******************************************/
  $(document).on('click', '.shopping-cart .item .delete', function(){
    var $target = $(this).parent();
    var $positions = $('.shopping-cart .item');
    var $positionQty = parseInt($('.shopping-cart').parents('.container').find('.page-heading h3 i').text());
    $target.fadeOut(300, function(){
      $.when($target.remove()).then( function(){
        $positionQty = $positionQty -1;
        $('.shopping-cart').parents('.container').find('.page-heading h3 i').text($positionQty);
        if($positions.length === 1) {
          $('.shopping-cart header').remove();
          $('.shopping-cart').parents('.container').find('.sidebar').remove();
          $('.shopping-cart').parents('.container').find('.page-heading h3').html('Twój koszyk jest pusty<span></span>');
        }
      });
    });
  });
  
  /*Wishlist Items Delete
  *******************************************/
  $(document).on('click', '.catalog-grid .item .delete', function(){
    var $target = $(this).parent().parent();
    var $positions = $('.catalog-grid .item');
    var $positionQty = parseInt($('.catalog-grid').parents('.container').find('.page-heading h3 i').text());
    $target.fadeOut(300, function(){
      $.when($target.remove()).then( function(){
        $positionQty = $positionQty -1;
        $('.catalog-grid').parents('.container').find('.page-heading h3 i').text($positionQty);
        if($positions.length === 1) {
          $('.send-wishlist').remove();
          $('.catalog-grid').parents('.container').find('.page-heading h3').html('Your Wishlist is empty!<span></span>');
        }
      });
    });
  });


  
  ///////////////////////////////////////////////////////////////////////
  ///////////////////  Gallery Grids + Filtering  //////////////////////
  //////////////////////////////////////////////////////////////////////

  /*Massonry Gallery Grid
  *******************************************/
  // Stitching class
  var $filter = $('.filters li a');
  $filter.click(function(){
    $filter.parent().removeClass('current');
    $(this).parent().addClass('current');
  });
  
  // Initialize isotope
  var $gallGridMassonry = $('.gallery-grid.masonry');
  $gallGridMassonry.isotope({
    itemSelector: '.item',
    masonry: {
      columnWidth: '.grid-sizer'
    }
  });
  
  // filter items when filter link is clicked
  $('.filters a').click(function(){
    var selector = $(this).attr('data-filter');
    $gallGridMassonry.isotope({ 
      filter: selector
    });
    return false;
  });
  
  
  // Custom Style Checkboxes and Radios
  // ***********************************************
  // $('input').iCheck({
 //    checkboxClass: 'icheckbox',
 //    radioClass: 'iradio'
 //  });
  
  ///////////////////////////////////////////////////////////////////////
  /////////////////// Sliders & Carousels  /////////////////////////////
  //////////////////////////////////////////////////////////////////////
  
  /*Fullscreen Hero Slider
  ************************************************/
  var fs_slider = new MasterSlider();
 
  fs_slider.control("arrows", {autohide:true});
  fs_slider.setup("fs-slider", {
      width:1024,
      height:768,
      centerControls: false,
      layout:"fullscreen",
      preload: 'all',
      loop:true,
      speed:20
  });
  
  
  /*Partial View Slider
  ************************************************/
  var partView = new MasterSlider();
 
    partView.control('arrows');  
    partView.control('slideinfo',{insertTo:"#partial-view" , autohide:false, align:'bottom', size:100});
    partView.control('circletimer' , {color:"#FFFFFF" , stroke:9});
 
    partView.setup('slider01' , {
        width:760,
        height:400,
        space:10,
        loop:true,
        view:'partialWave',
        layout:'partialview'
    });
    
  /*Fullwidth Partial View Slider
  ************************************************/
    var fsPartView = new MasterSlider();
    
    fsPartView.control('arrows'); 
    fsPartView.control('slideinfo',{insertTo:"#fs-partial-view-info" , autohide:false, align:'bottom', size:160});
    fsPartView.control('circletimer' , {color:"#FFFFFF" , stroke:9});
    
    fsPartView.setup('fs-partial-view' , {
      width: 760,
      height: 400,
      space: 10,
      loop: true,
      view: 'fadeFlow',
      layout: 'partialview'
    });
    
  /*Display Slider
  ************************************************/
  var slider = new MasterSlider();
    slider.setup('masterslider' , {
        width: 507,
        height: 286,
        speed: 20,
        preload: 0,
        space: 2,
        view: 'flow'
    });
    slider.control('arrows');  
    slider.control('bullets',{autohide:false});
    
  /*Staff 3D Carousel
  ************************************************/
  var staffCar = new MasterSlider();
  
  staffCar.setup('slider02' , {
      loop:true,
      width:240,
      height:240,
      speed:20,
      view:'wave',
      preload:0,
      space:0
  });
  staffCar.control('arrows');
  staffCar.control('slideinfo',{insertTo:'#staff-info'});
  
  /*Product Showcase Slider
  ************************************************/
  var showcaseSlider = new MasterSlider();
    showcaseSlider.setup('showcase-slider' , {
        width:1024 ,
        height:580,
        space:0,
        fillMode:'fit',
        speed:25,
        preload:'all',
        view:'flow',
        loop:true
    });
     
    showcaseSlider.control('arrows', {autohide:false});  
    showcaseSlider.control('bullets', {autohide:false, align:'bottom', margin:-30});
  
  /*Logos Carousel
  ************************************************/
  var $autoplay = $logoCarousel.data('auto-play');
  var $timeout = $logoCarousel.data('timeout');
  $logoCarousel.owlCarousel({
    loop: true,
    dots: false,
    nav: false,
    autoplay: $autoplay,
    autoplayTimeout: $timeout,
    responsive:{
        0:{
            items: 2,
        },
        600:{
            items: 3,
        },
        1000:{
            items: 4,
        }
    }
  });
  
  /*Portfolio Single Slider
  ************************************************/
  var portfolioSlider = new MasterSlider();
    portfolioSlider.setup('portfolioSlider' , {
         width:800,    // slider standard width
         height:840,   // slider standard height
         space:5,
         view: "flow"
         // more slider options goes here...
         // check slider options section in documentation for more options.
    });
    // adds Arrows navigation control to the slider.
    portfolioSlider.control('arrows');
    portfolioSlider.control('bullets', {autohide:false});
    
  /*Post Single Slider
  ************************************************/
  var postSlider = new MasterSlider();
    postSlider.setup('postSlider' , {
         width:750,    // slider standard width
         height:480,   // slider standard height
         space:5
    });
    // adds Arrows navigation control to the slider.
    postSlider.control('arrows');
    postSlider.control('bullets', {autohide:false});
    
  /*Single Product Slider
  ************************************************/
  var spSlider = new MasterSlider();
    spSlider.control('thumblist' , {autohide:false ,dir:'h',arrows:true, align:'bottom', width:120, height:120, margin:10, space:0});
    spSlider.control('arrows');
    spSlider.setup('spSlider' , {
        width:750,
        height:714,
        space:0,
        view:'fade',
        speed: 50,
        preload: 0
    }); 

 
	$("img.ms-thumb.to-resize").each(function( index, value ) {
	  if (value.clientWidth == value.clientHeight) {
	    $(this).css({
	      'height': '120px',
	      'width': '120px'
	    });
	  } else {
	    if (value.clientWidth > value.clientHeight) {
	      $(this).css({
	        'height': '120px',
	        'width' : (value.clientWidth * 120)/value.clientHeight,
	        'margin-left': '-'+((value.clientWidth*60)/value.clientHeight-60)+'px'
	      });
	    } else {
	      $(this).css({
	        'width': '120px',
	        'height' : (value.clientHeight * 120)/value.clientHeight,
	        'margin-top': '-'+((value.clientHeight*60)/value.clientWidth-60)+'px'
	      });
	    }
	  }
	});

    
  /*Goods Package Carousel
  ************************************************/
  if($packageCarousel.length > 0){
    $packageCarousel.owlCarousel({
      margin:0,
      loop:true,
      items: 1,
      nav: true,
      navText: [
        '<div class="arr01"></div><div class="arr02"></div>',
        '<div class="arr03"></div><div class="arr04"></div>'
      ]
    });
  }
	
	
  /*Advertisement mobile 
  ************************************************/
$(document).ready(function(){
  $('.exit').click(function() { 
    $('.site-layout').removeClass("advertisement-active");
    var items = document.getElementsByClassName("advertisement-desktop");
    if (items != null && items.length != 0) {
      items[0].style.display = "none";
    }
    var items = document.getElementsByClassName("advertisement-mobile");
    if (items != null && items.length != 0) {
      items[0].style.display = "none";  
    }
    try {
       sessionStorage.setItem('advertisement', '0');
    } finally {
       console.log(sessionStorage);
    }      
  });  
  $('.advertisement').each(function() {
    console.log(sessionStorage);
    $('.site-layout').addClass("advertisement-active");
  	if ('advertisement' in sessionStorage){
		$('.site-layout').removeClass("advertisement-active");
		var items = document.getElementsByClassName("advertisement-desktop");
		if (items != null && items.length != 0) {
		  items[0].style.display = "none";
		}
		var items = document.getElementsByClassName("advertisement-mobile");
		if (items != null && items.length != 0) {
		  items[0].style.display = "none"; 
		}
  	}
  }); 
});	
	
	
  ///////////////////////////////////////////////////////////////////////
  /////////  INTERNAL ANCHOR LINKS SCROLLING (NAVIGATION)  //////////////
  //////////////////////////////////////////////////////////////////////
  
  $(".scroll").click(function(event){   
    var $elemOffsetTop = $(this).data('offset-top');
    $('html, body').animate({scrollTop:$(this.hash).offset().top-$elemOffsetTop}, 1000, 'easeOutExpo');
    $naviToggle.removeClass('active');
    event.preventDefault();
  });
  $('.scrollup').click(function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop : 0}, {duration: 700, easing:'easeOutExpo'});
    $naviToggle.removeClass('active');
  });

  
  $(window).scroll(function(){
    if ($(this).scrollTop() > 500) {
      $('#scroll-top').addClass('visible');
    } else {
      $('#scroll-top').removeClass('visible');
    }
  });
  
  
  
  ///////////////////////////////////////////////////////////////////////
  ///////////////////////  Sticky Buttons  /////////////////////////////
  //////////////////////////////////////////////////////////////////////
  
  //Scroll to Top Button
  $(window).scroll(function(){
    if ($(this).scrollTop() > 500) {
      $scrollTopBtn.parent().addClass('scrolled');
    } else {
      $scrollTopBtn.parent().removeClass('scrolled');
    }
  });
  $scrollTopBtn.click(function(){
    $('html, body').animate({scrollTop : 0}, {duration: 700, easing:'easeOutExpo'});
  });
  

  //Hiding Contact Form On Clicking Out
  $('.inner-wrap').click(function(){
    $qcForm.removeClass('visible');
  });

});/*Document Ready End*//////////////////////////////////////////////////////////////////////////
  
/*Back Function: Manipulating the browser history
*************************************************/
function goBack() {
  window.history.back()
}


/*-----------------------------------------------------------------------------------------------*/


/* OVERWRITES.JS */

// wyszukiwarka sidebar right
$('#cse-search-box').addClass('sidebar');


var onclick = $('#cse-search-box.sidebar input[type=submit]').attr("onclick");
$('#cse-search-box.sidebar input[type=submit]').after('<button type="submit" onlick="'+onclick+'"><i class="flaticon-search100"></i></button>');
$('#cse-search-box.sidebar input[type=submit]').remove();

$('.user_speech h3:first-of-type').remove();

$('#login_curtain').addClass('specialty-page');

$('#login_curtain form label').addClass('sr-only').parent().addClass('form-group');

$('.cms_register .col-sm-6').addClass('col-sm-offset-3 text-left');

$('#shop_order_form').addClass('container');
$('#shop_order_form .order_path').addClass('breadcrumbs space-top');
$('#order_last_step').addClass('container double-space-top');
$('#thank_you_for_ordering').addClass('container double-space-top');




/* ICON OVERWRITES */
$('.icon-thumbs-down').addClass('fa fa-thumbs-o-down').removeClass('icon-thumbs-down');
$('.icon-thumbs-up').addClass('fa fa-thumbs-o-up').removeClass('icon-thumbs-up');
$('.icon-pencil').addClass('fa fa-pencil').removeClass('icon-pencil');
$('.icon-shopping-cart-content').addClass('fa fa-shopping-cart').removeClass('icon-shopping-cart-content').removeClass('icon');


$('form input[type=text]').addClass('form-control');
$('form textarea').addClass('form-control');


$('#shop_order_shipping_form').addClass('row');
// $('#shop_order_show_shipping_address').addClass('col-sm-6');
$('#shop_order_edit_shipping_address_form span').addClass('col-sm-6 col-xs-12');
$('#shop_order_user_comment_field').addClass('col-sm-12');

$('#shop_order_edit_billing_address_form').addClass('row');
$('#shop_order_edit_billing_address_form > div:first-of-type').addClass('col-sm-12');
$('#shop_order_edit_billing_address_form span').addClass('col-sm-6 col-xs-12')

$('#wants_invoice_checkbox').detach().appendTo("#order_space");
$('#invoice_data').detach().appendTo("#order_space");


$(".mega-menu").mouseenter(function() {
  var pid = $(this).attr('id').split('_');
  $( "#top_" + pid[1] ).toggleClass( "mega-open" );
});

$(".mega-menu").mouseleave(function() {
  var pid = $(this).attr('id').split('_');
  $( "#top_" + pid[1] ).toggleClass( "mega-open" );
});


if ($(window).width() > 992) { 
  var $elements = $('.fullzoom');
  if ($elements.length !== 0) Intense($elements);
}

/************** instasive *********/
window.lightwidget||(window.lightwidget=function(){"use strict";var t=[],i=0,n=!1,e=!1,o=function(t){return e=t},d=function(t,i){t.contentWindow&&t.contentWindow.postMessage("sizing:"+i,window.location.protocol+"//lightwidget.com")},c=function(i){if(i.origin==window.location.protocol+"//lightwidget.com"||i.origin==window.location.protocol+"//instansive.com"){var n=i.data.split(":");try{"sizing"==n[0]&&void 0!=t[parseInt(n[2])]&&(t[parseInt(n[2])].style.height=n[1]+"px")}catch(e){}}},s=function(t){e&&console.log(t);var i=t.origin.replace(/^https?\:\/\//i,"");if("lightwidget.com"==i||"instansive.com"==i){var n=t.data.split(":");e&&console.log(n);try{if("sizing_iid"==n[0]){var o=n[2];void 0!=document.getElementById(o)?document.getElementById(o).style.height=n[1]+"px":(o=o.replace("instansive","lightwidget"),void 0!=document.getElementById(o)&&(document.getElementById(o).style.height=n[1]+"px"))}}catch(d){e&&console.log(d)}}},g=function(){window.addEventListener?(window.addEventListener("message",c,!1),window.addEventListener("message",s,!1)):(window.attachEvent("onmessage",c),window.attachEvent("onmessage",s))};return g(),{refresh:function(){if(n)for(var e=0;i>e;e++)d(t[e],e)},reload:function(){g()},debug:function(t){return o(t)}}}()),window.lightwidget.refresh();
 
/*Search desktop
*************************************************/
function searchDesktop() { 
  $( ".has-mega-menu" ).hide();
  $( "form.search-desktop" ).show("slide", { direction: "right" }, 200);
  $( ".search-trigger-desktop" ).addClass('active');
  $("#query").focus();
};
function hideSearchDesktop() {  
  $( "form.search-desktop" ).hide("slide", { direction: "right" }, 200);
  $( ".has-mega-menu" ).show();
  $( ".search-trigger-desktop" ).removeClass('active');
};  
$( ".search-trigger-desktop" ).on( "click", searchDesktop );
$( ".search-desktop .overlay" ).on( "click",  hideSearchDesktop );

/*Name Product
*************************************************/
function productNames(full_name) {
 if (!String.prototype.includes) {
     console.log("prototype function");
     String.prototype.includes = function() {
         'use strict';
         return String.prototype.indexOf.apply(this, arguments) !== -1;
     };
  }
  var categories = ["KOCYK","PODUSIA","ZESTAW","OTULACZ","BLANKET","KOC","WINGS","BAG","KOMPLET","POŚCIEL","PILLOW",
		    "ORGANIZER","OCHRANIACZ", "POZYTYWKA","HORN","PRZEŚCIERADŁO","PACK","TORBA","PASEK","PRZEWIJAK",
		    "SASZETKA","ŚPIWOREK","PAD","COVER","KURA","COMBO","ZAWIESZKA","ZABAWKA","WOREK","WOODY BUNNY",
                    "THERMO","GRZECHOTKA","PLECAK","MAT","KAPELUSZ","CHUSTKA","APASZKA","CZAPA","HAT","OPASKA",
		    "PACIFIER","CZAPKA","KARTY"];
  var category = "";
  full_name = full_name.replace(/\–/g, '-');
  var names = full_name.split('-');
  var i = 0;
  var title = "";
  var subtitle = "";
  while (names.length > i) {
    if (names[i].match(/[a-z]/i)) {
      if (categories.some(function(v) {return names[i].includes(v);})) {
        category = names[i];
      } else {
        if ( (!title.match(/[a-z]/i)) && properTitle(names[i]) ) {
          title = names[i];
        } else {
          subtitle = add (subtitle, names[i]);
        }
      }
    }
    i++;
  } 
  title = title.toLowerCase();
  return { title: title.trim(), subtitle: subtitle.trim(), category: category.trim() };
};  

function add(word1, word2) {
  if (word1.match(/[a-z]/i)) {
    return word1 + " | " + word2;
  } else return word2;
};

function countDigits(word) {
  word = word.replace(/\D+/g, "");
  return word.length;
};

function properTitle(word) {
  var d = countDigits(word);
  var l = word.trim().length - d;
  if (l > d) {return true; }
  else {return false;}
};


/*slider nie dzialal wtedy
$(document).ready(function(){ */
  if ($( '.product-extra .info h3 a' ).length ){
	$('.product-extra .info h3 a').each(function() {
	  var full_name = $(this).text();
	  var names = productNames( full_name );    
	  var subtitle = ""; 
	  if (! names.subtitle.match(/[a-z]/i)) {subtitle = names.category;} 
	  else { subtitle = add(names.category, names.subtitle); }
	  $(this).html('<div class="title">' + names.title + '</div>' + '<div class="subtitle">' + subtitle + '</div>'); 
	});
  };
  if ($( '.product_details .product_title' ).length ){
	$('.product_details .product_title').each(function() { 
	  var full_name = $(this).text(); 
	  var names = productNames( full_name ); 
	  var subtitle = ""; 
	  if (! names.subtitle.match(/[a-z]/i)) {subtitle = names.category;} 
	  else { subtitle = add(names.category, names.subtitle); }
	  $(this).html('<div class="title">' + names.title + '</div>' + '<div class="subtitle">' + subtitle + '</div>'); 
	});
  };
  if ($( '.relate_product .info h3 a' ).length ){
	$('.relate_product .info h3 a').each(function() { 
	  var full_name = $(this).text();
	  var names = productNames( full_name );    
	  var subtitle = ""; 
	  if (! names.subtitle.match(/[a-z]/i)) {subtitle = names.category;} 
	  else { subtitle = add(names.category, names.subtitle); }
	  $(this).html('<div class="title">' + names.title + '</div>' + '<div class="subtitle">' + subtitle + '</div>'); 
	});
  };
  if ($( '#products .container-products .info h3 a' ).length ){
	$('.container-products .info h3 a').each(function() { 
	  var full_name = $(this).text();
	  var names = productNames( full_name );    
	  var subtitle = "";
	  if ( $('.page-heading h2').length ) {
	    if ($('.page-heading h2').html().indexOf("Wyszukiwanie") != -1 ) {
	      if (! names.subtitle.match(/[a-z]/i)) {subtitle = names.category;} 
	      else { subtitle = add(names.category, names.subtitle); }
	    } else {
	      if (! names.subtitle.match(/[a-z]/i)) {subtitle = names.category;} 
	      else { subtitle = names.subtitle; }  
	    }
	  }
	  $(this).html('<div class="title">' + names.title + '</div>' + '<div class="subtitle">' + subtitle + '</div>'); 
	});
  };
  if ($( '#cart-dropdown span.cart-prod-name' ).length ){
	$('#cart-dropdown span.cart-prod-name').each(function() {
	  var full_name = $(this).text();
	  var names = productNames( full_name );    
	  var subtitle = ""; 
	  if (! names.subtitle.match(/[a-z]/i)) {subtitle = names.category;} 
	  else { subtitle = add(names.category, names.subtitle); }
	  $(this).html('<div class="title">' + names.title + '</div>' + '<div class="subtitle">' + subtitle + '</div>'); 
	});
  };
  /* Cart Dropdown */
  function updateCartProduct() {
    if ($( '#cart-dropdown span.cart-prod-name' ).length &&  !$( '#cart-dropdown span.cart-prod-name .title' ).length ){
	$('#cart-dropdown span.cart-prod-name').each(function() { 
	  var full_name = $(this).text();
	  var names = productNames( full_name );    
	  var subtitle = ""; 
	  if (! names.subtitle.match(/[a-z]/i)) {subtitle = names.category;} 
	  else { subtitle = add(names.category, names.subtitle); }
	  $(this).html('<div class="title">' + names.title + '</div>' + '<div class="subtitle">' + subtitle + '</div>'); 
	});
    };
    if ( !$( '#cart-dropdown h4' ).length ){
      $('#cart-dropdown').prepend( "<h4>ZAWARTOŚĆ KOSZYKA</h4>" );   
    };
    if ( $('#cart-dropdown').text().indexOf("Koszyk jest pusty") != -1 ){
      $('#cart-dropdown p').hide();
      if (! $( '#cart-dropdown .empty-cart' ).length ) {
	  $('#cart-dropdown').append("<div class='empty-cart'></div>");
          $('#cart-dropdown .empty-cart').append("<img src='https://cdn.rawgit.com/zp334966/lamillou/f45ff1bf/assets/koszyk.svg'>");
          $('#cart-dropdown .empty-cart').append("<h5>W Twoim koszyku nie ma jeszcze żadnych produktów.</h5>");
      }
    };
  }; /*
  $(window).load(function() {
    $('#cart-dropdown').prepend( "<h4>ZAWARTOŚĆ KOSZYKA</h4>" );
  });*/
/*});*/

/*Unavaible products label
*************************************************/ 
$(document).ready(function(){
  $('.unavaible-products div').each(function() {
    if (! $( '.unavaible-products a' ).length ){
      $('.unavaible-products').css( "display", "none" );
    }
  });
})

/*Cart Color
*************************************************/ 
function updateCartColor() {
  var c = $('span.shop_cart_simple').text();
  var cart = parseInt( c, 10);
  if (cart > 0) {
    $('#res-cart span').css("opacity", "1");
    $('#lm-cart span').css("opacity", "1");
  } else {
    $('#res-cart span').css("opacity", "0.2");
    $('#lm-cart span').css("opacity", "0.2");
  }        
  return;
};


/*Pagination
*************************************************/ 
$(document).ready(function(){
  $('.pagination a').each(function() {
    var t = $(this).html();
    if (t.localeCompare('→') == 0 ){
      $(this).html("<img src='https://d1dmfej9n5lgmh.cloudfront.net/lamillou/files/layout/arrow_right.svg'/>");                      
    }
    if (t.localeCompare('←') == 0 ){
      $(this).html("<img src='https://d1dmfej9n5lgmh.cloudfront.net/lamillou/files/layout/arrow_left.svg'/>");                      
    }              
  });  			
});


/*Placeholder
*************************************************/ 
function putPlaceholder(a) {
  console.log("placeholder");
  a.src='https://d1dmfej9n5lgmh.cloudfront.net/lamillou/files/layout/placeholder.svg'; 
  a.style.width='47%';
  //a.style.paddingTop= 'calc((100% - 175px)/2)';
};

function putPlaceholderProduct(a) {
  console.log("placeholder");
  a.src='https://d1dmfej9n5lgmh.cloudfront.net/lamillou/files/layout/placeholder.svg'; 
  a.style.width='47%';
  //a.style.paddingTop= 'calc((100% - 175px)/2)';
};


/*Pozytywka
*************************************************/
var poz = document.getElementById("pozytywka");
var pozstate = 0;
function pozplay() {
  poz.play();
  pozstate = 1;
  $('#pozbutton > span').removeClass('fa-play-circle').addClass('fa-pause-circle');
}
function pozpause() {
  poz.pause();
  pozstate = 0;
  $('#pozbutton > span').removeClass('fa-pause-circle').addClass('fa-play-circle');
}
function pozreset() {
  pozstate = 0;
  $('#pozbutton > span').removeClass('fa-pause-circle').addClass('fa-play-circle');
}
function pozaction() {
  if (pozstate == 0) {
    pozplay();
  } else  if (pozstate == 1) {
    pozpause();
  }
}
if (poz != null) {
  poz.addEventListener('ended', function(){
    pozreset();
    pozaction();
  });
};

/*Newsletter
*************************************************/
var intervalNewsletter;
function newsletterValid() {
  $( "#pp_newsletter .newsletter_text" ).each(function() {
    if ( $(this).text().indexOf("Błędny e-mail") != -1 && ! $('#pp_newsletter .newsletter_text .validation-error').length){
        $('#pp_newsletter .newsletter_text').addClass('field_with_errors');
        $('#pp_newsletter .newsletter_text input[type=text]').after("<div class='validation-error'>Podaj prawidłowy adres e-mail</div>");
    }
    if ( $(this).text().indexOf("E-mail został dodany") != -1  && ! $('#pp_newsletter .reply').length ){
        $('#pp_newsletter .newsletter_text').removeClass('field_with_errors');
        $('#pp_newsletter .newsletter_text').addClass('submitted');
        clearInterval(intervalNewsletter);
        $('#pp_newsletter .newsletter_text .cms_newsletter_form').after("<p class='reply'>Dziękujemy!</p>");
        setTimeout(function () { $("#fancybox-close").trigger('click');}, 1200);
    }
  });
  if ( $("#pp_newsletter input[value=Zapisz]").length ){
       $("#pp_newsletter input[value=Zapisz]").val("Prześlij");
  }
};
  
$( "#pp_newsletter input[type=submit]" ).click(function() {
  intervalNewsletter = setInterval(newsletterValid, 50);
}); 
$(document).ready(function(){
	/* : po Powiadom kiedy dostepny */
    	$('.footer-subscribe-widget.light-version.notify_prod p').append(":");
	/* koszyk 
	$('#cart-dropdown a').wrapAll( "<div class='scroll-menu' />");*/
	/* Pod adresem nie ma produktu */
	console.log('inside1');
	if($('.container .page-heading h3').has(":contains('Pod tym adresem nie ma produktu')").length) {
		console.log('inside');
		$(this).after('<div class="cms_user_profile"><div class="photo"><img src="https://cdn.rawgit.com/joanna16/lamillou/81b129e0/Group%208.svg"></div></div>');
		$(this).addClass('no-product');
		$(this).next().addClass('no-product');
	}
});
