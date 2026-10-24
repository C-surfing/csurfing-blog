var f={name:"autumn",category:"companies",note:"the leaf with a slash for its vein, glinting now and then",cols:29,rows:28,fps:30,options:{shine:5},palette:["#000000","#595959","#b3b3b3","#e8ebef","#f0f2f5","#f8f9fa"]},M=String.raw`





                      ._ppp
                  __p88888b
             ._pp888888888b
         __p88888888888888b
       q888888888888888888b
      \8888888888888888888b
     _88888888888\88888888b
    _8888888888P\888888888b
   .8888888888"_8888888888b
   p88888888P'q88888888888b
  d88888888" q888888888888b
   "88888P  p8888888888888"
    '888" .p8888888888P"'
      "  _p88888888P"
        _8888888P"
       _8888P"'
      )88P"
     )P"





`,O=String.raw`





                      ._ppp
                  __p88888b
             ._pp888888888b
         __p88888888888888b
       q888888888888888888b
      \8888888888888888888b
     _88888888888\88888888b
    _8888888888P\888888888b
   .8888888888"_8888888888b
   p88888888P'q88888888888b
  d88888888" q888888888888b
   "88888P  p8888888888888"
    '888" .p8888888888P"'
      "  _p88888888P"
        _8888888P"
       _8888P"'
      )88P"
     )P"





`,E=String.raw`





                      00000
                  000000000
             00000000000000
         000000000000000000
       00000000000000000000
      000000000000000000000
     0000000000000000000000
    00000000000000000000000
   000000000000000000000000
   000000000000000000000000
  0000000000 00000000000000
   0000000  000000000000000
    00000 000000000000000
      0  000000000000
        0000000000
       00000000
      00000
     000





`,L=.5,N=2,b=5,P=.9,T="8dbqpPYOo0",h=o=>o.slice(1,-1).split(`
`).map(i=>i.padEnd(f.cols));function k({shine:o=f.options.shine}={}){const{cols:i,rows:I}=f,v=h(M),u=h(O),x=h(E),m=f.palette.length/6,d=o>0?Math.max(o,2.5):0;let s=1/0,_=-1/0;for(const c of[v,u])c.forEach((l,a)=>{for(let t=0;t<i;t++)l[t]!==" "&&(s=Math.min(s,t+P*a),_=Math.max(_,t+P*a))});const y=_-s+2*b;return(c,{paper:l=!1,color:a}={})=>{const t=a?u:v,g=c-L,A=d&&g>=0?s-b+y*(g%d)/N:-1/0,q=[];for(let e=0;e<I;e++){let w="";for(let p=0;p<i;p++){let r=t[e][p];if(r!==" "){const S=Math.abs(p+P*e-A);let n=S<b?1-S/b:0;n=n*n*(3-2*n),n>.55&&T.includes(r)&&(r="/"),a&&(a[e*i+p]=(l?0:3*m)+(n>.6?2:n>.25?1:0)*m+parseInt(x[e][p],36))}w+=r}q.push(w)}return q.join(`
`)}}export{k as default,f as meta};
