(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[675],{9361:function(e,t){"use strict";t.Z=function(e,t,i){t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i;return e}},8045:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(9361).Z,r=i(4941).Z,o=i(3929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,i=e.sizes,l=e.unoptimized,c=void 0!==l&&l,p=e.priority,h=void 0!==p&&p,z=e.loading,x=e.lazyRoot,E=void 0===x?null:x,_=e.lazyBoundary,R=e.className,O=e.quality,C=e.width,L=e.height,M=e.style,q=e.objectFit,N=e.objectPosition,P=e.onLoadingComplete,W=e.placeholder,B=void 0===W?"empty":W,Z=e.blurDataURL,D=s(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),U=u.useContext(m.ImageConfigContext),V=u.useMemo((function(){var e=b||U||f.imageConfigDefault,t=o(e.deviceSizes).concat(o(e.imageSizes)).sort((function(e,t){return e-t})),i=e.deviceSizes.sort((function(e,t){return e-t}));return a({},e,{allSizes:t,deviceSizes:i})}),[U]),F=D,H=i?"responsive":"intrinsic";"layout"in F&&(F.layout&&(H=F.layout),delete F.layout);var G=j;if("loader"in F){if(F.loader){var T=F.loader;G=function(e){e.config;var t=s(e,["config"]);return T(t)}}delete F.loader}var J="";if(function(e){return"object"===typeof e&&(S(e)||function(e){return void 0!==e.src}(e))}(t)){var Q=S(t)?t.default:t;if(!Q.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(Q)));if(Z=Z||Q.blurDataURL,J=Q.src,(!H||"fill"!==H)&&(L=L||Q.height,C=C||Q.width,!Q.height||!Q.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(Q)))}var K=!h&&("lazy"===z||"undefined"===typeof z);((t="string"===typeof t?t:J).startsWith("data:")||t.startsWith("blob:"))&&(c=!0,K=!1);y.has(t)&&(K=!1);v&&(c=!0);var X,Y=r(u.useState(!1),2),$=Y[0],ee=Y[1],te=r(g.useIntersection({rootRef:E,rootMargin:_||"200px",disabled:!K}),3),ie=te[0],ne=te[1],re=te[2],oe=!K||ne,ae={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},le={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ce=!1,se={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:q,objectPosition:N},ue=k(C),de=k(L),fe=k(O);0;var ge=Object.assign({},M,se),me="blur"!==B||$?{}:{backgroundSize:q||"cover",backgroundPosition:N||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(Z,'")')};if("fill"===H)ae.display="block",ae.position="absolute",ae.top=0,ae.left=0,ae.bottom=0,ae.right=0;else if("undefined"!==typeof ue&&"undefined"!==typeof de){var pe=de/ue,he=isNaN(pe)?"100%":"".concat(100*pe,"%");"responsive"===H?(ae.display="block",ae.position="relative",ce=!0,le.paddingTop=he):"intrinsic"===H?(ae.display="inline-block",ae.position="relative",ae.maxWidth="100%",ce=!0,le.maxWidth="100%",X="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(ue,"%27%20height=%27").concat(de,"%27/%3e")):"fixed"===H&&(ae.display="inline-block",ae.position="relative",ae.width=ue,ae.height=de)}else 0;var ve={src:w,srcSet:void 0,sizes:void 0};oe&&(ve=A({config:V,src:t,unoptimized:c,layout:H,width:ue,quality:fe,sizes:i,loader:G}));var be=t;0;var ye,we="imagesrcset",ze="imagesizes";we="imageSrcSet",ze="imageSizes";var Se=(n(ye={},we,ve.srcSet),n(ye,ze,ve.sizes),ye),Ae=u.default.useLayoutEffect,ke=u.useRef(P),je=u.useRef(t);u.useEffect((function(){ke.current=P}),[P]),Ae((function(){je.current!==t&&(re(),je.current=t)}),[re,t]);var xe=a({isLazy:K,imgAttributes:ve,heightInt:de,widthInt:ue,qualityInt:fe,layout:H,className:R,imgStyle:ge,blurStyle:me,loading:z,config:V,unoptimized:c,placeholder:B,loader:G,srcString:be,onLoadingCompleteRef:ke,setBlurComplete:ee,setIntersection:ie,isVisible:oe,noscriptSizes:i},F);return u.default.createElement(u.default.Fragment,null,u.default.createElement("span",{style:ae},ce?u.default.createElement("span",{style:le},X?u.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:X}):null):null,u.default.createElement(I,Object.assign({},xe))),h?u.default.createElement(d.default,null,u.default.createElement("link",Object.assign({key:"__nimg-"+ve.src+ve.srcSet+ve.sizes,rel:"preload",as:"image",href:ve.srcSet?void 0:ve.src},Se))):null)};var a=i(6495).Z,l=i(2648).Z,c=i(1598).Z,s=i(7273).Z,u=c(i(7294)),d=l(i(5443)),f=i(9309),g=i(7190),m=i(9977),p=(i(3794),i(2392));var h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",dangerouslyAllowSVG:!1}||{},v=h.experimentalUnoptimized,b={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",dangerouslyAllowSVG:!1},y=new Set,w=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var z=new Map([["default",function(e){var t=e.config,i=e.src,n=e.width,r=e.quality;0;if(i.endsWith(".svg")&&!t.dangerouslyAllowSVG)return i;return"".concat(p.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(i),"&w=").concat(n,"&q=").concat(r||75)}],["imgix",function(e){var t=e.config,i=e.src,n=e.width,r=e.quality,o=new URL("".concat(t.path).concat(E(i))),a=o.searchParams;a.set("auto",a.getAll("auto").join(",")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||n.toString()),r&&a.set("q",r.toString());return o.href}],["cloudinary",function(e){var t=e.config,i=e.src,n=e.width,r=e.quality,o=["f_auto","c_limit","w_"+n,"q_"+(r||"auto")].join(",")+"/";return"".concat(t.path).concat(o).concat(E(i))}],["akamai",function(e){var t=e.config,i=e.src,n=e.width;return"".concat(t.path).concat(E(i),"?imwidth=").concat(n)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function S(e){return void 0!==e.default}function A(e){var t=e.config,i=e.src,n=e.unoptimized,r=e.layout,a=e.width,l=e.quality,c=e.sizes,s=e.loader;if(n)return{src:i,srcSet:void 0,sizes:void 0};var u=function(e,t,i,n){var r=e.deviceSizes,a=e.allSizes;if(n&&("fill"===i||"responsive"===i)){for(var l,c=/(^|\s)(1?\d?\d)vw/g,s=[];l=c.exec(n);l)s.push(parseInt(l[2]));if(s.length){var u,d=.01*(u=Math).min.apply(u,o(s));return{widths:a.filter((function(e){return e>=r[0]*d})),kind:"w"}}return{widths:a,kind:"w"}}return"number"!==typeof t||"fill"===i||"responsive"===i?{widths:r,kind:"w"}:{widths:o(new Set([t,2*t].map((function(e){return a.find((function(t){return t>=e}))||a[a.length-1]})))),kind:"x"}}(t,a,r,c),d=u.widths,f=u.kind,g=d.length-1;return{sizes:c||"w"!==f?c:"100vw",srcSet:d.map((function(e,n){return"".concat(s({config:t,src:i,quality:l,width:e})," ").concat("w"===f?e:n+1).concat(f)})).join(", "),src:s({config:t,src:i,quality:l,width:d[g]})}}function k(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function j(e){var t,i=(null==(t=e.config)?void 0:t.loader)||"default",n=z.get(i);if(n)return n(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(i))}function x(e,t,i,n,r,o){e&&e.src!==w&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(y.add(t),"blur"===n&&o(!0),null==r?void 0:r.current)){var i=e.naturalWidth,a=e.naturalHeight;r.current({naturalWidth:i,naturalHeight:a})}})))}var I=function(e){var t=e.imgAttributes,i=(e.heightInt,e.widthInt),n=e.qualityInt,r=e.layout,o=e.className,l=e.imgStyle,c=e.blurStyle,d=e.isLazy,f=e.placeholder,g=e.loading,m=e.srcString,p=e.config,h=e.unoptimized,v=e.loader,b=e.onLoadingCompleteRef,y=e.setBlurComplete,w=e.setIntersection,z=e.onLoad,S=e.onError,k=(e.isVisible,e.noscriptSizes),j=s(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return g=d?"lazy":g,u.default.createElement(u.default.Fragment,null,u.default.createElement("img",Object.assign({},j,t,{decoding:"async","data-nimg":r,className:o,style:a({},l,c),ref:u.useCallback((function(e){w(e),(null==e?void 0:e.complete)&&x(e,m,0,f,b,y)}),[w,m,r,f,b,y]),onLoad:function(e){x(e.currentTarget,m,0,f,b,y),z&&z(e)},onError:function(e){"blur"===f&&y(!0),S&&S(e)}})),(d||"blur"===f)&&u.default.createElement("noscript",null,u.default.createElement("img",Object.assign({},j,A({config:p,src:m,unoptimized:h,layout:r,width:i,quality:n,sizes:k,loader:v}),{decoding:"async","data-nimg":r,style:l,className:o,loading:g}))))};function E(e){return"/"===e[0]?e.slice(1):e}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,i=e.rootMargin,s=e.disabled||!a,u=r.useRef(),d=n(r.useState(!1),2),f=d[0],g=d[1],m=n(r.useState(null),2),p=m[0],h=m[1];r.useEffect((function(){if(a){if(u.current&&(u.current(),u.current=void 0),s||f)return;return p&&p.tagName&&(u.current=function(e,t,i){var n=function(e){var t,i={root:e.root||null,margin:e.rootMargin||""},n=c.find((function(e){return e.root===i.root&&e.margin===i.margin}));if(n&&(t=l.get(n)))return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),i=e.isIntersecting||e.intersectionRatio>0;t&&i&&t(i)}))}),e);return t={id:i,observer:o,elements:r},c.push(i),l.set(i,t),t}(i),r=n.id,o=n.observer,a=n.elements;return a.set(e,t),o.observe(e),function(){if(a.delete(e),o.unobserve(e),0===a.size){o.disconnect(),l.delete(r);var t=c.findIndex((function(e){return e.root===r.root&&e.margin===r.margin}));t>-1&&c.splice(t,1)}}}(p,(function(e){return e&&g(e)}),{root:null==t?void 0:t.current,rootMargin:i})),function(){null==u.current||u.current(),u.current=void 0}}if(!f){var e=o.requestIdleCallback((function(){return g(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[p,s,i,t,f]);var v=r.useCallback((function(){g(!1)}),[]);return[h,f,v]};var r=i(7294),o=i(9311),a="function"===typeof IntersectionObserver;var l=new Map,c=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5675:function(e,t,i){e.exports=i(8045)}}]);