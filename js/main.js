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
    // let taskContent = taskInput.value;
    // 관련있는 정보를 모으기 위한 객체 만들기
    let task = {
        id : randomIDGenerate(),
        // 고유한 정보를 관리하기 위해서 id값을 부여해야한다. (정보(각각의 할일)에는 id가 필요하다)
        // 할일을 생성할때 randomIDGenerate 호출되며 아래 randomIDGenerate 가 실행됨 
        taskContent : taskInput.value,
        isComplete : false // 완료상태 체크
    }
    taskList.push(task);
    console.log(taskList);
    render();
}

// taskList를 그려준다.
function render(){
    let resultHTML = '' // 임의의 문자열 변수

    // i는 taskList(할일목록)의 길이만큼, 증가시킨다
    // 배열 taskList 안의 아이템을 하나씩 꺼내어 그려준다.

    // toggleComplete 함수가 실행될때마다, 클릭된 아이템에(taskList[i]) id값을 넣어준다
    for (let i=0; i<taskList.length; i++) {
        if(taskList[i].isComplete == true) {
            resultHTML += `<div class="task">
                    <div class="task-done">${taskList[i].taskContent}</div>
                    <div>
                        <button onClick="toggleComplete('${taskList[i].id}')">Check</button>
                        <button onClick="deleteTask(${taskList[i].id})">Delete</button>
                    </div>
                </div>`
        }else {
            resultHTML += `<div class="task">
            <div>${taskList[i].taskContent}</div>
            <div>
                <button onClick="toggleComplete('${taskList[i].id}')">Check</button>
                <button onClick="deleteTask('${taskList[i].id}')">Delete</button>
            </div>
        </div>`
        }
        
    }

    // task-board에 resultHTML을 붙혀 넣을것이다
    document.getElementById("task-board").innerHTML = resultHTML
}

// (id) = taskList[i]
function toggleComplete(id) {
    console.log("id:",id);
    for (let i=0; i<taskList.length; i++) {
        // i번째에 있는 아이템의 id가 매개변수로 받은 id와 같다면, isComplete 값을 true로 바꾼다. 
        if(taskList[i].id == id) {  
            // 선택한 값에 따라서 true, false로 값을 바꿔야한다 -> 현재 갖고 있는 값의 반대가 되는(switch 기능) 코드를 작성
            taskList[i].isComplete = !taskList[i].isComplete;
            // taskList[i].isComplete = true;
            break;
        }
    }
    render()
    console.log(taskList);
}

// n번째 있는 index값을 삭제할것인지
// 구글검색 - how to remove item from array javascript
function deleteTask(id) {
    for(let i =0; i<taskList.length; i++) {
        if(taskList[i].id == id) {
            taskList.splice(i,1); // i번째 아이템을 하나만 삭제하겠다.
            break;
        }
        // console.log(taskList);
    }
    render();
    // console.log ("삭제",id);
}

/*
    js로 randomID 생성하기
    google 검색 - generate random id javascript
    https://gist.github.com/kenng/3fa1347bd0fe34866f28959fec86d784
*/
function randomIDGenerate() {
    return '_' + Math.random().toString(36).substr(2, 9);
}