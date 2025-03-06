export function enableNavigation() {
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
    const smallerNavMenuButtons = document.querySelectorAll(".global-nav__split-button__toggle");
    smallerNavMenuButtons.forEach(button => {
        button.addEventListener("click", e => {
            let target = e.target;
            if (target.tagName !== "BUTTON") {
                target = target.closest("button");
            }
            if (target.getAttribute("aria-expanded") == "true") {
                target.setAttribute("aria-expanded", "false");
                target.parentElement.nextElementSibling.style.display = "none";
            } else {
                target.setAttribute("aria-expanded", "true");
                target.parentElement.nextElementSibling.style.display = "block";
            }
        });
    });
}