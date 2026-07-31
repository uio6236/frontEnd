// 콘솔창에 출력
function btnClick2() {
    console.log("콘솔창 출력 (외부 방식)");
}
// #btn2 인 버튼 클릭 시 알림창 출력
const btn2 = document.querySelector("#btn2");
btn2.onclick = function() {
    alert("알림창 출력 (외부 방식)");
}