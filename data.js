// CV Data - Vincent Ferries
// This file contains all CV content, separated from the rendering logic.

const data = {
	personal: {
		firstname: "Vincent",
		lastname: "Ferries",
		birthday: "21/02/1984",
		nationality: "Français",
		languages: ["Français", "Anglais"],
		technos: [
			{ category: "Langages", items: "Kotlin, Java, TypeScript, Python" },
			{ category: "Mobile", items: "Android, AOSP, Jetpack Compose" },
			{ category: "Backend", items: "Spring, Java EE, Microservices" },
			{ category: "Cloud/DevOps", items: "Kubernetes, Docker, Azure, CI/CD" },
			{ category: "Frontend", items: "Angular, VueJS, React" }
		],
		certifications: [
			{ name: "CKA", badge: "cka.png" },
			{ name: "CKAD", badge: "ckad.png" },
			{ name: "Oracle Java SE 11", badge: "javase11.png" }
		],
		tags: ["Kotlin", "Android", "Spring 5", "Angular", "VueJS", "Java", "Java EE", "TypeScript", "Dart", "Python", "Ruby", "Haskell", "bash", "..."],
		meetups: ["DevFest Toulouse", "Toulouse JUG", "GDG Toulouse", "Software Crafters Toulouse"],
		activities: ["Cirque (équilibre, mât chinois, jonglage)", "Plongée (N2)", "Escalade", "Randonnées", "Ski", "Slackline", "Jeux de société", "Lecture", "Moto"],
		various: "Nombreux MOOCS tels que Crytographie, Data Science, Big Data, NoSQL, la programmation fonctionnelle...<br/><br/>Katas réguliers  sous CodeWars, exercism, CheckIO.<br/><br/>Deux applications personnelles sur le store : Maze Maker Duel (Android) et Fleurs du Sud (Ionic/AngularJS)",
		title: "Consultant Expert - Architecture & Développement",
		description: "20 ans d'expérience en développement logiciel. Architecte certifié Kubernetes (CKA/CKAD), spécialiste Android Automotive et Kotlin.<br/><br/>J'accompagne les équipes vers l'excellence technique via le Software Craftsmanship, TDD et les méthodologies agiles.<br/><br/>Actif dans la communauté tech : co-fondateur DevFest Toulouse, speaker Devoxx France, membre Toulouse JUG.",
		imgUrl: "images/profil_square.png"
	},
	experiences: [
		{
			dateStart: "2023",
			dateEnd: "aujourd'hui",
			title: "Renault - Architecte & Tech Lead",
			description: "Mission via <strong>En Veille</strong>.<br/><br/>" +
				"Architecte pour l'équipe HMI (~200 développeurs), puis Tech Lead sur des projets futuristes <strong>Android Automotive</strong> en mode task force.<br/>" +
				"Développement plateforme et système sur <strong>AOSP</strong>. Applications en <strong>Kotlin</strong> avec <strong>Jetpack Compose</strong>.<br/>" +
				"Méthodologies <strong>Scrum</strong>, <strong>TDD</strong>, <strong>eXtreme Programming</strong>, CI/CD."
		},
		{
			dateStart: "2020",
			dateEnd: "2022",
			title: "Pros - Développeur Backend",
			description: "Mission via <strong>En Veille</strong>.<br/><br/>" +
				"Développement <strong>Java EE</strong>, micro services, <strong>Kubernetes</strong> (K8S), Helm, Kafka et Zookeeper.<br/>" +
				"Architecture CQRS et event sourcing. Observabilité cloud Azure, AppInsight, Prometheus, Grafana."
		},
		{
			dateStart: "2018",
			dateEnd: "2019",
			title: "Renault - Développeur Android",
			description: "Mission via <strong>En Veille</strong>.<br/><br/>" +
				"Développement d'applications en <strong>Kotlin</strong> pour les futurs véhicules sous <strong>Android Automotive</strong>.<br/>" +
				"eXtreme Programming, <strong>TDD</strong>, Espresso, MVVM. Front-ends <strong>VueJS</strong> et scripting TypeScript."
		},
		{
			dateStart: "2017",
			dateEnd: "2018",
			title: "iBP - Tech Lead Frontend",
			description: "Mission via <strong>En Veille</strong>.<br/><br/>" +
				"Support technique et coordination pour la refonte de l'espace client. Équipe transverse produisant des librairies de composants réutilisables.<br/>" +
				"Mono repo <strong>NX</strong>, <strong>Angular</strong>, <strong>@ngrx</strong>. Équipe SCRUM, PR, CI/CD."
		},
		{
			dateStart: "2016",
			dateEnd: "2017",
			title: "Intel - Développeur Android/IoT",
			description: "Mission via <strong>En Veille</strong>.<br/><br/>" +
				"Développement en <strong>Kotlin</strong> d'une application Android Wear avec capteurs et upload cloud.<br/>" +
				"Librairie <strong>Bluetooth Low Energy</strong> pour circuits imprimés et communication iOS."
		},
		{
			dateStart: "2016",
			dateEnd: "2019",
			title: "DevFest Toulouse",
			description: "Membre fondateur du DevFest Toulouse. Une conférence d'une journée avec 1000 participants."
		},
		{
			dateStart: "2014",
			dateEnd: "2015",
			title: "Conférences",
			description: "Speaker <strong>Devoxx France 2014</strong> et <strong>Eclipse Con France</strong> 2014 et 2015 :<br/>- Atelier Code Retreat à Devoxx<br/>- Atelier sur Dart et les WebComponents à l'Eclipse Con 2014<br/>- Présentation sur le refactoring de code Java 8 à l'Eclipse Con 2015"
		},
		{
			dateStart: "2011",
			dateEnd: "2015",
			title: "Génigraph puis Softeam (rachat)",
			description: "Développement d'une application de géolocalisation sous <strong>Android</strong> pour le compte d'ERDF. Représentation de l'intégralité de leur réseau électrique. Cartographie offline basée sur Open Street Map, overlays, gros volumes de données, cryptographie et traitements lourds sur appareil mobile. Création d'un fichier binaire avec table d'index des blocs fonction de leur position géographique.<br/><br/>Airbus et Eurocopter :<br/>Développement d'une application d'édition de graphes en mode collaboratif pour modéliser les intéractions pilote/cockpit. Technologies <strong>Java EE 7</strong> (SSE et websockets) et <strong>ExtJS</strong>. Application des principes CQRS, représentation cockpit en 3D avec BabylonJS, graphiques réalisés avec D3.<br/><br/>Formations données pour le compte de <strong>JBoss</strong> sur <strong>Java EE 6</strong>."
		},
		{
			dateStart: "2007",
			dateEnd: "2011",
			title: "CELAD",
			description: "De janvier 2009 à juin 2011 :<br/>Développement de sites web à destination du grand public pour la gestion des tickets restaurant en Java EE avec le framework <strong>Seam</strong> (JSF, RichFaces, EJB3, JPA, Hibernate, Ajax...). Rédaction des spécifications détaillées et développement de la solution en équipe de 7 personnes.<br/><br/>D'avril à décembre 2008 : Réalisation d'une interface <strong>WxPython</strong> pour une librairie en C++. Traitements massifs de résultats de simulations aérospatiales pour la société Latécoère.<br/><br/>De juin 2007 à février 2008 : Conception et développement d'applications <strong>J2EE</strong> basées sur Struts, Spring, Swing, Eclipse RCP pour le compte du MIPIH (Midi Pyrénées Informatique Hospitalière). Modélisation UML et génération du squelette du code d'une application SOA. Réalisation d'un prototype de référentiel pour le moteur de règles Drools."
		},
		{
			dateStart: "2006",
			dateEnd: "2007",
			title: "Eurecia alternance",
			description: "Développement d'une plateforme multiservices en Java EE pour une gestion simplifiée des activités de Ressources Humaines. Génération automatique de rapports avec JfreeChart. Développement de la solution et paramétrage d'un cluster de serveurs Jboss avec réplication de sessions."
		}
	],
	formations: [
		{
			date: "2007",
			title: "Master 2 Génie Logiciel et Répartition",
			description: "à l'Université Paul Sabatier de Toulouse"
		},
		{
			date: "2005",
			title: "Licence d'Informatique",
			description: "à l'Université Paul Sabatier de Toulouse"
		},
		{
			date: "2002",
			title: "Baccalauréat Scientifique",
			description: "Lycée Pierre Paul Riquet"
		}
	],
	social: {
		twitter: "VincentFERRIES",
		github: "vferries",
		linkedin: "vferries",
		twitch: "EnVeilleCode"
	},
	contact: {
		name: "EURL En Veille",
		address: "52 chemin de Carles<br/>31140 Launaguet",
		email: "vincent.ferries@gmail.com",
		phone: "06 62 11 74 84",
		web: "https://enveille.info"
	}
};

// Social network configuration
const socialNetworks = [
	{ key: 'twitter', icon: 'fa-twitter', urlBase: 'https://x.com/' },
	{ key: 'github', icon: 'fa-github', urlBase: 'https://github.com/' },
	{ key: 'linkedin', icon: 'fa-linkedin', urlBase: 'https://linkedin.com/in/' },
	{ key: 'twitch', icon: 'fa-twitch', urlBase: 'https://twitch.tv/' }
];
