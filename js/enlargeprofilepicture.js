$(function() {
    $(document).on('contextmenu', 'img', function(){
        enlarge($(this));
    });
    $(document).on('mouseover', 'a', function(){
        $(document).on('contextmenu', 'img', function(){
            enlarge($(this));
        });
    });
});

function enlarge(element) {
    $("#enlargedPicture").remove();

    var urlSmall = element.attr("src");

    if (urlSmall.match("img/users") || urlSmall.match("image/")) {
        urlLarge = urlSmall;
        if (urlSmall.match("32x32")) {
            urlLarge = urlSmall.replace("32x32", "1024x1024");
        }
        if (urlSmall.match("48x48")) {
            urlLarge = urlSmall.replace("48x48", "1024x1024");
        }
        if (urlSmall.match("64x64")) {
            urlLarge = urlSmall.replace("64x64", "1024x1024");
        }
        if (urlSmall.match("96x96")) {
            urlLarge = urlSmall.replace("96x96", "1024x1024");
        }
        if (urlSmall.match("128x128")) {
            urlLarge = urlSmall.replace("128x128", "1024x1024");
        }
        if (urlSmall.match("256x256")) {
            urlLarge = urlSmall.replace("256x256", "1024x1024");
        }

        var img = document.createElement("img");
        img.src = urlLarge;
        img.style.position = "fixed";
        img.style.zIndex = "999";
        img.style.top = "20px";
        img.style.height = "90%";
        img.id = "enlargedPicture";
        img.style.left = ((screen.width - 924) / 2) + "px";
        img.style.border = "2px solid black";
        img.onclick = function () {e=document.getElementById("enlargedPicture");e.parentNode.removeChild(e)};
        $("body").append(img);
    }
}