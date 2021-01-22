"use strict"

// Масств со значениями полей
let arrField = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0];

// Оболочка для отрисовки разметки
let renderWrapper = document.querySelector("#app");

// Оболочка для вывода полей
let wrapperList = document.createElement("div");

addClass(wrapperList, ["wrapper-list"]);

renderWrapper.append(wrapperList);

// Счетчик ходов
let itemCounter = document.createElement("div");

addClass(itemCounter, ["counter"]);

itemCounter.textContent = "0";

renderWrapper.append(itemCounter);

// Функция перемешивания массива
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] = [array[j], array[i]];
    }
};

shuffle(arrField);

// Функция добавления классов
function addClass(element, [...arg]) {
    for (let i = 0; i < arg.length; i++) {
        element.classList.add(arg[i]);
    }
}

// Функция перемещения двух элементов на позиции друг друга
function exchangeElements(element1, element2) {
    let el1 = element1.nextSibling;
    let el2 = element2.nextSibling;

    element1.parentNode.insertBefore(element1, el2);
    element2.parentNode.insertBefore(element2, el1);
}

// Функция вызываемая при клике на элемент
function handlerClickElement() {
    let thisIndex = arrFieldNode.indexOf(this);

    if ((arrField[thisIndex + 1] == 0) && ((arrField.indexOf(arrField[thisIndex]) % 4 !== 3) && arrField.indexOf(0) % 4 !== 0)) {
        console.log("left");

        setTimeout(() => {
            itemCounter.textContent = parseInt(itemCounter.textContent) + 1;

            [arrField[thisIndex], arrField[thisIndex + 1]] = [arrField[thisIndex + 1], arrField[thisIndex]];
            [arrFieldNode[thisIndex], arrFieldNode[thisIndex + 1]] = [arrFieldNode[thisIndex + 1], arrFieldNode[thisIndex]];

            exchangeElements(arrFieldNode[thisIndex], arrFieldNode[thisIndex + 1]);

            arrFieldNode[thisIndex + 1].style.left = "0";

            arrFieldNode[thisIndex].style.left = "0";

        }, 300)

        arrFieldNode[thisIndex + 1].style.left = "-180px";

        arrFieldNode[thisIndex].style.left = "180px";
    }

    if ((arrField[thisIndex - 1] == 0) && ((arrField.indexOf(arrField[thisIndex]) % 4 !== 0) && arrField.indexOf(0) % 4 !== 3)) {
        console.log("right");

        setTimeout(() => {

            itemCounter.textContent = parseInt(itemCounter.textContent) + 1;

            [arrField[thisIndex], arrField[thisIndex - 1]] = [arrField[thisIndex - 1], arrField[thisIndex]];
            [arrFieldNode[thisIndex], arrFieldNode[thisIndex - 1]] = [arrFieldNode[thisIndex - 1], arrFieldNode[thisIndex]];

            exchangeElements(arrFieldNode[thisIndex], arrFieldNode[thisIndex - 1]);

            arrFieldNode[thisIndex - 1].style.left = "0";

            arrFieldNode[thisIndex].style.left = "0";

        }, 300)

        arrFieldNode[thisIndex - 1].style.left = "180px";

        arrFieldNode[thisIndex].style.left = "-180px";

    }

    if (arrField[thisIndex + 4] == 0) {
        console.log("top");

        setTimeout(() => {
            itemCounter.textContent = parseInt(itemCounter.textContent) + 1;

            [arrField[thisIndex], arrField[thisIndex + 4]] = [arrField[thisIndex + 4], arrField[thisIndex]];
            [arrFieldNode[thisIndex], arrFieldNode[thisIndex + 4]] = [arrFieldNode[thisIndex + 4], arrFieldNode[thisIndex]];

            exchangeElements(arrFieldNode[thisIndex], arrFieldNode[thisIndex + 4]);

            arrFieldNode[thisIndex + 4].style.top = "0";

            arrFieldNode[thisIndex].style.top = "0";
        }, 300)

        arrFieldNode[thisIndex + 4].style.top = "-135px";

        arrFieldNode[thisIndex].style.top = "135px";

    }

    if (arrField[thisIndex - 4] == 0) {
        console.log("bottom");

        setTimeout(() => {

            itemCounter.textContent = parseInt(itemCounter.textContent) + 1;

            [arrField[thisIndex], arrField[thisIndex - 4]] = [arrField[thisIndex - 4], arrField[thisIndex]];
            [arrFieldNode[thisIndex], arrFieldNode[thisIndex - 4]] = [arrFieldNode[thisIndex - 4], arrFieldNode[thisIndex]];

            exchangeElements(arrFieldNode[thisIndex], arrFieldNode[thisIndex - 4]);

            arrFieldNode[thisIndex - 4].style.top = "0";

            arrFieldNode[thisIndex].style.top = "0";
        }, 300)

        arrFieldNode[thisIndex - 4].style.top = "135px";

        arrFieldNode[thisIndex].style.top = "-135px";

    }
}

// Функция вывода DOM елементов в разметку из массива
function addEl() {
    arrFieldNode.forEach((element, i) => {
        wrapperList.append(element);
    })
}

// Создаем массив DOM элементов на основе массива со значениями полей
let arrFieldNode = arrField.map((item, index, array) => {
    let elementItem = document.createElement("div");

    if (item == 0) {
        addClass(elementItem, ["elemnt", "elemnt-space"]);
        elementItem.textContent = "";

    } else {
        addClass(elementItem, ["elemnt", "elemnt-field", `elemnt-${index + 1}`]);
        elementItem.textContent = item;

        elementItem.addEventListener("click", handlerClickElement);
    }

    return elementItem
})

addEl()

console.log(database);