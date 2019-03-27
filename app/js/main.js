$(function () {

    var count = 0;

    $(".menu").click(function () {
        $("body").toggleClass("bp");
        count++;
        var section = $(".list");
        if (count % 2 !== 0) { 
            $("body").append(section);
        } else {
            $("header .container").append(section);
        }
        $("header").toggleClass("move");
        $(".hero-image").toggleClass("move");
        $("main").toggleClass("move");
        $("#carousel").toggleClass("move");
        $(".news").toggleClass("move");
        $("footer").toggleClass("move");
        $(".list").toggleClass("dropdown");
        $("nav").toggleClass("bar");
    })

    $.getJSON("https://api.myjson.com/bins/uuogm", function (data) {
        //"../json/carousel.json"
        for (var i = 0; i < data.length; i++) {
            var firstDiv = $("<div class=\"slide\"></div>");
            var image = $("<img src=" + data[i].imgSrc + ">");
            var textName = $("<p class=\"name\"></p>").text(data[i].imgName);
            var textDes = $("<p class=\"des\"></p>").text(data[i].imgDes);

            var secondDiv = $("<div class=\"text\"></div>");
            var text = $(secondDiv).append(textName, textDes)

            var all = $(firstDiv).append(image, text);

            $(".wrapper").append(all);
        }

        $("div div:first").addClass("active");

        $("#carousel .next").on("click", function () {
            var currentSlide = $(".active");
            var nextSlide = $(".active").next();
            var nextBtn = $("#carousel .next");
            var prevBtn = $("#carousel .prev");
            var btn = $(".btnRead");

            if (nextSlide.prev().length !== 0) {
                btn.css("z-index", "2");
            }

            prevBtn.show();
            currentSlide.removeClass("active").hide();
            nextSlide.addClass("active").show();
            if (nextSlide.next().length === 0) {
                nextBtn.hide();
            }
        })

        $("#carousel .prev").on("click", function () {
            var currentSlide = $(".active");
            var prevSlide = $(".active").prev();
            var prevBtn = $("#carousel .prev");
            var nextBtn = $("#carousel .next");
            var btn = $(".btnRead");

            if (prevSlide.prev().length === 0) {
                btn.css("z-index", "1");
            }

            nextBtn.show();
            currentSlide.removeClass("active").hide();
            prevSlide.addClass("active").show();

            if (prevSlide.prev().length === 0) {
                prevBtn.hide();
            }
        })
    });
});
