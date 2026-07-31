/*
    * 호이스팅 (Hoisting)
      : JS 엔진은 코드 실행 전 메모리 평가 단계를 거치며
            변수와 함수 선언을 상위에 미리 등록함

      - 코드가 실제로 이동하는 것이 아니라, 선언 정보가 메모리에 먼저 등록되는 현상
      - var 선언은 undefined로 초기화됨
      - let, const 선언은 TDZ(Temporal Dead Zone)에 머물러 접근이 제한됨 (오류 발생!)
*/
// var 변수
console.log( "선언 전: ", name );       // 선언 전에 접근해도 오류가 발생되지 않음!
var name = "백반-불고기";
console.log( "선언 후: ", name );

// let, const 변수
// console.log("선언 전: ", name2);
// 호이스팅은 되지만 선언 지점에 도달하기 전에 TDZ에 머무르므로 접근 시 ReferenceError 발생!
let name2 = "복숭아";
console.log("선언 후: ", name2);

// 함수 선언문의 호이스팅
//  => 함수 전체가 호이스팅되므로 선언문보다 위에서 호출 가능!
hello();
function hello() {
    console.log(" Hello ~ ");
}

// hello();

// 함수 표현식의 호이스팅
//  => 변수에 익명 함수를 할당한 형태는 변수의 호이스팅 규칙을 따르므로
//      선언 전 호출이 불가능!
// bye();       // ReferenceError 발생!
const bye = function() {
    console.log(" Bye ~ ");
}

// bye();