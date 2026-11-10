"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[114],{276:(e,t,r)=>{r.d(t,{Hl:()=>c});var n=r(8589),i=r(7135),o=r(7161);function a(e,t){let r;return(...n)=>{window.clearTimeout(r),r=window.setTimeout(()=>e(...n),t)}}let l=["x","y","top","bottom","left","right","width","height"];var s=r(4252),u=r(5223);function f({ref:e,children:t,fallback:r,resize:s,style:f,gl:c,events:d=n.f,eventSource:m,eventPrefix:h,shadows:v,linear:p,flat:g,legacy:b,orthographic:x,frameloop:y,dpr:w,performance:_,raycaster:S,camera:T,scene:E,onPointerMissed:M,onCreated:B,...D}){i.useMemo(()=>(0,n.e)(o),[]);let U=(0,n.u)(),[R,C]=function({debounce:e,scroll:t,polyfill:r,offsetSize:n}={debounce:0,scroll:!1,offsetSize:!1}){var o,s,u;let f=r||("undefined"==typeof window?class{}:window.ResizeObserver);if(!f)throw Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");let[c,d]=(0,i.useState)({left:0,top:0,width:0,height:0,bottom:0,right:0,x:0,y:0}),m=(0,i.useRef)({element:null,scrollContainers:null,resizeObserver:null,lastBounds:c,orientationHandler:null}),h=e?"number"==typeof e?e:e.scroll:null,v=e?"number"==typeof e?e:e.resize:null,p=(0,i.useRef)(!1);(0,i.useEffect)(()=>(p.current=!0,()=>void(p.current=!1)));let[g,b,x]=(0,i.useMemo)(()=>{let e=()=>{let e,t;if(!m.current.element)return;let{left:r,top:i,width:o,height:a,bottom:s,right:u,x:f,y:c}=m.current.element.getBoundingClientRect(),h={left:r,top:i,width:o,height:a,bottom:s,right:u,x:f,y:c};m.current.element instanceof HTMLElement&&n&&(h.height=m.current.element.offsetHeight,h.width=m.current.element.offsetWidth),Object.freeze(h),p.current&&(e=m.current.lastBounds,t=h,!l.every(r=>e[r]===t[r]))&&d(m.current.lastBounds=h)};return[e,v?a(e,v):e,h?a(e,h):e]},[d,n,h,v]);function y(){m.current.scrollContainers&&(m.current.scrollContainers.forEach(e=>e.removeEventListener("scroll",x,!0)),m.current.scrollContainers=null),m.current.resizeObserver&&(m.current.resizeObserver.disconnect(),m.current.resizeObserver=null),m.current.orientationHandler&&("orientation"in screen&&"removeEventListener"in screen.orientation?screen.orientation.removeEventListener("change",m.current.orientationHandler):"onorientationchange"in window&&window.removeEventListener("orientationchange",m.current.orientationHandler))}function w(){m.current.element&&(m.current.resizeObserver=new f(x),m.current.resizeObserver.observe(m.current.element),t&&m.current.scrollContainers&&m.current.scrollContainers.forEach(e=>e.addEventListener("scroll",x,{capture:!0,passive:!0})),m.current.orientationHandler=()=>{x()},"orientation"in screen&&"addEventListener"in screen.orientation?screen.orientation.addEventListener("change",m.current.orientationHandler):"onorientationchange"in window&&window.addEventListener("orientationchange",m.current.orientationHandler))}return o=x,s=!!t,(0,i.useEffect)(()=>{if(s)return window.addEventListener("scroll",o,{capture:!0,passive:!0}),()=>void window.removeEventListener("scroll",o,!0)},[o,s]),u=b,(0,i.useEffect)(()=>(window.addEventListener("resize",u),()=>void window.removeEventListener("resize",u)),[u]),(0,i.useEffect)(()=>{y(),w()},[t,x,b]),(0,i.useEffect)(()=>y,[]),[e=>{e&&e!==m.current.element&&(y(),m.current.element=e,m.current.scrollContainers=function e(t){let r=[];if(!t||t===document.body)return r;let{overflow:n,overflowX:i,overflowY:o}=window.getComputedStyle(t);return[n,i,o].some(e=>"auto"===e||"scroll"===e)&&r.push(t),[...r,...e(t.parentElement)]}(e),w())},c,g]}({scroll:!0,debounce:{scroll:50,resize:0},...s}),k=i.useRef(null),P=i.useRef(null);i.useImperativeHandle(e,()=>k.current);let z=(0,n.a)(M),[F,A]=i.useState(!1),[j,I]=i.useState(!1);if(F)throw F;if(j)throw j;let H=i.useRef(null);(0,n.b)(()=>{let e=k.current;C.width>0&&C.height>0&&e&&(H.current||(H.current=(0,n.c)(e)),async function(){await H.current.configure({gl:c,scene:E,events:d,shadows:v,linear:p,flat:g,legacy:b,orthographic:x,frameloop:y,dpr:w,performance:_,raycaster:S,camera:T,size:C,onPointerMissed:(...e)=>null==z.current?void 0:z.current(...e),onCreated:e=>{null==e.events.connect||e.events.connect(m?(0,n.i)(m)?m.current:m:P.current),h&&e.setEvents({compute:(e,t)=>{let r=e[h+"X"],n=e[h+"Y"];t.pointer.set(r/t.size.width*2-1,-(2*(n/t.size.height))+1),t.raycaster.setFromCamera(t.pointer,t.camera)}}),null==B||B(e)}}),H.current.render((0,u.jsx)(U,{children:(0,u.jsx)(n.E,{set:I,children:(0,u.jsx)(i.Suspense,{fallback:(0,u.jsx)(n.B,{set:A}),children:null!=t?t:null})})}))}())}),i.useEffect(()=>{let e=k.current;if(e)return()=>(0,n.d)(e)},[]);let L=m?"none":"auto";return(0,u.jsx)("div",{ref:P,style:{position:"relative",width:"100%",height:"100%",overflow:"hidden",pointerEvents:L,...f},...D,children:(0,u.jsx)("div",{ref:R,style:{width:"100%",height:"100%"},children:(0,u.jsx)("canvas",{ref:k,style:{display:"block"},children:r})})})}function c(e){return(0,u.jsx)(s.Af,{children:(0,u.jsx)(f,{...e})})}r(4090)},1507:(e,t,r)=>{e.exports=r(8379)},1777:(e,t,r)=>{r.d(t,{A:()=>u});var n=r(7135),i=r(8589),o=r(2402),a=r(6835);class l extends o.BKk{constructor(){super({uniforms:{time:{value:0},fade:{value:1}},vertexShader:`
      uniform float time;
      attribute float size;
      varying vec3 vColor;
      void main() {
        vColor = color;
        vec4 mvPosition = modelViewMatrix * vec4(position, 0.5);
        gl_PointSize = size * (30.0 / -mvPosition.z) * (3.0 + sin(time + 100.0));
        gl_Position = projectionMatrix * mvPosition;
      }`,fragmentShader:`
      uniform sampler2D pointTexture;
      uniform float fade;
      varying vec3 vColor;
      void main() {
        float opacity = 1.0;
        if (fade == 1.0) {
          float d = distance(gl_PointCoord, vec2(0.5, 0.5));
          opacity = 1.0 / (1.0 + exp(16.0 * (d - 0.25)));
        }
        gl_FragColor = vec4(vColor, opacity);

        #include <tonemapping_fragment>
	      #include <${a.r>=154?"colorspace_fragment":"encodings_fragment"}>
      }`})}}let s=e=>new o.Pq0().setFromSpherical(new o.YHV(e,Math.acos(1-2*Math.random()),2*Math.random()*Math.PI)),u=n.forwardRef(({radius:e=100,depth:t=50,count:r=5e3,saturation:a=0,factor:u=4,fade:f=!1,speed:c=1},d)=>{let m=n.useRef(null),[h,v,p]=n.useMemo(()=>{let n=[],i=[],l=Array.from({length:r},()=>(.5+.5*Math.random())*u),f=new o.Q1f,c=e+t,d=t/r;for(let e=0;e<r;e++)c-=d*Math.random(),n.push(...s(c).toArray()),f.setHSL(e/r,a,.9),i.push(f.r,f.g,f.b);return[new Float32Array(n),new Float32Array(i),new Float32Array(l)]},[r,t,u,e,a]);(0,i.D)(e=>m.current&&(m.current.uniforms.time.value=e.clock.elapsedTime*c));let[g]=n.useState(()=>new l);return n.createElement("points",{ref:d},n.createElement("bufferGeometry",null,n.createElement("bufferAttribute",{attach:"attributes-position",args:[h,3]}),n.createElement("bufferAttribute",{attach:"attributes-color",args:[v,3]}),n.createElement("bufferAttribute",{attach:"attributes-size",args:[p,1]})),n.createElement("primitive",{ref:m,object:g,attach:"material",blending:o.EZo,"uniforms-fade-value":f,depthWrite:!1,transparent:!0,vertexColors:!0}))})},2316:(e,t,r)=>{var n=r(7135),i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},o=n.useState,a=n.useEffect,l=n.useLayoutEffect,s=n.useDebugValue;function u(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!i(e,r)}catch(e){return!0}}var f="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var r=t(),n=o({inst:{value:r,getSnapshot:t}}),i=n[0].inst,f=n[1];return l(function(){i.value=r,i.getSnapshot=t,u(i)&&f({inst:i})},[e,r,t]),a(function(){return u(i)&&f({inst:i}),e(function(){u(i)&&f({inst:i})})},[e]),s(r),r};t.useSyncExternalStore=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:f},2421:(e,t,r)=>{r.d(t,{h:()=>s});var n=r(7135),i=r(1507);let o=e=>{let t,r=new Set,n=(e,n)=>{let i="function"==typeof e?e(t):e;if(!Object.is(i,t)){let e=t;t=(null!=n?n:"object"!=typeof i||null===i)?i:Object.assign({},t,i),r.forEach(r=>r(t,e))}},i=()=>t,o={setState:n,getState:i,getInitialState:()=>a,subscribe:e=>(r.add(e),()=>r.delete(e))},a=t=e(n,i,o);return o},{useSyncExternalStoreWithSelector:a}=i,l=(e,t)=>{let r=(e=>e?o(e):o)(e),i=(e,i=t)=>(function(e,t=e=>e,r){let i=a(e.subscribe,e.getState,e.getInitialState,t,r);return n.useDebugValue(i),i})(r,e,i);return Object.assign(i,r),i},s=(e,t)=>e?l(e,t):l},2798:(e,t,r)=>{r.d(t,{DY:()=>a,IU:()=>s,uv:()=>l});let n=[];function i(e,t,r=(e,t)=>e===t){if(e===t)return!0;if(!e||!t)return!1;let n=e.length;if(t.length!==n)return!1;for(let i=0;i<n;i++)if(!r(e[i],t[i]))return!1;return!0}function o(e,t=null,r=!1,a={}){for(let o of(null===t&&(t=[e]),n))if(i(t,o.keys,o.equal)){if(r)return;if(Object.prototype.hasOwnProperty.call(o,"error"))throw o.error;if(Object.prototype.hasOwnProperty.call(o,"response"))return a.lifespan&&a.lifespan>0&&(o.timeout&&clearTimeout(o.timeout),o.timeout=setTimeout(o.remove,a.lifespan)),o.response;if(!r)throw o.promise}let l={keys:t,equal:a.equal,remove:()=>{let e=n.indexOf(l);-1!==e&&n.splice(e,1)},promise:("object"==typeof e&&"function"==typeof e.then?e:e(...t)).then(e=>{l.response=e,a.lifespan&&a.lifespan>0&&(l.timeout=setTimeout(l.remove,a.lifespan))}).catch(e=>l.error=e)};if(n.push(l),!r)throw l.promise}let a=(e,t,r)=>o(e,t,!1,r),l=(e,t,r)=>void o(e,t,!0,r),s=e=>{if(void 0===e||0===e.length)n.splice(0,n.length);else{let t=n.find(t=>i(e,t.keys,t.equal));t&&t.remove()}}},4090:(e,t,r)=>{e.exports=r(9760)},4252:(e,t,r)=>{r.d(t,{Af:()=>l,Nz:()=>i,u5:()=>s,y3:()=>c});var n=r(7135);function i(e,t,r){if(!e)return;if(!0===r(e))return e;let n=t?e.return:e.child;for(;n;){let e=i(n,t,r);if(e)return e;n=t?null:n.sibling}}function o(e){try{return Object.defineProperties(e,{_currentRenderer:{get:()=>null,set(){}},_currentRenderer2:{get:()=>null,set(){}}})}catch(t){return e}}(()=>{var e,t;return"undefined"!=typeof window&&((null==(e=window.document)?void 0:e.createElement)||(null==(t=window.navigator)?void 0:t.product)==="ReactNative")})()?n.useLayoutEffect:n.useEffect;let a=o(n.createContext(null));class l extends n.Component{render(){return n.createElement(a.Provider,{value:this._reactInternals},this.props.children)}}function s(){let e=n.useContext(a);if(null===e)throw Error("its-fine: useFiber must be called within a <FiberProvider />!");let t=n.useId();return n.useMemo(()=>{for(let r of[e,null==e?void 0:e.alternate]){if(!r)continue;let e=i(r,!1,e=>{let r=e.memoizedState;for(;r;){if(r.memoizedState===t)return!0;r=r.next}});if(e)return e}},[e,t])}let u=Symbol.for("react.context"),f=e=>null!==e&&"object"==typeof e&&"$$typeof"in e&&e.$$typeof===u;function c(){let e=function(){let e=s(),[t]=n.useState(()=>new Map);t.clear();let r=e;for(;r;){let e=r.type;f(e)&&e!==a&&!t.has(e)&&t.set(e,n.use(o(e))),r=r.return}return t}();return n.useMemo(()=>Array.from(e.keys()).reduce((t,r)=>i=>n.createElement(t,null,n.createElement(r.Provider,{...i,value:e.get(r)})),e=>n.createElement(l,{...e})),[e])}},4350:(e,t,r)=>{r.d(t,{u:()=>l});var n=r(6983),i=r(7135),o=r(8589),a=r(2402);let l=i.forwardRef(({envMap:e,resolution:t=256,frames:r=1/0,makeDefault:l,children:s,...u},f)=>{let c=(0,o.C)(({set:e})=>e),d=(0,o.C)(({camera:e})=>e),m=(0,o.C)(({size:e})=>e),h=i.useRef(null);i.useImperativeHandle(f,()=>h.current,[]);let v=i.useRef(null),p=function(e,t,r){let n=(0,o.C)(e=>e.size),l=(0,o.C)(e=>e.viewport),s="number"==typeof e?e:n.width*l.dpr,u=n.height*l.dpr,f=("number"==typeof e?void 0:e)||{},{samples:c=0,depth:d,...m}=f,h=null!=d?d:f.depthBuffer,v=i.useMemo(()=>{let e=new a.nWS(s,u,{minFilter:a.k6q,magFilter:a.k6q,type:a.ix0,...m});return h&&(e.depthTexture=new a.VCu(s,u,a.RQf)),e.samples=c,e},[]);return i.useLayoutEffect(()=>{v.setSize(s,u),c&&(v.samples=c)},[c,v,s,u]),i.useEffect(()=>()=>v.dispose(),[]),v}(t);i.useLayoutEffect(()=>{u.manual||(h.current.aspect=m.width/m.height)},[m,u]),i.useLayoutEffect(()=>{h.current.updateProjectionMatrix()});let g=0,b=null,x="function"==typeof s;return(0,o.D)(t=>{x&&(r===1/0||g<r)&&(v.current.visible=!1,t.gl.setRenderTarget(p),b=t.scene.background,e&&(t.scene.background=e),t.gl.render(t.scene,h.current),t.scene.background=b,t.gl.setRenderTarget(null),v.current.visible=!0,g++)}),i.useLayoutEffect(()=>{if(l)return c(()=>({camera:h.current})),()=>c(()=>({camera:d}))},[h,l,c]),i.createElement(i.Fragment,null,i.createElement("perspectiveCamera",(0,n.A)({ref:h},u),!x&&s),i.createElement("group",{ref:v},x&&s(p.texture)))})},4968:(e,t,r)=>{r.d(t,{o:()=>i});var n=r(2402);class i{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}new n.qUd(-1,1,1,-1,0,1);class o extends n.LoY{constructor(){super(),this.setAttribute("position",new n.qtW([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new n.qtW([0,2,0,0,2,0],2))}}new o},5067:(e,t,r)=>{r.d(t,{mK:()=>_,E8:()=>S,s0:()=>b,fL:()=>T,fE:()=>M});var n=r(5223),i=r(7135),o=r(2402),a=r(8589),l=r(3941);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}new o.I9Y,new o.I9Y;function u(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}var f=function e(t,r,n){var i=this;u(this,e),s(this,"dot2",function(e,t){return i.x*e+i.y*t}),s(this,"dot3",function(e,t,r){return i.x*e+i.y*t+i.z*r}),this.x=t,this.y=r,this.z=n},c=[new f(1,1,0),new f(-1,1,0),new f(1,-1,0),new f(-1,-1,0),new f(1,0,1),new f(-1,0,1),new f(1,0,-1),new f(-1,0,-1),new f(0,1,1),new f(0,-1,1),new f(0,1,-1),new f(0,-1,-1)],d=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],m=Array(512),h=Array(512);!function(e){e>0&&e<1&&(e*=65536),(e=Math.floor(e))<256&&(e|=e<<8);for(var t,r=0;r<256;r++)t=1&r?d[r]^255&e:d[r]^e>>8&255,m[r]=m[r+256]=t,h[r]=h[r+256]=c[t%12]}(0);function v(e){var t=function(e){if("number"==typeof e)e=Math.abs(e);else if("string"==typeof e){var t=e;e=0;for(var r=0;r<t.length;r++)e=(e+(r+1)*(t.charCodeAt(r)%96))%0x7fffffff}return 0===e&&(e=311),e}(e);return function(){var e=48271*t%0x7fffffff;return t=e,e/0x7fffffff}}new function e(t){var r=this;u(this,e),s(this,"seed",0),s(this,"init",function(e){r.seed=e,r.value=v(e)}),s(this,"value",v(this.seed)),this.init(t)}(Math.random());o.LoY;r(6599);let p=(0,i.createContext)(null),g=e=>(2&e.getAttributes())==2,b=(0,i.memo)((0,i.forwardRef)(({children:e,camera:t,scene:r,resolutionScale:s,enabled:u=!0,renderPriority:f=1,autoClear:c=!0,depthBuffer:d,enableNormalPass:m,stencilBuffer:h,multisampling:v=8,frameBufferType:b=o.ix0},x)=>{let{gl:y,scene:w,camera:_,size:S}=(0,a.C)(),T=r||w,E=t||_,[M,B,D]=(0,i.useMemo)(()=>{let e=new l.s0(y,{depthBuffer:d,stencilBuffer:h,multisampling:v,frameBufferType:b});e.addPass(new l.AH(T,E));let t=null,r=null;return m&&((r=new l.Xe(T,E)).enabled=!1,e.addPass(r),void 0!==s&&((t=new l.SP({normalBuffer:r.texture,resolutionScale:s})).enabled=!1,e.addPass(t))),[e,r,t]},[E,y,d,h,v,b,T,m,s]);(0,i.useEffect)(()=>M?.setSize(S.width,S.height),[M,S]),(0,a.D)((e,t)=>{if(u){let e=y.autoClear;y.autoClear=c,h&&!c&&y.clearStencil(),M.render(t),y.autoClear=e}},u?f:0);let U=(0,i.useRef)(null);(0,i.useLayoutEffect)(()=>{let e=[],t=U.current.__r3f;if(t&&M){let r=t.children;for(let t=0;t<r.length;t++){let n=r[t].object;if(n instanceof l.Mj){let i=[n];if(!g(n)){let e=null;for(;(e=r[t+1]?.object)instanceof l.Mj&&!g(e);)i.push(e),t++}let o=new l.Vu(E,...i);e.push(o)}else n instanceof l.oF&&e.push(n)}for(let t of e)M?.addPass(t);B&&(B.enabled=!0),D&&(D.enabled=!0)}return()=>{for(let t of e)M?.removePass(t);B&&(B.enabled=!1),D&&(D.enabled=!1)}},[M,e,E,B,D]),(0,i.useEffect)(()=>{let e=y.toneMapping;return y.toneMapping=o.y_p,()=>{y.toneMapping=e}},[y]);let R=(0,i.useMemo)(()=>({composer:M,normalPass:B,downSamplingPass:D,resolutionScale:s,camera:E,scene:T}),[M,B,D,s,E,T]);return(0,i.useImperativeHandle)(x,()=>M,[M]),(0,n.jsx)(p.Provider,{value:R,children:(0,n.jsx)("group",{ref:U,children:e})})})),x=0,y=new WeakMap,w=(e,t)=>function({blendFunction:r=t?.blendFunction,opacity:o=t?.opacity,...l}){let s=y.get(e);if(!s){let t=`@react-three/postprocessing/${e.name}-${x++}`;(0,a.e)({[t]:e}),y.set(e,s=t)}let u=(0,a.C)(e=>e.camera),f=i.useMemo(()=>[...t?.args??[],...l.args??[{...t,...l}]],[JSON.stringify(l)]);return(0,n.jsx)(s,{camera:u,"blendMode-blendFunction":r,"blendMode-opacity-value":o,...l,args:f})};l.Mj;let _=w(l.bv,{blendFunction:0}),S=w(l.t$),T=w(l.i,{blendFunction:5});l.hH;var E=(e=>(e[e.Linear=0]="Linear",e[e.Radial=1]="Radial",e[e.MirroredLinear=2]="MirroredLinear",e))(E||{});l.Mj;let M=w(l.K1),B=(l.To,{fragmentShader:`

    // original shader by Evan Wallace

    #define MAX_ITERATIONS 100

    uniform float blur;
    uniform float taper;
    uniform vec2 start;
    uniform vec2 end;
    uniform vec2 direction;
    uniform int samples;

    float random(vec3 scale, float seed) {
        /* use the fragment position for a different seed per-pixel */
        return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);
    }

    void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
        vec4 color = vec4(0.0);
        float total = 0.0;
        vec2 startPixel = vec2(start.x * resolution.x, start.y * resolution.y);
        vec2 endPixel = vec2(end.x * resolution.x, end.y * resolution.y);
        float f_samples = float(samples);
        float half_samples = f_samples / 2.0;

        // use screen diagonal to normalize blur radii
        float maxScreenDistance = distance(vec2(0.0), resolution); // diagonal distance
        float gradientRadius = taper * (maxScreenDistance);
        float blurRadius = blur * (maxScreenDistance / 16.0);

        /* randomize the lookup values to hide the fixed number of samples */
        float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);
        vec2 normal = normalize(vec2(startPixel.y - endPixel.y, endPixel.x - startPixel.x));
        float radius = smoothstep(0.0, 1.0, abs(dot(uv * resolution - startPixel, normal)) / gradientRadius) * blurRadius;

        #pragma unroll_loop_start
        for (int i = 0; i <= MAX_ITERATIONS; i++) {
            if (i >= samples) { break; } // return early if over sample count
            float f_i = float(i);
            float s_i = -half_samples + f_i;
            float percent = (s_i + offset - 0.5) / half_samples;
            float weight = 1.0 - abs(percent);
            vec4 sample_i = texture2D(inputBuffer, uv + normalize(direction) / resolution * percent * radius);
            /* switch to pre-multiplied alpha to correctly blur transparent images */
            sample_i.rgb *= sample_i.a;
            color += sample_i * weight;
            total += weight;
        }
        #pragma unroll_loop_end

        outputColor = color / total;

        /* switch back from pre-multiplied alpha */
        outputColor.rgb /= outputColor.a + 0.00001;
    }
    `});l.Mj;l.Mj;l.Mj},5095:(e,t,r)=>{r.d(t,{d:()=>c});var n=r(6983),i=r(7135),o=r(2402),a=r(8589),l=r(6835);class s extends o.BKk{constructor(e=new o.I9Y){super({uniforms:{inputBuffer:new o.nc$(null),depthBuffer:new o.nc$(null),resolution:new o.nc$(new o.I9Y),texelSize:new o.nc$(new o.I9Y),halfTexelSize:new o.nc$(new o.I9Y),kernel:new o.nc$(0),scale:new o.nc$(1),cameraNear:new o.nc$(0),cameraFar:new o.nc$(1),minDepthThreshold:new o.nc$(0),maxDepthThreshold:new o.nc$(1),depthScale:new o.nc$(0),depthToBlurRatioBias:new o.nc$(.25)},fragmentShader:`#include <common>
        #include <dithering_pars_fragment>      
        uniform sampler2D inputBuffer;
        uniform sampler2D depthBuffer;
        uniform float cameraNear;
        uniform float cameraFar;
        uniform float minDepthThreshold;
        uniform float maxDepthThreshold;
        uniform float depthScale;
        uniform float depthToBlurRatioBias;
        varying vec2 vUv;
        varying vec2 vUv0;
        varying vec2 vUv1;
        varying vec2 vUv2;
        varying vec2 vUv3;

        void main() {
          float depthFactor = 0.0;
          
          #ifdef USE_DEPTH
            vec4 depth = texture2D(depthBuffer, vUv);
            depthFactor = smoothstep(minDepthThreshold, maxDepthThreshold, 1.0-(depth.r * depth.a));
            depthFactor *= depthScale;
            depthFactor = max(0.0, min(1.0, depthFactor + 0.25));
          #endif
          
          vec4 sum = texture2D(inputBuffer, mix(vUv0, vUv, depthFactor));
          sum += texture2D(inputBuffer, mix(vUv1, vUv, depthFactor));
          sum += texture2D(inputBuffer, mix(vUv2, vUv, depthFactor));
          sum += texture2D(inputBuffer, mix(vUv3, vUv, depthFactor));
          gl_FragColor = sum * 0.25 ;

          #include <dithering_fragment>
          #include <tonemapping_fragment>
          #include <${l.r>=154?"colorspace_fragment":"encodings_fragment"}>
        }`,vertexShader:`uniform vec2 texelSize;
        uniform vec2 halfTexelSize;
        uniform float kernel;
        uniform float scale;
        varying vec2 vUv;
        varying vec2 vUv0;
        varying vec2 vUv1;
        varying vec2 vUv2;
        varying vec2 vUv3;

        void main() {
          vec2 uv = position.xy * 0.5 + 0.5;
          vUv = uv;

          vec2 dUv = (texelSize * vec2(kernel) + halfTexelSize) * scale;
          vUv0 = vec2(uv.x - dUv.x, uv.y + dUv.y);
          vUv1 = vec2(uv.x + dUv.x, uv.y + dUv.y);
          vUv2 = vec2(uv.x + dUv.x, uv.y - dUv.y);
          vUv3 = vec2(uv.x - dUv.x, uv.y - dUv.y);

          gl_Position = vec4(position.xy, 1.0, 1.0);
        }`,blending:o.XIg,depthWrite:!1,depthTest:!1}),this.toneMapped=!1,this.setTexelSize(e.x,e.y),this.kernel=new Float32Array([0,1,2,2,3])}setTexelSize(e,t){this.uniforms.texelSize.value.set(e,t),this.uniforms.halfTexelSize.value.set(e,t).multiplyScalar(.5)}setResolution(e){this.uniforms.resolution.value.copy(e)}}class u{constructor({gl:e,resolution:t,width:r=500,height:n=500,minDepthThreshold:i=0,maxDepthThreshold:a=1,depthScale:l=0,depthToBlurRatioBias:u=.25}){this.renderToScreen=!1,this.renderTargetA=new o.nWS(t,t,{minFilter:o.k6q,magFilter:o.k6q,stencilBuffer:!1,depthBuffer:!1,type:o.ix0}),this.renderTargetB=this.renderTargetA.clone(),this.convolutionMaterial=new s,this.convolutionMaterial.setTexelSize(1/r,1/n),this.convolutionMaterial.setResolution(new o.I9Y(r,n)),this.scene=new o.Z58,this.camera=new o.i7d,this.convolutionMaterial.uniforms.minDepthThreshold.value=i,this.convolutionMaterial.uniforms.maxDepthThreshold.value=a,this.convolutionMaterial.uniforms.depthScale.value=l,this.convolutionMaterial.uniforms.depthToBlurRatioBias.value=u,this.convolutionMaterial.defines.USE_DEPTH=l>0;let f=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),c=new Float32Array([0,0,2,0,0,2]),d=new o.LoY;d.setAttribute("position",new o.THS(f,3)),d.setAttribute("uv",new o.THS(c,2)),this.screen=new o.eaF(d,this.convolutionMaterial),this.screen.frustumCulled=!1,this.scene.add(this.screen)}render(e,t,r){let n,i,o,a=this.scene,l=this.camera,s=this.renderTargetA,u=this.renderTargetB,f=this.convolutionMaterial,c=f.uniforms;c.depthBuffer.value=t.depthTexture;let d=f.kernel,m=t;for(i=0,o=d.length-1;i<o;++i)n=(1&i)==0?s:u,c.kernel.value=d[i],c.inputBuffer.value=m.texture,e.setRenderTarget(n),e.render(a,l),m=n;c.kernel.value=d[i],c.inputBuffer.value=m.texture,e.setRenderTarget(this.renderToScreen?null:r),e.render(a,l)}}class f extends o._4j{constructor(e={}){super(e),this._tDepth={value:null},this._distortionMap={value:null},this._tDiffuse={value:null},this._tDiffuseBlur={value:null},this._textureMatrix={value:null},this._hasBlur={value:!1},this._mirror={value:0},this._mixBlur={value:0},this._blurStrength={value:.5},this._minDepthThreshold={value:.9},this._maxDepthThreshold={value:1},this._depthScale={value:0},this._depthToBlurRatioBias={value:.25},this._distortion={value:1},this._mixContrast={value:1},this.setValues(e)}onBeforeCompile(e){var t;null!=(t=e.defines)&&t.USE_UV||(e.defines.USE_UV=""),e.uniforms.hasBlur=this._hasBlur,e.uniforms.tDiffuse=this._tDiffuse,e.uniforms.tDepth=this._tDepth,e.uniforms.distortionMap=this._distortionMap,e.uniforms.tDiffuseBlur=this._tDiffuseBlur,e.uniforms.textureMatrix=this._textureMatrix,e.uniforms.mirror=this._mirror,e.uniforms.mixBlur=this._mixBlur,e.uniforms.mixStrength=this._blurStrength,e.uniforms.minDepthThreshold=this._minDepthThreshold,e.uniforms.maxDepthThreshold=this._maxDepthThreshold,e.uniforms.depthScale=this._depthScale,e.uniforms.depthToBlurRatioBias=this._depthToBlurRatioBias,e.uniforms.distortion=this._distortion,e.uniforms.mixContrast=this._mixContrast,e.vertexShader=`
        uniform mat4 textureMatrix;
        varying vec4 my_vUv;
      ${e.vertexShader}`,e.vertexShader=e.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
        my_vUv = textureMatrix * vec4( position, 1.0 );
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );`),e.fragmentShader=`
        uniform sampler2D tDiffuse;
        uniform sampler2D tDiffuseBlur;
        uniform sampler2D tDepth;
        uniform sampler2D distortionMap;
        uniform float distortion;
        uniform float cameraNear;
			  uniform float cameraFar;
        uniform bool hasBlur;
        uniform float mixBlur;
        uniform float mirror;
        uniform float mixStrength;
        uniform float minDepthThreshold;
        uniform float maxDepthThreshold;
        uniform float mixContrast;
        uniform float depthScale;
        uniform float depthToBlurRatioBias;
        varying vec4 my_vUv;
        ${e.fragmentShader}`,e.fragmentShader=e.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>

      float distortionFactor = 0.0;
      #ifdef USE_DISTORTION
        distortionFactor = texture2D(distortionMap, vUv).r * distortion;
      #endif

      vec4 new_vUv = my_vUv;
      new_vUv.x += distortionFactor;
      new_vUv.y += distortionFactor;

      vec4 base = texture2DProj(tDiffuse, new_vUv);
      vec4 blur = texture2DProj(tDiffuseBlur, new_vUv);

      vec4 merge = base;

      #ifdef USE_NORMALMAP
        vec2 normal_uv = vec2(0.0);
        vec4 normalColor = texture2D(normalMap, vUv * normalScale);
        vec3 my_normal = normalize( vec3( normalColor.r * 2.0 - 1.0, normalColor.b,  normalColor.g * 2.0 - 1.0 ) );
        vec3 coord = new_vUv.xyz / new_vUv.w;
        normal_uv = coord.xy + coord.z * my_normal.xz * 0.05;
        vec4 base_normal = texture2D(tDiffuse, normal_uv);
        vec4 blur_normal = texture2D(tDiffuseBlur, normal_uv);
        merge = base_normal;
        blur = blur_normal;
      #endif

      float depthFactor = 0.0001;
      float blurFactor = 0.0;

      #ifdef USE_DEPTH
        vec4 depth = texture2DProj(tDepth, new_vUv);
        depthFactor = smoothstep(minDepthThreshold, maxDepthThreshold, 1.0-(depth.r * depth.a));
        depthFactor *= depthScale;
        depthFactor = max(0.0001, min(1.0, depthFactor));

        #ifdef USE_BLUR
          blur = blur * min(1.0, depthFactor + depthToBlurRatioBias);
          merge = merge * min(1.0, depthFactor + 0.5);
        #else
          merge = merge * depthFactor;
        #endif

      #endif

      float reflectorRoughnessFactor = roughness;
      #ifdef USE_ROUGHNESSMAP
        vec4 reflectorTexelRoughness = texture2D( roughnessMap, vUv );
        reflectorRoughnessFactor *= reflectorTexelRoughness.g;
      #endif

      #ifdef USE_BLUR
        blurFactor = min(1.0, mixBlur * reflectorRoughnessFactor);
        merge = mix(merge, blur, blurFactor);
      #endif

      vec4 newMerge = vec4(0.0, 0.0, 0.0, 1.0);
      newMerge.r = (merge.r - 0.5) * mixContrast + 0.5;
      newMerge.g = (merge.g - 0.5) * mixContrast + 0.5;
      newMerge.b = (merge.b - 0.5) * mixContrast + 0.5;

      diffuseColor.rgb = diffuseColor.rgb * ((1.0 - min(1.0, mirror)) + newMerge.rgb * mixStrength);
      `)}get tDiffuse(){return this._tDiffuse.value}set tDiffuse(e){this._tDiffuse.value=e}get tDepth(){return this._tDepth.value}set tDepth(e){this._tDepth.value=e}get distortionMap(){return this._distortionMap.value}set distortionMap(e){this._distortionMap.value=e}get tDiffuseBlur(){return this._tDiffuseBlur.value}set tDiffuseBlur(e){this._tDiffuseBlur.value=e}get textureMatrix(){return this._textureMatrix.value}set textureMatrix(e){this._textureMatrix.value=e}get hasBlur(){return this._hasBlur.value}set hasBlur(e){this._hasBlur.value=e}get mirror(){return this._mirror.value}set mirror(e){this._mirror.value=e}get mixBlur(){return this._mixBlur.value}set mixBlur(e){this._mixBlur.value=e}get mixStrength(){return this._blurStrength.value}set mixStrength(e){this._blurStrength.value=e}get minDepthThreshold(){return this._minDepthThreshold.value}set minDepthThreshold(e){this._minDepthThreshold.value=e}get maxDepthThreshold(){return this._maxDepthThreshold.value}set maxDepthThreshold(e){this._maxDepthThreshold.value=e}get depthScale(){return this._depthScale.value}set depthScale(e){this._depthScale.value=e}get depthToBlurRatioBias(){return this._depthToBlurRatioBias.value}set depthToBlurRatioBias(e){this._depthToBlurRatioBias.value=e}get distortion(){return this._distortion.value}set distortion(e){this._distortion.value=e}get mixContrast(){return this._mixContrast.value}set mixContrast(e){this._mixContrast.value=e}}let c=i.forwardRef(({mixBlur:e=0,mixStrength:t=1,resolution:r=256,blur:l=[0,0],minDepthThreshold:s=.9,maxDepthThreshold:c=1,depthScale:d=0,depthToBlurRatioBias:m=.25,mirror:h=0,distortion:v=1,mixContrast:p=1,distortionMap:g,reflectorOffset:b=0,...x},y)=>{(0,a.e)({MeshReflectorMaterialImpl:f});let w=(0,a.C)(({gl:e})=>e),_=(0,a.C)(({camera:e})=>e),S=(0,a.C)(({scene:e})=>e),T=(l=Array.isArray(l)?l:[l,l])[0]+l[1]>0,E=l[0],M=l[1],B=i.useRef(null);i.useImperativeHandle(y,()=>B.current,[]);let[D]=i.useState(()=>new o.Zcv),[U]=i.useState(()=>new o.Pq0),[R]=i.useState(()=>new o.Pq0),[C]=i.useState(()=>new o.Pq0),[k]=i.useState(()=>new o.kn4),[P]=i.useState(()=>new o.Pq0(0,0,-1)),[z]=i.useState(()=>new o.IUQ),[F]=i.useState(()=>new o.Pq0),[A]=i.useState(()=>new o.Pq0),[j]=i.useState(()=>new o.IUQ),[I]=i.useState(()=>new o.kn4),[H]=i.useState(()=>new o.ubm),L=i.useCallback(()=>{var e;let t=B.current.parent||(null==(e=B.current)||null==(e=e.__r3f.parent)?void 0:e.object);if(!t||(R.setFromMatrixPosition(t.matrixWorld),C.setFromMatrixPosition(_.matrixWorld),k.extractRotation(t.matrixWorld),U.set(0,0,1),U.applyMatrix4(k),R.addScaledVector(U,b),F.subVectors(R,C),F.dot(U)>0))return;F.reflect(U).negate(),F.add(R),k.extractRotation(_.matrixWorld),P.set(0,0,-1),P.applyMatrix4(k),P.add(C),A.subVectors(R,P),A.reflect(U).negate(),A.add(R),H.position.copy(F),H.up.set(0,1,0),H.up.applyMatrix4(k),H.up.reflect(U),H.lookAt(A),H.far=_.far,H.updateMatrixWorld(),H.projectionMatrix.copy(_.projectionMatrix),I.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),I.multiply(H.projectionMatrix),I.multiply(H.matrixWorldInverse),I.multiply(t.matrixWorld),D.setFromNormalAndCoplanarPoint(U,R),D.applyMatrix4(H.matrixWorldInverse),z.set(D.normal.x,D.normal.y,D.normal.z,D.constant);let r=H.projectionMatrix;j.x=(Math.sign(z.x)+r.elements[8])/r.elements[0],j.y=(Math.sign(z.y)+r.elements[9])/r.elements[5],j.z=-1,j.w=(1+r.elements[10])/r.elements[14],z.multiplyScalar(2/z.dot(j)),r.elements[2]=z.x,r.elements[6]=z.y,r.elements[10]=z.z+1,r.elements[14]=z.w},[_,b]),[O,$,G,q]=i.useMemo(()=>{let n={minFilter:o.k6q,magFilter:o.k6q,type:o.ix0},i=new o.nWS(r,r,n);i.depthBuffer=!0,i.depthTexture=new o.VCu(r,r),i.depthTexture.format=o.zdS,i.depthTexture.type=o.cHt;let a=new o.nWS(r,r,n),l=new u({gl:w,resolution:r,width:E,height:M,minDepthThreshold:s,maxDepthThreshold:c,depthScale:d,depthToBlurRatioBias:m}),f={mirror:h,textureMatrix:I,mixBlur:e,tDiffuse:i.texture,tDepth:i.depthTexture,tDiffuseBlur:a.texture,hasBlur:T,mixStrength:t,minDepthThreshold:s,maxDepthThreshold:c,depthScale:d,depthToBlurRatioBias:m,distortion:v,distortionMap:g,mixContrast:p,"defines-USE_BLUR":T?"":void 0,"defines-USE_DEPTH":d>0?"":void 0,"defines-USE_DISTORTION":g?"":void 0};return[i,a,l,f]},[w,E,M,I,r,h,T,e,t,s,c,d,m,v,g,p]);return(0,a.D)(()=>{var e;let t=B.current.parent||(null==(e=B.current)||null==(e=e.__r3f.parent)?void 0:e.object);if(!t)return;t.visible=!1;let r=w.xr.enabled,n=w.shadowMap.autoUpdate;L(),w.xr.enabled=!1,w.shadowMap.autoUpdate=!1,w.setRenderTarget(O),w.state.buffers.depth.setMask(!0),w.autoClear||w.clear(),w.render(S,H),T&&G.render(w,O,$),w.xr.enabled=r,w.shadowMap.autoUpdate=n,t.visible=!0,w.setRenderTarget(null)}),i.createElement("meshReflectorMaterialImpl",(0,n.A)({attach:"material",key:"key"+q["defines-USE_BLUR"]+q["defines-USE_DEPTH"]+q["defines-USE_DISTORTION"],ref:B},q,x))})},5262:(e,t,r)=>{r.d(t,{pP:()=>i});var n=r(2402);function i(e,t=!1){let r=null!==e[0].index,a=new Set(Object.keys(e[0].attributes)),l=new Set(Object.keys(e[0].morphAttributes)),s={},u={},f=e[0].morphTargetsRelative,c=new n.LoY,d=0;for(let n=0;n<e.length;++n){let i=e[n],o=0;if(r!==(null!==i.index))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+n+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let e in i.attributes){if(!a.has(e))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+n+'. All geometries must have compatible attributes; make sure "'+e+'" attribute exists among all geometries, or in none of them.'),null;void 0===s[e]&&(s[e]=[]),s[e].push(i.attributes[e]),o++}if(o!==a.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+n+". Make sure all geometries have the same number of attributes."),null;if(f!==i.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+n+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let e in i.morphAttributes){if(!l.has(e))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+n+".  .morphAttributes must be consistent throughout all geometries."),null;void 0===u[e]&&(u[e]=[]),u[e].push(i.morphAttributes[e])}if(t){let e;if(r)e=i.index.count;else{if(void 0===i.attributes.position)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+n+". The geometry must have either an index or a position attribute"),null;e=i.attributes.position.count}c.addGroup(d,e,n),d+=e}}if(r){let t=0,r=[];for(let n=0;n<e.length;++n){let i=e[n].index;for(let e=0;e<i.count;++e)r.push(i.getX(e)+t);t+=e[n].attributes.position.count}c.setIndex(r)}for(let e in s){let t=o(s[e]);if(!t)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+e+" attribute."),null;c.setAttribute(e,t)}for(let e in u){let t=u[e][0].length;if(0===t)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let r=0;r<t;++r){let t=[];for(let n=0;n<u[e].length;++n)t.push(u[e][n][r]);let n=o(t);if(!n)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+e+" morphAttribute."),null;c.morphAttributes[e].push(n)}}return c}function o(e){let t,r,i,o=-1,a=0;for(let n=0;n<e.length;++n){let l=e[n];if(void 0===t&&(t=l.array.constructor),t!==l.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(void 0===r&&(r=l.itemSize),r!==l.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(void 0===i&&(i=l.normalized),i!==l.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(-1===o&&(o=l.gpuType),o!==l.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;a+=l.count*r}let l=new t(a),s=new n.THS(l,r,i),u=0;for(let t=0;t<e.length;++t){let n=e[t];if(n.isInterleavedBufferAttribute){let e=u/r;for(let t=0,i=n.count;t<i;t++)for(let i=0;i<r;i++){let r=n.getComponent(t,i);s.setComponent(t+e,i,r)}}else l.set(n.array,u);u+=n.count*r}return void 0!==o&&(s.gpuType=o),s}},5745:(e,t,r)=>{e.exports=r(2316)},6076:(e,t,r)=>{r.d(t,{r:()=>a});var n=r(7135),i=r(8589);let o=(0,n.createContext)(null);function a({iterations:e=10,ms:t=250,threshold:r=.75,step:a=.1,factor:l=.5,flipflops:s=1/0,bounds:u=e=>e>100?[60,100]:[40,60],onIncline:f,onDecline:c,onChange:d,onFallback:m,children:h}){let[v,p]=(0,n.useState)(()=>({fps:0,index:0,factor:l,flipped:0,refreshrate:0,fallback:!1,frames:[],averages:[],subscriptions:new Map,subscribe:e=>{let t=Symbol();return v.subscriptions.set(t,e.current),()=>void v.subscriptions.delete(t)}})),g=0;return(0,i.D)(()=>{let{frames:n,averages:i}=v;if(!v.fallback&&i.length<e){n.push(performance.now());let o=n[n.length-1]-n[0];if(o>=t){if(v.fps=Math.round(n.length/o*1e3)/1,v.refreshrate=Math.max(v.refreshrate,v.fps),i[v.index++%e]=v.fps,i.length===e){let[t,n]=u(v.refreshrate),o=i.filter(e=>e>=n),l=i.filter(e=>e<t);o.length>e*r&&(v.factor=Math.min(1,v.factor+a),v.flipped++,f&&f(v),v.subscriptions.forEach(e=>e.onIncline&&e.onIncline(v))),l.length>e*r&&(v.factor=Math.max(0,v.factor-a),v.flipped++,c&&c(v),v.subscriptions.forEach(e=>e.onDecline&&e.onDecline(v))),g!==v.factor&&(g=v.factor,d&&d(v),v.subscriptions.forEach(e=>e.onChange&&e.onChange(v))),v.flipped>s&&!v.fallback&&(v.fallback=!0,m&&m(v),v.subscriptions.forEach(e=>e.onFallback&&e.onFallback(v))),v.averages=[]}v.frames=[]}}}),n.createElement(o.Provider,{value:v},h)}},6835:(e,t,r)=>{r.d(t,{r:()=>n});let n=parseInt(r(2402).sPf.replace(/\D+/g,""))},6983:(e,t,r)=>{r.d(t,{A:()=>n});function n(){return(n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(null,arguments)}},8379:(e,t,r)=>{var n=r(7135),i=r(5745),o="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},a=i.useSyncExternalStore,l=n.useRef,s=n.useEffect,u=n.useMemo,f=n.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,r,n,i){var c=l(null);if(null===c.current){var d={hasValue:!1,value:null};c.current=d}else d=c.current;var m=a(e,(c=u(function(){function e(e){if(!s){if(s=!0,a=e,e=n(e),void 0!==i&&d.hasValue){var t=d.value;if(i(t,e))return l=t}return l=e}if(t=l,o(a,e))return t;var r=n(e);return void 0!==i&&i(t,r)?(a=e,t):(a=e,l=r)}var a,l,s=!1,u=void 0===r?null:r;return[function(){return e(t())},null===u?void 0:function(){return e(u())}]},[t,r,n,i]))[0],c[1]);return s(function(){d.hasValue=!0,d.value=m},[m]),f(m),m}},8670:(e,t,r)=>{r.d(t,{n:()=>a});var n=r(7135),i=r(8589),o=r(2402);let a=n.forwardRef(({children:e,enabled:t=!0,speed:r=1,rotationIntensity:a=1,floatIntensity:l=1,floatingRange:s=[-.1,.1],autoInvalidate:u=!1,...f},c)=>{let d=n.useRef(null);n.useImperativeHandle(c,()=>d.current,[]);let m=n.useRef(1e4*Math.random());return(0,i.D)(e=>{var n,i;if(!t||0===r)return;u&&e.invalidate();let f=m.current+e.clock.elapsedTime;d.current.rotation.x=Math.cos(f/4*r)/8*a,d.current.rotation.y=Math.sin(f/4*r)/8*a,d.current.rotation.z=Math.sin(f/4*r)/20*a;let c=Math.sin(f/4*r)/10;c=o.cj9.mapLinear(c,-.1,.1,null!=(n=null==s?void 0:s[0])?n:-.1,null!=(i=null==s?void 0:s[1])?i:.1),d.current.position.y=c*l,d.current.updateMatrix()}),n.createElement("group",f,n.createElement("group",{ref:d,matrixAutoUpdate:!1},e))})},9760:(e,t)=>{function r(e,t){var r=e.length;for(e.push(t);0<r;){var n=r-1>>>1,i=e[n];if(0<o(i,t))e[n]=t,e[r]=i,r=n;else break}}function n(e){return 0===e.length?null:e[0]}function i(e){if(0===e.length)return null;var t=e[0],r=e.pop();if(r!==t){e[0]=r;for(var n=0,i=e.length,a=i>>>1;n<a;){var l=2*(n+1)-1,s=e[l],u=l+1,f=e[u];if(0>o(s,r))u<i&&0>o(f,s)?(e[n]=f,e[u]=r,n=u):(e[n]=s,e[l]=r,n=l);else if(u<i&&0>o(f,r))e[n]=f,e[u]=r,n=u;else break}}return t}function o(e,t){var r=e.sortIndex-t.sortIndex;return 0!==r?r:e.id-t.id}if(t.unstable_now=void 0,"object"==typeof performance&&"function"==typeof performance.now){var a,l=performance;t.unstable_now=function(){return l.now()}}else{var s=Date,u=s.now();t.unstable_now=function(){return s.now()-u}}var f=[],c=[],d=1,m=null,h=3,v=!1,p=!1,g=!1,b=!1,x="function"==typeof setTimeout?setTimeout:null,y="function"==typeof clearTimeout?clearTimeout:null,w="undefined"!=typeof setImmediate?setImmediate:null;function _(e){for(var t=n(c);null!==t;){if(null===t.callback)i(c);else if(t.startTime<=e)i(c),t.sortIndex=t.expirationTime,r(f,t);else break;t=n(c)}}function S(e){if(g=!1,_(e),!p)if(null!==n(f))p=!0,T||(T=!0,a());else{var t=n(c);null!==t&&k(S,t.startTime-e)}}var T=!1,E=-1,M=5,B=-1;function D(){return!!b||!(t.unstable_now()-B<M)}function U(){if(b=!1,T){var e=t.unstable_now();B=e;var r=!0;try{e:{p=!1,g&&(g=!1,y(E),E=-1),v=!0;var o=h;try{t:{for(_(e),m=n(f);null!==m&&!(m.expirationTime>e&&D());){var l=m.callback;if("function"==typeof l){m.callback=null,h=m.priorityLevel;var s=l(m.expirationTime<=e);if(e=t.unstable_now(),"function"==typeof s){m.callback=s,_(e),r=!0;break t}m===n(f)&&i(f),_(e)}else i(f);m=n(f)}if(null!==m)r=!0;else{var u=n(c);null!==u&&k(S,u.startTime-e),r=!1}}break e}finally{m=null,h=o,v=!1}}}finally{r?a():T=!1}}}if("function"==typeof w)a=function(){w(U)};else if("undefined"!=typeof MessageChannel){var R=new MessageChannel,C=R.port2;R.port1.onmessage=U,a=function(){C.postMessage(null)}}else a=function(){x(U,0)};function k(e,r){E=x(function(){e(t.unstable_now())},r)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_next=function(e){switch(h){case 1:case 2:case 3:var t=3;break;default:t=h}var r=h;h=t;try{return e()}finally{h=r}},t.unstable_requestPaint=function(){b=!0},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var r=h;h=e;try{return t()}finally{h=r}},t.unstable_scheduleCallback=function(e,i,o){var l=t.unstable_now();switch(o="object"==typeof o&&null!==o&&"number"==typeof(o=o.delay)&&0<o?l+o:l,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=0x3fffffff;break;case 4:s=1e4;break;default:s=5e3}return s=o+s,e={id:d++,callback:i,priorityLevel:e,startTime:o,expirationTime:s,sortIndex:-1},o>l?(e.sortIndex=o,r(c,e),null===n(f)&&e===n(c)&&(g?(y(E),E=-1):g=!0,k(S,o-l))):(e.sortIndex=s,r(f,e),p||v||(p=!0,T||(T=!0,a()))),e},t.unstable_shouldYield=D,t.unstable_wrapCallback=function(e){var t=h;return function(){var r=h;h=t;try{return e.apply(this,arguments)}finally{h=r}}}}}]);