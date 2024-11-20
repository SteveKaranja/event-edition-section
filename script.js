const events = {
  event1: {
    theme: "Transforming Our Cities",
    attendance: "20000+ participants including representatives from 30 countries.",
    place: "Abu Dhabi, UAE",
    date: "8 to 13 February 2020",
    participants: "20000+ participants",
    image: "event1.jpg",
  },
  event2: {
    theme: "Cities of Tomorrow",
    attendance: "22000+ participants from various industries.",
    place: "Nairobi, Kenya",
    date: "15 to 20 October 2018",
    participants: "22000+ participants",
    image: "event2.jpg",
  },
  event3: {
    theme: "Cities 2030 — Cities for All: Implementing the New Urban Agenda",
    attendance: "24000+ participants including representatives from 45 least developed countries.",
    place: "Kuala Lumpur, Malaysia",
    date: "7 to 13 February 2018",
    participants: "24000+ participants",
    image: "event3.jpg",
  },
};

document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    // Update active state
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    // Update event details
    const eventKey = tab.getAttribute('data-event');
    const event = events[eventKey];

    document.getElementById('event-theme').innerHTML = `Theme: <span>${event.theme}</span>`;
    document.getElementById('event-attendance').textContent = event.attendance;
    document.getElementById('event-place').textContent = `Place: ${event.place}`;
    document.getElementById('event-date').textContent = `Date: ${event.date}`;
    document.getElementById('participant-count').textContent = event.participants;
    document.getElementById('event-image').src = event.image;
    document.getElementById('event-image').alt = `${eventKey} Image`;
  });
});
