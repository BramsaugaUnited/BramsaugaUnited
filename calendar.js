const currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth();
const calendarBody = document.getElementById("calendar-body");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const currentMonthYear = document.getElementById("current-month-year");
const eventContainer = document.getElementById("event-container");
const eventDetails = document.getElementById("event-details");

renderCalendar(currentYear, currentMonth);

prevButton.addEventListener("click", () => {
    currentMonth--;
    if (currentMonth < 0) {
        currentYear--;
        currentMonth = 11;
    }
    renderCalendar(currentYear, currentMonth);
});

nextButton.addEventListener("click", () => {
    currentMonth++;
    if (currentMonth > 11) {
        currentYear++;
        currentMonth = 0;
    }
    renderCalendar(currentYear, currentMonth);
});

function renderCalendar(year, month) {
    calendarBody.innerHTML = "";
    eventDetails.innerHTML = ""; // Clear previous event details

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    currentMonthYear.textContent = `${new Date(year, month).toLocaleDateString('default', { month: 'long' })} ${year}`;

    const importantDates = [
        { month: 8, date: 21, event: "September 21: 3rd Dashain Cup, 2024" },
        { month: 8, date: 22, event: "September 22: 3rd Dashain Cup, 2024" }
        // Add more important dates and events here for the current month
    ];

    let date = 1;
    for (let i = 0; i < 6; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < 7; j++) {
            const cell = document.createElement("td");
            if (i === 0 && j < firstDayOfMonth) {
                const day = document.createTextNode("");
                cell.appendChild(day);
            } else if (date > daysInMonth) {
                break;
            } else {
                const day = document.createTextNode(date);
                cell.appendChild(day);
                const importantDate = importantDates.find(item => item.month === month && item.date === date);
                if (importantDate) {
                    cell.classList.add("bg-success");
                    const listItem = document.createElement("li");
                    listItem.classList.add("list-group-item");
                    listItem.textContent = importantDate.event;
                    eventDetails.appendChild(listItem);
                }
                date++;
            }
            row.appendChild(cell);
        }
        calendarBody.appendChild(row);
    }
}