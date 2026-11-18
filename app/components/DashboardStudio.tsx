'use client';

import { useEffect, useRef, useState, type KeyboardEvent } from 'react';
import { Activity, ArrowRight, Bell, CheckCircle2, ChevronRight, CircleHelp, Download, Expand, LayoutDashboard, Layers3, Search, ShieldCheck, SlidersHorizontal, X } from 'lucide-react';
import { studios, type Studio } from '@/app/data/studios';
import { Metric, Panel } from './StudioPrimitives';
import StudioViews from './StudioViews';

const recordNames = {
  compute:['Document intelligence','Visual inspection','Forecast engine','Knowledge retrieval','Model evaluation','Batch inference'],
  logistics:['Johannesburg → Durban','London → New York','Dubai → Singapore','Cape Town → Johannesburg','Singapore → Sydney','Mbabane → Durban'],
  finance:['Operating account','Reserve account','Customer receipts','Supplier settlements','Project funding','Payroll provision'],
  manufacturing:['Assembly station A','Packaging line B','Quality inspection C','Material preparation','Dispatch station','Maintenance cell'],
  sustainability:['Gauteng recovery network','Paper & board stream','Western Cape facilities','Plastic recovery','Eswatini programme','Community collection'],
  retail:['Essential collection','Seasonal edit','Premium range','Returning customers','Digital commerce','Physical retail'],
  healthcare:['Primary care','Diagnostics','Specialist services','Emergency care','Care planning','Community clinic'],
};

function Records({studio,query,view,onInspect}:{studio:Studio;query:string;view:string;onInspect:(name:string)=>void}) {
  const records=recordNames[studio.id].filter(name=>name.toLowerCase().includes(query.toLowerCase()));
  return <Panel title={view} meta={`${records.length} records / ${studio.label}`} className="studio-records-panel"><div className="studio-table-wrap"><table><thead><tr><th>Name / reference</th><th>Owner</th><th>Performance</th><th>Priority</th><th>Status</th></tr></thead><tbody>{records.map((name,index)=><tr key={name}><th><button className="record-name" onClick={()=>onInspect(name)}><span className="record-initial">{name[0]}</span>{name}<ChevronRight size={13}/></button></th><td>{['Operations','Planning','Delivery'][index%3]}</td><td><div className="inline-progress"><i style={{width:`${72+index*4}%`}}/></div></td><td>{index===2?'Review':'Standard'}</td><td><span className={index===2?'table-status amber-status':'table-status'}>{index===2?'Attention':'On track'}</span></td></tr>)}</tbody></table>{!records.length?<div className="studio-empty">No records match “{query}”. Try a different search.</div>:null}</div></Panel>;
}

