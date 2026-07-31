/*
    스코프
    : 변수와 함수가 접근할 수 있는 유효한 범위
    : 식별자(변수명, 함수명)를 찾을 때 순서
       현재 스코프 -> 상위 스코프 -> 전역 스코프
*/

var num1 = 20;

function test1() {
    console.log(num1);  // 전역 변수 num1(20) 참조
}

function test2() {
    var num1 = 30;
    console.log(num1);  // 지역 변수 num1(30) 참조
}

test1();        // 20
test2();        // 30
// => 함수 내부에 해당 변수가 없으면 상위 스코프에서 변수를 탐색


var num2 = 50;
function test3() {
    var num2 = 70;

    test4();
    // test4 함수가 실행되는 위치 상관없이
    //      선언된 시점에서의 상위 스코프 변수를 참조!
    console.log("test3 :: ",num2);      // 지역변수 num2 (70)
}

function test4() {
    console.log("test4 :: ", num2);      // 전역변수 num2 (50)
}

test3();
/*
    출력 예상)
    test4 :: 50
    test3 :: 70
*/
// 렉시컬 스코프 : 함수가 "어디서 실행되었는지"가 아니라
//                  "어디에 선언되었는지"에 따라 상위 스코프를 결정!

// -----------------------------
/*
    * var   : 함수 스코프
    * let, const    : 블록 스코프
*/
var i = 777;
for(var i = 0; i < 10; i++) {
    // ~~~
}
console.log("i: ", i);
// var : 함수 스코프를 따르므로 
//       for문 블록 내부에서 동일한 이름의 변수를 사용하면
//      전역 변수가 덮어씌워짐!

let j = 999;
for(let j = 0; j < 10; j++) {}
console.log("j: ", j);
// let : 블록 스코프를 따르므로
//       for 문 블록 내부의 j와 외부(전역) j는 별개의 변수!