window.onload = function () {
    /*
        JS 코드 작성 시
        1) 대상 요소 확인
        2) 어떤 이벤트가 발생했을 때 동작해야 하는지 확인
        3) 동작할 내용을 이벤트 핸들러(함수)에 정의
    */

    // 문자열 길이 및 공백 계산
    // 1) textarea#textInput
    const textInput = document.querySelector('#textInput');
    // 2) keyup
    textInput.addEventListener('keyup', function() {
        const inputValue = textInput.value;
        // 3) 입력된 글자 수를 span#totalLength 에 출력
        document.querySelector('#totalLength').textContent = inputValue.length;
        //          공백 제외 글자 수를 span#noSpaceLength 에 출력
        document.querySelector('#noSpaceLength').textContent = inputValue.replace(/ /g, '').length;
    });

    // 배열 요소를 활용한 할 일 목록
    /*
    // 1) [추가] 버튼 button#addTodoBtn
    const addTodoBtn = document.querySelector("#addTodoBtn");
    // 2) click
    addTodoBtn.addEventListener('click', function() {
        // 3) 입력된 값(input#todoInput)을 하단 영역에 출력 ul#todoList > li
        const inputValue = document.querySelector("#todoInput").value;
        const liEl = document.createElement("li"); // <li></li>
        liEl.className = "list-group-item"; // <li class="list-group-item"></li>
        liEl.textContent = inputValue; // <li class="list-group-item">입력된값</li>
        document.querySelector('#todoList').appendChild(liEl);
    });
    */

    // 배열 사용 버전
    // 배열 선언 => 입력된 값들을 저장
    const todos = ["커피 한잔"];
    // 1) [추가] 버튼 button#addTodoBtn
    const addTodoBtn = document.querySelector("#addTodoBtn");
    const todoList = document.querySelector("#todoList");
    function renderTodos() {
        // todos 배열에 있는 데이터를 #todoList 영역에 모두 출력
        todoList.innerHTML = "";
        todos.forEach((value, index) => {
            const liEl = document.createElement("li"); 
            liEl.className = "list-group-item"; 
            liEl.textContent = value; // 배열에 저장된 데이터를 출력
            todoList.appendChild(liEl);
        });
    }
    // 2) click
    addTodoBtn.addEventListener('click', function() {
        // 3) 입력된 값(input#todoInput)을 하단 영역에 출력 ul#todoList > li
        const inputValue = document.querySelector("#todoInput").value;
        // todos 배열에 입력된 값을 추가
        todos.push(inputValue);
        // renderTodos() 호출
        renderTodos();
    });
    // 초기 목록 렌더링(화면에 출력)
    renderTodos();

    //카운트다운 타이머
    // 타이머 id를 저장하기 위한 변수
    let timerId = null;
    // 1) [시작] 버튼
    const startBtn = document.querySelector('#startTimerBtn');
    // 2) click
    startBtn.addEventListener('click', function() {
        // 이미 타이머가 등록되어 있으면 추가로 등록하지 않도록 함수 종료!
        if (timerId !== null) {
            return;
        }
        // 3) #timerDisplay 인 영역의 값을 1씩 감소 (1초마다) 출력
        //    => setInterval
        timerId = setInterval(function() {
            const timerDisplay = document.querySelector("#timerDisplay");
            let timerValue = timerDisplay.textContent;
            timerValue = parseInt(timerValue); // string -> number 변환
            if (timerValue > 0) {
                timerValue--; // 1 감소
                timerDisplay.textContent = timerValue;
            }
        }, 1000);
    });
    //    [일시정지] 버튼
    const pauseBtn = document.querySelector('#pauseTimerBtn');
    // 2) click
    pauseBtn.addEventListener('click', function() {
        // 타이머 정지 => 동작하고 있던 setInterval을 clear!
        clearInterval(timerId);
        timerId = null;
    });
    //    [리셋] 버튼
    const resetBtn = document.querySelector('#resetTimerBtn');
    // 2) click
    resetBtn.addEventListener('click', function() {
        // #timerDisplay 영역에 초기값(10)으로 출력
        document.querySelector("#timerDisplay").textContent = 10;
        // 동작중인 타이머는 제거(clear)
        clearInterval(timerId);
        timerId = null;
    });

    // 할인율 계산기
    // 1) [최종 금액 계산] 버튼 button#calculateBtn
    const calcBtn = document.querySelector('#calculateBtn');
    // 2) click
    calcBtn.addEventListener('click', function() {
        // 3) 선택된 상품 금액, 입력된 수량, 선택된 쿠폰 값으로 결제 금액 계산
        // select#itemSelect 선택된 값 => 대상요소.value
        const price = Number(document.querySelector('#itemSelect').value);
        const qty = Number(document.querySelector('#itemQuantity').value);
        const dis = Number(document.querySelector('#couponSelect').value);
        const totalPrice = price * qty * (1 -dis);
        document.querySelector('#priceResult').textContent = `결제 금액: ${totalPrice}원`;
    });
    
    // 숫자 배열 합계, 평균
    let numbers = [];
    // numbers 배열의 데이터를 출력, 총합과 평균을 출력
    function showNumbers() {
        // 배열의 데이터를 콤마(,)로 구분해서 #numberArrayDisplay 영역에 출력
        // 배열 내 데이터를 구분자를 사용하여 하나의 문자열로 반환 : 배열.join(구분자)
        document.querySelector('#numberArrayDisplay').textContent = numbers.join(",");
        const sumDisplay = document.querySelector('#sumDisplay');
        const avgDisplay = document.querySelector('#avgDisplay');
        // 배열에 데이터가 없으면 직접 초기화
        if(numbers.length === 0) {
            sumDisplay.textContent = 0;
            avgDisplay.textContent = 0;
            return;
        }
        const total = numbers.reduce((sum, curr) => sum + curr, 0);
        // 합계 #sumDisplay 영역에 배열의 총 합 출력
        sumDisplay.textContent = total;
        // 평균 #avgDisplay 영역에 평균 출력
        avgDisplay.textContent = total / numbers.length;
    }
    // 1) [숫자 추가] 버튼
    const addBtn = document.querySelector('#addNumberBtn');
    // 2) click
    addBtn.addEventListener('click', function() {
        // numbers 배열에 입력된 값 추가
        let num = Number(document.querySelector("#numberInput").value);
        if (num === '') {
            alert("숫자를 입력해주세요.");
            return;
        }
        num = Number(num);
        numbers.push(num);
        //showNumber() 함수 호출하여 화면에 출력
        showNumbers();
    });
    // 1) [초기화] 버튼
    const clearBtn = document.querySelector("#clearNumbersBtn");
    // 2) click
    clearBtn.addEventListener('click', function() {
        // 배열을 초기화 -> 빈 배열을 저장
        numbers = [];
        // 입력 요소 초기화 -> value 속성을 '' 변경
        document.querySelector('#numberInput').value = '';

        // showNumbers() 함수를 호출하여 화면에 출력
        showNumbers();
    });
}