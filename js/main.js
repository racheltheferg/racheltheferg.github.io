$(function() {
  $(".js-thumb").click(function(event) {
    imageToShow = $(event.currentTarget).data("gallery-image");

    $(".js-gallery .item").removeClass("active");
    $(".js-thumb").removeClass("active");
    $(event.currentTarget).addClass("active");
    $(imageToShow).addClass("active");
  });
});
