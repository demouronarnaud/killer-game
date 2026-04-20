import { useState, useEffect } from "react";

// ===================== TRADUCTIONS =====================
const T = {
  fr: {
    subtitle: "jeu de société",
    players: "Joueurs", addPlayerPlaceholder: "Nom du joueur...",
    forbiddenWords: "Mots interdits", randomWords: "Mots aléatoires (recommandé)", customWords: "Mots personnalisés",
    addWordPlaceholder: "Mot interdit...", wordsPerPlayer: "Éléments par joueur :",
    gameMode: "Mode de jeu",
    modeWords: "🗣 Faire dire un mot",
    modeActions: "🎭 Faire faire une action",
    modeMixed: "🎲 Mode mixte (mot ou action)",
    actionsTheme: "Thème d'actions",
    wordToCauseAction: "ACTION À FAIRE FAIRE",
    wordsToCauseAction: "ACTIONS À FAIRE FAIRE",
    theme: "Thème", themeRandom: "Aléatoire (tout mélangé)",
    organizerCode: "Code organisateur", organizerCodeHint: "Définis un code secret que toi seul connais.",
    useCode: "Utiliser un code organisateur",
    useCodeHint: "Active cette option pour protéger certaines actions par un code.",
    applyCodeTo: "Appliquer le code à :",
    applyCodeLookup: "Consulter le mot d'un joueur",
    applyCodeElim: "Valider les éliminations",
    applyCodeBoth: "Les deux",
    applyCodeNone: "Aucune protection (code informatif seulement)",
    codeRequired: "Tu dois activer au moins une protection.",
    organizerCodePlaceholder: "Ex: 1234...", startGame: "Lancer la partie →",
    minPlayers: "Il faut au moins 2 joueurs !", playerExists: "Ce joueur existe déjà !", wordExists: "Mot déjà ajouté !", defineCode: "Définis un code organisateur !",
    playerN: (n, total) => `Joueur ${n} / ${total}`, allSeen: "Tout le monde a vu sa carte",
    passPhone: "Passe le téléphone à :", memorizePass: "Mémorise et passe au suivant",
    seeMyMission: "Voir ma mission 🔍", yourTarget: "TA CIBLE",
    wordToCause: "MOT À FAIRE DIRE", wordsToCause: "MOTS À FAIRE DIRE",
    memorizeWarning: "Mémorise bien, tu ne pourras plus le revoir.", memorized: "J'ai mémorisé →",
    allReady: "Tout le monde connaît sa mission. Que le jeu commence !", startPlaying: "Commencer le jeu →",
    alive: "en vie", eliminated: "éliminé(s)", eliminateTitle: "Éliminer un joueur",
    eliminateHint: "Code organisateur requis pour valider l'élimination.",
    eliminateHintNoCode: "Clique sur \"Accuser\" puis confirme.",
    accuse: "ACCUSER", confirm: "💀 Confirmer", cancelBtn: "Annuler", eliminatedList: "Éliminés",
    adminAccess: "Accès organisateur", fullView: "Vue complète — tous les joueurs",
    organizerCodeInput: "Code organisateur...", unlock: "🔓", wrongCode: "Code incorrect.",
    playerForgot: "Un joueur a oublié son mot ?", lookupPlayer: "Consulter un joueur →",
    newGame: "Nouvelle partie", backToMenu: "Menu principal",
    adminTitle: "Vue organisateur", lookupTitle: "Consulter un joueur",
    lookupHint: "Sélectionne le joueur, puis entre le code.",
    lookupCodeHint: (n) => `Code pour voir le mot de ${n} :`, codePlaceholder: "Code...",
    mustTarget: "doit faire dire à", memorizeClose: "Mémorise et ferme avant de passer le téléphone.", close: "Fermer ✓",
    inheritedMission: "Mission héritée",
    youEliminated: (k, v) => <><span style={{color:"#e8e0d0",fontWeight:700}}>{k}</span>, tu viens d'éliminer <span style={{color:"#c0392b",fontWeight:700}}>{v}</span>.<br/>Ta nouvelle cible est :</>,
    wordToSay: "Mot à faire dire", wordsToSay: "Mots à faire dire",
    memorizePhone: "Mémorise et passe le téléphone.", memorizedOk: "J'ai mémorisé ✓",
    winner: "VAINQUEUR", winnerText: (n) => `Tous les autres ont été éliminés. ${n} règne sans partage.`, replay: "Rejouer →",
    savedGames: "Parties sauvegardées", saveGame: "Sauvegarder", loadGame: "Charger une partie",
    saveNamePlaceholder: "Nom de la partie...", saveBtn: "Sauvegarder", noSaves: "Aucune partie sauvegardée.",
    load: "Charger", deleteSave: "Supprimer", confirmDelete: "Supprimer cette sauvegarde ?",
    saveSuccess: "Partie sauvegardée !", saveNameRequired: "Donne un nom à la partie !",
    quitConfirmTitle: "Quitter la partie ?", quitSaveFirst: "Veux-tu sauvegarder avant de quitter ?",
    saveAndQuit: "Sauvegarder et quitter", quitWithoutSave: "Quitter sans sauvegarder",
    // Stats, leaderboard, undo
    stats: "Statistiques", leaderboard: "Classement", killsCol: "Éliminations",
    noKillsYet: "Aucune élimination pour le moment.", viewStats: "Voir les stats 📊",
    undo: "Ressusciter",
    undoLast: "Ressusciter",
    nothingToUndo: "Aucune élimination à annuler.",
    undoConfirm: (name) => `Ressusciter ${name} ?`,
    undoSuccess: "Joueur(s) ressuscité(s).",
    noEliminated: "Aucun joueur éliminé.",
    selectToRevive: "Sélectionne un ou plusieurs joueurs à ressusciter :",
    reviveSelected: (n) => n === 1 ? "Ressusciter ce joueur" : `Ressusciter ces ${n} joueurs`,
    selectAtLeastOne: "Sélectionne au moins un joueur.",
    passToPlayer: (name) => `Passe le téléphone à ${name}`,
    tapToReveal: "Touche pour voir ta mission",
    history: "Historique",
    historyTitle: "Historique des parties",
    noHistory: "Aucune partie terminée.",
    playedOn: "Jouée le",
    gameWinner: "Vainqueur",
    gameDuration: "Durée",
    gameEliminations: "éliminations",
    deleteHistory: "Supprimer cet historique ?",
    addPlayerMidGame: "Ajouter un joueur",
    addPlayerMidGameTitle: "Ajouter un joueur en cours",
    addPlayerMidGameHint: "Le nouveau joueur sera inséré dans la chaîne. Il recevra un mot et une cible.",
    newPlayerName: "Nom du nouveau joueur...",
    insertAfter: "Insérer après :",
    addAndShowCard: "Ajouter et voir sa carte",
    newPlayerAdded: "Joueur ajouté !",
    showWord: "👁 Voir",
    hideWord: "🙈 Masquer",
    totalElim: "Total éliminations",
    gameStats: "Stats de la partie",
    eliminationLog: "Journal des éliminations",
    eliminatedBy: "éliminé par",
    // Cancel
    cancel: "Annuler",
    rerollMode: "Mode avec relance de mot",
    rerollHint: "Si activé, chaque joueur peut demander un nouveau mot s'il le trouve trop compliqué.",
    rerollBtn: "🎲 Relancer",
    noMoreRerolls: "Plus de mots disponibles !",
    rerollLimitLabel: "Limite de relances :",
    rerollLimitPlaceholder: "illimité",
    rerollsLeft: (n) => n === 1 ? "1 relance restante" : `${n} relances restantes`,
    noRerollsLeft: "Plus de relances disponibles",
    rerollsUsed: (used, max) => `${used} / ${max} relance${max>1?"s":""}`,
  },
  en: {
    subtitle: "party game",
    players: "Players", addPlayerPlaceholder: "Player name...",
    forbiddenWords: "Forbidden words", randomWords: "Random words (recommended)", customWords: "Custom words",
    addWordPlaceholder: "Forbidden word...", wordsPerPlayer: "Items per player:",
    gameMode: "Game mode",
    modeWords: "🗣 Make them say a word",
    modeActions: "🎭 Make them do an action",
    modeMixed: "🎲 Mixed mode (word or action)",
    actionsTheme: "Actions theme",
    wordToCauseAction: "ACTION TO PROVOKE",
    wordsToCauseAction: "ACTIONS TO PROVOKE",
    theme: "Theme", themeRandom: "Random (all mixed)",
    organizerCode: "Organizer code", organizerCodeHint: "Set a secret code only you know.",
    useCode: "Use an organizer code",
    useCodeHint: "Enable to protect certain actions with a code.",
    applyCodeTo: "Apply code to:",
    applyCodeLookup: "Looking up a player's word",
    applyCodeElim: "Confirming eliminations",
    applyCodeBoth: "Both",
    applyCodeNone: "No protection (code is informational only)",
    codeRequired: "You must enable at least one protection.",
    organizerCodePlaceholder: "E.g. 1234...", startGame: "Start game →",
    minPlayers: "You need at least 2 players!", playerExists: "Player already exists!", wordExists: "Word already added!", defineCode: "Please set an organizer code!",
    playerN: (n, total) => `Player ${n} / ${total}`, allSeen: "Everyone has seen their card",
    passPhone: "Pass the phone to:", memorizePass: "Memorize and pass to next",
    seeMyMission: "See my mission 🔍", yourTarget: "YOUR TARGET",
    wordToCause: "WORD TO MAKE THEM SAY", wordsToCause: "WORDS TO MAKE THEM SAY",
    memorizeWarning: "Memorize carefully, you won't see this again.", memorized: "Got it →",
    allReady: "Everyone knows their mission. Let the game begin!", startPlaying: "Start playing →",
    alive: "alive", eliminated: "eliminated", eliminateTitle: "Eliminate a player",
    eliminateHint: "Organizer code required to confirm elimination.",
    eliminateHintNoCode: "Tap \"Accuse\" then confirm.",
    accuse: "ACCUSE", confirm: "💀 Confirm", cancelBtn: "Cancel", eliminatedList: "Eliminated",
    adminAccess: "Organizer access", fullView: "Full view — all players",
    organizerCodeInput: "Organizer code...", unlock: "🔓", wrongCode: "Wrong code.",
    playerForgot: "A player forgot their word?", lookupPlayer: "Look up a player →",
    newGame: "New game", backToMenu: "Main menu",
    adminTitle: "Organizer view", lookupTitle: "Look up a player",
    lookupHint: "Select a player, then enter the code.",
    lookupCodeHint: (n) => `Code to see ${n}'s word:`, codePlaceholder: "Code...",
    mustTarget: "must make", memorizeClose: "Memorize and close before passing the phone.", close: "Close ✓",
    inheritedMission: "Inherited mission",
    youEliminated: (k, v) => <><span style={{color:"#e8e0d0",fontWeight:700}}>{k}</span>, you just eliminated <span style={{color:"#c0392b",fontWeight:700}}>{v}</span>.<br/>Your new target is:</>,
    wordToSay: "Word to make them say", wordsToSay: "Words to make them say",
    memorizePhone: "Memorize and pass the phone.", memorizedOk: "Got it ✓",
    winner: "WINNER", winnerText: (n) => `Everyone else eliminated. ${n} reigns supreme.`, replay: "Play again →",
    savedGames: "Saved games", saveGame: "Save game", loadGame: "Load a game",
    saveNamePlaceholder: "Game name...", saveBtn: "Save", noSaves: "No saved games.",
    load: "Load", deleteSave: "Delete", confirmDelete: "Delete this save?",
    saveSuccess: "Game saved!", saveNameRequired: "Give the game a name!",
    quitConfirmTitle: "Quit game?", quitSaveFirst: "Save before quitting?",
    saveAndQuit: "Save and quit", quitWithoutSave: "Quit without saving",
    stats: "Stats", leaderboard: "Leaderboard", killsCol: "Kills",
    noKillsYet: "No eliminations yet.", viewStats: "View stats 📊",
    undo: "Revive",
    undoLast: "Revive",
    nothingToUndo: "No elimination to revive.",
    undoConfirm: (name) => `Revive ${name}?`,
    undoSuccess: "Player(s) revived.",
    noEliminated: "No eliminated players.",
    selectToRevive: "Select one or more players to revive:",
    reviveSelected: (n) => n === 1 ? "Revive this player" : `Revive these ${n} players`,
    selectAtLeastOne: "Select at least one player.",
    passToPlayer: (name) => `Pass the phone to ${name}`,
    tapToReveal: "Tap to see your mission",
    history: "History",
    historyTitle: "Game history",
    noHistory: "No finished games.",
    playedOn: "Played on",
    gameWinner: "Winner",
    gameDuration: "Duration",
    gameEliminations: "eliminations",
    deleteHistory: "Delete this history entry?",
    addPlayerMidGame: "Add a player",
    addPlayerMidGameTitle: "Add a player mid-game",
    addPlayerMidGameHint: "The new player will be inserted into the chain and receive a word and target.",
    newPlayerName: "New player name...",
    insertAfter: "Insert after:",
    addAndShowCard: "Add and show card",
    newPlayerAdded: "Player added!",
    showWord: "👁 Show",
    hideWord: "🙈 Hide",
    totalElim: "Total eliminations",
    gameStats: "Game stats",
    eliminationLog: "Elimination log",
    eliminatedBy: "eliminated by",
    cancel: "Cancel",
    rerollMode: "Word reroll mode",
    rerollHint: "If enabled, each player can request a new word if theirs is too hard.",
    rerollBtn: "🎲 Reroll",
    noMoreRerolls: "No more words available!",
    rerollLimitLabel: "Reroll limit:",
    rerollLimitPlaceholder: "unlimited",
    rerollsLeft: (n) => n === 1 ? "1 reroll left" : `${n} rerolls left`,
    noRerollsLeft: "No rerolls left",
    rerollsUsed: (used, max) => `${used} / ${max} reroll${max>1?"s":""}`,
  },
};

