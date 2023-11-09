
sumMix = x => x.reduce((prev, curr) => +curr + prev, 0)
console.log(sumMix([1, "2", "3", 4]))


let busy = [
    {'start': '10:30', 'stop': '10:50'},
    {'start': '18:40', 'stop': '18:50'},
    {'start': '14:40', 'stop': '15:50'},
    {'start': '16:40', 'stop': '17:20'},
    {'start': '20:05', 'stop': '20:20'}
];

// Преобразуем время в минуты для удобства расчетов
let busyMinutes = busy.map(interval => {
    let start = interval.start.split(':');
    let stop = interval.stop.split(':');
    return {
        start: parseInt(start[0]) * 60 + parseInt(start[1]),
        stop: parseInt(stop[0]) * 60 + parseInt(stop[1])
    };
});

let startOfDay = 9 * 60; // Начало рабочего дня
let endOfDay = 21 * 60; // Конец рабочего дня
let windowDuration = 30; // Продолжительность окна

// Определяем возможные свободные окна
let freeWindows = [];
for (let i = 0; i < busyMinutes.length - 1; i++) {
    let currentEnd = busyMinutes[i].stop;
    let nextStart = busyMinutes[i + 1].start;
    if (nextStart - currentEnd >= windowDuration) {
        freeWindows.push({ start: currentEnd, stop: nextStart });
    }
}

// Проверяем первое окно после начала рабочего дня
if (busyMinutes[0].start - startOfDay >= windowDuration) {
    freeWindows.unshift({ start: startOfDay, stop: busyMinutes[0].start });
}

// Проверяем последнее окно перед концом рабочего дня
if (endOfDay - busyMinutes[busyMinutes.length - 1].stop >= windowDuration) {
    freeWindows.push({ start: busyMinutes[busyMinutes.length - 1].stop, stop: endOfDay });
}

// Выводим список свободных окон
freeWindows.forEach(window => {
    let startHour = Math.floor(window.start / 60);
    let startMinute = window.start % 60;
    let stopHour = Math.floor(window.stop / 60);
    let stopMinute = window.stop % 60;
    console.log(`Свободное окно: ${startHour.toString().padStart(2, '0')}:${startMinute.toString().padStart(2, '0')} - ${stopHour.toString().padStart(2, '0')}:${stopMinute.toString().padStart(2, '0')}`);
});



