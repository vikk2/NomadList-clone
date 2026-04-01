const drop_btn = document.getElementById("logo-click-to-dropmenu");
const drop_menu = document.getElementById("drop-menu");
const drop_filter_btn = document.getElementById("drop-down-filter-btn");
const drop_filter = document.getElementById("drop-down-filter");
const plus_red = document.getElementById("plus-red");
const plus_icon = document.getElementById("plus-icon");
const change = document.getElementById("change-btn-context");
const filter_left = document.getElementById("filter-left-bar");
const btn_fiter_left = document.getElementById("filter-open-bar");
const top_container = document.getElementById("top-container");
const filter_right = document.getElementById("filter-right-bar");
const hide_btn = document.getElementById("hide-btn");
const footer = document.getElementById("footer");
const pop_up = document.getElementById("pop-up-compare");
const pop_up_bg = document.getElementById("pop-up-ad-bg");
const pop_up_ad = document.getElementById("pop-up-ad");
const close_filter = document.getElementById("bar-to-close");
const x_symbol = document.getElementById("x-close");
const input_big = document.getElementById("input-big");

drop_btn.addEventListener("click", function (e){

    e.stopPropagation();
    if (drop_menu.style.display === "block") {
        drop_menu.style.display = "none";
    }
    else {
        drop_menu.style.display = "block";
    }
});

document.addEventListener("click", function (){
    drop_menu.style.display = "none";
});


drop_filter_btn.addEventListener("click", function (e){

    e.stopPropagation();
    if (drop_filter.style.display === "flex") {
        plus_icon.style.display = "";
        plus_red.style.display = "";
    }
    else {
        drop_filter.style.display = "flex";
        plus_icon.style.display = "none";
        plus_red.style.display = "none";
    }
});

drop_filter_btn.addEventListener("focus", function(){
    drop_filter_btn.placeholder = "Type to search";
});
drop_filter_btn.addEventListener("blur", function(){
    drop_filter_btn.placeholder = "Search or filter";
});

document.addEventListener("click", function (){
    drop_filter.style.display = "none";
    plus_icon.style.display = "";
    plus_red.style.display = "";
});

change.addEventListener("click", function(){
    change.classList.toggle("change-btn");

    if (change.textContent === "Compare"){
        change.textContent = "Exit compare";
        pop_up.style.display = "block";
    } else{
        change.textContent = "Compare";
        pop_up.style.display = "none";
    }
});


btn_fiter_left.addEventListener("click", function(){

    const hide = window.getComputedStyle(filter_left).display === "none";

    if (hide){
        filter_left.style.display = "block";
        filter_left.style.width = "430px";
        top_container.style.display = "none";
        filter_right.style.marginLeft = "430px";
        btn_fiter_left.textContent = "Close filters";

        if(window.innerWidth <= 500){
            close_filter.style.display = "block";
        }
    } else {
        filter_left.style.display = "none";
        filter_right.style.marginLeft = "0";
        btn_fiter_left.textContent = "Filters";
        
        close_filter.style.display = "none";
    }
});

hide_btn.addEventListener("click", function(){
    footer.style.display = "none";
});

pop_up_bg.addEventListener("click", function(){
    pop_up_bg.style.display = "none";
    pop_up_ad.style.display = "none";
    input_big.style.display = "none";
});

close_filter.addEventListener("click", function(){
    filter_left.style.display = "none";
    close_filter.style.display = "none";
    filter_right.style.marginLeft = "0";
    btn_fiter_left.textContent = "Filters";
});

x_symbol.addEventListener("click", function(){
    e.stopPropagation();
    pop_up_bg.style.display = "none";
    pop_up_ad.style.display = "none";
    input_big.style.display = "none";
})

document.querySelectorAll('.hover-top-right-x').forEach(x => {
    x.addEventListener('click', function(e) {
        e.stopPropagation();
        this.closest('.country-card').style.display = 'none';
    });
});