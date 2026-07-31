console.log("Hello, World!");

/*
    * 자바스크립트 : 동적 타입 언어
      => 변수를 선언할 때 타입을 미리 지정하지 않고,
         프로그램 실행 중(런타임)에 할당되는 값에 따라 타입이 결정되는 언어
*/

/*
    * 자바스크립트 변수 선언 키워드
    - var   : 과거에 사용하던 방식 (중복 선언 허용, 블록 스코프 미지원 등으로 권장하지 않음)
    - let   : 재할당이 가능한 변수 (자바에서의 일반적인 변수)
    - const : 재할당이 불가능한 상수를 표현하는 키워드
*/

console.log(name);
console.log(age);
console.log("------------------------");
/*
    * 호이스팅 (Hoisting)
    : 변수 및 함수 선언문이 해당 스코프의 최상단으로 끌어올려진 것처럼 동작하는 현상
*/

var name = "임수진";
var age;

console.log(name);      // "임수진"
console.log(age);       // undefined

console.log("------------------------");
var name = "김수진";        // var 키워드 사용 시 동일한 이름으로 재선언 가능 (위험 요소)
console.log(name);
// ------------------------------------------------------------
/*
    * let, const의 경우 호이스팅은 일어나지만, 선언문 이전 구역(TDZ)에 위치하게 되어,
        변수 선언 코드에 도달하기 전에 접근하려고 하면 ReferenceError 발생시켜 안정성을 높임
*/
console.log("==================================");
// console.log(name2);   // ReferenceError 발생

let name2 = "임수진";
console.log(name2);

name2 = "정수진";       // 재 할당(값 변경) 가능
console.log(name2);

const name3 = "김채희";
console.log(name3);

// name3 = "배정윤";       // TypeError.. (재할당 불가)

const arr = [1,2,3];    // [1,2,3]
arr.push(5);            // [1,2,3,5]

console.log(arr);

// arr = [5];      // 메모리 주소 자체를 재할당 (불가!)
// ------------------------------------------------------
console.log("==================================");
/*
    * 변수 명명 규칙 *

    1. 특수문자는 언더바(_), 달러($) 만 사용 가능
    2. 숫자로 시작할 수 없음
    3. 예약어(키워드)는 사용 불가
    4. 영문자, 숫자, 특수 기호만 사용 가능

    [관례]
    - 변수명, 함수명 : 카멜케이스 (ex. userId, productPrice)
    - 클래스명 : 파스칼케이스 (ex. Product, UserProfile)
    - HTML, CSS 속성 및 클래스명 : 케밥케이스 (ex. user-id, item-list)
*/
/*
    * 자료형 *
    - 원시타입 (기본자료형) : String, Number, Boolean, undefined, null, Symbol
    - 참조타입 (객체) : Object, Array, Function 등
*/
let value = "아메리카노";   
// typeof 값 => 값에 대한 자료형 확인
console.log(typeof value);  // => String

value = 5500;
console.log(typeof value);  // => number

const num1 = 500;
const num2 = 12.57;

console.log(typeof num1, typeof num2);
// Number (숫자) => 정수와 실수를 구분하지 않음

const isTrue = true;
console.log(typeof isTrue); // => boolean

let num3;
console.log(num3, typeof num3);
// undefined => 변수 선언 후 값을 초기화하지 않았을 때 자동으로 할당

let data = 1000;
// ....
data = null;
console.log(typeof data);
// object => null: 명시적으로 "값이 없음"을 나타낼 때 할당 (js 초기 설계상의... 오류/버그)

const s1 = Symbol("100");
const s2 = Symbol("100");
console.log(s1, s2);
console.log(s1 == s2);
// Symbol : 유일무이한 고유한 값. 내부의 값이 같더라도 각각 고유한 주소값을 가지므로 결과는 false!

const arr2 = ["하늘색", "핑크색", "노란색"];
console.log(arr2, typeof arr2); // => object
// Array : 자바의 List와 유사. 동적 크기를 가짐.
arr2.push("회색");

console.log( arr2[3] );

console.log( arr2[5] );     // 존재하지 않는 인덱스 접근 시 undefined 반환

const myInfo = {
    // 키: 밸류
    name: "임수진",
    age: 20, 
    introduce: function() {
        console.log("안녕 ~ 나는 임수진이야!");
    }
};

myInfo.introduce();     // 메소드 직접 실행(호출)
// * 객체 내 키값에 접근 방법
//   [1] 점 표기법 접근         변수명.키값
//   [2] 대괄호 표기법 접근     변수명["키값"]
console.log( myInfo.name );
console.log( myInfo["name"] );

console.log(typeof myInfo);     // => object (key-value 구조, 자바의 Map 과 유사)