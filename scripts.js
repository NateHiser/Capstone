
function openFilter() {
  document.getElementById("myBtnContainer").style.height = "300px";
}

function closeFilter() {
  document.getElementById("myBtnContainer").style.height = "0px";
}
$(document).ready(function() {

$(function(){
  $.get("data/videos.json", function(videos) {
      console.log("hello world");
    $.get("tpl/video.tpl.html", function(source){
        console.log("hello world");
      var template = Handlebars.compile(source);
      var html = template(videos);
      console.log("hello world");
      $(".container").append(html);
    });
  });
});
});
