registerComponent('project', {
    render(props={ title: '', text: '', status: ''})
    {
        let title = createElement('p', {

            className: 'title',
            innerHTML: props.title

        });

        let text = createElement('p', {

            className: 'text',
            innerHTML: props.text

        });

        let status = createElement('p', {

            className: 'status',
            innerHTML: props.status

        });

        let project = createElement('div', {

            className: 'project'
            
        },
        [title, text, status]);

        return project;
    }
});

registerComponent('creation-projects', {
    render()
    {
        let projectsData =
            [
                {
                    title : '«LE FESTIVAL INTERNATIONAL DE MOI»',
                    text  : '\
                         La représentation du Moi est une réalité subjective de soi parfois sublimée,\
                         parfois détestable. Ce festival a pour objet de saisir, d’appréhender et de\
                         réfléchir sur notre alter-ego et d\'en découvrir ces différentes facettes\
                         par une rétrospective burlesque de l’alter égo de l\'artiste.\
                         <br />\
                        Le Festival International de «Moi» a pour objectif de vous faire découvrir et partager\
                        l\'univers de l\'artiste. L\'objectif est d\'emmener le visiteur dans son quotidien,\
                        son passé mais aussi dans les méandres de sa perception du monde.\
                        Cet artiste atypique revendique un ego démesuré qu’il prône avec autodérision.\
                        Il fait ainsi un pied de nez à son propre égo mais aussi à celui des nombreux amis,\
                        artistes qui ont partagé une partie de sa vie et qui se joignent à lui dans\
                        différentes festivités. Le spectateur devient à sa guise le «Moi» et fait ainsi\
                        partie intégrante du monde de l’artiste qui se dévoile avec parcimonie selon son\
                        humeur, tout au long du festival, en alternant coups de gueule, poésie, ruptures,\
                        bêtise, tendresse…\
                        <br />\
                        Tout un travail de réflexion sur l’alter-égo s’installe lors de ce festival\
                        et permet de dévoiler ces différentes facettes.\
                        ',
                    status: 'Travail en cours / Recherche de résidence' 
                },
                {
                    title : '«LA MACHINE A BARBE A PAPA  A CLAQUETES ELECTRIQUE» Co-realisation avec les Plonk et Replonk.',
                    text  : '\
                        La machine à barbe à papa à claquettes électriques est une machine spectacle,\
                        qui en 20 minutes vous expliquera clairement trois choses :\
                        <br />\
                        1 - Les vraies raisons du réchauffement climatique.<br />\
                        2 - Comment un général d’état major réussit ou non à régler ces problèmes conjugaux.<br />\
                        3 - Pourquoi faut-il toujours se méfier des pingouins aussi avenants puissent-ils être.<br />\
                        ',
                    status: 'Travail en cours / Recherche de résidence' 
                },
                {
                    title : '«FANTAME BIENTÔT CHEZ VOUS»',
                    text  : '\
                        Deux spectres qui habitent dans une maison à l\'univers particulier\
                        apparaissent depuis peu dans les clichés d\'un couple de photographes qui\
                        viennent d\'aménager dans cette même demeure.\
                        Après de nombreuses tentatives de communication avec ces deux entités,\
                        le couple finit par comprendre que ces deux individus, qui se surnomment\
                        les Fantames, souhaitent découvrir d\'autres demeures et d\'autres familles.\
                        Ces deux spectres seront peut-être bientôt chez vous...\
                        ',
                    status: '\
                        Travail collectif et interactif en cours /\
                        Projet d\'exposition photographique /\
                        N\'hésitez pas à nous contacter si vous possédez un lieu atypique\
                        ou si vous souhaitez vous faire photographier avec les Fantames.\
                        ',
                },
                {
                    title : '«LE LABORATOIRE DE CUISINE PIGMENTAIRE»',
                    text  : '\
                        L\'équipe que nous sommes est gourmande, mais aussi\
                        sensible aux textures et aux couleurs des aliments\
                        qui composent l\'assiette. L\'envie de créer des\
                        recettes qui ont pour contrainte de n\'être composées que\
                        d\'une seule et même couleur a germé et nous réfléchissons\
                        jour après jour à des mets originaux.\
                        ',
                    status: '\
                        Travail en cours / Faites-nous part de vos idées ou\
                        demandez-nous de réaliser une recette pour vous en\
                        précisant votre choix de couleur.\
                        ' 
                },
                {
                    title : '«LES CHRONIQUES D\'INRI»',
                    text  : '\
                        «Si on enlevait le loup aux bergers»\
                        <br />\
                        Ce récit tente d’imaginer les conséquences sociétales d’un retrait définitif du loup pour les bergers.\
                        <br />\
                        «La fourmi qui rêvait d\'une anisette avec des glaçons»\
                        <br />\
                        Cette histoire raconte le voyage d’une fourmi sub-saharienne qui veut arriver à ses fins.\
                    ',
                    status: '\
                        Nouvelles en cours d\'écriture / Disponibles sur demande,\
                        envoyez-nous un courrier et dites-nous ce que vous en pensez.\
                        ' 
                }
            ];
        
        let projects =
            projectsData.map(
                (data) =>
                {
                    let project =
                        createElement('project', {

                            title: data.title,
                            text: data.text,
                            status: data.status

                        });
                    
                    return project;
                }
            );

        let creationProjects =
            createElement('div', {

                className: 'creation-projects'

            },
            projects);
        
        return creationProjects;
    }
});

