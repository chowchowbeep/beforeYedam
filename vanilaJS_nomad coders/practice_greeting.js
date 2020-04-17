// 제어할 태그를 객체화
const form = document.querySelector(".js-form"),
    input = form.querySelector("input");
const greeting = document.querySelector(".js-greeting");


const USER_LS = "currentUser",
    SHOWING_CN = "showing"


// 06 새로 제출된 유저를 로컬스토리지에 저장하는 함수 정의
function saveName(text){
    localStorage.setItem(USER_LS,text);
    // localStorage.setItem(key,value) localStorage에 값 추가
    // currentUser를 key로 하여 새로 제출된 value값인 유저이름을 저장함.
    // chrome - inspector - application - local storage 저장내용 확인변경삭제가능
}

// 05 유저가 새로 제출된 경우 실행할 함수 정의
function handleSubmit(event){ 
    event.preventDefault();
    //이벤트 발생(아래에서는 submit 이벤트가 인자로 제공됨)해도
    //preventDefault()메소드로 인해, 제출로 인한 리디렉션이 방지됨
    const currentValue = input.value; //input의 value값(제출한 값)을 가져옴
    paintGreeting(currentValue);
    // input의 value값을 인자로 하여 paintgreeting을 실행
    // form이 보이지 않게 되고, hello '제출된 유저이름'표시
    saveName(currentValue);
    // 새로제출된 유저이름을 로컬스토리지에 저장하는 함수를 호출
}

// 04 로컬스토리지에 저장된 유저가 없는 경우 실행할 함수 정의
function askForName(){
    form.classList.add(SHOWING_CN);
    //showing이라는 클래스를 form에 추가(form이 보이게 됨. practice.css참조)
    form.addEventListener("submit", handleSubmit);
    //새로운 유저가 제출되면 handleSubmit함수 실행
}


// 03 로컬스토리지에 저장된 유저가 있는 것으로 확인 될 경우 실행할 함수 정의
function paintGreeting(text){
    form.classList.remove(SHOWING_CN);        
    // form에서 showing클래스 제거(form이 안보이게 됨. practice.css참조)
    greeting.classList.add(SHOWING_CN);
    // greeting에 showing클래스 추가(greeting이 보이게 됨. practice.css참조)
    greeting.innerText = `Hello ${text}`;
    // greeting에 Hello+인자로 받은 값(currentUser,currentValue)삽입 

}

// 02 로컬스토리지에 저장된 유저의 유무에 따라 서로 다른 함수 호출
function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    // localStorage.setItem(key,value) localStorage에 값 추가
    //localStorage.getItem(key) localStorage에서 value 불러오기
    //currentUser를 key로 하는 value 불러오기

    if(currentUser === null){ //로컬스토리지에 저장된 유저가 없는 경우
        askForName(); 
    } else { // 로컬스토리지에 저장된 유저가 있는 경우
        paintGreeting(currentUser);
    }
}

function init(){ // 01 초기화 함수 정의 및 호출
    loadName();
}
init(); 

/*
https://momentumdash.com/
inspector - application - local storage
배경,시간,이름 등의 key에 대한 value 변경해보기 
*/