export function EnterpriseWorkspace({studio}:{studio:Studio}) {
  const [range,setRange]=useState('30D');
  const [scope,setScope]=useState(0);
  const [view,setView]=useState(0);
  const [query,setQuery]=useState('');
  const [selected,setSelected]=useState('');
  const [alerts,setAlerts]=useState(false);
  const [compact,setCompact]=useState(false);
  const factor=(range==='7D'?.78:range==='90D'?1.18:1)*(scope===0?1:scope===1?.84:.68);
  const visibleMetrics=studio.metrics.map(([label,value,unit,change])=>{
    const raw=Number(value.replaceAll(',',''));
    const adjusted=unit==='%'?Math.min(99.9,raw+(factor-1)*5):raw*factor;
    return {label,unit,change,value:adjusted.toLocaleString('en-US',{maximumFractionDigits:raw%1?2:0})};
  });
  const selectionInfo=(()=>{
    if(studio.id==='compute'&&selected.startsWith('GPU-')){
      const load=40+((Number(selected.slice(4))-1)*17+scope*9)%57;
      return {label:'Node allocation',value:`${load}% utilisation`,action:load>=90?'Rebalance queued workloads':'Monitor memory & throughput'};
    }
    if(studio.id==='logistics')return {label:'Network context',value:studio.scope[scope],action:selected.includes('→')?'Review route service level':'Review hub capacity & dispatch'};
    if(studio.id==='finance')return {label:'Treasury context',value:selected==='Operating'?'$1.84m available':selected==='Reserve'?'$2.16m available':'Account position',action:'Review cash allocation & approvals'};
    if(studio.id==='manufacturing')return {label:'Production context',value:selected==='Assembly'?'88.4% availability':studio.scope[scope],action:'Review condition & maintenance window'};
    if(studio.id==='sustainability')return {label:'Resource context',value:selected==='Paper & board'?'6,420 tonnes recovered':'Programme performance',action:'Review collection & recovery opportunities'};
    if(studio.id==='retail')return {label:'Commercial context',value:selected==='Champions'?'32% of active customers':'Customer & product performance',action:'Review margin, demand & retention'};
    if(studio.id==='healthcare'&&selected.startsWith('Bed '))return {label:'Bed status',value:(Number(selected.slice(4))-1)%5===0?'Available':selected==='Bed 14'?'Preparing':'Occupied',action:'Coordinate capacity with the ward team'};
    return {label:'Operating context',value:studio.scope[scope],action:'Review service flow & capacity'};
  })();

  function exportSnapshot() {
    const rows=[['BigBoss template',studio.number],['Workspace',studio.title],['Scope',studio.scope[scope]],['Period',range],[],['Measure','Value','Unit'],...visibleMetrics.map(({label,value,unit})=>[label,value,unit])];
    const blob=new Blob([rows.map(row=>row.map(cell=>`"${String(cell).replaceAll('"','""')}"`).join(',')).join('\r\n')],{type:'text/csv;charset=utf-8;'});
    const url=URL.createObjectURL(blob);const link=document.createElement('a');link.href=url;link.download=`BigBoss-Template-${studio.number}-${range}.csv`;link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
  }

  return <div className={`enterprise-workspace studio-theme-${studio.theme} ${compact?'workspace-compact':''}`}>
    <aside className="studio-sidebar"><div className="studio-wordmark">BIG<span>BOSS</span><small>DECISION SYSTEMS</small></div><div className="studio-side-caption">WORKSPACE</div>{studio.nav.map((label,index)=><button className={view===index?'selected':''} key={label} onClick={()=>{setView(index);setQuery('');}}>{index===0?<LayoutDashboard size={17}/>:index===1?<Layers3 size={17}/>:<Activity size={17}/>}<span>{label}</span>{view===index?<i/>:null}</button>)}<div className="studio-side-caption second-caption">INTELLIGENCE</div><div className="studio-side-label"><ShieldCheck size={16}/><span>Governance</span></div><div className="studio-side-label"><CircleHelp size={16}/><span>Decision support</span></div><div className="studio-sidebar-bottom"><div className="workspace-avatar">BB</div><span>BigBoss Corporate<small>Template {studio.number}</small></span><CheckCircle2 size={14}/></div></aside>
    <div className="studio-main"><header className="studio-toolbar"><div><span>{studio.label}</span><ChevronRight size={13}/><b>{studio.nav[view]}</b></div><div className="studio-toolbar-actions"><label className="workspace-search"><Search size={14}/><input aria-label={`Search ${studio.label} records`} placeholder="Search workspace…" value={query} onChange={e=>{setQuery(e.target.value);if(e.target.value)setView(1);}}/></label><button onClick={()=>setAlerts(v=>!v)} aria-label="View workspace notifications" aria-expanded={alerts}><Bell size={16}/><i/></button><button onClick={()=>setCompact(v=>!v)} aria-label="Toggle compact workspace" aria-pressed={compact}><SlidersHorizontal size={16}/></button><span className="workspace-user-avatar">BB</span></div>{alerts?<div className="studio-notifications"><strong>Workspace notifications</strong><p><span/> Capacity review / 2 items require attention</p><p><span/> Reporting period updated / {range}</p><button onClick={()=>setAlerts(false)}>Close notifications</button></div>:null}</header>
      <div className="studio-content"><div className="studio-page-heading"><div><span className="workspace-template-label">TEMPLATE {studio.number} <i/> {studio.label.toUpperCase()}</span><h3>{studio.title}</h3><p>{studio.subtitle}</p></div><div className="studio-heading-actions"><label><span className="sr-only">Workspace scope</span><select aria-label="Workspace scope" value={scope} onChange={e=>setScope(Number(e.target.value))}>{studio.scope.map((label,index)=><option value={index} key={label}>{label}</option>)}</select></label><button className="snapshot-button" onClick={exportSnapshot}><Download size={14}/><span>Export</span></button></div></div>
      <div className="studio-filter-bar"><div className="studio-view-tabs">{studio.nav.map((label,index)=><button key={label} aria-pressed={view===index} onClick={()=>{setView(index);setQuery('');}}>{label}</button>)}</div><div className="studio-periods" role="group" aria-label="Dashboard reporting period">{['7D','30D','90D'].map(period=><button key={period} onClick={()=>setRange(period)} aria-pressed={range===period}>{period}</button>)}</div></div>
      <div className="studio-metrics">{visibleMetrics.map((metric,index)=><Metric key={metric.label} {...metric} index={index}/>)}</div>
      <div className="studio-board" key={`${studio.id}-${view}`}>{view===0?<StudioViews kind={studio.id} factor={factor} scope={scope} selected={selected} onInspect={setSelected}/>:<Records studio={studio} query={query} view={studio.nav[view]} onInspect={setSelected}/>}</div>
      <div className="studio-context-bar"><span><i/> {selected?<><b>{selected}</b> selected</>:<>Explore the workspace: filter periods, inspect items or open a detailed view.</>}</span>{selected?<button onClick={()=>setSelected('')}>Clear selection <X size={12}/></button>:<span className="workspace-template-label">BIGBOSS / TEMPLATE {studio.number}</span>}</div>
      {selected?<div className="studio-inspector" role="status"><div><span className="inspector-symbol"><Activity size={18}/></span><div><small>SELECTED ITEM</small><strong>{selected}</strong></div></div><div><span>{selectionInfo.label}</span><b>{selectionInfo.value}</b></div><div><span>Next action</span><b>{selectionInfo.action}</b></div><button aria-label="Close item details" onClick={()=>setSelected('')}><X size={16}/></button></div>:null}
      </div>
    </div>
  </div>;
}

