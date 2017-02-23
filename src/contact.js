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

                className: 'presentation-creations'

            },
            [title]);
        
        return presentation;
    }
});

registerComponent('contact-informations', {
    render()
    {
        let contactData =
            [
                {
                    name : 'Henri Gallot-Lavallée',
                    job  : 'Designer Metteur en scène et créateur de machines',
                    phone: '07 83 09 68 88',
                    email: 'henrigallotlavallee@gmail.com'
                },
                {
                    name : 'Mathieu Lamour',
                    job  : 'Chargé de diffusion et responsable technique',
                    email: 'mlevenements@hotmail.fr ',
                    phone: '-'
                }
            ];
        
        let contactInfos =
            contactData.map(
                (data) =>
                {
                    let name =
                        createElement('p', {

                            className: 'name',
                            innerHTML: data.name

                        });
                    
                    let job =
                        createElement('p', {

                            className: 'job',
                            innerHTML: data.job

                        });

                    let phone =
                        createElement('a', {

                            className: 'phone',
                            innerHTML: data.phone,
                            href: `tel:${data.phone}`

                        });
                    
                    let email =
                        createElement('a', {

                            className: 'email',
                            innerHTML: data.email,
                            href: `mailto:${data.email}`

                        });

                    let contact =
                        createElement('div',{

                            className: 'contact'

                        },
                        [ name, job, email, phone ]);
                    
                    return contact;
                }
            );

        let infos =
            createElement('div',{

                className: 'contact-informations'

            },
            contactInfos);
        
        return infos;
    }
});

registerComponent('contact', {
    render(props={ data: {} })
    {
        let banner = createElement( 'banner' );

        let firstPannel =
            createElement('presentation-about', {

                title: 'CONTACT'

            });

        let infos = createElement( 'contact-informations' );

        let footer = createElement( 'footer' );

        let view =
            createElement('div', {

                className: ''

            },
            [ banner, firstPannel, infos, footer ] );

        return view;
    }
});
    


function renderContact()
{
    document.body.innerHTML = '';
    window.scrollTo(0, 0);

    let data =
    { };

    renderAt( 'body', createElement('contact', { data: data }) );
}