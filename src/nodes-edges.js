export const initialNodes = [
    // Titre principal
    {
        id: 'dwwm',
        type: 'input',
        data: { label: 'Développeur Web & Web Mobile' },
        position: { x: 0, y: 0 },
    },
    // Groupes de compétence (niveau 2)
    {
        id: 'front',
        type: 'group',
        data: { label: 'Front-end' },
        position: { x: -1050, y: 150 },
        style: {
            backgroundColor: 'rgba(255, 0, 255, 0.2)',
            width: 1500,
            height: 900
        },
        className: 'group-with-label',
    },
    {
        id: 'back',
        type: 'group',
        data: { label: 'Back-end' },
        position: { x: 750, y: 150 },
        style: {
            backgroundColor: 'rgba(25, 0, 255, 0.2)',
            width: 800,
            height: 700
        },
        className: 'group-with-label',
    },
    // Front-end - niveau 3
    {
        id: 'algo',
        data: { label: 'Algorithme' },
        position: { x: 80, y: 60 },
        parentId: 'front',
        extent: 'parent'
    },
    {
        id: 'maquette',
        data: { label: 'Maquettage' },
        position: { x: 520, y: 60 },
        parentId: 'front',
        extent: 'parent'
    },
    {
        id: 'web',
        data: { label: 'Web' },
        position: { x: 960, y: 60 },
        parentId: 'front',
        extent: 'parent'
    },
    // Front-end > Algorithme - détails
    {
        id: 'pseudo-code',
        data: { label: 'Pseudo-code' },
        position: { x: 80, y: 180 },
        parentId: 'front',
        extent: 'parent'
    },
    // Front-end > Web - sous-domaines (niveau 4)
    {
        id: 'html',
        data: { label: 'HTML' },
        position: { x: 820, y: 180 },
        parentId: 'front',
        extent: 'parent'
    },
    {
        id: 'css',
        data: { label: 'CSS' },
        position: { x: 960, y: 180 },
        parentId: 'front',
        extent: 'parent'
    },
    {
        id: 'js',
        data: { label: 'Javascript' },
        position: { x: 1100, y: 180 },
        parentId: 'front',
        extent: 'parent'
    },
    // Front-end > HTML - détails
    {
        id: 'html5',
        data: { label: 'HTML 5' },
        position: { x: 770, y: 300 },
        parentId: 'front',
        extent: 'parent'
    },
    {
        id: 'formulaire',
        data: { label: 'Formulaire' },
        position: { x: 870, y: 300 },
        parentId: 'front',
        extent: 'parent'
    },
    {
        id: 'accessibilite',
        data: { label: 'Accessibilité' },
        position: { x: 970, y: 300 },
        parentId: 'front',
        extent: 'parent'
    },
    // Front-end > CSS - détails
    {
        id: 'responsivite',
        data: { label: 'Responsivité' },
        position: { x: 910, y: 300 },
        parentId: 'front',
        extent: 'parent'
    },
    {
        id: 'sass',
        data: { label: 'SaSS' },
        position: { x: 1010, y: 300 },
        parentId: 'front',
        extent: 'parent'
    },
    {
        id: 'bootstrap',
        data: { label: 'Bootstrap' },
        position: { x: 1110, y: 300 },
        parentId: 'front',
        extent: 'parent'
    },
    // Front-end > Javascript - détails
    {
        id: 'dynamisme',
        data: { label: 'Dynamisme' },
        position: { x: 1050, y: 300 },
        parentId: 'front',
        extent: 'parent'
    },
    {
        id: 'objet',
        data: { label: 'Objet' },
        position: { x: 1150, y: 300 },
        parentId: 'front',
        extent: 'parent'
    },
    {
        id: 'npm',
        data: { label: 'NPM' },
        position: { x: 1250, y: 300 },
        parentId: 'front',
        extent: 'parent'
    },
    // Front-end > Web > API - niveau 4
    {
        id: 'api',
        data: { label: 'API' },
        position: { x: 1200, y: 180 },
        parentId: 'front',
        extent: 'parent'
    },
    // Front-end > Web > API - détails
    {
        id: 'json',
        data: { label: 'JSON' },
        position: { x: 1200, y: 300 },
        parentId: 'front',
        extent: 'parent'
    },
    // Front-end > Web > Versionning - niveau 4
    {
        id: 'versionning',
        data: { label: 'Versionning' },
        position: { x: 1300, y: 180 },
        parentId: 'front',
        extent: 'parent'
    },
    // Front-end > Web > Versionning > GIT - niveau 5
    {
        id: 'git',
        data: { label: 'GIT' },
        position: { x: 1300, y: 300 },
        parentId: 'front',
        extent: 'parent'
    },
    // Front-end > Web > Versionning > GIT - détails
    {
        id: 'git-base',
        data: { label: 'Base' },
        position: { x: 1220, y: 420 },
        parentId: 'front',
        extent: 'parent'
    },
    {
        id: 'github',
        data: { label: 'GitHub' },
        position: { x: 1300, y: 420 },
        parentId: 'front',
        extent: 'parent'
    },
    {
        id: 'gitlab',
        data: { label: 'GitLab' },
        position: { x: 1380, y: 420 },
        parentId: 'front',
        extent: 'parent'
    },
    // Back-end - niveau 3
    {
        id: 'sql',
        data: { label: 'SQL' },
        position: { x: 80, y: 60 },
        parentId: 'back',
        extent: 'parent'
    },
    {
        id: 'php',
        data: { label: 'PHP' },
        position: { x: 580, y: 180 },
        parentId: 'back',
        extent: 'parent'
    },
    // Back-end > SQL - niveau 4
    {
        id: 'mysql',
        data: { label: 'MYSQL' },
        position: { x: 80, y: 180 },
        parentId: 'back',
        extent: 'parent'
    },
    // Back-end > SQL > MYSQL - niveau 5
    {
        id: 'crud',
        data: { label: 'CRUD' },
        position: { x: 80, y: 300 },
        parentId: 'back',
        extent: 'parent'
    },
    // Back-end > SQL > MYSQL > CRUD - détails
    {
        id: 'create',
        data: { label: 'Create' },
        position: { x: 10, y: 420 },
        parentId: 'back',
        extent: 'parent'
    },
    {
        id: 'read',
        data: { label: 'Read' },
        position: { x: 80, y: 420 },
        parentId: 'back',
        extent: 'parent'
    },
    {
        id: 'update',
        data: { label: 'Update' },
        position: { x: 150, y: 420 },
        parentId: 'back',
        extent: 'parent'
    },
    {
        id: 'delete',
        data: { label: 'Delete' },
        position: { x: 220, y: 420 },
        parentId: 'back',
        extent: 'parent'
    },
    // Back-end > PHP - niveau 4
    {
        id: 'securite',
        data: { label: 'Sécurité' },
        position: { x: 580, y: 300 },
        parentId: 'back',
        extent: 'parent'
    },
    // Back-end > PHP > Sécurité - détails
    {
        id: 'csrf',
        data: { label: 'CSRF' },
        position: { x: 480, y: 420 },
        parentId: 'back',
        extent: 'parent'
    },
    {
        id: 'session',
        data: { label: 'Session' },
        position: { x: 540, y: 420 },
        parentId: 'back',
        extent: 'parent'
    },
    {
        id: 'cookie',
        data: { label: 'Cookie' },
        position: { x: 600, y: 420 },
        parentId: 'back',
        extent: 'parent'
    },
    {
        id: 'token',
        data: { label: 'Token' },
        position: { x: 660, y: 420 },
        parentId: 'back',
        extent: 'parent'
    },
    {
        id: 'hash',
        data: { label: 'Hash' },
        position: { x: 720, y: 420 },
        parentId: 'back',
        extent: 'parent'
    },
    // Back-end > PHP > Sécurité > Hash - détail
    {
        id: 'mot-de-passe',
        data: { label: 'Mot de passe' },
        position: { x: 720, y: 540 },
        parentId: 'back',
        extent: 'parent'
    },
];

