let first = parseInt(+prompt('Введите первое число'), 10);
let second = parseInt(+prompt('Введите второе число'), 10);

if (first > second) {
    first > second ? alert(first) : alert(second);
}
else {
    alert(second)
}
//--------------------------------------------------------------------------

let a = +prompt('введите кратное число');

alert((a % 5 === 0) ? "Кратно" : "нет");

//-------------------------------------------------------------------------------------
let planet = prompt('Введите название планеты');

alert((((planet === "Земля") || (planet === "земля")) ? "Привет землянин" : "Привет иноплонитянен"));

