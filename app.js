// we will use an api key from loader.to
// that why we can get an issue when we will click on our Download button
// but i think it's not any big deal
// because if we want to develop our own api or system that will expensive or complex
// but next time we will see that, keep following me

$(".click-btn-down").click(function () {
  var link = $(".link").val();
  var fromate = $(".formte").children("option:selected").val();
  var src = "" + link + "=" + fromate + "";
  downloadVideo(link, fromate);
});
function downloadVideo(link, fromate) {
  $(".download-video").html(
    '<iframe style="width:100%;height:60px;border:0;overflow:hidden;" scrolling="no" src="https://loader.to/api/button/?url=' +
      link +
      "&f=" +
      fromate +
      '"></iframe>'
  );
}
