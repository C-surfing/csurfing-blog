var Y={name:"kali linux",category:"distros",note:"the blue dragon, scanned now and then",cols:71,rows:27,fps:30,options:{scan:5},palette:["#287aff","#73a9ff","#bfd7ff","#287aff","#73a9ff","#bfd7ff"]},k=String.raw`

       ''''""""""^YYY0bqqqq___,
                          '""^Y88qq__
                ___________________"Y8p
       __,ooOYYY"""""""""""""""""""YY/b
  .'"'''                 .___pppp88888O,        .
                   __pp88PY"""'        8p,       ':-_
              ._pdP""'                 _888qqqqqq___'"~_
           _oY""                     p88P"""""""Y888qp_|Y_
        .""                        _88"             ""888qq,
                                   d8"                  "888_
                                  :88                    '"Y8q_
                                  '88,                       "P"
                                   88q,
                                    O88_,
                                     "888qq_______,
                                        ""Y888888888888qpq__,
                                                    ''"^88q/Y0q_
                                                          "Yq_ "Oq,
                                                            'Oq, 'O_
                                                              "q,  "(
                                                               "b   )
                                                                ),
                                                                 \
                                                                 |
                                                                  '

`,E=String.raw`

       ''''""""""^YYY0bqqqq___,
                          '""^Y88qq__
                ___________________"Y8p
       __,ooOYYY"""""""""""""""""""YY/b
  .'"'''                 .___pppp88888O,        .
                   __pp88PY"""'        8p,       ':-_
              ._pdP""'                 _888qqqqqq___'"~_
           _oY""                     p88P"""""""Y888qp_|Y_
        .""                        _88"             ""888qq,
                                   d8"                  "888_
                                  :88                    '"Y8q_
                                  '88,                       "P"
                                   88q,
                                    O88_,
                                     "888qq_______,
                                        ""Y888888888888qpq__,
                                                    ''"^88q/Y0q_
                                                          "Yq_ "Oq,
                                                            'Oq, 'O_
                                                              "q,  "(
                                                               "b   )
                                                                ),
                                                                 \
                                                                 |
                                                                  '

`,T=String.raw`

       000000000000000000000000
                          00000000000
                00000000000000000000000
       00000000000000000000000000000000
  000000                 000000000000000        0
                   000000000000        000       0000
              00000000                 00000000000000000
           00000                     000000000000000000000
        000                        0000             00000000
                                   000                  00000
                                  000                    000000
                                  0000                       000
                                   0000
                                    00000
                                     00000000000000
                                        000000000000000000000
                                                    000000000000
                                                          0000 0000
                                                            0000 000
                                                              000  00
                                                               00   0
                                                                00
                                                                 0
                                                                 0
                                                                  0

`,y=.5,N=2,c=2,R=5,L="#$%&*+<=>?@[]{}",h=q=>q.slice(1,-1).split(`
`).map(n=>n.padEnd(Y.cols));function j(q,n,p){let _=Math.imul(q,73856093)^Math.imul(n,19349663)^Math.imul(p,83492791);return _=Math.imul(_^_>>>13,1274126177),(_^_>>>16)>>>0}function D({scan:q=Y.options.scan}={}){const{cols:n,rows:p,fps:_}=Y,u=h(k),O=h(E),g=h(T),d=Y.palette.length/6,m=q>0?Math.max(q,2.5):0;let s=p,e=-1;for(const i of[u,O])i.forEach((f,a)=>{f.trim()&&(s=Math.min(s,a),e=Math.max(e,a))});const w=e-s+1+c+R;return(i,{paper:f=!1,color:a}={})=>{const x=a?O:u,v=i-y,A=m&&v>=0?s+w*(v%m)/N:-1/0,I=Math.floor(i*_/2),b=[];for(let t=0;t<p;t++){const r=A-t,M=r>=0&&r<c?2:r>=c&&r<7?1:0;let P="";for(let o=0;o<n;o++){let l=x[t][o];if(l!==" "){if(M===2){const S=j(o,t,I);S%4&&(l=L[(S>>>2)%15])}a&&(a[t*n+o]=(f?0:3*d)+M*d+parseInt(g[t][o],36))}P+=l}b.push(P)}return b.join(`
`)}}export{D as default,Y as meta};