registerComponent('creation', {
    render(props={ image: '', title: '', text: '' })
    {
        let title =
            createElement('p', {

                className: 'creation-title',
                innerHTML: props.title

            });

        let text =
            createElement('p', {

                className: 'creation-text',
                innerHTML: props.text

            });

        let textContainer =
            createElement('div', {
                
                className: 'text-container'

            },
            [title, text]);

        let creation =
            createElement('div', {

                className: 'creation',
                style:
                    {
                        backgroundImage: `url(${props.image})`
                    }

            },
            [textContainer]);
        
        return creation;
    }
})

registerComponent('creations-container', {
    render(props={ creations: [] })
    {
        let creations =
            props.creations.map(
                (data) =>
                {
                    let creation
                        = createElement('creation', {

                            image: data.image,
                            title: data.title,
                            text : data.text

                        });
                    
                    return creation;
                }
            );
        
        let creationsContainer =
            createElement('div', {

                className: 'creations-container'

            },
            creations);
        
        return creationsContainer;
    }
});

registerComponent('presentation-creations', {
    render(props={ title: '' })
    {
        let title =
            createElement('p', {

                className: 'title',
                innerHTML: props.title

            });
        
        let presentation =
            createElement('div', {

                className: 'presentation-creations'

            },
            [title]);
        
        return presentation;
    }
});

registerComponent('creations', {
    render(props={ data: {} })
    {
        let banner = createElement( 'banner' );

        let presentationFutur =
            createElement('presentation-creations', {

                title: 'CRÉATIONS FUTURES'

            });
        
        let projects = createElement( 'creation-projects' );

        let presentationPassed =
            createElement('presentation-creations', {

                title: 'CRÉATIONS PASSÉES'

            });

        let creations =
            createElement( 'creations-container', {

                creations: props.data.creations

            });

        let footer = createElement( 'footer' );

        let view =
            createElement('div', {


            },
            [banner, presentationFutur, projects].concat([presentationPassed]).concat(creations).concat([footer]) );

        return view;
    }
});
    


