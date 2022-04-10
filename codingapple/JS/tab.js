// 버튼 0을 누르면
// 1. 모든 버튼에 붙은 pink 클래스명 제거
// 2. 버튼 0에 pink 클래스 명 추가
// 3. 모든 div에 붙은 show 클래스명 제거
// 4. div 0에 show 클래스명 추가

$(".tab-button")
  .eq(0)
  .on("click", function () {
    $(".tab-button").removeClass("pink");
    $(".tab-button").eq(0).addClass("pink");
    $(".tab-content").removeClass("show");
    $(".tab-content").eq(0).addClass("show");
  });
$(".tab-button")
  .eq(1)
  .on("click", function () {
    $(".tab-button").removeClass("pink");
    $(".tab-button").eq(1).addClass("pink");
    $(".tab-content").removeClass("show");
    $(".tab-content").eq(1).addClass("show");
  });

$(".tab-button")
  .eq(2)
  .on("click", function () {
    $(".tab-button").removeClass("pink");
    $(".tab-button").eq(2).addClass("pink");
    $(".tab-content").removeClass("show");
    $(".tab-content").eq(2).addClass("show");
  });
