# RSP_Go

<br/>
<br/>

## 📝 프로젝트 소개
- 혼자 하는 가위바위보 게임
- 개발 기간 : 2023.11.24
- 개발 인원 : 4명
- URL : https://frontend-1th-rsp-go.vercel.app/

<br/>
<br/>

## 🙋‍♂️ 팀원 소개

| [김민선](https://github.com/mins-n)      | [이규리](https://github.com/KyuliLee)      | [송원섭](https://github.com/sws6641)      | [김유은](https://github.com/YueunKim)      |
| -------------------------------------- | ----------------------------------------- | ---------------------------------------- | ------------------------------------------ |
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


### Communication

![Slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=Slack&logoColor=white)

<br/>
<br/>

## 💻 협업 방식

1. 기능별 feature branch 생성 (HTML 마크업, CSS 스타일링, JS 기능 구현), PR 및 Merge (approve 1명)
2. 슬랙으로 코드 공유
3. Github Dasktop 사용

<br/>
<br/>

## ✔ 핵심 기능

### 1. 가위 바위 보 
- 사람들이 가위, 바위, 보 중 하나를 선택하고 결과 보기를 클릭하면 게임 결과가 표시됩니다.
- 사람들의 이미지가 매번 랜덤으로 바뀝니다.

### 2. 사람 추가 및 삭제 
- 사람 추가 버튼을 누르면 게임에 참여할 수 있는 사람이 1명씩 추가됩니다.
- 사람 삭제 버튼을 누르면 사람이 1명씩 삭제됩니다.
- 사람은 최대 4명까지만 추가할 수 있습니다.

<br/>
<br/>

## 🎯 트러블 슈팅

### 1. 가위 바위 보 선택 기능 
  - 각 플레이어의 선택 항목을 input태그를 사용해 직접 입력하였지만, 사용자의 직접 입력 방식과 오타문제 등 UX의 불편함이 발생하여 button태그로 리팩토링 진행
  - 참여자 추가, 삭제 시 마다 사용자의 입력을 받기 위해 아래의 함수를 추가함
  ```
  function getRSP(){
    const selectsArray = document.querySelectorAll('.select-box');
    selectsArray.forEach((selects, idx) => {
        selects.querySelectorAll(".selected").forEach((selected,value) => {
            selected.addEventListener("click",()=>{pelpleRspArray[idx] = value;
            console.log(pelpleRspArray);})
        });
    });
}
  ```
2. 

<br/>
<br/>

## 😀 느낀 점

- 김민선 : 
- 이규리 : 깃허브를 처음 사용해봤는데 프로그래밍 협업하기 좋은 툴인 것 같습니다. 빨리 익숙해져서 팀프로젝트를 할 때 유용하게 사용하고 싶습니다. <br>
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;웹서비스를 만드는 게 쉽지 않았습니다. HTML에서 중첩이 생각보다 많이 필요했고 간단하다고 생각한 기능도 구현하는 것은 간단하지 않았습니다.
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;더 연습해서 실력을 높이고 싶습니다.
- 송원섭 : 처음 팀으로 진행했던 프로젝트라 재미있게 참여할 수 있었습니다. <br>
서로 모르는 부분, 알고있는 부분을 공유하며 한단계 더 성장할 수 있었던 기회였습니다. (깃, 깃허브 사용법 등)
- 김유은 :
