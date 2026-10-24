var i={name:"debian",category:"distros",note:"the red swirl, scanned now and then",cols:46,rows:28,fps:30,options:{scan:5},palette:["#a80030","#c65978","#e5b3c1","#c20037","#d7597d","#edb3c3"]},E=String.raw`

                 _pppqq____q__
             _pp888888888888888qpqp,
          _p888888888PPPPYP8888888888q,
        _p8888888P"            "Y888888q,
       p888888"                   "888888p
   _  q888P"                        Y88888p
    _p88P"                           )888"O
  ,_888"             ._pp0OOo(,       O888 :
  'd88P             q8"'      ''      "888,
  q88P            .pP                  888,
  |88P            qP             ,     888"
  q88|            8|                  '88P
  |88'            8b           _.     q88'
  d88.            )8p      __        q88'
  |88p           ~,"8q,            _p8Y
  '88b            ""("8q__    __pq8P"
   d88,              "YdPP88888P""'
   '8888p                '"^^'
    "888q
     "888p
      '888p
        "88q,
         'Y88q_
           'Y88q,
              "Y8qq_
                 '"YOo___,

`,T=String.raw`

                 __ppqq____q__
             _pp888888888888888qpqp,
          _p888888888PPPPYP8888888888q,
        _p8888888P"            "Y888888q,
       p888888"                   "888888p
   _  q8888"                        Y88888p
    _p888"                           )888"O
  ,_888"             ._pp0OOo(,       O888 :
  'd88P             q8"'      ''      "888,
  q888            .pP                  888,
  |88P            qP             ,     888"
  |88|            8|                  '88P
  |88'            8b           _.     q88'
  |88,            )8p      __        q88'
  |88p           ~,"8q,            _p8Y
  '88b            ""("8q__    __pq88"
   d88,              "YdPP88888PY"'
   '8888p                '"^^'
    "888q'
     "888p
      '888p
        "88q,
         'Y88q_
           'Y88q,
              "Y8qq_
                 '"YOo___,

`,y=String.raw`

                 0000000000000
             00000000000000000000000
          00000000000000000000000000000
        00000000000            0000000000
       00000000                   00000000
   0  000000                        0000000
    000000                           000000
  000000             0000000000       0000 0
  00000             0000      00      00000
  0000            000                  0000
  0000            00             0     0000
  0000            00                  0000
  0000            00           00     0000
  0000            000      00        0000
  0000           000000            0000
  0000            00000000    0000000
   0000              00000000000000
   000000                00000
    000000
     00000
      00000
        00000
         000000
           000000
              000000
                 000000000

`,N=.5,R=2,d=2,k=5,j="#$%&*+<=>?@[]{}",f=_=>_.slice(1,-1).split(`
`).map(n=>n.padEnd(i.cols));function D(_,n,o){let p=Math.imul(_,73856093)^Math.imul(n,19349663)^Math.imul(o,83492791);return p=Math.imul(p^p>>>13,1274126177),(p^p>>>16)>>>0}function H({scan:_=i.options.scan}={}){const{cols:n,rows:o,fps:p}=i,Y=f(E),h=f(T),S=f(y),O=i.palette.length/6,m=_>0?Math.max(_,2.5):0;let s=o,P=-1;for(const e of[Y,h])e.forEach((c,a)=>{c.trim()&&(s=Math.min(s,a),P=Math.max(P,a))});const g=P-s+1+d+k;return(e,{paper:c=!1,color:a}={})=>{const A=a?h:Y,u=e-N,I=m&&u>=0?s+g*(u%m)/R:-1/0,x=Math.floor(e*p/2),v=[];for(let t=0;t<o;t++){const r=I-t,M=r>=0&&r<d?2:r>=d&&r<7?1:0;let b="";for(let q=0;q<n;q++){let l=A[t][q];if(l!==" "){if(M===2){const w=D(q,t,x);w%4&&(l=j[(w>>>2)%15])}a&&(a[t*n+q]=(c?0:3*O)+M*O+parseInt(S[t][q],36))}b+=l}v.push(b)}return v.join(`
`)}}export{H as default,i as meta};
