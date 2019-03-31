
function openFilter() {
  document.getElementById("myBtnContainer").style.height = "300px";
}

function closeFilter() {
  document.getElementById("myBtnContainer").style.height = "0px";
}

$(function(){
  $.get("data/videos.json", function(videos){
    $.get("tpl/video.tpl.html", function(source){
      var template = Handlebars.compile(source);
      var html = template(videos);
      console.log(html);
      $(".container").append(html);
    });
  });
});
