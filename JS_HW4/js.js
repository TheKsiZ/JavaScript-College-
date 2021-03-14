let block = document.querySelector('.block');
let addBtn = document.querySelector('#add');
let cancelBtn = document.querySelector('#cancel');
let submitBtn = document.querySelector('#submit');
let delBtn = document.getElementsByClassName('del');
let editBtn = document.getElementsByClassName('edit');
let savebtn = document.querySelector('#editbtn');
let table = document.querySelector('#table');
//Пункты 
let title = document.querySelector('#title');
let kind = document.querySelector('#kind');
let klass = document.querySelector('#klass');
let danger = document.querySelector('#danger');
let place = document.querySelector('#place');
let using = document.querySelector('#using');
let founder = document.querySelector('#founder');

let all = {};
//Главный класс
class Plant {
    constructor(title, kind, klass, danger, place, using, founder){
        this._title = title;
        this._kind = kind;
        this._klass = klass;
        this._danger = danger;
        this._place = place;
        this._using = using;
        this._founder = founder;
    }

    //сеттеры
    setTitle(title){
        this._title = title;
    }
    setKind(kind){
        this._kind = kind;
    }
    setKlass(klass){
        this._klass = klass;
    }
    setDanger(danger){
        this._danger = danger;
    }
    setPlace(place){
        this._place = place;
    }
    setUsing(using){
        this._using = using;
    }
    setFounder(founder){
        this._founder = founder;
    }

    //геттеры
    getTitle(){
        return this._title;
    }
    getKind(){
        return this._kind;
    }
    getKlass(){
        return this._klass;
    }
    getDanger(){
        return this._danger;
    }
    getPlace(){
        return this._place;
    }
    getUsing(){
        return this._using;
    }
    getFounder(){
        return this._founder;
    }
}
//Наследование
class Paporotnik extends Plant{}
class El extends Plant {}

//Открытие формы
addBtn.addEventListener('click', function(){
    block.style.display = "block";
    addBtn.style.cursor = "auto";
    addBtn.setAttribute("disabled", true);
    //Очистка
    title.value = "";
    kind.value = "";
    klass.value = "";
    danger.value = "";
    place.value = "";
    using.value = "";
    founder.value = "";
})

//Закрытие формы
cancelBtn.addEventListener('click', function(){
    block.style.display = "none";
    addBtn.style.cursor = "pointer";
    addBtn.removeAttribute("disabled");
    //Подмена
    submitBtn.style.display = "inline-block";
    savebtn.style.display = "none";
})

