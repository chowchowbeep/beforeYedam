        /*
        console.log(document); //결과 #document ->html문서 전체
        console.log()과 document.write()에서 
        console과 document도 Object에 해당함.
        log()와 write()는 
        Object인 console과 document의 key이자,
        내장함수 built in function임.
        */

        /* 
        DOM : Document Object Modele
        HTML문서의 모든 요소에 접근하는 방법을 정의한 API
        이를 통해 javascript가 html document에서 모든element를 가져와서,
        object화 시키고 html을 제어할 수 있게 됨. 
        */

//  const JStitle = document.querySelector("#title"); 
        /* 혹은 ->
    const JStitle = document.getElementById("title");
        => html의 id값이 title인 태그를 
        javascript객체 (const JStitle 변수이름;객체이름)로 얻게 됨.
        */


//  JStitle.innerHTML = "Hi! From JS";
        /*
        JStitle에 innerHTML를 key로 하고 "Hi! From JS"를 value로 하는 
        property가 추가되었음.
        innerHTML자체가 html string을 가져오거나 변경시키는 property이기도 함.
        index.html을 열어보면 기존의 id값이 title인 태그에 입력되어 있던 
        글자가 JS에서 입력한 글자로 바뀌어 있음
        (구글 inspector에서 html코드를 보아도 글자가 바뀌어 있음).
        */
//  JStitle.style.color = 'brown';


//  console.log(title); 
        //console에서 입력해보면 html의 #title태그를 출력함.
//  console.dir(title); 
        //console에서 입력해보면 객체title의 다양한key를 볼 수 있음
//  console.dir(document); 
        //console에서 입력해보면 객체document의 다양한key를 볼 수 있음
        // title키의(head의 title태그)값이 start!로 출력됨. 이를 변경 ->
//  document.title = "I understand";
        //document객체의 title키의 값이 I understand로 변경됨.
        //id값이 title인 h1태그와 혼동하지 않도록 주의.



/* 
//JStitle의 글자를 클릭할 때마다 글자색이 beige<->brown으로 전환되도록 만들기

// 01 id값이 title인 태그를 JStitle변수(객체)로 지정.
const JStitle = document.querySelector("#title"); 

// 04 컬러별 변수지정.
const BASE_COLOR ="beige"; 
const OTHER_COLOR = "brown";

// 05 handleClick함수정의
function handleClick(){ 
    const currentColor = JStitle.style.color; 
    //JStitle의 색깔을 currentColor변수로 지정
    if (currentColor === BASE_COLOR){ //현재컬러가 베이지면
        JStitle.style.color = OTHER_COLOR; //JStitle의 컬러를 브라운으로
    } else { //현재컬러 베이지 아니면
        JStitle.style.color = BASE_COLOR; //JStitle의 컬러를 베이지로
    }
}

// 02 init함수정의
function init(){ 
    JStitle.style.color = "BASE_COLOR"; // JStitle의 색깔을 베이지로
    JStitle.addEventListener("click",handleClick) 
    //JStitle에 click발생시 handleClick함수 호출
}

// 03 inti함수 호출
init(); 

=> 한 번 클릭하면 원래 지정된 컬러로 다시 돌아갈 수 없다는 단점. 
*/



        // https://flatuicolors.com/ hex color 참고

        /*
        JStitle.addEventListener("click",handleClick)
        객체 JStitle에 click 이벤트가 생기면 handleClick함수를 호출.

        HTML DOM event MDN 검색하면 click같은 DOM 이벤트를 찾을 수 있음.
        window.addEventListener("Resize",handleResize)처럼 
        윈도우의 이벤트 발생에 따른 함수실행도 가능.

        handleClick()로 입력하면 이벤트가 발생할 떄가 아니라
        즉시 함수가 실행되므로 ()를 반드시 생략해야 함.
        */




// JStitle을 클릭할 때마다 클래스명이 clicked<->빈칸 으로 전환되게 만들되,
// 기존의 클래스명을 잃어버리지 않게 하기.

// 01 id값이 title인 태그를 JStitle로 객체화(제어할 태그설정)
const JStitle = document.querySelector("#title"); 

// 04 "clicked" 값을 CLICKED_CLASS변수로 지정.
const CLICKED_CLASS = "clicked"; 

// 05 handleClick 함수 정의(이벤트 발생시 실행할 함수)
function handleClick(){ 
        JStitle.classList.toggle(CLICKED_CLASS);
        // JStitle의 클래스명 목록에 "clicked"를 toggle화하여 추가함.
        // click이벤트 발생할 때 마다 클래스 목록에 clicked가 생겼다 사라짐.
        // 구글 inspector에서 확인 가능
}

// 02 init함수 정의(이벤트설정, 이벤트 발생시 실행할 함수호출)
function init(){
        JStitle.addEventListener("click",handleClick)
} //JStitle객체에 click이벤트가 발생하면 handleClick함수를 호출.

// 03 init함수 호출
init(); 
