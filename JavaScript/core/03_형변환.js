/*
    * 형변환 : 데이터 타입을 변환하는 것.
      => 연산 수행 시 피연산자의 타입이 일치해야 하므로 형변환이 발생함!

    - 명시적 형변환 (강제 형변환)
    - 묵시적 형변환 (자동 형변환)
*/

// * 명시적 형변환
//  문자열 -> 숫자
console.log( Number("123") );       // 123
console.log( Number("123px") );     // NaN (숫자가 아닌 문자가 포함되면 NaN)

console.log( parseInt("123px") );   // 123 (시작하는 숫자 부분만 추출하여 변환)
console.log( parseInt("px123") );   // NaN (숫자로 시작하지 않으면 NaN)

console.log( parseFloat("99.9kg") );  // 99.9 (소숫점을 포함한 실수로 변환)

//  숫자 -> 문자열
console.log( String(123) );     // "123"
console.log( (123).toString() ); // "123"

// 불리언 타입으로 변환
console.log( Boolean("true") );     // true
console.log( Boolean(0) );          // false (0 은 false)

console.log( !!"abc" );             // true
console.log( !!"" );                // false ("" 은 false)


// * 묵시적 형변환

//   + 연산자에 문자열이 포함되면, 문자열 연결이 우선 적용됨
console.log( 1 + "1" );     // "11"
console.log( "5" + 3 );     // "53"

console.log( parseInt("5") + 3 );   // 8

//   - * / % 연산자는 수학적 연산이 우선되어 피연산자를 숫자로 변환함
console.log( 1 - "1" );   // 0
console.log( "5" * "2" ); // 10
console.log( true - "2" );// -1 (true 는 숫자 1로 변환)


/*
  * true, false로 취급되는 값

    - falsy 값 (7개) : false, 0, -0, "", null, undefined, NaN

    위의 7개를 제외한 모든 값은 Truthy로 취급됨
    => [] -> true, {} -> true, "0" -> true
*/
"" ? console.log("빈 문자열은 true다.") : console.log("빈 문자열은 false다.");
// => "" (빈 문자열)은 falsy!

[] ? console.log("빈 배열은 true다.") : console.log("빈 배열은 false다.");
// => [] (빈 배열)은 truthy!

// * 배열이 비어있는 지 판별
const arr = [];

if (arr) {  // 배열이 비어있어도 truthy!
  console.log("배열이 존재함!!");
}

// 배열이 비어있는 지 판별 => length를 통해 검사!
if (arr.length === 0) {
  console.log("배열이 비어있음!");
}

if (arr.length !== 0) {
  console.log("배열이 비어있지 않음!");
}