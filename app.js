let addButton = document.getElementById('addPerson');
let removeButton = document.getElementById('removePerson');


/**
 * 사람 추가시 클래스 구분값
 */
let count = 2;


/** 
 * 사람 추가 기능
 */
addButton.addEventListener('click', () => {
    count += 1;
    console.log(count);
    let tagArea = document.getElementById('people');
    let newTag = document.createElement('div');

    newTag.setAttribute('class', `person${count}`);
    newTag.innerHTML = `
        <div class="people-img">사람 이미지</div>
        <input type="text" />
                        `;

    tagArea.appendChild(newTag);

    if (count > 2) {
        removeButton.removeAttribute('disabled');
    }

});


/** 
 * 사람 삭제 기능
 */
removeButton.addEventListener('click', () => {
    console.log(count);
    const div = document.getElementsByClassName(`person${count}`)[0];
    div.remove();
    count -= 1;
    console.log(count);

    if (count === 2) {
        removeButton.setAttribute('disabled', '');
    }
});





