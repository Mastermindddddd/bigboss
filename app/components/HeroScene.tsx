'use client';

import { useEffect, useRef, type CSSProperties } from 'react';
import { Activity, Layers3, Network, ShieldCheck } from 'lucide-react';

const scenes={
  home:{color:'#e7b279',secondary:'#ef4558',mode:'globe',eyebrow:'CONNECTED THINKING',title:'Ideas become systems.',cards:['People & purpose','Strategy & execution','Technology & impact']},
  about:{color:'#e8b788',secondary:'#e5596d',mode:'orbit',eyebrow:'THE BIGBOSS PERSPECTIVE',title:'Built around people.',cards:['A shared ambition','Connected capabilities','A stronger tomorrow']},
  services:{color:'#edb46d',secondary:'#d84058',mode:'wave',eyebrow:'ONE CONNECTED PRACTICE',title:'From insight to execution.',cards:['Understand the challenge','Design the response','Deliver the change']},
  products:{color:'#e9c284',secondary:'#b895e1',mode:'orbit',eyebrow:'KNOWLEDGE IN MOTION',title:'Tools for what comes next.',cards:['Practical frameworks','Executive resources','Ideas you can apply']},
  impact:{color:'#dcbf7b',secondary:'#6ccbb8',mode:'globe',eyebrow:'PROGRESS HAS A PURPOSE',title:'Potential into possibility.',cards:['People empowered','Systems strengthened','Regional opportunity']},
  partnerships:{color:'#e6c178',secondary:'#74c7d8',mode:'globe',eyebrow:'A SHARED DIRECTION',title:'Connect. Build. Grow.',cards:['Shared ambition','Complementary strengths','Long-term value']},
  careers:{color:'#e9b993',secondary:'#b8a1e4',mode:'wave',eyebrow:'PEOPLE MAKE IT POSSIBLE',title:'Your next chapter.',cards:['Bring your perspective','Build your capability','Create lasting impact']},
  contact:{color:'#edb07e',secondary:'#6bc6d3',mode:'orbit',eyebrow:'THE NEXT CONVERSATION',title:'A connection starts here.',cards:['Your challenge','Our perspective','A practical way forward']},
  digital:{color:'#5ddce7',secondary:'#e4bc78',mode:'globe',eyebrow:'DIGITAL INTELLIGENCE',title:'Connected by design.',cards:['Data architecture','AI & applications','Decision intelligence']},
} as const;
export type HeroVariant=keyof typeof scenes;

