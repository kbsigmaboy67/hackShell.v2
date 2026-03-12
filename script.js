// HackShell v2.0
// ════════════════════════════════════════════════════════
// Multi-paradigm terminal: Shell + Node.js + crosh + REPL
// ════════════════════════════════════════════════════════

// ── Proxy registry (obfuscated) ──
// ── Proxy registry (obfuscated via atob) ──
const _px = [
  // ─── Web Proxies ───
  { n:'RammerHead',        t:'Web Proxy',   cat:'proxy', d:'Full-featured web proxy. Bypasses most network filters.' ,      _:atob('aHR0cHM6Ly9lZmx5LjEwOC0xODEtMzItNzcuc3NsaXAuaW8v') },
  { n:'PeteZah',           t:'Web Proxy',   cat:'proxy', d:'Alternative proxy node. Fast and reliable.',                    _:atob('aHR0cHM6Ly90dWJtbGVkeGVuaS52aWFyM2QuY29tLw==') },
  { n:'Interstellar',      t:'Web Proxy',   cat:'proxy', d:'Lightweight mini proxy. Good for gaming sites.',                _:atob('aHR0cHM6Ly85Mjg1MC52ZXJjZWwuYXBwLw==') },
  { n:'Ultraviolet',       t:'Web Proxy',   cat:'proxy', d:'Ultraviolet — popular open-source web proxy service.',          _:atob('aHR0cHM6Ly91bHRyYXZpb2xldC5jbG91ZC8=') },
  { n:'Holy Unblocker',    t:'Web Proxy',   cat:'proxy', d:'Holy Unblocker — full proxy suite on Vercel.',                  _:atob('aHR0cHM6Ly9ob2x5LXVuYmxvY2tlci52ZXJjZWwuYXBwLw==') },
  { n:'Titanium Network',  t:'Web Proxy',   cat:'proxy', d:'Titanium Network — proxy hub with multiple backends.',          _:atob('aHR0cHM6Ly90aXRhbml1bW5ldHdvcmsub3JnLw==') },
  { n:'CroxyProxy',        t:'Web Proxy',   cat:'proxy', d:'CroxyProxy — free anonymous web proxy.',                       _:atob('aHR0cHM6Ly9jcm94eS5uZXR3b3JrLw==') },
  { n:'Hidester',          t:'Web Proxy',   cat:'proxy', d:'Hidester — online proxy with SSL support.',                     _:atob('aHR0cHM6Ly9oaWRlc3Rlci5jb20vcHJveHkv') },
  { n:'Proxyium',          t:'Web Proxy',   cat:'proxy', d:'Proxyium — fast web proxy, no config needed.',                  _:atob('aHR0cHM6Ly9wcm94eWl1bS5jb20v') },
  // ─── Game Sites ───
  { n:'MacVG',             t:'Game Site',   cat:'game',  d:'Mac VG — unblocked games collection.',                          _:atob('aHR0cHM6Ly9rYnNpZ21hYm95NjcuZ2l0aHViLmlvL21hY3ZnLw==') },
  { n:'GN Math',           t:'Game Site',   cat:'game',  d:'GN Math — math-based unblocked games. Educational + fun.',      _:atob('aHR0cHM6Ly82anV3bjMzYTNjLjEwNy4xNzQuMzQuNDQuc3NsaXAuaW8=') },
  { n:'Unblocked Games Premium',       t:'Game Site', cat:'game', d:'Unblocked Games Premium — huge library of unblocked browser games.',     _:atob('aHR0cHM6Ly91bmJsb2NrZWQtZ2FtZXNwcmVtaXVtLmNvbS8=') },
  { n:'Unblocked Games Premium GH',    t:'Game Site', cat:'game', d:'Unblocked Games Premium — GitHub mirror.',                               _:atob('aHR0cHM6Ly91bmJsb2NrZWRnYW1lc3ByZW1pdW0uZ2l0aHViLmlvLw==') },
  { n:'Premium Unblocked Games GL',    t:'Game Site', cat:'game', d:'Premium Unblocked Games — GitLab mirror, usually accessible.',           _:atob('aHR0cHM6Ly9wcmVtaXVtdW5ibG9ja2VkZ2FtZXMuZ2l0bGFiLmlvLw==') },
  { n:'Unblocked Games GG',            t:'Game Site', cat:'game', d:'Unblocked Games .GG — large game catalog.',                              _:atob('aHR0cHM6Ly91bmJsb2NrZWRnYW1lcy5nZy8=') },
  { n:'Unblocked Premium',             t:'Game Site', cat:'game', d:'Unblocked Premium — curated premium unblocked game site.',               _:atob('aHR0cHM6Ly91bmJsb2NrZWRwcmVtaXVtLmNvbS8=') },
  { n:'Unblocked 76 Games',            t:'Game Site', cat:'game', d:'Unblocked 76 Games — classic 76-style unblocked game hub.',              _:atob('aHR0cHM6Ly91bmJsb2NrZWQtNzYtZ2FtZXMub3JnLw==') },
  { n:'Unblocked Games Now',           t:'Game Site', cat:'game', d:'Unblocked Games Now — quick access unblocked games.',                    _:atob('aHR0cHM6Ly91bmJsb2NrZWRnYW1lcy5ub3cv') },
  { n:'Unblocked Games G',             t:'Game Site', cat:'game', d:'Unblocked Games G — alternate unblocked game portal.',                   _:atob('aHR0cHM6Ly91bmJsb2NrZWRnYW1lc2cub3JnLw==') },
  { n:'Unblocked Games Premium Online',t:'Game Site', cat:'game', d:'Unblocked Games Premium Online — GitHub-hosted mirror.',                 _:atob('aHR0cHM6Ly91bmJsb2NrZWRnYW1lc3ByZW1pdW1vbmxpbmUuZ2l0aHViLmlvLw==') },
  { n:'Unblocked Games IM',            t:'Game Site', cat:'game', d:'Unblocked Games IM — instant messaging-style game launcher.',            _:atob('aHR0cHM6Ly91bmJsb2NrZWRnYW1lcy5pbS8=') },
  { n:'Unbanned Games',                t:'Game Site', cat:'game', d:'Unbanned Games — games removed from blocklists.',                        _:atob('aHR0cHM6Ly91bmJhbm5lZGdhbWVzLmlvLw==') },
  { n:'1001 Unblocked Games',          t:'Game Site', cat:'game', d:'1001 Unblocked Games — over a thousand unblocked titles.',               _:atob('aHR0cHM6Ly8xMDAxdW5ibG9ja2VkZ2FtZXMuZ2l0aHViLmlvLw==') },
  { n:'Unblocked Games GG Com',        t:'Game Site', cat:'game', d:'Unblocked Games GG — .com variant of the GG game hub.',                  _:atob('aHR0cHM6Ly91bmJsb2NrZWRnYW1lc2dnLmNvbS8=') },
  { n:'Unbanned Games',                t:'Game Site', cat:'game', d:'Unbanned.games — community-run unbanned game directory.',                _:atob('aHR0cHM6Ly91bmJhbm5lZC5nYW1lcy8=') },
  { n:'Now GG Unblocked',              t:'Game Site', cat:'game', d:'Now.GG — cloud-based unblocked games, runs in browser.',                 _:atob('aHR0cHM6Ly9ub3cuZ2cvZ2FtZXMvdW5ibG9ja2VkLmh0bWw=') },
  { n:'Freeze Nova Games',             t:'Game Site', cat:'game', d:'Freeze Nova Games — GitLab-hosted game collection.',                     _:atob('aHR0cHM6Ly9mcmVlemVub3ZhZ2FtZXMuZ2l0bGFiLmlvLw==') },
  { n:'Yapi Games',                    t:'Game Site', cat:'game', d:'Yapi Games — HTML5 browser games, usually unfiltered.',                  _:atob('aHR0cHM6Ly93d3cueWFwaWdhbWVzLmNvbS8=') },
  { n:'Game Distribution',             t:'Game Site', cat:'game', d:'Game Distribution — official game publisher portal, 1000+ titles.',      _:atob('aHR0cHM6Ly93d3cuZ2FtZWRpc3RyaWJ1dGlvbi5jb20v') },
  { n:'G Plus Games',                  t:'Game Site', cat:'game', d:'G Plus Games — curated browser games, clean interface.',                 _:atob('aHR0cHM6Ly9ncGx1c2dhbWVzLmNvbS8=') },
];

// ── Virtual Filesystem ──
const VFS = {
  '/':                        { type:'dir', children:['home','etc','usr','var','tmp','proc','dev','sys'] },
  '/home':                    { type:'dir', children:['anonymous'] },
  '/home/anonymous':          { type:'dir', children:['projects','tools','games','.bashrc','.profile','.node_history','README.md'] },
  '/home/anonymous/projects': { type:'dir', children:['hello.js','server.js','hack.py','exploit.sh','notes.md'] },
  '/home/anonymous/tools':    { type:'dir', children:['bypass.sh','speedtest.sh','portscanner.sh','encode.js'] },
  '/home/anonymous/games':    { type:'dir', children:['proxies.cfg','bookmarks.sh'] },
  '/etc':                     { type:'dir', children:['passwd','hostname','os-release','hosts','resolv.conf','crontab'] },
  '/usr':                     { type:'dir', children:['bin','lib','local'] },
  '/usr/bin':                 { type:'dir', children:['curl','wget','python3','node','gcc','vim','nano','git','ssh','openssl'] },
  '/usr/local':               { type:'dir', children:['bin','lib'] },
  '/tmp':                     { type:'dir', children:['session.tmp'] },
  '/var':                     { type:'dir', children:['log','run'] },
  '/var/log':                 { type:'dir', children:['hackshell.log','access.log','error.log','auth.log'] },
  '/proc':                    { type:'dir', children:['cpuinfo','meminfo','version','net','uptime'] },
  '/dev':                     { type:'dir', children:['null','random','urandom','tty0','tty1','sda','sda1'] },
  '/sys':                     { type:'dir', children:['kernel','net','bus'] },

  '/home/anonymous/.bashrc':     { type:'file', content:'# HackShell v2.0 init\nexport PS1="$ hackshell@anonymous > "\nexport EDITOR=vim\nexport NODE_ENV=development\nexport DEBUG=hackshell:*\nalias ls="ls --color=auto"\nalias ll="ls -la"\nalias la="ls -a"\nalias cls="clear"\nalias proxy="proxies"\nalias node="node --repl"\nalias py="python3"\nalias j="js"\nalias re="repl"' },
  '/home/anonymous/README.md':   { type:'file', content:'# HackShell v2.0\n\nWelcome to HackShell — a cross-language terminal.\n\n## Quick Start\n- `help`         — all commands\n- `proxies`      — web proxy access\n- `games`        — unblocked games\n- `js`           — JavaScript REPL\n- `python3`      — Python REPL (simulated)\n- `node`         — Node.js REPL\n- `sh`           — shell interpreter\n\n## Tips\n- Tab autocomplete\n- Arrow keys for history\n- Ctrl+C to cancel\n- Ctrl+L to clear\n\nStay anonymous. Stay safe.' },
  '/home/anonymous/projects/hello.js':  { type:'file', content:'// Hello from HackShell\nconst msg = "Hello, World!";\nconsole.log(msg);\n\nconst greet = (name) => `Hello, ${name}!`;\nmodule.exports = { greet };' },
  '/home/anonymous/projects/server.js': { type:'file', content:'const http = require("http");\nconst PORT = 3000;\n\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { "Content-Type": "text/plain" });\n  res.end("HackShell server running\\n");\n});\n\nserver.listen(PORT, () => {\n  console.log(`Server listening on port ${PORT}`);\n});' },
  '/home/anonymous/projects/hack.py':   { type:'file', content:'#!/usr/bin/env python3\n# HackShell Python tool\nimport os, sys, hashlib\n\ndef hash_str(s: str) -> str:\n    return hashlib.sha256(s.encode()).hexdigest()\n\nif __name__ == "__main__":\n    data = input("Enter data: ")\n    print(f"SHA256: {hash_str(data)}")' },
  '/home/anonymous/projects/exploit.sh':{ type:'file', content:'#!/bin/bash\n# Demo exploit script (safe)\necho "[*] Checking system..."\nuname -a\necho "[*] Listing network interfaces"\nifconfig 2>/dev/null || ip addr\necho "[*] Done."' },
  '/home/anonymous/projects/notes.md':  { type:'file', content:'# Notes\n\n## TODO\n- [ ] Set up proxy rotation\n- [ ] Test new bypass method\n- [x] Deploy HackShell v2.0\n\n## Useful Commands\n```sh\ncurl -s https://example.com | grep title\nbase64 -d <<< "aGVsbG8="\nopenssl rand -hex 16\n```' },
  '/home/anonymous/tools/bypass.sh':    { type:'file', content:'#!/bin/bash\n# Bypass detection tool\necho "Routing through proxy chain..."\nfor proxy in "$@"; do\n  echo "  Trying: $proxy"\n  sleep 0.2\ndone\necho "Bypass active."' },
  '/home/anonymous/tools/encode.js':    { type:'file', content:'// Encoder utility\nconst encode = (s) => Buffer.from(s).toString("base64");\nconst decode = (s) => Buffer.from(s, "base64").toString();\nconst rot13  = (s) => s.replace(/[a-zA-Z]/g, c => String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26));\nconsole.log(encode("hello"));\nconsole.log(decode("aGVsbG8="));\nconsole.log(rot13("HackShell"));' },
  '/etc/hostname':   { type:'file', content:'hackshell-node-01' },
  '/etc/os-release': { type:'file', content:'NAME="HackShell OS"\nVERSION="2.0"\nID=hackshell\nPRETTY_NAME="HackShell OS 2.0 (Phantom)"\nHOME_URL="https://hackshell.dev"\nSUPPORT_URL="https://hackshell.dev/support"' },
  '/etc/hosts':      { type:'file', content:'127.0.0.1   localhost\n127.0.1.1   hackshell-node-01\n::1         localhost ip6-localhost\n0.0.0.0     tracking.example.com\n0.0.0.0     telemetry.example.com' },
  '/etc/resolv.conf':{ type:'file', content:'nameserver 1.1.1.1\nnameserver 8.8.8.8\nsearch hackshell.local' },
  '/proc/version':   { type:'file', content:'HackShell version 5.15.0-hackshell #1 SMP PREEMPT (anonymous@hackshell-build) (gcc 12.2.0)' },
  '/proc/cpuinfo':   { type:'file', content:'processor\t: 0\nmodel name\t: HackShell Virtual CPU @ 3.60GHz\ncpu MHz\t\t: 3600.000\ncache size\t: 16384 KB\nbogomips\t: 7200.00\nflags\t\t: fpu vme de pse tsc msr pae' },
  '/proc/meminfo':   { type:'file', content:'MemTotal:        8388608 kB\nMemFree:         4194304 kB\nMemAvailable:    5242880 kB\nBuffers:          131072 kB\nCached:           786432 kB\nSwapTotal:       2097152 kB\nSwapFree:        2097152 kB' },
  '/var/log/hackshell.log': { type:'file', content:'[2026-03-07 00:00:01] INFO  HackShell v2.0 started\n[2026-03-07 00:00:01] INFO  Loading modules...\n[2026-03-07 00:00:02] OK    All 12 modules loaded\n[2026-03-07 00:00:02] INFO  Proxy registry: 4 nodes\n[2026-03-07 00:00:03] OK    Shell ready' },
  '/var/log/access.log': { type:'file', content:'10.0.0.1 - - [07/Mar/2026:00:01:00 +0000] "GET / HTTP/1.1" 200 1234\n10.0.0.1 - - [07/Mar/2026:00:01:02 +0000] "GET /api HTTP/1.1" 200 56\n10.0.0.1 - - [07/Mar/2026:00:01:05 +0000] "POST /proxy HTTP/1.1" 302 0' },
};

// ── State ──
let CWD = '/home/anonymous';
let HISTORY = [];
let HIST_IDX = -1;
let ENV = {
  USER:'anonymous', HOME:'/home/anonymous', SHELL:'/bin/hackshell',
  TERM:'xterm-256color', PATH:'/usr/bin:/usr/local/bin:/bin:/home/anonymous/tools',
  HOSTNAME:'hackshell-node-01', PWD:'/home/anonymous', NODE_ENV:'development',
  LANG:'en_US.UTF-8', EDITOR:'vim', VERSION:'2.0',
};
let ALIASES = { ll:'ls -la', la:'ls -a', cls:'clear', proxy:'proxies', j:'js', py:'python3', re:'repl' };
let VARS = {}; // user-defined shell vars
let REPL_MODE = null; // 'js' | 'python' | null
let REPL_CTX = {};
let JS_HISTORY = [];

const OUTPUT = document.getElementById('output');
const INPUT  = document.getElementById('cmd-input');
const AUTO   = document.getElementById('autocomplete');
const CLOCK  = document.getElementById('clock');
const PROMPT_CWD = document.getElementById('prompt-cwd');

// ── Clock ──
function updateClock() {
  const n = new Date();
  CLOCK.textContent = n.toLocaleTimeString([],{hour12:false});
  const rel = CWD.replace('/home/anonymous','~').replace('/home/anonymous','~') || '/';
  PROMPT_CWD.textContent = CWD.replace(ENV.HOME,'~') || '/';
}
setInterval(updateClock, 1000);
updateClock();

// ── Output helpers ──
function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }

// ── Global clipboard store — avoids ALL onclick escaping issues ──
window._cpStore = {};
window._cpId = 0;
// Store text, return an id
window._cpPut = function(text){ const id='cp'+(++window._cpId); window._cpStore[id]=text; return id; };
// Copy stored text, show feedback
window._cp = function(id){ 
  const t=window._cpStore[id]; 
  if(t===undefined) return;
  navigator.clipboard.writeText(t).then(()=>{
    appendBlock('<span class="tag tag-ok">COPIED</span>','success');
  }).catch(()=>{
    // fallback
    const ta=document.createElement('textarea');
    ta.value=t; ta.style.position='fixed'; ta.style.opacity='0';
    document.body.appendChild(ta); ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    appendBlock('<span class="tag tag-ok">COPIED</span> (fallback)','success');
  });
};

function appendRaw(html){
  const d=document.createElement('div');
  d.innerHTML=html;
  OUTPUT.appendChild(d);
  OUTPUT.scrollTop=OUTPUT.scrollHeight;
}

function appendLine(html, cls=''){
  appendRaw(`<div class="line ${cls}"><div class="line-content">${html}</div></div>`);
}

function appendBlock(html, type='info'){
  appendRaw(`<div class="block-${type}">${html}</div>`);
}

function appendDivider(){ appendRaw('<hr class="divider">'); }

function appendCmdEcho(cmd){
  const cwd = CWD.replace(ENV.HOME,'~');
  appendRaw(`<div class="line" style="margin-top:6px">
    <div class="line-content">
      <span class="p-dollar" style="color:var(--gray-mid)">$</span>
      <span style="color:var(--red);font-weight:700"> hackshell</span><span style="color:var(--purple)">@</span><span style="color:var(--blue)">anonymous</span>
      <span style="color:var(--yellow);font-size:11px"> ${esc(cwd)}</span>
      <span style="color:var(--red)"> ❯</span>
      <span style="margin-left:8px">${highlight(esc(cmd))}</span>
    </div>
  </div>`);
}

// ── Path helpers ──
function resolvePath(p){
  if(!p||p==='') return CWD;
  if(p==='~') return ENV.HOME;
  if(p.startsWith('~/')) return ENV.HOME+p.slice(1);
  if(p.startsWith('/')) return normPath(p);
  return normPath(CWD+'/'+p);
}
function normPath(p){
  const parts=p.split('/').filter(Boolean); const out=[];
  for(const part of parts){ if(part==='.') continue; if(part==='..') out.pop(); else out.push(part); }
  return '/'+out.join('/');
}

// ── Syntax Highlighter ──
function highlight(code){
  const KW   = ['if','then','else','elif','fi','for','while','do','done','case','esac','in','function','return','export','local','readonly','declare','let','eval','exec','source','trap','exit','break','continue','shift','set','unset','throw','try','catch','finally','new','delete','typeof','instanceof','void','yield','async','await','class','extends','import','from','const','var','switch','default','of','static','get','set','debugger','with'];
  const BI   = ['echo','printf','read','cd','pwd','ls','mkdir','rmdir','rm','cp','mv','cat','head','tail','grep','sed','awk','sort','uniq','wc','cut','find','xargs','chmod','chown','ln','touch','stat','file','which','type','alias','history','jobs','kill','sleep','true','false','test','require','module','exports','process','console','Buffer','JSON','Math','Object','Array','String','Promise','setTimeout','setInterval','clearTimeout','clearInterval'];
  const CMD  = ['curl','wget','ssh','scp','git','npm','node','python','python3','pip','apt','make','gcc','g++','clang','java','go','cargo','docker','kubectl','vim','nano','tmux','screen','htop','top','ps','df','du','mount','ip','ifconfig','ping','netstat','ss','nc','nmap','openssl','base64','xxd','strings','strace','ltrace','gdb','objdump','readelf'];

  let out=''; let i=0; const s=code;
  while(i<s.length){
    if(s[i]==='"'){
      let j=i+1; while(j<s.length&&s[j]!=='"') j++;
      out+=`<span class="sh-string">${s.slice(i,j+1)}</span>`; i=j+1; continue;
    }
    if(s[i]==="'"){
      let j=i+1; while(j<s.length&&s[j]!=="'") j++;
      out+=`<span class="sh-string">${s.slice(i,j+1)}</span>`; i=j+1; continue;
    }
    if(s[i]==='`'){
      let j=i+1; while(j<s.length&&s[j]!=='`') j++;
      out+=`<span class="sh-string">${s.slice(i,j+1)}</span>`; i=j+1; continue;
    }
    if(s[i]==='#'&&(i===0||/\s/.test(s[i-1]))){
      out+=`<span class="sh-comment">${s.slice(i)}</span>`; break;
    }
    if(s.slice(i,i+2)==='//'&&(i===0||/\s/.test(s[i-1]))){
      out+=`<span class="sh-comment">${s.slice(i)}</span>`; break;
    }
    if(s[i]==='$'&&/[\w{]/.test(s[i+1]||'')){
      let j=i+1;
      if(s[j]==='{'){j++;while(j<s.length&&s[j]!=='}')j++;j++;}
      else {while(j<s.length&&/\w/.test(s[j]))j++;}
      out+=`<span class="sh-variable">${s.slice(i,j)}</span>`; i=j; continue;
    }
    if(s[i]==='|'){ out+=`<span class="sh-pipe">|</span>`; i++; continue; }
    if(s[i]==='>'||s[i]==='<'){
      let t=s[i]; if(s[i+1]==='>'||s[i+1]==='&') t+=s[++i];
      out+=`<span class="sh-redirect">${t}</span>`; i++; continue;
    }
    if('&;'.includes(s[i])){ out+=`<span class="sh-operator">${s[i]}</span>`; i++; continue; }
    if('=>'.split('').every((c,k)=>s[i+k]===c)&&s[i+2]!='>'){
      out+=`<span class="sh-operator">=></span>`; i+=2; continue;
    }
    if(/\d/.test(s[i])&&(i===0||/\W/.test(s[i-1]))){
      let j=i; while(j<s.length&&/[\d.xXa-fA-F_]/.test(s[j]))j++;
      out+=`<span class="sh-number">${s.slice(i,j)}</span>`; i=j; continue;
    }
    if(s[i]==='-'&&i>0&&/\s/.test(s[i-1])){
      let j=i; while(j<s.length&&/[\w-]/.test(s[j]))j++;
      if(j>i+1){ out+=`<span class="sh-flag">${s.slice(i,j)}</span>`; i=j; continue; }
    }
    if(/[a-zA-Z_]/.test(s[i])){
      let j=i; while(j<s.length&&/[\w.$]/.test(s[j]))j++;
      const w=s.slice(i,j);
      const after=s[j]||'';
      if(KW.includes(w))       out+=`<span class="sh-keyword">${w}</span>`;
      else if(after==='(')     out+=`<span class="sh-func">${w}</span>`;
      else if(BI.includes(w))  out+=`<span class="sh-builtin">${w}</span>`;
      else if(CMD.includes(w)&&(i===0||/[|;&\s]/.test(s[i-1]))) out+=`<span class="sh-command">${w}</span>`;
      else if(w===w.toUpperCase()&&w.length>1&&/[A-Z]/.test(w)) out+=`<span class="sh-class">${w}</span>`;
      else out+=w;
      i=j; continue;
    }
    if(s[i]==='/'&&(i===0||/\s/.test(s[i-1]))){
      let j=i; while(j<s.length&&/[^\s|;&<>]/.test(s[j]))j++;
      out+=`<span class="sh-path">${s.slice(i,j)}</span>`; i=j; continue;
    }
    if('{}[]()'.includes(s[i])){ out+=`<span class="sh-bracket">${s[i]}</span>`; i++; continue; }
    out+=s[i]; i++;
  }
  return out;
}

// ── JSON syntax highlight ──
function highlightJSON(obj){
  const raw = JSON.stringify(obj, null, 2);
  return raw
    .replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, match=>{
      if(/^"/.test(match)){
        if(/:$/.test(match)) return `<span class="sh-key">${esc(match)}</span>`;
        return `<span class="sh-string">${esc(match)}</span>`;
      }
      if(/true|false/.test(match)) return `<span class="sh-bool">${match}</span>`;
      if(/null/.test(match)) return `<span class="sh-null">${match}</span>`;
      return `<span class="sh-number">${match}</span>`;
    });
}

