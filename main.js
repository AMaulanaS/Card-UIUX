
var pages ;
var activePage ;
var menuOpen;
var quantity ;
var meter ;

window.onload = () => {
    pages = document.querySelectorAll(".panel");
    quantity = document.getElementById("quantity");
    meter = document.querySelector(".meter");
    document.querySelector(".loader")
    .classList.add("hide-loader");
   
    activePage = 0;
};

function setPage(n){
    pages[activePage].classList.remove("active");
    pages[activePage].classList.add("hide");
    pages[n].classList.remove("hide");
    pages[n].classList.add("active");
    pages[0].classList.remove("static");
    activePage = n;
    
    // edited by kelvin paul
    meter.style.setProperty("--progress",[0,0.25,0.5,0.75][n])
}

function incQ() {
    var val = parseInt(quantity.value) ;
    val++ ;
    if(val<=10)
        quantity.value=val;
    updatePrice();
}

function decQ() {
    var val = parseInt(quantity.value) ;
    val-- ;
    if(val>=1)
        quantity.value=val;
    updatePrice();
}

function updatePrice(){
    document.getElementById("price").innerText = "₹" + (parseInt(quantity.value)*1699);
    document.getElementById("total").innerText ="₹" + (parseInt(quantity.value)*1699 + 300);
    
}