export default function HeroScene({variant,embedded=false,contained=false}:{variant:HeroVariant;embedded?:boolean;contained?:boolean}) {
  const canvasRef=useRef<HTMLCanvasElement>(null);const rootRef=useRef<HTMLDivElement>(null);const scene=scenes[variant];
  useEffect(()=>{
    const canvas=canvasRef.current;const root=rootRef.current;if(!canvas||!root)return;
    const context=canvas.getContext('2d');if(!context)return;
    const section=root.closest('section')??root;
    const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
    let width=600,height=520,frame=0,visible=true,last=0,disposed=false;
    const pointer={x:0,y:0},smooth={x:0,y:0};
    function resize(){if(!canvas||!root)return;const bounds=root.getBoundingClientRect();width=Math.max(1,bounds.width);height=Math.max(1,bounds.height);const ratio=Math.min(window.devicePixelRatio||1,1.5);canvas.width=width*ratio;canvas.height=height*ratio;context!.setTransform(ratio,0,0,ratio,0,0);draw(0);}
    function project(x:number,y:number,z:number,time:number){const a=time*.09+smooth.x*.25,b=.32+smooth.y*.2;const rx=x*Math.cos(a)+z*Math.sin(a),rz=-x*Math.sin(a)+z*Math.cos(a);const ry=y*Math.cos(b)-rz*Math.sin(b),depth=y*Math.sin(b)+rz*Math.cos(b);const scale=520/(650-depth);return {x:width*.52+rx*scale,y:height*.48+ry*scale,z:depth,scale};}
    function draw(time:number){if(!context)return;context.clearRect(0,0,width,height);smooth.x+=(pointer.x-smooth.x)*.05;smooth.y+=(pointer.y-smooth.y)*.05;const size=Math.min(width*.4,height*.37,240);const points:{x:number;y:number;z:number;scale:number}[]=[];const columns=24,rows=13;
      for(let row=0;row<rows;row++)for(let col=0;col<columns;col++){const u=col/columns*Math.PI*2,v=row/(rows-1)*Math.PI;let x:number,y:number,z:number;
        if(scene.mode==='globe'){x=size*Math.sin(v)*Math.cos(u);y=size*Math.cos(v);z=size*Math.sin(v)*Math.sin(u);}
        else if(scene.mode==='orbit'){const r=size*.72+Math.cos(v*2)*size*.24;x=r*Math.cos(u);y=Math.sin(v*2)*size*.36;z=r*Math.sin(u);}
        else{x=(col/(columns-1)-.5)*size*2;y=Math.sin(col*.35+row*.4+time*.5)*size*.17+(row/(rows-1)-.5)*size*.75;z=(row/(rows-1)-.5)*size*1.5;}
        points.push(project(x,y,z,time));}
      context.lineWidth=.65;points.forEach((point,index)=>{const col=index%columns,row=Math.floor(index/columns);for(const next of [col<columns-1?index+1:row*columns,row<rows-1?index+columns:-1]){if(next<0)continue;const p=points[next];context!.globalAlpha=.07+(point.z+size)/(size*2)*.17;context!.strokeStyle=scene.color;context!.beginPath();context!.moveTo(point.x,point.y);context!.lineTo(p.x,p.y);context!.stroke();}});
      points.forEach((point,index)=>{if(index%5!==0)return;context!.globalAlpha=.18+(point.z+size)/(size*2)*.5;context!.fillStyle=index%3===0?scene.secondary:scene.color;context!.beginPath();context!.arc(point.x,point.y,index%17===0?2.2:1,0,Math.PI*2);context!.fill();});
      const count=width<500?5:10;for(let i=0;i<count;i++){const position=(time*.028+i/count)%1;const index=Math.floor(position*(points.length-1));const p=points[index];context.globalAlpha=.85;context.fillStyle=i%2?scene.color:scene.secondary;context.shadowColor=scene.color;context.shadowBlur=13;context.beginPath();context.arc(p.x,p.y,2.1,0,Math.PI*2);context.fill();context.shadowBlur=0;}
      context.globalAlpha=1;
    }
    function tick(timestamp:number){frame=0;if(disposed||!visible||document.hidden)return;if(timestamp-last>32){last=timestamp;draw(reduced.matches?0:timestamp/1000);}if(!reduced.matches)frame=requestAnimationFrame(tick);}
    function start(){cancelAnimationFrame(frame);if(!document.hidden&&visible){if(reduced.matches)draw(0);else frame=requestAnimationFrame(tick);}}
    function move(event:PointerEvent){if(reduced.matches||!root)return;const r=section.getBoundingClientRect();pointer.x=(event.clientX-r.left)/r.width-.5;pointer.y=(event.clientY-r.top)/r.height-.5;root.style.setProperty('--hero-pointer-x',`${pointer.x*16}px`);root.style.setProperty('--hero-pointer-y',`${pointer.y*12}px`);}
    function leave(){pointer.x=0;pointer.y=0;root?.style.setProperty('--hero-pointer-x','0px');root?.style.setProperty('--hero-pointer-y','0px');}
    const resizeObserver=new ResizeObserver(resize);resizeObserver.observe(root);
    const intersection=new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;start();},{threshold:.02});intersection.observe(root);
    section.addEventListener('pointermove',move as EventListener,{passive:true});section.addEventListener('pointerleave',leave);
    document.addEventListener('visibilitychange',start);reduced.addEventListener('change',start);resize();start();
    return()=>{disposed=true;cancelAnimationFrame(frame);resizeObserver.disconnect();intersection.disconnect();section.removeEventListener('pointermove',move as EventListener);section.removeEventListener('pointerleave',leave);document.removeEventListener('visibilitychange',start);reduced.removeEventListener('change',start);};
  },[scene]);
  return <div ref={rootRef} className={`hero-scene hero-scene-${variant} ${embedded?'hero-scene-embedded':''} ${contained?'hero-scene-contained':''}`} style={{'--hero-accent':scene.color,'--hero-secondary':scene.secondary} as CSSProperties} aria-hidden="true">
    <div className="hero-atmosphere atmosphere-one"/><div className="hero-atmosphere atmosphere-two"/>
    <div className="hero-visual-field"><div className="hero-orbital-plane plane-one"/><div className="hero-orbital-plane plane-two"/><canvas ref={canvasRef}/><div className="hero-coordinate coord-one"><i/> SOUTHERN AFRICA / CONNECTED</div><div className="hero-coordinate coord-two">PEOPLE + STRATEGY + SYSTEMS</div></div>
    {!embedded?<><div className="hero-scene-heading"><span>{scene.eyebrow}</span><strong>{scene.title}</strong></div><div className="hero-glass-stack">{scene.cards.map((label,index)=><div className={`hero-glass-card hero-glass-${index}`} key={label}><span className="hero-glass-icon">{index===0?<Network size={18}/>:index===1?<Layers3 size={18}/>:<Activity size={18}/>}</span><div><small>0{index+1} / BIGBOSS</small><b>{label}</b><div className="hero-glass-track"><i/><i/><i/><i/></div></div><ShieldCheck size={13}/></div>)}</div></>:<div className="hero-digital-glass"><span><i/> BIGBOSS / DIGITAL SYSTEMS</span><strong>From data to decisions.</strong><div><span>Architecture</span><span>Intelligence</span><span>Execution</span></div></div>}
    <div className="hero-light-sweep"/>
  </div>;
}
