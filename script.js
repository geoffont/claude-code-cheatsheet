const data = {
  cli: {
    label: "CLI",
    icon: "⚡",
    accent: "var(--accent-cli)",
    categories: [
      {
        name: "Installation & Lancement",
        icon: "📦",
        shortcuts: [
          { keys: ["npm install -g @anthropic-ai/claude-code"], desc: "Installer Claude Code via npm" },
          { keys: ["curl -sL https://install.anthropic.com | sh"], desc: "Installer via le script officiel (alternative)" },
          { keys: ["claude update"], desc: "Mettre à jour vers la dernière version" },
          { keys: ["claude --version"], desc: "Afficher la version installée" },
          { keys: ["claude"], desc: "Lancer une session interactive (REPL)" },
          { keys: ["claude", '"query"'], desc: "Lancer le REPL avec un prompt initial" },
        ]
      },
      {
        name: "Modes d'exécution",
        icon: "▶",
        shortcuts: [
          { keys: ["claude"], desc: "Mode interactif — session conversationnelle complète" },
          { keys: ["claude -p", '"query"'], desc: "Mode print (SDK) — exécute et quitte, idéal pour scripts" },
          { keys: ["claude -c"], desc: "Reprendre la conversation la plus récente (même répertoire)" },
          { keys: ["claude -c -p", '"query"'], desc: "Reprendre la dernière conversation en mode SDK" },
          { keys: ["claude -r", '"session-id"'], desc: "Reprendre une session spécifique par son ID" },
          { keys: ["claude --resume"], desc: "Afficher la liste des sessions récentes et choisir" },
        ]
      },
      {
        name: "Flags principaux",
        icon: "🏴",
        shortcuts: [
          { keys: ["--model", "sonnet|opus|haiku"], desc: "Choisir le modèle : alias (<code>sonnet</code>, <code>opus</code>) ou nom complet" },
          { keys: ["--add-dir", "../apps ../lib"], desc: "Ajouter des répertoires de travail supplémentaires" },
          { keys: ["--append-system-prompt", '"..."'], desc: "Ajouter du texte au system prompt par défaut (recommandé)" },
          { keys: ["--system-prompt", '"..."'], desc: "Remplacer entièrement le system prompt" },
          { keys: ["--system-prompt-file", "prompt.txt"], desc: "Charger le system prompt depuis un fichier (mode -p uniquement)" },
          { keys: ["--output-format", "json|stream-json|text"], desc: "Format de sortie en mode print — <code>json</code> pour le scripting" },
          { keys: ["--max-turns", "N"], desc: "Limiter le nombre de tours agentiques en mode non-interactif" },
          { keys: ["--verbose"], desc: "Logging détaillé, affiche l'exécution tour par tour" },
          { keys: ["--debug", '"api,mcp"'], desc: "Mode debug avec filtrage par catégorie" },
          { keys: ["--permission-mode", "plan"], desc: "Démarrer dans un mode de permission spécifique" },
          { keys: ["--dangerously-skip-permissions"], desc: "Ignorer les invites de permission (à utiliser avec précaution)" },
        ]
      },
      {
        name: "Flags avancés",
        icon: "🔧",
        shortcuts: [
          { keys: ["--allowedTools", '"Bash(git*)" "Read"'], desc: "Autoriser des outils spécifiques sans confirmation" },
          { keys: ["--disallowedTools", '"Edit"'], desc: "Interdire des outils spécifiques" },
          { keys: ["--tools", '"Bash,Edit,Read"'], desc: "Restreindre la liste des outils disponibles" },
          { keys: ["--agents", "'{...}'"], desc: "Définir des sub-agents custom en JSON (voir section Avancé)" },
          { keys: ["--agent", "my-agent"], desc: "Utiliser un agent spécifique pour la session" },
          { keys: ["--mcp-config", "./mcp.json"], desc: "Charger des serveurs MCP depuis un fichier JSON" },
          { keys: ["--strict-mcp-config"], desc: "Utiliser uniquement les MCP de <code>--mcp-config</code>" },
          { keys: ["--fallback-model", "sonnet"], desc: "Modèle de secours si le principal est surchargé (mode -p)" },
          { keys: ["--json-schema", "'{...}'"], desc: "Obtenir une sortie JSON structurée validée (mode -p)" },
          { keys: ["--fork-session"], desc: "Créer un nouveau session ID lors d'un <code>--resume</code>" },
          { keys: ["--plugin-dir", "./my-plugins"], desc: "Charger des plugins depuis un répertoire" },
          { keys: ["--ide"], desc: "Auto-connecter à l'IDE au démarrage" },
          { keys: ["--session-id", '"uuid"'], desc: "Forcer un UUID de session spécifique" },
        ]
      },
    ]
  },
  slash: {
    label: "Slash Commands",
    icon: "/",
    accent: "var(--accent-slash)",
    categories: [
      {
        name: "Session & Navigation",
        icon: "📂",
        shortcuts: [
          { keys: ["/help"], desc: "Afficher les commandes disponibles (y compris custom)" },
          { keys: ["/clear"], desc: "Effacer l'historique de conversation et démarrer une nouvelle session" },
          { keys: ["/compact"], desc: "Compacter la conversation pour libérer du contexte (instantané)" },
          { keys: ["/compact", "retain X"], desc: "Compacter en conservant des informations spécifiques" },
          { keys: ["/context"], desc: "Vérifier l'utilisation du contexte et les warnings (skills exclues, etc.)" },
          { keys: ["/resume"], desc: "Reprendre une session précédente" },
          { keys: ["/rewind"], desc: "Revenir à un point précédent (conversation et/ou code)" },
        ]
      },
      {
        name: "Modèle & Mode",
        icon: "🤖",
        shortcuts: [
          { keys: ["/model"], desc: "Changer de modèle (Sonnet, Opus, Haiku)" },
          { keys: ["/plan"], desc: "Activer le mode Plan — Claude planifie sans exécuter" },
          { keys: ["/fast"], desc: "Activer le mode Fast — Opus 4.6 à 2.5x la vitesse (coût plus élevé)" },
        ]
      },
      {
        name: "Configuration",
        icon: "⚙",
        shortcuts: [
          { keys: ["/config"], desc: "Ouvrir le panneau de configuration interactif" },
          { keys: ["/vim"], desc: "Activer/désactiver le mode d'édition Vim" },
          { keys: ["/terminal-setup"], desc: "Installer les bindings clavier (Shift+Enter, etc.)" },
          { keys: ["/keybindings"], desc: "Éditer <code>~/.claude/keybindings.json</code>" },
          { keys: ["/permissions"], desc: "Gérer les permissions d'outils" },
        ]
      },
      {
        name: "Mémoire & Contexte",
        icon: "🧠",
        shortcuts: [
          { keys: ["/memory"], desc: "Gérer les fichiers CLAUDE.md (mémoire persistante)" },
          { keys: ["#", "au début"], desc: "Raccourci mémoire — ajouter une note au CLAUDE.md" },
          { keys: ["@", "filename"], desc: "Mentionner un fichier — auto-complétion de chemin" },
        ]
      },
      {
        name: "Outils & Intégrations",
        icon: "🔌",
        shortcuts: [
          { keys: ["/doctor"], desc: "Vérifier la santé de l'installation Claude Code" },
          { keys: ["/hooks"], desc: "Créer et gérer des hooks (pre/post tool use)" },
          { keys: ["/mcp"], desc: "Configurer les serveurs MCP" },
          { keys: ["/plugin"], desc: "Discover, installer et gérer des plugins" },
        ]
      },
      {
        name: "Custom Skills",
        icon: "🎯",
        shortcuts: [
          { keys: ["/nom-du-skill"], desc: "Invoquer un skill custom depuis <code>.claude/skills/</code>" },
          { keys: ["/nom-de-commande"], desc: "Invoquer une commande custom depuis <code>.claude/commands/</code>" },
          { keys: ["SKILL.md"], desc: "Fichier à créer avec frontmatter YAML + instructions Markdown" },
        ]
      },
    ]
  },
  keys: {
    label: "Raccourcis Clavier",
    icon: "⌨",
    accent: "var(--accent-keys)",
    categories: [
      {
        name: "Contrôles généraux",
        icon: "🎮",
        shortcuts: [
          { keys: ["Ctrl", "C"], desc: "Annuler l'entrée en cours ou la génération" },
          { keys: ["Ctrl", "D"], desc: "Quitter la session Claude Code (signal EOF)" },
          { keys: ["Ctrl", "L"], desc: "Effacer l'écran du terminal (conserve l'historique)" },
          { keys: ["Ctrl", "O"], desc: "Toggle la sortie détaillée (verbose)" },
          { keys: ["Ctrl", "R"], desc: "Recherche inversée dans l'historique des commandes" },
          { keys: ["Ctrl", "V"], desc: "Coller une image depuis le presse-papiers (macOS/Linux)" },
          { keys: ["Alt", "V"], desc: "Coller une image depuis le presse-papiers (Windows)" },
          { keys: ["↑", "↓"], desc: "Naviguer dans l'historique des commandes" },
          { keys: ["Ctrl", "B"], desc: "Passer une commande Bash en arrière-plan" },
        ]
      },
      {
        name: "Modes & Bascules",
        icon: "🔀",
        shortcuts: [
          { keys: ["Tab"], desc: "Toggle Extended Thinking (Thinking on / off)" },
          { keys: ["Shift", "Tab"], desc: "Cycler les modes : Normal → Auto-Accept → Plan" },
          { keys: ["Esc", "Esc"], desc: "Rewind — restaurer code/conversation à un point antérieur" },
          { keys: ["?"], desc: "Afficher les raccourcis disponibles pour votre terminal" },
        ]
      },
      {
        name: "Saisie multiligne",
        icon: "📝",
        shortcuts: [
          { keys: ["\\", "Enter"], desc: "Nouvelle ligne — fonctionne dans tous les terminaux" },
          { keys: ["Option", "Enter"], desc: "Nouvelle ligne — par défaut sur macOS" },
          { keys: ["Shift", "Enter"], desc: "Nouvelle ligne — après <code>/terminal-setup</code>" },
          { keys: ["Ctrl", "J"], desc: "Line feed — caractère de saut de ligne" },
        ]
      },
      {
        name: "Préfixes rapides",
        icon: "⚡",
        shortcuts: [
          { keys: ["!", "commande"], desc: "Mode Bash — exécuter directement sans passer par Claude" },
          { keys: ["/", "commande"], desc: "Slash command — voir la liste des commandes" },
          { keys: ["#", "note"], desc: "Mémoire — ajouter une note au CLAUDE.md" },
          { keys: ["@", "fichier"], desc: "Mention de fichier — auto-complétion de chemin" },
        ]
      },
    ]
  },
  vim: {
    label: "Mode Vim",
    icon: "✏",
    accent: "var(--accent-vim)",
    categories: [
      {
        name: "Changement de mode",
        icon: "🔄",
        shortcuts: [
          { keys: ["Esc"], desc: "Passer en mode NORMAL (depuis INSERT)" },
          { keys: ["i"], desc: "Insérer avant le curseur" },
          { keys: ["I"], desc: "Insérer au début de la ligne" },
          { keys: ["a"], desc: "Insérer après le curseur" },
          { keys: ["A"], desc: "Insérer en fin de ligne" },
          { keys: ["o"], desc: "Ouvrir une ligne en dessous" },
          { keys: ["O"], desc: "Ouvrir une ligne au dessus" },
        ]
      },
      {
        name: "Navigation (NORMAL)",
        icon: "🧭",
        shortcuts: [
          { keys: ["h","j","k","l"], desc: "Déplacer gauche / bas / haut / droite" },
          { keys: ["w"], desc: "Mot suivant" },
          { keys: ["b"], desc: "Mot précédent" },
          { keys: ["e"], desc: "Fin du mot" },
          { keys: ["0"], desc: "Début de la ligne" },
          { keys: ["$"], desc: "Fin de la ligne" },
          { keys: ["^"], desc: "Premier caractère non-blanc" },
          { keys: ["gg"], desc: "Début de l'entrée" },
          { keys: ["G"], desc: "Fin de l'entrée" },
        ]
      },
      {
        name: "Édition (NORMAL)",
        icon: "✂",
        shortcuts: [
          { keys: ["x"], desc: "Supprimer le caractère sous le curseur" },
          { keys: ["dd"], desc: "Supprimer la ligne" },
          { keys: ["D"], desc: "Supprimer jusqu'à la fin de la ligne" },
          { keys: ["dw","de","db"], desc: "Supprimer mot / fin de mot / mot précédent" },
          { keys: ["cc"], desc: "Changer la ligne entière" },
          { keys: ["C"], desc: "Changer jusqu'à la fin de la ligne" },
          { keys: ["cw","ce","cb"], desc: "Changer mot / fin de mot / mot précédent" },
          { keys: ["."], desc: "Répéter le dernier changement" },
        ]
      },
    ]
  },
  config: {
    label: "Configuration",
    icon: "🗂",
    accent: "var(--accent-config)",
    categories: [
      {
        name: "Fichiers CLAUDE.md (Mémoire)",
        icon: "📋",
        shortcuts: [
          { keys: ["~/.claude/CLAUDE.md"], desc: "Mémoire globale — s'applique à tous les projets" },
          { keys: ["./CLAUDE.md"], desc: "Mémoire projet — à la racine du repo" },
          { keys: ["./.claude/CLAUDE.md"], desc: "Mémoire projet (alternative)" },
          { keys: ["# note au prompt"], desc: "Ajouter une note au CLAUDE.md depuis la session" },
          { keys: ["/memory"], desc: "Gérer les fichiers CLAUDE.md interactivement" },
        ]
      },
      {
        name: "Fichiers Settings",
        icon: "⚙",
        shortcuts: [
          { keys: ["~/.claude/settings.json"], desc: "Settings utilisateur (global, tous les projets)" },
          { keys: [".claude/settings.json"], desc: "Settings projet (partagé avec l'équipe via git)" },
          { keys: [".claude/settings.local.json"], desc: "Settings local (gitignored, propre à vous)" },
        ]
      },
      {
        name: "Permissions (settings.json)",
        icon: "🔐",
        shortcuts: [
          { keys: ["allowedTools"], desc: "Outils autorisés sans confirmation : <code>[\"Read\", \"Write\", \"Bash(git *)\"]</code>" },
          { keys: ["deny"], desc: "Outils/chemins interdits : <code>[\"Read(./.env)\", \"Write(./prod*)\"]</code>" },
        ]
      },
      {
        name: "Skills & Commands custom",
        icon: "🎯",
        shortcuts: [
          { keys: [".claude/skills/nom/SKILL.md"], desc: "Skill projet — partagé avec l'équipe" },
          { keys: ["~/.claude/skills/nom/SKILL.md"], desc: "Skill personnel — disponible partout" },
          { keys: [".claude/commands/nom.md"], desc: "Commande custom projet (fusionné avec Skills)" },
          { keys: ["~/.claude/commands/nom.md"], desc: "Commande custom personnelle" },
        ]
      },
      {
        name: "Hooks (settings.json)",
        icon: "🪝",
        shortcuts: [
          { keys: ["PreToolUse"], desc: "Hook avant l'exécution d'un outil — peut bloquer / modifier" },
          { keys: ["PostToolUse"], desc: "Hook après l'exécution — formatage, linting, etc." },
          { keys: ["PermissionRequest"], desc: "Hook de décision de permission" },
          { keys: ["SessionEnd"], desc: "Hook en fin de session — nettoyage, logs" },
          { keys: ["/hooks"], desc: "Menu interactif pour créer/gérer les hooks" },
        ]
      },
    ]
  },
  adv: {
    label: "Avancé",
    icon: "🚀",
    accent: "var(--accent-adv)",
    categories: [
      {
        name: "Pipes & Scripting",
        icon: "🔗",
        shortcuts: [
          { keys: ["cat file |", "claude -p", '"query"'], desc: "Piper du contenu dans Claude pour traitement" },
          { keys: ["git log -n10 |", "claude -p", '"release notes"'], desc: "Générer des release notes depuis git" },
          { keys: ["gh pr diff 123 |", "claude -p", '"review"'], desc: "Review de PR via pipe GitHub CLI" },
          { keys: ["claude -p", "--output-format json"], desc: "Sortie JSON parsable pour l'automatisation" },
          { keys: ["claude -p", "--output-format stream-json"], desc: "Sortie JSON en streaming" },
        ]
      },
      {
        name: "Sous-agents",
        icon: "🤖",
        shortcuts: [
          { keys: ["--agents", "'{\"reviewer\":{...}}'"], desc: "Définir des sous-agents custom via JSON" },
          { keys: ["description"], desc: "Champ requis — quand le sub-agent doit être invoqué" },
          { keys: ["prompt"], desc: "Champ requis — system prompt du sub-agent" },
          { keys: ["tools"], desc: "Champ optionnel — outils autorisés : <code>[\"Read\",\"Bash\"]</code>" },
          { keys: ["model"], desc: "Champ optionnel — alias : <code>sonnet</code>, <code>opus</code>, <code>haiku</code>" },
        ]
      },
      {
        name: "MCP (Model Context Protocol)",
        icon: "🌐",
        shortcuts: [
          { keys: ["claude mcp add", "name -- cmd"], desc: "Ajouter un serveur MCP (transport stdio)" },
          { keys: ["claude mcp add --transport sse", "name url"], desc: "Ajouter un serveur MCP via SSE" },
          { keys: ["--mcp-config", "./mcp.json"], desc: "Charger des serveurs MCP depuis un fichier" },
          { keys: ["--strict-mcp-config"], desc: "Ignorer tous les MCP sauf ceux de <code>--mcp-config</code>" },
          { keys: ["/mcp"], desc: "Configurer les serveurs MCP en session interactive" },
        ]
      },
      {
        name: "Git Worktrees (multi-tâches)",
        icon: "🌳",
        shortcuts: [
          { keys: ["git worktree add", "../app-feat -b feature"], desc: "Créer un worktree pour une feature" },
          { keys: ["cd ../app-feat &&", "claude"], desc: "Lancer Claude dans le worktree isolé" },
          { keys: ["git worktree add", "../app-exp -b experiment"], desc: "Expérimenter dans un worktree jetable" },
        ]
      },
      {
        name: "CI/CD & Automatisation",
        icon: "🏗",
        shortcuts: [
          { keys: ["claude -p", "--max-turns 3"], desc: "Limiter les tours en pipeline CI/CD" },
          { keys: ["session_id=$(claude -p ... | jq)"], desc: "Capturer l'ID de session pour chaîner des commandes" },
          { keys: ["claude --resume $id -p", '"next step"'], desc: "Chaîner des étapes en reprenant une session" },
          { keys: ["--append-system-prompt", '"SRE expert"'], desc: "Spécialiser Claude pour un contexte CI (SRE, sécurité...)" },
        ]
      },
      {
        name: "Plugins",
        icon: "🧩",
        shortcuts: [
          { keys: ["claude plugin install", "name@marketplace"], desc: "Installer un plugin" },
          { keys: ["claude plugin install --scope project", "name"], desc: "Installer un plugin partagé avec l'équipe" },
          { keys: ["claude plugin uninstall", "name"], desc: "Désinstaller un plugin" },
          { keys: ["claude plugin enable|disable", "name"], desc: "Activer / désactiver un plugin" },
          { keys: ["/plugin"], desc: "Discover et gérer les plugins en session" },
        ]
      },
    ]
  },
};

