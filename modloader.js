// modloader.js - Improved & cleaned version
(async function loadEndroidMods() {
  console.log('[Endroid Mod Loader] Starting...');

  const modsFolder = 'mods/';
  const appRegistry = (window.Apps ||= {});

  // Wait for DOM
  await new Promise(res => {
    if (document.readyState !== 'loading') return res();
    document.addEventListener('DOMContentLoaded', res, { once: true });
  });

  const startMenuItems = document.querySelector('#start-menu .menu-items');
  if (!startMenuItems) {
    console.error('[Endroid Mod Loader] Start menu container not found.');
    return;
  }

  // ────────────────────────────────────────────────
  // Helpers
  // ────────────────────────────────────────────────
  function cleanBase64(str) {
    return (str || '').replace(/^\uFEFF/, '').replace(/\s+/g, '');
  }

  function safeAtob(str, filename) {
    try {
      return atob(str);
    } catch (e) {
      console.error(`Base64 decode failed: ${filename}`, e);
      return null;
    }
  }

  function extractAppPayload(base64, filename) {
    const cleaned = cleanBase64(base64);
    const decoded = safeAtob(cleaned, filename);
    if (!decoded) return null;

    const match = decoded.match(/app\.endroidJS-application\s*\(\s*([\s\S]*?)\s*\)\s*$/);
    if (!match) {
      console.warn(`Invalid format in ${filename} - missing app.endroidJS-application({…}) wrapper`);
      return null;
    }

    const payload = match[1].trim();
    if (!/^\{[\s\S]*\}$/.test(payload)) {
      console.warn(`Payload in ${filename} is not a valid object literal`);
      return null;
    }

    return payload;
  }

  function generateSafeKey(title) {
    let key = (title || 'mod_app')
      .toLowerCase()
      .replace(/\s+/g, '_')
      .replace(/[^a-z0-9_-]/g, '');
    
    if (!key) key = 'mod_app';
    
    let counter = 2;
    while (key in appRegistry) {
      key = `${key.replace(/_\d+$/, '') || 'mod_app'}_${counter++}`;
    }
    return key;
  }

  function addToStartMenu(key, app) {
    const btn = document.createElement('button');
    btn.dataset.launch = key;
    btn.title = app.description || app.title || key;
    btn.textContent = app.title || key;
    startMenuItems.appendChild(btn);
  }

  function registerApp(code, filename) {
    if (!code) return;

    let appDef;
    try {
      appDef = (0, eval)('(' + code + ')');
    } catch (e) {
      console.error(`Eval failed in ${filename}:`, e);
      return;
    }

    if (!appDef || typeof appDef !== 'object') {
      console.warn(`Invalid app object in ${filename}`);
      return;
    }

    const key = generateSafeKey(appDef.title);
    appRegistry[key] = appDef;

    try {
      addToStartMenu(key, appDef);
      console.log(`Loaded mod: ${appDef.title || key} (${key}) from ${filename}`);
    } catch (e) {
      console.error(`Failed to add ${key} to Start menu:`, e);
    }
  }

  // ────────────────────────────────────────────────
  // Discover & load .mod files
  // ────────────────────────────────────────────────
  async function listModFiles() {
    try {
      const res = await fetch(modsFolder, { cache: 'no-store' });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const text = await res.text();
      const matches = [...text.matchAll(/href="([^"]+\.(?:mod|bnac))"/gi)];
      return matches.map(m => m[1].replace(/^\.?\//, ''));
    } catch (e) {
      console.warn('[Endroid Mod Loader] Cannot list mods folder:', e);
      return [];
    }
  }

  const files = await listModFiles();
  console.log(`Found ${files.length} mod file(s):`, files);

  for (const file of files) {
    const url = modsFolder + file;
    console.log(`Loading: ${file}`);

    try {
      const res = await fetch(url, { cache: 'no-store' });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const text = await res.text();
      const payload = extractAppPayload(text, file);

      if (payload) {
        registerApp(payload, file);
      }
    } catch (err) {
      console.error(`Failed to load ${file}:`, err);
    }
  }

  console.log('[Endroid Mod Loader] Finished.');
})();
