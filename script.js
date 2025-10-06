const events = [
    { id: 'countdown1', date: '2025-10-25T09:00:00' },
    { id: 'countdown2', date: '2025-10-25T10:30:00' },
    { id: 'countdown3', date: '2025-10-25T12:00:00' },
    { id: 'countdown4', date: '2025-10-25T15:00:00' },
    { id: 'countdown5', date: '2025-10-25T16:00:00' },
    { id: 'countdown6', date: '2025-10-25T19:00:00' },
];

function updateCountdown(id, dateStr) {
    const el = document.getElementById(id);
    const eventDate = new Date(dateStr);
    const now = new Date();
    const diff = eventDate - now;

    if (diff <= 0) {
        el.textContent = "Evenimentul are loc acum!";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    el.textContent = `${days}z ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(() => {
    events.forEach(e => updateCountdown(e.id, e.date));
}, 1000);