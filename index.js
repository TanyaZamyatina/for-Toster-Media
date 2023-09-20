// Таймер + Скидка

// Установка начального времени в 4 часа 51 минуту 16 секунд
let time = 4 * 3600 + 51 * 60 + 16; 
// Получение элемента с id "timer" для отображения времени
let timeString = document.getElementById("timer");
// Установка цены со скидкой
document.getElementById("discount").innerHTML = "R" + " " + "250.0";
document.getElementById("price").innerHTML = "R" + " " + "160.0";
// Установка интервала вызова функции timer каждую секунду
setInterval(timer,1000);
// Создание функции timer
function timer() {
    let hours = Math.floor(time / 3600); // Расчет количества часов
    let minutes = Math.floor((time % 3600) / 60); // Расчет количества минут
    let seconds = Math.floor(time % 60); // Расчет количества секунд
    // Добавляем ноль перед однозначными секундами и минутами
    seconds = seconds < 10 ? "0" + seconds : seconds;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    // Обновление элемента с id "timer" с текущим временем
    timeString.innerHTML = `${hours}:${minutes}:${seconds}`;
    // Уменьшаем значение времени на 1 секунду
    time--;
    if (time < 0) { // Если таймер достигает 0
        // Останавливаем интервал вызова функции timer
        clearInterval(timer) 
        // Установка значения "0" в элемент с id "timer"
        document.getElementById("timer").innerHTML = "0";
        // Установка цены без скидки, так как время истекло
        document.getElementById("discount").style.display = "none"
        document.getElementById("price").innerHTML = "R" + " " + "250.0";
        document.getElementById("price").style.marginTop = "10px";
    }
};


// Выбор товара

let slippers = document.querySelectorAll(".choiceSlippers  img");
let mainImg = document.querySelector(".mainImg");

// Перебор всех товаров
slippers.forEach(item => {
    item.addEventListener("click", () => {
        // При клике на нужный товар, он будет устанавливаться на главную   
        let srcValue = item.getAttribute("src");
        mainImg.setAttribute("src", srcValue);
        
        // Удаление прозрачности с предыдущего товара
        slippers.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.style.opacity = "1";
            }
        });
        // Установка прозрачности для текущего товара
        item.style.opacity = "0.4"; 
    })  
});


// Выбор цвета

let choiceColor = document.querySelector(".choiceColor");
let arrowColor = document.querySelector("#choiceColor");
let listColor = document.querySelector(".listColor");

// Выпадающий список
choiceColor.addEventListener("click", () => {
    listColor.classList.toggle('hide'); // Добавление класса hide
    if (listColor.classList.contains('hide')) {
        arrowColor.style.transform = 'rotate(180deg)' // Меняется направление стрелочки
        choiceColor.style.borderBottomLeftRadius = "0"; // Удаление нижних закруглений, если список открыт
        choiceColor.style.borderBottomRightRadius = "0"; // Удаление нижних закруглений, если список открыт
    } else {
        arrowColor.style.transform = 'rotate(0deg)' // Меняется направление стрелочки
        choiceColor.style.borderBottomLeftRadius = "15px"; // Добавление нижних закруглений, если список закрыт
        choiceColor.style.borderBottomRightRadius = "15px"; // Добавление нижних закруглений, если список закрыт
    }
});

let listColors = document.querySelectorAll(".listColor");
let mainColor = document.querySelector(".mainColor");

// Выбор цвета из списка
listColors.forEach(item => {
    item.addEventListener("click", (event) => {
        mainColor.innerHTML = event.target.innerHTML;
    })  
});


// Выбор размера

let choiceSize = document.querySelector(".choiceSize");
let arrowSize = document.querySelector("#choiceSize");
let listSize = document.querySelector(".listSize");

// Выпадающий список
choiceSize.addEventListener("click", () => {
    listSize.classList.toggle('hide');  // Добавление класса hide
    if (listSize.classList.contains('hide')) {
        arrowSize.style.transform = 'rotate(180deg)' // Меняется направление стрелочки
        choiceSize.style.borderBottomLeftRadius = "0"; // Удаление нижних закруглений, если список открыт
        choiceSize.style.borderBottomRightRadius = "0"; // Удаление нижних закруглений, если список открыт
    } else {
        arrowSize.style.transform = 'rotate(0deg)' // Меняется направление стрелочки
        choiceSize.style.borderBottomLeftRadius = "15px"; // Добавление нижних закруглений, если список закрыт
        choiceSize.style.borderBottomRightRadius = "15px"; // Добавление нижних закруглений, если список закрыт
    }
});

let listSizes = document.querySelectorAll(".listSize");
let mainSize = document.querySelector(".mainSize");

// Выбор размера из списка
listSizes.forEach(item => {
    item.addEventListener("click", (event) => {
        mainSize.innerHTML = event.target.innerHTML;
    })  
});