export const initialEdges = [
    // dwwm vers groupes principaux
    { id: 'e-dwwm-front', source: 'dwwm', target: 'front', animated: true },
    { id: 'e-dwwm-back', source: 'dwwm', target: 'back', animated: true },
    
    // dwwm vers éléments niveau 3
    { id: 'e-dwwm-algo', source: 'dwwm', target: 'algo', animated: true },
    { id: 'e-dwwm-maquette', source: 'dwwm', target: 'maquette', animated: true },
    { id: 'e-dwwm-web', source: 'dwwm', target: 'web', animated: true },
    { id: 'e-dwwm-sql', source: 'dwwm', target: 'sql', animated: true },
    { id: 'e-dwwm-php', source: 'dwwm', target: 'php', animated: true },
    
    // Front-end - niveau 3
    { id: 'e-front-algo', source: 'front', target: 'algo', animated: false },
    { id: 'e-front-maquette', source: 'front', target: 'maquette', animated: false },
    { id: 'e-front-web', source: 'front', target: 'web', animated: false },
    
    // Algorithme vers détails
    { id: 'e-algo-pseudo', source: 'algo', target: 'pseudo-code', animated: false },
    
    // Web vers sous-domaines
    { id: 'e-web-html', source: 'web', target: 'html', animated: false },
    { id: 'e-web-css', source: 'web', target: 'css', animated: false },
    { id: 'e-web-js', source: 'web', target: 'js', animated: false },
    
    // HTML vers détails
    { id: 'e-html-html5', source: 'html', target: 'html5', animated: false },
    { id: 'e-html-formulaire', source: 'html', target: 'formulaire', animated: false },
    { id: 'e-html-accessibilite', source: 'html', target: 'accessibilite', animated: false },
    
    // CSS vers détails
    { id: 'e-css-responsivite', source: 'css', target: 'responsivite', animated: false },
    { id: 'e-css-sass', source: 'css', target: 'sass', animated: false },
    { id: 'e-css-bootstrap', source: 'css', target: 'bootstrap', animated: false },
    
    // Javascript vers détails
    { id: 'e-js-dynamisme', source: 'js', target: 'dynamisme', animated: false },
    { id: 'e-js-objet', source: 'js', target: 'objet', animated: false },
    { id: 'e-js-npm', source: 'js', target: 'npm', animated: false },
    
    // Web vers API et Versionning
    { id: 'e-web-api', source: 'web', target: 'api', animated: false },
    { id: 'e-web-versionning', source: 'web', target: 'versionning', animated: false },
    
    // API vers détails
    { id: 'e-api-json', source: 'api', target: 'json', animated: false },
    
    // Versionning vers GIT
    { id: 'e-versionning-git', source: 'versionning', target: 'git', animated: false },
    
    // GIT vers détails
    { id: 'e-git-base', source: 'git', target: 'git-base', animated: false },
    { id: 'e-git-github', source: 'git', target: 'github', animated: false },
    { id: 'e-git-gitlab', source: 'git', target: 'gitlab', animated: false },
    
    // Back-end vers détails
    { id: 'e-back-sql', source: 'back', target: 'sql', animated: false },
    { id: 'e-back-php', source: 'back', target: 'php', animated: false },
    
    // SQL vers MYSQL
    { id: 'e-sql-mysql', source: 'sql', target: 'mysql', animated: false },
    
    // MYSQL vers CRUD
    { id: 'e-mysql-crud', source: 'mysql', target: 'crud', animated: false },
    
    // CRUD vers détails
    { id: 'e-crud-create', source: 'crud', target: 'create', animated: false },
    { id: 'e-crud-read', source: 'crud', target: 'read', animated: false },
    { id: 'e-crud-update', source: 'crud', target: 'update', animated: false },
    { id: 'e-crud-delete', source: 'crud', target: 'delete', animated: false },
    
    // PHP vers Sécurité
    { id: 'e-php-securite', source: 'php', target: 'securite', animated: false },
    
    // Sécurité vers détails
    { id: 'e-securite-csrf', source: 'securite', target: 'csrf', animated: false },
    { id: 'e-securite-session', source: 'securite', target: 'session', animated: false },
    { id: 'e-securite-cookie', source: 'securite', target: 'cookie', animated: false },
    { id: 'e-securite-token', source: 'securite', target: 'token', animated: false },
    { id: 'e-securite-hash', source: 'securite', target: 'hash', animated: false },
    
    // Hash vers détails
    { id: 'e-hash-mdp', source: 'hash', target: 'mot-de-passe', animated: false },
];
