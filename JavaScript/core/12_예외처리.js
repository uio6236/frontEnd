/*
    * 예외 처리
    : 실행 중 발생하는 오류를 처리하여 프로그램이 중단되지 않고 지속되도록 하기 위해 사용
    : try / catch / finally, throw
*/
// 에러 발생 시 예외 처리
// -> JSON.parse() 사용 시 올바르지 않은 JSON 문자열을 전달하면 에러가 발생!
try {
    const data = JSON.parse("테스트");  // 에러 발생 지점 (SyntaxError)
    console.log(data);
} catch (error) {
    console.log("에러 발생!!", error.message);
} finally {
    console.log("에러 발생 여부와 상관없이 항상 실행!");
}

// throw 를 사용하여 에러 발생 -> 예외 처리
function divide(n1, n2) {
    if (n2 === 0) {
        throw new Error("0으로 나눌 수 없습니다.");
    }
    return n1 / n2;
}
try {
    console.log(divide(10, 2));
    console.log(divide(10, 0)); // 에러 발생 지점
//    console.log("계산 완료!");
} catch (err) {
    console.log("ERROR::", err.message);
    // console.error(err.message); 빨간색으로 강조하여 콘솔창에 출력!
} finally {
    console.log("계산 완료!");
}
