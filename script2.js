let srbtn = document.querySelector("#search");
let srIcon = document.querySelector("#search_icon");
let menu = document.querySelector(".menuI");
let menuItems = document.querySelector("#controls");
let menubar = document.querySelector("#mn");
let home = document.querySelector(".Home");
gr_ch = document.querySelector("#gr_ch");
sr_ch = document.querySelector("#sr_ch");
sr = document.querySelector(".Sort");
gr = document.querySelector(".Genre");
gri = document.querySelector("#gr_ch");
gnsel = document.querySelector(".Gnsel");
sosel = document.querySelector(".Sosel");
mnbody = document.querySelector(".mnbody");
Playlist = document.querySelector(".play-list");
contact = document.querySelector("#licontact");
Contact_page = document.querySelector(".Contact_page");

srIcon.onclick = function(){

    srbtn.classList.toggle("active");
    menu.classList.toggle("active");
    menuItems.classList.toggle("active");
    menubar.classList.toggle("active");
    
   

}
menubar.addEventListener('click' ,() => {

    srbtn.classList.toggle("active");
    menu.classList.toggle("active");
    menuItems.classList.toggle("active");
    menubar.classList.toggle("active");
    
});
sr_ch.onclick = function(){

    sr.classList.toggle("active");
    gnsel.classList.toggle("active");
    mnbody.classList.toggle("inactive");
}
gr_ch.onclick = function(){

        
    gr.classList.toggle("active");
    sosel.classList.toggle("active");
    mnbody.classList.toggle("inactive");
}
function con(){

    Contact_page.classList.add("active");
    contact.classList.add("active");

}
function uncon(){
    Contact_page.classList.remove("active");
    contact.classList.remove("active");
}