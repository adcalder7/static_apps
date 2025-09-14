// Simple vanilla JS to fetch a text file and place contents in the textarea
(function(){
  const urlEl = document.getElementById('url');
  const btn = document.getElementById('btnGet');
  const out = document.getElementById('out');

  function setError(msg) {
    out.value = msg;
    out.classList.add('error');
  }

  function clearError() {
    out.classList.remove('error');
  }

  async function fetchAndShow(u) {
    clearError();
    out.value = 'Loading...';
    try {
      const useProxy = document.getElementById('useProxy') && document.getElementById('useProxy').checked;
      let attemptedProxy = false;
      let res = null;
      try {
        res = await fetch(u, { method: 'GET' });
      } catch (e) {
        // network/CORS error, try proxy below
      }
      // if direct failed or returned CORS-blocked opaque response, and proxy allowed, try proxy
      if ((!res || !res.ok) && useProxy) {
        attemptedProxy = true;
        const proxyUrl = 'https://api.allorigins.win/raw?url=' + encodeURIComponent(u);
        try {
          res = await fetch(proxyUrl, { method: 'GET' });
        } catch (pe) {
          // proxy failed
        }
      }
      if (!res) {
        setError('Fetch failed (no response). Try enabling the CORS proxy or check the URL.');
        return;
      }
      if (!res.ok) {
        setError('Fetch failed: ' + res.status + ' ' + res.statusText + (attemptedProxy ? ' (proxy used)' : ''));
        return;
      }
      const contentType = res.headers && res.headers.get ? res.headers.get('content-type') : '';
      // try text if content-type contains text or application/javascript or json
      if (/^(text\/|application\/(javascript|json|xml|xhtml|html))/i.test(contentType) || contentType === '') {
        const text = await res.text();
        out.value = text;
      } else {
        // still try text fallback but warn
        const text = await res.text();
        out.value = text;
        // we don't mark error but show a hint
        out.value = '// NOTE: content-type: ' + contentType + '\n' + text;
      }
    } catch (e) {
      setError('Error: ' + (e && e.message ? e.message : String(e)));
    }
  }

  btn.addEventListener('click', () => {
    const v = String(urlEl.value || '').trim();
    if (!v) return;
    fetchAndShow(v);
  });

  // allow dropping a URL into the input
  urlEl.addEventListener('dragover', (e) => { e.preventDefault(); e.dataTransfer.dropEffect = 'copy'; });
  urlEl.addEventListener('drop', (e) => {
    e.preventDefault();
    // if files were dropped, ignore (we're expecting URLs). If a text/uri-list is present use it
    const uri = e.dataTransfer.getData('text/uri-list') || e.dataTransfer.getData('text/plain');
    if (uri) urlEl.value = uri;
  });

  // also allow paste of a URL (common)
  urlEl.addEventListener('paste', (e) => {
    const txt = (e.clipboardData || window.clipboardData).getData('text');
    if (txt) {
      // don't override if input already has content
      if (!urlEl.value) urlEl.value = txt;
    }
  });

  // quick keyboard shortcut: Enter in the input triggers Get
  urlEl.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); btn.click(); } });
})();