function renderCreations()
{
    document.body.innerHTML = '';
    window.scrollTo(0, 0);

    let data =
    {
        creations:
            [
                {
                    image: 'img/creations/2012-caravanserail.jpeg',
                    title: '2012 - LE VILLAGE CARAVANSERAIL',
                    text : '\
                        Le Village Caravansérail est une création collective éphémère,\
                        Henri Gallot-Lavallée directeur artistique du projet, a contribué\
                        à édifier ce village atypique qui se trouvait en plein coeur de Mireuil,\
                        quartier habitat collectif de La Rochelle, pour être démonté fin 2013.\
                        '
                },
                {
                    image: 'img/creations/2006-machine-feuilleter.jpeg',
                    title: '2006 - LA MACHINE A FEUILLETER LE CATALOGUE DU GRAND REPERTOIRE',
                    text : '\
                        Suite à la publication d\'un ouvrage édité par Actes Sud,\
                        sur l\'exposition organisée par François Delarozière\
                        "Le Grand Repertoire Machine de Spectacle", la machine à feuilleter\
                        le catalogue du grand repertoire s\'est naturellement imposée.\
                        \
                        <br /><em>Machine de spectacle réalisée par Henri Gallot-Lavallée</em>\
                        '
                },
                {
                    image: 'img/creations/2003-machine-sake.jpeg',
                    title: '2003 - LA MACHINE A SAKE',
                    text : '\
                        La machine à préparer du saké chaud nous accompagne avec toute la douceur\
                        et la finesse de l\'Asie. La dégustation de cette boisson mondialement\
                        connue se fait, bien sûr, devant une image érotique.\
                        \
                        <br /><em>Machine de spectacle réalisée et mise en scène par Henri Gallot-Lavallée.</em>\
                        '
                },
                {
                    image: 'img/creations/2003-machine-chauffer.jpeg',
                    title: '2003 - LA MACHINE A SE CHAUFFER SOUS LE MANTEAU',
                    text : '\
                         Cette machine a été conçue pour réchauffer les spectateurs d\'un festival\
                         hivernal de Calais. D\'énormes radiateurs sur lesquels de grands manteaux\
                         ont été adaptés, permettaient aux visiteurs de se réchauffer quelques\
                         instants et de se rencontrer.\
                         \
                        <br /><em>Installation réalisée par Henri Gallot-Lavallé et Pollo.</em>\
                        '
                },
                {
                    image: 'img/creations/2001-machine-fille.jpeg',
                    title: '2001 - LA MACHINE A REGARDER LES FILLES DROIT DANS LES YEUX',
                    text : '\
                          L\'instant précis où l\'on regarde une fille droit dans les yeux\
                          est un moment crucial. C\'est peut-être le moment où tout bascule,\
                          la vie, l\'amour, un nouveau chemin... C\'est pourquoi nous avons\
                          décidé de souligner ce moment par la création de cette machine.\
                          \
                        <br /><emMachine de spectacle réalisée et mise en scène par Henri Gallot-Lavallée et Denis Merlet.</em>\
                        '
                },
                {
                    image: 'img/creations/2000-homme-canon.jpeg',
                    title: '2000 - L\'HOMME CANON',
                    text : '\
                        Un spectacle qui met en scène un homme et un canon. Ce dernier est\
                        destiné à propulser l\'homme au dessus d\'un bâtiment afin de marquer\
                        le passage à l\'an 2000. Malheureusement, il n\'est pas très efficace...\
                        \
                        <br /><em>Spectacle créé et mis en scène par Henri Gallot-Lavallée et Sophie Deck.</em>\
                        '
                },
                {
                    image: 'img/creations/1997-boule-neige.jpeg',
                    title: '1997 - LA BOULE A NEIGE',
                    text : '\
                         Une boule de neige est habituellement un petit souvenir de voyage souvent\
                         plein de poussière posé sur une étagère. Celle-ci est un peu plus grande\
                         et sert à secouer des comédiens.\
                         \
                        <br /><em>Machine réalisée par Henri Gallot-Lavallée et mise en scène par Sophie Deck et Serenella Converti.</em>\
                        '
                },
                {
                    image: 'img/creations/1997-histoires-jacqueline.jpeg',
                    title: '1997 - LES PETITES HISTOIRES DE JACQUELINE',
                    text : '\
                        Jacqueline est une jolie poulette grassouillette,\
                        coquette qui habite dans son arbre et à qui il arrive\
                        de nombreuses aventures.\
                        \
                        <br /><em> Spectacle réalisé par Henri Gallot-Lavallée et Sophie Deck. Mise en scène de Sophie Deck et Serenella Converti. </em>\
                        '
                },
                {
                    image: 'img/creations/1997-strip-tease.jpeg',
                    title: '1997 - STRIP-TEASE DE POULE A 20 CENTIMES',
                    text : '\
                        Le principe du Strip-tease à 20 centimes est simple :\
                        on introduit une pièce dans le monnayeur, s\'ouvre alors délicatement\
                        un rideau de velours qui nous laisse apercevoir, dans un décor\
                        de petit cabaret, une poule sans plumes joliment vêtue.\
                        Celle-ci soulève nonchalamment sa robe, puis le rideau se referme.\
                        Et là, les yeux émerveillés par tant de poésie et de sensualité,\
                        on se dit qu\'on en a pour son argent.\
                        \
                        <br /><em>Machine de spectacle réalisée et mise en scène par Sophie Deck. Motorisation réalisé par Henri Gallot-Lavallée.</em>\
                        '
                },
                {
                    image: 'img/creations/1997-fiat.jpeg',
                    title: '1997 - FIAT 500',
                    text : '\
                        Une voiture se promène tranquillement au première étage\
                        d\'une Caisse d\'Epargne. Malheureusement, au second étage,\
                        un chasseur chasse un canard, il rate son coup et créé un accident.\
                        \
                        <br /><em>Machine à effet réalisée par Henri Gallot-Lavallée, Etienne Louvieaux et Denis Merlet pour l\'inauguration de la Caisse d\'Epargne de Nantes.</em>\
                        '
                },
                {
                    image: 'img/creations/1997-machine-frein.jpeg',
                    title: '1997 - LA MACHINE A COUPS DE FREIN',
                    text : '\
                        Cette machine imite le son d\'un grand coup de frein grâce à un mouvement\
                        de vérin, sur lequel est fixé un morceau de polystyrène qui frotte sur une vitre.\
                        Le son produit est une pure simulation.\
                        \
                        <br /><em>Machine à effet sonore produit par la compagnie Monique et réalisée par Etienne Louvieaux.</em>\
                        '
                },
                {
                    image: 'img/creations/1996-machine-tequila.jpeg',
                    title: '1996 - LA MACHINE A PREPARER  DE LA TEQUILA FRAPPEE',
                    text : '\
                        La machine à servir la tequila devrait permettre de vous proposer\
                        le plus rapidement possible cette boisson; mais en fait, son principal\
                        intérêt consiste à vous empêcher de la boire trop vite....\
                        \
                        <br /><em>Machine de spéctacle réalisée et mise en scéne par henri Gallot-Lavallée. Machine qui a endiablé de nombreuses soirées parisiennes.</em>\
                        '
                },
                {
                    image: 'img/creations/1996-machine-television.jpeg',
                    title: '1996 - LA MACHINE A REGARDER LA TELEVISION',
                    text : '\
                         Cette machine très pratique consiste à éviter l\'effet dit de «zapping».\
                         Il vous suffit juste de communiquer le programme que vous souhaitez regarder\
                         aux deux costauds qui actionnent la machine.\
                         \
                        <br /><em>Machine de spectacle réalisée et mise en scène par Henri Gallot-Lavallée.</em>\
                        '
                },
                {
                    image: 'img/creations/1995-machine-multiplication.jpeg',
                    title: '1995 - LA MACHINE A APPRENDRE LES TABLES DE MULTIPLICATION',
                    text : '\
                         Quoiqu\'un peu encombrante, cette machine est très pratique car\
                         elle vous permet de ne plus avoir recours à votre cerveau pour\
                         effectuer des multiplications. Cette machine possède un secret\
                         très utile pour ne plus avoir à apprendre par coeur ces tables\
                         qui nous ont fait tant souffrir.\
                         \
                        <br /><em>Machine imaginée par Henri Gallot-Lavallée</em>\
                        '
                },
                {
                    image: 'img/creations/1994-machine-champagne.jpeg',
                    title: '1994 - LA MACHINE A SABRER LE CHAMPAGNE',
                    text : '\
                        La machine à sabrer le Champagne est une ré-interprétation d’une vieille\
                        tradition qui consistait à briser le col des bouteilles pour célébrer\
                        une victoire, mais elle est surtout un prétexte pour vous faire boire du Champagne.\
                        \
                        <br /><em>Machine de spéctacle réalisée et mise en scène par Henri Gallot-Lavallée et Dominique Diouf.</em>\
                        '
                },
                {
                    image: 'img/creations/1992-machine-robes.jpeg',
                    title: '1992 - LA MACHINE A SOULEVER LES ROBES',
                    text : '\
                        Ces structures roulantes englobant les porteuses de robes,\
                        aux lignes fines, ouvertes et très aériennes soutiennent\
                        et soulignent les formes tout en élegance. Un système complexe\
                        de poulies et de câbles reliés aux robes de ces dames,\
                        leur permet de les soulever en cadence.\
                        \
                        <br /><em>Machine de spéctacle réalisée par Henri Gallot-Lavallée pour la compagnie Royal de Luxe.</em>\
                        '
                },
                {
                    image: 'img/creations/1992-machine-lustres.jpeg',
                    title: '1992 - LA MACHINE A PORTER LES LUSTRES',
                    text : '\
                        Ces machines de parade à vocation esthétique accompagnent\
                        les machines à soulever les robes,\
                        elles sont chacune manipulées par deux valets de chambre.\
                        \
                        <br /><em>Machine de spéctacle réalisée par Henri Gallot-Lavallée pour le spectacle LA GRANDE PARADE (Compagnie Royal de Luxe).</em>\
                        '
                },
                {
                    image: 'img/creations/1990-canon-feu.jpeg',
                    title: '1990 - LE CANON A FEU',
                    text : '\
                        Secret défense : même la société Dassault était prête à\
                        payer plusieurs millions de dollars pour récupérer les\
                        plans afin d\'installer ce canon sur son dernier char.\
                        \
                        <br /><em>Canon réalisé en collaboration avec Didier Gallot-Lavallée et M. Hugron pour le spectacle LA VERITABLE HISTOIRE DE FRANCE de la compagnie Royal de Luxe.</em>\
                        '
                },
                {
                    image: 'img/creations/1990-ventilo-parachutiste.jpeg',
                    title: '1990 - GROS VENTILO POUR UN PARACHUTISTE',
                    text : '\
                        Ce ventilateur à hélice sur chariot peut générer un flux d\'air\
                        suffisant pour gonfler un parachute. Le ventilo sur châssis\
                        pivotant s\'incline pour mantenir le parachutiste sur un bon\
                        angle et pour le faire bouger.\
                        \
                        <br /><em>Machine réalisée par henri Gallot-Lavallée pour le spectacle LA VERITABLE HISTOIRE DE FRANCE pour la compagnie Royal de Luxe.</em>\
                        '
                }
            ]
    };

    renderAt( 'body', createElement('creations', { data: data }) );
}