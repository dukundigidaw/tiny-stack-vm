import{mkdirSync as m,readdirSync as l,readFileSync as r,writeFileSync as w}from'node:fs';
import{join as j}from'node:path';
const T='0Aq46:;?oooooooo999999959995999o999oooooooooooooPTTP0ooooooooooo58oooooooooooooo4414',E=new TextEncoder();
function run(p,g){
const S=new Int32Array(256),K=new Int32Array(64),M=new Int32Array(256),U=new Uint8Array(65536);
let s=0,k=0,u=0,i=0,q=0,t=0,x,c,h,a,b;
const f=e=>({o:U.slice(0,u),e});
for(;;){
if(t==1e6)return f(10);
if(q<0||q>=p.length)return f(9);
c=T.charCodeAt(x=p[q])-48;
if(c==63||x>83)return f(5);
h=c>>4;
if(q+h>=p.length)return f(9);
t++;
if(s<(a=(c>>2)&3))return f(2);
if(s-a+(c&3)>256)return f(3);
q+=1+h;
if(x<8){
if(!x)return f(0);
if(x<3)S[s++]=x==1?(p[q-1]<<24)>>24:p[q-4]|p[q-3]<<8|p[q-2]<<16|p[q-1]<<24;
else if(x==3)s--;
else if(x==4)S[s]=S[s-1],s++;
else if(x==5){a=S[s-1];S[s-1]=S[s-2];S[s-2]=a;}
else if(x==6)S[s]=S[s-2],s++;
else{a=S[s-3];S[s-3]=S[s-2];S[s-2]=S[s-1];S[s-1]=a;}
}else if(x<35){
if(x==23)S[s-1]=-S[s-1];
else if(x==27)S[s-1]=~S[s-1];
else{
b=S[s-1];a=S[s-2];
if(x>18&&x<23&&!b)return f(4);
S[s-2]=[a+b,a-b,Math.imul(a,b),a/b|0,a%b|0,(a>>>0)/(b>>>0)|0,(a>>>0)%(b>>>0)|0,a&b,a|b,a^b,a<<(b&31),a>>(b&31),a>>>(b&31),a==b|0,a<b|0,(a>>>0)<(b>>>0)|0][x-16-(x>23)-(x>27)-(x>31)];
s--;
}
}else if(x<53){
if(x<51){if(x==48||(x==49)==(S[--s]==0))q+=((p[q-2]|p[q-1]<<8)<<16>>16);}
else if(x==51){if(k==64)return f(7);K[k++]=q;q=p[q-2]|p[q-1]<<8;}
else{if(!k)return f(8);q=K[--k];}
}else if(x<66){
a=S[s-1];
if(a<0||a>255)return f(6);
if(x==64)S[s-1]=M[a];else{M[a]=S[s-2];s-=2;}
}else{
if(x==80){b=E.encode(S[s-1]+'');if(u+b.length>65536)return f(11);s--;U.set(b,u);u+=b.length;}
else if(x==81){if(u>=65536)return f(11);U[u++]=S[--s]&255;}
else if(x==82)S[s++]=i<g.length?g[i++]:-1;
else return f(S[--s]&255);
}
}
}
const I=process.env.MAKEFUN_INPUT_DIR||'/input',O=process.env.MAKEFUN_OUTPUT_DIR||'/output';
for(const d of l(I).sort()){
const z=run(r(j(I,d,'program.bin')),r(j(I,d,'input.bin')));
m(j(O,d),{recursive:true});
w(j(O,d,'stdout.bin'),z.o);
w(j(O,d,'exit.txt'),z.e+'\n');
}
