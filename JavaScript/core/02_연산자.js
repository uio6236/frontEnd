/*
    * 연산자
      - 산술 / 대입 / 비교 / 논리 (이항 연산자)
      - 삼항 연산자, null 병합 연산자 (??), 옵셔널 체이닝 (?.)
*/

// 산술 연산자 : + - * / % ** (거듭제곱)
console.log( 10 + 3 );      // 13
console.log( 10 % 3 );      // 1
console.log( 2 ** 10 );     // 1024

// 대입 연산자 : = += -= *= /= %=
let x = 10;
x += 5;     // x = x + 5 와 동일!
console.log("x:", x);

// 비교 연산자 : > < >= <= == != === !==
//  == : 동등 비교 연산자 (타입을 자동으로 변환하여 값만 비교)
//  === : 일치 비교 연산자(값과 데이터 타입을 모두 엄격하게 비교)
console.log( 55 == "55" );      // true
console.log( 55 === "55" );     // false (숫자와 문자열 타입이 다름!)

console.log( 55 != "55" );      // false
console.log( 55 !== "55" );     // true

// 논리 연산자 : && || !
// * 단축 평가(SCE) : 단순한 true, false 판단에 그치지 않고, 평가 결과의 "값" 반환
//   A && B : A가 true이면 B 반환, A가 false이면 A 반환
//   A || B : A가 true이면 A 반환, A가 false이면 B 반환
console.log( true && "결과" );      // "결과"
console.log( false && "결과" );     // false

console.log( true || "결과" );      // true
console.log( false || "결과" );     // "결과"

console.log( "값" || "기본값" );    // "값"
console.log( "" || "기본값" );      // "기본값" ( 빈 문자열은 false )

// * 매개변수 기본 값 설정
function hi(name) {
    name = name || "게스트";
    // => name에 값이 전달되지 않으면 undefined 이므로 false로 인식됨!

    console.log("안녕하세요. " + name + "님");
}

hi("수진");     // "안녕하세요. 수진님"
hi();           // "안녕하세요. 게스트님"

// * 객체가 존재할 때 속성, 메소드 실행
const user = {
    name: "임수진"
};

user && console.log(user.name);
// => user 에 값이 있을 때 오른쪽(B) 코드 실행

// 삼항연산자 : 조건식 ? 참일 때 값 : 거짓일 때 값
const age = 20;
const result = age >= 19 ? "성인" : "미성년자";
console.log(result);        // 20>=19 결과가 true이므로 "성인"

// null 병합 연산자 : ??
//  => A ?? B : A의 값이 null 또는 undefined일 때 B 값을 반환(사용)
const count = 0;

console.log( count || 10 );     // 10 ( 0을 false로 인식하여 10 반환 )
console.log( count ?? 10 );     // 0 ( 0은 null, undefined가 아니므로 0 반환 )

console.log( undefined ?? 10 ); // 10
console.log( null ?? 10 );      // 10


// 옵셔널 체이닝 연산자 : ?.
//    => 접근하는 객체나 속성이 null 또는 undefined 이더라도 오류 없이 undefined 반환
const data = {
    user: null, 
    len: 0
};

console.log( data.user );       // null
// console.log( data.user.name );  // TypeError!
console.log( data.user?.name ); // undefined ( data.user가 null 이므로 오류 대신 안전하게 undefined 반환)

console.log( data?.len );    // 0