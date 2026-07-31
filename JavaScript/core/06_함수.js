/*
    * 함수
      - 선언적 함수 / 함수 표현식 (일급 객체)
      -  일급 객체 : 함수도 하나의 값처럼 사용할 수 있음
      - 오버로딩 미지원, arguments 객체
      - 화살표 함수
*/

// 선언적 함수 : 함수 이름을 가지고 정의
//      function 함수이름([매개변수]) { 실행 내용 }

// test1 함수 정의
function test1() {
    console.log("test1 함수 실행!");
}

// test1 함수 호출
test1();


// 함수 표현식 (일급 객체)
//   const 변수명 = function([매개변수]) { 실행 내용 }
//   => JS 에서 함수는 일급 객체로 변수에 할당 가능
//      이름이 없는 익명 함수를 변수에 대입하여 선언

// test2 함수 정의
const test2 = function() {
    console.log("test2 함수 실행@@");
};

// 함수 호출
test2();

// 오버로딩 미지원, arguments 객체
//  -> JS는 함수 이름이 동일하면 매개변수가 달라도 오버로딩을 지원하지 않음 (덮어씌워짐)
//  -> 모든 일반 함수 내부에는 전달된 모든 인자를 담는 arguments 객체가 자동으로 생성됨

// test3 함수 정의 (함수 표현식)
const test3 = function(name) {
    console.log("매개변수 name : ", name);

    console.log("arguments : ", arguments);
};

// 함수 호출
test3();            // 값을 전달하지 않으면 매개변수가 undefined를 가지게 됨.
test3("임수진");
test3("임수진", 20, "서울시");
// 매개변수를 1개만 정의했지만, 매개변수 개수를 초과해도 값을 전달할 수 있음!
//   함수 내에서는 arguments 객체를 통해 초과된 값을 확인할 수 있음.


// 화살표 함수
//   const 변수명 = ([매개변수]) => { 실행할 내용 }

//  test4 함수 정의
const test4 = () => {
    console.log("test4 함수 실행###");
};

//  함수 호출
test4();

//   실행할 코드가 단일 표현식(한 줄)이고 그 값을 반환하는 경우,
//              중괄호({})와 return 구문을 생략할 수 있음
const add = (a, b) => {
    return a + b;
};
console.log( add(10, 20) );     // 30

const add2 = (a, b) => a + b;
console.log( add2(10, 20) );    // 30

// const test5 = (num) => {
const test5 = (...args) => {
    //console.log( "num: ", num );
    // console.log(arguments);
    // Reference Error : 화살표 함수에는 arguments 객체가 없음!

    console.log(args);  // 화살표 함수에는 전개연산자(...)을 사용하여 매개변수 정의!
}

test5(10, 20, 30);
// -----------------------------
// * 함수를 인자로 전달 : 콜백 함수
function test6(callback) {
    console.log(" ---- test6 함수 실행 --- ");

    callback();         // 전달받은 함수 실행
}


test6(function() {
    console.log(" --- 인자로 전달되는 함수 실행 --- ");
});

// * 함수를 반환값으로 사용 : 고차 함수, 클로저
function test7(x) {
    // 외부 함수(test7)의 변수 x를 내부 함수(익명함수)가 기억하고 있는 구조 => 클로저
    return function(y) {
        return x * y;
    };

}

const double = test7(2);       // x 변수에 2가 저장됨
console.log( double(5) );      // y 변수에 5가 저장됨
// => 2 * 5 = 10

const triple = test7(3);
console.log( triple(4) );       // 3 * 4 = 12