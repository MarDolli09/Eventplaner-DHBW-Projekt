const titleInput = form.querySelector('input[type="text"]');
const dateInput = form.querySelector('input[type="date"]');
const descInput = form.querySelector('textarea');

let events = [];

//add event to events array
form.addEventListener('submit', e => {
    e.preventDefault();
    const title = titleInput.value;
    const date = dateInput.value;
    const description = descInput.value;

    if(!title || !date || !description) return;

    events.push({title, date, description});
    form.reset();
});

//Beispiel-Daten aus der Vorlage ins Array einfügen
events = [
    {title: 'Rock am Ring', date: '2025-06-06', description: 'Eines der größten Rock-Festivals in Deutschland mit internationalen Bands.'},
    {title: 'Hurricane Festival', date: '2025-06-20', description: 'Open-Air Festival mit Rock, Indie und Pop im Norden Deutschlands.'},
    {title: 'Fusion Festival', date: '2025-06-27', description: 'Alternatives Festival mit elektronischer Musik, Theater und Kunst in Mecklenburg-Vorpommern.'},
    {title: 'Tomorrowland', date: '2025-07-18', description: 'Legendäres EDM-Festival in Belgien mit spektakulären Bühnen und DJs.'},
    {title: 'Lollapalooza Berlin', date: '2025-09-06', description: 'Vielfältiges Musikfestival mit Pop, Rock, Hip-Hop und EDM.'}
];