// ——— RENDER ———
const tabsList = document.getElementById('tabsList');
const tabPanels = document.getElementById('tabPanels');
const searchInput = document.getElementById('searchInput');
const searchCount = document.getElementById('searchCount');
const searchShortcut = document.getElementById('searchShortcut');
const searchBanner = document.getElementById('searchBanner');
const searchBannerText = document.getElementById('searchBannerText');
const clearSearchBtn = document.getElementById('clearSearch');
const allResults = document.getElementById('allResults');
const toast = document.getElementById('toast');

let activeTab = 'cli';

function countShortcuts(osData) {
  return osData.categories.reduce((t, c) => t + c.shortcuts.length, 0);
}

function renderTabs() {
  Object.entries(data).forEach(([key, d]) => {
    const li = document.createElement('li');
    const cnt = countShortcuts(d);
    li.innerHTML = `<button class="tab-btn${key === activeTab ? ' active' : ''}" data-tab="${key}">
      <span class="tab-dot" style="background:${d.accent}"></span>
      ${d.icon} ${d.label}
      <span class="tab-count">${cnt}</span>
    </button>`;
    tabsList.appendChild(li);
  });
}

function renderPanels() {
  Object.entries(data).forEach(([key, d]) => {
    const panel = document.createElement('div');
    panel.className = `os-panel${key === activeTab ? ' active' : ''}`;
    panel.id = `panel-${key}`;
    panel.innerHTML = d.categories.map(cat => `
      <div class="category-section">
        <div class="category-header">
          <span class="category-icon">${cat.icon}</span>
          <span class="category-name">${cat.name}</span>
          <span class="category-count">${cat.shortcuts.length}</span>
        </div>
        ${cat.shortcuts.map(s => shortcutRowHTML(s)).join('')}
      </div>
    `).join('');
    tabPanels.appendChild(panel);
  });
}

