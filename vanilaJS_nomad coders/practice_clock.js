// 01 제어할 태그를 객체화 
const clockContainer = document.querySelector(".js-clock"),
clockTitle = clockContainer.querySelector("h1");
// h1이 clockContainer객체가 된.js-clock 태그를 조상태그로 가질 경우
// clockContainer.querySelector("h1");로 h1태그를 가져올 수 있음
//동시에 여러 변수를 정의할 때 콤마찍고 연이어 변수를 입력. ;는 마지막 변수정의시.
//const생략


// 04 init함수 호출시 실행될 코드를 함수로 정의
function getTime(){
        const date = new Date(); 
        // 내장함수new Date()를 이용하여 현재Date불러오기
        const seconds = date.getSeconds();
        const minutes = date.getMinutes();
        // getMinutes함수를 이용하여, 위에서 정의한 date의 minutes를 불러오기
        const hours = date.getHours();

        // clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
        //innerText속성을 이용하여 clockTitle이 가리키는 h1태그에 들어갈 내용지정
        //`${}` 안에 내용입력 
        // => 숫자 단위가 10보다 작은 경우 01이 아닌 1로 표시됨.
        // 이를 변경해줄 것임.
        clockTitle.innerText = `${hours<10 ? `0${hours}` : hours}:${minutes<10 ? `0${minutes}` : minutes}:${seconds<10 ? `0${seconds}` : seconds}`;
        //mini if문. 
        //조건 ? `true일 경우 반환값` : false일 경우 반환값
}

// 02 init 함수 정의(getTime함수 호출)
function init(){
        getTime(); 

// 05 getTime 함수 실행간격을 설정        
        setInterval(getTime, 1000);
        //setInterval(실행할 함수이름, 실행간격_1000은 1.000초마다 한번)함수
} 

// 03 init 함수 호출
init();