// ===================== POOLS DE MOTS PAR THÈME =====================
const THEMES = {
  fr: {
    animals: { label: "🦊 Animaux", words: ["dauphin","hérisson","loutre","marmotte","perroquet","paon","écureuil","cigogne","poulpe","castor","coyote","manchot","renard","hibou","lynx","sanglier","chevreuil","biche","phoque","panda","kangourou","girafe","zèbre","lama","koala","taupe","belette","fouine","vautour","crocodile"] },
    home: { label: "🏠 Maison & objets", words: ["tire-bouchon","thermos","réveil","bougie","torchon","nappe","tablier","louche","plaid","carafe","paillasson","cadenas","lampe","coussin","cendrier","miroir","balai","rouleau","passoire","saladier","éponge","seau","parapluie","valise","brosse","aspirateur","cintre","arrosoir"] },
    food: { label: "🥐 Nourriture", words: ["cornichon","pamplemousse","betterave","artichaut","endive","châtaigne","réglisse","poireau","radis","lardons","rillettes","anchois","gruyère","croissant","madeleine","éclair","tarte","crêpe","rhubarbe","salsifis","topinambour","mangue","grenade","noisette","myrtille","framboise","camembert","raclette"] },
    places: { label: "📍 Lieux", words: ["grenier","véranda","hangar","phare","vignoble","cimetière","ponton","serre","sentier","chapelle","boulangerie","pharmacie","mairie","stade","marché","parking","terrasse","balcon","couloir","sous-sol","observatoire","cave","grotte","plage","port","aéroport","péage","rond-point"] },
    jobs: { label: "👷 Métiers", words: ["plombier","notaire","arbitre","berger","forgeron","apiculteur","pompier","facteur","boulanger","libraire","horloger","fleuriste","boucher","menuisier","maçon","pâtissier","coiffeur","dentiste","bibliothécaire","douanier","bijoutier","ramoneur","architecte","journaliste","photographe"] },
    sport: { label: "⚽ Sport & loisirs", words: ["pétanque","broderie","poterie","équitation","karaoké","jardinage","randonnée","tricot","jonglage","plongée","escalade","cyclisme","golf","boxe","judo","tennis","basket","patinage","aviron","surf","yoga","pilates","fléchettes","bowling","escrime"] },
    tech: { label: "💡 Tech & pratique", words: ["rallonge","télécommande","imprimante","multiprise","chargeur","adaptateur","sonnette","interphone","radiateur","climatiseur","ventilateur","scanner","webcam","clavier","souris","routeur","ampoule","batterie","pile","caméra"] },
  },
  en: {
    animals: { label: "🦊 Animals", words: ["dolphin","hedgehog","otter","groundhog","parrot","peacock","squirrel","stork","octopus","beaver","coyote","penguin","fox","owl","lynx","boar","deer","seal","swan","flamingo","panda","kangaroo","giraffe","zebra","llama","koala","mole","weasel","vulture","crocodile"] },
    home: { label: "🏠 Home & objects", words: ["corkscrew","thermos","alarm clock","candle","dishcloth","tablecloth","apron","ladle","blanket","pitcher","doormat","padlock","lampshade","cushion","ashtray","mirror","broom","rolling pin","colander","salad bowl","sponge","bucket","umbrella","suitcase","brush","vacuum","hanger","watering can"] },
    food: { label: "🥐 Food", words: ["pickle","grapefruit","beetroot","artichoke","chicory","chestnut","liquorice","leek","radish","bacon bits","pâté","anchovy","gruyere","croissant","madeleine","éclair","pie","pancake","rhubarb","salsify","mango","pomegranate","hazelnut","blueberry","raspberry","camembert"] },
    places: { label: "📍 Places", words: ["attic","veranda","hangar","lighthouse","vineyard","cemetery","pontoon","greenhouse","trail","chapel","bakery","pharmacy","town hall","stadium","market","parking lot","terrace","balcony","hallway","basement","observatory","cellar","cave","beach","harbor","airport","toll","roundabout"] },
    jobs: { label: "👷 Jobs", words: ["plumber","notary","referee","shepherd","blacksmith","beekeeper","firefighter","postman","baker","librarian","clockmaker","florist","butcher","carpenter","mason","pastry chef","hairdresser","dentist","customs officer","jeweller","chimney sweep","architect","journalist","photographer"] },
    sport: { label: "⚽ Sport & hobbies", words: ["bowling","embroidery","pottery","horse riding","karaoke","gardening","hiking","knitting","juggling","diving","climbing","cycling","golf","boxing","judo","tennis","basketball","skating","rowing","surfing","yoga","pilates","darts","fencing"] },
    tech: { label: "💡 Tech & practical", words: ["extension cord","remote control","printer","power strip","charger","adapter","doorbell","intercom","radiator","air conditioner","fan","scanner","webcam","keyboard","mouse","router","lightbulb","battery","camera"] },
  }
};

const getAllWords = (lang) => Object.values(THEMES[lang]).flatMap(t => t.words);

// ===================== ACTIONS PAR THÈME =====================
const ACTIONS = {
  fr: {
    social: { label: "🤝 Social", items: [
      "te faire un câlin","te taper dans la main","te dire qu'il/elle t'aime bien",
      "te faire un compliment","te raconter une blague","t'appeler par un surnom",
      "te serrer la main","te saluer de la main","te faire un clin d'œil",
      "te dire bonsoir 3 fois","te demander comment tu vas","te féliciter pour ton style",
    ]},
    simple: { label: "🎯 Simple", items: [
      "s'asseoir à côté de toi","te demander l'heure","te demander un service",
      "t'emprunter un objet","te poser une question sur ta journée",
      "te demander ton avis","se lever et marcher avec toi","te suivre dans une pièce",
      "boire dans le même verre que toi","partager de la nourriture avec toi",
    ]},
    tricky: { label: "🎭 Malin", items: [
      "chanter devant toi","danser 10 secondes","imiter un animal",
      "parler avec un accent","dire 'j'ai faim'","bâiller devant toi",
      "regarder son téléphone en ta présence","enlever ses chaussures",
      "se recoiffer","répéter ce que tu viens de dire","éternuer ou faire semblant",
      "parler de la météo","prendre un selfie avec toi","siffler un air",
    ]},
    drink: { label: "🍷 Apéro", items: [
      "boire une gorgée avec toi","trinquer avec toi","te servir à boire",
      "te proposer de goûter quelque chose","porter un toast",
      "remplir ton verre","ouvrir une bouteille pour toi",
    ]},
    crazy: { label: "🤪 Fou", items: [
      "faire la pompe","faire une pirouette","chanter un refrain à voix haute",
      "danser sur une chanson","faire un high-five à 3 personnes",
      "raconter une anecdote gênante","faire une déclaration solennelle",
      "improviser un poème","faire l'acteur pendant 30 secondes",
    ]},
  },
  en: {
    social: { label: "🤝 Social", items: [
      "hug you","high-five you","tell you they like you",
      "compliment you","tell you a joke","call you a nickname",
      "shake your hand","wave at you","wink at you",
      "say hello 3 times","ask how you are","praise your outfit",
    ]},
    simple: { label: "🎯 Simple", items: [
      "sit next to you","ask you for the time","ask you for a favor",
      "borrow something from you","ask about your day",
      "ask for your opinion","stand up and walk with you","follow you to another room",
      "drink from the same glass as you","share food with you",
    ]},
    tricky: { label: "🎭 Clever", items: [
      "sing in front of you","dance for 10 seconds","imitate an animal",
      "speak with an accent","say 'I'm hungry'","yawn in front of you",
      "check their phone near you","take off their shoes",
      "fix their hair","repeat what you just said","sneeze or pretend to",
      "talk about the weather","take a selfie with you","whistle a tune",
    ]},
    drink: { label: "🍷 Drinks", items: [
      "take a sip with you","clink glasses with you","pour you a drink",
      "offer you a taste","make a toast",
      "refill your glass","open a bottle for you",
    ]},
    crazy: { label: "🤪 Crazy", items: [
      "do a push-up","do a spin","sing a chorus out loud",
      "dance to a song","high-five 3 people",
      "tell an embarrassing story","make a solemn speech",
      "improvise a poem","act dramatically for 30 seconds",
    ]},
  }
};

const getAllActions = (lang) => Object.values(ACTIONS[lang]).flatMap(t => t.items);

const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

const assignUniqueWords = (players, wpp, pool) => {
  const s = shuffle([...new Set(pool)]);
  while (s.length < players.length * wpp) s.push(...shuffle(pool));
  const used = new Set();
  return players.map(() => {
    const words = [];
    for (let j = 0; j < s.length && words.length < wpp; j++) {
      if (!used.has(s[j])) { used.add(s[j]); words.push(s[j]); }
    }
    return words;
  });
};

const vibrate = (pattern) => {
  try { if (navigator.vibrate) navigator.vibrate(pattern); } catch {}
};

// ===================== STYLES =====================
const inputStyle = { flex:1, padding:"10px 14px", background:"#0d0d14", border:"1px solid #1a1a2e", borderRadius:5, color:"#e8e0d0", fontSize:16, fontFamily:"Georgia, serif", outline:"none" };

// ===================== COMPOSANTS =====================
function Btn({ onClick, children, fullWidth, style={} }) {
  return <button onClick={onClick} style={{ padding:"10px 20px", background:"#8b0000", color:"#e8e0d0", border:"none", borderRadius:5, cursor:"pointer", fontSize:14, fontFamily:"Georgia, serif", letterSpacing:1, width:fullWidth?"100%":undefined, transition:"background 0.2s", ...style }}
    onMouseEnter={e=>e.currentTarget.style.background="#a00000"} onMouseLeave={e=>e.currentTarget.style.background="#8b0000"}>{children}</button>;
}
function Section({ title, count, children, action }) {
  return <div style={{marginBottom:24}}>
    <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:14}}>
      <div style={{fontSize:10,letterSpacing:4,color:"#8b0000",textTransform:"uppercase"}}>{title}</div>
      {count!==undefined&&<span style={{fontSize:11,color:"#444",background:"#111",padding:"2px 8px",borderRadius:10,border:"1px solid #222"}}>{count}</span>}
      <div style={{flex:1,height:1,background:"#1a1a2e"}}/>
      {action}
    </div>{children}</div>;
}
function Row({ children }) { return <div style={{display:"flex",gap:8,marginBottom:10}}>{children}</div>; }
function TagList({ items, onRemove }) {
  if (!items.length) return null;
  return <div style={{display:"flex",flexWrap:"wrap",gap:6,marginBottom:8}}>
    {items.map(item=><span key={item} style={{display:"flex",alignItems:"center",gap:6,background:"#111",border:"1px solid #222",padding:"4px 10px",borderRadius:4,fontSize:13,color:"#ccc"}}>
      {item}<span onClick={()=>onRemove(item)} style={{color:"#555",cursor:"pointer",fontSize:15,lineHeight:1}}>×</span>
    </span>)}</div>;
}
function Toggle({ checked, onChange }) {
  return <div onClick={onChange} style={{width:40,height:22,borderRadius:11,background:checked?"#8b0000":"#222",position:"relative",cursor:"pointer",transition:"background 0.2s",flexShrink:0,border:"1px solid #333"}}>
    <div style={{position:"absolute",top:2,left:checked?18:2,width:16,height:16,borderRadius:8,background:"#e8e0d0",transition:"left 0.2s"}}/></div>;
}
function Popup({ children, zIndex=900, border="#333", onClose }) {
  return <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.93)",zIndex,display:"flex",alignItems:"center",justifyContent:"center",padding:20}}>
    <div style={{position:"relative",background:"#0f0f18",border:`1px solid ${border}`,borderRadius:12,padding:28,maxWidth:440,width:"100%",maxHeight:"88vh",overflowY:"auto"}}>
      {onClose && <button onClick={onClose} aria-label="Close" style={{position:"absolute",top:10,right:10,background:"rgba(0,0,0,0.3)",border:"1px solid #333",borderRadius:"50%",width:32,height:32,color:"#888",cursor:"pointer",fontSize:16,lineHeight:1,display:"flex",alignItems:"center",justifyContent:"center",zIndex:2,fontFamily:"Georgia,serif"}}>✕</button>}
      {children}
    </div>
  </div>;
}
function PopupHeader({ title }) {
  return <>
    <div style={{display:"flex",alignItems:"center",marginBottom:20,paddingRight:30}}>
      <div style={{fontSize:11,letterSpacing:4,color:"#8b0000",textTransform:"uppercase"}}>{title}</div>
    </div>
    <div style={{height:1,background:"#1a1a2e",marginBottom:20}}/>
  </>;
}

