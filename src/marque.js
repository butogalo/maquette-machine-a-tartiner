registerComponent('presentation-marque', {
    render()
    {
        let title =
            createElement('h3', {

                className: 'presentation-title',
                innerHTML: 'LA MARQUE'

            });
        
        let quotationMark =
            createElement('span', {

                className: 'quotation-mark',
                innerHTML: '❝'

            });
        

        let text =
            createElement('p', {

                className: 'text',
                innerHTML: '\
                           La machine à tartiner se veut une nouvelle ligne,<br />\
                           qui a toutes les chances de laisser derrière elle tout le reste\
                           '

            });

        let ellipsisMark =
            createElement('span', {

                className: 'ellipsis-mark',
                innerHTML: '…'

            });
        
        let textContainer =
            createElement('div', {

                className: 'text-container'

            },
            [text, ellipsisMark]);
        
        
        
        let content =
            createElement('div', {

                className: 'presentation-content'

            },
            [quotationMark, textContainer]);


        let presentation =
            createElement('div', {

                className: 'presentation'

            },
            [title, content]);
        
        return presentation;
    }
});

registerComponent('index-products', {
    render()
    {
        let categoriesData =
            [
                {
                    link: '#Lampes',
                    text: 'LAMPES'
                },
                {
                    link: '#Meubles',
                    text: 'MEUBLES'
                },
                {
                    link: '#Exterieur',
                    text: 'EXTERIEUR'
                }
            ];
        
        let categories =
            categoriesData.map(
                (data) =>
                {
                    let link =
                        createElement('a', {

                            href: data.link,
                            innerHTML: data.text

                        });
                    
                    return link;
                }
            );

        let index =
            createElement('div', {

                className: 'index-products'

            },
            categories);
        
        return index;
    }
});

registerComponent('product', {
    render(props={ image: '', name: '', description: '', orientation: '' })
    {
        let image =
            createElement('img', {

                className: 'product-image',
                src: props.image

            });
        
        let name =
            createElement('p', {

                className: 'product-name',
                innerHTML: props.name

            });
        
        let description =
            createElement('p', {

                innerHTML: props.description

            });
        
        let textContainer =
            createElement('div', {

                className: 'text-container'

            },
            [name, description]);
        
        let product =
            createElement('div', {

                className: `product ${props.orientation}`,

            },
            [image, textContainer]);
        
        return product;
    }
});

registerComponent('product-category', {
    render(props={ title: '', products: [] })
    {
        let title =
            createElement('p', {

                className: 'category-title',
                innerHTML: props.title

            });
        
        let products = 
            props.products.map(
                (data, index) =>
                {

                    let orientation = index % 2 == 0
                                    ? 'left'
                                    : 'right';

                    let product =
                        createElement('product', {

                            image: data.image,
                            name: data.name,
                            description: data.description,
                            orientation: orientation

                        });
                    
                    return product;
                }
            );
        
        let categorie =
            createElement('div', {

                id: props.title,
                className: 'product-category'

            },
            [title].concat(products) );
        
        return categorie;
    }
});

registerComponent('marque', {
    render(props={ data: {} })
    {
        let banner = createElement( 'banner' );

        let firstPannel = createElement( 'presentation-marque' );

        let index = createElement( 'index-products' );

        let categories = props.data.categories.map(
            (data) =>
            {
                let category =
                    createElement('product-category', {

                        title: data.title,
                        products: data.products

                    });
                
                return category;
            }
        );

        let footer = createElement( 'footer' );

        let view =
            createElement('div', {

                className: 'view'

            },
            [banner, firstPannel, index].concat(categories).concat(footer) );

        return view;
    }
});