//Принятие данных с формы и закрытие формы
submitBtn.addEventListener('click', function(){
    block.style.display = "none";
    addBtn.style.cursor = "pointer";
    addBtn.removeAttribute("disabled");
    //Принятие
    if (title.value === "" || kind.value === "" || klass.value === "" || danger.value === "" || place.value === "" || using.value === "" || founder.value === ""){
        alert('Заполните все пункты! Попробуйте ещё раз.');
    }
    else {
        if (title.value == "Папоротник"){
            let paporotnik = new Paporotnik(title.value, kind.value, klass.value, danger.value, place.value, using.value, founder.value);
            paporotnik.setTitle(title.value);
            paporotnik.setKind(kind.value);
            paporotnik.setDanger(danger.value);
            paporotnik.setPlace(place.value);
            paporotnik.setUsing(using.value);
            paporotnik.setFounder(founder.value);
            //Создание строки
            table.innerHTML += `
            <tr id="${Object.keys(all).length}">
                <td>${paporotnik.getTitle()}</td>
                <td>${paporotnik.getKind()}</td>
                <td>${paporotnik.getPlace()}</td>
                <td>${paporotnik.getUsing()}</td>
                <td><a class="del">Удалить</a> <a class="edit">Редактировать</a></td>
            </tr>`
            all[Object.keys(all).length] = paporotnik;
        } 
        else if (title.value == "Ель") {
            let el = new El(title.value, kind.value, klass.value, danger.value, place.value, using.value, founder.value);
            el.setTitle(title.value);
            el.setKind(kind.value);
            el.setDanger(danger.value);
            el.setPlace(place.value);
            el.setUsing(using.value);
            el.setFounder(founder.value);
            //Создание строки
            table.innerHTML += `
            <tr id="${Object.keys(all).length}">
                <td>${el.getTitle()}</td>
                <td>${el.getKind()}</td>
                <td>${el.getPlace()}</td>
                <td>${el.getUsing()}</td>
                <td><a class="del">Удалить</a> <a class="edit">Редактировать</a></td>
            </tr>`
            all[Object.keys(all).length] = el;
        } 
        del();
        edit();
    }
})
//Удаление
function del(){
    for(let i of delBtn){
        i.addEventListener('click', function(){
            const answer = confirm('Вы точно хотите удалить?');
            if (answer){
                alert('Сам удалишь.');
            } else {
                alert('Ладно.');
            }
        })
    }
}
//Редактирование
function edit(){
    for(let i of editBtn){
        i.addEventListener('click', function(){
            block.style.display = "block";
            addBtn.style.cursor = "auto";
            addBtn.setAttribute("disabled", true);
            //Подмена
            submitBtn.style.display = "none";
            savebtn.style.display = "inline-block";
            if (all[this.parentNode.parentNode.getAttribute('id')].getTitle() == "Папоротник"){
                title.value = all[this.parentNode.parentNode.getAttribute('id')].getTitle();
                kind.value = all[this.parentNode.parentNode.getAttribute('id')].getKind();
                klass.value = all[this.parentNode.parentNode.getAttribute('id')].getKlass();
                danger.value = all[this.parentNode.parentNode.getAttribute('id')].getDanger();
                place.value = all[this.parentNode.parentNode.getAttribute('id')].getPlace();
                using.value = all[this.parentNode.parentNode.getAttribute('id')].getUsing();
                founder.value = all[this.parentNode.parentNode.getAttribute('id')].getFounder();
                title.setAttribute("disabled", true);
            }
            else if(all[this.parentNode.parentNode.getAttribute('id')].getTitle() == "Ель"){
                title.value = all[this.parentNode.parentNode.getAttribute('id')].getTitle();
                kind.value = all[this.parentNode.parentNode.getAttribute('id')].getKind();
                klass.value = all[this.parentNode.parentNode.getAttribute('id')].getKlass();
                danger.value = all[this.parentNode.parentNode.getAttribute('id')].getDanger();
                place.value = all[this.parentNode.parentNode.getAttribute('id')].getPlace();
                using.value = all[this.parentNode.parentNode.getAttribute('id')].getUsing();
                founder.value = all[this.parentNode.parentNode.getAttribute('id')].getFounder();
                title.setAttribute("disabled", true);
            }
        savebtn.setAttribute('id', this.parentNode.parentNode.getAttribute('id'));
        })
    }
}
//Сохранение
savebtn.addEventListener('click', function(){
    all[this.getAttribute('id')].setKind(kind.value);
    all[this.getAttribute('id')].setKlass(klass.value);
    all[this.getAttribute('id')].setDanger(danger.value);
    all[this.getAttribute('id')].setPlace(place.value);
    all[this.getAttribute('id')].setUsing(using.value);
    all[this.getAttribute('id')].setFounder(founder.value);
    let trs = document.querySelectorAll('tr');
    for(let i = 1; i < trs.length; i++){
        if(trs[i].getAttribute('id') == this.getAttribute('id')){
            trs[i].innerHTML = `
            <tr id="${Object.keys(all).length}">
                <td>${all[this.getAttribute('id')].getTitle()}</td>
                <td>${all[this.getAttribute('id')].getKind()}</td>
                <td>${all[this.getAttribute('id')].getPlace()}</td>
                <td>${all[this.getAttribute('id')].getUsing()}</td>
                <td><a class="del">Удалить</a> <a class="edit">Редактировать</a></td>
            </tr>`
        }
        del();
        edit();
        //Закрытие
        block.style.display = "none";
        addBtn.style.cursor = "pointer";
        addBtn.removeAttribute("disabled");
        title.removeAttribute("disabled");
        //Подмена
        submitBtn.style.display = "inline-block";
        savebtn.style.display = "none";   
    }
})
