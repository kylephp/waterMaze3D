!function(){var E=!0,M="ontouchstart"in document;function h(e,t,r){var a=Math.max(0,Math.min(1,(r-e)/(t-e)));return a*a*(3-2*a)}function R(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function D(e,t){var r=e[0]-t[0],a=e[1]-t[1],n=e[2]-t[2];return Math.sqrt(r*r+a*a+n*n)}function s(e,t){return e[t]||(e[t]=d.getUniformLocation(e[0],t))}function e(){var e=d.createTexture();return d.bindTexture(d.TEXTURE_2D,e),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_MIN_FILTER,d.NEAREST),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_MAG_FILTER,d.NEAREST),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_WRAP_S,d.CLAMP_TO_EDGE),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_WRAP_T,d.CLAMP_TO_EDGE),e}var d=c.getContext("webgl")||c.getContext("experimental-webgl"),t=Math.min(window.screen&&Math.min(screen.width,screen.height)||500,500),r=t,a=t,n=(Math.random(),M?1:devicePixelRatio),i=r*n,o=a*n;c.width=i,c.height=o,c.style.width=r+"px",c.style.height=a+"px";d.viewport(0,0,i,o),d.pixelStorei(d.UNPACK_FLIP_Y_WEBGL,!0);var u=d.createBuffer();d.bindBuffer(d.ARRAY_BUFFER,u),d.bufferData(d.ARRAY_BUFFER,new Float32Array([-1,-1,-1,4,4,-1]),d.STATIC_DRAW);for(var f,m,v,x=function(e,t){var r,a=d.VERTEX_SHADER,n=e;r=d.createShader(a),d.shaderSource(r,n),d.compileShader(r);var i=r;if(E&&!d.getShaderParameter(r,d.COMPILE_STATUS))throw d.getShaderInfoLog(r);a=d.FRAGMENT_SHADER,n=t,r=d.createShader(a),d.shaderSource(r,n),d.compileShader(r);var o=r;if(E&&!d.getShaderParameter(r,d.COMPILE_STATUS))throw d.getShaderInfoLog(r);var c=d.createProgram();if(d.attachShader(c,i),d.attachShader(c,o),d.linkProgram(c),E&&!d.getProgramParameter(c,d.LINK_STATUS))throw d.getProgramInfoLog(c);d.useProgram(c);var u=d.getAttribLocation(c,"p");return d.enableVertexAttribArray(u),d.vertexAttribPointer(u,2,d.FLOAT,!1,0,0),[c]}("attribute vec2 p;varying vec2 uv;void main(){gl_Position=vec4(p,0.0,1.0);uv=p;}","precision highp float;varying vec2 uv;uniform sampler2D mapT;uniform float time,hurry,boot,dead,boom;uniform vec3 key,marble,mapDim;uniform mat3 cubeR;vec3 a;float b(float c,float d){return min(c,d);}vec2 b(vec2 c,vec2 d){return mix(c,d,step(d.x,c.x));}float e(vec2 f){return min(f.x,f.y);}float e(vec3 f){return min(min(f.x,f.y),f.z);}float g(vec3 f){return max(max(f.x,f.y),f.z);}vec3 h(inout vec3 i,vec3 j){vec3 k=floor((i+j*0.5)/j);i=mod(i+j*0.5,j)-j*0.5;return k;}float l(vec3 i,vec2 m){vec2 n=abs(vec2(length(i.xz),i.y))-m;return min(max(n.x,n.y),0.0)+length(max(n,0.0));}float o(vec3 i,vec3 p){return g(abs(i)-p);}float q(vec3 i,float r){return length(i)-r;}float s(vec3 t){return texture2D(mapT,vec2((t[2]+mapDim[2]*(t[1]+mapDim[1]*t[0])+0.5)/(mapDim[0]*mapDim[1]*mapDim[2]),0.5)).r;}vec3 u;vec2 v(vec3 i,float f,vec3 t){f*=2.;float w=floor(f);f-=w;f*=2.;float x=floor(f);f-=x;f*=2.;float y=floor(f);f-=y;f*=2.;float z=floor(f);f-=z;f*=2.;float A=floor(f);f-=A;f*=2.;float B=floor(f);float C=0.03*hurry;float D=0.18;float E=D;float F=0.3;i-=C*u;float r=q(i,E);r=mix(r,b(r,l(i-vec3(0.0,0.25,0.0),vec2(D,0.25))),y);r=mix(r,b(r,l(i-vec3(0.0,-0.25,0.0),vec2(D,0.25))),z);r=mix(r,b(r,l(i.yxz-vec3(0.0,-0.25,0.0),vec2(D,0.25))),x);r=mix(r,b(r,l(i.yxz-vec3(0.0,0.25,0.0),vec2(D,0.25))),w);r=mix(r,b(r,l(i.yzx-vec3(0.0,0.25,0.0),vec2(D,0.25))),A);r=mix(r,b(r,l(i.yzx-vec3(0.0,-0.25,0.0),vec2(D,0.25))),B);return vec2(r,0.99*smoothstep(0.6,0.3,length((i+t-marble)/mapDim)));}vec2 G(vec3 i){float H=o(i-mapDim/2.+0.5,mapDim/2.-0.5);vec2 n=vec2(99.,0.0);float I=time*floor(1.+5.*hurry);float J=3.;u=vec3(cos(J*i.y+I),sin(J*i.z+I),cos(J*i.x+I));if(H<=.5){vec3 t=h(i,vec3(1.0));float K=s(t);if(K!=0.){n=b(n,v(i,K,t));}else{n=b(n,vec2(0.03+e(vec3(mix(0.5-i.x,0.5+i.x,step(0.,a.x)),mix(0.5-i.y,0.5+i.y,step(0.,a.y)),mix(0.5-i.z,0.5+i.z,step(0.,a.z)))/(1.0+a)),0.));}}else{n=vec2(H,0.0);}return n;}vec2 L(vec3 i,float M){float I=3.*time+M;float J=10.+M;float N=0.03+.02*M;return vec2(q(i+N*vec3(cos(J*i.x+I),sin(J*i.y+I),cos(J*i.z+I)),0.4),M*1.2);}vec2 O(vec3 i){i.z-=2.2*mapDim.z;vec2 n=vec2(30.0-i.z,0.0);i=cubeR*i;i+=mapDim/2.0-0.5;n=b(n,G(i));n=b(n,L(i-marble,1.+3.*boom));n=b(n,L(i-key,0.+4.*boom));n.x*=1.-2.*boot+3.*boot*boot;n.x+=boom*boom;return n;}vec3 P(float Q,vec3 R){return mix(vec3(0.9),vec3(0.3,0.7,1.1),Q*Q*0.6);}float S(float Q){return 0.2+0.4*step(3.,Q)*step(Q,3.999);}vec2 T(vec3 a){int U=12+int(60.*(1.-dead)*(1.-hurry*hurry)*(1.+.1*cos(mix(2.*time,20.*time,hurry))));float V=0.1;vec2 W;for(int X=0;X<60;++X){vec3 i=a*V;W=O(i);V+=W.x;if(W.x<0.002||X>U) return vec2(V,W.y);}return vec2(V,W.y);}vec3 Y(vec3 i){return normalize(vec3(O(i+vec3(.01,0.,0.)).x-O(i-vec3(.01,0.,0.)).x,O(i+vec3(0.,.01,0.)).x-O(i-vec3(0.,.01,0.)).x,O(i+vec3(0.,0.,.01)).x-O(i-vec3(0.,0.,.01)).x));}void main(){a=normalize(vec3(uv,2.5));vec2 W=T(a);float Z=W.y;float ba=W.x;vec3 bb=a*ba;vec3 R=Y(bb);vec3 bc=normalize(vec3(0.1,0.3,-1.0));gl_FragColor=vec4(mix(P(Z,R)*(.1+mix(vec3(1.),vec3(1.,.0,.0),dead)*(mix(dot(bc,R),1.,.8)+pow(dot(-a,normalize(reflect(bc,R))),4.)*S(Z))),vec3(1.),smoothstep(8.0,22.0,ba)),1.0);}"),b=e(),y={},l=0;l<99;++l)y[l]=0;function p(e){for(var t=0;t<e.length;t++)if(e[t].identifier===f)return e[t];return null}function T(e){return[e.clientX,e.clientY]}function g(e,t){var r=Math.floor(t/e[2]),a=t-r*e[2];return t=r,[r=Math.floor(t/e[1]),t-r*e[1],a]}function A(e,t){return(t[0]*e[1]+t[1])*e[2]+t[2]}function _(e,t){return[e[0]+t[0],e[1]+t[1],e[2]+t[2]]}M?(addEventListener("touchstart",function(e){if(!f){e.preventDefault();var t=e.changedTouches[0];f=t.identifier,Date.now(),m=T(t)}}),addEventListener("touchmove",function(e){var t=p(e.changedTouches);t&&(e.preventDefault(),v=T(t))}),addEventListener("touchend",function(e){p(e.changedTouches)&&(e.preventDefault(),v=f=m=null)}),addEventListener("touchcancel",function(e){p(e.changedTouches)&&(e.preventDefault(),v=f=m=null)})):(addEventListener("keydown",function(e){37<=e.which&&e.which<=40&&e.preventDefault(),y[e.which]=1}),addEventListener("keyup",function(e){37<=e.which&&e.which<=40&&e.preventDefault(),y[e.which]=0}));var S=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]];function L(o,c){return S.map(function(e){return t=o.map,r=c,a=e,n=A(t.dim,r),i=A(t.dim,_(r,a)),function(e,t,r){if(r<t){var a=t;t=r,r=a}return e.some(function(e){return e[0]===t&&e[1]===r})}(t.e,n,i)?1:0;var t,r,a,n,i})}function w(e){var t=function(e){var t=Math.round(2+2*Math.log(1+.3*e)),r=1-Math.exp(-.05*e),a=[t,t,t],n=a[0]*a[1]*a[2],v=[];function l(e){return A(a,e)}function i(e){return 0<=e[0]&&e[0]<a[0]&&0<=e[1]&&e[1]<a[1]&&0<=e[2]&&e[2]<a[2]}function h(t){return S.map(function(e){return _(t,e)}).filter(i)}function o(e){return Math.floor(e*Math.random())}var s=[],c=a.map(o);function u(){for(var e=0;e<100;e++){var t=o(n);if(-1===s.indexOf(t))return t}return o(n)}function f(e,t,r,a){var n;s.push(l(e));var i,o,c,u,f=[];for(n=0;n<r;n++){var m=h(e).map(function(e){var t=l(e);return{pos:e,i:t,explored:-1!==s.indexOf(t),random:Math.random()}}).sort(function(e,t){return 9*(e.explored-t.explored)+e.random-t.random})[0];if(m.explored&&Math.random()>a)break;m.explored||s.push(m.i),i=f,o=l(e),c=m.i,u=c<o?[c,o]:[o,c],i.push(u),e=m.pos}return t<=f.length&&(v=v.concat(f)),n}f(c,0,0===e?Math.round(3+3*Math.random()):Math.floor(n*Math.max(.1,.8+.6*Math.random()-Math.random()*Math.random()*Math.random()-.4*r)),1);for(var m=g(a,s[Math.floor(2+(s.length-3)/2)]),d=0===e?0:Math.floor((.5*(Math.random()-.5)+r)*n),x=0;x<10&&0<d;x++)d-=f(g(a,u()),10,10+Math.random()*d,.3);return{e:v,k:c,i:m,dim:a}}(e);return{acc:0,level:e,status:1,statusChangeT:0,gameTime:30+20*t.dim[0],map:t,marble:t.i,cubeR:[1,0,0,0,1,0,0,0,1]}}function U(U,e,P){(U=Object.assign({},U)).statusChangeT+=P;var t,r,i,o,a,n,c,u,f,m,v,l=U.level;if(2===U.status&&3<U.statusChangeT&&(U=w(l+1)),E&&y[32]&&(!l||3<U.statusChangeT)&&((U=w(l+1)).statusChangeT=2.5),1===U.status){t=0===l?document.title:"Level "+l,r=0===l?M?"Drag to rotate, try to deliver the drop to the end of pipe":"Arrows + Shift / XBox controller":"",U.gameTime-=P,U.gameTime<30&&(r=Math.ceil(U.gameTime)),U.cubeR=U.cubeR.slice(0);e.d.forEach(function(e,t){if(e){var r,a,n,i,o,c,u,f,m,v,l,h,s,d,x,b,p,T,g,E,M,R,D,y,A,_,S,L,w=[0,0,0];w[2-t]=1,r=U.cubeR,a=U.cubeR,R=4*P*e,y=(D=w)[0],A=D[1],_=D[2],S=Math.cos(R),L=Math.sin(R),n=[y*y*(1-S)+S,y*A*(1-S)-_*L,y*_*(1-S)+A*L,y*A*(1-S)+_*L,A*A*(1-S)+S,A*_*(1-S)-y*L,y*_*(1-S)-A*L,A*_*(1-S)+y*L,_*_*(1-S)+S],i=a[0],o=a[1],c=a[2],u=a[3],f=a[4],m=a[5],v=a[6],l=a[7],h=a[8],s=n[0],d=n[1],x=n[2],b=n[3],p=n[4],T=n[5],g=n[6],E=n[7],M=n[8],r[0]=s*i+d*u+x*v,r[1]=s*o+d*f+x*l,r[2]=s*c+d*m+x*h,r[3]=b*i+p*u+T*v,r[4]=b*o+p*f+T*l,r[5]=b*c+p*m+T*h,r[6]=g*i+E*u+M*v,r[7]=g*o+E*f+M*l,r[8]=g*c+E*m+M*h}});var h=[];n=h,c=[0,-1,0],u=U.cubeR,f=c[0],m=c[1],v=c[2],n[0]=f*u[0]+m*u[3]+v*u[6],n[1]=f*u[1]+m*u[4]+v*u[7],n[2]=f*u[2]+m*u[5]+v*u[8];var s=U.marble.map(Math.floor),d=U.marble.map(Math.ceil),x=D(s,U.marble),b=L(U,s);L(U,d);if(0===x){var p=(a=h,S.map(function(e,t){return{dot:R(a,e),a:e,i:t}}).sort(function(e,t){return t.dot-e.dot})).filter(function(e){return b[e.i]})[0];p&&0<p.dot?U.marble=p.a.map(function(e,t){return s[t]+.001*e}):U.acc=0}else{var T=R(s.map(function(e,t){return e-d[t]}),h);U.acc=(U.acc+.003)*(.9+.1*Math.abs(T));var g=Math.max(0,Math.min(x-U.acc*T,1));U.marble=(i=d,o=g,s.map(function(e,t){return r=e,a=i[t],n=o,r===a?r:r*(1-n)+a*n;var r,a,n}))}D(U.marble,U.map.k)<.01?(U.status=2,U.statusChangeT=0):U.gameTime<=0&&(U.status=3,U.statusChangeT=0)}return 2===U.status&&(t="Well done!"),3===U.status&&(t="Game over!",r="Tap to restart"),U.text=t,U.subtext=r,U}var P=requestAnimationFrame(N);function C(e,t){return Math.abs(e)<t?0:e}E&&console.log("DEBUG on");var I,z,F,X=0,O=w(0);function N(e){P=requestAnimationFrame(N),z||(z=e),I=Math.min(100,e-z),z=e,X+=I,W(O,null);var t=O;W(O=U(t,function(){var e=(y[39]||y[68])-(y[37]||y[65]||y[81]),t=(y[40]||y[83])-(y[38]||y[87]||y[90]),r=y[16]?[e,0,t]:[0,e,t],a=navigator.getGamepads?navigator.getGamepads():[];if(a[0]){var n=a[0].axes,i=a[0].buttons;2<=n.length&&(r[1]+=C(n[0],.2),r[2]+=C(n[1],.2)),4<=n.length&&(r[0]+=C(n[2],.2),r[2]+=C(n[3],.2)),7<i.length&&(r[0]+=i[7].value-i[6].value)}if(m&&v){var o=v[0]-m[0],c=v[1]-m[1];r[1]-=o/100,r[2]-=c/100}return{d:r}}(),I/1e3),t)}function W(e,t){var r;d.bindFramebuffer(d.FRAMEBUFFER,null),r=x,d.useProgram(r[0]);var a,n,i=e.status,o=e.map;if(t&&e.text===t.text||($t.textContent=e.text),t&&e.subtext===t.subtext||($f.textContent=e.subtext||" "),!t||o!==t.map){var c=o.dim[0]*o.dim[1]*o.dim[2];F=new Uint8Array(c);for(var u=0;u<c;u++)F[u]=L(e,g(o.dim,u)).reduce(function(e,t){return e<<1|t},0)<<2;a=b,n=0,d.activeTexture(d.TEXTURE0+n),d.bindTexture(d.TEXTURE_2D,a),d.texImage2D(d.TEXTURE_2D,0,d.LUMINANCE,F.length,1,0,d.LUMINANCE,d.UNSIGNED_BYTE,F),d.uniformMatrix3fv(s(x,"cubeR"),!1,e.cubeR),d.uniform3fv(s(x,"key"),o.k),d.uniform3fv(s(x,"marble"),e.marble),d.uniform1i(s(x,"mapT"),0),d.uniform3fv(s(x,"mapDim"),o.dim),d.uniform1f(s(x,"time"),X/1e3);var f=0,m=0,v=0,l=0;1===i&&(f=h(30,0,e.gameTime),m=h(3,0,e.gameTime),v=h(3,0,e.statusChangeT)),2===i&&(l=h(0,3,e.statusChangeT)),3===i&&(m=f=1),d.uniform1f(s(x,"hurry"),f),d.uniform1f(s(x,"dead"),m),d.uniform1f(s(x,"boot"),v),d.uniform1f(s(x,"boom"),l),d.drawArrays(d.TRIANGLES,0,3)}}$f.addEventListener("touchstart",function(e){e.preventDefault(),P&&" "!==$f.textContent&&(X=0,O=w(1),cancelAnimationFrame(P),P=requestAnimationFrame(N))})}();