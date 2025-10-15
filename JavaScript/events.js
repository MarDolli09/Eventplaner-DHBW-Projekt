const form = document.querySelector('form');
const titleInput = form.querySelector('input[type="text"]');
const dateInput = form.querySelector('input[type="date"]');
const descInput = form.querySelector('textarea');
const sortSelect = document.getElementById('sortSelect');
const searchInput = document.querySelector(".controls input[type=text]");
const eventsContainer = document.querySelector('section.card:last-of-type');

let events = [];

function showEvents() {
    //filtering the array based on input of search field
    let filtered = events.filter(event =>
        event.title.toLowerCase().includes(searchInput.value.toLowerCase()) ||
        event.description.toLowerCase().includes(searchInput.value.toLowerCase())
    );

    //sort events by date (ascending/descending) or by title (A–Z / Z–A) based on the selection in the dropdown menu
    if (sortSelect.value.includes("Datum")) {
        filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
        if (sortSelect.value.includes("absteigend")) {
            filtered.reverse();
        }
    } else {
        filtered.sort((a, b) =>
            sortSelect.value.includes("A–Z")
                ? a.title.localeCompare(b.title, "de")
                : b.title.localeCompare(a.title, "de")
        );
    }

    //remove the old events from the container
    eventsContainer.querySelectorAll('.event-item').forEach(event => event.remove());

    //create the html div-elements for the events and add them to the eventsContainer
    filtered.forEach(event => {
        const div = document.createElement("div");
        div.className = "event-item";
        div.innerHTML = `
      <h3>${event.title}</h3>
      <div class="meta">Datum: ${new Date(event.date).toLocaleDateString("de-DE")}</div>
      <p>${event.description}</p>
    `;
        eventsContainer.appendChild(div);
    });
}

//add event to events array
form.addEventListener('submit', e => {
    e.preventDefault();
    const title = titleInput.value;
    const date = dateInput.value;
    const description = descInput.value;

    if (!title || !date || !description) return;

    events.push({ title, date, description });
    form.reset();
    showEvents();
});

//putting example events into array
events = [
    { title: 'Rock am Ring', date: '2025-06-06', description: 'Eines der größten Rock-Festivals in Deutschland mit internationalen Bands.' },
    { title: 'Hurricane Festival', date: '2025-06-20', description: 'Open-Air Festival mit Rock, Indie und Pop im Norden Deutschlands.' },
    { title: 'Fusion Festival', date: '2025-06-27', description: 'Alternatives Festival mit elektronischer Musik, Theater und Kunst in Mecklenburg-Vorpommern.' },
    { title: 'Tomorrowland', date: '2025-07-18', description: 'Legendäres EDM-Festival in Belgien mit spektakulären Bühnen und DJs.' },
    { title: 'Lollapalooza Berlin', date: '2025-09-06', description: 'Vielfältiges Musikfestival mit Pop, Rock, Hip-Hop und EDM.' }
];

//eventlisteners for the search and sort fields
sortSelect.addEventListener("change", showEvents);
searchInput.addEventListener("input", showEvents);

showEvents();