//При нажатии кнопки запускается обратный отсчёт от 5 до 1, каждую секунду. Необходимо использовать setTimeout или setInterval.

function startCountdown() {
    let i = 5;
    let timerId = setInterval(myCallback, 1000);
    function myCallback() {
        console.log(i);
        if(i>1) i--;
        else
            clearInterval(timerId);
    }
}

let i = 5;
function countdown() {
    console.log(i);
    i--;
    if (i >= 1)
        setTimeout(countdown, 1000);
}
countdown();



//Напишите функцию sayHello(name), которая возвращает промис и через 2 секунды выводит Привет, ${name}!.

function sayHello(name){
    return new Promise((resolve, _) => {
        resolve(name);
    });
}

let promise = sayHello("Nastya");
promise.then((value) => {
    setTimeout(() => { alert(Привет, ${value}!) }, 2000)
});



//Напишите функцию checkAge(age), которая возвращает Promise.
// Через 1 секунду:
// •    если age >= 18, resolve с сообщением "Доступ разрешён"
// •    иначе reject с "Доступ запрещён"
// Используйте setTimeout, resolve и reject.

function checkAge(age) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (age >= 18){
                resolve("Доступ разрешён")
            } else {
                reject("Доступ запрещён")
            }
        }, 1000);
    })
}

checkAge(12)
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.log(error);
    })



//Сделайте 3 блока. При клике на кнопку они последовательно меняют цвет с задержкой в 1 секунду между каждым.

function changeColor() {
    setTimeout(() => {
        document.getElementById("div1").style.color = "#987987";
        setTimeout(() => {
            document.getElementById("div2").style.color = "#987987";
            setTimeout(() => {
                document.getElementById("div3").style.color = "#987987";
            }, 1000);
        }, 1000);
    }, 1000);
}



//Напишите функцию collectItems(items), которая выводит в консоль элементы массива items, по одному в секунду, с помощью async/await.

async function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function collectItems(items) {
    for(let i = 0; i < items.length; i++) {
        console.log(items[i]);
        await timeout(1000);
    }
}
collectItems([89, 2, 3, 4, 5, 6]);



// Напишите три функции loadA, loadB, loadC, каждая возвращает Promise с разным временем задержки (например, 1с, 1.5с, 2с).
// Выведите, кто загрузился первым.
// Используйте Promise.race.

function loadA() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("a")
        }, 1000);
    })
}
function loadB() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("b")
        }, 1500);
    })
}
function loadC() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("c")
        }, 2000);
    })
}


Promise.race([loadA(), loadB(), loadC()])
    .then(result => {
        console.log(" " + result);
    });