// ===================== CARTE AVEC ANIMATION FLIP =====================
function FlippingCard({ player, target, words, wordsPerPlayer, t, onDone, isInheritPopup, onReroll, rerollsUsed, rerollLimit, gameMode }) {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    if (flipped) return;
    setFlipped(true);
    vibrate(30);
  };

  return (
    <div style={{ perspective: 1200, width: "100%", minHeight: 340 }}>
      <div
        onClick={!flipped ? handleFlip : undefined}
        style={{
          position: "relative",
          width: "100%",
          minHeight: 340,
          transformStyle: "preserve-3d",
          transition: "transform 0.9s cubic-bezier(0.4, 0.0, 0.2, 1)",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          cursor: !flipped ? "pointer" : "default",
        }}
      >
        {/* FRONT */}
        <div style={{
          position: "absolute", inset: 0, backfaceVisibility: "hidden",
          background: "linear-gradient(145deg, #1a0808 0%, #0f0f18 60%, #0a0a12 100%)",
          border: "1px solid #333", borderRadius: 12, padding: 28,
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          boxShadow: "0 8px 40px rgba(139,0,0,0.3), inset 0 0 60px rgba(139,0,0,0.08)",
        }}>
          <div style={{ fontSize: 56, marginBottom: 20, opacity: 0.6 }}>🗡</div>
          <div style={{ fontSize: 30, fontWeight: 900, marginBottom: 24, color: "#e8e0d0", textAlign: "center" }}>{player}</div>
          <div style={{ fontSize: 11, letterSpacing: 3, color: "#8b0000", marginBottom: 14, textTransform: "uppercase" }}>{t.seeMyMission.replace("🔍","").trim()}</div>
          <div style={{ padding: "10px 20px", border: "1px solid #8b0000", borderRadius: 5, color: "#c88", fontSize: 13, letterSpacing: 1 }}>
            {t.seeMyMission}
          </div>
        </div>

        {/* BACK */}
        <div style={{
          position: "absolute", inset: 0, backfaceVisibility: "hidden",
          transform: "rotateY(180deg)",
          background: "linear-gradient(145deg, #0f0f18 0%, #1a0505 100%)",
          border: "1px solid #8b0000", borderRadius: 12, padding: 28,
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          boxShadow: "0 8px 40px rgba(139,0,0,0.5)",
        }}>
          <div style={{ fontSize: 11, letterSpacing: 4, color: "#8b0000", marginBottom: 16 }}>{t.yourTarget}</div>
          <div style={{ fontSize: 34, fontWeight: 900, marginBottom: 20, color: "#c0392b", textAlign: "center" }}>🗡 {target}</div>
          <div style={{ fontSize: 11, letterSpacing: 4, color: "#666", marginBottom: 12 }}>
            {gameMode === "actions"
              ? (wordsPerPlayer === 1 ? t.wordToCauseAction : t.wordsToCauseAction)
              : (wordsPerPlayer === 1 ? t.wordToCause : t.wordsToCause)}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: "center", marginBottom: 16 }}>
            {words.map((w, i) => {
              const limitReached = rerollLimit != null && rerollsUsed >= rerollLimit;
              return (
                <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                  <span style={{
                    background: "#1a0505", border: "1px solid #8b0000",
                    padding: wordsPerPlayer === 1 ? "10px 22px" : "6px 14px",
                    borderRadius: 3, fontSize: wordsPerPlayer === 1 ? 24 : 14,
                    color: "#e8a0a0", letterSpacing: 1,
                    fontWeight: wordsPerPlayer === 1 ? 700 : 400,
                  }}>"{w}"</span>
                  {onReroll && (
                    <button
                      onClick={(e) => { e.stopPropagation(); if (!limitReached) onReroll(i); }}
                      disabled={limitReached}
                      style={{
                        background: "transparent",
                        border: `1px solid ${limitReached ? "#333" : "#555"}`,
                        color: limitReached ? "#444" : "#888",
                        padding: "4px 12px", borderRadius: 4,
                        cursor: limitReached ? "not-allowed" : "pointer",
                        fontSize: 11, fontFamily: "Georgia, serif",
                        opacity: limitReached ? 0.5 : 1,
                      }}
                    >
                      {t.rerollBtn}
                      {rerollLimit != null && <span style={{ marginLeft: 6, color: "#666" }}>({t.rerollsUsed(rerollsUsed, rerollLimit)})</span>}
                    </button>
                  )}
                </div>
              );
            })}
            {onReroll && rerollLimit == null && (
              <div style={{ fontSize: 10, color: "#555", marginTop: -4 }}>∞ {t.rerollLimitPlaceholder}</div>
            )}
          </div>
          <p style={{ fontSize: 11, color: "#555", marginBottom: 16, textAlign: "center" }}>{t.memorizeWarning}</p>
          <Btn onClick={onDone}>{isInheritPopup ? t.memorizedOk : t.memorized}</Btn>
        </div>
      </div>
    </div>
  );
}

