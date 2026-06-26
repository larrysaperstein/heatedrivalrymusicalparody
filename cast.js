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

const closeModal = document.querySelector(".close-modal");


// =====================================
// BUILD SECTION
// =====================================

function buildSection(title, roster){

    const section = document.createElement("section");

    section.className = "people-section";

    section.innerHTML = `
        <h2 class="section-title">${title}</h2>
        <div class="cast-grid"></div>
    `;

    const grid = section.querySelector(".cast-grid");

    const people = HeatedRivalryBios.buildPeople(roster);

    people.forEach(person=>{

        const card = document.createElement("article");

        card.className = "cast-card";

        card.innerHTML = `

            <div class="cast-image">
                <img
                    src="${person.image}"
                    alt="${person.name}"
                    loading="lazy"
                >
                </div>

            <div class="cast-info">
                    <h3>${person.name}</h3>
             <p>${person.role}</p>
             </div>
        `;

        card.addEventListener("click",()=>{

            openModal(person);

        });

        grid.appendChild(card);

    });

    castGrid.appendChild(section);

}



// =====================================
// MODAL
// =====================================

function openModal(person){

    modalImage.src = person.image;

    modalImage.alt = person.name;

    modalName.textContent = person.name;

    modalRole.textContent = person.role;

    modalBio.innerHTML = person.bioHtml;

    modalLinks.innerHTML = "";

    if(person.extra){

        const extra = document.createElement("p");

        extra.className = "modal-extra";

        extra.innerHTML = `<strong>Also:</strong> ${person.extra}`;

        modalLinks.appendChild(extra);

    }

    modal.classList.add("active");

    document.body.style.overflow="hidden";

}



// =====================================
// CLOSE
// =====================================

function closeBio(){

    modal.classList.remove("active");

    document.body.style.overflow="";

}

closeModal.addEventListener("click",closeBio);

modal.addEventListener("click",(e)=>{

    if(e.target===modal){

        closeBio();

    }

});

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        closeBio();

    }

});



// =====================================
// BUILD PAGE
// =====================================

buildSection(
    "THE CAST",
    HeatedRivalryBios.rosters.cast
);

buildSection(
    "CREATIVE TEAM",
    HeatedRivalryBios.rosters.creative
);