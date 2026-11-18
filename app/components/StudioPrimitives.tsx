'use client';

import { useId, useState, type ReactNode } from 'react';
import { ArrowUpRight, MoreHorizontal } from 'lucide-react';
import { worldLand } from '@/app/data/worldMap';

export function Panel({title,meta,children,className=''}:{title:string;meta?:string;children:ReactNode;className?:string}) {
  return <section className={`studio-panel ${className}`}><header><div><h4>{title}</h4>{meta?<span>{meta}</span>:null}</div><MoreHorizontal size={17} aria-hidden="true"/></header>{children}</section>;
}

export function Sparkline({index=0}:{index?:number}) {
  const d=['M0 25L10 20 20 24 30 13 40 16 50 9 60 12 70 4 80 8 90 2','M0 20L10 23 20 15 30 19 40 8 50 11 60 4 70 7 80 3 90 0','M0 5L10 8 20 3 30 15 40 12 50 20 60 16 70 25 80 21 90 28'][index%3];
  return <svg viewBox="0 0 90 32" className="studio-spark" aria-hidden="true"><path d={d}/></svg>;
}

export function Metric({label,value,unit,change,index}:{label:string;value:string;unit:string;change:string;index:number}) {
  return <article className={`studio-metric metric-${index}`}><span>{label}<ArrowUpRight size={13}/></span><div><strong>{value}</strong><em>{unit}</em><Sparkline index={index}/></div><small>{change} <span>vs prior period</span></small></article>;
}

