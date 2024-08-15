const texts = [
    "БЕЗКОШТОВНА ДОСТАВКА ЗАМОВЛЕНЬ ВІД 2500 ГРН",
    "ЗНИЖКА 5% ПРИ ОПЛАТІ БАНКІВСЬКОЮ КАРТКОЮ",
    "Готуйся до навчання з adidas! | -30% У КОШИКУ"
];

let index = 0;
updateIndex = () => (index + 1) % texts.length;

const textElem = document.getElementById('text-promote');
textElem.classList.add('show');

function changeText() {
    textElem.classList.remove('show');
    setTimeout(() => {
        textElem.innerText = texts[index];
        textElem.classList.add('show');
    }, 500); // Час, необхідний для зникання тексту
    index = updateIndex();
}

setInterval(changeText, 5000); // Змінює текст кожні 5 секунд