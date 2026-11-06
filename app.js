(() => {
  const root = new URL('.', document.currentScript.src);
  const routes = {
    home: 'home_choudhary_dental_hospital/code.html',
    services: 'services_choudhary_dental_hospital/code.html',
    'book-appointment': 'book_appointment_choudhary_dental_hospital/code.html',
    'admin-dashboard': 'admin_dashboard_choudhary_dental_hospital_cms/code.html',
  };
  const publicPages = ['about-us','doctors','patient-education','gallery','reviews','contact','privacy-policy','terms'];
  const adminPages = ['admin-appointments','admin-patients','admin-treatment-cms','admin-doctors-schedule','admin-enquiries'];
  document.querySelectorAll('[data-path]').forEach(link => {
    const path = link.dataset.path;
    let destination = routes[path];
    if (!destination && publicPages.includes(path)) destination = `content.html?page=${encodeURIComponent(path)}`;
    if (!destination && adminPages.includes(path)) destination = `content.html?page=${encodeURIComponent(path)}`;
    if (destination) link.href = new URL(destination, root).href;
  });

  // Give both the demo landing page and services page the same image-led,
  // accessible flip-card treatment.
  const photo = (id, width = 900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;
  const style = document.createElement('style');
  style.textContent = `
    :root{--clinic-ink:#082f3a;--clinic-teal:#07566b;--clinic-aqua:#dff4f8;--clinic-gold:#edb45d;--clinic-muted:#547079}
    html{scroll-behavior:smooth;scroll-padding-top:96px}
    .demo-site{background:#f7fbfc;color:var(--clinic-ink)}
    .demo-site ::selection{background:#bcebf3;color:#073947}
    .demo-site a:focus-visible,.demo-site button:focus-visible{outline:3px solid #e8aa4f;outline-offset:3px}
    .demo-site main>div>section:not(.demo-hero){position:relative}
    .demo-site .demo-section-title{letter-spacing:-.035em;max-width:760px}
    .demo-site .demo-section-title:after{content:"";display:block;width:54px;height:3px;border-radius:3px;background:linear-gradient(90deg,var(--clinic-teal),#8fd5e1);margin-top:13px}
    .demo-site header{box-shadow:0 6px 24px rgba(9,58,72,.055)!important}
    .demo-site header nav a{transition:color .2s ease,background-color .2s ease,transform .2s ease}
    .demo-site header nav a:hover{transform:translateY(-1px)}
    .demo-site .bg-tertiary-fixed.text-on-tertiary-fixed{box-shadow:0 10px 22px rgba(175,119,39,.17)}
    .demo-hero{min-height:640px}
    .demo-hero:after{content:"";position:absolute;width:450px;height:450px;border:1px solid rgba(255,255,255,.46);border-radius:50%;right:-185px;top:4%;box-shadow:0 0 0 32px rgba(255,255,255,.08),0 0 0 76px rgba(255,255,255,.055);pointer-events:none;z-index:-1}
    .demo-hero h1{max-width:720px;text-wrap:balance}
    .demo-hero p:not(.hero-promise){max-width:650px}
    .demo-hero .hero-promise:before{content:"";display:inline-block;width:22px;height:2px;background:var(--clinic-gold);vertical-align:middle;margin-right:9px}
    .demo-hero h1 .hero-title-accent{display:block;color:#08718a;position:relative;width:fit-content}
    .demo-hero h1 .hero-title-accent:after{content:"";position:absolute;left:0;right:3%;bottom:-5px;height:7px;border-radius:99px;background:linear-gradient(90deg,#f1bd67,#f1bd6700);opacity:.72}
    .demo-hero .hero-intro{font-size:18px;line-height:1.75;color:#435e66;max-width:620px}
    .hero-care-points{display:flex;flex-wrap:wrap;gap:10px 18px;margin-top:-3px}
    .hero-care-point{display:inline-flex;align-items:center;gap:7px;font-size:12px;font-weight:700;color:#31565f}
    .hero-care-point .material-symbols-outlined{font-size:17px;color:#08718a}
    .hero-portrait{position:relative;isolation:isolate;overflow:visible!important;width:82%!important;max-width:365px!important;margin-left:2%;margin-right:auto;aspect-ratio:.92!important;padding:0!important;border-radius:0!important;background:transparent!important;box-shadow:none!important;transform:none!important;transition:none!important}
    .hero-portrait:before{content:"";position:absolute;z-index:-1;left:8%;right:2%;top:5%;bottom:1%;border-radius:48% 48% 34% 34%;background:linear-gradient(155deg,#dff5f7 2%,#8bd1dc 62%,#f1c779);box-shadow:0 24px 65px rgba(3,49,63,.17)}
    .hero-portrait>img{position:relative;z-index:0;border-radius:48% 48% 28px 28px!important;box-shadow:0 28px 75px rgba(3,49,63,.28)!important;filter:saturate(1.04) contrast(1.025)}
    .hero-doctor-caption{position:absolute;z-index:2;top:20px;left:16px;display:flex;align-items:center;gap:9px;padding:10px 13px;border:1px solid #ffffff63;border-radius:14px;background:rgba(5,53,67,.84);color:white;backdrop-filter:blur(12px);box-shadow:0 10px 28px #052f3e2b}
    .hero-doctor-caption .material-symbols-outlined{color:#f3c16d;font-size:18px}
    .hero-doctor-caption span:last-child{display:flex;flex-direction:column;font-size:11px;font-weight:700;line-height:1.3}
    .hero-doctor-caption small{color:#d1e8ec;font-size:9px;font-weight:500;letter-spacing:.07em;text-transform:uppercase;margin-bottom:2px}
    .trust-ribbon{background:var(--clinic-ink);color:#edfafd;overflow:hidden;position:relative}
    .trust-ribbon-track{display:flex;align-items:center;justify-content:center;gap:30px;min-width:max-content;padding:15px 24px;animation:clinic-marquee 36s linear infinite}
    .trust-ribbon:hover .trust-ribbon-track{animation-play-state:paused}
    .trust-ribbon-item{display:inline-flex;align-items:center;gap:9px;font-size:12px;font-weight:700;letter-spacing:.11em;text-transform:uppercase;white-space:nowrap}
    .trust-ribbon-item .material-symbols-outlined{font-size:18px;color:#f0bc6b}
    .trust-ribbon-dot{width:5px;height:5px;background:#75cedc;border-radius:50%;flex:none}
    @keyframes clinic-marquee{to{transform:translateX(-50%)}}
    .clinic-reading-progress{position:fixed;z-index:80;top:0;left:0;height:3px;width:0;background:linear-gradient(90deg,#e8aa4f,#67c8d8,#08718a);box-shadow:0 0 10px #67c8d866;pointer-events:none}
    .clinic-quick-book{position:fixed;z-index:70;right:22px;bottom:22px;display:inline-flex;align-items:center;gap:10px;padding:9px 17px 9px 10px;background:#073d4b;color:#fff;border:1px solid #ffffff35;border-radius:999px;text-decoration:none;box-shadow:0 12px 35px #062f3c35;transition:transform .2s ease,box-shadow .2s ease}
    .clinic-quick-book:hover{transform:translateY(-3px);box-shadow:0 16px 40px #062f3c42}
    .clinic-quick-book .quick-icon{display:grid;place-items:center;width:36px;height:36px;border-radius:50%;background:#f0bc6b;color:#073d4b}
    .clinic-quick-book .quick-copy{display:flex;flex-direction:column;line-height:1.2}
    .clinic-quick-book .quick-copy strong{font-size:12px}
    .clinic-quick-book .quick-copy small{font-size:10px;color:#c4e5eb;margin-top:3px}
    .demo-site footer{background:#082f3a!important;color:#e7f3f5!important}
    .demo-site footer .text-primary{color:#8fd5e1!important}
    .demo-site footer .text-on-surface-variant{color:#b7cdd2!important}
    @media(max-width:767px){.demo-hero{min-height:unset}.trust-ribbon-track{justify-content:flex-start}.clinic-quick-book{right:12px;bottom:12px;padding-right:13px}.clinic-quick-book .quick-copy small{display:none}}
    @media(max-width:767px){.demo-hero{background-position:73% center!important}.demo-hero:before{background:linear-gradient(180deg,rgba(242,250,252,.97) 0%,rgba(242,250,252,.93) 48%,rgba(242,250,252,.68) 100%)}.hero-portrait{width:min(86vw,390px)!important;margin-inline:auto}}
    @media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}.trust-ribbon-track{animation:none;justify-content:center;flex-wrap:wrap;min-width:0}}
    .demo-hero{background-size:cover!important;background-position:58% center!important;isolation:isolate}
    .demo-hero:before{content:"";position:absolute;inset:0;background:linear-gradient(90deg,rgba(242,250,252,.98) 0%,rgba(242,250,252,.95) 33%,rgba(242,250,252,.82) 47%,rgba(242,250,252,.34) 68%,rgba(4,47,60,.12) 100%);z-index:-1}
    .demo-hero>div{position:relative}
    .demo-hero .hero-promise{font-size:12px;letter-spacing:.13em;text-transform:uppercase;font-weight:800;color:#08718a;margin:0 0 -8px}
    #doctors .doctor-profile{border:1px solid #d9edf2;box-shadow:0 24px 60px rgba(6,69,87,.11);position:relative;overflow:hidden}
    #doctors .doctor-profile:before{content:"";position:absolute;left:0;top:0;height:6px;width:100%;background:linear-gradient(90deg,#08718a,#84d1e4,#f2bd70)}
    #doctors .doctor-story{display:flex;align-items:flex-start;gap:14px;background:linear-gradient(120deg,#e9f8fc,#f5fbfc);border:1px solid #dceff3;border-radius:16px;padding:16px 18px;margin-top:4px}
    #doctors .doctor-story-icon{width:42px;height:42px;display:grid;place-items:center;flex:none;background:#fff;border-radius:13px;color:#08718a;box-shadow:0 4px 14px #07566b12}
    #doctors .doctor-story strong{display:block;color:#07566b;font-size:15px;margin-bottom:3px}
    #doctors .doctor-story span{color:#526970;font-size:13px;line-height:1.55}
    #doctors .doctor-photo-note{position:absolute;right:14px;top:14px;display:inline-flex;align-items:center;gap:7px;padding:8px 11px;border:1px solid #ffffffa6;border-radius:999px;background:#ffffffed;color:#07566b;font-size:11px;font-weight:800;box-shadow:0 8px 22px #06394720}
    #doctors .doctor-photo-note .material-symbols-outlined{font-size:16px;color:#08718a}
    #doctors .doctor-profile{padding:clamp(20px,3vw,42px)!important;border-radius:28px!important}
    #doctors .doctor-profile h2{font-size:clamp(30px,3.2vw,42px)!important;line-height:1.08!important;letter-spacing:-.045em;color:#082f3a!important}
    #doctors .doctor-profile h2:after{display:none!important}
    #doctors .doctor-profile .doctor-story{position:relative;isolation:isolate;overflow:hidden;background:linear-gradient(115deg,#073e4b,#0a7184)!important;border:0!important;box-shadow:0 12px 24px rgba(7,62,75,.16);padding:17px 19px}
    #doctors .doctor-profile .doctor-story:after{content:"";position:absolute;z-index:-1;width:140px;height:140px;right:-45px;top:-75px;border:1px solid #ffffff35;border-radius:50%;box-shadow:0 0 0 18px #ffffff09,0 0 0 38px #ffffff08}
    #doctors .doctor-profile .doctor-story-icon{background:#f0bc6b!important;border-radius:14px;color:#073e4b!important;box-shadow:none!important}
    #doctors .doctor-profile .doctor-story strong{color:#fff!important;font-size:15px}
    #doctors .doctor-profile .doctor-story span{color:#d7eef1!important}
    #doctors .doctor-expertise-card{position:relative;overflow:hidden;min-height:142px;padding:16px!important;border:1px solid #d9edf0;border-radius:16px;background:linear-gradient(145deg,#fff,#eff9fb)!important;box-shadow:0 7px 18px rgba(7,62,75,.045);transition:transform .2s ease,box-shadow .2s ease}
    #doctors .doctor-expertise-card:hover{transform:translateY(-3px);box-shadow:0 13px 24px rgba(7,62,75,.11)}
    #doctors .doctor-expertise-card:after{content:"";position:absolute;left:0;top:0;width:100%;height:3px;background:linear-gradient(90deg,#08718a,#8bd1dc,#f0bc6b)}
    #doctors .doctor-expertise-card .material-symbols-outlined{width:34px;height:34px;display:grid;place-items:center;border-radius:11px;background:#dff4f8;color:#08718a!important;margin-bottom:8px}
    #doctors .doctor-schedule{background:linear-gradient(115deg,#e2f4f7,#f1f9fa)!important;border:1px solid #d9edf0;border-radius:18px!important;padding:17px 19px!important}
    #doctors .doctor-schedule a{background:#07566b!important;border-radius:11px!important;box-shadow:0 8px 16px rgba(7,86,107,.17)}
    .clinic-quick-book.is-obscured{opacity:0;pointer-events:none;transform:translateY(12px)}
    .service-card.flip-card{padding:0!important;min-height:320px;height:320px;perspective:1200px;cursor:pointer;background:transparent!important;box-shadow:none!important;overflow:visible!important}
    .flip-card-inner{position:relative;width:100%;height:100%;border-radius:20px;transform-style:preserve-3d;transition:transform .65s cubic-bezier(.2,.75,.25,1);box-shadow:0 8px 22px rgba(9,58,72,.1)}
    .flip-card.is-flipped .flip-card-inner{transform:rotateY(180deg)}
    .flip-card-face{position:absolute;inset:0;border-radius:20px;overflow:hidden;backface-visibility:hidden;-webkit-backface-visibility:hidden}
    .flip-card-front{background:#07566b;color:#fff}
    .flip-card-front img{width:100%;height:100%;object-fit:cover;transition:transform .7s ease}
    .flip-card:hover .flip-card-front img{transform:scale(1.045)}
    .flip-card-front:after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(3,29,38,.05) 15%,rgba(3,29,38,.78) 100%)}
    .flip-card-front-copy{position:absolute;z-index:1;left:22px;right:22px;bottom:20px;color:white}
    .flip-card-front-copy small{display:inline-block;text-transform:uppercase;letter-spacing:.12em;font-size:11px;font-weight:700;color:#c9f3fb;margin-bottom:8px}
    .flip-card-front-copy h3{font-size:21px;line-height:1.25;margin:0 0 12px;color:white;font-weight:700}
    .flip-hint{display:inline-flex;align-items:center;gap:6px;padding:7px 10px;border-radius:99px;background:#ffffff24;border:1px solid #ffffff60;font-size:12px;color:white}
    .flip-card-back{transform:rotateY(180deg);display:flex;flex-direction:column;justify-content:space-between;padding:24px;background:linear-gradient(145deg,#fff,#e7f7fb);border:1px solid #d9edf2}
    .flip-card-back .flip-back-top{display:flex;align-items:center;gap:9px;color:#08718a;font-weight:700;font-size:12px;text-transform:uppercase;letter-spacing:.08em}
    .flip-card-back h3{font:700 21px/1.3 Inter,sans-serif;color:#073947;margin:16px 0 9px}
    .flip-card-back p{font-size:14px;line-height:1.7;color:#526970;margin:0}
    .flip-card-back .flip-card-cta{display:inline-flex;align-items:center;justify-content:center;gap:8px;background:#07566b;color:white;padding:11px 14px;border-radius:10px;text-decoration:none;font-size:13px;font-weight:700}
    .flip-card:focus-visible{outline:3px solid #e8a747;outline-offset:4px;border-radius:20px}
    @media(max-width:767px){.demo-hero{background-position:73% center!important}.demo-hero:before{background:linear-gradient(180deg,rgba(242,250,252,.97) 0%,rgba(242,250,252,.93) 48%,rgba(242,250,252,.68) 100%)}.hero-portrait{width:min(86vw,390px)!important}}
    @media(prefers-reduced-motion:reduce){.flip-card-inner,.flip-card-front img{transition:none}}
  `;
  document.head.append(style);

  const landingHero = document.querySelector('#services-directory')?.closest('main')?.querySelector('section');
  if (landingHero) {
    document.body.classList.add('demo-site');
    landingHero.classList.add('demo-hero');
    landingHero.style.backgroundImage = `url("${new URL('dental-hero-v2.png', root).href}")`;
    const headline = landingHero.querySelector('h1');
    if (headline && !landingHero.querySelector('.hero-promise')) {
      const promise = document.createElement('p');
      promise.className = 'hero-promise';
      promise.textContent = 'Gentle care. Clear answers. Healthier smiles.';
      headline.before(promise);
    }
    if (headline && !headline.querySelector('.hero-title-accent')) {
      headline.innerHTML = 'Your smile deserves <span class="hero-title-accent">care that feels right.</span>';
    }
    const introduction = landingHero.querySelector('h1')?.parentElement?.querySelector('p:not(.hero-promise)');
    if (introduction) {
      introduction.classList.add('hero-intro');
      if (!landingHero.querySelector('.hero-care-points')) {
        const points = document.createElement('div');
        points.className = 'hero-care-points';
        points.innerHTML = '<span class="hero-care-point"><span class="material-symbols-outlined" aria-hidden="true">favorite</span>Gentle, patient-first care</span><span class="hero-care-point"><span class="material-symbols-outlined" aria-hidden="true">radiology</span>Modern diagnostics</span><span class="hero-care-point"><span class="material-symbols-outlined" aria-hidden="true">family_restroom</span>Care for every age</span>';
        introduction.after(points);
      }
    }
    const heroPortrait = landingHero.querySelector('img')?.parentElement;
    if (heroPortrait) {
      heroPortrait.classList.add('hero-portrait');
      if (!heroPortrait.querySelector('.hero-doctor-caption')) {
        const caption = document.createElement('div');
        caption.className = 'hero-doctor-caption';
        caption.innerHTML = '<span class="material-symbols-outlined" aria-hidden="true">dentistry</span><span><small>Your dentist</small>Dr. M. K. Jhorar</span>';
        heroPortrait.append(caption);
      }
    }
    const ribbon = document.createElement('div');
    ribbon.className = 'trust-ribbon';
    ribbon.setAttribute('aria-label','Dental care pathways');
    const items = ['Family dental care','Root canal therapy','Dental implants','Braces & alignment','Gentle tooth care','Smile restoration'];
    const segment = items.map(label => `<span class="trust-ribbon-item"><span class="material-symbols-outlined" aria-hidden="true">dentistry</span>${label}</span><span class="trust-ribbon-dot" aria-hidden="true"></span>`).join('');
    ribbon.innerHTML = `<div class="trust-ribbon-track" aria-hidden="true">${segment}${segment}</div>`;
    landingHero.after(ribbon);

    const progress = document.createElement('div');
    progress.className = 'clinic-reading-progress';
    progress.setAttribute('aria-hidden','true');
    document.body.append(progress);
    const updateProgress = () => {
      const available = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = `${available > 0 ? Math.min(100, window.scrollY / available * 100) : 0}%`;
    };
    window.addEventListener('scroll', updateProgress, {passive:true});
    updateProgress();

    const quickBook = document.createElement('a');
    quickBook.className = 'clinic-quick-book';
    quickBook.href = new URL(routes['book-appointment'], root).href;
    quickBook.innerHTML = '<span class="quick-icon"><span class="material-symbols-outlined" aria-hidden="true">calendar_month</span></span><span class="quick-copy"><strong>Need a visit?</strong><small>Book a gentle consultation</small></span>';
    quickBook.setAttribute('aria-label','Book a dental consultation');
    document.body.append(quickBook);
  }

  if (document.querySelector('.service-card')) document.body.classList.add('demo-site');
  document.querySelectorAll('main section h2').forEach(title => title.classList.add('demo-section-title'));

  const doctorCard = document.querySelector('#doctors .bg-surface-container-lowest.rounded-3xl');
  if (doctorCard) {
    doctorCard.classList.add('doctor-profile');
    doctorCard.querySelectorAll('.grid-cols-1.sm\\:grid-cols-3 > div').forEach(item => item.classList.add('doctor-expertise-card'));
    const doctorBooking = doctorCard.querySelector('a[href="#appointment-booking"]');
    const doctorSchedule = doctorBooking?.parentElement;
    if (doctorSchedule) doctorSchedule.classList.add('doctor-schedule');
    const portrait = doctorCard.querySelector('img');
    const portraitFrame = portrait?.parentElement;
    if (portraitFrame && !portraitFrame.querySelector('.doctor-photo-note')) {
      const note = document.createElement('span');
      note.className = 'doctor-photo-note';
      note.innerHTML = '<span class="material-symbols-outlined" aria-hidden="true">verified</span>BDS · Since 1997';
      portraitFrame.append(note);
    }
    const bio = doctorCard.querySelector('p');
    if (bio && !doctorCard.querySelector('.doctor-story')) {
      const note = document.createElement('div');
      note.className = 'doctor-story';
      note.innerHTML = '<div class="doctor-story-icon"><span class="material-symbols-outlined">volunteer_activism</span></div><div><strong>Care built on experience and trust</strong><span>Dr. Jhorar has cared for generations of Rawatsar families, combining precise treatment with a gentle, personal approach.</span></div>';
      bio.after(note);
    }
    const quickBook = document.querySelector('.clinic-quick-book');
    const profileSection = document.querySelector('#doctors');
    if (quickBook && profileSection && 'IntersectionObserver' in window) {
      const profileObserver = new IntersectionObserver(([entry]) => {
        quickBook.classList.toggle('is-obscured', entry.isIntersecting);
      }, {threshold:0.04});
      profileObserver.observe(profileSection);
    }
  }

  const servicePhotos = [
    'photo-1606811971618-4486d14f3f99','photo-1609840114035-3c981b782dfe','photo-1606811841689-23dfddce3e95',
    'photo-1606811971618-4486d14f3f99','photo-1609840114035-3c981b782dfe','photo-1606811841689-23dfddce3e95',
  ];
  document.querySelectorAll('.service-card').forEach((card, index) => {
    if (card.classList.contains('flip-card')) return;
    const title = card.querySelector('h3')?.textContent.trim() || 'Dental care';
    const description = card.querySelector('p')?.textContent.trim() || 'Personalized dental care delivered with modern techniques and a gentle touch.';
    const category = card.querySelector('[class*="rounded-full"]')?.textContent.trim() || 'Dental care';
    const booking = card.querySelector('a[data-path="book-appointment"]') || card.querySelector('a[href*="appointment"]');
    const bookingHref = booking?.getAttribute('href') || '#appointment-booking';
    const categoryClass = [...card.classList].find(name => !['service-card','flip-card'].includes(name));
    card.className = `service-card flip-card ${categoryClass || ''}`;
    card.setAttribute('tabindex','0');
    card.setAttribute('role','button');
    card.setAttribute('aria-pressed','false');
    card.setAttribute('aria-label',`${title}. Click to read more.`);
    const image = servicePhotos[index % servicePhotos.length];
    card.innerHTML = `<div class="flip-card-inner"><div class="flip-card-face flip-card-front"><img src="${photo(image)}" alt="Dental care for ${title}" loading="lazy"><div class="flip-card-front-copy"><small>${category}</small><h3>${title}</h3><span class="flip-hint"><span class="material-symbols-outlined" style="font-size:16px">touch_app</span>Tap to learn more</span></div></div><div class="flip-card-face flip-card-back"><div><div class="flip-back-top"><span class="material-symbols-outlined">dentistry</span>${category}</div><h3>${title}</h3><p>${description}</p></div><a class="flip-card-cta" href="${bookingHref}">Book a consultation <span class="material-symbols-outlined" style="font-size:17px">arrow_forward</span></a></div></div>`;
    const toggle = () => { const flipped = card.classList.toggle('is-flipped'); card.setAttribute('aria-pressed',String(flipped)); };
    card.addEventListener('click', event => { if (!event.target.closest('a')) toggle(); });
    card.addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); toggle(); } });
  });
  document.querySelectorAll('form').forEach(form => {
    if (!location.pathname.includes('book_appointment')) return;
    form.addEventListener('submit', event => {
      event.preventDefault();
      const data = new FormData(form);
      const name = data.get('name') || data.get('fullName') || 'there';
      let notice = form.querySelector('[role="status"]');
      if (!notice) { notice = document.createElement('p'); notice.setAttribute('role','status'); notice.className='mt-4 rounded-xl bg-emerald-50 p-4 font-semibold text-emerald-800'; form.append(notice); }
      notice.textContent = `Thank you, ${name}. Please call +91 88667 02121 to confirm your appointment request.`;
    });
  });
})();