export function AreaChart({variant=0,height=180,factor=1,secondary=true,base=72,maximum=100,unit='index'}:{variant?:number;height?:number;factor?:number;secondary?:boolean;base?:number;maximum?:number;unit?:string}) {
  const id=useId().replaceAll(':','');
  const [hover,setHover]=useState<number|null>(null);
  const values=Array.from({length:22},(_,i)=>30+i*1.8+Math.sin(i*.8+variant)*11+Math.cos(i*1.7)*4);
  const actual=values.map(n=>n/values[21]*base*factor);
  const ceiling=Math.max(maximum,base*factor*1.15);
  const points=actual.map((n,i)=>[20+i*25,Number((155-n/ceiling*130).toFixed(3))]);
  const d=points.map(([x,y],i)=>`${i?'L':'M'}${x},${Math.max(20,y)}`).join(' ');
  const previous=actual.map((n,i)=>`${i?'L':'M'}${20+i*25},${(155-n*.78/ceiling*130).toFixed(3)}`).join(' ');
  const format=(n:number)=>unit==='USD m'?`$${n.toFixed(2)}m`:unit==='requests/s'?`${Math.round(n).toLocaleString()} req/s`:unit==='tonnes'?`${Math.round(n).toLocaleString()} t`:`${Math.round(n)} index`;
  return <div className="studio-chart-interactive" onPointerMove={event=>{const r=event.currentTarget.getBoundingClientRect();setHover(Math.max(0,Math.min(21,Math.round((event.clientX-r.left)/r.width*21))));}} onPointerLeave={()=>setHover(null)}>
    <svg viewBox="0 0 570 190" style={{height}} role="img" aria-label="Performance trend with current and previous period series">
      <defs><linearGradient id={`area-${id}`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="var(--studio-accent)" stopOpacity=".3"/><stop offset="1" stopColor="var(--studio-accent)" stopOpacity="0"/></linearGradient></defs>
      {[25,68,111,155].map((y,i)=><g key={y}><line x1="20" y1={y} x2="550" y2={y} className="studio-grid-line"/><text x="0" y={y-5}>{unit==='USD m'?`$${(ceiling*(1-i/3)).toFixed(1)}m`:Math.round(ceiling*(1-i/3)).toLocaleString()}</text></g>)}
      <path d={`${d} L545 165 L20 165Z`} fill={`url(#area-${id})`}/>
      {secondary?<path d={previous} className="studio-chart-previous"/>:null}
      <path d={d} className="studio-chart-line"/>
      {points.filter((_,i)=>i%3===0).map(([x,y],i)=><circle key={i} cx={x} cy={Math.max(20,y)} r="2.8" fill="var(--studio-accent)"/>)}
      {['01','05','10','15','20','25','30'].map((n,i)=><text key={n} x={20+i*86} y="186">{n}</text>)}
      {hover!==null?<g><line x1={points[hover][0]} y1="20" x2={points[hover][0]} y2="165" stroke="var(--studio-accent)" strokeDasharray="3 3"/><circle cx={points[hover][0]} cy={Math.max(20,points[hover][1])} r="5" fill="var(--studio-accent)" stroke="white" strokeWidth="2"/></g>:null}
    </svg>
    {hover!==null?<div className="studio-chart-tooltip">Period {hover+1}<strong>{format(actual[hover])}</strong></div>:null}
  </div>;
}

export function Dial({value,label,size=100}:{value:number;label:string;size?:number}) {
  return <div className="studio-dial-block"><div className="studio-dial" style={{width:size,height:size,background:`conic-gradient(var(--studio-accent) ${value}%,var(--studio-track) 0)`}}><div><strong>{value}<small>%</small></strong></div></div><span>{label}</span></div>;
}

const hubs=[{name:'Johannesburg',x:520,y:290,code:'JNB',assets:286},{name:'London',x:450,y:96,code:'LHR',assets:183},{name:'New York',x:265,y:123,code:'JFK',assets:142},{name:'Dubai',x:588,y:160,code:'DXB',assets:247},{name:'Singapore',x:710,y:222,code:'SIN',assets:198},{name:'São Paulo',x:334,y:284,code:'GRU',assets:112}];

export function WorldNetwork({selected,onSelect,focus=0}:{selected:string;onSelect:(name:string)=>void;focus?:number}) {
  const id=useId().replaceAll(':','');
  return <div className="studio-world-map"><svg viewBox="0 0 900 400" role="img" aria-label="Global logistics network. Select a hub using the buttons below the map.">
    <defs><radialGradient id={`ocean-${id}`}><stop stopColor="#14485a"/><stop offset="1" stopColor="#061a29"/></radialGradient><pattern id={`geo-grid-${id}`} width="45" height="40" patternUnits="userSpaceOnUse"><path d="M45 0H0V40" fill="none" stroke="#719ab119"/></pattern><linearGradient id={`land-${id}`}><stop stopColor="#234e65"/><stop offset=".5" stopColor="#407686"/><stop offset="1" stopColor="#20435d"/></linearGradient></defs>
    <rect width="900" height="400" fill={`url(#ocean-${id})`}/><rect width="900" height="400" fill={`url(#geo-grid-${id})`}/>
    <path d={worldLand} fill={`url(#land-${id})`} stroke="#72bfd13b" strokeWidth=".6"/>
    {hubs.map((hub,i)=><g key={hub.code} opacity={focus===1&&i>1?.4:1}><path d={`M520 290 Q${(520+hub.x)/2} ${Math.min(290,hub.y)-110} ${hub.x} ${hub.y}`} className={`network-route route-${i}`}/><circle cx={hub.x} cy={hub.y} r={selected===hub.name?11:5} className="network-hub-halo"/><circle cx={hub.x} cy={hub.y} r="3" fill={i%2?'#ffd17b':'#55e6ec'}/><text x={hub.x+12} y={hub.y-9}>{hub.code}</text></g>)}
    <text x="80" y="210" className="map-ocean-name">ATLANTIC OCEAN</text><text x="630" y="350" className="map-ocean-name">INDIAN OCEAN</text>
  </svg><div className="network-hub-selector">{hubs.map(hub=><button key={hub.code} aria-pressed={hub.name===selected} onClick={()=>onSelect(hub.name)}><i/>{hub.code}<span>{hub.assets}</span></button>)}</div></div>;
}

export function MiniBars({count=18}:{count?:number}) {
  return <div className="studio-mini-bars" aria-label="Hourly activity distribution">{Array.from({length:count},(_,i)=><span key={i} style={{height:`${(25+Math.sin(i*.8)*18+i*2.7).toFixed(2)}%`,animationDelay:`${i*25}ms`}}/>)}</div>;
}
