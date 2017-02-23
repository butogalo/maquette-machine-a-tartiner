registerComponent('accueil', {
    render(props={ data: {} })
    {
        let banner = createElement( 'banner' );

        let firstPannel = createElement( 'first-pannel' );

        let pannels = props.data.pannels.map(
            (content) =>
            {
                let text = content[props.data.lang];
                let pannel =
                    createElement('pannel', {

                        text: text

                    });
                
                return pannel;
            }
        );

        let footer = createElement( 'footer' );

        let view =
            createElement('div', {

                className: 'view'

            },
            [banner, firstPannel].concat(pannels).concat(footer) );

        return view;
    }
});
    


function renderAccueil()
{
    document.body.innerHTML = '';
    window.scrollTo(0, 0);

    let data =
    {
        lang: 'fr',
        pannels: [ 
                    {
                        fr: "\
                            La machine à tartiner est un spectacle très beau (je vous le recommande)\
                            qui a tourné tourne et tournera encore pendant de nombreuse années,mais c'est\
                            aussi UNE MARQUE ! Et oui les temps changent, la machine à tartiner devient\
                            une signature, un mode de pensée en somme, elle veut modestement regarder\
                            l’horizon et laisser derrière elle tout le reste.\
                            ",
                        en: "\
                            La machine à tartiner is a beautiful spectacle (I recommend it)\
                            that has been played, is been playing, and will be played during the many years to come,\
                            but it is also A MARK! Everything's changing, la machine à tartiner is becoming\
                            a signature, a mindset, she wants to take an humble look at the horizon and let\
                            everything else behind her.\
                            "
                    }
                ]
    };

    renderAt( 'body', createElement('accueil', { data: data }) );
}