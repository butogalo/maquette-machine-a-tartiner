registerComponent('presentation-about', {
    render(props={ title: '' })
    {
        let title =
            createElement('p', {

                className: 'title',
                innerHTML: props.title

            });
        
        let presentation =
            createElement('div', {

                className: 'presentation-about'

            },
            [title]);
        
        return presentation;
    }
});

registerComponent('presentation-la-machine-et-cie', {
    render()
    {
        let personsData =
            [
                {
                    name : 'Henri Gallot-Lavallée',
                    photo: 'img/avatars/henri.jpg',
                    bio  : '\
                        Né au Mans en 1962, Henri Gallot-Lavallée entame des études\
                        d\'économie politique à Paris VIII, mais très vite il décide de\
                        s\'aventurer dans le monde artistique notamment grâce à son frère\
                        Didier Gallot-Lavallée l\'un des membres fondateurs de la compagnie\
                        «Royal de Luxe». D\'un naturel rêveur et insouciant, il va suivre les\
                        pas de son frère en créant la compagnie "Monique" où il mettra en scène\
                        ses propres machines qui représentent pour lui un véritable moyen d\'expression.\
                        Il les fait exister pour raconter des histoires poétiques, humoristiques,\
                        mais aussi pour surprendre et faire réfléchir. Ce qui fait le charme de ces machines,\
                        ce n\'est pas l\'objet en lui-même mais l\'intéraction entre cet objet et le talent\
                        du manipulateur. Ce sont des machines à compliquer la vie, qui nous questionnent\
                        mais qui existent surtout pour nous faire rêver...\
                        '
                },
                {
                    name : 'Mathieu Lamour',
                    photo: 'img/avatars/mathieu.jpg',
                    bio  : '\
                        Mathieu a passé son enfance entre le Pays Basque et la région Poitou Charente.\
                        Sympathique et débrouillard, il concrétise des études dans le tourisme pour\
                        finalement obtenir une licence professionnelle en organisation événementielle.\
                        Après avoir travaillé comme chef de projet pour une agence parisienne pendant deux ans,\
                        il s\'installe à son compte et crée  l\'agence événementielle «ML Evénements» spécialisée\
                        dans la création d\'événements utiles et responsables, en France mais également à l\'international.\
                        Actif et polyvalent, Mathieu a plusieurs cordes a son arc, comme la prise de vue aérienne et\
                        le montage vidéo. Séduit par "La Machine à Tartiner" il à rejoint l\'équipe en qualité de\
                        responsable technique et chargé de diffusion.\
                        '
                },
                {
                    name : 'Serenella Coverti',
                    photo: 'img/avatars/serenella.jpg',
                    bio  : '\
                        Serenella travaille en France de 1985 à 1992 avec les groupes de théâtre :\
                        Royal De Luxe, Katertone Ets, Circo Archaos et Monique Tendence.\
                        Depuis 1992 elle est réalisatrice et actrice de spectacles comiques.\
                        De 2006 à aujourd\'hui, elle travaille à l\'organisation et la mise en scène de\
                        spectacles avec Henri Gallot - Lavallée et les Plonk & Replonk. Elle collabore\
                        comme directrice adjointe à la production de films en Italie et en France.\
                        Serenella est aussi l\'un des membre fondateur de TOTON & la famille FILMS\
                        en tant que producteur et assistante réalisateur.\
                        <br /><a href="http://www.serenellaconverti.com/">http://www.serenellaconverti.com/</a>\
                        '
                },
                {
                    name : 'Frida Gallot-Lavallée',
                    photo: 'img/avatars/frida.jpg',
                    bio  : '\
                         Née en 1993, Frida vient d\'obtenir son baccalauréat économique et social.\
                         Baignée depuis sa plus tendre enfance dans l\'univers artistique de ses parents,\
                         elle choisit de s\'orienter vers la comédie et commencera en septembre prochain\
                         le conservatoire de théatre de Nantes. Mais avant même de débuter, elle fait ses\
                         premiers pas de comédienne aux côtés de son père : elle anima avec succès à Annecy\
                         «La Machine à Tartiner.»\
                         '
                },
                {
                    name: 'Royal de Luxe',
                    bio : '<a href="http://www.royal-de-luxe.com"> http://www.royal-de-luxe.com </a>'
                },
                {
                    name: 'Les Plonk et Replonk',
                    bio : '<a href="http://www.plonkreplonk.ch/">http://www.plonkreplonk.ch/</a>'
                },
                {
                    name: 'Cirkatomik',
                    bio : '<a href="http://www.cirkatomik.com/">http://www.cirkatomik.com/</a>'
                },
                {
                    name: 'Compagnie du Dut - Caserolparc',
                    bio : '<a href=" http://ciedut.wordpress.com ">http://ciedut.wordpress.com/</a>'
                },
                {
                    name: 'Le Phun',
                    bio : '<a href=" http://www.lephun.net/ ">http://www.lephun.net/</a>'
                },
                {
                    name: 'MLEvénements solution freelance en organisation événementielle',
                    bio : '<a href=" www.mlevenements.com">http://www.mlevenements.com</a>'
                }
            ];
        let persons =
            personsData.map(
                (data) =>
                {
                    let photo =
                        createElement('div', {

                            className: 'photo',
                            style:
                                {
                                    backgroundImage: `url(${data.photo})`,
                                    backgroundRepeat: 'no-repeat',
                                    width: '200px'
                                }

                        });
                    
                    let name =
                        createElement('p', {

                            className: 'name',
                            innerHTML: data.name

                        });


                    let bio =
                        createElement('p', {

                            className: 'bio',
                            innerHTML: data.bio

                        });

                    let person =
                        createElement('div',{

                            className: 'person'

                        },
                        [photo, name, bio]);
                    
                    return person;
                }
            );

        
        let presentation =
            createElement('div', {

                className: 'presentation-la-machine-et-cie'

            },
            persons);
        
        return presentation;
    }
});

registerComponent('about', {
    render(props={ data: {} })
    {
        let banner = createElement( 'banner' );

        let presentation =
            createElement('presentation-about', {

                title: 'LA MACHINE ET CIE'

            });
        
        let presentationLaMachine = createElement( 'presentation-la-machine-et-cie' );

        let footer = createElement( 'footer' );

        let view =
            createElement('div', {

                className: 'view'

            },
            [banner, presentation, presentationLaMachine, footer]);

        return view;
    }
});
    


function renderAbout()
{
    document.body.innerHTML = '';
    window.scrollTo(0, 0);

    let data =
    { };

    renderAt( 'body', createElement('about', { data: data }) );
}