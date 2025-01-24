import { parkInfoTemplate } from "./templates.mjs";
export function setHeaderFooter(data){
    setHeaderInfo(data);
    setFooterInfo(data);
}

function setHeaderInfo(data){
    const disclaimer = document.querySelector(".disclaimer > a");
    disclaimer.href = data.url;
    disclaimer.innerHTML = data.fullName;

    document.querySelector("head > title").textContent = data.fullName;
    document.querySelector(".main-image > img").src = data.images[1].url;
    document.querySelector(".main-image-overlay").innerHTML = parkInfoTemplate(data);

}

function setFooterInfo(data){
    const mailingAddress = data.addresses.find(address => address.type === "Mailing");
    const phone = data.contacts.phoneNumbers.find(phone => phone.type === "Voice");
    document.querySelector("#park-footer").innerHTML = `
    <h5>CONTACT INFO</h5>
    <h6>Mailing Address:</h6>
    <div><p>${mailingAddress.line1}</p>
    <p>${mailingAddress.city}, ${mailingAddress.stateCode} ${mailingAddress.postalCode}<p></div>
    <h6>Phone:</h6>
    <p>${phone.phoneNumber}</p>
    `;
}