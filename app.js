let addButton = document.getElementById('addPerson');
let removeButton = document.getElementById('removePerson');
/**
 * 사람 추가 기능
 */
addButton.addEventListener('click', () => {
    let tagArea = document.getElementById('people');
    let newTag = document.createElement('div');
    newTag.setAttribute('class', 'person');
    newTag.innerHTML = `
        <div class="people-img">사람 이미지</div>
        <input class="rsp" type="text" />
                        `;
    tagArea.appendChild(newTag);
    const div = document.getElementsByClassName('person');
    if (div.length > 2) {
        removeButton.removeAttribute('disabled');
    }
});
/**
 * 사람 삭제 기능
 */
removeButton.addEventListener('click', () => {
    const div = document.getElementsByClassName('person');
    const div2 = div[div.length - 1];
    div2.remove();
    if (div.length === 2) {
        removeButton.setAttribute('disabled', '');
    }
});
/**
 * 결과 보기 기능
 */
let resultButton = document.getElementById('resultBtn');
resultButton.addEventListener('click', () => {
    const peopleArray = document.getElementsByClassName('rsp');
    const player = document.getElementsByClassName('people-img');
    let playerName = [];
    let rspValue = [];
    const set = new Set();
    for (let i = 0; i < peopleArray.length; i++) {
        set.add(peopleArray[i].value);
        rspValue.push(peopleArray[i].value);
        playerName.push(player[i].textContent);
    }
    let result = '가 이겼습니다!!';
    let a = '';
    let b = '';
    let victory = '';
    const arr = Array.from(set);
    if (set.size == 3 || set.size == 1) {
        result = '무승부!!';
    }
    else if (set.size == 2) {
        a = arr[0];
        b = arr[1];
    }
    // 가위 : 1 / 바위 : 2 / 보 : 3
    if (a === '바위') {
        if (b === '가위') {
            victory = "바위";
        }
        else if (b === '보') {
            victory = '보';
        }
    }
    if (a === '가위') {
        if (b === '바위') {
            victory = '바위';
        }
        else if (b === '보') {
            victory = '가위';
        }
    }
    if (a === '보') {
        if (b === '바위') {
            victory = '보';
        }
        else if (b === '가위') {
            victory = '가위';
        }
    }
    let winner = '';
    for (let i = 0; i < rspValue.length; i++) {
        if (victory === rspValue[i]) {
            winner += playerName[i] + ", ";
        }
    }
    const resultText = document.getElementById('result-text');
    resultText.textContent = winner + result;
});
/**
 * 다시하기 기능
*/
let resetButton = document.getElementById('resetBtn');
resetButton.addEventListener('click', () => {
    location.reload();
});