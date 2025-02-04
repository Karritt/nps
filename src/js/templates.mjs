import spritePath from '../images/sprite.symbol.svg';


export function parkInfoTemplate(data){
    return `<h2>${data.name}</h2><p>National Park<br>${data.states}</p>`;
}

export function mediaCardTemplate(info){
    return `<div class="media-card">
        <img src="${info.image}" alt="Image for ${info.name}">
        <a href="${info.link}"><h3>${info.name}</h3></a>
        <p>${info.description}</p>
    </div>`;
}


export function alertCardTemplate(alert){
    let icon;
    switch (alert.category) {
        case "Park Closure":
            icon = "closure";
            break;
        default:
            icon = alert.category.toLowerCase();
    }
    return `<div class="alert-card">
        <div class="alert-header">
        <svg class="icon">
            <use xlink:href="${spritePath}#alert-${icon}"></use>
        </svg>
        <h5>${alert.title}</h5>
        </div>
        <p>${alert.description}</p>
    </div>
    `;
}

export function visitorServiceCardTemplate(service){
    return `<div class="service-card">
        <h5>${service.name}</h5>
        <p>${service.description}</p>
    </div>`;
}