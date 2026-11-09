const menu=document.querySelector('.menu-toggle');const nav=document.querySelector('#navigation');menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open)});nav.addEventListener('click',e=>{if(e.target.closest('a')){menu.setAttribute('aria-expanded','false');nav.classList.remove('open')}});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu.getAttribute('aria-expanded')==='true'){menu.setAttribute('aria-expanded','false');nav.classList.remove('open');menu.focus()}});document.querySelectorAll('[data-format]').forEach(link=>link.addEventListener('click',()=>{document.querySelector('[name="format"]').value=link.dataset.format}));document.querySelector('#enquiry').addEventListener('submit',e=>{e.preventDefault();const data=new FormData(e.currentTarget);const message=`Hi Paulo,

I'd like to enquire about ${data.get('format').toLowerCase()}.

My name: ${String(data.get('name')).trim()}
My goals: ${String(data.get('goals')).trim()}

Please let me know about suitable sessions, availability, and pricing.

Thank you!`;document.querySelector('#enquiry-text').value=message;document.querySelector('#enquiry-result').hidden=false;document.querySelector('#send-email').href=`mailto:Paulo@brazilianfootwork.com?subject=${encodeURIComponent('Brazilian Footwork training enquiry')}&body=${encodeURIComponent(message)}`;document.querySelector('#enquiry-text').focus()});document.querySelector('#copy').addEventListener('click',async()=>{const box=document.querySelector('#enquiry-text');try{await navigator.clipboard.writeText(box.value);document.querySelector('#copy-status').textContent='Enquiry copied.'}catch{box.focus();box.select();document.querySelector('#copy-status').textContent='Select and copy the enquiry text, then email Paulo@brazilianfootwork.com.'}});

