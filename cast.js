// =====================================
// ELEMENTS
// =====================================

const castGrid = document.getElementById("castGrid");

const modal = document.getElementById("bioModal");
const modalImage = document.getElementById("modalImage");
const modalName = document.getElementById("modalName");
const modalRole = document.getElementById("modalRole");
const modalBio = document.getElementById("modalBio");
const modalLinks = document.getElementById("modalLinks");

const closeModal = modal ? modal.querySelector(".close-modal") : null;

let lastFocusedElement = null;


// =====================================
// BUILD SECTION
// =====================================

function buildSection(title, roster) {

    if (!castGrid) {
        return;
    }

    const section = document.createElement("section");

    section.className = "people-section";

    section.innerHTML = `
        <h2 class="section-title">${title}</h2>
        <div class="cast-grid"></div>
    `;

    const grid = section.querySelector(".cast-grid");

    const people = HeatedRivalryBios.buildPeople(roster);

    people.forEach(person => {

        const card = document.createElement("article");

        card.className = "cast-card";
        card.tabIndex = 0;
        card.setAttribute("role", "button");
        card.setAttribute("aria-label", `View bio for ${person.name}, ${person.role}`);

        card.innerHTML = `

            <div class="cast-image">
                <img
                    src="${person.image}"
                    alt="${person.name}"
                    loading="lazy"
                    width="400"
                    height="400"
                >
                </div>

            <div class="cast-info">
                    <h3>${person.name}</h3>
             <p>${person.role}</p>
             </div>
        `;

        card.addEventListener("click", () => {

            openModal(person);

        });

        card.addEventListener("keydown", (event) => {

            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                openModal(person);
            }

        });

        grid.appendChild(card);

    });

    castGrid.appendChild(section);

}



// =====================================
// MODAL
// =====================================

function openModal(person) {

    if (!modal) {
        return;
    }

    lastFocusedElement = document.activeElement;

    modalImage.src = person.image;

    modalImage.alt = person.name;

    modalName.textContent = person.name;

    modalRole.textContent = person.role;

    modalBio.innerHTML = person.bioHtml;

    modalLinks.innerHTML = "";

    if (person.extra) {

        const extra = document.createElement("p");

        extra.className = "modal-extra";

        extra.innerHTML = `<strong>Also:</strong> ${person.extra}`;

        modalLinks.appendChild(extra);

    }

    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";

    if (closeModal) {
        closeModal.focus();
    }

}



// =====================================
// CLOSE
// =====================================

function closeBio() {

    if (!modal || !modal.classList.contains("active")) {
        return;
    }

    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";

    if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
        lastFocusedElement.focus();
    }

}

if (closeModal) {
    closeModal.setAttribute("aria-label", "Close bio");
    closeModal.addEventListener("click", closeBio);
}

if (modal) {

    modal.addEventListener("click", (e) => {

        if (e.target === modal) {

            closeBio();

        }

    });

}

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape" && modal && modal.classList.contains("active")) {

        closeBio();

    }

});



// =====================================
// BUILD PAGE
// =====================================

if (castGrid && window.HeatedRivalryBios) {

    buildSection(
        "THE CAST",
        HeatedRivalryBios.rosters.cast
    );

    buildSection(
        "CREATIVE TEAM",
        HeatedRivalryBios.rosters.creative
    );

}
