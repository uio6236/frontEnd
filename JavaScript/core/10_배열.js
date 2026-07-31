/*
    * 배열 (Array)
    : 순서가 있는 데이터 집합
    : JS 배열은 크기가 동적으로 변경 (자바의 List와 유사)
*/

const members = ["폼폼푸린", "아냐포저", "홍길동"];

// * push : 맨 뒤에 데이터(요소) 추가
members.push("가츠");
console.log(members);

// * pop : 맨 뒤의 데이터를 제거하고 반환
console.log( members.pop() );
console.log(members);

// * unshift : 맨 앞에 데이터 추가
members.unshift("가츠");
console.log(members);

// * shift : 맨 앞의 데이터 제거하고 반환
console.log( members.shift() );
console.log(members);

// => push, pop, unshift, shift : 원본 변경

// 첫번째 데이터에 접근
console.log( members[0] );

// 세번째 데이터를 변경
members[2] = "가츠";
console.log(members);


// * splice : 배열의 특정 위치 요소 제거 또는 변경
//     배열명.splice(시작인덱스, 제거할_개수[, 변경할 값])
let arr = ["a", "b", "c", "d", "e"];

const spArr = arr.splice(1, 2);    // "b", "c" 제거
console.log(spArr);     // ["b", "c"]
console.log(arr);       // ["a", "d", "e"] => 원본 변경됨!

// * slice : 배열의 일부분을 추출하여 새 배열로 반환 (원본 유지)
//      배열명.slice(시작인덱스, 끝인덱스) => 시작인덱스 ~ 끝인덱스-1
arr = ["a", "b", "c", "d", "e"];

// "a", "b", "c" 추출하고자 한다면..? 
const slArr = arr.slice(0, 3);
console.log(slArr);     // ["a", "b", "c"]
console.log(arr);       // ["a", "b", "c", "d", "e"]



// 검색, 문자열 변환, 정렬 ---------------

// * indexOf : 해당 값이 배열에 존재하면 인덱스 번호 반환
//                              존재하지 않으면 -1 반환

const colors = ["red", "green", "blue"];
console.log( colors.indexOf("green") );     // 1
console.log( colors.indexOf("pink") );      // -1

// * includes : 해당 값이 배열에 존재하면 true, 존재하지 않으면 false 반환
console.log( colors.includes("green") );    // true
console.log( colors.includes("pink") );     // false


// * join : 배열 데이터(요소)를 구분자로 연결하여 하나의 문자열을 반환
console.log( colors.join() );   // 기본 구분자: 콤마(,)
console.log( colors.join("/") ); // 구분자 지정: /


// * sort : 배열 데이터 정렬 (오름차순)
colors.sort();
console.log( colors );

// * reverse : 배열 순서를 반대로 뒤집음
colors.reverse();
console.log( colors );

// 숫자 정렬 => 비교 함수 전달
const nArr = [10, 3, 25, 7];
//  nArr.sort();        => 첫 글자 기준으로 정렬
nArr.sort((a, b) => a - b);     // 오름 차순
console.log( nArr );            // [3, 7, 10, 25]

nArr.sort((a, b) => b - a);     // 내림 차순
console.log( nArr );            // [25, 10, 7, 3]

// -------------------------------------------
/*
    * 배열의 고차 함수
      : 함수를 인자(콜백 함수)로 받는 함수
      : 대부분 원본 배열을 변경하지 않고, 새로운 배열을 생성하여 불변성을 유지
*/
const stdList = [
    {id: 1, name: "임수진", java: 78, sql: 77 },
    {id: 2, name: "정우찬", java: 92, sql: 87 },
    {id: 3, name: "이우진", java: 88, sql: 94 }
];

// * forEach : 각 요소를 단순히 순회 (반환값 없음)
stdList.forEach((value, index) => {

    console.log(`${index} 번째 : ${value.name}`);

});
/*
    // forEach 내부 동작 --------------
    function forEach(callback) {
        for(let i = 0; i <stdList.length; i++) {
            callback(stdList[i], i);
        }
    }
*/

// * map : 기존 배열의 각 요소를 가공하여 새로운 배열 반환
let numbers = [1, 2, 3];
/*
const newArr = numbers.map((n) => {
    return n * 2;
});
*/
const newArr = numbers.map((n) => n * 2);
console.log(newArr);        // [2, 4, 6]

const names = stdList.map((std) => std.name);
console.log(names);         // 학생 정보에서 이름(name)만 따로 추출하여 배열로 반환


// * filter : 콜백 함수의 리턴값이 true인 요소만 가지고 새로운 배열로 반환
numbers = [1,2,3,4,5,6,7,8,9,10];

// 짝수만 따로 추출..  n % 2 == 0
const even = numbers.filter((value) => value % 2 === 0);
console.log(even);

const stds2 = stdList.filter((std) => std.id !== 2);
console.log(stds2);         // id가 2가 아닌 학생 목록
console.log(stdList);


// * reduce : 배열의 요소를 하나씩 전달하며 하나의 값으로 누적 합산
//      reduce((누적값, 현재요소) => { return 다음누적값; }, 초기값)

const scoreList = [10, 20, 30];

const total = scoreList.reduce((sum, curr) => {
    return sum + curr;
}, 0);
console.log(total);     // 60

// stdList 배열에서 자바 점수 총 합
const javaTotal = stdList.reduce((sum, std) => sum + std.java, 0);
console.log(javaTotal);

// * find : 조건을 만족하는 "첫 번째 요소"를 반환 (없으면... undefined)
const result = stdList.find((std) => std.name === "임수진");
console.log(result);

// * findIndex : 조건을 만족하는 "첫 번째 요소의 인덱스"를 반환 (없으면 -1)
const idx = stdList.findIndex((std) => std.name === "정우찬");
console.log(idx);

// * 조건 검증 : some / every
const arr2 = [1,2,3,4,5];

console.log( arr2.some((n) => n > 3) ); // some : 조건을 만족하는 요소가 하나라도 있으면 true
console.log( arr2.every((n) => n > 3) );// every : 모든 요소가 조건을 만족하면 true