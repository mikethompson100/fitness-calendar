// Renders the weekly calendar to the UI

/* function getStartOfWeek(date = new Date()) {
  const result = new Date(date);
  const dayOfWeek = result.getDay();
  result.setDate(result.getDate() - dayOfWeek);
  return result;
}

 */

export function render_UI() {
  const calendar = document.getElementById("calendar-container");
  const fragment = document.createDocumentFragment();


/* // ---- 1. Setup ----
const calendarEl = document.getElementById('calendar-container');

// Track the "anchor" date for the currently displayed week
let currentWeekStart = getStartOfWeek(new Date());
console.log("currentWeekStart", currentWeekStart);

// ---- 2. Helper: find the Sunday that starts a given date's week ----
function getStartOfWeek(date) {
    const result = new Date(date);
    const day = result.getDay(); // 0 = Sunday
    result.setDate(result.getDate() - day);
    result.setHours(0, 0, 0, 0);
    return result;
}

// ---- 3. Helper: build an array of 7 Date objects from a start date ----
function getWeekDates(startDate) {
    return Array.from({ length: 7 }, (_, i) => {
        const d = new Date(startDate);
        d.setDate(d.getDate() + i);
        return d;
    });
}

// ---- 4. The render function: builds the whole week off-screen, then inserts once ----
function renderWeek(startDate) {
    const dates = getWeekDates(startDate);

    // The "tray" — nothing here touches the visible page yet
    const fragment = document.createDocumentFragment();

    dates.forEach((date) => {
        const dayDiv = document.createElement('div');
        dayDiv.classList.add('day');

        // Store the real date on the element itself — no re-parsing later
        dayDiv.dataset.date = date.toISOString();

        const label = document.createElement('span');
        label.classList.add('day-label');
        // textContent = safe. Never innerHTML for data you didn't write yourself.
        label.textContent = date.toLocaleDateString(undefined, {
            weekday: 'short',
            day: 'numeric',
        });

        const button = document.createElement('button');
        button.classList.add('day-button');
        button.textContent = 'Select';
        button.dataset.action = 'select-day'; // used by the delegated listener below

        dayDiv.appendChild(label);
        dayDiv.appendChild(button);
        fragment.appendChild(dayDiv);
    });

    // Clear old week's content, then insert the whole tray in one shot
    calendarEl.replaceChildren(fragment);
}

// ---- 5. Event delegation: ONE listener handles every day-button, forever ----
calendarEl.addEventListener('click', (event) => {
    const button = event.target.closest('[data-action="select-day"]');
    if (!button) return; // click didn't come from a day button, ignore it

    const dayDiv = button.closest('.day');
    const selectedDate = new Date(dayDiv.dataset.date);

    console.log('Selected:', selectedDate.toDateString());
    // ...do whatever "selecting a day" should do 
    console.log("Selected a day");
});

// ---- 6. Prev / Next week navigation ----
document.getElementById('prev-week').addEventListener('click', () => {
    currentWeekStart.setDate(currentWeekStart.getDate() - 7);
    renderWeek(currentWeekStart);
});

document.getElementById('next-week').addEventListener('click', () => {
    currentWeekStart.setDate(currentWeekStart.getDate() + 7);
    renderWeek(currentWeekStart);
});

// ---- 7. Initial paint ----
renderWeek(currentWeekStart); */






}

const currentWeekStart = getStartOfWeek().toISOString().split('T')[0];


render_UI();
