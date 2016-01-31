var find = document.querySelector(".find-us");
var popup = document.querySelector(".write-us");
var cart = document.querySelector(".cart");
var min_map = document.querySelector(".min-map");
var big_map = document.querySelector(".big-map");

if ((find != null) && (min_map != null)) {
    var close_btn_pop = popup.querySelector(".close-btn");
    var close_btn_map = big_map.querySelector(".close-btn");
    find.addEventListener('click', function (event) {
        event.preventDefault();
        popup.classList.add("display-show");

    });
    close_btn_pop.addEventListener("click", function (event) {
        event.preventDefault();
        popup.classList.remove("display-show");


    });
    min_map.addEventListener('click', function (event) {
        event.preventDefault();
        big_map.classList.add("display-show");
    });
    close_btn_map.addEventListener("click", function (event) {
        event.preventDefault();
        big_map.classList.remove("display-show");
    });

}

//function myfunction(element, event) {
//    event.preventDefault();
//    element.classList.remove("display-show");
//}

if (cart != null) {

    var buy = document.querySelectorAll(".pdt-img-btn-buy");
    for (var i = 0; i < buy.length; i++) {
        buy[i].addEventListener("click", function (event) {
            event.preventDefault();
            cart.classList.add("display-show");
        });

    }
    var close_btn_cart = cart.querySelector(".close-btn");
    close_btn_cart.addEventListener("click", function (event) {
        event.preventDefault();
        cart.classList.remove("display-show");
    });
   
}