// ===================== APP =====================
export default function KillerGame() {
  const [lang, setLang] = useState("fr");
  const t = T[lang];
  const themes = THEMES[lang];

  const [screen, setScreen] = useState("setup");
  const [playerInput, setPlayerInput] = useState("");
  const [players, setPlayers] = useState([]);
  const [wordInput, setWordInput] = useState("");
  const [customWords, setCustomWords] = useState([]);
  const [useRandomWords, setUseRandomWords] = useState(true);
  const [selectedTheme, setSelectedTheme] = useState("random"); // "random" ou clé d'un thème
  const [gameMode, setGameMode] = useState("words"); // "words" | "actions" | "mixed"
  const [selectedActionTheme, setSelectedActionTheme] = useState("random");
  const [wordsPerPlayer, setWordsPerPlayer] = useState(1);
  const [allowReroll, setAllowReroll] = useState(false);
  const [rerollLimit, setRerollLimit] = useState(""); // "" = illimité, sinon nombre
  const [rerollCounts, setRerollCounts] = useState({}); // { playerName: count }
  const [usedWords, setUsedWords] = useState([]); // all words currently in play, to avoid duplicates on reroll
  const [organizerCode, setOrganizerCode] = useState("");
  const [useCode, setUseCode] = useState(true); // default: on (retrocompat)
  const [codeScope, setCodeScope] = useState("both"); // "lookup" | "elim" | "both"
  const [assignments, setAssignments] = useState([]);
  const [currentReveal, setCurrentReveal] = useState(0);
  const [showCard, setShowCard] = useState(false);
  const [eliminatedPlayers, setEliminatedPlayers] = useState([]); // [string]
  const [eliminationLog, setEliminationLog] = useState([]); // [{victim, killer, words, timestamp, previousState}]
  const [accuseMode, setAccuseMode] = useState(null); // name of accused
  const [accuseCodeInput, setAccuseCodeInput] = useState("");
  const [accuseError, setAccuseError] = useState(false);
  const [activeAssignments, setActiveAssignments] = useState([]);
  const [winner, setWinner] = useState(null);
  const [flashMsg, setFlashMsg] = useState("");

  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [adminInput, setAdminInput] = useState("");
  const [adminError, setAdminError] = useState(false);
  const [lookupMode, setLookupMode] = useState(false);
  const [lookupSelected, setLookupSelected] = useState("");
  const [lookupInput, setLookupInput] = useState("");
  const [lookupError, setLookupError] = useState(false);
  const [lookupResult, setLookupResult] = useState(null);
  const [inheritPopup, setInheritPopup] = useState(null);

  const [savedGames, setSavedGames] = useState({});
  const [showSavePanel, setShowSavePanel] = useState(false);
  const [showLoadPanel, setShowLoadPanel] = useState(false);
  const [saveName, setSaveName] = useState("");
  const [quitPopup, setQuitPopup] = useState(false);
  const [confirmDeleteName, setConfirmDeleteName] = useState(null);

  // Stats & undo
  const [showStatsPanel, setShowStatsPanel] = useState(false);
  const [confirmUndo, setConfirmUndo] = useState(false);
  const [selectedForRevive, setSelectedForRevive] = useState([]);
  // Passage entre joueurs (assign)
  const [waitingForNext, setWaitingForNext] = useState(false);
  // Historique des parties terminees
  const [gameHistory, setGameHistory] = useState([]);
  const [showHistoryPanel, setShowHistoryPanel] = useState(false);
  const [confirmDeleteHistoryIdx, setConfirmDeleteHistoryIdx] = useState(null);
  const [gameStartTime, setGameStartTime] = useState(null);
  // Ajout joueur en cours
  const [showAddPlayerPopup, setShowAddPlayerPopup] = useState(false);
  const [newPlayerName, setNewPlayerName] = useState("");
  const [insertAfterPlayer, setInsertAfterPlayer] = useState("");
  const [midGameNewCard, setMidGameNewCard] = useState(null); // pour afficher la carte du nouveau joueur
  // Affichage du mot a cote du nom (pendant le jeu)
  const [shownWordFor, setShownWordFor] = useState(null); // player name currently showing word
  const [showWordCodeInput, setShowWordCodeInput] = useState("");
  const [showWordError, setShowWordError] = useState(false);

  const flash = (msg) => { setFlashMsg(msg); setTimeout(()=>setFlashMsg(""),2500); };

  const addPlayer = () => {
    const name = playerInput.trim(); if (!name) return;
    if (players.includes(name)) { flash(t.playerExists); return; }
    setPlayers([...players, name]); setPlayerInput("");
  };
  const addWord = () => {
    const w = wordInput.trim().toLowerCase(); if (!w) return;
    if (customWords.includes(w)) { flash(t.wordExists); return; }
    setCustomWords([...customWords, w]); setWordInput("");
  };

  const getWordPool = () => {
    const wordsPool = selectedTheme === "random"
      ? getAllWords(lang)
      : (themes[selectedTheme]?.words || getAllWords(lang));
    const actionsPool = selectedActionTheme === "random"
      ? getAllActions(lang)
      : (ACTIONS[lang][selectedActionTheme]?.items || getAllActions(lang));

    if (gameMode === "words") return wordsPool;
    if (gameMode === "actions") return actionsPool;
    // mixed: mix 50/50
    return [...wordsPool, ...actionsPool];
  };

  // Code scope helpers
  const codeNeededForElim = () => useCode && (codeScope === "elim" || codeScope === "both");
  const codeNeededForLookup = () => useCode && (codeScope === "lookup" || codeScope === "both");

  const startGame = () => {
    if (players.length < 2) { flash(t.minPlayers); return; }
    if (useCode && !organizerCode.trim()) { flash(t.defineCode); return; }
    const sp = shuffle(players);
    const pool = getWordPool();
    const wg = useRandomWords
      ? assignUniqueWords(sp, wordsPerPlayer, pool)
      : sp.map((_,i) => [...new Set([...customWords,...shuffle(pool)])].slice(i*wordsPerPlayer, i*wordsPerPlayer+wordsPerPlayer));
    const assigns = sp.map((player,i) => ({ player, target:sp[(i+1)%sp.length], words:wg[i], id:i }));
    const buildOrder = (list) => {
      for (let a=0; a<200; a++) {
        const o = shuffle(list.map(x=>x.player)); let ok=true;
        for (let i=0; i<o.length-1; i++) { const c=list.find(x=>x.player===o[i]); if(c&&c.target===o[i+1]){ok=false;break;} }
        if(ok) return o;
      }
      return list.map(x=>x.player);
    };
    const ordered = buildOrder(assigns).map(n => assigns.find(a=>a.player===n));
    // Track all words in play to avoid duplicates on reroll
    const allUsed = assigns.flatMap(a => a.words);
    setUsedWords(allUsed);
    setRerollCounts({}); // reset compteurs au démarrage
    setAssignments(ordered);
    setActiveAssignments(assigns.map(a=>({...a})));
    setCurrentReveal(0); setShowCard(false);
    setEliminatedPlayers([]); setEliminationLog([]); setWinner(null);
    setGameStartTime(new Date().toISOString());
    setWaitingForNext(false);
    setScreen("assign");
  };

  const getRerollLimitNumber = () => {
    const n = parseInt(rerollLimit, 10);
    return (!isNaN(n) && n > 0) ? n : null; // null = illimité
  };

  const getRerollsUsed = (playerName) => rerollCounts[playerName] || 0;

  const canReroll = (playerName) => {
    const limit = getRerollLimitNumber();
    if (limit === null) return true;
    return getRerollsUsed(playerName) < limit;
  };

  // --- Reroll d'un mot pour le joueur courant pendant la phase assign ---
  const rerollWord = (wordIndex) => {
    const playerName = assignments[currentReveal].player;
    if (!canReroll(playerName)) { flash(t.noRerollsLeft); return; }
    const pool = getWordPool();
    const available = pool.filter(w => !usedWords.includes(w));
    if (available.length === 0) { flash(t.noMoreRerolls); return; }
    const newWord = available[Math.floor(Math.random() * available.length)];
    const oldWord = assignments[currentReveal].words[wordIndex];

    // Update assignments (revealed order)
    const newAssignments = [...assignments];
    const newWords = [...newAssignments[currentReveal].words];
    newWords[wordIndex] = newWord;
    newAssignments[currentReveal] = { ...newAssignments[currentReveal], words: newWords };
    setAssignments(newAssignments);

    // Update activeAssignments (by player name, same update)
    setActiveAssignments(active => active.map(a =>
      a.player === playerName ? { ...a, words: newWords } : a
    ));

    // Increment reroll count for this player
    setRerollCounts(c => ({ ...c, [playerName]: (c[playerName] || 0) + 1 }));

    // Update usedWords pool
    setUsedWords(u => [...u.filter(w => w !== oldWord), newWord]);
    vibrate(30);
  };

  // --- Elimination avec code ---
  const startAccuse = (playerName) => {
    // Si le code n'est pas requis pour les éliminations, on entre juste en "mode accuser"
    // qui affichera un bouton Confirmer simple
    setAccuseMode(playerName);
    setAccuseCodeInput("");
    setAccuseError(false);
  };

  const cancelAccuse = () => {
    setAccuseMode(null);
    setAccuseCodeInput("");
    setAccuseError(false);
  };

  const confirmElimination = () => {
    if (codeNeededForElim() && accuseCodeInput.trim() !== organizerCode.trim()) {
      setAccuseError(true);
      setTimeout(() => setAccuseError(false), 1500);
      return;
    }
    eliminatePlayer(accuseMode);
  };

  const eliminatePlayer = (name) => {
    const killer = activeAssignments.find(a => a.target === name);
    const victim = activeAssignments.find(a => a.player === name);
    const newActive = activeAssignments.filter(a => a.player !== name);

    // Snapshot pour undo
    const snapshot = {
      activeAssignments: activeAssignments.map(a => ({...a, words: [...a.words]})),
      eliminatedPlayers: [...eliminatedPlayers],
      winner, screen,
    };

    let updated = newActive;
    let popup = null;
    if (killer && victim) {
      updated = newActive.map(a =>
        a.player === killer.player
          ? {...a, target: victim.target, words: [...a.words, ...victim.words]}
          : a
      );
      popup = {
        killerName: killer.player,
        eliminatedName: name,
        newTarget: victim.target,
        inheritedWords: victim.words
      };
    }

    // Journal pour stats
    const logEntry = {
      victim: name,
      killer: killer ? killer.player : null,
      words: victim ? victim.words : [],
      timestamp: new Date().toISOString(),
      snapshot,
    };

    // Vibration dramatique
    vibrate([100, 50, 200, 50, 100]);

    setEliminationLog(log => [...log, logEntry]);
    setEliminatedPlayers(p => [...p, name]);
    setActiveAssignments(updated);
    cancelAccuse();

    if (updated.length === 1) {
      setWinner(updated[0].player);
      // Save to history
      const historyEntry = {
        winner: updated[0].player,
        players: [...players],
        eliminationLog: [...eliminationLog, logEntry],
        startedAt: gameStartTime,
        endedAt: new Date().toISOString(),
        language: lang,
      };
      setGameHistory(h => [historyEntry, ...h]);
      setScreen("gameover");
      return;
    }
    setInheritPopup(popup);
  };

  const undoLastElimination = () => {
    if (eliminationLog.length === 0) { flash(t.nothingToUndo); return; }
    const last = eliminationLog[eliminationLog.length - 1];
    setActiveAssignments(last.snapshot.activeAssignments);
    setEliminatedPlayers(last.snapshot.eliminatedPlayers);
    setWinner(last.snapshot.winner);
    setScreen(last.snapshot.screen);
    setEliminationLog(log => log.slice(0, -1));
    setInheritPopup(null);
    setConfirmUndo(false);
    setSelectedForRevive([]);
    flash(t.undoSuccess);
    vibrate(50);
  };

  // Ajouter un joueur en cours de partie : inserer dans la chaine apres un joueur choisi
  const addPlayerMidGame = () => {
    const name = newPlayerName.trim();
    if (!name) { flash(t.saveNameRequired); return; }
    if (players.includes(name) || activeAssignments.some(a => a.player === name) || eliminatedPlayers.includes(name)) {
      flash(t.playerExists); return;
    }
    if (!insertAfterPlayer) { flash(t.selectAtLeastOne); return; }

    // Trouver un mot libre pour le nouveau joueur
    const pool = getWordPool();
    const available = pool.filter(w => !usedWords.includes(w));
    const newWords = [];
    for (let i = 0; i < wordsPerPlayer; i++) {
      if (available.length === 0) break;
      const idx = Math.floor(Math.random() * available.length);
      newWords.push(available[idx]);
      available.splice(idx, 1);
    }
    if (newWords.length === 0) { flash(t.noMoreRerolls); return; }

    // Inserer dans la chaine : le joueur avant pointe vers le nouveau, le nouveau pointe vers l'ancienne cible
    const insertAfterEntry = activeAssignments.find(a => a.player === insertAfterPlayer);
    if (!insertAfterEntry) return;

    const oldTarget = insertAfterEntry.target;
    const newEntry = {
      player: name,
      target: oldTarget,
      words: newWords,
      id: Date.now(),
    };

    const updated = activeAssignments.map(a =>
      a.player === insertAfterPlayer ? { ...a, target: name } : a
    );
    updated.push(newEntry);

    setActiveAssignments(updated);
    setPlayers([...players, name]);
    setUsedWords(u => [...u, ...newWords]);
    setNewPlayerName("");
    setInsertAfterPlayer("");
    setShowAddPlayerPopup(false);
    setMidGameNewCard(newEntry); // declenche l'affichage de la carte pour le nouveau joueur
    flash(t.newPlayerAdded);
    vibrate(30);
  };

  // Verifie le code pour afficher le mot d'un joueur dans la liste
  const requestShowWord = (playerName) => {
    if (!codeNeededForLookup()) {
      setShownWordFor(playerName);
      return;
    }
    // Sinon on demande le code via un mini input
    setShownWordFor(playerName);
    setShowWordCodeInput("");
    setShowWordError(false);
  };

  const validateShowWordCode = () => {
    if (showWordCodeInput.trim() === organizerCode.trim()) {
      setShowWordCodeInput("");
      setShowWordError(false);
      // shownWordFor reste, ce qui revele le mot
    } else {
      setShowWordError(true);
      setTimeout(() => setShowWordError(false), 1500);
      setShowWordCodeInput("");
      setShownWordFor(null);
    }
  };

  // Ressuscite un ou plusieurs joueurs selectionnes
  const revivePlayers = (playerNames) => {
    if (!playerNames || playerNames.length === 0) { flash(t.selectAtLeastOne); return; }

    // Recupere tous les logs concernes (par ordre chronologique) pour reconstituer l'etat
    // On repart de l'etat actuel et on "annule" chaque elimination concernee
    let newActive = activeAssignments.map(a => ({...a, words: [...a.words]}));
    let newEliminated = [...eliminatedPlayers];
    let newLog = [...eliminationLog];
    let newWinner = winner;
    let newScreen = screen;

    // Pour chaque joueur a ressuciter, on retrouve son log et on annule proprement
    // L'ordre d'annulation importe : on annule du plus recent au plus ancien pour que les chaines (cible heritee) se reconstituent
    const sortedNames = [...playerNames].sort((a, b) => {
      const idxA = newLog.findIndex(l => l.victim === a);
      const idxB = newLog.findIndex(l => l.victim === b);
      return idxB - idxA; // du plus recent au plus ancien
    });

    for (const name of sortedNames) {
      const logIdx = newLog.findIndex(l => l.victim === name);
      if (logIdx === -1) continue;

      // Si on annule une elimination qui a ete faite APRES une autre qu'on ressuscite,
      // le snapshot n'est plus valide. On reconstruit manuellement.
      const logEntry = newLog[logIdx];
      const originalAssignment = logEntry.snapshot.activeAssignments.find(a => a.player === name);
      const killerEntry = logEntry.snapshot.activeAssignments.find(a => a.target === name);

      if (!originalAssignment) continue;

      // On remet le joueur dans activeAssignments avec sa cible et ses mots d'origine
      newActive = newActive.map(a => {
        // Le killer doit recuperer sa cible originale (= le ressuscite)
        if (killerEntry && a.player === killerEntry.player) {
          // on lui retire les mots qu'il avait herites du ressuscite
          const wordsToRemove = originalAssignment.words;
          const filteredWords = a.words.filter(w => !wordsToRemove.includes(w));
          return { ...a, target: name, words: filteredWords };
        }
        return a;
      });

      // Ajouter le ressuscite avec sa config d'origine
      newActive.push({
        player: name,
        target: originalAssignment.target,
        words: [...originalAssignment.words],
        id: originalAssignment.id,
      });

      newEliminated = newEliminated.filter(p => p !== name);
      newLog = newLog.filter((_, i) => i !== logIdx);
    }

    // Si on etait en gameover mais qu'on ressuscite des gens, on revient en jeu
    if (newActive.length > 1 && newScreen === "gameover") {
      newScreen = "playing";
      newWinner = null;
    }

    setActiveAssignments(newActive);
    setEliminatedPlayers(newEliminated);
    setEliminationLog(newLog);
    setWinner(newWinner);
    setScreen(newScreen);
    setInheritPopup(null);
    setConfirmUndo(false);
    setSelectedForRevive([]);
    flash(t.undoSuccess);
    vibrate(50);
  };

  // --- Stats / leaderboard ---
  const leaderboard = () => {
    const kills = {};
    players.forEach(p => { kills[p] = 0; });
    eliminationLog.forEach(log => {
      if (log.killer) kills[log.killer] = (kills[log.killer] || 0) + 1;
    });
    return Object.entries(kills).sort((a,b) => b[1] - a[1]);
  };

  // --- Admin / lookup ---
  const tryAdmin = () => {
    if (adminInput.trim() === organizerCode.trim()) { setAdminError(false); setAdminInput(""); setLookupMode(false); setShowAdminPanel(true); }
    else { setAdminError(true); setTimeout(()=>setAdminError(false),1500); }
  };
  const tryLookup = () => {
    if (!lookupSelected) return;
    if (!codeNeededForLookup() || lookupInput.trim()===organizerCode.trim()) {
      setLookupResult(activeAssignments.find(a=>a.player===lookupSelected)||null);
      setLookupInput(""); setLookupError(false);
    } else {
      setLookupError(true);
      setTimeout(()=>setLookupError(false),1500);
    }
  };
  const closeLookup = () => { setLookupResult(null); setLookupSelected(""); setLookupInput(""); };

  // --- Save/load ---
  const makeSnapshot = () => ({
    lang, players, customWords, useRandomWords, selectedTheme, gameMode, selectedActionTheme, wordsPerPlayer, allowReroll, rerollLimit, rerollCounts, usedWords, organizerCode, useCode, codeScope, gameHistory, gameStartTime,
    assignments, activeAssignments, eliminatedPlayers, eliminationLog, winner, screen,
    currentReveal, savedAt: new Date().toISOString(),
  });

  const saveGame = () => {
    const name = saveName.trim();
    if (!name) { flash(t.saveNameRequired); return false; }
    setSavedGames(g => ({...g, [name]: makeSnapshot()}));
    setSaveName(""); flash(t.saveSuccess); return true;
  };

  const loadGame = (name) => {
    const s = savedGames[name]; if (!s) return;
    setLang(s.lang||"fr"); setPlayers(s.players||[]); setCustomWords(s.customWords||[]);
    setUseRandomWords(s.useRandomWords??true); setSelectedTheme(s.selectedTheme||"random"); setGameMode(s.gameMode||"words"); setSelectedActionTheme(s.selectedActionTheme||"random");
    setWordsPerPlayer(s.wordsPerPlayer||1); setAllowReroll(s.allowReroll||false); setRerollLimit(s.rerollLimit||""); setRerollCounts(s.rerollCounts||{}); setUsedWords(s.usedWords||[]); setOrganizerCode(s.organizerCode||""); setUseCode(s.useCode !== undefined ? s.useCode : true); setCodeScope(s.codeScope || "both"); setGameHistory(s.gameHistory||[]); setGameStartTime(s.gameStartTime||null);
    setAssignments(s.assignments||[]); setActiveAssignments(s.activeAssignments||[]);
    setEliminatedPlayers(s.eliminatedPlayers||[]); setEliminationLog(s.eliminationLog||[]);
    setWinner(s.winner||null); setScreen(s.screen||"setup"); setCurrentReveal(s.currentReveal||0);
    setShowCard(false); cancelAccuse(); setInheritPopup(null);
    setShowLoadPanel(false); setSaveName("");
  };

  const deleteSave = (name) => setConfirmDeleteName(name);
  const confirmDelete = () => {
    setSavedGames(g => { const n={...g}; delete n[confirmDeleteName]; return n; });
    setConfirmDeleteName(null);
  };

  const doQuit = () => { setScreen("setup"); setQuitPopup(false); setSaveName(""); };
  const handleSaveAndQuit = () => { if(saveGame()) doQuit(); };

  const gameStatus = (s) => s.screen==="setup" ? "Setup" : s.screen==="assign" ? "Distribution" : s.screen==="playing" ? `${(s.activeAssignments||[]).length} ${lang==="fr"?"en vie":"alive"}` : lang==="fr"?"Terminée":"Finished";

  const SaveList = ({ onClose }) => (
    <>
      {Object.keys(savedGames).length===0
        ? <p style={{fontSize:13,color:"#555",textAlign:"center",padding:"12px 0"}}>{t.noSaves}</p>
        : Object.keys(savedGames).sort().map(name => {
          const s = savedGames[name];
          return <div key={name} style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 12px",background:"#0a0a12",border:"1px solid #1a1a2e",borderRadius:7,marginBottom:7}}>
            <div style={{minWidth:0,marginRight:8}}>
              <div style={{fontSize:14,color:"#ddd",fontWeight:600,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{name}</div>
              <div style={{fontSize:11,color:"#555"}}>{(s.players||[]).length} {lang==="fr"?"joueurs":"players"} · {gameStatus(s)}</div>
            </div>
            <div style={{display:"flex",gap:6,flexShrink:0}}>
              {onClose && <button onClick={()=>{loadGame(name);onClose();}} style={{background:"#8b0000",color:"#fff",border:"none",padding:"5px 12px",borderRadius:4,cursor:"pointer",fontSize:12,fontFamily:"Georgia,serif"}}>{t.load}</button>}
              <button onClick={()=>deleteSave(name)} style={{background:"#1a0505",border:"1px solid #8b0000",color:"#c88",padding:"5px 9px",borderRadius:4,cursor:"pointer",fontSize:12}}>{t.deleteSave}</button>
            </div>
          </div>;
        })
      }
    </>
  );

  // =================== RENDER ===================
  return (
    <div style={{minHeight:"100vh",background:"#0a0a0f",color:"#e8e0d0",fontFamily:"'Georgia','Times New Roman',serif",position:"relative"}}>
      <div style={{position:"fixed",inset:0,zIndex:0,background:"radial-gradient(ellipse at 20% 50%,#1a0a0a 0%,transparent 60%),radial-gradient(ellipse at 80% 20%,#0a0a1a 0%,transparent 50%)",pointerEvents:"none"}}/>

      {flashMsg && <div style={{position:"fixed",top:20,left:"50%",transform:"translateX(-50%)",background:"#c0392b",color:"#fff",padding:"10px 24px",borderRadius:4,fontFamily:"monospace",zIndex:9999,letterSpacing:1,whiteSpace:"nowrap",boxShadow:"0 4px 20px rgba(192,57,43,0.5)"}}>{flashMsg}</div>}

      {/* INHERIT POPUP avec carte qui se retourne */}
      {inheritPopup && <Popup zIndex={910} border="#8b0000" onClose={()=>setInheritPopup(null)}>
        <div style={{textAlign:"center"}}>
          <div style={{fontSize:11,letterSpacing:4,color:"#8b0000",marginBottom:12,textTransform:"uppercase"}}>{t.inheritedMission}</div>
          <p style={{fontSize:13,color:"#aaa",lineHeight:1.6,marginBottom:20}}>
            {t.youEliminated(inheritPopup.killerName,inheritPopup.eliminatedName)}
          </p>
          <FlippingCard
            player={inheritPopup.killerName}
            target={inheritPopup.newTarget}
            words={inheritPopup.inheritedWords}
            wordsPerPlayer={inheritPopup.inheritedWords.length === 1 ? 1 : 2}
            t={t}
            onDone={() => setInheritPopup(null)}
            isInheritPopup={true}
            gameMode={gameMode}
          />
        </div>
      </Popup>}

      {/* CONFIRM UNDO */}
      {confirmUndo && <Popup zIndex={960} border="#8b0000" onClose={()=>{setConfirmUndo(false);setSelectedForRevive([]);}}>
        <div>
          <div style={{textAlign:"center",marginBottom:20}}>
            <div style={{fontSize:28,marginBottom:8}}>↺</div>
            <div style={{fontSize:11,letterSpacing:4,color:"#8b0000",textTransform:"uppercase"}}>{t.undo}</div>
          </div>

          {eliminatedPlayers.length === 0 ? (
            <p style={{fontSize:13,color:"#555",textAlign:"center",padding:"20px 0"}}>{t.noEliminated}</p>
          ) : (
            <>
              <p style={{fontSize:13,color:"#888",marginBottom:14}}>{t.selectToRevive}</p>
              <div style={{display:"flex",flexDirection:"column",gap:6,marginBottom:20}}>
                {eliminatedPlayers.map(p => {
                  const isSelected = selectedForRevive.includes(p);
                  return (
                    <button
                      key={p}
                      onClick={() => setSelectedForRevive(sel =>
                        isSelected ? sel.filter(x => x !== p) : [...sel, p]
                      )}
                      style={{
                        display:"flex",alignItems:"center",justifyContent:"space-between",
                        padding:"10px 14px",
                        background: isSelected ? "rgba(42,107,58,0.15)" : "#0d0d14",
                        border: `1px solid ${isSelected ? "#2a6b3a" : "#1a1a2e"}`,
                        borderRadius:6, cursor:"pointer",
                        fontFamily:"Georgia,serif", textAlign:"left",
                      }}
                    >
                      <span style={{fontSize:14,color: isSelected ? "#e8e0d0" : "#888"}}>💀 {p}</span>
                      <span style={{fontSize:16,color: isSelected ? "#7ac28f" : "#333"}}>
                        {isSelected ? "☑" : "☐"}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div style={{display:"flex",gap:8}}>
                <button
                  onClick={() => revivePlayers(selectedForRevive)}
                  disabled={selectedForRevive.length === 0}
                  style={{
                    flex:1, padding:"10px",
                    background: selectedForRevive.length > 0 ? "#2a6b3a" : "transparent",
                    border: `1px solid ${selectedForRevive.length > 0 ? "#2a6b3a" : "#333"}`,
                    borderRadius:5,
                    color: selectedForRevive.length > 0 ? "#fff" : "#555",
                    cursor: selectedForRevive.length > 0 ? "pointer" : "not-allowed",
                    fontSize:13, fontFamily:"Georgia,serif",
                  }}
                >
                  ↺ {selectedForRevive.length > 0 ? t.reviveSelected(selectedForRevive.length) : t.undo}
                </button>
                <button
                  onClick={() => {setConfirmUndo(false); setSelectedForRevive([]);}}
                  style={{flex:1,padding:"10px",background:"#8b0000",border:"none",borderRadius:5,color:"#fff",cursor:"pointer",fontSize:13,fontFamily:"Georgia,serif"}}
                >
                  {t.cancel}
                </button>
              </div>
            </>
          )}
        </div>
      </Popup>}

      {/* QUIT */}
      {quitPopup && <Popup zIndex={950} border="#8b0000" onClose={()=>{setQuitPopup(false);setSaveName("");}}>
        <div style={{textAlign:"center"}}>
          <div style={{fontSize:32,marginBottom:12}}>⚠️</div>
          <div style={{fontSize:11,letterSpacing:4,color:"#8b0000",marginBottom:12,textTransform:"uppercase"}}>{t.quitConfirmTitle}</div>
          <p style={{fontSize:14,color:"#aaa",marginBottom:16,lineHeight:1.6}}>{t.quitSaveFirst}</p>
          <input value={saveName} onChange={e=>setSaveName(e.target.value)} onKeyDown={e=>e.key==="Enter"&&handleSaveAndQuit()} placeholder={t.saveNamePlaceholder} style={{...inputStyle,width:"100%",boxSizing:"border-box",marginBottom:12}} autoFocus/>
          <div style={{display:"flex",flexDirection:"column",gap:8}}>
            <Btn onClick={handleSaveAndQuit} fullWidth>{t.saveAndQuit}</Btn>
            <button onClick={doQuit} style={{width:"100%",padding:"10px",background:"transparent",border:"1px solid #555",borderRadius:5,color:"#888",cursor:"pointer",fontSize:13,fontFamily:"Georgia,serif"}}>{t.quitWithoutSave}</button>
            <button onClick={()=>{setQuitPopup(false);setSaveName("");}} style={{width:"100%",padding:"8px",background:"transparent",border:"none",color:"#555",cursor:"pointer",fontSize:13,fontFamily:"Georgia,serif"}}>{t.cancel}</button>
          </div>
        </div>
      </Popup>}

      {/* CONFIRM DELETE SAVE */}
      {confirmDeleteName && <Popup zIndex={1000} border="#8b0000" onClose={()=>setConfirmDeleteName(null)}>
        <div style={{textAlign:"center"}}>
          <div style={{fontSize:28,marginBottom:12}}>🗑️</div>
          <p style={{fontSize:14,color:"#aaa",marginBottom:8}}>{t.confirmDelete}</p>
          <div style={{fontSize:16,fontWeight:700,color:"#e8e0d0",marginBottom:24}}>"{confirmDeleteName}"</div>
          <div style={{display:"flex",gap:8}}>
            <button onClick={()=>setConfirmDeleteName(null)} style={{flex:1,padding:"10px",background:"transparent",border:"1px solid #333",borderRadius:5,color:"#888",cursor:"pointer",fontSize:13,fontFamily:"Georgia,serif"}}>{t.cancel}</button>
            <button onClick={confirmDelete} style={{flex:1,padding:"10px",background:"#8b0000",border:"none",borderRadius:5,color:"#fff",cursor:"pointer",fontSize:13,fontFamily:"Georgia,serif"}}>{t.deleteSave}</button>
          </div>
        </div>
      </Popup>}

      {/* STATS PANEL */}
      {showStatsPanel && <Popup zIndex={880} onClose={()=>setShowStatsPanel(false)}>
        <PopupHeader title={winner ? t.stats : t.gameStats}/>

        {/* Leaderboard */}
        <div style={{fontSize:11,letterSpacing:3,color:"#8b0000",marginBottom:10,textTransform:"uppercase"}}>🏆 {t.leaderboard}</div>
        <div style={{marginBottom:20}}>
          {leaderboard().map(([name, kills], i) => {
            const isAlive = !eliminatedPlayers.includes(name);
            const isWinner = winner === name;
            return (
              <div key={name} style={{
                display:"flex",justifyContent:"space-between",alignItems:"center",
                padding:"10px 14px",
                background: isWinner ? "rgba(139,0,0,0.2)" : "#0a0a12",
                border: `1px solid ${isWinner ? "#8b0000" : "#1a1a2e"}`,
                borderRadius:6, marginBottom:6,
              }}>
                <div style={{display:"flex",alignItems:"center",gap:10}}>
                  <span style={{fontSize:13,color:"#666",width:20}}>#{i+1}</span>
                  <span style={{fontSize:15,fontWeight:600,color: isAlive ? "#e8e0d0" : "#555", textDecoration: isAlive ? "none" : "line-through"}}>
                    {isWinner && "👑 "}{name}
                  </span>
                </div>
                <span style={{fontSize:14,color:"#c0392b",fontWeight:700}}>{kills} 🗡</span>
              </div>
            );
          })}
        </div>

        {/* Elimination log */}
        {eliminationLog.length > 0 && (
          <>
            <div style={{fontSize:11,letterSpacing:3,color:"#8b0000",marginBottom:10,textTransform:"uppercase"}}>📜 {t.eliminationLog}</div>
            <div>
              {eliminationLog.map((log, i) => (
                <div key={i} style={{padding:"8px 12px",background:"#0a0a12",border:"1px solid #1a1a2e",borderRadius:6,marginBottom:6,fontSize:12}}>
                  <div style={{color:"#aaa"}}>
                    <span style={{color:"#c0392b"}}>💀 {log.victim}</span>
                    {log.killer && <> {t.eliminatedBy} <span style={{color:"#e8e0d0",fontWeight:600}}>{log.killer}</span></>}
                  </div>
                  {log.words.length > 0 && (
                    <div style={{marginTop:4, display:"flex",flexWrap:"wrap",gap:4}}>
                      {log.words.map(w => <span key={w} style={{fontSize:11,color:"#c88",fontStyle:"italic"}}>"{w}"</span>)}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </>
        )}
        {eliminationLog.length === 0 && (
          <p style={{fontSize:13,color:"#555",textAlign:"center",padding:"20px 0"}}>{t.noKillsYet}</p>
        )}
      </Popup>}

      {/* SAVE PANEL */}
      {showSavePanel && <Popup zIndex={860} onClose={()=>setShowSavePanel(false)}>
        <PopupHeader title={t.saveGame}/>
        <div style={{display:"flex",gap:8,marginBottom:20}}>
          <input value={saveName} onChange={e=>setSaveName(e.target.value)} onKeyDown={e=>e.key==="Enter"&&(saveGame()&&setShowSavePanel(false))} placeholder={t.saveNamePlaceholder} style={{...inputStyle,flex:1}} autoFocus/>
          <Btn onClick={()=>{if(saveGame())setShowSavePanel(false);}}>{t.saveBtn}</Btn>
        </div>
        {Object.keys(savedGames).length>0 && <>
          <div style={{fontSize:11,letterSpacing:3,color:"#555",marginBottom:10,textTransform:"uppercase"}}>{t.savedGames}</div>
          <SaveList />
        </>}
      </Popup>}

      {/* LOAD PANEL */}
      {showLoadPanel && <Popup zIndex={860} onClose={()=>setShowLoadPanel(false)}>
        <PopupHeader title={t.loadGame}/>
        <SaveList onClose={()=>setShowLoadPanel(false)}/>
      </Popup>}

      {/* HISTORY PANEL */}
      {showHistoryPanel && <Popup zIndex={860} onClose={()=>setShowHistoryPanel(false)}>
        <PopupHeader title={t.historyTitle}/>
        {gameHistory.length === 0 ? (
          <p style={{fontSize:13,color:"#555",textAlign:"center",padding:"20px 0"}}>{t.noHistory}</p>
        ) : (
          gameHistory.map((h, idx) => {
            const start = new Date(h.startedAt);
            const end = new Date(h.endedAt);
            const durationMin = Math.round((end - start) / 60000);
            const durStr = durationMin < 60 ? `${durationMin} min` : `${Math.floor(durationMin/60)}h ${durationMin%60}min`;
            return (
              <div key={idx} style={{padding:"12px 14px",background:"#0a0a12",border:"1px solid #1a1a2e",borderRadius:8,marginBottom:10}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:8,gap:8}}>
                  <div style={{minWidth:0,flex:1}}>
                    <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:4}}>
                      <span style={{fontSize:16}}>👑</span>
                      <span style={{fontSize:16,fontWeight:700,color:"#e8e0d0",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{h.winner}</span>
                    </div>
                    <div style={{fontSize:11,color:"#555"}}>
                      {t.playedOn} {end.toLocaleDateString(h.language==="fr"?"fr-FR":"en-GB",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"})}
                    </div>
                  </div>
                  <button onClick={()=>setConfirmDeleteHistoryIdx(idx)} style={{background:"#1a0505",border:"1px solid #8b0000",color:"#c88",padding:"4px 9px",borderRadius:4,cursor:"pointer",fontSize:11,flexShrink:0}}>🗑</button>
                </div>
                <div style={{fontSize:12,color:"#888"}}>
                  {h.players.length} {h.language==="fr"?"joueurs":"players"} · {durStr} · {h.eliminationLog.length} {t.gameEliminations}
                </div>
                {/* Top 3 killers */}
                <div style={{marginTop:8,display:"flex",flexWrap:"wrap",gap:6}}>
                  {(() => {
                    const kills = {};
                    h.players.forEach(p => { kills[p] = 0; });
                    h.eliminationLog.forEach(l => { if(l.killer) kills[l.killer] = (kills[l.killer]||0)+1; });
                    return Object.entries(kills).sort((a,b)=>b[1]-a[1]).filter(([_,n])=>n>0).slice(0,3).map(([name,n],i)=>(
                      <span key={name} style={{fontSize:11,color:"#888",background:"#111",border:"1px solid #222",padding:"2px 8px",borderRadius:3}}>
                        {i===0?"🥇":i===1?"🥈":"🥉"} {name} · {n}
                      </span>
                    ));
                  })()}
                </div>
              </div>
            );
          })
        )}
      </Popup>}

      {/* DELETE HISTORY CONFIRM */}
      {confirmDeleteHistoryIdx !== null && <Popup zIndex={1000} border="#8b0000" onClose={()=>setConfirmDeleteHistoryIdx(null)}>
        <div style={{textAlign:"center"}}>
          <div style={{fontSize:28,marginBottom:12}}>🗑️</div>
          <p style={{fontSize:14,color:"#aaa",marginBottom:24}}>{t.deleteHistory}</p>
          <div style={{display:"flex",gap:8}}>
            <button onClick={()=>setConfirmDeleteHistoryIdx(null)} style={{flex:1,padding:"10px",background:"transparent",border:"1px solid #333",borderRadius:5,color:"#888",cursor:"pointer",fontSize:13,fontFamily:"Georgia,serif"}}>{t.cancel}</button>
            <button onClick={()=>{setGameHistory(h=>h.filter((_,i)=>i!==confirmDeleteHistoryIdx));setConfirmDeleteHistoryIdx(null);}} style={{flex:1,padding:"10px",background:"#8b0000",border:"none",borderRadius:5,color:"#fff",cursor:"pointer",fontSize:13,fontFamily:"Georgia,serif"}}>{t.deleteSave}</button>
          </div>
        </div>
      </Popup>}

      {/* ADD PLAYER MID-GAME */}
      {showAddPlayerPopup && <Popup zIndex={870} onClose={()=>{setShowAddPlayerPopup(false);setNewPlayerName("");setInsertAfterPlayer("");}}>
        <PopupHeader title={t.addPlayerMidGameTitle}/>
        <p style={{fontSize:12,color:"#666",marginBottom:16,lineHeight:1.5}}>{t.addPlayerMidGameHint}</p>
        <input
          value={newPlayerName}
          onChange={e=>setNewPlayerName(e.target.value)}
          placeholder={t.newPlayerName}
          style={{...inputStyle,width:"100%",boxSizing:"border-box",marginBottom:14}}
          autoFocus
        />
        <div style={{fontSize:11,letterSpacing:2,color:"#666",marginBottom:8,textTransform:"uppercase"}}>{t.insertAfter}</div>
        <div style={{display:"flex",flexWrap:"wrap",gap:6,marginBottom:20,maxHeight:180,overflowY:"auto"}}>
          {activeAssignments.map(a => (
            <button key={a.player} onClick={()=>setInsertAfterPlayer(a.player)} style={{padding:"6px 12px",borderRadius:4,border:"1px solid",borderColor:insertAfterPlayer===a.player?"#8b0000":"#333",background:insertAfterPlayer===a.player?"#8b0000":"#0a0a12",color:insertAfterPlayer===a.player?"#fff":"#aaa",cursor:"pointer",fontSize:13,fontFamily:"Georgia,serif"}}>{a.player}</button>
          ))}
        </div>
        <Btn onClick={addPlayerMidGame} fullWidth>{t.addAndShowCard}</Btn>
      </Popup>}

      {/* MID-GAME NEW CARD - affiche la mission du joueur qui vient d'etre ajoute */}
      {midGameNewCard && <Popup zIndex={910} border="#8b0000" onClose={()=>setMidGameNewCard(null)}>
        <div style={{textAlign:"center"}}>
          <div style={{fontSize:11,letterSpacing:4,color:"#8b0000",marginBottom:12,textTransform:"uppercase"}}>{t.newPlayerAdded}</div>
          <FlippingCard
            player={midGameNewCard.player}
            target={midGameNewCard.target}
            words={midGameNewCard.words}
            wordsPerPlayer={midGameNewCard.words.length === 1 ? 1 : 2}
            t={t}
            onDone={() => setMidGameNewCard(null)}
            isInheritPopup={true}
            gameMode={gameMode}
          />
        </div>
      </Popup>}

      {/* ADMIN FULL */}
      {showAdminPanel && !lookupMode && <Popup zIndex={800} onClose={()=>setShowAdminPanel(false)}>
        <PopupHeader title={t.adminTitle}/>
        {activeAssignments.map(a=><div key={a.player} style={{marginBottom:12,padding:"12px 14px",background:"#0a0a12",border:"1px solid #1a1a2e",borderRadius:8}}>
          <div style={{display:"flex",justifyContent:"space-between",marginBottom:6}}>
            <span style={{fontWeight:700,fontSize:15}}>{a.player}</span>
            <span style={{fontSize:12,color:"#c0392b"}}>→ {a.target}</span>
          </div>
          <div style={{display:"flex",flexWrap:"wrap",gap:4}}>
            {a.words.map(w=><span key={w} style={{background:"#1a0505",border:"1px solid #3a1010",padding:"2px 10px",borderRadius:3,fontSize:12,color:"#c88"}}>"{w}"</span>)}
          </div>
        </div>)}
        {eliminatedPlayers.length>0 && <>
          <div style={{height:1,background:"#1a1a2e",margin:"12px 0"}}/>
          <div style={{fontSize:11,letterSpacing:3,color:"#444",marginBottom:8,textTransform:"uppercase"}}>{t.eliminatedList}</div>
          {eliminatedPlayers.map(p=><div key={p} style={{fontSize:13,color:"#444",textDecoration:"line-through",marginBottom:4}}>💀 {p}</div>)}
        </>}
      </Popup>}

      {/* LOOKUP */}
      {showAdminPanel && lookupMode && <Popup zIndex={800} onClose={()=>{setShowAdminPanel(false);closeLookup();}}>
        <PopupHeader title={t.lookupTitle}/>
        {!lookupResult ? <>
          <p style={{fontSize:13,color:"#666",marginBottom:16,textAlign:"center"}}>{t.lookupHint}</p>
          <div style={{display:"flex",flexWrap:"wrap",gap:8,justifyContent:"center",marginBottom:20}}>
            {activeAssignments.map(a=><button key={a.player} onClick={()=>{
              setLookupSelected(a.player);
              setLookupInput("");
              setLookupError(false);
              // Si pas de code requis, on révèle direct
              if (!codeNeededForLookup()) {
                setLookupResult(activeAssignments.find(x=>x.player===a.player)||null);
              }
            }}
              style={{padding:"8px 16px",borderRadius:5,border:"1px solid",borderColor:lookupSelected===a.player?"#8b0000":"#333",background:lookupSelected===a.player?"#8b0000":"#0a0a12",color:lookupSelected===a.player?"#fff":"#aaa",cursor:"pointer",fontSize:14,fontFamily:"Georgia,serif"}}>{a.player}</button>)}
          </div>
          {lookupSelected && codeNeededForLookup() && <>
            <div style={{fontSize:12,color:"#555",marginBottom:10,textAlign:"center"}}>{t.lookupCodeHint(lookupSelected)}</div>
            <div style={{display:"flex",gap:8,marginBottom:8}}>
              <input value={lookupInput} onChange={e=>{setLookupInput(e.target.value);setLookupError(false);}} onKeyDown={e=>e.key==="Enter"&&tryLookup()} placeholder={t.codePlaceholder} type="password" style={{...inputStyle,borderColor:lookupError?"#8b0000":"#1a1a2e",flex:1}} autoFocus/>
              <Btn onClick={tryLookup}>{t.unlock}</Btn>
            </div>
            {lookupError && <div style={{fontSize:12,color:"#c0392b",textAlign:"center"}}>{t.wrongCode}</div>}
          </>}
        </> : <div style={{textAlign:"center"}}>
          <div style={{fontSize:22,fontWeight:900,marginBottom:6,color:"#e8e0d0"}}>{lookupResult.player}</div>
          <div style={{fontSize:12,color:"#666",marginBottom:20}}>{t.mustTarget} <span style={{color:"#c0392b"}}>{lookupResult.target}</span> :</div>
          <div style={{display:"flex",flexWrap:"wrap",gap:8,justifyContent:"center",marginBottom:28}}>
            {lookupResult.words.map(w=><span key={w} style={{background:"#1a0505",border:"1px solid #8b0000",padding:"10px 20px",borderRadius:3,fontSize:20,color:"#e8a0a0",fontWeight:700}}>"{w}"</span>)}
          </div>
          <p style={{fontSize:11,color:"#555",marginBottom:20}}>{t.memorizeClose}</p>
          <Btn onClick={closeLookup} fullWidth>{t.close}</Btn>
        </div>}
      </Popup>}

      {/* ===================== CONTENU PRINCIPAL ===================== */}
      <div style={{position:"relative",zIndex:1,maxWidth:560,margin:"0 auto",padding:"24px 16px"}}>

        {/* HEADER */}
        <div style={{textAlign:"center",marginBottom:32}}>
          <div style={{display:"flex",justifyContent:"center",gap:6,marginBottom:16}}>
            {["fr","en"].map(l=><button key={l} onClick={()=>setLang(l)} style={{padding:"4px 14px",borderRadius:3,border:"1px solid",borderColor:lang===l?"#8b0000":"#333",background:lang===l?"#8b0000":"transparent",color:lang===l?"#fff":"#666",cursor:"pointer",fontSize:12,letterSpacing:2,fontFamily:"Georgia,serif",textTransform:"uppercase"}}>
              {l==="fr"?"🇫🇷 FR":"🇬🇧 EN"}
            </button>)}
          </div>
          <div style={{fontSize:11,letterSpacing:6,color:"#8b0000",textTransform:"uppercase",marginBottom:8}}>{t.subtitle}</div>
          <h1 style={{fontSize:52,margin:0,fontWeight:900,letterSpacing:-2,color:"#e8e0d0",lineHeight:1,textShadow:"0 0 40px rgba(139,0,0,0.4)"}}>KILLER</h1>
          <div style={{height:2,background:"linear-gradient(90deg,transparent,#8b0000,transparent)",marginTop:12}}/>
        </div>

        {/* SETUP */}
        {screen==="setup" && <div>
          <Section title={t.players} count={players.length}>
            <Row>
              <input value={playerInput} onChange={e=>setPlayerInput(e.target.value)} onKeyDown={e=>e.key==="Enter"&&addPlayer()} placeholder={t.addPlayerPlaceholder} style={inputStyle}/>
              <Btn onClick={addPlayer}>+</Btn>
            </Row>
            <TagList items={players} onRemove={n=>setPlayers(players.filter(p=>p!==n))}/>
          </Section>

          <Section title={t.gameMode}>
            <div style={{display:"flex",flexDirection:"column",gap:6}}>
              {[
                {key:"words", label:t.modeWords},
                {key:"actions", label:t.modeActions},
                {key:"mixed", label:t.modeMixed},
              ].map(opt => (
                <button key={opt.key} onClick={()=>setGameMode(opt.key)} style={{
                  padding:"10px 14px",borderRadius:5,
                  border:"1px solid",borderColor: gameMode===opt.key ? "#8b0000" : "#333",
                  background: gameMode===opt.key ? "rgba(139,0,0,0.15)" : "transparent",
                  color: gameMode===opt.key ? "#e8e0d0" : "#888",
                  cursor:"pointer", fontSize:14, fontFamily:"Georgia,serif",
                  textAlign:"left",
                }}>
                  {gameMode===opt.key ? "● " : "○ "}{opt.label}
                </button>
              ))}
            </div>
          </Section>

          <Section title={t.forbiddenWords}>
            <label style={{display:"flex",alignItems:"center",gap:10,marginBottom:12,cursor:"pointer"}}>
              <Toggle checked={useRandomWords} onChange={()=>setUseRandomWords(!useRandomWords)}/>
              <span style={{fontSize:13,color:"#aaa"}}>{useRandomWords?t.randomWords:t.customWords}</span>
            </label>

            {useRandomWords && (gameMode === "words" || gameMode === "mixed") && (
              <div style={{marginBottom:12}}>
                <div style={{fontSize:11,letterSpacing:2,color:"#666",marginBottom:8,textTransform:"uppercase"}}>{t.theme}</div>
                <div style={{display:"flex",flexWrap:"wrap",gap:6}}>
                  <button onClick={()=>setSelectedTheme("random")} style={{padding:"6px 12px",borderRadius:4,border:"1px solid",borderColor:selectedTheme==="random"?"#8b0000":"#333",background:selectedTheme==="random"?"#8b0000":"transparent",color:selectedTheme==="random"?"#fff":"#888",cursor:"pointer",fontSize:12,fontFamily:"Georgia,serif"}}>🎲 {t.themeRandom}</button>
                  {Object.entries(themes).map(([key, theme]) => (
                    <button key={key} onClick={()=>setSelectedTheme(key)} style={{padding:"6px 12px",borderRadius:4,border:"1px solid",borderColor:selectedTheme===key?"#8b0000":"#333",background:selectedTheme===key?"#8b0000":"transparent",color:selectedTheme===key?"#fff":"#888",cursor:"pointer",fontSize:12,fontFamily:"Georgia,serif"}}>{theme.label}</button>
                  ))}
                </div>
              </div>
            )}

            {useRandomWords && (gameMode === "actions" || gameMode === "mixed") && (
              <div style={{marginBottom:12}}>
                <div style={{fontSize:11,letterSpacing:2,color:"#666",marginBottom:8,textTransform:"uppercase"}}>{t.actionsTheme}</div>
                <div style={{display:"flex",flexWrap:"wrap",gap:6}}>
                  <button onClick={()=>setSelectedActionTheme("random")} style={{padding:"6px 12px",borderRadius:4,border:"1px solid",borderColor:selectedActionTheme==="random"?"#8b0000":"#333",background:selectedActionTheme==="random"?"#8b0000":"transparent",color:selectedActionTheme==="random"?"#fff":"#888",cursor:"pointer",fontSize:12,fontFamily:"Georgia,serif"}}>🎲 {t.themeRandom}</button>
                  {Object.entries(ACTIONS[lang]).map(([key, theme]) => (
                    <button key={key} onClick={()=>setSelectedActionTheme(key)} style={{padding:"6px 12px",borderRadius:4,border:"1px solid",borderColor:selectedActionTheme===key?"#8b0000":"#333",background:selectedActionTheme===key?"#8b0000":"transparent",color:selectedActionTheme===key?"#fff":"#888",cursor:"pointer",fontSize:12,fontFamily:"Georgia,serif"}}>{theme.label}</button>
                  ))}
                </div>
              </div>
            )}

            {!useRandomWords && <>
              <Row>
                <input value={wordInput} onChange={e=>setWordInput(e.target.value)} onKeyDown={e=>e.key==="Enter"&&addWord()} placeholder={t.addWordPlaceholder} style={inputStyle}/>
                <Btn onClick={addWord}>+</Btn>
              </Row>
              <TagList items={customWords} onRemove={w=>setCustomWords(customWords.filter(x=>x!==w))}/>
            </>}
            <div style={{marginTop:12,display:"flex",alignItems:"center",flexWrap:"wrap",gap:6}}>
              <span style={{fontSize:12,color:"#666"}}>{t.wordsPerPlayer}</span>
              {[1,2,3,4,5].map(n=><button key={n} onClick={()=>setWordsPerPlayer(n)} style={{padding:"4px 12px",borderRadius:3,border:"1px solid",borderColor:wordsPerPlayer===n?"#8b0000":"#333",background:wordsPerPlayer===n?"#8b0000":"transparent",color:wordsPerPlayer===n?"#fff":"#888",cursor:"pointer",fontSize:13}}>{n}</button>)}
            </div>
          </Section>

          <Section title={t.rerollMode}>
            <div style={{display:"flex",alignItems:"center",gap:12,flexWrap:"wrap"}}>
              <label style={{display:"flex",alignItems:"center",gap:10,cursor:"pointer"}}>
                <Toggle checked={allowReroll} onChange={()=>setAllowReroll(!allowReroll)}/>
                <span style={{fontSize:13,color:"#aaa"}}>{allowReroll ? (lang==="fr"?"Activé":"Enabled") : (lang==="fr"?"Désactivé":"Disabled")}</span>
              </label>
              {allowReroll && (
                <div style={{display:"flex",alignItems:"center",gap:8}}>
                  <span style={{fontSize:12,color:"#666"}}>{t.rerollLimitLabel}</span>
                  <input
                    type="number"
                    min="1"
                    value={rerollLimit}
                    onChange={e=>setRerollLimit(e.target.value)}
                    placeholder={t.rerollLimitPlaceholder}
                    style={{...inputStyle,width:90,padding:"8px 10px"}}
                  />
                </div>
              )}
            </div>
            <p style={{fontSize:12,color:"#666",marginTop:10,lineHeight:1.5}}>{t.rerollHint}</p>
          </Section>

          <Section title={t.useCode}>
            <label style={{display:"flex",alignItems:"center",gap:10,marginBottom:10,cursor:"pointer"}}>
              <Toggle checked={useCode} onChange={()=>setUseCode(!useCode)}/>
              <span style={{fontSize:13,color:"#aaa"}}>{useCode ? (lang==="fr"?"Activé":"Enabled") : (lang==="fr"?"Désactivé":"Disabled")}</span>
            </label>
            <p style={{fontSize:12,color:"#666",marginBottom:12,lineHeight:1.5}}>{t.useCodeHint}</p>

            {useCode && (
              <>
                <div style={{fontSize:11,letterSpacing:2,color:"#666",marginBottom:8,textTransform:"uppercase"}}>{t.applyCodeTo}</div>
                <div style={{display:"flex",flexDirection:"column",gap:6,marginBottom:14}}>
                  {[
                    {key:"lookup", label:t.applyCodeLookup},
                    {key:"elim", label:t.applyCodeElim},
                    {key:"both", label:t.applyCodeBoth},
                    {key:"none", label:t.applyCodeNone},
                  ].map(opt => (
                    <button key={opt.key} onClick={()=>setCodeScope(opt.key)} style={{
                      padding:"8px 12px",borderRadius:5,
                      border:"1px solid",borderColor: codeScope===opt.key ? "#8b0000" : "#333",
                      background: codeScope===opt.key ? "rgba(139,0,0,0.15)" : "transparent",
                      color: codeScope===opt.key ? "#e8e0d0" : "#888",
                      cursor:"pointer", fontSize:13, fontFamily:"Georgia,serif",
                      textAlign:"left",
                    }}>
                      {codeScope===opt.key ? "● " : "○ "}{opt.label}
                    </button>
                  ))}
                </div>

                <div style={{fontSize:11,letterSpacing:2,color:"#666",marginBottom:8,textTransform:"uppercase"}}>{t.organizerCode}</div>
                <p style={{fontSize:12,color:"#666",marginBottom:10}}>{t.organizerCodeHint}</p>
                <input value={organizerCode} onChange={e=>setOrganizerCode(e.target.value)} placeholder={t.organizerCodePlaceholder} style={{...inputStyle,width:"100%",boxSizing:"border-box"}} type="password"/>
              </>
            )}
          </Section>

          <div style={{display:"flex",gap:8,marginBottom:8}}>
            <button onClick={()=>setShowLoadPanel(true)} style={{flex:1,padding:"10px",background:"transparent",border:"1px solid #333",borderRadius:5,color:"#666",cursor:"pointer",fontSize:13,fontFamily:"Georgia,serif"}}>📂 {t.loadGame}</button>
            <button onClick={()=>setShowSavePanel(true)} style={{flex:1,padding:"10px",background:"transparent",border:"1px solid #333",borderRadius:5,color:"#666",cursor:"pointer",fontSize:13,fontFamily:"Georgia,serif"}}>💾 {t.saveGame}</button>
          </div>
          <button onClick={()=>setShowHistoryPanel(true)} style={{width:"100%",padding:"10px",background:"transparent",border:"1px solid #333",borderRadius:5,color:"#666",cursor:"pointer",fontSize:13,fontFamily:"Georgia,serif",marginBottom:12}}>📜 {t.history} ({gameHistory.length})</button>
          <Btn onClick={startGame} fullWidth>{t.startGame}</Btn>
        </div>}

        {/* ASSIGN — avec carte flip */}
        {screen==="assign" && <div>
          <div style={{textAlign:"center",marginBottom:24}}>
            <div style={{fontSize:12,color:"#666",letterSpacing:2,marginBottom:6}}>
              {currentReveal<assignments.length ? t.playerN(currentReveal+1,assignments.length) : t.allSeen}
            </div>
            <p style={{fontSize:14,color:"#888",margin:0}}>{currentReveal<assignments.length ? t.passPhone : ""}</p>
          </div>

          {currentReveal<assignments.length
            ? (waitingForNext
                ? (
                  <div
                    onClick={() => { setWaitingForNext(false); vibrate(30); }}
                    style={{
                      background: "linear-gradient(145deg, #0a0a12 0%, #1a0a0a 100%)",
                      border: "1px solid #8b0000",
                      borderRadius: 12, padding: 40, textAlign: "center",
                      minHeight: 340,
                      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                      cursor: "pointer",
                      boxShadow: "0 8px 40px rgba(139,0,0,0.3)",
                    }}
                  >
                    <div style={{ fontSize: 56, marginBottom: 24, opacity: 0.4 }}>🤫</div>
                    <div style={{ fontSize: 11, letterSpacing: 4, color: "#8b0000", marginBottom: 14, textTransform: "uppercase" }}>
                      {t.passPhone}
                    </div>
                    <div style={{ fontSize: 34, fontWeight: 900, marginBottom: 32, color: "#e8e0d0", textAlign: "center" }}>
                      {assignments[currentReveal].player}
                    </div>
                    <div style={{
                      padding: "12px 24px", border: "1px solid #8b0000",
                      borderRadius: 5, color: "#c88", fontSize: 13, letterSpacing: 1,
                      background: "rgba(139,0,0,0.1)",
                    }}>
                      👆 {t.tapToReveal}
                    </div>
                  </div>
                )
                : (
                  <FlippingCard
                    key={currentReveal}
                    player={assignments[currentReveal].player}
                    target={assignments[currentReveal].target}
                    words={assignments[currentReveal].words}
                    wordsPerPlayer={wordsPerPlayer}
                    t={t}
                    onDone={() => {
                      vibrate(30);
                      const next = currentReveal + 1;
                      if (next < assignments.length) {
                        setWaitingForNext(true);
                      }
                      setCurrentReveal(next);
                    }}
                    onReroll={allowReroll ? rerollWord : null}
                    rerollsUsed={getRerollsUsed(assignments[currentReveal].player)}
                    rerollLimit={getRerollLimitNumber()}
                    gameMode={gameMode}
                  />
                ))
            : <div style={{textAlign:"center"}}>
                <div style={{fontSize:40,marginBottom:16}}>⚔️</div>
                <p style={{color:"#888",marginBottom:24}}>{t.allReady}</p>
                <Btn onClick={()=>setScreen("playing")} fullWidth>{t.startPlaying}</Btn>
              </div>}
        </div>}

        {/* PLAYING */}
        {screen==="playing" && <div>
          <div style={{display:"flex",justifyContent:"space-between",marginBottom:20,alignItems:"center"}}>
            <div style={{fontSize:12,color:"#666"}}>⚔️ {activeAssignments.length} {t.alive}</div>
            <div style={{fontSize:12,color:"#666"}}>💀 {eliminatedPlayers.length} {t.eliminated}</div>
            <button onClick={()=>setShowStatsPanel(true)} style={{background:"transparent",border:"1px solid #333",borderRadius:4,color:"#888",padding:"4px 10px",fontSize:12,cursor:"pointer",fontFamily:"Georgia,serif"}}>📊 {t.stats}</button>
          </div>

          <Section title={t.eliminateTitle} action={
            eliminationLog.length > 0 ? (
              <button onClick={()=>setConfirmUndo(true)} style={{background:"transparent",border:"1px solid #8b0000",color:"#c88",padding:"3px 10px",borderRadius:4,fontSize:11,cursor:"pointer",fontFamily:"Georgia,serif"}}>↺ {t.undo}</button>
            ) : null
          }>
            <p style={{fontSize:13,color:"#777",marginBottom:14}}>{codeNeededForElim() ? t.eliminateHint : t.eliminateHintNoCode}</p>
            <div style={{display:"flex",flexDirection:"column",gap:8}}>
              {activeAssignments.map(a=><div key={a.player} style={{padding:"10px 14px",background:accuseMode===a.player?"#1a0505":"#0d0d14",border:`1px solid ${accuseMode===a.player?"#8b0000":"#1a1a2e"}`,borderRadius:6,transition:"all 0.2s"}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:8,flexWrap:"wrap"}}>
                  <span style={{fontSize:16,fontWeight:600}}>{a.player}</span>
                  <div style={{display:"flex",gap:6,alignItems:"center"}}>
                    {accuseMode!==a.player && (
                      shownWordFor===a.player ? (
                        <button onClick={()=>{setShownWordFor(null);setShowWordCodeInput("");}} style={{background:"transparent",color:"#888",border:"1px solid #333",padding:"5px 10px",borderRadius:4,cursor:"pointer",fontSize:12}}>{t.hideWord}</button>
                      ) : (
                        <button onClick={()=>requestShowWord(a.player)} style={{background:"transparent",color:"#888",border:"1px solid #333",padding:"5px 10px",borderRadius:4,cursor:"pointer",fontSize:12}}>{t.showWord}</button>
                      )
                    )}
                    {accuseMode===a.player
                      ? <button onClick={cancelAccuse} style={{background:"#222",color:"#aaa",border:"none",padding:"4px 10px",borderRadius:4,cursor:"pointer",fontSize:12}}>✕</button>
                      : <button onClick={()=>startAccuse(a.player)} style={{background:"transparent",color:"#8b0000",border:"1px solid #8b0000",padding:"5px 14px",borderRadius:4,cursor:"pointer",fontSize:12,letterSpacing:1}}>{t.accuse}</button>}
                  </div>
                </div>
                {/* Affichage du mot avec code si necessaire */}
                {shownWordFor===a.player && (
                  <div style={{marginTop:10,paddingTop:10,borderTop:"1px solid #1a1a2e"}}>
                    {codeNeededForLookup() && showWordCodeInput !== "__unlocked__" ? (
                      <>
                        <div style={{fontSize:11,color:"#666",marginBottom:6}}>{t.organizerCodeInput}</div>
                        <div style={{display:"flex",gap:6}}>
                          <input
                            type="password"
                            value={showWordCodeInput === "__unlocked__" ? "" : showWordCodeInput}
                            onChange={e=>{setShowWordCodeInput(e.target.value);setShowWordError(false);}}
                            onKeyDown={e=>{if(e.key==="Enter"){ if(showWordCodeInput.trim()===organizerCode.trim()){setShowWordCodeInput("__unlocked__");setShowWordError(false);}else{setShowWordError(true);setTimeout(()=>setShowWordError(false),1500);} }}}
                            placeholder={t.codePlaceholder}
                            style={{...inputStyle,borderColor:showWordError?"#8b0000":"#1a1a2e",flex:1,padding:"8px 12px"}}
                            autoFocus
                          />
                          <button onClick={()=>{if(showWordCodeInput.trim()===organizerCode.trim()){setShowWordCodeInput("__unlocked__");setShowWordError(false);}else{setShowWordError(true);setTimeout(()=>setShowWordError(false),1500);}}} style={{background:"#8b0000",color:"#fff",border:"none",padding:"6px 12px",borderRadius:4,cursor:"pointer",fontSize:13}}>{t.unlock}</button>
                        </div>
                        {showWordError && <div style={{fontSize:11,color:"#c0392b",marginTop:4}}>{t.wrongCode}</div>}
                      </>
                    ) : (
                      <div>
                        <div style={{fontSize:11,letterSpacing:3,color:"#666",marginBottom:6,textTransform:"uppercase"}}>{t.mustTarget} <span style={{color:"#c0392b"}}>{a.target}</span> :</div>
                        <div style={{display:"flex",flexWrap:"wrap",gap:6}}>
                          {a.words.map(w=><span key={w} style={{background:"#1a0505",border:"1px solid #8b0000",padding:"4px 12px",borderRadius:3,fontSize:14,color:"#e8a0a0",fontWeight:600}}>"{w}"</span>)}
                        </div>
                      </div>
                    )}
                  </div>
                )}
                {accuseMode===a.player && (
                  <div style={{marginTop:10}}>
                    {codeNeededForElim() ? (
                      <>
                        <div style={{display:"flex",gap:6}}>
                          <input
                            type="password"
                            value={accuseCodeInput}
                            onChange={e=>{setAccuseCodeInput(e.target.value);setAccuseError(false);}}
                            onKeyDown={e=>e.key==="Enter"&&confirmElimination()}
                            placeholder={t.codePlaceholder}
                            style={{...inputStyle,borderColor:accuseError?"#8b0000":"#1a1a2e",flex:1,padding:"8px 12px"}}
                            autoFocus
                          />
                          <button onClick={confirmElimination} style={{background:"#8b0000",color:"#fff",border:"none",padding:"6px 12px",borderRadius:4,cursor:"pointer",fontSize:13}}>{t.confirm}</button>
                        </div>
                        {accuseError && <div style={{fontSize:11,color:"#c0392b",marginTop:4}}>{t.wrongCode}</div>}
                      </>
                    ) : (
                      <button onClick={confirmElimination} style={{width:"100%",background:"#8b0000",color:"#fff",border:"none",padding:"8px 12px",borderRadius:4,cursor:"pointer",fontSize:14,fontFamily:"Georgia,serif"}}>{t.confirm}</button>
                    )}
                  </div>
                )}
              </div>)}
            </div>
          </Section>

          {eliminatedPlayers.length>0 && <Section title={t.eliminatedList}>
            <div style={{display:"flex",flexWrap:"wrap",gap:8}}>
              {eliminatedPlayers.map(p=><span key={p} style={{background:"#111",border:"1px solid #333",padding:"4px 12px",borderRadius:3,fontSize:13,color:"#555",textDecoration:"line-through"}}>💀 {p}</span>)}
            </div>
          </Section>}

          <Section title={t.adminAccess}>
            <div style={{display:"flex",flexDirection:"column",gap:10}}>
              <div style={{padding:"12px 14px",background:"#0d0d14",border:"1px solid #1a1a2e",borderRadius:6}}>
                <div style={{fontSize:12,color:"#888",marginBottom:8}}>{t.fullView}</div>
                {useCode ? (
                  <>
                    <Row>
                      <input value={adminInput} onChange={e=>{setAdminInput(e.target.value);setAdminError(false);}} onKeyDown={e=>e.key==="Enter"&&tryAdmin()} placeholder={t.organizerCodeInput} type="password" style={{...inputStyle,borderColor:adminError?"#8b0000":"#1a1a2e"}}/>
                      <Btn onClick={tryAdmin}>{t.unlock}</Btn>
                    </Row>
                    {adminError && <div style={{fontSize:12,color:"#c0392b",marginTop:-4}}>{t.wrongCode}</div>}
                  </>
                ) : (
                  <Btn onClick={()=>{setLookupMode(false);setShowAdminPanel(true);}} style={{width:"100%",fontSize:13}}>{t.adminTitle} →</Btn>
                )}
              </div>
              <div style={{padding:"12px 14px",background:"#0d0d14",border:"1px solid #1a1a2e",borderRadius:6}}>
                <div style={{fontSize:12,color:"#888",marginBottom:8}}>{t.playerForgot}</div>
                <Btn onClick={()=>{setLookupMode(true);setShowAdminPanel(true);closeLookup();}} style={{width:"100%",fontSize:13}}>{t.lookupPlayer}</Btn>
              </div>
              <div style={{padding:"12px 14px",background:"#0d0d14",border:"1px solid #1a1a2e",borderRadius:6}}>
                <div style={{fontSize:12,color:"#888",marginBottom:8}}>{t.addPlayerMidGameTitle}</div>
                <Btn onClick={()=>{setShowAddPlayerPopup(true);setNewPlayerName("");setInsertAfterPlayer("");}} style={{width:"100%",fontSize:13}}>➕ {t.addPlayerMidGame}</Btn>
              </div>
            </div>
          </Section>

          <button onClick={()=>setShowSavePanel(true)} style={{width:"100%",padding:"12px",background:"transparent",border:"1px solid #333",borderRadius:6,color:"#888",cursor:"pointer",fontSize:13,fontFamily:"Georgia,serif",marginTop:4,marginBottom:8}}>💾 {t.saveGame}</button>
          <div style={{display:"flex",gap:8}}>
            <button onClick={()=>setQuitPopup(true)} style={{flex:1,padding:"12px",background:"transparent",border:"1px solid #333",borderRadius:6,color:"#666",cursor:"pointer",fontSize:13,fontFamily:"Georgia,serif"}}>🏠 {t.backToMenu}</button>
            <button onClick={()=>setQuitPopup(true)} style={{flex:1,padding:"12px",background:"transparent",border:"1px solid #333",borderRadius:6,color:"#555",cursor:"pointer",fontSize:13,fontFamily:"Georgia,serif"}}>🔄 {t.newGame}</button>
          </div>
        </div>}

        {/* GAMEOVER */}
        {screen==="gameover" && <div style={{textAlign:"center",padding:"40px 0"}}>
          <div style={{fontSize:60,marginBottom:20}}>👑</div>
          <div style={{fontSize:11,letterSpacing:6,color:"#8b0000",marginBottom:8}}>{t.winner}</div>
          <div style={{fontSize:44,fontWeight:900,marginBottom:8,color:"#e8e0d0"}}>{winner}</div>
          <div style={{height:2,background:"linear-gradient(90deg,transparent,#8b0000,transparent)",margin:"24px 0"}}/>
          <div style={{fontSize:13,color:"#666",marginBottom:24}}>{t.winnerText(winner)}</div>

          <Btn onClick={()=>setShowStatsPanel(true)} fullWidth style={{marginBottom:8}}>{t.viewStats}</Btn>
          <button onClick={()=>setShowHistoryPanel(true)} style={{width:"100%",padding:"10px",background:"transparent",border:"1px solid #333",borderRadius:5,color:"#888",cursor:"pointer",fontSize:13,fontFamily:"Georgia,serif",marginBottom:12}}>📜 {t.history}</button>
          <Btn onClick={()=>setScreen("setup")} fullWidth style={{background:"transparent",border:"1px solid #555",color:"#888"}}>{t.replay}</Btn>
        </div>}
      </div>
      <style>{`input::placeholder{color:#444} ::-webkit-scrollbar{width:4px} ::-webkit-scrollbar-track{background:#111} ::-webkit-scrollbar-thumb{background:#333;border-radius:2px}`}</style>
    </div>
  );
}
