"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[778],{1142:(e,t,r)=>{r.d(t,{n:()=>o});var n=r(7135),i=r(6034),a=r(8971);let o=n.forwardRef(({children:e,enabled:t=!0,speed:r=1,rotationIntensity:o=1,floatIntensity:s=1,floatingRange:l=[-.1,.1],autoInvalidate:u=!1,...f},c)=>{let d=n.useRef(null);n.useImperativeHandle(c,()=>d.current,[]);let h=n.useRef(1e4*Math.random());return(0,i.D)(e=>{var n,i;if(!t||0===r)return;u&&e.invalidate();let f=h.current+e.clock.elapsedTime;d.current.rotation.x=Math.cos(f/4*r)/8*o,d.current.rotation.y=Math.sin(f/4*r)/8*o,d.current.rotation.z=Math.sin(f/4*r)/20*o;let c=Math.sin(f/4*r)/10;c=a.cj9.mapLinear(c,-.1,.1,null!=(n=null==l?void 0:l[0])?n:-.1,null!=(i=null==l?void 0:l[1])?i:.1),d.current.position.y=c*s,d.current.updateMatrix()}),n.createElement("group",f,n.createElement("group",{ref:d,matrixAutoUpdate:!1},e))})},1507:(e,t,r)=>{e.exports=r(8379)},1849:(e,t,r)=>{r.d(t,{A:()=>u});var n=r(7135),i=r(6034),a=r(8971),o=r(6315);class s extends a.BKk{constructor(){super({uniforms:{time:{value:0},fade:{value:1}},vertexShader:`
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
	      #include <${o.r>=154?"colorspace_fragment":"encodings_fragment"}>
      }`})}}let l=e=>new a.Pq0().setFromSpherical(new a.YHV(e,Math.acos(1-2*Math.random()),2*Math.random()*Math.PI)),u=n.forwardRef(({radius:e=100,depth:t=50,count:r=5e3,saturation:o=0,factor:u=4,fade:f=!1,speed:c=1},d)=>{let h=n.useRef(null),[p,m,v]=n.useMemo(()=>{let n=[],i=[],s=Array.from({length:r},()=>(.5+.5*Math.random())*u),f=new a.Q1f,c=e+t,d=t/r;for(let e=0;e<r;e++)c-=d*Math.random(),n.push(...l(c).toArray()),f.setHSL(e/r,o,.9),i.push(f.r,f.g,f.b);return[new Float32Array(n),new Float32Array(i),new Float32Array(s)]},[r,t,u,e,o]);(0,i.D)(e=>h.current&&(h.current.uniforms.time.value=e.clock.elapsedTime*c));let[g]=n.useState(()=>new s);return n.createElement("points",{ref:d},n.createElement("bufferGeometry",null,n.createElement("bufferAttribute",{attach:"attributes-position",args:[p,3]}),n.createElement("bufferAttribute",{attach:"attributes-color",args:[m,3]}),n.createElement("bufferAttribute",{attach:"attributes-size",args:[v,1]})),n.createElement("primitive",{ref:h,object:g,attach:"material",blending:a.EZo,"uniforms-fade-value":f,depthWrite:!1,transparent:!0,vertexColors:!0}))})},1983:(e,t,r)=>{r.d(t,{d:()=>c});var n=r(2640),i=r(7135),a=r(8971),o=r(6034),s=r(6315);class l extends a.BKk{constructor(e=new a.I9Y){super({uniforms:{inputBuffer:new a.nc$(null),depthBuffer:new a.nc$(null),resolution:new a.nc$(new a.I9Y),texelSize:new a.nc$(new a.I9Y),halfTexelSize:new a.nc$(new a.I9Y),kernel:new a.nc$(0),scale:new a.nc$(1),cameraNear:new a.nc$(0),cameraFar:new a.nc$(1),minDepthThreshold:new a.nc$(0),maxDepthThreshold:new a.nc$(1),depthScale:new a.nc$(0),depthToBlurRatioBias:new a.nc$(.25)},fragmentShader:`#include <common>
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
          #include <${s.r>=154?"colorspace_fragment":"encodings_fragment"}>
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
        }`,blending:a.XIg,depthWrite:!1,depthTest:!1}),this.toneMapped=!1,this.setTexelSize(e.x,e.y),this.kernel=new Float32Array([0,1,2,2,3])}setTexelSize(e,t){this.uniforms.texelSize.value.set(e,t),this.uniforms.halfTexelSize.value.set(e,t).multiplyScalar(.5)}setResolution(e){this.uniforms.resolution.value.copy(e)}}class u{constructor({gl:e,resolution:t,width:r=500,height:n=500,minDepthThreshold:i=0,maxDepthThreshold:o=1,depthScale:s=0,depthToBlurRatioBias:u=.25}){this.renderToScreen=!1,this.renderTargetA=new a.nWS(t,t,{minFilter:a.k6q,magFilter:a.k6q,stencilBuffer:!1,depthBuffer:!1,type:a.ix0}),this.renderTargetB=this.renderTargetA.clone(),this.convolutionMaterial=new l,this.convolutionMaterial.setTexelSize(1/r,1/n),this.convolutionMaterial.setResolution(new a.I9Y(r,n)),this.scene=new a.Z58,this.camera=new a.i7d,this.convolutionMaterial.uniforms.minDepthThreshold.value=i,this.convolutionMaterial.uniforms.maxDepthThreshold.value=o,this.convolutionMaterial.uniforms.depthScale.value=s,this.convolutionMaterial.uniforms.depthToBlurRatioBias.value=u,this.convolutionMaterial.defines.USE_DEPTH=s>0;let f=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),c=new Float32Array([0,0,2,0,0,2]),d=new a.LoY;d.setAttribute("position",new a.THS(f,3)),d.setAttribute("uv",new a.THS(c,2)),this.screen=new a.eaF(d,this.convolutionMaterial),this.screen.frustumCulled=!1,this.scene.add(this.screen)}render(e,t,r){let n,i,a,o=this.scene,s=this.camera,l=this.renderTargetA,u=this.renderTargetB,f=this.convolutionMaterial,c=f.uniforms;c.depthBuffer.value=t.depthTexture;let d=f.kernel,h=t;for(i=0,a=d.length-1;i<a;++i)n=(1&i)==0?l:u,c.kernel.value=d[i],c.inputBuffer.value=h.texture,e.setRenderTarget(n),e.render(o,s),h=n;c.kernel.value=d[i],c.inputBuffer.value=h.texture,e.setRenderTarget(this.renderToScreen?null:r),e.render(o,s)}}class f extends a._4j{constructor(e={}){super(e),this._tDepth={value:null},this._distortionMap={value:null},this._tDiffuse={value:null},this._tDiffuseBlur={value:null},this._textureMatrix={value:null},this._hasBlur={value:!1},this._mirror={value:0},this._mixBlur={value:0},this._blurStrength={value:.5},this._minDepthThreshold={value:.9},this._maxDepthThreshold={value:1},this._depthScale={value:0},this._depthToBlurRatioBias={value:.25},this._distortion={value:1},this._mixContrast={value:1},this.setValues(e)}onBeforeCompile(e){var t;null!=(t=e.defines)&&t.USE_UV||(e.defines.USE_UV=""),e.uniforms.hasBlur=this._hasBlur,e.uniforms.tDiffuse=this._tDiffuse,e.uniforms.tDepth=this._tDepth,e.uniforms.distortionMap=this._distortionMap,e.uniforms.tDiffuseBlur=this._tDiffuseBlur,e.uniforms.textureMatrix=this._textureMatrix,e.uniforms.mirror=this._mirror,e.uniforms.mixBlur=this._mixBlur,e.uniforms.mixStrength=this._blurStrength,e.uniforms.minDepthThreshold=this._minDepthThreshold,e.uniforms.maxDepthThreshold=this._maxDepthThreshold,e.uniforms.depthScale=this._depthScale,e.uniforms.depthToBlurRatioBias=this._depthToBlurRatioBias,e.uniforms.distortion=this._distortion,e.uniforms.mixContrast=this._mixContrast,e.vertexShader=`
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
      `)}get tDiffuse(){return this._tDiffuse.value}set tDiffuse(e){this._tDiffuse.value=e}get tDepth(){return this._tDepth.value}set tDepth(e){this._tDepth.value=e}get distortionMap(){return this._distortionMap.value}set distortionMap(e){this._distortionMap.value=e}get tDiffuseBlur(){return this._tDiffuseBlur.value}set tDiffuseBlur(e){this._tDiffuseBlur.value=e}get textureMatrix(){return this._textureMatrix.value}set textureMatrix(e){this._textureMatrix.value=e}get hasBlur(){return this._hasBlur.value}set hasBlur(e){this._hasBlur.value=e}get mirror(){return this._mirror.value}set mirror(e){this._mirror.value=e}get mixBlur(){return this._mixBlur.value}set mixBlur(e){this._mixBlur.value=e}get mixStrength(){return this._blurStrength.value}set mixStrength(e){this._blurStrength.value=e}get minDepthThreshold(){return this._minDepthThreshold.value}set minDepthThreshold(e){this._minDepthThreshold.value=e}get maxDepthThreshold(){return this._maxDepthThreshold.value}set maxDepthThreshold(e){this._maxDepthThreshold.value=e}get depthScale(){return this._depthScale.value}set depthScale(e){this._depthScale.value=e}get depthToBlurRatioBias(){return this._depthToBlurRatioBias.value}set depthToBlurRatioBias(e){this._depthToBlurRatioBias.value=e}get distortion(){return this._distortion.value}set distortion(e){this._distortion.value=e}get mixContrast(){return this._mixContrast.value}set mixContrast(e){this._mixContrast.value=e}}let c=i.forwardRef(({mixBlur:e=0,mixStrength:t=1,resolution:r=256,blur:s=[0,0],minDepthThreshold:l=.9,maxDepthThreshold:c=1,depthScale:d=0,depthToBlurRatioBias:h=.25,mirror:p=0,distortion:m=1,mixContrast:v=1,distortionMap:g,reflectorOffset:y=0,...x},w)=>{(0,o.e)({MeshReflectorMaterialImpl:f});let b=(0,o.C)(({gl:e})=>e),S=(0,o.C)(({camera:e})=>e),_=(0,o.C)(({scene:e})=>e),E=(s=Array.isArray(s)?s:[s,s])[0]+s[1]>0,M=s[0],U=s[1],D=i.useRef(null);i.useImperativeHandle(w,()=>D.current,[]);let[T]=i.useState(()=>new a.Zcv),[B]=i.useState(()=>new a.Pq0),[C]=i.useState(()=>new a.Pq0),[A]=i.useState(()=>new a.Pq0),[z]=i.useState(()=>new a.kn4),[L]=i.useState(()=>new a.Pq0(0,0,-1)),[P]=i.useState(()=>new a.IUQ),[R]=i.useState(()=>new a.Pq0),[O]=i.useState(()=>new a.Pq0),[j]=i.useState(()=>new a.IUQ),[I]=i.useState(()=>new a.kn4),[F]=i.useState(()=>new a.ubm),k=i.useCallback(()=>{var e;let t=D.current.parent||(null==(e=D.current)||null==(e=e.__r3f.parent)?void 0:e.object);if(!t||(C.setFromMatrixPosition(t.matrixWorld),A.setFromMatrixPosition(S.matrixWorld),z.extractRotation(t.matrixWorld),B.set(0,0,1),B.applyMatrix4(z),C.addScaledVector(B,y),R.subVectors(C,A),R.dot(B)>0))return;R.reflect(B).negate(),R.add(C),z.extractRotation(S.matrixWorld),L.set(0,0,-1),L.applyMatrix4(z),L.add(A),O.subVectors(C,L),O.reflect(B).negate(),O.add(C),F.position.copy(R),F.up.set(0,1,0),F.up.applyMatrix4(z),F.up.reflect(B),F.lookAt(O),F.far=S.far,F.updateMatrixWorld(),F.projectionMatrix.copy(S.projectionMatrix),I.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),I.multiply(F.projectionMatrix),I.multiply(F.matrixWorldInverse),I.multiply(t.matrixWorld),T.setFromNormalAndCoplanarPoint(B,C),T.applyMatrix4(F.matrixWorldInverse),P.set(T.normal.x,T.normal.y,T.normal.z,T.constant);let r=F.projectionMatrix;j.x=(Math.sign(P.x)+r.elements[8])/r.elements[0],j.y=(Math.sign(P.y)+r.elements[9])/r.elements[5],j.z=-1,j.w=(1+r.elements[10])/r.elements[14],P.multiplyScalar(2/P.dot(j)),r.elements[2]=P.x,r.elements[6]=P.y,r.elements[10]=P.z+1,r.elements[14]=P.w},[S,y]),[H,N,q,W]=i.useMemo(()=>{let n={minFilter:a.k6q,magFilter:a.k6q,type:a.ix0},i=new a.nWS(r,r,n);i.depthBuffer=!0,i.depthTexture=new a.VCu(r,r),i.depthTexture.format=a.zdS,i.depthTexture.type=a.cHt;let o=new a.nWS(r,r,n),s=new u({gl:b,resolution:r,width:M,height:U,minDepthThreshold:l,maxDepthThreshold:c,depthScale:d,depthToBlurRatioBias:h}),f={mirror:p,textureMatrix:I,mixBlur:e,tDiffuse:i.texture,tDepth:i.depthTexture,tDiffuseBlur:o.texture,hasBlur:E,mixStrength:t,minDepthThreshold:l,maxDepthThreshold:c,depthScale:d,depthToBlurRatioBias:h,distortion:m,distortionMap:g,mixContrast:v,"defines-USE_BLUR":E?"":void 0,"defines-USE_DEPTH":d>0?"":void 0,"defines-USE_DISTORTION":g?"":void 0};return[i,o,s,f]},[b,M,U,I,r,p,E,e,t,l,c,d,h,m,g,v]);return(0,o.D)(()=>{var e;let t=D.current.parent||(null==(e=D.current)||null==(e=e.__r3f.parent)?void 0:e.object);if(!t)return;t.visible=!1;let r=b.xr.enabled,n=b.shadowMap.autoUpdate;k(),b.xr.enabled=!1,b.shadowMap.autoUpdate=!1,b.setRenderTarget(H),b.state.buffers.depth.setMask(!0),b.autoClear||b.clear(),b.render(_,F),E&&q.render(b,H,N),b.xr.enabled=r,b.shadowMap.autoUpdate=n,t.visible=!0,b.setRenderTarget(null)}),i.createElement("meshReflectorMaterialImpl",(0,n.A)({attach:"material",key:"key"+W["defines-USE_BLUR"]+W["defines-USE_DEPTH"]+W["defines-USE_DISTORTION"],ref:D},W,x))})},2316:(e,t,r)=>{var n=r(7135),i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},a=n.useState,o=n.useEffect,s=n.useLayoutEffect,l=n.useDebugValue;function u(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!i(e,r)}catch(e){return!0}}var f="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var r=t(),n=a({inst:{value:r,getSnapshot:t}}),i=n[0].inst,f=n[1];return s(function(){i.value=r,i.getSnapshot=t,u(i)&&f({inst:i})},[e,r,t]),o(function(){return u(i)&&f({inst:i}),e(function(){u(i)&&f({inst:i})})},[e]),l(r),r};t.useSyncExternalStore=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:f},2640:(e,t,r)=>{r.d(t,{A:()=>n});function n(){return(n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(null,arguments)}},2798:(e,t,r)=>{r.d(t,{DY:()=>o,IU:()=>l,uv:()=>s});let n=[];function i(e,t,r=(e,t)=>e===t){if(e===t)return!0;if(!e||!t)return!1;let n=e.length;if(t.length!==n)return!1;for(let i=0;i<n;i++)if(!r(e[i],t[i]))return!1;return!0}function a(e,t=null,r=!1,o={}){for(let a of(null===t&&(t=[e]),n))if(i(t,a.keys,a.equal)){if(r)return;if(Object.prototype.hasOwnProperty.call(a,"error"))throw a.error;if(Object.prototype.hasOwnProperty.call(a,"response"))return o.lifespan&&o.lifespan>0&&(a.timeout&&clearTimeout(a.timeout),a.timeout=setTimeout(a.remove,o.lifespan)),a.response;if(!r)throw a.promise}let s={keys:t,equal:o.equal,remove:()=>{let e=n.indexOf(s);-1!==e&&n.splice(e,1)},promise:("object"==typeof e&&"function"==typeof e.then?e:e(...t)).then(e=>{s.response=e,o.lifespan&&o.lifespan>0&&(s.timeout=setTimeout(s.remove,o.lifespan))}).catch(e=>s.error=e)};if(n.push(s),!r)throw s.promise}let o=(e,t,r)=>a(e,t,!1,r),s=(e,t,r)=>void a(e,t,!0,r),l=e=>{if(void 0===e||0===e.length)n.splice(0,n.length);else{let t=n.find(t=>i(e,t.keys,t.equal));t&&t.remove()}}},3039:(e,t,r)=>{r.d(t,{h:()=>l});var n=r(7135),i=r(1507);let a=e=>{let t,r=new Set,n=(e,n)=>{let i="function"==typeof e?e(t):e;if(!Object.is(i,t)){let e=t;t=(null!=n?n:"object"!=typeof i||null===i)?i:Object.assign({},t,i),r.forEach(r=>r(t,e))}},i=()=>t,a={setState:n,getState:i,getInitialState:()=>o,subscribe:e=>(r.add(e),()=>r.delete(e))},o=t=e(n,i,a);return a},{useSyncExternalStoreWithSelector:o}=i,s=(e,t)=>{let r=(e=>e?a(e):a)(e),i=(e,i=t)=>(function(e,t=e=>e,r){let i=o(e.subscribe,e.getState,e.getInitialState,t,r);return n.useDebugValue(i),i})(r,e,i);return Object.assign(i,r),i},l=(e,t)=>e?s(e,t):s},3089:(e,t,r)=>{r.d(t,{Hl:()=>c});var n=r(6034),i=r(7135),a=r(3260);function o(e,t){let r;return(...n)=>{window.clearTimeout(r),r=window.setTimeout(()=>e(...n),t)}}let s=["x","y","top","bottom","left","right","width","height"];var l=r(4252),u=r(5223);function f({ref:e,children:t,fallback:r,resize:l,style:f,gl:c,events:d=n.f,eventSource:h,eventPrefix:p,shadows:m,linear:v,flat:g,legacy:y,orthographic:x,frameloop:w,dpr:b,performance:S,raycaster:_,camera:E,scene:M,onPointerMissed:U,onCreated:D,...T}){i.useMemo(()=>(0,n.e)(a),[]);let B=(0,n.u)(),[C,A]=function({debounce:e,scroll:t,polyfill:r,offsetSize:n}={debounce:0,scroll:!1,offsetSize:!1}){var a,l,u;let f=r||("undefined"==typeof window?class{}:window.ResizeObserver);if(!f)throw Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");let[c,d]=(0,i.useState)({left:0,top:0,width:0,height:0,bottom:0,right:0,x:0,y:0}),h=(0,i.useRef)({element:null,scrollContainers:null,resizeObserver:null,lastBounds:c,orientationHandler:null}),p=e?"number"==typeof e?e:e.scroll:null,m=e?"number"==typeof e?e:e.resize:null,v=(0,i.useRef)(!1);(0,i.useEffect)(()=>(v.current=!0,()=>void(v.current=!1)));let[g,y,x]=(0,i.useMemo)(()=>{let e=()=>{let e,t;if(!h.current.element)return;let{left:r,top:i,width:a,height:o,bottom:l,right:u,x:f,y:c}=h.current.element.getBoundingClientRect(),p={left:r,top:i,width:a,height:o,bottom:l,right:u,x:f,y:c};h.current.element instanceof HTMLElement&&n&&(p.height=h.current.element.offsetHeight,p.width=h.current.element.offsetWidth),Object.freeze(p),v.current&&(e=h.current.lastBounds,t=p,!s.every(r=>e[r]===t[r]))&&d(h.current.lastBounds=p)};return[e,m?o(e,m):e,p?o(e,p):e]},[d,n,p,m]);function w(){h.current.scrollContainers&&(h.current.scrollContainers.forEach(e=>e.removeEventListener("scroll",x,!0)),h.current.scrollContainers=null),h.current.resizeObserver&&(h.current.resizeObserver.disconnect(),h.current.resizeObserver=null),h.current.orientationHandler&&("orientation"in screen&&"removeEventListener"in screen.orientation?screen.orientation.removeEventListener("change",h.current.orientationHandler):"onorientationchange"in window&&window.removeEventListener("orientationchange",h.current.orientationHandler))}function b(){h.current.element&&(h.current.resizeObserver=new f(x),h.current.resizeObserver.observe(h.current.element),t&&h.current.scrollContainers&&h.current.scrollContainers.forEach(e=>e.addEventListener("scroll",x,{capture:!0,passive:!0})),h.current.orientationHandler=()=>{x()},"orientation"in screen&&"addEventListener"in screen.orientation?screen.orientation.addEventListener("change",h.current.orientationHandler):"onorientationchange"in window&&window.addEventListener("orientationchange",h.current.orientationHandler))}return a=x,l=!!t,(0,i.useEffect)(()=>{if(l)return window.addEventListener("scroll",a,{capture:!0,passive:!0}),()=>void window.removeEventListener("scroll",a,!0)},[a,l]),u=y,(0,i.useEffect)(()=>(window.addEventListener("resize",u),()=>void window.removeEventListener("resize",u)),[u]),(0,i.useEffect)(()=>{w(),b()},[t,x,y]),(0,i.useEffect)(()=>w,[]),[e=>{e&&e!==h.current.element&&(w(),h.current.element=e,h.current.scrollContainers=function e(t){let r=[];if(!t||t===document.body)return r;let{overflow:n,overflowX:i,overflowY:a}=window.getComputedStyle(t);return[n,i,a].some(e=>"auto"===e||"scroll"===e)&&r.push(t),[...r,...e(t.parentElement)]}(e),b())},c,g]}({scroll:!0,debounce:{scroll:50,resize:0},...l}),z=i.useRef(null),L=i.useRef(null);i.useImperativeHandle(e,()=>z.current);let P=(0,n.a)(U),[R,O]=i.useState(!1),[j,I]=i.useState(!1);if(R)throw R;if(j)throw j;let F=i.useRef(null);(0,n.b)(()=>{let e=z.current;A.width>0&&A.height>0&&e&&(F.current||(F.current=(0,n.c)(e)),async function(){await F.current.configure({gl:c,scene:M,events:d,shadows:m,linear:v,flat:g,legacy:y,orthographic:x,frameloop:w,dpr:b,performance:S,raycaster:_,camera:E,size:A,onPointerMissed:(...e)=>null==P.current?void 0:P.current(...e),onCreated:e=>{null==e.events.connect||e.events.connect(h?(0,n.i)(h)?h.current:h:L.current),p&&e.setEvents({compute:(e,t)=>{let r=e[p+"X"],n=e[p+"Y"];t.pointer.set(r/t.size.width*2-1,-(2*(n/t.size.height))+1),t.raycaster.setFromCamera(t.pointer,t.camera)}}),null==D||D(e)}}),F.current.render((0,u.jsx)(B,{children:(0,u.jsx)(n.E,{set:I,children:(0,u.jsx)(i.Suspense,{fallback:(0,u.jsx)(n.B,{set:O}),children:null!=t?t:null})})}))}())}),i.useEffect(()=>{let e=z.current;if(e)return()=>(0,n.d)(e)},[]);let k=h?"none":"auto";return(0,u.jsx)("div",{ref:L,style:{position:"relative",width:"100%",height:"100%",overflow:"hidden",pointerEvents:k,...f},...T,children:(0,u.jsx)("div",{ref:C,style:{width:"100%",height:"100%"},children:(0,u.jsx)("canvas",{ref:z,style:{display:"block"},children:r})})})}function c(e){return(0,u.jsx)(l.Af,{children:(0,u.jsx)(f,{...e})})}r(4090)},4090:(e,t,r)=>{e.exports=r(9760)},4252:(e,t,r)=>{r.d(t,{Af:()=>s,Nz:()=>i,u5:()=>l,y3:()=>c});var n=r(7135);function i(e,t,r){if(!e)return;if(!0===r(e))return e;let n=t?e.return:e.child;for(;n;){let e=i(n,t,r);if(e)return e;n=t?null:n.sibling}}function a(e){try{return Object.defineProperties(e,{_currentRenderer:{get:()=>null,set(){}},_currentRenderer2:{get:()=>null,set(){}}})}catch(t){return e}}(()=>{var e,t;return"undefined"!=typeof window&&((null==(e=window.document)?void 0:e.createElement)||(null==(t=window.navigator)?void 0:t.product)==="ReactNative")})()?n.useLayoutEffect:n.useEffect;let o=a(n.createContext(null));class s extends n.Component{render(){return n.createElement(o.Provider,{value:this._reactInternals},this.props.children)}}function l(){let e=n.useContext(o);if(null===e)throw Error("its-fine: useFiber must be called within a <FiberProvider />!");let t=n.useId();return n.useMemo(()=>{for(let r of[e,null==e?void 0:e.alternate]){if(!r)continue;let e=i(r,!1,e=>{let r=e.memoizedState;for(;r;){if(r.memoizedState===t)return!0;r=r.next}});if(e)return e}},[e,t])}let u=Symbol.for("react.context"),f=e=>null!==e&&"object"==typeof e&&"$$typeof"in e&&e.$$typeof===u;function c(){let e=function(){let e=l(),[t]=n.useState(()=>new Map);t.clear();let r=e;for(;r;){let e=r.type;f(e)&&e!==o&&!t.has(e)&&t.set(e,n.use(a(e))),r=r.return}return t}();return n.useMemo(()=>Array.from(e.keys()).reduce((t,r)=>i=>n.createElement(t,null,n.createElement(r.Provider,{...i,value:e.get(r)})),e=>n.createElement(s,{...e})),[e])}},5745:(e,t,r)=>{e.exports=r(2316)},6315:(e,t,r)=>{r.d(t,{r:()=>n});let n=parseInt(r(8971).sPf.replace(/\D+/g,""))},6577:(e,t,r)=>{r.d(t,{o:()=>i});var n=r(8971);class i{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}new n.qUd(-1,1,1,-1,0,1);class a extends n.LoY{constructor(){super(),this.setAttribute("position",new n.qtW([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new n.qtW([0,2,0,0,2,0],2))}}new a},7318:(e,t,r)=>{r.d(t,{u:()=>s});var n=r(2640),i=r(7135),a=r(6034),o=r(8971);let s=i.forwardRef(({envMap:e,resolution:t=256,frames:r=1/0,makeDefault:s,children:l,...u},f)=>{let c=(0,a.C)(({set:e})=>e),d=(0,a.C)(({camera:e})=>e),h=(0,a.C)(({size:e})=>e),p=i.useRef(null);i.useImperativeHandle(f,()=>p.current,[]);let m=i.useRef(null),v=function(e,t,r){let n=(0,a.C)(e=>e.size),s=(0,a.C)(e=>e.viewport),l="number"==typeof e?e:n.width*s.dpr,u=n.height*s.dpr,f=("number"==typeof e?void 0:e)||{},{samples:c=0,depth:d,...h}=f,p=null!=d?d:f.depthBuffer,m=i.useMemo(()=>{let e=new o.nWS(l,u,{minFilter:o.k6q,magFilter:o.k6q,type:o.ix0,...h});return p&&(e.depthTexture=new o.VCu(l,u,o.RQf)),e.samples=c,e},[]);return i.useLayoutEffect(()=>{m.setSize(l,u),c&&(m.samples=c)},[c,m,l,u]),i.useEffect(()=>()=>m.dispose(),[]),m}(t);i.useLayoutEffect(()=>{u.manual||(p.current.aspect=h.width/h.height)},[h,u]),i.useLayoutEffect(()=>{p.current.updateProjectionMatrix()});let g=0,y=null,x="function"==typeof l;return(0,a.D)(t=>{x&&(r===1/0||g<r)&&(m.current.visible=!1,t.gl.setRenderTarget(v),y=t.scene.background,e&&(t.scene.background=e),t.gl.render(t.scene,p.current),t.scene.background=y,t.gl.setRenderTarget(null),m.current.visible=!0,g++)}),i.useLayoutEffect(()=>{if(s)return c(()=>({camera:p.current})),()=>c(()=>({camera:d}))},[p,s,c]),i.createElement(i.Fragment,null,i.createElement("perspectiveCamera",(0,n.A)({ref:p},u),!x&&l),i.createElement("group",{ref:m},x&&l(v.texture)))})},7482:(e,t,r)=>{let n,i;r.d(t,{l:()=>P});var a=r(2640),o=r(7135),s=r(8971),l=r(6034);let u=new s.NRn,f=new s.Pq0;class c extends s.CmU{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry",this.setIndex([0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5]),this.setAttribute("position",new s.qtW([-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],3)),this.setAttribute("uv",new s.qtW([-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],2))}applyMatrix4(e){let t=this.attributes.instanceStart,r=this.attributes.instanceEnd;return void 0!==t&&(t.applyMatrix4(e),r.applyMatrix4(e),t.needsUpdate=!0),null!==this.boundingBox&&this.computeBoundingBox(),null!==this.boundingSphere&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let r=new s.LuO(t,6,1);return this.setAttribute("instanceStart",new s.eHs(r,3,0)),this.setAttribute("instanceEnd",new s.eHs(r,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e,t=3){let r;e instanceof Float32Array?r=e:Array.isArray(e)&&(r=new Float32Array(e));let n=new s.LuO(r,2*t,1);return this.setAttribute("instanceColorStart",new s.eHs(n,t,0)),this.setAttribute("instanceColorEnd",new s.eHs(n,t,t)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new s.XJ7(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){null===this.boundingBox&&(this.boundingBox=new s.NRn);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;void 0!==e&&void 0!==t&&(this.boundingBox.setFromBufferAttribute(e),u.setFromBufferAttribute(t),this.boundingBox.union(u))}computeBoundingSphere(){null===this.boundingSphere&&(this.boundingSphere=new s.iyt),null===this.boundingBox&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(void 0!==e&&void 0!==t){let r=this.boundingSphere.center;this.boundingBox.getCenter(r);let n=0;for(let i=0,a=e.count;i<a;i++)f.fromBufferAttribute(e,i),n=Math.max(n,r.distanceToSquared(f)),f.fromBufferAttribute(t,i),n=Math.max(n,r.distanceToSquared(f));this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}var d=r(3260);let h=parseInt(s.sPf.replace(/\D+/g,""));class p extends s.BKk{constructor(e){super({type:"LineMaterial",uniforms:s.LlO.clone(s.LlO.merge([d.UniformsLib.common,d.UniformsLib.fog,{worldUnits:{value:1},linewidth:{value:1},resolution:{value:new s.I9Y(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}}])),vertexShader:`
				#include <common>
				#include <fog_pars_vertex>
				#include <logdepthbuf_pars_vertex>
				#include <clipping_planes_pars_vertex>

				uniform float linewidth;
				uniform vec2 resolution;

				attribute vec3 instanceStart;
				attribute vec3 instanceEnd;

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
						attribute vec4 instanceColorStart;
						attribute vec4 instanceColorEnd;
					#else
						varying vec3 vLineColor;
						attribute vec3 instanceColorStart;
						attribute vec3 instanceColorEnd;
					#endif
				#endif

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#ifdef USE_DASH

					uniform float dashScale;
					attribute float instanceDistanceStart;
					attribute float instanceDistanceEnd;
					varying float vLineDistance;

				#endif

				void trimSegment( const in vec4 start, inout vec4 end ) {

					// trim end segment so it terminates between the camera plane and the near plane

					// conservative estimate of the near plane
					float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
					float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
					float nearEstimate = - 0.5 * b / a;

					float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

					end.xyz = mix( start.xyz, end.xyz, alpha );

				}

				void main() {

					#ifdef USE_COLOR

						vLineColor = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

					#endif

					#ifdef USE_DASH

						vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
						vUv = uv;

					#endif

					float aspect = resolution.x / resolution.y;

					// camera space
					vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
					vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

					#ifdef WORLD_UNITS

						worldStart = start.xyz;
						worldEnd = end.xyz;

					#else

						vUv = uv;

					#endif

					// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
					// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
					// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
					// perhaps there is a more elegant solution -- WestLangley

					bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

					if ( perspective ) {

						if ( start.z < 0.0 && end.z >= 0.0 ) {

							trimSegment( start, end );

						} else if ( end.z < 0.0 && start.z >= 0.0 ) {

							trimSegment( end, start );

						}

					}

					// clip space
					vec4 clipStart = projectionMatrix * start;
					vec4 clipEnd = projectionMatrix * end;

					// ndc space
					vec3 ndcStart = clipStart.xyz / clipStart.w;
					vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

					// direction
					vec2 dir = ndcEnd.xy - ndcStart.xy;

					// account for clip-space aspect ratio
					dir.x *= aspect;
					dir = normalize( dir );

					#ifdef WORLD_UNITS

						// get the offset direction as perpendicular to the view vector
						vec3 worldDir = normalize( end.xyz - start.xyz );
						vec3 offset;
						if ( position.y < 0.5 ) {

							offset = normalize( cross( start.xyz, worldDir ) );

						} else {

							offset = normalize( cross( end.xyz, worldDir ) );

						}

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

						// don't extend the line if we're rendering dashes because we
						// won't be rendering the endcaps
						#ifndef USE_DASH

							// extend the line bounds to encompass  endcaps
							start.xyz += - worldDir * linewidth * 0.5;
							end.xyz += worldDir * linewidth * 0.5;

							// shift the position of the quad so it hugs the forward edge of the line
							offset.xy -= dir * forwardOffset;
							offset.z += 0.5;

						#endif

						// endcaps
						if ( position.y > 1.0 || position.y < 0.0 ) {

							offset.xy += dir * 2.0 * forwardOffset;

						}

						// adjust for linewidth
						offset *= linewidth * 0.5;

						// set the world position
						worldPos = ( position.y < 0.5 ) ? start : end;
						worldPos.xyz += offset;

						// project the worldpos
						vec4 clip = projectionMatrix * worldPos;

						// shift the depth of the projected points so the line
						// segments overlap neatly
						vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
						clip.z = clipPose.z * clip.w;

					#else

						vec2 offset = vec2( dir.y, - dir.x );
						// undo aspect ratio adjustment
						dir.x /= aspect;
						offset.x /= aspect;

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						// endcaps
						if ( position.y < 0.0 ) {

							offset += - dir;

						} else if ( position.y > 1.0 ) {

							offset += dir;

						}

						// adjust for linewidth
						offset *= linewidth;

						// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
						offset /= resolution.y;

						// select end
						vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

						// back to clip space
						offset *= clip.w;

						clip.xy += offset;

					#endif

					gl_Position = clip;

					vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

					#include <logdepthbuf_vertex>
					#include <clipping_planes_vertex>
					#include <fog_vertex>

				}
			`,fragmentShader:`
				uniform vec3 diffuse;
				uniform float opacity;
				uniform float linewidth;

				#ifdef USE_DASH

					uniform float dashOffset;
					uniform float dashSize;
					uniform float gapSize;

				#endif

				varying float vLineDistance;

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#include <common>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <clipping_planes_pars_fragment>

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
					#else
						varying vec3 vLineColor;
					#endif
				#endif

				vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

					float mua;
					float mub;

					vec3 p13 = p1 - p3;
					vec3 p43 = p4 - p3;

					vec3 p21 = p2 - p1;

					float d1343 = dot( p13, p43 );
					float d4321 = dot( p43, p21 );
					float d1321 = dot( p13, p21 );
					float d4343 = dot( p43, p43 );
					float d2121 = dot( p21, p21 );

					float denom = d2121 * d4343 - d4321 * d4321;

					float numer = d1343 * d4321 - d1321 * d4343;

					mua = numer / denom;
					mua = clamp( mua, 0.0, 1.0 );
					mub = ( d1343 + d4321 * ( mua ) ) / d4343;
					mub = clamp( mub, 0.0, 1.0 );

					return vec2( mua, mub );

				}

				void main() {

					#include <clipping_planes_fragment>

					#ifdef USE_DASH

						if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

						if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

					#endif

					float alpha = opacity;

					#ifdef WORLD_UNITS

						// Find the closest points on the view ray and the line segment
						vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
						vec3 lineDir = worldEnd - worldStart;
						vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

						vec3 p1 = worldStart + lineDir * params.x;
						vec3 p2 = rayEnd * params.y;
						vec3 delta = p1 - p2;
						float len = length( delta );
						float norm = len / linewidth;

						#ifndef USE_DASH

							#ifdef USE_ALPHA_TO_COVERAGE

								float dnorm = fwidth( norm );
								alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

							#else

								if ( norm > 0.5 ) {

									discard;

								}

							#endif

						#endif

					#else

						#ifdef USE_ALPHA_TO_COVERAGE

							// artifacts appear on some hardware if a derivative is taken within a conditional
							float a = vUv.x;
							float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
							float len2 = a * a + b * b;
							float dlen = fwidth( len2 );

							if ( abs( vUv.y ) > 1.0 ) {

								alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

							}

						#else

							if ( abs( vUv.y ) > 1.0 ) {

								float a = vUv.x;
								float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
								float len2 = a * a + b * b;

								if ( len2 > 1.0 ) discard;

							}

						#endif

					#endif

					vec4 diffuseColor = vec4( diffuse, alpha );
					#ifdef USE_COLOR
						#ifdef USE_LINE_COLOR_ALPHA
							diffuseColor *= vLineColor;
						#else
							diffuseColor.rgb *= vLineColor;
						#endif
					#endif

					#include <logdepthbuf_fragment>

					gl_FragColor = diffuseColor;

					#include <tonemapping_fragment>
					#include <${h>=154?"colorspace_fragment":"encodings_fragment"}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`,clipping:!0}),this.isLineMaterial=!0,this.onBeforeCompile=function(){this.transparent?this.defines.USE_LINE_COLOR_ALPHA="1":delete this.defines.USE_LINE_COLOR_ALPHA},Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(e){this.uniforms.diffuse.value=e}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(e){!0===e?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(e){this.uniforms.linewidth.value=e}},dashed:{enumerable:!0,get:function(){return"USE_DASH"in this.defines},set(e){!!e!="USE_DASH"in this.defines&&(this.needsUpdate=!0),!0===e?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(e){this.uniforms.dashScale.value=e}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(e){this.uniforms.dashSize.value=e}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(e){this.uniforms.dashOffset.value=e}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(e){this.uniforms.gapSize.value=e}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(e){this.uniforms.opacity.value=e}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(e){this.uniforms.resolution.value.copy(e)}},alphaToCoverage:{enumerable:!0,get:function(){return"USE_ALPHA_TO_COVERAGE"in this.defines},set:function(e){!!e!="USE_ALPHA_TO_COVERAGE"in this.defines&&(this.needsUpdate=!0),!0===e?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}}let m=h>=125?"uv1":"uv2",v=new s.IUQ,g=new s.Pq0,y=new s.Pq0,x=new s.IUQ,w=new s.IUQ,b=new s.IUQ,S=new s.Pq0,_=new s.kn4,E=new s.cZY,M=new s.Pq0,U=new s.NRn,D=new s.iyt,T=new s.IUQ;function B(e,t,r){return T.set(0,0,-t,1).applyMatrix4(e.projectionMatrix),T.multiplyScalar(1/T.w),T.x=i/r.width,T.y=i/r.height,T.applyMatrix4(e.projectionMatrixInverse),T.multiplyScalar(1/T.w),Math.abs(Math.max(T.x,T.y))}class C extends s.eaF{constructor(e=new c,t=new p({color:0xffffff*Math.random()})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,r=e.attributes.instanceEnd,n=new Float32Array(2*t.count);for(let e=0,i=0,a=t.count;e<a;e++,i+=2)g.fromBufferAttribute(t,e),y.fromBufferAttribute(r,e),n[i]=0===i?0:n[i-1],n[i+1]=n[i]+g.distanceTo(y);let i=new s.LuO(n,2,1);return e.setAttribute("instanceDistanceStart",new s.eHs(i,1,0)),e.setAttribute("instanceDistanceEnd",new s.eHs(i,1,1)),this}raycast(e,t){let r,a,o=this.material.worldUnits,l=e.camera;null!==l||o||console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let u=void 0!==e.params.Line2&&e.params.Line2.threshold||0;n=e.ray;let f=this.matrixWorld,c=this.geometry,d=this.material;if(i=d.linewidth+u,null===c.boundingSphere&&c.computeBoundingSphere(),D.copy(c.boundingSphere).applyMatrix4(f),o)r=.5*i;else{let e=Math.max(l.near,D.distanceToPoint(n.origin));r=B(l,e,d.resolution)}if(D.radius+=r,!1!==n.intersectsSphere(D)){if(null===c.boundingBox&&c.computeBoundingBox(),U.copy(c.boundingBox).applyMatrix4(f),o)a=.5*i;else{let e=Math.max(l.near,U.distanceToPoint(n.origin));a=B(l,e,d.resolution)}U.expandByScalar(a),!1!==n.intersectsBox(U)&&(o?function(e,t){let r=e.matrixWorld,a=e.geometry,o=a.attributes.instanceStart,l=a.attributes.instanceEnd,u=Math.min(a.instanceCount,o.count);for(let a=0;a<u;a++){E.start.fromBufferAttribute(o,a),E.end.fromBufferAttribute(l,a),E.applyMatrix4(r);let u=new s.Pq0,f=new s.Pq0;n.distanceSqToSegment(E.start,E.end,f,u),f.distanceTo(u)<.5*i&&t.push({point:f,pointOnLine:u,distance:n.origin.distanceTo(f),object:e,face:null,faceIndex:a,uv:null,[m]:null})}}(this,t):function(e,t,r){let a=t.projectionMatrix,o=e.material.resolution,l=e.matrixWorld,u=e.geometry,f=u.attributes.instanceStart,c=u.attributes.instanceEnd,d=Math.min(u.instanceCount,f.count),h=-t.near;n.at(1,b),b.w=1,b.applyMatrix4(t.matrixWorldInverse),b.applyMatrix4(a),b.multiplyScalar(1/b.w),b.x*=o.x/2,b.y*=o.y/2,b.z=0,S.copy(b),_.multiplyMatrices(t.matrixWorldInverse,l);for(let t=0;t<d;t++){if(x.fromBufferAttribute(f,t),w.fromBufferAttribute(c,t),x.w=1,w.w=1,x.applyMatrix4(_),w.applyMatrix4(_),x.z>h&&w.z>h)continue;if(x.z>h){let e=x.z-w.z,t=(x.z-h)/e;x.lerp(w,t)}else if(w.z>h){let e=w.z-x.z,t=(w.z-h)/e;w.lerp(x,t)}x.applyMatrix4(a),w.applyMatrix4(a),x.multiplyScalar(1/x.w),w.multiplyScalar(1/w.w),x.x*=o.x/2,x.y*=o.y/2,w.x*=o.x/2,w.y*=o.y/2,E.start.copy(x),E.start.z=0,E.end.copy(w),E.end.z=0;let u=E.closestPointToPointParameter(S,!0);E.at(u,M);let d=s.cj9.lerp(x.z,w.z,u),p=d>=-1&&d<=1,v=S.distanceTo(M)<.5*i;if(p&&v){E.start.fromBufferAttribute(f,t),E.end.fromBufferAttribute(c,t),E.start.applyMatrix4(l),E.end.applyMatrix4(l);let i=new s.Pq0,a=new s.Pq0;n.distanceSqToSegment(E.start,E.end,a,i),r.push({point:a,pointOnLine:i,distance:n.origin.distanceTo(a),object:e,face:null,faceIndex:t,uv:null,[m]:null})}}}(this,l,t))}}onBeforeRender(e){let t=this.material.uniforms;t&&t.resolution&&(e.getViewport(v),this.material.uniforms.resolution.value.set(v.z,v.w))}}class A extends c{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){let t=e.length-3,r=new Float32Array(2*t);for(let n=0;n<t;n+=3)r[2*n]=e[n],r[2*n+1]=e[n+1],r[2*n+2]=e[n+2],r[2*n+3]=e[n+3],r[2*n+4]=e[n+4],r[2*n+5]=e[n+5];return super.setPositions(r),this}setColors(e,t=3){let r=e.length-t,n=new Float32Array(2*r);if(3===t)for(let i=0;i<r;i+=t)n[2*i]=e[i],n[2*i+1]=e[i+1],n[2*i+2]=e[i+2],n[2*i+3]=e[i+3],n[2*i+4]=e[i+4],n[2*i+5]=e[i+5];else for(let i=0;i<r;i+=t)n[2*i]=e[i],n[2*i+1]=e[i+1],n[2*i+2]=e[i+2],n[2*i+3]=e[i+3],n[2*i+4]=e[i+4],n[2*i+5]=e[i+5],n[2*i+6]=e[i+6],n[2*i+7]=e[i+7];return super.setColors(n,t),this}fromLine(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class z extends C{constructor(e=new A,t=new p({color:0xffffff*Math.random()})){super(e,t),this.isLine2=!0,this.type="Line2"}}let L=o.forwardRef(function({points:e,color:t=0xffffff,vertexColors:r,linewidth:n,lineWidth:i,segments:u,dashed:f,...d},h){var m,v;let g=(0,l.C)(e=>e.size),y=o.useMemo(()=>u?new C:new z,[u]),[x]=o.useState(()=>new p),w=(null==r||null==(m=r[0])?void 0:m.length)===4?4:3,b=o.useMemo(()=>{let n=u?new c:new A,i=e.map(e=>{let t=Array.isArray(e);return e instanceof s.Pq0||e instanceof s.IUQ?[e.x,e.y,e.z]:e instanceof s.I9Y?[e.x,e.y,0]:t&&3===e.length?[e[0],e[1],e[2]]:t&&2===e.length?[e[0],e[1],0]:e});if(n.setPositions(i.flat()),r){t=0xffffff;let e=r.map(e=>e instanceof s.Q1f?e.toArray():e);n.setColors(e.flat(),w)}return n},[e,u,r,w]);return o.useLayoutEffect(()=>{y.computeLineDistances()},[e,y]),o.useLayoutEffect(()=>{f?x.defines.USE_DASH="":delete x.defines.USE_DASH,x.needsUpdate=!0},[f,x]),o.useEffect(()=>()=>{b.dispose(),x.dispose()},[b]),o.createElement("primitive",(0,a.A)({object:y,ref:h},d),o.createElement("primitive",{object:b,attach:"geometry"}),o.createElement("primitive",(0,a.A)({object:x,attach:"material",color:t,vertexColors:!!r,resolution:[g.width,g.height],linewidth:null!=(v=null!=n?n:i)?v:1,dashed:f,transparent:4===w},d)))}),P=o.forwardRef(({threshold:e=15,geometry:t,...r},n)=>{let i=o.useRef(null);o.useImperativeHandle(n,()=>i.current,[]);let l=o.useMemo(()=>[0,0,0,1,0,0],[]),u=o.useRef(null),f=o.useRef(null);return o.useLayoutEffect(()=>{let r=i.current.parent,n=null!=t?t:null==r?void 0:r.geometry;if(!n||u.current===n&&f.current===e)return;u.current=n,f.current=e;let a=new s.TDQ(n,e).attributes.position.array;i.current.geometry.setPositions(a),i.current.geometry.attributes.instanceStart.needsUpdate=!0,i.current.geometry.attributes.instanceEnd.needsUpdate=!0,i.current.computeLineDistances()}),o.createElement(L,(0,a.A)({segments:!0,points:l,ref:i,raycast:()=>null},r))})},8379:(e,t,r)=>{var n=r(7135),i=r(5745),a="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},o=i.useSyncExternalStore,s=n.useRef,l=n.useEffect,u=n.useMemo,f=n.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,r,n,i){var c=s(null);if(null===c.current){var d={hasValue:!1,value:null};c.current=d}else d=c.current;var h=o(e,(c=u(function(){function e(e){if(!l){if(l=!0,o=e,e=n(e),void 0!==i&&d.hasValue){var t=d.value;if(i(t,e))return s=t}return s=e}if(t=s,a(o,e))return t;var r=n(e);return void 0!==i&&i(t,r)?(o=e,t):(o=e,s=r)}var o,s,l=!1,u=void 0===r?null:r;return[function(){return e(t())},null===u?void 0:function(){return e(u())}]},[t,r,n,i]))[0],c[1]);return l(function(){d.hasValue=!0,d.value=h},[h]),f(h),h}},9760:(e,t)=>{function r(e,t){var r=e.length;for(e.push(t);0<r;){var n=r-1>>>1,i=e[n];if(0<a(i,t))e[n]=t,e[r]=i,r=n;else break}}function n(e){return 0===e.length?null:e[0]}function i(e){if(0===e.length)return null;var t=e[0],r=e.pop();if(r!==t){e[0]=r;for(var n=0,i=e.length,o=i>>>1;n<o;){var s=2*(n+1)-1,l=e[s],u=s+1,f=e[u];if(0>a(l,r))u<i&&0>a(f,l)?(e[n]=f,e[u]=r,n=u):(e[n]=l,e[s]=r,n=s);else if(u<i&&0>a(f,r))e[n]=f,e[u]=r,n=u;else break}}return t}function a(e,t){var r=e.sortIndex-t.sortIndex;return 0!==r?r:e.id-t.id}if(t.unstable_now=void 0,"object"==typeof performance&&"function"==typeof performance.now){var o,s=performance;t.unstable_now=function(){return s.now()}}else{var l=Date,u=l.now();t.unstable_now=function(){return l.now()-u}}var f=[],c=[],d=1,h=null,p=3,m=!1,v=!1,g=!1,y=!1,x="function"==typeof setTimeout?setTimeout:null,w="function"==typeof clearTimeout?clearTimeout:null,b="undefined"!=typeof setImmediate?setImmediate:null;function S(e){for(var t=n(c);null!==t;){if(null===t.callback)i(c);else if(t.startTime<=e)i(c),t.sortIndex=t.expirationTime,r(f,t);else break;t=n(c)}}function _(e){if(g=!1,S(e),!v)if(null!==n(f))v=!0,E||(E=!0,o());else{var t=n(c);null!==t&&z(_,t.startTime-e)}}var E=!1,M=-1,U=5,D=-1;function T(){return!!y||!(t.unstable_now()-D<U)}function B(){if(y=!1,E){var e=t.unstable_now();D=e;var r=!0;try{e:{v=!1,g&&(g=!1,w(M),M=-1),m=!0;var a=p;try{t:{for(S(e),h=n(f);null!==h&&!(h.expirationTime>e&&T());){var s=h.callback;if("function"==typeof s){h.callback=null,p=h.priorityLevel;var l=s(h.expirationTime<=e);if(e=t.unstable_now(),"function"==typeof l){h.callback=l,S(e),r=!0;break t}h===n(f)&&i(f),S(e)}else i(f);h=n(f)}if(null!==h)r=!0;else{var u=n(c);null!==u&&z(_,u.startTime-e),r=!1}}break e}finally{h=null,p=a,m=!1}}}finally{r?o():E=!1}}}if("function"==typeof b)o=function(){b(B)};else if("undefined"!=typeof MessageChannel){var C=new MessageChannel,A=C.port2;C.port1.onmessage=B,o=function(){A.postMessage(null)}}else o=function(){x(B,0)};function z(e,r){M=x(function(){e(t.unstable_now())},r)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_next=function(e){switch(p){case 1:case 2:case 3:var t=3;break;default:t=p}var r=p;p=t;try{return e()}finally{p=r}},t.unstable_requestPaint=function(){y=!0},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var r=p;p=e;try{return t()}finally{p=r}},t.unstable_scheduleCallback=function(e,i,a){var s=t.unstable_now();switch(a="object"==typeof a&&null!==a&&"number"==typeof(a=a.delay)&&0<a?s+a:s,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=0x3fffffff;break;case 4:l=1e4;break;default:l=5e3}return l=a+l,e={id:d++,callback:i,priorityLevel:e,startTime:a,expirationTime:l,sortIndex:-1},a>s?(e.sortIndex=a,r(c,e),null===n(f)&&e===n(c)&&(g?(w(M),M=-1):g=!0,z(_,a-s))):(e.sortIndex=l,r(f,e),v||m||(v=!0,E||(E=!0,o()))),e},t.unstable_shouldYield=T,t.unstable_wrapCallback=function(e){var t=p;return function(){var r=p;p=t;try{return e.apply(this,arguments)}finally{p=r}}}},9970:(e,t,r)=>{r.d(t,{mK:()=>S,E8:()=>_,s0:()=>y,fL:()=>E,fE:()=>U});var n=r(5223),i=r(7135),a=r(8971),o=r(6034),s=r(3201);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}new a.I9Y,new a.I9Y;function u(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}var f=function e(t,r,n){var i=this;u(this,e),l(this,"dot2",function(e,t){return i.x*e+i.y*t}),l(this,"dot3",function(e,t,r){return i.x*e+i.y*t+i.z*r}),this.x=t,this.y=r,this.z=n},c=[new f(1,1,0),new f(-1,1,0),new f(1,-1,0),new f(-1,-1,0),new f(1,0,1),new f(-1,0,1),new f(1,0,-1),new f(-1,0,-1),new f(0,1,1),new f(0,-1,1),new f(0,1,-1),new f(0,-1,-1)],d=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],h=Array(512),p=Array(512);!function(e){e>0&&e<1&&(e*=65536),(e=Math.floor(e))<256&&(e|=e<<8);for(var t,r=0;r<256;r++)t=1&r?d[r]^255&e:d[r]^e>>8&255,h[r]=h[r+256]=t,p[r]=p[r+256]=c[t%12]}(0);function m(e){var t=function(e){if("number"==typeof e)e=Math.abs(e);else if("string"==typeof e){var t=e;e=0;for(var r=0;r<t.length;r++)e=(e+(r+1)*(t.charCodeAt(r)%96))%0x7fffffff}return 0===e&&(e=311),e}(e);return function(){var e=48271*t%0x7fffffff;return t=e,e/0x7fffffff}}new function e(t){var r=this;u(this,e),l(this,"seed",0),l(this,"init",function(e){r.seed=e,r.value=m(e)}),l(this,"value",m(this.seed)),this.init(t)}(Math.random());a.LoY;r(7082);let v=(0,i.createContext)(null),g=e=>(2&e.getAttributes())==2,y=(0,i.memo)((0,i.forwardRef)(({children:e,camera:t,scene:r,resolutionScale:l,enabled:u=!0,renderPriority:f=1,autoClear:c=!0,depthBuffer:d,enableNormalPass:h,stencilBuffer:p,multisampling:m=8,frameBufferType:y=a.ix0},x)=>{let{gl:w,scene:b,camera:S,size:_}=(0,o.C)(),E=r||b,M=t||S,[U,D,T]=(0,i.useMemo)(()=>{let e=new s.s0(w,{depthBuffer:d,stencilBuffer:p,multisampling:m,frameBufferType:y});e.addPass(new s.AH(E,M));let t=null,r=null;return h&&((r=new s.Xe(E,M)).enabled=!1,e.addPass(r),void 0!==l&&((t=new s.SP({normalBuffer:r.texture,resolutionScale:l})).enabled=!1,e.addPass(t))),[e,r,t]},[M,w,d,p,m,y,E,h,l]);(0,i.useEffect)(()=>U?.setSize(_.width,_.height),[U,_]),(0,o.D)((e,t)=>{if(u){let e=w.autoClear;w.autoClear=c,p&&!c&&w.clearStencil(),U.render(t),w.autoClear=e}},u?f:0);let B=(0,i.useRef)(null);(0,i.useLayoutEffect)(()=>{let e=[],t=B.current.__r3f;if(t&&U){let r=t.children;for(let t=0;t<r.length;t++){let n=r[t].object;if(n instanceof s.Mj){let i=[n];if(!g(n)){let e=null;for(;(e=r[t+1]?.object)instanceof s.Mj&&!g(e);)i.push(e),t++}let a=new s.Vu(M,...i);e.push(a)}else n instanceof s.oF&&e.push(n)}for(let t of e)U?.addPass(t);D&&(D.enabled=!0),T&&(T.enabled=!0)}return()=>{for(let t of e)U?.removePass(t);D&&(D.enabled=!1),T&&(T.enabled=!1)}},[U,e,M,D,T]),(0,i.useEffect)(()=>{let e=w.toneMapping;return w.toneMapping=a.y_p,()=>{w.toneMapping=e}},[w]);let C=(0,i.useMemo)(()=>({composer:U,normalPass:D,downSamplingPass:T,resolutionScale:l,camera:M,scene:E}),[U,D,T,l,M,E]);return(0,i.useImperativeHandle)(x,()=>U,[U]),(0,n.jsx)(v.Provider,{value:C,children:(0,n.jsx)("group",{ref:B,children:e})})})),x=0,w=new WeakMap,b=(e,t)=>function({blendFunction:r=t?.blendFunction,opacity:a=t?.opacity,...s}){let l=w.get(e);if(!l){let t=`@react-three/postprocessing/${e.name}-${x++}`;(0,o.e)({[t]:e}),w.set(e,l=t)}let u=(0,o.C)(e=>e.camera),f=i.useMemo(()=>[...t?.args??[],...s.args??[{...t,...s}]],[JSON.stringify(s)]);return(0,n.jsx)(l,{camera:u,"blendMode-blendFunction":r,"blendMode-opacity-value":a,...s,args:f})};s.Mj;let S=b(s.bv,{blendFunction:0}),_=b(s.t$),E=b(s.i,{blendFunction:5});s.hH;var M=(e=>(e[e.Linear=0]="Linear",e[e.Radial=1]="Radial",e[e.MirroredLinear=2]="MirroredLinear",e))(M||{});s.Mj;let U=b(s.K1),D=(s.To,{fragmentShader:`

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
    `});s.Mj;s.Mj;s.Mj}}]);