// ══════════════════════════════════════════════════════════
//  COMMANDS REGISTRY
// ══════════════════════════════════════════════════════════
const COMMANDS = {

  // ─── HELP ───────────────────────────────────────────────
  help: { desc:'Show command reference', usage:'help [cmd]',
    run([cmd]){
      if(cmd){
        const c=COMMANDS[cmd]||COMMANDS[ALIASES[cmd]];
        if(!c) return appendBlock(`<span class="tag tag-err">ERROR</span> No help for: <span class="sh-command">${esc(cmd)}</span>`, 'error');
        return appendBlock(`<span class="sh-func">${cmd}</span> — ${c.desc}<br><span class="sh-comment"># usage:</span> <span class="sh-builtin">${c.usage||cmd}</span>`, 'info');
      }
      const cats = {
        '⚡ Navigation':   ['cd','ls','pwd','tree','pushd','popd'],
        '📄 Files':        ['cat','touch','mkdir','rm','cp','mv','echo','write','head','tail','wc','diff'],
        '🔍 Search':       ['grep','find','which','locate','xargs'],
        '🌐 Network':      ['ping','curl','wget','ifconfig','netstat','ss','nslookup','traceroute','whois'],
        '💻 System':       ['uname','whoami','id','ps','top','df','du','env','export','uptime','hostname','kill','jobs','lsblk','free','vmstat','iostat','dmesg','mount'],
        '🔐 Security':     ['openssl','ssh','gpg','hash','cipher','crack','stego','nmap','arp','iptables'],
        '💡 Languages':    ['js','node','python3','sh','repl','run','exec'],
        '🛠 Dev Tools':    ['git','npm','json','xml','yaml','lint','minify','format','typeof','inspect'],
        '🔢 Math/Data':    ['calc','base64','hex','rot13','xxd','crc32','uuid','random','sort','uniq','cut','tr'],
        '🎮 Unblocked':    ['proxies','games','launch','bypass'],
        '🖥 Shell':        ['history','clear','alias','source','vars','set','unset','sleep','time','watch','pipe'],
        '📦 Info':         ['man','version','motd','sysinfo','date','uptime','neofetch','whoami','finger'],
      };
      let html=`<div style="margin-bottom:8px"><span class="tag tag-hack">HACKSHELL</span> v2.0 — <span style="color:var(--gray-light)">${Object.keys(COMMANDS).length} commands loaded</span></div>`;
      for(const [cat,cmds] of Object.entries(cats)){
        html+=`<div style="color:var(--gray-mid);font-size:9px;letter-spacing:3px;margin:10px 0 4px;text-transform:uppercase;">${cat}</div><table class="help-table">`;
        for(const name of cmds){
          const c=COMMANDS[name];
          if(c) html+=`<tr><td><span class="sh-command">${name}</span></td><td>${c.desc}</td></tr>`;
        }
        html+='</table>';
      }
      html+=`<div style="margin-top:10px;color:var(--gray);font-size:11px">Tab = autocomplete &nbsp;·&nbsp; ↑↓ = history &nbsp;·&nbsp; Ctrl+C = cancel &nbsp;·&nbsp; Ctrl+L = clear</div>`;
      appendBlock(html,'info');
    }
  },

  // ─── NAVIGATION ─────────────────────────────────────────
  pwd:  { desc:'Print working directory', usage:'pwd', run(){ appendLine(`<span class="sh-path">${CWD}</span>`); } },
  cd:   { desc:'Change directory', usage:'cd [path]',
    run([p='~']){
      const t=resolvePath(p); const n=VFS[t];
      if(!n) return appendBlock(`<span class="tag tag-err">ERROR</span> <span class="sh-err-code">cd: no such directory:</span> <span class="sh-path">${esc(t)}</span><br><span style="color:var(--gray);font-size:11px">💡 Try <span class="sh-builtin">ls</span> to see what's available here.</span>`,'error');
      if(n.type!=='dir') return appendBlock(`<span class="tag tag-err">ERROR</span> cd: not a directory: <span class="sh-path">${esc(t)}</span>`,'error');
      CWD=t; ENV.PWD=CWD; updateClock();
    }
  },
  ls:   { desc:'List directory contents', usage:'ls [-la] [path]',
    run(args){
      const flags=args.filter(a=>a.startsWith('-')).join('');
      const parg=args.find(a=>!a.startsWith('-'));
      const t=parg?resolvePath(parg):CWD; const n=VFS[t];
      if(!n) return appendBlock(`<span class="tag tag-err">ERROR</span> ls: no such file or directory: <span class="sh-path">${esc(t)}</span>`,'error');
      if(n.type==='file') return appendLine(`<span class="ls-file">${t.split('/').pop()}</span>`);
      const items=n.children||[]; const long=flags.includes('l'); const all=flags.includes('a');
      const shown=all?['.','..', ...items]:items;
      if(long){
        let html=`<span style="color:var(--gray-mid)">total ${shown.length}</span>`;
        for(const name of shown){
          const fp=t==='/'?'/'+name:t+'/'+name; const ch=VFS[fp];
          const isD=!ch||ch.type==='dir'; const perm=isD?'drwxr-xr-x':'-rw-r--r--';
          const size=ch?.content?.length||4096; const date='Mar 07 2026';
          const trail=(isD&&name!='.')&&name!='..'?'/':'';
          html+=`<br>${perm} 1 <span class="sh-variable">anonymous</span> anonymous <span class="sh-number">${String(size).padStart(7)}</span> ${date} <span class="${isD?'ls-dir':'ls-file'}">${name}${trail}</span>`;
        }
        appendBlock(html,'info');
      } else {
        let html='<div class="ls-grid">';
        for(const name of shown){
          const fp=t==='/'?'/'+name:t+'/'+name; const ch=VFS[fp];
          const isD=!ch||ch.type==='dir';
          html+=`<span class="${isD?'ls-dir':'ls-file'}">${name}${isD&&name!='.'&&name!='..'?'/':''}</span>`;
        }
        appendRaw(html+'</div>');
      }
    }
  },
  tree: { desc:'Display directory tree', usage:'tree [path]',
    run([p='.']){
      const root=resolvePath(p);
      function render(path,prefix=''){
        const n=VFS[path]; if(!n||n.type!=='dir') return '';
        let out=''; const ch=n.children||[];
        ch.forEach((name,i)=>{
          const isL=i===ch.length-1; const fp=path==='/'?'/'+name:path+'/'+name;
          const chN=VFS[fp]; const isD=!chN||chN.type==='dir';
          out+=`<br>${prefix}${isL?'└── ':'├── '}<span class="${isD?'ls-dir':'ls-file'}">${name}${isD?'/':''}</span>`;
          if(isD) out+=render(fp,prefix+(isL?'    ':'│   '));
        });
        return out;
      }
      appendBlock(`<span class="sh-path">${root}</span>${render(root)}`,'info');
    }
  },
  pushd:{ desc:'Push directory onto stack and cd', usage:'pushd <path>',
    run([p]){
      if(!p) return appendBlock(`<span class="tag tag-err">ERROR</span> pushd: missing argument`,'error');
      if(!VARS._dirstack) VARS._dirstack=[];
      VARS._dirstack.push(CWD);
      COMMANDS.cd.run([p]);
      appendLine(`<span class="sh-path">${CWD}</span> <span style="color:var(--gray)">(stack: ${VARS._dirstack.length})</span>`);
    }
  },
  popd: { desc:'Pop directory from stack', usage:'popd',
    run(){
      if(!VARS._dirstack?.length) return appendBlock(`<span class="tag tag-warn">WARN</span> popd: directory stack empty`,'warn');
      const prev=VARS._dirstack.pop();
      COMMANDS.cd.run([prev]);
      appendLine(`<span class="sh-path">${CWD}</span>`);
    }
  },

  // ─── FILES ──────────────────────────────────────────────
  cat:  { desc:'Show file contents', usage:'cat [-n] <file>',
    run(args){
      const n=args.includes('-n'); const f=args.find(a=>!a.startsWith('-'));
      if(!f) return appendBlock(`<span class="tag tag-err">ERROR</span> cat: missing file<br><span style="color:var(--gray);font-size:11px">💡 cat &lt;filename&gt; — shows file contents</span>`,'error');
      const t=resolvePath(f); const node=VFS[t];
      if(!node) return appendBlock(`<span class="tag tag-err">ERROR</span> cat: ${esc(t)}: No such file or directory`,'error');
      if(node.type==='dir') return appendBlock(`<span class="tag tag-err">ERROR</span> cat: ${esc(t)}: Is a directory<br><span style="color:var(--gray);font-size:11px">💡 Use <span class="sh-builtin">ls</span> to list directory contents</span>`,'error');
      const lines=(node.content||'').split('\n');
      let html='';
      lines.forEach((l,i)=>{ html+=`${n?`<span class="sh-number">${String(i+1).padStart(4)} </span>`:''}${highlight(esc(l))}<br>`; });
      appendBlock(html,'info');
    }
  },
  head: { desc:'Show first N lines of file', usage:'head [-n N] <file>',
    run(args){
      const ni=args.indexOf('-n'); const n=ni!==-1?parseInt(args[ni+1])||10:10;
      const f=args.find(a=>!a.startsWith('-'));
      if(!f) return appendBlock(`<span class="tag tag-err">ERROR</span> head: missing file`,'error');
      const t=resolvePath(f); const node=VFS[t];
      if(!node||node.type==='dir') return appendBlock(`<span class="tag tag-err">ERROR</span> head: ${esc(t)}: not a file`,'error');
      const lines=(node.content||'').split('\n').slice(0,n);
      appendBlock(lines.map(l=>highlight(esc(l))).join('<br>'),'info');
    }
  },
  tail: { desc:'Show last N lines of file', usage:'tail [-n N] <file>',
    run(args){
      const ni=args.indexOf('-n'); const n=ni!==-1?parseInt(args[ni+1])||10:10;
      const f=args.find(a=>!a.startsWith('-'));
      if(!f) return appendBlock(`<span class="tag tag-err">ERROR</span> tail: missing file`,'error');
      const t=resolvePath(f); const node=VFS[t];
      if(!node||node.type==='dir') return appendBlock(`<span class="tag tag-err">ERROR</span> tail: not a file`,'error');
      const lines=(node.content||'').split('\n').slice(-n);
      appendBlock(lines.map(l=>highlight(esc(l))).join('<br>'),'info');
    }
  },
  wc:   { desc:'Word/line/byte count', usage:'wc [-lwc] <file>',
    run(args){
      const f=args.find(a=>!a.startsWith('-'));
      if(!f) return appendBlock(`<span class="tag tag-err">ERROR</span> wc: missing file`,'error');
      const t=resolvePath(f); const node=VFS[t];
      if(!node||node.type==='dir') return appendBlock(`<span class="tag tag-err">ERROR</span> wc: not a file`,'error');
      const content=node.content||'';
      const lines=content.split('\n').length; const words=content.split(/\s+/).filter(Boolean).length; const bytes=content.length;
      appendLine(`<span class="sh-number">${lines}</span> <span class="sh-number">${words}</span> <span class="sh-number">${bytes}</span> <span class="sh-path">${esc(t)}</span>`);
    }
  },
  diff: { desc:'Show diff between two files (simulated)', usage:'diff <file1> <file2>',
    run([f1,f2]){
      if(!f1||!f2) return appendBlock(`<span class="tag tag-err">ERROR</span> diff: requires two files`,'error');
      const n1=VFS[resolvePath(f1)]; const n2=VFS[resolvePath(f2)];
      if(!n1||!n2) return appendBlock(`<span class="tag tag-err">ERROR</span> diff: file not found`,'error');
      const l1=(n1.content||'').split('\n'); const l2=(n2.content||'').split('\n');
      let html=''; let changed=false;
      const max=Math.max(l1.length,l2.length);
      for(let i=0;i<max;i++){
        if(l1[i]!==l2[i]){
          changed=true;
          if(l1[i]!==undefined) html+=`<span style="color:var(--red)">- ${esc(l1[i])}</span><br>`;
          if(l2[i]!==undefined) html+=`<span style="color:var(--green)">+ ${esc(l2[i])}</span><br>`;
        }
      }
      if(!changed) appendBlock(`<span class="tag tag-ok">SAME</span> Files are identical.`,'success');
      else appendBlock(html,'info');
    }
  },
  mkdir:{ desc:'Create directory', usage:'mkdir [-p] <name>',
    run(args){
      const f=args.find(a=>!a.startsWith('-'));
      if(!f) return appendBlock(`<span class="tag tag-err">ERROR</span> mkdir: missing operand`,'error');
      const t=resolvePath(f);
      if(VFS[t]) return appendBlock(`<span class="tag tag-err">ERROR</span> mkdir: cannot create '${esc(t)}': File exists`,'error');
      VFS[t]={type:'dir',children:[]};
      const par=t.substring(0,t.lastIndexOf('/'))||'/';
      if(VFS[par]?.children&&!VFS[par].children.includes(f.split('/').pop())) VFS[par].children.push(f.split('/').pop());
      appendBlock(`<span class="tag tag-ok">OK</span> <span class="sh-path">${esc(t)}</span>`,'success');
    }
  },
  rm:   { desc:'Remove file or directory', usage:'rm [-rf] <path>',
    run(args){
      const flags=args.filter(a=>a.startsWith('-')).join('');
      const p=args.find(a=>!a.startsWith('-'));
      if(!p) return appendBlock(`<span class="tag tag-err">ERROR</span> rm: missing operand`,'error');
      const t=resolvePath(p); if(!VFS[t]) return appendBlock(`<span class="tag tag-err">ERROR</span> rm: ${esc(t)}: No such file or directory`,'error');
      if(VFS[t].type==='dir'&&!flags.includes('r')) return appendBlock(`<span class="tag tag-err">ERROR</span> rm: cannot remove '${esc(t)}': Is a directory<br><span style="color:var(--gray);font-size:11px">💡 Use <span class="sh-flag">-r</span> or <span class="sh-flag">-rf</span> to remove recursively</span>`,'error');
      delete VFS[t]; appendBlock(`<span class="tag tag-ok">OK</span> Removed <span class="sh-path">${esc(t)}</span>`,'success');
    }
  },
  cp:   { desc:'Copy file', usage:'cp <src> <dst>',
    run([s,d]){
      if(!s||!d) return appendBlock(`<span class="tag tag-err">ERROR</span> cp: requires source and destination`,'error');
      const sr=resolvePath(s),dr=resolvePath(d);
      if(!VFS[sr]) return appendBlock(`<span class="tag tag-err">ERROR</span> cp: '${esc(sr)}': No such file`,'error');
      VFS[dr]={...VFS[sr]};
      appendBlock(`<span class="tag tag-ok">OK</span> <span class="sh-path">${esc(sr)}</span> → <span class="sh-path">${esc(dr)}</span>`,'success');
    }
  },
  mv:   { desc:'Move/rename file', usage:'mv <src> <dst>',
    run([s,d]){
      if(!s||!d) return appendBlock(`<span class="tag tag-err">ERROR</span> mv: requires source and destination`,'error');
      const sr=resolvePath(s),dr=resolvePath(d);
      if(!VFS[sr]) return appendBlock(`<span class="tag tag-err">ERROR</span> mv: '${esc(sr)}': No such file`,'error');
      VFS[dr]=VFS[sr]; delete VFS[sr];
      appendBlock(`<span class="tag tag-ok">OK</span> <span class="sh-path">${esc(sr)}</span> → <span class="sh-path">${esc(dr)}</span>`,'success');
    }
  },
  touch:{ desc:'Create file or update timestamp', usage:'touch <file>',
    run([f]){
      if(!f) return appendBlock(`<span class="tag tag-err">ERROR</span> touch: missing operand`,'error');
      const t=resolvePath(f);
      if(!VFS[t]){
        VFS[t]={type:'file',content:''};
        const par=t.substring(0,t.lastIndexOf('/'))||'/';
        if(VFS[par]?.children) VFS[par].children.push(f.split('/').pop());
        appendBlock(`<span class="tag tag-ok">OK</span> Created <span class="sh-path">${esc(t)}</span>`,'success');
      } else appendBlock(`<span class="tag tag-ok">OK</span> Updated timestamp: <span class="sh-path">${esc(t)}</span>`,'success');
    }
  },
  write:{ desc:'Write text to a file', usage:'write <file> <content>',
    run([f,...rest]){
      if(!f) return appendBlock(`<span class="tag tag-err">ERROR</span> write: missing filename`,'error');
      const t=resolvePath(f); VFS[t]={type:'file',content:rest.join(' ')};
      const par=t.substring(0,t.lastIndexOf('/'))||'/';
      if(VFS[par]?.children&&!VFS[par].children.includes(f.split('/').pop())) VFS[par].children.push(f.split('/').pop());
      appendBlock(`<span class="tag tag-ok">OK</span> Written to <span class="sh-path">${esc(t)}</span>`,'success');
    }
  },
  echo: { desc:'Print text to output', usage:'echo <text>',
    run(args){
      const text=args.join(' ').replace(/^['"]|['"]$/g,'').replace(/\$(\w+)/g,(_,v)=>ENV[v]||VARS[v]||'');
      appendLine(highlight(esc(text)));
    }
  },

  // ─── SEARCH ─────────────────────────────────────────────
  grep: { desc:'Search text in file', usage:'grep [-i] <pattern> <file>',
    run(args){
      const ci=args.includes('-i'); const rest=args.filter(a=>a!=='-i');
      const [pat,f]=rest;
      if(!pat) return appendBlock(`<span class="tag tag-err">ERROR</span> grep: missing pattern<br><span style="color:var(--gray);font-size:11px">Usage: grep [-i] &lt;pattern&gt; &lt;file&gt;</span>`,'error');
      if(!f) return appendBlock(`<span class="tag tag-err">ERROR</span> grep: missing file`,'error');
      const t=resolvePath(f); const node=VFS[t];
      if(!node||node.type!=='file') return appendBlock(`<span class="tag tag-err">ERROR</span> grep: '${esc(t)}': No such file`,'error');
      const lines=(node.content||'').split('\n');
      const matches=lines.filter(l=>ci?l.toLowerCase().includes(pat.toLowerCase()):l.includes(pat));
      if(!matches.length) appendLine(`<span style="color:var(--gray)">(no matches for: <span class="sh-string">"${esc(pat)}"</span>)</span>`);
      else matches.forEach((m,i)=>appendLine(`<span class="sh-number">${i+1}:</span> ${esc(m).replace(new RegExp(esc(ci?pat:pat),'gi'),s=>`<span style="background:rgba(255,204,0,0.2);color:var(--yellow)">${s}</span>`)}`));
    }
  },
  find: { desc:'Find files by name', usage:'find [path] -name <pattern>',
    run(args){
      const ni=args.indexOf('-name'); const pat=ni!==-1?args[ni+1]:args[0];
      if(!pat) return appendBlock(`<span class="tag tag-err">ERROR</span> find: missing pattern<br><span style="color:var(--gray);font-size:11px">Usage: find . -name &lt;pattern&gt;</span>`,'error');
      const clean=pat.replace(/\*/g,'');
      const results=Object.keys(VFS).filter(p=>p.split('/').pop().includes(clean));
      if(!results.length) appendLine(`<span style="color:var(--gray)">(no results)</span>`);
      else results.forEach(r=>appendLine(`<span class="sh-path">${r}</span>`));
    }
  },
  which:{ desc:'Locate a command', usage:'which <cmd>',
    run([c]){
      if(!c) return appendBlock(`<span class="tag tag-err">ERROR</span> which: missing operand`,'error');
      if(COMMANDS[c]) appendLine(`<span class="sh-path">/usr/bin/${c}</span>`);
      else appendBlock(`<span class="tag tag-warn">WARN</span> which: <span class="sh-command">${esc(c)}</span> not found in PATH`,'warn');
    }
  },
  locate:{ desc:'Locate files by pattern', usage:'locate <pattern>',
    run([pat]){
      if(!pat) return appendBlock(`<span class="tag tag-err">ERROR</span> locate: missing pattern`,'error');
      const r=Object.keys(VFS).filter(p=>p.includes(pat));
      r.length?r.forEach(p=>appendLine(`<span class="sh-path">${p}</span>`)):appendLine('<span style="color:var(--gray)">(no results)</span>');
    }
  },
  xargs:{ desc:'Build and execute commands from stdin', usage:'xargs <cmd>',
    run(args){ appendBlock(`<span class="tag tag-info">XARGS</span> (simulated) would pipe into: <span class="sh-command">${esc(args.join(' '))}</span>`,'info'); }
  },

  // ─── NETWORK ────────────────────────────────────────────
  ping:     { desc:'Ping a host', usage:'ping [-c N] <host>',
    run(args){
      const ci=args.indexOf('-c'); const count=ci!==-1?parseInt(args[ci+1])||4:4;
      const host=args.find(a=>!a.startsWith('-')&&!/^\d+$/.test(a));
      if(!host) return appendBlock(`<span class="tag tag-err">ERROR</span> ping: missing host`,'error');
      let html=`PING <span class="sh-variable">${esc(host)}</span>: 56 data bytes`;
      for(let i=0;i<count;i++){
        const t=10+Math.floor(Math.random()*8);
        html+=`<br>64 bytes from <span class="sh-variable">${esc(host)}</span>: icmp_seq=<span class="sh-number">${i}</span> ttl=<span class="sh-number">64</span> time=<span class="sh-number">${t}</span> ms`;
      }
      html+=`<br><span style="color:var(--gray)">--- ${esc(host)} ping statistics ---</span>`;
      html+=`<br><span class="sh-number">${count}</span> packets transmitted, <span class="sh-number">${count}</span> received, <span class="sh-ok-code">0%</span> packet loss`;
      appendBlock(html,'success');
    }
  },
  curl:     { desc:'Transfer data from URL (simulated)', usage:'curl [-s] <url>',
    run(args){
      const url=args.find(a=>!a.startsWith('-'));
      if(!url) return appendBlock(`<span class="tag tag-err">ERROR</span> curl: no URL specified<br><span style="color:var(--gray);font-size:11px">Usage: curl &lt;url&gt;</span>`,'error');
      appendBlock(`<span class="tag tag-info">CURL</span> → <span class="sh-url">${esc(url)}</span><br><span style="color:var(--gray-light)">HTTP/1.1 200 OK<br>Content-Type: text/html<br>Content-Length: 1337</span><br><span style="color:var(--gray);font-size:11px">(Simulated — actual HTTP not available in browser sandbox)</span>`,'info');
    }
  },
  wget:     { desc:'Download file from URL (simulated)', usage:'wget <url>',
    run([url]){
      if(!url) return appendBlock(`<span class="tag tag-err">ERROR</span> wget: missing URL`,'error');
      appendBlock(`<span class="tag tag-info">WGET</span> --${new Date().toISOString()}-- <span class="sh-url">${esc(url)}</span><br><span class="sh-number">100%</span> [===================>] 13.37K  --.-KB/s  done`,'info');
    }
  },
  ifconfig: { desc:'Network interfaces', usage:'ifconfig',
    run(){
      const oct=Math.floor(Math.random()*200+10); const mac=Array.from({length:6},()=>Math.floor(Math.random()*256).toString(16).padStart(2,'0')).join(':');
      appendBlock(`<span class="sh-variable">eth0</span>: flags=4163&lt;UP,BROADCAST,RUNNING&gt; mtu <span class="sh-number">1500</span>
        inet <span class="sh-number">10.0.0.${oct}</span>  netmask <span class="sh-number">255.255.255.0</span>  broadcast <span class="sh-number">10.0.0.255</span>
        inet6 <span class="sh-string">fe80::1</span>  prefixlen <span class="sh-number">64</span>  scopeid <span class="sh-number">0x20</span>
        ether <span class="sh-string">${mac}</span>  txqueuelen <span class="sh-number">1000</span>
        RX packets <span class="sh-number">42370</span>  bytes <span class="sh-number">31.2 MB</span>
        TX packets <span class="sh-number">28914</span>  bytes <span class="sh-number">18.7 MB</span>
<span class="sh-variable">lo</span>: flags=73&lt;UP,LOOPBACK,RUNNING&gt; mtu <span class="sh-number">65536</span>
        inet <span class="sh-number">127.0.0.1</span>  netmask <span class="sh-number">255.0.0.0</span>`,'info');
    }
  },
  netstat:  { desc:'Network connections', usage:'netstat [-an]',
    run(){ appendBlock(`<span style="color:var(--gray-mid)">Proto  Local              Foreign            State</span>
tcp    0.0.0.0:80         0.0.0.0:*          <span class="sh-ok-code">LISTEN</span>
tcp    0.0.0.0:443        0.0.0.0:*          <span class="sh-ok-code">LISTEN</span>
tcp    127.0.0.1:3000     0.0.0.0:*          <span class="sh-ok-code">LISTEN</span>
tcp    10.0.0.1:54312     1.1.1.1:443        <span class="sh-ok-code">ESTABLISHED</span>`,'info'); }
  },
  ss:       { desc:'Socket statistics', usage:'ss [-tlnp]',
    run(){ appendBlock(`<span style="color:var(--gray-mid)">State   Recv-Q Send-Q Local Address:Port Peer Address:Port</span>
LISTEN  0      128    0.0.0.0:80        0.0.0.0:*
LISTEN  0      128    0.0.0.0:443       0.0.0.0:*`,'info'); }
  },
  nslookup: { desc:'Query DNS records', usage:'nslookup <host>',
    run([h]){
      if(!h) return appendBlock(`<span class="tag tag-err">ERROR</span> nslookup: missing hostname`,'error');
      appendBlock(`Server:\t\t<span class="sh-number">1.1.1.1</span>\nAddress:\t<span class="sh-number">1.1.1.1</span>#53\n\nNon-authoritative answer:\nName:\t<span class="sh-variable">${esc(h)}</span>\nAddress: <span class="sh-number">${[98,45,136,204].map(n=>(n+Math.floor(Math.random()*5)).toString()).join('.')}</span>`,'info');
    }
  },
  traceroute:{ desc:'Trace packet route', usage:'traceroute <host>',
    run([h]){
      if(!h) return appendBlock(`<span class="tag tag-err">ERROR</span> traceroute: missing host`,'error');
      let html=`traceroute to <span class="sh-variable">${esc(h)}</span>, 30 hops max`;
      for(let i=1;i<=8;i++){
        const ms=i*8+Math.floor(Math.random()*10);
        html+=`<br><span class="sh-number">${String(i).padStart(2)}</span>  <span class="sh-variable">hop${i}.isp.net</span> (10.0.${i}.1)  <span class="sh-number">${ms} ms</span>`;
      }
      html+=`<br><span class="sh-number"> 9</span>  <span class="sh-variable">${esc(h)}</span>  <span class="sh-number">${72+Math.floor(Math.random()*20)} ms</span>`;
      appendBlock(html,'info');
    }
  },
  whois:    { desc:'Domain WHOIS lookup', usage:'whois <domain>',
    run([d]){
      if(!d) return appendBlock(`<span class="tag tag-err">ERROR</span> whois: missing domain`,'error');
      appendBlock(`Domain Name: <span class="sh-variable">${esc(d.toUpperCase())}</span>\nRegistrar: ICANN Registrar\nCreation Date: 2020-01-01\nExpiry Date: 2030-01-01\nName Servers: ns1.example.com, ns2.example.com\nStatus: clientDeleteProhibited`,'info');
    }
  },
  nmap:     { desc:'Port scanner (simulated)', usage:'nmap [-sS] <host>',
    run(args){
      const host=args.find(a=>!a.startsWith('-'))||'localhost';
      const ports=[22,80,443,3000,8080].filter(()=>Math.random()>0.3);
      let html=`Starting HackShell Nmap v2.0\nScan report for <span class="sh-variable">${esc(host)}</span>\n<span style="color:var(--gray-mid)">PORT    STATE  SERVICE</span>`;
      ports.forEach(p=>{ const svcs={22:'ssh',80:'http',443:'https',3000:'node',8080:'http-alt'}; html+=`\n<span class="sh-number">${String(p).padEnd(7)}</span><span class="sh-ok-code">open</span>   <span class="sh-command">${svcs[p]}</span>`; });
      html+=`\n<span class="sh-number">${ports.length}</span> ports open`;
      appendBlock(html,'info');
    }
  },
  arp:      { desc:'ARP table', usage:'arp -a',
    run(){ appendBlock(`? (10.0.0.1) at <span class="sh-string">de:ad:be:ef:00:01</span> [ether] on eth0\n? (10.0.0.254) at <span class="sh-string">fe:ed:fa:ce:00:01</span> [ether] on eth0`,'info'); }
  },
  iptables: { desc:'Show firewall rules (simulated)', usage:'iptables -L',
    run(){ appendBlock(`Chain INPUT (policy ACCEPT)\ntarget     prot opt source               destination\nACCEPT     all  --  anywhere             anywhere\n\nChain FORWARD (policy DROP)\n\nChain OUTPUT (policy ACCEPT)`,'info'); }
  },

  // ─── SYSTEM ─────────────────────────────────────────────
  uname:    { desc:'System information', usage:'uname [-a]',
    run(args){ if(args.includes('-a')||args.includes('--all')) appendLine(`HackShell <span class="sh-variable">hackshell-node-01</span> <span class="sh-number">5.15.0-hackshell</span> #1 SMP x86_64 GNU/HackShell`); else appendLine('HackShell'); }
  },
  whoami:   { desc:'Current user', usage:'whoami', run(){ appendLine(`<span class="sh-variable">anonymous</span>`); } },
  id:       { desc:'User identity', usage:'id', run(){ appendLine(`uid=<span class="sh-number">1000</span>(<span class="sh-variable">anonymous</span>) gid=<span class="sh-number">1000</span>(anonymous) groups=<span class="sh-number">1000</span>,<span class="sh-number">27</span>(sudo),<span class="sh-number">4</span>(adm)`); } },
  hostname: { desc:'Show hostname', usage:'hostname', run(){ appendLine(`<span class="sh-variable">${ENV.HOSTNAME}</span>`); } },
  uptime:   { desc:'System uptime', usage:'uptime',
    run(){
      const up=Math.floor(performance.now()/60000);
      appendLine(` ${new Date().toLocaleTimeString()}  up <span class="sh-number">${up}</span> min,  1 user,  load: <span class="sh-number">0.01</span>, <span class="sh-number">0.04</span>, <span class="sh-number">0.00</span>`);
    }
  },
  ps:       { desc:'List processes', usage:'ps [-aux]',
    run(){
      const procs=[['1','root','0.0','0.1','init'],['42','root','0.0','0.0','kthreadd'],['88','anonymous','0.1','0.5','bash'],['101','anonymous','1.2','1.1','hackshell'],['204','anonymous','0.0','0.2','node'],['305','anonymous','0.0','0.1','python3']];
      let html=`<span style="color:var(--gray-mid)">  PID USER       %CPU %MEM COMMAND</span>`;
      procs.forEach(([pid,user,cpu,mem,cmd])=>{ html+=`<br><span class="sh-number">${pid.padStart(5)}</span> <span class="sh-variable">${user.padEnd(10)}</span> <span class="sh-number">${cpu.padStart(4)}</span> <span class="sh-number">${mem.padStart(4)}</span> <span class="sh-command">${cmd}</span>`; });
      appendBlock(html,'info');
    }
  },
  kill:     { desc:'Kill a process by PID', usage:'kill [-9] <pid>',
    run(args){
      const pid=args.find(a=>!a.startsWith('-'));
      if(!pid) return appendBlock(`<span class="tag tag-err">ERROR</span> kill: missing PID`,'error');
      appendBlock(`<span class="tag tag-ok">OK</span> Sent signal to process <span class="sh-number">${esc(pid)}</span>`,'success');
    }
  },
  jobs:     { desc:'List background jobs', usage:'jobs', run(){ appendLine('<span style="color:var(--gray)">(no background jobs)</span>'); } },
  top:      { desc:'Process monitor (snapshot)', usage:'top',
    run(){
      appendBlock(`<span class="tag tag-info">TOP</span> snapshot @ ${new Date().toLocaleTimeString()}<br>Tasks: <span class="sh-number">47</span> total, <span class="sh-number">1</span> running, <span class="sh-number">46</span> sleeping<br>%Cpu: <span class="sh-number">1.2</span> us, <span class="sh-number">0.3</span> sy, <span class="sh-number">98.5</span> id<br>MiB Mem: <span class="sh-number">8192</span> total, <span class="sh-number">4103</span> free, <span class="sh-number">2048</span> used<br>MiB Swap: <span class="sh-number">2048</span> total, <span class="sh-number">2048</span> free`,'info');
    }
  },
  free:     { desc:'Memory usage', usage:'free [-h]',
    run(){
      appendBlock(`              total        used        free\nMem:    <span class="sh-number">8388608</span>     <span class="sh-number">2097152</span>     <span class="sh-number">4194304</span>\nSwap:   <span class="sh-number">2097152</span>     <span class="sh-number">0</span>           <span class="sh-number">2097152</span>`,'info');
    }
  },
  df:       { desc:'Disk space usage', usage:'df [-h]',
    run(){
      appendBlock(`<span style="color:var(--gray-mid)">Filesystem   Size  Used Avail Use% Mounted on</span>
<span class="sh-path">/dev/sda1</span>    <span class="sh-number">50G</span>  <span class="sh-number">12G</span>  <span class="sh-number">36G</span>  <span class="sh-number">25%</span> /
<span class="sh-path">tmpfs</span>        <span class="sh-number">4.0G</span> <span class="sh-number">8M</span>  <span class="sh-number">4.0G</span>   <span class="sh-number">1%</span> /tmp`,'info');
    }
  },
  du:       { desc:'Disk usage for path', usage:'du [-sh] [path]',
    run([p='.']){ appendLine(`<span class="sh-number">4.0K</span>\t<span class="sh-path">${resolvePath(p)}</span>`); }
  },
  lsblk:    { desc:'List block devices', usage:'lsblk',
    run(){
      appendBlock(`NAME   MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
<span class="sh-variable">sda</span>      8:0    0   50G  0 disk
└─<span class="sh-variable">sda1</span>   8:1    0   50G  0 part /
<span class="sh-variable">sr0</span>     11:0    1 1024M  0 rom`,'info');
    }
  },
  mount:    { desc:'Show mounted filesystems', usage:'mount',
    run(){
      appendBlock(`<span class="sh-path">sysfs</span> on /sys type sysfs (rw,nosuid,nodev)
<span class="sh-path">proc</span> on /proc type proc (rw,nosuid,nodev)
<span class="sh-path">/dev/sda1</span> on / type ext4 (rw,relatime,errors=remount-ro)`,'info');
    }
  },
  dmesg:    { desc:'Kernel ring buffer', usage:'dmesg',
    run(){
      const msgs=['Initializing HackShell kernel...','Loading modules: net, fs, crypto','eth0: Link is Up - 1Gbps','EXT4-fs /dev/sda1: mounted filesystem','random: crng init done','HackShell shell ready'];
      appendBlock(msgs.map((m,i)=>`[<span class="sh-number">${(i*1.23).toFixed(6)}</span>] ${esc(m)}`).join('<br>'),'info');
    }
  },
  vmstat:   { desc:'Virtual memory statistics', usage:'vmstat',
    run(){
      appendBlock(`<span style="color:var(--gray-mid)">procs ---------memory---------- ---swap-- -----io---- -system-- ------cpu-----</span>
 r  b   swpd   free   buff  cache   si   so    bi    bo   in   cs us sy id wa
 1  0      0 4103424 131072 786432    0    0    12    18  234  891  1  0 99  0`,'info');
    }
  },
  iostat:   { desc:'I/O statistics', usage:'iostat',
    run(){
      appendBlock(`HackShell I/O Statistics\nDevice: tps kB_read/s kB_wrtn/s\nsda:    2.1      24.3      18.7`,'info');
    }
  },
  env:      { desc:'Show environment variables', usage:'env',
    run(){
      let html='';
      Object.entries(ENV).forEach(([k,v])=>{ html+=`<span class="sh-variable">${k}</span>=<span class="sh-string">${esc(v)}</span><br>`; });
      appendBlock(html,'info');
    }
  },
  export:   { desc:'Set environment variable', usage:'export VAR=value',
    run(args){
      const pair=args.join(' '); const m=pair.match(/^(\w+)=(.*)$/);
      if(!m) return appendBlock(`<span class="tag tag-err">ERROR</span> export: use <span class="sh-builtin">export VAR=value</span>`,'error');
      ENV[m[1]]=m[2].replace(/^['"]|['"]$/g,'');
      appendBlock(`<span class="tag tag-ok">OK</span> <span class="sh-variable">${m[1]}</span>=<span class="sh-string">${esc(ENV[m[1]])}</span>`,'success');
    }
  },
  vars:     { desc:'Show user-defined variables', usage:'vars',
    run(){
      if(!Object.keys(VARS).length) return appendLine('<span style="color:var(--gray)">(no variables set)</span>');
      Object.entries(VARS).forEach(([k,v])=>{ appendLine(`<span class="sh-variable">${esc(k)}</span>=<span class="sh-string">${esc(String(v))}</span>`); });
    }
  },
  set:      { desc:'Set a shell variable', usage:'set <name> <value>',
    run([k,...rest]){
      if(!k) return appendBlock(`<span class="tag tag-err">ERROR</span> set: missing variable name`,'error');
      VARS[k]=rest.join(' ');
      appendBlock(`<span class="tag tag-ok">OK</span> <span class="sh-variable">$${k}</span> = <span class="sh-string">${esc(VARS[k])}</span>`,'success');
    }
  },
  unset:    { desc:'Unset a shell variable', usage:'unset <name>',
    run([k]){
      if(!k) return appendBlock(`<span class="tag tag-err">ERROR</span> unset: missing name`,'error');
      delete VARS[k]; delete ENV[k];
      appendBlock(`<span class="tag tag-ok">OK</span> Unset <span class="sh-variable">$${esc(k)}</span>`,'success');
    }
  },
  sleep:    { desc:'Pause (simulated)', usage:'sleep <secs>', run([s='1']){ appendBlock(`<span class="tag tag-info">SLEEP</span> <span class="sh-number">${esc(s)}s</span> (simulated)`,'info'); } },
  time:     { desc:'Time a command', usage:'time <command>',
    run(args){
      const start=performance.now(); COMMANDS[args[0]]?.run(args.slice(1));
      const ms=(performance.now()-start).toFixed(2);
      appendLine(`real\t<span class="sh-number">${ms}ms</span>\nuser\t<span class="sh-number">${(ms*0.8).toFixed(2)}ms</span>\nsys\t<span class="sh-number">${(ms*0.2).toFixed(2)}ms</span>`);
    }
  },
  watch:    { desc:'Execute command repeatedly (simulated)', usage:'watch <cmd>',
    run(args){ appendBlock(`<span class="tag tag-info">WATCH</span> Would repeat: <span class="sh-command">${esc(args.join(' '))}</span> every 2s (simulated)`,'info'); }
  },

  // ─── SECURITY ───────────────────────────────────────────
  openssl:  { desc:'OpenSSL toolkit (simulated)', usage:'openssl <sub> [args]',
    run(args){
      const sub=args[0];
      if(sub==='rand'){
        const n=parseInt(args[args.indexOf('-hex')+1]||args[1])||16;
        const rand=Array.from({length:n},()=>Math.floor(Math.random()*256).toString(16).padStart(2,'0')).join('');
        appendLine(`<span class="sh-string">${rand}</span>`);
      } else if(sub==='enc'||sub==='dgst') {
        appendBlock(`<span class="tag tag-info">OPENSSL</span> ${esc(sub)} (simulated)<br>Output: <span class="sh-string">${Array.from({length:32},()=>Math.floor(Math.random()*256).toString(16).padStart(2,'0')).join('')}</span>`,'info');
      } else {
        appendBlock(`<span class="tag tag-info">OPENSSL</span> Available: rand, enc, dgst, x509, genrsa, req`,'info');
      }
    }
  },
  ssh:      { desc:'SSH client (simulated)', usage:'ssh [user@]host',
    run(args){
      const target=args.find(a=>!a.startsWith('-'))||'?';
      appendBlock(`<span class="tag tag-info">SSH</span> Connecting to <span class="sh-variable">${esc(target)}</span>...\nThe authenticity of host '${esc(target)}' can't be established.\nSSH key fingerprint: SHA256:HackShell+SimulatedKey\n(Simulated — actual SSH not available in browser)`,'info');
    }
  },
  gpg:      { desc:'GPG encryption (simulated)', usage:'gpg --<sub> <args>',
    run(args){
      if(args.includes('--gen-key')) appendBlock(`<span class="tag tag-info">GPG</span> Generating key pair... (simulated)\nKey ID: HACKSHELL${Math.floor(Math.random()*0xFFFFFF).toString(16).toUpperCase()}`,'info');
      else appendBlock(`<span class="tag tag-info">GPG</span> Available: --gen-key, --encrypt, --decrypt, --sign, --verify`,'info');
    }
  },
  hash:     { desc:'Hash a string (MD5/SHA)', usage:'hash [-sha256] <text>',
    run(args){
      const sha=args.includes('-sha256')||args.includes('-sha'); const text=args.filter(a=>!a.startsWith('-')).join(' ');
      if(!text) return appendBlock(`<span class="tag tag-err">ERROR</span> hash: missing text`,'error');
      // Fake but plausible-looking hashes
      const seed=text.split('').reduce((a,c)=>a+c.charCodeAt(0),0);
      const fake=(bits)=>Array.from({length:bits/4},(_,i)=>((seed*(i+7)*31+i*13)%16).toString(16)).join('');
      if(sha) appendBlock(`SHA256: <span class="sh-string">${fake(256)}</span>`,'info');
      else appendBlock(`MD5: <span class="sh-string">${fake(128)}</span>`,'info');
    }
  },
  cipher:   { desc:'Simple cipher tool', usage:'cipher <-e|-d> <key> <text>',
    run(args){
      const decode=args.includes('-d'); const rest=args.filter(a=>!a.startsWith('-'));
      const [key,...textParts]=rest; const text=textParts.join(' ');
      if(!key||!text) return appendBlock(`<span class="tag tag-err">ERROR</span> cipher: usage: cipher &lt;-e|-d&gt; &lt;key&gt; &lt;text&gt;`,'error');
      const keyCode=key.split('').reduce((a,c)=>a+c.charCodeAt(0),0)%256;
      const result=text.split('').map(c=>String.fromCharCode(c.charCodeAt(0)^keyCode)).join('');
      appendBlock(`<span class="tag tag-ok">${decode?'DECODE':'ENCODE'}</span> Key: <span class="sh-number">${keyCode}</span><br>Result: <span class="sh-string">${esc(result)}</span>`,'success');
    }
  },
  stego:    { desc:'Steganography tool (simulated)', usage:'stego <-e|-d> <text>',
    run(args){
      const text=args.filter(a=>!a.startsWith('-')).join(' ');
      const r=btoa(text.split('').map(c=>String.fromCharCode(c.charCodeAt(0)+3)).join(''));
      appendBlock(`<span class="tag tag-hack">STEGO</span> Encoded payload:<br><span class="sh-string">${esc(r)}</span>`,'info');
    }
  },

  // ─── LANGUAGE / REPL ────────────────────────────────────
  js:       { desc:'JavaScript REPL (live execution)', usage:'js [expression]',
    run(args){
      if(args.length){
        const expr=args.join(' ');
        execJS(expr);
      } else {
        enterREPL('js');
      }
    }
  },
  node:     { desc:'Node.js REPL (alias for js)', usage:'node [expression]',
    run(args){ COMMANDS.js.run(args); }
  },
  python3:  { desc:'Python REPL (simulated)', usage:'python3 [expression]',
    run(args){
      if(args.length){ execPython(args.join(' ')); }
      else { enterREPL('python'); }
    }
  },
  sh:       { desc:'Shell interpreter mode', usage:'sh',
    run(){ appendBlock(`<span class="tag tag-info">SH</span> Shell interpreter active. All commands available.\nType <span class="sh-builtin">exit</span> to quit.`,'info'); }
  },
  repl:     { desc:'Enter language REPL', usage:'repl [js|python]',
    run([lang='js']){ enterREPL(lang==='py'||lang==='python'?'python':lang); }
  },
  run:      { desc:'Execute a script file', usage:'run <file>',
    run([f]){
      if(!f) return appendBlock(`<span class="tag tag-err">ERROR</span> run: missing filename`,'error');
      const t=resolvePath(f); const node=VFS[t];
      if(!node||node.type!=='file') return appendBlock(`<span class="tag tag-err">ERROR</span> run: '${esc(t)}': file not found`,'error');
      appendBlock(`<span class="tag tag-info">RUN</span> Executing <span class="sh-path">${esc(t)}</span>...`,'info');
      if(f.endsWith('.js')||f.endsWith('.node')) {
        const lines=(node.content||'').split('\n').filter(l=>!l.trim().startsWith('//')&&l.trim());
        lines.forEach(l=>{ if(l.includes('console.log(')) {
          const m=l.match(/console\.log\((['"`])(.*?)\1\)/);
          if(m) appendLine(`<span class="sh-string">${esc(m[2])}</span>`);
        }});
      }
      if(f.endsWith('.sh')) {
        appendBlock(`<span style="color:var(--gray-light)">${esc(node.content||'')}</span>`,'info');
      }
      if(f.endsWith('.py')) {
        appendBlock(`<span style="color:var(--gray-light)">Python output (simulated):\n${esc(node.content?.split('\n').filter(l=>l.includes('print')).map(l=>l.replace(/print\(['"](.+)['"]\)/,'$1')).join('\n')||'(no output)')}</span>`,'info');
      }
      appendBlock(`<span class="tag tag-ok">DONE</span> Exit code: <span class="sh-number">0</span>`,'success');
    }
  },

  // ─── DEV TOOLS ──────────────────────────────────────────
  git:      { desc:'Git version control (simulated)', usage:'git <subcommand>',
    run(args){
      const sub=args[0]; const rest=args.slice(1);
      const map = {
        init:   ()=>appendBlock(`<span class="tag tag-ok">GIT</span> Initialized empty repository in <span class="sh-path">${CWD}/.git</span>`,'success'),
        status: ()=>appendBlock(`On branch <span class="sh-variable">main</span>\nYour branch is up to date.\n\nnothing to commit, working tree clean`,'info'),
        log:    ()=>appendBlock(`commit <span class="sh-string">${Array.from({length:40},()=>'0123456789abcdef'[Math.floor(Math.random()*16)]).join('')}</span>\nAuthor: anonymous &lt;anon@hackshell.dev&gt;\nDate:   ${new Date().toDateString()}\n\n    Initial commit`,'info'),
        clone:  ()=>appendBlock(`<span class="tag tag-info">GIT</span> Cloning <span class="sh-url">${esc(rest[0]||'...')}</span>...\nCloning into '${(rest[0]||'repo').split('/').pop()}'...\ndone.`,'info'),
        pull:   ()=>appendBlock(`Already up to date.`,'success'),
        push:   ()=>appendBlock(`<span class="tag tag-ok">GIT</span> Everything up-to-date`,'success'),
        add:    ()=>appendBlock(`<span class="tag tag-ok">GIT</span> Staged: <span class="sh-string">${esc(rest[0]||'.')}</span>`,'success'),
        commit: ()=>appendBlock(`[main ${Array.from({length:7},()=>'0123456789abcdef'[Math.floor(Math.random()*16)]).join('')}] ${esc(rest.slice(1).join(' ')||'Update')}`,'success'),
      };
      if(map[sub]) map[sub]();
      else appendBlock(`<span class="tag tag-info">GIT</span> subcommands: init, status, log, clone, pull, push, add, commit`,'info');
    }
  },
  npm:      { desc:'Node package manager (simulated)', usage:'npm <sub> [pkg]',
    run(args){
      const sub=args[0]; const pkg=args[1];
      if(sub==='install'||sub==='i') appendBlock(`<span class="tag tag-info">NPM</span> Installing <span class="sh-string">${pkg||'dependencies'}</span>...\nadded 1 package in 0.5s`,'info');
      else if(sub==='list') appendBlock(`hackshell-project@2.0.0\n├── express@4.18.2\n├── lodash@4.17.21\n└── axios@1.3.4`,'info');
      else if(sub==='run') appendBlock(`<span class="tag tag-info">NPM</span> Running script: <span class="sh-string">${pkg||'start'}</span>...`,'info');
      else appendBlock(`<span class="tag tag-info">NPM</span> Commands: install, list, run, init, audit, outdated`,'info');
    }
  },
  json:     { desc:'Parse and format JSON', usage:'json <json-string>',
    run(args){
      const str=args.join(' ');
      try {
        const obj=JSON.parse(str);
        appendBlock(`<pre class="block-code" data-lang="json">${highlightJSON(obj)}</pre>`,'info');
      } catch(e) {
        appendBlock(`<span class="tag tag-err">JSON ERROR</span> ${esc(e.message)}<br><span style="color:var(--gray);font-size:11px">💡 Make sure your JSON is valid. Keys and strings must use double quotes.</span>`,'error');
      }
    }
  },
  yaml:     { desc:'Parse YAML (basic)', usage:'yaml <yaml-string>',
    run(args){
      const str=args.join(' ');
      const lines=str.split('\\n').map(l=>{
        const m=l.match(/^(\s*)([\w-]+):\s*(.*)/);
        if(!m) return esc(l);
        return `${m[1]}<span class="sh-key">"${m[2]}"</span>: <span class="sh-string">"${m[3]}"</span>`;
      });
      appendBlock(`<div style="font-size:12px">${lines.join('<br>')}</div>`,'info');
    }
  },
  typeof:   { desc:'Get type of a value (JS)', usage:'typeof <value>',
    run(args){
      const val=args.join(' ');
      try {
        const t=typeof Function('"use strict"; return ('+val+')')();
        appendLine(`<span class="sh-type">${t}</span>`);
      } catch(e) { appendBlock(`<span class="tag tag-err">ERROR</span> ${esc(e.message)}`,'error'); }
    }
  },
  inspect:  { desc:'Inspect a JS value', usage:'inspect <expr>',
    run(args){
      const expr=args.join(' ');
      try {
        const val=Function('"use strict"; return ('+expr+')')();
        const t=typeof val;
        let html=`<span class="sh-type">${t}</span>`;
        if(t==='object'&&val!==null) html+=` → <pre style="font-size:11px">${highlightJSON(val)}</pre>`;
        else html+=` → <span class="sh-string">${esc(JSON.stringify(val))}</span>`;
        appendBlock(html,'info');
      } catch(e) { appendBlock(`<span class="tag tag-err">ERROR</span> ${esc(e.message)}`,'error'); }
    }
  },
  lint:     { desc:'Lint JS code (basic)', usage:'lint <file>',
    run([f]){
      if(!f) return appendBlock(`<span class="tag tag-err">ERROR</span> lint: missing file`,'error');
      const t=resolvePath(f); const node=VFS[t];
      if(!node||node.type!=='file') return appendBlock(`<span class="tag tag-err">ERROR</span> lint: file not found`,'error');
      const issues=[]; const lines=(node.content||'').split('\n');
      lines.forEach((l,i)=>{
        if(l.includes('var ')) issues.push({line:i+1,msg:'Use const/let instead of var',sev:'warn'});
        if(l.includes('==')&&!l.includes('===')&&!l.includes('!==')&&!l.includes('==>')){issues.push({line:i+1,msg:'Use === instead of ==',sev:'warn'});}
        if(l.length>100) issues.push({line:i+1,msg:`Line too long (${l.length} chars)`,sev:'info'});
      });
      if(!issues.length) appendBlock(`<span class="tag tag-ok">LINT</span> No issues found in <span class="sh-path">${esc(t)}</span>`,'success');
      else {
        let html=`<span class="tag tag-warn">LINT</span> ${issues.length} issue(s) in <span class="sh-path">${esc(t)}</span>`;
        issues.forEach(({line,msg,sev})=>{ html+=`<br><span class="sh-number">${line}:</span> <span class="${sev==='warn'?'sh-keyword':'sh-comment'}">[${sev}]</span> ${esc(msg)}`; });
        appendBlock(html,'warn');
      }
    }
  },
  minify:   { desc:'Minify code (basic)', usage:'minify <file>',
    run([f]){
      if(!f) return appendBlock(`<span class="tag tag-err">ERROR</span> minify: missing file`,'error');
      const t=resolvePath(f); const node=VFS[t];
      if(!node||node.type!=='file') return appendBlock(`<span class="tag tag-err">ERROR</span> minify: file not found`,'error');
      const orig=node.content||'';
      const mini=orig.replace(/\/\/[^\n]*/g,'').replace(/\/\*[\s\S]*?\*\//g,'').replace(/\s+/g,' ').trim();
      appendBlock(`<span class="tag tag-ok">MINIFY</span> ${orig.length} → <span class="sh-number">${mini.length}</span> chars (${Math.round((1-mini.length/orig.length)*100)}% reduction)<br><div class="block-output">${esc(mini.slice(0,200))}${mini.length>200?'...':''}</div>`,'success');
    }
  },
  format:   { desc:'Pretty-format code', usage:'format <file>',
    run([f]){
      if(!f) return appendBlock(`<span class="tag tag-err">ERROR</span> format: missing file`,'error');
      const t=resolvePath(f); const node=VFS[t];
      if(!node||node.type!=='file') return appendBlock(`<span class="tag tag-err">ERROR</span> format: file not found`,'error');
      appendBlock(`<span class="tag tag-ok">FORMAT</span> Formatted <span class="sh-path">${esc(t)}</span> (prettier style)`,'success');
    }
  },

  // ─── MATH / DATA ────────────────────────────────────────
  calc:     { desc:'Calculator', usage:'calc <expr>',
    run(args){
      const e=args.join(' ');
      if(!e) return appendBlock(`<span class="tag tag-err">ERROR</span> calc: missing expression`,'error');
      try {
        if(!/^[\d\s\+\-\*\/\.\(\)\^%!]+$/.test(e)) throw new Error('Invalid characters — only use: digits, +, -, *, /, ., (, ), ^, %');
        const r=Function('"use strict"; return ('+e.replace(/\^/g,'**')+')')();
        appendBlock(`<span class="sh-number">${esc(e)}</span> = <span style="color:var(--green);font-weight:700;font-size:15px">${r}</span>`,'success');
      } catch(err){ appendBlock(`<span class="tag tag-err">CALC ERROR</span> ${esc(err.message)}`,'error'); }
    }
  },
  base64:   { desc:'Base64 encode/decode', usage:'base64 [-d] <text>',
    run(args){
      const d=args.includes('-d')||args.includes('--decode'); const t=args.filter(a=>!a.startsWith('-')).join(' ');
      if(!t) return appendBlock(`<span class="tag tag-err">ERROR</span> base64: missing input`,'error');
      try {
        const r=d?atob(t):btoa(t);
        appendLine(`<span class="sh-string">${esc(r)}</span>`);
      } catch(e){ appendBlock(`<span class="tag tag-err">ERROR</span> base64: ${esc(e.message)}<br><span style="color:var(--gray);font-size:11px">💡 When decoding, input must be valid base64 (padding = required)</span>`,'error'); }
    }
  },
  hex:      { desc:'Convert to/from hex', usage:'hex [-d] <text>',
    run(args){
      const d=args.includes('-d'); const t=args.filter(a=>!a.startsWith('-')).join(' ');
      if(!t) return appendBlock(`<span class="tag tag-err">ERROR</span> hex: missing input`,'error');
      if(d){
        try { const r=t.replace(/\s/g,'').match(/.{2}/g).map(h=>String.fromCharCode(parseInt(h,16))).join(''); appendLine(`<span class="sh-string">${esc(r)}</span>`); }
        catch(e){ appendBlock(`<span class="tag tag-err">ERROR</span> hex: invalid hex string — make sure input is pairs of hex digits`,'error'); }
      } else {
        const r=t.split('').map(c=>c.charCodeAt(0).toString(16).padStart(2,'0')).join(' ');
        appendLine(`<span class="sh-string">${r}</span>`);
      }
    }
  },
  rot13:    { desc:'ROT13 transform', usage:'rot13 <text>',
    run(args){
      const t=args.join(' ');
      if(!t) return appendBlock(`<span class="tag tag-err">ERROR</span> rot13: missing text`,'error');
      const r=t.replace(/[a-zA-Z]/g,c=>String.fromCharCode((c<='Z'?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26));
      appendLine(`<span class="sh-string">${esc(r)}</span>`);
    }
  },
  xxd:      { desc:'Hex dump of text', usage:'xxd <text>',
    run(args){
      const t=args.join(' ');
      if(!t) return appendBlock(`<span class="tag tag-err">ERROR</span> xxd: missing input`,'error');
      let html=''; const bytes=t.split('');
      for(let i=0;i<bytes.length;i+=16){
        const chunk=bytes.slice(i,i+16);
        const offset=i.toString(16).padStart(8,'0');
        const hex=chunk.map(c=>c.charCodeAt(0).toString(16).padStart(2,'0')).join(' ').padEnd(47);
        const ascii=chunk.map(c=>/[\x20-\x7e]/.test(c)?c:'.').join('');
        html+=`<span class="sh-number">${offset}</span>: <span class="sh-string">${hex}</span>  <span style="color:var(--gray-light)">${esc(ascii)}</span><br>`;
      }
      appendBlock(html,'info');
    }
  },
  crc32:    { desc:'CRC32 checksum of text', usage:'crc32 <text>',
    run(args){
      const t=args.join(' '); if(!t) return appendBlock(`<span class="tag tag-err">ERROR</span> crc32: missing input`,'error');
      let crc=-1;
      for(let i=0;i<t.length;i++){let c=t.charCodeAt(i);for(let j=0;j<8;j++){crc=((crc>>>1)^((crc^c)&1?0xEDB88320:0))>>>0;c>>>=1;}}
      appendLine(`<span class="sh-number">${((~crc)>>>0).toString(16).padStart(8,'0')}</span>`);
    }
  },
  uuid:     { desc:'Generate UUID v4', usage:'uuid',
    run(){ appendLine(`<span class="sh-string">${'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,c=>{const r=Math.random()*16|0;return(c==='x'?r:r&0x3|0x8).toString(16);})}</span>`); }
  },
  random:   { desc:'Generate random number or data', usage:'random [--int N] [--hex N]',
    run(args){
      if(args.includes('--int')){ const n=parseInt(args[args.indexOf('--int')+1])||100; appendLine(`<span class="sh-number">${Math.floor(Math.random()*n)}</span>`); }
      else if(args.includes('--hex')){ const n=parseInt(args[args.indexOf('--hex')+1])||16; appendLine(`<span class="sh-string">${Array.from({length:n},()=>Math.floor(Math.random()*256).toString(16).padStart(2,'0')).join('')}</span>`); }
      else appendLine(`<span class="sh-number">${Math.random()}</span>`);
    }
  },
  sort:     { desc:'Sort lines of text', usage:'sort <file>',
    run([f]){
      if(!f) return appendBlock(`<span class="tag tag-err">ERROR</span> sort: missing file`,'error');
      const node=VFS[resolvePath(f)];
      if(!node||node.type!=='file') return appendBlock(`<span class="tag tag-err">ERROR</span> sort: file not found`,'error');
      const sorted=(node.content||'').split('\n').sort().join('\n');
      appendBlock(`<pre>${esc(sorted)}</pre>`,'info');
    }
  },
  uniq:     { desc:'Remove duplicate lines', usage:'uniq <file>',
    run([f]){
      if(!f) return appendBlock(`<span class="tag tag-err">ERROR</span> uniq: missing file`,'error');
      const node=VFS[resolvePath(f)];
      if(!node||node.type!=='file') return appendBlock(`<span class="tag tag-err">ERROR</span> uniq: file not found`,'error');
      const u=[...new Set((node.content||'').split('\n'))].join('\n');
      appendBlock(`<pre>${esc(u)}</pre>`,'info');
    }
  },
  cut:      { desc:'Extract columns from text', usage:'cut -d <delim> -f <field> <text>',
    run(args){
      const di=args.indexOf('-d'); const fi=args.indexOf('-f');
      const d=di!==-1?args[di+1]:','; const f=fi!==-1?parseInt(args[fi+1])-1:0;
      const text=args.filter((a,i)=>!['-d','-f'].includes(a)&&!['-d','-f'].includes(args[i-1])).join(' ');
      const r=text.split(d)[f]||'';
      appendLine(`<span class="sh-string">${esc(r)}</span>`);
    }
  },
  tr:       { desc:'Translate characters', usage:'tr <set1> <set2> <text>',
    run([s1,s2,...rest]){
      if(!s1||!s2) return appendBlock(`<span class="tag tag-err">ERROR</span> tr: missing arguments`,'error');
      const text=rest.join(' ');
      let r=text;
      for(let i=0;i<Math.min(s1.length,s2.length);i++) r=r.split(s1[i]).join(s2[i]);
      appendLine(`<span class="sh-string">${esc(r)}</span>`);
    }
  },
  date:     { desc:'Show current date/time', usage:'date',
    run(args){
      if(args.includes('-u')) appendLine(`<span class="sh-string">${new Date().toUTCString()}</span>`);
      else appendLine(`<span class="sh-string">${new Date().toString()}</span>`);
    }
  },

  // ─── SHELL UTILITIES ────────────────────────────────────
  history:  { desc:'Command history', usage:'history', run(){ if(!HISTORY.length) return appendLine('<span style="color:var(--gray)">(empty)</span>'); HISTORY.forEach((h,i)=>appendLine(`<span class="sh-number">${String(i+1).padStart(4)}</span>  ${highlight(esc(h))}`)); } },
  clear:    { desc:'Clear terminal', usage:'clear', run(){ OUTPUT.innerHTML=''; printMotd(false); } },
  cls:      { desc:'Alias for clear', usage:'cls', run(){ COMMANDS.clear.run([]); } },
  alias:    { desc:'Manage aliases', usage:'alias [name=cmd]',
    run(args){
      const pair=args.join(' ');
      if(!pair){ Object.entries(ALIASES).forEach(([k,v])=>appendLine(`<span class="sh-keyword">alias</span> <span class="sh-variable">${k}</span>=<span class="sh-string">'${esc(v)}'</span>`)); return; }
      const m=pair.match(/^(\w+)=['"]?(.+?)['"]?$/);
      if(!m) return appendBlock(`<span class="tag tag-err">ERROR</span> alias: use <span class="sh-builtin">alias name=command</span>`,'error');
      ALIASES[m[1]]=m[2];
      appendBlock(`<span class="tag tag-ok">OK</span> alias <span class="sh-variable">${m[1]}</span>=<span class="sh-string">'${esc(m[2])}'</span>`,'success');
    }
  },
  unalias:  { desc:'Remove alias', usage:'unalias <name>',
    run([k]){
      if(!k) return appendBlock(`<span class="tag tag-err">ERROR</span> unalias: missing name`,'error');
      delete ALIASES[k]; appendBlock(`<span class="tag tag-ok">OK</span> Removed alias: <span class="sh-variable">${esc(k)}</span>`,'success');
    }
  },
  source:   { desc:'Execute a shell script', usage:'source <file>',
    run([f]){
      if(!f) return appendBlock(`<span class="tag tag-err">ERROR</span> source: missing filename`,'error');
      const t=resolvePath(f); const node=VFS[t];
      if(!node||node.type!=='file') return appendBlock(`<span class="tag tag-err">ERROR</span> source: '${esc(t)}': No such file`,'error');
      appendBlock(`<span class="tag tag-ok">OK</span> Sourced <span class="sh-path">${esc(t)}</span>`,'success');
    }
  },
  pipe:     { desc:'Pipe two commands (demo)', usage:'pipe <cmd1> | <cmd2>',
    run(args){ appendBlock(`<span class="tag tag-info">PIPE</span> Piping: <span class="sh-command">${esc(args.join(' '))}</span>`,'info'); }
  },
  exec:     { desc:'Execute command directly', usage:'exec <cmd>', run(args){ runCommand(args.join(' ')); } },
  exit:     { desc:'Exit the shell', usage:'exit [code]',
    run([code='0']){
      appendBlock(`<span class="tag tag-warn">EXIT</span> Exiting with code <span class="sh-number">${esc(code)}</span>... Reloading.`,'warn');
      setTimeout(()=>location.reload(),1600);
    }
  },

  // ─── INFO ───────────────────────────────────────────────
  man:      { desc:'Manual for a command', usage:'man <cmd>',
    run([c]){
      if(!c) return appendBlock(`<span class="tag tag-err">ERROR</span> man: missing operand`,'error');
      const cmd=COMMANDS[c]||COMMANDS[ALIASES[c]];
      if(!cmd) return appendBlock(`<span class="tag tag-err">ERROR</span> man: no entry for <span class="sh-command">${esc(c)}</span>`,'error');
      appendBlock(`<span class="sh-func">NAME</span><br>    <span class="sh-command">${c}</span> — ${cmd.desc}<br><br><span class="sh-func">SYNOPSIS</span><br>    <span class="sh-builtin">${cmd.usage||c}</span>`,'info');
    }
  },
  version:  { desc:'HackShell version', usage:'version', run(){ appendBlock(`<span class="tag tag-hack">HACKSHELL</span> v<span class="sh-number">2.0.0</span> "Phantom" — cross-language terminal<br><span style="color:var(--gray);font-size:11px">Kernel: 5.15.0-hackshell | JS Engine: V8 | Commands: ${Object.keys(COMMANDS).length}</span>`,'info'); } },
  motd:     { desc:'Message of the day', usage:'motd', run(){ printMotd(false); } },
  sysinfo:  { desc:'Full system info', usage:'sysinfo',
    run(){
      appendBlock(`<span class="tag tag-sys">SYSINFO</span><br>
OS:       <span class="sh-string">HackShell OS 2.0 (Phantom)</span><br>
Kernel:   <span class="sh-number">5.15.0-hackshell</span><br>
Arch:     <span class="sh-variable">x86_64</span><br>
CPU:      <span class="sh-string">HackShell VirtualCPU @ 3.6GHz</span><br>
Memory:   <span class="sh-number">8 GiB</span> (<span class="sh-number">4 GiB</span> free)<br>
Disk:     <span class="sh-number">50 GiB</span> (<span class="sh-number">36 GiB</span> free)<br>
Shell:    <span class="sh-string">/bin/hackshell v2.0</span><br>
Node.js:  <span class="sh-number">v20.0.0</span> (simulated)<br>
Python:   <span class="sh-number">3.11.0</span> (simulated)<br>
Commands: <span class="sh-number">${Object.keys(COMMANDS).length}</span> loaded<br>
Uptime:   <span class="sh-number">${Math.floor(performance.now()/1000)}s</span>`,'info');
    }
  },
  neofetch: { desc:'System info with ASCII art', usage:'neofetch',
    run(){
      const uptime=Math.floor(performance.now()/1000);
      appendRaw(`<div style="display:flex;gap:24px;margin:4px 0">
<div style="color:var(--red);text-shadow:0 0 8px rgba(255,34,51,0.4);font-family:'Share Tech Mono',monospace;line-height:1.2;white-space:pre">   .----.
  /  ██  \\
 | ██████ |
  \\  ██  /
   '----'</div>
<div style="font-size:12px">
<span style="color:var(--red);font-weight:700">anonymous</span><span style="color:var(--gray-mid)">@</span><span style="color:var(--blue)">hackshell-node-01</span><br>
<span style="color:var(--gray-mid)">──────────────────────</span><br>
<span class="sh-variable">OS</span>: HackShell OS 2.0 Phantom<br>
<span class="sh-variable">Shell</span>: hackshell v2.0<br>
<span class="sh-variable">Terminal</span>: xterm-hackshell<br>
<span class="sh-variable">CPU</span>: VirtualCPU @ 3.6GHz<br>
<span class="sh-variable">Memory</span>: 4096MiB / 8192MiB<br>
<span class="sh-variable">Uptime</span>: ${uptime}s<br>
<span class="sh-variable">Commands</span>: ${Object.keys(COMMANDS).length}<br>
<span style="color:var(--gray-mid)">──────────────────────</span><br>
<span style="background:var(--red);color:#000;padding:0 6px">  </span><span style="background:var(--blue);color:#000;padding:0 6px">  </span><span style="background:var(--green);color:#000;padding:0 6px">  </span><span style="background:var(--purple);color:#000;padding:0 6px">  </span><span style="background:var(--yellow);color:#000;padding:0 6px">  </span><span style="background:var(--cyan);color:#000;padding:0 6px">  </span>
</div></div>`);
    }
  },
  finger:   { desc:'User information', usage:'finger [user]',
    run([u='anonymous']){
      appendBlock(`Login: <span class="sh-variable">${esc(u)}</span>\nName: Anonymous Hacker\nDirectory: /home/${esc(u)}\nShell: /bin/hackshell\nLast login: ${new Date().toDateString()}`,'info');
    }
  },

  // ─── UNBLOCKED ──────────────────────────────────────────
  proxies:  { desc:'List web proxies', usage:'proxies [--games|--proxy]',
    run(args){
      const filter=args[0]||'all';
      const showing=filter==='--games'?_px.filter(p=>p.cat==='game'):filter==='--proxy'?_px.filter(p=>p.cat==='proxy'):_px;
      const proxNodes=_px.filter(p=>p.cat==='proxy');
      const gameNodes=_px.filter(p=>p.cat==='game');
      let html=`<div style="margin-bottom:10px"><span class="tag tag-px">PROXIES</span> <span class="sh-number">${proxNodes.length}</span> proxy nodes &nbsp;·&nbsp; <span class="tag tag-hack">GAMES</span> <span class="sh-number">${gameNodes.length}</span> game sites &nbsp;·&nbsp; <span style="color:var(--gray);font-size:10px">launch &lt;name&gt; to open in overlay &nbsp;·&nbsp; click link to open directly</span></div>`;
      if(filter!=='--games'){
        html+=`<div style="color:var(--gray-mid);font-size:9px;letter-spacing:3px;margin:8px 0 5px;text-transform:uppercase;">&#9656; Web Proxies</div>`;
        proxNodes.forEach(p=>{
          html+=`<div class="proxy-card"><div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:6px"><div><span class="proxy-name">${esc(p.n)}</span><span class="proxy-type">[${esc(p.t)}]</span></div></div><div class="proxy-desc">${esc(p.d)}</div><div style="display:flex;gap:7px;margin-top:7px"><button class="proxy-btn" onclick="window._launch('${esc(p.n)}')">&#9654; Launch ${esc(p.n)}</button><button class="proxy-btn" style="border-color:var(--purple-dim);color:var(--purple)" onclick="window._copyHashLink('${esc(p.n)}')">&#128279; Copy Link</button></div></div>`;
        });
      }
      if(filter!=='--proxy'){
        html+=`<div style="color:var(--gray-mid);font-size:9px;letter-spacing:3px;margin:12px 0 5px;text-transform:uppercase;">&#9656; Game Sites</div>`;
        gameNodes.forEach(p=>{
          html+=`<div class="proxy-card" style="border-color:#0033aa33"><div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:6px"><div><span class="proxy-name">${esc(p.n)}</span><span class="proxy-type">[${esc(p.t)}]</span></div></div><div class="proxy-desc">${esc(p.d)}</div><div style="display:flex;gap:7px;margin-top:7px"><button class="proxy-btn" onclick="window._launch('${esc(p.n)}')">&#9654; Launch ${esc(p.n)}</button><button class="proxy-btn" style="border-color:var(--purple-dim);color:var(--purple)" onclick="window._copyHashLink('${esc(p.n)}')">&#128279; Copy Link</button></div></div>`;
        });
      }
      appendBlock(html,'info');
    }
  },
  launch:   { desc:'Launch a proxy/game by name', usage:'launch <name>',
    run([name]){
      if(!name) return appendBlock(`<span class="tag tag-err">ERROR</span> launch: specify a name. Run <span class="sh-builtin">proxies</span> to list.`,'error');
      const p=_px.find(x=>x.n.toLowerCase()===name.toLowerCase());
      if(!p) return appendBlock(`<span class="tag tag-err">ERROR</span> Unknown: <span class="sh-command">${esc(name)}</span><br><span style="color:var(--gray);font-size:11px">Run <span class="sh-builtin">proxies</span> to see available nodes.</span>`,'error');
      window._launch(p.n);
    }
  },
  games:    { desc:'List unblocked game sites', usage:'games',
    run(){
      const gameNodes=_px.filter(p=>p.cat==='game');
      const proxNodes=_px.filter(p=>p.cat==='proxy');
      let html=`<div style="margin-bottom:8px"><span class="tag tag-hack">GAMES</span> ${gameNodes.length} unblocked game sites — click link to open directly, or launch in overlay</div>`;
      html+=`<table class="help-table" style="font-size:11px">`;
      html+=`<tr style="color:var(--gray-mid);font-size:9px;letter-spacing:2px"><td>NAME</td><td>DESCRIPTION &nbsp;·&nbsp; DIRECT LINK</td></tr>`;
      gameNodes.forEach(p=>{
        html+=`<tr><td style="white-space:nowrap"><span class="sh-command">${esc(p.n)}</span></td><td><span style="color:var(--gray-light)">${esc(p.d)}</span><br><span style="color:var(--gray);font-size:10px;font-style:italic">&#128274; link hidden — use launch button above</span></td></tr>`;
      });
      html+=`</table>`;
      html+=`<div style="margin-top:10px;color:var(--gray-mid);font-size:10px;letter-spacing:2px;text-transform:uppercase">&#9656; Proxy Nodes (use if site is blocked)</div>`;
      html+=`<table class="help-table" style="font-size:11px;margin-top:4px">`;
      proxNodes.forEach(p=>{ html+=`<tr><td style="white-space:nowrap"><span class="sh-command">${esc(p.n)}</span></td><td style="color:var(--gray-light)">${esc(p.d)}</td></tr>`; });
      html+=`</table>`;
      html+=`<div style="margin-top:8px;color:var(--gray);font-size:11px">💡 <span class="sh-builtin">launch &lt;name&gt;</span> opens in overlay &nbsp;·&nbsp; <span class="sh-builtin">proxies</span> shows full details &nbsp;·&nbsp; use a proxy if a game site is blocked</div>`;
      appendBlock(html,'info');
    }
  },
  gadd: { desc:'Add/list/remove custom apps (persists)', usage:'gadd --url <url> --name <n> [--type proxy|game] [--desc <d>] [--icon <url>] | --list | --remove <n>',
    run(args){ cmdGadd(args); }
  },
  glink: { desc:'Get shareable hash link for an app', usage:'glink <name>',
    run(args){
      const name=args.join(' ');
      if(!name) return appendBlock(`<span class="tag tag-err">ERROR</span> glink: missing name`,'error');
      const p=findApp(name);
      if(!p) return appendBlock(`<span class="tag tag-err">ERROR</span> glink: app not found: <span class="sh-command">${esc(name)}</span>`,'error');
      const link=hashLink(p.n);
      appendBlock(`<span class="tag tag-ok">LINK</span> Share link for <span class="sh-variable">${esc(p.n)}</span>:<br><span style="color:var(--blue);cursor:pointer;font-size:12px" onclick="window._cp('${window._cpPut(link)}')">${esc(link)}</span><br><span style="color:var(--gray);font-size:11px">Click the link above to copy it to clipboard.</span>`,'success');
    }
  },
  nodeIL:   { desc:'Encryption/decryption engine — 55+ ciphers, stackable, matrix output', usage:'nodeIL <enc|dec|push|pop|stack|list|preset|demo|charset|nums|density> [opts]',
    run(args){ NIL.run(args); }
  },
  xs: {
    desc: 'Zero-width steganography encoder — hide text in invisible chars, password-protected',
    usage: 'xs <enc|dec|file|inspect|strip|demo|sets> [--password=pw] [--set=zw4] [--no-compress] [--short]',
    run(args){ XS.handle(args); }
  },
  bypass:   { desc:'Network filter bypass guide', usage:'bypass',
    run(){ appendBlock(`<span class="tag tag-hack">BYPASS</span> Filter Evasion Methods<br><br><span class="sh-func">Method 1:</span> Web proxy — <span class="sh-builtin">proxies</span> then <span class="sh-builtin">launch &lt;name&gt;</span><br><span class="sh-func">Method 2:</span> Open in incognito and bookmark proxy<br><span class="sh-func">Method 3:</span> Google cache: <span class="sh-string">cache:example.com</span><br><span class="sh-func">Method 4:</span> IP-direct: some filters block by hostname only<br><span class="sh-func">Method 5:</span> URL encoding: <span class="sh-string">%68%74%74%70...</span><br><br><span style="color:var(--gray);font-size:11px">Proxies tunnel traffic through external servers. Filters only see the proxy address.</span>`,'info'); }
  },

};

// ══════════════════════════════════════════════════════════
//  JS REPL ENGINE (live execution)
// ══════════════════════════════════════════════════════════
function execJS(code){
  // Patch console.log to capture output
  const logs=[];
  const origLog=console.log, origWarn=console.warn, origErr=console.error;
  console.log=(...a)=>{ logs.push({t:'log',v:a.map(x=>typeof x==='object'?JSON.stringify(x,null,2):String(x)).join(' ')}); };
  console.warn=(...a)=>{ logs.push({t:'warn',v:a.map(String).join(' ')}); };
  console.error=(...a)=>{ logs.push({t:'err',v:a.map(String).join(' ')}); };
  try {
    const result=Function('"use strict";\nconst require=()=>({});\nconst module={exports:{}};\nconst exports=module.exports;\n'+code)();
    console.log=origLog; console.warn=origWarn; console.error=origErr;
    logs.forEach(({t,v})=>{
      if(t==='log') appendLine(`<span class="repl-output">${highlight(esc(v))}</span>`);
      else if(t==='warn') appendLine(`<span style="color:var(--yellow)">⚠ ${esc(v)}</span>`);
      else appendLine(`<span class="repl-error">✖ ${esc(v)}</span>`);
    });
    if(result!==undefined){
      const display=typeof result==='object'&&result!==null?highlightJSON(result):`<span class="sh-string">${esc(JSON.stringify(result))}</span>`;
      appendLine(`<span style="color:var(--gray-mid)">← </span>${display}`);
    } else if(!logs.length) appendLine(`<span style="color:var(--gray-mid)">← undefined</span>`);
  } catch(e){
    console.log=origLog; console.warn=origWarn; console.error=origErr;
    logs.forEach(({t,v})=>{ appendLine(`<span class="repl-output">${highlight(esc(v))}</span>`); });
    const errType=e.name||'Error'; const errMsg=e.message||'Unknown error';
    let hint='';
    if(errMsg.includes('is not defined')) hint=`💡 Variable not declared. Use <span class="sh-builtin">const</span>/<span class="sh-builtin">let</span> to declare.`;
    else if(errMsg.includes('Unexpected token')) hint=`💡 Syntax error. Check brackets, quotes, and operators.`;
    else if(errMsg.includes('is not a function')) hint=`💡 Calling a non-function. Check the value's type with <span class="sh-builtin">typeof</span>.`;
    else if(errMsg.includes('Cannot read')) hint=`💡 Accessing a property of null/undefined. Check the value first.`;
    appendBlock(`<span class="tag tag-err">${esc(errType)}</span> <span class="sh-err-code">${esc(errMsg)}</span>${hint?`<br><span style="color:var(--gray);font-size:11px">${hint}</span>`:''}`,'error');
  }
}

// Simulated Python execution
function execPython(code){
  const prints=[];
  const lines=code.split(';');
  lines.forEach(line=>{
    const stripped=line.trim();
    // print()
    const printMatch=stripped.match(/^print\((.+)\)$/);
    if(printMatch){
      let val=printMatch[1].replace(/^['"`]|['"`]$/g,'');
      // Simple math
      if(/^[\d\s\+\-\*\/\.\(\)]+$/.test(val)){ try{val=Function('return '+val)();}catch(e){} }
      prints.push(String(val));
    }
    // Variable assignment — do math
    const assignMatch=stripped.match(/^(\w+)\s*=\s*(.+)$/);
    if(assignMatch&&!stripped.startsWith('print')){
      let val=assignMatch[2].replace(/^['"`]|['"`]$/g,'');
      try{ if(/^[\d\s\+\-\*\/\.\(\)]+$/.test(val)) val=Function('return '+val)(); }catch(e){}
      REPL_CTX['py_'+assignMatch[1]]=val;
    }
  });
  if(prints.length) prints.forEach(p=>appendLine(`<span class="repl-output">${esc(p)}</span>`));
  else appendLine(`<span style="color:var(--gray-mid)">>>> </span><span style="color:var(--gray)">(no output)</span>`);
}

// REPL mode
function enterREPL(lang){
  REPL_MODE=lang;
  if(lang==='js'){
    appendBlock(`<span class="tag tag-node">NODE.JS</span> v20.0.0 — Interactive JavaScript REPL<br><span style="color:var(--gray);font-size:11px">console.log(), const/let/var, arrow functions, etc.<br>Type <span class="sh-builtin">exit</span> or <span class="sh-builtin">.exit</span> to leave REPL.</span>`,'info');
    INPUT.placeholder='> JavaScript...';
  } else {
    appendBlock(`<span class="tag tag-node">PYTHON</span> 3.11.0 — Simulated Python REPL<br><span style="color:var(--gray);font-size:11px">Supports: print(), variables, basic math, strings.<br>Type <span class="sh-builtin">exit()</span> or <span class="sh-builtin">quit()</span> to leave.</span>`,'info');
    INPUT.placeholder='>>> Python...';
  }
}

function exitREPL(){
  const prev=REPL_MODE; REPL_MODE=null; INPUT.placeholder='';
  appendBlock(`<span class="tag tag-ok">REPL</span> Exited ${prev} REPL. Back to HackShell.`,'success');
}

// ── Proxy launcher ──
// ── Current active proxy target ──
let _activePx = null;

window._launch=function(name){
  // Search built-ins + custom apps
  const all=[..._px,...loadCustomApps()];
  const p=all.find(x=>x.n===name)||all.find(x=>x.n.toLowerCase()===name.toLowerCase());
  if(!p) return appendBlock(`<span class="tag tag-err">ERROR</span> App not found: <span class="sh-command">${esc(name)}</span>`,'error');
  _launchRaw(p);
  appendBlock(`<span class="tag tag-px">LAUNCH</span> Opening <span class="sh-variable">${esc(p.n)}</span> — <span style="color:var(--blue);cursor:pointer" onclick="window._copyHashLink('${esc(p.n)}')">&#128279; copy link</span>`,'success');
};

// ── Close ──
document.getElementById('iframe-close').onclick=()=>{
  document.getElementById('iframe-overlay').classList.remove('active');
  document.getElementById('proxy-frame').src='about:blank';
  _activePx=null;
};

// ── Reload ──
document.getElementById('iframe-reload').onclick=()=>{
  const f=document.getElementById('proxy-frame');
  // Re-assign src to force reload
  const s=f.src; f.src='about:blank';
  setTimeout(()=>{ f.src=s; },80);
};

// ── Fullscreen ──
document.getElementById('iframe-fullscr').onclick=()=>{
  const f=document.getElementById('proxy-frame');
  const btn=document.getElementById('iframe-fullscr');
  if(!document.fullscreenElement){
    (f.requestFullscreen||f.webkitRequestFullscreen||f.mozRequestFullScreen||f.msRequestFullscreen).call(f)
      .then(()=>{ btn.textContent='⊡ Exit Full'; })
      .catch(()=>{
        // Fallback: fullscreen the overlay instead
        const ov=document.getElementById('iframe-overlay');
        (ov.requestFullscreen||ov.webkitRequestFullscreen||ov.mozRequestFullScreen||ov.msRequestFullscreen).call(ov)
          .catch(e=>appendBlock(`<span class="tag tag-warn">WARN</span> Fullscreen blocked: ${esc(e.message)}`,'warn'));
        btn.textContent='⊡ Exit Full';
      });
  } else {
    (document.exitFullscreen||document.webkitExitFullscreen||document.mozCancelFullScreen||document.msExitFullscreen).call(document)
      .then(()=>{ btn.textContent='⊟ Fullscreen'; });
  }
};

document.addEventListener('fullscreenchange',()=>{
  const btn=document.getElementById('iframe-fullscr');
  if(btn) btn.textContent=document.fullscreenElement?'⊡ Exit Full':'⊟ Fullscreen';
});

// ── Pop Out (popup window with fullscreen iframe) ──
document.getElementById('iframe-popup').onclick=()=>{
  if(!_activePx){
    appendBlock(`<span class="tag tag-warn">WARN</span> No site loaded yet. Use <span class="sh-builtin">launch &lt;name&gt;</span> first.`,'warn');
    return;
  }
  const url=_activePx._;
  const name=_activePx.n;
  const W=screen.availWidth, H=screen.availHeight;
  const popup=window.open('about:blank','hackShell_popup',
    `width=${W},height=${H},left=0,top=0,menubar=no,toolbar=no,location=no,status=no,scrollbars=yes,resizable=yes`
  );
  if(!popup||popup.closed){
    appendBlock(`<span class="tag tag-err">ERROR</span> Popup blocked by browser.<br><span style="color:var(--gray);font-size:11px">💡 Allow popups for this site in your browser settings, then try again.</span>`,'error');
    return;
  }
  popup.document.write(`<!DOCTYPE html><html><head>
<meta charset="UTF-8">
<title>hackShell:// ${name}</title>
<style>
  *{margin:0;padding:0;box-sizing:border-box;}
  html,body{width:100%;height:100%;background:#000;overflow:hidden;}
  iframe{width:100%;height:100%;border:none;display:block;}
</style>
</head><body>
<iframe
  src="${url}"
  allowfullscreen
  allow="fullscreen; autoplay; clipboard-read; clipboard-write; encrypted-media; gamepad; geolocation; microphone; camera; display-capture; web-share; pointer-lock"
  sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals allow-top-navigation allow-downloads allow-pointer-lock"
></iframe>
<script>
  // Auto-fullscreen the iframe on load
  const f=document.querySelector('iframe');
  f.onload=()=>{
    try{
      (f.requestFullscreen||f.webkitRequestFullscreen||f.mozRequestFullScreen).call(f);
    }catch(e){}
  };
<\/script>
</body></html>`);
  popup.document.close();
  appendBlock(`<span class="tag tag-ok">POP OUT</span> Opened <span class="sh-variable">${esc(name)}</span> in popup window.`,'success');
};

// ══════════════════════════════════════════════════════════
//  COMMAND RUNNER
// ══════════════════════════════════════════════════════════
function parseTokens(input){
  const tokens=[]; let cur=''; let inS=false,inD=false;
  for(const ch of input){
    if(ch==="'"&&!inD){inS=!inS;continue;}
    if(ch==='"'&&!inS){inD=!inD;continue;}
    if(ch===' '&&!inS&&!inD){if(cur){tokens.push(cur);cur='';}}
    else cur+=ch;
  }
  if(cur) tokens.push(cur);
  return tokens;
}

function runCommand(raw){
  const input=raw.trim(); if(!input) return;

  // REPL mode handler
  if(REPL_MODE){
    if(['exit','.exit','quit','quit()','exit()'].includes(input.trim())){
      exitREPL(); return;
    }
    HISTORY.push(input); HIST_IDX=HISTORY.length;
    const prefix=REPL_MODE==='js'?'<span class="repl-prompt">&gt;</span>':'<span class="repl-prompt">&gt;&gt;&gt;</span>';
    appendRaw(`<div class="line">${prefix}<span style="margin-left:8px">${highlight(esc(input))}</span></div>`);
    if(REPL_MODE==='js') execJS(input);
    else execPython(input);
    return;
  }

  HISTORY.push(input); HIST_IDX=HISTORY.length;
  appendCmdEcho(input);

  // Semicolons
  if(input.includes(';')){
    input.split(';').forEach(c=>{ if(c.trim()) runCommand(c.trim()); }); return;
  }

  // Pipes (basic: just run all parts)
  if(input.includes('|')&&!input.startsWith('|')){
    const parts=input.split('|').map(s=>s.trim());
    parts.forEach(p=>{ if(p){ const toks=parseTokens(p); const cmd=toks[0]; if(COMMANDS[cmd]) COMMANDS[cmd].run(toks.slice(1)); } });
    return;
  }

  const tokens=parseTokens(input);
  let cmd=tokens[0]; const args=tokens.slice(1);

  // Expand aliases
  if(ALIASES[cmd]){
    const parts=parseTokens(ALIASES[cmd]+' '+args.join(' '));
    cmd=parts[0]; return runCommand(parts.join(' '));
  }

  // Variable assignment: NAME=value
  if(/^\w+=/.test(cmd)&&!args.length){
    const [k,...v]=cmd.split('='); VARS[k]=v.join('=');
    appendBlock(`<span class="tag tag-ok">OK</span> <span class="sh-variable">$${esc(k)}</span> = <span class="sh-string">${esc(VARS[k])}</span>`,'success'); return;
  }

  if(COMMANDS[cmd]){
    try { COMMANDS[cmd].run(args); }
    catch(e){
      appendBlock(`<span class="tag tag-err">RUNTIME</span> <span class="sh-err-code">${esc(e.message)}</span><br><span style="color:var(--gray);font-size:11px">Bug in command handler. Try <span class="sh-builtin">help ${esc(cmd)}</span>.</span>`,'error');
    }
  } else {
    // Smart "did you mean?"
    const similar=Object.keys(COMMANDS).filter(c=>{
      let hits=0; for(const ch of cmd) if(c.includes(ch)) hits++;
      return hits>=Math.min(3,cmd.length-1)&&Math.abs(c.length-cmd.length)<4;
    }).slice(0,3);
    let html=`<span class="tag tag-err">ERROR</span> <span class="sh-err-code">command not found:</span> <span class="sh-command">${esc(cmd)}</span>`;
    if(similar.length) html+=`<br><span style="color:var(--gray);font-size:11px">Did you mean: ${similar.map(s=>`<span class="sh-builtin">${s}</span>`).join(' or ')}?</span>`;
    else html+=`<br><span style="color:var(--gray);font-size:11px">💡 Type <span class="sh-builtin">help</span> for all commands.</span>`;
    appendBlock(html,'error');
  }
}

// ══════════════════════════════════════════════════════════
//  MOTD / BANNER
// ══════════════════════════════════════════════════════════
function printMotd(full=true){
  if(full){
    appendRaw(`<div class="banner" style="font-size:clamp(7px,1vw,11px);white-space:pre;line-height:1.15">
 ██╗  ██╗ █████╗  ██████╗██╗  ██╗███████╗██╗  ██╗███████╗██╗     ██╗
 ██║  ██║██╔══██╗██╔════╝██║ ██╔╝██╔════╝██║  ██║██╔════╝██║     ██║
 ███████║███████║██║     █████╔╝ ███████╗███████║█████╗  ██║     ██║
 ██╔══██║██╔══██║██║     ██╔═██╗ ╚════██║██╔══██║██╔══╝  ██║     ██║
 ██║  ██║██║  ██║╚██████╗██║  ██╗███████║██║  ██║███████╗███████╗███████╗
 ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝</div>`);
  }
  appendRaw(`<div style="color:var(--gray-light);font-size:11px;margin:4px 0">v2.0 "Phantom" — node://<span style="color:var(--blue)">${ENV.HOSTNAME}</span> · <span style="color:var(--red)">anonymous</span> · type <span style="color:var(--cyan)">'help'</span></div>`);
  appendRaw('<hr class="divider">');
  appendBlock(`<span style="color:var(--gray-mid)">OS</span>: HackShell OS 2.0 &nbsp;·&nbsp; <span style="color:var(--gray-mid)">Kernel</span>: 5.15.0-hackshell &nbsp;·&nbsp; <span style="color:var(--gray-mid)">Commands</span>: <span class="sh-number">${Object.keys(COMMANDS).length}</span> &nbsp;·&nbsp; <span style="color:var(--gray-mid)">Proxies</span>: <span class="sh-number">${_px.length}</span>`,'info');
  appendRaw('<hr class="divider">');
}

// ══════════════════════════════════════════════════════════
//  AUTOCOMPLETE
// ══════════════════════════════════════════════════════════
function getCompletions(partial){
  if(!partial) return [];
  const cmds=Object.entries({...COMMANDS,...Object.fromEntries(Object.keys(ALIASES).map(k=>[k,{desc:`alias → ${ALIASES[k]}`}]))})
    .filter(([k])=>k.startsWith(partial))
    .map(([k,v])=>({cmd:k,desc:v.desc}));
  const isPath=partial.includes('/')||partial.startsWith('.');
  if(isPath){
    const dir=partial.endsWith('/')?resolvePath(partial):resolvePath(partial.substring(0,partial.lastIndexOf('/'))||'.');
    const node=VFS[dir];
    if(node?.children){
      const pfx=partial.endsWith('/')?partial:partial.substring(0,partial.lastIndexOf('/')+1);
      node.children.filter(c=>c.startsWith(partial.split('/').pop())).forEach(c=>cmds.push({cmd:pfx+c,desc:''}));
    }
  }
  return cmds;
}

let acSelected=-1;

INPUT.addEventListener('input',()=>{
  const val=INPUT.value.trim(); const partial=val.split(' ').pop();
  renderAutocomplete(getCompletions(partial),partial);
  updateSuggestions(val);
});

INPUT.addEventListener('keydown',e=>{
  const items=AUTO.querySelectorAll('.ac-item');
  if(e.key==='ArrowUp'){
    e.preventDefault();
    if(AUTO.classList.contains('visible')&&items.length){ acSelected=Math.max(0,acSelected-1); items.forEach((el,i)=>el.classList.toggle('selected',i===acSelected)); }
    else { if(HIST_IDX>0) HIST_IDX--; INPUT.value=HISTORY[HIST_IDX]||''; }
  } else if(e.key==='ArrowDown'){
    e.preventDefault();
    if(AUTO.classList.contains('visible')&&items.length){ acSelected=Math.min(items.length-1,acSelected+1); items.forEach((el,i)=>el.classList.toggle('selected',i===acSelected)); }
    else { if(HIST_IDX<HISTORY.length-1) HIST_IDX++; else{HIST_IDX=HISTORY.length;INPUT.value='';return;} INPUT.value=HISTORY[HIST_IDX]||''; }
  } else if(e.key==='Tab'){
    e.preventDefault();
    if(items.length){ const sel=items[acSelected>=0?acSelected:0]; if(sel){const words=INPUT.value.split(' ');words[words.length-1]=sel.dataset.cmd;INPUT.value=words.join(' ');hideAC();} }
    else { const p=INPUT.value.trim().split(' ').pop(); const c=getCompletions(p); if(c.length===1){const words=INPUT.value.split(' ');words[words.length-1]=c[0].cmd;INPUT.value=words.join(' ');} }
  } else if(e.key==='Enter'){
    e.preventDefault(); hideAC(); const val=INPUT.value; INPUT.value=''; runCommand(val);
  } else if(e.key==='Escape'){ hideAC(); }
  else if(e.key==='c'&&e.ctrlKey){ e.preventDefault(); if(REPL_MODE)exitREPL(); else{appendLine('<span style="color:var(--gray)">^C</span>'); INPUT.value='';} hideAC(); }
  else if(e.key==='l'&&e.ctrlKey){ e.preventDefault(); COMMANDS.clear.run([]); }
});

function renderAutocomplete(completions,partial){
  if(!completions.length||!partial){hideAC();return;}
  const rect=INPUT.getBoundingClientRect();
  AUTO.style.bottom=(window.innerHeight-rect.top+4)+'px';
  AUTO.style.left=rect.left+'px';
  AUTO.innerHTML=completions.slice(0,12).map(c=>`<div class="ac-item" data-cmd="${esc(c.cmd)}"><span class="ac-cmd">${esc(c.cmd)}</span><span class="ac-desc">${esc(c.desc)}</span></div>`).join('');
  AUTO.querySelectorAll('.ac-item').forEach(el=>{
    el.addEventListener('click',()=>{const words=INPUT.value.split(' ');words[words.length-1]=el.dataset.cmd;INPUT.value=words.join(' ');INPUT.focus();hideAC();});
  });
  acSelected=-1; AUTO.classList.add('visible');
}
function hideAC(){AUTO.classList.remove('visible');acSelected=-1;}

// Suggestion bar
const SUGGEST_BAR=document.getElementById('suggestion-bar');
const DEF_SUGG=['help','proxies','games','neofetch','sysinfo','js','python3','git status','ls -la','ps'];

function updateSuggestions(val){
  const suggs=val?[]:DEF_SUGG;
  SUGGEST_BAR.innerHTML=suggs.map(s=>`<span class="suggestion-chip" onclick="INPUT.value='${s}';INPUT.focus();">${s}</span>`).join('');
}

document.getElementById('output').addEventListener('click',()=>INPUT.focus());


// ══════════════════════════════════════════════════════════
//  PERSISTENT STORAGE  (localStorage)
// ══════════════════════════════════════════════════════════
const STORE_KEY = 'hackshell_custom_apps';

function loadCustomApps() {
  try {
    return JSON.parse(localStorage.getItem(STORE_KEY) || '[]');
  } catch(e) { return []; }
}

function saveCustomApps(apps) {
  try { localStorage.setItem(STORE_KEY, JSON.stringify(apps)); } catch(e) {}
}

// Mutable list — starts as empty, merged with _px at runtime
let _customApps = loadCustomApps();

// Combined app list (built-ins + custom)
function allApps() {
  return [..._px, ..._customApps];
}

// Find app by name (exact then partial) across all apps
function findApp(query) {
  const all = allApps();
  const q = query.toLowerCase().trim();
  return all.find(x => x.n.toLowerCase() === q)
      || all.find(x => x.n.toLowerCase().includes(q));
}

// ══════════════════════════════════════════════════════════
//  SHAREABLE HASH LINKS  — domain#AppName  or  domain#url
// ══════════════════════════════════════════════════════════

// Build the shareable link for a named app
function hashLink(name) {
  return location.origin + location.pathname + '#' + encodeURIComponent(name);
}

// Try to load a URL in the iframe, cycling through proxies if it fails
let _proxyRetryQueue = [];
let _proxyRetryTimeout = null;

function tryLoadUrl(url, proxyQueue, onSuccess, onFail) {
  const frame    = document.getElementById('proxy-frame');
  const retryBar = document.getElementById('iframe-retry-bar');
  const retryNode= document.getElementById('iframe-retry-node');
  const retryPct = document.getElementById('iframe-retry-progress');
  const titleEl  = document.getElementById('iframe-title');
  const topbar   = document.getElementById('iframe-topbar');
  const totalQ   = proxyQueue._origLen || proxyQueue.length;

  if(!proxyQueue.length) {
    retryBar.classList.remove('visible');
    topbar.classList.remove('loading');
    onFail(); return;
  }

  const proxy = proxyQueue.shift();
  const attempted = totalQ - proxyQueue.length;
  const targetUrl = proxy ? proxy._ + encodeURIComponent(url) : url;

  // Update retry bar
  retryBar.classList.add('visible');
  topbar.classList.add('loading');
  retryNode.textContent = proxy ? proxy.n : 'direct';
  retryPct.textContent = ` (${attempted}/${totalQ})`;
  titleEl.textContent = `[ ${proxy ? 'via '+proxy.n : 'direct'}: ${url.replace(/^https?:\/\//,'').slice(0,40)} ]`;

  frame.src = targetUrl;

  const timer = setTimeout(() => {
    frame.onload = null;
    frame.src = 'about:blank';
    proxyQueue._origLen = totalQ;
    tryLoadUrl(url, proxyQueue, onSuccess, onFail);
  }, 7000);

  frame.onload = () => {
    clearTimeout(timer);
    frame.onload = null;
    try {
      if(frame.contentDocument && frame.contentDocument.title.toLowerCase().includes('error')) {
        proxyQueue._origLen = totalQ;
        tryLoadUrl(url, proxyQueue, onSuccess, onFail);
      } else {
        retryBar.classList.remove('visible');
        topbar.classList.remove('loading');
        onSuccess(targetUrl, proxy);
      }
    } catch(e) {
      // Cross-origin content loaded = success
      retryBar.classList.remove('visible');
      topbar.classList.remove('loading');
      onSuccess(targetUrl, proxy);
    }
  };
}

function launchByHashValue(hashVal) {
  if(!hashVal) return false;
  const decoded = decodeURIComponent(hashVal).trim();

  // Case 1: named app
  const app = findApp(decoded);
  if(app) {
    _launchRaw(app);
    return true;
  }

  // Case 2: raw URL
  if(/^https?:\/\//i.test(decoded)) {
    launchRawUrl(decoded);
    return true;
  }

  return false;
}

function launchRawUrl(url) {
  const overlay = document.getElementById('iframe-overlay');
  const frame   = document.getElementById('proxy-frame');
  const titleEl = document.getElementById('iframe-title');

  titleEl.textContent = `[ Loading: ${url.replace(/^https?:\/\//,'')} ]`;
  overlay.classList.add('active');

  // Try direct first, then cycle through web proxies
  const webProxies = _px.filter(p => p.cat === 'proxy');
  const queue = [null, ...webProxies]; // null = direct attempt

  let attempt = 0;
  const total  = queue.length;

  appendBlock(`<span class="tag tag-info">URL</span> Attempting direct load: <span class="sh-url">${esc(url)}</span>`, 'info');

  tryLoadUrl(url, [...queue], (finalUrl, proxy) => {
    titleEl.textContent = proxy
      ? `[ ${url.replace(/^https?:\/\//,'')} via ${proxy.n} ]`
      : `[ ${url.replace(/^https?:\/\//,'')} ]`;
    if(proxy) appendBlock(`<span class="tag tag-ok">OK</span> Loaded via proxy: <span class="sh-variable">${esc(proxy.n)}</span>`, 'success');
    else       appendBlock(`<span class="tag tag-ok">OK</span> Loaded directly.`, 'success');
    _activePx = { n: url, t: 'URL', _: finalUrl };
  }, () => {
    titleEl.textContent = '[ Failed ]';
    frame.src = 'about:blank';
    overlay.classList.remove('active');
    appendBlock(
      `<span class="tag tag-err">ERROR</span> Could not load <span class="sh-url">${esc(url)}</span><br>`+
      `<span style="color:var(--gray);font-size:11px">Tried direct + ${webProxies.length} proxy nodes — all failed or blocked.<br>`+
      `💡 Try <span class="sh-builtin">proxies</span> and navigate manually.</span>`,
      'error'
    );
  });
}

// Raw launch by app object
function _launchRaw(p) {
  _activePx = p;
  document.getElementById('iframe-title').textContent = `[ ${p.n} — ${p.t||'App'} ]`;
  document.getElementById('proxy-frame').src = p._;
  document.getElementById('iframe-overlay').classList.add('active');
  // Favicon
  const fav = document.getElementById('iframe-favicon');
  if(p.icon) {
    fav.src = p.icon;
    fav.style.display = 'inline-block';
    fav.onerror = () => {
      // Try to load from the target domain as fallback
      try {
        const domain = new URL(p._).origin;
        fav.src = domain + '/favicon.ico';
        fav.onerror = () => { fav.style.display = 'none'; };
      } catch(e) { fav.style.display = 'none'; }
    };
  } else {
    // Auto-fetch favicon from URL domain
    try {
      const domain = new URL(p._).origin;
      fav.src = domain + '/favicon.ico';
      fav.style.display = 'inline-block';
      fav.onerror = () => { fav.style.display = 'none'; };
    } catch(e) { fav.style.display = 'none'; }
  }
  // Update address bar hash without reload
  history.replaceState(null, '', '#' + encodeURIComponent(p.n));
}

// ══════════════════════════════════════════════════════════
//  ADD APP COMMAND  (gadd)
// ══════════════════════════════════════════════════════════
// gadd --url <url> --name <name> [--type proxy|game] [--desc <desc>] [--icon <url>]
// gadd --list
// gadd --remove <name>

function cmdGadd(args) {
  if(!args.length || args[0] === '--list') {
    const customs = loadCustomApps();
    if(!customs.length) return appendBlock(`<span class="tag tag-info">GADD</span> No custom apps saved yet.<br><span style="color:var(--gray);font-size:11px">Add one: <span class="sh-builtin">gadd --url &lt;url&gt; --name &lt;name&gt;</span></span>`, 'info');
    let html = `<div style="margin-bottom:8px"><span class="tag tag-hack">CUSTOM APPS</span> ${customs.length} saved</div>`;
    customs.forEach((a,i) => {
      const icon = a.icon ? `<img src="${esc(a.icon)}" style="width:14px;height:14px;border-radius:2px;vertical-align:middle;margin-right:5px" onerror="this.style.display='none'">` : '▶ ';
      html += `<div class="proxy-card" style="margin:3px 0;padding:7px 12px">
        ${icon}<span class="proxy-name">${esc(a.n)}</span>
        <span class="proxy-type">[${esc(a.t||'App')}]</span>
        <div class="proxy-desc">${esc(a.d||'')}</div>
        <div style="margin-top:5px;display:flex;gap:8px">
          <button class="proxy-btn" onclick="window._launch('${esc(a.n)}')">&#9654; Launch</button>
          <button class="proxy-btn" style="border-color:var(--gray);color:var(--gray-light)" onclick="window._copyHashLink('${esc(a.n)}')">&#128279; Copy Link</button>
          <button class="proxy-btn" style="border-color:var(--red-dim);color:var(--red)" onclick="window._removeApp('${esc(a.n)}')">&#10005; Remove</button>
        </div>
      </div>`;
    });
    appendBlock(html, 'info');
    return;
  }

  if(args[0] === '--remove') {
    const name = args.slice(1).join(' ');
    if(!name) return appendBlock(`<span class="tag tag-err">ERROR</span> gadd --remove: missing name`, 'error');
    const apps = loadCustomApps().filter(a => a.n.toLowerCase() !== name.toLowerCase());
    saveCustomApps(apps);
    _customApps = apps;
    return appendBlock(`<span class="tag tag-ok">OK</span> Removed: <span class="sh-variable">${esc(name)}</span>`, 'success');
  }

  // Parse flags
  const get = (flag) => {
    const i = args.indexOf(flag);
    if(i === -1) return null;
    // Collect everything after flag until next --flag
    const parts = [];
    for(let j = i+1; j < args.length && !args[j].startsWith('--'); j++) parts.push(args[j]);
    return parts.join(' ') || null;
  };

  const url  = get('--url');
  const name = get('--name');
  const type = get('--type') || 'game';
  const desc = get('--desc') || '';
  const icon = get('--icon') || null;

  if(!url)  return appendBlock(`<span class="tag tag-err">ERROR</span> gadd: <span class="sh-flag">--url</span> is required<br><span style="color:var(--gray);font-size:11px">Usage: <span class="sh-builtin">gadd --url &lt;url&gt; --name &lt;name&gt; [--type proxy|game] [--desc &lt;text&gt;] [--icon &lt;url&gt;]</span></span>`, 'error');
  if(!name) return appendBlock(`<span class="tag tag-err">ERROR</span> gadd: <span class="sh-flag">--name</span> is required`, 'error');

  if(!/^https?:\/\//i.test(url)) return appendBlock(`<span class="tag tag-err">ERROR</span> gadd: URL must start with https:// or http://`, 'error');

  const apps = loadCustomApps();
  const exists = apps.find(a => a.n.toLowerCase() === name.toLowerCase());
  if(exists) {
    // Update existing
    Object.assign(exists, { _: url, t: type, d: desc, cat: type, icon });
    saveCustomApps(apps);
    _customApps = apps;
    return appendBlock(`<span class="tag tag-ok">UPDATED</span> <span class="sh-variable">${esc(name)}</span> saved.<br><span style="color:var(--gray-light);font-size:11px">Share link: <span style="color:var(--blue)">${esc(hashLink(name))}</span></span>`, 'success');
  }

  const newApp = { n: name, t: type, cat: type, d: desc, _: url, icon: icon || null };
  apps.push(newApp);
  saveCustomApps(apps);
  _customApps = apps;

  const link = hashLink(name);
  let html = `<span class="tag tag-ok">SAVED</span> <span class="sh-variable">${esc(name)}</span> added to custom apps!<br>`;
  html += `<span style="color:var(--gray-mid);font-size:11px">Share link (click to copy):</span><br>`;
  html += `<span style="color:var(--blue);cursor:pointer;font-size:11px" onclick="window._cp('${window._cpPut(link)}')">${esc(link)}</span><br>`;
  html += `<div style="margin-top:6px;display:flex;gap:8px">`;
  html += `<button class="proxy-btn" onclick="window._launch('${esc(name)}')">&#9654; Launch now</button>`;
  html += `<button class="proxy-btn" style="border-color:var(--purple-dim);color:var(--purple)" onclick="window._cp('${window._cpPut(link)}')">&#128279; Copy link</button>`;
  html += `</div>`;
  appendBlock(html, 'success');
}

// ── Copy hash link helper ──
window._copyHashLink = function(name) {
  const link = hashLink(name);
  navigator.clipboard.writeText(link)
    .then(() => appendBlock(`<span class="tag tag-ok">OK</span> Copied: <span style="color:var(--blue)">${esc(link)}</span>`, 'success'))
    .catch(() => appendBlock(`<span class="tag tag-warn">WARN</span> Copy failed. Link: <span style="color:var(--blue)">${esc(link)}</span>`, 'warn'));
};

// ── Remove app helper ──
window._removeApp = function(name) {
  const apps = loadCustomApps().filter(a => a.n !== name);
  saveCustomApps(apps);
  _customApps = apps;
  appendBlock(`<span class="tag tag-ok">OK</span> Removed: <span class="sh-variable">${esc(name)}</span>`, 'success');
};


// ══════════════════════════════════════════════════════════════════
//  nodeIL — ENCRYPTION / DECRYPTION ENGINE
//  55+ ciphers · matrix aesthetic · stackable · persistent
// ══════════════════════════════════════════════════════════════════

const NIL = (() => {
  const SETS = {
    katakana:  'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン',
    latin1:    '\xA1\xA2\xA3\xA4\xA5\xA6\xA7\xA8\xA9\xAA\xAB\xAC\xAE\xAF\xB0\xB1\xB2\xB3\xB4\xB5\xB6\xB7\xB8\xB9\xBA\xBB\xBC\xBD\xBE\xBF\xC0\xC1\xC2\xC3\xC4\xC5\xC6\xC7\xC8\xC9\xCA\xCB\xCC\xCD\xCE\xCF\xD0\xD1\xD2\xD3\xD4\xD5\xD6\xD8\xD9\xDA\xDB\xDC\xDD\xDE\xDF',
    braille:   '⠁⠂⠃⠄⠅⠆⠇⠈⠉⠊⠋⠌⠍⠎⠏⠐⠑⠒⠓⠔⠕⠖⠗⠘⠙⠚⠛⠜⠝⠞⠟⠠⠡⠢⠣⠤⠥⠦⠧⠨⠩⠪⠫⠬⠭⠮⠯⠰⠱⠲⠳⠴⠵⠶⠷⠸⠹⠺⠻⠼⠽⠾⠿',
    runic:     'ᚠᚡᚢᚣᚤᚥᚦᚧᚨᚩᚪᚫᚬᚭᚮᚯᚰᚱᚲᚳᚴᚵᚶᚷᚸᚹᚺᚻᚼᚽᚾᚿᛀᛁᛂᛃᛄᛅᛆᛇᛈᛉᛊᛋᛌᛍᛎᛏᛐᛑᛒᛓ',
    cyrillic:  'ЀЁЂЃЄЅІЇЈЉЊЋЌЍЎЏАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ',
    georgian:  'ႠႡႢႣႤႥႦႧႨႩႪႫႬႭႮႯႰႱႲႳႴႵႶႷႸႹႺႻႼႽႾႿჀჁჂჃჄჅ',
    arrows:    '←↑→↓↔↕↖↗↘↙↚↛↜↝↞↟↠↡↢↣↤↥↦↧↨↩↪↫↬↭↮↯↰↱↲↳↴↵↶↷↸↹↺↻',
    boxdraw:   '─━│┃┄┅┆┇┈┉┊┋┌┍┎┏┐┑┒┓└┕┖┗┘┙┚┛├┝┞┟┠┡┢┣┤┥┦┧┨┩┪┫┬┭┮┯┰┱┲┳┴┵┶┷┸┹┺┻┼┽┾┿',
    greek:     'ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ',
    math:      '∀∂∃∄∅∆∇∈∉∊∋∌∍∎∏∐∑∓∔∕∖∗∘∙√∛∜∝∞∟∠∡∢∣∤∥∦∧∨∩∪∫∬∭∮∯∰',
    hex:       '0123456789ABCDEF',
    binary:    '01',
    noise:     '!@#$%^&*()_+-=[]{}|;:,.<>?/~`',
  };

  const lcg = seed => { let s=(seed>>>0)||1337; return ()=>{ s=(Math.imul(1664525,s)+1013904223)>>>0; return s/4294967296; }; };
  const toBytes   = s => Array.from(s).map(c=>c.charCodeAt(0));
  const fromBytes = b => b.map(x=>String.fromCharCode(x&0xFF)).join('');
  const mod  = (n,m) => ((n%m)+m)%m;
  const clamp= (v,lo,hi) => Math.max(lo,Math.min(hi,v));
  const hexStr = n => n.toString(16).padStart(2,'0');
  const bitStr = n => (n>>>0).toString(2).padStart(8,'0');
  const numStr = n => String(n).padStart(3,'0');

  function toMatrix(bytes,opts){
    const {charset='katakana',showNums=false,density=1.0,seedVal=0}=opts||{};
    const chars=SETS[charset]||SETS.katakana; const rng=lcg(seedVal); let out='';
    for(let i=0;i<bytes.length;i++){
      const b=bytes[i]&0xFF; const r=rng();
      if(showNums&&i%8===0)out+=`[${hexStr(i)}]`;
      if(r<density){ const idx=mod(b+Math.floor(rng()*13),chars.length); out+=chars[idx]; }
      else out+=String.fromCharCode(b);
    }
    return out;
  }

  const CIPHERS = {
    'xor':           { desc:'XOR each byte with rolling passkey',
      enc(b,k){ const K=toBytes(k||'hackshell'); return b.map((v,i)=>v^K[i%K.length]); },
      dec(b,k){ return CIPHERS.xor.enc(b,k); } },
    'xor-cascade':   { desc:'XOR with cascading key: each output byte feeds next key',
      enc(b,k){ const K=toBytes(k||'hs'); let p=K[0]; return b.map((v,i)=>{const c=v^p^K[i%K.length];p=c;return c;}); },
      dec(b,k){ const K=toBytes(k||'hs'); let p=K[0]; return b.map((v,i)=>{const c=v^p^K[i%K.length];p=v;return c;}); } },
    'caesar':        { desc:'Caesar byte shift (default offset 13)',
      enc(b,k){ const n=parseInt(k)||13; return b.map(v=>mod(v+n,256)); },
      dec(b,k){ const n=parseInt(k)||13; return b.map(v=>mod(v-n,256)); } },
    'caesar-prime':  { desc:'Caesar shift to nearest prime from offset',
      enc(b,k){ const iP=n=>{if(n<2)return false;for(let i=2;i<=Math.sqrt(n);i++)if(n%i===0)return false;return true;}; let n=parseInt(k)||17; while(!iP(n))n++; return b.map(v=>mod(v+n,256)); },
      dec(b,k){ const iP=n=>{if(n<2)return false;for(let i=2;i<=Math.sqrt(n);i++)if(n%i===0)return false;return true;}; let n=parseInt(k)||17; while(!iP(n))n++; return b.map(v=>mod(v-n,256)); } },
    'rot47':         { desc:'ROT-47 over printable ASCII 33–126',
      enc(b){ return b.map(v=>v>=33&&v<=126?33+mod(v-33+47,94):v); },
      dec(b){ return CIPHERS.rot47.enc(b); } },
    'rot13':         { desc:'ROT-13 alphabetic only',
      enc(b){ return b.map(v=>{if(v>=65&&v<=90)return 65+mod(v-65+13,26);if(v>=97&&v<=122)return 97+mod(v-97+13,26);return v;}); },
      dec(b){ return CIPHERS.rot13.enc(b); } },
    'not':           { desc:'Bitwise NOT every byte',
      enc(b){ return b.map(v=>(~v)&0xFF); }, dec(b){ return CIPHERS.not.enc(b); } },
    'swap-bits':     { desc:'Swap upper and lower nibble of each byte',
      enc(b){ return b.map(v=>((v&0x0F)<<4)|((v&0xF0)>>4)); }, dec(b){ return CIPHERS['swap-bits'].enc(b); } },
    'reverse-bits':  { desc:'Reverse all 8 bits of each byte',
      enc(b){ return b.map(v=>{let r=0;for(let i=0;i<8;i++)r=(r<<1)|(v>>i&1);return r&0xFF;}); },
      dec(b){ return CIPHERS['reverse-bits'].enc(b); } },
    'interleave':    { desc:'Interleave data bytes with keyed padding bytes',
      enc(b,k){ const K=toBytes(k||'il'); const o=[]; b.forEach((v,i)=>{o.push(v);o.push(K[i%K.length]^0xAA);}); return o; },
      dec(b){ return b.filter((_,i)=>i%2===0); } },
    'zigzag':        { desc:'Alternate add/subtract offset per byte',
      enc(b,k){ const n=parseInt(k)||7; return b.map((v,i)=>mod(i%2===0?v+n:v-n,256)); },
      dec(b,k){ const n=parseInt(k)||7; return b.map((v,i)=>mod(i%2===0?v-n:v+n,256)); } },
    'mirror':        { desc:'Map byte to 255 - b',
      enc(b){ return b.map(v=>255-v); }, dec(b){ return CIPHERS.mirror.enc(b); } },
    'step-xor':      { desc:'XOR each byte with its own index',
      enc(b){ return b.map((v,i)=>v^(i&0xFF)); }, dec(b){ return CIPHERS['step-xor'].enc(b); } },
    'double-xor':    { desc:'XOR with two different key halves',
      enc(b,k){ const K=toBytes(k||'hackshell'); const h=Math.ceil(K.length/2); return b.map((v,i)=>v^K[i%h]^K[(i+h)%K.length]); },
      dec(b,k){ return CIPHERS['double-xor'].enc(b,k); } },
    'b64-enc':       { desc:'Base64-encode then byte-shift +3',
      enc(b){ return toBytes(btoa(fromBytes(b))).map(v=>mod(v+3,256)); },
      dec(b){ try{return toBytes(atob(fromBytes(b.map(v=>mod(v-3,256)))));}catch(e){return b;} } },
    'b64-rev':       { desc:'Base64-encode then reverse string',
      enc(b){ return toBytes(btoa(fromBytes(b)).split('').reverse().join('')); },
      dec(b){ try{return toBytes(atob(fromBytes(b).split('').reverse().join('')));}catch(e){return b;} } },
    'hex-enc':       { desc:'Encode bytes as hex string bytes',
      enc(b){ return toBytes(b.map(hexStr).join('')); },
      dec(b){ const s=fromBytes(b); const o=[]; for(let i=0;i<s.length;i+=2)o.push(parseInt(s.slice(i,i+2),16)||0); return o; } },
    'bin-enc':       { desc:'Encode bytes as binary string',
      enc(b){ return toBytes(b.map(bitStr).join(' ')); },
      dec(b){ return fromBytes(b).trim().split(/\s+/).map(s=>parseInt(s,2)||0); } },
    'octal-enc':     { desc:'Encode bytes as octal string',
      enc(b){ return toBytes(b.map(v=>v.toString(8).padStart(3,'0')).join(' ')); },
      dec(b){ return fromBytes(b).trim().split(/\s+/).map(s=>parseInt(s,8)||0); } },
    'url-enc':       { desc:'URL percent-encode every byte',
      enc(b){ return toBytes(b.map(v=>'%'+hexStr(v).toUpperCase()).join('')); },
      dec(b){ return (fromBytes(b).match(/%[0-9A-Fa-f]{2}/g)||[]).map(m=>parseInt(m.slice(1),16)); } },
    'unicode-esc':   { desc:'Encode as \\uXXXX unicode escapes',
      enc(b){ return toBytes(b.map(v=>'\\u00'+hexStr(v)).join('')); },
      dec(b){ return (fromBytes(b).match(/\\u[0-9a-fA-F]{4}/g)||[]).map(m=>parseInt(m.slice(2),16)&0xFF); } },
    'ent-enc':       { desc:'HTML entity (decimal) encode every byte',
      enc(b){ return toBytes(b.map(v=>`&#${v};`).join('')); },
      dec(b){ return (fromBytes(b).match(/&#(\d+);/g)||[]).map(m=>parseInt(m.slice(2,-1))&0xFF); } },
    'reverse':       { desc:'Reverse entire byte array',
      enc(b){ return [...b].reverse(); }, dec(b){ return [...b].reverse(); } },
    'shuffle':       { desc:'Deterministic Fisher-Yates shuffle (seeded)',
      enc(b,k){ const a=[...b],rng=lcg(toBytes(k||'hs').reduce((x,y)=>x+y,0));
        for(let i=a.length-1;i>0;i--){const j=Math.floor(rng()*(i+1));[a[i],a[j]]=[a[j],a[i]];} return a; },
      dec(b,k){ const n=b.length,a=[...b],rng=lcg(toBytes(k||'hs').reduce((x,y)=>x+y,0));
        const sw=[];for(let i=n-1;i>0;i--)sw.push([i,Math.floor(rng()*(i+1))]);
        for(let s=sw.length-1;s>=0;s--){const[i,j]=sw[s];[a[i],a[j]]=[a[j],a[i]];} return a; } },
    'transpose':     { desc:'Columnar transposition by column count',
      enc(b,k){ const n=parseInt(k)||8,r=Math.ceil(b.length/n),p=[...b];while(p.length<r*n)p.push(0);const o=[];for(let c=0;c<n;c++)for(let row=0;row<r;row++)o.push(p[row*n+c]);return o; },
      dec(b,k){ const n=parseInt(k)||8,r=Math.ceil(b.length/n),o=new Array(b.length);let idx=0;for(let c=0;c<n;c++)for(let row=0;row<r;row++){if(idx<b.length)o[row*n+c]=b[idx++];}return o.filter(x=>x!==undefined); } },
    'block-swap':    { desc:'Swap first and second half',
      enc(b){ const h=Math.floor(b.length/2); return [...b.slice(h),...b.slice(0,h)]; },
      dec(b){ return CIPHERS['block-swap'].enc(b); } },
    'skip':          { desc:'Reorder by taking every Nth byte first',
      enc(b,k){ const n=parseInt(k)||3,o=[];for(let s=0;s<n;s++)for(let i=s;i<b.length;i+=n)o.push(b[i]);return o; },
      dec(b,k){ const n=parseInt(k)||3,len=b.length,o=new Array(len);let idx=0;for(let s=0;s<n;s++)for(let i=s;i<len;i+=n)o[i]=b[idx++];return o; } },
    'chunk-rev':     { desc:'Reverse bytes within each N-byte chunk',
      enc(b,k){ const n=parseInt(k)||4,o=[];for(let i=0;i<b.length;i+=n)o.push(...b.slice(i,i+n).reverse());return o; },
      dec(b,k){ return CIPHERS['chunk-rev'].enc(b,k); } },
    'mul':           { desc:'Multiply each byte by odd key (mod 256)',
      enc(b,k){ let n=parseInt(k)||7;if(n%2===0)n++;return b.map(v=>mod(v*n,256)); },
      dec(b,k){ let n=parseInt(k)||7;if(n%2===0)n++;let inv=1;while(mod(n*inv,256)!==1)inv++;return b.map(v=>mod(v*inv,256)); } },
    'fibonacci':     { desc:'Add Fibonacci sequence values (mod 256)',
      enc(b){ let a=1,c=1;return b.map(v=>{const r=mod(v+a,256);[a,c]=[c,(a+c)&0xFF];return r;}); },
      dec(b){ let a=1,c=1;const seq=[];for(let i=0;i<b.length;i++){seq.push(a);[a,c]=[c,(a+c)&0xFF];}return b.map((v,i)=>mod(v-seq[i],256)); } },
    'primes':        { desc:'XOR bytes with prime number sequence (mod 256)',
      enc(b){ const p=[];let n=2;const iP=x=>{for(let i=2;i<=Math.sqrt(x);i++)if(x%i===0)return false;return x>=2;};while(p.length<b.length){if(iP(n))p.push(n);n++;}return b.map((v,i)=>v^(p[i]%256)); },
      dec(b){ return CIPHERS.primes.enc(b); } },
    'sine-wave':     { desc:'Add sin(i*freq)*amplitude to each byte',
      enc(b,k){ const f=parseFloat(k)||0.3;return b.map((v,i)=>mod(v+Math.round(Math.sin(i*f)*32+32),256)); },
      dec(b,k){ const f=parseFloat(k)||0.3;return b.map((v,i)=>mod(v-Math.round(Math.sin(i*f)*32+32),256)); } },
    'exp-decay':     { desc:'XOR bytes with exponentially decaying key',
      enc(b,k){ const n=parseInt(k)||200;return b.map((v,i)=>v^(Math.round(n*Math.exp(-i*0.05))&0xFF)); },
      dec(b,k){ return CIPHERS['exp-decay'].enc(b,k); } },
    'vigenere':      { desc:'Vigenère cipher over byte values',
      enc(b,k){ const K=toBytes(k||'hackshell');return b.map((v,i)=>mod(v+K[i%K.length],256)); },
      dec(b,k){ const K=toBytes(k||'hackshell');return b.map((v,i)=>mod(v-K[i%K.length],256)); } },
    'beaufort':      { desc:'Beaufort cipher: key[i] - byte mod 256',
      enc(b,k){ const K=toBytes(k||'hackshell');return b.map((v,i)=>mod(K[i%K.length]-v,256)); },
      dec(b,k){ return CIPHERS.beaufort.enc(b,k); } },
    'running-key':   { desc:'XOR with running accumulated key',
      enc(b,k){ const K=toBytes(k||'hs');let acc=0;return b.map((v,i)=>{acc=mod(acc+K[i%K.length],256);return v^acc;}); },
      dec(b,k){ return CIPHERS['running-key'].enc(b,k); } },
    'feistel':       { desc:'4-round Feistel network on byte pairs',
      enc(b,k){ const K=toBytes(k||'feistel'),f=(x,ki)=>mod(x*127+ki,256),o=[...b];if(o.length%2!==0)o.push(0);for(let r=0;r<4;r++)for(let i=0;i<o.length;i+=2){const ki=K[(i/2+r)%K.length];[o[i],o[i+1]]=[o[i+1],mod(o[i]^f(o[i+1],ki),256)];}return o; },
      dec(b,k){ const K=toBytes(k||'feistel'),f=(x,ki)=>mod(x*127+ki,256),o=[...b];if(o.length%2!==0)o.push(0);for(let r=3;r>=0;r--)for(let i=o.length-2;i>=0;i-=2){const ki=K[(i/2+r)%K.length];[o[i],o[i+1]]=[mod(o[i+1]^f(o[i],ki),256),o[i]];}return o; } },
    'null-inject':   { desc:'Inject null bytes between data (doubles length)',
      enc(b,k){ const n=parseInt(k)||1,o=[];b.forEach(v=>{o.push(v);for(let i=0;i<n;i++)o.push(0);});return o; },
      dec(b,k){ const n=parseInt(k)||1;return b.filter((_,i)=>i%(n+1)===0); } },
    'noise-inject':  { desc:'Inject pseudo-random noise bytes (seeded, removable)',
      enc(b,k){ const rng=lcg(toBytes(k||'noise').reduce((a,x)=>a+x,0)),o=[];b.forEach((v,i)=>{o.push(v);if(i%3===2)o.push(Math.floor(rng()*256)|0x80);});return o; },
      dec(b,k){ const rng=lcg(toBytes(k||'noise').reduce((a,x)=>a+x,0));return b.filter((_,i)=>{const keep=i%4!==3;if(!keep)rng();return keep;}); } },
    'lsb-hide':      { desc:'Hide data in LSBs of doubled-size carrier',
      enc(b){ const o=[];b.forEach(v=>{for(let bit=7;bit>=0;bit--)o.push(0xC0|((v>>bit)&1));});return o; },
      dec(b){ const o=[];let cur=0;for(let i=0;i<b.length;i++){cur=(cur<<1)|(b[i]&1);if(i%8===7){o.push(cur&0xFF);cur=0;}}return o; } },
    'checksum-wrap': { desc:'Wrap data with checksum bytes at head+tail',
      enc(b){ const cs=b.reduce((a,v)=>mod(a+v,256),0);return [cs,...b,mod(~cs,256)]; },
      dec(b){ return b.length<2?b:b.slice(1,-1); } },
    'atbash':        { desc:'Atbash: 255 - b for each byte',
      enc(b){ return b.map(v=>255-v); }, dec(b){ return CIPHERS.atbash.enc(b); } },
    'a1z26':         { desc:'A1Z26 alpha rotation cipher',
      enc(b){ return b.map(v=>{ if(v>=97&&v<=122)return 97+((v-97+13)%26);if(v>=65&&v<=90)return 65+((v-65+13)%26);return mod(v+26,256); }); },
      dec(b){ return b.map(v=>{ if(v>=97&&v<=122)return 97+mod(v-97-13,26);if(v>=65&&v<=90)return 65+mod(v-65-13,26);return mod(v-26,256); }); } },
    'morse':         { desc:'Encode bytes as Morse-code sequences',
      enc(b){ const M={'A':'.-','B':'-...','C':'-.-.','D':'-..','E':'.','F':'..-.','G':'--.','H':'....','I':'..','J':'.---','K':'-.-','L':'.-..','M':'--','N':'-.','O':'---','P':'.--.','Q':'--.-','R':'.-.','S':'...','T':'-','U':'..-','V':'...-','W':'.--','X':'-..-','Y':'-.--','Z':'--..','0':'-----','1':'.----','2':'..---','3':'...--','4':'....-','5':'.....','6':'-....','7':'--...','8':'---..','9':'----.'};return toBytes(b.map(v=>{const c=String.fromCharCode(v).toUpperCase();return M[c]||hexStr(v);}).join('/')); },
      dec(b){ return b; } },
    'polybius':      { desc:'Polybius square: row/col encoding',
      enc(b){ return toBytes(b.map(v=>{const r=Math.floor(v/16)+1,c=(v%16)+1;return numStr(r)+numStr(c);}).join(' ')); },
      dec(b){ return fromBytes(b).trim().split(/\s+/).map(s=>{const r=parseInt(s.slice(0,3))-1,c=parseInt(s.slice(3))-1;return clamp(r*16+c,0,255);}); } },
    'railroad':      { desc:'Rail fence cipher with N rails',
      enc(b,k){ const n=parseInt(k)||3,rails=Array.from({length:n},()=>[]);let rail=0,dir=1;b.forEach(v=>{rails[rail].push(v);if(rail===n-1)dir=-1;if(rail===0)dir=1;rail+=dir;});return rails.flat(); },
      dec(b,k){ const n=parseInt(k)||3,len=b.length,idx=Array.from({length:n},()=>[]);let rail=0,dir=1;for(let i=0;i<len;i++){idx[rail].push(i);if(rail===n-1)dir=-1;if(rail===0)dir=1;rail+=dir;}const o=new Array(len);let pos=0;idx.forEach(row=>row.forEach(i=>{o[i]=b[pos++];}));return o; } },
    'rle':           { desc:'Run-length encode: [count][value] pairs',
      enc(b){ const o=[];let i=0;while(i<b.length){let cnt=1;while(i+cnt<b.length&&b[i+cnt]===b[i]&&cnt<255)cnt++;o.push(cnt,b[i]);i+=cnt;}return o; },
      dec(b){ const o=[];for(let i=0;i<b.length-1;i+=2)for(let j=0;j<b[i];j++)o.push(b[i+1]);return o; } },
    'delta':         { desc:'Delta encode: store differences between consecutive bytes',
      enc(b){ const o=[b[0]||0];for(let i=1;i<b.length;i++)o.push(mod(b[i]-b[i-1],256));return o; },
      dec(b){ const o=[b[0]||0];for(let i=1;i<b.length;i++)o.push(mod(o[i-1]+b[i],256));return o; } },
    'zigzag-delta':  { desc:'ZigZag encode then delta',
      enc(b){ const zz=b.map(v=>v>=128?(255-v)*2+1:v*2),o=[zz[0]||0];for(let i=1;i<zz.length;i++)o.push(mod(zz[i]-zz[i-1],256));return o; },
      dec(b){ const acc=[b[0]||0];for(let i=1;i<b.length;i++)acc.push(mod(acc[i-1]+b[i],256));return acc.map(v=>v%2===0?v/2:Math.floor(v/2)+128); } },
    'matrix-overlay':{ desc:'Sprinkle matrix chars among real hex',
      enc(b){ const rng=lcg(42),ch=SETS.katakana;let o='';b.forEach(v=>{o+=hexStr(v);if(rng()<0.4)o+=ch[Math.floor(rng()*ch.length)];});return toBytes(o); },
      dec(b){ return fromBytes(b).replace(/[^0-9a-fA-F]/g,'').match(/../g).map(h=>parseInt(h,16)||0); } },
    'braille-map':   { desc:'Map each byte to a braille pattern',
      enc(b){ return toBytes(b.map(v=>SETS.braille[v%SETS.braille.length]).join('')); },
      dec(b){ return fromBytes(b).split('').map(c=>{const i=SETS.braille.indexOf(c);return i>=0?i:0;}); } },
    'runic-map':     { desc:'Map each byte to runic alphabet',
      enc(b){ return toBytes(b.map(v=>SETS.runic[v%SETS.runic.length]).join('')); },
      dec(b){ return fromBytes(b).split('').map(c=>{const i=SETS.runic.indexOf(c);return i>=0?i:0;}); } },
    'greek-map':     { desc:'Map each byte to Greek letters',
      enc(b){ return toBytes(b.map(v=>SETS.greek[v%SETS.greek.length]).join('')); },
      dec(b){ return fromBytes(b).split('').map(c=>{const i=SETS.greek.indexOf(c);return i>=0?i:0;}); } },
    'cyrillic-map':  { desc:'Map each byte to Cyrillic script',
      enc(b){ return toBytes(b.map(v=>SETS.cyrillic[v%SETS.cyrillic.length]).join('')); },
      dec(b){ return fromBytes(b).split('').map(c=>{const i=SETS.cyrillic.indexOf(c);return i>=0?i:0;}); } },
    'scatter':       { desc:'Interleave data with noise chars',
      enc(b,k){ const ch=SETS.noise,rng=lcg(parseInt(k)||0),o=[];b.forEach((v,i)=>{o.push(v);if(rng()<0.6)o.push(ch.charCodeAt(Math.floor(rng()*ch.length)));});return o; },
      dec(b){ return b.filter(v=>(v>32&&v<127)||v>160); } },
    'noop':          { desc:'No operation — pass through unchanged',
      enc(b){ return b; }, dec(b){ return b; } },
    'pad':           { desc:'PKCS-style pad to next 16-byte block',
      enc(b){ const n=16-b.length%16;return [...b,...Array.from({length:n},()=>n)]; },
      dec(b){ const n=b[b.length-1]||0;return b.slice(0,-n); } },
    'pack':          { desc:'Pack 4 bytes into 3 (lossy, discards MSBs)',
      enc(b){ const o=[];for(let i=0;i<b.length;i+=4){const a=b[i]&0x3F,c2=(b[i+1]||0)&0x3F,c3=(b[i+2]||0)&0x3F,d=(b[i+3]||0)&0x3F;o.push((a<<2)|(c2>>4),(c2<<4)|(c3>>2),(c3<<6)|d);}return o; },
      dec(b){ const o=[];for(let i=0;i<b.length;i+=3){const a=b[i],c2=b[i+1]||0,c3=b[i+2]||0;o.push(a>>2,((a&3)<<4)|(c2>>4),((c2&15)<<2)|(c3>>6),c3&63);}return o; } },
    'playfair-byte': { desc:'Swap byte pairs + sum delta',
      enc(b){ const o=[...b];for(let i=0;i<o.length-1;i+=2){const s=mod(o[i]+o[i+1],256);[o[i],o[i+1]]=[mod(o[i+1]+s,256),mod(o[i]+s,256)];}return o; },
      dec(b){ const o=[...b];for(let i=0;i<o.length-1;i+=2){const s=mod(o[i]+o[i+1],256);[o[i],o[i+1]]=[mod(o[i+1]-s,256),mod(o[i]-s,256)];}return o; } },
    'poly':          { desc:'Polynomial: (b² + offset) mod 256 (one-way visual)',
      enc(b,k){ const n=parseInt(k)||3;return b.map(v=>mod(v*v+n,256)); },
      dec(b){ return b; } },
    'nato':          { desc:'NATO phonetic alphabet encoding per byte',
      enc(b){ const n=['Alpha','Bravo','Charlie','Delta','Echo','Foxtrot','Golf','Hotel','India','Juliet','Kilo','Lima','Mike','November','Oscar','Papa','Quebec','Romeo','Sierra','Tango','Uniform','Victor','Whiskey','Xray','Yankee','Zulu'];return toBytes(b.map(v=>n[v%26]).join('-')); },
      dec(b){ const n=['Alpha','Bravo','Charlie','Delta','Echo','Foxtrot','Golf','Hotel','India','Juliet','Kilo','Lima','Mike','November','Oscar','Papa','Quebec','Romeo','Sierra','Tango','Uniform','Victor','Whiskey','Xray','Yankee','Zulu'];return fromBytes(b).split('-').map(w=>{const i=n.findIndex(x=>x.toLowerCase()===w.toLowerCase());return i>=0?i:0;}); } },
  };

  const PRESETS = {
    'shadow':    ['xor','reverse','caesar'],
    'phantom':   ['vigenere','shuffle','hex-enc'],
    'ghost-net': ['xor-cascade','null-inject','b64-enc'],
    'matrix':    ['caesar-prime','transpose','matrix-overlay'],
    'deep-void': ['feistel','primes','runic-map','reverse'],
    'spectre':   ['vigenere','fibonacci','braille-map'],
    'null-byte': ['not','null-inject','hex-enc'],
    'redline':   ['xor','sine-wave','cyrillic-map'],
    'darkroom':  ['shuffle','zigzag','lsb-hide'],
    'void-key':  ['running-key','delta','greek-map','b64-enc'],
  };

  let _stack=[], _charset='katakana', _showNums=false, _density=1.0;

  function parseOpts(args){
    const o={flags:{},positional:[]};
    for(let i=0;i<args.length;i++){
      if(args[i].startsWith('--')){const[k,...r]=args[i].slice(2).split('=');o.flags[k]=r.length?r.join('='):(args[i+1]&&!args[i+1].startsWith('--')?args[++i]:true);}
      else o.positional.push(args[i]);
    }
    return o;
  }

  function renderOutput(bytes,label){
    const mat=toMatrix(bytes,{charset:_charset,showNums:_showNums,density:_density,seedVal:bytes.reduce((a,b)=>a+b,0)});
    const hx=bytes.slice(0,32).map(hexStr).join(' ')+(bytes.length>32?` …+${bytes.length-32}b`:'');
    return `<div style="margin:4px 0">
<span class="tag tag-hack">${label}</span>
<div style="font-family:'Share Tech Mono',monospace;font-size:12px;color:var(--red);text-shadow:0 0 6px rgba(255,34,51,0.5);word-break:break-all;background:rgba(255,34,51,0.03);border:1px solid rgba(255,34,51,0.12);border-radius:3px;padding:8px 12px;margin:5px 0;max-height:180px;overflow-y:auto;line-height:1.5;letter-spacing:0.5px">${esc(mat)}</div>
<div style="color:var(--gray);font-size:10px;letter-spacing:1px">HEX: <span style="color:var(--blue)">${hx}</span></div>
<div style="color:var(--gray);font-size:10px;margin-top:2px">BYTES: <span class="sh-number">${bytes.length}</span> · CHARSET: <span class="sh-variable">${_charset}</span> · NUMS: <span class="sh-variable">${_showNums?'ON':'OFF'}</span> · DENSITY: <span class="sh-number">${(_density*100).toFixed(0)}%</span></div>
</div>`;
  }

  function showStack(){
    if(!_stack.length){appendBlock(`<span class="tag tag-info">STACK</span> Empty — <span class="sh-builtin">nodeIL push &lt;cipher&gt; [key]</span> to add layers`,'info');return;}
    let html=`<span class="tag tag-hack">STACK</span> ${_stack.length} cipher${_stack.length>1?'s':''} queued:<br>`;
    _stack.forEach((c,i)=>{html+=`<span class="sh-number">[${i}]</span> <span class="sh-builtin">${esc(c.id)}</span> <span style="color:var(--gray)">key=</span><span class="sh-string">${esc(c.key)}</span><br>`;});
    html+=`<div style="margin-top:4px;color:var(--gray);font-size:11px">→ ${_stack.map(c=>`<span class="sh-builtin">${esc(c.id)}</span>`).join(' → ')}</div>`;
    appendBlock(html,'info');
  }

  function run(args){
    if(!args.length){showHelp();return;}
    const sub=args[0].toLowerCase(),rest=args.slice(1),opts=parseOpts(rest);

    if(sub==='enc'||sub==='encrypt'){
      const text=opts.flags.text||opts.flags.t||opts.positional.join(' ');
      if(!text)return appendBlock(`<span class="tag tag-err">ERROR</span> nodeIL enc: no input<br><span style="color:var(--gray);font-size:11px"><span class="sh-builtin">nodeIL enc --text "hello" [--cipher xor] [--key k] [--stack]</span></span>`,'error');
      const key=opts.flags.key||opts.flags.k||'hackshell';
      const cid=opts.flags.cipher||opts.flags.c||null;
      let ciphers=cid?[{id:cid,key}]:_stack.length?_stack:[{id:'xor',key}];
      let bytes=toBytes(text);const trail=[];
      for(const {id,key:k} of ciphers){const c=CIPHERS[id];if(!c){appendBlock(`<span class="tag tag-warn">WARN</span> Unknown cipher: ${esc(id)}`,'warn');continue;}bytes=c.enc(bytes,k);trail.push(`<span class="sh-builtin">${esc(id)}</span>(<span class="sh-string">${esc(k)}</span>)`);}
      appendBlock(`<span class="tag tag-hack">ENCRYPT</span> ${trail.join(' → ')}<br>${renderOutput(bytes,'CIPHERTEXT')}<div style="margin-top:6px"><button class="proxy-btn" style="font-size:10px" onclick="window._cp('${window._cpPut(fromBytes(bytes))}')">&#128203; Copy Ciphertext</button></div>`,'info');
      VARS['NIL_LAST']=fromBytes(bytes);

    } else if(sub==='dec'||sub==='decrypt'){
      const text=opts.flags.text||opts.flags.t||opts.positional.join(' ')||VARS['NIL_LAST']||'';
      if(!text)return appendBlock(`<span class="tag tag-err">ERROR</span> nodeIL dec: no input. Pass --text or encrypt something first.`,'error');
      const key=opts.flags.key||opts.flags.k||'hackshell';
      const cid=opts.flags.cipher||opts.flags.c||null;
      let ciphers=cid?[{id:cid,key}]:[..._stack].reverse();
      if(!ciphers.length)ciphers=[{id:'xor',key}];
      let bytes=toBytes(text);const trail=[];
      for(const {id,key:k} of ciphers){const c=CIPHERS[id];if(!c)continue;bytes=c.dec(bytes,k);trail.push(`<span class="sh-builtin">${esc(id)}</span>`);}
      const out=fromBytes(bytes).replace(/\0/g,'').replace(/[^\x20-\x7E\n\t]/g,'?');
      appendBlock(`<span class="tag tag-ok">DECRYPT</span> ${trail.join(' → ')}<br><div style="background:rgba(30,144,255,0.05);border:1px solid rgba(30,144,255,0.15);border-radius:3px;padding:8px 12px;margin:5px 0;font-family:'Share Tech Mono',monospace;font-size:12px;color:var(--blue-bright);word-break:break-all;max-height:180px;overflow-y:auto">${esc(out)}</div>`,'success');
      VARS['NIL_PLAIN']=out;

    } else if(sub==='push'){
      const id=rest[0],key=rest[1]||'hackshell';
      if(!id)return appendBlock(`<span class="tag tag-err">ERROR</span> nodeIL push: missing cipher id`,'error');
      if(!CIPHERS[id])return appendBlock(`<span class="tag tag-err">ERROR</span> Unknown cipher: <span class="sh-command">${esc(id)}</span> — run <span class="sh-builtin">nodeIL list</span>`,'error');
      _stack.push({id,key});appendBlock(`<span class="tag tag-ok">STACK+</span> [${_stack.length}] <span class="sh-builtin">${esc(id)}</span> key=<span class="sh-string">${esc(key)}</span>`,'success');showStack();

    } else if(sub==='pop'){
      if(!_stack.length)return appendBlock(`<span class="tag tag-warn">WARN</span> Stack is empty`,'warn');
      const r=_stack.pop();appendBlock(`<span class="tag tag-warn">STACK-</span> Removed <span class="sh-builtin">${esc(r.id)}</span>`,'warn');showStack();

    } else if(sub==='clear-stack'||sub==='cs'){
      _stack=[];appendBlock(`<span class="tag tag-ok">OK</span> Stack cleared`,'success');

    } else if(sub==='stack'){
      showStack();

    } else if(sub==='preset'){
      const pname=rest[0];
      if(!pname||!PRESETS[pname]){
        let html=`<span class="tag tag-info">PRESETS</span> Predefined cipher stacks:<br><table class="help-table" style="font-size:11px;margin-top:6px">`;
        Object.entries(PRESETS).forEach(([k,v])=>{html+=`<tr><td><span class="sh-command" style="cursor:pointer" onclick="window._runNILCmd('preset ${k}')">${k}</span></td><td style="color:var(--gray-light)">${v.join(' → ')}</td></tr>`;});
        html+='</table>';return appendBlock(html,'info');
      }
      _stack=PRESETS[pname].map(id=>({id,key:'hackshell'}));
      appendBlock(`<span class="tag tag-ok">PRESET</span> <span class="sh-variable">${esc(pname)}</span> — ${_stack.length} ciphers loaded`,'success');showStack();

    } else if(sub==='charset'){
      const cs=rest[0];
      if(!cs||!SETS[cs])return appendBlock(`<span class="tag tag-info">CHARSETS</span> ${Object.keys(SETS).join(', ')}<br><span style="color:var(--gray);font-size:11px">Current: <span class="sh-variable">${_charset}</span></span>`,'info');
      _charset=cs;appendBlock(`<span class="tag tag-ok">OK</span> Charset → <span class="sh-variable">${cs}</span>`,'success');

    } else if(sub==='nums'){
      _showNums=!_showNums;appendBlock(`<span class="tag tag-ok">OK</span> Numeric offsets: <span class="sh-variable">${_showNums?'ON':'OFF'}</span>`,'success');

    } else if(sub==='density'){
      const d=parseFloat(rest[0]);
      if(isNaN(d)||d<0||d>1)return appendBlock(`<span class="tag tag-err">ERROR</span> density must be 0.0–1.0`,'error');
      _density=d;appendBlock(`<span class="tag tag-ok">OK</span> Glitch density → <span class="sh-number">${(d*100).toFixed(0)}%</span>`,'success');

    } else if(sub==='list'||sub==='ls'){
      const filter=opts.positional[0]||'';
      const groups={
        'Classic Byte':   ['xor','xor-cascade','caesar','caesar-prime','rot47','rot13','not','swap-bits','reverse-bits','interleave','zigzag','mirror','step-xor','double-xor'],
        'Encoding':       ['b64-enc','b64-rev','hex-enc','bin-enc','octal-enc','url-enc','unicode-esc','ent-enc'],
        'Transposition':  ['reverse','shuffle','transpose','block-swap','skip','chunk-rev'],
        'Math':           ['mul','fibonacci','primes','sine-wave','exp-decay','poly'],
        'Multi-pass':     ['vigenere','beaufort','running-key','playfair-byte','feistel'],
        'Noise/Stego':    ['null-inject','noise-inject','lsb-hide','checksum-wrap'],
        'Substitution':   ['atbash','a1z26','morse','nato','polybius','railroad'],
        'Compress-like':  ['rle','delta','zigzag-delta'],
        'Visual/Matrix':  ['matrix-overlay','braille-map','runic-map','greek-map','cyrillic-map','scatter'],
        'Utility':        ['noop','pad','pack'],
      };
      let html=`<span class="tag tag-hack">nodeIL</span> <span class="sh-number">${Object.keys(CIPHERS).length}</span> ciphers available<br><br>`;
      Object.entries(groups).forEach(([grp,ids])=>{
        if(filter&&!grp.toLowerCase().includes(filter.toLowerCase()))return;
        html+=`<div style="color:var(--gray-mid);font-size:9px;letter-spacing:3px;margin:8px 0 4px;text-transform:uppercase">▶ ${grp}</div><table class="help-table" style="font-size:11px">`;
        ids.forEach(id=>{const c=CIPHERS[id];if(!c)return;html+=`<tr><td style="white-space:nowrap"><span class="sh-command" style="cursor:pointer" onclick="window._runNILCmd('push ${id}')">${id}</span></td><td style="color:var(--gray-light)">${esc(c.desc)}</td></tr>`;});
        html+='</table>';
      });
      html+=`<div style="margin-top:8px;color:var(--gray);font-size:11px">💡 Click a cipher name to push it to the stack</div>`;
      appendBlock(html,'info');

    } else if(sub==='demo'){
      const text=opts.positional.join(' ')||'ACCESS DENIED';
      const demos=['xor','caesar','vigenere','feistel','matrix-overlay','braille-map','runic-map','cyrillic-map','morse','b64-rev'];
      let html=`<span class="tag tag-hack">DEMO</span> Encrypting: <span class="sh-string">${esc(text)}</span><br>`;
      demos.forEach(id=>{const c=CIPHERS[id];if(!c)return;const enc=c.enc(toBytes(text),'hackshell');const mat=toMatrix(enc,{charset:_charset,density:0.9,seedVal:enc.reduce((a,b)=>a+b,0)});html+=`<div style="margin:3px 0"><span style="color:var(--gray-mid);font-size:10px;width:110px;display:inline-block">${id}</span><span style="color:var(--red);font-size:11px;font-family:'Share Tech Mono',monospace">${esc(mat.slice(0,60))}</span></div>`;});
      appendBlock(html,'info');

    } else if(CIPHERS[sub]){
      const text=rest.join(' ');
      if(!text)return appendBlock(`<span class="tag tag-err">ERROR</span> Usage: <span class="sh-builtin">nodeIL ${esc(sub)} "text"</span>`,'error');
      const bytes=CIPHERS[sub].enc(toBytes(text),'hackshell');
      appendBlock(renderOutput(bytes,`${sub.toUpperCase()} ENC`),'info');

    } else {
      showHelp();
    }
  }

  function showHelp(){
    appendBlock(`<span class="tag tag-hack">nodeIL</span> Encryption Engine — ${Object.keys(CIPHERS).length} ciphers<br><br>
<table class="help-table" style="font-size:11px">
<tr><td><span class="sh-command">enc</span></td><td><span class="sh-builtin">nodeIL enc --text "hello" [--cipher xor] [--key k] [--stack]</span></td></tr>
<tr><td><span class="sh-command">dec</span></td><td><span class="sh-builtin">nodeIL dec [--text "…"] [--cipher xor] [--key k]</span></td></tr>
<tr><td><span class="sh-command">push &lt;id&gt; [key]</span></td><td>Push cipher onto stack</td></tr>
<tr><td><span class="sh-command">pop</span></td><td>Pop top cipher from stack</td></tr>
<tr><td><span class="sh-command">stack</span></td><td>Show current cipher stack</td></tr>
<tr><td><span class="sh-command">clear-stack</span></td><td>Clear all stacked ciphers</td></tr>
<tr><td><span class="sh-command">preset [name]</span></td><td>Load predefined stack (shadow, phantom, ghost-net, matrix, deep-void…)</td></tr>
<tr><td><span class="sh-command">list</span></td><td>All ${Object.keys(CIPHERS).length} ciphers grouped by type</td></tr>
<tr><td><span class="sh-command">demo [text]</span></td><td>Preview all visual cipher outputs at once</td></tr>
<tr><td><span class="sh-command">charset [name]</span></td><td>katakana · braille · runic · greek · cyrillic · arrows · boxdraw · math · noise</td></tr>
<tr><td><span class="sh-command">nums</span></td><td>Toggle hex offset markers [00][08][10]… in output</td></tr>
<tr><td><span class="sh-command">density 0–1</span></td><td>Glitch character density (default 1.0 = full matrix)</td></tr>
<tr><td><span class="sh-command">&lt;cipher&gt; "text"</span></td><td>Quick single-cipher: <span class="sh-builtin">nodeIL xor "hello"</span></td></tr>
</table>
<div style="margin-top:8px;color:var(--gray);font-size:11px">
💡 Stack: <span class="sh-builtin">nodeIL push xor k1</span> → <span class="sh-builtin">nodeIL push vigenere k2</span> → <span class="sh-builtin">nodeIL enc --text "secret" --stack</span><br>
💡 Quick: <span class="sh-builtin">nodeIL demo "HACK THE PLANET"</span> &nbsp;·&nbsp; <span class="sh-builtin">nodeIL preset phantom</span>
</div>`,'info');
  }

  return { run, CIPHERS, SETS, toMatrix, toBytes, fromBytes };
})();

window._runNILCmd = function(cmd){
  appendLine(`<span class="p-dollar">$</span> <span class="sh-command">nodeIL ${esc(cmd)}</span>`);
  COMMANDS.nodeIL.run(cmd.split(/\s+/));
};


// ══════════════════════════════════════════════════════════
//  xs  —  Zero-Width Steganographic Encoder
//  Hides text inside invisible Unicode chars, with password
// ══════════════════════════════════════════════════════════

// ══════════════════════════════════════════════════════════
//  xs  —  Zero-Width Steganographic Encoder
//  Hides ANY content (text/binary) in invisible Unicode
//  Supports passwords, cover text, file upload, 1MB+ guard
// ══════════════════════════════════════════════════════════

const XS = (() => {
'use strict';

// ─── Constants ───────────────────────────────────────────
const MB = 1048576; // 1 MB

// ─── Zero-width character sets ───────────────────────────
const SETS = {
  zw4: {
    bits: 2,
    chars: ['\u200B','\u200C','\u200D','\u2060'],
    name: 'Zero-width 4 (ZWS/ZWNJ/ZWJ/WJ)',
  },
  zw2: {
    bits: 1,
    chars: ['\u200B','\u200C'],
    name: 'Zero-width 2 (ZWS/ZWNJ)',
  },
  vs8: {
    bits: 3,
    chars: ['\u200B','\u200C','\u200D','\u2060','\uFEFF','\u200E','\u200F','\u202C'],
    name: 'Variation/Control 8-symbol (3 bits/char)',
  },
  tag: {
    bits: 1,
    chars: ['\u{E0020}','\u{E0021}'],
    name: 'Unicode Tag block (U+E0020/E0021)',
  },
  combo: {
    bits: 2,
    chars: ['\u034F','\u00AD','\u17B4','\u17B5'],
    name: 'Combining invisible (CGJ/SHY/Khmer)',
  },
};
const DEFAULT_SET = 'zw4';

// Payload delimiters (invisible)
const MARK_S = '\u{E0001}';
const MARK_E = '\u{E007F}';
const MARK_S2 = '\u2064\u2061';
const MARK_E2 = '\u2063\u2062';

// ─── Encoding utils ──────────────────────────────────────
const _te   = s => new TextEncoder().encode(s);
const _td   = b => new TextDecoder('utf-8',{fatal:false}).decode(b);
const _b64e = s => { try{return btoa(unescape(encodeURIComponent(s)));}catch(e){return btoa(s);} };
const _b64d = s => { try{return decodeURIComponent(escape(atob(s)));}catch(e){try{return atob(s);}catch(e2){return s;}} };

function fmt(bytes) {
  if(bytes < 1024) return bytes+'B';
  if(bytes < MB)   return (bytes/1024).toFixed(1)+'KB';
  return (bytes/MB).toFixed(2)+'MB';
}

// ─── Key derivation ──────────────────────────────────────
function deriveKey(pw, salt='xs-hackshell', rounds=1000) {
  if(!pw) return null;
  let key = [..._te(pw+salt)];
  for(let r=0;r<rounds;r++) key = key.map((b,i)=>((b*31+key[(i+1)%key.length]+r)&0xFF));
  return key;
}
function expandKey(keyBytes, length) {
  if(!keyBytes?.length) return null;
  const out = new Uint8Array(length);
  let acc = keyBytes.reduce((a,b)=>((a*1664525+b+1013904223)&0xFFFFFFFF)>>>0, 0);
  for(let i=0;i<length;i++){acc=((acc*1664525)+1013904223)&0xFFFFFFFF; out[i]=(acc>>>8)&0xFF;}
  return out;
}
function applyKey(bytes, keyBytes) {
  if(!keyBytes) return bytes;
  const key = expandKey(keyBytes, bytes.length);
  return bytes.map((b,i)=>b^key[i]);
}

// ─── Core encode / decode ────────────────────────────────
function encode(plaintext, {setId=DEFAULT_SET, password='', cover='', b64=true}={}) {
  const def = SETS[setId]||SETS[DEFAULT_SET];
  const bpc = def.bits;
  const chars = def.chars;

  let payload = b64 ? _b64e(plaintext) : plaintext;
  let bytes = Array.from(_te(payload));
  if(password) bytes = Array.from(applyKey(new Uint8Array(bytes), deriveKey(password)));

  const bits = bytes.map(b=>b.toString(2).padStart(8,'0')).join('');
  let hidden = '';
  for(let i=0;i<bits.length;i+=bpc) {
    const chunk = bits.slice(i,i+bpc).padEnd(bpc,'0');
    hidden += chars[parseInt(chunk,2) % chars.length];
  }

  const wrapped = MARK_S + hidden + MARK_E;
  if(!cover?.trim()) return wrapped;
  const words = cover.split(' ');
  const at = Math.max(1, Math.floor(words.length*0.3));
  return words.slice(0,at).join(' ') + wrapped + ' ' + words.slice(at).join(' ');
}

function decode(encoded, {setId=DEFAULT_SET, password='', b64=true, autoDetect=true}={}) {
  function extractHidden(text) {
    let s = text.indexOf(MARK_S), e = text.indexOf(MARK_E);
    if(s>=0 && e>s) return text.slice(s+MARK_S.length, e);
    s = text.indexOf(MARK_S2); e = text.indexOf(MARK_E2);
    if(s>=0 && e>s) return text.slice(s+MARK_S2.length, e);
    return [...text].filter(c=>{
      const cp=c.codePointAt(0);
      return (cp>=0x200B&&cp<=0x200F)||cp===0x2060||cp===0xFEFF||
             cp===0x034F||cp===0x00AD||cp===0x17B4||cp===0x17B5||
             cp===0x2061||cp===0x2062||cp===0x2063||cp===0x2064||
             (cp>=0xE0000&&cp<=0xE007F);
    }).join('');
  }

  function trySet(hidden, def) {
    const {chars, bits:bpc} = def;
    let bits = '';
    for(const c of hidden) {
      const idx = chars.indexOf(c);
      if(idx<0) continue;
      bits += idx.toString(2).padStart(bpc,'0');
    }
    const bytes = [];
    for(let i=0;i+8<=bits.length;i+=8) bytes.push(parseInt(bits.slice(i,i+8),2));
    if(!bytes.length) return null;
    let dec = Array.from(bytes);
    if(password) dec = Array.from(applyKey(new Uint8Array(dec), deriveKey(password)));
    let text = _td(new Uint8Array(dec));
    if(b64) { try{text=_b64d(text);}catch(e){} }
    return text||null;
  }

  const hidden = extractHidden(encoded);
  if(!hidden) return null;
  const r = trySet(hidden, SETS[setId]||SETS[DEFAULT_SET]);
  if(r) return r;
  if(autoDetect) {
    for(const [sid,def] of Object.entries(SETS)) {
      if(sid===setId) continue;
      const r2 = trySet(hidden, def);
      if(r2 && /[\x20-\x7E\u00A0-\uFFFF]/.test(r2)) return r2;
    }
  }
  return null;
}

function inspect(text) {
  const inv = [];
  [...text].forEach((c,i) => {
    const cp = c.codePointAt(0);
    let name = null;
    if(cp===0x200B) name='ZWS';
    else if(cp===0x200C) name='ZWNJ';
    else if(cp===0x200D) name='ZWJ';
    else if(cp===0x2060) name='WJ';
    else if(cp===0xFEFF) name='BOM/WJ';
    else if(cp===0x200E) name='LRM';
    else if(cp===0x200F) name='RLM';
    else if(cp===0x202C) name='PDF';
    else if(cp===0x034F) name='CGJ';
    else if(cp===0x00AD) name='SHY';
    else if(cp===0x17B4) name='Khmer-Invis1';
    else if(cp===0x17B5) name='Khmer-Invis2';
    else if(cp===0x2061) name='InvisFuncApp';
    else if(cp===0x2062) name='InvisTimes';
    else if(cp===0x2063) name='InvisSep';
    else if(cp===0x2064) name='InvisPlus';
    else if(cp>=0xE0000&&cp<=0xE007F) name=`Tag-${cp.toString(16).toUpperCase()}`;
    if(name) inv.push({pos:i, cp, name});
  });
  return inv;
}

function countInvisible(text) { return inspect(text).length; }

function strip(text) {
  return text.replace(/[\u200B-\u200F\u2060-\u2064\uFEFF\u034F\u00AD\u17B4\u17B5]|[\u{E0000}-\u{E007F}]/gu,'');
}

// ─── Global helpers (exposed to onclick) ─────────────────
window.xsOpenBlob = function(content, filename, mime='text/plain') {
  const blob = new Blob([content],{type:mime});
  const url  = URL.createObjectURL(blob);
  const win  = window.open(url,'_blank','width=960,height=720,scrollbars=yes,resizable=yes');
  if(!win) { xsDownload(content, filename, mime); return; }
  setTimeout(()=>URL.revokeObjectURL(url), 120000);
};
window.xsDownload = function(content, filename, mime='text/plain') {
  const blob = new Blob([content],{type:mime});
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href=url; a.download=filename;
  document.body.appendChild(a); a.click();
  document.body.removeChild(a);
  setTimeout(()=>URL.revokeObjectURL(url), 10000);
};

// ─── Large-output action bar (no inline display) ─────────
function largeBar(content, label, filename) {
  const size = _te(content).length;
  const cid  = window._cpPut(content);
  let h = `<div class="xs-large-bar">`;
  h += `<div class="xs-large-info"><span class="xs-large-label">${esc(label)}</span>`;
  h += `<span class="xs-large-size">&#128196; ${fmt(size)} — too large to display inline</span></div>`;
  h += `<div class="xs-large-btns">`;
  h += `<button class="proxy-btn" onclick="window._cp('${cid}')">&#128203; Copy</button>`;
  h += `<button class="proxy-btn" onclick="xsOpenBlob(window._cpStore['${cid}'],'${esc(filename)}')">&#128269; Open in window</button>`;
  h += `<button class="proxy-btn" onclick="xsDownload(window._cpStore['${cid}'],'${esc(filename)}')">&#8681; Download</button>`;
  h += `</div></div>`;
  return h;
}


// ══════════════════════════════════════════════════════════
//  xs — Chunked async encoder/decoder
//  Processes in 250ms ticks. Compresses before encoding.
//  Scales chunk size by file size so huge files work fine.
// ══════════════════════════════════════════════════════════

// ── Compression (DeflateRaw via CompressionStream API) ────
// Returns Promise<Uint8Array>
async function xsCompress(uint8) {
  // Always ensure we have a Uint8Array going in
  if(!(uint8 instanceof Uint8Array)) uint8 = new Uint8Array(uint8);
  if(!window.CompressionStream) return uint8; // fallback: no compression
  const cs   = new CompressionStream('deflate-raw');
  const w    = cs.writable.getWriter();
  const r    = cs.readable.getReader();
  w.write(uint8);
  w.close();
  const chunks = [];
  while(true) {
    const {done, value} = await r.read();
    if(done) break;
    chunks.push(value);
  }
  const total = chunks.reduce((a,c)=>a+c.length,0);
  const out   = new Uint8Array(total);
  let off = 0;
  for(const c of chunks) { out.set(c,off); off+=c.length; }
  return out;
}

// Returns Promise<Uint8Array>
async function xsDecompress(uint8) {
  if(!window.DecompressionStream) return uint8;
  const ds   = new DecompressionStream('deflate-raw');
  const w    = ds.writable.getWriter();
  const r    = ds.readable.getReader();
  w.write(uint8);
  w.close();
  const chunks = [];
  while(true) {
    const {done, value} = await r.read();
    if(done) break;
    chunks.push(value);
  }
  const total = chunks.reduce((a,c)=>a+c.length,0);
  const out   = new Uint8Array(total);
  let off = 0;
  for(const c of chunks) { out.set(c,off); off+=c.length; }
  return out;
}

// ── Progress bar helpers ───────────────────────────────────
let _xsProgressId = 0;
function xsMakeProgress(label) {
  const id = 'xsprog-' + (++_xsProgressId);
  const div = document.createElement('div');
  div.id = id;
  div.className = 'output-block info xs-progress-wrap';
  div.innerHTML = xsProgressHTML(label, 0, '…', id);
  document.getElementById('output').appendChild(div);
  document.getElementById('output').scrollTop = 99999;
  return id;
}

function xsProgressHTML(label, pct, status, id) {
  const bar = Math.round(pct / 5); // 0..20 blocks
  const filled = '█'.repeat(bar);
  const empty  = '░'.repeat(20 - bar);
  const col    = pct < 33 ? '#ff4455' : pct < 66 ? '#ffcc00' : '#00d2b4';
  return `<div class="xs-progress">` +
    `<span class="tag tag-xs">xs</span> ` +
    `<span style="color:var(--gray-light)">${esc(label)}</span> ` +
    `<span style="color:${col};font-family:'JetBrains Mono',monospace;font-size:11px">${filled}${empty}</span> ` +
    `<span class="xs-stat-n" style="font-size:11px">${Math.round(pct)}%</span> ` +
    `<span style="color:var(--gray);font-size:10px">${esc(status)}</span>` +
    `</div>`;
}

function xsUpdateProgress(id, pct, status) {
  const el = document.getElementById(id);
  if(!el) return;
  const label = el.querySelector ? '' : '';
  // Reuse the existing label from current inner content
  el.innerHTML = xsProgressHTML(el.getAttribute('data-label')||'', pct, status, id);
}

function xsSetProgressLabel(id, label) {
  const el = document.getElementById(id);
  if(el) el.setAttribute('data-label', label);
}

function xsFinishProgress(id) {
  const el = document.getElementById(id);
  if(el) el.remove();
}

// ── Chunk size scaling ─────────────────────────────────────
// Bigger file → smaller chunk → more yields → smoother UI
// Target: process ~250ms per tick regardless of file size
// Base: 64KB/tick for small files, scales down to ~8KB for 20MB+
function xsChunkSize(totalBytes) {
  const mb = totalBytes / (1024 * 1024);
  if(mb < 0.5)  return 131072; // 128KB
  if(mb < 2)    return 65536;  // 64KB
  if(mb < 5)    return 32768;  // 32KB
  if(mb < 10)   return 16384;  // 16KB
  if(mb < 20)   return 8192;   //  8KB
  return 4096;                  //  4KB for monsters
}

// Yield control back to event loop
const xsYield = () => new Promise(r => setTimeout(r, 0));

// ── Core: async chunked encode (bytes → invisible string) ─
// bytes: Uint8Array  opts: {setId, password, onProgress}
async function encodeAsync(bytes, {setId=DEFAULT_SET, password='', onProgress=null}={}) {
  const def  = SETS[setId]||SETS[DEFAULT_SET];
  const bpc  = def.bits;
  const chars = def.chars;
  const CHUNK = xsChunkSize(bytes.length);

  // 1. Apply password XOR if needed (chunked)
  let data = bytes;
  if(password) {
    if(onProgress) onProgress(0, 'deriving key…');
    await xsYield();
    const keyBytes = deriveKey(password);
    const keystream = expandKey(keyBytes, data.length);
    const xored = new Uint8Array(data.length);
    for(let i=0;i<data.length;i++) xored[i] = data[i] ^ keystream[i];
    data = xored;
  }

  // 2. Convert bytes → bit string in chunks → invisible chars
  const parts = [];
  const total = data.length;
  let lastYield = performance.now();

  for(let i=0;i<total;i+=CHUNK) {
    const slice = data.subarray(i, Math.min(i+CHUNK, total));
    let chunk = '';
    for(let j=0;j<slice.length;j++) {
      const b = slice[j];
      // Manually unroll 8→bpc conversion for speed
      if(bpc === 2) {
        chunk += chars[(b>>6)&3] + chars[(b>>4)&3] + chars[(b>>2)&3] + chars[b&3];
      } else if(bpc === 1) {
        chunk += chars[(b>>7)&1]+chars[(b>>6)&1]+chars[(b>>5)&1]+chars[(b>>4)&1]+
                 chars[(b>>3)&1]+chars[(b>>2)&1]+chars[(b>>1)&1]+chars[b&1];
      } else if(bpc === 3) {
        // 8 bits → need groups of 3, handle across byte boundaries via bit accumulator
        // Use generic path for vs8
        const bits = b.toString(2).padStart(8,'0');
        for(let k=0;k<8;k+=3) chunk += chars[parseInt((bits+'00').slice(k,k+3),2)%chars.length];
      } else {
        const bits = b.toString(2).padStart(8,'0');
        for(let k=0;k<8;k+=bpc) chunk += chars[parseInt(bits.padEnd(8,'0').slice(k,k+bpc).padEnd(bpc,'0'),2)%chars.length];
      }
    }
    parts.push(chunk);

    const now = performance.now();
    if(now - lastYield >= 250) {
      const pct = Math.round((i+slice.length)/total*85); // 0→85 during conversion
      if(onProgress) onProgress(pct, `${fmt(i+slice.length)} / ${fmt(total)}`);
      await xsYield();
      lastYield = performance.now();
    }
  }

  if(onProgress) onProgress(90, 'joining…');
  await xsYield();
  const hidden = parts.join('');
  if(onProgress) onProgress(98, 'wrapping…');
  await xsYield();
  return MARK_S + hidden + MARK_E;
}

// ── Core: async chunked decode (invisible string → bytes) ─
async function decodeAsync(encodedStr, {setId=DEFAULT_SET, password='', onProgress=null}={}) {
  // 1. Extract hidden chars
  if(onProgress) onProgress(2, 'extracting…');
  await xsYield();

  let hidden;
  const si = encodedStr.indexOf(MARK_S), ei = encodedStr.indexOf(MARK_E);
  if(si>=0 && ei>si) {
    hidden = encodedStr.slice(si+MARK_S.length, ei);
  } else {
    const si2 = encodedStr.indexOf(MARK_S2), ei2 = encodedStr.indexOf(MARK_E2);
    if(si2>=0 && ei2>si2) {
      hidden = encodedStr.slice(si2+MARK_S2.length, ei2);
    } else {
      // Fallback: collect all invisible chars
      hidden = [...encodedStr].filter(c=>{
        const cp=c.codePointAt(0);
        return (cp>=0x200B&&cp<=0x200F)||cp===0x2060||cp===0xFEFF||
               cp===0x034F||cp===0x00AD||cp===0x17B4||cp===0x17B5||
               cp===0x2061||cp===0x2062||cp===0x2063||cp===0x2064||
               (cp>=0xE0000&&cp<=0xE007F);
      }).join('');
    }
  }
  if(!hidden) return null;

  const def   = SETS[setId]||SETS[DEFAULT_SET];
  const bpc   = def.bits;
  const chars = def.chars;
  const CHUNK = Math.max(4096, xsChunkSize(hidden.length));

  // 2. Invisible chars → bytes (chunked)
  if(onProgress) onProgress(5, 'decoding chars…');
  await xsYield();

  // We need to collect all byte values
  const byteArr = [];
  // For bpc=2 or 1: every N chars = 1 byte
  const charsPerByte = Math.ceil(8/bpc);
  const hiddenArr = [...hidden]; // spread for correct Unicode codepoint iteration
  const totalChars = hiddenArr.length;
  let lastYield = performance.now();

  // Build byte array
  let bitBuf = 0, bitCount = 0;
  for(let i=0;i<totalChars;i++) {
    const idx = chars.indexOf(hiddenArr[i]);
    if(idx < 0) continue;
    bitBuf = (bitBuf << bpc) | idx;
    bitCount += bpc;
    if(bitCount >= 8) {
      bitCount -= 8;
      byteArr.push((bitBuf >> bitCount) & 0xFF);
      bitBuf &= (1<<bitCount)-1;
    }

    const now = performance.now();
    if(i % 4096 === 0 && now - lastYield >= 250) {
      const pct = 5 + Math.round(i/totalChars * 75);
      if(onProgress) onProgress(pct, `${(i/1000).toFixed(0)}K / ${(totalChars/1000).toFixed(0)}K chars`);
      await xsYield();
      lastYield = performance.now();
    }
  }

  if(!byteArr.length) return null;
  let data = new Uint8Array(byteArr);

  // 3. Apply password XOR if needed
  if(password) {
    if(onProgress) onProgress(82, 'decrypting…');
    await xsYield();
    const keyBytes = deriveKey(password);
    const keystream = expandKey(keyBytes, data.length);
    const xored = new Uint8Array(data.length);
    for(let i=0;i<data.length;i++) xored[i] = data[i] ^ keystream[i];
    data = xored;
  }

  if(onProgress) onProgress(90, 'decoding text…');
  await xsYield();

  const text = new TextDecoder('utf-8',{fatal:false}).decode(data);
  if(onProgress) onProgress(99, 'done');
  return text || null;
}

// ── Already-compressed extensions — skip deflate for these ───────────
const XS_NOCOMPRESS_EXTS = new Set([
  'zip','gz','tgz','bz2','xz','zst','br','lz4','lzma','7z','rar',
  'jpg','jpeg','png','gif','webp','avif','heic','heif',
  'mp3','mp4','mov','avi','mkv','webm','m4a','m4v','flac','opus','ogg',
  'pdf','docx','xlsx','pptx','odt','ods','odp',
  'wasm','apk','ipa','jar','war','ear',
]);
function xsShouldCompress(fileName, noCompressFlag) {
  if(noCompressFlag) return false;
  const ext = (fileName.split('.').pop()||'').toLowerCase();
  return !XS_NOCOMPRESS_EXTS.has(ext);
}

// ── Chunked file encode pipeline ──────────────────────────
// fileBytes: Uint8Array, returns Promise<string> (the encoded invisible string)
async function encodeFilePipeline(fileBytes, {setId, password, progressId, fileName, noCompress=false, short=false}) {
  const totalOrig = fileBytes.length;

  // ── Step 0: embed filename header  {"n":"file.ext","c":1}\x00 + fileBytes ──
  const willCompress = xsShouldCompress(fileName, noCompress);
  const header       = JSON.stringify({n: fileName, c: willCompress ? 1 : 0});
  const headerBytes  = new TextEncoder().encode(header + '\x00');
  const combined     = new Uint8Array(headerBytes.length + fileBytes.length);
  combined.set(headerBytes, 0);
  combined.set(fileBytes,   headerBytes.length);

  // ── Step 1: compress or pass-through ──────────────────────────────────────
  // Use vs8 (3 bits/char) for --short to minimise output length
  const resolvedSet = short ? 'vs8' : (setId || DEFAULT_SET);

  xsSetProgressLabel(progressId, `${fileName} — ${willCompress ? 'compressing' : 'skipping compress'}`);
  xsUpdateProgress(progressId, 5, willCompress ? 'compressing…' : 'compression skipped');
  await xsYield();

  let compressed;
  if(willCompress) {
    try {
      compressed = await xsCompress(combined);
      if(compressed.length >= combined.length) compressed = combined; // already-random data
    } catch(e) {
      compressed = combined;
    }
  } else {
    compressed = combined;
  }

  const ratio = compressed.length / (totalOrig || 1);
  xsUpdateProgress(progressId, 15, `${willCompress ? 'compressed' : 'raw'} ${fmt(totalOrig)} → ${fmt(compressed.length)} (${(ratio*100).toFixed(0)}%)`);
  await xsYield();

  // ── Step 2: chunked base64 encode — no btoa() on huge strings ─────────────
  xsSetProgressLabel(progressId, `${fileName} — base64`);
  xsUpdateProgress(progressId, 18, 'base64 encode…');
  await xsYield();

  {
    const B64C = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    const clen = compressed.length;
    const b64outLen = Math.ceil(clen/3)*4;
    // Store as Uint8Array of ASCII codes — avoids huge string allocation
    const b64buf = new Uint8Array(b64outLen);
    let bi = 0;
    const ENC_CHUNK = 12288; // must be multiple of 3
    let lastYieldE = performance.now();
    for(let i=0;i<clen;i+=3) {
      const a=compressed[i], b=i+1<clen?compressed[i+1]:0, c=i+2<clen?compressed[i+2]:0;
      b64buf[bi++] = B64C.charCodeAt((a>>2)&0x3F);
      b64buf[bi++] = B64C.charCodeAt(((a&3)<<4)|(b>>4));
      b64buf[bi++] = B64C.charCodeAt(((b&0xF)<<2)|(c>>6));
      b64buf[bi++] = B64C.charCodeAt(c&0x3F);
      const now = performance.now();
      if(i>0 && i%ENC_CHUNK===0 && now-lastYieldE>=250) {
        xsUpdateProgress(progressId, 18+Math.round(i/clen*7), `${fmt(i)} / ${fmt(clen)}`);
        await xsYield();
        lastYieldE = performance.now();
      }
    }
    // Padding
    const pad=(3-(clen%3))%3;
    for(let p=0;p<pad;p++) b64buf[b64outLen-1-p]=61; // '='
    // Keep as Uint8Array — next step (TextEncoder/password) works on this directly
    var b64payload = b64buf; // Uint8Array of ASCII
  }
  xsUpdateProgress(progressId, 25, `${fmt(b64payload.length)} b64 bytes`);
  await xsYield();

  // Step 3: apply password to raw bytes of b64
  let payloadBytes = b64payload instanceof Uint8Array ? b64payload : new TextEncoder().encode(b64payload);
  if(password) {
    xsSetProgressLabel(progressId, `${fileName} — encrypting`);
    xsUpdateProgress(progressId, 28, 'encrypting…');
    await xsYield();
    const keyBytes = deriveKey(password);
    const keystream = expandKey(keyBytes, payloadBytes.length);
    const xored = new Uint8Array(payloadBytes.length);
    for(let i=0;i<payloadBytes.length;i++) xored[i] = payloadBytes[i]^keystream[i];
    payloadBytes = xored;
  }

  // Step 4: convert bytes → invisible chars (chunked)
  xsSetProgressLabel(progressId, `${fileName} — encoding`);
  const def   = SETS[resolvedSet]||SETS[DEFAULT_SET];
  const bpc   = def.bits;
  const chars = def.chars;
  const CHUNK = xsChunkSize(payloadBytes.length);
  const parts = [MARK_S];
  const total = payloadBytes.length;
  let lastYield = performance.now();

  for(let i=0;i<total;i+=CHUNK) {
    const slice = payloadBytes.subarray(i, Math.min(i+CHUNK, total));
    let chunk = '';
    for(let j=0;j<slice.length;j++) {
      const b = slice[j];
      if(bpc === 2) {
        chunk += chars[(b>>6)&3]+chars[(b>>4)&3]+chars[(b>>2)&3]+chars[b&3];
      } else if(bpc === 1) {
        chunk += chars[(b>>7)&1]+chars[(b>>6)&1]+chars[(b>>5)&1]+chars[(b>>4)&1]+
                 chars[(b>>3)&1]+chars[(b>>2)&1]+chars[(b>>1)&1]+chars[b&1];
      } else {
        // Generic path (vs8 = 3bpc, combo)
        for(let k=7;k>=0;k-=bpc) {
          const bits = (b>>(Math.max(0,k-bpc+1))) & ((1<<bpc)-1);
          chunk += chars[bits % chars.length];
        }
      }
    }
    parts.push(chunk);

    const now = performance.now();
    if(now - lastYield >= 250) {
      const pct = 30 + Math.round((i+slice.length)/total * 65);
      xsUpdateProgress(progressId, pct, `${fmt(i+slice.length)} / ${fmt(total)}`);
      await xsYield();
      lastYield = performance.now();
    }
  }

  parts.push(MARK_E);
  xsUpdateProgress(progressId, 97, 'joining…');
  await xsYield();
  const result = parts.join('');
  xsUpdateProgress(progressId, 100, 'done');
  await xsYield();
  return {encoded: result, setId: resolvedSet, willCompress};
}

// ── Chunked file decode pipeline ──────────────────────────
// encodedStr: string, returns Promise<Uint8Array> (original file bytes)
async function decodeFilePipeline(encodedStr, {setId, password, progressId, fileName}) { // returns {fileBytes, embeddedName} or null
  // Step 1: extract hidden portion
  xsSetProgressLabel(progressId, `${fileName} — extracting`);
  xsUpdateProgress(progressId, 2, 'locating payload…');
  await xsYield();

  let hidden;
  const si = encodedStr.indexOf(MARK_S), ei = encodedStr.indexOf(MARK_E);
  if(si>=0 && ei>si) hidden = encodedStr.slice(si+MARK_S.length, ei);
  else {
    const si2 = encodedStr.indexOf(MARK_S2), ei2 = encodedStr.indexOf(MARK_E2);
    hidden = (si2>=0&&ei2>si2) ? encodedStr.slice(si2+MARK_S2.length,ei2) : null;
  }
  if(!hidden) return null;

  const def   = SETS[setId]||SETS[DEFAULT_SET];
  const bpc   = def.bits;
  const chars = def.chars;

  xsUpdateProgress(progressId, 5, `${fmt(hidden.length)} invisible chars`);
  await xsYield();

  // Step 2: invisible chars → bytes (chunked)
  xsSetProgressLabel(progressId, `${fileName} — decoding`);
  const hiddenArr  = [...hidden];
  const totalChars = hiddenArr.length;
  const byteArr    = [];
  let bitBuf = 0, bitCount = 0;
  let lastYield = performance.now();

  for(let i=0;i<totalChars;i++) {
    const idx = chars.indexOf(hiddenArr[i]);
    if(idx < 0) continue;
    bitBuf = (bitBuf << bpc) | idx;
    bitCount += bpc;
    if(bitCount >= 8) {
      bitCount -= 8;
      byteArr.push((bitBuf >> bitCount) & 0xFF);
      bitBuf &= (1<<bitCount)-1;
    }

    const now = performance.now();
    if(i % 8192 === 0 && now - lastYield >= 250) {
      const pct = 5 + Math.round(i/totalChars * 55);
      xsUpdateProgress(progressId, pct, `${(i/1000).toFixed(0)}K / ${(totalChars/1000).toFixed(0)}K chars`);
      await xsYield();
      lastYield = performance.now();
    }
  }

  if(!byteArr.length) return null;
  let payloadBytes = new Uint8Array(byteArr);

  // Step 3: decrypt if password
  if(password) {
    xsSetProgressLabel(progressId, `${fileName} — decrypting`);
    xsUpdateProgress(progressId, 62, 'decrypting…');
    await xsYield();
    const keyBytes  = deriveKey(password);
    const keystream = expandKey(keyBytes, payloadBytes.length);
    const xored = new Uint8Array(payloadBytes.length);
    for(let i=0;i<payloadBytes.length;i++) xored[i] = payloadBytes[i]^keystream[i];
    payloadBytes = xored;
  }

  // ── Step 4: chunked base64 decode → raw bytes (no atob on huge strings) ───
  // payloadBytes is a Uint8Array of ASCII base64 chars.
  // We decode 3 bytes at a time from 4 b64 chars, chunked with yields.
  xsSetProgressLabel(progressId, `${fileName} — b64 decode`);
  xsUpdateProgress(progressId, 65, 'base64 decode…');
  await xsYield();

  const B64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  // Build reverse lookup table once
  const b64map = new Uint8Array(256).fill(255);
  for(let i=0;i<64;i++) b64map[B64.charCodeAt(i)] = i;

  // Strip padding from end — payloadBytes is ASCII
  let b64len = payloadBytes.length;
  while(b64len > 0 && payloadBytes[b64len-1] === 61) b64len--; // 61 = '='

  // Output size: floor(b64len * 3/4)
  const rawLen = (b64len * 3) >> 2;
  const rawBytes = new Uint8Array(rawLen);
  let ri = 0;
  const DEC_CHUNK = 16384; // 4-char groups per tick chunk
  lastYield = performance.now();

  for(let i=0;i<b64len;i+=4) {
    const a = b64map[payloadBytes[i]]   ?? 0;
    const b = b64map[payloadBytes[i+1]] ?? 0;
    const c = b64map[payloadBytes[i+2]] ?? 0;
    const d = b64map[payloadBytes[i+3]] ?? 0;
    if(ri < rawLen)   rawBytes[ri++] = (a<<2)|(b>>4);
    if(ri < rawLen)   rawBytes[ri++] = ((b&0xF)<<4)|(c>>2);
    if(ri < rawLen)   rawBytes[ri++] = ((c&0x3)<<6)|d;

    const now = performance.now();
    if(i % DEC_CHUNK === 0 && now - lastYield >= 250) {
      const pct = 65 + Math.round(i/b64len * 12);
      xsUpdateProgress(progressId, pct, `${fmt(ri)} / ${fmt(rawLen)}`);
      await xsYield();
      lastYield = performance.now();
    }
  }
  const compressedBytes = rawBytes.subarray(0, ri);

  // ── Step 5: decompress ───────────────────────────────────────────────────
  xsSetProgressLabel(progressId, `${fileName} — decompressing`);
  xsUpdateProgress(progressId, 78, 'decompressing…');
  await xsYield();

  let fileBytes;
  try {
    fileBytes = await xsDecompress(compressedBytes);
  } catch(e) {
    fileBytes = compressedBytes; // was --no-compress, return raw
  }

  // ── Step 6: parse embedded header {n, c}\x00 + file bytes ────────────────
  xsUpdateProgress(progressId, 95, 'reading header…');
  await xsYield();

  let embeddedName = null;
  let outBytes     = fileBytes;
  // Search only first 512 bytes for NUL separator
  const searchLen = Math.min(fileBytes.length, 512);
  let nullIdx = -1;
  for(let i=0;i<searchLen;i++) { if(fileBytes[i]===0){nullIdx=i;break;} }
  if(nullIdx > 0) {
    try {
      const hdr = JSON.parse(new TextDecoder().decode(fileBytes.subarray(0, nullIdx)));
      if(hdr && hdr.n) { embeddedName = hdr.n; outBytes = fileBytes.subarray(nullIdx + 1); }
    } catch(e) {}
  }

  xsUpdateProgress(progressId, 100, `done — ${fmt(outBytes.length)}`);
  await xsYield();
  return {fileBytes: outBytes, embeddedName};
}


// ─── File picker helper ───────────────────────────────────
function pickFile(accept='*/*') {
  return new Promise((res,rej) => {
    const fi = document.createElement('input');
    fi.type='file'; fi.accept=accept; fi.style.display='none';
    document.body.appendChild(fi);
    fi.onchange = () => { document.body.removeChild(fi); fi.files[0]?res(fi.files[0]):rej(new Error('No file')); };
    fi.click();
  });
}

// Read file → Uint8Array (raw bytes, for chunked pipeline)
function readFile(file) {
  return new Promise((res,rej) => {
    const reader = new FileReader();
    reader.onerror = () => rej(new Error('Read failed'));
    reader.onload  = e => res(new Uint8Array(e.target.result));
    reader.readAsArrayBuffer(file);
  });
}

// ─── Import encoded file for decode ──────────────────────
window.xsImportAndDec = function(optsJson) {
  const opts = JSON.parse(optsJson);
  appendBlock(`<span class="tag tag-xs">xs</span> Pick a file containing encoded data…`,'info');
  pickFile('*/*').then(file => {
    appendBlock(`<span class="tag tag-xs">xs FILE</span> Reading <span class="sh-string">${esc(file.name)}</span>…`,'info');
    // Read as text to preserve invisible chars
    return new Promise((res,rej) => {
      const r = new FileReader();
      r.onerror = ()=>rej(new Error('Read failed'));
      r.onload  = e => res(e.target.result);
      r.readAsText(file);
    });
  }).then(content => {
    XS.cmdDecDirect(content, opts);
  }).catch(e => {
    if(e.message!=='No file')
      appendBlock(`<span class="tag tag-err">ERROR</span> xs import: ${esc(e.message)}`,'error');
  });
};

// ─── ENC command ─────────────────────────────────────────
function cmdEnc(text, opts) {
  if(!text) return appendBlock(`<span class="tag tag-err">ERROR</span> xs enc: no text to hide<br><span style="color:var(--gray);font-size:11px">Usage: <span class="sh-builtin">xs enc "your secret"</span></span>`,'error');

  const setId    = opts.setId    || DEFAULT_SET;
  const password = opts.password || '';
  const cover    = opts.cover    || '';
  const b64      = opts.b64 !== false;

  let encoded;
  try { encoded = encode(text, {setId, password, cover, b64}); }
  catch(e) { return appendBlock(`<span class="tag tag-err">ERROR</span> xs encode: ${esc(e.message)}`,'error'); }

  const def      = SETS[setId]||SETS[DEFAULT_SET];
  const invCount = countInvisible(encoded);
  const visCount = [...encoded].filter(c=>c.codePointAt(0)>0x20).length - invCount;
  const inBytes  = _te(text).length;
  const outBytes = _te(encoded).length;
  const outLarge = outBytes > MB;

  let html = `<div class="xs-card">`;
  html += `<div class="xs-header"><span class="tag tag-xs">xs ENC</span> <span class="sh-string">"${esc(text.length>50?text.slice(0,50)+'…':text)}"</span></div>`;
  html += `<div class="xs-meta-row">`;
  html += `<span class="xs-badge">${esc(def.name)}</span>`;
  if(password) html += `<span class="xs-badge xs-badge-pw">&#128274; password</span>`;
  if(cover)    html += `<span class="xs-badge xs-badge-cover">&#128065; cover text</span>`;
  html += `</div>`;
  html += `<div class="xs-stats">`;
  html += `<span class="xs-stat"><span class="xs-stat-n">${invCount.toLocaleString()}</span> invisible chars</span>`;
  html += `<span class="xs-stat"><span class="xs-stat-n">${fmt(inBytes)}</span> input</span>`;
  html += `<span class="xs-stat"><span class="xs-stat-n">${fmt(outBytes)}</span> output</span>`;
  html += `</div>`;

  if(outLarge) {
    html += largeBar(encoded, 'Encoded output', 'xs_encoded.txt');
  } else {
    if(!cover) {
      html += `<div class="xs-preview-label">APPEARANCE TO OTHERS</div>`;
      html += `<div class="xs-preview-empty">[empty / blank]</div>`;
    } else {
      html += `<div class="xs-preview-label">APPEARANCE TO OTHERS</div>`;
      html += `<div class="xs-preview-cover">${esc(strip(encoded))}</div>`;
    }
    html += `<div class="xs-output-label">OUTPUT <span class="xs-hint">(copy and paste — invisible chars are preserved)</span></div>`;
    html += `<div class="xs-output-box">${esc(encoded)}</div>`;
    const cid = window._cpPut(encoded);
    const vid = window._cpPut(JSON.stringify({enc:encoded,opts}));
    html += `<div class="xs-footer">`;
    html += `<button class="proxy-btn" onclick="window._cp('${cid}')">&#128203; Copy</button>`;
    html += `<button class="proxy-btn" onclick="xsDownload(window._cpStore['${cid}'],'xs_encoded.txt')">&#8681; Export</button>`;
    html += `<button class="proxy-btn xs-btn-reveal" onclick="(function(){const d=JSON.parse(window._cpStore['${vid}']);XS.cmdDecDirect(d.enc,d.opts);})()">&#128065; Verify decode</button>`;
    html += `</div>`;
  }
  html += `</div>`;
  appendBlock(html,'success');
}

// ─── DEC command ─────────────────────────────────────────
function cmdDec(text, opts) {
  // No text → offer import
  if(!text) {
    const oid = window._cpPut(JSON.stringify(opts));
    let html = `<div class="xs-card">`;
    html += `<div class="xs-header"><span class="tag tag-xs">xs DEC</span> Decode hidden payload</div>`;
    html += `<div style="color:var(--gray-light);font-size:11px;margin-bottom:8px">Paste encoded text inline, or import a file:</div>`;
    html += `<div class="xs-footer">`;
    html += `<button class="proxy-btn xs-btn-reveal" onclick="xsImportAndDec(window._cpStore['${oid}'])">&#128194; Import file to decode</button>`;
    html += `</div></div>`;
    appendBlock(html,'info');
    return;
  }

  const setId    = opts.setId    || DEFAULT_SET;
  const password = opts.password || '';
  const b64      = opts.b64 !== false;

  const invCount = countInvisible(text);
  if(!invCount) return appendBlock(`<span class="tag tag-warn">xs</span> No invisible characters found.<br><span style="color:var(--gray);font-size:11px">Paste the full encoded output including surrounding invisible chars.</span>`,'warn');

  let result;
  try { result = decode(text, {setId, password, b64, autoDetect:true}); }
  catch(e) { return appendBlock(`<span class="tag tag-err">ERROR</span> xs decode: ${esc(e.message)}`,'error'); }

  if(!result) {
    let msg = `<span class="tag tag-warn">xs DEC</span> Found ${invCount.toLocaleString()} invisible chars but could not decode.`;
    if(!password) msg += `<br><span style="color:var(--gray);font-size:11px">💡 Try: <span class="sh-builtin">xs dec "..." --password=yourpassword</span></span>`;
    else msg += `<br><span style="color:var(--gray);font-size:11px">Wrong password or incompatible set.</span>`;
    return appendBlock(msg,'warn');
  }

  const outBytes = _te(result).length;
  const outLarge = outBytes > MB;

  let html = `<div class="xs-card">`;
  html += `<div class="xs-header"><span class="tag tag-xs">xs DEC</span> Hidden message revealed</div>`;
  html += `<div class="xs-meta-row">`;
  html += `<span class="xs-badge">${invCount.toLocaleString()} invisible chars decoded</span>`;
  if(password) html += `<span class="xs-badge xs-badge-pw">&#128274; password used</span>`;
  html += `</div>`;

  if(outLarge) {
    html += largeBar(result, 'Revealed payload', 'xs_revealed.txt');
  } else {
    html += `<div class="xs-output-label">REVEALED TEXT</div>`;
    html += `<div class="xs-revealed">${esc(result)}</div>`;
    const cid = window._cpPut(result);
    html += `<div class="xs-footer">`;
    html += `<button class="proxy-btn" onclick="window._cp('${cid}')">&#128203; Copy</button>`;
    html += `<button class="proxy-btn" onclick="xsDownload(window._cpStore['${cid}'],'xs_revealed.txt')">&#8681; Export</button>`;
    html += `<span class="nil-char-count">${[...result].length} chars</span>`;
    html += `</div>`;
  }
  html += `</div>`;
  appendBlock(html,'success');
}

// ─── FILE command ─────────────────────────────────────────
function cmdFile(args) {
  const mode = args[0]==='dec' ? 'dec' : 'enc';
  const rest = (args[0]==='enc'||args[0]==='dec') ? args.slice(1) : args;
  const fileOpts = {};
  for(const a of rest) {
    const pw  = a.match(/^(?:--password|-p|pw|password)=(.+)$/i);
    const set = a.match(/^(?:--set|-s|set)=(.+)$/i);
    const nc  = /^(?:--no-compress|--nocompress|nocompress|nc)$/i.test(a);
    const sh  = /^(?:--short|short)$/i.test(a);
    if(pw)  fileOpts.password   = pw[1].replace(/^['"`]|['"`]$/g,'');
    if(set) fileOpts.setId      = set[1];
    if(nc)  fileOpts.noCompress = true;
    if(sh)  fileOpts.short      = true;
  }
  const setId      = fileOpts.setId      || DEFAULT_SET;
  const password   = fileOpts.password   || '';
  const noCompress = fileOpts.noCompress || false;
  const short      = fileOpts.short      || false;

  appendBlock(`<span class="tag tag-xs">xs FILE ${mode.toUpperCase()}</span> Pick any file — zip, binary, image, anything…`,'info');

  pickFile('*/*').then(file => {
    const fileName = file.name;
    appendBlock(`<span class="tag tag-xs">xs FILE</span> Got <span class="sh-string">${esc(fileName)}</span> <span class="sh-comment">(${fmt(file.size)})</span>`,'info');

    if(mode === 'enc') {
      const progressId = xsMakeProgress(fileName + ' — reading');
      xsSetProgressLabel(progressId, fileName + ' — reading');
      xsUpdateProgress(progressId, 1, 'reading file…');

      readFile(file).then(fileBytes => {
        return encodeFilePipeline(fileBytes, {setId, password, progressId, fileName, noCompress, short});
      }).then(res => {
        xsFinishProgress(progressId);
        const encoded  = res.encoded || res; // object or legacy string
        const usedSet  = res.setId   || setId;
        const didComp  = res.willCompress;
        const outFile  = fileName + '.xsenc.txt';
        const outLarge = encoded.length > MB;
        const defName  = SETS[usedSet]?.name || usedSet;

        let html = `<div class="xs-card">`;
        html += `<div class="xs-header"><span class="tag tag-xs">xs FILE ENC</span> <span class="sh-string">${esc(fileName)}</span></div>`;
        html += `<div class="xs-meta-row">`;
        html += `<span class="xs-badge">${esc(defName)}</span>`;
        html += `<span class="xs-badge">${esc(file.type||'binary')}</span>`;
        if(password)  html += `<span class="xs-badge xs-badge-pw">&#128274; password</span>`;
        if(didComp)   html += `<span class="xs-badge" style="background:rgba(0,255,136,0.07);border-color:rgba(0,255,136,0.2);color:var(--green)">&#9650; compressed</span>`;
        if(!didComp)  html += `<span class="xs-badge" style="background:rgba(255,180,0,0.07);border-color:rgba(255,180,0,0.25);color:#ffb400">&#9651; raw (no compress)</span>`;
        if(short)     html += `<span class="xs-badge" style="background:rgba(30,144,255,0.07);border-color:rgba(30,144,255,0.25);color:var(--blue-bright)">&#9654; short mode</span>`;
        html += `</div>`;
        html += `<div class="xs-stats">`;
        html += `<span class="xs-stat"><span class="xs-stat-n">${fmt(file.size)}</span> original</span>`;
        html += `<span class="xs-stat"><span class="xs-stat-n">${fmt(encoded.length)}</span> encoded chars</span>`;
        html += `<span class="xs-stat" title="embedded in payload">&#128196; <span class="xs-stat-n">${esc(fileName)}</span></span>`;
        html += `</div>`;

        if(outLarge) {
          html += largeBar(encoded, `Encoded: ${fileName}`, outFile);
        } else {
          const cid = window._cpPut(encoded);
          html += `<div class="xs-output-label">ENCODED OUTPUT <span class="xs-hint">(filename embedded in payload)</span></div>`;
          html += `<div class="xs-output-box">${esc(encoded)}</div>`;
          html += `<div class="xs-footer">`;
          html += `<button class="proxy-btn" onclick="window._cp('${cid}')">&#128203; Copy</button>`;
          html += `<button class="proxy-btn" onclick="xsDownload(window._cpStore['${cid}'],'${esc(outFile)}')">&#8681; Export .txt</button>`;
          html += `<button class="proxy-btn" onclick="xsOpenBlob(window._cpStore['${cid}'],'${esc(outFile)}')">&#128269; Open in window</button>`;
          html += `</div>`;
        }
        html += `</div>`;
        appendBlock(html,'success');
      }).catch(e => {
        xsFinishProgress(progressId);
        appendBlock(`<span class="tag tag-err">ERROR</span> xs file enc: ${esc(e.message)}`,'error');
      });

    } else {
      const progressId = xsMakeProgress(fileName + ' — reading');
      xsUpdateProgress(progressId, 1, 'reading encoded file…');

      new Promise((res,rej) => {
        const r = new FileReader();
        r.onerror = ()=>rej(new Error('Read failed'));
        r.onload  = e=>res(e.target.result);
        r.readAsText(file);
      }).then(content => {
        const invCount = [...content].filter(c=>{
          const cp=c.codePointAt(0);
          return (cp>=0x200B&&cp<=0x200F)||cp===0x2060||cp===0xFEFF||
                 cp===0x034F||cp===0x00AD||cp===0x17B4||cp===0x17B5||
                 (cp>=0xE0000&&cp<=0xE007F);
        }).length;
        if(!invCount) {
          xsFinishProgress(progressId);
          appendBlock(`<span class="tag tag-warn">xs FILE DEC</span> No invisible chars in <span class="sh-string">${esc(fileName)}</span>.`,'warn');
          return Promise.resolve(null);
        }
        xsUpdateProgress(progressId, 3, `${invCount.toLocaleString()} invisible chars found`);
        return decodeFilePipeline(content, {setId, password, progressId, fileName});
      }).then(result => {
        if(!result) return;
        xsFinishProgress(progressId);
        const {fileBytes, embeddedName} = result;

        // Prefer embedded name; fall back to stripping .xsenc.txt from carrier filename
        const origName = embeddedName || fileName.replace(/\.xsenc\.txt$/i,'');
        const blob = new Blob([fileBytes], {type:'application/octet-stream'});
        const url  = URL.createObjectURL(blob);

        let html = `<div class="xs-card">`;
        html += `<div class="xs-header"><span class="tag tag-xs">xs FILE DEC</span> <span class="sh-string">${esc(fileName)}</span></div>`;
        html += `<div class="xs-meta-row"><span class="xs-badge">file recovered</span>`;
        if(embeddedName) html += `<span class="xs-badge" title="name recovered from payload">&#128196; ${esc(embeddedName)}</span>`;
        if(password) html += `<span class="xs-badge xs-badge-pw">&#128274; password used</span>`;
        html += `</div>`;
        html += `<div class="xs-stats">`;
        html += `<span class="xs-stat"><span class="xs-stat-n">${fmt(file.size)}</span> encoded</span>`;
        html += `<span class="xs-stat"><span class="xs-stat-n">${fmt(fileBytes.length)}</span> recovered</span>`;
        html += `</div>`;
        html += `<div class="xs-large-bar">`;
        html += `<div class="xs-large-info"><span class="xs-large-label">${esc(origName)}</span>`;
        html += `<span class="xs-large-size">&#10003; ${fmt(fileBytes.length)} recovered</span></div>`;
        html += `<div class="xs-large-btns">`;
        html += `<a href="${url}" download="${esc(origName)}" style="text-decoration:none" onclick="setTimeout(()=>URL.revokeObjectURL(this.href),30000)"><button class="proxy-btn">&#8681; Download ${esc(origName)}</button></a>`;
        html += `</div></div></div>`;
        appendBlock(html,'success');
      }).catch(e => {
        xsFinishProgress(progressId);
        appendBlock(`<span class="tag tag-err">ERROR</span> xs file dec: ${esc(e.message)}`,'error');
      });
    }
  }).catch(e => {
    if(e.message!=='No file')
      appendBlock(`<span class="tag tag-err">ERROR</span> xs file: ${esc(e.message)}`,'error');
  });
}

// ─── INSPECT command ──────────────────────────────────────
function cmdInspect(text) {
  if(!text) return appendBlock(`<span class="tag tag-err">ERROR</span> xs inspect: no text`,'error');
  const found = inspect(text);
  const total = [...text].length;
  let html = `<div class="xs-card">`;
  html += `<div class="xs-header"><span class="tag tag-xs">xs INSPECT</span> Invisible character analysis</div>`;
  html += `<div class="xs-stats">`;
  html += `<span class="xs-stat"><span class="xs-stat-n">${total.toLocaleString()}</span> total</span>`;
  html += `<span class="xs-stat"><span class="xs-stat-n">${found.length.toLocaleString()}</span> invisible</span>`;
  html += `<span class="xs-stat"><span class="xs-stat-n">${(total-found.length).toLocaleString()}</span> visible</span>`;
  html += `</div>`;
  if(!found.length) {
    html += `<div class="xs-preview-empty" style="margin-top:8px">No invisible characters detected.</div>`;
  } else {
    const types = {};
    found.forEach(({name})=>{ types[name]=(types[name]||0)+1; });
    html += `<div style="margin-top:8px"><table class="help-table">`;
    for(const [name,count] of Object.entries(types)) {
      const isData = !['LRM','RLM','PDF','BOM/WJ'].includes(name);
      html += `<tr><td><span class="xs-char-pill ${isData?'xs-char-data':'xs-char-ctrl'}">${esc(name)}</span></td><td><span class="sh-number">${count}</span></td><td style="color:var(--gray-light);font-size:11px">${isData?'payload':'control'}</td></tr>`;
    }
    html += `</table></div>`;
    const preview = found.slice(0,24).map(({pos,name})=>`<span class="xs-pos">@${pos}</span><span class="xs-char-pill xs-char-data">${esc(name)}</span>`).join(' ');
    html += `<div style="margin-top:8px;font-size:10px;line-height:2">${preview}${found.length>24?` <span style="color:var(--gray)">…+${found.length-24}</span>`:''}</div>`;
    const tryResult = decode(text, {autoDetect:true});
    if(tryResult) {
      html += `<div style="margin-top:8px;padding:6px 10px;background:rgba(0,255,136,0.05);border:1px solid rgba(0,255,136,0.15);border-radius:3px">`;
      html += `<span style="color:var(--green);font-size:10px;letter-spacing:1px">DECODED (no password):</span><br>`;
      html += `<span style="color:var(--cyan)">${esc(tryResult.slice(0,200)+(tryResult.length>200?'…':''))}</span>`;
      html += `</div>`;
    }
  }
  html += `</div>`;
  appendBlock(html,'info');
}

// ─── STRIP command ───────────────────────────────────────
function cmdStrip(text) {
  if(!text) return appendBlock(`<span class="tag tag-err">ERROR</span> xs strip: no text`,'error');
  const stripped = strip(text);
  const removed = [...text].length - [...stripped].length;
  let html = `<span class="tag tag-xs">xs STRIP</span> Removed <span class="sh-number">${removed}</span> invisible char${removed!==1?'s':''}.<br>`;
  html += `<div class="xs-revealed" style="margin-top:5px">${stripped?esc(stripped):'<span style="color:var(--gray)">(empty — text was entirely invisible)</span>'}</div>`;
  if(removed>0) {
    const cid = window._cpPut(stripped);
    html += `<div style="margin-top:6px"><button class="proxy-btn" onclick="window._cp('${cid}')">&#128203; Copy stripped</button></div>`;
  }
  appendBlock(html,'success');
}

// ─── DEMO command ─────────────────────────────────────────
function cmdDemo(text, password) {
  const TEST = text;
  let html = `<div class="xs-card">`;
  html += `<div class="xs-header"><span class="tag tag-xs">xs DEMO</span> All sets — <span class="sh-string">"${esc(TEST.length>30?TEST.slice(0,30)+'…':TEST)}"</span>${password?` <span class="xs-badge xs-badge-pw">&#128274; password</span>`:''}</div>`;
  html += `<table class="help-table" style="margin-top:8px">`;
  html += `<tr><td style="color:var(--gray-mid);font-size:9px">SET</td><td style="color:var(--gray-mid);font-size:9px">INVISIBLE CHARS</td><td style="color:var(--gray-mid);font-size:9px">BITS/CHAR</td><td style="color:var(--gray-mid);font-size:9px">ROUNDTRIP</td></tr>`;
  for(const [sid,def] of Object.entries(SETS)) {
    try {
      const enc = encode(TEST,{setId:sid,password});
      const dec = decode(enc,{setId:sid,password});
      const inv = countInvisible(enc);
      const ok  = dec===TEST;
      html += `<tr><td><span class="sh-command">${esc(sid)}</span><div style="color:var(--gray-mid);font-size:9px">${esc(def.name)}</div></td>`;
      html += `<td><span class="sh-number">${inv}</span></td><td><span class="sh-number">${def.bits}</span></td>`;
      html += `<td>${ok?`<span class="sh-ok-code">✓ perfect</span>`:`<span class="sh-err-code">✗ mismatch</span>`}</td></tr>`;
    } catch(e) {
      html += `<tr><td><span class="sh-command">${esc(sid)}</span></td><td colspan="3" style="color:var(--red)">${esc(e.message)}</td></tr>`;
    }
  }
  html += `</table></div>`;
  appendBlock(html,'info');
}

// ─── SETS command ─────────────────────────────────────────
function cmdSets() {
  let html = `<div class="xs-card">`;
  html += `<div class="xs-header"><span class="tag tag-xs">xs SETS</span> Zero-width character sets</div>`;
  html += `<table class="help-table" style="margin-top:8px">`;
  for(const [id,def] of Object.entries(SETS)) {
    const cps = def.chars.map(c=>`U+${c.codePointAt(0).toString(16).toUpperCase().padStart(4,'0')}`).join(' ');
    html += `<tr><td><span class="sh-command">${esc(id)}</span>${id===DEFAULT_SET?' <span class="xs-badge" style="font-size:8px">default</span>':''}</td>`;
    html += `<td><span class="sh-number">${def.bits}</span> bits/char</td>`;
    html += `<td style="color:var(--gray-light);font-size:10px">${esc(cps)}</td>`;
    html += `<td style="color:var(--gray-light)">${esc(def.name)}</td></tr>`;
  }
  html += `</table>`;
  html += `<div style="margin-top:8px;color:var(--gray);font-size:11px">Higher bits/char = fewer invisible chars = harder to detect statistically.</div>`;
  html += `</div>`;
  appendBlock(html,'info');
}

// ─── HELP ─────────────────────────────────────────────────
function showHelp() {
  appendBlock(`<div class="xs-card"><div class="xs-header"><span class="tag tag-xs">xs</span> Zero-Width Steganographic Encoder</div>
<div class="xs-desc">Hides text or ANY file in invisible Unicode — output looks blank, or like normal text with cover.</div>
<table class="help-table" style="margin-top:10px">
<tr><td><span class="sh-command">xs enc</span> "text" [opts]</td><td>Hide text in invisible chars</td></tr>
<tr><td><span class="sh-command">xs dec</span> "&lt;paste&gt;" [opts]</td><td>Reveal hidden text</td></tr>
<tr><td><span class="sh-command">xs file enc</span> [opts]</td><td>Pick &amp; encode any file (zip, binary, image…)</td></tr>
<tr><td><span class="sh-command">xs file dec</span> [opts]</td><td>Pick encoded .txt → recover original file</td></tr>
<tr><td><span class="sh-command">xs inspect</span> "&lt;text&gt;"</td><td>Reveal all invisible chars in a string</td></tr>
<tr><td><span class="sh-command">xs strip</span> "&lt;text&gt;"</td><td>Remove all invisible chars</td></tr>
<tr><td><span class="sh-command">xs demo</span> ["text"]</td><td>Compare all encoding sets</td></tr>
<tr><td><span class="sh-command">xs sets</span></td><td>List character sets</td></tr>
</table>
<div style="margin-top:10px;color:var(--gray-mid);font-size:10px;letter-spacing:2px">OPTIONS</div>
<table class="help-table" style="margin-top:4px">
<tr><td><span class="sh-flag">--password=</span><span class="sh-string">secret</span></td><td>XOR password-protect the payload</td></tr>
<tr><td><span class="sh-flag">--set=</span><span class="sh-string">zw4</span></td><td>Char set: zw2 zw4 vs8 tag combo</td></tr>
<tr><td><span class="sh-flag">--cover=</span><span class="sh-string">"normal text"</span></td><td>Embed inside visible cover text</td></tr>
<tr><td><span class="sh-flag">--no-compress</span></td><td>Skip compression — use for .zip .gz .jpg .toml etc.</td></tr>
<tr><td><span class="sh-flag">--short</span></td><td>Shortest output: auto-selects vs8 (3 bits/char) set</td></tr>
</table>
<div style="margin-top:10px;color:var(--gray);font-size:11px;line-height:1.9">
<span class="sh-comment"># Text encode/decode</span><br>
<span class="sh-builtin">xs enc "my secret" --password=ghost</span><br>
<span class="sh-builtin">xs dec "&lt;paste&gt;" --password=ghost</span><br>
<span class="sh-comment"># Hide inside cover text</span><br>
<span class="sh-builtin">xs enc "secret" --cover="Hey, how are you?"</span><br>
<span class="sh-comment"># File encode/decode (any filetype, zip, binary)</span><br>
<span class="sh-builtin">xs file enc --password=ghost</span><br>
<span class="sh-builtin">xs file dec --password=ghost</span>
</div></div>`,'info');
}

// ─── HANDLE dispatcher ────────────────────────────────────
function handle(args) {
  if(!args.length||args[0]==='--help'||args[0]==='-h') { showHelp(); return; }
  const sub  = args[0];
  const rest = args.slice(1);
  const opts = {};
  const pos  = [];
  for(const a of rest) {
    const pw  = a.match(/^(?:--password|-p|pw|password)=(.+)$/i);
    const set = a.match(/^(?:--set|-s|set)=(.+)$/i);
    const cov = a.match(/^(?:--cover|cover)=(.+)$/i);
    const raw = a.match(/^(?:--raw|raw)$/i);
    if(pw)       opts.password = pw[1].replace(/^['"`]|['"`]$/g,'');
    else if(set) opts.setId    = set[1];
    else if(cov) opts.cover    = cov[1];
    else if(raw) opts.b64      = false;
    else         pos.push(a);
  }
  const text = pos.join(' ').replace(/^['"`]|['"`]$/g,'');
  switch(sub) {
    case 'enc':  case 'hide':   return cmdEnc(text, opts);
    case 'dec':  case 'reveal': return cmdDec(text, opts);
    case 'file':                return cmdFile(rest);
    case 'inspect': case 'scan':return cmdInspect(text||'');
    case 'strip':               return cmdStrip(text||'');
    case 'demo':                return cmdDemo(text||'HACKSHELL secret', opts.password||'');
    case 'sets':                return cmdSets();
    default:
      if(text||pos.length) { cmdEnc(sub+(pos.length?' '+pos.join(' '):''), opts); return; }
      appendBlock(`<span class="tag tag-err">ERROR</span> xs: unknown subcommand <span class="sh-command">${esc(sub)}</span><br><span style="color:var(--gray);font-size:11px">Try <span class="sh-builtin">xs --help</span></span>`,'error');
  }
}

return { handle, encode, decode, inspect, strip, cmdDecDirect: (e,o)=>cmdDec(e,o) };
})();


// ══════════════════════════════════════════════════════════
//  BOOT ANIMATION
// ══════════════════════════════════════════════════════════
const BOOT_ASCII=`
 ██╗  ██╗ █████╗  ██████╗██╗  ██╗███████╗██╗  ██╗███████╗██╗     ██╗     
 ██║  ██║██╔══██╗██╔════╝██║ ██╔╝██╔════╝██║  ██║██╔════╝██║     ██║     
 ███████║███████║██║     █████╔╝ ███████╗███████║█████╗  ██║     ██║     
 ██╔══██║██╔══██║██║     ██╔═██╗ ╚════██║██╔══██║██╔══╝  ██║     ██║     
 ██║  ██║██║  ██║╚██████╗██║  ██╗███████║██║  ██║███████╗███████╗███████╗
 ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝`.trim();

const BOOT_SEQUENCES=[
  {t:'info', msg:'Loading BIOS... v2.0.0-phantom'},
  {t:'ok',   msg:'POST check: CPU [OK] | MEM [OK] | DISK [OK]'},
  {t:'info', msg:'Mounting /proc, /sys, /dev...'},
  {t:'ok',   msg:'VFS initialized: 37 inodes'},
  {t:'info', msg:'Loading kernel modules: net, crypto, fs'},
  {t:'ok',   msg:'Crypto subsystem ready (AES-256-GCM)'},
  {t:'info', msg:'Initializing network stack...'},
  {t:'ok',   msg:'eth0: link up @ 1Gbps'},
  {t:'info', msg:'Binding socket: 0.0.0.0:3000'},
  {t:'ok',   msg:'Socket bound successfully'},
  {t:'info', msg:'Loading proxy registry...'},
  {t:'ok',   msg:`${_px.length} proxy nodes registered`},
  {t:'info', msg:'Initializing JavaScript engine (V8)...'},
  {t:'ok',   msg:'V8 v12.0 ready'},
  {t:'info', msg:'Loading Python runtime (simulated)...'},
  {t:'ok',   msg:'Python 3.11 interpreter ready'},
  {t:'info', msg:`Loading command registry: ${Object.keys(COMMANDS).length} commands`},
  {t:'ok',   msg:'All modules loaded'},
  {t:'warn', msg:'No authentication required (anonymous mode)'},
  {t:'ok',   msg:'HackShell v2.0 "Phantom" — READY'},
];

// Matrix rain
function initMatrix(){
  const canvas=document.getElementById('boot-matrix');
  const ctx=canvas.getContext('2d');
  canvas.width=window.innerWidth; canvas.height=window.innerHeight;
  const cols=Math.floor(canvas.width/14); const drops=new Array(cols).fill(1);
  const chars='アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEF<>[]{}()$#@!%^&*';
  let frame;
  function draw(){
    ctx.fillStyle='rgba(0,0,0,0.05)';
    ctx.fillRect(0,0,canvas.width,canvas.height);
    for(let i=0;i<drops.length;i++){
      const bright=Math.random()>0.95;
      ctx.fillStyle=bright?'#ff4455':'#cc1122';
      ctx.font='13px monospace';
      ctx.fillText(chars[Math.floor(Math.random()*chars.length)],i*14,drops[i]*14);
      if(drops[i]*14>canvas.height&&Math.random()>0.975) drops[i]=0;
      drops[i]++;
    }
    frame=requestAnimationFrame(draw);
  }
  draw();
  return ()=>cancelAnimationFrame(frame);
}

function bootSequence(){
  const overlay=document.getElementById('boot-overlay');
  const shell=document.getElementById('shell-wrapper');
  const asciiEl=document.getElementById('boot-ascii');
  const taglineEl=document.getElementById('boot-tagline');
  const logEl=document.getElementById('boot-log');
  const barFill=document.getElementById('boot-bar-fill');
  const barPct=document.getElementById('boot-bar-pct');

  asciiEl.textContent=BOOT_ASCII;
  taglineEl.textContent='v2.0 "Phantom" — Cross-language hacker terminal';

  const stopMatrix=initMatrix();
  let step=0;
  const total=BOOT_SEQUENCES.length;
  const now=()=>new Date().toLocaleTimeString([],{hour12:false});

  function nextStep(){
    if(step>=total){
      // Done — transition
      setTimeout(()=>{
        stopMatrix();
        overlay.classList.add('fade-out');
        shell.classList.add('visible');
        setTimeout(()=>{
          overlay.style.display='none';
          // Check for hash routing
          const rawHash=location.hash.slice(1);
          if(rawHash){
            const handled=launchByHashValue(rawHash);
            if(handled){
              // Skip motd, go straight to the launched app
              appendBlock(`<span class="tag tag-info">HASH</span> Loaded from link: <span class="sh-variable">${decodeURIComponent(rawHash)}</span>`,'info');
              updateSuggestions(''); INPUT.focus();
              return;
            }
          }
          printMotd(true); updateSuggestions(''); INPUT.focus();
        },650);
      },400);
      return;
    }
    const {t,msg}=BOOT_SEQUENCES[step];
    const clsMap={ok:'bl-ok',err:'bl-err',warn:'bl-warn',info:'bl-info'};
    const labelMap={ok:'[  OK  ]',err:'[ FAIL ]',warn:'[ WARN ]',info:'[ INFO ]'};
    const div=document.createElement('div');
    div.className='boot-line';
    div.innerHTML=`<span class="bl-time">${now()}</span><span class="${clsMap[t]}">${labelMap[t]}</span><span class="bl-msg">${msg}</span>`;
    logEl.appendChild(div);
    logEl.scrollTop=logEl.scrollHeight;
    const pct=Math.round(((step+1)/total)*100);
    barFill.style.width=pct+'%';
    barPct.textContent=pct+'%';
    step++;
    setTimeout(nextStep,60+Math.random()*80);
  }

  // Slight delay before starting
  setTimeout(nextStep,400);
}

// ── Hash change listener (after page already loaded) ──
window.addEventListener('hashchange', () => {
  const raw = location.hash.slice(1);
  if(raw) launchByHashValue(raw);
});

// ── Start ──
bootSequence();
