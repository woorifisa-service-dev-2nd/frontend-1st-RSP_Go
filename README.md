<p align="center">
  <img src="https://github.com/woorifisa-service-dev-2nd/frontend-1th-RSP_Go/assets/65431814/3b7c0827-229b-48be-a1b8-342c2b18ef05" width="400" height="150" />
</p>

<br/>

## 📝 프로젝트 소개

- 혼자 하는 가위바위보 게임
- 개발 기간 : 2023.11.24
- 개발 인원 : 4명
  
<br/>
<br/>

## 🙋‍♂️ 팀원 소개

| [김민선](https://github.com/mins-n)      | [이규리](https://github.com/KyuliLee)      | [송원섭](https://github.com/sws6641)      | [김유은](https://github.com/YueunKim)      |
| ---------------------------------------- | ------------------------------------------ | ----------------------------------------- | ------------------------------------------ |
| ![김민선](https://github.com/mins-n.png) | ![이규리](https://github.com/KyuliLee.png) | ![송원섭](https://github.com/sws6641.png) | ![김유은](https://github.com/YueunKim.png) |

<br/>
<br/>

## 🛠 기술 스택

### Environment

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white)
![Github](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)

### Development

<img alt=""  src ="https://img.shields.io/badge/html5-E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"/> <img alt=""  src ="https://img.shields.io/badge/css3-1572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/> <img alt=""  src ="https://img.shields.io/badge/javascript-F7DF1E.svg?&style=for-the-badge&logo=javascript&logoColor=white"/>

### Depoloy

<img alt=""  src ="https://img.shields.io/badge/vercel-000000.svg?&style=for-the-badge&logo=vercel&logoColor=white"/>

### Communication

![Slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=Slack&logoColor=white)

<br/>
<br/>

## 💻 협업 방식

- Github Dasktop 사용
- Slack으로 코드 공유
- 기능별 feature branch 생성 후 PR 및 Merge

<br/>
<br/>

## ✔ 핵심 기능

### 1. 가위 바위 보

- 사람들이 가위, 바위, 보 중 하나를 선택하면 승패를 판단하여 결과를 출력합니다.
  
```javascript
// 승패 판단 로직
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
```

### 2. 참가자 추가
- 사람 추가 버튼을 누르면 참가자가 1명씩 추가됩니다.
- 게임 참가자는 최대 4명까지만 가능합니다.
- 사람들의 이미지는 랜덤으로 변경됩니다.
  
```javascript
if (human >= 4) return; // 최대 4명까지만
let tagArea = document.getElementById("people");
let newTag = document.createElement("div");
newTag.setAttribute("class", "person");
newTag.innerHTML = `
  <div class="people-img">
      <img src=${imgSrcArray[Math.floor(Math.random() * imgSrcArray.length)]}> // 이미지 랜덤
  </div>
  <ul class="container flex-direction-column select-box">
      <li> <button class="selected">가위 </button></li>
      <li> <button class="selected">바위</button></li>
      <li> <button class="selected">보</button></li>
  </ul>
`;
tagArea.appendChild(newTag);
```
  

### 3. 참가자 삭제
- 사람 삭제 버튼을 누르면 가장 마지막에 추가된 참가자가 삭제됩니다.
- 게임 참가자는 최소 2명입니다.

```javascript
const div = document.getElementsByClassName("person");
const div2 = div[div.length - 1]; // 마지막에 추가된 참가자
div2.remove();
```

### 4. 결과 확인
- 결과 보기 버튼을 클릭하면 모든 사용자의 선택을 바탕으로 승자를 결정하고 결과를 출력합니다.
- 만약 모든 사용자가 선택을 완료하지 않았다면 선택하지 않은 사용자 번호를 출력합니다.

### 5. 다시 하기
- 다시하기 버튼을 클릭하면 페이지를 새로고침하여 게임을 초기 상태로 되돌립니다.

<br/>
<br/>

## ⚙ 기능 시연
- URL : https://frontend-1th-rsp-go.vercel.app/
<img src="https://github.com/woorifisa-service-dev-2nd/frontend-1th-RSP_Go/assets/65431814/1dec2b48-433f-44e0-9647-69b5304da62d" width="100%" height="100%" />

<br/>
<br/>


## 🎯 트러블 슈팅

### 1. 가위 바위 보 선택 방법

- 각 플레이어의 선택 항목을 input태그를 사용해 직접 입력하였지만, 사용자의 직접 입력 방식과 오타문제 등 UX의 불편함이 발생하여 button태그로 리팩토링 진행
- 선택된 가위 바위 보 정보 가져오기 위해 peopleRspArray 배열에 저장하는 아래의 함수 추가

```javascript
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
```

### 2. 이미지 겹침

- 배경 이미지가 사람 이미지와 겹치는 문제가 있었으나 z-index property를 사용해 stack level을 만들어줌으로써 해결함

<br/>
<br/>

## 😀 느낀 점

- 김민선 : 팀 프로젝트를 하면서 깃허브로 협업을 하는 절차에 대해 간략히 배우게 되었습니다. <br> 아직 모르는 부분이 많지만 서로 협업하고 구글링 하면서 html, css, js에 익숙해져 좋았습니다.

- 이규리 : 깃허브를 처음 사용해봤는데 프로그래밍 협업하기 좋은 툴인 것 같습니다. 빨리 익숙해져서 팀프로젝트를 할 때 유용하게 사용하고 싶습니다. <br>
  웹서비스를 만드는 게 쉽지 않았습니다. HTML에서 중첩이 생각보다 많이 필요했고 간단하다고 생각한 기능도 구현하는 것은 간단하지 않았습니다. 더 연습해서 실력을 높이고 싶습니다.

- 송원섭 : 처음 팀으로 진행했던 프로젝트라 재미있게 참여할 수 있었습니다. <br>
  서로 모르는 부분, 알고있는 부분을 공유하며 한단계 더 성장할 수 있었던 기회였습니다. (깃, 깃허브 사용법 등)

- 김유은 : 팀원들과 서로 의견을 공유하며 같이 하루 종일 웹사이트를 개발해나가는 과정이 재밌었습니다. <br>
  아직 자바스크립트 문법과 알고리즘에 대한 깊은 이해는 부족하다는 것을 느껴 더 많이 공부해야겠다고 다짐하게 되었습니다.
