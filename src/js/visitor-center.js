import { getParkVisitorCenterDetails } from "./parkService.mjs";
import {setHeaderFooter} from "./setHeaderFooter.mjs";
import {getParkData} from "./parkService.mjs";

function getParam(id) {
    const params = new URLSearchParams(window.location.search);
    return params.get(id);
}

const parkCode = getParam("c");
if(!parkCode) window.location.href = "index.html";

getParkVisitorCenterDetails(parkCode).then(data => {
    console.log(data);
    let images = data.images.map(img => img.url);
    document.querySelector("#visitor-center__name").textContent = data.name;
    document.querySelector("#hero-img").src = images.shift();
    document.querySelector("#hero-img-caption").textContent = data.description;
    document.querySelector("#accordion__address").innerHTML =  data.addresses.map(address => `<h5>${address.type}</h5><p>${address.line1}</p><p>${address.city}, ${address.state} ${address.postalCode}</p>`).join("");
    document.querySelector("#accordion__directions").innerHTML = `<p>${data.directionsInfo}</p>`;
    document.querySelector("#accordion__amenities").innerHTML = data.amenities.map(amenity => `<p>${amenity}</p>`).join("");
    document.querySelector("#accordion__contact").innerHTML = `<h5>Email</h5>
    ${data.contacts.emailAddresses.map(email => `<p>${email.emailAddress}</p>`).join("")}
    <h5>Phone</h5>
    ${data.contacts.phoneNumbers.map(phone => `<p>${phone.type}: ${phone.phoneNumber}</p>`).join("")}`;
});

const parkData = getParkData();

parkData.then(data => {
    setHeaderFooter(data);
});

document.querySelectorAll(".accordions h3").forEach(button => {
    button.addEventListener("click", (e) => {
        const accordionItem = e.target.closest("h3").parentElement;
        console.log(accordionItem);
        const wholeAccordion = accordionItem.parentElement;
        Array.from(wholeAccordion.children).forEach(item => {
            item.querySelector(".accordion-item__content").style.maxHeight = 0;
            item.classList.remove("active");
        });
        accordionItem.classList.toggle("active");
        const div = accordionItem.querySelector(".accordion-item__content");
        div.style.maxHeight = div.scrollHeight + "px";
        
    });
});
