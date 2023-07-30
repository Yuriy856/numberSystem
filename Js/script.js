
const btn = document.getElementById('btn');
const input = document.getElementById('input');
const blockInfo = document.querySelector('.block_info');
const infoList = document.querySelector('.info_list');
const systemBtn = document.querySelectorAll('.system_btn');
const resetBtn = document.querySelector('.reset');

let btnNum = 0;
let prewSelectBtn;

for (let item of systemBtn) {
    item.addEventListener('click', () => {
        btnNum = +item.innerText;

        if (prewSelectBtn) {
            prewSelectBtn.classList.remove('selected');
        }

        item.classList.add('selected');
        prewSelectBtn = item;
    })
}

let elemInfo;

btn.addEventListener('click', () => {
    let valueInput = input.value;
    let num = +valueInput;

    elemInfo = document.createElement('li');
    elemInfo.classList.add('info_item');
    infoList.appendChild(elemInfo);
    elemInfo.innerHTML = (btnNum == 16 && !isNaN(num)) ? `<b>0x${num.toString(btnNum)}</b> - шіснадцяткова форма числа <b>${num}</b>` :
        (btnNum == 8 && !isNaN(num)) ? `<b>0o${num.toString(btnNum)}</b> - вісімкова форма числа <b>${num}</b>` :
            (btnNum == 2 && !isNaN(num)) ? `<b>0b${num.toString(btnNum)}</b> - двійкова форма числа <b>${num}</b>` :
                `Формат для числа '<b>${num}</b>' не підтримується! Будь-ласка виберіть систему числення! Або вкажіть коректно число!`;
})



resetBtn.addEventListener('click', () => {

    while (infoList.firstChild) {
        infoList.removeChild(infoList.firstChild)
    }

})

console.log(0o172);
// ПРАКТИКА

