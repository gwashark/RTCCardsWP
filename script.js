function update() {
    const now = new Date();
    let hour
    if (now.getHours().toString().padStart(2, '0') >= 13) {
        hour = now.getHours() - 12
    } else {
        hour = now.getHours()
    }
    const minute = now.getMinutes().toString().padStart(2, '0');
    const ampm = now.getHours().toString().padStart(2, '0') >= 12 ? 'PM' : 'AM';
    const timeString = `${hour}:${minute} ${ampm}`;
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const date = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();

    let suffix;
    switch (date) {
        case 1:
        case 21:
        case 31:
        suffix = 'st';
        break;
        case 2:
        case 22:
        suffix = 'nd';
        break;
        case 3:
        case 23:
        suffix = 'rd';
        break;
        default:
        suffix = 'th';
    }

    document.getElementById('clock').innerText = timeString;
    document.getElementById('date').innerText = `${day}/${month}/${year}`;
}

update()
setInterval(update, 1000)