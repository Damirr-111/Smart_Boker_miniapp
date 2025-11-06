(function () {
  const tg = window.Telegram?.WebApp;

  // Init Telegram theme
  try {
    tg?.expand?.();
    tg?.ready?.();
    const bg = tg?.themeParams?.bg_color;
    if (bg) document.documentElement.style.setProperty('--bg', bg);
  } catch (e) {
    // no-op
  }

  const $ = (id) => document.getElementById(id);

  // Defaults (can be overridden by URL params)
  const defaults = {
    site: 'https://seneshal.com',
    bot: '', // t.me/<bot>?start=booking
    support: 'https://t.me/', // t.me/<username> or wa.me/<phone>
    catalogTrigger: 'SHOW_ROOMS_CATALOG'
  };

  const params = new URLSearchParams(location.search);
  const site = params.get('site') || defaults.site;
  const bot = params.get('bot') || defaults.bot; // example: SeneshalHotelBot
  const support = params.get('support') || defaults.support; // example: SeneshalSupport or wa.me/7903...
  const supportIsUser = support && !/^https?:\/\//i.test(support);

  // Buttons
  const btnSite = $('btn-site');
  const btnBook = $('btn-book');
  const btnSupport = $('btn-support');
  const btnCatalog = $('btn-catalog');

  if (btnSite) {
    btnSite.href = site;
    const span = btnSite.querySelector('span');
    try { span.textContent = new URL(site).hostname; } catch (_) {}
  }

  if (btnBook) {
    if (bot) {
      btnBook.href = `https://t.me/${bot}?start=booking`;
    } else {
      btnBook.classList.add('disabled');
      btnBook.style.opacity = 0.7;
      btnBook.style.pointerEvents = 'none';
    }
  }

  if (btnSupport) {
    if (support) {
      if (supportIsUser) {
        btnSupport.href = `https://t.me/${support}`;
      } else {
        btnSupport.href = support;
      }
    } else {
      btnSupport.classList.add('disabled');
      btnSupport.style.opacity = 0.7;
      btnSupport.style.pointerEvents = 'none';
    }
  }

  if (btnCatalog) {
    btnCatalog.addEventListener('click', () => {
      const payload = 'SHOW_ROOMS_CATALOG';
      // Prefer MainButton to signal action if inside TG
      if (tg?.MainButton) {
        tg.MainButton.setText('Открываю каталог…');
        tg.MainButton.show();
        setTimeout(() => tg.MainButton.hide(), 1200);
      }
      // Send a message to bot via data
      try {
        tg?.sendData?.(payload);
      } catch (e) {
        // Fallback: redirect to site catalog if available
        location.href = site;
      }
    });
  }
})();


