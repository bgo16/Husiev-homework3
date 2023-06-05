const userName = prompt('Введіть ваше ім\`я');
alert(`Hello, ${userName}! How are you?`);

const userChoice = prompt('Оберіть дію(+,-,*,/)');
const a = +prompt('Перше число');
const b = +prompt('Друге число');

switch(userChoice) {
    case '+':
        let c = a+b;
        alert(`Відповідь:${c}`);
        break;
    case '-':
        let d = a-b;
        alert(`Відповідь:${d}`);
        break;
    case '*':
        let e = a*b;
        alert(`Відповідь:${e}`);
        break;
    case '/':
        let f = a/b;
        alert(`Відповідь:${f}`);
        break;
    default:
        alert('Спробуй ще раз');
        break;
}

const c = prompt('Введіть перше значення для порівняння');
const d = prompt('Введіть друге значення для порівняння');

switch(c===d) {
    case true:
        alert(true);
        break;
    case false:
        alert(false);
        break;
}

const e = +prompt('Введіть третє число');
const mid = (a+b+e)/3;

alert(`Середнє арифметичне трьох чисел ${a},${b},${e} - ${mid}`);

const five = +prompt('Введіть 5-ти значне число');

const first = Math.floor((five/10000) % 10);
const second = Math.floor((five/1000) % 10);
const third = Math.floor((five/100) % 10);
const fourth = Math.floor((five/10) % 10);
const fifth = Math.floor((five/1) % 10);

alert(`${fifth} ${fourth} ${third} ${second} ${first}`);