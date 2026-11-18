'use client';

import { useRef, useState } from 'react';
import { ArrowUpRight, Maximize2, Minus, Plus, X } from 'lucide-react';

const examples=[
  {number:'08',title:'Executive Command Centre',tag:'V2 / EXECUTIVE INTELLIGENCE',image:'/visuals/dashboard-executive.png',description:'A global executive view combining enterprise performance, a connected globe and strategic progress.'},
  {number:'09',title:'Global Operations Centre',tag:'V2 / GEOSPATIAL OPERATIONS',image:'/visuals/dashboard-operations.png',description:'A map-led operations environment with fleet visibility, route performance and regional exceptions.'},
];

export default function V2DashboardGallery(){
  const [selected,setSelected]=useState(0);const [zoom,setZoom]=useState(false);const dialog=useRef<HTMLDialogElement>(null);
  function open(index:number){setSelected(index);setZoom(false);dialog.current?.showModal();document.body.style.overflow='hidden';}
  function close(){dialog.current?.close();document.body.style.overflow='';}
  return <div className="v2-reference-library"><div className="v2-reference-heading"><div><span className="v2-kicker">From the V2 collection</span><h3>Command-centre design, at a glance.</h3></div><p>Two original V2 templates, retained in the BigBoss design collection.</p></div><div className="v2-reference-grid">{examples.map((item,index)=><article key={item.number}><button className="v2-reference-image" onClick={()=>open(index)} aria-label={`Open Template ${item.number}: ${item.title}`}><img src={item.image} alt={`${item.title}, Template ${item.number}`} loading="lazy"/><span><Maximize2 size={17}/> View template</span></button><div><small>TEMPLATE {item.number} <i/> {item.tag}</small><h4>{item.title}<ArrowUpRight size={20}/></h4><p>{item.description}</p></div></article>)}</div><dialog ref={dialog} className="v2-reference-dialog" onCancel={close} onClose={()=>{document.body.style.overflow='';}} aria-label={`Template ${examples[selected].number}: ${examples[selected].title}`}><header><div><small>TEMPLATE {examples[selected].number}</small><strong>{examples[selected].title}</strong></div><div><button onClick={()=>setZoom(v=>!v)}>{zoom?<Minus size={17}/>:<Plus size={17}/>} {zoom?'Fit image':'Zoom in'}</button><button aria-label="Close template preview" onClick={close}><X size={21}/></button></div></header><div className={`v2-reference-zoom ${zoom?'zoomed':''}`}><img src={examples[selected].image} alt={examples[selected].title}/></div></dialog></div>;
}
