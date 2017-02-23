


registerComponent('menu', {
    render()
    {
        let menuItemsData =
            [
                {
                    link: '#contact',
                    text: 'contact',
                    onclick()
                    {
                        renderContact();
                    }
                },
                {
                    link: '#about',
                    text: 'à propos',
                    onclick()
                    {
                        renderAbout();
                    }
                }
            ];

        let menuItems =
            menuItemsData.map(
                (data) =>
                {
                    let link =
                        createElement('a', {
                            
                            href: data.link,
                            innerHTML: data.text,
                            onclick: data.onclick

                        });

                    let item =
                        createElement('li', {}, [link]);
                    
                    return item;
                }
            );
        

        let menuItemsContainer =
            createElement('ul', {

                className: 'menu-items'

            },
            menuItems);
        

        let menuIcon =
            createElement('img', {

                className: 'menu-logo',
                src: '/img/menu.svg',

                onclick()
                {
                    let items = document.getElementsByClassName('menu-items')[0];
                    items.classList.toggle('open');
                }

            });

        let menu =
            createElement('div', {

                className: 'menu'

            },
            [menuIcon, menuItemsContainer]);
        return menu;
    }
});

registerComponent('banner', {
    render()
    {
        let menu =
            createElement( 'menu' );
        
        let categoriesLeftData =
            [
                {
                    link: '#accueil',
                    text: 'ACCUEIL',
                    onclick()
                    {
                        renderAccueil();
                    }
                },

                {
                    link: '#creations',
                    text: 'LES CRÉATIONS',
                    onclick()
                    {
                        renderCreations();
                    }
                }
            ];
        
        let categoriesRightData =
            [
                {
                    link: '#marque',
                    text: 'LA MARQUE',
                    onclick()
                    {
                        renderMarque();
                    }
                    
                },
 
                {
                    link: 'https://fr.shopify.com/',
                    text: 'LA BOUTIQUE'
                }
            ];
        
        let createCategories =
            (categories, className) =>
            {
                return categories.map(
                    (categorie) =>
                    {
                        let link =
                            createElement('a', {

                                className: className,
                                href: categorie.link,
                                innerHTML: categorie.text,
                                onclick: categorie.onclick

                            });
                        
                        return link;
                    }
                );
            };
        
        let categoriesLeft =
            createCategories( categoriesLeftData, 'categories-left categorie' );
                
        let categoriesRight =
            createCategories( categoriesRightData, 'categories-right categorie' );
            

        let logo =
            createElement('img', {

                src: '/img/iconMachine2.svg',
                id: 'logo',
                width: '110'
                
            });
        
        let title =
            createElement('span', {

                className: 'title',
                innerHTML: 'LA MACHINE À TARTINER'

            });

        let banner =
            createElement('div', {

                className: 'banner'

            },
            [menu].concat(categoriesLeft).concat([title]).concat(categoriesRight).concat([logo]) );
        
        return banner;
    }
});

registerComponent('first-pannel', {
    render()
    {
        let image =
            createElement('img', {

                src: '/img/header.jpg'

            });

        let pannel =
            createElement('div', {

                id: 'first-pannel',

            },
            []);
        
        return pannel;
    }
});

registerComponent('pannel', {
    render(props={ text: '' })
    {
        let text =
            createElement('p', {

                className: 'text',
                innerHTML: props.text

            });

        let pannel =
            createElement('div', {

                className: 'pannel'

            },
            [text]);
        
        return pannel;
    }
});


registerComponent('footer', {
    render()
    {
        let copyright =
            createElement('p', {

                id: 'copyright',
                innerHTML: ' Copyright © 2017 La Machine à Tartiner. All Rights Reserved. All prices EUR.'

            });
        
        let footer =
            createElement('div', {

                id: 'footer'
                
            },
            [copyright]);
        
        return footer;
    }
});

registerComponent('view', {
    render(props={ data: {} })
    {
        let banner = createElement( 'banner' );

        let firstPannel = createElement( 'first-pannel' );

        let pannels = data.pannels.map(
            (content) =>
            {
                let text =  content[data.lang];
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

