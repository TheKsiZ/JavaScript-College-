var input = document.querySelector('.task');
var inputdate = document.querySelector('.date');
var ul = document.querySelector('ul');
var container = document.querySelector('div');
var span = document.querySelectorAll('.trash');
var clearBtn = document.querySelector('#clear');
var addBtn = document.querySelector('#add');

loadTodo();
deleteElement();
updateTimer();

//Загрузка листа
function loadTodo() {
    if (localStorage.getItem('todoList')) {
        ul.innerHTML = localStorage.getItem('todoList');
    }
    span = document.querySelectorAll('.trash');
}

//Сохранение элементов
function saveAll(){
    localStorage.setItem("todoList", ul.innerHTML);
}

//Удаление списка
clearBtn.addEventListener('click', function () {
    ul.innerHTML = '';
    localStorage.clear();
});

//Удаление элемента списка
function deleteElement() {
    for (var i = 0; i < span.length; i++) {
        span[i].addEventListener("click", function () {
            ul.removeChild(this.parentNode);
            saveAll();
        })
    }
}

//Добавление данных
addBtn.addEventListener('click', function () {

    var li = document.createElement('li');
    var spanElement = document.createElement('span');
    var spanElementDate = document.createElement('span');
    var spanElementClock = document.createElement('span');
    var icon = document.createElement('i');
    var br = document.createElement('br');

    var newTodo = input.value + ' ';
    input.value = '';
    var dateTodo = new Date(inputdate.value)
    inputdate.value = ''

    GetTime(spanElementClock, dateTodo)
    icon.classList.add('fas', 'fa-trash-alt');
    spanElement.append(icon);
    spanElement.setAttribute('class', 'trash');

    spanElementClock.setAttribute('data-time', dateTodo.getFullYear() + '.' + ('0' + (dateTodo.getMonth()+1)).slice(-2) + '.' + ('0' + dateTodo.getDate()).slice(-2));
    spanElementClock.setAttribute('class', 'clock');

    ul.appendChild(li).append( newTodo, ' ', spanElement, br, spanElementClock);

    loadTodo();
    deleteElement();
    updateTimer();
})

//Получение времени
function GetTime(spanElemTimer, dateTodo) {
    var total = getTimeRemaining(dateTodo);
    spanElemTimer.innerHTML = total.days + " days, " + ('0' + total.hours).slice(-2) + " hours, " + ('0' + total.minutes).slice(-2) + " minutes, " + ('0' + total.seconds).slice(-2) + " seconds left";

}

//Обновление таймера
function updateTimer() {
    var ElemsOfTimer = document.querySelectorAll('.clock');
    for (var i = 0; i < ElemsOfTimer.length; i++) {
        var t = getTimeRemaining(ElemsOfTimer[i].dataset.time);
        if (t.total <= 0){
            ul.removeChild(ElemsOfTimer[i].parentNode);
        }
            ElemsOfTimer[i].innerHTML = t.days + " days, " + ('0' + t.hours).slice(-2) + " hours, " + ('0' + t.minutes).slice(-2) + " minutes, " + ('0' + t.seconds).slice(-2) + " seconds left";
    }
    
    var interval = setInterval(updateTimer,1000);
    if(ElemsOfTimer.length == 0){
        clearInterval(interval);
    }
}

function getTimeRemaining(endtime) {
    var total = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((total / 1000) % 60);
    var minutes = Math.floor((total / 1000 / 60) % 60);
    var hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    var days = Math.floor(total / (1000 * 60 * 60 * 24));
    return {
        'total': total,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

