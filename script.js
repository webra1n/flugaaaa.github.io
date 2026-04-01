let player = new Object() 
player.name = "Префикс в чате и табе: [Герцог] ВашНик";
player.functions = "/fly - Включить режим полёта<br>/amute - Выдать МУТ игроку<br>/enchant - Зачаровать предмет в руке<br>/anvil - Открыть портативную Наковальню<br>/speed - Установить скорость передвижения<br>/salary - Получить зарплату<br>/exp - Получить бесплатный опыт";
player.other = "Прочее <br> Вход на заполненный сервер<br>Нет задержки телепортации<br>Доступно Точек домов: 10<br>Регионов: 15 блоков<br>Слотов на Аукционе: 15"
player.also = "У привилегии ГЕРЦОГ есть возможности привилегии ниже : <br> Князь , Принц , Титан , Элита , Глава , Сквид , Аспид , Герой , Страж , Барон ."
player.cost = "30 Дней = 2799 руб , 90 Дней = 4799 руб , Нвсегда = 8799 руб "

function functions() {
    document.getElementById("amir").innerHTML = player.functions;
}

function clear_info() {
    document.getElementById("amir").innerHTML = "";
}

function cost() {
    document.getElementById("amir").innerHTML = player.cost;
}

function Name() {
    document.getElementById("amir").innerHTML = player.name;
}

function functions() {
    document.getElementById("amir").innerHTML = player.functions;
}

function other() {
    document.getElementById("amir").innerHTML = player.other;
}
function also() {
    document.getElementById("amir").innerHTML = player.also;
}

function kit() {
    document.getElementById('amir').innerHTML = '<h3></h3><img src="китпвп.png" style="width:300px">';
}

function kit_ivent() {
    document.getElementById('amir').innerHTML = '<h3></h3><img src="ивент.png" style="width:300px">';
}

function kit_dragon() {
    document.getElementById('amir').innerHTML = '<h3></h3><img src="драгон.png" style="width:300px">';
}

function kit_reid() {
    document.getElementById('amir').innerHTML = '<h3></h3><img src="кушв.png" style="width:300px">';
}

function kit_resi() {
    document.getElementById('amir').innerHTML = '<h3></h3><img src="ресы.png" style="width:300px">';
}

function kit_mechanic() {
    document.getElementById('amir').innerHTML = '<h3></h3><img src="механик.png" style="width:300px">';
}

function kit_bonus() {
    document.getElementById('amir').innerHTML = '<h3></h3><img src="бонус.png" style="width:300px">';
}

