"use strict";

function runScript1() {
    return new Promise((resolve) => {
        let admin;
        let name = "Джон";
        admin = name;
        alert(`${admin}`);
        resolve();
    });
}

function runScript2() {
    return new Promise((resolve) => {
        let city = prompt("Город");
        let year = parseInt(prompt("Год основания"));
        let people = parseInt(prompt("Население"));

        let year_now_2025 = 2025;
        let year_now = year_now_2025 - year;

        let full_city = 'Городу ' + city + ' исполнилось ' + year_now + ' лет с момента его образования. Население ' + people + ' человек.';
        alert(full_city);
        resolve();
    });
}

function runScript3() {
    return new Promise((resolve) => {
        let r = parseFloat(prompt("Введите радиус круга:"));
        let area = Math.PI * r * r;
        alert("Площадь круга с радиусом " + r + " равна " + area);
        resolve();
    });
}

function runScript4() {
    return new Promise((resolve) => {
        let num1 = parseFloat(prompt("Введите первое число:"));
        let num2 = parseFloat(prompt("Введите второе число:"));
        
        let sum = num1 + num2;
        let difference = num1 - num2;
        let product = num1 * num2;
        let quotient = num1 / num2;
        
        alert("Сумма: " + sum + "\nРазность: " + difference + "\nПроизведение: " + product + "\nЧастное: " + quotient);
        resolve();
    });
}

async function runScripts() {
    await runScript1();
    await runScript2();
    await runScript3();
    await runScript4();
}

runScripts();