export const initialNodes = [
    // Titre principal
    {
        id: 'dwwm',
        type: 'input',
        data: { label: 'Développeur Web & Web Mobile' },
        position: { x: 100, y: 400 },
    },
    // Groupes de compétence (niveau 2)
    {
        id: 'front',
        type: 'group',
        data: { label: 'Front-end' },
        position: { x: -1100, y: 50 },
        style: {
            backgroundColor: 'rgba(255, 0, 255, 0.2)',
            width: 1000,
            height: 800
        },
        className: 'group-with-label',
    },
    {
        id: 'back',
        type: 'group',
        data: { label: 'Back-end' },
        position: { x: 500, y: 50 },
        style: {
            backgroundColor: 'rgba(25, 0, 255, 0.2)',
            width: 1000,
            height: 800
        },
        className: 'group-with-label',
    },
    // Utilitaire - groupe
    {
        id: 'utilitaire',
        type: 'group',
        data: { label: 'Utilitaire' },
        position: { x: -1100, y: 900 },
        style: {
            backgroundColor: 'rgba(0, 255, 0, 0.2)',
            width: 2600,
            height: 300
        },
        className: 'group-with-label',
    },
    // Front-end - niveau 3
    {
        id: 'algo',
        data: { label: 'Algorithme' },
        position: { x: 350, y: -50 },
        parentId: 'front',
        extent: 'parent'
    },
    {
        id: 'maquette',
        data: { label: 'Maquettage' },
        position: { x: 350, y: 200 },
        parentId: 'front',
        extent: 'parent'
    },
    {
        id: 'web',
        data: { label: 'Web' },
        position: { x: 350, y: 450 },
        parentId: 'front',
        extent: 'parent'
    },
    // Front-end > Algorithme - détails
    {
        id: 'pseudo-code',
        data: { label: 'Pseudo-code' },
        position: { x: 50, y: -50 },
        parentId: 'front',
        extent: 'parent'
    },
    // Front-end > Maquettage - détails
    {
        id: 'zoning',
        data: { label: 'Zoning' },
        position: { x: 150, y: 100 },
        parentId: 'front',
        extent: 'parent'
    },
    {
        id: 'wireframe',
        data: { label: 'Wireframe' },
        position: { x: 150, y: 170 },
        parentId: 'front',
        extent: 'parent'
    },
    {
        id: 'mockup',
        data: { label: 'Mockup' },
        position: { x: 150, y: 240 },
        parentId: 'front',
        extent: 'parent'
    },
    {
        id: 'maquettage-detail',
        data: { label: 'Maquettage' },
        position: { x: 150, y: 310 },
        parentId: 'front',
        extent: 'parent'
    },
    // Front-end > Web - sous-domaines (niveau 4)
    {
        id: 'html',
        data: { label: 'HTML' },
        position: { x: 500, y: 450 },
        parentId: 'front',
        extent: 'parent'
    },
    {
        id: 'css',
        data: { label: 'CSS' },
        position: { x: 500, y: 520 },
        parentId: 'front',
        extent: 'parent'
    },
    {
        id: 'js',
        data: { label: 'Javascript' },
        position: { x: 500, y: 590 },
        parentId: 'front',
        extent: 'parent'
    },
    // Front-end > HTML - détails
    {
        id: 'html5',
        data: { label: 'HTML 5' },
        position: { x: 700, y: 410 },
        parentId: 'front',
        extent: 'parent'
    },
    {
        id: 'formulaire',
        data: { label: 'Formulaire' },
        position: { x: 700, y: 480 },
        parentId: 'front',
        extent: 'parent'
    },
    {
        id: 'accessibilite',
        data: { label: 'Accessibilité' },
        position: { x: 700, y: 550 },
        parentId: 'front',
        extent: 'parent'
    },
    // Front-end > CSS - détails
    {
        id: 'responsivite',
        data: { label: 'Responsivité' },
        position: { x: 700, y: 480 },
        parentId: 'front',
        extent: 'parent'
    },
    {
        id: 'sass',
        data: { label: 'SaSS' },
        position: { x: 700, y: 550 },
        parentId: 'front',
        extent: 'parent'
    },
    {
        id: 'bootstrap',
        data: { label: 'Bootstrap' },
        position: { x: 700, y: 620 },
        parentId: 'front',
        extent: 'parent'
    },
    // Front-end > Javascript - détails
    {
        id: 'dynamisme',
        data: { label: 'Dynamisme' },
        position: { x: 700, y: 550 },
        parentId: 'front',
        extent: 'parent'
    },
    {
        id: 'objet',
        data: { label: 'Objet' },
        position: { x: 700, y: 620 },
        parentId: 'front',
        extent: 'parent'
    },
    {
        id: 'npm',
        data: { label: 'NPM' },
        position: { x: 700, y: 690 },
        parentId: 'front',
        extent: 'parent'
    },
    {
        id: 'librairie',
        data: { label: 'Librairie' },
        position: { x: 700, y: 760 },
        parentId: 'front',
        extent: 'parent'
    },
    // Front-end > Web > API - niveau 4
    {
        id: 'api',
        data: { label: 'API' },
        position: { x: 850, y: 660 },
        parentId: 'front',
        extent: 'parent'
    },
    // Front-end > Web > API - détails
    {
        id: 'json',
        data: { label: 'JSON' },
        position: { x: 850, y: 620 },
        parentId: 'front',
        extent: 'parent'
    },
    {
        id: 'get',
        data: { label: 'GET' },
        position: { x: 850, y: 690 },
        parentId: 'front',
        extent: 'parent'
    },
    {
        id: 'post',
        data: { label: 'POST' },
        position: { x: 850, y: 760 },
        parentId: 'front',
        extent: 'parent'
    },
    {
        id: 'put',
        data: { label: 'PUT' },
        position: { x: 850, y: 830 },
        parentId: 'front',
        extent: 'parent'
    },
    // Front-end > Web > Versionning - niveau 4
    {
        id: 'versionning',
        data: { label: 'Versionning' },
        position: { x: 850, y: 730 },
        parentId: 'front',
        extent: 'parent'
    },
    // Front-end > Web > Versionning > GIT - niveau 5
    {
        id: 'git',
        data: { label: 'GIT' },
        position: { x: 950, y: 730 },
        parentId: 'front',
        extent: 'parent'
    },
    // Front-end > Web > Versionning > GIT - détails
    {
        id: 'git-base',
        data: { label: 'Base' },
        position: { x: 950, y: 690 },
        parentId: 'front',
        extent: 'parent'
    },
    {
        id: 'github',
        data: { label: 'GitHub' },
        position: { x: 950, y: 770 },
        parentId: 'front',
        extent: 'parent'
    },
    {
        id: 'gitlab',
        data: { label: 'GitLab' },
        position: { x: 950, y: 850 },
        parentId: 'front',
        extent: 'parent'
    },
    // Back-end - niveau 3
    {
        id: 'sql',
        data: { label: 'SQL' },
        position: { x: 100, y: 50 },
        parentId: 'back',
        extent: 'parent'
    },
    {
        id: 'php',
        data: { label: 'PHP' },
        position: { x: 100, y: 450 },
        parentId: 'back',
        extent: 'parent'
    },
    // Back-end > SQL - niveau 4
    {
        id: 'mysql',
        data: { label: 'MYSQL' },
        position: { x: 300, y: 50 },
        parentId: 'back',
        extent: 'parent'
    },
    // Back-end > SQL > MYSQL - niveau 5
    {
        id: 'crud',
        data: { label: 'CRUD' },
        position: { x: 500, y: 50 },
        parentId: 'back',
        extent: 'parent'
    },
    // Back-end > SQL > MYSQL > CRUD - détails
    {
        id: 'create',
        data: { label: 'Create' },
        position: { x: 650, y: 10 },
        parentId: 'back',
        extent: 'parent'
    },
    {
        id: 'read',
        data: { label: 'Read' },
        position: { x: 650, y: 90 },
        parentId: 'back',
        extent: 'parent'
    },
    {
        id: 'update',
        data: { label: 'Update' },
        position: { x: 650, y: 170 },
        parentId: 'back',
        extent: 'parent'
    },
    {
        id: 'delete',
        data: { label: 'Delete' },
        position: { x: 650, y: 250 },
        parentId: 'back',
        extent: 'parent'
    },
    // Back-end > PHP - niveau 4
    {
        id: 'securite',
        data: { label: 'Sécurité' },
        position: { x: 300, y: 450 },
        parentId: 'back',
        extent: 'parent'
    },
    // Back-end > PHP > Sécurité - détails
    {
        id: 'csrf',
        data: { label: 'CSRF' },
        position: { x: 500, y: 400 },
        parentId: 'back',
        extent: 'parent'
    },
    {
        id: 'session',
        data: { label: 'Session' },
        position: { x: 500, y: 480 },
        parentId: 'back',
        extent: 'parent'
    },
    {
        id: 'cookie',
        data: { label: 'Cookie' },
        position: { x: 500, y: 560 },
        parentId: 'back',
        extent: 'parent'
    },
    {
        id: 'token',
        data: { label: 'Token' },
        position: { x: 500, y: 640 },
        parentId: 'back',
        extent: 'parent'
    },
    {
        id: 'hash',
        data: { label: 'Hash' },
        position: { x: 500, y: 720 },
        parentId: 'back',
        extent: 'parent'
    },
    // Back-end > PHP > Sécurité > Hash - détail
    {
        id: 'mot-de-passe',
        data: { label: 'Mot de passe' },
        position: { x: 650, y: 720 },
        parentId: 'back',
        extent: 'parent'
    },

    // Utilitaire > Gestion de projet - niveau 3
    {
        id: 'gestion-projet',
        data: { label: 'Gestion de projet' },
        position: { x: 200, y: 80 },
        parentId: 'utilitaire',
        extent: 'parent'
    },
    // Utilitaire > Gestion de projet - détails
    {
        id: 'agile',
        data: { label: 'Agile' },
        position: { x: 50, y: 170 },
        parentId: 'utilitaire',
        extent: 'parent'
    },
    {
        id: 'trello',
        data: { label: 'Trello' },
        position: { x: 200, y: 170 },
        parentId: 'utilitaire',
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
    { id: 'e-dwwm-utilitaire', source: 'dwwm', target: 'utilitaire', animated: true },

    // Front-end - niveau 3
    { id: 'e-front-algo', source: 'front', target: 'algo', animated: false },
    { id: 'e-front-maquette', source: 'front', target: 'maquette', animated: false },
    { id: 'e-front-web', source: 'front', target: 'web', animated: false },

    // Algorithme vers détails
    { id: 'e-algo-pseudo', source: 'algo', target: 'pseudo-code', animated: false },

    // Maquettage vers détails
    { id: 'e-maquette-zoning', source: 'maquette', target: 'zoning', animated: false },
    { id: 'e-maquette-wireframe', source: 'maquette', target: 'wireframe', animated: false },
    { id: 'e-maquette-mockup', source: 'maquette', target: 'mockup', animated: false },
    { id: 'e-maquette-maquettage', source: 'maquette', target: 'maquettage-detail', animated: false },

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
    { id: 'e-js-librairie', source: 'js', target: 'librairie', animated: false },

    // Web vers API et Versionning
    { id: 'e-web-api', source: 'web', target: 'api', animated: false },
    { id: 'e-web-versionning', source: 'web', target: 'versionning', animated: false },

    // API vers détails
    { id: 'e-api-json', source: 'api', target: 'json', animated: false },
    { id: 'e-api-get', source: 'api', target: 'get', animated: false },
    { id: 'e-api-post', source: 'api', target: 'post', animated: false },
    { id: 'e-api-put', source: 'api', target: 'put', animated: false },

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

    // Utilitaire vers groupe
    { id: 'e-utilitaire-gestion', source: 'utilitaire', target: 'gestion-projet', animated: false },

    // Gestion de projet vers détails
    { id: 'e-gestion-agile', source: 'gestion-projet', target: 'agile', animated: false },
    { id: 'e-gestion-trello', source: 'gestion-projet', target: 'trello', animated: false },
];
