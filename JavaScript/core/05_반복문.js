/*
    * 반복문
      - for / while / do-while

      - for..of (값 순회) / for..in (key 순회)

      - 분기문 : break / continue
*/

// for : 반복 횟수가 정해져 있을 때 사용
//    for(초기식;조건식;증감식) {}

// 1 ~ 7 까지 반복
for (let i = 1; i < 8; i++) {
    console.log( `i값: ${i}` );
}

console.log("================================");
// while : 조건이 참인 동안 반복할 때 사용
//      while(조건식) {}

// 1 ~ 7 까지 반복
let i = 1;
while (i < 8) {
    console.log( `i값: ${i}` );

    i++;
}

console.log("================================");
// do-while : 최소 1번은 무조건 실행하고 조건을 만족하는 경우 반복

// 1 ~ 7 까지 반복
i = 1;
do {
    console.log( `i값: ${i}` );

    i++;
} while (i < 8);

// break    : 즉시 반복문을 종료
// continue : 이번 회차의 남은 코드 실행을 건너뛰고, 다음 회차로 이동
for(let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;       // i값이 5일 때 건너뜀
    }
    if (i === 8) {
        break;          // i값이 8일 때 반복문 종료
    }
    console.log(i);
}
// 출력 결과: 1,2,3,4,6,7

// ------------------------------------
// for...of : 배열 등 순회 가능한 객체의 "값"을 순회
const persons = ["임수진", "박기태", "김동주"];
//   for (자료형 변수명 : 배열) {} => 자바
//   for (const 변수명 of 배열) {} => JS
for (const p of persons) {
    console.log(p);     // "임수진", "박기태", "김동주"
}

// for...in : 객체의 "키값"을 순회
//    for (const 변수명 in 객체) {}
const student = {
    name: "임수진",
    java: 80,
    sql: 78
};

for (const key in student) {
    console.log(key);       // 키값(속성명) name, java, sql

    //console.log( student.key ); // student 객체에서 key 라는 이름의 키값을 조회 => undefined
    console.log( student[key] );
}

// --> 배열에서 for...in 사용 시 주의
for(const index in persons) {
    console.log(index, typeof index);       // 0, 1, 2 (string)
}
// => 배열의 요소(아이템)를 순회할 때는 for...in 대신 for...of 방식을 권장함!