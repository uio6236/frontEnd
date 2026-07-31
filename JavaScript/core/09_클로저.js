/*
    * 클로저 (Closure)
     : 내부 함수가 외부 함수의 변수를 기억하고 접근할 수 있는 상태
     : 외부 함수의 실행이 종료되어 메모리에서 사라져도,
        내부 함수가 살아있는 한(실행 중) 참조하는 변수는 계속 유지됨
*/
function getCounter() {
    let count = 0;      // private 역할: 외부에서 직접 접근할 수 없는 변수

    function increase() {
        count++;
        return count;
    }

    return increase;
}

const run = getCounter();
// => getCounter 실행 후 increase 함수를 반환
console.log( run() );   // 출력: 1
console.log( run() );   // 출력: 2
// getCounter 실행 후 함수 실행은 종료되었으나, count 변수는 메모리에 유지됨

const run2 = getCounter();
console.log( run2() );  // 출력: 1

// 독립된 렉시컬 환경
//   => getCounter() 호출할 때마다 매번 새로운 렉시컬 환경이 생성되므로
//          run과 run2의 count는 서로 영향을 주지 않음!

// getter, setter 패턴 적용
//  여러 개의 클로저 함수를 객체 형태로 반환하여 인터페이스를 제공
function createStore(init = 0) {
    let value = init;

    return {
        get: () => value,
        set: (v) => { value = v; },
        increase: () => {
            value++;
            return value;
        }
    }
}

const store = createStore(10);
// store -> { get: 함수, set: 함수, increate: 함수 }
console.log( store.get() );     // 10
store.increase();               // value 1 증가
console.log( store.get() );     // 11
store.set(100);                 // value 에 100 저장(변경)
console.log( store.get() );     // 100