var v={name:"helmcode",category:"companies",note:"the helmcode hexagon in its violet, glinting now and then",cols:53,rows:30,fps:30,options:{shine:5},palette:["#4934e1","#897beb","#c8c2f6","#8071ea","#aca3f1","#d9d4f9"]},y=String.raw`

                      _qq888pp_
                  _qq88888888888pp_
               _q8888888888888888888p_
           _qq8888888888888888888888888pp_
        _q888888888888888888888888888888888p_
    _qq8888888888888888PPP'PP88888888888888888pp_
   q8888888888888888PP'       ^PP8888888888888888p
  q8888888888888PP'              'PP88888888888888p
  8888888888PP^                      ^PP88888888888
  888888888p_                           'PP88888888
  888888888888p_                           q8888888
  888888888888888pp_                       q8888888
  8888888888888888888pp_                   q8888888
  8888888888888888888888pp_                q8888888
  888888888888888888888888b                q8888888
  888888888888888888888888b                q8888888
  888888888888888888888888b                q8888888
  888888888888888888888888b                q8888888
  888888888888888888888888b              _qq8888888
  888888888888888888888888b           _qq8888888888
  P88888888888888888888888b       _qq8888888888888P
   P8888888888888888888888b    _qq888888888888888P
    'PP8888888888888888888b_qq8888888888888888PP'
        ^P888888888888888888888888888888888P^
           'PP8888888888888888888888888PP'
               PP8888888888888888888PP
                  ^PP88888888888PP'
                      PPP888PPP

`,A=.5,S=2,s=5,r=.9,w="8dbqpPY";function I({shine:_=v.options.shine}={}){const{cols:o,rows:u}=v,l=y.slice(1,-1).split(`
`).map(n=>n.padEnd(o)),f=_>0?Math.max(_,2.5):0;let p=1/0,c=-1/0;l.forEach((n,q)=>{for(let P=0;P<o;P++)n[P]!==" "&&(p=Math.min(p,P+r*q),c=Math.max(c,P+r*q))});const x=c-p+2*s;return(n,{paper:q=!1,color:P}={})=>{const h=n-A,g=f&&h>=0?p-s+x*(h%f)/S:-1/0,b=[];for(let e=0;e<u;e++){let d="";for(let a=0;a<o;a++){let i=l[e][a];if(i!==" "){const m=Math.abs(a+r*e-g);let t=m<s?1-m/s:0;t=t*t*(3-2*t),t>.55&&w.includes(i)&&(i="/"),P&&(P[e*o+a]=(q?0:3)+(t>.6?2:t>.25?1:0))}d+=i}b.push(d)}return b.join(`
`)}}export{I as default,v as meta};
