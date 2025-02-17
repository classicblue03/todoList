/*
    유저는 값을 입력한다 (= 할일을 추가할 수 있다.)
    + 버튼 클릭시 할일이 추가된다.
    delete 버튼 클릭시 할일이 삭제된다.
    check 버튼 클릭시 할일이 끝난것으로 간주하고 밑줄이간다. (토글)
    
    진행중/종료 탭 클릭시, tab 메뉴바의 밑줄이 이동한다.
    탭을 이용해 아이템들을 상태별로 나누어서 볼 수 있다.
*/

/*
    innerHTML
    - Element의 HTML, XML을 읽어오거나, 설정할 수 있습니다. 
    - 태그 안에있는 HTML 전체 내용을 들고옴
    
    textContent
    - 해상 노드가 가지고 있는 텍스트 값을 그대로 가져옴.
*/
let taskInput = document.getElementById("task-input");
let addBtn = document.getElementById("add-btn");
let taskList = []   // 각각의 할일을 배열로 만든다

addBtn.addEventListener("click", addTask)


// +버튼을 클릭하면 실행될 함수 (할일 추가하기)
function addTask(){
    let taskContent = taskInput.value;
    taskList.push(taskContent);
    console.log(taskList);
    render();
}

// taskList를 그려준다.
function render(){
    let resultHTML = '' // 임의의 문자열 변수

    // i는 taskList(할일목록)의 길이만큼, 증가시킨다
    // 배열 taskList 안의 아이템을 하나씩 꺼내어 그려준다.
    for(let i=0; i<taskList.length; i++) {
        resultHTML += `<div class="task">
                    <div>${taskList[i]}</div>
                    <div>
                        <button>Check</button>
                        <button>Delete</button>
                    </div>
                </div>`
    }

    // task-board에 resultHTML을 붙혀 넣을것이다
    document.getElementById("task-board").innerHTML = resultHTML
}