function shortcutRowHTML(s, q) {
  const keysHtml = s.keys.map((k, i) => {
    const last = i === s.keys.length - 1;
    const kh = q ? highlight(k, q) : k;
    return `<kbd class="wide">${kh}</kbd>${!last ? '<span class="key-sep">+</span>' : ''}`;
  }).join('');
  const descHtml = q ? highlight(s.desc, q) : s.desc;
  const copyText = s.keys.join(' + ');
  return `<div class="shortcut-row" data-copy="${escapeAttr(copyText)}">
    <div class="keys-col">${keysHtml}</div>
    <div class="desc-col">${descHtml}</div>
  </div>`;
}

function escapeAttr(s) { return s.replace(/"/g, '&quot;').replace(/'/g, '&#39;'); }

function switchTab(tab) {
  activeTab = tab;
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
  document.querySelectorAll('.os-panel').forEach(p => p.classList.toggle('active', p.id === `panel-${tab}`));
}

// Tabs click
tabsList.addEventListener('click', e => {
  const btn = e.target.closest('.tab-btn');
  if (!btn) return;
  clearSearch();
  switchTab(btn.dataset.tab);
});

// Copy on click
document.addEventListener('click', e => {
  const row = e.target.closest('.shortcut-row');
  if (!row) return;
  const text = row.dataset.copy;
  if (text) {
    navigator.clipboard.writeText(text).then(() => showToast());
  }
});

function showToast() {
  toast.classList.add('visible');
  setTimeout(() => toast.classList.remove('visible'), 1600);
}

// ——— SEARCH ———
function escapeRegex(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
function highlight(text, q) {
  if (!q) return text;
  const re = new RegExp(`(${escapeRegex(q)})`, 'gi');
  return text.replace(re, '<mark>$1</mark>');
}

let searchTimeout;
searchInput.addEventListener('input', () => {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(performSearch, 100);
});

searchInput.addEventListener('focus', () => { searchShortcut.classList.add('hidden'); });
searchInput.addEventListener('blur', () => { if (!searchInput.value) searchShortcut.classList.remove('hidden'); });

function performSearch() {
  const q = searchInput.value.trim().toLowerCase();
  if (!q) { clearSearch(); return; }

  document.querySelectorAll('.os-panel').forEach(p => p.style.display = 'none');
  allResults.classList.add('active');
  allResults.innerHTML = '';
  let totalMatches = 0;

  Object.entries(data).forEach(([key, d]) => {
    const matches = [];
    d.categories.forEach(cat => {
      cat.shortcuts.forEach(s => {
        const keysText = s.keys.join(' ').toLowerCase();
        const descText = s.desc.replace(/<[^>]*>/g, '').toLowerCase();
        if (keysText.includes(q) || descText.includes(q)) {
          matches.push({ ...s, catName: cat.name, catIcon: cat.icon });
        }
      });
    });
    if (!matches.length) return;
    totalMatches += matches.length;

    const section = document.createElement('div');
    section.innerHTML = `
      <div class="os-section-header">
        <div class="os-accent-dot" style="background:${d.accent}"></div>
        <span class="os-section-title">${d.icon} ${d.label}</span>
        <div class="os-section-line"></div>
        <span style="font-size:.7rem;color:var(--text-3)">${matches.length}</span>
      </div>
      ${groupByCategory(matches, q)}
    `;
    allResults.appendChild(section);
  });

  if (!totalMatches) {
    allResults.innerHTML = `<div class="empty-state visible">
      <div class="empty-icon">🔍</div>
      <div class="empty-title">Aucun résultat</div>
      <div class="empty-sub">Essayez d'autres mots-clés</div>
    </div>`;
  }

  searchCount.textContent = totalMatches;
  searchCount.classList.toggle('visible', totalMatches > 0);
  searchBannerText.innerHTML = `Recherche : <strong>"${escapeRegex(q)}"</strong> — ${totalMatches} résultat${totalMatches > 1 ? 's' : ''}`;
  searchBanner.classList.add('visible');
}

function groupByCategory(items, q) {
  const groups = {};
  items.forEach(item => {
    const key = item.catIcon + ' ' + item.catName;
    if (!groups[key]) groups[key] = [];
    groups[key].push(item);
  });
  return Object.entries(groups).map(([label, items]) => `
    <div class="category-section">
      <div class="category-header">
        <span class="category-icon">${label.split(' ')[0]}</span>
        <span class="category-name">${label.slice(label.indexOf(' ') + 1)}</span>
        <span class="category-count">${items.length}</span>
      </div>
      ${items.map(s => shortcutRowHTML(s, q)).join('')}
    </div>
  `).join('');
}

function clearSearch() {
  searchInput.value = '';
  searchCount.classList.remove('visible');
  searchShortcut.classList.remove('hidden');
  searchBanner.classList.remove('visible');
  allResults.classList.remove('active');
  allResults.innerHTML = '';
  document.querySelectorAll('.os-panel').forEach(p => p.classList.toggle('active', p.id === `panel-${activeTab}`));
  document.querySelectorAll('.os-panel').forEach(p => p.style.display = '');
}

clearSearchBtn.addEventListener('click', clearSearch);

// Ctrl+K shortcut
document.addEventListener('keydown', e => {
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    searchInput.focus();
    searchInput.select();
  }
  if (e.key === 'Escape' && document.activeElement === searchInput) {
    clearSearch();
    searchInput.blur();
  }
});

// Init
renderTabs();
renderPanels();