function renderMarque()
{
    document.body.innerHTML = '';
    window.scrollTo(0, 0);

    let data =
        {
            lang: 'fr',
            categories:
                [
                    {
                        title: 'Lampes',
                        products:
                            [
                                {
                                    image: 'img/objets/lampe_alphabet.jpg',
                                    name: 'Lampe alphabet',
                                    description: '\
                                        Description lampe alphabet<br />\
                                        Minus suscipit sequi porro facere sit veritatis.<br />\
                                        Voluptates enim mollitia beatae. Maxime facere quis\
                                        consequatur incidunt dolor dolorem quos enim. Totam eum explicabo aut omnis<br />\
                                        quis voluptatum aut. Quaerat soluta illo pariatur eum qui rerum rerum.<br />\
                                        Explicabo sint rem qui molestiae recusandae.<br />\
                                        <br />\
                                        Maiores voluptas tempore cum saepe.<br />\
                                        Tempore porro placeat vel minus dolorem ad est.<br />\
                                        Perspiciatis nesciunt rerum rem.<br />\
                                        Est et neque recusandae sunt facilis.<br />\
                                        Et ex omnis eaque eos id sunt et ut.\
                                        '
                                },
                                {
                                    image: 'img/objets/lampe_alphabet_grec.jpg',
                                    name: 'Lampe alphabet grec',
                                    description: '\
                                        Description lampe alphabet grec\
                                        lorem ipsum\
                                        dolorem sit amet\
                                        '
                                },
                                {
                                    image: 'img/objets/lampe_ciseaux.jpg',
                                    name: 'Lampe ciseaux',
                                    description: '\
                                        Description lampe ciseaux<br />\
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.\
                                        Nam suscipit lorem vel luctus aliquet. Integer id quam in\
                                        lectus consequat ultrices a a felis. Donec ultricies convallis\
                                        congue. Phasellus ultricies lectus nec purus porta malesuada.\
                                        '
                                }
                            ]
                    },
                    {
                        title: 'Meubles',
                        products:
                            [
                                {
                                    image: 'img/objets/meuble_indus_ouvert.jpg',
                                    name: 'Meuble TV industriel',
                                    description: '\
                                        Description meuble industriel<br />\
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />\
                                        Nam suscipit lorem vel luctus aliquet. Integer id quam in\
                                        '
                                },
                                {
                                    image: 'img/objets/table_basse.jpg',
                                    name: 'Table basse',
                                    description: '\
                                        Description table basse<br />\
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />\
                                        Nam suscipit lorem vel luctus aliquet. Integer id quam in<br />\
                                        lectus consequat ultrices a a felis. Donec ultricies convallis\
                                        '
                                },
                                {
                                    image: 'img/objets/bibliotheque2.jpg',
                                    name: 'Bibliothèque',
                                    description: '\
                                        Description bibliothèque<br />\
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />\
                                        Nam suscipit lorem vel luctus aliquet. Integer id quam in<br />\
                                        Nam suscipit lorem vel luctus aliquet. Integer id quam in<br />\
                                        lectus consequat ultrices a a felis.\
                                        '
                                }
                            ]
                    },
                    {
                        title: 'Exterieur',
                        products:
                            [
                                {
                                    image: 'img/objets/brasero2.jpg',
                                    name: 'Brasero d\'actualité',
                                    description: '\
                                        Description brasero\
                                        Maiores voluptas tempore cum saepe.<br />\
                                        Tempore porro placeat vel minus dolorem ad est.<br />\
                                        Perspiciatis nesciunt rerum rem.<br />\
                                        Est et neque recusandae sunt facilis.<br />\
                                        Et ex omnis eaque eos id sunt et ut.\
                                        '
                                },
                                {
                                    image: 'img/objets/feu_tajine1.jpg',
                                    name: 'Feu pour tajine',
                                    description: '\
                                        Description feu pour tajine\
                                        Maiores voluptas tempore cum saepe.<br />\
                                        Tempore porro placeat vel minus dolorem ad est.<br />\
                                        Perspiciatis nesciunt rerum rem.<br />\
                                        Est et neque recusandae sunt facilis.<br />\
                                        Et ex omnis eaque eos id sunt et ut.\
                                        '
                                }
                            ]
                    }
                ]
        };

    renderAt( 'body', createElement('marque', { data: data }) );
}

