registerComponent('404', {
    render()
    {
        let banner = createElement( 'banner' );

        let error =
            createElement('pannel', {

                        text: `erreur 404 : <em>${window.location.href}</em> n'existe pas.`

            });

        let footer = createElement( 'footer' );

        let view =
            createElement('div', {

                className: '404'

            },
            [banner, error, footer] );

        return view;
    }
});

function render404()
{
    document.body.innerHTML = '';

    renderAt( 'body', createElement('404') );
}