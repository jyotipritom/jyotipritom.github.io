/* Plain JavaScript — works on GitHub Pages without Node.js or a build step. */
(() => {
  'use strict';
  const data = window.PORTFOLIO;
  if (!data) { console.error('Could not load content.js'); return; }
  const $ = (id) => document.getElementById(id);
  const safe = (value) => String(value ?? '').replace(/[&<>"']/g, ch => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' })[ch]);
  const safeUrl = (value) => {
    const url = String(value || '').trim();
    return /^https:\/\//i.test(url) || /^mailto:[^\s]+$/i.test(url) || (/^assets\/[A-Za-z0-9_.\/-]+$/.test(url)) ? url : '#';
  };
  const svg = (content) => `<svg viewBox="0 0 420 164" aria-hidden="true" focusable="false" preserveAspectRatio="xMidYMid meet">${content}</svg>`;
  function art(kind) {
    const grid = `<g stroke="#c0f6ed" stroke-opacity=".1"><path d="M25 30H395 M25 70H395 M25 110H395 M25 145H395"/><path d="M70 14V160 M140 14V160 M210 14V160 M280 14V160 M350 14V160"/></g>`;
    if (kind === 'waves') return svg(`${grid}<path d="M20 129Q59 25 103 111T182 95T259 69T340 96T407 33" fill="none" stroke="#49e1be" stroke-width="4"/><path d="M20 139Q59 77 103 121T182 104T259 89T340 103T407 57" fill="none" stroke="#89aefc" stroke-width="2.5" stroke-dasharray="6 6" opacity=".75"/><circle cx="259" cy="69" r="6" fill="#fff" stroke="#49e1be" stroke-width="4"/>`);
    if (kind === 'contours') return svg(`${grid}<g fill="none" stroke="#79e5d4" stroke-opacity=".72"><ellipse cx="211" cy="86" rx="169" ry="67" stroke-width="1.8" transform="rotate(-13 211 86)"/><ellipse cx="213" cy="87" rx="139" ry="56" stroke-width="2" transform="rotate(-13 213 87)"/><ellipse cx="216" cy="87" rx="108" ry="43" stroke-width="2" transform="rotate(-13 216 87)"/><ellipse cx="218" cy="87" rx="77" ry="30" stroke-width="2.2" transform="rotate(-13 218 87)"/><ellipse cx="220" cy="86" rx="39" ry="16" stroke-width="2.5" transform="rotate(-13 220 86)"/></g><circle cx="220" cy="86" r="7" fill="#86e7d4"/><circle cx="114" cy="118" r="4" fill="#99b2ff"/><circle cx="300" cy="54" r="4" fill="#99b2ff"/>`);
    if (kind === 'signals') return svg(`${grid}<path d="M16 85h31l13-20 15 41 20-72 21 94 18-43h24l16-29 17 63 22-42 28-1 18-25 13 46 23-20h26l12-19 16 37 13-18h29" fill="none" stroke="#58e9cf" stroke-width="3.5" stroke-linejoin="round"/><path d="M16 119Q60 113 104 116T190 111T272 118T404 102" fill="none" stroke="#8ca9ff" stroke-width="2" stroke-dasharray="7 7"/><circle cx="275" cy="77" r="6" fill="#a4b6ff"/>`);
    if (kind === 'segmentation') return svg(`${grid}<g transform="translate(76 20)" stroke="#9ef2e4" stroke-width="1"><rect x="0" y="0" width="105" height="105" rx="6" fill="#4dd6c1" fill-opacity=".12"/><path d="M10 50H96 M52 10V95" stroke-width="14" stroke-opacity=".6"/><rect x="133" y="0" width="105" height="105" rx="6" fill="#829cff" fill-opacity=".07"/><path d="M143 53H228 M184 12V93" stroke-width="13" stroke="#8ca9ff" stroke-dasharray="8 2" stroke-opacity=".75"/></g><path d="M195 76h15" stroke="#d7fff7" stroke-width="2" stroke-dasharray="3 4"/><path d="M202 72l8 4-8 4" stroke="#d7fff7" stroke-width="2" fill="none"/>`);
    if (kind === 'anomaly') return svg(`${grid}<path d="M20 113L53 103L80 108L106 85L130 100L155 95L178 89L204 110L227 100L252 32L273 111L298 99L321 105L346 91L373 98L404 86" fill="none" stroke="#60e1ca" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="252" cy="32" r="13" fill="#ffc7ae" fill-opacity=".15" stroke="#ffc7ae" stroke-width="2.5"/><circle cx="252" cy="32" r="4" fill="#ffc7ae"/>`);
    if (kind === 'stocks') return svg(`${grid}<g stroke-width="2.2"><path d="M56 62V123 M95 52V115 M135 37V99 M174 60V125 M214 30V88 M254 40V100 M294 23V83 M334 28V95 M373 17V70" stroke="#a2f0de"/><rect x="48" y="83" width="16" height="25" fill="#56dcc3"/><rect x="87" y="68" width="16" height="29" fill="#55dec5"/><rect x="127" y="51" width="16" height="30" fill="#55dec5"/><rect x="166" y="77" width="16" height="25" fill="#a3b6ff"/><rect x="206" y="41" width="16" height="30" fill="#55dec5"/><rect x="246" y="57" width="16" height="21" fill="#a3b6ff"/><rect x="286" y="35" width="16" height="30" fill="#55dec5"/><rect x="326" y="46" width="16" height="25" fill="#a3b6ff"/><rect x="365" y="25" width="16" height="25" fill="#55dec5"/></g>`);
    return svg(`${grid}<circle cx="210" cy="80" r="45" fill="none" stroke="#58e9c7" stroke-width="3"/>`);
  }

  function setLink(id, href) { const el = $(id); if (el) el.href = href; }
  function initPerson() {
    const p = data.person;
    const mailto = `mailto:${p.email}`;
    ['heroEmail','contactEmail','footerEmail'].forEach(id=>setLink(id,mailto));
    $('emailText').textContent = p.email;
    ['navCv','heroCv','contactCv'].forEach(id=>setLink(id,safeUrl(p.cvUrl)));
    ['heroScholar','publicationScholar','footerScholar'].forEach(id=>setLink(id,safeUrl(p.scholarUrl)));
    $('aboutIntro').textContent = p.intro;
    $('aboutBody').textContent = p.about;
    if (p.githubUsername && /^[a-z\d](?:[a-z\d-]{0,37}[a-z\d])?$/i.test(p.githubUsername)) {
      const url = `https://github.com/${p.githubUsername}`;
      ['heroGithub','footerGithub'].forEach(id=>{setLink(id,url);$(id).classList.remove('hidden');});
    }
    if (p.linkedInUrl && safeUrl(p.linkedInUrl) !== '#') { setLink('footerLinkedin',p.linkedInUrl);$('footerLinkedin').classList.remove('hidden'); }
    $('year').textContent = new Date().getFullYear();
  }
  function renderStats() {
    $('statsGrid').innerHTML = data.stats.map(s=>`<div class="stat"><strong class="stat-value">${safe(s.value)}</strong><span class="stat-label">${safe(s.label)}</span></div>`).join('');
  }
  function renderProjects(filter = 'All') {
    const items = filter === 'All' ? data.projects : data.projects.filter(p=>p.category === filter);
    $('projectsCount').textContent = String(data.projects.length).padStart(2,'0');
    $('projectGrid').innerHTML = items.map((p,i)=>`<article class="project-card ${p.priority ? 'featured':''}">
      <div class="project-art ${safe(p.art)}"><span class="art-index">PROJECT ${String(data.projects.indexOf(p)+1).padStart(2,'0')}</span>${art(p.art)}<span class="art-right">${safe(p.category).toUpperCase()}</span></div>
      <div class="card-body"><div class="project-topline"><span class="type-pill ${safe(p.categoryClass)}">${safe(p.category)}</span><span class="project-year">${safe(p.year)}</span></div>
      <h3>${safe(p.shortTitle)}</h3><p class="card-summary">${safe(p.summary)}</p>
      <div class="card-tags">${p.tags.slice(0,3).map(t=>`<span>${safe(t)}</span>`).join('')}</div>
      <div class="card-bottom"><small>${safe(p.status)}</small><button type="button" class="project-open" data-project="${safe(p.id)}" aria-label="View details for ${safe(p.title)}">Case study ↗</button></div></div></article>`).join('');
    $('projectGrid').querySelectorAll('[data-project]').forEach(btn=>btn.addEventListener('click',()=>openProject(btn.dataset.project)));
  }
  function openProject(id) {
    const p = data.projects.find(project=>project.id === id);
    if (!p) return;
    const group = [
      ['THE PROBLEM',p.problem],
      ['APPROACH',p.approach],
      ['RESULTS & EVIDENCE',p.evidence]
    ];
    $('dialogBody').innerHTML = `<div class="dialog-kicker">${safe(p.category)} / ${safe(p.status)}</div>
      <h2 class="dialog-title" id="dialogTitle">${safe(p.title)}</h2><p class="dialog-standfirst">${safe(p.summary)}</p>
      <div class="dialog-metadata">${p.tags.map(t=>`<span>${safe(t)}</span>`).join('')}</div>
      ${group.map(([label,body])=>`<section class="dialog-part"><h4>${label}</h4><p>${safe(body)}</p></section>`).join('')}
      <div class="dialog-note"><strong>Transparency note:</strong> ${safe(p.note)}</div>
      <div class="dialog-links">${p.links.filter(l=>safeUrl(l.url)!=='#').map(l=>`<a href="${safe(safeUrl(l.url))}" target="_blank" rel="noopener noreferrer">${safe(l.label)} ↗</a>`).join('')}<a href="mailto:${safe(encodeURIComponent(data.person.email))}?subject=${encodeURIComponent('Question about '+p.shortTitle)}">Discuss this project ↗</a></div>`;
    const d = $('projectDialog');
    if (typeof d.showModal === 'function') d.showModal(); else d.setAttribute('open','');
    $('dialogClose').focus();
  }
  function renderSkills() {
    $('skillGrid').innerHTML = data.skills.map((category,i)=>`<article class="skill-card"><span class="skill-number">${String(i+1).padStart(2,'0')} / EXPERTISE</span><h3>${safe(category.category)}</h3><div class="skill-tags">${category.items.map(t=>`<span class="skill-tag">${safe(t)}</span>`).join('')}</div></article>`).join('');
  }
  function renderExperience() {
    $('timeline').innerHTML = data.experience.map(x=>`<article class="timeline-entry"><span class="date">${safe(x.dates)} · ${safe(x.place)}</span><h3>${safe(x.role)}</h3><div class="timeline-org">${safe(x.organisation)}</div><p>${safe(x.detail)}</p></article>`).join('');
  }
  function renderPublications() {
    $('publicationsList').innerHTML = data.publications.map((p,i)=>`<article class="publication"><span class="publication-number">${String(i+1).padStart(2,'0')}</span><div><h3>${safe(p.title)}</h3><p>${safe(p.venue)}</p></div><a href="${safe(safeUrl(p.url))}" target="_blank" rel="noopener noreferrer" aria-label="Read ${safe(p.title)}">Read paper ↗</a></article>`).join('');
  }
  function initNavigation() {
    const toggle = $('menuToggle'), nav = $('primary-navigation');
    toggle.addEventListener('click',()=>{const open = nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close menu':'Open menu');});
    nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Open menu');}));
  }
  function initFilters() {
    $('projectFilters').querySelectorAll('button').forEach(button=>button.addEventListener('click',()=>{
      $('projectFilters').querySelectorAll('button').forEach(other=>{other.classList.toggle('active',other===button);other.setAttribute('aria-pressed',String(other===button));});
      renderProjects(button.dataset.filter);
    }));
  }
  function initTheme() {
    let saved = null;
    try { saved = localStorage.getItem('pjb-theme'); } catch (_) { /* local previews may have no storage */ }
    const isDark = saved === 'dark';
    document.body.classList.toggle('dark',isDark);
    const applyLabel = ()=> $('themeToggle').setAttribute('aria-label', document.body.classList.contains('dark') ? 'Switch to light mode':'Switch to dark mode');
    applyLabel();
    $('themeToggle').addEventListener('click',()=>{document.body.classList.toggle('dark');try { localStorage.setItem('pjb-theme',document.body.classList.contains('dark')?'dark':'light'); } catch (_) {} applyLabel();});
  }
  function initDialog() {
    $('dialogClose').addEventListener('click',()=>$('projectDialog').close());
    $('projectDialog').addEventListener('click',event=>{if (event.target === $('projectDialog')) $('projectDialog').close();});
  }
  initPerson(); renderStats(); renderProjects(); renderSkills(); renderExperience(); renderPublications(); initNavigation(); initFilters(); initTheme(); initDialog();
})();
