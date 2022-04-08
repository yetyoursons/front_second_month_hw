const first_name = prompt("Здравствуйте, введите ваше имя:")
const last_name = prompt("Теперь введите вашу фамилию:")

const greeting = alert("Здравствуйте" + " " + first_name + " " + last_name + "!")

console.log("Здравстуйте," + first_name + " " + last_name + "!")

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "Name"]
const arr2 = [1, 2, 3, 4, 5, 6, 7]

if (arr1.length > arr2.length) {
    console.log(arr1 + ">" + arr2)
} else if (arr1.length < arr2.length) {
    console.log(arr1 + "<" + arr2)
} else {
    console.log(arr1 + "+" + arr2)
}
console.log(arr1, arr2)

const color = prompt("Выберите цвет: Зеленый, желтый, красный")
a = "Зеленый"
a1 = "зеленый"
b = "Желтый"
b1 = "желтый"
c = "Красный"
c1 = "красный"

switch (color) {
    case a:
        alert("Едь!");
        break;
    case a1:
        alert("Едь!");
        break;
    case b:
        alert("Внимание!");
        break;
    case b1:
        alert("Внимание!");
        break;
    case c:
        alert("Стой!");
        break;
    case c1:
        alert("Стой!");
        break;
}

