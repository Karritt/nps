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