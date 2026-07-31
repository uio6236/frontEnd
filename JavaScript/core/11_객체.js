/*
    * 객체 (object)
    : 중괄호 ({}) 안에
*/
const lunch = {
    name: "햄버거",
    price: 6000,
    kind: "양식",
    side:   ["감자튀김", "텐더", "치즈스틱"]
};

// * 속성 접근 방법 (2가지) *
// 1) 점 표기법: 객체명.속성명
// 2) 대괄호 표기법: 객체명["속성명"]
//      -> for ... of 문 사용 시 객체명[변수명]
console.log("전날 점심 메뉴: ", lunch.name);
console.log("가격: ", lunch["price"]);
// 속성값 수정
lunch.price = 7000;
// 새로운 속성 추가 => 객체명.추가할속성명 = 속성값
lunch.address = "강남";

/*
    * 메소드 (Method) : 객체 내부에 정의된 함수
    - this: 해당 메소드를 호출한 객체를 가리킴!
        => 화살표 함수로 메소드를 정의하면 this는 상위 스코프를 가리키므로
            일반 함수 표현식을 사용하는 것을 권장!
*/
const person = {
    name: "sd",
    eat: function(food) {
        console.log(`${this.name} 은(는) ${food}를 먹습니다.`);
    }
}
person.eat("버거킹");
/*
    * 단축 속성명 (Short Property Names)
    : 객체 생성 시 키값과 변수명이 동일한 경우 축약 표현이 가능
*/
const name = "토토로";
const age = 1300;
// { name: xxx, age: xx }
const character = {name, age};

/*
    * JSON (JavaScript Object Notation)
    : 클라이언트와 서버 간 데이터를 주고받을 때 사용하는 표준 텍스트 포맷
    : 구조(형태)가 자바스크립트 객체와 유사하지만, 실제로는 순수한 문자열 타입 (String)
*/
const user = {
    name: "koi",
    age: 20,
    skills: ["java", "sql", "html", "css", "js"],
    introduce: function() {
        console.log("안녕하세요, " + this.name + "입니다.");
    }
}
// * 객체 -> JSON :: 문자열로 변환 ===> 서버로 데이터 전송 시 사용
// JSON.stringify(객체명)
const jsonStr = JSON.stringify(user);
console.log(jsonStr);
// => JSON 에서는 키값을 문자열로 작성함!
console.log(typeof jsonStr);    // string
// => 함수는 제외됨! JSON 표준 규격에 포함되지 않으므로 직렬화 시 자동으로 제외됨.
// * JSON 문자열 -> 객체 변환 ===> 서버에서 받아 온 데이터 파싱 시 사용
// JSON.parse(JSON문자열)
const jsonObj = JSON.parse(jsonStr);
console.log(jsonObj);
console.log(jsonObj.name);
console.log(typeof jsonObj);    // object
