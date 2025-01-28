let events = [];

function addEvent() {
    const title = document.getElementById('eventTitle').value;
    const date = document.getElementById('eventDate').value;
    if (!title || !date) return alert("Please enter both title and date");

    const event = {
        id: Date.now(),
        title,
        date,
        status: new Date(date) >= new Date() ? "Upcoming" : "Past"
    };
    events.push(event);
    displayEvents();
    document.getElementById('eventTitle').value = '';
    document.getElementById('eventDate').value = '';
}

function displayEvents(filter = null) {
    const eventList = document.getElementById('eventList');
    eventList.innerHTML = '';

    let filteredEvents = filter ? events.filter(e => e.status.toLowerCase() === filter) : events;

    filteredEvents.forEach(event => {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.innerHTML = `
                    <span><strong>${event.title}</strong> - ${event.date} (${event.status})</span>
                    <div>
                        <button class="btn btn-warning btn-sm" onclick="editEvent(${event.id})">Edit</button>
                        <button class="btn btn-danger btn-sm" onclick="deleteEvent(${event.id})">Delete</button>
                    </div>
                `;
        eventList.appendChild(li);
    });
}

function deleteEvent(id) {
    events = events.filter(event => event.id !== id);
    displayEvents();
}

function editEvent(id) {
    const event = events.find(event => event.id === id);
    const newTitle = prompt("Edit Title", event.title);
    const newDate = prompt("Edit Date (YYYY-MM-DD)", event.date);
    if (newTitle && newDate) {
        event.title = newTitle;
        event.date = newDate;
        event.status = new Date(newDate) >= new Date() ? "Upcoming" : "Past";
        displayEvents();
    }
}

function filterEvents(status) {
    displayEvents(status);
}