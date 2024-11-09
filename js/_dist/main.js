var themeChange = document.querySelector("#theme");
var bodyAttr = document.querySelector("body");
var border = document.querySelectorAll(".feature");
themeChange === null || themeChange === void 0 ? void 0 : themeChange.addEventListener("click", function () {
    bodyAttr.dataset.bsTheme =
        (bodyAttr === null || bodyAttr === void 0 ? void 0 : bodyAttr.dataset.bsTheme) == "light" ? "dark" : "light";
    bodyAttr.dataset.bsTheme == "light"
        ? (themeChange.innerHTML = "<i class=\"bi bi-moon-stars\"></i> Dark")
        : (themeChange.innerHTML = "<i class=\"bi bi-brightness-high\"></i> Light");
    border.forEach(function (element) {
        bodyAttr.dataset.bsTheme == "light"
            ? (element.style.border = "1px solid rgba(0, 0, 0, 0.13)")
            : (element.style.border = "1px solid   #858585  ");
    });
});
$(".action").slick({
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 2,
    lazyLoad: "ondemand",
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 767.99,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
});
