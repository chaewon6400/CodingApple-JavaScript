// 버튼 0을 누르면
// 1. 모든 버튼에 붙은 pink 클래스명 제거
// 2. 버튼 0에 pink 클래스 명 추가
// 3. 모든 div에 붙은 show 클래스명 제거
// 4. div 0에 show 클래스명 추가

// for 반복문 쓰는 법
// for (let i = 0; i < 3; i++) {
//   console.log("안녕");
// }

// for (let i = 0; i < $(".tab-button").length; i++) {
//   $(".tab-button")
//     .eq(i)
//     .on("click", function () {
//       // 함수로 축약하기
//       openTap(i);
//     });
// }

// 탭기능 다르게 만들기 -> 이벤트 리스너 1개만 쓰기
$(".list").click(function (e) {
  openTap(e.target.dataset.id);
});

function openTap(i) {
  $(".tab-button").removeClass("pink");
  $(".tab-button").eq(i).addClass("pink");
  $(".tab-content").removeClass("show");
  $(".tab-content").eq(i).addClass("show");
}
