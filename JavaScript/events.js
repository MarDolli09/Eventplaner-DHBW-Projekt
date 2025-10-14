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