export default function DashboardStudio() {
  const [selected,setSelected]=useState(0);
  const tabs=useRef<(HTMLButtonElement|null)[]>([]);
  const full=useRef<HTMLDialogElement>(null);
  const studio=studios[selected];
  function navigate(event:KeyboardEvent<HTMLButtonElement>,index:number) {
    const count=studios.length;const next=event.key==='ArrowRight'?(index+1)%count:event.key==='ArrowLeft'?(index-1+count)%count:event.key==='Home'?0:event.key==='End'?count-1:null;
    if(next===null)return;event.preventDefault();setSelected(next);tabs.current[next]?.focus();
  }
  useEffect(()=>()=>{if(full.current?.open)document.body.style.overflow='';},[]);
  function open(){full.current?.showModal();document.body.style.overflow='hidden';}
  function close(){full.current?.close();document.body.style.overflow='';}
  return <div className="dashboard-studio-library">
    <div className="studio-template-tabs" role="tablist" aria-label="Dashboard templates">{studios.map((item,index)=><button key={item.id} ref={node=>{tabs.current[index]=node;}} id={`studio-tab-${item.id}`} role="tab" aria-selected={index===selected} aria-controls="studio-active-panel" tabIndex={index===selected?0:-1} onClick={()=>setSelected(index)} onKeyDown={event=>navigate(event,index)}><span>{item.number}</span>{item.label}</button>)}</div>
    <div className="studio-preview-heading"><div><span className="v2-kicker">Template {studio.number}</span><h3>{studio.label}</h3></div><button onClick={open}><Expand size={15}/> Open workspace</button></div>
    <div id="studio-active-panel" role="tabpanel" aria-labelledby={`studio-tab-${studio.id}`} tabIndex={0}><EnterpriseWorkspace key={studio.id} studio={studio}/></div>
    <div className="studio-below"><span><i/> Interactive preview</span><a href="#digital-enquiry">Design a workspace around your organisation <ArrowRight size={15}/></a></div>
    <dialog className="studio-fullscreen-dialog" ref={full} onCancel={close} onClose={()=>{document.body.style.overflow='';}} aria-label={`${studio.label} workspace`}><div className="studio-modal-top"><span>BIGBOSS / TEMPLATE {studio.number}</span><button onClick={close}><X size={18}/> Close workspace</button></div><EnterpriseWorkspace key={`full-${studio.id}`} studio={studio}/></dialog>
  </div>;
}
