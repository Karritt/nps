import "../css/style.css";
import "../css/conditions.css";

import { getActivitiesData, getParkData, getParkInfo, getAlertsData, getVisitorCenterData } from "./parkService.mjs";
import { alertCardTemplate, visitorServiceCardTemplate } from "./templates.mjs";
import {setHeaderFooter} from "./setHeaderFooter.mjs";

const parkData = getParkData();

function setAlerts(data){
    document.querySelector("#alerts").innerHTML = data.map(alert => alertCardTemplate(alert)).join("");
}

function setVisitorCenters(data) {
    document.querySelector("#visitor-services").innerHTML = data.map(alert => visitorServiceCardTemplate(alert)).join("");
}

function setActivities(data) {
    document.querySelector("#activities").innerHTML = "<ul><li>" + data.map(activity => activity.name).join("</li><li>") + "</li></ul>";
}

Array.from(document.querySelectorAll(".opener-section > h5")).forEach(el => {
    el.addEventListener("click", e => {
        e.currentTarget.parentElement.querySelector(".opener-target").classList.toggle("opener-closed");
    });
});

parkData.then(data => {
    console.log(data);
    setHeaderFooter(data);
    getAlertsData().then(res => {
        setAlerts(res);
    });
    getVisitorCenterData().then(res => {
        setVisitorCenters(res);
    });
    getActivitiesData().then(res => {
        console.log(res);
        setActivities(res);
    });
})

