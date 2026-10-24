var i={name:"java",category:"logos",note:"the steaming cup, glinting now and then",cols:42,rows:28,fps:30,options:{shine:5},palette:["#ef2e2f","#0077c1","#f57778","#59a7d7","#fac0c1","#b3d6ec","#ef2e2f","#0077c1","#f57778","#59a7d7","#fac0c1","#b3d6ec"]},A=String.raw`

                          \
                          dp
                         .8P
                        _p8
                      _p8P'
                    _p88"    __-
                 _p88P"  __pP"
               _p88P'  _p8"'
              \888"  _p8P
              d88'   d88,
              "88,   888q,
               "8p   '8888,
                 Yq,   Y888
                  'Y(   d8"
        .__p=^'        )P'       ^""Oqq,
      q888__________________pp='     "88
       '""""^YYYYYYY^"""""''         q8P
          _p/              _       _p8"
          "888qqqqqqqppq88888=  _)P""
              '""""""""''
           .pq____,..______,
        _,  "88888888888888P"
  ._pd^"''       ''''''             _p
  8888qq_______,......_________ppod^"  _
     '"""""^YYPPPPPPPPPPY^""""' ___pp0"'
         '^^==ooooooooooood00OPP"""'

`,M=String.raw`

                          \
                          dp
                         .8P
                        _p8
                      _p8P'
                    _p88"    __-
                 _p88P"  __pP"
               _p88P'  _p8"'
              \888"  _p8P
              d88'   d88,
              "88,   888q,
               "8p   '8888,
                 Yq,   Y888
                  'Y(   d8"
        .__p=^'        )P'       ^""Oqq,
      q888__________________pp='     "88
       '""""^YYYYYYY^"""""''         q8P
          _p/              _       _p8"
          "888qqqqqqqppq88888=  _)P""
              '""""""""''
           .pq____,..______,
        _,  "88888888888888P"
  ._pd^"''       ''''''             _p
  8888qq_______,......_________ppod^"  _
     '"""""^YYPPPPPPPPPPY^""""' ___pp0"'
         '^^==ooooooooooood00OPP"""'

`,b=String.raw`

                          0
                          00
                         000
                        000
                      00000
                    00000    000
                 000000  00000
               000000  00000
              00000  0000
              0000   0000
              0000   00000
               000   000000
                 000   0000
                  000   000
        1111111        000       1111111
      11111111111111111111111111     111
       111111111111111111111         111
          111              1       1111
          11111111111111111111  11111
              11111111111
           11111111111111111
        11  11111111111111111
  11111111       111111             11
  11111111111111111111111111111111111  1
     11111111111111111111111111 11111111
         111111111111111111111111111

`,j=.5,E=2,s=5,d=.9,L="8dbqpPYOo0",f=a=>a.slice(1,-1).split(`
`).map(P=>P.padEnd(i.cols));function N({shine:a=i.options.shine}={}){const{cols:P,rows:w}=i,l=f(A),v=f(M),I=f(b),h=i.palette.length/6,g=a>0?Math.max(a,2.5):0;let e=1/0,c=-1/0;for(const r of[l,v])r.forEach((Y,o)=>{for(let _=0;_<P;_++)Y[_]!==" "&&(e=Math.min(e,_+d*o),c=Math.max(c,_+d*o))});const x=c-e+2*s;return(r,{paper:Y=!1,color:o}={})=>{const _=o?v:l,m=r-j,y=g&&m>=0?e-s+x*(m%g)/E:-1/0,u=[];for(let t=0;t<w;t++){let O="";for(let n=0;n<P;n++){let q=_[t][n];if(q!==" "){const S=Math.abs(n+d*t-y);let p=S<s?1-S/s:0;p=p*p*(3-2*p),p>.55&&L.includes(q)&&(q="/"),o&&(o[t*P+n]=(Y?0:3*h)+(p>.6?2:p>.25?1:0)*h+parseInt(I[t][n],36))}O+=q}u.push(O)}return u.join(`
`)}}export{N as default,i as meta};
