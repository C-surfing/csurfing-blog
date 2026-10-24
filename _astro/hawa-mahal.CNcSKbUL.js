var E={name:"hawa mahal",category:"objects",note:"jaipur's palace of winds at night, lamps behind the jali",cols:61,rows:24,fps:10},p=String.raw`
                        '
                       .^.
                 '   .-' '-.   '
                .^.  (+++++)  .^.
              __|_|__|+++++|__|_|__
              .-^-..^..-^-..^..-^-.
          '   (+++)(+)(+++)(+)(+++)   '
         .^.  |+++||+||+++||+||+++|  .^.
        _|_|__|___________________|__|_|_
        .^..^..-^-..^..-^-..^..-^-..^..^.
   '    (+)(+)(+++)(+)(+++)(+)(+++)(+)(+)    '
  .^.   |+||+||+++||+||+++||+||+++||+||+|   .^.
__|_|___|_______________________________|___|_|__
.^..-^-..^..^..-^-..^..-^-..^..-^-..^..^..-^-..^.
(+)(+++)(+)(+)(+++)(+)(+++)(+)(+++)(+)(+)(+++)(+)
|+||+++||+||+||+++||+||+++||+||+++||+||+||+++||+|
=================================================
.-..---..-..-..---..-..---..-..---..-..-..---..-.
(+)(+++)(+)(+)(+++)(+)(+++)(+)(+++)(+)(+)(+++)(+)
|+||+++||+||+||+++||+||+++||+||+++||+||+||+++||+|
/^\/'^'\/^\/^\/'^'\/^\/'^'\/^\/'^'\/^\/^\/'^'\/^\
|+||+++||+||+||+++||+||+++||+||+++||+||+||+++||+|
|+||+++||+||+||+++||+||+++||+||+++||+||+||+++||+|
|_||___||_||_||___||_||___||_||___||_||_||___||_|`.slice(1).split(`
`),j=[[0,4,.9,0],[1,15,1.3,2],[3,8,.7,4],[6,2,1.1,1],[0,53,1.2,3],[2,45,.8,5],[4,57,1,.5],[7,52,1.4,2.5]],A=.3,S=.3,$=1.8,y=[["·",":"],[":","+"],["+","#"]];function F(i){let r=i|0;return()=>{r=r+1831565813|0;let n=Math.imul(r^r>>>15,1|r);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296}}var I=(i,r)=>{let n=Math.imul(i+1,668265261)^Math.imul(r+1,374761393);return n=Math.imul(n^n>>>15,2246822507),((n^n>>>13)>>>0)/4294967296};function R(){const{cols:i,rows:r}=E,n=Math.floor((i-49)/2),f=F(8),d=Array.from({length:r},(e,_)=>{const t=[...(" ".repeat(n)+(p[_]??"")).padEnd(i)];if(_===r-1)for(let o=0;o<i;o++)t[o]===" "&&(t[o]="_");return t}),w=p.findIndex(e=>e.startsWith("="));d[w][n-1]=d[w][n+49]="=";const M=[],g=new Map;let l=0;p.forEach((e,_)=>{for(const t of e.matchAll(/\++/g)){const o=g.get(`${_-1},${t.index}`)??l++;g.set(`${_},${t.index}`,o);for(let a=0;a<t[0].length;a++)M.push([_,n+t.index+a,o,t.index+a+_&1])}});const c=new Array(l).fill(!1);for(let e=Math.round(A*l);e>0;){const _=f()*l|0;c[_]||(c[_]=!0,e--)}const u=new Float64Array(l).fill(-99);for(let e=3;e>0;){const _=f()*l|0;!c[_]&&u[_]<-9&&(u[_]=-1.8*(.3+.5*f()),e--)}let m=.2,h=0;const x=e=>{for(;m<=e;){const _=c.filter(Boolean).length/l,t=f()<.5+(A-_)*3,o=[];for(let s=0;s<l;s++)c[s]!==t&&o.push(s);const a=o[f()*o.length|0];a!==void 0&&(c[a]=t,u[a]=m),m+=.3+f()*.5}},b=e=>{const _=h-u[e];return c[e]?_<S||I(e,Math.floor(h*10+1e-6))<.03?1:2:_<.2?2:_<$?1:0};return e=>{h+=Math.min(Math.max(e-h,0),1),x(h);const _=d.map(t=>t.slice());for(const[t,o,a,s]of M)_[t][o]=y[b(a)][s];for(const[t,o,a,s]of j){const v=Math.sin(a*h+s);_[t][o]=v>.85?"*":v>-.3?"·":"."}return _.map(t=>t.join("")).join(`
`)}}export{R as default,E as meta};
