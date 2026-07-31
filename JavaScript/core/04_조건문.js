/*
    * 조건문
    - if / else if / else
    - switch
    - 삼항 연산자
*/

// if
const score = 80;
// const score = prompt("점수 입력 : ");
let grade;

if (score >= 90) {
    grade = 'A';
} else if (score >= 80) {
    grade = 'B';
} else if (score >= 70) {
    grade = 'C';
} else {
    grade = 'D';
}

console.log(grade);

// switch : 비교 대상과 특정 값을 비교할 때 일치 연산(===)으로 비교함!
const day = 3;

switch(day) {
    case 0:     // day === 0
        console.log("일요일");
        break;
    case 1:
        console.log("월요일");
        break;
    case 2:
        console.log("화요일");
        break;
    // case "3":   // day === "3" => false
    case 3:
        console.log("수요일");
        break;
    // ...
    default:
        // 모든 case에 해당되지 않을 때 실행
        console.log("목요일 이후,,, 또는 잘못된 값");
        break;
}