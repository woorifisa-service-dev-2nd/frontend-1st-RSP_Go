/**
 * 사용자 가위 바위 보 정보 가져오기
 */
function getRSP() {
  const selectsArray = document.querySelectorAll(".select-box");
  selectsArray.forEach((selects, idx) => {
    selects.querySelectorAll(".selected").forEach((selected, value) => {
      selected.addEventListener("click", () => {
        peopleRspArray[idx] = value;
      });
    });
  });
}

function rspLogic(a, b) {
  // 가위 : 0 / 바위 : 1 / 보 : 2
  // 가위 < 바위
  if ((a == 0 || a == 1) && (b == 0 || b == 1)) {
    return 1;
  }
  // 바위 < 보
  if ((a == 1 || a == 2) && (b == 1 || b == 2)) {
    return 2;
  }
  // 보 < 가위
  if ((a == 0 || a == 2) && (b == 0 || b == 2)) {
    return 0;
  }
}

function init(){
  /**
   * 처음 사람 이미지
   */
  imgSrcArray = [
    "https://img.icons8.com/ios/250/000000/user-male.png",
    "https://img.icons8.com/ios/250/000000/businessman.png",
    "https://img.icons8.com/ios/250/000000/user.png",
    "https://img.icons8.com/ios/250/000000/user-female.png",
    "https://img.icons8.com/ios/250/000000/air-jordan.png",
    "https://img.icons8.com/ios/250/000000/reddit.png",
    "https://img.icons8.com/ios/250/000000/twitter.png",
    "https://img.icons8.com/ios-filled/250/000000/mac-os.png",
    "https://img.icons8.com/ios/250/000000/facebook-new.png",
    "https://img.icons8.com/ios/250/000000/google-logo.png",
    "https://img.icons8.com/ios/250/000000/instagram-new.png",
  ];
  for (let i = 0; i < 2; i++) {
    let tagArea = document.getElementById("people");
    let newTag = document.createElement("div");
    newTag.setAttribute("class", "person");
    newTag.innerHTML = `
      <div class="people-img">
          <img src=${imgSrcArray[Math.floor(Math.random() * imgSrcArray.length)]}>
      </div>
      <ul class="container flex-direction-column select-box">
          <li> <button class="selected">가위 </button></li>
          <li> <button class="selected">바위</button></li>
          <li> <button class="selected">보</button></li>
      </ul>
                          `;
    tagArea.appendChild(newTag);
    const div = document.getElementsByClassName("person");
  }
}

init();
getRSP();

let addButton = document.getElementById("addPerson");
let removeButton = document.getElementById("removePerson");
let human = 2; // 참가자 수
let peopleRspArray = [];
/**
   * 사람 추가 기능
   */
addButton.addEventListener("click", () => {
  if (human >= 4) return; // 사람 수가 4명 이상이면 추가되지 않도록
  let tagArea = document.getElementById("people");
  let newTag = document.createElement("div");
  newTag.setAttribute("class", "person");
  newTag.innerHTML = `
    <div class="people-img">
        <img src=${imgSrcArray[Math.floor(Math.random() * imgSrcArray.length)]}>
    </div>
    <ul class="container flex-direction-column select-box">
        <li> <button class="selected">가위 </button></li>
        <li> <button class="selected">바위</button></li>
        <li> <button class="selected">보</button></li>
    </ul>
                        `;
  tagArea.appendChild(newTag);
  const div = document.getElementsByClassName("person");
  human++;
  if (human > 2) {
    removeButton.removeAttribute("disabled");
  }
  getRSP();
});
/**
 * 사람 삭제 기능
 */
removeButton.addEventListener("click", () => {
  if (human == 2) return;
  const div = document.getElementsByClassName("person");
  const div2 = div[div.length - 1];
  peopleRspArray.pop();
  div2.remove();
  human--;
  if (human === 2) {
    removeButton.setAttribute("disabled", "");
  }
  getRSP();
});

/**
 * 결과 보기 기능
 */
let resultButton = document.getElementById("resultBtn");
resultButton.addEventListener("click", () => {
  let winner = [];
  let result = ""; // 결과 출력 값
  let notSelected = []; // 선택하지 않은 사람 번호를 저장할 배열

  for (let i = 0; i < human; i++) {
    if (typeof peopleRspArray[i] === "undefined") {
      // peopleRspArray[i] = 0;
      notSelected.push(i + 1); // 선택하지 않은 사람 번호 추가
    }
  }

  if (notSelected.length > 0) {
    result =
      notSelected.join(", ") + "번 사람이 가위바위보를 선택하지 않았습니다.";
  } else {
    let rspSet = new Set(peopleRspArray.slice(0, human));
    rspSet = [...rspSet];
    if (rspSet.length === 2) {
      let victory = rspLogic(rspSet[0], rspSet[1]);
      for (let i = 0; i < human; i++) {
        if (peopleRspArray[i] == victory) {
          winner.push(i + 1);
        }
      }
      winner.forEach((win, idx) => {
        result += win;
        if (idx + 1 == winner.length) {
          if (winner.length == 1) {
            result += " 번 사람이 승리했습니다.";
          } else {
            result += " 번 사람들이 승리했습니다.";
          }
        } else {
          result += ", ";
        }
      });
    } else if (rspSet.length === 1) {
      result = "무승부!!";
    } else {
      result = "다시!!";
    }
  }
  const resultText = document.getElementById("result-text");
  resultText.innerHTML = result;
});

/**
 * 다시하기 기능
 */
let resetButton = document.getElementById("resetBtn");
resetButton.addEventListener("click", () => {
  location.reload();
});