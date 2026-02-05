// =====================
// Apps registry
// =====================
const Apps = {
  notepad: {
    title: 'Notepad',
    content: () => `
      <ul class="menu horizontal" role="menubar">
        <li role="menuitem" tabindex="0">
          File
          <ul class="menu" role="menu">
            <li role="menuitem" data-action="new">New</li>
            <li role="menuitem" data-action="open">Open…</li>
            <li role="menuitem" data-action="save">Save</li>
            <li role="menuitem" data-action="exit">Exit</li>
          </ul>
        </li>
        <li role="menuitem" tabindex="0">
          Edit
          <ul class="menu" role="menu">
            <li role="menuitem" data-action="undo">Undo</li>
            <li role="menuitem" data-action="cut">Cut</li>
            <li role="menuitem" data-action="copy">Copy</li>
            <li role="menuitem" data-action="paste">Paste</li>
          </ul>
        </li>
        <li role="menuitem" tabindex="0">
          Help
          <ul class="menu" role="menu">
            <li role="menuitem" data-action="about">About Notepad</li>
          </ul>
        </li>
      </ul>
      <div class="field-row-stacked" style="height:100%;">
        <textarea id="note" rows="12" style="width:100%; height:100%;"></textarea>
      </div>
    `,
    width: 500,
    height: 400
  },
  about: {
    title: 'About Endroid OS',
    content: () => `
      <div class="field-row-stacked" style="text-align:center;">
        <h3>What <i>is</i> Endroid OS</h3>
        <p>Endroid OS is a desktop environment developed to emulate Windows binaries in the browser.</p>
        <p>It supports up to 10-core usage for emulation and fully simulates the Windows UI.</p>
        <h3>Version</h3>
        <p>(emulated) Microsoft Windows 7 SP2</p>
        <p>(simulated) Endroid OS Version Release 5.2.72 Iteration 1</p>
      </div>
    `,
    width: 300,
    height: 200
  },
  properties: { 
    title: 'Desktop Properties', 
    content: () => ` 
      <div class="field-row-stacked"> 
        <label>Wallpaper:</label> 
        <select id="wallpaper-select"> 
          <option value="default" class="options">Default</option> 
          <option value="harmony" class="options">Harmony</option> 
          <option value="mountains" class="options">Mountains</option> 
          <option value="solid" class="options">Solid Color</option> 
        </select> 
      </div> 
      <div class="field-row-stacked"> 
        <label>Theme:</label> 
        <select id="theme-select"> 
          <option value="7">Windows 7 (7.css)</option> 
          <option value="classic">Classic (98.css)</option> 
          <option value="light">Light</option> 
          <option value="dark">Dark</option> 
        </select> 
      </div> 
      <div class="field-row" style="margin-top:1em; justify-content:flex-end;"> 
        <button class="button primary" id="apply-properties">Apply</button> 
        <button class="button">Cancel</button> 
      </div> 
    `, 
    width: 350, 
    height: 220 
  },
  chrome: {
    title: 'Google Chrome',
    content: () => `
<!-- Material UI & Icons CDN -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@mui/material@5.15.14/dist/material.min.css">
<script src="https://cdn.jsdelivr.net/npm/@mui/material@5.15.14/umd/material-ui.production.min.js"></script>
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<style>
  .chrome-window {
    display: flex;
    flex-direction: column;
    height: 100%;
    background: #fafafa;
    font-family: "Roboto", "Segoe UI", sans-serif;
    overflow: hidden;
  }
  .chrome-topbar {
    display: flex;
    align-items: center;
    background: #e0e0e0;
    height: 36px;
    padding: 0 8px;
    box-shadow: inset 0 -1px #ccc;
  }
  .chrome-tabs {
    display: flex;
    align-items: center;
    flex: 1;
    overflow-x: auto;
  }
  .tab {
    background: #f5f5f5;
    border-radius: 6px 6px 0 0;
    padding: 4px 12px;
    margin-right: 6px;
    font-size: 13px;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  .tab.active {
    background: #ffffff;
    border: 1px solid #ccc;
    border-bottom: none;
  }
  .tab .tab-close {
    margin-left: 6px;
    border: none;
    background: transparent;
    font-size: 14px;
    cursor: pointer;
  }
  .chrome-toolbar {
    display: flex;
    align-items: center;
    gap: 6px;
    background: #f9f9f9;
    padding: 6px 10px;
    border-bottom: 1px solid #ccc;
  }
  .nav-btn {
    border: none;
    background: transparent;
    cursor: pointer;
    font-size: 18px;
    color: #555;
  }
  .nav-btn:hover {
    color: #000;
  }
  .address-bar {
    flex: 1;
    border: 1px solid #ccc;
    border-radius: 6px;
    padding: 6px 10px;
    font-size: 14px;
    outline: none;
  }
  .chrome-content {
    flex: 1;
    background: white;
    overflow: hidden;
  }
  #browserFrame {
    width: 100%;
    height: 100%;
    border: 0;
  }
</style>
<div class="chrome-window">
  <!-- Tabs -->
  <div class="chrome-topbar">
    <div class="chrome-tabs" id="chromeTabs">
      <div class="tab active">
        <span class="tab-title" draggable="false">New Tab</span>
        <button class="tab-close">×</button>
      </div>
      <div class="tab new-tab" id="newTab">+</div>
    </div>
  </div>
  <!-- Toolbar -->
  <div class="chrome-toolbar">
    <button class="nav-btn" onclick="goBack()"><span class="material-icons">arrow_back</span></button>
    <button class="nav-btn" onclick="goForward()"><span class="material-icons">arrow_forward</span></button>
    <button class="nav-btn" onclick="reloadPage()"><span class="material-icons">refresh</span></button>
    <input type="text" class="address-bar" id="urlInput" draggable="false" style="-webkit-user-drag: none; /* For WebKit browsers */
  user-drag: none; /* Standard property, limited support */
  -webkit-user-select: none; /* Prevent text selection within the element */
  -moz-user-select: none; /* For Firefox */
  -ms-user-select: none; /* For older Edge/IE */" value="https://www.google.com/" placeholder="Enter a URL...">
    <button class="nav-btn" onclick="navigate()"><span class="material-icons">arrow_right_alt</span></button>
    <button class="nav-btn"><span class="material-icons">star_border</span></button>
  </div>
  <!-- Web content -->
  <div class="chrome-content">
    <iframe id="browserFrame" src="https://www.google.com/" frameborder="0"></iframe>
  </div>
</div>
<script>
  const iframe = document.getElementById('browserFrame');
  const urlInput = document.getElementById('urlInput');
  function safeUrl(u) {
    if (!/^https?:\/\//i.test(u)) return 'https://' + u;
    return u;
  }
  function navigate() {
    const url = safeUrl(urlInput.value.trim());
    iframe.src = url;
    urlInput.value = url;
  }
  function goBack() {
    try { iframe.contentWindow.history.back(); } catch {}
  }
  function goForward() {
    try { iframe.contentWindow.history.forward(); } catch {}
  }
  function reloadPage() {
    iframe.src = iframe.src;
  }
  // Tab creation (visual only)
  const tabBar = document.getElementById('chromeTabs');
  document.getElementById('newTab').addEventListener('click', () => {
    const newTab = document.createElement('div');
    newTab.classList.add('tab', 'active');
    newTab.innerHTML = '<span class="tab-title">New Tab</span><button class="tab-close">×</button>';
    tabBar.insertBefore(newTab, document.getElementById('newTab'));
    setActiveTab(newTab);
  });
  function setActiveTab(tab) {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
  }
  tabBar.addEventListener('click', (e) => {
    const tab = e.target.closest('.tab');
    if (!tab) return;
    if (e.target.classList.contains('tab-close')) {
      tab.remove();
      return;
    }
    setActiveTab(tab);
  });
  iframe.addEventListener('load', () => {
    urlInput.value = iframe.src;
  });
</script>
`,
    width: 900,
    height: 600
  },
  welcome: {
    title: 'Welcome!',
    content: () => `
      <div class="window-body" style="text-align:center; padding:1em;">
        <h2>Welcome to Endroid OS</h2>
        <p>In this operating system, you can multitask like the top banana!</p>
        <p>To continue with the tutorial, click "Continue". To exit, click the red "X" in the title bar.</p>
        <button class="button primary" onclick="
    const win = this.closest('.window');
    const id = [...windows.entries()].find(([_, data]) => data.el === win)?.[0];
    if (id) closeWindow(id);
    openApp('tutorial');
  ">Continue</button>
      </div>
    `,
    width: 300,
    height: 180,
    className: 'no-controls'
  },
  tutorial: {
    title: 'Getting Started',
    content: () => `
      <div class="window-body" style="padding:1em;">
        <h3>Welcome to Endroid OS</h3>
        <p>Here’s how to get started:</p>
        <ol>
          <li>Right-click anywhere on the desktop to open the context menu.</li>
          <li>Click the Start button to explore installed apps.</li>
          <li>Open "Desktop Properties" to change your wallpaper and theme.</li>
          <li>Try launching Notepad and typing something!</li>
          <li>Use the taskbar to switch between open windows.</li>
        </ol>
        <p>Endroid OS is provided under standard open-source terms. Enjoy!</p>
      </div>
    `,
    width: 400,
    height: 300,
    className: 'no-controls'
  },
  jspaint: {
    title: 'Paint',
    content: () => `
      <iframe src="https://jspaint.app" style="width:100%; height:100%; border:none;"></iframe>
    `,
    width: 800,
    height: 600,
    className: 'no-controls'
  },
  winamp: {
    title: 'WinAmp',
    content: () => `<head><script src="https://unpkg.com/webamp@2.2.0/built/webamp.bundle.min.js"></script></head><div style="width:100%; height:100%; position:relative;">
<div id="winamp-container" style="width:100%; height:100%;"></div>
    <script>
const webamp = new Webamp({
    initialTracks: [
        {
            metaData: {
                artist: "DJ Mike Llama",
                title: "Llama Whippin' Intro",
            },
            url: "https://cdn.jsdelivr.net/gh/captbaritone/webamp@43434d50cfe0db6511095a7e8a8f03f4aab4d395/skins/llama.mp3",
        }
      ],
    initialSkin: {
        url: "https://archive.org/download/winampskins-llama/llama.wsz"
    },
});
webamp.renderWhenReady(document.getElementById('winamp-container')).then(() => {
  console.log('Winamp ready');
}).catch(err => console.error('Winamp error:', err));
</script>
</div>`,
    width: 275,
    height: 116,
    className: 'no-controls'
  },
  saveas: {
    title: 'Save As',
    content: () => `
      <div class="window-body" style="padding:0.5em;">
        <div class="field-row-stacked">
          <label for="filename">File name:</label>
          <input type="text" id="filename" value="note.txt" style="width:100%;">
        </div>
        <div class="field-row-stacked" style="margin-top:1em;">
          <label for="filetype">Save as type:</label>
          <select id="filetype" style="width:100%;">
            <option value="txt">Text Document (*.txt)</option>
            <option value="html">Web Page (*.htm; *.html)</option>
            <option value="rtf">Rich Text Format (*.rtf)</option>
          </select>
        </div>
        <div class="field-row-stacked" style="margin-top:1em;">
          <label>Save in:</label>
          <div class="save-location">
            <ul class="folder-list">
              <li><strong>Downloads</strong> (C:\\Users\\Endroid OS\\Downloads)</li>
              <li>Documents</li>
              <li>Pictures</li>
              <li>Music</li>
              <li>Videos</li>
            </ul>
          </div>
        </div>
        <div class="field-row" style="justify-content: flex-end; margin-top:1em;">
          <button class="button primary" id="confirm-saveas">Save</button>
          <button class="button" id="cancel-saveas">Cancel</button>
        </div>
      </div>
    `,
    width: 500,
    height: 320,
    className: 'no-controls'
  },
  word: {
    title: 'Word',
    content: () => `
      <style>
        /* Root and typography */
        .w7-word {
          display: grid;
          grid-template-rows: auto auto auto 1fr auto;
          height: 100%;
          font-family: "Segoe UI", Tahoma, Arial, sans-serif;
          color: #1f2a44;
          letter-spacing: 0.1px;
        }
        /* Top chrome: orb, QAT, tabs (Win7 ribbon cap height) */
        .w7-top {
          position: relative;
          height: 36px;
          background: linear-gradient(#2f6db3, #274f87);
          border-bottom: 1px solid #1f3f6f;
        }
        .w7-orb {
          position: absolute; left: 6px; top: 4px;
          width: 28px; height: 28px; border-radius: 50%;
          background: radial-gradient(circle at 30% 28%, #8dc0ff 0%, #5a98df 45%, #2b579a 70%, #234a86 100%);
          box-shadow: inset 0 0 0 1px rgba(255,255,255,0.25), 0 1px 2px rgba(0,0,0,0.35);
          display: grid; place-items: center; color: #fff; font-weight: 700; font-size: 12px;
          cursor: pointer;
        }
        .w7-qat {
          position: absolute; left: 44px; top: 6px;
          display: flex; gap: 6px;
        }
        .w7-qat button {
          width: 22px; height: 22px; line-height: 0;
          background: linear-gradient(#fefefe, #f1f3f8);
          border: 1px solid #c5cbd7; border-radius: 2px;
          box-shadow: inset 0 0 0 1px #fff;
          cursor: pointer;
        }
        .w7-tabs {
          position: absolute; left: 8px; right: 8px; bottom: 0;
          height: 26px; display: flex; gap: 2px; align-items: end;
        }
        .w7-tab {
          border: 1px solid transparent; border-bottom: none;
          color: #eaf2ff; padding: 5px 12px 5px;
          border-radius: 4px 4px 0 0; cursor: pointer; font-size: 13px;
        }
        .w7-tab.active {
          background: #ffffff;
          color: #1f2940;
          border-color: #bfc7d3;
        }
        /* Ribbon body */
        .w7-ribbon {
          background: linear-gradient(#f7f8fc, #eef2f9);
          border-top: 1px solid #c7cede;
          border-bottom: 1px solid #c7cede;
          display: flex; gap: 14px; padding: 8px 10px 12px;
        }
        .w7-group {
          position: relative; background: #fff;
          border: 1px solid #d7dce7; border-radius: 3px;
          padding: 6px 8px 18px; min-width: 170px;
          display: grid; align-content: start; row-gap: 6px;
        }
        .w7-group .label {
          position: absolute; left: 50%; transform: translateX(-50%);
          bottom: -10px; padding: 0 6px; font-size: 10px; color: #5b6678; background: #eef2f9;
        }
        .w7-row { display: flex; gap: 6px; align-items: center; flex-wrap: wrap; }
        .w7-icon, .w7-btn, .w7-drop {
          background: linear-gradient(#fff, #f1f4fa);
          border: 1px solid #cfd6e2; border-radius: 2px;
          padding: 4px 6px; font-size: 12px; cursor: pointer;
        }
        .w7-icon { width: 26px; height: 26px; display: grid; place-items: center; padding: 0; }
        .w7-drop::after { content: " ▼"; font-size: 10px; color: #556; }
        .w7-icon:hover, .w7-btn:hover, .w7-drop:hover { background: #fff; }
        .w7-icon:active, .w7-btn:active, .w7-drop:active { background: #e9edf7; box-shadow: inset 0 0 0 1px #d0d7e4; }
        /* Dialog box launcher */
        .w7-launch {
          position: absolute; right: 4px; bottom: 2px; width: 14px; height: 14px;
          display: grid; place-items: center; color: #6b7384; cursor: pointer;
        }
        .w7-launch::before {
          content: "▾"; font-size: 12px; transform: rotate(-45deg);
        }
        /* Styles gallery */
        .w7-styles {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px;
        }
        .w7-style {
          border: 1px solid #cfd6e2; background: linear-gradient(#fff, #f5f7fb);
          padding: 6px; font-size: 11px; text-align: center; cursor: pointer;
        }
        /* Backstage (orb menu) */
        .w7-backstage {
          position: absolute; inset: 36px 0 auto 0; height: 280px; display: none;
        }
        .w7-backstage.open { display: grid; grid-template-columns: 220px 1fr; }
        .w7-bs-left {
          background: #2b579a; color: #fff; padding: 12px; display: grid; gap: 6px;
        }
        .w7-bs-left .item {
          padding: 8px 10px; border-radius: 3px; cursor: pointer;
        }
        .w7-bs-left .item:hover { background: rgba(255,255,255,0.12); }
        .w7-bs-right {
          background: #f6f8fc; border-bottom: 1px solid #c7cede; padding: 16px;
        }
        /* Document chrome */
        .w7-docwrap { display: grid; grid-template-rows: 24px 1fr; background: #d7d7d7; }
        .w7-ruler {
          height: 24px; background: linear-gradient(#f6f6f6, #ececec);
          border-bottom: 1px solid #c8c8c8; display: grid; align-items: center;
          padding: 0 30px; font-size: 10px; color: #666; letter-spacing: 2px;
        }
        .w7-scroll { overflow: auto; padding: 24px 0; }
        /* Page and zoom */
        .w7-page {
          background: #fff; width: 816px; /* 8.5in at 96dpi ≈ 816px */
          min-height: 1056px; /* 11in at 96dpi */
          margin: 0 auto; padding: 96px; /* 1in margins */
          box-shadow: 0 0 6px rgba(0,0,0,0.28); outline: none;
          transform-origin: top center;
        }
        /* Status bar */
        .w7-status {
          height: 26px; background: linear-gradient(#f3f3f3, #e9e9e9);
          border-top: 1px solid #c8c8c8; display: flex; align-items: center; justify-content: space-between;
          padding: 0 10px; font-size: 12px; color: #444;
        }
        .w7-status .seg { display: flex; align-items: center; gap: 12px; }
        .w7-div { width: 1px; height: 14px; background: #bdbdbd; }
        .w7-zoom { display: flex; align-items: center; gap: 6px; }
        .w7-zoom input[type="range"] { width: 160px; }
        /* Tooltips (enhanced) */
        .w7-tip {
          position: fixed; z-index: 99999; pointer-events: none; display: none;
          background: #ffffe1; border: 1px solid #c9c993; border-radius: 2px;
          padding: 6px 8px; font-size: 12px; color: #222; box-shadow: 0 1px 2px rgba(0,0,0,0.15);
        }
        /* Custom scrollbars (scoped) */
        .w7-scroll::-webkit-scrollbar { width: 10px; }
        .w7-scroll::-webkit-scrollbar-track { background: lightgray; }
        .w7-scroll::-webkit-scrollbar-thumb {
          background:
            linear-gradient(to bottom, #dbe6f1, #a8b8c8),
            repeating-linear-gradient(
              to bottom,
              transparent 0px,
              transparent calc(33% - 6px),
              #666 calc(33% - 6px),
              #666 calc(33% - 4px),
              transparent calc(33% - 4px),
              transparent calc(66% - 2px),
              #666 calc(66% - 2px),
              #666 calc(66%),
              transparent calc(66%),
              transparent calc(100% - 2px),
              #666 calc(100% - 2px),
              #666 100%
            );
          background-blend-mode: multiply; border: 1px solid #888; box-shadow: inset 0 0 1px #666;
        }
        /* Selection visuals feel */
        .w7-page *::selection { background: rgba(153, 191, 255, 0.6); }
        .w7-page { -webkit-user-select: text; user-select: text; }
      </style>
      <div class="w7-word" data-zoom="100">
        <!-- Top (orb, QAT, tabs) -->
        <div class="w7-top">
          <div class="w7-orb" data-tip="File (Alt+F)">W</div>
          <div class="w7-qat">
            <button data-cmd="save" data-tip="Save (Ctrl+S)">💾</button>
            <button data-cmd="undo" data-tip="Undo (Ctrl+Z)">↶</button>
            <button data-cmd="redo" data-tip="Redo (Ctrl+Y)">↷</button>
          </div>
          <div class="w7-tabs">
            <div class="w7-tab" data-tab="insert">Insert</div>
            <div class="w7-tab" data-tab="layout">Page Layout</div>
            <div class="w7-tab" data-tab="references">References</div>
            <div class="w7-tab" data-tab="mailings">Mailings</div>
            <div class="w7-tab" data-tab="review">Review</div>
            <div class="w7-tab" data-tab="view">View</div>
          </div>
          <div class="w7-backstage" id="w7Backstage">
            <div class="w7-bs-left">
              <div class="item">Save</div>
              <div class="item">Save As</div>
              <div class="item">Open</div>
              <div class="item">Close</div>
              <div class="item">Options</div>
            </div>
            <div class="w7-bs-right">
              <h3 style="margin:0 0 8px;">Info</h3>
              <p style="margin:0;">This is a mock Backstage area for the Word‑like app.</p>
            </div>
          </div>
        </div>
        <!-- Ribbon (Home tab content shown) -->
        <div class="w7-ribbon" id="w7Ribbon">
          <!-- Font -->
          <div class="w7-group">
            <div class="w7-row">
              <button class="w7-drop" id="fontFamily">Calibri</button>
              <button class="w7-drop" id="fontSize">11</button>
            </div>
            <div class="w7-row">
              <button class="w7-icon" data-exec="bold" data-tip="Bold (Ctrl+B)"><b>B</b></button>
              <button class="w7-icon" data-exec="italic" data-tip="Italic (Ctrl+I)"><i>I</i></button>
              <button class="w7-icon" data-exec="underline" data-tip="Underline (Ctrl+U)"><u>U</u></button>
              <button class="w7-icon" data-exec="strikethrough" data-tip="Strikethrough"><s>S</s></button>
            </div>
            <div class="w7-row">
              <button class="w7-btn" data-execv="foreColor:#2b579a" data-tip="Font Color">A</button>
              <button class="w7-btn" data-execv="hiliteColor:#fff59d" data-tip="Text Highlight">▇</button>
            </div>
            <div class="w7-launch" data-tip="Font dialog"></div>
            <div class="label">Font</div>
          </div>
          <!-- Paragraph -->
          <div class="w7-group">
            <div class="w7-row">
              <button class="w7-icon" data-exec="insertUnorderedList" data-tip="Bullets">•</button>
              <button class="w7-icon" data-exec="insertOrderedList" data-tip="Numbering">1.</button>
              <button class="w7-icon" data-exec="outdent" data-tip="Decrease Indent">⇤</button>
              <button class="w7-icon" data-exec="indent" data-tip="Increase Indent">⇥</button>
            </div>
            <div class="w7-row">
              <button class="w7-icon" data-execv="justify:left" data-tip="Align Left">≡</button>
              <button class="w7-icon" data-execv="justify:center" data-tip="Center">≡</button>
              <button class="w7-icon" data-execv="justify:right" data-tip="Align Right">≡</button>
              <button class="w7-icon" data-execv="justify:full" data-tip="Justify">≡</button>
            </div>
            <div class="w7-launch" data-tip="Paragraph dialog"></div>
            <div class="label">Paragraph</div>
          </div>
          <!-- Styles -->
          <div class="w7-group" style="min-width:220px;">
            <div class="w7-styles">
              <div class="w7-style" data-style="normal">Normal</div>
              <div class="w7-style" data-style="strong"><b>Strong</b></div>
              <div class="w7-style" data-style="emphasis"><i>Emphasis</i></div>
              <div class="w7-style" data-style="u"><u>Underline</u></div>
              <div class="w7-style" data-style="h1">Heading 1</div>
              <div class="w7-style" data-style="h2">Heading 2</div>
            </div>
            <div class="label">Styles</div>
          </div>
        </div>
        <!-- Document area (ruler + scroll with page) -->
        <div class="w7-docwrap">
          <div class="w7-ruler">0 1 2 3 4 5 6 7 8</div>
          <div class="w7-scroll">
            <div class="w7-page" id="w7Page" contenteditable="true">Start typing here...</div>
          </div>
        </div>
        <!-- Status bar -->
        <div class="w7-status">
          <div class="seg">
            <span id="w7PageInfo">Page 1 of 1</span>
            <div class="w7-div"></div>
            <span id="w7Words">Words: 0</span>
            <div class="w7-div"></div>
            <span>English (United States)</span>
          </div>
          <div class="seg w7-zoom">
            <span>Zoom</span>
            <input id="w7Zoom" type="range" min="50" max="200" value="100" />
            <span id="w7ZoomLabel">100%</span>
          </div>
        </div>
        <!-- Tooltip -->
        <div class="w7-tip" id="w7Tip"></div>
      </div>
      <script>
        (() => {
          const root = document.currentScript.closest('.window, .w7-word')?.querySelector('.w7-word') || document.querySelector('.w7-word');
          const page = root.querySelector('#w7Page');
          const tip = root.querySelector('#w7Tip');
          const backstage = root.querySelector('#w7Backstage');
          const zoomInput = root.querySelector('#w7Zoom');
          const zoomLabel = root.querySelector('#w7ZoomLabel');
          const wordsLbl = root.querySelector('#w7Words');
          /* Backstage toggle (orb) */
          root.querySelector('.w7-orb').addEventListener('click', () => {
            backstage.classList.toggle('open');
          });
          /* Tabs visual (single-tab demo) */
          root.querySelectorAll('.w7-tab').forEach(tab => {
            tab.addEventListener('click', () => {
              root.querySelectorAll('.w7-tab').forEach(t => t.classList.remove('active'));
              tab.classList.add('active');
              // For a full app, swap ribbon contents here based on data-tab
            });
          });
          /* Tooltip behavior */
          const tipTargets = root.querySelectorAll('[data-tip]');
          tipTargets.forEach(el => {
            el.addEventListener('mouseenter', e => {
              tip.textContent = el.getAttribute('data-tip');
              tip.style.display = 'block';
            });
            el.addEventListener('mousemove', e => {
              tip.style.left = (e.clientX + 12) + 'px';
              tip.style.top = (e.clientY + 16) + 'px';
            });
            el.addEventListener('mouseleave', () => tip.style.display = 'none');
          });
          /* Formatting with execCommand (simple, nostalgic) */
          function exec(cmd, val) {
            document.execCommand(cmd, false, val || null);
            page.focus();
          }
          root.querySelectorAll('[data-exec]').forEach(b => b.addEventListener('click', () => exec(b.dataset.exec)));
          root.querySelectorAll('[data-execv]').forEach(b => {
            b.addEventListener('click', () => {
              const [k, v] = b.dataset.execv.split(':');
              if (k === 'justify') exec('justify' + v[0].toUpperCase() + v.slice(1));
              else exec(k, v);
            });
          });
          /* Font family/size dropdowns (mock quick sets) */
          root.querySelector('#fontFamily').addEventListener('click', () => {
            const next = { 'Calibri':'Times New Roman', 'Times New Roman':'Arial', 'Arial':'Calibri' };
            const btn = root.querySelector('#fontFamily');
            btn.textContent = next[btn.textContent] || 'Calibri';
            exec('fontName', btn.textContent);
          });
          root.querySelector('#fontSize').addEventListener('click', () => {
            const next = { '11':'12', '12':'14', '14':'16', '16':'11' };
            const btn = root.querySelector('#fontSize');
            btn.textContent = next[btn.textContent] || '12';
            exec('fontSize', { '11':'3','12':'3','14':'4','16':'5' }[btn.textContent] || '3');
          });
          /* Styles gallery quick‑apply */
          root.querySelectorAll('.w7-style').forEach(s => s.addEventListener('click', () => {
            const st = s.dataset.style;
            if (st === 'normal') { exec('removeFormat'); return; }
            if (st === 'strong') { exec('bold'); return; }
            if (st === 'emphasis') { exec('italic'); return; }
            if (st === 'u') { exec('underline'); return; }
            if (st === 'h1') { exec('formatBlock', '<h1>'); return; }
            if (st === 'h2') { exec('formatBlock', '<h2>'); return; }
          }));
          /* Zoom (true page scaling, like decompiled binaries) */
          function setZoom(v) {
            page.style.transform = 'scale(' + (v/100) + ')';
            root.dataset.zoom = v;
            zoomLabel.textContent = v + '%';
          }
          zoomInput.addEventListener('input', e => setZoom(e.target.value));
          setZoom(100);
          /* Word count (status bar) */
          function countWords(txt) {
            const s = txt.replace(/<[^>]+>/g,' ').replace(/&nbsp;/g,' ').trim();
            if (!s) return 0;
            return s.split(/\s+/).length;
          }
          function updateWords() {
            wordsLbl.textContent = 'Words: ' + countWords(page.innerHTML);
          }
          page.addEventListener('input', updateWords);
          updateWords();
          /* Keyboard shortcuts (nostalgic) */
          root.addEventListener('keydown', e => {
            if (e.ctrlKey) {
              if (e.key.toLowerCase() === 'b') { exec('bold'); e.preventDefault(); }
              if (e.key.toLowerCase() === 'i') { exec('italic'); e.preventDefault(); }
              if (e.key.toLowerCase() === 'u') { exec('underline'); e.preventDefault(); }
              if (e.key.toLowerCase() === 'z') { exec('undo'); e.preventDefault(); }
              if (e.key.toLowerCase() === 'y') { exec('redo'); e.preventDefault(); }
              if (e.key.toLowerCase() === 's') { /* mock save */ e.preventDefault(); }
            }
            if (e.altKey && (e.key === 'f' || e.key === 'F')) { backstage.classList.toggle('open'); e.preventDefault(); }
          });
          /* Dialog launchers (mock) */
          root.querySelectorAll('.w7-launch').forEach(ln => {
            ln.addEventListener('click', () => {
              alert('This would open the classic dialog (mock).');
            });
          });
          /* Focus the page for immediate typing */
          setTimeout(() => page.focus(), 50);
        })();
      </script>
    `,
    width: 700,
    height: 500
  },
  cmd: {
      title: 'Administrator:C:\\Windows\\system32\\cmd.exe',
      content: () => '<style>body { background-color: black; border: none; }</style> <iframe id="kernel32" src="system32/cmd.html" style="width: 100vw; height: 100vh; border: none;"></iframe>',
    width: 700,
    height: 500
  },
  license: {
    title: 'Endroid OS Activation',
    content: () => `
      <div style="font-family: 'Segoe UI', Tahoma, sans-serif; padding: 20px; text-shadow: none; cursor: url('https://archive.org/download/windows7_cursors/aero-cursors/aero_arrow.cur'), default !important;">
       
        <h2 style="color: #1a4fa3; margin-top: 0; cursor: url('https://archive.org/download/windows7_cursors/aero-cursors/aero_arrow.cur'), default !important;">Type your product key</h2>
       
        <p style="font-size: 14px; font-weight: lighter; color: #000; cursor: url('https://archive.org/download/windows7_cursors/aero-cursors/aero_arrow.cur'), default !important;">
          The Endroid OS product key can be found on your purchase receipt.
          Activation will register the product key to this computer.
        </p>
        <p style="margin-top: 20px; font-size: 14px; color: #000; cursor: url('https://archive.org/download/windows7_cursors/aero-cursors/aero_arrow.cur'), default !important;">
          The product key looks like this:
        </p>
        <p style="font-weight: bold; font-size: 16px; margin: 10px 0; cursor: url('https://archive.org/download/windows7_cursors/aero-cursors/aero_arrow.cur'), default !important;">
          PRODUCT KEY: XXXXX-XXXXX-XXXXX-XXXXX-XXXXX
        </p>
        <a href="#productkey" style="font-size: 13px; color: #1a4fa3; text-decoration: underline; display: block; margin-bottom: 20px; cursor: url('https://archive.org/download/windows7_cursors/aero-cursors/aero_link.cur'), pointer !important;">
          Where do I find my Endroid OS product key?
        </a>
        <label for="prod-key" style="font-size: 14px; cursor: url('https://archive.org/download/windows7_cursors/aero-cursors/aero_arrow.cur'), default !important;"><style="font-size: 14px; cursor: url('https://archive.org/download/windows7_cursors/aero-cursors/aero_arrow.cur'), default !important;"u>P</u>roduct Key:</label><br>
        <input
          id="prod-key"
          type="text"
          style="width: 60%; font-size: 14px; padding: 6px; margin-top: 5px; margin-bottom: 20px; cursor: url('https://archive.org/download/windows7_cursors/aero-cursors/aero_select.cur'), text !important;" maxlength="29"
        >
       
  <script>
  document.addEventListener('DOMContentLoaded', () => {
      document.getElementById('prod-key').addEventListener('input', function (e) {
          let formattedValue = '';
          const value = e.target.value.replace(/-/g, ''); // Remove existing dashes
          for (let i = 0; i < value.length; i++) {
              formattedValue += value[i];
              if ((i + 1) % 5 === 0 && (i + 1) < value.length) { // Add dash every 5 digits, but not after the last digit
                  formattedValue += '-';
              }
          }
          // Truncate if the formatted value exceeds the effective max length (25 digits + 4 dashes)
          if (formattedValue.length > 29) {
              formattedValue = formattedValue.substring(0, 29);
          }
          e.target.value = formattedValue;
      });
  });
  </script>
        <div style="border-top: 1px solid #ccc; padding-top: 10px; display: flex; justify-content: flex-end; gap: 10px; cursor: url('https://archive.org/download/windows7_cursors/aero-cursors/aero_arrow.cur'), default !important;">
          <button style="font-size: 14px; padding: 5px 15px; cursor: url('https://archive.org/download/windows7_cursors/aero-cursors/aero_arrow.cur'), default !important;">Next</button>
          <button style="font-size: 14px; padding: 5px 15px; cursor: url('https://archive.org/download/windows7_cursors/aero-cursors/aero_arrow.cur'), default !important;">Cancel</button>
        </div>
        <div style="margin-top: 30px; font-size: 13px; cursor: url('https://archive.org/download/windows7_cursors/aero-cursors/aero_arrow.cur'), default !important;">
          <a href="#activation" style="color: #1a4fa3; text-decoration: underline; display: block; cursor: url('https://archive.org/download/windows7_cursors/aero-cursors/aero_link.cur'), pointer !important;">What is activation?</a>
          <a href="#privacy" style="color: #1a4fa3; text-decoration: underline; display: block; cursor: url('https://archive.org/download/windows7_cursors/aero-cursors/aero_link.cur'), pointer !important;">Read the privacy statement online</a>
        </div>
      </div>
    `,
    width: 700,
    height: 500
  }
};
// =====================
// DOM references
// =====================
const desktop = document.getElementById('desktop');
const taskButtons = document.getElementById('task-buttons');
const startBtn = document.getElementById('start-btn');
const startMenu = document.getElementById('start-menu');
const clockEl = document.getElementById('clock');
const contextMenu = document.getElementById('context-menu');
const dragBox = document.getElementById('drag-box');
// =====================
// Drag box logic
// =====================
const browserShortcut = document.getElementById('browser-shortcut');
let dragStartX = 0, dragStartY = 0;
// -----------------
// Single click select / deselect
// -----------------
browserShortcut.addEventListener('click', e => {
  e.stopPropagation(); // prevent desktop click from firing
  browserShortcut.classList.add('selected');
});
desktop.addEventListener('mousedown', e => {
  if (e.button !== 0 || e.target.closest('.window')) return;
  dragStartX = e.pageX;
  dragStartY = e.pageY;
  Object.assign(dragBox.style, {
    left: dragStartX + 'px',
    top: dragStartY + 'px',
    width: '0px',
    height: '0px',
    display: 'block'
  });
  // clear previous selection
  browserShortcut.classList.remove('selected');
  function onMouseMove(e) {
    const x = Math.min(e.pageX, dragStartX);
    const y = Math.min(e.pageY, dragStartY);
    const w = Math.abs(e.pageX - dragStartX);
    const h = Math.abs(e.pageY - dragStartY);
    Object.assign(dragBox.style, {
      left: x + 'px',
      top: y + 'px',
      width: w + 'px',
      height: h + 'px'
    });
    // Check overlap with browser shortcut
    const boxRect = dragBox.getBoundingClientRect();
    const iconRect = browserShortcut.getBoundingClientRect();
    const overlaps = !(
      boxRect.right < iconRect.left ||
      boxRect.left > iconRect.right ||
      boxRect.bottom < iconRect.top ||
      boxRect.top > iconRect.bottom
    );
    if (overlaps) {
      browserShortcut.classList.add('selected');
    } else {
      browserShortcut.classList.remove('selected');
    }
  }
  function onMouseUp() {
    dragBox.style.display = 'none';
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  }
  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
});
let zTop = 10;
const windows = new Map();
// =====================
// Window manager
// =====================
function openApp(key) {
  const app = Apps[key]; if (!app) return;
  const id = `${key}-${Date.now()}`;
  const win = document.createElement('div');
  win.className = `window active opening ${app.className || ''}`;
  win.dataset.app = key;
  Object.assign(win.style, {
    left: '60px', top: '60px',
    width: (app.width || 360) + 'px',
    height: (app.height || 240) + 'px',
    zIndex: ++zTop
  });
  win.innerHTML = `
    <div class="title-bar">
      <div class="title-bar-text">${app.title}</div>
      <div class="title-bar-controls">
        <button aria-label="Minimize"></button>
        <button aria-label="Maximize"></button>
        <button aria-label="Close"></button>
      </div>
    </div>
    <div class="window-body">${app.content()}</div>
  `;
  desktop.appendChild(win);
  focusWindow(win);
  // remove 'opening' after animation
  win.addEventListener('animationend', () => win.classList.remove('opening'), { once: true });
  const [minBtn, maxBtn, closeBtn] = win.querySelectorAll('.title-bar-controls > button');
  minBtn.onclick = () => toggleMinimize(id);
  maxBtn.onclick = () => toggleMaximize(win);
  closeBtn.onclick = () => closeWindow(id);
  makeDraggable(win);
  win.addEventListener('mousedown', () => focusWindow(win));
  const btn = document.createElement('button');
  btn.className = 'button task-button';
  btn.textContent = app.title;
  btn.onclick = () => toggleMinimize(id);
  taskButtons.appendChild(btn);
  windows.set(id, { el: win, taskBtn: btn, minimized: false });
 
  if (key === 'saveas') {
    const winBody = win.querySelector('.window-body');
    const saveBtn = win.querySelector('#confirm-saveas');
    const cancelBtn = win.querySelector('#cancel-saveas');
    saveBtn.onclick = () => {
      const filename = win.querySelector('#filename')?.value || 'untitled.txt';
      const filetype = win.querySelector('#filetype')?.value;
      alert(`Saving "${filename}" as ${filetype} to Downloads (simulated)`);
      const id = [...windows.entries()].find(([_, data]) => data.el === win)?.[0];
      if (id) closeWindow(id);
    };
    cancelBtn.onclick = () => {
      const id = [...windows.entries()].find(([_, data]) => data.el === win)?.[0];
      if (id) closeWindow(id);
    };
  }
 
  const body = win.querySelector('.window-body');
      if (key === 'notepad' && body) {
        body.classList.add('no-scrollbars');
      }
 
  if (key === 'properties') {
    const applyBtn = win.querySelector('#apply-properties');
    if (applyBtn) {
      applyBtn.onclick = () => {
        const wallpaper = win.querySelector('#wallpaper-select')?.value;
        const theme = win.querySelector('#theme-select')?.value;
        // --- Wallpaper ---
        switch (wallpaper) {
          case 'harmony':
            document.body.style.background = "#004080 url('https://static.wikitide.net/windowswallpaperwiki/thumb/0/0c/Img0_%28Windows_7_Starter%29.jpg/1280px-Img0_%28Windows_7_Starter%29.jpg') center/cover no-repeat";
            break;
          case 'mountains':
            document.body.style.background = "#004080 url('https://static.wikitide.net/windowswallpaperwiki/thumb/2/2f/Img9_%28Windows_7%29.jpg/1280px-Img9_%28Windows_7%29.jpg') center/cover no-repeat";
            break;
          case 'solid':
            document.body.style.background = "#004080";
            break;
          default:
            document.body.style.background = "#004080 url('https://static.wikitide.net/windowswallpaperwiki/thumb/5/50/Img0_%28Windows_7%29.jpg/1280px-Img0_%28Windows_7%29.jpg') center/cover no-repeat";
        }
        // --- Theme ---
        const themeLink = document.getElementById('theme-css');
        const startBtnImg = document.getElementById('start-btn-img');
        const startBtnText = document.getElementById('start-btn-text');
        if (themeLink) {
          if (theme === 'classic') {
            themeLink.href = "https://unpkg.com/98.css/dist/98.css";
            document.body.classList.add('classic-theme');
            startBtnImg.classList.add('classic-theme');
            startBtnText.classList.add('classic-theme');
          } else if (theme === 'light') {
            themeLink.href = "https://unpkg.com/7.css/dist/themes/windows-7.light.min.css";
          } else if (theme === 'dark') {
            themeLink.href = "https://unpkg.com/7.css/dist/themes/windows-7.dark.min.css";
          } else {
            themeLink.href = "https://unpkg.com/7.css/dist/7.css";
            document.body.classList.remove('classic-theme');
            startBtnImg.classList.remove('classic-theme');
            startBtnText.classList.remove('classic-theme');
          }
        }
      };
    }
  }
}
function focusWindow(win) {
  document.querySelectorAll('.window').forEach(w => w.classList.remove('active'));
  win.classList.add('active');
  win.style.zIndex = ++zTop;
}
function toggleMinimize(id) {
  const w = windows.get(id); if (!w) return;
  w.minimized = !w.minimized;
  w.el.classList.toggle('hidden', w.minimized);
  if (!w.minimized) focusWindow(w.el);
}
function toggleMaximize(el) {
  const max = el.dataset.maximized === 'true';
  if (!max) {
    el.dataset.prev = JSON.stringify({
      left: el.style.left, top: el.style.top,
      width: el.style.width, height: el.style.height
    });
    el.style.left = '0'; el.style.top = '0';
    el.style.width = desktop.clientWidth + 'px';
    el.style.height = (desktop.clientHeight - 36) + 'px';
    el.dataset.maximized = 'true';
  } else {
    const prev = JSON.parse(el.dataset.prev);
    Object.assign(el.style, prev);
    el.dataset.maximized = 'false';
  }
}
const taskBtnSelector = ".task-button";
function closeWindow(id) {
  const w = windows.get(id);
  if (!w) return;
  // Add the 'closing' class to trigger the animation
  w.el.classList.add('closing');
 
  // Ensure taskBtn is a reference to the actual DOM element
  const taskBtn = w.taskBtn;
  if (taskBtn) {
    // Trigger the shrinking animation on the task button
    taskBtn.classList.add('shrinking');
  }
  w.el.addEventListener('animationend', () => {
    w.el.remove();
    if (taskBtn) {
      taskBtn.remove();
    }
    windows.delete(id);
  }, { once: true });
}
window.closeWindow = closeWindow;
function makeDraggable(win) {
  const bar = win.querySelector('.title-bar');
  let sx, sy, sl, st;
  bar.addEventListener('mousedown', e => {
    if (win.dataset.maximized === 'true') return;
    sx = e.clientX; sy = e.clientY;
    sl = parseInt(win.style.left); st = parseInt(win.style.top);
    const move = e => {
      win.style.left = sl + (e.clientX - sx) + 'px';
      win.style.top = st + (e.clientY - sy) + 'px';
    };
    const up = () => {
      document.removeEventListener('mousemove', move);
      document.removeEventListener('mouseup', up);
    };
    document.addEventListener('mousemove', move);
    document.addEventListener('mouseup', up);
  });
}
document.addEventListener('click', e => {
  const item = e.target.closest('[data-action]');
  if (!item) return;
  const win = item.closest('.window');
  const id = [...windows.entries()].find(([_, data]) => data.el === win)?.[0];
  if (!id || !win) return;
  switch (item.dataset.action) {
    case 'new':
      const note = win.querySelector('#note');
      if (note) note.value = '';
      break;
    case 'open':
      alert('File access denied.');
      break;
    case 'save':
      openApp('saveas');
      break;
    case 'exit':
      closeWindow(id);
      break;
    default:
      alert(`Unknown action: ${item.dataset.action}`);
  }
});
// =====================
// Start menu
// =====================
function toggleStart(open) {
  // Use computed style to determine visibility (covers CSS and inline cases)
  const computedDisplay = window.getComputedStyle(startMenu).display;
  const isVisible = computedDisplay !== 'none';
  const show = (open !== undefined) ? open : !isVisible; // explicit check for undefined
  if (show && !isVisible) {
    startMenu.style.display = 'flex';
    startMenu.classList.remove('closing');
    startMenu.classList.add('opening');
    startMenu.addEventListener('animationend', () => {
      startMenu.classList.remove('opening');
    }, { once: true });
  } else if (!show && isVisible) {
    startMenu.classList.remove('opening');
    startMenu.classList.add('closing');
    startMenu.addEventListener('animationend', () => {
      startMenu.classList.remove('closing');
      // hide via inline style so computedStyle checks work consistently
      startMenu.style.display = 'none';
    }, { once: true });
  }
}
// Replace the previous .onclick assignment with a safer listener that toggles.
// Prevent default (anchor) and stop propagation so other global handlers don't immediately hide it.
startBtn.addEventListener('click', (e) => {
  e.preventDefault();
  e.stopPropagation();
  toggleStart(); // toggle behaviour (no forced true) — click opens/closes
});
// Close Start menu when clicking outside of it (and not on the start button)
document.addEventListener('click', (e) => {
  if (!startMenu.contains(e.target) && e.target !== startBtn && window.getComputedStyle(startMenu).display !== 'none') {
    toggleStart(false);
  }
});
// keep previous key handler for Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') toggleStart(false);
});
// Launch apps from Start menu
startMenu.addEventListener('click', e => {
  const btn = e.target.closest('[data-launch]');
  if (btn) {
    openApp(btn.dataset.launch);
    toggleStart(false);
  }
});
// =====================
// Context menu
// =====================
let menuOpen = false;
function reloadAllImages() {
  const allElements = document.querySelectorAll('img, body');
  const originalSources = new Map();
  // Store original sources and backgrounds
  allElements.forEach(element => {
    if (element.tagName === 'IMG') {
      const src = element.src;
      if (src) {
        originalSources.set(element, src);
      }
    } else if (element.tagName === 'BODY' && element.style.backgroundImage) {
      const bgImage = element.style.backgroundImage;
      originalSources.set(element, bgImage);
    }
  });
  // Temporarily clear images to "nothing"
  allElements.forEach(element => {
    if (element.tagName === 'IMG') {
      // Use a tiny 1x1 transparent pixel to prevent browser errors with empty src
      element.src = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';
    } else if (element.tagName === 'BODY' && originalSources.has(element)) {
      element.style.backgroundImage = 'none';
    }
  });
  // Wait 0.05 seconds (50 milliseconds) and reload images
  setTimeout(() => {
    originalSources.forEach((originalSource, element) => {
      if (element.tagName === 'IMG') {
        const url = originalSource.split('?')[0];
        element.src = `${url}?t=${new Date().getTime()}`;
      } else if (element.tagName === 'BODY') {
        const urlMatch = /url\("?(.+?)"?\)/.exec(originalSource);
        if (urlMatch) {
          const url = urlMatch[1].split('?')[0];
          element.style.backgroundImage = `url("${url}?t=${new Date().getTime()}")`;
        }
      }
    });
  }, 100);
}
document.addEventListener('contextmenu', e => {
  e.preventDefault();
  positionMenu(e);
  contextMenu.classList.add('show');
  menuOpen = true;
});
document.addEventListener('click', e => {
  if (menuOpen && !contextMenu.contains(e.target)) {
    contextMenu.classList.remove('show');
    menuOpen = false;
  }
});
contextMenu.addEventListener('click', e => {
  const item = e.target.closest('[data-action]');
  if (!item) return;
  contextMenu.classList.remove('show');
  menuOpen = false;
  switch (item.dataset.action) {
    case 'new': openApp('notepad'); break;
    case 'refresh': reloadAllImages(); break;
    case 'properties': openApp('properties'); break;
  }
});
function positionMenu(e) {
  const { innerWidth, innerHeight } = window;
  const { offsetWidth, offsetHeight } = contextMenu;
  const x = Math.min(e.pageX, innerWidth - offsetWidth);
  const y = Math.min(e.pageY, innerHeight - offsetHeight);
  contextMenu.style.left = x + 'px';
  contextMenu.style.top = y + 'px';
}
// =====================
// Clock
// =====================
function tick() {
    const now = new Date();
    const timeString = now.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    const dateString = now.toLocaleDateString();
    clockEl.innerHTML = `${timeString} <br>${dateString}`;
    displayBatteryPercentage();
}
function displayBatteryPercentage() {
    navigator.getBattery().then(function(battery) {
        const batteryIconContainer = document.createElement('div'); // New div for battery icon
        const batteryIcon = document.createElement('span');
        batteryIcon.innerHTML = `<img id="battery-icon" style="width: 10px; height: 17px;" src="https://codehs.com/uploads/9239bc8660a18815599203767be82326">`;
        batteryIcon.title = `${Math.round(battery.level * 100)}% battery percentage`;
       
        const timeAndDateContainer = document.createElement('div');
        timeAndDateContainer.style.display = 'flex';
        timeAndDateContainer.style.alignItems = 'center';
        timeAndDateContainer.style.flexDirection = 'row'; // Align to the left
       
        const timeAndDateContent = document.createElement('div');
        timeAndDateContent.innerHTML = `${clockEl.innerHTML}`;
       
        batteryIconContainer.appendChild(batteryIcon); // Append battery icon to its own container
        timeAndDateContainer.appendChild(batteryIconContainer); // Append battery icon container to timeAndDateContainer
        timeAndDateContainer.appendChild(timeAndDateContent);
       
        clockEl.innerHTML = ''; // Clear previous content
        clockEl.appendChild(timeAndDateContainer); // Append time and date container
    });
}
tick();
setInterval(tick, 1000); // update every second
openApp('welcome');
window.openApp = openApp;
window.windows = windows;
