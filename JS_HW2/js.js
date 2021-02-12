/*
    Немного не по заданию, но очень хотелось сделать рабочий сайт.
    Стоит посмотреть, вроде неплохой, минималистичный.

    "Код должен работать с различным количеством температур в объекте."
    Если не натягивает на 10-ку, то рядом сделаю с различным кол-вом, хотя
    тут не так много менять.
*/
function values() {
    //получение значений
    let minsk = Number(document.querySelector("#tMin").value);
    let gomel = Number(document.querySelector("#tGom").value);
    let mogilev = Number(document.querySelector("#tMog").value);
    let vitebsk = Number(document.querySelector("#tVit").value);
    let grodno = Number(document.querySelector("#tGro").value);
    let brest = Number(document.querySelector("#tBre").value);
    let term = {
        Min: minsk,
        Gom: gomel,
        Mog: mogilev,
        Vit: vitebsk,
        Gro: grodno,
        Bre: brest
    }

    //Средняя температура
    var all = 0;
    var count = 0;
    for (let i in term){
        all += term[i];
        count++;
    }
    all = all / count;
    document.querySelector("#setav").value = all;

    //Максимальная температура
    function maksimka(term){
        var max = -Infinity;
        for(let i in term){
            if(max < term[i]){
                max = term[i];
            }
        }
        return max;
    }
    maksimka(term);
    var maxim = maksimka(term);
    document.querySelector("#setmax").value = maxim;
}

