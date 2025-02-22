import { getParkData, getParkInfo } from "./parkService.mjs";
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

function enableNavigation() {
    const button = document.querySelector("#global-nav-toggle");
    button.addEventListener("click", e => {
        let target = e.target;
        if (target.tagName !== "BUTTON") {
            target = target.closest("button");
        }
        if (target.getAttribute("aria-expanded") == "false") {
            target.setAttribute("aria-expanded", "true");
        } else {
            target.setAttribute("aria-expanded", "false");
        }
        //target.querySelector("#global-nav-toggle__close").classList.toggle("hidden");
        //target.querySelector("#global-nav-toggle__open").classList.toggle("hidden");
    });
}

parkData.then(data => {
    console.log(data);
    setMainIntro(data);
    setHeaderFooter(data);
    console.log(getParkInfo(data));
    setMainInfo(getParkInfo(data));
    enableNavigation();
})

