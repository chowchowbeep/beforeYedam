const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");


const TODOS_LS = 'toDos';
function filterFn(toDo){
     
}
const toDos = [];//할일 추가하면 여기 array에 추가

// 제출값을 삭제하는 함수 정의
// 먼저 painToDo gkatndml deBtn에 addEventListener를 추가해줌
function deleteToDo(){
    // 먼저 콘솔을 이용하여 버튼click시 삭제할 대상을 코드로 어떻게 표현하는지 찾기 
    /* console.log(event);
            console에서 MouseEvent출력함. 이벤트리스너 정상작동 확인됨. */
    /* console.log(event.target); 
            target는 event발생으로 인한 함수실행을 어디에 적용할지를 출력함.
            (이 단계에서는 <button>X</button> 로 출력됨) */
    /* console.dir(event.target);
            결과 중 parentNode: li#2을 찾음. 
            우리가 클릭한 것은 id값이 2로 지정된 li태그이며, 
            JS에서는 parentNode로 이 태그를 선택하여 삭제할 수 있을을 알게 됨. */
    /* console.log(event.target.parentNode); 출력해보면
            <li id="2">
                <button>X</button>
                <span>doo</span>
            </li> 와 같이 우리가 클릭한 버튼의 태그(우리가 삭제할 태그)가 
            선택되어 있는 것을 알 수 있음*/

// 삭제하는 코드
    /* delete child element mdn을 구글링해 봄 ->node.removeChild */
    const btn = event.target;
    const li = btn.parentNode;
        // 위에서 찾은 event.target.parentNode
    toDoList.removeChild(li);
        /* const li의 node는 toDoList
        node.removeChild를 활용하여 const li에 해당하는 태그 삭제 가능해짐.
        그러나 새로고침하면 삭제가 안돼있음(실제로 로컬스토리지에서 제거되지는 않음)*/
    
    const cleanToDos = toDos.filter() 
    //filter는 함수를 하나하나씩 실행시킴(forEach와 비슷함.).
    filter
    }



// 제출값을 저장하는 함수 정의
function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
    //로컬스토리지에 key를 'toDos'로 하고,
    //value를 toDos배열(제출되어 toDoObj에 들어간 값)로 하는 데이터가 저장됨.
    
    /* 그러나 크롬검사로 저장된 값을 찾아보면 value가 제대로 보이지 않고
    object라고만 표시됨. (로컬스토리지는 자바스크립트 데이터 저장못함)
    이를 제대로 표시되게 하기 위해 JSON.stringify()이용함.
    JSON.stringify는 자바스크립트 object를 string으로 변경시켜 줌
    JavaScript Object Notation 자바스크립트 객체 표기법 */

    /* 최종적으로 key는 toDos, value는
    [{"text":"to meet someone","id":1},{"text":"to study javascript","id":2}]
    (object가 string으로 변경되어 저장됨)와 같이 조회됨 */
} 


// 제출된 값 처리방식 (제출값을 태그로 만들며 객체를 형성하고
// 그 객체들을 배열에 추가함. 또 이를 로컬스토리지에 저장시키는 함수를 호출) 정의
function paintToDo(text){
    const li = document.createElement("li");
    // 변수 = document.createElement("추가할 태그") 
    // html에 태그를 추가하고, 이를 변수로 취함.
    const delBtn  = document.createElement("button")
    //input type ="button"을 바로 만들 수 있음
    delBtn.innerText = "X";
    delBtn.addEventListener("click", deleteToDo);
    const span = document.createElement("span");
    span.innerText = text;
    //span에 매개변수를 통해 받은 값을 삽입
    //(todoInput으로 제출된 value가 들어감)

    li.appendChild(delBtn);
    li.appendChild(span);
    //변수.appendChild(자식변수); 변수에 자식변수를 추가하는 것.
    toDoList.appendChild(li); 
    // toDoList(ul태그) > li(li태그) > span(span태그), delBtn(input button태그)

    const newID = toDos.length + 1;
    li.id = newID
    //toDo배열의 value갯수 + 1을 li의 id속성으로 대입함.

    const toDoObj = { // 하나의 제출값이 id와 함께 셋트(객체)로 저장됨. 
        text: text, 
        //handleSubmit 함수 속 함수paintToDo가 호출된 경우,
        //text를 key로, input으로 제출된 값이 toDoObj에 value로 하여 toDoObj에 들어감
        id: newID
        //id를 key로, 위에서 정의한 변수newID를 value로 하여 toDoObj에 함께 저장
    };
    toDos.push(toDoObj);//객체 toDoObj를 toDo배열에 추가
    saveToDos();
    //제출값을 저장하는 함수 호출
}
/* 값제출이벤트 발생시만 paintToDo()가 호출되도록 설정되어있다면,
로컬스토리지에 제출값을 저장을 해뒀어도 
새로고침을 하면 웹페이지 화면에서는 저장된 내용이 보이지 않게 됨. 
새로고침을 해도 저장된 내용이 출력되게 하려면 
페이지가 새로고침 되었을 때 저장된 내용이 있는지 확인하고 
이를 화면에 보이게 하는 함수를 실행시켜 줘야 함.
(loadToDos함수 참조) */



// 값 제출 이벤트 발생시 실행할 함수 정의
function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value =""; //제출한 값이 사라지도록? 값 제출 후 입력칸이 빈칸이 되도록?
}


function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS); //TODOS_LS='toDos'
    if(loadedToDos !== null){ // toDos를 key로 하여 저장된 value가 있다면?
        // console.log(loadedToDos); 로컬스토리지에 저장된 값 load 확인
        const parsedToDos = JSON.parse(loadedToDos);
        /* console.log(parsedToDos);
          >  (2) [{…}, {…}]
                0: {text: "to meet someone", id: 1}
                1: {text: "to study javascript", id: 2}
                length: 2
        JSON.stringify()를 통해 제출값이 string으로 저장되었던 것을
        JSON.parse()를 이용하여 다시 객체를 인식하여 분해하도록 함. */
        parsedToDos.forEach(function(toDo){ 
        /* array.forEach() - array에 담겨진 것들 각각에 함수를 실행.
        forEach바로 안에 등장하는 함수의 parameter(toDo)는 
        array(toDos)에 담겨진 각각의 데이터(객체)를 가리키는 것????
        toDo는 임의지정된 parameter이름. */
            paintToDo(toDo.text);
            // painToDo함수를 호출하는데,
            // toDo객체의 key중 text의 value를 불러와서 인자로 보냄.
            // toDo.text = toDoInput.value
        });
    } 
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit)
}
init();