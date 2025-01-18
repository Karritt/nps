import { getParkData } from "./parkService.mjs";
import { mediaCardTemplate} from "./templates.mjs";
import {setHeaderFooter} from "./setHeaderFooter.mjs";

const parkData = getParkData();

function setMainIntro(data){
    document.querySelector(".intro").innerHTML = `
    <h1>${data.fullName}</h1>
    <p>${data.description}</p>`;
}

function setMainInfo(infos){
    const infoBody = infos.map(info => 
        mediaCardTemplate(info)
    ).join("");
    document.querySelector(".info").innerHTML = infoBody;
}

setMainIntro(parkData);
setMainInfo(parkData.infoLinks);
setHeaderFooter(parkData);