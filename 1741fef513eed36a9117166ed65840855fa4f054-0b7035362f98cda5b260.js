(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"0mN4":function(e,t,r){"use strict";r("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,r){"use strict";r("rGqo"),r("yt8O"),r("Btvt"),r("XfO3"),r("EK0E"),r("INYr"),r("0mN4");var a=r("5NKs");t.__esModule=!0,t.default=void 0;var i,n=a(r("v06X")),s=a(r("XEEL")),o=a(r("uDP2")),d=a(r("j8BX")),l=a(r("q1tI")),u=a(r("17x9")),c=function(e){var t=(0,d.default)({},e),r=t.resolutions,a=t.sizes,i=t.critical;return r&&(t.fixed=r,delete t.resolutions),a&&(t.fluid=a,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},g=function(e){var t=e.fluid,r=e.fixed;return h(t||r).src},h=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var r=e.findIndex((function(e){return void 0===e.media}));if(-1!==r)return e[r]}return e[0]},p=Object.create({}),m=function(e){var t=c(e),r=g(t);return p[r]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,y=v&&window.IntersectionObserver,S=new WeakMap;function w(e){return e.map((function(e){var t=e.src,r=e.srcSet,a=e.srcSetWebp,i=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},a&&l.default.createElement("source",{type:"image/webp",media:i,srcSet:a,sizes:n}),l.default.createElement("source",{media:i,srcSet:r,sizes:n}))}))}function E(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function L(e){return e.map((function(e){var t=e.src,r=e.media,a=e.tracedSVG;return l.default.createElement("source",{key:t,media:r,srcSet:a})}))}function I(e){return e.map((function(e){var t=e.src,r=e.media,a=e.base64;return l.default.createElement("source",{key:t,media:r,srcSet:a})}))}function R(e,t){var r=e.srcSet,a=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?a:r)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var O=function(e,t){var r=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return r&&(r.observe(e),S.set(e,t)),function(){r.unobserve(e),S.delete(e)}},x=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?R(e,!0):"")+R(e)})).join("")+"<img "+l+s+o+r+a+t+n+i+d+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},k=l.default.forwardRef((function(e,t){var r=e.src,a=e.imageVariants,i=e.generateSources,n=e.spreadProps,s=e.ariaHidden,o=l.default.createElement(z,(0,d.default)({ref:t,src:r},n,{ariaHidden:s}));return a.length>1?l.default.createElement("picture",null,i(a),o):o})),z=l.default.forwardRef((function(e,t){var r=e.sizes,a=e.srcSet,i=e.src,n=e.style,s=e.onLoad,u=e.onError,c=e.loading,f=e.draggable,g=e.ariaHidden,h=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,d.default)({"aria-hidden":g,sizes:r,srcSet:a,src:i},h,{onLoad:s,onError:u,ref:t,loading:c,draggable:f,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));z.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var C=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=v&&m(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!b&&y&&!r.isCritical&&!r.seenBefore;var a=r.isCritical||v&&(b||!r.useIOSupport);return r.state={isVisible:a,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn},r.imageRef=l.default.createRef(),r.placeholderRef=t.placeholderRef||l.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,n.default)(r)),r.handleRef=r.handleRef.bind((0,n.default)(r)),r}(0,s.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=O(e,(function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=c(e),r=g(t),p[r]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=c(this.props),t=e.title,r=e.alt,a=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,u=e.placeholderStyle,f=void 0===u?{}:u,g=e.placeholderClassName,p=e.fluid,m=e.fixed,b=e.backgroundColor,v=e.durationFadeIn,y=e.Tag,S=e.itemProp,E=e.loading,R=e.draggable,O=!1===this.state.fadeIn||this.state.imgLoaded,C=!0===this.state.fadeIn&&!this.state.imgCached,V=(0,d.default)({opacity:O?1:0,transition:C?"opacity "+v+"ms":"none"},o),_="boolean"==typeof b?"lightgray":b,N={transitionDelay:v+"ms"},W=(0,d.default)({opacity:this.state.imgLoaded?0:1},C&&N,o,f),j={title:t,alt:this.state.isVisible?"":r,style:W,className:g,itemProp:S};if(p){var T=p,q=h(p);return l.default.createElement(y,{className:(a||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden",maxWidth:q.maxWidth?q.maxWidth+"px":null,maxHeight:q.maxHeight?q.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(q.srcSet)},l.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/q.aspectRatio+"%"}}),_&&l.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:_,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},C&&N)}),q.base64&&l.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:q.base64,spreadProps:j,imageVariants:T,generateSources:I}),q.tracedSVG&&l.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:q.tracedSVG,spreadProps:j,imageVariants:T,generateSources:L}),this.state.isVisible&&l.default.createElement("picture",null,w(T),l.default.createElement(z,{alt:r,title:t,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:E,draggable:R})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,d.default)({alt:r,title:t,loading:E},q,{imageVariants:T}))}}))}if(m){var H=m,P=h(m),M=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:P.width,height:P.height},n);return"inherit"===n.display&&delete M.display,l.default.createElement(y,{className:(a||"")+" gatsby-image-wrapper",style:M,ref:this.handleRef,key:"fixed-"+JSON.stringify(P.srcSet)},_&&l.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:_,width:P.width,opacity:this.state.imgLoaded?0:1,height:P.height},C&&N)}),P.base64&&l.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:P.base64,spreadProps:j,imageVariants:H,generateSources:I}),P.tracedSVG&&l.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:P.tracedSVG,spreadProps:j,imageVariants:H,generateSources:L}),this.state.isVisible&&l.default.createElement("picture",null,w(H),l.default.createElement(z,{alt:r,title:t,width:P.width,height:P.height,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:E,draggable:R})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,d.default)({alt:r,title:t,loading:E},P,{imageVariants:H}))}}))}return null},t}(l.default.Component);C.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var V=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),_=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string,maxWidth:u.default.number,maxHeight:u.default.number});C.propTypes={resolutions:V,sizes:_,fixed:u.default.oneOfType([V,u.default.arrayOf(V)]),fluid:u.default.oneOfType([_,u.default.arrayOf(_)]),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var N=C;t.default=N},EK0E:function(e,t,r){"use strict";var a,i=r("dyZX"),n=r("CkkT")(0),s=r("KroJ"),o=r("Z6vF"),d=r("czNK"),l=r("ZD67"),u=r("0/R4"),c=r("s5qY"),f=r("s5qY"),g=!i.ActiveXObject&&"ActiveXObject"in i,h=o.getWeak,p=Object.isExtensible,m=l.ufstore,b=function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},v={get:function(e){if(u(e)){var t=h(e);return!0===t?m(c(this,"WeakMap")).get(e):t?t[this._i]:void 0}},set:function(e,t){return l.def(c(this,"WeakMap"),e,t)}},y=e.exports=r("4LiD")("WeakMap",b,v,l,!0,!0);f&&g&&(d((a=l.getConstructor(b,"WeakMap")).prototype,v),o.NEED=!0,n(["delete","has","get","set"],(function(e){var t=y.prototype,r=t[e];s(t,e,(function(t,i){if(u(t)&&!p(t)){this._f||(this._f=new a);var n=this._f[e](t,i);return"set"==e?this:n}return r.call(this,t,i)}))})))},INYr:function(e,t,r){"use strict";var a=r("XKFU"),i=r("CkkT")(6),n="findIndex",s=!0;n in[]&&Array(1)[n]((function(){s=!1})),a(a.P+a.F*s,"Array",{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),r("nGyu")(n)},OGtf:function(e,t,r){var a=r("XKFU"),i=r("eeVq"),n=r("vhPU"),s=/"/g,o=function(e,t,r,a){var i=String(n(e)),o="<"+t;return""!==r&&(o+=" "+r+'="'+String(a).replace(s,"&quot;")+'"'),o+">"+i+"</"+t+">"};e.exports=function(e,t){var r={};r[e]=t(o),a(a.P+a.F*i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",r)}},ZD67:function(e,t,r){"use strict";var a=r("3Lyj"),i=r("Z6vF").getWeak,n=r("y3w9"),s=r("0/R4"),o=r("9gX7"),d=r("SlkY"),l=r("CkkT"),u=r("aagx"),c=r("s5qY"),f=l(5),g=l(6),h=0,p=function(e){return e._l||(e._l=new m)},m=function(){this.a=[]},b=function(e,t){return f(e.a,(function(e){return e[0]===t}))};m.prototype={get:function(e){var t=b(this,e);if(t)return t[1]},has:function(e){return!!b(this,e)},set:function(e,t){var r=b(this,e);r?r[1]=t:this.a.push([e,t])},delete:function(e){var t=g(this.a,(function(t){return t[0]===e}));return~t&&this.a.splice(t,1),!!~t}},e.exports={getConstructor:function(e,t,r,n){var l=e((function(e,a){o(e,l,t,"_i"),e._t=t,e._i=h++,e._l=void 0,null!=a&&d(a,r,e[n],e)}));return a(l.prototype,{delete:function(e){if(!s(e))return!1;var r=i(e);return!0===r?p(c(this,t)).delete(e):r&&u(r,this._i)&&delete r[this._i]},has:function(e){if(!s(e))return!1;var r=i(e);return!0===r?p(c(this,t)).has(e):r&&u(r,this._i)}}),l},def:function(e,t,r){var a=i(n(t),!0);return!0===a?p(e).set(t,r):a[e._i]=r,e},ufstore:p}},cz7k:function(e,t,r){"use strict";var a=r("q1tI"),i=r.n(a);t.a=function(e){return Object(a.useEffect)((function(){(window.adsbygoogle||[]).push({})}),[]),i.a.createElement(i.a.Fragment,null,e.children)}}}]);
//# sourceMappingURL=1741fef513eed36a9117166ed65840855fa4f054-0b7035362f98cda5b260.js.map