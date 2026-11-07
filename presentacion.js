'use strict';
(() => {
  const D=window.AUDITORIA, S=window.DIAPOSITIVAS;
  const $=id=>document.getElementById(id);
  const E=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const norm=s=>String(s).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
  const riskTitles={'R-03':'Acceso privilegiado sin MFA','R-08':'Restauración de respaldos','R-07':'Clasificación de datos personales','R-13':'Integridad de órdenes','R-05':'Gestión de cambios'};
  const categories={'01_Informe':'Informe y planificación','02_Matrices':'Matrices de auditoría','03_Evidencias':'Evidencias y papeles de trabajo','04_SQL':'Laboratorio SQL','07_UsodeIA':'Referencias y uso de IA'};
  let current=0,step=0,notesOpen=false,presentation=false,duration=30;
  let libraryTab='documentos',riskFilter='all',query='',toastTimeout;
  let seconds=0,startedAt=0,running=false,timerInterval;
  const dialogs=['outline-dialog','library-dialog','detail-dialog'];
  try{duration=Number(localStorage.getItem('rednova-duration'))||30;}catch{}
  if(![10,20,30,40].includes(duration))duration=30;
  $('duration').value=String(duration);
  $('deck').innerHTML=S.map((s,i)=>`<section class="slide ${E(s.classes)}" id="${s.id}" data-index="${i}" hidden aria-label="${i+1}. ${E(s.title)}"><div class="slide-top"><span>REDNOVA / OPERACIÓN TRAZABILIDAD</span><span>${E(s.section.toUpperCase())} · 2026</span></div>${s.html}<p class="slide-source">${E(s.source)}</p></section>`).join('');
  const elements=S.map(s=>$(s.id));
  const counts=elements.map(el=>Math.max(0,...Array.from(el.querySelectorAll('[data-step]'),n=>Number(n.dataset.step))));
  elements.forEach(el=>el.querySelectorAll('.action-tile').forEach((button,i)=>{button.dataset.action=String(i);}));

  function renderOutline(){
    let previousSection='';
    $('outline-list').innerHTML=S.map((s,i)=>{
      let header='';
      if(s.section!==previousSection){previousSection=s.section;header=`<div class="outline-section">${E(s.section.toUpperCase())}</div>`;}
      return header+`<button class="outline-item ${i===current?'current':''}" data-jump="${i}" ${i===current?'aria-current="step"':''}><span>${String(i+1).padStart(2,'0')}</span><strong>${E(s.title)}</strong></button>`;
    }).join('');
  }
  function showNotes(open){notesOpen=open;$('speaker-notes').hidden=!open;$('notes-toggle').setAttribute('aria-expanded',String(open));}
  function updateNotes(){
    const s=S[current],group=window.GUIA.find(g=>g.id===s.group);
    const total=S.reduce((a,s)=>a+s.weight,0);
    const start=Math.round(S.slice(0,current).reduce((a,s)=>a+s.weight,0)/total*duration);
    const end=Math.round(S.slice(0,current+1).reduce((a,s)=>a+s.weight,0)/total*duration);
    $('notes-timing').textContent=`MINUTO ${start}–${end} · RECORRIDO DE ${duration} MINUTOS`;
    $('notes-title').textContent=s.title;
    $('notes-content').innerHTML=`<p><strong>En esta pantalla</strong><br>${E(s.focus)}</p><p><strong>Pregunta de defensa</strong><br>${E(group.question)}</p><p>${E(group.answer)}</p><details><summary>Más contexto para este tema</summary><ul>${group.bullets.map(b=>`<li>${E(b)}</li>`).join('')}</ul></details><p><strong>Fuente</strong><br>${E(s.source)}</p>`;
  }
  function updateStep(){
    const el=elements[current],max=counts[current];
    el.querySelectorAll('[data-step]').forEach(n=>{
      const pending=Number(n.dataset.step)>step;
      n.classList.toggle('is-pending',pending);
      n.setAttribute('aria-hidden',String(pending));
      n.inert=pending;
    });
    $('step-dots').innerHTML=Array.from({length:max},(_,i)=>`<span class="${i<step?'shown':''}"></span>`).join('');
    $('step-label').textContent=max?(step<max?`${step}/${max} ideas`:'Idea completa'):'Vista general';
    $('previous').disabled=current===0&&step===0;
    $('next').disabled=current===S.length-1&&step===max;
    $('next-label').textContent=step<max?'Revelar punto':current===S.length-1?'Fin':current===0?'Comenzar':'Siguiente';
    $('slide-announcement').textContent=`Diapositiva ${current+1} de ${S.length}: ${S[current].title}. ${max?`Paso ${step} de ${max}.`:''}`;
  }
  function go(index,showAll=false,focus=true){
    current=Math.max(0,Math.min(S.length-1,index));step=showAll?counts[current]:0;
    elements.forEach((el,i)=>{el.hidden=i!==current;});
    $('slide-number').textContent=String(current+1).padStart(2,'0');
    $('section-name').textContent=S[current].section;
    $('progress-bar').style.width=`${(current+1)/S.length*100}%`;
    updateStep();updateNotes();renderOutline();
    const hash='#'+S[current].id;
    if(location.hash!==hash){try{history.replaceState(null,'',hash);}catch{location.hash=hash;}}
    if(focus){$('escenario').focus({preventScroll:true});window.scrollTo({top:0,behavior:'instant'});}
  }
  function forward(){if(step<counts[current]){step++;updateStep();}else if(current<S.length-1)go(current+1);}
  function back(){if(step>0){step--;updateStep();}else if(current>0)go(current-1,true);}
  $('next').onclick=forward;$('previous').onclick=back;
  $('deck').addEventListener('click',event=>{
    if(event.target.closest('button,a,input,select,summary'))return;
    if(window.getSelection()?.toString())return;
    if(suppressClick){suppressClick=false;return;}
    forward();
  });
  let touchStart=null,suppressClick=false;
  $('deck').addEventListener('pointerdown',event=>{if(event.pointerType==='touch')touchStart={x:event.clientX,y:event.clientY};});
  $('deck').addEventListener('pointerup',event=>{if(!touchStart)return;const dx=event.clientX-touchStart.x,dy=event.clientY-touchStart.y;touchStart=null;if(Math.abs(dx)>65&&Math.abs(dy)<60){suppressClick=true;if(dx<0)forward();else back();}});
  $('deck').addEventListener('pointercancel',()=>touchStart=null);
  window.addEventListener('hashchange',()=>{const i=S.findIndex(s=>s.id===location.hash.slice(1));if(i>=0&&i!==current)go(i);});
  function openDialog(id){showNotes(false);if(!$(id).open)$(id).showModal();}
  function detail(label,html){$('detail-label').textContent=label;$('detail-content').innerHTML=html;openDialog('detail-dialog');}
  $('outline-toggle').onclick=()=>{renderOutline();openDialog('outline-dialog');};
  $('notes-toggle').onclick=()=>showNotes(!notesOpen);
  $('notes-close').onclick=()=>{showNotes(false);$('notes-toggle').focus();};
  dialogs.forEach(id=>{
    $(id).addEventListener('click',event=>{if(event.target!==$(id))return;const r=$(id).getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)$(id).close();});
  });
  function showRisk(id){
    const r=D.risks.find(r=>r.id===id);if(!r)return;
    detail(`${r.id} · RIESGO POTENCIAL`, `<h2>${E(riskTitles[r.id]||r.asset)}</h2><p>${E(r.risk)}</p><div class="detail-tags"><span>P ${r.probability} × I ${r.impact} = ${r.score}/25</span><span>${E(r.level)}</span><span>${E(r.layer)}</span></div><span class="eyebrow">CONTROL ESPERADO</span><p>${E(r.control)}</p><span class="eyebrow">RESPONSABLE PROPUESTO</span><p>${E(r.owner)}</p><div class="notice">${E(r.limitation)}</div><p class="detail-source">Fuente: Matriz_Riesgos.xlsx. Diseño y operación del control pendientes de comprobar.</p>`);
  }
  function showSql(id){
    const s=D.sql.find(s=>s.id===id);if(!s)return;
    detail(`${s.id} · ${s.evidence} · DATOS SINTÉTICOS`,`<h2>${E(s.objective)}</h2><span class="eyebrow">RESULTADO DOCUMENTADO EN LA MATRIZ</span><p>${E(s.result)}</p><div class="notice"><strong>Límite:</strong> ${E(s.limit)}</div><div class="copy-row"><span class="eyebrow">CONSULTA DEL EXPEDIENTE</span><button class="copy-button" id="copy-query">Copiar consulta</button></div><pre><code>${E(s.query)}</code></pre><p class="detail-source">La página muestra la consulta y el resultado documentado; no ejecuta SQL ni se conecta a una base de datos.</p>`);
    $('copy-query').onclick=async()=>{try{if(!navigator.clipboard)throw new Error('clipboard');await navigator.clipboard.writeText(s.query);$('copy-query').textContent='Copiada ✓';}catch{const range=document.createRange();range.selectNodeContents($('detail-content').querySelector('code'));window.getSelection().removeAllRanges();window.getSelection().addRange(range);$('copy-query').textContent='Seleccionada: Ctrl+C';}};
  }
  function showEvidence(id){
    const e=D.evidence.find(e=>e.id===id);if(!e)return;
    const queries=D.sql.filter(s=>s.evidence===id).map(s=>s.id);
    detail(`${id} · INVENTARIO PRELIMINAR`,`<h2>${E(e.name)}</h2><p>${E(e.description)}</p><span class="eyebrow">PROCEDENCIA REGISTRADA</span><p>${E(e.source)}</p><span class="eyebrow">RELACIÓN CON EL LABORATORIO SQL</span><p>${queries.length?E(queries.join(' · ')):'Sin vínculo a las 12 consultas; revisar el expediente general.'}</p><div class="notice">${E(e.status)}. No consta recepción del original. Custodio, adquisición, ubicación y hash de la fuente original siguen pendientes.</div>`);
  }
  function showEvent(index){
    const t=D.timeline[index];if(!t)return;
    detail(`CRONOLOGÍA PRELIMINAR · ${t.date} · UTC−6`,`<h2>${E(t.event)}</h2><span class="eyebrow">FUENTE PRIMARIA SOLICITADA</span><p>${E(t.source)}</p><div class="notice">${E(t.limit)}</div><p class="detail-source">Fuente: hoja Cronologia de la matriz SQL verificada. La secuencia temporal no demuestra causalidad.</p>`);
  }
  function showAction(index){
    const a=window.ACCIONES[index];if(!a)return;
    detail(`${a.id} · PROPUESTA POR VALIDAR`,`<h2>${E(a.title)}</h2><p>${E(a.action)}</p><span class="eyebrow">RESPONSABLE PROPUESTO</span><p>${E(a.owner)}</p><span class="eyebrow">PRUEBA DE CIERRE PROPUESTA</span><p>${E(a.verification)}</p><span class="eyebrow">KPI PROPUESTO</span><p>${E(a.kpi)}</p><div class="notice">Fechas, presupuesto y criterios de aceptación deben acordarse con el equipo. Esta propuesta no representa aprobación ni ejecución.</div>`);
  }
  function filteredRisks(){
    let risks=[...D.risks];
    if(riskFilter==='top')risks=risks.filter(r=>r.rank).sort((a,b)=>a.rank-b.rank);
    else if(riskFilter==='critical')risks=risks.filter(r=>r.level==='Crítico');
    else if(riskFilter==='high')risks=risks.filter(r=>r.level==='Alto');
    else if(typeof riskFilter==='object')risks=risks.filter(r=>r.probability===riskFilter.p&&r.impact===riskFilter.i);
    return risks.filter(r=>norm(`${r.id} ${r.asset} ${r.control} ${r.level}`).includes(norm(query)));
  }
  function renderLibrary(){
    document.querySelectorAll('[data-tab]').forEach(b=>{const active=b.dataset.tab===libraryTab;b.setAttribute('aria-selected',String(active));b.setAttribute('tabindex',active?'0':'-1');b.id='tab-'+b.dataset.tab;});
    $('library-content').setAttribute('aria-labelledby','tab-'+libraryTab);
    let html='',n=0;
    if(libraryTab==='documentos'){
      const files=D.files.filter(f=>norm(f.name+' '+categories[f.category]+' '+f.type).includes(norm(query)));n=files.length;
      html='<div class="document-grid">'+files.map(f=>`<a class="document-link" href="${E(encodeURI(f.url))}" target="_blank" rel="noopener" ${f.type==='PDF'?'':'download'}><span>${E(f.type)}</span><div><strong>${E(f.name)}</strong><small>${E(categories[f.category])} · ${Math.ceil(f.size/1024)} KB</small></div><span aria-hidden="true">${f.type==='PDF'?'↗':'↓'}</span></a>`).join('')+'</div>';
    }else if(libraryTab==='riesgos'){
      const risks=filteredRisks();n=risks.length;
      html=`<div class="library-filters">${[['all','Todos'],['top','Top 5'],['critical','Críticos'],['high','Altos']].map(([id,title])=>`<button data-risk-filter="${id}" class="${riskFilter===id?'active':''}" aria-pressed="${riskFilter===id}">${title}</button>`).join('')}</div>`;
      if(typeof riskFilter==='object')html+=`<p class="detail-source">Filtro: P ${riskFilter.p} × I ${riskFilter.i}. Selecciona “Todos” para restablecer.</p>`;
      html+=risks.map(r=>`<button class="support-row" data-risk="${E(r.id)}"><span class="support-id">${E(r.id)}</span><div><strong>${E(riskTitles[r.id]||r.asset)}</strong><small>${E(r.control)}</small></div><span class="support-score">${r.score}<small>${E(r.level)}</small></span></button>`).join('');
    }else if(libraryTab==='sql'){
      const rows=D.sql.filter(s=>norm(s.id+' '+s.objective+' '+s.evidence+' '+s.result).includes(norm(query)));n=rows.length;
      html=rows.map(s=>`<button class="support-row" data-sql="${E(s.id)}"><span class="support-id">${E(s.id)}</span><div><strong>${E(s.objective)}</strong><small>${E(s.evidence)} · ${E(s.result)}</small></div><span class="support-score">↗</span></button>`).join('');
    }else if(libraryTab==='evidencias'){
      const rows=D.evidence.filter(e=>norm(e.id+' '+e.name+' '+e.description).includes(norm(query)));n=rows.length;
      html=rows.map(e=>`<button class="support-row" data-evidence="${E(e.id)}"><span class="support-id">${E(e.id)}</span><div><strong>${E(e.name)}</strong><small>Original pendiente · ${E(e.status)}</small></div><span class="support-score">↗</span></button>`).join('');
    }else{
      const rows=D.timeline.map((t,i)=>({...t,index:i})).filter(t=>norm(t.date+' '+t.event+' '+t.source).includes(norm(query)));n=rows.length;
      html=rows.map(t=>`<button class="support-row" data-event="${t.index}"><span class="support-id">${E(t.date.split(' ')[1])}<small>${E(t.date.split(' ')[0].slice(0,5))}</small></span><div><strong>${E(t.event)}</strong><small>${E(t.limit)}</small></div><span class="support-score">↗</span></button>`).join('');
    }
    if(!n)html+='<p class="empty-state">No hay coincidencias. Prueba otra palabra o cambia de filtro.</p>';
    $('library-content').innerHTML=html;$('library-count').textContent=`${n} resultados`;
  }
  function openLibrary(tab='documentos',filter='all'){
    libraryTab=tab;riskFilter=filter;query='';$('library-search').value='';renderLibrary();openDialog('library-dialog');
  }
  $('library-toggle').onclick=()=>openLibrary();
  $('library-search').oninput=event=>{query=event.target.value;renderLibrary();};
  $('library-tabs').addEventListener('keydown',event=>{
    if(!['ArrowRight','ArrowLeft','Home','End'].includes(event.key))return;
    event.preventDefault();const tabs=Array.from($('library-tabs').querySelectorAll('[data-tab]'));
    let i=tabs.findIndex(b=>b.dataset.tab===libraryTab);
    i=event.key==='Home'?0:event.key==='End'?tabs.length-1:(i+(event.key==='ArrowRight'?1:-1)+tabs.length)%tabs.length;
    libraryTab=tabs[i].dataset.tab;riskFilter='all';query='';$('library-search').value='';renderLibrary();tabs[i].focus();
  });
  let map='';
  for(let p=5;p>=1;p--){map+=`<span>${p}</span>`;for(let i=1;i<=5;i++){
    const n=D.risks.filter(r=>r.probability===p&&r.impact===i).length,score=p*i;
    map+=`<button data-p="${p}" data-i="${i}" class="${n?'occupied':''}" data-level="${score>=16?'critical':score>=11?'high':score>=6?'medium':'low'}" ${n?'':'disabled'} aria-label="Probabilidad ${p}, impacto ${i}, ${n} riesgos">${n||''}</button>`;
  }}
  map+='<span></span>'+[1,2,3,4,5].map(i=>`<span>${i}</span>`).join('');$('heatmap').innerHTML=map;
  document.addEventListener('click',event=>{
    const b=event.target.closest('button,a');if(!b)return;
    if(b.dataset.close){$(b.dataset.close).close();return;}
    if(b.dataset.jump!==undefined){if($('outline-dialog').open)$('outline-dialog').close();go(Number(b.dataset.jump));return;}
    if(b.classList.contains('brand')){event.preventDefault();go(0);return;}
    if(b.dataset.library){openLibrary(b.dataset.library);return;}
    if(b.dataset.tab){libraryTab=b.dataset.tab;riskFilter='all';query='';$('library-search').value='';renderLibrary();return;}
    if(b.dataset.riskFilter){riskFilter=b.dataset.riskFilter;renderLibrary();return;}
    if(b.dataset.risk){showRisk(b.dataset.risk);return;}
    if(b.dataset.sql){showSql(b.dataset.sql);return;}
    if(b.dataset.evidence){showEvidence(b.dataset.evidence);return;}
    if(b.dataset.event!==undefined){showEvent(Number(b.dataset.event));return;}
    if(b.dataset.action!==undefined){showAction(Number(b.dataset.action));return;}
    if(b.dataset.p){openLibrary('riesgos',{p:Number(b.dataset.p),i:Number(b.dataset.i)});}
  });
  function toast(message){$('toast').textContent=message;$('toast').hidden=false;clearTimeout(toastTimeout);toastTimeout=setTimeout(()=>$('toast').hidden=true,4000);}
  function syncPresentation(){
    document.body.classList.toggle('presentation-mode',presentation);
    $('presentation-toggle').setAttribute('aria-pressed',String(presentation));
    $('presentation-toggle').setAttribute('aria-label',presentation?'Salir de presentación':'Activar presentación');
    $('presentation-toggle').querySelector('span:last-child').textContent=presentation?'Salir':'Presentar';
  }
  async function setPresentation(enabled){
    presentation=enabled;syncPresentation();showNotes(false);
    if(enabled){try{if(!document.fullscreenElement&&document.documentElement.requestFullscreen)await document.documentElement.requestFullscreen();}catch{toast('Modo presentación activo. Puedes ampliar la ventana con F11.');}}
    else if(document.fullscreenElement){try{await document.exitFullscreen();}catch{}}
    window.scrollTo({top:0,behavior:'instant'});
  }
  $('presentation-toggle').onclick=()=>setPresentation(!presentation);
  $('exit-presentation').onclick=()=>setPresentation(false);
  document.addEventListener('fullscreenchange',()=>{if(!document.fullscreenElement&&presentation){presentation=false;syncPresentation();}});
  document.addEventListener('keydown',event=>{
    if(dialogs.some(id=>$(id).open)||event.ctrlKey||event.altKey||event.metaKey)return;
    if(['INPUT','TEXTAREA','SELECT'].includes(event.target.tagName)||event.target.isContentEditable)return;
    if(event.key==='ArrowRight'||event.key==='PageDown'||event.key===' '&&!event.target.closest('button,a')){event.preventDefault();forward();}
    else if(event.key==='ArrowLeft'||event.key==='PageUp'){event.preventDefault();back();}
    else if(event.key==='Home'){event.preventDefault();go(0);}
    else if(event.key==='End'){event.preventDefault();go(S.length-1);}
    else if(event.key.toLowerCase()==='n'){event.preventDefault();showNotes(!notesOpen);}
    else if(event.key.toLowerCase()==='i'){event.preventDefault();renderOutline();openDialog('outline-dialog');}
    else if(event.key.toLowerCase()==='d'){event.preventDefault();openLibrary();}
    else if(event.key.toLowerCase()==='p'){event.preventDefault();setPresentation(!presentation);}
    else if(event.key==='Escape'){showNotes(false);if(presentation)setPresentation(false);}
  });
  const elapsed=()=>seconds+(running?(Date.now()-startedAt)/1000:0);
  function renderTimer(){const n=Math.floor(elapsed());$('timer').textContent=String(Math.floor(n/60)).padStart(2,'0')+':'+String(n%60).padStart(2,'0');$('timer').classList.toggle('over',n>=duration*60);}
  $('timer-toggle').onclick=()=>{if(running){seconds=elapsed();running=false;clearInterval(timerInterval);}else{startedAt=Date.now();running=true;timerInterval=setInterval(renderTimer,500);}$('timer-toggle').textContent=running?'Pausar':'Iniciar';renderTimer();};
  $('timer-reset').onclick=()=>{seconds=0;startedAt=Date.now();renderTimer();};
  $('duration').onchange=()=>{duration=Number($('duration').value);try{localStorage.setItem('rednova-duration',String(duration));}catch{}updateNotes();renderTimer();};
  const aliases={inicio:'portada',alcance:'objetivo',arquitectura:'sistemas',riesgos:'mapa-riesgos',cronologia:'primeras-senales',sql:'laboratorio',evidencias:'custodia',cierre:'conclusion'};
  const requested=location.hash.slice(1),initial=S.findIndex(s=>s.id===(aliases[requested]||requested));
  go(initial<0?0:initial,false,false);renderTimer();
})();
