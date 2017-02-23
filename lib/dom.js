/**
 * DOM.js, a bare bone Vue.js
 */

let htmlTags =
    new Set(['input',
            'h1',
            'h2',
            'h3',
            'h4',
            'p',
            'div',
            'span',
            'a',
            'canvas',
            'img',
            'iframe',
            'head',
            'header',
            'audio',
            'video',
            'table',
            'tr',
            'td',
            'u',
            'ul',
            'ol',
            'li',
            'link',
            'pre',
            'button',
            'select',
            'option']);

let components = new Map();


function registerComponent(name, attributes)
{
    components.set(name, attributes);
}

function createElement(name, attributes=new Object(), children=new Array())
{
    if (name === undefined || name === null || name === '')
    {   
        let error = 'Error: The name provided to create the element is invalid.\n';
        error += 'Try to look for something like:\n';

        let symbol = name === ''
                     ? "''"
                     : name;
        error += `\tlet name = getName() -> ${symbol}\n`;
        error += '\tcreateElement(name, ...)\n';
        error += 'or\n';
        error += `\tcreateElement(${symbol}, ...)`;
        console.warn(error);

        return;
    }

    let element;

    if (components.has(name))
    {
        if (components.get(name).render == undefined)
            console.warn(`Error: the element <${name}> doesn't have a render function.`);

        element = Object.keys(attributes).length == 0
                  ? components.get(name).render()
                  : components.get(name).render(attributes);
    }
    else if (htmlTags.has(name))
    {
        element = document.createElement(name);

        for (let attribute in attributes)
        {
            element[attribute] = attributes[attribute];
        }
        
        // Needed for some reason, can't just add the style via `for(attribute in attributes)`.
        for (let cssRule in attributes.style)
        {
            element.style[cssRule] = attributes.style[cssRule];
        }

        for (let child of children)
        {
            if (child == undefined)
                console.warn(`Warning: one child of the element <${name}> is undefined and therefore has not been rendered.`);
            // An HTML node has always children.
            else if (child.children == undefined)
                console.warn(`Error: you are trying to append ${child} wich is not an HTML node, to <${name}>.`);
            else if (child)
                element.appendChild(child);
        }
    }
    else
    {
        console.warn(`Error: unknown element '<${name}>'. Make sure you registered/spelled it properly.`);
    }

    return element;
}

function renderAt(name, element)
{
    switch(name[0])
    {
        case '.':
            document.getElementsByClassName(name.split('.')[1])
                    .appendChild(element);
            break;
        case '#':
            document.getElementById(name.split('#')[1])
                    .appendChild(element);
            break;
        default:
            document.getElementsByTagName(name)[0]
                    .appendChild(element);
            break;
    }
}